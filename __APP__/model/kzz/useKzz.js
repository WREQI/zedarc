var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var t = require("../../common/vendor.js"),
  n = require("../../cgi/kzz.js"),
  o = require("../../common/components/Dialog/index.js"),
  a = require("../../stores/user/useUserinfo.js"),
  i = t.ref([]),
  c = t.ref([]),
  s = t.ref({}),
  u = t.ref({}),
  l = {};
exports.useKzz = function () {
  function f() {
    var e = t.index.getStorageSync(k()) || {};
    l = e;
  }
  function d(e) {
    var r = 0,
      n = e.filter(function (e) {
        return (
          e &&
          !(function (e) {
            var r,
              n = l[e];
            return !(!n || ((r = n.closedDay), !t.dayjs().isSame(r, "day")));
          })(e.conv_stock_code) &&
          r++ < 5
        );
      });
    i.value = n;
  }
  function k(e) {
    var r;
    return "mp-broker://".concat(
      (null == (r = a.useUserinfoStore().userinfo) ? void 0 : r.fundaccount) ||
        "",
      "/risk_op"
    );
  }
  return {
    holdRiskItem: s,
    tradeRiskItem: u,
    holdRiskList: i,
    queryTradeKzzRisk:
      ((z = r(
        e().mark(function r(t, o) {
          var a, i;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((e.prev = 0), t && o)) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return");
                  case 3:
                    return (
                      (a = "".concat(o).concat(t)),
                      (e.next = 6),
                      n.kzzCgi.queryKzzRisk({
                        action: "trade",
                        conv_code_list: a,
                      })
                    );
                  case 6:
                    if (((e.t0 = e.sent.risk_info_data), e.t0)) {
                      e.next = 9;
                      break;
                    }
                    e.t0 = [];
                  case 9:
                    0 === (i = e.t0).length ? (u.value = {}) : (u.value = i[0]),
                      (e.next = 15);
                    break;
                  case 13:
                    (e.prev = 13), (e.t1 = e.catch(0));
                  case 15:
                  case "end":
                    return e.stop();
                }
            },
            r,
            null,
            [[0, 13]]
          );
        })
      )),
      function (e, r) {
        return z.apply(this, arguments);
      }),
    queryHoldKzzRisk:
      ((v = r(
        e().mark(function r(t) {
          var o, a, i;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((e.prev = 0), null == t ? void 0 : t.length)) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return");
                  case 3:
                    if (
                      (o = t.filter(function (e) {
                        return "z" === (null == e ? void 0 : e.stock_cls);
                      })).length
                    ) {
                      e.next = 6;
                      break;
                    }
                    return e.abrupt("return");
                  case 6:
                    return (
                      (a = o
                        .map(function (e) {
                          if (e.market && e.code)
                            return "".concat(e.market).concat(e.code);
                        })
                        .filter(function (e) {
                          return e;
                        })
                        .join("|")),
                      (e.next = 9),
                      n.kzzCgi.queryKzzRisk({
                        action: "hold",
                        conv_code_list: a,
                      })
                    );
                  case 9:
                    if (((e.t0 = e.sent.risk_info_data), e.t0)) {
                      e.next = 12;
                      break;
                    }
                    e.t0 = [];
                  case 12:
                    (i = e.t0), (c.value = i), f(), d(i), (e.next = 18);
                    break;
                  case 16:
                    (e.prev = 16), (e.t1 = e.catch(0));
                  case 18:
                  case "end":
                    return e.stop();
                }
            },
            r,
            null,
            [[0, 16]]
          );
        })
      )),
      function (e) {
        return v.apply(this, arguments);
      }),
    closeHoldKzzRisk: function (e, r) {
      (l[r.conv_stock_code] = {
        regisDate: r.regis_date,
        closedDay: t.dayjs().format("YYYY-MM-DD"),
      }),
        Object.keys(l).forEach(function (e) {
          var r = l[e];
          t.dayjs().isAfter(r.regisDate, "day") && delete l[e];
        }),
        t.index.setStorageSync(k(), l),
        d(c.value);
    },
    showHoldKzzRiskDialog: function (e, r) {
      var t;
      e &&
        e.redeem_date &&
        e.regis_date &&
        e.conv_stock_name &&
        ((s.value = e),
        o.Dialog({
          selector: "#hold-kzz-risk-dialog",
          context:
            null == (t = null == r ? void 0 : r.$refs)
              ? void 0
              : t.kzzRiskDialog,
          confirmButtonText: "我知道了",
          onConfirm: function () {},
        }));
    },
    showTradeKzzRiskDialog: function (e, r) {
      var t = u.value;
      if (t && t.conv_stock_code && t.conv_stock_code === e)
        return (
          (u.value = t),
          void o.Dialog({
            selector: "#trade-kzz-risk-dialog",
            showCancelButton: !0,
            cancelButtonText: "继续交易",
            confirmButtonText: "取消交易",
            onConfirm: function () {
              r(!1);
            },
            onCancel: function () {
              r(!0);
            },
          })
        );
      r(!0);
    },
    loadRiskOperationCache: f,
  };
  var v, z;
};
