var e = require("../../../../@babel/runtime/helpers/toConsumableArray");
require("../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = require("../../../../@babel/runtime/helpers/classCallCheck"),
  a = require("../../../../@babel/runtime/helpers/createClass"),
  i = Object.defineProperty,
  o = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  s = function (e, t, n) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  l = function (e, t, n) {
    return new Promise(function (r, a) {
      var i = function (e) {
          try {
            c(n.next(e));
          } catch (e) {
            a(e);
          }
        },
        o = function (e) {
          try {
            c(n.throw(e));
          } catch (e) {
            a(e);
          }
        },
        c = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(i, o);
        };
      c((n = n.apply(e, t)).next());
    });
  },
  d = require("../../../../common/vendor.js"),
  p = require("../stock-hq-data/api/remind.js"),
  f = require("hooks/useCardSetting.js"),
  m = require("../stock-base/visibilityObserver/index.js"),
  v = {
    id: "accountcard",
    text: "微信小程序账户卡",
    name: "AccountCardSetting",
    stat: "base.new_profile.account_card_click",
    rightType: "redPointRight",
    brow: "base.new_profile.account_card_brow",
  },
  h = {
    id: "ai",
    text: "帮助与客服",
    stat: "base.new_profile.ai_service_click",
    brow: "base.new_profile.ai_service_brow",
  },
  g = {
    id: "feedback",
    text: "意见反馈",
    stat: "base.new_profile.feedback_click",
    brow: "base.new_profile.feedback_brow",
    authorizationId: "feedback",
  },
  k = {
    id: "feedback_community",
    text: "用户体验共创社区",
    name: "feedbackDetail",
    stat: "base.new_profile.feedback_community_click",
    brow: "base.new_profile.feedback_community_brow",
    query: { title: encodeURIComponent("用户体验共创社区") },
    authorizationId: "feedback_community",
  },
  b = {
    id: "myRights",
    text: "我的权益",
    name: "Level2",
    stat: "base.new_profile.my_rights_click",
  },
  w = [],
  _ = "last-my-rights-status",
  y = {
    MESSAGE_CONFIG: {
      id: "message",
      text: "消息盒子",
      name: "home-message",
      stat: "base.new_profile.message_click",
      authorizationId: "message",
    },
    NEW_MESSAGE_CONFIG: {
      id: "messagev2",
      text: "消息盒子",
      name: "home-message-v2",
      stat: "base.new_profile.messagev2_click",
      authorizationId: "message",
    },
    MOCKTRADE_CONFIG: {
      id: "simulate",
      text: "模拟炒股",
      name: "mocktrade",
      stat: "base.new_profile.asset_simulate_click",
    },
    AI_CONFIG: h,
    FEEDBACK_CONFIG: g,
    myServiceArr: [
      {
        id: "welware",
        text: "我的福利",
        path: "https://wzq.tenpay.com/activity/page/welwareCenterNew/#/index",
        openUseLocation: !0,
        openUseActWebview: !0,
        stat: "base.new_profile.func_welware_click",
        imgClass: "img-welware",
        authorizationId: "welware",
      },
      {
        id: "history",
        text: "浏览记录",
        stat: "base.new_profile.func_history_click",
        name: "accountHistory",
        authorizationId: "history",
      },
      {
        id: "personal",
        text: "社区记录",
        path: "https://wzq.tenpay.com/mp/v2/index.html#/personal/index",
        openUseWebview: !0,
        stat: "base.new_profile.func_profile_click",
        authorizationId: "personal",
      },
    ],
    otherSettingArr: [
      {
        id: "remind",
        text: "股票提醒",
        name: "RemindIndex",
        stat: "base.new_profile.func_remind_click",
        authorizationId: "remind",
      },
      {
        id: "setting",
        text: "通用设置",
        name: "SettingCenter",
        stat: "base.new_profile.setting_click",
      },
      h,
      g,
      k,
    ],
    AiChannelConfig: {
      stock: {
        channel: 14,
        stat: "IHR00p000r006",
        entry: "wzq_my_help_feedback",
      },
      mpwzq: {
        channel: 17,
        stat: "Ifm00p000r013",
        entry: "wzq_applet_help_advice",
      },
      mpweapp: { channel: 75, stat: "IVg00p000r006", entry: "zxg_applet" },
      wzqlight: {
        channel: 18,
        stat: "IVg00p000r006",
        entry: "wzq_my_help_feedback",
      },
      default: {
        channel: 18,
        stat: "IVg00p000r006",
        entry: "wzq_my_help_feedback",
      },
    },
    FBChannelConfig: {
      stock: { entry: "wzq_my_feedback" },
      mpwzq: { entry: "wzq_applet_my_feedback" },
      mpweapp: { entry: "zxg_applet_my_feedback" },
      wzqlight: { entry: "wzq_my_feedback" },
      default: { entry: "wzq_my_feedback" },
    },
    FIND_STOCK: {
      id: "findstock",
      text: "发现股票",
      name: "findStockIndex",
      stat: "base.new_profile.ai_find_stock_click",
    },
    AI_MODEL_TRADING: {
      id: "ai_model_trading",
      text: "AI模拟炒股大赛",
      name: "aiModelTradingEntry",
      stat: "base.new_profile.ai_model_trading_click",
    },
    AI_ICON_CONFIG: {
      id: "ai_icon",
      text: "帮助与客服",
      stat: "base.new_profile.ai_service_click",
      brow: "base.new_profile.ai_service_brow",
    },
  },
  x = "https://wzq.tenpay.com/",
  S = "".concat(x, "svr/user/user_service/get_user_center_info"),
  C = "".concat(x, "svr/activity/simple_activity/hkc_account_check_award"),
  B = "".concat(x, "svr/stock/alert/query"),
  q = "lite/level2-hk-rights-cache",
  A = new ((function () {
    function e() {
      r(this, e);
    }
    return (
      a(e, [
        {
          key: "queryVirtualAsset",
          value: function () {
            return d.StockBridge.request(S, d.RequestTypeEnum.GET);
          },
        },
        {
          key: "queryRemindNum",
          value: function () {
            return d.StockBridge.request(
              B,
              d.RequestTypeEnum.POST,
              {},
              { headers: { "Content-Type": "application/json" } }
            ).catch(function (e) {
              throw e;
            });
          },
        },
        {
          key: "getLevel2Rights",
          value: function () {
            return l(
              this,
              null,
              t().mark(function e() {
                var r, a, i, l, p, f, m, v, h;
                return t().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((e.prev = 0),
                            (p = {
                              openid: d.StockBridge.getCookie("wzq_qluin"),
                              fskey: d.StockBridge.getCookie("wzq_qlskey"),
                              qluin: d.StockBridge.getCookie("qluin"),
                              check: 11,
                            }),
                            d.StockBridge.ENV === d.EnvTypeEnum.MP &&
                              ((p.openid = d.StockBridge.getStorage("_qluin")),
                              (p.fskey = d.StockBridge.getStorage("_qlskey")),
                              (p.qluin = d.StockBridge.getStorage("qluin"))),
                            (f =
                              (null == p ? void 0 : p.openid) ||
                              (null == p ? void 0 : p.qluin)),
                            p.openid && p.fskey)
                          ) {
                            e.next = 6;
                            break;
                          }
                          return e.abrupt("return");
                        case 6:
                          return (
                            (m = {
                              app: "zxg_xcx",
                              appid: "wx4ffb369b6881ee5e",
                              openid: f,
                              fskey: p.fskey,
                              access_token: p.fskey,
                              check: 11,
                            }),
                            (e.next = 9),
                            d.StockBridge.request(
                              "https://proxy.finance.qq.com/cgi/cgi-bin/level2/vip/right",
                              "GET",
                              (function (e, t) {
                                for (var r in t || (t = {}))
                                  c.call(t, r) && s(e, r, t[r]);
                                if (o) {
                                  var a,
                                    i = n(o(t));
                                  try {
                                    for (i.s(); !(a = i.n()).done; ) {
                                      r = a.value;
                                      u.call(t, r) && s(e, r, t[r]);
                                    }
                                  } catch (e) {
                                    i.e(e);
                                  } finally {
                                    i.f();
                                  }
                                }
                                return e;
                              })({ ywid: "HKLV2" }, m),
                              {}
                            )
                          );
                        case 9:
                          if (
                            0 !== (null == (v = e.sent) ? void 0 : v.code) ||
                            !(null ==
                            (a =
                              null == (r = null == v ? void 0 : v.data)
                                ? void 0
                                : r.rights)
                              ? void 0
                              : a.length)
                          ) {
                            e.next = 13;
                            break;
                          }
                          return (
                            (h =
                              null == (i = null == v ? void 0 : v.data)
                                ? void 0
                                : i.rights[0]),
                            e.abrupt(
                              "return",
                              (d.StockBridge.setStorage(q, {
                                hkRights: h,
                                timestamp:
                                  null == (l = null == v ? void 0 : v.data)
                                    ? void 0
                                    : l.timestamp,
                              }),
                              h)
                            )
                          );
                        case 13:
                          e.next = 17;
                          break;
                        case 15:
                          (e.prev = 15), (e.t0 = e.catch(0));
                        case 17:
                          return e.abrupt("return", null);
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 15]]
                );
              })
            );
          },
        },
        {
          key: "getLevel2RightsCache",
          value: function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return l(
              this,
              null,
              t().mark(function n() {
                var r;
                return t().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!e) {
                            t.next = 4;
                            break;
                          }
                          return (t.next = 3), this.getLevel2Rights();
                        case 3:
                          return t.abrupt("return", t.sent);
                        case 4:
                          if (
                            !(
                              (null == (r = d.StockBridge.getStorage(q))
                                ? void 0
                                : r.hkRights) &&
                              r.timestamp &&
                              d
                                .dayjs(1e3 * r.timestamp)
                                .isSame(Date.now(), "day")
                            )
                          ) {
                            t.next = 9;
                            break;
                          }
                          (t.t0 = r.hkRights), (t.next = 12);
                          break;
                        case 9:
                          return (t.next = 11), this.getLevel2Rights();
                        case 11:
                          t.t0 = t.sent;
                        case 12:
                          return t.abrupt("return", t.t0);
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
          },
        },
        {
          key: "getLevel2RightsStatus",
          value: function () {
            return l(
              this,
              null,
              t().mark(function e() {
                return t().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt(
                          "return",
                          d.StockBridge.request(C, d.RequestTypeEnum.GET)
                        );
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
          },
        },
      ]),
      e
    );
  })())();
