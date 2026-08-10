require("../../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  o = Object.getOwnPropertySymbols,
  i = Object.prototype.hasOwnProperty,
  a = Object.prototype.propertyIsEnumerable,
  r = function (e, t, o) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o);
  },
  c = function (e, n) {
    for (var c in n || (n = {})) i.call(n, c) && r(e, c, n[c]);
    if (o) {
      var s,
        m = t(o(n));
      try {
        for (m.s(); !(s = m.n()).done; ) {
          c = s.value;
          a.call(n, c) && r(e, c, n[c]);
        }
      } catch (e) {
        m.e(e);
      } finally {
        m.f();
      }
    }
    return e;
  },
  s = function (e, t, n) {
    return new Promise(function (o, i) {
      var a = function (e) {
          try {
            c(n.next(e));
          } catch (e) {
            i(e);
          }
        },
        r = function (e) {
          try {
            c(n.throw(e));
          } catch (e) {
            i(e);
          }
        },
        c = function (e) {
          return e.done ? o(e.value) : Promise.resolve(e.value).then(a, r);
        };
      c((n = n.apply(e, t)).next());
    });
  },
  m = require("../../../../stock-community-base/utils/knife.js"),
  p = require("../../../../stock-community-base/utils/api/index.js"),
  d = require("../../../../stock-community-base/utils/api/mini.js"),
  l = require("../../../../../compare-versions/lib/esm/index.js"),
  u = require("../../../../stock-community-base/utils/constant.js"),
  h = require("../../../../../../../common/vendor.js"),
  f = m.sdk,
  v = f.previewImage,
  g = f.showToast,
  y = p.api.goPageCommon,
  _ = !m.IS_ZXG_XCX_ALLH5,
  w = {
    onPutComment: function (e, t, n) {
      n.newsCommentId;
      var o,
        i = n.itemData,
        a = void 0 === i ? {} : i,
        r = ((null == (o = this.commentsData) ? void 0 : o[t]) || {}).id,
        c = ""
          .concat(u.prefix[this.pageType], ".")
          .concat(u.moduleName, ".pinlun_tap");
      this.$emit("commentReport", {
        eventName: c,
        data: {
          newsid: (null == a ? void 0 : a.news_id) || "",
          postid: r || "",
        },
      }),
        this.$emit("onPutComment", this.commentsData[t] || {}, t);
    },
    onHandelTurn: function (e, t, n) {
      n.newsCommentId;
      var o,
        i = (null == (o = this.commentsData) ? void 0 : o[t]) || {},
        a = i.id,
        r = i.news_id,
        c = ""
          .concat(u.prefix[this.pageType], ".")
          .concat(u.moduleName, ".zhuanfa_tap"),
        s = { newsid: r || "", postid: a || "" };
      this.$emit("commentReport", { eventName: c, data: s }),
        "zxg" === m.platform
          ? this.$emit("onHandelTurn", this.commentsData[t] || {}, t)
          : this.handleWzqTurn(this.commentsData[t]);
    },
    handleWzqTurn: function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (e.from_news) g("该帖子不支持转发");
      else {
        var t = e.id,
          n = e.showType,
          o = void 0 === n ? "" : n,
          i = e.content,
          a = void 0 === i ? "" : i,
          r = e.user_id,
          c = e.user_name,
          s = e.news_id,
          p = {
            id: t,
            action: "turn",
            type: e.type,
            post_scene: this.pageType,
          };
        "turn" === o &&
          Object.assign(p, {
            turnUserId: r,
            turnUserName: c,
            turnUserContent: m.doEncodeURI(
              m.doEncodeURI(m.doDecodeURI(a).replace(/\r|\n/g, " "))
            ),
            turnTopId: s,
          }),
          this.$emit("onHandelTurn", { path: "/comedit/comedit", query: p });
      }
    },
    onTapPerson: function (t, n, o) {
      return s(this, arguments, function (t, n, o) {
        var i = this,
          a = o.itemData,
          r = void 0 === a ? {} : a;
        return e().mark(function n() {
          var o, a, c, s, p, l;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  !r.from_news &&
                    t &&
                    ("web" === m.platform && i.$emit("onTapPerson", t),
                    (o = m.isObject(t) ? t.userid || "" : t),
                    (a = (null == r ? void 0 : r.news_id) || ""),
                    (c =
                      (null == r ? void 0 : r.comment_id) ||
                      (null == r ? void 0 : r.id) ||
                      ""),
                    (s = (null == r ? void 0 : r.stock_id) || ""),
                    (p = {
                      url: u.toPerson(o),
                      eventName: "person",
                      userId: o,
                      newsid: a,
                      postid: c,
                      symbol: s,
                      instance: i,
                    }),
                    (l = ""
                      .concat(u.prefix[i.pageType], ".")
                      .concat(u.moduleName, ".avator_tap")),
                    i.$emit("commentReport", {
                      eventName: l,
                      data: { newsid: a, postid: c, stockid: s, user_id: o },
                    }),
                    ("miniapp" !== i.from && !m.IsMINAPP) || m.IS_LCT_XCX
                      ? y(p)
                      : d.goPageCommon(p));
                case 1:
                case "end":
                  return e.stop();
              }
          }, n);
        })();
      });
    },
    onTapMore: function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 2 ? arguments[2] : void 0,
        n = t.itemData,
        o = void 0 === n ? {} : n,
        i = ""
          .concat(u.prefix[this.pageType], ".")
          .concat(u.moduleName, ".more_tap"),
        a = (null == o ? void 0 : o.news_id) || "",
        r = (null == o ? void 0 : o.id) || "";
      this.$emit("commentReport", {
        eventName: i,
        data: { newsid: a, postid: r },
      }),
        this.$emit("commentMore", e);
    },
    onTapIllegal: function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.id;
      this.deleteThisItem(t);
    },
    onTapDeleteItem: function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      "personal" === this.pageType && this.$emit("tapDeleteOpinion");
      var t = e.id;
      this.deleteThisItem(t);
    },
    deleteThisItem: function (e) {
      for (var t = 0; t < this.commentsData.length; t++) {
        var n = this.commentsData[t];
        n.id &&
          n.id === e &&
          (this.commentsData.splice(t, 1), this.$forceUpdate());
      }
      this.commentsData.length || this.$emit("updateList");
    },
    onTapImage: function () {
      var e = this,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = arguments.length > 1 ? arguments[1] : void 0,
        o = arguments.length > 2 ? arguments[2] : void 0;
      "fund" === this.pageType &&
        -1 !==
          ((navigator && navigator.userAgent) || "")
            .toLowerCase()
            .indexOf("android") &&
        this.onTapDetail(t, n, o);
      var i = ""
        .concat(u.prefix[this.pageType], ".")
        .concat(u.moduleName, ".tapImage")
        .concat(t.type ? ".".concat(t.type) : "");
      if (
        (this.$emit("commentReport", i),
        "web" !== m.platform && "qqmac" !== m.platform)
      ) {
        var a = !1,
          r = !1;
        if (a || r) {
          var c = t.urls,
            s = t.currentIndex;
          imagePreview.show({ current: c[s], urls: c });
        } else
          v(t)
            .then(function () {})
            .catch(function () {
              e.onTapDetail(t, n, o);
            });
      } else this.$emit("onTapImage", t);
    },
    onTapDetail: function (e, t, n) {
      var o = n.pageId,
        i = n.newsCommentId,
        a = void 0 === i ? "" : i,
        r = n.topTag,
        s = n.gdId;
      if ("web" !== m.platform) {
        var p = m.isObject(e) && e.id ? e : this.commentsData[t],
          l = p || {},
          h = l.id,
          f = l.is_wx_long,
          v = l.topic_info,
          g =
            (l.type,
            "string" == typeof e
              ? ".".concat(e)
              : (null == e ? void 0 : e.reportAction)
              ? ".".concat(e.reportAction)
              : ""),
          y = ""
            .concat(u.prefix[this.pageType], ".")
            .concat(u.moduleName, ".detail")
            .concat(g)
            .concat(
              (null == v ? void 0 : v.topic_id) ? ".operate" : "",
              "_tap"
            );
        this.$emit("commentReport", {
          eventName: y,
          data: {
            postid: h || "",
            newsid: (null == p ? void 0 : p.news_id) || "",
          },
        });
        var _ = {},
          w = m.getUrlParams(this, m.platform) || {},
          T = w.act_actid,
          I = w.act_id,
          x = w.act_tid,
          b = w.act_url;
        if (
          (I && (_ = { act_actid: T, act_id: I, act_tid: x, act_url: b }),
          "needAnchor" !== e ||
            -1 === ["stock", "topic", "personal"].indexOf(this.pageType) ||
            "zxg" !== m.platform)
        ) {
          this.$emit("onTapDetail", this.commentsData[t] || {});
          var k = {
              id: h,
              needAnchor: -1 !== ["needAnchor", "more_needAnchor"].indexOf(e),
              newsCommentId: a,
              topTag: r,
              pageType: this.pageType,
            },
            D = c(
              {
                url: u.toShyDetail(k),
                eventName: "detail",
                itemId: h,
                pageId: o,
                gdId: s,
                instance: this,
                newsCommentId: a,
                topTag: r,
                pageType: this.pageType,
              },
              _
            );
          f
            ? this.$emit("showToast", { text: "请到自选股APP查看原文" })
            : d.goPageCommon(D);
        }
      }
    },
    onTapContent: function (e, t, n) {
      var o = n.itemData,
        i = void 0 === o ? {} : o,
        a = e || {},
        r = a.eventName,
        c = a.eventData,
        s = c || {},
        p = s.symbol,
        l = s.text,
        h = s.strategyId,
        f = s.personId,
        v = s.topicId,
        g = s.id,
        w = s.link,
        T = "".concat(u.prefix[this.pageType], ".content.").concat(r, "_tap");
      this.$emit("commentReport", {
        eventName: T,
        data: {
          stockid: p || "",
          postid:
            (null == i ? void 0 : i.comment_id) ||
            (null == i ? void 0 : i.id) ||
            "",
        },
      });
      var I = (w && w.data) || {},
        x = I.hyperH5Url,
        b = I.hyperHybirdUrl,
        k = I.linkTradeAccount,
        D = "wzq" === m.platform ? x : b,
        N = {
          stockdetail: u.toStockDetail(p, l),
          strategy: u.toShyDetail({ id: h, pageType: this.pageType }),
          person: u.toPerson(f),
          topic: u.toShyTopic(v),
          live: u.toLive(g),
          chaolian: D,
        },
        C = p && p.substr(0, 2);
      if (
        ("wzq" !== m.platform && !_) ||
        !(
          "stockjj" === r ||
          (["fu", "gn", "ft", "fx"].includes(C) &&
            "ftDAX30" !== p &&
            "fuCN" !== p) ||
          ["hd"].includes(C)
        )
      ) {
        if (Object.keys(N).includes(r)) {
          var P = {
            platform: m.platform,
            url: N[r],
            eventName: r,
            symbol: p,
            topicId: v,
            chaolian: D,
            userId: f,
            liveid: g,
            instance: this,
            text: l,
            pageType: this.pageType,
            linkTradeAccount: k,
          };
          ("miniapp" !== this.from && !m.IsMINAPP) || m.IS_LCT_XCX
            ? y(P)
            : d.goPageCommon(P);
        }
      } else this.$emit("goAppStock", { symbol: p, name: c.text || c.name });
    },
    navigateLctFund: function (t) {
      return s(this, arguments, function (t) {
        var n = t.type,
          o = t.scode;
        return e().mark(function t() {
          var i, a;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (i =
                        "https://www.tencentwm.com/h5/v6/pages/product/detail/index?fund_code=".concat(
                          o,
                          "&online_status=0&stat_data_fm=FMlctW278010001"
                        )),
                      (e.prev = 1),
                      (e.next = 4),
                      h.StockBridge.request(
                        "https://proxy.finance.qq.com/ifzqgtimg/appstock/fund/trade/fundInfo",
                        "get",
                        { code: "".concat(n).concat(o) }
                      )
                    );
                  case 4:
                    (a = e.sent) &&
                      a.data &&
                      a.data.lct_pid &&
                      a.data.lct_pid.length > 0 &&
                      (i =
                        "https://www.txfund.com/h5/v6/pages/product/detail/index?fund_code="
                          .concat(o, "&spid=")
                          .concat(
                            a.data.lct_pid,
                            "&stat_data_fm=FMlctW277010001"
                          )),
                      (e.next = 10);
                    break;
                  case 8:
                    (e.prev = 8), (e.t0 = e.catch(1));
                  case 10:
                    return (
                      (e.prev = 10),
                      (i += "&lctfrom=tx_stock"),
                      h.StockBridge.openExtraWebview(i),
                      e.finish(10)
                    );
                  case 13:
                  case "end":
                    return e.stop();
                }
            },
            t,
            null,
            [[1, 8, 10, 13]]
          );
        })();
      });
    },
    onTapShowBox: function (e, t, n) {
      var o = n.pageType,
        i = e || {},
        a = i.eventName,
        r = i.eventData,
        c = r || {},
        s = c.stock_id,
        p = c.stock_name,
        l = c.topic_id,
        h = c.topic_name,
        f = c.url;
      "web" === m.platform && this.$emit("onTapShowBox", e);
      var v = {
          p_showNav: !0,
          p_key: "com.tencent.shy.commentSystem",
          p_url: "comment-comment?symbol=".concat(s, "&name=").concat(p),
          p_title: "",
        },
        g = { url: f, stock: u.toShyCommon(v), topic: u.toShyTopic(l) };
      if (Object.keys(g).includes(a)) {
        var w = ""
          .concat(u.prefix[o], ".")
          .concat(u.sourceBoxMap[a] || u.moduleName, ".source_tap");
        this.$emit("commentReport", {
          event: w,
          eventName: w,
          data: { topicId: l, topicName: h, postid: r.id },
        });
        var T = {
          url: g[a],
          eventName: a,
          topicName: h,
          symbol: s,
          topicId: l,
          instance: this,
          name: p,
        };
        "miniapp" === this.from || _ ? d.goPageCommon(T) : y(T);
      }
    },
    onToggleShow: function (e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        o = n.newsCommentId,
        i = void 0 === o ? "" : o,
        a = n.gdId,
        r = void 0 === a ? "" : a,
        c = e.showType,
        s = this.commentsData[t] || {},
        m = s.detailInfo,
        p = this.commentsData[t] || {},
        l = p.id;
      "turnShort" === c && (l = null == m ? void 0 : m.id);
      var h = "".concat(u.prefix[this.pageType], ".content.quanwen_tap");
      this.$emit("commentReport", h);
      var f = { id: l, newsCommentId: i, pageType: this.pageType, gdId: r },
        v = {
          url: u.toShyDetail(f),
          eventName: "detail",
          itemId: l,
          instance: this,
          newsCommentId: i,
          pageType: this.pageType,
          gdId: r,
        };
      "miniapp" === this.from && _ ? d.goPageCommon(v) : y(v);
    },
    onTapOtherSource: function (e) {
      var t = e.newsFrom,
        n = e.newsid,
        o = e.link,
        i = e.itemData,
        a = i || {},
        r = a.title,
        s = a.stock_id,
        p = a.special_type,
        h = a.news_type,
        f = a.news_jump,
        v = "news";
      if ("DM" === f) {
        if (((v = "morningBriefing"), "zxg" === m.platform || !m.IS_WZQ_XCX))
          return void g("暂不支持该类型", this);
      } else 2 == +p && (v = "morningReport");
      var w = "27" === h;
      if (w && ((v = "aiFinancialReport"), "zxg" === m.platform)) {
        var T = e.appVersion || "";
        if (l.compare(T, "11.18.1", "<"))
          return void g("暂不支持财报速递，请升级最新版本", this);
      }
      if ("miniapp" === this.from && _) {
        var I = {
          eventName: (v = "detail"),
          itemId: (i || {}).id,
          newsid: n,
          instance: this,
        };
        d.goPageCommon(I);
      } else {
        var x = {
            p_showNav: !0,
            p_key: "com.tencent.shy.news_".concat(
              "om" === t ? "om_" : "",
              "zixuangu"
            ),
          },
          b = {
            om: c({ p_url: "content-newsDetail?id=".concat(n) }, x),
            news: c({ p_url: "index?id=".concat(n) }, x),
            morningReport: {
              p_url: "index?id=".concat(n),
              p_key: "com.tencent.shy.news_morning_report",
            },
            morningBriefing: {
              p_url: "index?id=".concat(n),
              p_key: "com.tencent.shy.news_morning_briefing",
            },
            aiFinancialReport: {
              p_url: "index?id=".concat(n),
              p_key: "com.tencent.shy.ai_financial_report",
              p_showNav: !0,
            },
          },
          k = t;
        "DM" === f
          ? ((v = "morningBriefing"), (k = "morningBriefing"))
          : w
          ? ((v = "aiFinancialReport"), (k = "aiFinancialReport"))
          : 2 == +p && ((v = "morningReport"), (k = "morningReport")),
          y({
            url: u.toShyCommon(b[k]),
            chaolian: o,
            newsid: n,
            eventName: v,
            symbol: s,
            title: r,
            instance: this,
          });
      }
    },
    onGoSharePage: function (e) {
      var t = e.shareParams || {},
        n = t.h5Url,
        o = {
          url: t.appUrl,
          chaolian: n,
          eventName: "chaolian",
          instance: this,
        };
      "miniapp" === this.from && _ ? d.goPageCommon(o) : y(o);
    },
    commentReport: function (e) {
      this.$emit("commentReport", e);
    },
    platformType: function () {
      return m.platform, "wzq" === m.platform ? "wzq" : "";
    },
  };
exports.store = w;
