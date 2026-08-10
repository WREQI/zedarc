var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  o = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  i = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  r = Object.prototype.propertyIsEnumerable,
  s = function (t, e, o) {
    return e in t
      ? n(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (t[e] = o);
  },
  l = function (t, n) {
    for (var o in n || (n = {})) c.call(n, o) && s(t, o, n[o]);
    if (i) {
      var a,
        l = e(i(n));
      try {
        for (l.s(); !(a = l.n()).done; ) {
          o = a.value;
          r.call(n, o) && s(t, o, n[o]);
        }
      } catch (t) {
        l.e(t);
      } finally {
        l.f();
      }
    }
    return t;
  },
  d = function (t, e, n) {
    return new Promise(function (o, a) {
      var i = function (t) {
          try {
            r(n.next(t));
          } catch (t) {
            a(t);
          }
        },
        c = function (t) {
          try {
            r(n.throw(t));
          } catch (t) {
            a(t);
          }
        },
        r = function (t) {
          return t.done ? o(t.value) : Promise.resolve(t.value).then(i, c);
        };
      r((n = n.apply(t, e)).next());
    });
  },
  p = require("../knife.js"),
  u = require("../constant.js");
require("../../../../../../common/vendor.js"),
  require("../../../stock-hq-data/api/hostConfig.js");
var m = require("./mini.js"),
  f = p.sdk.navigateTo,
  g = function (t) {
    var e = t.userId;
    f({ url: u.toPerson(e) });
  },
  h = function (e) {
    return d(exports, [e], function (e) {
      var n = e.url,
        o = e.linkTradeAccount;
      return t().mark(function e() {
        var a, i, c, r, s, l, d, p, u;
        return t().wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  if (!o) {
                    t.next = 18;
                    break;
                  }
                  if (
                    ((a = o.app),
                    (c = (i = a || {}).broker),
                    (r = i.stat),
                    (s = !1),
                    !c)
                  ) {
                    t.next = 15;
                    break;
                  }
                  return (t.prev = 4), (t.next = 7), k();
                case 7:
                  (l = t.sent),
                    (d = l.qs_list),
                    (p = d.filter(function (t) {
                      return +t.dealer_code == +c && 0 == +t.need_jump_wzq;
                    })),
                    (s = p && p.length > 0),
                    (t.next = 15);
                  break;
                case 13:
                  (t.prev = 13), (t.t0 = t.catch(4));
                case 15:
                  s
                    ? ((u = JSON.stringify({
                        p_url:
                          "https://wzq.tenpay.com/mp/v2/index.html#/apply/index?broker="
                            .concat(c, "&stat=")
                            .concat(r),
                        checkBroker: "1",
                        isDirectJump: "1",
                      })),
                      f({
                        url: "qqstock://TradeHSBrowser?info=".concat(
                          encodeURIComponent(u)
                        ),
                      }))
                    : f({
                        url: "qqstock://GotoTradeTab?info=".concat(
                          encodeURIComponent(JSON.stringify({ index: 0 }))
                        ),
                      }),
                    (t.next = 19);
                  break;
                case 18:
                  f({ url: n });
                case 19:
                case "end":
                  return t.stop();
              }
          },
          e,
          null,
          [[4, 13]]
        );
      })();
    });
  },
  v = function (t) {
    return "qqstock://Hippy?info=".concat(
      encodeURIComponent(
        JSON.stringify({
          p_showNav: !0,
          p_key: "videoRelated",
          news_id: t,
          p_statusBarColor: "#000000",
          p_preferredStatusBarStyle: "light",
        })
      )
    );
  },
  k = function () {
    return new Promise(function (e, n) {
      return d(
        exports,
        null,
        t().mark(function o() {
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  shy &&
                    shy.request({
                      url: "https://wzq.tenpay.com/cgi-bin/zt_getqslist.fcgi",
                      method: "GET",
                      dataType: "json",
                      success: function () {
                        var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {},
                          o = t.data;
                        o && !+o.code ? e(o) : n(o);
                      },
                      fail: function (t) {
                        n(t);
                      },
                    });
                case 1:
                case "end":
                  return t.stop();
              }
          }, o);
        })
      );
    });
  },
  y = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        getQsList: k,
        goDetail: function (t) {
          var e = t.itemId,
            n = t.pageType;
          f({ url: u.toShyDetail({ id: e, pageType: n }) });
        },
        goIndex: function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          f({ url: p.buildUrl("qqstock://community/square", t) });
        },
        goNewsDetail: function (t) {
          var e = t.newsid,
            n = t.newsFrom,
            o = {
              p_showNav: !0,
              p_key: "com.tencent.shy.news_".concat(
                "om" === n ? "om_" : "",
                "zixuangu"
              ),
            },
            a = {
              om: l({ p_url: "content-newsDetail?id=".concat(e) }, o),
              news: l({ p_url: "index?id=".concat(e) }, o),
            };
          f({ url: u.toShyCommon(a[n]) });
        },
        goPageCommon: function (t) {
          var e = t || {},
            n = e.eventName,
            o = e.newsid,
            a = e.url,
            i = e.linkTradeAccount,
            c = e.userId;
          "chaolian" === n
            ? h({ url: a, linkTradeAccount: i })
            : "person" === n
            ? g({ userId: c })
            : /^VD/.test(o)
            ? f({ url: v(o) })
            : f({ url: a });
        },
        goPerson: g,
        goRank: function () {
          f({
            url: "qqstock://ReMenBangDan?info=%7B%22index%22%3A%20%22shequ%22%7D",
          });
        },
        goRelatedStockList: function (t) {
          var e = t.url;
          f({ url: e });
        },
        goStockComment: function (t) {
          var e = t.code,
            n = t.name,
            o = {
              p_showNav: !0,
              p_key: "com.tencent.shy.commentSystem",
              p_url: "comment-comment?symbol=".concat(e, "&name=").concat(n),
              p_title: "",
            };
          f({ url: u.toShyCommon(o) });
        },
        goStockDetail: function (t) {
          var e = t.code,
            n = t.name;
          f({ url: u.toStockDetail(e, n) });
        },
        goStockDetailWithHqData: function () {},
        goTopic: function (t) {
          var e = t.topicId,
            n = t.selection;
          f({ url: u.toShyTopic(e, n) });
        },
        goTopicPlaza: function (t) {
          var e = t.url;
          f({ url: e });
        },
        goWatchList: function () {},
        gotoETFContestPage: function (t) {
          var e = t.url;
          f({ url: e });
        },
        navigateToChaoLian: h,
        toVideoDetail: v,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  b = p.sdk,
  w = b.navigateTo,
  x = b.navigateToPage;
