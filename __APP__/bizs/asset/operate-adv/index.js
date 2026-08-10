var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var n = require("../../../common/vendor.js"),
  r = require("../../../stores/app/useMode.js"),
  a = require("../composables/useOperateAdv.js"),
  o = {
    props: {
      advData: {
        type: Object,
        default: function () {
          return null;
        },
      },
    },
    emits: ["hide", "close"],
    setup: function (o, i) {
      var u = i.emit,
        c = n.getCurrentInstance().proxy,
        l = n.storeToRefs(r.useModeStore()).simpleMode,
        d = a.useOperateAdv().navigate,
        s = n.ref(""),
        v = n.ref(""),
        p = n.ref(""),
        f = n.ref("0"),
        m = n.ref(""),
        h = n.ref(""),
        b = n.ref(""),
        g = n.ref(""),
        y = n.ref(!1),
        _ = n.ref(0),
        x = n.ref("6s"),
        C = n.computed(function () {
          var e = "https://st.gtimg.com/design/".concat(
              l.value
                ? "91f723277d79427103cb12382fc041ee"
                : "7031f6c0dce5bd1494ae71b02c596c6d",
              ".png"
            ),
            t = "https://st.gtimg.com/design/".concat(
              l.value
                ? "993ae6f53028b8ac7689d981bc95d011"
                : "ee96b696d2a52692d423229c8ed6e80a",
              ".png"
            );
          return "1" === f.value ? e : t;
        });
      function k(e) {
        c.$stat.click("trade.asset.operate_adv_".concat(e), void 0, void 0, {
          trade_dp_id: p.value,
        });
      }
      function w(e) {
        return new Promise(function (t) {
          n.index
            .createSelectorQuery()
            .in(c)
            .select(e)
            .boundingClientRect(function (e) {
              t(e);
            })
            .exec();
        });
      }
      return (
        n.watch(
          function () {
            return o.advData;
          },
          function (n) {
            var r = n || {},
              a = r.dely_id,
              o = void 0 === a ? "" : a,
              i = r.matl_id,
              d = void 0 === i ? "" : i,
              C = r.trace_id,
              I = void 0 === C ? "" : C,
              W = r.oper_type,
              j = void 0 === W ? "0" : W,
              q = r.copy_writer,
              M = void 0 === q ? "" : q,
              T = r.button,
              D = void 0 === T ? "" : T,
              O = r.href,
              R = void 0 === O ? "" : O,
              A = r.channel,
              S = void 0 === A ? "" : A;
            (s.value = o),
              (v.value = d),
              (p.value = I),
              (f.value = j),
              (m.value = M),
              (h.value = D),
              (b.value = R),
              (g.value = S),
              m.value && b.value
                ? (k("brow"),
                  (function () {
                    _.value = 0;
                    var n = l.value ? 18 : 23,
                      r = l.value ? 15 : 20,
                      a = h.value.length ? n : r;
                    m.value.length + h.value.length <= a
                      ? (y.value = !1)
                      : c.$nextTick(
                          t(
                            e().mark(function t() {
                              var n, r, a, o, i;
                              return e().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (e.next = 2), w(".text-wrap");
                                    case 2:
                                      return (
                                        (a = e.sent),
                                        (n =
                                          (null == a ? void 0 : a.width) || 0),
                                        (e.next = 6),
                                        w(".text-tips")
                                      );
                                    case 6:
                                      (o = e.sent),
                                        (r =
                                          (null == o ? void 0 : o.width) ||
                                          0) &&
                                          r &&
                                          n < r &&
                                          ((y.value = !0),
                                          (i = (r - n) / r),
                                          (_.value = r - n),
                                          (x.value =
                                            i >= 0.2
                                              ? 15 * i + 6 + "s"
                                              : i >= 0.1
                                              ? "6s"
                                              : "5s"));
                                    case 8:
                                    case "end":
                                      return e.stop();
                                  }
                              }, t);
                            })
                          )
                        );
                  })())
                : u("hide");
          },
          { immediate: !0, deep: !0 }
        ),
        {
          simpleMode: l,
          delyId: s,
          matlId: v,
          traceId: p,
          operType: f,
          copyWriter: m,
          button: h,
          href: b,
          channel: g,
          animate: y,
          animateWidth: _,
          animateDuration: x,
          iconImg: C,
          onClick: function () {
            var e = b.value;
            e && (k("click"), d(e, { channel: g.value }));
          },
          onClose: function () {
            (m.value = ""), k("close"), u("close", v.value);
          },
        }
      );
    },
  },
  i = n._export_sfc(o, [
    [
      "render",
      function (e, t, r, a, o, i) {
        return n.e(
          { a: a.copyWriter && a.href },
          a.copyWriter && a.href
            ? n.e(
                {
                  b: a.iconImg,
                  c: n.t(a.copyWriter),
                  d: a.animate ? 1 : "",
                  e: a.animateWidth ? a.animateWidth + "px" : "initial",
                  f: a.animateDuration,
                  g: a.button,
                },
                a.button
                  ? {
                      h: n.t(a.button),
                      i: n.o(function () {
                        return a.onClick && a.onClick.apply(a, arguments);
                      }),
                    }
                  : {},
                {
                  j: n.o(function () {
                    return a.onClose && a.onClose.apply(a, arguments);
                  }),
                  k: n.o(function () {
                    return a.onClick && a.onClick.apply(a, arguments);
                  }),
                  l: "1" === a.operType ? 1 : "",
                  m: a.simpleMode ? 1 : "",
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-7a3fd2ac"],
  ]);
wx.createComponent(i);
