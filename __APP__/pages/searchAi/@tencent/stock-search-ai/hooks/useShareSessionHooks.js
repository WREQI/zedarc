var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  s = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  u = function (e, r, n) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n);
  },
  c = function (e, t) {
    for (var n in t || (t = {})) i.call(t, n) && u(e, n, t[n]);
    if (s) {
      var o,
        c = r(s(t));
      try {
        for (c.s(); !(o = c.n()).done; ) {
          n = o.value;
          a.call(t, n) && u(e, n, t[n]);
        }
      } catch (e) {
        c.e(e);
      } finally {
        c.f();
      }
    }
    return e;
  },
  l = require("../../../../../common/vendor.js"),
  f = require("./useComponentConfigHooks.js");
exports.useShareSessionHooks = function (r) {
  var t = this,
    s = (null == r ? void 0 : r.query) || {},
    i = s.session,
    a = s.searchfrom,
    u = s.requestId,
    p = s.shareCode,
    S = l.ref(!("officialaccount" !== a || !i)),
    h = "common-ai-sharesession-".concat(i);
  return {
    isShareSession: S,
    saveShareSessionDetail: function (e) {
      var r,
        t,
        s = e.question,
        i = e.modelName,
        a = {
          question: s,
          answer:
            ((r = c(
              {
                sseStatus: f.SseStatus.ON_CLOSE,
                answerFinish: !0,
                isOfflineQuestion: !0,
                serverError: !1,
              },
              e
            )),
            (t = { requestId: u }),
            n(r, o(t))),
          modelName: i,
          shareCode: p,
        };
      l.StockBridge.setSession(h, a);
    },
    getShareSessionDetail: function () {
      return (
        (r = t),
        null,
        (n = e().mark(function r() {
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), l.StockBridge.getSession(h);
                case 2:
                  return e.abrupt("return", e.sent);
                case 3:
                case "end":
                  return e.stop();
              }
          }, r);
        })),
        new Promise(function (e, t) {
          var o = function (e) {
              try {
                i(n.next(e));
              } catch (e) {
                t(e);
              }
            },
            s = function (e) {
              try {
                i(n.throw(e));
              } catch (e) {
                t(e);
              }
            },
            i = function (r) {
              return r.done ? e(r.value) : Promise.resolve(r.value).then(o, s);
            };
          i((n = n.apply(r, null)).next());
        })
      );
      var r, n;
    },
    clearShareSessionDetail: function () {
      l.StockBridge.setSession(h, "");
    },
  };
};
