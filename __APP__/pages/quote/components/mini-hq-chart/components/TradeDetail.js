var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, n) {
    return new Promise(function (r, i) {
      var o = function (t) {
          try {
            a(n.next(t));
          } catch (t) {
            i(t);
          }
        },
        s = function (t) {
          try {
            a(n.throw(t));
          } catch (t) {
            i(t);
          }
        },
        a = function (t) {
          return t.done ? r(t.value) : Promise.resolve(t.value).then(o, s);
        };
      a((n = n.apply(t, e)).next());
    });
  },
  n = require("../../../../../common/vendor.js"),
  r = require("../../../@tencent/stock-hq-data/index.js"),
  i = null,
  o = {
    name: "trade-detail",
    props: ["scode", "market"],
    data: function () {
      return {
        list: null,
        start: "",
        hasMore: !0,
        hasMoreShow: !1,
        scrollTop: 0,
      };
    },
    computed: {
      bigFontSize: function () {
        var t = this;
        if (this.list && 0 !== this.list.length) {
          var e = {};
          return (
            this.list.forEach(function (n) {
              e[n.amount] = t.getFontsize(t.bigNumberToText(n.amount, "", 1));
            }),
            e
          );
        }
      },
      fontColor: function () {
        var t = this;
        if (this.list && 0 !== this.list.length) {
          var e = {};
          return (
            this.list.forEach(function (n) {
              e[n.type] = t.getFontColor(n.type);
            }),
            e
          );
        }
      },
    },
    mounted: function () {
      this.refreshData();
    },
    created: function () {
      i ||
        (i = new r.DetailApi(function () {
          for (var t, e = arguments.length, r = new Array(e), i = 0; i < e; i++)
            r[i] = arguments[i];
          return 1 === r.length
            ? n.StockBridge.request(r[0], "GET", {}, { forceCallback: !0 })
            : r[3]
            ? ((r[3].forceCallback = !0),
              (t = n.StockBridge).request.apply(t, r))
            : void 0;
        }));
    },
    beforeUnmount: function () {
      this.timer && clearTimeout(this.timer);
    },
    methods: {
      onScroll: function (t) {
        var e = this;
        (this.scrollTop = t.detail.scrollTop),
          this.scrollTop < 10 &&
            (this.timer && clearTimeout(this.timer),
            (this.timer = setTimeout(function () {
              e.updateData();
            }, 300)));
      },
      onTouchStart: function (t) {
        this.startY = t.touches[0].pageY;
      },
      bigNumberToText: r.utils.bigNumberToText,
      getData: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var r,
              o,
              s,
              a,
              u = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        i.getTradeDetail(
                          {
                            market: this.market,
                            scode: this.scode,
                            start: this.start,
                            openId: "stockfe",
                          },
                          { needProcess: !0 }
                        )
                      );
                    case 2:
                      return (
                        (r = t.sent),
                        (o = r.list),
                        (s = void 0 === o ? [] : o).length > 0 &&
                          ((this.start = s[s.length - 1].id - 1),
                          (this.hasMore = 100 === s.length),
                          (a = n.wx$1.createSelectorQuery())
                            .in(this)
                            .select(".list-details")
                            .boundingClientRect(),
                          a.exec(function (t) {
                            if (t && t[0] && "number" == typeof t[0].height) {
                              var e = t[0].height;
                              n.wx$1
                                .createSelectorQuery()
                                .in(u)
                                .select(".list-item")
                                .boundingClientRect()
                                .exec(function (t) {
                                  t &&
                                    t[0] &&
                                    "number" == typeof t[0].height &&
                                    t[0].height * s.length > e &&
                                    (u.hasMoreShow = !0);
                                });
                            }
                          })),
                        t.abrupt("return", s)
                      );
                    case 7:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      refreshData: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var n,
              r = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        this.$nextTick(function () {
                          var t, e, n;
                          null ==
                            (e =
                              null == (t = r.$refs.listWrapper)
                                ? void 0
                                : t.$el) || e.scrollTo(0, 0),
                            null == (n = r.$refs.listWrapper) ||
                              n.resetStatus();
                        }),
                        (this.start = ""),
                        (t.next = 3),
                        this.getData()
                      );
                    case 3:
                      (n = t.sent), (this.list = n);
                    case 5:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      updateData: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var n, r;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!(this.scrollTop < 100)) {
                        t.next = 6;
                        break;
                      }
                      return (
                        null == (n = this.$refs.listWrapper) || n.resetStatus(),
                        (this.start = ""),
                        (t.next = 4),
                        this.getData()
                      );
                    case 4:
                      (r = t.sent), (this.list = r);
                    case 6:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      onPullingUp: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var n;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!(this.start < 0)) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return", !0);
                    case 2:
                      return (t.next = 4), this.getData();
                    case 4:
                      return (
                        (n = t.sent),
                        t.abrupt(
                          "return",
                          ((this.list = this.list.concat(n)),
                          n && 0 === n.length)
                        )
                      );
                    case 6:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      getFontsize: function (t) {
        return isNaN(t)
          ? (null == t ? void 0 : t.length) > 4
            ? "smallft"
            : ""
          : parseInt(t, 10) >= 9999 && parseInt(t, 10) < 1e5
          ? "smallft"
          : "";
      },
      getFontColor: function (t) {
        return "B" === t ? "red" : "S" === t ? "green" : "gray";
      },
    },
  },
  s = n._export_sfc(o, [
    [
      "render",
      function (t, e, r, i, o, s) {
        return n.e(
          {
            a: n.f(o.list, function (t, e, r) {
              return {
                a: n.t(t.time.slice(0, 5)),
                b: n.t(t.price),
                c: n.t(s.bigNumberToText(t.amount, "", 1)),
                d: n.t(t.type),
                e: n.n(s.fontColor[t.type]),
                f: n.n(s.bigFontSize[t.amount]),
                g: t.id,
              };
            }),
            b: o.list && 0 === o.list.length,
          },
          ((o.list && 0 === o.list.length) || (!o.hasMore && o.hasMoreShow),
          {}),
          {
            c: !o.hasMore && o.hasMoreShow,
            d: n.o(function () {
              return s.onScroll && s.onScroll.apply(s, arguments);
            }, 3694),
            e: n.o(function () {
              return s.onPullingUp && s.onPullingUp.apply(s, arguments);
            }, 3695),
            f: n.o(function () {
              return s.onTouchStart && s.onTouchStart.apply(s, arguments);
            }, 3696),
            g: n.o(function () {}, 3697),
            h: n.o(function () {}, 3698),
          }
        );
      },
    ],
    ["__scopeId", "data-v-22cdb189"],
  ]);
wx.createComponent(s);