function R() {
  return l(
    this,
    null,
    t().mark(function e() {
      var n, r, a, i, o, c, u, s, l;
      return t().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (e.prev = 0),
                  (e.next = 3),
                  d.Wuji.get({
                    appid: "act",
                    schemaid: "yy_config",
                    filter: encodeURIComponent("yy_key = gongyi99_2025"),
                  })
                );
              case 3:
                if (
                  ((r = e.sent),
                  (a = r.code),
                  (i = r.data),
                  200 == +a && i && i.length)
                ) {
                  e.next = 8;
                  break;
                }
                return e.abrupt("return", {});
              case 8:
                if ((o = null == (n = i[0]) ? void 0 : n.jval)) {
                  e.next = 11;
                  break;
                }
                return e.abrupt("return", {});
              case 11:
                if ((c = JSON.parse(o)).begintime && c.endtime) {
                  e.next = 14;
                  break;
                }
                return e.abrupt("return", {});
              case 14:
                return (
                  (u = new Date()),
                  (s = new Date(c.begintime)),
                  (l = new Date(c.endtime)),
                  e.abrupt("return", u >= s && u <= l ? c : {})
                );
              case 18:
                return (
                  (e.prev = 18), (e.t0 = e.catch(0)), e.abrupt("return", {})
                );
              case 21:
              case "end":
                return e.stop();
            }
        },
        e,
        null,
        [[0, 18]]
      );
    })
  );
}
var L = "yy.new_profile.func_welware_guide_brow";
function E() {
  return l(
    this,
    null,
    t().mark(function e() {
      var n, r, a, i, o, c, u, s, l, p, f;
      return t().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (s = {}), (e.prev = 1), (e.next = 4), R();
              case 4:
                if (((e.t0 = e.sent), e.t0)) {
                  e.next = 7;
                  break;
                }
                e.t0 = {};
              case 7:
                (s = e.t0), (e.next = 12);
                break;
              case 10:
                (e.prev = 10), (e.t1 = e.catch(1));
              case 12:
                if (
                  Number(
                    null == (r = null == s ? void 0 : s.invalidflag)
                      ? void 0
                      : r[null == (n = d.StockBridge) ? void 0 : n.SHELL]
                  ) > 0 &&
                  Boolean(
                    null == (a = null == s ? void 0 : s.tip) ? void 0 : a.switch
                  ) &&
                  (null == (i = null == s ? void 0 : s.tip) ? void 0 : i.text)
                ) {
                  e.next = 14;
                  break;
                }
                return e.abrupt("return", "");
              case 14:
                if (
                  ((e.prev = 14),
                  null == (o = null == s ? void 0 : s.task) ? void 0 : o.switch)
                ) {
                  e.next = 17;
                  break;
                }
                return e.abrupt(
                  "return",
                  (d.StockBridge.report(L),
                  (null == (u = null == s ? void 0 : s.tip)
                    ? void 0
                    : u.text) || "")
                );
              case 17:
                return (
                  (e.next = 19),
                  (function (e) {
                    var t = e.actid,
                      n = e.id,
                      r = e.tid;
                    return d.StockBridge.request(
                      "https://wzq.tenpay.com/cgi-bin/activity_task.fcgi?t=".concat(
                        new Date().getTime()
                      ),
                      d.RequestTypeEnum.POST,
                      { action: "taskstatus", actid: t, id: n, tid: r }
                    )
                      .then(function (e) {
                        return e;
                      })
                      .catch(function (e) {
                        throw e;
                      });
                  })(null == s ? void 0 : s.task)
                );
              case 19:
                if (((e.t2 = e.sent), e.t2)) {
                  e.next = 22;
                  break;
                }
                e.t2 = {};
              case 22:
                if (
                  ((l = e.t2),
                  (p = l.retcode),
                  (f = l.done),
                  0 != +p || 0 != +f)
                ) {
                  e.next = 27;
                  break;
                }
                return e.abrupt(
                  "return",
                  (d.StockBridge.report(L),
                  (null == (c = null == s ? void 0 : s.tip)
                    ? void 0
                    : c.text) || "")
                );
              case 27:
                e.next = 32;
                break;
              case 29:
                return (
                  (e.prev = 29), (e.t3 = e.catch(14)), e.abrupt("return", "")
                );
              case 32:
                return e.abrupt("return", "");
              case 33:
              case "end":
                return e.stop();
            }
        },
        e,
        null,
        [
          [1, 10],
          [14, 29],
        ]
      );
    })
  );
}
var T = { 0: "NOACCOUNT", 2: "CANCEL", 4: "UNBINED" };
function D() {
  var e = new p.RemindApi(),
    n = d.computed(function () {
      return ["wzqlight", "mpwzq"].includes("mpweapp");
    }),
    r = d.ref(""),
    a = d.ref(!1),
    i = d.ref({ welware: "", remind: "", myRights: "", isWelwareGuide: !1 }),
    o = d.ref(!1);
  function c(e, t) {
    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
    if (e && Number.isFinite(Number(e))) {
      var r = "mk" === t;
      e = Number(e);
      var a = r && e > 0 && n ? "+" : "";
      return 0 === e
        ? 0
        : (r && (e /= 100),
          Math.abs(e) >= 1e5
            ? "".concat(a).concat(
                (function (e, t, n, r) {
                  var a = +e;
                  if (isNaN(a)) return e;
                  var i = Math.abs(a);
                  return (
                    (r = r || 1e4),
                    (t = void 0 === t ? 2 : t),
                    (n = n || ""),
                    i < Math.pow(10, 4) || i < r
                      ? (a = a.toFixed(t))
                      : i >= Math.pow(10, 4) && i < Math.pow(10, 8)
                      ? (a = (a / 1e4).toFixed(t) + "万")
                      : i >= Math.pow(10, 8) &&
                        i < Math.pow(10, 11) &&
                        (a = (a / 1e8).toFixed(t) + "亿"),
                    a + n
                  );
                })(e)
              )
            : "".concat(a).concat(
                r
                  ? (function (e, t) {
                      (e = String(e) || ""), (t = void 0 === t ? 2 : t);
                      var n = /^(\-?)(\d+)(\.\d+)?$/.exec(e);
                      if (null === n) return e;
                      var r = (null != n && RegExp.$1) || "",
                        a = (null != n && RegExp.$2) || "0",
                        i = (null != n && RegExp.$3) || ".00",
                        o = a.length,
                        c = o > 3 ? o % 3 : 0,
                        u = "",
                        s = 0 == c ? "" : a.substr(0, c) + ",",
                        l = 0;
                      i =
                        0 == t
                          ? ""
                          : i.length >= t + 1
                          ? i.substr(0, t + 1)
                          : (
                              i + new Array(t + 1 - i.length + 1).join("0")
                            ).substr(0, t + 1);
                      for (var d = c; d < o; d++)
                        (u += a.charAt(d)),
                          ++l % 3 == 0 && d < o - 1 && ((u += ","), (l = 0));
                      return r + s + u + i;
                    })(e, 2)
                  : e
              ));
    }
    return "";
  }
  return {
    mockTradeAsset: r,
    commonFuncDesc: i,
    isDataFetch: o,
    showMockTradeGuide: a,
    getUserCenterData: function () {
      return l(
        this,
        null,
        t().mark(function u() {
          var s, p, f, m, v, h;
          return t().wrap(
            function (u) {
              for (;;)
                switch ((u.prev = u.next)) {
                  case 0:
                    return (u.prev = 0), (u.next = 3), A.queryVirtualAsset();
                  case 3:
                    if (0 !== (null == (s = u.sent) ? void 0 : s.retcode)) {
                      u.next = 17;
                      break;
                    }
                    return (
                      (p = s.golden_coin),
                      (f = s.mn_stock_info),
                      (m = s.account_status),
                      (a.value =
                        (null == f ? void 0 : f.is_new_user) && !!T[m]),
                      (v =
                        (null == f ? void 0 : f.profit_loss) ||
                        (null == f ? void 0 : f.asset)),
                      (r.value = v
                        ? ""
                            .concat(
                              +(null == f ? void 0 : f.profit_loss)
                                ? "模拟盈亏 "
                                : "总资产 "
                            )
                            .concat(
                              c(
                                +(null == f ? void 0 : f.profit_loss) ||
                                  +(null == f ? void 0 : f.asset) ||
                                  0,
                                "mk",
                                Boolean(+(null == f ? void 0 : f.profit_loss))
                              )
                            )
                        : ""),
                      (u.next = 11),
                      (function () {
                        return l(
                          this,
                          null,
                          t().mark(function r() {
                            var a, o;
                            return t().wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (t.prev = 0),
                                        (t.next = 3),
                                        A.queryRemindNum()
                                      );
                                    case 3:
                                      (a = t.sent),
                                        (o = e
                                          .mergeListData(
                                            null == a ? void 0 : a.smart,
                                            null == a ? void 0 : a.stocks,
                                            { isLite: n.value }
                                          )
                                          .filter(function (t) {
                                            return e.checkHasRemindedAuto(t);
                                          })),
                                        (i.value.remind = (
                                          null == o ? void 0 : o.length
                                        )
                                          ? "".concat(o.length || 0, "个提醒")
                                          : ""),
                                        (t.next = 10);
                                      break;
                                    case 8:
                                      (t.prev = 8), (t.t0 = t.catch(0));
                                    case 10:
                                    case "end":
                                      return t.stop();
                                  }
                              },
                              r,
                              null,
                              [[0, 8]]
                            );
                          })
                        );
                      })()
                    );
                  case 11:
                    return (u.next = 13), E();
                  case 13:
                    (h = u.sent)
                      ? ((i.value.welware = h), (i.value.isWelwareGuide = !0))
                      : ((i.value.welware = +(null == p
                          ? void 0
                          : p.coin_balance)
                          ? "".concat(c(p.coin_balance, "coin"), "金币")
                          : ""),
                        (i.value.isWelwareGuide = !1)),
                      (o.value = !0),
                      (u.next = 18);
                    break;
                  case 17:
                    d.StockBridge.toast("系统繁忙，请稍后重试", "none");
                  case 18:
                    u.next = 23;
                    break;
                  case 20:
                    (u.prev = 20),
                      (u.t0 = u.catch(0)),
                      d.StockBridge.aegisReportEvent(
                        "USER_CENTER_DATA_FETCH_ERR",
                        { ext3: JSON.stringify(u.t0 || {}) }
                      ),
                      (o.value = !0);
                  case 23:
                  case "end":
                    return u.stop();
                }
            },
            u,
            null,
            [[0, 20]]
          );
        })
      );
    },
    getUserLevel2: function (e, n) {
      return l(
        this,
        null,
        t().mark(function r() {
          var a, o, c, u, s, l, d;
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 2), A.getLevel2RightsCache();
                case 2:
                  if (((t.t0 = t.sent), t.t0)) {
                    t.next = 5;
                    break;
                  }
                  t.t0 = {};
                case 5:
                  if (
                    ((a = t.t0),
                    (o = a.left_days),
                    (c = a.is_member),
                    !e ||
                      !w.includes(
                        "".concat((null == n ? void 0 : n.code) || "")
                      ) ||
                      0 != +(null == n ? void 0 : n.userstate))
                  ) {
                    t.next = 26;
                    break;
                  }
                  return (t.next = 11), A.getLevel2RightsStatus();
                case 11:
                  if (((t.t1 = t.sent), t.t1)) {
                    t.next = 14;
                    break;
                  }
                  t.t1 = {};
                case 14:
                  if (
                    ((u = t.t1), (s = u.act_status), (l = 1 == +s), c || !l)
                  ) {
                    t.next = 24;
                    break;
                  }
                  return (t.next = 20), A.getLevel2RightsCache(!0);
                case 20:
                  if (((t.t2 = t.sent), t.t2)) {
                    t.next = 23;
                    break;
                  }
                  t.t2 = {};
                case 23:
                  o = t.t2.left_days;
                case 24:
                  if (l) {
                    t.next = 26;
                    break;
                  }
                  return t.abrupt(
                    "return",
                    void (i.value.myRights =
                      '<div class="common-my-right-wrapper"><span class="common-my-rights-icon"></span>开港股通免费领1年Level2</div>')
                  );
                case 26:
                  (d =
                    o <= 15
                      ? '港股Level2剩余<span style="color: #E63535">'.concat(
                          o,
                          "</span>天，请及时续费"
                        )
                      : "港股Level2剩余".concat(o, "天")),
                    (i.value.myRights = c
                      ? '<div class="common-my-right-wrapper"><span class="common-my-rights-icon"></span>'.concat(
                          d,
                          "</div>"
                        )
                      : '<div class="common-my-right-wrapper"><span class="common-my-rights-icon"></span>开通享港股Level2</div>');
                case 28:
                case "end":
                  return t.stop();
              }
          }, r);
        })
      );
    },
  };
}
var I = d.ref(!0),
  O = d.ref(!1),
  N = d.ref({}),
  F = d.ref(!1);
