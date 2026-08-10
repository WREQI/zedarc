var n = require("../../../../../../../common/vendor.js"),
  e = require("../../../../stock-base/visibilityObserver/index.js"),
  t = {
    props: { added: { type: Boolean, default: !1 } },
    setup: function (t, o) {
      var r = o.emit,
        c = n.getCurrentInstance().proxy || n.getCurrentInstance(),
        i = n.inject("didAgreeUserAgreement", { value: !0 }),
        u = n.inject("onCheckUserAgreementStatus", function () {}),
        d = null;
      return (
        n.onMounted(function () {
          n.nextTick$1(function () {
            var n, t;
            null ==
              (t =
                null == (n = null == d ? void 0 : d.observer)
                  ? void 0
                  : n.disconnect) || t.call(n),
              (d = null),
              (d = new e.VisibilityObserver(
                ".zjrd-add-btn",
                {
                  once: !0,
                  callback: function (n, e) {
                    r("addStockBrow");
                  },
                  intersection: { threshold: 0 },
                },
                { context: c }
              ));
          });
        }),
        n.onUnmounted(function () {
          var n, e;
          try {
            null ==
              (e =
                null == (n = null == d ? void 0 : d.observer)
                  ? void 0
                  : n.disconnect) || e.call(n),
              (d = null);
          } catch (n) {}
        }),
        {
          addStockToZixuan: function () {
            (null == i ? void 0 : i.value) || "function" != typeof u
              ? r("addStockToZixuan")
              : u();
          },
        }
      );
    },
  },
  o = n._export_sfc(t, [
    [
      "render",
      function (e, t, o, r, c, i) {
        return n.e(
          { a: o.added },
          o.added
            ? {
                b: n.o(function (n) {
                  return r.addStockToZixuan();
                }, 5541),
              }
            : {
                c: n.o(function (n) {
                  return r.addStockToZixuan();
                }, 5542),
              }
        );
      },
    ],
    ["__scopeId", "data-v-c35452ca"],
  ]);
wx.createComponent(o);
