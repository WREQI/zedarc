var e,
  t = require("../../../../@babel/runtime/helpers/toConsumableArray"),
  i = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../@babel/runtime/helpers/typeof"),
  s = require("../../../../@babel/runtime/helpers/classCallCheck"),
  r = require("../../../../@babel/runtime/helpers/createClass"),
  o = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  a = Object.defineProperty,
  l = Object.defineProperties,
  c = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  h = Object.prototype.hasOwnProperty,
  d = Object.prototype.propertyIsEnumerable,
  v = function (e, t, i) {
    return t in e
      ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[t] = i);
  },
  p = function (e, t) {
    for (var i in t || (t = {})) h.call(t, i) && v(e, i, t[i]);
    if (u) {
      var n,
        s = o(u(t));
      try {
        for (s.s(); !(n = s.n()).done; ) {
          i = n.value;
          d.call(t, i) && v(e, i, t[i]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  f = function (e, t) {
    return l(e, c(t));
  },
  m = function (e, t, i) {
    return new Promise(function (n, s) {
      var r = function (e) {
          try {
            a(i.next(e));
          } catch (e) {
            s(e);
          }
        },
        o = function (e) {
          try {
            a(i.throw(e));
          } catch (e) {
            s(e);
          }
        },
        a = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(r, o);
        };
      a((i = i.apply(e, t)).next());
    });
  },
  g = require("../../../../common/vendor.js"),
  _ = require("../stock-news-core/utils/report.js"),
  b = require("../stock-crypto-modules-config/dist/index.js"),
  w = require("../../js-cookie/src/js.cookie.js"),
  y = require("../stock-news-core/utils/request/index.js"),
  S = require("../stock-news-base/service/news/gray.js"),
  x = require("../stock-news-sdk/index.js"),
  k = require("../stock-news-base/service/market/RelatedStockHelper.js"),
  q = require("../stock-live-combine/api/index.js"),
  T = require("../stock-news-core/utils/tools.js"),
  C = require("../stock-news-core/components/status/config.js"),
  I = require("../stock-news-core/utils/force2https.js"),
  A = require("../stock-sq/src/utils/mixins/securityCheck/index.js"),
  R = require("../stock-community-base/utils/privacyCheck.js"),
  D = function (e) {
    var t, i;
    return f(p({}, e), {
      flv: String(null != (t = null == e ? void 0 : e.flv) ? t : ""),
      m3u8: String(null != (i = null == e ? void 0 : e.m3u8) ? i : ""),
    });
  },
  L = function (e) {
    var t, i, n, s;
    return f(p({}, e), {
      video_url: String(
        null != (t = null == e ? void 0 : e.video_url) ? t : ""
      ),
      start_time: Number(
        null != (i = null == e ? void 0 : e.start_time) ? i : 0
      ),
      end_time: Number(null != (n = null == e ? void 0 : e.end_time) ? n : 0),
      file_size: Number(null != (s = null == e ? void 0 : e.file_size) ? s : 0),
    });
  },
  H = function (e) {
    var t,
      i,
      n,
      s = null == e ? void 0 : e.live,
      r = Array.isArray(null == e ? void 0 : e.vod) ? e.vod : [];
    return f(p({}, e), {
      check: Number(null != (t = null == e ? void 0 : e.check) ? t : 0),
      name: String(null != (i = null == e ? void 0 : e.name) ? i : ""),
      id: Number(null != (n = null == e ? void 0 : e.id) ? n : 1),
      live: s ? D(s) : void 0,
      vod: r.map(L),
    });
  },
  j = function (e) {
    var t,
      i,
      n,
      s = Array.isArray(null == e ? void 0 : e.desc) ? e.desc : [];
    return f(p({}, e), {
      stock_code: String(
        null != (t = null == e ? void 0 : e.stock_code) ? t : ""
      ),
      stock_market: String(
        null != (i = null == e ? void 0 : e.stock_market) ? i : ""
      ),
      stock_name: String(
        null != (n = null == e ? void 0 : e.stock_name) ? n : ""
      ),
      desc: s.map(function (e) {
        return String(null != e ? e : "");
      }),
    });
  },
  M = function (e) {
    var t;
    return void 0 !== (null == e ? void 0 : e.comment_status) &&
      null !== (null == e ? void 0 : e.comment_status) &&
      "" !== (null == e ? void 0 : e.comment_status)
      ? Number(e.comment_status)
      : "off" ===
        String(null != (t = null == e ? void 0 : e.comment_flag) ? t : "")
      ? 1
      : 0;
  },
  N = function (e) {
    var t, i, n, s;
    if (!e) return e;
    var r = null != (t = e.retcode) ? t : e.code,
      o = "0" === String(r) || 0 === r,
      a = null != (i = e.live_info) ? i : e,
      l = p({}, e),
      c = (function (e) {
        var t,
          i,
          n,
          s,
          r,
          o,
          a,
          l,
          c,
          u,
          h,
          d,
          v,
          m,
          g,
          _,
          b,
          w,
          y,
          S,
          x,
          k,
          q,
          T,
          C,
          I,
          A,
          R,
          N,
          P,
          O,
          z,
          E,
          B,
          W,
          $,
          U = p({}, e),
          Q = Array.isArray(null == e ? void 0 : e.stream_info)
            ? e.stream_info
            : [],
          F = Array.isArray(null == e ? void 0 : e.relate_quotes)
            ? e.relate_quotes
            : [],
          Y = Array.isArray(null == e ? void 0 : e.desc) ? e.desc : [],
          G = Array.isArray(null == e ? void 0 : e.vod) ? e.vod : [],
          X = null == e ? void 0 : e.live;
        return f(p({}, U), {
          stream_id: Number(
            null !=
              (i =
                null != (t = null == e ? void 0 : e.stream_id)
                  ? t
                  : null == e
                  ? void 0
                  : e.id)
              ? i
              : 0
          ),
          live_id: String(
            null != (n = null == e ? void 0 : e.live_id) ? n : ""
          ),
          live_news_id: String(
            null != (s = null == e ? void 0 : e.live_news_id) ? s : ""
          ),
          name: String(null != (r = null == e ? void 0 : e.name) ? r : ""),
          title: String(null != (o = null == e ? void 0 : e.title) ? o : ""),
          live_summary: String(
            null != (a = null == e ? void 0 : e.live_summary) ? a : ""
          ),
          live_type: String(
            null != (l = null == e ? void 0 : e.live_type) ? l : ""
          ),
          live_status: Number(
            null != (c = null == e ? void 0 : e.live_status) ? c : 0
          ),
          live_public_img: String(
            null != (u = null == e ? void 0 : e.live_public_img) ? u : ""
          ),
          live_public_thumbnail: String(
            null != (h = null == e ? void 0 : e.live_public_thumbnail) ? h : ""
          ),
          estimate_start_time: Number(
            null != (d = null == e ? void 0 : e.estimate_start_time) ? d : 0
          ),
          estimate_end_time: Number(
            null != (v = null == e ? void 0 : e.estimate_end_time) ? v : 0
          ),
          publish_time: Number(
            null != (m = null == e ? void 0 : e.publish_time) ? m : 0
          ),
          system_time: Number(
            null != (g = null == e ? void 0 : e.system_time) ? g : 0
          ),
          participate_num: Number(
            null != (_ = null == e ? void 0 : e.participate_num) ? _ : 0
          ),
          stream_type: Number(
            null != (b = null == e ? void 0 : e.stream_type) ? b : 0
          ),
          stream_info: Q.map(H),
          interactive_show_order: String(
            null != (w = null == e ? void 0 : e.interactive_show_order) ? w : ""
          ),
          subtitle_id: String(
            null != (y = null == e ? void 0 : e.subtitle_id) ? y : ""
          ),
          summary_id: String(
            null != (S = null == e ? void 0 : e.summary_id) ? S : ""
          ),
          wx_video_id: String(
            null != (x = null == e ? void 0 : e.wx_video_id) ? x : ""
          ),
          wuji_calendar_id: String(
            null != (k = null == e ? void 0 : e.wuji_calendar_id) ? k : ""
          ),
          ai_summary: Number(
            null != (q = null == e ? void 0 : e.ai_summary) ? q : 0
          ),
          media_id: Number(
            null != (T = null == e ? void 0 : e.media_id) ? T : 0
          ),
          media_name: String(
            null != (C = null == e ? void 0 : e.media_name) ? C : ""
          ),
          media_icon: String(
            null !=
              (A =
                null != (I = null == e ? void 0 : e.media_icon)
                  ? I
                  : null == e
                  ? void 0
                  : e.media_icon_url)
              ? A
              : ""
          ),
          desc: Y.map(function (e) {
            return String(null != e ? e : "");
          }),
          relate_quotes: F.map(j),
          related_news_flag: Number(
            null != (R = null == e ? void 0 : e.related_news_flag) ? R : 0
          ),
          comment_num: Number(
            null != (N = null == e ? void 0 : e.comment_num) ? N : 0
          ),
          comment_status: M(e),
          cross_comment: Number(
            null != (P = null == e ? void 0 : e.cross_comment) ? P : 0
          ),
          reserve_flag: Number(
            null != (O = null == e ? void 0 : e.reserve_flag) ? O : 0
          ),
          user_identity: Number(
            null != (z = null == e ? void 0 : e.user_identity) ? z : 0
          ),
          account_desc: String(
            null != (E = null == e ? void 0 : e.account_desc) ? E : ""
          ),
          account_wzq_link: String(
            null != (B = null == e ? void 0 : e.account_wzq_link) ? B : ""
          ),
          account_zxg_link: String(
            null != (W = null == e ? void 0 : e.account_zxg_link) ? W : ""
          ),
          live: X ? D(X) : void 0,
          vod: G.map(L),
          live_count: Number(
            null != ($ = null == e ? void 0 : e.live_count) ? $ : 0
          ),
        });
      })(a);
    return f(p({}, l), {
      code: o ? 0 : Number(null != r ? r : -1),
      msg: String(null != (s = null != (n = e.msg) ? n : e.retmsg) ? s : ""),
      live_info: c,
    });
  },
  P = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0",
      i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
      n = e.toString();
    return n.length < i
      ? t.repeat(i).replace(new RegExp("\\d{".concat(n.length, "}$")), n)
      : n;
  },
  O = function (e) {
    var t,
      i =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : "yyyyMMdd";
    return e
      ? ((t =
          "number" == typeof e
            ? new Date(e)
            : "function" == typeof e.getFullYear
            ? e
            : new Date(e.toString().replace(/-/g, "/"))),
        i
          .replace(/y{4}/, t.getFullYear())
          .replace(/M{2}/, P(t.getMonth() + 1))
          .replace(/d{2}/, P(t.getDate()))
          .replace(/h{2}/, P(t.getHours()))
          .replace(/m{2}/, P(t.getMinutes()))
          .replace(/s{2}/, P(t.getSeconds()))
          .replace(/w{1}/, "日一二三四五六"[t.getDay()]))
      : "";
  },
  z = {
    date: O,
    fromNow: function (e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        i = Date.now() - t,
        n = new Date(i).setHours(0, 0, 0, 0),
        s = new Date(e.toString().replace(/-/g, "/"));
      "number" == typeof e && (s = new Date(e));
      var r = parseInt(i, 10) - parseInt(s.getTime(), 10);
      return 0 < r && r < 36e5
        ? parseInt(r / 6e4, 10) > 0
          ? "".concat(parseInt(r / 6e4, 10), "分钟前")
          : "刚刚"
        : 36e5 < r && r < 72e5
        ? "1小时前"
        : 72e5 < r && s.getTime() > n
        ? O(s, "hh:mm")
        : O(s, "MM月dd日");
    },
    liveTime: function (e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        i = Date.now() - t,
        n = new Date(e.toString().replace(/-/g, "/"));
      "number" == typeof e && (n = new Date(e));
      var s = new Date(i).setHours(0, 0, 0, 0) - n.setHours(0, 0, 0, 0);
      return s < 864e5
        ? "今天"
        : s < 1728e5
        ? "昨天"
        : new Date(i).getFullYear() == n.getFullYear()
        ? O(n, "MM-dd")
        : O(n, "yyyy-MM-dd");
    },
    newsTime: function (e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        i = Date.now() - t,
        n = new Date(e.toString().replace(/-/g, "/"));
      "number" == typeof e && (n = new Date(e));
      var s = new Date(i).setHours(0, 0, 0, 0),
        r = parseInt(i, 10) - parseInt(n.getTime(), 10);
      return 0 < r && r < 36e5
        ? parseInt(r / 6e4, 10) > 0
          ? "".concat(parseInt(r / 6e4, 10), "分钟前")
          : "刚刚"
        : 36e5 < r && r < 72e5
        ? "1小时前"
        : 72e5 < r && e > s
        ? O(n, "hh:mm")
        : new Date(i).getFullYear() == n.getFullYear()
        ? O(n, "MM-dd hh:mm")
        : O(n, "yyyy-MM-dd");
    },
    chatTime: function (e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        i = Date.now() - t,
        n = new Date(e.toString().replace(/-/g, "/"));
      "number" == typeof e && (n = new Date(e));
      var s = new Date(i).setHours(0, 0, 0, 0),
        r = parseInt(i, 10) - parseInt(n.getTime(), 10);
      return 0 < r && r < 36e5
        ? parseInt(r / 6e4, 10) > 0
          ? "".concat(parseInt(r / 6e4, 10), "分钟前")
          : "刚刚"
        : 36e4 < r && e > s
        ? O(n, "hh:mm")
        : n.getFullYear() == new Date(i).getFullYear()
        ? O(n, "MM-dd hh:mm")
        : O(n, "yyyy-MM-dd");
    },
  },
  E = {
    push: {
      online:
        "https://proxy.finance.qq.com/group/newstockgroup/Live/getLiveContentById?callback=?&publish_id=",
      test: "https://proxy.finance.qq.com/group/newstockgroup/Live/getLiveContentById?callback=?&publish_id=",
      preRelease:
        "https://proxy.finance.qq.com/group/newstockgroup/Live/getLiveContentById?callback=?&publish_id=",
    },
    relateNews: {
      online:
        "https://gu.qq.com/resources/shy/news/detail-v2/index.html?t=1#/index",
      test: "https://gu.qq.com/resources/shy/news/detail-v2/index.html?t=1#/index",
      preRelease:
        "https://gu.qq.com/resources/shy/news/detail-v2/index.html?t=1#/index",
    },
    subject: {
      online: "https://gu.qq.com/resources/shy/news/subject/index.html#/index",
      test: "https://gu.qq.com/resources/shy/news/subject/index.html#/index",
      preRelease:
        "https://gu.qq.com/resources/shy/news/subject/index.html#/index",
    },
    shareLive: {
      online: "https://gu.qq.com/resources/shy/news/live/index.html#/detail",
      test: "https://gu.qq.com/resources/shy/news/live/index.html#/detail",
      preRelease:
        "https://gu.qq.com/resources/shy/news/live/index.html#/detail",
    },
    domain: {
      online: "https://proxy.finance.qq.com/ifzqgtimg/",
      test: "https://proxy.finance.qq.com/ifzqgtimg/",
      preRelease: "https://proxy.finance.qq.com/ifzqgtimg/",
    },
    qt: {
      online: "https://qt.gtimg.cn/",
      test: "https://qt.gtimg.cn/",
      preRelease: "https://qt.gtimg.cn/",
    },
    qt2: {
      online: "https://qt.finance.qq.com/",
      test: "https://qt.finance.qq.com/",
      preRelease: "https://qt.finance.qq.com/",
    },
    group: {
      online: "https://group.finance.qq.com/",
      test: "https://group.finance.qq.com/",
      preRelease: "https://group.finance.qq.com/",
    },
    report: {
      online: "https://wzq.tenpay.com/cgi-bin/activity/userbehavior.fcgi",
      test: "https://wzq.tenpay.com/cgi-bin/activity/userbehavior.fcgi",
      preRelease: "https://wzq.tenpay.com/cgi-bin/activity/userbehavior.fcgi",
    },
    share: {
      online: "https://gu.qq.com/news/event/?#/eventDetail-index?id=",
      test: "https://gu.qq.com/news/event/?#/eventDetail-index?id=",
      preRelease: "https://gu.qq.com/news/event/?#/eventDetail-index?id=",
    },
    shareH5: {
      online:
        "https://gu.qq.com/community/comment/index.html#/comment-detail-detail?inApp=0&nid=",
      preRelease:
        "https://gu.qq.com/community/comment/index.html#/comment-detail-detail?inApp=0&nid=",
      test: "https://gu.qq.com/community/comment/index.html#/comment-detail-detail?inApp=0&nid=",
    },
    sq: {
      online: "https://proxy.finance.qq.com/group/",
      preRelease: "https://proxy.finance.qq.com/group/",
      test: "https://proxy.finance.qq.com/group/",
    },
    activity: {
      online: "https://wzq.tenpay.com/cgi-bin/activity.fcgi?activity=qyfree",
      test: "https://wzq.tenpay.com/cgi-bin/activity.fcgi?activity=qyfree",
      preRelease:
        "https://wzq.tenpay.com/cgi-bin/activity.fcgi?activity=qyfree",
    },
    actTask: {
      online: "https://wzq.tenpay.com/cgi-bin/activity_task.fcgi",
      test: "https://wzq.tenpay.com/cgi-bin/activity_task.fcgi",
      preRelease: "https://wzq.tenpay.com/cgi-bin/activity_task.fcgi",
    },
    navOp: {
      online: "https://wzq.tenpay.com/cgi-bin/nav_op.fcgi",
      test: "https://wzq.tenpay.com/cgi-bin/nav_op.fcgi",
      preRelease: "https://wzq.tenpay.com/cgi-bin/nav_op.fcgi",
    },
    wzqActivity: {
      online: "https://wzq.tenpay.com/cgi-bin/activity.fcgi",
      test: "https://wzq.tenpay.com/cgi-bin/activity.fcgi",
      preRelease: "https://wzq.tenpay.com/cgi-bin/activity.fcgi",
    },
    shareUrl: {
      online: "https://gu.qq.com/resources/shy/news/subject/index.html?#/index",
      test: "https://gu.qq.com/resources/shy/news/subject/index.html?#/index",
      preRelease:
        "https://gu.qq.com/resources/shy/news/subject/index.html?#/index",
    },
    eventLanding: {
      online: "https://snp.tenpay.com/cgi-bin/",
      test: "https://snp.tenpay.com/cgi-bin/",
      preRelease: "https://snp.tenpay.com/cgi-bin/",
    },
    eventDetailShare: {
      online: "https://gu.qq.com/resources/shy/news/event/?#/eventDetail-index",
      test: "https://gu.qq.com/resources/shy/news/event/?#/eventDetail-index",
      preRelease:
        "https://gu.qq.com/resources/shy/news/event/?#/eventDetail-index",
    },
    activityShare: {
      online: "https://wzq.tenpay.com/cgi-bin/activity/activity_share.fcgi",
      test: "https://wzq.tenpay.com/cgi-bin/activity/activity_share.fcgi",
      preRelease: "https://wzq.tenpay.com/cgi-bin/activity/activity_share.fcgi",
    },
    getEarnRank: {
      online: "https://proxy.finance.qq.com/ifzqgtimg/stock/corp/finseason/",
      test: "https://proxy.finance.qq.com/ifzqgtimg/stock/corp/finseason/",
      preRelease:
        "https://proxy.finance.qq.com/ifzqgtimg/stock/corp/finseason/",
    },
    getNotices: {
      online:
        "https://proxy.finance.qq.com/ifzqgtimg/stock/corp/finseason/forecastIndex",
      preRelease:
        "https://proxy.finance.qq.com/ifzqgtimg/stock/corp/finseason/forecastIndex",
      test: "https://proxy.finance.qq.com/ifzqgtimg/stock/corp/finseason/forecastIndex",
    },
    plateStocks: {
      online: "https://bisheng.tenpay.com/fcgi-bin/xg_plate_stocks.fcgi",
      preRelease: "https://bisheng.tenpay.com/fcgi-bin/xg_plate_stocks.fcgi",
      test: "https://bisheng.tenpay.com/fcgi-bin/xg_plate_stocks.fcgi",
    },
    plateRelated: {
      online: "https://bisheng.tenpay.com/fcgi-bin/xg_related_plates.fcgi",
      preRelease: "https://bisheng.tenpay.com/fcgi-bin/xg_related_plates.fcgi",
      test: "https://bisheng.tenpay.com/fcgi-bin/xg_related_plates.fcgi",
    },
    reward_wallstreet: {
      online: "https://zqact01.tenpay.com/cgi-bin/activity_tenth_birthday.fcgi",
      test: "https://zqact01.tenpay.com/cgi-bin/activity_tenth_birthday.fcgi",
      preRelease:
        "https://zqact01.tenpay.com/cgi-bin/activity_tenth_birthday.fcgi",
    },
    liveInfo: {
      online: "https://snp.tenpay.com/cgi-bin/",
      test: "https://snp.tenpay.com/cgi-bin/",
      preRelease: "https://snp.tenpay.com/cgi-bin/",
    },
    live: {
      online: "https://proxy.finance.qq.com/group/newstockgroup/",
      test: "https://proxy.finance.qq.com/group/newstockgroup/",
      preRelease: "https://proxy.finance.qq.com/group/newstockgroup/",
    },
    usersetting: {
      online: "https://wzq.tenpay.com/cgi-bin/usersetting.fcgi",
      test: "https://wzq.tenpay.com/cgi-bin/usersetting.fcgi",
      preRelease: "https://wzq.tenpay.com/cgi-bin/usersetting.fcgi",
    },
    stockAdd: {
      online:
        "https://proxy.finance.qq.com/newstock/stockapp/zixuangu/stockAdd",
      test: "https://proxy.finance.qq.com/newstock/stockapp/zixuangu/stockAdd",
      preRelease:
        "https://proxy.finance.qq.com/newstock/stockapp/zixuangu/stockAdd",
    },
    operseq: {
      online: "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq",
      test: "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq",
      preRelease:
        "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq",
    },
    stockPortrait: {
      online: "https://bisheng.tenpay.com/fcgi-bin/zg_stock_profile.fcgi",
      test: "https://bisheng.tenpay.com/fcgi-bin/zg_stock_profile.fcgi",
      preRelease: "https://bisheng.tenpay.com/fcgi-bin/zg_stock_profile.fcgi",
    },
  },
  B = (function () {
    function e() {
      s(this, e);
    }
    return (
      r(e, null, [
        {
          key: "getHost",
          value: function (e) {
            var t;
            try {
              t =
                (window &&
                  window.__SystemInfo__ &&
                  window.__SystemInfo__.serverType) ||
                "online";
            } catch (e) {
              t = "online";
            }
            var i = E[e][t];
            return "object" == n(i) ? i[t] : i;
          },
        },
      ]),
      e
    );
  })(),
  W = {}.IS_LITE_MODE,
  $ = function (e) {
    var t,
      i =
        null == (t = null == e ? void 0 : e.live_info)
          ? void 0
          : t.relate_quotes;
    return (
      (null == e ? void 0 : e.live_info) &&
        Array.isArray(i) &&
        (e.live_info.relate_quotes = i.map(function (e) {
          var t = (function (e, t) {
              var i = String(null != e ? e : ""),
                n = String(null != t ? t : "");
              return (
                n && i.startsWith(n)
                  ? (i = i.slice(n.length))
                  : !n &&
                    i.length > 2 &&
                    ((n = i.slice(0, 2)), (i = i.slice(2))),
                { stock_code: i, stock_market: n }
              );
            })(
              null == e ? void 0 : e.stock_code,
              null == e ? void 0 : e.stock_market
            ),
            i = t.stock_code,
            n = t.stock_market;
          return f(p({}, e), { stock_code: i, stock_market: n });
        })),
      e
    );
  },
  U = function (e) {
    var t,
      i = (null == navigator ? void 0 : navigator.userAgent) || "",
      n =
        (null == (t = null == i ? void 0 : i.toLowerCase())
          ? void 0
          : t.indexOf("micromessenger")) > -1 || !0;
    return "live" === e && n
      ? "https://wzq.tenpay.com/group/newstockgroup/"
      : B.getHost(e);
  },
  Q = function (e) {
    var t,
      i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
      n = (null == navigator ? void 0 : navigator.userAgent) || "",
      s = /\b(iPad|iPhone|iPod)\b.*? OS ([\d_]+)/.test(n),
      r =
        (null == (t = null == n ? void 0 : n.toLowerCase())
          ? void 0
          : t.indexOf("micromessenger")) > -1,
      o = "zxg";
    W && (o = "mini_h5");
    var a = p({ platform: s ? 1 : 2, zappid: o, check: 11 }, e);
    if (g.wx$1) {
      var l = g.wx$1.getStorageSync("_qluin"),
        c = g.wx$1.getStorageSync("_qlskey"),
        u = "plus";
      a = f(p({}, a), {
        app: u,
        qluin: l,
        qlskey: c,
        openid: l,
        fskey: c,
        platform: "ios" === g.wx$1.getSystemInfoSync().platform ? 1 : 2,
        check: 12,
      });
    } else if (r) {
      var h = "wzq";
      W && (h = "mini_h5");
      var d = {
        app: h,
        device_id: 1,
        appid: w.cookie.get("wzq_qlappid") || w.cookie.get("qlappid"),
        openid: w.cookie.get("wzq_qluin"),
        fskey: w.cookie.get("wzq_qlskey") || w.cookie.get("qlskey"),
        qluin: w.cookie.get("wzq_qluin") || w.cookie.get("qluin"),
        qlskey: w.cookie.get("wzq_qlskey") || w.cookie.get("qlskey"),
        check: 12,
      };
      a = p(p({}, a), d);
    }
    return i && (a.sign = F(a)), a;
  },
  F = function (e) {
    var t = Object.keys(e)
        .sort()
        .filter(function (t) {
          return "" !== e[t] && void 0 !== e[t];
        })
        .map(function (t) {
          return "".concat(t, "=").concat(e[t]);
        }),
      i = b.dist.SIGN_KEY.mini_h5;
    return (
      W && (i = b.dist.SIGN_KEY.light_h5),
      g.md5Module("".concat(t.join("&"), "&key=").concat(i))
    );
  },
  Y = function (e) {
    return m(
      exports,
      null,
      i().mark(function t() {
        var n, s, r, o, a;
        return i().wrap(function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (t.next = 2), S.isNewsGrayUser("queryLiveInfo");
              case 2:
                if (!t.sent) {
                  t.next = 7;
                  break;
                }
                return (
                  (t.next = 5),
                  (function (e) {
                    return m(
                      this,
                      null,
                      i().mark(function t() {
                        return i().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt(
                                  "return",
                                  S.newsRequest(
                                    "/zxg/news/news_detail/query_live_info",
                                    e
                                  )
                                );
                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                      })
                    );
                  })({
                    live_news_id: String(
                      null != (n = null == e ? void 0 : e.live_news_id) ? n : ""
                    ),
                  })
                );
              case 5:
                return (s = t.sent), t.abrupt("return", $(s));
              case 7:
                return (
                  (r = "".concat(U("liveInfo"), "snpgw_qry_live_detail.fcgi")),
                  (o = Q(e)),
                  (t.next = 11),
                  y.request(r, p({}, o), { method: "post", dropCookie: !0 })
                );
              case 11:
                return (a = t.sent), t.abrupt("return", N(a));
              case 13:
              case "end":
                return t.stop();
            }
        }, t);
      })
    );
  },
  G = function (e) {
    var t = "".concat(U("live"), "NewsLive/getLiveList");
    return y.request(t, e, { method: "get" });
  },
  X = function (e) {
    var t,
      i = "".concat(U("live"), "NewsLive/getGroupChatMsg");
    return (t = Q(e)), y.request(i, t, { method: "get" });
  },
  Z = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      t = "".concat(U("live"), "NewsLive/preSendInfo"),
      i = e;
    return (i = Q(e)), y.request(t, i, { method: "get" });
  },
  V = function (e) {
    var t,
      i = "".concat(U("live"), "NewsLive/putGroupChatMsg");
    return (t = Q(e)), y.request(i, t, { method: "get" });
  },
  K = function (e) {
    var t = "".concat(U("liveInfo"), "snpgw_relate_news.fcgi"),
      i = (function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "zxg_h5",
          t = b.dist.SIGN_KEY.zxgh5,
          i = Math.floor(Math.random() * Math.floor(1e4));
        return { zappid: e, sign: g.md5Module(e + t + i), nonce: i };
      })(),
      n = Q(e, !1);
    return y.request(t, p(p({}, n), i), { method: "post" });
  },
  J = function () {
    var e = "https://wzq.tenpay.com/cgi-bin/userinfo.fcgi?&t=".concat(
        Date.now()
      ),
      t = { dealer: 1, detail: 1 };
    return (
      g.wx$1 &&
        (t = f(p({}, t), {
          qluin: g.wx$1.getStorageSync("_qluin"),
          qlskey: g.wx$1.getStorageSync("_qlskey"),
        })),
      y.request(e, t, { method: "post" })
    );
  },
  ee = function (e) {
    if ("function" == typeof x.sdk.getStorageSync)
      return x.sdk.getStorageSync(e);
    try {
      var t = localStorage.getItem(e);
      return t ? JSON.parse(t) : null;
    } catch (t) {
      return null;
    }
  },
  te = function (e, t) {
    if ("function" == typeof x.sdk.setStorageSync) x.sdk.setStorageSync(e, t);
    else
      try {
        localStorage.setItem(e, JSON.stringify(t));
      } catch (e) {}
  },
  ie = "subscribe_wxmsg_tips_last_show",
  ne = "LC2022122300000000000000",
  se = { IS_ZXG_XCX: !0, IS_WZQ_XCX: !1 },
  re = se.IS_ZXG_XCX,
  oe = se.IS_WZQ_XCX,
  ae = se.IS_LITE_MODE,
  le = se.IS_PCWEIXIN,
  ce = se.IS_ZXG_XCX_ALLH5,
  ue = new k.RelatedStockHelper(),
  he = {
    name: "Live",
    components: {
      NavigateToApp: function () {
        return "./components/navigateToApp.js";
      },
      TimeCounter: function () {
        return "./components/timeCounter.js";
      },
      DownLoad: function () {
        return "./components/DownLoad.js";
      },
      qrcode: function () {
        return "./components/SubscribeQrcode.js";
      },
      LiveToApp: function () {
        return "./components/LiveToApp.js";
      },
      MultiStreams: function () {
        return "./components/MultiStreams.js";
      },
      RelatedStock: function () {
        return "./components/related-stock/index.js";
      },
      SubscribeTipsDialog: function () {
        return "./components/SubscribeTipsDialog.js";
      },
      ReverseMoreLiveDialog: function () {
        return "./components/ReverseMoreLiveDialog.js";
      },
      livePlayerMP: function () {
        return "./components/uni-live-player/LivePlayerMp.js";
      },
      liveSwiperItem: function () {
        return "./components/LiveSwiper.js";
      },
      NewsStatus: function () {
        return "../../../newsSbg/@tencent/stock-news-core/components/status/index.js";
      },
      LiveScrollWrapper: function () {
        return "./components/LiveScrollWrapper.js";
      },
      SearchAiBar: function () {
        return "../../../searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/index.js";
      },
      HalfScreenAiEntry: function () {
        return "../../../searchAi/@tencent/stock-search-ai/pages/HalfScreenAiEntry.js";
      },
    },
    mixins: [
      A.securityCheck,
      {
        data: function () {
          return { showAiEntry: !1, showAiDialog: !1, aiQuestionObj: null };
        },
        methods: {
          onShowAiEntry: function () {
            this.showAiEntry = !0;
          },
          onHideAiEntry: function () {
            this.showAiEntry = !1;
          },
          onShowAiDialog: function (e) {
            (this.aiQuestionObj = e), (this.showAiDialog = !0);
          },
          onCloseAiDialog: function () {
            this.showAiDialog = !1;
          },
          clearAiSearchStatus: function () {
            (this.showAiEntry = !1),
              (this.showAiDialog = !1),
              (this.aiQuestionObj = null);
          },
        },
      },
    ],
    provide: function () {
      return { context: this, live_news_id: this.live_news_id };
    },
    inject: {
      useBroker: { value: "useBroker", default: null },
      onCheckUserAgreementStatus: {
        default: function () {
          return function () {};
        },
      },
      didAgreeUserAgreement: {
        default: function () {
          return { value: !0 };
        },
      },
    },
    props: {
      params: { type: Object, default: function () {} },
      innerFundList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      isSharePage: {
        type: Boolean,
        default: function () {
          return !1;
        },
      },
      mute: { type: Boolean, default: !1 },
      reserveAuto: { type: Boolean, default: !1 },
      skin: { type: String, default: "white" },
      stockId: { type: String, default: "" },
    },
    data: function () {
      var e = this.params,
        t = e.live_news_id,
        i = e.tab,
        n = void 0 === i ? "live" : i,
        s = e.wxurl,
        r = [
          { id: "live", name: "直播", interval: 1e4 },
          { id: "chat", name: "聊天", interval: 15e3 },
          { id: "news", name: "新闻", interval: -1 },
        ],
        o = r.findIndex(function (e) {
          return e.id === n;
        });
      return (
        o < 0 && (o = 0),
        {
          reportPrefix: "news.live",
          loaded: !1,
          os: "ios",
          statusBarHeight: 20,
          navTextColor: "#ffffff",
          navBackgroundColor: "#ffffff",
          user: {},
          tabs: r,
          currentTabIndex: o,
          currentSlide: o,
          live_news_id: t,
          live: null,
          delta_time: 0,
          live_list: {
            begin: -1,
            list: [],
            groups: [],
            loaded: !1,
            limited: !1,
            fetching: !1,
          },
          chat_list: {
            begin: -1,
            temp: [],
            list: [],
            groups: [],
            fetching: !1,
            loaded: !1,
            limited: !1,
          },
          news_list: {
            list: [],
            next_offset: 0,
            req_session: 0,
            limited: !1,
            fetching: !1,
          },
          wxurl: encodeURIComponent(s),
          playerClass: "",
          isMobile: "",
          showLiveInfo: !0,
          isWx: !0,
          isMP: !0,
          userWxInfo: null,
          inputText: "",
          isShowQrcode: !1,
          isShowInput: !0,
          qrCodeType: "btn",
          toastMessage: "",
          isShowToast: !1,
          isShowRelateHq: !1,
          isHorizonal: !1,
          hasSubscribed: !1,
          showSubscribeDialog: !1,
          subscribeDialogShowed: !1,
          showReverseDialog: !1,
          reverseDialogShowed: !1,
          liveSubjectList: [],
          liveFirstPlayTime: 0,
          showReverveSucToast: !1,
          contentHeight: 0,
          liveGuideBarClose: !1,
          scrollHeaderOffset: 0,
          showRelateHqBubble: !1,
          relateHqBubbleText: "投资相关股票",
          isShowTips: !1,
          isConnected: !1,
          errMsg: "",
          errorStatusType: "",
          slist: {},
          qtData: {},
          mpHeaderContentHeight: 0,
          sourceIndex: null,
          playTimeStore: 0,
          playerAutoSeek: !1,
          changeProgress: 0,
          enterTime: 0,
        }
      );
    },
    computed: {
      isCrossComment: function () {
        return (
          this.live &&
          !isNaN(+this.live.cross_comment) &&
          1 == +this.live.cross_comment
        );
      },
      inputPlaceholder: function () {
        return this.isCrossComment ? "向公司提问..." : "谈谈我的想法";
      },
      swiper: function () {
        return this.$refs.swiper && this.$refs.swiper.swiper;
      },
      isIphoneX: function () {
        return (
          !("undefined" == typeof window || !window) &&
          /iphone/gi.test(window.navigator.userAgent) &&
          window.screen.height >= 812
        );
      },
      videoContainerWidth: function () {
        var e = this.getWindowInfo();
        return Math.min(e.screenWidth, e.screenHeight);
      },
      videoContainerHeight: function () {
        return le
          ? Math.min(this.videoContainerWidth / 1.78, 360)
          : this.videoContainerWidth / 1.78;
      },
      liveStart: function () {
        return (
          this.live &&
          "video_img_live" == this.live.live_type &&
          this.live.live_status > 20
        );
      },
      showHeaderDivider: function () {
        return (
          !this.isLightMode &&
          (!this.liveStart || (this.isWx && !this.liveGuideBarClose))
        );
      },
      tabContentHeight: function () {
        var e = this.loaded && !this.isWx ? 55 : 0;
        return (
          this.contentHeight -
          this.videoContainerHeight -
          this.mpHeaderContentHeight -
          e +
          2
        );
      },
      disableSwiperRefresh: function () {
        return this.scrollHeaderOffset < 0;
      },
      listscroll: function () {
        var e;
        return this.$refs.list && this.currentTabIndex < this.$refs.list.length
          ? null == (e = this.$refs.list[this.currentTabIndex])
            ? void 0
            : e.getScrollRef()
          : null;
      },
      outerscroll: function () {
        var e;
        return null == (e = this.$refs.outerscroll) ? void 0 : e.getScrollRef();
      },
      showSubscribe: function () {
        var e;
        return !!(null == (e = this.live) ? void 0 : e.wuji_calendar_id);
      },
      isLightMode: function () {
        return ae || oe;
      },
      rootClass: function () {
        return this.isLightMode ? "light" : "";
      },
      multiStreamLive: function () {
        var e, t, i;
        if (!this.live) return null;
        if (
          1 == +(null == (e = this.live) ? void 0 : e.stream_type) &&
          (null == (i = null == (t = this.live) ? void 0 : t.stream_info)
            ? void 0
            : i.length) > 1
        )
          try {
            return p(
              p({}, this.live),
              this.live.stream_info[this.sourceIndex] || {}
            );
          } catch (e) {}
        return this.live;
      },
      reportInfo: function () {
        var e;
        return {
          newsid: (null == (e = this.live) ? void 0 : e.live_news_id) || "",
        };
      },
      showSearchAiBar: function () {
        return (
          !!this.live &&
          !isNaN(+this.live.ai_summary) &&
          !(
            1 != +this.live.ai_summary ||
            !this.live.subtitle_id ||
            !this.live.summary_id
          )
        );
      },
    },
    created: function () {
      return m(
        this,
        null,
        i().mark(function e() {
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      this.reportAnalytics("news.live-share.show"),
                      (this.contentHeight = this.calContentHeight()),
                      this.loadData(),
                      this.isWx && this.initUserInfo(),
                      this.$emit("explore"),
                      (e.next = 7),
                      x.sdk.hasBindBrokerAccount(this)
                    );
                  case 7:
                    (this.bindBrokderAccount = e.sent),
                      g.StockBridge.busOn(
                        "news-liveScrollHandleBegin",
                        this.updateScrollHandleBegin
                      );
                  case 9:
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
    mounted: function () {
      (e = this), (this.enterTime = Date.now());
    },
    beforeDestroy: function () {
      g.StockBridge.busOff(
        "news-liveScrollHandleBegin",
        this.updateScrollHandleBegin
      );
    },
    destroyed: function () {
      (e = null),
        this.liveInterval && clearInterval(this.liveInterval),
        this.handleReportStayTime();
    },
    methods: {
      forceHttpsAdvanced: I.forceHttpsAdvanced,
      liveStatus: function (e) {
        return { 20: "预告", 21: "直播中", 22: "回顾" }[+e];
      },
      participate: function (e) {
        return 0 == e
          ? ""
          : e < 1e4
          ? e
          : e < 2e6
          ? "".concat(Number(e / 1e4).toFixed(1), "万")
          : "200万+";
      },
      date: function (e) {
        return z.date(e, "yyyy-MM-dd hh:mm");
      },
      calcMpHeaderContent: function () {
        var e = this;
        g.wx$1
          .createSelectorQuery()
          .in(this)
          .select(".scroll-header")
          .boundingClientRect()
          .select(".comment-wrap")
          .boundingClientRect()
          .exec(function (t) {
            if (t && t.length > 0) {
              for (var i = 0, n = 0; n < t.length; n++)
                t[n] && (i += t[n].height);
              e.mpHeaderContentHeight = i;
            }
          });
      },
      calContentHeight: function () {
        return this.getWindowInfo().safeArea.height - (this.isSharePage, 0);
      },
      getWindowInfo: function () {
        return (
          (g.wx$1.getWindowInfo && g.wx$1.getWindowInfo()) ||
          g.wx$1.getSystemInfoSync()
        );
      },
      copyScrollState: function (e, t) {
        t &&
          e &&
          ((t.scroll.moved = !1),
          (t.scroll.distX = 0),
          (t.scroll.distY = 0),
          (t.scroll.startX = e.scroll.startX),
          (t.scroll.startY = e.scroll.startY),
          (t.scroll.pointX = e.scroll.pointX),
          (t.scroll.pointY = e.scroll.pointY));
      },
      onOuterScrollHandle: function (e) {
        var t, i, n;
        this.scrollHeaderOffset = e.y;
        var s = this.$refs.scrollheader && this.$refs.scrollheader.offsetHeight;
        e.y > -s
          ? ((this.isHandleOuterScroll = !0),
            null == (t = this.listscroll) || t.disable())
          : (this.isHandleOuterScroll &&
              ((this.isHandleOuterScroll = !1),
              this.copyScrollState(this.outerscroll, this.listscroll)),
            null == (i = this.outerscroll) || i.disable(),
            null == (n = this.listscroll) || n.enable());
      },
      onListScrollHandle: function (e) {
        var t,
          i,
          n,
          s = this.$refs.scrollheader && this.$refs.scrollheader.offsetHeight;
        this.scrollHeaderOffset > -s || 0 == e.y
          ? (this.isHandleOuterScroll ||
              ((this.isHandleOuterScroll = !0),
              this.copyScrollState(this.listscroll, this.outerscroll)),
            null == (t = this.listscroll) || t.disable(),
            null == (i = this.outerscroll) || i.enable())
          : (null == (n = this.outerscroll) || n.disable(),
            (this.isHandleOuterScroll = !1));
      },
      onScrollHandleBegin: function () {
        var e, t;
        this.isHandleOuterScroll = !0;
        var i = this.$refs.scrollheader && this.$refs.scrollheader.offsetHeight;
        this.scrollHeaderOffset > -i &&
          (null == (e = this.listscroll) || e.disable(),
          null == (t = this.outerscroll) || t.enable());
      },
      onScrollHandleEnd: function () {
        var e, t;
        null == (e = this.listscroll) || e.enable(),
          null == (t = this.outerscroll) || t.enable();
      },
      updateScrollHandleBegin: function () {},
      windowSizeChanged: function () {},
      initUserInfo: function () {
        return m(
          this,
          null,
          i().mark(function e() {
            var t;
            return i().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), J();
                    case 3:
                      "string" == typeof (t = e.sent) &&
                        (t.search(!0) && (t = t.replaceAll("\\x", "%")),
                        (t = JSON.parse(t))),
                        Object.assign(this, { userWxInfo: t }),
                        (e.next = 10);
                      break;
                    case 7:
                      (e.prev = 7),
                        (e.t0 = e.catch(0)),
                        Object.assign(this, { userWxInfo: {} });
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[0, 7]]
            );
          })
        );
      },
      checkUserAgent: function () {
        for (
          var e =
              null == navigator ? void 0 : navigator.userAgent.toLowerCase(),
            t = ["android", "iphone", "symbianos", "windows phone", "ipad"],
            i = 0;
          i < t.length;
          ++i
        )
          if (-1 !== (null == e ? void 0 : e.indexOf(t[i]))) {
            this.isMobile = !0;
            break;
          }
      },
      onNavigateToApp: function () {
        this.reportAnalytics("news.live-share.chatOnApp_tap");
      },
      showToast: function (e) {
        e && g.StockBridge.toast(e, "none");
      },
      showReserveToast: function () {
        var e = this;
        (this.showReverveSucToast = !0),
          setTimeout(function () {
            e.showReverveSucToast = !1;
          }, 3e3);
      },
      pollingLive: function () {
        var e = this;
        if (
          (this.liveInterval && clearInterval(this.liveInterval),
          this.live && 20 != this.live.live_status)
        ) {
          var t = 2e4;
          20 == this.live.live_status
            ? (this.live.estimate_start_time - Date.now() + this.delta_time) /
                1e3 /
                60 >
                5 && (t /= 2)
            : 21 == this.live.live_status &&
              (this.live.estimate_end_time - Date.now() + this.delta_time) /
                1e3 /
                60 >
                5 &&
              (t /= 2),
            (this.liveInterval = setInterval(function () {
              e.getLiveData();
            }, t));
        }
      },
      loadData: function () {
        return m(
          this,
          null,
          i().mark(function e() {
            return i().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), this.getLiveData();
                    case 2:
                      this.fetch(),
                        this.pollingLive(),
                        this.checkAutoReserve(),
                        this.getSubcribeStatus();
                    case 6:
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
      reportAnalytics: function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.isMP
          ? this.$emit("dataReport", {
              eventName: e,
              dataObject: f(p({}, t), { newsid: this.live_news_id }),
            })
          : _.report(e, t);
      },
      loadPlayer: function () {
        var e = !0;
        if (22 == +this.live.live_status) {
          var t =
            (this.multiStreamLive &&
              this.multiStreamLive.vod &&
              this.multiStreamLive.vod[0]) ||
            null;
          (t && t.video_url) ||
            this.liveEndTips ||
            ((e = !1),
            this.showToast("回看在路上～"),
            this.showReverseMoreDialog(),
            (this.liveEndTips = !0));
        } else if (21 == +this.live.live_status) {
          var i = (this.multiStreamLive && this.multiStreamLive.live) || null;
          if (!i || !i.m3u8) {
            e = !1;
            Date.now() >
              1e3 * +this.live.estimate_start_time + 6e5 + this.delta_time &&
            !this.liveEndTips
              ? (this.showToast("回看在路上～"),
                this.showReverseMoreDialog(),
                (this.liveEndTips = !0))
              : this.liveNotStartTips ||
                (this.showToast("直播未开始"), (this.liveNotStartTips = !0));
          }
        }
        e && this.$refs.liveplayer && this.$refs.liveplayer.loadPlayer();
      },
      playStatusChange: function (e) {
        if (e) {
          var t = e.time;
          switch (e.type) {
            case "fullscreenchange":
              e.isFullscreen
                ? (this.playerClass = "fullscreen")
                : (this.playerClass = ""),
                this.isMP &&
                  this.isSharePage &&
                  getApp().globalData.Event.emit(
                    "base.navbar.hide",
                    e.isFullscreen
                  );
              break;
            case "play":
              (this.showLiveInfo = !1),
                this.liveFirstPlayTime ||
                  (this.liveFirstPlayTime = new Date().getTime()),
                this.playerAutoSeek &&
                  (this.$refs.liveplayer.seek(this.changeProgress),
                  (this.playerAutoSeek = !1));
              break;
            case "pause":
            case "interrupt":
            case "error":
              this.showLiveInfo = !0;
              break;
            case "timeupdate":
              this.checkSubscribeTipsShouldShow(),
                t && (this.playTimeStore = t);
              break;
            case "ended":
              this.liveFirstPlayTime &&
                !this.reverseDialogShowed &&
                this.showReverseMoreDialog();
          }
        }
      },
      fetch: function () {
        return m(
          this,
          null,
          i().mark(function e() {
            var t;
            return i().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((t = [
                          this.getLiveList,
                          this.getChatList,
                          this.getNewsList,
                        ][this.currentTabIndex]),
                        (e.t0 = t),
                        !e.t0)
                      ) {
                        e.next = 5;
                        break;
                      }
                      return (e.next = 5), t.bind(this)();
                    case 5:
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
      adjustSystemTime: function () {
        var e = Date.now() - 1e3 * this.live.system_time;
        Math.abs(e) < 1e4 ? (this.delta_time = 0) : (this.delta_time = e);
      },
      wait: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return m(
          this,
          null,
          i().mark(function t() {
            return i().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return t.abrupt(
                      "return",
                      new Promise(function (t) {
                        var i = setTimeout(function () {
                          t(), clearTimeout(i);
                        }, e);
                      })
                    );
                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
      },
      onRefresh: function () {
        return m(
          this,
          null,
          i().mark(function t() {
            var n, s;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (n = e || this),
                        (s = ""),
                        (t.t0 = +n.currentTabIndex),
                        (t.next = 0 === t.t0 ? 5 : 1 === t.t0 ? 7 : 9);
                      break;
                    case 5:
                      return (
                        (s = "live"),
                        Object.assign(n.live_list, { begin: -1 }),
                        t.abrupt("break", 10)
                      );
                    case 7:
                      return (s = "chat"), t.abrupt("break", 10);
                    case 9:
                      (s = "news"),
                        Object.assign(n.news_list, {
                          next_offset: 0,
                          req_session: 0,
                        });
                    case 10:
                      return (
                        n.reportAnalytics("news.live-share.refresh_".concat(s)),
                        (t.next = 13),
                        n.fetch()
                      );
                    case 13:
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
      onEndReached: function () {
        return m(
          this,
          null,
          i().mark(function t() {
            var n, s;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (1 != (n = e || this).currentTabIndex) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt("return");
                    case 3:
                      if (
                        ((s = [n.live_list, n.chat_list, n.news_list][
                          n.currentTabIndex
                        ]),
                        (t.t0 = s.limited || s.fetching),
                        t.t0)
                      ) {
                        t.next = 11;
                        break;
                      }
                      if (((s.fetching = !0), (t.t1 = s.loaded), !t.t1)) {
                        t.next = 11;
                        break;
                      }
                      return (t.next = 11), n.fetch();
                    case 11:
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
      onChatListPulling: function () {
        return m(
          this,
          null,
          i().mark(function t() {
            var n;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((n = e || this), (t.t0 = n.chat_list.fetching), t.t0)
                      ) {
                        t.next = 7;
                        break;
                      }
                      return (
                        (n.chat_list.fetching = !0),
                        (t.next = 6),
                        Promise.race([n.wait(5e3), n.fetch()])
                      );
                    case 6:
                      n.chat_list.fetching = !1;
                    case 7:
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
      refreshInputShowState: function (e) {
        this.isShowInput = 2 !== e && 1 !== this.live.comment_status;
      },
      onTabClicked: function (e) {
        this.slideSwiper(e),
          this.switchTab(e),
          this.refreshInputShowState(e),
          this.reportAnalytics(
            "news.live-share.".concat(this.tabs[e].id, "_tab_tap")
          );
      },
      onSwiperChange: function (e) {
        var t = e.detail.current;
        this.switchTab(t), this.refreshInputShowState(t);
      },
      onDropped: function (e) {
        var t = this.swiper.activeIndex;
        this.switchTab(t), this.slideSwiper(t), this.refreshInputShowState(t);
      },
      switchTab: function (e) {
        if (this.currentTabIndex !== e) {
          this.$emit("tabChange", { index: e }), (this.currentTabIndex = e);
          try {
            [this.live_list, this.chat_list, this.news_list][e].loaded ||
              this.fetch();
          } catch (e) {}
          this.onScrollHandleEnd();
        }
      },
      slideSwiper: function (e) {
        this.swiper && this.swiper.slideTo(e, 300, !1);
      },
      onChatMessageSubmit: function (e) {
        return m(
          this,
          null,
          i().mark(function t() {
            var n;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.t0 = 0 === this.currentTabIndex), !t.t0)) {
                        t.next = 5;
                        break;
                      }
                      return (t.next = 4), this.getChatList();
                    case 4:
                      this.onTabClicked(1);
                    case 5:
                      (n = Date.now()),
                        this.chat_list.temp.push({
                          content: e,
                          ctime: Math.ceil(n / 1e3),
                          user_type: 0,
                          nickname: this.user.nickName,
                          headimgurl: this.user.headUrl,
                          sender_flag: 1,
                          id: n % 1e3,
                          status: 0,
                        }),
                        this.sendChatData(e);
                    case 7:
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
      formatDateStr: function (e) {
        return z.liveTime(1e3 * e);
      },
      reserveLive: function () {
        return m(this, arguments, function () {
          var e = this,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.live_news_id;
          return i().mark(function n() {
            var s;
            return i().wrap(
              function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      if (!R.isH5Native) {
                        i.next = 7;
                        break;
                      }
                      return (i.next = 3), R.globalPrivacyCheck();
                    case 3:
                      if (i.sent) {
                        i.next = 5;
                        break;
                      }
                      return i.abrupt("return");
                    case 5:
                      i.next = 9;
                      break;
                    case 7:
                      if (
                        !oe ||
                        (null == (s = e.didAgreeUserAgreement)
                          ? void 0
                          : s.value) ||
                        "function" != typeof e.onCheckUserAgreementStatus
                      ) {
                        i.next = 9;
                        break;
                      }
                      return i.abrupt(
                        "return",
                        void e.onCheckUserAgreementStatus()
                      );
                    case 9:
                      if (((e.qrCodeType = "btn"), !e.isWx)) {
                        i.next = 31;
                        break;
                      }
                      if (((i.t0 = "1" !== e.userWxInfo.subscribe), !i.t0)) {
                        i.next = 14;
                        break;
                      }
                      return (i.next = 14), e.initUserInfo();
                    case 14:
                      if ("1" !== e.userWxInfo.subscribe) {
                        i.next = 28;
                        break;
                      }
                      return (
                        (i.prev = 15),
                        (i.next = 18),
                        q.reserveLive({ live_news_id: t })
                      );
                    case 18:
                      if (
                        ((i.t1 = i.sent.retcode), (i.t2 = "0" === i.t1), !i.t2)
                      ) {
                        i.next = 22;
                        break;
                      }
                      t === e.live_news_id
                        ? ((e.live.reserve_flag = 1),
                          (e.live.participate_num += 1),
                          e.showReserveToast())
                        : e.liveSubjectList &&
                          e.liveSubjectList.forEach(function (e) {
                            var i;
                            (null == e ? void 0 : e.id) === t &&
                              20 ===
                                (null == (i = null == e ? void 0 : e.extra_info)
                                  ? void 0
                                  : i.live_status) &&
                              ((e.extra_info.reserve_flag = 1),
                              (e.extra_info.participate_num += 1));
                          });
                    case 22:
                      i.next = 26;
                      break;
                    case 24:
                      (i.prev = 24), (i.t3 = i.catch(15));
                    case 26:
                      i.next = 29;
                      break;
                    case 28:
                      e.isShowQrcode = !0;
                    case 29:
                      i.next = 32;
                      break;
                    case 31:
                      e.reportAnalytics("news.live-share.download_tap"),
                        e.$refs.download.onButtonClick();
                    case 32:
                    case "end":
                      return i.stop();
                  }
              },
              n,
              null,
              [[15, 24]]
            );
          })();
        });
      },
      cancelReserveLive: function () {
        return m(this, arguments, function () {
          var e = this,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : this.live_news_id;
          return i().mark(function n() {
            var s;
            return i().wrap(
              function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      if (
                        (ae || oe) &&
                        !(null == (s = e.didAgreeUserAgreement)
                          ? void 0
                          : s.value) &&
                        "function" == typeof e.onCheckUserAgreementStatus
                      ) {
                        i.next = 14;
                        break;
                      }
                      return (
                        (i.prev = 1),
                        (i.next = 4),
                        q.cancelReserveLive({ live_news_id: t })
                      );
                    case 4:
                      if (
                        ((i.t0 = i.sent.retcode), (i.t1 = "0" === i.t0), !i.t1)
                      ) {
                        i.next = 8;
                        break;
                      }
                      t === e.live_news_id
                        ? ((e.live.reserve_flag = 2),
                          (e.live.participate_num -= 1),
                          e.showToast("预约已取消"))
                        : e.liveSubjectList &&
                          e.liveSubjectList.forEach(function (e) {
                            var i;
                            (null == e ? void 0 : e.id) === t &&
                              20 ===
                                (null == (i = null == e ? void 0 : e.extra_info)
                                  ? void 0
                                  : i.live_status) &&
                              ((e.extra_info.reserve_flag = 2),
                              (e.extra_info.participate_num -= 1));
                          });
                    case 8:
                      i.next = 12;
                      break;
                    case 10:
                      (i.prev = 10), (i.t2 = i.catch(1));
                    case 12:
                      i.next = 15;
                      break;
                    case 14:
                      e.onCheckUserAgreementStatus();
                    case 15:
                    case "end":
                      return i.stop();
                  }
              },
              n,
              null,
              [[1, 10]]
            );
          })();
        });
      },
      getLiveData: function () {
        return m(
          this,
          null,
          i().mark(function e() {
            var t,
              n,
              s,
              r,
              o,
              a,
              l,
              c,
              u,
              h,
              d,
              v = this;
            return i().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        Y({ live_news_id: this.live_news_id })
                      );
                    case 3:
                      if (!(s = e.sent) || 0 === s.code) {
                        e.next = 6;
                        break;
                      }
                      throw s;
                    case 6:
                      (r = (null == s ? void 0 : s.live_info) || {}),
                        this.loaded ||
                          (r.relate_quotes &&
                            r.relate_quotes.length > 0 &&
                            (this.reportAnalytics(
                              "news.live-detail.showRelatedQuotesIcon"
                            ),
                            this.loadStockAddStatusAndQtData(r.relate_quotes))),
                        (o = r.cross_comment),
                        (this.tabs[1].name = o && 1 == +o ? "问公司" : "聊天"),
                        Object.assign(this, {
                          loaded: !0,
                          isShowInput: 1 !== r.comment_status,
                          live: r,
                          tabs:
                            1 == r.related_news_flag
                              ? this.tabs
                              : this.tabs.slice(0, 2),
                          wxurl: encodeURIComponent(
                            "qqstock://Hippy?info=".concat(
                              encodeURIComponent(
                                JSON.stringify({
                                  p_key: "live",
                                  p_title: r.title,
                                  p_showNav: !1,
                                  live_news_id: this.live_news_id,
                                  p_preferredStatusBarStyle: "light",
                                })
                              )
                            )
                          ),
                        }),
                        +this.live.live_status > 20 &&
                          ((null ==
                          (n = null == (t = this.live) ? void 0 : t.stream_info)
                            ? void 0
                            : n.length) > 0 &&
                            null === this.sourceIndex &&
                            (this.sourceIndex = this.live.stream_info.findIndex(
                              function (e) {
                                return 1 == +e.check;
                              }
                            )),
                          this.$nextTick(function () {
                            v.loadPlayer();
                          })),
                        this.adjustSystemTime(),
                        this.hasEmitLoadData ||
                          ((this.hasEmitLoadData = !0),
                          this.$emit("loadData", r)),
                        (this.isConnected = !0),
                        (this.isShowTips = !1),
                        (this.errorStatusType = ""),
                        this.$nextTick(function () {
                          v.calcMpHeaderContent();
                        }),
                        (e.next = 18);
                      break;
                    case 12:
                      (e.prev = 12),
                        (e.t0 = e.catch(0)),
                        (a = e.t0.retmsg),
                        (l = e.t0.retcode),
                        (c = e.t0.msg),
                        (u = e.t0.code),
                        (h = e.t0.originMsg),
                        (this.errMsg = a || c),
                        (d = "859280002" === l || "859280002" === u) &&
                          (this.errMsg = h || this.errMsg),
                        (this.isShowTips = !0),
                        (this.isConnected = !0),
                        (this.errorStatusType = d
                          ? C.NEWS_STATUS_TYPE.ERROR_DELETED
                          : C.NEWS_STATUS_TYPE.ERROR_NETWORK);
                    case 18:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[0, 12]]
            );
          })
        );
      },
      onReportMatch: function () {
        this.reportAnalytics("news.live_detail.etf_match_click");
      },
      getLiveList: function () {
        return m(
          this,
          null,
          i().mark(function e() {
            var n,
              s,
              r,
              o,
              a,
              l,
              c,
              u,
              h,
              d,
              v,
              p = this;
            return i().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!this.live) {
                        e.next = 17;
                        break;
                      }
                      return (
                        (e.prev = 1),
                        (n = this.live_list),
                        (s = n.begin),
                        n.end,
                        (e.next = 7),
                        G({
                          live_id: this.live.live_id,
                          show_order: this.live.interactive_show_order,
                          begin: s,
                          limit: 10,
                        })
                      );
                    case 7:
                      (r = e.sent),
                        (o = r.data),
                        (a = o.list),
                        (l = void 0 === a ? [] : a),
                        (c = o.top),
                        (u = void 0 === c ? [] : c),
                        (h = o.has_more),
                        l.length > 0 &&
                          ((l = l.filter(function (e) {
                            return (
                              (e.pub_date = p.formatDateStr(e.created_at)),
                              !(6 == +e.type && p.bindBrokderAccount)
                            );
                          })),
                          (d = []),
                          l.forEach(function (e) {
                            e &&
                              e.relate_quotes &&
                              e.relate_quotes.length &&
                              (d = d.concat(e.relate_quotes));
                          }),
                          this.loadStockAddStatusAndQtData(d)),
                        -1 !== s &&
                          ((l = [].concat(t(this.live_list.list), t(l))),
                          (u = this.live_list.top)),
                        (v = t(
                          new Set(
                            l.map(function (e) {
                              return e.pub_date;
                            })
                          )
                        )),
                        Object.assign(this.live_list, {
                          loaded: !0,
                          top: u,
                          list: l,
                          groups: v.map(function (e) {
                            return {
                              key: e,
                              list: l.filter(function (t) {
                                return t.pub_date == e;
                              }),
                            };
                          }),
                          begin: l.length > 0 ? l[l.length - 1].publish_id : -1,
                          limited: 0 == h,
                          fetching: !1,
                        }),
                        this.checkShowRelateHqBubble(),
                        (e.next = 17);
                      break;
                    case 15:
                      (e.prev = 15), (e.t0 = e.catch(1));
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[1, 15]]
            );
          })
        );
      },
      getChatList: function () {
        return m(
          this,
          null,
          i().mark(function e() {
            var n,
              s,
              r,
              o,
              a,
              l,
              c,
              u,
              h = this;
            return i().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (1 === this.live.comment_status) {
                        e.next = 20;
                        break;
                      }
                      return (
                        (e.prev = 1),
                        (n = this.chat_list.begin),
                        (e.next = 5),
                        X({
                          live_id: this.live.live_id,
                          begin: n,
                          limit: 20,
                          user_type: 1 == this.live.user_identity ? 0 : 1,
                        })
                      );
                    case 5:
                      (s = e.sent),
                        (r = s.data || {}),
                        (o = r.data),
                        (a = r.top),
                        void 0 === a ? [] : a,
                        (l = r.more_flag),
                        (c = o.reverse()).length > 0 &&
                          ((c = c.map(function (e) {
                            return (
                              (e.sender_flag = Number(
                                e.fromOpenid == h.user.openid
                              )),
                              e
                            );
                          })),
                          (u = []),
                          c.forEach(function (e) {
                            e &&
                              e.relate_quotes &&
                              e.relate_quotes.length &&
                              (u = u.concat(e.relate_quotes));
                          }),
                          this.loadStockAddStatusAndQtData(u)),
                        -1 !== n &&
                          (c = [].concat(t(c), t(this.chat_list.list))),
                        Object.assign(this.chat_list, {
                          loaded: !0,
                          fetching: !1,
                          list: c,
                          temp: [],
                          begin: c.length > 0 ? c[0].id : -1,
                          limited: 1 == l,
                        }),
                        (e.next = 18);
                      break;
                    case 16:
                      (e.prev = 16), (e.t0 = e.catch(1));
                    case 18:
                      e.next = 21;
                      break;
                    case 20:
                      Object.assign(this.chat_list, {
                        loaded: !0,
                        fetching: !1,
                        list: [],
                        temp: [],
                      });
                    case 21:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[1, 16]]
            );
          })
        );
      },
      sendChatData: function (e) {
        return m(
          this,
          null,
          i().mark(function t() {
            var n, s, r;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.prev = 0), (t.next = 3), Z();
                    case 3:
                      return (
                        (n = t.sent),
                        (s = n.data.send_token),
                        (t.next = 7),
                        V({
                          live_id: this.live.live_id,
                          content: e,
                          send_token: s,
                          type: 0,
                          user_type: 1 == this.live.user_identity ? 0 : 1,
                        })
                      );
                    case 7:
                      (r = t.sent),
                        (this.isSending = !1),
                        r &&
                          (this.onRefresh(),
                          (this.inputText = ""),
                          this.showToast("发表成功")),
                        (t.next = 14);
                      break;
                    case 11:
                      (t.prev = 11), (t.t0 = t.catch(0)), (this.isSending = !1);
                    case 14:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this,
              [[0, 11]]
            );
          })
        );
      },
      getNewsList: function () {
        return m(
          this,
          null,
          i().mark(function e() {
            var t, n, s, r, o, a, l;
            return i().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (t = this.news_list),
                        (n = t.req_session),
                        (s = t.next_offset),
                        (e.next = 6),
                        K({
                          news_id: this.live.live_news_id,
                          limit: 10,
                          offset: s,
                          req_session: n,
                          reserve: 131,
                        })
                      );
                    case 6:
                      if (0 == (r = e.sent).retcode) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void this.showToast("获取新闻列表失败")
                      );
                    case 9:
                      (o = r.relate_news),
                        (a = r.has_next),
                        (l = 0 == s ? o : this.news_list.list.concat(o)),
                        Object.assign(this.news_list, {
                          loaded: !0,
                          list: l,
                          next_offset: r.next_offset,
                          req_session: r.req_session,
                          limited: 0 == a,
                          fetching: !1,
                        }),
                        (e.next = 15);
                      break;
                    case 13:
                      (e.prev = 13), (e.t0 = e.catch(0));
                    case 15:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[0, 13]]
            );
          })
        );
      },
      onInputFocus: function () {
        return m(
          this,
          null,
          i().mark(function e() {
            return i().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((e.t0 = "1" !== this.userWxInfo.subscribe), !e.t0)) {
                        e.next = 4;
                        break;
                      }
                      return (e.next = 4), this.initUserInfo();
                    case 4:
                      "1" !== this.userWxInfo.subscribe
                        ? (this.$refs.textinput.blur(),
                          (this.isShowQrcode = !0),
                          (this.qrCodeType = "input"))
                        : this.onTabClicked(1);
                    case 5:
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
      onInputBlur: function () {
        setTimeout(function () {
          window.scrollTo(
            0,
            Math.max(
              document.body.clientHeight,
              document.documentElement.clientHeight
            )
          );
        }, 80);
      },
      startInput: function () {
        return m(
          this,
          null,
          i().mark(function e() {
            var t,
              n = this;
            return i().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ("1" === this.userWxInfo.subscribe) {
                        e.next = 4;
                        break;
                      }
                      (this.isShowQrcode = !0),
                        (this.qrCodeType = "input"),
                        (e.next = 14);
                      break;
                    case 4:
                      if (!R.isH5Native) {
                        e.next = 11;
                        break;
                      }
                      return (e.next = 7), R.sqPrivacyCheck();
                    case 7:
                      if (e.sent) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt("return");
                    case 9:
                      e.next = 13;
                      break;
                    case 11:
                      if (
                        (!ae && !oe) ||
                        (null == (t = this.didAgreeUserAgreement)
                          ? void 0
                          : t.value) ||
                        "function" != typeof this.onCheckUserAgreementStatus
                      ) {
                        e.next = 13;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void this.onCheckUserAgreementStatus()
                      );
                    case 13:
                      this.securityCheck({ eventName: "putSubject" })
                        .then(function () {
                          n.onTabClicked(1),
                            n.$nextTick(function () {
                              n.$emit(
                                "showEditor",
                                n.isCrossComment ? n.inputPlaceholder : ""
                              );
                            });
                        })
                        .catch(function () {});
                    case 14:
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
      onTextSubmit: function (e) {
        1 !== this.live.comment_status
          ? this.isSending ||
            ((this.isSending = !0),
            "1" === this.userWxInfo.subscribe
              ? this.inputText.trim()
                ? this.inputText.length > 500
                  ? this.showToast("内容不能超过500个字符")
                  : this.onChatMessageSubmit(this.inputText.trim())
                : this.showToast("请输入内容")
              : (this.isShowQrcode = !0))
          : this.showToast("暂不开放发表");
      },
      hideQrcode: function () {
        this.isShowQrcode = !1;
      },
      togglePlayer: function () {
        this.$refs.liveplayer.togglePlayer();
      },
      showRelateNews: function () {
        var e = this;
        if (
          ((this.isShowRelateHq = !0),
          this.showRelateHqBubble && this.closeRelateHqBubble(),
          this.live && this.live.relate_quotes)
        ) {
          var t = [],
            i = [],
            n = [];
          this.live.relate_quotes.forEach(function (s, r) {
            s.stock_name;
            var o = s.stock_market,
              a = s.stock_code,
              l = "".concat(o).concat(a),
              c = e.slist[l];
            t.push(l), i.push(r), n.push(c > 0 ? 1 : 0);
          });
          var s = {
            newsid: this.live.live_id,
            fchannel_id_fm_i: "Is600p000m012",
            stocklist: t.join(","),
            positionlist: i.join(","),
            hasaddlist: n.join(","),
          };
          this.reportAnalytics("news.live-detail.related_stock_brow", s);
        }
      },
      hideRelateNews: function () {
        this.isShowRelateHq = !1;
      },
      loadStockAddStatusAndQtData: function (e) {
        return m(
          this,
          null,
          i().mark(function t() {
            var n,
              s = this;
            return i().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    (n = []),
                      e.forEach(function (e) {
                        var t = e.stock_code,
                          i = e.stock_market;
                        n.push("".concat(i).concat(t));
                      }),
                      ue.requestQT(n).then(function (e) {
                        s.qtData = p(p({}, s.qtData), e);
                      }),
                      ue.isExistInZixuan(n).then(function (e) {
                        if (e.response) {
                          var t = {};
                          Object.keys(e).forEach(function (i) {
                            var n = i.replace(/(\.OQ|\.N|\.AM|\.PS)$/gi, "");
                            t[n] = e[i];
                          }),
                            (s.slist = p(p({}, s.slist), t));
                        }
                      });
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
      },
      manageSelfStock: function (e) {
        return m(
          this,
          null,
          i().mark(function t() {
            var n, s, r, o, a, l;
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        (!ae && !oe) ||
                        (null == (n = this.didAgreeUserAgreement)
                          ? void 0
                          : n.value) ||
                        "function" != typeof this.onCheckUserAgreementStatus
                      ) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        void this.onCheckUserAgreementStatus()
                      );
                    case 2:
                      return (
                        this.isMP && g.wx$1 && g.wx$1.showLoading(),
                        (s = e.item),
                        (r = e.action),
                        (o = s.stock_code),
                        (a = s.stock_market),
                        (l = 2 === r),
                        (t.next = 6),
                        ue.addStockToZixuan(l, "".concat(a).concat(o))
                      );
                    case 6:
                      if (!t.sent) {
                        t.next = 10;
                        break;
                      }
                      this.showToast("已".concat(l ? "添加" : "删除", "自选")),
                        this.$set(
                          this.slist,
                          "".concat(a).concat(o.split(".")[0]),
                          l ? 1 : 0
                        ),
                        (t.next = 11);
                      break;
                    case 10:
                      this.showToast((l ? "添加" : "删除") + "自选失败");
                    case 11:
                      this.isMP && g.wx$1 && g.wx$1.hideLoading();
                    case 12:
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
      delayRoute: function (e) {
        var t = this;
        setTimeout(function () {
          t.$router.push(e);
        }, 10);
      },
      checkAutoReserve: function () {
        return m(
          this,
          null,
          i().mark(function e() {
            return i().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        !(
                          this.isWx &&
                          this.reserveAuto &&
                          this.live &&
                          20 == +this.live.live_status &&
                          1 != +this.live.reserve_flag
                        )
                      ) {
                        e.next = 12;
                        break;
                      }
                      return (
                        (e.prev = 1),
                        (e.next = 4),
                        q.reserveLive(
                          { live_news_id: this.live_news_id },
                          { isShowToast: !1 }
                        )
                      );
                    case 4:
                      if (
                        ((e.t0 = e.sent.retcode), (e.t1 = "0" === e.t0), !e.t1)
                      ) {
                        e.next = 8;
                        break;
                      }
                      this.live.reserve_flag = 1;
                    case 8:
                      e.next = 12;
                      break;
                    case 10:
                      (e.prev = 10), (e.t2 = e.catch(1));
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[1, 10]]
            );
          })
        );
      },
      getSubcribeStatus: function () {
        var e = this;
        this.live &&
          this.live.wuji_calendar_id &&
          q
            .getLiveCalendarTimeLine({ calendarId: this.live.wuji_calendar_id })
            .then(function (t) {
              t && (e.hasSubscribed = t.subscribing);
            })
            .catch(function (e) {});
      },
      onSubscribe: function (e) {
        var t,
          i,
          n = this;
        if ("subscribe" === e)
          if (this.live.wuji_calendar_id)
            q.subscribeLiveCalendar({
              calendarId: this.live.wuji_calendar_id,
              cmd: 0,
            })
              .then(function (e) {
                (n.hasSubscribed = !0),
                  n.showToast("订阅成功，下场直播微信通知您");
              })
              .catch(function (e) {});
          else if ("1" === this.userWxInfo.subscribe) {
            q.requestUsersetting({ subscribe: "livenotice" })
              .then(function () {
                (n.hasSubscribed = !n.hasSubscribed),
                  n.showToast("已开启微信通知");
              })
              .catch(function (e) {});
          } else this.isShowQrcode = !0;
        else if (this.isMP || oe || (re && !ce)) {
          var s =
              "https://wzq.tenpay.com/mp/v2/index.html#/information/liveCombine?id="
                .concat(ne, "&date=")
                .concat(Date.now()),
            r = {
              url: "/pages/additional/webview/index?url=".concat(
                encodeURIComponent(s)
              ),
            };
          g.wx$1 && g.wx$1.navigateTo
            ? g.wx$1.navigateTo(r)
            : null ==
                (i =
                  null == (t = null == window ? void 0 : window.wx)
                    ? void 0
                    : t.miniProgram) || i.navigateTo(r);
        } else {
          var o = (window && window.sdk) || {};
          if (ae && o) {
            var a =
              "https://wzq.tenpay.com/mp/v2/index.html#/information/liveCombine?id="
                .concat(ne, "&date=")
                .concat(Date.now(), "&lite=1");
            /wechatdevtools/.test((navigator && navigator.userAgent) || "")
              ? (location.href = a)
              : o.openUrlWithExtraWebview({ url: a, openType: "1" });
          } else {
            var l = { id: ne, date: Date.now() };
            this.delayRoute({ path: "/information/liveCombine", query: l });
          }
        }
      },
      onSubscribeTipsClose: function () {
        this.showSubscribeDialog = !1;
      },
      onSubscribeTipsConfirm: function () {
        (this.showSubscribeDialog = !1), this.onSubscribe("subscribe");
      },
      checkSubscribeTipsShouldShow: function () {
        if (
          !this.hasSubscribed &&
          this.liveFirstPlayTime &&
          !this.subscribeDialogShowed
        ) {
          var e = new Date().getTime();
          if (e - this.liveFirstPlayTime > 12e4) {
            e - +(ee(ie) || 0) > 2592e6 &&
              ((this.showSubscribeDialog = !0),
              (this.subscribeDialogShowed = !0),
              te(ie, e));
          }
        }
      },
      onReverseMoreLiveClose: function () {
        this.showReverseDialog = !1;
      },
      showReverseMoreDialog: function () {
        var e = this,
          t = this,
          i = T.md5(),
          n = i.zappid,
          s = i.sign,
          r = i.nonce;
        q.getLiveSubjectData(
          {
            news_id: ne,
            reserve: 2366095,
            filter: 0,
            zappid: n,
            sign: s,
            nonce: r,
          },
          "post",
          !1
        )
          .then(function (i) {
            var n, s;
            if (i && i.news_info) {
              var r =
                  (null ==
                  (s = null == (n = i.news_info.content) ? void 0 : n.data)
                    ? void 0
                    : s.idlist) || [],
                o = (r.length && r[0].newslist) || [];
              if (o && o.length) {
                var a = o.filter(function (e) {
                  var i;
                  return (
                    [20].indexOf(
                      null == (i = e.extra_info) ? void 0 : i.live_status
                    ) > -1 && e.id !== t.live_news_id
                  );
                });
                a &&
                  a.length &&
                  ((e.liveSubjectList = a.slice(0, 5)),
                  (e.showReverseDialog = !0),
                  (e.reverseDialogShowed = !0));
              }
            }
          })
          .catch(function (e) {});
      },
      handleTapLiveCard: function (e) {
        var t, i;
        this.onReverseMoreLiveClose();
        var n = e.data.id;
        if (this.isMP || oe || (re && !ce)) {
          var s = { url: "/pages/live/liveDetail?id=".concat(n) };
          g.wx$1 && g.wx$1.navigateTo
            ? g.wx$1.navigateTo(s)
            : null ==
                (i =
                  null == (t = null == window ? void 0 : window.wx)
                    ? void 0
                    : t.miniProgram) || i.navigateTo(s);
        } else {
          var r = { id: n };
          this.delayRoute({ path: "/information/liveDetail", query: r });
        }
      },
      onReserve: function (e) {
        var t = e.event,
          i = e.liveId;
        t &&
          i &&
          ("reverse" === t
            ? this.reserveLive(i)
            : "cancel_reverse" === t && this.cancelReserveLive(i));
      },
      muteChange: function () {
        this.$emit("muteChange", !this.mute);
      },
      onLiveGuideBarClose: function () {
        var e = this;
        (this.liveGuideBarClose = !0),
          this.$nextTick(function () {
            e.calcMpHeaderContent();
          });
      },
      checkShowRelateHqBubble: function () {
        var e = this;
        if (
          !this.relateHqBubbleChecked &&
          !ee("relateHqBubble_".concat(this.live_news_id))
        ) {
          var t = !1;
          this.live_list &&
            this.live_list.list &&
            this.live_list.list.some(function (e) {
              if (e && e.relate_quotes && e.relate_quotes.length)
                return (t = !0), !0;
            }),
            t ||
              (this.live &&
                this.live.relate_quotes &&
                this.live.relate_quotes.length > 0 &&
                this.isShowInput &&
                ((this.relateHqBubbleText = "投资".concat(
                  this.live.relate_quotes[0].stock_name
                )),
                (this.showRelateHqBubble = !0),
                this.reportAnalytics("news.live.relatedQuotes.bubble.brow"),
                setTimeout(function () {
                  e.showRelateHqBubble = !1;
                }, 5e3)),
              (this.relateHqBubbleChecked = !0));
        }
      },
      closeRelateHqBubble: function () {
        (this.showRelateHqBubble = !1),
          te("relateHqBubble_".concat(this.live_news_id), "1"),
          this.reportAnalytics("news.live.relatedQuotes.bubble.close");
      },
      changeSource: function (e) {
        var t = this;
        (this.sourceIndex = e),
          this.$nextTick(function () {
            try {
              (t.playerAutoSeek = !0),
                (t.changeProgress = t.playTimeStore),
                (t.liveEndTips = !1),
                (t.liveNotStartTips = !1),
                t.loadPlayer();
            } catch (e) {}
          });
      },
      handleReportStayTime: function () {
        var e, t;
        ("video_img_live" !==
          (null == (e = this.live) ? void 0 : e.live_type) &&
          "img_live" !== (null == (t = this.live) ? void 0 : t.live_type)) ||
          g.StockBridge.report("news.livedetail.img_live.playtime", {
            newsid: this.live_news_id,
            play_time: Date.now() - this.enterTime,
            stockid: this.stockId,
          });
      },
      onVisibilityChange: function () {
        "hidden" === document.visibilityState && this.handleReportStayTime();
      },
    },
  };
Array ||
  (
    g.resolveComponent("DownLoad") +
    g.resolveComponent("navigate-to-app") +
    g.resolveComponent("livePlayerMP") +
    g.resolveComponent("livePlayer") +
    g.resolveComponent("time-counter") +
    g.resolveComponent("SearchAiBar") +
    g.resolveComponent("live-to-app") +
    g.resolveComponent("multi-streams") +
    g.resolveComponent("live-swiper-item") +
    g.resolveComponent("swiper-slide") +
    g.resolveComponent("live-scroll-wrapper") +
    g.resolveComponent("bubble") +
    g.resolveComponent("qrcode") +
    g.resolveComponent("related-stock") +
    g.resolveComponent("SubscribeTipsDialog") +
    g.resolveComponent("ReverseMoreLiveDialog") +
    g.resolveComponent("NewsStatus") +
    g.resolveComponent("half-screen-ai-entry")
  )();
var de = g._export_sfc(he, [
  [
    "render",
    function (e, t, i, n, s, r) {
      return g.e(
        { a: s.loaded && !s.isWx },
        s.loaded && !s.isWx
          ? {
              b: g.sr("download", "a5eff5d6-0"),
              c: g.p({
                wxurl: s.wxurl || "",
                title: "【直播】" + (s.live.title || "资讯"),
                "show-brand": 20 != s.live.live_status,
                "title-text":
                  20 == s.live.live_status ? "预约直播 开播后提醒" : "",
                "button-text": 20 == s.live.live_status ? "预约" : "",
                "share-desc": s.live.live_summary,
              }),
            }
          : {},
        { d: 1 === s.currentTabIndex && s.isMobile && !s.isWx },
        1 === s.currentTabIndex && s.isMobile && !s.isWx
          ? { e: g.o(r.onNavigateToApp, 708), f: g.p({ wxurl: s.wxurl || "" }) }
          : {},
        { g: s.loaded },
        s.loaded
          ? g.e(
              { h: r.liveStart },
              r.liveStart
                ? g.e(
                    { i: s.isMP },
                    s.isMP
                      ? {
                          j: g.sr("liveplayer", "a5eff5d6-2"),
                          k: g.o(r.reportAnalytics, 709),
                          l: g.o(r.playStatusChange, 710),
                          m: g.p({
                            live: r.multiStreamLive,
                            mute: i.mute,
                            "stock-id": i.stockId,
                          }),
                        }
                      : {
                          n: g.sr("liveplayer", "a5eff5d6-3"),
                          o: g.o(r.reportAnalytics, 711),
                          p: g.o(r.playStatusChange, 712),
                          q: g.o(r.showToast, 713),
                          r: g.o(r.muteChange, 714),
                          s: g.p({
                            live: r.multiStreamLive,
                            mute: i.mute,
                            "stock-id": i.stockId,
                          }),
                        },
                    {
                      t: "live-"
                        .concat(s.live.live_id, "-")
                        .concat(s.sourceIndex),
                      v: r.videoContainerWidth + "px",
                      w: r.videoContainerHeight + "px",
                      x: g.n(s.playerClass),
                      y: g.n(21 == s.live.live_status ? "ing" : ""),
                      z: r.videoContainerHeight + "px",
                      A: "url(".concat(
                        r.forceHttpsAdvanced(s.live.live_public_img || ""),
                        ")"
                      ),
                    }
                  )
                : g.e(
                    { B: s.live.live_public_img },
                    s.live.live_public_img
                      ? { C: r.forceHttpsAdvanced(s.live.live_public_img) }
                      : {},
                    { D: r.videoContainerHeight + "px" }
                  ),
              { E: !r.liveStart },
              r.liveStart
                ? {}
                : g.e(
                    { F: s.live.live_type },
                    s.live.live_type ? { G: g.t(s.live.title) } : {},
                    { H: "img_live" == s.live.live_type },
                    "img_live" == s.live.live_type
                      ? g.e(
                          { I: 20 !== s.live.live_status },
                          20 !== s.live.live_status
                            ? g.e(
                                {
                                  J: 21 == s.live.live_status ? 1 : "",
                                  K: g.t(r.liveStatus(s.live.live_status)),
                                  L: s.live.participate_num > 0,
                                },
                                s.live.participate_num > 0
                                  ? {
                                      M: g.t(
                                        r.participate(s.live.participate_num)
                                      ),
                                      N: g.t(
                                        20 == s.live.live_status
                                          ? "预约"
                                          : "围观"
                                      ),
                                    }
                                  : {}
                              )
                            : g.e(
                                {
                                  O: g.t(
                                    r.date(1e3 * s.live.estimate_start_time)
                                  ),
                                  P: g.p({
                                    start: 1e3 * s.live.estimate_start_time,
                                    delta: s.delta_time,
                                  }),
                                  Q: g.t(s.live.participate_num),
                                  R: 2 == s.live.reserve_flag,
                                },
                                2 == s.live.reserve_flag
                                  ? {
                                      S: g.o(function (e) {
                                        return r.reserveLive();
                                      }, 715),
                                    }
                                  : {
                                      T: g.o(function (e) {
                                        return r.cancelReserveLive();
                                      }, 716),
                                    }
                              )
                        )
                      : g.e(
                          { U: 20 == s.live.live_status },
                          20 == s.live.live_status
                            ? g.e(
                                {
                                  V: g.t(
                                    r.date(1e3 * s.live.estimate_start_time)
                                  ),
                                  W: g.p({
                                    start: 1e3 * s.live.estimate_start_time,
                                    delta: s.delta_time,
                                  }),
                                  X: g.t(s.live.participate_num),
                                  Y: 2 == s.live.user_identity,
                                },
                                2 == s.live.user_identity
                                  ? {}
                                  : g.e(
                                      { Z: 2 == s.live.reserve_flag },
                                      2 == s.live.reserve_flag
                                        ? {
                                            aa: g.o(function (e) {
                                              return r.reserveLive();
                                            }, 717),
                                          }
                                        : {
                                            ab: g.o(function (e) {
                                              return r.cancelReserveLive();
                                            }, 718),
                                          }
                                    )
                              )
                            : {}
                        )
                  ),
              { ac: r.showSearchAiBar },
              r.showSearchAiBar
                ? {
                    ad: g.o(e.onShowAiDialog, 719),
                    ae: g.o(e.onShowAiEntry, 720),
                    af: g.o(e.onHideAiEntry, 721),
                    ag: g.p({
                      "report-prefix": s.reportPrefix,
                      "report-info": r.reportInfo,
                      scene: "news_live",
                      "content-id": s.live.live_news_id,
                      "component-type": r.isLightMode ? "top" : "",
                    }),
                    ah: e.showAiEntry,
                  }
                : s.isWx && !s.liveGuideBarClose
                ? {
                    aj: g.o(r.onSubscribe, 722),
                    ak: g.o(r.onLiveGuideBarClose, 723),
                    al: g.o(r.reportAnalytics, 724),
                    am: g.p({
                      wxurl: s.wxurl,
                      live: s.live,
                      userinfo: s.userWxInfo,
                      "has-subscribed": s.hasSubscribed,
                      "show-subscribe": r.showSubscribe,
                      "is-light-mode": r.isLightMode,
                    }),
                  }
                : {},
              { ai: s.isWx && !s.liveGuideBarClose, an: s.live },
              s.live
                ? {
                    ao: g.o(r.changeSource, 725),
                    ap: g.p({
                      "selected-source-index": s.sourceIndex,
                      live: s.live,
                      "is-light-mode": r.isLightMode,
                    }),
                  }
                : {},
              {
                aq: g.n(r.showHeaderDivider ? "live-divider-border" : ""),
                ar: g.f(s.tabs, function (e, t, i) {
                  return g.e(
                    { a: g.t(e.name), b: s.currentTabIndex == t },
                    (s.currentTabIndex, {}),
                    {
                      c: e.id,
                      d: g.n(s.currentTabIndex == t ? "active" : ""),
                      e: g.o(
                        function (e) {
                          return r.onTabClicked(t);
                        },
                        726,
                        e.id
                      ),
                    }
                  );
                }),
                as: g.n("tabs-" + s.tabs.length),
                at: s.loaded && s.isMP,
              },
              s.loaded && s.isMP
                ? {
                    av: g.f(s.tabs, function (e, t, n) {
                      return {
                        a: g.o(r.manageSelfStock, 727, t),
                        b: "a5eff5d6-10-" + n + ",a5eff5d6-4",
                        c: g.p({
                          index: t,
                          "is-wx": s.isWx,
                          live: s.live,
                          delta_time: s.delta_time,
                          live_list: s.live_list,
                          chat_list: s.chat_list,
                          news_list: s.news_list,
                          "is-share-page": i.isSharePage,
                          "on-end-reached": r.onEndReached,
                          "on-refresh": r.onRefresh,
                          "on-chat-list-pulling": r.onChatListPulling,
                          slist: s.slist,
                          "qt-data": s.qtData,
                          "inner-fund-list": i.innerFundList,
                          userinfo: s.userWxInfo,
                          skin: i.skin,
                        }),
                        d: t,
                      };
                    }),
                    aw: s.currentTabIndex,
                    ax: g.o(function () {
                      return (
                        r.onSwiperChange && r.onSwiperChange.apply(r, arguments)
                      );
                    }, 728),
                  }
                : s.loaded
                ? {
                    az: g.f(s.tabs, function (e, t, n) {
                      return {
                        a: g.sr(
                          "list",
                          "a5eff5d6-12-" + n + ",a5eff5d6-11-" + n,
                          { f: 1 }
                        ),
                        b: g.o(r.onReportMatch, 729, t),
                        c: g.o(
                          function (e) {
                            return r.onListScrollHandle(e);
                          },
                          730,
                          t
                        ),
                        d: g.o(
                          function (e) {
                            return r.onScrollHandleEnd(e);
                          },
                          731,
                          t
                        ),
                        e: g.o(
                          function (e) {
                            return r.onScrollHandleBegin(e);
                          },
                          732,
                          t
                        ),
                        f: g.o(r.manageSelfStock, 733, t),
                        g: "a5eff5d6-12-" + n + ",a5eff5d6-11-" + n,
                        h: g.p({
                          index: t,
                          "is-wx": s.isWx,
                          live: s.live,
                          delta_time: s.delta_time,
                          live_list: s.live_list,
                          chat_list: s.chat_list,
                          news_list: s.news_list,
                          "is-share-page": i.isSharePage,
                          "on-end-reached": r.onEndReached,
                          "on-refresh": r.onRefresh,
                          "on-chat-list-pulling": r.onChatListPulling,
                          "disable-swiper-refresh": r.disableSwiperRefresh,
                          slist: s.slist,
                          "qt-data": s.qtData,
                          "inner-fund-list": i.innerFundList,
                          userinfo: s.userWxInfo,
                          skin: i.skin,
                        }),
                        i: t,
                        j: "a5eff5d6-11-" + n + ",a5eff5d6-4",
                      };
                    }),
                    aA: s.currentTabIndex,
                    aB: {
                      resistance: !0,
                      resistanceRatio: 0,
                      passiveListeners: !1,
                      threshold: 20,
                      touchAngle: 60,
                    },
                    aC: g.o(function () {
                      return r.onDropped && r.onDropped.apply(r, arguments);
                    }, 734),
                  }
                : {},
              {
                ay: s.loaded,
                aD: r.tabContentHeight + "px",
                aE: g.sr("outerscroll", "a5eff5d6-4"),
                aF: g.o(r.onOuterScrollHandle, 735),
                aG: g.o(r.onScrollHandleEnd, 736),
                aH: g.o(r.onScrollHandleBegin, 737),
                aI: g.p({
                  options: {
                    bounce: !1,
                    probeType: 3,
                    click: !1,
                    preventDefault: !1,
                  },
                  "scroll-events": [
                    "scroll",
                    "before-scroll-start",
                    "scroll-end",
                  ],
                }),
              }
            )
          : {},
        { aJ: s.loaded && s.isWx && s.isShowInput },
        s.loaded && s.isWx && s.isShowInput
          ? g.e(
              {
                aK: g.t(r.inputPlaceholder),
                aL: g.o(function () {
                  return r.startInput && r.startInput.apply(r, arguments);
                }, 738),
                aM:
                  s.live &&
                  s.live.relate_quotes &&
                  s.live.relate_quotes.length > 0,
              },
              s.live && s.live.relate_quotes && s.live.relate_quotes.length > 0
                ? {
                    aN: g.o(function () {
                      return (
                        r.showRelateNews && r.showRelateNews.apply(r, arguments)
                      );
                    }, 739),
                  }
                : {}
            )
          : {},
        { aO: s.showRelateHqBubble && s.isWx && !s.isMP },
        s.showRelateHqBubble && s.isWx && !s.isMP
          ? {
              aP: g.o(r.closeRelateHqBubble, 740),
              aQ: g.p({
                text: s.relateHqBubbleText,
                "bubble-style": {
                  right: "15px",
                  bottom: i.isSharePage
                    ? "calc(105px + env(safe-area-inset-bottom))"
                    : "50px",
                },
                "arrow-style": {
                  transform: "rotate(180deg)",
                  top: "initial",
                  bottom: "-6px",
                  right: "15px",
                },
                "popup-config": { close_pic: 1 },
              }),
            }
          : {},
        {
          aR: g.o(r.hideQrcode, 741),
          aS: g.p({ show: s.isShowQrcode, type: s.qrCodeType }),
          aT: s.showReverveSucToast,
        },
        (s.showReverveSucToast, {}),
        { aU: s.isShowToast },
        s.isShowToast ? { aV: g.t(s.toastMessage) } : {},
        {
          aW: g.o(r.hideRelateNews, 742),
          aX: g.o(r.manageSelfStock, 743),
          aY: g.o(r.reportAnalytics, 744),
          aZ: g.p({
            live: s.live,
            slist: s.slist,
            "qt-data": s.qtData,
            "show-relate-hq": s.isShowRelateHq,
            "inner-fund-list": i.innerFundList,
            userinfo: s.userWxInfo,
            "is-share-page": i.isSharePage,
            "news-id": s.live_news_id,
          }),
          ba: g.o(r.onSubscribeTipsClose, 745),
          bb: g.o(r.onSubscribeTipsConfirm, 746),
          bc: g.o(r.reportAnalytics, 747),
          bd: g.p({
            "show-subscribe-dialog": s.showSubscribeDialog,
            "top-position": r.videoContainerHeight,
            "is-share-page": i.isSharePage,
            skin: i.skin,
          }),
          be: g.o(r.onReverseMoreLiveClose, 748),
          bf: g.o(r.onSubscribe, 749),
          bg: g.o(r.onReserve, 750),
          bh: g.o(r.handleTapLiveCard, 751),
          bi: g.o(r.reportAnalytics, 752),
          bj: g.p({
            "show-reverse-dialog": s.showReverseDialog,
            "has-subscribed": s.hasSubscribed,
            "live-subject-list": s.liveSubjectList,
            "top-position": r.videoContainerHeight,
            "is-share-page": i.isSharePage,
          }),
          bk: s.isShowTips,
        },
        s.isShowTips
          ? {
              bl: g.o(r.getLiveData, 753),
              bm: g.p({ type: s.errorStatusType }),
            }
          : {},
        { bn: e.showAiDialog },
        e.showAiDialog
          ? {
              bo: g.o(e.onShareAiHandler, 754),
              bp: g.o(e.onCloseAiDialog, 755),
              bq: g.p({
                "sse-serve-type": "newsSummaryServerHttp",
                "show-ai-dialog": e.showAiDialog,
                "ai-dialog-question": e.aiQuestionObj.title || "",
                "ai-question-query": e.aiQuestionObj.prompt || "",
                "server-obj": e.aiQuestionObj,
                "source-from": e.aiQuestionObj.scene,
              }),
            }
          : {},
        {
          br: g.n(i.isSharePage ? "sharePage" : ""),
          bs: g.n(r.rootClass),
          bt: s.isHorizonal ? "auto" : s.contentHeight + "px",
        }
      );
    },
  ],
  ["__scopeId", "data-v-a5eff5d6"],
]);
wx.createComponent(de);
var ve = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWxpdmUtZGV0YWlsL0luZGV4LnZ1ZQ =
  ve),
  (exports.SUBSCRIBE_WXMSG_STORAGE_KEY = "subscribe_wxmsg_storage_key"),
  (exports.USERSTATE = {
    HASACCOUNT: "0",
    NOACCOUNT: "1",
    VERIFYING: "2",
    HASBUNDLE: "3",
    FAILED: "4",
  }),
  (exports.dateUtils = z),
  (exports.getItem = ee),
  (exports.setItem = te);
