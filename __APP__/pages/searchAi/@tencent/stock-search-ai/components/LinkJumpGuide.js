var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../common/vendor.js"),
  n = require("../../stock-news-sdk/index.js"),
  i = require("../utils/StockBridgeWrapper.js"),
  o = require("../../stock-news-core/utils/market.js"),
  s = require("../hooks/useComponentConfigHooks.js"),
  r = "hasLinkJumpWarningConfirm",
  c = {
    name: "LinkJumpGuide",
    props: {
      show: { type: Boolean, default: !1 },
      allQuoteDocs: { type: Object, default: function () {} },
      theme: { required: !0, type: String },
    },
    setup: function (e) {
      return {
        isHalfScreen: t.inject("isHalfScreen", !1),
        copyToPasteboard: s.useLongPressHooks(e).copyToPasteboard,
        getMarketIcon: o.getMarketIcon,
      };
    },
    data: function () {
      return {
        isMP: !0,
        isHasInnerDocs: !1,
        DocsListRender: [],
        factNormalDocs: [],
        factOuterDocs: [],
        factInnerDocs: [],
        showWarning: !1,
        notifyLeaveConfirm: !0,
        threePartUrl: "",
        copyToast: !1,
        copyToastTimer: null,
        isWzq: !1,
        isClickLeave: !1,
      };
    },
    computed: {
      iconSrc: function () {
        return this.notifyLeaveConfirm
          ? "https://st.gtimg.com/design/c1becf29bd4c54e3469c84cbdb56d859.svg"
          : "https://st.gtimg.com/design/6e5e054eece23556a9a3aee4a1f0d9df.svg";
      },
    },
    watch: {
      $route: {
        handler: function (e, t) {
          "searchAi" === e.name ||
            this.isClickLeave ||
            (this.reset(), this.$emit("link-guide-close"));
        },
        deep: !0,
      },
      show: function (e) {
        if ((this.reset(), e)) {
          var t = this.allQuoteDocs || {},
            n = t.innerDocs,
            i = void 0 === n ? [] : n,
            o = t.outerDocs,
            s = void 0 === o ? [] : o,
            r = t.normalDocs,
            c = void 0 === r ? [] : r,
            a = (t.isMcpAgentMessage, t.dataOriginRef);
          (this.factNormalDocs = c),
            (this.factInnerDocs = i),
            (this.factOuterDocs = s);
          var l = [];
          if (
            (i && i.length > 0
              ? ((l = i), (this.isHasInnerDocs = !0))
              : s && s.length > 0
              ? (l = s)
              : c && c.length > 0 && (l = c),
            a && l && l.length > 0)
          ) {
            var h = a
              .split(",")
              .map(function (e) {
                return parseInt(e.trim()) - 1;
              })
              .filter(function (e) {
                return e >= 0 && e < l.length;
              });
            this.DocsListRender = l.filter(function (e, t) {
              return h.includes(t);
            });
          } else this.DocsListRender = l || [];
        }
      },
    },
    methods: {
      signClickLeave: function () {
        var e = this;
        (this.isClickLeave = !0),
          setTimeout(function () {
            e.isClickLeave = !1;
          }, 100);
      },
      reset: function () {
        (this.DocsListRender = []),
          (this.factNormalDocs = []),
          (this.factOuterDocs = []),
          (this.factInnerDocs = []),
          (this.isHasInnerDocs = !1),
          (this.notifyLeaveConfirm = !0),
          this.copyToastTimer && clearTimeout(this.copyToastTimer),
          (this.copyToastTimer = null),
          (this.copyToast = !1);
      },
      handleBackdropClick: function () {
        this.reset(), this.$emit("link-guide-close");
      },
      handleGuideClose: function () {
        this.reset(), this.$emit("link-guide-close");
      },
      formatStockTime: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        if ("string" != typeof e) return "";
        var t = new Date().getFullYear();
        return Number(e.substring(0, 4) || "") === t ? e.substring(5) : e;
      },
      getStock: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        "string" != typeof e && (e = "");
        var t = ["sz", "sh", "hk", "us"],
          n = e.substring(0, 2).toLocaleLowerCase();
        return {
          stockCode: e.replace(n, ""),
          stockMarket: -1 === t.indexOf(n) ? n : t.indexOf(n),
        };
      },
      checkZXGUrl: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return (
          e.startsWith("https://gu.qq.com/") ||
          e.startsWith("http://gu.qq.com/")
        );
      },
      handleLinkJump: function (e, t) {
        var o, s;
        if (
          (this.signClickLeave(),
          (null == (o = this.factInnerDocs) ? void 0 : o.length) > 0)
        ) {
          i.StockBridge.report("base.ai_search.link_jump_information_click", {
            clickFrom: "Financial",
          });
          var r = this.getStock(e.symbol),
            c = r.stockCode,
            a = r.stockMarket;
          if (this.isHalfScreen && this.isWzq) {
            var l = "https://wzq.tenpay.com/mp/v2/index.html"
              .concat("#/hq/stock/", a, "/")
              .concat(c);
            i.StockBridge.openExtraWebview(l);
          } else
            n.sdk.navigateToStockDetail({
              instance: this,
              stockCode: c,
              stockMarket: a,
              symbol: e.symbol,
            });
        } else
          (null == (s = this.factOuterDocs) ? void 0 : s.length) > 0
            ? (i.StockBridge.report(
                "base.ai_search.link_jump_information_click",
                { clickFrom: "Newlinks" }
              ),
              this.checkZXGUrl(e.reference_url)
                ? this.jumpToNewsDetail(e.reference_url)
                : this.handleThreePartUrl(e.reference_url))
            : (i.StockBridge.report(
                "base.ai_search.link_jump_information_click",
                { clickFrom: "Normal" }
              ),
              this.checkZXGUrl(e.url)
                ? this.jumpToNewsDetail(e.url)
                : this.handleThreePartUrl(e.url));
      },
      jumpToNewsDetail: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          o = e.match(/id=(\w+)/);
        if (o) {
          var s = o[1];
          if (this.isWzq)
            i.StockBridge.openExtraWebview(
              "https://wzq.tenpay.com/mp/v2/index.html#/information/detail?id=".concat(
                s
              )
            );
          else if ("mpweapp" === t.ShellTypeEnum.MPWAI) {
            var r = "/pages/additional/webview/index?url=".concat(
              encodeURIComponent(
                "https://wzq.tenpay.com/mp/v2/index.html#/information/detail?id=".concat(
                  s
                )
              )
            );
            t.wx$1.navigateTo({ url: r });
          } else n.sdk.navigateToNewsDetail({ instance: this, id: s });
        }
      },
      handleThreePartUrl: function () {
        var n,
          o,
          s,
          c =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return (
          (n = this),
          (o = null),
          (s = e().mark(function n() {
            var o;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (i.StockBridge.ENV !== t.EnvTypeEnum.SHY_NATIVE) {
                        e.next = 8;
                        break;
                      }
                      return (e.next = 3), i.StockBridge.getStorageSync(r);
                    case 3:
                      (o = e.sent),
                        "false" === o.data
                          ? i.StockBridge.openExtraWebview(c)
                          : ((this.threePartUrl = c), (this.showWarning = !0)),
                        (e.next = 9);
                      break;
                    case 8:
                      this.handleCopy(c);
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              this
            );
          })),
          new Promise(function (e, t) {
            var i = function e(n) {
                try {
                  c(s.next(n));
                } catch (e) {
                  t(e);
                }
              },
              r = function (e) {
                try {
                  c(s.throw(e));
                } catch (e) {
                  t(e);
                }
              },
              c = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(i, r);
              };
            c((s = s.apply(n, o)).next());
          })
        );
      },
      handleWarningCancel: function () {
        (this.showWarning = !1), (this.notifyLeaveConfirm = !0);
      },
      handleWarningContinue: function () {
        (this.showWarning = !1),
          this.notifyLeaveConfirm ||
            i.StockBridge.setStorage(r, "false", function (e) {}),
          i.StockBridge.openExtraWebview(this.threePartUrl);
      },
      handleCheckBox: function () {
        this.notifyLeaveConfirm = !this.notifyLeaveConfirm;
      },
      handleCopy: function () {
        var e = this,
          n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        try {
          this.isMP
            ? t.wx$1.setClipboardData({
                data: n,
                success: function () {
                  t.wx$1.showToast({
                    title: "已复制链接，请前往浏览器打开",
                    icon: "success",
                    duration: 1500,
                  });
                },
              })
            : (this.copyToPasteboard(n),
              this.copyToastTimer &&
                (clearTimeout(this.copyToastTimer),
                (this.copyToastTimer = null)),
              (this.copyToast = !0),
              (this.copyToastTimer = setTimeout(function () {
                e.copyToast = !1;
              }, 1500)));
        } catch (e) {}
      },
      getLinkimgSrc: function (e) {
        return this.checkZXGUrl(e)
          ? "https://st.gtimg.com/design/d47c0f815bb60c49c799fe0ff174b029.png"
          : "black" === this.theme || "panda" === this.theme
          ? "https://st.gtimg.com/design/408c44bac3d3c5cba8c2188508ab2720.png"
          : "https://st.gtimg.com/design/d34d5eda8e8f939508064cf6e8a956f2.png";
      },
    },
  },
  a = t._export_sfc(c, [
    [
      "render",
      function (e, n, i, o, s, r) {
        return t.e(
          { a: i.show },
          i.show
            ? {
                b: t.o(function () {
                  return (
                    r.handleBackdropClick &&
                    r.handleBackdropClick.apply(r, arguments)
                  );
                }, 3807),
              }
            : {},
          { c: i.show },
          i.show
            ? {
                d: t.o(function () {
                  return (
                    r.handleGuideClose && r.handleGuideClose.apply(r, arguments)
                  );
                }, 3808),
                e: t.f(s.DocsListRender, function (e, n, i) {
                  return t.e(
                    s.isHasInnerDocs
                      ? {
                          a: t.t(e.symbol_name),
                          b: o.getMarketIcon(e.symbol),
                          c: t.t((r.getStock(e.symbol) || {}).stockCode),
                          d: t.t(e.indicator),
                          e: t.t(r.formatStockTime(e.time)),
                          f: t.t(e.index),
                          g: t.n({ "stock-type": s.isHasInnerDocs }),
                        }
                      : s.factOuterDocs && s.factOuterDocs.length > 0
                      ? {
                          h: t.t(e.reference_title),
                          i: r.getLinkimgSrc(e.reference_url),
                          j: t.t(e.reference_source),
                          k: t.t(e.reference_publish_time),
                          l: t.t(e.index),
                          m: t.n({ "stock-type": s.isHasInnerDocs }),
                        }
                      : {
                          n: t.t(e.title),
                          o: r.getLinkimgSrc(e.url),
                          p: t.t(
                            r.checkZXGUrl(e.url) ? "腾讯自选股" : "外部资料"
                          ),
                          q: t.t(e.publish_time),
                          r: t.t(e.index),
                          s: t.n({ "stock-type": s.isHasInnerDocs }),
                        },
                    {
                      t: n,
                      v: t.o(
                        function (t) {
                          return r.handleLinkJump(e, n);
                        },
                        3809,
                        n
                      ),
                    }
                  );
                }),
                f: s.isHasInnerDocs,
                g: s.factOuterDocs && s.factOuterDocs.length > 0,
                h: t.n(s.isWzq ? "wzq" : ""),
              }
            : {},
          { i: t.n("skin-".concat(i.theme)), j: s.copyToast },
          (s.copyToast, {}),
          { k: s.showWarning },
          s.showWarning
            ? {
                l: r.iconSrc,
                m: t.o(function () {
                  return (
                    r.handleCheckBox && r.handleCheckBox.apply(r, arguments)
                  );
                }, 3810),
                n: t.o(function () {
                  return (
                    r.handleWarningCancel &&
                    r.handleWarningCancel.apply(r, arguments)
                  );
                }, 3811),
                o: t.o(function () {
                  return (
                    r.handleWarningContinue &&
                    r.handleWarningContinue.apply(r, arguments)
                  );
                }, 3812),
                p: t.o(function () {}, 3813),
                q: t.n("skin-".concat(i.theme)),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-4ec20f43"],
  ]);
wx.createComponent(a);
