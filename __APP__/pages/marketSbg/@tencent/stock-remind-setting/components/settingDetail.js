require("../../../../../@babel/runtime/helpers/Objectvalues");
var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  i = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  a = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  l = function (t, e, i) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (t[e] = i);
  },
  c = function (t, e) {
    for (var n in e || (e = {})) r.call(e, n) && l(t, n, e[n]);
    if (s) {
      var a,
        o = i(s(e));
      try {
        for (o.s(); !(a = o.n()).done; ) {
          n = a.value;
          u.call(e, n) && l(t, n, e[n]);
        }
      } catch (t) {
        o.e(t);
      } finally {
        o.f();
      }
    }
    return t;
  },
  h = function (t, e) {
    return a(t, o(e));
  },
  d = require("../../../../../common/vendor.js"),
  f = require("../../stock-hq-data/index.js"),
  v = require("../api/index.js"),
  m = require("../mixins/config.js"),
  p = {
    1: "priceUp",
    2: "priceDown",
    3: "zdfUp",
    4: "zdfDown",
    5: "turnover",
    6: "inflow",
    15: "overflowRatioUp",
    16: "overflowRatioDown",
  },
  w = {
    components: {
      settingItem: function () {
        return "./settingItem.js";
      },
      settingEvent: function () {
        return "./settingEvent.js";
      },
      eventItem: function () {
        return "./eventItem.js";
      },
      bubble: function () {
        return "./bubble.js";
      },
    },
    inject: ["hqBridge"],
    props: {
      infosData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      remindConfig: {
        type: Array,
        default: function () {
          return [];
        },
      },
      stockOverView: {
        type: Object,
        default: function () {
          return {};
        },
      },
      zdfMax: { type: Number, default: 0 },
      zdfTagList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      market: { type: String, default: "0" },
      isDebt: { type: Boolean, default: !1 },
      scode: { type: String, default: "" },
      singleTypeMax: { type: Number, default: 0 },
      theme: { type: String, default: "lite" },
      isETF: { type: Boolean, default: !1 },
      showLargeOrder: { type: Boolean, default: !1 },
      isIndex: { type: Boolean, default: !1 },
      isHS: { type: Boolean, default: !1 },
      cjePeak: { type: Number, default: 0 },
      mainInflowPeak: { type: Number, default: 0 },
      hasReady: { type: Boolean, default: !1 },
      showFundNav: { type: Boolean, default: !1 },
      fundNavStatus: { type: Number, default: 0 },
      hasSetRemind: { type: Boolean, default: !1 },
      hasClosedSettings: { type: Boolean, default: !1 },
      showEditTip: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        priceUp: "",
        priceDown: "",
        zdfUp: "",
        zdfDown: "",
        showKeyboard: !1,
        currentfocusKey: "",
        rawData: this.handleRawData(this.infosData),
        eventRemindData: [],
        smartData: {},
        smartParams: {},
        subscribeInfos: [],
        focusPrice: !1,
        focusIsUp: !1,
        flashingIndex: 0,
        isHandlingFocus: !1,
        setHeight: "auto",
        inputComponent: null,
        activeId: "",
        curIndex: -1,
        deleteActiveIndex: "",
        isLongPressing: !1,
        isInitialPrefill: !this.hasSetRemind,
      };
    },
    options: { styleIsolation: "shared" },
    computed: {
      settingEmpty: function () {
        var t = 0 === this.rawData.length && 0 === this.eventRemindData.length;
        return this.$emit("settingEmpty", t), t;
      },
      groupData: function () {
        var t = this.groupByType(this.rawData);
        return Object.values(t || {}) || [];
      },
      showDiagram: function () {
        return this.rawData.some(function (t) {
          return [1, 2].includes(t.type);
        });
      },
      zxj: function () {
        return this.stockOverView && this.stockOverView.dqj;
      },
      zsj: function () {
        return this.stockOverView && this.stockOverView.zsj;
      },
      priceAcc: function () {
        if (!this.zxj) return 2;
        var t = String(this.zxj),
          e = t.indexOf(".");
        return t.substring(e + 1).length;
      },
      symbol: function () {
        return f.utils.getSymbol(this.market, this.scode);
      },
      isWzq: function () {
        return d.StockBridge.ENV === d.EnvTypeEnum.WZQ;
      },
      stockType: function () {
        return this.stockOverView && this.stockOverView.stocktype;
      },
      showEventRemind: function () {
        return (
          ["GP", "GP-A", "GP-A-KCB", "GP-A-CYB"].includes(this.stockType) ||
          this.isETF
        );
      },
      maxUpValue: function () {
        var t = this.rawData.filter(function (t) {
          return (
            1 === (null == t ? void 0 : t.type) &&
            (null == t ? void 0 : t.value) &&
            (null == t ? void 0 : t.chooseOn)
          );
        });
        return 0 === t.length
          ? null
          : this.formatPrice(
              Math.max.apply(
                Math,
                e(
                  t.map(function (t) {
                    return parseFloat(t.value);
                  })
                )
              )
            );
      },
      minDownValue: function () {
        var t = this.rawData.filter(function (t) {
          return (
            2 === (null == t ? void 0 : t.type) &&
            (null == t ? void 0 : t.value) &&
            (null == t ? void 0 : t.chooseOn)
          );
        });
        return 0 === t.length
          ? null
          : this.formatPrice(
              Math.min.apply(
                Math,
                e(
                  t.map(function (t) {
                    return parseFloat(null == t ? void 0 : t.value);
                  })
                )
              )
            );
      },
      isMp: function () {
        return d.StockBridge.ENV === d.EnvTypeEnum.MP;
      },
      showFundNavRemind: function () {
        return this.showFundNav && [0, 1].includes(this.fundNavStatus);
      },
    },
    watch: {
      infosData: function (t) {
        this.rawData = this.handleRawData(t);
      },
      rawData: {
        handler: function (t) {
          (this.setHeight =
            t.length >= 4 || this.showKeyboard
              ? 62 * t.length + (this.showKeyboard ? 800 : 300) + "px"
              : "auto"),
            this.emitActiveRemindStatus();
        },
        deep: !0,
      },
      eventRemindData: {
        handler: function () {
          this.emitActiveRemindStatus();
        },
        deep: !0,
      },
      fundNavStatus: function () {
        this.emitActiveRemindStatus();
      },
      hasSetRemind: function (t) {
        t && (this.isInitialPrefill = !1);
      },
      showKeyboard: function (t) {
        var e, i;
        this.setHeight =
          (null == (e = this.rawData) ? void 0 : e.length) >= 4 || t
            ? 62 * (null == (i = this.rawData) ? void 0 : i.length) +
              (t ? 800 : 300) +
              "px"
            : "auto";
      },
      zxj: function () {
        this.checkAndUpdateInvalidItems();
      },
      zdfMax: function () {
        this.checkAndUpdateInvalidItems();
      },
    },
    beforeDestroy: function () {
      var t;
      (this.rawData.length = 0), null == (t = this.inputComponent) || t.blur();
    },
    methods: {
      toggleAllChooseOn: function (t) {
        var e = this;
        this.rawData.forEach(function (i) {
          t
            ? i.value && e.isValidValue(i.value, i.type) && (i.chooseOn = !0)
            : (i.chooseOn = !1);
        });
      },
      markPrefillConsumed: function () {
        this.isInitialPrefill && (this.isInitialPrefill = !1);
      },
      isAllItemsInvalid: function () {
        var t = this;
        if (
          this.eventRemindData.some(function (t) {
            return 2 != +(null == t ? void 0 : t.open);
          })
        )
          return !1;
        if (this.showFundNav && 2 !== this.fundNavStatus) return !1;
        var e = this.rawData.filter(function (t) {
          return t.value && "" !== t.value;
        });
        return (
          !!e.length &&
          e.every(function (e) {
            return !!t.getIndicatorFontColor(e);
          })
        );
      },
      flashFundNav: function () {
        var t = this;
        (this.flashingIndex = "fundNav"),
          setTimeout(function () {
            t.flashingIndex = -1;
          }, 2e4);
      },
      handleFundNavToggle: function () {
        var t,
          e,
          i = 1 === this.fundNavStatus ? 0 : 1,
          n =
            (null == (e = null == (t = this.infosData) ? void 0 : t.smart)
              ? void 0
              : e.smart_tip) || {};
        this.$emit("handleRemindClick", {
          smart: h(c({}, n), { fund_nav_update: i }),
        }),
          this.remindReport("hq.remindsetting.fund_nav_switch_click", {
            status: 1 === i ? "on" : "off",
          });
      },
      handleFundNavLongPress: function () {
        var t = this;
        (this.isLongPressing = !0),
          (this.deleteActiveIndex = "fundNav"),
          setTimeout(function () {
            t.isLongPressing = !1;
          }, 300);
      },
      handleFundNavDelete: function () {
        var t = this;
        this.deleteActiveIndex = "";
        var e = function () {
          var e, i;
          (t.showKeyboard = !1), (t.activeId = ""), (t.setHeight = "auto");
          var n =
            (null == (i = null == (e = t.infosData) ? void 0 : e.smart)
              ? void 0
              : i.smart_tip) || {};
          t.$emit("handleRemindClick", {
            smart: h(c({}, n), { fund_nav_update: 2 }),
          }),
            t.showToast("已删除提醒"),
            t.remindReport("hq.remindsetting.fund_nav_delete_click");
        };
        d.StockBridge.ENV === d.EnvTypeEnum.MP
          ? d.wx$1.showModal({
              content: "确认删除选中的提醒?",
              cancelText: "取消",
              confirmText: "删除",
              confirmColor: "#E63535",
              success: function (t) {
                t.confirm && e();
              },
            })
          : (d.StockBridge.hideToast(),
            this.$modal.confirm({
              content: "确认删除选中的提醒?",
              confirmBtn: "删除",
              cancelBtn: "取消",
              onConfirm: function () {
                e();
              },
            }));
      },
      handleAddRemindClick: function () {
        this.$emit("addItem"),
          this.remindReport("hq.remindsetting.add_remind_click");
      },
      handleItemLongPress: function (t) {
        var e = this;
        (this.isLongPressing = !0),
          (this.deleteActiveIndex = t),
          setTimeout(function () {
            e.isLongPressing = !1;
          }, 300);
      },
      hideDeleteBubble: function () {
        this.deleteActiveIndex = "";
      },
      handleLongPressDelete: function (t, e) {
        var i = this,
          n = this;
        this.deleteActiveIndex = "";
        var a = function () {
          var a,
            o = t.val,
            s = t.seq,
            r = t.subs_type,
            u = t.type,
            l = !i.hasSetRemind && !s;
          if (
            ((n.showKeyboard = !1),
            (n.activeId = ""),
            (n.setHeight = "auto"),
            l)
          ) {
            n.$nextTick(function () {
              e < n.rawData.length &&
                (n.rawData.splice(e, 1),
                (n.rawData = n.rawData.map(function (t, e) {
                  return h(c({}, t), { index: e });
                })));
            });
            var d = null == (a = n.infosData) ? void 0 : a.subscribe_infos;
            d &&
              Object.keys(d).forEach(function (t) {
                var e = d[t];
                if (Array.isArray(e)) {
                  var i = e.filter(function (t) {
                    return !(+t.subs_type == +u && t.val === o);
                  });
                  0 === i.length
                    ? n.$delete(d, t)
                    : i.length !== e.length && n.$set(d, t, i);
                }
              }),
              n.$emit("prefillItemDeleted", +u),
              n.showToast("已删除提醒");
          } else {
            var f = c({ val: o, seq: s, subs_type: r || u }, !1);
            n.$emit("submitDelete", [f], [], !0),
              n.$nextTick(function () {
                e < n.rawData.length &&
                  (n.rawData.splice(e, 1),
                  (n.rawData = n.rawData.map(function (t, e) {
                    return h(c({}, t), { index: e });
                  })));
              }),
              n.showToast("已删除提醒");
          }
        };
        d.StockBridge.ENV === d.EnvTypeEnum.MP
          ? d.wx$1.showModal({
              content: "确认删除选中的提醒?",
              cancelText: "取消",
              confirmText: "删除",
              confirmColor: "#E63535",
              success: function (t) {
                t.confirm && a();
              },
            })
          : (d.StockBridge.hideToast(),
            this.$modal.confirm({
              content: "确认删除选中的提醒?",
              confirmBtn: "删除",
              cancelBtn: "取消",
              onConfirm: function () {
                a();
              },
            }));
      },
      handleCloseEditTip: function () {
        this.$emit("closeEditTip");
      },
      handleCloseAddTip: function () {
        this.$emit("closeAddTip");
      },
      handlePageClick: function () {
        this.showEditTip && this.handleCloseEditTip(),
          this.showAddTip && this.handleCloseAddTip(),
          this.deleteActiveIndex &&
            !this.isLongPressing &&
            this.hideDeleteBubble();
      },
      emitActiveRemindStatus: function () {
        var t = this.rawData.some(function (t) {
            return null == t ? void 0 : t.chooseOn;
          }),
          e = this.eventRemindData.some(function (t) {
            return 1 == +(null == t ? void 0 : t.open);
          }),
          i = this.showFundNav && 1 === this.fundNavStatus,
          n = t || e || i;
        this.$emit("hasActiveRemind", n);
      },
      addSettingItem: function () {
        var t,
          i,
          n = this,
          a =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          o = arguments.length > 1 ? arguments[1] : void 0,
          s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = a.type;
        if (
          (
            (null == (t = this.rawData)
              ? void 0
              : t.filter(function (t) {
                  return t.type === r;
                })) || []
          ).length >= this.singleTypeMax
        ) {
          var u = "该提醒项已达到".concat(
            this.singleTypeMax,
            "个上限，请删减调整后再试"
          );
          this.showModal(u);
        } else {
          var l = (
              (null == (i = this.rawData)
                ? void 0
                : i.filter(function (t) {
                    return [1, 2].includes(t.type)
                      ? 1 === o
                      : [3, 4].includes(t.type)
                      ? 2 === o
                      : [5, 6].includes(t.type)
                      ? 3 === o
                      : !![15, 16].includes(t.type) && 4 === o;
                  })) || []
            ).length,
            d = "".concat(o, "_").concat(l),
            f = h(c({}, a), { groupIndex: d, value: "", chooseOn: !0 });
          this.rawData = m
            .sortRemindItemsByType([].concat(e(this.rawData), [f]))
            .map(function (t, e) {
              return h(c({}, t), { index: e });
            });
          var v = this.rawData.findIndex(function (t) {
            return t.groupIndex === d;
          });
          this.hasSetRemind ||
            this.hasClosedSettings ||
            s ||
            this.$emit("firstSetRemindWithNewItem", v, f),
            setTimeout(function () {
              n.autoFocus(d, v, !0),
                (n.showKeyboard = !0),
                (n.focusPrice = 1 == +r || 2 == +r),
                (n.focusIsUp = 1 == +r || 3 == +r),
                (n.currentfocusKey = p[r] || "");
            }, 100);
        }
      },
      showModal: function (t) {
        this.$emit("showModal", t);
      },
      showToast: function (t) {
        this.$emit("showToast", t);
      },
      autoBlur: function () {
        var t,
          e,
          i,
          n =
            null ==
            (i =
              null ==
              (e =
                null == (t = this.$refs["inputItem_".concat(this.activeId)])
                  ? void 0
                  : t[0])
                ? void 0
                : e.$refs)
              ? void 0
              : i.customInput;
        null == n || n.blur();
      },
      routeToList: function () {
        d.StockBridge.ENV === d.EnvTypeEnum.MP
          ? d.StockRouter.routeTo({ name: "RemindIndex" })
          : (sessionStorage.setItem("remind_from_list", "1"),
            d.StockBridge.routeTo({
              path: "/remind/index?symbol=".concat(this.symbol),
            })),
          this.remindReport("hq.remindsetting.tolist_click");
      },
      autoFocus: function (t, e) {
        var i = this,
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        try {
          (this.isHandlingFocus = !0),
            this.$nextTick(function () {
              var e,
                a,
                o,
                s =
                  null ==
                  (o =
                    null ==
                    (a =
                      null == (e = i.$refs["inputItem_".concat(t)])
                        ? void 0
                        : e[0])
                      ? void 0
                      : a.$refs)
                    ? void 0
                    : o.customInput;
              (i.inputComponent = s),
                s &&
                  (null == s || s.focus(),
                  n &&
                    ((i.flashingIndex = "inputItem_".concat(t)),
                    setTimeout(function () {
                      i.flashingIndex = -1;
                    }, 2e4)));
            });
        } finally {
          setTimeout(function () {
            (i.isHandlingFocus = !1),
              (i.showKeyboard = !0),
              (i.activeId = t),
              i.autoScrollToView(t, e);
          }, 200);
        }
      },
      isH5DocumentScrollRoot: function (t) {
        return (
          !t ||
          t === (document.scrollingElement || document.documentElement) ||
          t === document.documentElement ||
          t === document.body
        );
      },
      getH5ScrollableAncestor: function (t) {
        for (var e = t.parentElement; e && e !== document.body; ) {
          var i = window.getComputedStyle(e),
            n = i.overflowY,
            a = i.overflow;
          if (
            (/(auto|scroll|overlay)/.test(n) ||
              /(auto|scroll|overlay)/.test(a)) &&
            e.scrollHeight > e.clientHeight + 2
          )
            return e;
          e = e.parentElement;
        }
        return document.scrollingElement || document.documentElement;
      },
      getH5VerticalCenterScrollDelta: function (t, e) {
        var i = t.getBoundingClientRect();
        if (this.isH5DocumentScrollRoot(e)) {
          var n = window.innerHeight || document.documentElement.clientHeight;
          return i.top + i.height / 2 - n / 2;
        }
        var a = e.getBoundingClientRect();
        return i.top + i.height / 2 - (a.top + a.height / 2);
      },
      easeInOutCubic: function (t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      },
      smoothScrollH5RootByDelta: function (t, e, i) {
        var n = this,
          a = Math.max(0, t.scrollHeight - t.clientHeight),
          o = t.scrollTop,
          s = Math.max(0, Math.min(a, o + e)) - o;
        if (!(Math.abs(s) < 1)) {
          this._h5ScrollAnimGen || (this._h5ScrollAnimGen = 0),
            (this._h5ScrollAnimGen += 1);
          var r = this._h5ScrollAnimGen,
            u =
              "undefined" != typeof performance
                ? performance.now()
                : Date.now();
          requestAnimationFrame(function e() {
            if (r === n._h5ScrollAnimGen) {
              var a =
                  ("undefined" != typeof performance
                    ? performance.now()
                    : Date.now()) - u,
                l = Math.min(1, a / i),
                c = n.easeInOutCubic(l);
              (t.scrollTop = o + s * c), l < 1 && requestAnimationFrame(e);
            }
          });
        }
      },
      smoothScrollH5ElementToVerticalCenter: function (t, e) {
        var i = this.getH5ScrollableAncestor(t),
          n = this.getH5VerticalCenterScrollDelta(t, i);
        this.smoothScrollH5RootByDelta(i, n, e);
      },
      scrollH5RowIntoView: function (t, e) {
        var i,
          n = this,
          a = null == (i = this.$refs["inputItem_".concat(t)]) ? void 0 : i[0],
          o = (null == e ? void 0 : e.$el) || (null == a ? void 0 : a.$el);
        if (o && "function" == typeof o.getBoundingClientRect) {
          var s =
            "android" ===
            ("function" == typeof d.StockBridge.getPlatform
              ? d.StockBridge.getPlatform()
              : {}
            ).system;
          this.smoothScrollH5ElementToVerticalCenter(o, 580),
            s &&
              setTimeout(function () {
                if (!n._isDestroyed && o.isConnected) {
                  var t,
                    e = n.getH5ScrollableAncestor(o),
                    i = o.getBoundingClientRect();
                  if (n.isH5DocumentScrollRoot(e)) {
                    var a =
                      window.innerHeight ||
                      document.documentElement.clientHeight;
                    if (a <= 0) return;
                    t = i.top + i.height / 2 - a / 2;
                  } else t = n.getH5VerticalCenterScrollDelta(o, e);
                  Math.abs(t) > 56 &&
                    n.smoothScrollH5ElementToVerticalCenter(o, 450);
                }
              }, 620);
        }
      },
      autoScrollToView: function (t) {
        var e,
          i,
          n,
          a = this,
          o =
            null ==
            (n =
              null ==
              (i =
                null == (e = this.$refs["inputItem_".concat(t)])
                  ? void 0
                  : e[0])
                ? void 0
                : i.$refs)
              ? void 0
              : n.customInput;
        if (o)
          if (d.StockBridge.ENV === d.EnvTypeEnum.MP) {
            var s = (
                (d.wx$1.getWindowInfo && d.wx$1.getWindowInfo()) ||
                d.wx$1.getSystemInfoSync()
              ).windowHeight,
              r = d.wx$1.createSelectorQuery().in(this);
            r.select("#inputItem_".concat(t)).boundingClientRect(),
              r.selectViewport().scrollOffset(),
              r.exec(function (t) {
                if (t && t[0] && t[1]) {
                  var e = t[0],
                    i = t[1],
                    n = e.top + i.scrollTop - s / 2 + e.height / 2;
                  d.wx$1.pageScrollTo({ scrollTop: n, duration: 300 });
                }
              });
          } else
            setTimeout(function () {
              a.scrollH5RowIntoView(t, o);
            }, 200);
      },
      addSettingEventItem: function (t) {
        var e, i;
        null == (i = null == (e = this.$refs) ? void 0 : e.settingEvent) ||
          i.addSettingItem(t);
      },
      updateSmartData: function (t) {
        (this.eventRemindData = t), this.$emit("updateSmartData", t);
      },
      handleRemindClick: function (t, e) {
        if (
          !this.hasSetRemind &&
          !this.hasClosedSettings &&
          1 === e &&
          !this.isDebt
        )
          return (
            (this.smartData[t] = e),
            void this.$emit("firstSetRemind", -1, "event", {
              name: t,
              status: e,
            })
          );
        this.smartData[t] = e;
        var i = { smart: c({}, this.smartData) };
        this.$emit("handleRemindClick", i);
      },
      generateBubbleText: function (t) {
        var e;
        if (this.isDebt || (!parseFloat(this.zxj) && !this.isETF)) return "";
        var i = t.type,
          n = t.value;
        return null ==
          (e =
            this[
              {
                1: "priceUpBubbleText",
                2: "priceDownBubbleText",
                3: "zdfUpBubbleText",
                4: "zdfDownBubbleText",
                5: "cjeBubbleText",
                6: "mainInflowBubbleText",
                15: "overflowRatioUpBubbleText",
                16: "overflowRatioDownBubbleText",
              }[i]
            ])
          ? void 0
          : e.call(this, n);
      },
      priceUpBubbleText: function (t) {
        var e = "";
        if (+t < this.zxj) e = "目标价格不能低于最新价";
        else if (+t === this.zxj) e = "目标价格不能等于最新价";
        else {
          var i = ((+t - this.zxj) / this.zxj) * 100;
          e =
            isNaN(i) || !isFinite(i)
              ? "未上市"
              : "较当前价格上涨".concat(i.toFixed(2), "%");
        }
        return e;
      },
      priceDownBubbleText: function (t) {
        var e = "";
        if (0 == +t) e = "目标价格不能为0";
        else if (+t > this.zxj) e = "目标价格不能高于最新价";
        else if (+t === this.zxj) e = "目标价格不能等于最新价";
        else {
          var i = ((this.zxj - +t) / this.zxj) * 100;
          e =
            isNaN(i) || !isFinite(i)
              ? "未上市"
              : "较当前价格下跌".concat(i.toFixed(2), "%");
        }
        return e;
      },
      zdfUpBubbleText: function (t) {
        return this.zdfMax && +t > this.zdfMax
          ? "日涨幅需要小于".concat(this.zdfMax, "%")
          : "股价涨到".concat(
              (
                (this.isUseZsj() ? this.zsj : this.zxj) *
                (1 + +t / 100)
              ).toFixed(this.priceAcc)
            );
      },
      zdfDownBubbleText: function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this.zdfMax && +t > this.zdfMax
          ? "日跌幅需要小于".concat(this.zdfMax, "%")
          : +t > 100
          ? "日跌幅需要小于100%"
          : "股价跌到".concat(
              (
                (this.isUseZsj() ? this.zsj : this.zxj) *
                (1 - +t / 100)
              ).toFixed(this.priceAcc)
            );
      },
      cjeBubbleText: function () {
        var t,
          e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return (
          e <= 0
            ? (t = "目标成交额需大于0")
            : this.cjePeak && (t = "近五日峰值为".concat(this.cjePeak, "万元")),
          this.cjePeak ? t : ""
        );
      },
      mainInflowBubbleText: function (t) {
        var e;
        return (
          t <= 0
            ? (e = "目标主力资金需大于0")
            : this.mainInflowPeak &&
              (e = "近五日峰值为".concat(
                (this.mainInflowPeak / 1e4).toFixed(2),
                "万元"
              )),
          this.mainInflowPeak ? e : ""
        );
      },
      overflowRatioUpBubbleText: function (t) {
        if (+t <= 0) return "溢折率应大于0";
        if (+t > 500) return "溢折率不能超过500%";
        var e = parseFloat(this.stockOverView && this.stockOverView.yzl);
        return Number.isFinite(e) && +t <= e
          ? "上涨目标值需高于最新值"
          : "溢折率涨到".concat(t, "%");
      },
      overflowRatioDownBubbleText: function (t) {
        if (+t <= 0) return "溢折率应大于0";
        if (+t > 500) return "溢折率不能超过500%";
        var e = parseFloat(this.stockOverView && this.stockOverView.yzl);
        return Number.isFinite(e) && +t >= e
          ? "下跌目标值需低于最新值"
          : "溢折率跌到".concat(t, "%");
      },
      getIndicatorColor: function (t, e) {
        var i = this.zxj,
          n = this.zdfMax,
          a = +e,
          o = "#FF891E",
          s = "rgba(0, 0, 0, 0.60)",
          r = +i;
        if (3 == +t) return n && a > n ? o : s;
        if (4 == +t) return (n && a > n) || a > 100 ? o : s;
        if ((1 == +t && a <= r) || (2 == +t && a >= r)) return o;
        if ([5, 6].includes(t) && a <= 0) return o;
        if ([15, 16].includes(+t)) {
          var u = parseFloat(this.stockOverView && this.stockOverView.yzl),
            l = a <= 0 || a > 500,
            c =
              Number.isFinite(u) &&
              ((15 == +t && a <= u) || (16 == +t && a >= u));
          return l || c ? o : s;
        }
        var h = 1 == +t ? ((a - r) / r) * 100 : ((r - a) / r) * 100;
        return Number.isFinite(h) ? s : o;
      },
      getIndicatorFontColor: function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.value,
          i = t.type;
        return (this.isInitialPrefill && [15, 16].includes(+i)) ||
          "rgba(0, 0, 0, 0.60)" === this.getIndicatorColor(i, e) ||
          (!parseFloat(this.zxj) && [1, 2].includes(i))
          ? ""
          : "#FF891E";
      },
      handleRawData: function () {
        var t,
          e = this,
          i =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = i.subscribe_infos,
          a = void 0 === n ? {} : n,
          o = i.smart,
          s = void 0 === o ? {} : o;
        this.smartData = (null == s ? void 0 : s.smart_tip) || {};
        var r =
            m
              .sortRemindItemsByType(
                (null == (t = Object.values(a || {})) ? void 0 : t.flat()) ||
                  [],
                "subs_type"
              )
              .map(function (t, i) {
                var n = t || {},
                  a = n.notice_type,
                  o = n.alert_time,
                  s = e.remindConfig.find(function (e) {
                    return +e.type == +t.subs_type;
                  });
                if (!s) return null;
                var r = 1 == +a ? !o : 2 == +a && "user_manual_close" !== o,
                  u = t.val || "";
                return (
                  r && u && !e.isValidValue(u, t.subs_type) && (r = !1),
                  h(c(c({}, s), t), { index: i, chooseOn: r, value: u })
                );
              })
              .filter(function (t) {
                var i =
                    "lite" === e.theme &&
                    (5 === (null == t ? void 0 : t.type) ||
                      6 === (null == t ? void 0 : t.type)),
                  n =
                    !e.isETF && [15, 16].includes(null == t ? void 0 : t.type);
                return (
                  (e.isDebt
                    ? 1 === (null == t ? void 0 : t.type)
                    : Boolean(t)) &&
                  !i &&
                  !n
                );
              }) || [],
          u = {};
        return (
          r.forEach(function (t) {
            var e;
            (e = [1, 2].includes(t.type)
              ? 1
              : [3, 4].includes(t.type)
              ? 2
              : [5, 6].includes(t.type)
              ? 3
              : [15, 16].includes(t.type)
              ? 4
              : "other"),
              u[e] || (u[e] = 0),
              (t.groupIndex = "".concat(e, "_").concat(u[e])),
              (u[e] += 1);
          }),
          r
        );
      },
      groupByType: function (t) {
        return t.reduce(function (t, e) {
          var i;
          return (
            t[
              (i = [1, 2].includes(e.type)
                ? 1
                : [3, 4].includes(e.type)
                ? 2
                : [5, 6].includes(e.type)
                ? 3
                : [15, 16].includes(e.type)
                ? 4
                : "other")
            ] || (t[i] = []),
            t[i].push(e),
            t
          );
        }, {});
      },
      getValue: function (t, e) {
        if (Number(t) < 0) return "";
        var i = (t = t.replace(/^0+(\d)/, "$1")).indexOf("."),
          n = [15, 16].includes(+e) ? 2 : this.priceAcc;
        return t.length > 8
          ? t.slice(0, 8)
          : i >= 0
          ? t.substring(0, i) + t.substring(i, i + n + 1)
          : t;
      },
      formatPrice: function (t) {
        return Number(t) <= 0 ? "" : Number(t).toFixed(this.priceAcc);
      },
      handleMinus: function (t) {
        var e = (this.rawData[t] || {}).type,
          i = this.getValue((Number(this.rawData[t].value) - 1).toString(), e);
        this.rawData[t].value = i;
      },
      handlePlus: function (t) {
        var e = (this.rawData[t] || {}).type,
          i = this.getValue((Number(this.rawData[t].value) + 1).toString(), e);
        this.rawData[t].value = i;
      },
      handleInput: function (t, e) {
        var i,
          n = this,
          a = t.detail,
          o = (void 0 === a ? {} : a).value,
          s = (this.rawData[e] || {}).type;
        this.$set(this.rawData[e], "value", o),
          this.$nextTick(function () {
            var t = n.getValue(o, s);
            n.$set(n.rawData[e], "value", t),
              n.$set(n.rawData[e], "showBubble", "" !== t);
          }),
          this.$set(this.rawData[e], "tag", ""),
          this.remindReport("hq.remindsetting.input_edit", {
            type: null == (i = p[s]) ? void 0 : i.toLocaleLowerCase(),
          });
      },
      handleFocus: function (t, e) {
        var i,
          n,
          a = this;
        if (!this.isHandlingFocus) {
          (this.isHandlingFocus = !0), this.markPrefillConsumed();
          try {
            var o = this.rawData[t] || {},
              s = o.type,
              r = o.seq;
            (this.showKeyboard = !0),
              (this.focusPrice = 1 == +s || 2 == +s),
              (this.focusIsUp = 1 == +s || 3 == +s),
              (this.currentfocusKey = p[s] || "");
            var u = this.rawData[t].value;
            this.rawData[t] &&
              (!(null == (i = this.rawData[t]) ? void 0 : i.chooseOn) &&
                "" !== u &&
                this.validateValue(u, s) &&
                ((this.rawData[t].chooseOn = !0),
                this.hasSetRemind || this.hasClosedSettings || this.isDebt
                  ? r &&
                    this.updateSwitch(
                      { subs_type: s, seq: r },
                      !0,
                      null == (n = this.rawData[t]) ? void 0 : n.value
                    )
                  : this.$emit("firstSetRemind", t, "price", this.rawData[t])),
              (this.rawData[t].showBubble = "" !== u)),
              this.remindReport(
                "hq.stock_detail.remind_".concat(
                  this.currentfocusKey.toLocaleLowerCase(),
                  "_input_click"
                )
              ),
              this.$nextTick(function () {
                a.autoScrollToView(e, t);
              });
          } finally {
            setTimeout(function () {
              (a.activeId = e), (a.curIndex = t), (a.isHandlingFocus = !1);
            }, 100);
          }
        }
      },
      handleBlur: function (t, e, i) {
        var n,
          a,
          o,
          s,
          r,
          u,
          l,
          d,
          f,
          v = this,
          m = t.detail,
          p = void 0 === m ? {} : m;
        (this.activeId = ""), (this.curIndex = -1), (this.flashingIndex = -1);
        var w = null != (n = null == p ? void 0 : p.value) ? n : "",
          g = this.rawData[e] || {},
          b = g.type,
          y = g.val,
          x = g.seq,
          D = g.subs_type,
          I = null != (a = null == g ? void 0 : g.value) ? a : "",
          k = "" === w && "" !== I ? I : w,
          T = [1, 2].includes(b) ? this.formatPrice(k) : k;
        (null == (s = null == (o = this.rawData) ? void 0 : o[e])
          ? void 0
          : s.value) &&
          (this.rawData[e].value = null == T ? void 0 : T.replace(/\.$/, "")),
          (this.showKeyboard = !1),
          (this.currentfocusKey = ""),
          "" === T ||
            (null == (u = null == (r = this.rawData) ? void 0 : r[e])
              ? void 0
              : u.chooseOn) ||
            this.handleChoose(e),
          (null == (d = null == (l = this.rawData) ? void 0 : l[e])
            ? void 0
            : d.showBubble) && (this.rawData[e].showBubble = !1);
        var S = this.rawData.some(function (t, i) {
          return +k && i !== e && t.val === k && b === t.type;
        });
        if (!this.isHandlingFocus) {
          if (S)
            return (
              this.showModal("该提醒值重复设置，请修改"),
              void this.autoFocus(i, e)
            );
          if (+k) this.updateRemindData(this.rawData[e], e);
          else {
            var R = !y && !x && !D,
              _ = !this.hasSetRemind && !x;
            if (!R && y)
              if (_) {
                var C =
                  null == (f = this.infosData) ? void 0 : f.subscribe_infos;
                C &&
                  Object.keys(C).forEach(function (t) {
                    var e = C[t];
                    if (Array.isArray(e)) {
                      var i = e.filter(function (t) {
                        return !(+t.subs_type == +b && t.val === y);
                      });
                      0 === i.length
                        ? v.$delete(C, t)
                        : i.length !== e.length && v.$set(C, t, i);
                    }
                  }),
                  this.$emit("prefillItemDeleted", +b);
              } else {
                var B = { val: y, seq: x, subs_type: D };
                this.$emit("submitDelete", [B], [], !0);
              }
            if ((this.rawData[e] && (this.rawData[e].value = ""), this.isDebt))
              return;
            this.$nextTick(function () {
              var t = v.rawData.findIndex(function (t) {
                return t.groupIndex === i;
              });
              t > -1 &&
                (v.rawData.splice(t, 1),
                (v.rawData = v.rawData.map(function (t, e) {
                  return h(c({}, t), { index: e });
                })));
            });
          }
        }
      },
      handleChoose: function (t) {
        var e, i, n, a, o, s, r, u, l, c;
        this.markPrefillConsumed();
        var h = this.rawData[t] || {},
          d = h.type,
          f = h.seq,
          v =
            null == (i = null == (e = this.rawData) ? void 0 : e[t])
              ? void 0
              : i.chooseOn,
          m =
            null == (a = null == (n = this.rawData) ? void 0 : n[t])
              ? void 0
              : a.value;
        if ((!this.isDebt || m) && (v || this.validateValue(m, d))) {
          if (
            !(
              this.hasSetRemind ||
              this.hasClosedSettings ||
              v ||
              this.isDebt ||
              f
            )
          )
            return (
              this.rawData[t] && (this.rawData[t].chooseOn = !0),
              this.$emit("firstSetRemind", t, "price", this.rawData[t]),
              void this.remindReport("hq.remindsetting.switch_click", {
                type: null == (o = p[d]) ? void 0 : o.toLocaleLowerCase(),
                status: "on",
              })
            );
          this.rawData[t] && (this.rawData[t].chooseOn = !v),
            f &&
              this.updateSwitch(
                { seq: f, subs_type: d },
                null == (r = null == (s = this.rawData) ? void 0 : s[t])
                  ? void 0
                  : r.chooseOn
              ),
            this.remindReport("hq.remindsetting.switch_click", {
              type: null == (u = p[d]) ? void 0 : u.toLocaleLowerCase(),
              status: (
                null == (c = null == (l = this.rawData) ? void 0 : l[t])
                  ? void 0
                  : c.chooseOn
              )
                ? "on"
                : "off",
            });
        }
      },
      isValidValue: function (t, e) {
        if (this.isDebt) return !0;
        if (!t || "" === t) return !1;
        var i = +t;
        switch (+e) {
          case 1:
            if (i <= this.zxj) return !1;
            break;
          case 2:
            if (i <= 0) return !1;
            if (this.zxj && i >= this.zxj) return !1;
            break;
          case 3:
            if (this.zdfMax && i > this.zdfMax) return !1;
            if (i < 0) return !1;
            break;
          case 4:
            if (i <= 0) return !1;
            if (this.zdfMax && i > this.zdfMax) return !1;
            if (i > 100) return !1;
            break;
          case 5:
          case 6:
            if (i <= 0) return !1;
            break;
          case 15:
          case 16:
            if (i <= 0 || i > 500) return !1;
        }
        return !0;
      },
      validateValue: function (t, e) {
        if (this.isDebt) return !0;
        var i = +t;
        switch (+e) {
          case 1:
            if (i <= this.zxj)
              return this.showModal("上涨目标价需高于最新价"), !1;
            break;
          case 2:
            if (i <= 0) return this.showModal("下跌目标价需大于0"), !1;
            if (this.zxj && i >= this.zxj)
              return this.showModal("下跌目标价应低于最新价"), !1;
            break;
          case 3:
            if (this.zdfMax && i > this.zdfMax)
              return (
                this.showModal("日涨幅需要小于".concat(this.zdfMax, "%")), !1
              );
            if (i < 0) return this.showModal("日涨幅应大于0"), !1;
            break;
          case 4:
            if (i <= 0) return this.showModal("日跌幅应大于0"), !1;
            if (this.zdfMax && i > this.zdfMax)
              return (
                this.showModal("日跌幅需要小于".concat(this.zdfMax, "%")), !1
              );
            if (i > 100) return this.showModal("日跌幅需要小于100%"), !1;
            break;
          case 5:
            if (i <= 0) return this.showModal("目标成交额需大于 0"), !1;
            break;
          case 6:
            if (i <= 0) return this.showModal("目标主力资金需大于 0"), !1;
            break;
          case 15:
            if (i <= 0) return this.showModal("溢折率应大于0"), !1;
            if (i > 500) return this.showModal("溢折率不能超过500%"), !1;
            var n = parseFloat(this.stockOverView && this.stockOverView.yzl);
            if (Number.isFinite(n) && i <= n)
              return this.showModal("上涨目标值需高于最新值"), !1;
            break;
          case 16:
            if (i <= 0) return this.showModal("溢折率应大于0"), !1;
            if (i > 500) return this.showModal("溢折率不能超过500%"), !1;
            var a = parseFloat(this.stockOverView && this.stockOverView.yzl);
            if (Number.isFinite(a) && i >= a)
              return this.showModal("下跌目标值需低于最新值"), !1;
        }
        return !0;
      },
      checkAndUpdateInvalidItems: function () {
        var t = this;
        this.rawData &&
          0 !== this.rawData.length &&
          this.rawData.forEach(function (e) {
            e.chooseOn &&
              e.value &&
              !t.isValidValue(e.value, e.type) &&
              ((e.chooseOn = !1),
              e.seq && t.updateSwitch({ seq: e.seq, subs_type: e.type }, !1));
          });
      },
      updateSwitch: function (e, i) {
        return (
          (n = this),
          null,
          (a = t().mark(function n() {
            var a;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((a = c({ market: this.market, code: this.scode }, e)),
                        !i)
                      ) {
                        t.next = 13;
                        break;
                      }
                      return (
                        (t.prev = 2),
                        (t.next = 5),
                        v.StockAPiService.OpenStockAlert(
                          a,
                          this.hqBridge.request
                        )
                      );
                    case 5:
                      this.syncSwitchStatusToInfosData(e, !0), (t.next = 11);
                      break;
                    case 8:
                      (t.prev = 8),
                        (t.t0 = t.catch(2)),
                        this.showModal(
                          (null == t.t0 ? void 0 : t.t0.retmsg) ||
                            "提醒开启失败"
                        );
                    case 11:
                      t.next = 22;
                      break;
                    case 13:
                      return (
                        (t.prev = 13),
                        (t.next = 16),
                        v.StockAPiService.CloseStockAlert(
                          a,
                          this.hqBridge.request
                        )
                      );
                    case 16:
                      this.syncSwitchStatusToInfosData(e, !1), (t.next = 22);
                      break;
                    case 19:
                      (t.prev = 19),
                        (t.t1 = t.catch(13)),
                        this.showModal(
                          (null == t.t1 ? void 0 : t.t1.retmsg) ||
                            "提醒关闭失败"
                        );
                    case 22:
                    case "end":
                      return t.stop();
                  }
              },
              n,
              this,
              [
                [2, 8],
                [13, 19],
              ]
            );
          })),
          new Promise(function (t, e) {
            var i = function (t) {
                try {
                  s(a.next(t));
                } catch (t) {
                  e(t);
                }
              },
              o = function (t) {
                try {
                  s(a.throw(t));
                } catch (t) {
                  e(t);
                }
              },
              s = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(i, o);
              };
            s((a = a.apply(n, null)).next());
          })
        );
        var n, a;
      },
      syncSwitchStatusToInfosData: function (t, e) {
        var i,
          n = null == (i = this.infosData) ? void 0 : i.subscribe_infos;
        n &&
          Object.values(n).forEach(function (i) {
            Array.isArray(i) &&
              i.forEach(function (i) {
                (t.seq ? i.seq === t.seq : +i.subs_type == +t.subs_type) &&
                  (e
                    ? delete i.alert_time
                    : (i.alert_time = "user_manual_close"),
                  void 0 !== t.notice_type && (i.notice_type = t.notice_type));
              });
          });
      },
      isUseZsj: function () {
        var t = new Date().getHours();
        return (
          t > 0 &&
          ((("0" == this.market || "1" == this.market) && t < 15) ||
            ("2" == this.market && t < 16))
        );
      },
      handleTagClick: function (t, e, i) {
        var n,
          a = this;
        this.markPrefillConsumed();
        var o = t.inputValue,
          s = (t.tagText, t.id, this.rawData[e].type);
        this.$set(this.rawData[e], "value", o),
          (this[this.currentfocusKey] = o || ""),
          this.$nextTick(function () {
            a.autoFocus(i, e);
          }),
          this.remindReport("hq.remindsetting.input_edit", {
            type: null == (n = p[s]) ? void 0 : n.toLocaleLowerCase(),
          });
      },
      updateRemindData: function (t, e) {
        t && this.$emit("updateRemindData", t, e);
      },
      remindReport: function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.hqBridge.report(t, c({ stockid: this.symbol }, e));
      },
    },
  };
