var e = require("../../../../../../@babel/runtime/helpers/defineProperty"),
  t = require("../../../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../../../@babel/runtime/helpers/createClass"),
  n = require("../../../../../../@babel/runtime/helpers/inherits"),
  o = require("../../../../../../@babel/runtime/helpers/createSuper"),
  c = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  _ = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  E = Object.defineProperty,
  s = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  T = Object.prototype.hasOwnProperty,
  O = Object.prototype.propertyIsEnumerable,
  u = function (e, t, r) {
    return t in e
      ? E(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  R = function (e, t) {
    for (var r in t || (t = {})) T.call(t, r) && u(e, r, t[r]);
    if (a) {
      var n,
        o = _(a(t));
      try {
        for (o.s(); !(n = o.n()).done; ) {
          r = n.value;
          O.call(t, r) && u(e, r, t[r]);
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
    }
    return e;
  },
  S = function (e, t) {
    return s(e, i(t));
  },
  p = function (e, t, r) {
    return new Promise(function (n, o) {
      var c = function (e) {
          try {
            E(r.next(e));
          } catch (e) {
            o(e);
          }
        },
        _ = function (e) {
          try {
            E(r.throw(e));
          } catch (e) {
            o(e);
          }
        },
        E = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(c, _);
        };
      E((r = r.apply(e, t)).next());
    });
  },
  I = require("../../../../../../common/vendor.js"),
  N = {
    channel: 0,
    scenes: 0,
    rank_name: "mncg_wzq_new",
    cfgPlatform: "mp",
    fitPhoneDialogCode: [],
    fitPhoneDialogMsg: [],
  },
  A = (function (e) {
    return (
      (e[(e.BIG_GAME = 1)] = "BIG_GAME"),
      (e[(e.ARENA_GAME = 2)] = "ARENA_GAME"),
      (e[(e.TRAINING_GAME = 3)] = "TRAINING_GAME"),
      (e[(e.FINAL_GAME = 4)] = "FINAL_GAME"),
      e
    );
  })(A || {}),
  f = (function (e) {
    return (e.WX = "weixin"), (e.QQ = "qq"), (e.NONE = "none"), e;
  })(f || {}),
  m = (function (e) {
    return (
      (e.GOT_USERINFO = "GOT_USERINFO"),
      (e.GOT_GAME_ID = "GOT_GAME_ID"),
      (e.FIRST_IN_ALERT = "FIRST_IN_ALERT"),
      (e.GOT_ASSET_OVERVIEW = "GOT_ASSET_OVERVIEW"),
      (e.GOT_ENTRUST_LIST = "GOT_ENTRUST_LIST"),
      (e.ORDER_CHANGE = "ORDER_CHANGE"),
      (e.GOT_MOCK_TRADE_SWITCH = "GOT_MOCK_TRADE_SWITCH"),
      (e.GOT_HISTORY_LIST = "GOT_HISTORY_LIST"),
      (e.GOT_STOCK_INFO = "GOT_STOCK_INFO"),
      (e.TRADE_INITED = "TRADE_INITED"),
      (e.TRADE_NUMBER_SET = "TRADE_NUMBER_SET"),
      (e.TRADE_PRICE_SET = "TRADE_PRICE_SET"),
      (e.SUBMIT_ORDER_SUCCESS = "SUBMIT_ORDER_SUCCESS"),
      (e.SEARCH_INITED = "SEARCH_INITED"),
      (e.SEARCH_START = "SEARCH_START"),
      (e.SEARCH_SUCCESS = "SEARCH_SUCCESS"),
      (e.GOT_TOP_SEARCHED_STOCKS = "GOT_TOP_SEARCHED_STOCKS"),
      (e.GOT_SEARCH_HISTORY_DATA = "GOT_SEARCH_HISTORY_DATA"),
      (e.GOT_RULE_LIST = "GOT_RULE_LIST"),
      (e.ERROR_ALERT = "ERROR_ALERT"),
      (e.SIGN_AGREEMENT_SUCCESS = "SIGN_AGREEMENT_SUCCESS"),
      (e.NOT_ALLOW_ALERT = "NOT_ALLOW_ALERT"),
      (e.OFFLINE_ALERT = "OFFLINE_ALERT"),
      (e.RANK_HOME = "RANK_HOME"),
      (e.RANK_AWARD = "RANK_AWARD"),
      (e.RANK_REGISTER = "RANK_REGISTER"),
      (e.RANK_TOTAL = "RANK_TOTAL"),
      (e.VTOOLS_CFG = "VTOOLS_CFG"),
      (e.H5USERINFO = "H5USERINFO"),
      (e.GOT_HOT_STOCK = "GOT_HOT_STOCK"),
      (e.GOT_STOCK_RANK = "GOT_STOCK_RANK"),
      (e.QUERY_USER_SETTING = "QUERY_USER_SETTING"),
      (e.SET_USER_SETTING = "SET_USER_SETTING"),
      (e.QUERY_USER_OPENACCOUNT = "QUERY_USER_OPENACCOUNT"),
      (e.GET_RECOMMEND_DATA = "GET_RECOMMEND_DATA"),
      (e.RESET_ACCOUNT_SUCCESS = "RESET_ACCOUNT_SUCCESS"),
      (e.RESET_ACCOUNT_FAIL = "RESET_ACCOUNT_FAIL"),
      e
    );
  })(m || {}),
  C = (function (e) {
    return (
      (e.ON_USERINFO_UPDATE = "onUserInfoUpdate"),
      (e.ON_LOGIN = "onLogin"),
      (e.ON_LOGOUT = "onLogout"),
      (e.ON_REMOTE_CONTROL_DATA_CHANGE = "onRemoteControlDataChange"),
      e
    );
  })(C || {}),
  d = (function (e) {
    return (
      (e[(e.POSITION = 0)] = "POSITION"),
      (e[(e.ENTRUST = 1)] = "ENTRUST"),
      (e[(e.HISTORY = 2)] = "HISTORY"),
      e
    );
  })(d || {}),
  l = (function (e) {
    return (
      (e[(e.SEARCH_HISTORY = 0)] = "SEARCH_HISTORY"),
      (e[(e.HOLD_STOCK = 1)] = "HOLD_STOCK"),
      (e[(e.CHOOSE_STOCK = 2)] = "CHOOSE_STOCK"),
      e
    );
  })(l || {}),
  h = (function (e) {
    return (
      (e.TODAY = "today"),
      (e.COUNT = "count"),
      (e.MONTH = "month"),
      (e.NORMAL = "normal"),
      e
    );
  })(h || {}),
  g = (function (e) {
    return (e[(e.BUY = 1)] = "BUY"), (e[(e.SELL = 2)] = "SELL"), e;
  })(g || {}),
  D = (function (e) {
    return (e[(e.sz = 0)] = "sz"), (e[(e.sh = 1)] = "sh"), e;
  })(D || {}),
  y = (function (e) {
    return (
      (e[(e.INIT = 0)] = "INIT"),
      (e[(e.OFFERED = 1)] = "OFFERED"),
      (e[(e.MATCHED = 2)] = "MATCHED"),
      (e[(e.WITHDRAW = 3)] = "WITHDRAW"),
      (e[(e.SYS_WITHDRAW = 4)] = "SYS_WITHDRAW"),
      (e[(e.FAIL = 5)] = "FAIL"),
      e
    );
  })(y || {}),
  U = (function (e) {
    return (
      (e.INIT = "交易中"),
      (e.OFFERED = "交易中"),
      (e.MATCHED = "全部成交"),
      (e.WITHDRAW = "全部撤单"),
      (e.SYS_WITHDRAW = "未成交"),
      (e.FAIL = "未成交"),
      e
    );
  })(U || {}),
  G = (function (e) {
    return (e[(e.UP = 0)] = "UP"), (e[(e.DOWN = 1)] = "DOWN"), e;
  })(G || {}),
  x = (function (e) {
    return (e[(e.NUMBER = 0)] = "NUMBER"), (e[(e.PRICE = 1)] = "PRICE"), e;
  })(x || {}),
  P = (function (e) {
    return (
      (e[(e.NOT_TRADE = -1)] = "NOT_TRADE"),
      (e[(e.BEFORE_OPEN = 0)] = "BEFORE_OPEN"),
      (e[(e.BEFORE_OPEN_BID = 1)] = "BEFORE_OPEN_BID"),
      (e[(e.OPEN_MORNING = 2)] = "OPEN_MORNING"),
      (e[(e.NOT_OPEN_NOON = 3)] = "NOT_OPEN_NOON"),
      (e[(e.OPEN_AFTERNOON = 4)] = "OPEN_AFTERNOON"),
      (e[(e.BEFORE_CLOSE_BID = 5)] = "BEFORE_CLOSE_BID"),
      (e[(e.CLOSED = 6)] = "CLOSED"),
      (e[(e.NONE = 7)] = "NONE"),
      (e[(e.AFTER_PREPARE = 10)] = "AFTER_PREPARE"),
      (e[(e.AFTER_TRADING = 11)] = "AFTER_TRADING"),
      e
    );
  })(P || {}),
  k = (function (e) {
    return (
      (e.NOT_TRADE = "休市中"),
      (e.BEFORE_OPEN = "待开盘"),
      (e.BEFORE_OPEN_BID = "集合竞价"),
      (e.OPEN_MORNING = "交易中"),
      (e.NOT_OPEN_NOON = "午间休市"),
      (e.OPEN_AFTERNOON = "交易中"),
      (e.BEFORE_CLOSE_BID = "集合竞价"),
      (e.CLOSED = "休市"),
      (e.NONE = "-"),
      (e.AFTER_PREPARE = "盘后交易"),
      (e.AFTER_TRADING = "盘后交易"),
      e
    );
  })(k || {}),
  v = (function (e) {
    return (
      (e.NORMAL = "0"),
      (e.DELISTED = "D"),
      (e.SUSPENSION = "S"),
      (e.SUSPENDED = "Z"),
      (e.UNLIST = "U"),
      (e.UNISSUED = "I"),
      (e.PURCHASE = "P"),
      e
    );
  })(v || {}),
  L = (function (e) {
    return (
      (e.NORMAL = ""),
      (e.DELISTED = "退市"),
      (e.SUSPENSION = "停牌"),
      (e.SUSPENDED = "暂停上市"),
      (e.UNLIST = "待上市"),
      (e.UNISSUED = "待发行"),
      (e.PURCHASE = "申购日"),
      (e.D = "退市"),
      (e.S = "停牌"),
      (e.Z = "暂停上市"),
      (e.U = "待上市"),
      (e.I = "待发行"),
      (e.P = "申购日"),
      e
    );
  })(L || {}),
  b = (function (e) {
    return (e[(e.WEEK = 0)] = "WEEK"), (e[(e.TOTAL = 1)] = "TOTAL"), e;
  })(b || {}),
  M = (function (e) {
    return (e.PROFIT = "1"), (e.LOSS = "-1"), (e.EMPTY = "0"), e;
  })(M || {}),
  q = (function (e) {
    return (
      (e[(e.KCB_MIN_UINT = 200)] = "KCB_MIN_UINT"),
      (e[(e.OTHER_MIN_UNIT = 100)] = "OTHER_MIN_UNIT"),
      e
    );
  })(q || {}),
  F = (function (e) {
    return (
      (e.MPWZQ = "wx4eff699c2e813ab6"), (e.MPWEAPP = "wx4ffb369b6881ee5e"), e
    );
  })(F || {}),
  w = "https://wzq.tenpay.com/cgi-bin",
  H = "".concat(w, "/stockgame.fcgi"),
  K = "".concat(w, "/mn_home.fcgi"),
  B = "".concat(w, "/mn_queryorder.fcgi"),
  Y = "".concat(w, "/mn_tradecancel.fcgi"),
  z = "".concat(w, "/mn_tradeinit.fcgi"),
  W = "".concat(w, "/mn_tradesubmit.fcgi"),
  j = "".concat(w, "/search.fcgi"),
  Q = "".concat(w, "/stockinfo.fcgi"),
  V = "".concat(w, "/activity_rank.fcgi"),
  $ = "".concat(w, "/stockgamerank.fcgi"),
  J = "".concat(w, "/userinfo.fcgi"),
  X = "".concat(w, "/activity_task.fcgi"),
  Z = "".concat(w, "/mn_stock_plate.fcgi"),
  ee = "".concat(w, "/mn_stock_plate.fcgi"),
  te = "".concat(w, "/stock_strategy.fcgi"),
  re = "".concat(w, "/usersetting.fcgi"),
  ne = "".concat(w, "/mn_account_operate.fcgi");
function oe(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    n = t.params,
    o = t.body,
    c = t.cacheTime,
    _ = t.header,
    E = { method: "GET", options: { isWithUserInfo: !0, cacheTime: c || 0 } };
  n &&
    (~e.indexOf("?")
      ? (e += "&".concat(
          Object.keys(n)
            .map(function (e) {
              return "".concat(e, "=").concat(n[e]);
            })
            .join("&")
        ))
      : (e += "?".concat(
          Object.keys(n)
            .map(function (e) {
              return "".concat(e, "=").concat(n[e]);
            })
            .join("&")
        )),
    (t.params = null)),
    o &&
      !r &&
      Object.keys(o).forEach(function (e) {
        return (o[e] = String(o[e]));
      });
  var s,
    i = R(R({ url: e }, E), t);
  if ((_ && (i.header = _), o))
    switch (N.cfgPlatform) {
      case "wzq":
      case "mp":
        i.data = i.body;
        break;
      case "zxg":
        r && ((i.body = JSON.stringify(i.body)), (i.type = "json"));
    }
  return ((s = i),
  new Promise(function (e, t) {
    Object.assign(s, {
      success: function (r) {
        0 != +r.retcode && t(r), e(r);
      },
      fail: function (e) {
        t(e);
      },
    }),
      I.request$1(s);
  }))
    .then(function (e) {
      return (
        (e.json = function () {
          return (
            "string" == typeof e.body &&
              (e.body = (function (e) {
                if ("string" != typeof e) return e;
                e = e.trim();
                try {
                  e = JSON.parse(e);
                } catch (t) {
                  e = new Function("return ".concat(e))();
                }
                return e;
              })(e.body)),
            e.body && void 0 !== e.body.retcode
              ? 0 == +e.body.retcode
                ? Promise.resolve(e.body)
                : Promise.reject(e.body)
              : Promise.resolve(e.body)
          );
        }),
        (e.text = function () {
          return Promise.resolve(e.body);
        }),
        e
      );
    })
    .catch(function (e) {
      return Promise.reject(e);
    });
}
var ce = function (e, t) {
    I.Request.reportMTAData(R({ eventName: e }, t));
  },
  _e = null,
  Ee = {
    getUserInfo: function () {
      return p(
        exports,
        null,
        c().mark(function e() {
          var t, r;
          return c().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!_e) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt(
                      "return",
                      (I.StockBridge.aegisReportEvent(
                        "MOCKTRADE-USEINFO-CACHE-SUCCESS"
                      ),
                      _e)
                    );
                  case 2:
                    return (
                      (e.prev = 2),
                      (e.next = 5),
                      I.StockBridge.request(J, I.RequestTypeEnum.POST, {
                        detail: 1,
                        dealer: 1,
                      })
                    );
                  case 5:
                    return (
                      (t = e.sent),
                      (r = S(R({}, t), {
                        type: "weixin",
                        openid:
                          (null == t ? void 0 : t.uid) ||
                          (null == t ? void 0 : t.openid) ||
                          (null == t ? void 0 : t.qluin) ||
                          "",
                        fskey:
                          (null == t ? void 0 : t.fskey) ||
                          (null == t ? void 0 : t.qlskey) ||
                          (null == t ? void 0 : t.skey) ||
                          "",
                        nickName: (null == t ? void 0 : t.nickname) || "",
                        headUrl: (null == t ? void 0 : t.headimgurl) || "",
                        uid: (null == t ? void 0 : t.uid) || "",
                        subscribe: null == t ? void 0 : t.subscribe,
                      })),
                      e.abrupt(
                        "return",
                        (!r.openid || r.fskey,
                        (_e = r),
                        I.StockBridge.aegisReportEvent(
                          "MOCKTRADE-USEINFO-SUCCESS",
                          { ext4: Object.keys(r).length || "" }
                        ),
                        r)
                      )
                    );
                  case 10:
                    return (
                      (e.prev = 10),
                      (e.t0 = e.catch(2)),
                      e.abrupt(
                        "return",
                        (I.StockBridge.aegisReportEvent(
                          "MOCKTRADE-USEINFO-ERROR",
                          {
                            ext4: JSON.stringify(
                              (null == e.t0 ? void 0 : e.t0.message) ||
                                e.t0 ||
                                {}
                            ),
                          }
                        ),
                        {
                          type: "weixin",
                          openid: "",
                          fskey: "",
                          nickName: "",
                          headUrl: "",
                          uid: "",
                          subscribe: 0,
                        })
                      )
                    );
                  case 13:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[2, 10]]
          );
        })
      );
    },
  },
  se = Ee.getUserInfo,
  ie = { mp: "微证券", wzq: "微证券", zxg: "微证券" },
  ae = (function (_) {
    n(s, _);
    var E = o(s);
    function s() {
      var e;
      return (
        t(this, s),
        ((e = E.call(this)).userInfo = {}),
        (e.hasSignAgreement = !0),
        (e.ruleList = [
          {
            name: "腾讯".concat(ie[N.cfgPlatform], "模拟炒股周赛规则"),
            id: "mock_trade_rules",
            url: "https://wzq.tenpay.com/mm/protocol?schemaid=protocol&appid=base&rowid=31",
          },
          {
            name: "腾讯".concat(ie[N.cfgPlatform], "用户服务协议"),
            id: "mock_trade_wzq_permit",
            url: "https://wzq.tenpay.com/mm/protocol?schemaid=protocol&appid=base&rowid=6",
          },
          {
            name: "腾讯".concat(ie[N.cfgPlatform], "隐私条款"),
            id: "mock_trade_wzq_privacy",
            url: "https://wzq.tenpay.com/mm/protocol?schemaid=protocol&appid=base&rowid=5",
          },
          {
            name: "腾讯".concat(ie[N.cfgPlatform], "儿童隐私保护声明"),
            id: "mock_trade_wzq_child",
            url: "https://wzq.tenpay.com/mm/protocol?schemaid=protocol&appid=base&rowid=4",
          },
        ]),
        (e.zxgLoginParamMap = {
          wzq: { app: "wzq", appid: "wx9cf8c670ebd68ce4", check: 11 },
          mp: { app: "zxg_xcx", appid: "wx9cf8c670ebd68ce4", check: 11 },
          zxg: { check: 13 },
        }),
        e.requestingUserinfo || e.getUserInfo(),
        e
      );
    }
    return (
      r(s, [
        {
          key: "isLogin",
          get: function () {
            return (
              this.userInfo.type !== f.NONE &&
              0 != Object.keys(this.userInfo).length
            );
          },
        },
        {
          key: "getUserInfo",
          value: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return p(
              this,
              null,
              c().mark(function t() {
                return c().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), se(e);
                        case 2:
                          (this.userInfo = t.sent),
                            I.StockBridge.aegisReportEvent(
                              "MOCKTRADE-MT-USERINFO",
                              { ext4: Object.keys(this.userInfo).length }
                            ),
                            this.emit(m.GOT_USERINFO);
                        case 5:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
          },
        },
        {
          key: "fetch",
          value: function (t, r, n) {
            return p(
              this,
              null,
              c().mark(function o() {
                var _, E, s, i;
                return c().wrap(
                  function (o) {
                    for (;;)
                      switch ((o.prev = o.next)) {
                        case 0:
                          if (
                            (/^https?:\/\//.test(t) ||
                              (t = "".concat(w).concat(t)),
                            (n && n.method) ||
                              (n = S(R({}, n), { method: "GET" })),
                            (_ = { channel: N.channel }),
                            n.notNeedGameInfo)
                          ) {
                            o.next = 13;
                            break;
                          }
                          if (((o.prev = 3), (o.t0 = this.gameId), o.t0)) {
                            o.next = 8;
                            break;
                          }
                          return (o.next = 8), this.getGameId();
                        case 8:
                          o.next = 12;
                          break;
                        case 10:
                          (o.prev = 10), (o.t1 = o.catch(3));
                        case 12:
                          _ = S(R({}, _), {
                            gameid: this.gameId || "",
                            type: A.TRAINING_GAME,
                            scenes: N.scenes,
                          });
                        case 13:
                          if (
                            ((o.t2 = this.userInfo && this.userInfo.fskey),
                            o.t2)
                          ) {
                            o.next = 17;
                            break;
                          }
                          return (o.next = 17), this.getUserInfo();
                        case 17:
                          if (
                            ("GET" === n.method &&
                              (_ = S(R({}, _), {
                                qluin: this.userInfo.openid || "",
                                qlskey: this.userInfo.fskey || "",
                              })),
                            -1 == t.indexOf("https://proxy.finance.qq.com"))
                          ) {
                            o.next = 21;
                            break;
                          }
                          ({}),
                            (E = {
                              openid: I.wx$1.getStorageSync("_qluin"),
                              fskey: I.wx$1.getStorageSync("_qlskey"),
                            }),
                            (_ = R(
                              R(R({}, _), E),
                              this.zxgLoginParamMap[N.cfgPlatform]
                            ));
                        case 21:
                          return (
                            [
                              "query_stocks_rank",
                              "get_new_user_recommend",
                            ].some(function (e) {
                              return -1 !== t.indexOf(e);
                            }) &&
                              ({},
                              (s = {
                                qluin: I.wx$1.getStorageSync("_qluin") || "",
                                qlskey: I.wx$1.getStorageSync("_qlskey") || "",
                              }),
                              (_ = R(R({}, _), s))),
                            (i = e(
                              { method: n.method },
                              "POST" === n.method ? "body" : "params",
                              R(R({}, _), r)
                            )),
                            o.abrupt(
                              "return",
                              (n.header && (i.header = n.header),
                              oe(t, i, n.notString).then(function (e) {
                                return e;
                              }))
                            )
                          );
                        case 24:
                        case "end":
                          return o.stop();
                      }
                  },
                  o,
                  this,
                  [[3, 10]]
                );
              })
            );
          },
        },
        {
          key: "getGameId",
          value: function () {
            var e = this;
            return this.fetch(H, { action: 10 }, { notNeedGameInfo: !0 })
              .then(function (t) {
                (e.gameId = t.pratice_game_id),
                  (e.isFirstIn = !!+t.amount),
                  (e.firstInAmount = +t.amount),
                  e.emit(m.GOT_GAME_ID);
              })
              .catch(function (t) {
                "51001097" === t.retcode ||
                "51001000" === t.retcode ||
                t.retmsg.indexOf("qluin or qlskey empty error") >= 0
                  ? e.getUserInfo(!0)
                  : "51093225" === t.retcode
                  ? ((e.isOffline = !0), e.emit(m.OFFLINE_ALERT))
                  : e.emit(m.ERROR_ALERT, t.retmsg);
              });
          },
        },
        {
          key: "signAgreement",
          value: function () {
            var e = this;
            return this.fetch(H, { action: 11 })
              .catch(function (t) {
                e.emit(m.ERROR_ALERT, t.retmsg);
              })
              .then(function () {
                (e.hasSignAgreement = !0), e.emit(m.SIGN_AGREEMENT_SUCCESS);
              });
          },
        },
        {
          key: "report",
          value: function (e, t, r) {
            var n =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : {},
              o = "trade.mocktrade."
                .concat(e.toLowerCase(), ".")
                .concat(t.toLowerCase(), ".")
                .concat(r.toLowerCase());
            ce(o, n);
          },
        },
      ]),
      s
    );
  })(I.EventEmitter);
(exports.ACTIVITY_RANK_CGI = V),
  (exports.ACT_TASK_CGI = X),
  (exports.ADD_TO_STOCK =
    "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq"),
  (exports.AD_QUERY_BY_TYPENAME =
    "https://wzq.tenpay.com/svr/ads/ad_comm_service/query_by_typename"),
  (exports.AD_REPORT = "https://wzq.tenpay.com/svr/ads/ad_comm_service/report"),
  (exports.API_HOT_STOCK = te),
  (exports.API_STOCK_RANK =
    "https://wzq.tenpay.com/svr/stock/wzq_stock_adapter/query_stocks_rank"),
  (exports.BaseController = ae),
  (exports.EVENT_NAME = m),
  (exports.FREQ_QUERY_CGI =
    "https://wzq.tenpay.com/svr/ads/ad_comm_service/freq_query"),
  (exports.FREQ_REPORT_CGI =
    "https://wzq.tenpay.com/svr/ads/ad_comm_service/freq_report"),
  (exports.FRONTEND_MIN_UNIT = q),
  (exports.GAME_TYPE = A),
  (exports.GET_NEW_USER_RECOMMEND_CGI =
    "https://wzq.tenpay.com/svr/ads/ad_comm_service/get_new_user_recommend"),
  (exports.HIPPY_EVENT = C),
  (exports.HOT_SEARCHED_STOCKS_CGI = ee),
  (exports.LIMIT_ACTIVITY_QUERY_CGI =
    "https://wzq.tenpay.com/svr/activity/simple_activity/guide_openaccount_home"),
  (exports.MARKET_CODE = D),
  (exports.MARKET_STATE = P),
  (exports.MARKET_STATE_CN = k),
  (exports.MN_ACCOUNT_OPERATE_CGI = ne),
  (exports.MN_HOME_CGI = K),
  (exports.NEW_CUSTOMER_TASKDONE_CGI =
    "https://wzq.tenpay.com/svr/activity/simple_activity/new_customer_taskdone"),
  (exports.ORDER_CANCEL_CGI = Y),
  (exports.ORDER_LIST_CGI = B),
  (exports.ORDER_STATUS = y),
  (exports.ORDER_STATUS_CN = U),
  (exports.ORDER_TYPE = g),
  (exports.PROFIT_STATUS = M),
  (exports.QUERY_ORDER_TYPE = h),
  (exports.RANK_TAB_LIST = b),
  (exports.SEARCH_CGI = j),
  (exports.SEARCH_TAB_LIST = l),
  (exports.STOCK_ADD_STATUS =
    "https://proxy.finance.qq.com/newstock/stockapp/zixuangu/stockAdd"),
  (exports.STOCK_CHOOSE_LIST =
    "https://proxy.finance.qq.com/newstock/stockapp/zixuangu/stocklist"),
  (exports.STOCK_GAME_RANK_CGI = $),
  (exports.STOCK_INFO_CGI = Q),
  (exports.STOCK_STATE = v),
  (exports.STOCK_STATE_CN = L),
  (exports.TAB_LIST = d),
  (exports.TOP_SEARCHED_STOCKS_CGI = Z),
  (exports.TRADE_DIM_TYPE = x),
  (exports.TRADE_DIRECTION_TYPE = G),
  (exports.TRADE_INIT_CGI = z),
  (exports.TRADE_SUBMIT_CGI = W),
  (exports.USERINFO_CGI = J),
  (exports.USERSETTING_CGI = re),
  (exports.XCX_APPID = F),
  (exports.config = N),
  (exports.myFetch = oe),
  (exports.report = ce);
