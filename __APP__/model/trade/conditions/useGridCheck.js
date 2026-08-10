var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../../@babel/runtime/helpers/slicedToArray");
require("../../../app.js");
var n = require("../../../common/vendor.js");
require("../../../config/enum.js"),
  require("../../../domain/entities/trade-stock/stock-order.js"),
  require("../../../domain/entities/trade-stock/condition-order.js"),
  require("../../../service/broker.js"),
  require("./GridCondition.js");
var i = require("../../../common/components/Dialog/index.js"),
  c = require("../../../domain/applications/trade-stock/pre-check.js");
require("../../../config/enum/trade.js");
var o = require("./grid-utils.js"),
  s = require("./useCondCheck.js"),
  u = require("../../../stores/user/useUserinfo.js"),
  a = require("../check-handlers/auth-handlers.js"),
  d = require("../check-handlers/check-shareholders-handler.js"),
  _ = require("../check-handlers/useRiskTips.js"),
  l = require("../../../config/enum/condition.js");
exports.useGridCheck = function (h) {
  var p,
    m,
    k = h.gridCondition,
    v = h.checkService,
    f = h.stockInfo,
    S = null == (p = n.getCurrentInstance()) ? void 0 : p.proxy,
    T = u.useUserinfoStore(),
    g = n.storeToRefs(T).userinfo,
    q = n.ref([]),
    P = n.reactive({ basePrice: !1, upStep: !1, downStep: !1, quantity: !1 }),
    b = s.useCondCheck({ checkService: v }),
    x = b.checkValidDay,
    C = b.checkCompositeSync,
    j = _.useRiskTips({
      checkService: v,
      stock: f,
      statPrefix: "trade.grid",
    }).checkTradeRiskHandler;
  function y() {
    var e = v.checkOrderPurchaseQuantity();
    return (null == e ? void 0 : e.valid) ? [!0] : e;
  }
  function E() {
    var e;
    return o.checkSupportType({
      stockCls: null == (e = f.value.quote) ? void 0 : e.stock_cls,
      isST: f.value.isST,
    });
  }
  function I(e) {
    return i.Dialog({ message: e.retmsg, context: S }), Promise.reject(e);
  }
  function w(e) {
    return new Promise(function (r, t) {
      switch (null == e ? void 0 : e.retcode) {
        case "order-status-change":
          return (
            (function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { retmsg: "该条件单状态可能已变更，您可确认后重新创建" };
              i.Dialog({
                title: "网格交易条件单".concat(
                  k.isUpdate ? "修改" : "创建",
                  "失败"
                ),
                context: S,
                message: e.retmsg,
                confirmButtonText: "重新创建",
                cancelButtonText: "知道了",
                showCancelButton: !0,
                onConfirm: function () {
                  null == S ||
                    S.$router.replace({
                      name: "GridCondition",
                      query: { name: k.name, code: k.code, market: k.market },
                    });
                },
              });
            })(),
            t({ retcode: "COND_STATUS_CHANGE", retmsg: "条件单状态可能变更" })
          );
        case "not-trade-time":
          return I(e);
      }
    });
  }
  function R(e) {
    return d.checkShareHoldersHandler(e, {
      browStat: "trade.grid.holderdialog.brow",
      confirmStat: "trade.grid.holderdialog.confirm",
    });
  }
  function G() {
    var e,
      r = null == (e = f.value.secu_quote) ? void 0 : e.dqj;
    return r && n.isNumber(+r) ? r : 0;
  }
  function D() {
    (k.gridType === l.GridType.Percent
      ? (function () {
          var e,
            r,
            t = G();
          if (t <= 0) return !1;
          var i = n.__CJS__export_add__(
            1,
            n.__CJS__export_div__(k.upStep, 100)
          );
          e = t >= n.__CJS__export_mul__(k.basePrice, i);
          var c = n.__CJS__export_reduce__(
            1,
            n.__CJS__export_div__(k.downStep, 100)
          );
          return (r = t <= n.__CJS__export_mul__(k.basePrice, c)), e || r;
        })()
      : (function () {
          var e = !1,
            r = !1,
            t = G();
          return (
            !(t <= 0) &&
            ((e = t >= n.__CJS__export_add__(k.basePrice, k.upStep)),
            (r = t <= n.__CJS__export_reduce__(k.basePrice, k.downStep)),
            e || r)
          );
        })()) && q.value.push("设置参数已达到触发条件，提交可能立即触发");
  }
  function J(e) {
    return (
      n.index.showToast({ title: e.retmsg, icon: "none" }), Promise.reject(e)
    );
  }
  function O() {
    Object.keys(P).forEach(function (e) {
      return (P[e] = !1);
    });
    var e = o.checkIsEmpty(k.basePrice)
      ? [!1, { retcode: "BASE_PRICE_EMPTY", retmsg: "请填写基准价，不可为0" }]
      : [!0];
    t(e, 1)[0] || (P.basePrice = !0);
    var r = o.checkIsEmpty(k.upStep)
      ? [!1, { retcode: "GRID_TYPE_EMPTY", retmsg: "请填写网格条件，不可为0" }]
      : [!0];
    t(r, 1)[0] || (P.upStep = !0);
    var n = o.checkIsEmpty(k.downStep)
      ? [!1, { retcode: "GRID_TYPE_EMPTY", retmsg: "请填写网格条件，不可为0" }]
      : [!0];
    t(n, 1)[0] || (P.downStep = !0);
    var i = o.checkIsEmpty(k.quantity)
      ? [!1, { retcode: "GRID_QUANTITY_EMPTY", retmsg: "请填写数量，不可为0" }]
      : [!0];
    t(i, 1)[0] || (P.quantity = !0);
    var c = Object.keys(P).every(function (e) {
      return !P[e];
    });
    return c
      ? [c]
      : [
          c,
          { retcode: "GRID_FIELDS_NOT_FILL", retmsg: "请完整填写条件单参数" },
        ];
  }
  function A() {
    return C([v.checkMarket.bind(v), E, v.checkStockStatus.bind(v)]);
  }
  return {
    clearRequiredFieldTips: function (e) {
      P[e] = !1;
    },
    requiredFieldTips: P,
    weekHint: q,
    checkGrid:
      ((m = r(
        e().mark(function r() {
          var n, i, s, u;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (q.value = []),
                    (e.next = 3),
                    c.handlerPromise(v.checkShareholderCards.bind(v), R)
                  );
                case 3:
                  return (e.next = 5), c.handlerPromise(O, J);
                case 5:
                  return (e.next = 7), c.handlerPromise(y, I);
                case 7:
                  return (e.next = 9), x();
                case 9:
                  if (
                    ((n = e.sent), (i = t(n, 2)), (s = i[0]), (u = i[1]), s)
                  ) {
                    e.next = 15;
                    break;
                  }
                  return e.abrupt("return", w(u));
                case 15:
                  return (e.next = 17), c.handlerPromise(A, I);
                case 17:
                  return (
                    (e.next = 19),
                    c.handlerPromise(
                      v.checkAuth.bind(v, g.value),
                      a.checkAuthHandle
                    )
                  );
                case 19:
                  return (
                    (e.next = 21), c.handlerPromise(v.checkTradeRisk.bind(v), j)
                  );
                case 21:
                  o.shouldTipsFee(k) && q.value.push(o.PROFIT_NOT_COVER_FEE),
                    D();
                case 23:
                case "end":
                  return e.stop();
              }
          }, r);
        })
      )),
      function () {
        return m.apply(this, arguments);
      }),
    checkStock: A,
  };
};
