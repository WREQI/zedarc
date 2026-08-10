var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var n = require("../../common/vendor.js"),
  t = require("./mp-weixin.js");
exports.useShareSnapshot = function (u) {
  var a,
    c,
    i = n.ref(""),
    l = n.ref(!1),
    o = n.ref(null),
    s = 0,
    p = null;
  function v() {
    p && (clearTimeout(p), (p = null));
  }
  function f(e) {
    return h.apply(this, arguments);
  }
  function h() {
    return (h = r(
      e().mark(function r(a) {
        var c, p, v, f, h;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (p = ""),
                    (v = "render"),
                    (e.prev = 1),
                    (e.next = 4),
                    t.captureMp({
                      width: u.width,
                      height: ((h = u.height), n.isRef(h) ? h.value : h),
                      draw: u.draw,
                    })
                  );
                case 4:
                  return (
                    (p = e.sent),
                    (v = "export"),
                    e.abrupt(
                      "return",
                      a !== s ? i.value : ((i.value = p), (o.value = null), p)
                    )
                  );
                case 9:
                  if (
                    ((e.prev = 9),
                    (e.t0 = e.catch(1)),
                    (f =
                      e.t0 instanceof Error ? e.t0 : new Error(String(e.t0))),
                    a === s)
                  ) {
                    e.next = 14;
                    break;
                  }
                  return e.abrupt("return", i.value);
                case 14:
                  throw (
                    ((o.value = f),
                    null == (c = u.onError) || c.call(u, f, v),
                    f)
                  );
                case 15:
                  return (e.prev = 15), a === s && (l.value = !1), e.finish(15);
                case 18:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[1, 9, 15, 18]]
        );
      })
    )).apply(this, arguments);
  }
  function d() {
    var e;
    v();
    var r = null !== (e = u.debounce) && void 0 !== e ? e : 300;
    (i.value = ""),
      (l.value = !0),
      r <= 0
        ? f((s += 1)).catch(function () {})
        : (p = setTimeout(function () {
            (p = null), f((s += 1)).catch(function () {});
          }, r));
  }
  function w() {
    (s += 1), v(), (i.value = ""), (l.value = !1), (o.value = null);
  }
  return (
    u.ready &&
      n.watch(u.ready, function (e) {
        e && d();
      }),
    (null == (a = u.watchSources) ? void 0 : a.length) &&
      n.watch(
        u.watchSources,
        function () {
          (u.ready && !u.ready.value) || d();
        },
        { deep: !0 }
      ),
    n.onBeforeUnmount(w),
    {
      snapshotUrl: i,
      loading: l,
      error: o,
      capture: d,
      captureImmediate:
        ((c = r(
          e().mark(function r() {
            var n;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      v(),
                      (n = s += 1),
                      e.abrupt("return", ((l.value = !0), (i.value = ""), f(n)))
                    );
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, r);
          })
        )),
        function () {
          return c.apply(this, arguments);
        }),
      reset: w,
    }
  );
};
