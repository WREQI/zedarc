var r = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var e = require("../../../common/vendor.js"),
  n = require("../../../cgi/protocol.js"),
  o = { gem: "0", kcb: "1", st: "2", kzz: "3" },
  a = e.reactive({});
function c(r) {
  var t,
    e = r.title,
    n = void 0 === e ? [] : e,
    o = r.content,
    a = void 0 === o ? [] : o,
    c = "",
    i = a.length || 0,
    s = (null == (t = a[0]) ? void 0 : t.length) || 0;
  if (!i || !s) return "";
  for (var u = "", p = 0; n.length && p < s; p++)
    u += '<td colspan="1" rowspan="1"><p><strong>'.concat(
      n[p] || "",
      "</strong></p></td>"
    );
  c += "<tr>".concat(u, "</tr>");
  for (var l = 0; l < i; l++) {
    for (var v = a[l] || {}, m = "", f = 0; f < s; f++)
      m += '<td colspan="1" rowspan="1"><p>'.concat(v[f] || "", "</p></td>");
    c += "<tr>".concat(m, "</tr>");
  }
  return '<div class="tableWrapper"><table><tbody>'.concat(
    c,
    "</tbody></table></div>"
  );
}
(exports.getTableRenderStr = c),
  (exports.useCommission = function () {
    function e(e) {
      var i = e.type;
      return new Promise(
        (function () {
          var e = t(
            r().mark(function t(e, s) {
              var u, p, l;
              return r().wrap(
                function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (r.prev = 0),
                          (r.next = 3),
                          n.ProtocolCgi.queryCommissionInfo({ type: o[i] })
                        );
                      case 3:
                        (u = r.sent),
                          (p = u.commission_protocol),
                          (l = void 0 === p ? [] : p),
                          (a[i] = c({
                            content: l.map(function (r) {
                              return null == r ? void 0 : r.split("|");
                            }),
                          })),
                          e({ commissionTableContent: a[i] }),
                          (r.next = 12);
                        break;
                      case 9:
                        (r.prev = 9),
                          (r.t0 = r.catch(0)),
                          s(r.t0 || new Error("获取佣金信息失败"));
                      case 12:
                      case "end":
                        return r.stop();
                    }
                },
                t,
                null,
                [[0, 9]]
              );
            })
          );
          return function (r, t) {
            return e.apply(this, arguments);
          };
        })()
      );
    }
    return {
      getCommissionTableContent:
        ((i = t(
          r().mark(function t(n) {
            var o;
            return r().wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    if (((o = n.type), (r.t0 = a[o]), r.t0)) {
                      r.next = 5;
                      break;
                    }
                    return (r.next = 5), e({ type: o });
                  case 5:
                    return r.abrupt("return", a[o]);
                  case 6:
                  case "end":
                    return r.stop();
                }
            }, t);
          })
        )),
        function (r) {
          return i.apply(this, arguments);
        }),
      fetchCommissionInfo: e,
    };
    var i;
  });
