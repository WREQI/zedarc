var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../service/market/RelatedStockUtils.js"),
  o = require("../../stock-news-core/utils/routerJump.js"),
  n = require("../../../../../common/vendor.js"),
  r = require("../../stock-news-core/utils/force2https.js"),
  i = require("../../stock-news-core/utils/market.js"),
  c = { IS_CCM_XCX: !1 },
  s = c.IS_CCM_XCX,
  a = c.IS_ZXG,
  d = {
    name: "RelatedStock",
    inject: {
      didAgreeUserAgreement: {
        default: function () {
          return { value: !0 };
        },
      },
      onCheckUserAgreementStatus: {
        default: function () {
          return function () {};
        },
      },
    },
    props: {
      extra_info: {
        type: Object,
        default: function () {
          return { stock_code: "0", stock_name: "三六零", chg_percent: "10.3" };
        },
      },
      newsId: { type: String, default: "" },
      reportData: {
        type: Object,
        default: function () {
          return {
            prefix: { type: String, default: "" },
            fchannel_id_fm_i: { type: String, default: "" },
          };
        },
      },
      brow_y_offset: { type: String, default: "-70px" },
      enableSkinChange: { type: Boolean, default: !0 },
    },
    data: function () {
      return { isPortFolioAdded: !1 };
    },
    computed: {
      zxgXcxType: function () {
        return !0;
      },
    },
    created: function () {
      var t = this;
      (this.isPortFolioAdded =
        e.RelatedStockUtils.getInstance().isStockInPortfolio(
          this.getStockCode()
        )),
        (this.relatedStockChangeListener = function (e) {
          t.isPortFolioAdded = 1 === e[t.getStockCode()];
        }),
        n.StockBridge.busOn(
          "news-RelatedStockChange",
          this.relatedStockChangeListener
        );
    },
    beforeDestroy: function () {
      n.StockBridge.busOff(
        "news-RelatedStockChange",
        this.relatedStockChangeListener
      );
    },
    methods: {
      getVisibleSetting: function () {
        return {
          callback: function (t) {},
          once: !0,
          intersection: { threshold: 0.5, rootMargin: this.brow_y_offset },
        };
      },
      reportBrow: function () {
        var t = this.getStockReportDic();
        n.StockBridge.report(
          "".concat(this.reportData.prefix, ".related_stock_brow"),
          t
        );
      },
      getStockReportDic: function () {
        return {
          fchannel_id_fm_i: this.reportData.fchannel_id_fm_i,
          newsid: this.newsId,
          stocklist: this.getStockCode(),
          positionlist: "0",
          hasaddlist: this.isPortFolioAdded ? "1" : "0",
          foperation_purpose: "zixuan",
        };
      },
      getStockCode: function () {
        var t;
        return null == (t = this.extra_info) ? void 0 : t.stock_code;
      },
      getStockName: function () {
        return this.extra_info.stock_name;
      },
      getStockChange: function () {
        return this.extra_info.chg_percent;
      },
      getStockIcon: function () {
        return r.forceHttpsAdvanced(i.getMarketIcon(this.getStockCode()) || "");
      },
      getStockChangeColor: function () {
        var t = this.getStockChange();
        return t > 0 ? "red" : t < 0 ? "green" : "stop";
      },
      getStockChangeText: function () {
        var t = this.getStockChange();
        return t > 0 ? "+".concat(t, "%") : t < 0 ? "".concat(t, "%") : "0.00%";
      },
      getStockType: function () {
        return this.getStockCode().substr(0, 2).toUpperCase();
      },
      isHaveData: function () {
        var t, e;
        return (
          (null == (e = null == (t = this.extra_info) ? void 0 : t.stock_name)
            ? void 0
            : e.length) > 0
        );
      },
      checkAppLogin: function () {
        return new Promise(function (t) {
          shy.getUserInfo(function (e) {
            t(e && "none" !== e.type);
          });
        });
      },
      addStockToZixuan: function () {
        return (
          (o = this),
          null,
          (r = t().mark(function () {
            var o,
              r,
              i,
              c = this;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        (null == (o = this.didAgreeUserAgreement)
                          ? void 0
                          : o.value) ||
                        "function" != typeof this.onCheckUserAgreementStatus
                      ) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        void this.onCheckUserAgreementStatus()
                      );
                    case 2:
                      if (((t.t0 = a), !t.t0)) {
                        t.next = 7;
                        break;
                      }
                      return (t.next = 6), this.checkAppLogin();
                    case 6:
                      t.t0 = !t.sent;
                    case 7:
                      if (!t.t0) {
                        t.next = 9;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        void shy.login(function (t) {
                          "success" === t.status && c.addStockToZixuan();
                        })
                      );
                    case 9:
                      !this.isPortFolioAdded &&
                        s &&
                        n.StockBridge.busEmit("common-follow-modal-show", {
                          stat: "OyM00p000k011",
                          type: "qrcode",
                          qrcodeImg:
                            "https://st.gtimg.com/design/5a69781847d1ee3faa2deb232b6bad7f.png",
                        }),
                        (r = !this.isPortFolioAdded),
                        e.RelatedStockUtils.getInstance().requestStockToAdd(
                          r,
                          this.getStockCode()
                        ),
                        (i = "".concat(
                          this.reportData.prefix,
                          ".related_stock_add"
                        )),
                        r ||
                          (i = "".concat(
                            this.reportData.prefix,
                            ".related_stock_cancel"
                          )),
                        n.StockBridge.report(i, {
                          fchannel_id_fm_i: this.reportData.fchannel_id_fm_i,
                          newsid: this.newsId,
                          stocklist: this.getStockCode(),
                          stockid: this.getStockCode(),
                          hasaddlist: r ? "1" : "0",
                          foperation_purpose: "zixuan",
                        });
                    case 14:
                    case "end":
                      return t.stop();
                  }
              },
              i,
              this
            );
          })),
          new Promise(function (t, e) {
            var n = function (t) {
                try {
                  c(r.next(t));
                } catch (t) {
                  e(t);
                }
              },
              i = function (t) {
                try {
                  c(r.throw(t));
                } catch (t) {
                  e(t);
                }
              },
              c = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(n, i);
              };
            c((r = r.apply(o, null)).next());
          })
        );
        var o, r;
      },
      jumpToStockDetail: function () {
        var t = {
          fchannel_id_fm_i: this.reportData.fchannel_id_fm_i,
          newsid: this.newsId,
          stocklist: this.getStockCode(),
          stockid: this.getStockCode(),
          hasaddlist: this.isPortFolioAdded ? "1" : "0",
        };
        o.routerJump.gotoDetail(t),
          n.StockBridge.report(
            "".concat(this.reportData.prefix, ".relate_stock_click"),
            t
          );
      },
    },
  },
  u = n._export_sfc(d, [
    [
      "render",
      function (t, e, o, r, i, c) {
        return n.e(
          { a: c.isHaveData() },
          c.isHaveData()
            ? n.e(
                { b: c.getStockType() },
                c.getStockType()
                  ? { c: "url(".concat(c.getStockIcon(), ")") }
                  : {},
                {
                  d: n.t(c.getStockName()),
                  e: n.t(c.getStockChangeText()),
                  f: n.n(c.getStockChangeColor()),
                  g: i.isPortFolioAdded,
                },
                (i.isPortFolioAdded, {}),
                {
                  h: n.n(c.zxgXcxType ? "zxg-xcx-add" : ""),
                  i: n.o(function (t) {
                    return c.addStockToZixuan();
                  }, 4227),
                  j: n.n(o.enableSkinChange ? "skin-change" : ""),
                  k: n.o(function (t) {
                    return c.jumpToStockDetail();
                  }, 4228),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-de3dcdfe"],
  ]);
wx.createComponent(u);