function z() {
  var e = d.inject("TradeFunc"),
    n = d.inject("useMultiBrokerCardInfo")();
  return {
    applyingList: n.applyingList,
    verifyingList: n.verifyingList,
    failedList: n.failedList,
    bindingList: n.bindingList,
    canBindList: n.canBindList,
    canApplyList: n.canApplyList,
    isMaintain: n.isMaintain,
    tradeEnable: I,
    isAccountBind: O,
    highestPriorityDealer: N,
    isOem: F,
    initData: function () {
      return l(
        this,
        null,
        t().mark(function n() {
          var r;
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 2), e.fetchBrokerInfo();
                case 2:
                  if (
                    ((N.value = e.getCurrentBroker()),
                    d.StockBridge.ENV === d.EnvTypeEnum.MP &&
                      (I.value = e.getIsXcxTradeEnable()),
                    (O.value = e.isBind()),
                    !["stock", "wzqlight"].includes("mpweapp"))
                  ) {
                    t.next = 8;
                    break;
                  }
                  (r = e.getOemBindedList()),
                    (N.value = e.getRawHighestPriorityDealer()),
                    (F.value = e.isOEMBroker(N.value.code)),
                    F.value &&
                      (O.value =
                        -1 !==
                        r.findIndex(function (e) {
                          return e.code === N.value.code;
                        }));
                case 8:
                case "end":
                  return t.stop();
              }
          }, n);
        })
      );
    },
    navigateToTrade: function (n) {
      return l(
        this,
        null,
        t().mark(function r() {
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  e.navToBrokerPage(n);
                case 1:
                case "end":
                  return t.stop();
              }
          }, r);
        })
      );
    },
    getOriginalBindList: function () {
      return l(
        this,
        null,
        t().mark(function n() {
          var r, a;
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.next = 2), e.fetchBrokerInfo();
                case 2:
                  return (
                    (r = e.getCurrentBroker().code || ""),
                    (a = e.getBindList()),
                    t.abrupt("return", {
                      bindBroker: r,
                      bindBrokerList:
                        (null == a
                          ? void 0
                          : a.map(function (e) {
                              return e.code;
                            })) || [],
                    })
                  );
                case 4:
                case "end":
                  return t.stop();
              }
          }, n);
        })
      );
    },
  };
}
var M = "wzq:accountCardRedPoint";
function P() {
  var e = d.ref(!0),
    n = f.useCardSetting(),
    r = n.accountCardState,
    a = n.accountCardIsOpen,
    i = n.checkAccountCardAddState,
    o = d.computed(function () {
      return a.value ? "已开启" : "未开启";
    });
  return {
    initAccountCard: function () {
      return l(
        this,
        null,
        t().mark(function n() {
          return t().wrap(function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  if (((n.t0 = "mp" === d.StockBridge.ENV), !n.t0)) {
                    n.next = 5;
                    break;
                  }
                  return (
                    (n.next = 4),
                    (function () {
                      return l(
                        this,
                        null,
                        t().mark(function e() {
                          return t().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((e.t0 = "mp" === d.StockBridge.ENV), !e.t0)
                                  ) {
                                    e.next = 4;
                                    break;
                                  }
                                  return (e.next = 4), i();
                                case 4:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                    })()
                  );
                case 4:
                  !(function () {
                    if ("mp" === d.StockBridge.ENV) {
                      var t = d.StockBridge.getStorage(M);
                      (a.value || 1 == +t) && (e.value = !1);
                    }
                  })();
                case 5:
                case "end":
                  return n.stop();
              }
          }, n);
        })
      );
    },
    setRedPoint: function () {
      "mp" === d.StockBridge.ENV && d.StockBridge.setStorage(M, 1);
    },
    accountCardRedPoint: e,
    accountCardDesc: o,
    accountCardIsOpen: a,
    accountCardState: r,
  };
}
function j(e) {
  var t,
    n = !1;
  return {
    addObserver: function () {
      try {
        t = new m.VisibilityObserver(
          e.selector,
          {
            once: !0,
            callback: function (t) {
              t && !n && (d.StockBridge.report(e.eventName), (n = !0));
            },
            intersection: { threshold: 0 },
          },
          { context: e.ctx }
        );
      } catch (e) {}
    },
    removeObserver: function () {
      var e, n;
      null ==
        (n =
          null == (e = null == t ? void 0 : t.observer)
            ? void 0
            : e.disconnect) || n.call(e),
        (t = null);
    },
  };
}
var G = {
  components: {
    AccountBanner: function () {
      return "./components/accountBanner.js";
    },
    HeaderInfo: function () {
      return "./components/header.js";
    },
    CommonFunc: function () {
      return "./components/commonFunc/index.js";
    },
    TopGuide: function () {
      return "./components/topGuide.js";
    },
    GuidePopup: function () {
      return "./node-modules/@tencent/st-act-adv/components/popup.js";
    },
  },
  inject: {
    accoutTimeReporter: { default: null },
    stockBridge: { default: {} },
  },
  props: {
    params: {
      type: Object,
      default: function () {
        return {};
      },
    },
    userInfo: {
      type: Object,
      default: function () {
        return {};
      },
    },
    premoteMixin: {
      type: Object,
      default: function () {
        return {};
      },
    },
    hasBind: { type: Boolean, require: !0 },
    isPcDisable: { type: Boolean, default: !1 },
    isPc: { type: Boolean, default: !1 },
    userName: { type: String, default: "" },
    isTradeEnable: { type: Boolean, default: !0 },
    isCardGrayUser: { type: Boolean, default: !1 },
    isAiLabGrayUser: { type: Boolean, default: !1 },
    isAiModelTradingGrayUser: { type: Boolean, default: !1 },
  },
  setup: function (n, r) {
    var a = this,
      i = r.emit,
      o = d.ref(!0),
      c = d.getCurrentInstance().proxy || d.getCurrentInstance(),
      u = y.myServiceArr,
      s = y.otherSettingArr,
      p = y.FIND_STOCK,
      f = y.AI_MODEL_TRADING;
    d.StockBridge.getStorage(_);
    var m = D(),
      h = m.showMockTradeGuide,
      g = m.mockTradeAsset,
      k = m.commonFuncDesc,
      w = m.isDataFetch,
      x = m.getUserCenterData,
      S = m.getUserLevel2,
      C = z(),
      B = C.isAccountBind,
      q = C.initData,
      A = C.highestPriorityDealer,
      R = P(),
      L = (R.accountCardState, R.initAccountCard),
      E = R.setRedPoint,
      T = R.accountCardRedPoint,
      I = R.accountCardDesc,
      O = d.computed(function () {
        return ["mpwzq", "wzqlight"].includes("mpweapp");
      }),
      N = d.computed(function () {
        return !1;
      }),
      F = d.computed(function () {
        return !1;
      }),
      M = d.computed(function () {
        return !1;
      }),
      G = d.computed(function () {
        return !1;
      }),
      U = d.computed(function () {
        var e;
        return (null == (e = H.value) ? void 0 : e.length) > 0;
      }),
      V = d.computed(function () {
        return N.value ? [v].concat(e(s)) : s;
      }),
      W = d.computed(function () {
        return F.value ? [u[0], b].concat(e(u.slice(1))) : u;
      }),
      H = d.computed(function () {
        var e = [];
        return M.value && e.push(p), G.value && e.push(f), e;
      }),
      $ = j({
        selector: ".other-setting-wrapper",
        ctx: c,
        eventName: "base.new_profile.more_service_module_brow",
      }),
      Z = $.addObserver,
      K = $.removeObserver;
    d.watch(
      function () {
        return N.value;
      },
      function (e) {
        e && d.StockBridge.report(v.brow);
      }
    ),
      d.watch(
        function () {
          return F.value;
        },
        function (e) {
          e && d.StockBridge.report(b.brow), d.StockBridge.setStorage(_, e);
        },
        { immediate: !0 }
      );
    var J = d.computed(function () {
      return { accountcard: { redpoint: T.value, text: I.value } };
    });
    return (
      i("getTaskSelector", c.$refs.commonFunc),
      d.onMounted(function () {
        i("mounted"),
          (o.value = !1),
          d.nextTick$1(function () {
            c.handleShow();
          }),
          Z();
      }),
      d.onBeforeUnmount(function () {
        K();
      }),
      d.onActivated(function () {
        return l(
          a,
          null,
          t().mark(function e() {
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), q();
                  case 2:
                    x(), S(B.value, A.value);
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
      }),
      l(
        a,
        null,
        t().mark(function e() {
          return t().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return x(), (e.next = 3), q();
                case 3:
                  S(B.value, A.value);
                case 4:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      ),
      {
        isAccountBind: B,
        highestPriorityDealer: A,
        myServiceArr: u,
        otherSettingForRender: V,
        myServiceArrForRender: W,
        aiLabArrForRender: H,
        isShowAiLabEntry: U,
        mockTradeAsset: g,
        showMockTradeGuide: h,
        commonFuncDesc: k,
        isDataFetch: w,
        goLogin: function () {
          i("goLogin");
        },
        getUserCenterData: x,
        fetchTradeData: q,
        firstUpdate: o,
        handleShow: function () {
          L();
        },
        handleSettingJump: function (e) {
          "accountcard" === e.id && E();
        },
        redPointRight: J,
        isSimpleMode: O,
        goApplyWithPc: function () {
          i("goApplyWithPc");
        },
        getUserLevel2: S,
      }
    );
  },
  onPageShow: function () {
    return l(
      this,
      null,
      t().mark(function e() {
        var n = this;
        return t().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), this.fetchTradeData();
                case 2:
                  this.getUserLevel2(
                    this.isAccountBind,
                    this.highestPriorityDealer
                  ),
                    this.firstUpdate ||
                      this.$nextTick(function () {
                        n.handleShow(), n.getUserCenterData();
                      });
                case 4:
                case "end":
                  return e.stop();
              }
          },
          e,
          this
        );
      })
    );
  },
};
Array ||
  (
    d.resolveComponent("header-info") +
    d.resolveComponent("account-banner") +
    d.resolveComponent("common-func") +
    d.resolveComponent("topGuide") +
    d.resolveComponent("GuidePopup")
  )();
