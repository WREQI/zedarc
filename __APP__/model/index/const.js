var S,
  E,
  T = require("../../@babel/runtime/helpers/defineProperty");
require("../../app.js");
var e = require("../../config/enum.js"),
  r =
    (T((S = {}), e.STOCK_STATE.DELISTED, "退市"),
    T(S, e.STOCK_STATE.SUSPENDED, "暂停上市"),
    T(S, e.STOCK_STATE.SUSPENSION, "停牌"),
    T(S, e.STOCK_STATE.PURCHASE, "申购日"),
    T(S, e.STOCK_STATE.UNLIST, "待上市"),
    T(S, e.STOCK_STATE.UNISSUED, "待发行"),
    T(S, e.STOCK_STATE.NORMAL, ""),
    S),
  _ = {
    ZDF: "zdf",
    ZDE: "zde",
    ZSZ: "zsz",
    NCZJ: "nczj",
    NEWPRICE: "new_price",
  },
  C =
    (T((E = {}), _.ZDF, "涨跌幅"),
    T(E, _.ZDE, "涨跌额"),
    T(E, _.ZSZ, "总市值"),
    T(E, _.NEWPRICE, "最新价"),
    T(E, _.NCZJ, "年初至今"),
    E);
(exports.RISE_COLUMN_MODE_MAP = _),
  (exports.RISE_COLUMN_MODE_NAME_MAP = C),
  (exports.TEXT_MAP = r);
