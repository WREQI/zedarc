var e = require("../../../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  a = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  p = Object.prototype.propertyIsEnumerable,
  r = function (e, t, n) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  s = function (e, t) {
    for (var i in t || (t = {})) c.call(t, i) && r(e, i, t[i]);
    if (a) {
      var s,
        o = n(a(t));
      try {
        for (o.s(); !(s = o.n()).done; ) {
          i = s.value;
          p.call(t, i) && r(e, i, t[i]);
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
    }
    return e;
  },
  o = require("../../../../stock-news-sdk/index.js"),
  l = function (e, t, n, i) {
    o.sdk.navigateToNewsDetail(s({ instance: e, id: t, title: n }, i));
  },
  u = function (e, t, n) {
    o.sdk.navigateToVideoDetail(s({ instance: e, id: t }, n));
  },
  y = new Map([
    [
      { type: 0, specalType: 0 },
      function (e, t, n) {
        l(e, t.id || t.news_id, t.title, n);
      },
    ],
    [
      { type: 1, specalType: 0 },
      function (e, t, n) {
        l(e, t.id || t.news_id, t.title, n);
      },
    ],
    [
      { type: 2, specalType: 0 },
      function (e, t, n) {
        l(e, t.id || t.news_id, t.title, n);
      },
    ],
    [
      { type: 3, specalType: 0 },
      function (e, t, n) {
        l(e, t.id || t.news_id, t.title, n);
      },
    ],
    [
      { type: 1, specalType: 2 },
      function (e, t, n) {
        !(function (e, t, n) {
          o.sdk.navigateToMorningReport(s({ instance: e, id: t }, n));
        })(e, t.id || t.news_id, n);
      },
    ],
    [
      { type: 4, specalType: 0 },
      function (e, t, n) {
        !(function (e, t, n, i) {
          o.sdk.navigateToNewsSubject(s({ instance: e, id: t, title: n }, i));
        })(e, t.id || t.news_id, t.title, n);
      },
    ],
    [
      { type: 4, specalType: 1 },
      function (e, t) {
        !(function (e, t) {
          o.sdk.navigateToLiveCalendar({ instance: e, date: t });
        })(e, t.date);
      },
    ],
    [
      { type: 7, specalType: 0 },
      function (e, t, n) {
        u(e, t.id || t.news_id, n);
      },
    ],
    [
      { type: 8, specalType: 0 },
      function (e, t, n) {
        u(e, t.id || t.news_id, n);
      },
    ],
    [{ type: 9, specalType: 0 }, function (e, t, n) {}],
    [{ type: 9, specalType: 0 }, function (e, t, n) {}],
    [{ type: 13, specalType: 0 }, function (e, t, n) {}],
    [
      { type: 14, specalType: 0 },
      function (e, t, n) {
        !(function (e, t, n) {
          o.sdk.navigateToLiveDetail(s({ instance: e, id: t }, n));
        })(e, t.id || t.news_id, n);
      },
    ],
    [{ type: 19, specalType: 0 }, function (e, t, n) {}],
    [{ type: 21, specalType: 0 }, function (e, t, n) {}],
    [{ type: 26, specalType: 0 }, function (e, t, n) {}],
    [
      { type: 27, specalType: 0 },
      function (e, t, n) {
        !(function (e, t, n, i) {
          o.sdk.navigateToAIFinancialReport(
            s({ instance: e, id: t, title: n }, i)
          );
        })(e, t.id || t.news_id, t.title, n);
      },
    ],
  ]);
exports.router = function (n, i, a, c) {
  var p = this;
  t(y)
    .filter(function (t) {
      var a = e(t, 1)[0];
      return a.type === n && a.specalType === i;
    })
    .forEach(function (t) {
      var n = e(t, 2);
      n[0];
      return n[1].call(p, a.instance, a.params, c);
    });
};
