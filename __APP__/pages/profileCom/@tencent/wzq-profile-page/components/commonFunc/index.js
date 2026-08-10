var e = require("../../../../../../common/vendor.js"),
  t = require("../../hooks/useJumpDetail.js"),
  n = require("../../../stock-base/visibilityObserver/index.js"),
  i = {
    components: {
      textRedPoint: function () {
        return "./textRedPoint.js";
      },
    },
    props: {
      list: { type: Array, required: !0 },
      title: { type: String, default: "我的服务" },
      commonFuncDesc: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isDataFetch: { type: Boolean, default: !1 },
      redPointRight: {
        type: Object,
        default: function () {
          return {};
        },
      },
      premoteMixin: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (i, o) {
      var r = o.emit,
        c = e.getCurrentInstance().proxy || e.getCurrentInstance(),
        a = e.computed(function () {
          var t;
          return (
            "agree" ===
            (null == (t = e.StockBridge.store) ? void 0 : t.protocolStatus)
          );
        }),
        d = t.useJumpDetail().jumpDetail,
        l = new Map(),
        u = new Set();
      return (
        e.onMounted(function () {
          i.list.forEach(function (t) {
            t.brow &&
              (function (t) {
                var i = ".common-func-".concat(t.id, "-title");
                try {
                  var o = new n.VisibilityObserver(
                    i,
                    {
                      once: !0,
                      callback: function (n) {
                        n &&
                          !u.has(t.id) &&
                          (e.StockBridge.report(t.brow), u.add(t.id));
                      },
                      intersection: { threshold: 0 },
                    },
                    { context: c }
                  );
                  l.set(t.id, o);
                } catch (e) {}
              })(t);
          });
        }),
        e.onBeforeUnmount(function () {
          l.forEach(function (e) {
            var t, n;
            null ==
              (n =
                null == (t = null == e ? void 0 : e.observer)
                  ? void 0
                  : t.disconnect) || n.call(t);
          }),
            l.clear(),
            u.clear();
        }),
        {
          goDetail: function (t, n) {
            r("jumpDetail", t),
              d(t, n),
              "welware" === t.id &&
                i.commonFuncDesc.isWelwareGuide &&
                e.StockBridge.report("yy.new_profile.func_welware_guide_click");
          },
          shell: "mpweapp",
          didAgreeAgreement: a,
        }
      );
    },
    data: function () {
      return { premoteRpContainer: "" };
    },
    watch: {
      premoteMixin: {
        handler: function (e) {
          var t = this;
          (null == e ? void 0 : e.textRedPoint) &&
            this.$nextTick(function () {
              var n, i;
              i =
                e.textRedPoint.ad_list && e.textRedPoint.ad_list.length > 0
                  ? e.textRedPoint.ad_list[0].component_param
                  : {};
              try {
                "string" == typeof i && (i = JSON.parse(i));
              } catch (e) {
                i = {};
              }
              t.premoteRpContainer =
                null == (n = i.component_info) ? void 0 : n.container;
            });
        },
        immediate: !0,
      },
    },
  };
Array || e.resolveComponent("text-red-point")();
var o = e._export_sfc(i, [
  [
    "render",
    function (t, n, i, o, r, c) {
      return {
        a: e.t(i.title),
        b: e.f(i.list, function (t, n, c) {
          return e.e(
            {
              a: e.t(t.text),
              b: e.n("common-func-".concat(t.id, "-title")),
              c: "redPointRight" === t.rightType,
            },
            "redPointRight" === t.rightType
              ? e.e(
                  { d: i.redPointRight[t.id].redpoint },
                  (i.redPointRight[t.id].redpoint, {}),
                  {
                    e: e.t(i.redPointRight[t.id].text),
                    f: i.redPointRight[t.id].redpoint ? 1 : "",
                  }
                )
              : e.e(
                  { g: "wzqlight" === o.shell },
                  "wzqlight" === o.shell
                    ? { h: e.n("profile-".concat(t.id, "-red-point-wrapper")) }
                    : "mpwzq" === o.shell &&
                      i.premoteMixin.textRedPoint &&
                      r.premoteRpContainer ===
                        ".profile-".concat(t.id, "-red-point-wrapper")
                    ? {
                        j: e.sr("deliveryRp", "acb33f88-0-" + c, { f: 1 }),
                        k: "acb33f88-0-" + c,
                        l: e.p({ premote: i.premoteMixin.textRedPoint }),
                      }
                    : {},
                  {
                    i:
                      "mpwzq" === o.shell &&
                      i.premoteMixin.textRedPoint &&
                      r.premoteRpContainer ===
                        ".profile-".concat(t.id, "-red-point-wrapper"),
                    m:
                      i.isDataFetch &&
                      i.commonFuncDesc[t.id] &&
                      o.didAgreeAgreement,
                  },
                  i.isDataFetch && i.commonFuncDesc[t.id] && o.didAgreeAgreement
                    ? { n: i.commonFuncDesc[t.id] }
                    : {}
                ),
            { o: n < i.list.length - 1 },
            (i.list.length, {}),
            {
              p: "".concat(n, "-func-item"),
              q: "func-".concat(t.id),
              r: e.n(t.class ? t.class : ""),
              s: e.o(
                function (e) {
                  return o.goDetail(i.list[n]);
                },
                2372,
                "".concat(n, "-func-item")
              ),
            }
          );
        }),
      };
    },
  ],
  ["__scopeId", "data-v-acb33f88"],
]);
wx.createComponent(o);
