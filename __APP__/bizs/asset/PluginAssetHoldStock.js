require("../../app.js");
var e = require("../../common/vendor.js"),
  n = require("../../model/index/useAssetPortfolio.js"),
  t = require("../../model/index/usePluginNeedPwd.js"),
  o = require("../../config/event.js"),
  i = require("../../model/index/useAsset.js"),
  r = require("../../service/connect/maps.js"),
  u = !1,
  s = {
    behaviors: ["wx://component-export"],
    sharedComponents: !0,
    export: function () {
      return {};
    },
    components: {
      PluginAssetComponentWrap: function () {
        return "./PluginAssetComponentWrap.js";
      },
    },
    props: {
      visible: { type: Boolean, default: !1 },
      containerHeight: { type: String, required: !0 },
      tabInfo: { type: Object, required: !0 },
      skin: { type: String, default: "white" },
    },
    setup: function (s) {
      var a = e.getCurrentInstance().proxy,
        c = e.ref(!0),
        p = i.useAsset(),
        l = n.useAssetPortfolio(p),
        d = l.fetchAssetInfo,
        f = l.holdList,
        m = l.emptyHold,
        P = l.stopWebsocket,
        h = t.usePluginNeedPwd().needPwd,
        v = e.ref(null),
        w = e.computed(function () {
          return c.value && s.visible;
        }),
        g = !1;
      function S() {
        a.$emit("showPwdPopup"), e.index.$emit(o.PLUGIN_SHOW_PWD, !0);
      }
      function y() {
        var e;
        r.handleMapsBeforeConnect("PluginAssetData"),
          d(),
          g || (null == (e = v.value) || e.reportPage(), (g = !0));
      }
      function x() {
        P(), e.index.$emit(o.PLUGIN_SHOW_PWD, !1);
      }
      return (
        e.watch(
          function () {
            return h.value;
          },
          function (e) {
            e || d({ reqWebscoket: w.value });
          }
        ),
        e.watch(
          function () {
            return w.value;
          },
          function (e) {
            e ? y() : x();
          },
          { immediate: !0 }
        ),
        e.index.$on(o.PLUGIN_NEED_PWD, function (e) {
          e && w.value && S();
        }),
        e.onPageShow(function () {
          c.value = !0;
        }),
        e.onPageHide(function () {
          (c.value = !1), e.index.$emit(o.PLUGIN_SHOW_PWD, !1);
        }),
        {
          isPageShow: c,
          isVisible: w,
          needPwd: h,
          checkPwd: S,
          pluginAssetComWrapRef: v,
          holdList: f,
          emptyHold: m,
          onRefresh: function () {
            u ||
              ((u = !0),
              d(),
              setTimeout(function () {
                u = !1;
              }, 1500));
          },
          onSortList: function (e) {
            p.setSortType(e), (f.value = p.sortStockList(f.value, e));
          },
          handleShow: y,
          handleHide: x,
          onJumpStockDetail: function (e) {
            a.$emit("jumpStockDetail", e);
          },
        }
      );
    },
  };
Array ||
  (
    e.resolveComponent("Empty") +
    e.resolveComponent("plugin-asset-component-wrap")
  )(),
  Math;
var a = e._export_sfc(s, [
  [
    "render",
    function (n, t, o, i, r, u) {
      return e.e(
        { a: i.needPwd },
        i.needPwd
          ? {
              b: e.o(function () {
                return i.checkPwd && i.checkPwd.apply(i, arguments);
              }),
              c: e.p({ text: "查看账户，请输入交易密码" }),
            }
          : i.emptyHold
          ? { e: e.p({ text: "未持有股票" }) }
          : {
              f: i.holdList,
              g: o.containerHeight,
              h: i.isVisible,
              i: o.tabInfo,
              j: o.skin,
              k: e.o(function () {
                return i.onRefresh && i.onRefresh.apply(i, arguments);
              }),
              l: e.o(function () {
                return i.onSortList && i.onSortList.apply(i, arguments);
              }),
              m: e.o(function () {
                return (
                  i.onJumpStockDetail && i.onJumpStockDetail.apply(i, arguments)
                );
              }),
            },
        { d: i.emptyHold, n: e.sr("pluginAssetComWrapRef", "a3c078ac-0") }
      );
    },
  ],
  ["__scopeId", "data-v-a3c078ac"],
]);
wx.createComponent(a);
