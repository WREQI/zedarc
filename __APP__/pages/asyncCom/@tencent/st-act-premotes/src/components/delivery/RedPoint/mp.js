var e = require("../../../../../../../../common/vendor.js"),
  o = {
    props: {
      premote: { type: Object, default: null },
      positionName: { type: String, required: !0 },
    },
    setup: function (o) {
      var t = e.ref(!1),
        n = e.ref(!1),
        r = e.ref(!1),
        u = e.ref(0),
        a = (function () {
          var o;
          if (e.StockBridge.ENV !== e.EnvTypeEnum.MP)
            return null == (o = e._default().os) ? void 0 : o.ios;
          try {
            var t = (
              (e.wx$1.getDeviceInfo && e.wx$1.getDeviceInfo()) ||
              e.wx$1.getSystemInfoSync()
            ).platform;
            return "ios" === (void 0 === t ? "" : t);
          } catch (e) {
            return !1;
          }
        })();
      return (
        e.watch(
          function () {
            return o.premote;
          },
          function (a) {
            var i, d;
            try {
              if (a)
                return JSON.parse(a.component_info).position_name ===
                  o.positionName
                  ? ((t.value = !0),
                    (r.value =
                      +JSON.parse(JSON.parse(a.ad_list[0].dp_ctx).strategy_info)
                        .message_num || 0),
                    (u.value = r.value),
                    (n.value = !r.value),
                    r.value > 99 && (r.value = "99+"),
                    void (
                      null ==
                        (d =
                          null == (i = e.StockBridge)
                            ? void 0
                            : i.deliverySdk) ||
                      d.deliveryMtaAndRport(a, "brow", {
                        msg_num: u.value ? u.value : "",
                        red_type: u.value ? 1 : 2,
                      })
                    ))
                  : void (t.value = !1);
              t.value = !1;
            } catch (e) {
              t.value = !1;
            }
          },
          { immediate: !0, deep: !0 }
        ),
        e.onBeforeUnmount(function () {
          t.value = !1;
        }),
        e.onDeactivated(function () {
          t.value = !1;
        }),
        {
          redpointShow: t,
          redpointClick: function () {
            var n, r;
            t.value &&
              (null ==
                (r = null == (n = e.StockBridge) ? void 0 : n.deliverySdk) ||
                r.deliveryMtaAndRport(o.premote, "click", {
                  msg_num: u.value ? u.value : "",
                  red_type: u.value ? 1 : 2,
                })),
              (t.value = !1);
          },
          shownum: r,
          showdot: n,
          detectIos: a,
        }
      );
    },
  },
  t = e._export_sfc(o, [
    [
      "render",
      function (o, t, n, r, u, a) {
        return e.e(
          { a: r.redpointShow && r.showdot },
          r.redpointShow && r.showdot
            ? {}
            : r.redpointShow && r.shownum
            ? {
                c: e.t(r.shownum),
                d: e.n(r.shownum < 10 ? "single-num" : ""),
                e: e.n(r.detectIos ? "detect-ios" : ""),
                f: e.n("99+" === r.shownum ? "long-num" : ""),
              }
            : {},
          { b: r.redpointShow && r.shownum }
        );
      },
    ],
    ["__scopeId", "data-v-a41d9a5e"],
  ]);
wx.createComponent(t);
