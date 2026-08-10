var _,
  t,
  E = require("../../@babel/runtime/helpers/defineProperty"),
  A = require("../../config/cgi.js"),
  R = {
    NONE: 0,
    HOME: 1,
    TRANSACTIONS: 2,
    TRANSDETAIL: 3,
    ENTRUST: 4,
    HOME_HOLDSTOCK_TAB: 5,
    HOME_ORDERLIST_TAB: 6,
    TRADE_HQ: 7,
    TRADE_POSITION: 8,
    TRADE_TODAY: 9,
    PRICE_CONDITION: 10,
    DEBT_INDEX_HQ: 13,
    DEBT_INDEX_RECORDS: 11,
    DEBT_TRADE_HQ: 12,
    MARGIN_HOME_HOLDSTOCK_TAB: 21,
    MARGIN_HOME_ORDERLIST_TAB: 22,
    MARGIN_HOME_LIABILITY_TAB: 23,
    MARGIN_TRADE_HOLDSTOCK_TAB: 24,
    MARGIN_TRADE_ORDERLIST_TAB: 25,
    MARGIN_TRADE_LIABILITY_TAB: 26,
  },
  r = { baseURL: "/", headers: { "Content-Type": "application/json" } },
  T =
    (E((t = {}), R.NONE, { noFirstDataWaiter: !0, routers: {} }),
    E(t, R.TRANSACTIONS, {
      routers: E({}, A.API_TRADE_QUERY, {
        data: { record: "today", refresh: !0, qry_type: 0 },
      }),
    }),
    E(t, R.TRANSDETAIL, { routers: E({}, A.API_TRADE_QUERY, { data: {} }) }),
    E(t, R.ENTRUST, {
      routers:
        ((_ = {}),
        E(_, A.API_TRADE_QUERY, {
          primary: !0,
          data: { record: "today", refresh: !0, qry_type: 0 },
        }),
        E(_, A.API_STOCK_INFO, { data: { type: 4 } }),
        _),
    }),
    E(t, R.HOME_HOLDSTOCK_TAB, {
      secu_type: "1",
      noFirstDataWaiter: !0,
      routers: {},
    }),
    E(t, R.HOME_ORDERLIST_TAB, {
      secu_type: "1",
      noFirstDataWaiter: !0,
      routers: E({}, A.API_ASSET_HOME_REFRESH, { data: {} }),
    }),
    E(t, R.TRADE_HQ, {
      secu_type: "3",
      noFirstDataWaiter: !0,
      routers: E({}, A.API_STOCK_INFO, { data: {} }),
    }),
    E(t, R.TRADE_POSITION, {
      secu_type: "3",
      noFirstDataWaiter: !0,
      routers: E({}, A.API_TRADE_REFRESH, { data: {} }),
    }),
    E(t, R.TRADE_TODAY, {
      secu_type: "3",
      noFirstDataWaiter: !0,
      routers: E({}, A.API_TRADE_REFRESH, { data: {} }),
    }),
    E(t, R.PRICE_CONDITION, {
      secu_type: "3",
      noFirstDataWaiter: !0,
      routers: {},
    }),
    E(t, R.DEBT_INDEX_HQ, { routers: E({}, A.API_REPOINFO, { data: {} }) }),
    E(t, R.DEBT_INDEX_RECORDS, {
      routers: E({}, A.API_TRADE_QUERY, {
        primary: !0,
        data: { record: "today", qry_type: 2 },
      }),
    }),
    E(t, R.DEBT_TRADE_HQ, { routers: E({}, A.API_STOCK_INFO, { data: {} }) }),
    E(t, R.MARGIN_HOME_HOLDSTOCK_TAB, {
      secu_type: "1",
      noFirstDataWaiter: !0,
      routers: E({}, A.API_MARGIN_ASSET_HOME_REFRESH, { data: {}, options: r }),
    }),
    E(t, R.MARGIN_HOME_ORDERLIST_TAB, {
      secu_type: "1",
      noFirstDataWaiter: !0,
      routers: E({}, A.API_MARGIN_ASSET_HOME_REFRESH, { data: {}, options: r }),
    }),
    E(t, R.MARGIN_HOME_LIABILITY_TAB, {
      secu_type: "1",
      noFirstDataWaiter: !0,
      routers: E({}, A.API_MARGIN_ASSET_HOME_REFRESH, { data: {}, options: r }),
    }),
    E(t, R.MARGIN_TRADE_HOLDSTOCK_TAB, {
      secu_type: "3",
      noFirstDataWaiter: !0,
      routers: E({}, A.API_MARGIN_TRADE_REFRESH, { data: {}, options: r }),
    }),
    E(t, R.MARGIN_TRADE_ORDERLIST_TAB, {
      secu_type: "3",
      noFirstDataWaiter: !0,
      routers: E({}, A.API_MARGIN_TRADE_REFRESH, { data: {}, options: r }),
    }),
    E(t, R.MARGIN_TRADE_LIABILITY_TAB, {
      secu_type: "3",
      noFirstDataWaiter: !0,
      routers: E({}, A.API_MARGIN_TRADE_REFRESH, { data: {}, options: r }),
    }),
    t);
(exports.SCHEME = R),
  (exports.handleMapsBeforeConnect = function (_) {
    "AssetIndex" === _ &&
      ((T[R.PRICE_CONDITION].routers = E({}, A.API_ASSET_HOME_REFRESH, {
        data: {},
      })),
      (T[R.HOME_HOLDSTOCK_TAB].routers = E({}, A.API_ASSET_HOME_REFRESH, {
        data: {},
      }))),
      "TradeStock" === _ &&
        (T[R.PRICE_CONDITION].routers = E({}, A.API_TRADE_REFRESH, {
          data: {},
        })),
      "PluginAssetData" === _ &&
        (T[R.HOME_HOLDSTOCK_TAB].routers = E({}, A.API_ASSET_REFRESH, {
          data: {},
        })),
      "AssetPortfolio" === _ &&
        (T[R.HOME_HOLDSTOCK_TAB].routers = E({}, A.API_ASSET_REFRESH, {
          data: {},
        })),
      "MarginAssetIndex" === _ &&
        ((T[R.MARGIN_HOME_HOLDSTOCK_TAB].routers = E(
          {},
          A.API_MARGIN_ASSET_HOME_REFRESH,
          { data: {} }
        )),
        (T[R.MARGIN_HOME_ORDERLIST_TAB].routers = E(
          {},
          A.API_MARGIN_ASSET_HOME_REFRESH,
          { data: {} }
        )),
        (T[R.MARGIN_HOME_LIABILITY_TAB].routers = E(
          {},
          A.API_MARGIN_ASSET_HOME_REFRESH,
          { data: {} }
        )));
  }),
  (exports.maps = T);
