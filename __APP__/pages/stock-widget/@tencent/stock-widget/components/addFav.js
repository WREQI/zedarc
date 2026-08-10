var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = function (e, t, n) {
    return new Promise(function (a, d) {
      var i = function (e) {
          try {
            r(n.next(e));
          } catch (e) {
            d(e);
          }
        },
        o = function (e) {
          try {
            r(n.throw(e));
          } catch (e) {
            d(e);
          }
        },
        r = function (e) {
          return e.done ? a(e.value) : Promise.resolve(e.value).then(i, o);
        };
      r((n = n.apply(e, t)).next());
    });
  },
  n = require("../../../../../common/vendor.js"),
  a = require("../api/index.js"),
  d = {
    inject: ["helper"],
    options: { styleIsolation: "shared" },
    props: [
      "market",
      "scode",
      "symbol",
      "stockInfo",
      "type",
      "stockInitailAdded",
      "hideText",
      "appApplyInitailState",
      "smallAddFavIcon",
      "position",
      "pageType",
      "channelNumber",
      "newsId",
      "indexPos",
    ],
    data: function () {
      return { dataReady: !1, added: !1 };
    },
    watch: {
      stockInitailAdded: {
        immediate: !0,
        handler: function (e) {
          (this.helper.env.__APP__ && !this.appApplyInitailState) ||
            isNaN(e) ||
            ((this.added = Boolean(e)), (this.dataReady = !0));
        },
      },
    },
    computed: {
      env: function () {
        var e;
        return (null == (e = this.helper) ? void 0 : e.env) || {};
      },
      isPlate: function () {
        return "9" === this.type;
      },
    },
    created: function () {
      this.judgeAdded();
    },
    methods: {
      checkAppLogin: function () {
        var e = this;
        return new Promise(function (t) {
          e.helper.shy.getUserInfo(function (e) {
            t(e && "none" !== e.type);
          });
        });
      },
      judgeAdded: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            var n,
              a,
              d,
              i,
              o,
              r = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = this.helper),
                        (a = n.env),
                        (d = n.shy),
                        (i = a.__APP__),
                        (o = this.market + this.scode),
                        !i)
                      ) {
                        e.next = 7;
                        break;
                      }
                      return (e.next = 4), this.checkAppLogin();
                    case 4:
                      if (e.sent) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt("return", void (this.dataReady = !0));
                    case 6:
                      d.checkStockExist(o, function (e) {
                        var t = e || {},
                          n = t.exist,
                          a = t.status;
                        (r.dataReady = "success" === a), (r.added = n);
                      });
                    case 7:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      AppToggleAdded: function (e, t) {
        var n = this,
          a = this.helper.shy;
        this.added = t;
        var d = function (e) {
          (e && "fail" !== e.status) || (n.added = !t);
        };
        this.added
          ? a.addStockToGroup(e, void 0, "1", d)
          : a.removeStockFromGroup(e, d);
      },
      toggleAdded: function (d) {
        return t(
          this,
          null,
          e().mark(function t() {
            var i,
              o,
              r,
              c,
              s,
              p,
              h,
              l,
              u = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((i = this.helper),
                        (o = i.env),
                        (r = i.shy),
                        (c = o.__APP__),
                        this.toggleAddFavReport(d),
                        (s = this.market + this.scode),
                        !c)
                      ) {
                        e.next = 13;
                        break;
                      }
                      return (e.next = 6), this.checkAppLogin();
                    case 6:
                      if (!e.sent) {
                        e.next = 10;
                        break;
                      }
                      this.AppToggleAdded(s, d), (e.next = 11);
                      break;
                    case 10:
                      r.login(function (e) {
                        "success" === e.status && u.AppToggleAdded(s, d);
                      });
                    case 11:
                      e.next = 33;
                      break;
                    case 13:
                      return (
                        (e.prev = 13),
                        (e.next = 16),
                        n.StockBridge.privacyAgreement.check()
                      );
                    case 16:
                      e.next = 21;
                      break;
                    case 18:
                      return (
                        (e.prev = 18), (e.t0 = e.catch(13)), e.abrupt("return")
                      );
                    case 21:
                      return (
                        (this.added = d),
                        (e.prev = 22),
                        (p = {
                          timestamp: new Date().getTime(),
                          act: d ? "sa" : "sd",
                          grpid: "unlogingrp1",
                          code: s,
                        }),
                        (h = { seq: encodeURIComponent(JSON.stringify([p])) }),
                        (e.next = 27),
                        a.StockAPiService.queryStockAdd(h, this.helper)
                      );
                    case 27:
                      (l = e.sent) && 0 !== l.code && (this.added = !d),
                        (e.next = 33);
                      break;
                    case 31:
                      (e.prev = 31), (e.t1 = e.catch(22));
                    case 33:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [
                [13, 18],
                [22, 31],
              ]
            );
          })
        );
      },
      reportChannelId: function () {
        var e = this.env,
          t = e.__APP__,
          n = e.__WZQ__,
          a = e.__MP__,
          d = e.__WZQMP__,
          i = e.IS_WZQ_XCX,
          o = e.isBroker,
          r = "";
        return (
          "newsDetail" === this.pageType &&
            (n || o
              ? (r = "Icv00p000l020")
              : t
              ? (r = "IgC00p000m009")
              : d
              ? (r = "Iwp00p000l129")
              : a
              ? (r = "IyX00p000l108")
              : i && (r = "Iwp00p000l109")),
          "newsSubject" === this.pageType &&
            (n || o
              ? (r = "I1g00p000l020")
              : t
              ? (r = "I9500p000m009")
              : a
              ? (r = "Io900p000l108")
              : i && (r = "IlC00p000l109")),
          r
        );
      },
      getReportInfo: function (e) {
        var t,
          n = "".concat(this.market).concat(this.scode),
          a = e.toAdd,
          d = e.channelNumber,
          i = [],
          o = [];
        n && "" !== n && (i.push(n), o.push(a ? 1 : 0));
        var r = this.type;
        return {
          newsid: this.newsId,
          fchannel_id_fm_i: d || this.reportChannelId(),
          stocklist: i.join(","),
          hasaddlist: o.join(","),
          positionlist: "".concat(null != (t = this.indexPos) ? t : 0),
          foperation_purpose: "zixuan",
          type: r,
          stockid: n,
        };
      },
      toggleAddFavReport: function (e) {
        var t = { toAdd: e, channelNumber: this.channelNumber };
        "top" === this.position && this.toggleTopAddFav(t),
          "right" === this.position && this.toggleStockAddFav(t),
          "bottom" === this.position && this.$emit("toggleAddFav", e);
      },
      toggleTopAddFav: function (e) {
        var t = e.toAdd,
          n = this.getReportInfo(e),
          a = "fav_stock_click_" + (t ? "add" : "cancel");
        this.report("".concat(a), n);
      },
      toggleStockAddFav: function (e) {
        var t = this.getReportInfo(e),
          n = "fav_stock_click_" + (e.toAdd ? "add" : "cancel");
        switch (this.type) {
          case "9":
            n = "platestock_".concat(n);
            break;
          case "10":
            n = "bangdan_".concat(n);
            break;
          default:
            n = "module_".concat(n);
        }
        this.report("".concat(n), t);
      },
      report: function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.$emit("report", e, t);
      },
    },
  },
  i = n._export_sfc(d, [
    [
      "render",
      function (e, t, a, d, i, o) {
        return n.e(
          { a: i.dataReady },
          i.dataReady
            ? n.e(
                { b: i.added },
                i.added
                  ? n.e(
                      {
                        c: n.n(a.smallAddFavIcon ? "small-icon" : ""),
                        d: n.n(
                          o.env.__WZQMP__
                            ? "add-fav-blue-icon-xcx"
                            : "add-fav-blue-icon"
                        ),
                        e: n.n(a.smallAddFavIcon ? "small-icon" : ""),
                        f: n.n(
                          o.env.__WZQMP__
                            ? "add-fav-black-icon-xcx"
                            : "add-fav-black-icon"
                        ),
                        g: !a.hideText,
                      },
                      a.hideText
                        ? {}
                        : {
                            h: n.n(
                              o.env.__WZQMP__ ? "add-fav-text-xcx-ytj" : ""
                            ),
                          },
                      {
                        i: n.o(function (e) {
                          return o.toggleAdded(!1);
                        }, 5757),
                      }
                    )
                  : n.e(
                      {
                        j: n.n(a.smallAddFavIcon ? "small-icon" : ""),
                        k: n.n(
                          o.env.__WZQMP__
                            ? a.hideText
                              ? "add-fav-added-icon-xcx"
                              : "add-fav-added-icon-top-xcx"
                            : "add-fav-added-icon"
                        ),
                        l: !a.hideText,
                      },
                      a.hideText
                        ? {}
                        : {
                            m: n.t(o.isPlate ? "板块" : "自选"),
                            n: n.n(o.env.__WZQMP__ ? "add-fav-text-xcx" : ""),
                          },
                      {
                        o: n.o(function (e) {
                          return o.toggleAdded(!0);
                        }, 5758),
                      }
                    )
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-b2339478"],
  ]);
wx.createComponent(i);