function I(t) {
  var e,
    n = t.code,
    o = t.instance,
    a = ["sz", "sh", "hk", "us"],
    i = n.substr(2),
    c = n.substr(0, 2).toLocaleLowerCase(),
    r = -1 === a.indexOf(c) ? c : a.indexOf(c),
    s = i.split(".")[0] ? i : i.replace(".", ""),
    l = n.toLocaleLowerCase(),
    d = [
      { prefix: "pt", plateCode: 200 },
      { prefix: "ph", plateCode: 400 },
      { prefix: "pu", plateCode: 601 },
      { prefix: "p", plateCode: 200 },
    ].find(function (t) {
      return l.startsWith(t.prefix);
    });
  if (d) {
    var p = n.substr(d.prefix.length);
    e = "/plate/".concat(d.plateCode, "/detail?plateId=").concat(p);
  } else {
    if (-1 === ["sz", "sh", "hk", "us", "nq", "bj", "sp", "cs"].indexOf(c))
      return;
    e = "/hq/stock/".concat(r, "/").concat(s);
  }
  -1 === location.hash.indexOf("#/trade/index_detail.shtml?scode=".concat(s))
    ? w({ path: e, instance: o })
    : window.scrollTo(0, 0);
}
var T = function (t) {
    var e = t.code,
      n = t.name,
      o = t.instance,
      a = "".concat(["sz", "sh", "hk", "us"].indexOf(e.slice(0, 2)));
    w({
      path: "/comment/comment?symbol="
        .concat(e, "&name=")
        .concat(n, "&market=")
        .concat(a),
      instance: o,
    });
  },
  _ = function (t) {
    var e = t.topicId,
      n = t.selection,
      o = t.instance,
      a = p.buildUrl("/topic/topic", { topicId: e, selection: n });
    w({ path: a, instance: o });
  },
  S = function (t) {
    var e = t.instance;
    w({ path: "/topicPlaza/topicPlaza", instance: e });
  },
  q = function (t) {
    var e = t.instance;
    w({ path: "/community/topicCircle", instance: e });
  },
  z = function (t) {
    var e = t.itemId,
      n = t.topTag,
      o = t.act_id,
      a = t.pageId,
      i = t.act_actid,
      c = t.act_tid,
      r = t.act_url,
      s = t.newsCommentId,
      l = t.pageType,
      d = t.instance,
      p = t.gdId,
      u = t.anchorId,
      m = "/comment/detail/detail?gdId="
        .concat(p || "", "&nid=")
        .concat(e)
        .concat(u && u.length > 0 ? "&anchorId=".concat(u) : "")
        .concat(
          a && -1 !== a.indexOf("topic")
            ? "&belong=topic&topicId=".concat(a)
            : "&belong=".concat(l),
          "&newsCommentId="
        )
        .concat(s || "");
    if (
      (n && (m += "&topTag=".concat(n)),
      o &&
        (m += "&act_id="
          .concat(o, "&act_actid=")
          .concat(i, "&act_tid=")
          .concat(c, "&act_url=")
          .concat(r)),
      ((null == location ? void 0 : location.href) || "").indexOf("lite=1") > 0)
    ) {
      var f = location.origin;
      x({ url: "".concat(f, "/mp/lite/index.html#").concat(m) });
    } else w({ path: m, instance: d });
  },
  D = function (t) {
    var e = t.userId,
      n = t.postid,
      o = void 0 === n ? "" : n,
      a = t.symbol,
      i = void 0 === a ? "" : a,
      c = t.instance,
      r = "/personal/index?userId="
        .concat(e, "&postid=")
        .concat(o, "&symbol=")
        .concat(i)
        .concat("miniapp" === c.from ? "&from=miniapp" : "");
    w({ path: r, instance: c });
  },
  C = function (t) {
    var e,
      n = t.newsid,
      o = t.instance;
    if (/^SN/.test(n)) e = "/information/detail?id=".concat(n, "&zxtype=1");
    else if (/^nek/.test(n))
      e = "/information/detail?fromshare=y&zxid=".concat(n, "&zxtype=1");
    else if (/^nes/.test(n))
      e = "/information/detail?fromshare=y&type=1&id=".concat(n);
    else if (/^FN/.test(n))
      e = "/information/detail?id=".concat(n, "&type=4&title=快讯");
    else if (/^VD/.test(n)) e = "/information/videoDetail?id=".concat(n);
    else {
      var a;
      /^(no)[s,u,k,j,n]/.test(n)
        ? (a = 2)
        : /^nek/.test(n)
        ? (a = 1)
        : /^(re)[s,u,k,j,n]/.test(n) && (a = 0),
        (e = "/information/detail?id="
          .concat(n, "&fromshare=y&zxid=")
          .concat(n, "&scode=0&zxtype=")
          .concat(a));
    }
    w({ path: e, instance: o });
  },
  O = function (t) {
    var e = t.newsid,
      n = t.instance;
    e &&
      w({ path: "/information/AIFinancialReport?id=".concat(e), instance: n });
  },
  P = function (t) {
    var e = t.newsid,
      n = t.instance;
    w({
      path: "/information/detail?id=".concat(
        e,
        "&type=4&articleStyle=card&subtype=morningreportcard"
      ),
      instance: n,
    });
  },
  j = function (t) {
    var e = t.newsid,
      n = t.instance,
      o = "/pages/report/morning/briefing?id=".concat(e);
    w({ url: o, path: o, instance: n });
  },
  N = function (t) {
    var e = t.url,
      n = t.linkTradeAccount;
    if (n) {
      var o = n.wzq,
        a = (n.mini_h5, o || {}),
        i = a.broker,
        c = a.stat,
        r = !1;
      i &&
        ((null == TradeFunc ? void 0 : TradeFunc.getApplyList()) || []).forEach(
          function (t) {
            t.code === i && (t.canApply || t.can_apply) && (r = !0);
          }
        ),
        r
          ? null == TradeFunc ||
            TradeFunc.navToApplyStep({ broker: i, stat: c })
          : null == TradeFunc || TradeFunc.navToApplyIndex({ stat: c });
    } else x({ url: e });
  },
  R = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        getStock: function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = t.symbol,
            n = ["sz", "sh", "hk", "us"],
            o = e.substr(0, 2).toLocaleLowerCase(),
            a = -1 === n.indexOf(o) ? o : n.indexOf(o),
            i = e.substr(2);
          return { scode: i.split(".")[0] ? i : i.replace(".", ""), market: a };
        },
        goAIFinancialReport: O,
        goDetail: z,
        goIndex: function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = arguments.length > 1 ? arguments[1] : void 0;
          w({ path: p.buildUrl("/community/index", t), instance: e });
        },
        goMorningBriefing: j,
        goMorningReport: P,
        goNewsDetail: C,
        goPageCommon: function (t) {
          var e,
            n = t || {},
            i = n.selection,
            c = n.symbol,
            r = n.postid,
            s = n.topicId,
            d = n.chaolian,
            p = n.newsid,
            u = n.instance,
            m = n.userId,
            f = n.name,
            g = n.eventName,
            h = n.url,
            v = n.linkTradeAccount;
          switch (g) {
            case "stock":
              T({ code: c, name: f, instance: u });
              break;
            case "stockdetail":
              I({ code: c, instance: u });
              break;
            case "topic":
              _(
                ((e = l({}, i ? { selection: i, topicId: s } : { topicId: s })),
                o(e, a({ instance: u })))
              );
              break;
            case "plaza":
              S({ instance: u });
              break;
            case "topicCircle":
              q({ instance: u });
              break;
            case "detail":
              z(t);
              break;
            case "complaint":
              w({ path: "/community/complaint", instance: u });
              break;
            case "person":
              D({ userId: m, postid: r, symbol: c, instance: u });
              break;
            case "news":
              C({ newsid: p, instance: u });
              break;
            case "aiFinancialReport":
              O({ newsid: p, instance: u });
              break;
            case "morningReport":
              P({ newsid: p, instance: u });
              break;
            case "morningBriefing":
              j({ newsid: p, instance: u });
              break;
            case "chaolian":
              N({ url: d || h, linkTradeAccount: v });
          }
        },
        goPerson: D,
        goRank: function () {},
        goRelatedStockList: function (t) {
          var e = t.topicId,
            n = t.instance;
          w({
            path: "/relatedStockList/relatedStockList?topicId=".concat(e),
            instance: n,
          });
        },
        goStockComment: T,
        goStockDetail: I,
        goStockDetailWithHqData: function (t) {
          var e = t.market,
            n = t.scode;
          ((null == location ? void 0 : location.href) || "").indexOf(
            "lite=1"
          ) > 0 &&
            (location.href =
              "https://wzq.tenpay.com/mp/lite/index.html#/quote/detail?market="
                .concat(e, "&scode=")
                .concat(n));
        },
        goTopic: _,
        goTopicCircle: q,
        goTopicPlaza: S,
        goWatchList: function (t) {
          var e = t.gdId;
          ((null == location ? void 0 : location.href) || "").indexOf(
            "lite=1"
          ) > 0 &&
            (location.href =
              "https://wzq.tenpay.com/mp/lite/index.html#/pages/stockBasket/detail?gdId=".concat(
                e
              ));
        },
        gotoETFContestPage: function (t) {
          var e = t.wzqUrl;
          x({ url: e });
        },
        navigateToChaoLian: N,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  L = p.sdk.navigateToPage,
  F = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      e = t.itemId;
    e &&
      L({
        url: "https://gu.qq.com/community/comment/index.html#/comment-detail-detail?inApp=0&nid=".concat(
          e
        ),
      });
  },
  A = function (t) {
    var e = t.topicId;
    e && L({ url: "/#/topic-topic?topicId=".concat(e) });
  },
  U = function (t) {
    var e = t.newsid;
    if (e) {
      var n;
      if (/^SN/.test(e)) n = "/information/detail?id=".concat(e, "&zxtype=1");
      else if (/^nek/.test(e))
        n = "/information/detail?fromshare=y&zxid=".concat(e, "&zxtype=1");
      else if (/^nes/.test(e))
        n = "/information/detail?fromshare=y&type=1&id=".concat(e);
      else if (/^FN/.test(e))
        n = "/information/detail?id=".concat(e, "&type=4&title=快讯");
      else if (/^VD/.test(e)) n = "/information/videoDetail?id=".concat(e);
      else {
        var o;
        /^(no)[s,u,k,j,n]/.test(e)
          ? (o = 2)
          : /^nek/.test(e)
          ? (o = 1)
          : /^(re)[s,u,k,j,n]/.test(e) && (o = 0),
          (n = "/information/detail?id="
            .concat(e, "&fromshare=y&zxid=")
            .concat(e, "&scode=0&zxtype=")
            .concat(o));
      }
      location.href =
        "wzq.tenpay.com" === location.hostname
          ? "".concat(location.origin, "/mm").concat(n)
          : "";
    }
  },
  B = function (t) {
    var e = t.newsid;
    if (e) {
      var n = "/information/AIFinancialReport?id=".concat(e);
      location.href =
        "wzq.tenpay.com" === location.hostname
          ? "".concat(location.origin, "/mm").concat(n)
          : "";
    }
  },
  M = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        goAIFinancialReport: B,
        goDetail: F,
        goIndex: function () {},
        goNewsDetail: U,
        goPageCommon: function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = t.eventName,
            n = t.topicId,
            o = t.newsid;
          switch (e) {
            case "detail":
              F(t);
              break;
            case "topic":
              A({ topicId: n });
              break;
            case "news":
              U({ newsid: o });
              break;
            case "aiFinancialReport":
              B({ newsid: o });
          }
        },
        goRank: function () {},
        goStockDetail: function () {},
        goStockDetailWithHqData: function () {},
        goTopic: A,
        goWatchList: function () {},
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  W = p.sdk,
  H = W.navigateTo,
  V = W.navigateToPage;
