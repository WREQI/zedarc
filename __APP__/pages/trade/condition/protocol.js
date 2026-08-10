var o = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var e = require("../../../common/vendor.js"),
  n = require("../../../config/key.js"),
  r = require("../../../model/trade/conditions/useConditionProtocol.js");
require("../../../service/broker.js");
var i = require("../../../service/aegis/platform/not-wujie.js"),
  l = require("../../../cgi/signProtocol.js"),
  c = require("../../../mixin/platforms/index.js"),
  s = require("../../../config/broker/11100/index.js"),
  a = {
    components: {
      RichTextProtocol: function () {
        return "../../../bizs/protocol/rich-text-protocol/index.js";
      },
      MpRichText: function () {
        return "../../../bizs/protocol/rich-text-protocol/MpRichText.js";
      },
      MpDialog: function () {
        return "../../../common/components/Dialog/Dialog.js";
      },
    },
    mixins: [c.pluginMixins],
    provide: function () {
      return {
        changeProtocolStatus: this.changeProtocolStatus,
        setErrorMessage: this.setErrorMessage,
      };
    },
    setup: function () {
      var o,
        t,
        e =
          (null == (t = null == (o = s.brokerConfig) ? void 0 : o.trade)
            ? void 0
            : t.condProtocolFromBroker) || !1,
        n = r.useConditionProtocol(),
        i = n.protcolContents,
        l = n.fetchData,
        c = n.signProtocol,
        a = n.signable;
      return (
        e && l(),
        {
          condProtocolFromBroker: e,
          protcolContents: i,
          fetchData: l,
          signProtocol: c,
          signable: a,
        }
      );
    },
    data: function () {
      var o, t, e, n;
      return {
        signProtocolNeedRead:
          (null == (t = null == (o = s.brokerConfig) ? void 0 : o.trade)
            ? void 0
            : t.signProtocolNeedRead) || !1,
        protocolUseImage:
          (null == (n = null == (e = s.brokerConfig) ? void 0 : e.trade)
            ? void 0
            : n.condProtocolUseImage) || !1,
        showProtocolTips: !0,
        countDown: 5,
        countDownTimer: null,
        hasScrollToBottom: !1,
        scrollContentHeight: null,
        fallbackTimer: null,
        fallbackEnabled: !1,
        lastScrollReportTime: 0,
      };
    },
    computed: {
      protocolKey: function () {
        return ""
          .concat(s.brokerConfig.base.id, "_conditionorder")
          .toLowerCase();
      },
      getButtonDisabledStatus: function () {
        return (
          !this.fallbackEnabled &&
          (this.countDown > 0 || !this.hasScrollToBottom || !this.signable)
        );
      },
    },
    mounted: function () {
      var o = this;
      (this.countDownTimer = setInterval(function () {
        (o.countDown = o.countDown - 1),
          0 === o.countDown && clearInterval(o.countDownTimer);
      }, 1e3)),
        this.signProtocolNeedRead && this.startFallbackTimer(),
        setTimeout(function () {
          o.scrollContentHeight ||
            e.index
              .createSelectorQuery()
              .in(o)
              .select(".protocol-content")
              .boundingClientRect(function (t) {
                var e = t.height;
                (o.scrollContentHeight = e),
                  i.aegisReporter.reportEvent("PROTOCOL_SCROLL_HEIGHT", {
                    ext3: e,
                  });
              })
              .exec();
        }, 1100);
    },
    beforeDestroy: function () {
      this.countDownTimer && clearInterval(this.countDownTimer),
        this.fallbackTimer && clearTimeout(this.fallbackTimer);
    },
    methods: {
      handleSign: function () {
        var r = this;
        return t(
          o().mark(function t() {
            var i, c, a, u;
            return o().wrap(
              function (o) {
                for (;;)
                  switch ((o.prev = o.next)) {
                    case 0:
                      if (((o.t0 = r.condProtocolFromBroker), !o.t0)) {
                        o.next = 4;
                        break;
                      }
                      return (o.next = 4), r.signProtocol();
                    case 4:
                      if (
                        ((a =
                          (null ==
                          (c = null == (i = s.brokerConfig) ? void 0 : i.trade)
                            ? void 0
                            : c.condProtocolNeedCA) || !1),
                        (u = !r.condProtocolFromBroker && a) ||
                          (e.index.setStorageSync(
                            n.CONDIITON_SIGN_PROTOCOL,
                            !0
                          ),
                          e.index.$emit("condition.protocol.sign")),
                        !u)
                      ) {
                        o.next = 17;
                        break;
                      }
                      return (
                        (o.prev = 6),
                        (o.next = 9),
                        l.signProtocol.signConditionProtocal()
                      );
                    case 9:
                      r.$router.push({ name: "ConditionProtocolCA" }),
                        (o.next = 15);
                      break;
                    case 12:
                      (o.prev = 12),
                        (o.t1 = o.catch(6)),
                        e.index.showToast({
                          title: "协议签署失败，请重试",
                          icon: "none",
                          duration: 2e3,
                        });
                    case 15:
                      o.next = 18;
                      break;
                    case 17:
                      r.$router.back();
                    case 18:
                    case "end":
                      return o.stop();
                  }
              },
              t,
              null,
              [[6, 12]]
            );
          })
        )();
      },
      changeProtocolStatus: function () {},
      setErrorMessage: function () {},
      scrollToBottom: function () {
        e.index.pageScrollTo({
          scrollTop: this.scrollContentHeight,
          duration: 300,
        });
      },
      startFallbackTimer: function () {
        var o = this;
        this.fallbackTimer = setTimeout(function () {
          (o.countDown > 0 || !o.hasScrollToBottom || !o.signable) &&
            o.signable &&
            (o.fallbackEnabled = !0);
        }, 8e3);
      },
    },
    onPageScroll: function (o) {
      var t = Date.now();
      t - this.lastScrollReportTime >= 500 &&
        (i.aegisReporter.reportEvent("PROTOCOL_PAGE_ON_PAGE_SCROLL", {
          ext3: JSON.stringify({
            scrollTop: null == o ? void 0 : o.scrollTop,
            scrollContentHeight: this.scrollContentHeight,
            threshold: this.scrollContentHeight - 800,
            hasScrollToBottom: this.hasScrollToBottom,
            countDown: this.countDown,
            signable: this.signable,
            fallbackEnabled: this.fallbackEnabled,
          }),
        }),
        (this.lastScrollReportTime = t)),
        this.scrollContentHeight &&
        (null == o ? void 0 : o.scrollTop) > this.scrollContentHeight - 800
          ? ((this.showProtocolTips = !1), (this.hasScrollToBottom = !0))
          : (this.showProtocolTips = !0);
    },
  };
