var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../utils/HangqingDataFormat.js"),
  i = require("../../../../../../../common/vendor.js"),
  o = {
    inject: { hqBridge: {}, statusBarHeight: { default: 0 } },
    components: {
      LabelBlock: function () {
        return "../../common/LabelBlock.js";
      },
      CommonList: function () {
        return "./CommonList.js";
      },
    },
    props: {
      categorySwitchState: {
        type: Array,
        default: function () {
          return [];
        },
      },
      pageScrollTop: { type: Number, default: 0 },
      isMarketTabbarCeiling: { type: Boolean, default: !1 },
      accoutOpened: { type: Boolean, default: !1 },
      hasButton: { type: String, default: "" },
    },
    data: function () {
      return {
        labelList: ["新股", "新债"],
        selectedLabel: 0,
        stockScrollTop: 0,
        bondScrollTop: 0,
        labelMapping: ["stock", "bond"],
        labelTab: 0,
        isActivated: !1,
        labelScrollReported: [!1, !1],
        detailApi: null,
        isTrading: !1,
        tradeTimer: null,
        env: this.hqBridge.ENV,
      };
    },
    computed: {
      isMp: function () {
        return "mp" === this.hqBridge.ENV;
      },
    },
    watch: {
      pageScrollTop: function (e) {
        this.isActivated &&
          0 !== e &&
          !this.labelScrollReported[this.selectedLabel] &&
          ((this.labelScrollReported[this.selectedLabel] = !0),
          this.hqBridge.report(
            "hq.daxin_calendar_hstab.already_go_public_tab_new_".concat(
              this.labelMapping[this.selectedLabel],
              "_scroll"
            )
          ));
      },
    },
    mounted: function () {
      this.getTradeTime(), this.autoSwitchLabel(), (this.isActivated = !0);
    },
    activated: function () {
      (this.isActivated = !0),
        this.getTradeTime(),
        this.categorySwitchState[3] && this.scrollToPreviousPosition();
    },
    deactivated: function () {
      (this.isActivated = !1), this.recordPreviousPosition(), this.clearTimer();
    },
    methods: {
      handleReachBottom: function () {
        0 === this.selectedLabel
          ? this.$refs.stocklist && this.$refs.stocklist.onLoadMore()
          : this.$refs.bondlist && this.$refs.bondlist.onLoadMore();
      },
      loadFinished: function (e) {
        this.$emit("loadFinished", e);
      },
      updateLabelTab: function (e) {
        var t = this;
        this.recordPreviousPosition(),
          (this.selectedLabel = e),
          this.$nextTick(function () {
            t.scrollToPreviousPosition();
          }),
          this.hqBridge.report(
            "hq.daxin_calendar_hstab.already_go_public_tab_new_".concat(
              this.labelMapping[e],
              "_label_click"
            )
          );
      },
      recordPreviousPosition: function () {
        0 === this.selectedLabel
          ? (this.stockScrollTop = this.pageScrollTop)
          : (this.bondScrollTop = this.pageScrollTop);
      },
      scrollToPreviousPosition: function () {
        this.selectedLabel;
      },
      clearTimer: function () {
        clearTimeout(this.tradeTimer);
      },
      getTradeTime: function () {
        return (
          (i = this),
          null,
          (o = e().mark(function i() {
            var o,
              a = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        t.getMarketState(
                          this.hqBridge,
                          { market: 0 },
                          { needProcess: !0 }
                        )
                      );
                    case 2:
                      if (((e.t0 = e.sent.split("|")), e.t0)) {
                        e.next = 5;
                        break;
                      }
                      e.t0 = [];
                    case 5:
                      (o = e.t0
                        .map(function (e) {
                          return e.split("_");
                        })
                        .filter(function (e) {
                          return "NEWSH" === e[0];
                        })),
                        (this.isTrading =
                          "open" === (null == o ? void 0 : o[0][1])),
                        (this.tradeTimer = setTimeout(function () {
                          a.getTradeTime();
                        }, 3e4));
                    case 7:
                    case "end":
                      return e.stop();
                  }
              },
              i,
              this
            );
          })),
          new Promise(function (e, t) {
            var a = function (e) {
                try {
                  n(o.next(e));
                } catch (e) {
                  t(e);
                }
              },
              s = function (e) {
                try {
                  n(o.throw(e));
                } catch (e) {
                  t(e);
                }
              },
              n = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(a, s);
              };
            n((o = o.apply(i, null)).next());
          })
        );
        var i, o;
      },
      autoSwitchLabel: function () {
        var e;
        if (this.$route && this.$route.query) {
          var t = "bond" === this.$route.query.type ? 1 : 0;
          null == (e = this.$refs.labelBlock) || e.switchLabel(t);
        }
      },
    },
  };
Array ||
  (i.resolveComponent("label-block") + i.resolveComponent("common-list"))();
var a = i._export_sfc(o, [
  [
    "render",
    function (e, t, o, a, s, n) {
      return i.e(
        {
          a: i.sr("labelBlock", "62165471-0"),
          b: i.o(n.updateLabelTab, 3052),
          c: i.p({ labelList: s.labelList, labelTab: s.selectedLabel }),
          d: 0 === s.selectedLabel,
        },
        0 === s.selectedLabel
          ? {
              e: i.sr("stocklist", "62165471-1"),
              f: i.o(n.loadFinished, 3053),
              g: i.p({
                type: "stock",
                isTrading: s.isTrading,
                isLabelSelected: 0 === s.selectedLabel,
                accoutOpened: o.accoutOpened,
                hasButton: o.hasButton,
              }),
            }
          : {},
        { h: 1 === s.selectedLabel },
        1 === s.selectedLabel
          ? {
              i: i.sr("bondlist", "62165471-2"),
              j: i.o(n.loadFinished, 3054),
              k: i.p({
                type: "bond",
                isTrading: s.isTrading,
                isLabelSelected: 1 === s.selectedLabel,
                accoutOpened: o.accoutOpened,
                hasButton: o.hasButton,
              }),
            }
          : {},
        {
          l: i.n(n.isMp ? "already-go-public-wrapper-mp" : ""),
          m: i.n(o.hasButton ? "has-btn" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-62165471"],
]);
wx.createComponent(a);
