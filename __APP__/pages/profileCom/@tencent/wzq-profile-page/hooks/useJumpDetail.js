require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/typeof"),
  n = require("../../../../../common/vendor.js"),
  o = require("../node-modules/@tencent/st-tools/dist/mpDetect.js"),
  r = require("../../../../profileCom/@tencent/wzq-profile-page/Index.js"),
  c = function () {
    return (c =
      Object.assign ||
      function (e) {
        for (var t, n = 1, o = arguments.length; n < o; n++)
          for (var r in (t = arguments[n]))
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e;
      }).apply(this, arguments);
  },
  i = {
    make: function (e, n, o) {
      return (
        void 0 === e && (e = {}),
        void 0 === n && (n = !0),
        void 0 === o && (o = !1),
        (e = (function e(n, o, r) {
          if (
            (void 0 === o && (o = !1),
            void 0 === r && (r = !1),
            "object" == t(n))
          )
            for (var c in n)
              n.hasOwnProperty(c) &&
                ((null !== n[c] && void 0 !== n[c]) ||
                  (o ? delete n[c] : (n[c] = "")),
                r && "" === n[c] && delete n[c],
                "object" == t(n[c]) && (n[c] = e(n[c])));
          return n;
        })(e, o)),
        Object.keys(e)
          .map(function (t) {
            return "".concat(t, "=").concat(
              (n
                ? encodeURIComponent
                : function (e) {
                    return e;
                  })(e[t])
            );
          })
          .join("&")
      );
    },
    parse: function (e, t) {
      void 0 === t && (t = { searchSep: "?" });
      var o,
        r = t.searchSep,
        i = void 0 === r ? "?" : r,
        a = (function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        })(t, ["searchSep"]);
      if (e) o = null === i ? e : e.split(i)[1] || "";
      else {
        if (0 !== arguments.length) return {};
        o =
          location.search ||
          (location.href.split("?") && location.href.split("?")[1]) ||
          "";
      }
      return n.parse_1(o, c({ ignoreQueryPrefix: !0 }, a));
    },
  },
  a = i;
exports.useJumpDetail = function () {
  var t = n.inject("didAgreeUserAgreement"),
    c = n.inject("onCheckUserAgreementStatus");
  return {
    jumpDetail: function (i, u) {
      return (
        (s = this),
        null,
        (f = e().mark(function s() {
          var f, p, l, m, d, C, g, h, y, b;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    !(i.id && i.authorizationId && t) ||
                    t.value ||
                    "function" != typeof c
                  ) {
                    e.next = 4;
                    break;
                  }
                  c(), (e.next = 29);
                  break;
                case 4:
                  if (
                    (i.stat && n.StockBridge.report(i.stat),
                    ![
                      r.commonFuncConfig.AI_CONFIG.id,
                      r.commonFuncConfig.AI_ICON_CONFIG.id,
                      r.commonFuncConfig.FEEDBACK_CONFIG.id,
                    ].includes(i.id))
                  ) {
                    e.next = 13;
                    break;
                  }
                  (f =
                    r.commonFuncConfig.AiChannelConfig.mpweapp ||
                    r.commonFuncConfig.AiChannelConfig.default),
                    (p =
                      r.commonFuncConfig.FBChannelConfig.mpweapp ||
                      r.commonFuncConfig.FBChannelConfig.default),
                    (l = f.channel),
                    (m = f.stat),
                    (d =
                      i.id === r.commonFuncConfig.AI_ICON_CONFIG.id
                        ? "wzq_my_account"
                        : f.entry),
                    (C = p.entry),
                    (g =
                      "mp" !== n.StockBridge.ENV
                        ? o.detect().env
                        : { IS_LCT_XCX: !1 }),
                    g.IS_LCT_XCX &&
                      ((d =
                        i.id === r.commonFuncConfig.AI_ICON_CONFIG.id
                          ? "wzq_applet_stock"
                          : "wzq_applet_my_help_feedback"),
                      (C = "wzq_applet_my_feedback")),
                    (h = [
                      r.commonFuncConfig.AI_CONFIG.id,
                      r.commonFuncConfig.AI_ICON_CONFIG.id,
                    ].includes(i.id)
                      ? "https://wzq.tenpay.com/wzq/aics-cloud/xiaomi/page.do?channel="
                          .concat(l, "&type=chat&_=")
                          .concat(+new Date(), "&entry=")
                          .concat(d, "&stat=")
                          .concat(m)
                      : "https://wzq.tenpay.com/wzq/front/aics?channel="
                          .concat(l, "&stat=")
                          .concat(m, "&entry=")
                          .concat(C, "#/feedback/form")),
                    setTimeout(function () {
                      n.StockBridge.locationTo(h);
                    }, 300),
                    (e.next = 29);
                  break;
                case 13:
                  if ("personal" !== i.id) {
                    e.next = 15;
                    break;
                  }
                  return e.abrupt(
                    "return",
                    (n.StockBridge.setStorage("communityShowGoing", 1),
                    void setTimeout(function () {
                      n.StockRouter.routeTo({ name: "personalPage" });
                    }, 300))
                  );
                case 15:
                  if ((i.id, !u)) {
                    e.next = 19;
                    break;
                  }
                  setTimeout(function () {
                    n.StockBridge.locationTo(u);
                  }, 300),
                    (e.next = 29);
                  break;
                case 19:
                  if (!i.name && !i.path) {
                    e.next = 29;
                    break;
                  }
                  if (!i.openUseLocation) {
                    e.next = 28;
                    break;
                  }
                  return (
                    (e.next = 23),
                    require.async(
                      "../../../../asyncCom/@tencent/st-act-task/utils/tidConf.js"
                    )
                  );
                case 23:
                  (y = e.sent),
                    (b = y.TID),
                    setTimeout(function () {
                      var e = i.path;
                      if ("welware" === i.id) {
                        var t =
                          n.StockBridge.getSession("growth-custom-task") || {};
                        if (t.tid == b.CUSTOM_NEW_GUESSRISEFAIL) {
                          var o = {
                            act_id: t.id,
                            act_tid: t.tid,
                            act_actid: t.actid,
                            act_tasktype: "custom",
                          };
                          e = "".concat(e, "?").concat(a.make(o));
                        }
                      }
                      n.StockBridge.openExtraWebview(
                        e,
                        {},
                        { useAct: i.openUseActWebview }
                      );
                    }, 300),
                    (e.next = 29);
                  break;
                case 28:
                  n.StockRouter.routeTo({ name: i.name, query: i.query || {} });
                case 29:
                case "end":
                  return e.stop();
              }
          }, s);
        })),
        new Promise(function (e, t) {
          var n = function e(n) {
              try {
                r(f.next(n));
              } catch (e) {
                t(e);
              }
            },
            o = function (e) {
              try {
                r(f.throw(e));
              } catch (e) {
                t(e);
              }
            },
            r = function (t) {
              return t.done ? e(t.value) : Promise.resolve(t.value).then(n, o);
            };
          r((f = f.apply(s, null)).next());
        })
      );
      var s, f;
    },
  };
};
