var e = require("../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../@babel/runtime/helpers/toConsumableArray");
require("../../@babel/runtime/helpers/Arrayincludes");
var s = require("../../common/vendor.js"),
  c = require("../../cgi/newstock.js"),
  a = require("../../components/Password/index.js"),
  u = require("../../cgi/password.js"),
  i = require("../../service/log/index.js"),
  o = require("../../utils/market.js"),
  _ = require("../../common/components/Dialog/index.js"),
  p = require("../../cgi/signProtocol.js"),
  l = require("../../service/stat/mp-weixin.js"),
  h = require("../../service/aegis/platform/not-wujie.js"),
  f = require("../../stores/user/useUserinfo.js");
require("../../service/broker.js");
var d = require("../../service/auth/auth.js"),
  b = require("../../service/auth/auth.type.js"),
  g = require("../../config/broker/11100/index.js"),
  m = new i.Log("newstock/model"),
  x = { STOCK: "0", DEBT: "1", KCB: "2", CYB: "3", ALL: "4" },
  k = {
    notApply: "0",
    applying: "1",
    applyed: "2",
    noEdu: "3",
    noCybPriv: "4",
    noKcbPriv: "5",
    noShPriv: "6",
    noSzPriv: "7",
    noCybPrivLimit: "8",
    noSzKzz: "9",
    noShKzz: "10",
    noKcbGrowthPriv: "11",
  };