function E(t) {
  var e = t.code;
  window.parent.postMessage({ symbol: e }, "*");
}
var J = function (t) {
    var e = t.code,
      n = t.name,
      o = t.instance,
      a = "multilist?symbol=".concat(e, "&name=").concat(encodeURIComponent(n));
    H({ path: a, instance: o });
  },
  G = function (t) {
    var e = t.topicId,
      n = t.topicName,
      o = t.selection,
      a = t.instance,
      i = { topicId: e, topic: n, selection: o };
    H({ path: p.buildUrl("multilist", i), instance: a });
  },
  Q = function (t) {
    var e = t.instance;
    H({ path: "/topicPlaza/topicPlaza", instance: e });
  },
  K = function (t) {
    var e = t.itemId,
      n = t.instance;
    H({ path: "detail?nid=".concat(e), instance: n });
  },
  X = function (t) {
    var e = t.newsid,
      n = t.instance,
      o = t.symbol,
      a = t.title;
    /^SN/.test(e)
      ? Y({ newsid: e, symbol: o, title: a })
      : /^VD/.test(e) || K({ itemId: e, instance: n });
  },
  Y = function (t) {
    var e = t.newsid,
      n = t.symbol,
      o = t.title;
    window.parent.postMessage({ newsid: e, symbol: n, title: o }, "*");
  },
  Z = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        goAIFinancialReport: function () {},
        goDetail: K,
        goIndex: function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = arguments.length > 1 ? arguments[1] : void 0;
          H({ path: p.buildUrl("/community/index", t), instance: e });
        },
        goNewsDetail: Y,
        goNewsDetailContainer: X,
        goPageCommon: function (t) {
          var e = t || {},
            n = e.selection,
            o = e.symbol,
            a = e.topicId,
            i = e.chaolian,
            c = e.newsid,
            r = e.instance,
            s = (e.userId, e.name),
            l = e.eventName,
            d = e.title,
            p = e.topicName,
            u = e.url;
          switch (l) {
            case "stock":
              J({ code: o, name: s, instance: r });
              break;
            case "stockdetail":
              E({ code: o, instance: r });
              break;
            case "topic":
              G({ selection: n, topicName: p, topicId: a, instance: r });
              break;
            case "plaza":
              Q({ instance: r });
              break;
            case "detail":
              K(t);
              break;
            case "complaint":
            case "person":
              break;
            case "news":
              X({ newsid: c, instance: r, symbol: o, title: d });
              break;
            case "chaolian":
              V({ url: i || u });
          }
        },
        goPerson: function () {},
        goRank: function () {},
        goRelatedStockList: function (t) {
          var e = t.topicId,
            n = t.instance;
          H({
            path: "/relatedStockList/relatedStockList?topicId=".concat(e),
            instance: n,
          });
        },
        goStockComment: J,
        goStockDetail: E,
        goStockDetailWithHqData: function () {},
        goTopic: G,
        goTopicPlaza: Q,
        goVideoDetail: function () {},
        goWatchList: function () {},
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  $ = { wzq: R, zxg: y, web: M, mini: m.mini, qqmac: Z }[p.platform];
exports.api = $;