Array ||
  (
    e.resolveComponent("mp-rich-text") +
    e.resolveComponent("RichTextProtocol") +
    e.resolveComponent("MpDialog") +
    e.resolveComponent("GlobalWrap")
  )(),
  Math;
var u = e._export_sfc(a, [
  [
    "render",
    function (o, t, n, r, i, l) {
      return e.e(
        {
          a: o.rootFontSize,
          b: r.condProtocolFromBroker && r.protcolContents.length,
        },
        r.condProtocolFromBroker && r.protcolContents.length
          ? {
              c: e.f(r.protcolContents, function (o, t, n) {
                return {
                  a: t,
                  b: "d3f22269-1-" + n + ",d3f22269-0",
                  c: e.p({ content: o }),
                };
              }),
            }
          : { d: e.p({ "protocol-key": l.protocolKey }) },
        { e: i.signProtocolNeedRead && i.showProtocolTips },
        i.signProtocolNeedRead && i.showProtocolTips
          ? {
              f: e.o(function () {
                return l.scrollToBottom && l.scrollToBottom.apply(l, arguments);
              }),
            }
          : {},
        { g: i.signProtocolNeedRead },
        i.signProtocolNeedRead
          ? e.e(
              { h: i.countDown > 0 },
              i.countDown > 0 ? { i: e.t(i.countDown) } : {},
              {
                j: e.n(i.signProtocolNeedRead ? "sign-type" : ""),
                k: l.getButtonDisabledStatus,
                l: e.o(function () {
                  return l.handleSign && l.handleSign.apply(l, arguments);
                }),
              }
            )
          : {
              m: e.o(function () {
                return l.handleSign && l.handleSign.apply(l, arguments);
              }),
            },
        {
          n: e.p({ id: "mp-dialog" }),
          o: e.n(i.signProtocolNeedRead ? "sign-type" : ""),
          p: e.n(i.protocolUseImage ? "use-img" : ""),
          q: e.sr("#global-wrap", "d3f22269-0"),
          r: e.p({
            id: "global-wrap",
            filePath: "/trade/condition/protocol",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-d3f22269"],
]);
wx.createPage(u);
