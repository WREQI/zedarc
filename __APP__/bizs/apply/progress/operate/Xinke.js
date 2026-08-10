require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../../app.js");
var t = require("../../../../common/vendor.js");
require("../../../../service/broker.js");
var n = require("../../../../service/stat/mp-weixin.js"),
  a = require("../../../../service/abt/mp-weixin.js"),
  i = require("../../../../cgi/apply.js"),
  c = require("../../../../config/broker/11100/index.js"),
  u = {
    __name: "Xinke",
    setup: function (u) {
      var s,
        o = t.ref(!1),
        l = t.ref(!1),
        p = t.ref("icon-xinke-".concat(c.brokerConfig.base.code)),
        v = (
          (null == (s = c.brokerConfig.apply) ? void 0 : s.progressActConfig) ||
          {}
        ).xinke,
        f = void 0 === v ? {} : v,
        b = t.computed(function () {
          return f[l.value ? "received" : "unreceived"];
        }),
        y = t.ref(!1);
      function d() {
        return k.apply(this, arguments);
      }
      function k() {
        return (k = r(
          e().mark(function r() {
            var t, i, u, s, o, l;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = c.brokerConfig.abt || {}),
                      (i = t.progressActXinke),
                      (u = void 0 === i ? {} : i),
                      (e.next = 5),
                      a.ABT.getABT(u)
                    );
                  case 5:
                    if (((e.t0 = e.sent), e.t0)) {
                      e.next = 8;
                      break;
                    }
                    e.t0 = {};
                  case 8:
                    (s = e.t0),
                      (o = s.show),
                      (l = void 0 === o ? "" : o),
                      n.stat.click("trade.apply_progress.yy_xinke_abt.brow"),
                      (y.value = "1" === l);
                  case 12:
                  case "end":
                    return e.stop();
                }
            }, r);
          })
        )).apply(this, arguments);
      }
      function x() {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = r(
          e().mark(function r() {
            var t, n;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        i.applyCgi.proccessApplyProfitActivity()
                      );
                    case 3:
                      (t = e.sent),
                        (n = t.newer_balance_status),
                        (l.value = "1" === n),
                        (e.next = 11);
                      break;
                    case 8:
                      (e.prev = 8), (e.t0 = e.catch(0)), (l.value = !1);
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [[0, 8]]
            );
          })
        )).apply(this, arguments);
      }
      function g() {
        n.stat.click("trade.apply_progress.yy_xinke.click"),
          i.applyCgi
            .proccessApplyProfitActivity({ newer_balance: "1" })
            .catch(t.noop)
            .finally(function () {
              l.value = !0;
            });
      }
      return (
        t.onMounted(
          r(
            e().mark(function r() {
              var a, i;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!t.isEmpty(f)) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", (o.value = !1));
                    case 2:
                      if (!location || !location.search) {
                        e.next = 7;
                        break;
                      }
                      if (
                        ((a = t.lib.parse(location.search)),
                        (i = a.srcsite),
                        (void 0 === i ? "" : i).includes("lct"))
                      ) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt("return");
                    case 6:
                      Promise.all([d(), x()]).then(function () {
                        (o.value = y.value),
                          o.value &&
                            n.stat.click("trade.apply_progress.yy_xinke.brow");
                      });
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, r);
            })
          )
        ),
        function (e, r) {
          return t.e(
            { a: o.value },
            o.value
              ? t.e(
                  { b: l.value },
                  l.value ? {} : { c: t.n(p.value) },
                  {
                    d: t.t(b.value.title),
                    e: t.t(b.value.subtitle),
                    f: b.value.btnText,
                  },
                  b.value.btnText ? { g: t.t(b.value.btnText), h: t.o(g) } : {}
                )
              : {}
          );
        }
      );
    },
  },
  s = t._export_sfc(u, [["__scopeId", "data-v-d2e5936f"]]);
wx.createComponent(s);
