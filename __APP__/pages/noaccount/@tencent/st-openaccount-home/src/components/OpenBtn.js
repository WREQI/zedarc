var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = function (e, t, i) {
    return new Promise(function (n, o) {
      var r = function (e) {
          try {
            d(i.next(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          try {
            d(i.throw(e));
          } catch (e) {
            o(e);
          }
        },
        d = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(r, a);
        };
      d((i = i.apply(e, t)).next());
    });
  },
  i = require("../pages/pro.js"),
  n = require("../../../../../../common/vendor.js"),
  o = {
    NORMAL: "NORMAL",
    CONTINUE: "CONTINUE",
    ZHAOSHANG_INCOME: "ZHAOSHANG_INCOME",
    HUALIN_INCOME: "HUALIN_INCOME",
    ZHONGJIN_INCOME: "ZHONGJIN_INCOME",
    DETAIL: "DETAIL",
    XKLC: "XKLC",
    GZNHG: "GZNHG",
    DXRL: "DXRL",
    DXRL_STOCK: "DXRL_STOCK",
    COOSHE: "CHOOSE",
    CPX: "CPX",
    CHANNEL_PROVIDER: "CHANNEL_PROVIDER",
  },
  r = {
    NORMAL: "",
    CONTINUE: "continue-open-actived",
    ZHAOSHANG_INCOME: "zhaoshang-income",
    HUALIN_INCOME: "hualin-income",
    ZHONGJIN_INCOME: "zhongjin-income",
    DETAIL: "show-detail-actived",
    XKLC: "show-xklc-actived",
    GZNHG: "show-gznhg-actived",
    DXRL: "show-dxrl-actived",
    DXRL_STOCK: "show-dxrl-actived with-stock",
    COOSHE: "show-choose-actived",
    CPX: "show-cpx-actived",
  },
  a = {
    inject: { stockBridge: { default: null } },
    props: {
      routeQuery: {
        type: Object,
        default: function () {
          return {};
        },
      },
      curBrokerItem: { type: Object, required: !0 },
      openBtnText: { type: String, default: "立即开户" },
      hasEnteredOpenProcess: { type: Boolean, required: !0 },
      isShowDetail: { type: Boolean, required: !0 },
      detailInfo: {
        type: Object,
        default: function () {
          return {
            detailCur: "",
            detailZdf: "",
            detailName: "",
            detailFiveZdf: "",
          };
        },
      },
      isShowMultiEntry: { type: Boolean, required: !0 },
      btnImg: { type: String, default: "" },
      ipShow: { type: Boolean, default: !1 },
      oemIpShow: { type: Boolean, default: !1 },
      popText: { type: String, default: "" },
      hasDetailRights: { type: Boolean, default: !0 },
      actChannelProvider: { type: String, default: "" },
      providerBenefitsImage: {
        type: Object,
        default: function () {
          return i.channelProviderImg;
        },
      },
      hideBindEnter: { type: Boolean, default: !1 },
      isLargeScreenWithPc: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        SOURCE_TYPE: o,
        SOURCE_CLASS: r,
        oemIpVisible: !0,
        curBrokerCode: null,
        gznhgZxj: "",
        dxrlZxj: "",
        dxrlNewStockList: "",
        channelProviderImg: i.channelProviderImg,
      };
    },
    computed: {
      awardImage: function () {
        var e = this.actChannelProvider || "default";
        return this.providerBenefitsImage[e];
      },
      isWzq: function () {
        var e =
            "mp" === this.stockBridge.ENV
              ? { IS_WEIXIN: !1, IS_MINA: !1 }
              : n.dist.detect().env,
          t = e.IS_WEIXIN,
          i = e.IS_MINA;
        return t && !i && !1;
      },
      isZxg: function () {
        return (
          "mp" === this.stockBridge.ENV ? { IS_ZXG: !1 } : n.dist.detect().env
        ).IS_ZXG;
      },
      isLite: function () {
        return !1;
      },
      isZJ: function () {
        return (
          this.isWzq || this.isLite, "12800" === String(this.curBrokerCode)
        );
      },
      type: function () {
        return this.isLite
          ? this.changeType()
          : this.actChannelProvider
          ? o.CHANNEL_PROVIDER
          : this.isShowDetail
          ? o.DETAIL
          : ("detail" !== this.routeQuery.from || this.hasDetailRights) &&
            this.routeQuery &&
            this.routeQuery.from &&
            o[this.routeQuery.from.toUpperCase()]
          ? o[this.routeQuery.from.toUpperCase()]
          : this.changeType();
      },
    },
    watch: {
      type: {
        handler: function (e) {
          e === o.GZNHG
            ? this.getGznhgData()
            : (e !== o.DXRL && e !== o.DXRL_STOCK) || this.getDxrlData();
        },
        immediate: !0,
      },
      curBrokerItem: {
        handler: function (e) {
          this.curBrokerCode = e.code;
        },
        immediate: !0,
      },
    },
    methods: {
      changeType: function () {
        return (
          this.isWzq || this.isZxg || this.isLite,
          "10800" === this.curBrokerCode
            ? o.ZHAOSHANG_INCOME
            : (this.isWzq || this.isLite,
              "10100" === this.curBrokerCode
                ? o.HUALIN_INCOME
                : (this.isWzq,
                  "12800" === this.curBrokerCode
                    ? o.ZHONGJIN_INCOME
                    : this.hasEnteredOpenProcess
                    ? o.CONTINUE
                    : o.NORMAL))
        );
      },
      selectDealer: function () {
        this.$emit("selectDealer");
      },
      goToApplyRecords: function () {
        this.$emit("goToApplyRecords");
      },
      goToBind: function () {
        this.$emit("goToBind");
      },
      getGznhgData: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            var n, o;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), i.getGznhg();
                    case 3:
                      (n = e.sent),
                        (o = n.data),
                        (this.gznhgZxj = o && o.highLight && o.highLight.zxj),
                        this.gznhgZxj || (this.routeQuery.from = ""),
                        (e.next = 11);
                      break;
                    case 8:
                      (e.prev = 8),
                        (e.t0 = e.catch(0)),
                        (this.routeQuery.from = "");
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[0, 8]]
            );
          })
        );
      },
      getDxrlData: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            var n, r, a;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), i.getDxrl();
                    case 3:
                      (n = e.sent),
                        (r = n.data),
                        (this.dxrlZxj = r && r.summary && r.summary.avgProfit),
                        this.type === o.DXRL_STOCK &&
                          ((a = r.sgrq.length > 0 ? r.sgrq : r.jjfx),
                          Array.isArray(a) &&
                            (this.dxrlNewStockList = a
                              .slice(0, 3)
                              .map(function (e) {
                                return e.name || "";
                              })
                              .join("、"))),
                        this.dxrlZxj || (this.routeQuery.from = ""),
                        (e.next = 12);
                      break;
                    case 9:
                      (e.prev = 9),
                        (e.t0 = e.catch(0)),
                        (this.routeQuery.from = "");
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[0, 9]]
            );
          })
        );
      },
    },
  },
  d = n._export_sfc(a, [
    [
      "render",
      function (e, t, i, o, r, a) {
        return n.e(
          { a: a.type === r.SOURCE_TYPE.DETAIL && !a.isWzq && !a.isZxg },
          a.type !== r.SOURCE_TYPE.DETAIL || a.isWzq || a.isZxg
            ? {}
            : {
                b: n.t(i.detailInfo.detailName),
                c: n.t(
                  "5日"
                    .concat(
                      i.detailInfo.detailFiveZdf > 0 ? "低" : "高",
                      "点至今"
                    )
                    .concat(i.detailInfo.detailFiveZdf > 0 ? "涨" : "跌", "幅")
                ),
                d: n.t(i.detailInfo.detailCur),
                e: n.t(
                  ""
                    .concat(i.detailInfo.detailZdf > 0 ? "+" : "")
                    .concat(i.detailInfo.detailZdf)
                ),
                f: n.t(
                  ""
                    .concat(i.detailInfo.detailFiveZdf > 0 ? "+" : "")
                    .concat(
                      i.detailInfo.detailFiveZdf &&
                        i.detailInfo.detailFiveZdf.toFixed(2)
                    )
                ),
              },
          { g: a.type === r.SOURCE_TYPE.DETAIL && (a.isWzq || a.isZxg) },
          a.type === r.SOURCE_TYPE.DETAIL && (a.isWzq || a.isZxg)
            ? {
                h: n.t(i.detailInfo.detailName),
                i: n.t(i.detailInfo.fullcode),
                j: n.t(i.detailInfo.detailCur),
                k: n.t(
                  ""
                    .concat(i.detailInfo.detailZdf > 0 ? "+" : "")
                    .concat(i.detailInfo.detailZdf)
                ),
                l: n.t(
                  ""
                    .concat(i.detailInfo.detailFiveZdf > 0 ? "+" : "")
                    .concat(
                      i.detailInfo.detailFiveZdf &&
                        i.detailInfo.detailFiveZdf.toFixed(2)
                    )
                ),
                m: n.t(
                  "5日"
                    .concat(
                      i.detailInfo.detailFiveZdf > 0 ? "低" : "高",
                      "点至今"
                    )
                    .concat(i.detailInfo.detailFiveZdf > 0 ? "涨" : "跌", "幅")
                ),
              }
            : a.type === r.SOURCE_TYPE.CHANNEL_PROVIDER
            ? { o: "url(" + a.awardImage + ")" }
            : a.type === r.SOURCE_TYPE.GZNHG
            ? n.e({ q: r.gznhgZxj }, r.gznhgZxj ? { r: n.t(r.gznhgZxj) } : {})
            : a.type === r.SOURCE_TYPE.DXRL ||
              a.type === r.SOURCE_TYPE.DXRL_STOCK
            ? n.e(
                { t: r.dxrlZxj },
                r.dxrlZxj ? { v: n.t(r.dxrlZxj) } : {},
                { w: r.dxrlNewStockList },
                r.dxrlNewStockList ? { x: n.t(r.dxrlNewStockList) } : {}
              )
            : ((a.type === r.SOURCE_TYPE.ZHAOSHANG_INCOME && a.isWzq) ||
                a.type === r.SOURCE_TYPE.ZHAOSHANG_INCOME ||
                a.type === r.SOURCE_TYPE.XKLC ||
                a.type === r.SOURCE_TYPE.HUALIN_INCOME ||
                a.type === r.SOURCE_TYPE.CPX ||
                a.type === r.SOURCE_TYPE.ZHONGJIN_INCOME ||
                (a.type, r.SOURCE_TYPE.CONTINUE),
              {}),
          {
            n: a.type === r.SOURCE_TYPE.CHANNEL_PROVIDER,
            p: a.type === r.SOURCE_TYPE.GZNHG,
            s:
              a.type === r.SOURCE_TYPE.DXRL ||
              a.type === r.SOURCE_TYPE.DXRL_STOCK,
            y: a.type === r.SOURCE_TYPE.ZHAOSHANG_INCOME && a.isWzq,
            z:
              a.type === r.SOURCE_TYPE.ZHAOSHANG_INCOME ||
              a.type === r.SOURCE_TYPE.XKLC,
            A:
              a.type === r.SOURCE_TYPE.HUALIN_INCOME ||
              a.type === r.SOURCE_TYPE.CPX,
            B: a.type === r.SOURCE_TYPE.ZHONGJIN_INCOME,
            C: a.type === r.SOURCE_TYPE.CONTINUE,
            D: i.ipShow,
          },
          i.ipShow ? { E: n.t(i.popText) } : {},
          { F: i.ipShow },
          (i.ipShow, {}),
          { G: i.oemIpShow && i.popText && r.oemIpVisible },
          i.oemIpShow && i.popText && r.oemIpVisible
            ? {
                H: n.t(i.popText),
                I: n.o(function (e) {
                  return (r.oemIpVisible = !1);
                }, 2390),
              }
            : {},
          {
            J: n.t(i.openBtnText),
            K: n.n(i.hasEnteredOpenProcess ? "cont-btn" : ""),
            L: n.s(
              i.btnImg ? { backgroundImage: "url(".concat(i.btnImg, ")") } : ""
            ),
            M: n.o(function () {
              return a.selectDealer && a.selectDealer.apply(a, arguments);
            }, 2391),
            N: i.ipShow ? 1 : "",
            O: !i.hideBindEnter,
          },
          i.hideBindEnter
            ? {}
            : n.e(
                { P: i.isShowMultiEntry },
                i.isShowMultiEntry
                  ? {
                      Q: n.o(function () {
                        return (
                          a.goToApplyRecords &&
                          a.goToApplyRecords.apply(a, arguments)
                        );
                      }, 2392),
                      R: n.o(function () {
                        return a.goToBind && a.goToBind.apply(a, arguments);
                      }, 2393),
                    }
                  : {
                      S: n.o(function () {
                        return a.goToBind && a.goToBind.apply(a, arguments);
                      }, 2394),
                      T: n.o(function () {
                        return a.goToBind && a.goToBind.apply(a, arguments);
                      }, 2395),
                      U: n.n(a.isLite ? "lite" : ""),
                    }
              ),
          {
            V: n.n(a.isZxg ? "zxg-mode" : ""),
            W: n.n(a.type === r.SOURCE_TYPE.NORMAL ? "" : "has-content"),
            X: n.n(a.isLite ? "lite-mode" : ""),
            Y: n.n(r.SOURCE_CLASS[a.type]),
            Z: n.n(i.hideBindEnter ? "without-login-btn" : ""),
            aa: n.n(a.isZJ ? "zjcf-mode" : ""),
            ab: n.n(i.isLargeScreenWithPc ? "large-screen-mode" : ""),
          }
        );
      },
    ],
    ["__scopeId", "data-v-a8b0f91f"],
  ]);
wx.createComponent(d);
