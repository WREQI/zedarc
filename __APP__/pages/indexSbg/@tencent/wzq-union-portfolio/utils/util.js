var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../@babel/runtime/helpers/slicedToArray");
require("../../../../../@babel/runtime/helpers/Objectentries");
var t = require("../../../../../common/vendor.js"),
  o = require("../../stock-markets-base/utils/market.js"),
  n = [
    o.IPO_STATE_PENDING,
    o.IPO_STATE_PURCHASE,
    o.IPO_STATE_LISTED,
    o.IPO_STATE_PUBLISH,
    o.STOCK_STATE_DELIST,
    o.STOCK_STATE_PAUSE,
    o.STOCK_STATE_SUSPEND,
    o.STOCK_STATE_REPLACE,
  ],
  s = Object.fromEntries(
    n.map(function (e, r) {
      return [
        e,
        [
          "待发售",
          "申购日",
          "待上市",
          "发售中",
          "退市",
          "暂停上市",
          "停牌",
          "已切换",
        ][r],
      ];
    })
  ),
  i = "choose/userStock",
  a = "choose/userGroups";
(exports.ALL_GROUP_ID = "1"),
  (exports.COMMON_PAGE_STATUS = { LOADING: "loading", ERROR: "error" }),
  (exports.EXCEPTION_CODE = n),
  (exports.EXCEPTION_STATE = s),
  (exports.FIRST_SECTION_COUNT = 20),
  (exports.GROUPS_DEFAULT = [
    { name: "全部", id: "1", display: "1", type: "1" },
    { name: "沪深", id: "6", display: "1", type: "2" },
    { name: "港股", id: "5", display: "1", type: "2" },
    { name: "美股", id: "4", display: "1", type: "2" },
    { name: "ETF", id: "3", display: "1", type: "2" },
    { name: "场外基金", id: "7", display: "1", type: "2" },
    { name: "股单", id: "1000", display: "1", type: "2" },
  ]),
  (exports.HS_WS_RESULT_BUS_KEY = "market-choose-hqws-update-result"),
  (exports.INNER_INDEX = "_index_"),
  (exports.POSITION_GROUPINFO = {
    autorder: "1",
    autotag: "position",
    display: "1",
    hasYingkui: "0",
    id: "position",
    name: "持仓",
    shareGrpid: "",
    type: "-1",
  }),
  (exports.RENDER_COUNT = 50),
  (exports.RISE_COLUMN_MODE = ["rise_per", "rise", "zsz", "jnzdf", "zszUSD"]),
  (exports.SECTION_COUNT = 50),
  (exports.SORT_CAPTIONS = [
    { text: "最新价", orderBy: "price", order: 0 },
    { text: "涨跌幅", orderBy: "rise_per", order: 0 },
    { text: "年初至今", orderBy: "jnzdf", order: 0 },
  ]),
  (exports.SORT_CAPTIONS_PRO = [
    { text: "最新价", orderBy: "price", order: 0 },
    { text: "涨跌幅", orderBy: "rise_per", order: 0 },
    { text: "涨跌额", orderBy: "rise", order: 0 },
    { text: "总市值", orderBy: "zsz", order: 0 },
    { text: "年初至今", orderBy: "jnzdf", order: 0 },
  ]),
  (exports.STOCKBASKET_GROUPID = "1000"),
  (exports.buildUrl = function (e, t) {
    return t && 0 !== Object.keys(t).length
      ? "".concat(e, "?").concat(
          Object.entries(t)
            .map(function (e) {
              var t = r(e, 2),
                o = t[0],
                n = t[1];
              return ""
                .concat(encodeURIComponent(o), "=")
                .concat(encodeURIComponent(n.toString()));
            })
            .join("&")
        )
      : e;
  }),
  (exports.eq = function (e, r) {
    return e === r ? 0 !== e || 1 / e == 1 / r : e != e && r != r;
  }),
  (exports.getLocalUserGroups = function () {
    return t.StockBridge.getStorage(a) || [];
  }),
  (exports.getLocalUserStock = function () {
    return t.StockBridge.getStorage(i);
  }),
  (exports.getLoginInfo = function () {
    return (
      (r = exports),
      null,
      (o = e().mark(function r() {
        var o, n, s, i;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (s =
                    null ==
                    (n = null == (o = t.wx$1) ? void 0 : o.getLaunchOptionsSync)
                      ? void 0
                      : n.call(o)),
                  (i = s ? s.scene : ""),
                  e.abrupt("return", {
                    openid: t.StockBridge.getStorage("_qluin"),
                    fskey: t.StockBridge.getStorage("_qlskey"),
                    version: "1.0.1",
                    scene: i,
                  })
                );
              case 2:
              case "end":
                return e.stop();
            }
        }, r);
      })),
      new Promise(function (e, t) {
        var n = function (e) {
            try {
              i(o.next(e));
            } catch (e) {
              t(e);
            }
          },
          s = function (e) {
            try {
              i(o.throw(e));
            } catch (e) {
              t(e);
            }
          },
          i = function (r) {
            return r.done ? e(r.value) : Promise.resolve(r.value).then(n, s);
          };
        i((o = o.apply(r, null)).next());
      })
    );
    var r, o;
  }),
  (exports.setLocalUserGroups = function (e) {
    return t.StockBridge.setStorage(a, e);
  }),
  (exports.setLocalUserStock = function (e) {
    return t.StockBridge.setStorage(i, e);
  }),
  (exports.trim = function (e, r) {
    if (null == e) return "";
    var t = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
      o = new RegExp("^[".concat(t, "]+|[").concat(t, "]+$"), "g");
    return e.replace(o, "");
  });