function v(e) {
  e &&
    e.forEach(function (e) {
      var t;
      e.purchase_type !== x.DEBT &&
        (e.purchase_amount_upper_limit = String(
          1e4 * (+e.purchase_amount_upper_limit || 0)
        )),
        (e._purchaseAmount =
          (e.max_purchase_quantity && +e.max_purchase_quantity) || 0);
      var r =
        (null == (t = e.comparable_company) ? void 0 : t.split(";")) || [];
      (r = r.map(function (e) {
        var t,
          r = e.split(","),
          n = null == (t = null == r ? void 0 : r[0]) ? void 0 : t.slice(2),
          s = null == r ? void 0 : r[1];
        return s && n ? "".concat(s, "(").concat(n, ")") : "";
      })),
        (e.comparable_company = r.join(","));
    });
}
function y(e) {
  e &&
    e.forEach(function (e) {
      var t,
        r,
        n,
        s,
        c,
        a,
        u = !1,
        i = !1;
      e.purchase_status === k.notApply && e._purchaseAmount > 0
        ? ((i = !0),
          (null ==
          (n =
            null == (r = null == (t = g.brokerConfig) ? void 0 : t.hall)
              ? void 0
              : r.newstock)
            ? void 0
            : n.cancelSelectAll) && (i = !1))
        : [k.applying, k.applyed].includes(e.purchase_status)
        ? ((u = !0),
          (i = !0),
          (null ==
          (a =
            null == (c = null == (s = g.brokerConfig) ? void 0 : s.hall)
              ? void 0
              : c.newstock)
            ? void 0
            : a.cancelSelectAll) && (i = !1))
        : (u = !0),
        (e._disabled = u),
        (e._selected = i);
    });
}
function L(e) {
  e &&
    e.some(function (e) {
      return (
        e.purchase_status === k.notApply &&
        !+e._purchaseAmount &&
        (h.aegisReporter.reportEvent("NEWSTOCK_PURCHASE_STATUS_ERROR", {
          ext2: e.code,
          ext3: e.purchase_type,
        }),
        !0)
      );
    });
}
(exports.APPLY_STATE = k),
  (exports.NEW_PURCHASE_TYPE = {
    XG_PT: 0,
    XG_CYB: 1,
    XG_KCB: 2,
    XZ_PT: 3,
    XZ_CYB: 4,
    XZ_KCB: 5,
  }),
  (exports.PURCHASE_TYPE = x),
  (exports.useNewStock = function () {
    var i,
      h,
      g,
      S,
      T,
      w,
      P = s.getCurrentInstance().proxy,
      z = s.reactive({
        maxBuyAmountSz: "-",
        maxBuyAmountSh: "-",
        maxBuyAmountKcb: "-",
        maxBuyAmountConv: "-",
        purchaseList_xg: [],
        purchaseList_xg_cyb: [],
        purchaseList_xg_kcb: [],
        purchaseList_xz: [],
        purchaseList_xz_cyb: [],
        purchaseList_xz_kcb: [],
        quotaShareholderCode: "",
        gemShareholderCode: "",
        convAllocateAvg: "",
        afterPurchaseList: [],
        needNewStockPurchaseRiskTip: !0,
      }),
      E = s.reactive({
        fetching: !1,
        hasData: null,
        init: !1,
        xgLists: [],
        cybLists: [],
        kcbLists: [],
        xgPageNum: 0,
        cybPageNum: 0,
        kcbPageNum: 0,
        pageSize: 10,
        msg: "暂无数据",
        sub_statis_info_xg: {},
        sub_statis_info_cyb: {},
        sub_statis_info_kcb: {},
        xgNoData: !1,
        cybNoData: !1,
        kcbNoData: !1,
      }),
      C = s.ref(!1),
      A = function (e) {
        return s.computed(function () {
          switch (e) {
            case x.DEBT:
              return [].concat(
                n(z.purchaseList_xz),
                n(z.purchaseList_xz_cyb),
                n(z.purchaseList_xz_kcb)
              );
            case x.STOCK:
              return [].concat(
                n(z.purchaseList_xg),
                n(z.purchaseList_xg_cyb),
                n(z.purchaseList_xg_kcb)
              );
            default:
              return [].concat(
                n(z.purchaseList_xg),
                n(z.purchaseList_xg_cyb),
                n(z.purchaseList_xg_kcb),
                n(z.purchaseList_xz),
                n(z.purchaseList_xz_cyb),
                n(z.purchaseList_xz_kcb)
              );
          }
        });
      },
      N = function (e) {
        return s.computed(function () {
          return A(e).value.filter(function (e) {
            return (
              e._purchaseAmount > 0 &&
              e.purchase_status === k.notApply &&
              e._selected &&
              !e.disabled
            );
          });
        });
      };
    function B(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (q = r(
        t().mark(function r(n, s) {
          var a, u, i, o, _, p;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      (m.info("申购类型", n),
                      (a = N(n).value.length),
                      (u = 0),
                      (i = []),
                      !(a <= 0))
                    ) {
                      t.next = 5;
                      break;
                    }
                    return t.abrupt("return");
                  case 5:
                    return (
                      (o = N(n)
                        .value.map(function (e) {
                          return ""
                            .concat(e.market, "|")
                            .concat(e.code, "|")
                            .concat(e.name, "|1|")
                            .concat(e.issue_price, "|")
                            .concat(e._purchaseAmount, "|")
                            .concat(new Date().getTime())
                            .concat(
                              parseInt(1e4 * Math.random(), 10).toString()
                            );
                        })
                        .join(";")),
                      m.info("申购信息", o),
                      (_ = n),
                      n === x.ALL &&
                        (_ = N(n).value.some(function (e) {
                          return e.purchase_type !== x.DEBT;
                        })
                          ? x.STOCK
                          : x.DEBT),
                      (t.prev = 9),
                      (t.next = 12),
                      c.newstockCgi.submitIpoStock({
                        purchase_type: _,
                        psw: s,
                        newstock_info: o,
                        quota_shareholder_code: z.quotaShareholderCode,
                        gem_shareholder_code: z.gemShareholderCode,
                      })
                    );
                  case 12:
                    (p = t.sent).list
                      ? ((i = p.list.filter(function (e) {
                          return "1" !== e.order_status;
                        })),
                        0 === (u = i.length)
                          ? l.stat.click("TRADE.NEWSTOCK.APPLY_SUCCESS")
                          : l.stat.click("TRADE.NEWSTOCK.APPLY_PART_SUCCESS"))
                      : ((u = a), l.stat.click("TRADE.NEWSTOCK.APPLY_FAIL")),
                      P.$router.push({
                        name: "NewStockResult",
                        query: {
                          retcode: "0",
                          retmsg: u > 0 && i && i[0] ? i[0].ext_ret_msg : "",
                          date: p.lot_winning_date,
                          failCount: String(u),
                          purchase_type: _,
                          from: P.$route.query.from,
                        },
                      }),
                      (t.next = 19);
                    break;
                  case 16:
                    (t.prev = 16),
                      (t.t0 = t.catch(9)),
                      51088820 !== t.t0.retcode &&
                        (l.stat.click("TRADE.NEWSTOCK.APPLY_FAIL"),
                        P.$router.push({
                          name: "NewStockResult",
                          query: e(
                            e({}, t.t0),
                            {},
                            {
                              failCount: "".concat(u),
                              purchase_type: _,
                              from: P.$route.query.from,
                            }
                          ),
                        }));
                  case 19:
                  case "end":
                    return t.stop();
                }
            },
            r,
            null,
            [[9, 16]]
          );
        })
      )).apply(this, arguments);
    }
    function K(e) {
      var t = e.market,
        r = e.code,
        n = e.value,
        s = z.purchaseList_xz_kcb.findIndex(function (e) {
          return e.market === t && e.purchase_code === r;
        });
      -1 !== s && (z.purchaseList_xz_kcb[s].kcb_kzz_risk_tips = n);
    }
    return {
      queryPurchaseList:
        ((w = r(
          t().mark(function e() {
            var r, n, s, a, u, i, o;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        c.newstockCgi.queryPurchaseInfo({ action: 2 })
                      );
                    case 3:
                      (r = e.sent),
                        isNaN(+r.high_light)
                          ? (C.value = !0)
                          : (C.value = "1" === r.high_light),
                        v(r.kcb_purchase_info_list),
                        y(r.kcb_purchase_info_list),
                        L(r.kcb_purchase_info_list),
                        (z.purchaseList_xg_kcb =
                          r.kcb_purchase_info_list || []),
                        v(r.gem_purchase_info_list),
                        y(r.gem_purchase_info_list),
                        L(r.gem_purchase_info_list),
                        (z.purchaseList_xg_cyb =
                          r.gem_purchase_info_list || []),
                        (n = r.gem_purchase_info_list || []),
                        v(r.purchase_info_list),
                        y(r.purchase_info_list),
                        L(r.purchase_info_list),
                        (s = (r.purchase_info_list || []).filter(function (e) {
                          var t = !1;
                          return (
                            n.forEach(function (r) {
                              r.purchase_code === e.purchase_code && (t = !0);
                            }),
                            !1 === t
                          );
                        })),
                        (z.purchaseList_xg = s),
                        v(r.xz_purchase_info_list),
                        y(r.xz_purchase_info_list),
                        L(r.xz_purchase_info_list),
                        (a = r.xz_purchase_info_list || []),
                        (u = a.filter(function (e) {
                          return "0" === e.conv_type;
                        })),
                        (z.purchaseList_xz = u),
                        (i = a.filter(function (e) {
                          return "1" === e.conv_type;
                        })),
                        (z.purchaseList_xz_cyb = i),
                        (o = a.filter(function (e) {
                          return "2" === e.conv_type;
                        })),
                        (z.purchaseList_xz_kcb = o),
                        (z.maxBuyAmountKcb = r.sh_kcb_quota || "0"),
                        (z.maxBuyAmountSz = r.sz_quota || "0"),
                        (z.maxBuyAmountSh = r.sh_quota || "0"),
                        (z.maxBuyAmountConv =
                          "10000" === r.conv_quota ? "1万张" : "0"),
                        (z.gemShareholderCode = r.gem_shareholder_code),
                        (z.quotaShareholderCode = r.quota_shareholder_code),
                        (z.convAllocateAvg = r.conv_allocate_avg),
                        (z.needNewStockPurchaseRiskTip =
                          "1" === r.newstock_purchase_risk_tips),
                        (e.next = 19);
                      break;
                    case 17:
                      (e.prev = 17), (e.t0 = e.catch(0));
                    case 19:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 17]]
            );
          })
        )),
        function () {
          return w.apply(this, arguments);
        }),
      canTrade: C,
      updateTradeStatus:
        ((T = r(
          t().mark(function e() {
            var r;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        c.newstockCgi.queryPurchaseInfo({ action: 2 })
                      );
                    case 3:
                      (r = e.sent),
                        isNaN(+r.high_light)
                          ? (C.value = !0)
                          : (C.value = "1" === r.high_light),
                        (e.next = 9);
                      break;
                    case 7:
                      (e.prev = 7), (e.t0 = e.catch(0));
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 7]]
            );
          })
        )),
        function () {
          return T.apply(this, arguments);
        }),
      purchaseListData: z,
      stockPerformanceData: E,
      errorTips: function (e) {
        return s.computed(function () {
          if (
            A(e).value.some(function (e) {
              return (
                0 === Number(e._selected) && e.purchase_status === k.notApply
              );
            }) &&
            0 === N(e).value.length
          )
            return "申购数量不能为0！";
          if (
            !A(e).value.some(function (e) {
              return e.purchase_status === k.notApply;
            }) &&
            A(e).value.some(function (e) {
              return (
                e.purchase_status === k.applying ||
                e.purchase_status === k.applyed
              );
            })
          )
            return "你已全部申购今日可申购".concat(
              e === x.DEBT ? "新债" : e === x.ALL ? "新股和新债" : "新股",
              "，请勿重复申购！"
            );
          if (
            !A(e).value.some(function (e) {
              return e.purchase_status === k.notApply;
            }) &&
            !A(e).value.some(function (e) {
              return e.purchase_status === k.applying;
            }) &&
            !A(e).value.some(function (e) {
              return e.purchase_status === k.applyed;
            })
          ) {
            if (
              A(e).value.some(function (e) {
                return (
                  e.purchase_status === k.noCybPriv ||
                  e.purchase_status === k.noKcbPriv ||
                  e.purchase_status === k.noKcbGrowthPriv ||
                  e.purchase_status === k.noShPriv ||
                  e.purchase_status === k.noSzPriv ||
                  e.purchase_status === k.noCybPrivLimit ||
                  e.purchase_status === k.noSzKzz ||
                  e.purchase_status === k.noShKzz
                );
              })
            )
              return "无申购权限！";
            if (
              A(e).value.some(function (e) {
                return e.purchase_status === k.noEdu;
              })
            )
              return "无申购配额！";
          }
          return "";
        });
      },
      purchaseList: A,
      orderList: N,
      getSubInfo:
        ((S = r(
          t().mark(function e(r) {
            var n, a, u, i, o;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = {
                          type: r,
                          page_num:
                            E[["", "xgPageNum", "kcbPageNum", "cybPageNum"][r]],
                          page_size: E.pageSize,
                        }),
                        (E.fetching = !0),
                        (e.prev = 2),
                        (e.next = 5),
                        c.newstockCgi.subInfo(a)
                      );
                    case 5:
                      return (
                        (u = e.sent),
                        E.init ||
                          (E.hasData =
                            u.newstock_sub_list &&
                            u.newstock_sub_list.length > 0),
                        (E.init = !0),
                        (i = u.newstock_sub_list || []).forEach(function (e) {
                          e.profit_per_unit = isNaN(e.profit_per_unit)
                            ? "--"
                            : parseInt(e.profit_per_unit, 10);
                        }),
                        (o = {}),
                        e.abrupt(
                          "return",
                          (1 ===
                            (null ==
                            (n = null == u ? void 0 : u.sub_statis_info)
                              ? void 0
                              : n.length) && (o = u.sub_statis_info[0] || {}),
                          s.isEmpty(o) ||
                            (r === c.SUB_INFO_TYPE.STOCK
                              ? (E.sub_statis_info_xg = {
                                  leftTopTitle: o.newstock_num || "--",
                                  rightTopTitle: "".concat(
                                    o.total_rise_day_avg || "--",
                                    "天"
                                  ),
                                  leftBottomTitle:
                                    o.total_rise_fall_avg || "--",
                                  rightBottomTitle:
                                    o.total_profit_unit_avg || "--",
                                })
                              : r === c.SUB_INFO_TYPE.CYB_STOCK
                              ? (E.sub_statis_info_cyb = {
                                  leftTopTitle: o.total_gem_stock_num || "--",
                                  rightTopTitle:
                                    o.total_gem_stock_break_num || "--",
                                  leftBottomTitle:
                                    o.total_gem_rise_fall || "--",
                                  rightBottomTitle:
                                    o.total_gem_profit_unit || "--",
                                })
                              : r === c.SUB_INFO_TYPE.KCB_STOCK &&
                                (E.sub_statis_info_kcb = {
                                  leftTopTitle: o.total_kcb_stock_num || "--",
                                  rightTopTitle:
                                    o.total_kcb_stock_break_num || "--",
                                  leftBottomTitle:
                                    o.total_kcb_rise_fall || "--",
                                  rightBottomTitle:
                                    o.total_kcb_profit_unit || "--",
                                })),
                          r === c.SUB_INFO_TYPE.STOCK
                            ? (i.length < E.pageSize
                                ? (E.xgNoData = !0)
                                : (E.xgPageNum += 1),
                              (E.xgLists = E.xgLists.concat(i)))
                            : r === c.SUB_INFO_TYPE.CYB_STOCK
                            ? (i.length < E.pageSize
                                ? (E.cybNoData = !0)
                                : (E.cybPageNum += 1),
                              (E.cybLists = E.cybLists.concat(i)))
                            : r === c.SUB_INFO_TYPE.KCB_STOCK &&
                              (i.length < E.pageSize
                                ? (E.kcbNoData = !0)
                                : (E.kcbPageNum += 1),
                              (E.kcbLists = E.kcbLists.concat(i))),
                          (E.fetching = !1),
                          i)
                        )
                      );
                    case 13:
                      (e.prev = 13),
                        (e.t0 = e.catch(2)),
                        (E.fetching = !1),
                        r === c.SUB_INFO_TYPE.STOCK && (E.hasData = !1),
                        s.index.showToast({ title: e.t0.retmsg, icon: "none" });
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 13]]
            );
          })
        )),
        function (e) {
          return S.apply(this, arguments);
        }),
      queryRecentNewStockList:
        ((g = r(
          t().mark(function e() {
            var r, n, s;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (z.purchaseList_xg ? z.purchaseList_xg.length : 0) +
                          (z.purchaseList_xg_cyb
                            ? z.purchaseList_xg_cyb.length
                            : 0) +
                          (z.purchaseList_xg_kcb
                            ? z.purchaseList_xg_kcb.length
                            : 0) +
                          (z.purchaseList_xz ? z.purchaseList_xz.length : 0) +
                          (z.purchaseList_xz_cyb
                            ? z.purchaseList_xz_cyb.length
                            : 0) +
                          (z.purchaseList_xz_kcb
                            ? z.purchaseList_xz_kcb.length
                            : 0) !==
                        0
                      ) {
                        e.next = 12;
                        break;
                      }
                      return (
                        (e.prev = 1),
                        (e.next = 4),
                        c.newstockCgi.getNewStocks({ type: 2 })
                      );
                    case 4:
                      (n = e.sent),
                        (s =
                          (null ==
                          (r = null == n ? void 0 : n.after_purchase_list)
                            ? void 0
                            : r.filter(function (e, t) {
                                return t < 2;
                              })) || []),
                        (z.afterPurchaseList = s),
                        (e.next = 12);
                      break;
                    case 9:
                      throw ((e.prev = 9), (e.t0 = e.catch(1)), e.t0);
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 9]]
            );
          })
        )),
        function () {
          return g.apply(this, arguments);
        }),
      onConfirm:
        ((h = r(
          t().mark(function e(r) {
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        u.passwordCgi.shouldCheckPassword()
                      );
                    case 3:
                      "1" === e.sent.needcheck
                        ? d.Auth({
                            biometricsScene: b.BiometricsScene.NEW_STOCK_SUB,
                            theme: a.THEME.TRADE,
                            isTrade: !0,
                            showErrorWithNotice: !1,
                            onSuccess: function (e) {
                              B(r, e.encodePwd);
                            },
                          })
                        : B(r),
                        (e.next = 11);
                      break;
                    case 8:
                      (e.prev = 8),
                        (e.t0 = e.catch(0)),
                        s.index.showToast({
                          title: e.t0.retmsg || "网络繁忙 请稍后再试",
                          icon: "none",
                        });
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 8]]
            );
          })
        )),
        function (e) {
          return h.apply(this, arguments);
        }),
      showKcbKzzTip: function (n) {
        return new Promise(function (s) {
          var c,
            a = [];
          N(n).value.forEach(function (e) {
            o.defaultMarketUtils.isKcbDebt(e.purchase_code) &&
              "1" === e.kcb_kzz_risk_tips &&
              a.push({ market: e.market, code: e.purchase_code });
          }),
            a.length
              ? _.Dialog({
                  title: "科创板可转债",
                  message:
                    "投资者参与科创板可转债应符合科创板股票投资者适当性管理要求,未开通科创板交易权限的投资者请关注并知晓不能转股可能造成的影响。",
                  messageAlign: "left",
                  showClose: !0,
                  confirmButtonText: "继续打新",
                  beforeClose:
                    ((c = r(
                      t().mark(function n(c, u) {
                        return t().wrap(
                          function (n) {
                            for (;;)
                              switch ((n.prev = n.next)) {
                                case 0:
                                  if ("confirm" !== c) {
                                    n.next = 13;
                                    break;
                                  }
                                  return (
                                    (n.prev = 1),
                                    (n.next = 4),
                                    (function () {
                                      var n = r(
                                        t().mark(function n(s) {
                                          var c, a, u;
                                          return t().wrap(function (n) {
                                            for (;;)
                                              switch ((n.prev = n.next)) {
                                                case 0:
                                                  if (
                                                    ((a = f.useUserinfoStore()),
                                                    "1" !==
                                                      (null == (c = a.userinfo)
                                                        ? void 0
                                                        : c.kcb_kzz_tips_broker))
                                                  ) {
                                                    n.next = 7;
                                                    break;
                                                  }
                                                  return (
                                                    (u = s.map(
                                                      (function () {
                                                        var n = r(
                                                          t().mark(function r(
                                                            n
                                                          ) {
                                                            return t().wrap(
                                                              function (t) {
                                                                for (;;)
                                                                  switch (
                                                                    (t.prev =
                                                                      t.next)
                                                                  ) {
                                                                    case 0:
                                                                      return (
                                                                        (t.next = 2),
                                                                        p.signProtocol.signKcbKzz(
                                                                          n
                                                                        )
                                                                      );
                                                                    case 2:
                                                                      K(
                                                                        e(
                                                                          e(
                                                                            {},
                                                                            n
                                                                          ),
                                                                          {},
                                                                          {
                                                                            value:
                                                                              "0",
                                                                          }
                                                                        )
                                                                      );
                                                                    case 3:
                                                                    case "end":
                                                                      return t.stop();
                                                                  }
                                                              },
                                                              r
                                                            );
                                                          })
                                                        );
                                                        return function (e) {
                                                          return n.apply(
                                                            this,
                                                            arguments
                                                          );
                                                        };
                                                      })()
                                                    )),
                                                    (n.next = 5),
                                                    Promise.allSettled(u)
                                                  );
                                                case 5:
                                                  n.next = 10;
                                                  break;
                                                case 7:
                                                  return (
                                                    (n.next = 9),
                                                    p.signProtocol.signKcbKzz(
                                                      s[0]
                                                    )
                                                  );
                                                case 9:
                                                  s.forEach(function (t) {
                                                    K(
                                                      e(
                                                        e({}, t),
                                                        {},
                                                        { value: "0" }
                                                      )
                                                    );
                                                  });
                                                case 10:
                                                case "end":
                                                  return n.stop();
                                              }
                                          }, n);
                                        })
                                      );
                                      return function (e) {
                                        return n.apply(this, arguments);
                                      };
                                    })()(a)
                                  );
                                case 4:
                                  s(!0), (n.next = 10);
                                  break;
                                case 7:
                                  (n.prev = 7), (n.t0 = n.catch(1)), s(!0);
                                case 10:
                                  u(), (n.next = 14);
                                  break;
                                case 13:
                                  u();
                                case 14:
                                case "end":
                                  return n.stop();
                              }
                          },
                          n,
                          null,
                          [[1, 7]]
                        );
                      })
                    )),
                    function (e, t) {
                      return c.apply(this, arguments);
                    }),
                })
              : s();
        });
      },
      selectHandler: function (e, t) {
        switch (e) {
          case x.STOCK:
            return (
              z.purchaseList_xg.forEach(function (e) {
                return !e._disabled && (e._selected = t);
              }),
              z.purchaseList_xg_cyb.forEach(function (e) {
                return !e._disabled && (e._selected = t);
              }),
              z.purchaseList_xg_kcb.forEach(function (e) {
                return !e._disabled && (e._selected = t);
              }),
              z.purchaseList_xz.forEach(function (e) {
                return !e._disabled && (e._selected = !1);
              }),
              z.purchaseList_xz_cyb.forEach(function (e) {
                return !e._disabled && (e._selected = !1);
              }),
              void z.purchaseList_xz_kcb.forEach(function (e) {
                return !e._disabled && (e._selected = !1);
              })
            );
          case x.DEBT:
            return (
              z.purchaseList_xg.forEach(function (e) {
                return !e._disabled && (e._selected = !1);
              }),
              z.purchaseList_xg_cyb.forEach(function (e) {
                return !e._disabled && (e._selected = !1);
              }),
              z.purchaseList_xg_kcb.forEach(function (e) {
                return !e._disabled && (e._selected = !1);
              }),
              z.purchaseList_xz.forEach(function (e) {
                return !e._disabled && (e._selected = t);
              }),
              z.purchaseList_xz_cyb.forEach(function (e) {
                return !e._disabled && (e._selected = t);
              }),
              void z.purchaseList_xz_kcb.forEach(function (e) {
                return !e._disabled && (e._selected = t);
              })
            );
          default:
            return (
              z.purchaseList_xg.forEach(function (e) {
                return !e._disabled && (e._selected = t);
              }),
              z.purchaseList_xg_cyb.forEach(function (e) {
                return !e._disabled && (e._selected = t);
              }),
              z.purchaseList_xg_kcb.forEach(function (e) {
                return !e._disabled && (e._selected = t);
              }),
              z.purchaseList_xz.forEach(function (e) {
                return !e._disabled && (e._selected = t);
              }),
              z.purchaseList_xz_cyb.forEach(function (e) {
                return !e._disabled && (e._selected = t);
              }),
              void z.purchaseList_xz_kcb.forEach(function (e) {
                return !e._disabled && (e._selected = t);
              })
            );
        }
      },
      signNewstockPurchaseRiskProtocol:
        ((i = r(
          t().mark(function e() {
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(
                        (function () {
                          var e = r(
                            t().mark(function e(r, n) {
                              return t().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (e.next = 3),
                                          p.signProtocol.signNewstockPurchaseRiskTips()
                                        );
                                      case 3:
                                        (z.needNewStockPurchaseRiskTip = !1),
                                          r(),
                                          (e.next = 10);
                                        break;
                                      case 7:
                                        (e.prev = 7),
                                          (e.t0 = e.catch(0)),
                                          (z.needNewStockPurchaseRiskTip = !0),
                                          n(e.t0);
                                      case 10:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                null,
                                [[0, 7]]
                              );
                            })
                          );
                          return function (t, r) {
                            return e.apply(this, arguments);
                          };
                        })()
                      )
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        function () {
          return i.apply(this, arguments);
        }),
    };
  });
