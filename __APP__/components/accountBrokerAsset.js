var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../common/vendor.js"),
  n = {
    components: {
      ZhaoShang: function () {
        return "./zhaoshang/asset.js";
      },
      HuaLin: function () {
        return "./hualin/asset.js";
      },
      brokerAssetPluginPlaceHolder: function () {
        return "./brokerAssetPluginPlaceHolder.js";
      },
    },
    props: {
      isCurrentBroker: { type: Boolean, default: !1 },
      brokerCode: { type: String, default: "" },
      showMore: { type: Boolean, default: !1 },
      showBrokerBg: { type: Boolean, default: !1 },
      from: { type: String, default: "" },
      defaultTheme: { type: String, default: "" },
    },
    setup: function (n) {
      var o = this,
        a = r.ref(null);
      r.onMounted(function () {
        return (
          (n = o),
          null,
          (t = e().mark(function n() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), r.getPcIsDisabledTrade();
                  case 2:
                    a.value = e.sent;
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, n);
          })),
          new Promise(function (e, r) {
            var o = function (e) {
                try {
                  s(t.next(e));
                } catch (e) {
                  r(e);
                }
              },
              a = function (e) {
                try {
                  s(t.throw(e));
                } catch (e) {
                  r(e);
                }
              },
              s = function (r) {
                return r.done
                  ? e(r.value)
                  : Promise.resolve(r.value).then(o, a);
              };
            s((t = t.apply(n, null)).next());
          })
        );
        var n, t;
      });
      var t = r.reactive({ isZhaoShang: !1, isHuaLin: !1 });
      r.watch(
        function () {
          return [n.brokerCode, a.value];
        },
        function () {
          var e;
          n.brokerCode &&
            null !== a.value &&
            !a.value &&
            ((e = n.brokerCode),
            (t.isZhaoShang = !1),
            (t.isHuaLin = !1),
            e === r.BROKER_CODE.ZHAOSHANG
              ? (t.isZhaoShang = !0)
              : e === r.BROKER_CODE.HUALIN && (t.isHuaLin = !0));
        },
        { immediate: !0 }
      );
      var s = r.inject("cardLoadManager"),
        u = r.computed(function () {
          return s.canRender(r.BROKER_CODE.ZHAOSHANG) && t.isZhaoShang;
        }),
        i = r.computed(function () {
          return s.canRender(r.BROKER_CODE.HUALIN) && t.isHuaLin;
        }),
        l = r.ref(!1);
      return {
        assetFinished: l,
        pluginInfo: t,
        canZhangshangRender: u,
        canHualinRender: i,
        handleAssetFinish: function (e) {
          (l.value = !0),
            s.notifyNextRender(n.brokerCode),
            r.usePluginSafebox().processZl(n.brokerCode);
        },
      };
    },
  };
Array ||
  (
    r.resolveComponent("zhao-shang") +
    r.resolveComponent("hua-lin") +
    r.resolveComponent("brokerAssetPluginPlaceHolder")
  )();
var o = r._export_sfc(n, [
  [
    "render",
    function (e, n, o, a, t, s) {
      return r.e(
        { a: a.canZhangshangRender },
        a.canZhangshangRender
          ? {
              b: r.o(a.handleAssetFinish, 667),
              c: r.p({
                "is-current-broker": o.isCurrentBroker,
                "broker-code": o.brokerCode,
                showMore: o.showMore,
                showBrokerBg: o.showBrokerBg,
                from: o.from,
                defaultTheme: o.defaultTheme,
              }),
            }
          : {},
        { d: a.canHualinRender },
        a.canHualinRender
          ? {
              e: r.o(a.handleAssetFinish, 668),
              f: r.p({
                "is-current-broker": o.isCurrentBroker,
                "broker-code": o.brokerCode,
                showMore: o.showMore,
                showBrokerBg: o.showBrokerBg,
                from: o.from,
                defaultTheme: o.defaultTheme,
              }),
            }
          : {},
        { g: !a.assetFinished },
        (a.assetFinished, {})
      );
    },
  ],
  ["__scopeId", "data-v-54149e55"],
]);
wx.createComponent(o);