Array ||
  (
    d.resolveComponent("setting-event") +
    d.resolveComponent("bubble") +
    d.resolveComponent("setting-item") +
    d.resolveComponent("event-item")
  )();
var g = d._export_sfc(w, [
  [
    "render",
    function (t, e, i, n, a, o) {
      return d.e(
        { a: !i.isDebt && o.showEventRemind },
        (!i.isDebt && o.showEventRemind, {}),
        { b: !i.isDebt && o.showEventRemind },
        !i.isDebt && o.showEventRemind
          ? {
              c: d.sr("settingEvent", "0b68d459-0"),
              d: d.o(o.updateSmartData, 2247),
              e: d.o(o.handleRemindClick, 2248),
              f: d.p({
                "is-h-s": i.isHS,
                "is-e-t-f": i.isETF,
                "show-large-order": i.showLargeOrder,
                "is-index": i.isIndex,
                "smart-data": a.smartData,
                "show-fund-nav": i.showFundNav,
                theme: i.theme,
                symbol: o.symbol,
              }),
            }
          : {},
        { g: i.showEditTip && a.rawData.length > 0 },
        i.showEditTip && a.rawData.length > 0
          ? {
              h: d.o(o.handleCloseEditTip, 2249),
              i: d.p({ text: "可点击修改", closeable: !0 }),
            }
          : {},
        { j: a.rawData.length > 0 || o.showFundNavRemind },
        a.rawData.length > 0 || o.showFundNavRemind
          ? d.e(
              {
                k: d.f(a.rawData, function (t, e, n) {
                  return {
                    a: d.sr(
                      "inputItem_".concat(t.groupIndex),
                      "0b68d459-2-" + n,
                      { f: 1 }
                    ),
                    b: "inputItem_".concat(t.groupIndex),
                    c: t.groupIndex,
                    d: "inputItem_".concat(t.groupIndex),
                    e: d.n(
                      e !== a.rawData.length - 1 || o.showFundNavRemind
                        ? ""
                        : "last-item"
                    ),
                    f: d.n(
                      a.flashingIndex === "inputItem_".concat(t.groupIndex)
                        ? "flash-highlight"
                        : ""
                    ),
                    g: d.n("inputItem_".concat(t.groupIndex)),
                    h: d.o(
                      function (e) {
                        return o.handleTagClick(e, t.index, t.groupIndex);
                      },
                      2250,
                      t.groupIndex
                    ),
                    i: d.o(
                      function (e) {
                        return o.handleInput(e, t.index);
                      },
                      2251,
                      t.groupIndex
                    ),
                    j: d.o(
                      function (e) {
                        return o.handleMinus(t.index);
                      },
                      2252,
                      t.groupIndex
                    ),
                    k: d.o(
                      function (e) {
                        return o.handlePlus(t.index);
                      },
                      2253,
                      t.groupIndex
                    ),
                    l: d.o(
                      function (e) {
                        return o.handleFocus(t.index, t.groupIndex);
                      },
                      2254,
                      t.groupIndex
                    ),
                    m: d.o(
                      function (e) {
                        return o.handleBlur(e, t.index, t.groupIndex);
                      },
                      2255,
                      t.groupIndex
                    ),
                    n: d.o(
                      function (e) {
                        return o.handleChoose(t.index);
                      },
                      2256,
                      t.groupIndex
                    ),
                    o: d.o(
                      function (e) {
                        return o.handleItemLongPress(t.groupIndex);
                      },
                      2257,
                      t.groupIndex
                    ),
                    p: d.o(
                      function (e) {
                        return o.handleLongPressDelete(t, t.index);
                      },
                      2258,
                      t.groupIndex
                    ),
                    q: "0b68d459-2-" + n,
                    r: d.p({
                      id: "inputItem_".concat(t.groupIndex),
                      label: i.isDebt ? "年化收益率涨到" : t.label,
                      unit: i.isDebt ? "%" : t.unit,
                      placeholder: t.placeholder,
                      "font-color": o.getIndicatorFontColor(t),
                      value: t.value,
                      type: t.type,
                      theme: i.theme,
                      active: a.activeId === t.groupIndex,
                      "delete-active": a.deleteActiveIndex === t.groupIndex,
                      "show-bubble": t.showBubble,
                      "bubble-text": o.generateBubbleText(t),
                      "bubble-color": o.getIndicatorFontColor(t),
                      "choose-on": t.chooseOn,
                      "show-keyboard": a.showKeyboard,
                      zxj: o.zxj,
                      "is-debt": i.isDebt,
                      "focus-is-up": a.focusIsUp,
                      "focus-price": a.focusPrice,
                      "zdf-tag-list": i.zdfTagList,
                      "price-acc": o.priceAcc,
                    }),
                  };
                }),
                l: o.showFundNavRemind,
              },
              o.showFundNavRemind
                ? {
                    m: d.n(
                      "fundNav" === a.flashingIndex ? "flash-highlight" : ""
                    ),
                    n: d.o(o.handleFundNavToggle, 2259),
                    o: d.o(o.handleFundNavLongPress, 2260),
                    p: d.o(o.handleFundNavDelete, 2261),
                    q: d.p({
                      theme: i.theme,
                      "choose-on": 1 === i.fundNavStatus,
                      "delete-active": "fundNav" === a.deleteActiveIndex,
                      label: "净值更新提醒",
                    }),
                  }
                : {}
            )
          : {},
        { r: !i.isDebt },
        i.isDebt
          ? {}
          : d.e(
              {
                s: d.o(function () {
                  return (
                    o.handleAddRemindClick &&
                    o.handleAddRemindClick.apply(o, arguments)
                  );
                }, 2262),
                t: t.showAddTip && 0 === a.rawData.length,
              },
              t.showAddTip && 0 === a.rawData.length
                ? {
                    v: d.o(o.handleCloseAddTip, 2263),
                    w: d.p({
                      text: "点击可添加股价提醒",
                      "arrow-up": !0,
                      closeable: !0,
                    }),
                  }
                : {}
            ),
        {
          x: d.o(function (t) {
            return o.routeToList();
          }, 2264),
          y: "lite" === i.theme,
        },
        (i.theme, {}),
        {
          z: d.n(i.theme),
          A: d.n(a.showKeyboard ? "up" : ""),
          B: d.n(i.isDebt ? "debt" : ""),
          C: d.n(o.isMp ? "mp" : ""),
          D: "".concat(a.showKeyboard ? a.setHeight : "auto"),
          E: d.o(function () {
            return o.handlePageClick && o.handlePageClick.apply(o, arguments);
          }, 2265),
        }
      );
    },
  ],
  ["__scopeId", "data-v-0b68d459"],
]);
wx.createComponent(g);