var U = d._export_sfc(G, [
  [
    "render",
    function (e, t, n, r, a, i) {
      return d.e(
        { a: r.isSimpleMode },
        (r.isSimpleMode, {}),
        {
          b: d.p({ "user-name": n.userName, "premote-mixin": n.premoteMixin }),
          c: d.o(r.goLogin, 1559),
          d: d.o(r.goApplyWithPc, 1560),
          e: d.p({
            "hide-broker-account": !n.isTradeEnable || n.isPcDisable,
            "mock-trade-str": r.mockTradeAsset,
            "show-guide": r.showMockTradeGuide,
            "is-data-fetch": r.isDataFetch,
            "is-pc": n.isPc,
            "has-bind": n.hasBind,
          }),
          f: d.sr("commonFunc", "d511e371-2"),
          g: d.p({
            title: "我的服务",
            "common-func-desc": r.commonFuncDesc,
            list: r.myServiceArrForRender,
            "is-data-fetch": r.isDataFetch,
          }),
          h: d.o(r.handleSettingJump, 1561),
          i: d.p({
            title: "更多设置",
            "common-func-desc": r.commonFuncDesc,
            list: r.otherSettingForRender,
            "is-data-fetch": r.isDataFetch,
            "red-point-right": r.redPointRight,
            "premote-mixin": n.premoteMixin,
          }),
          j: r.isShowAiLabEntry,
        },
        r.isShowAiLabEntry
          ? {
              k: d.p({
                title: "实验室",
                "common-func-desc": r.commonFuncDesc,
                list: r.aiLabArrForRender,
                "is-data-fetch": r.isDataFetch,
              }),
            }
          : {},
        {
          l: d.p({ "user-info": n.userInfo, "is-simple-mode": r.isSimpleMode }),
          m: r.isSimpleMode ? 1 : "",
          n: d.p({ params: n.params }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-d511e371"],
]);
wx.createComponent(U);
var V = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3d6cS1wcm9maWxlLXBhZ2UvSW5kZXgudnVl =
  V),
  (exports.commonFuncConfig = y),
  (exports.getWujiConfig = R),
  (exports.useAddObserver = j),
  (exports.useTradeFunc = z);
