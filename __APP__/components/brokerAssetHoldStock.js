var e = require("../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  t = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  a = function (e, n, t) {
    return n in e
      ? i(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[n] = t);
  },
  o = require("../common/vendor.js"),
  s = require("../utils/broker/usePluginInfo.js"),
  u = {
    components: {
      Empty: function () {
        return "../pages/indexSbg/@tencent/wzq-union-portfolio/components/Empty.js";
      },
      HuaLin: function () {
        return "./hualin/hold-stock.js";
      },
    },
    props: {
      skin: { type: String, default: "white" },
      currentTabId: { type: String, required: !0 },
      swiperHeight: { type: String, required: !0 },
    },
    setup: function (i) {
      var u,
        l = o.useBrokerInfo(),
        p = l.highestPriorityDealer,
        c = void 0 === p ? {} : p,
        d = l.getBrokerMaintain,
        f = l.isDataFetched,
        b = l.updateAheadInfo,
        h = s.usePluginInfo(c),
        v = o.ref(
          (null == (u = d({ bulletinType: o.BULLETIN_TYPE.TRADE }))
            ? void 0
            : u.isMaintain) || !1
        ),
        y = o.ref(!1);
      function g() {
        var e;
        (v.value =
          null == (e = d({ bulletinType: o.BULLETIN_TYPE.TRADE }))
            ? void 0
            : e.isMaintain),
          v.value || o.usePluginSafebox().processZl(c.value.code);
      }
      return (
        o.watch(
          function () {
            return i.currentTabId;
          },
          function (e) {
            var i = "position" === e;
            y.value !== i && (y.value = i), i && g();
          },
          { immediate: !0 }
        ),
        (function (i, o) {
          for (var s in o || (o = {})) t.call(o, s) && a(i, s, o[s]);
          if (n) {
            var u,
              l = e(n(o));
            try {
              for (l.s(); !(u = l.n()).done; ) {
                s = u.value;
                r.call(o, s) && a(i, s, o[s]);
              }
            } catch (e) {
              l.e(e);
            } finally {
              l.f();
            }
          }
          return i;
        })(
          {
            isMaintain: v,
            isVisible: y,
            tabInfo: {
              autorder: "1",
              autotag: "position",
              display: "1",
              hasYingkui: "0",
              id: "position",
              name: "持仓",
              shareGrpid: "",
              type: "1",
            },
            isDataFetched: f,
            updateAheadInfo: b,
            handleVisible: g,
          },
          h
        )
      );
    },
    onPageShow: function () {
      this.isVisible &&
        (this.handleVisible(), this.isDataFetched && this.updateAheadInfo());
    },
  };
Array || (o.resolveComponent("Empty") + o.resolveComponent("hua-lin"))();
var l = o._export_sfc(u, [
  [
    "render",
    function (e, i, n, t, r, a) {
      return o.e(
        { a: t.isMaintain },
        t.isMaintain
          ? { b: o.p({ text: "券商系统维护，服务暂停使用", skin: n.skin }) }
          : e.isHuaLin
          ? {
              d: o.p({
                visible: t.isVisible,
                "container-height": n.swiperHeight,
                "tab-info": t.tabInfo,
                skin: n.skin,
              }),
            }
          : {},
        { c: e.isHuaLin }
      );
    },
  ],
  ["__scopeId", "data-v-8cb9d476"],
]);
wx.createComponent(l);
