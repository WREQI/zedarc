var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  r = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  o = function (e, r, l) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (e[r] = l);
  },
  n = function (t, n) {
    for (var a in n || (n = {})) l.call(n, a) && o(t, a, n[a]);
    if (r) {
      var s,
        p = e(r(n));
      try {
        for (p.s(); !(s = p.n()).done; ) {
          a = s.value;
          i.call(n, a) && o(t, a, n[a]);
        }
      } catch (e) {
        p.e(e);
      } finally {
        p.f();
      }
    }
    return t;
  },
  a = require("../../../../../common/vendor.js"),
  s = {
    "hq.basketfind": "IBr00p000l146",
    "hq.basketdetail": "IfS00p000l146",
    "hq.basketlist": "Iqv00p000l146",
    "shequ.comment-detail": "IAU00p000l123",
    "news.basketnewsdetail": "Idi00p000l146",
    "hq.market.market_headline_list": "IGL00p000l146",
    "shequ.square": "IVM00p000l146",
    "hq.portfolio": "IdR00p000l146",
    "jichu.ai_search": "IoT00p000l164",
  };
(exports.REPORT_PREFIX_REG = /^\w+\.(\w+|-)+$/),
  (exports.reportLogExtra = function () {
    var e,
      t,
      r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      l = arguments.length > 1 ? arguments[1] : void 0,
      i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
      p = {
        foperation_purpose: "watchlist_zixuan",
        fchannel_id_fm_i: s[l] || "",
      };
    return (
      a.isEmpty(i)
        ? a.isEmpty(o) ||
          (p = n(
            {
              postid:
                null ==
                (t =
                  null == (e = null == o ? void 0 : o.rss_list) ? void 0 : e[0])
                  ? void 0
                  : t.subject_id,
            },
            p
          ))
        : (p = n({ newsid: null == i ? void 0 : i.id }, p)),
      n(n({}, r), p)
    );
  });
