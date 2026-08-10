var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = Object.defineProperty,
  o = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  r = function (e, t, o) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (e[t] = o);
  },
  m = require("../../../../../../common/vendor.js"),
  c = require("../../../stock-community-base/utils/knife.js"),
  s = require("../../../stock-community-base/utils/api/index.js"),
  p = require("../../../stock-community-base/utils/api/mini.js"),
  d = require("../../../stock-community-base/utils/constant.js"),
  l = c.sdk,
  h = l.previewImage,
  u = l.reportAnalytics,
  f = l.showToast,
  g = l.showModal,
  v = s.api.goPageCommon,
  y = {
    onPutComment: function (e, t, n) {
      var o = n.newsCommentId,
        a = void 0 === o ? "" : o;
      if ("news" === this.pageType && "zxg" === c.platform) {
        var i = (this.commentsData[t] || {}).id,
          r = {
            id: i,
            event: "pinglun",
            newsCommentId: a,
            pageType: this.pageType,
          };
        v({
          url: d.toShyDetail(r),
          eventName: "detail",
          itemId: i,
          instance: this,
          newsCommentId: a,
          pageType: this.pageType,
        });
      }
      var m = ""
        .concat(d.prefix[this.pageType], ".")
        .concat(d.moduleName, ".pinlun_tap");
      this.$emit("commentReport", m),
        this.$emit("onPutComment", this.commentsData[t] || {}, t),
        u({ eventName: m });
    },
    onHandelTurn: function (e, t, n) {
      var o = n.newsCommentId,
        a = void 0 === o ? "" : o;
      if ("news" === this.pageType && "zxg" === c.platform) {
        var i = (this.commentsData[t] || {}).id,
          r = {
            id: i,
            event: "zhuanfa",
            newsCommentId: a,
            pageType: this.pageType,
          };
        v({
          url: d.toShyDetail(r),
          eventName: "detail",
          itemId: i,
          instance: this,
          newsCommentId: a,
          pageType: this.pageType,
        });
      }
      var m = ""
        .concat(d.prefix[this.pageType], ".")
        .concat(d.moduleName, ".zhuanfa_tap");
      this.$emit("commentReport", m),
        "zxg" === c.platform
          ? this.$emit("onHandelTurn", this.commentsData[t] || {}, t)
          : this.handleWzqTurn(this.commentsData[t]),
        u({ eventName: m });
    },
    handleWzqTurn: function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (e.from_news) f("该帖子不支持转发");
      else {
        var t = e.id,
          n = e.showType,
          o = void 0 === n ? "" : n,
          a = e.content,
          i = void 0 === a ? "" : a,
          r = e.user_id,
          m = e.user_name,
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
            turnUserName: m,
            turnUserContent: c.doEncodeURI(
              c.doEncodeURI(c.doDecodeURI(i).replace(/\r|\n/g, " "))
            ),
            turnTopId: s,
          }),
          this.$emit("onHandelTurn", { path: "/comedit/comedit", query: p });
      }
    },
    onTapPerson: function (e, n, o) {
      return (
        (a = this),
        (i = arguments),
        (r = function (e, n, o) {
          var a = this,
            i = o.itemData,
            r = void 0 === i ? {} : i;
          return t().mark(function n() {
            var o, i;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    !r.from_news &&
                      e &&
                      (a.$emit("onTapPerson", e),
                      (o = ""
                        .concat(d.prefix[a.pageType], ".")
                        .concat(d.moduleName, ".avator_tap")),
                      a.$emit("commentReport", {
                        eventName: o,
                        data: {
                          postid: (null == r ? void 0 : r.id) || "",
                          stockid: (null == r ? void 0 : r.stock_id) || "",
                          user_id: e,
                        },
                      }),
                      (i = {
                        url: d.toPerson(e),
                        eventName: "person",
                        userId: e,
                        instance: a,
                      }),
                      v(i),
                      u({ eventName: o }));
                  case 1:
                  case "end":
                    return t.stop();
                }
            }, n);
          })();
        }),
        new Promise(function (e, t) {
          var n = function e(n) {
              try {
                m(r.next(n));
              } catch (e) {
                t(e);
              }
            },
            o = function (e) {
              try {
                m(r.throw(e));
              } catch (e) {
                t(e);
              }
            },
            m = function (t) {
              return t.done ? e(t.value) : Promise.resolve(t.value).then(n, o);
            };
          m((r = r.apply(a, i)).next());
        })
      );
      var a, i, r;
    },
    onTapMore: function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = ""
          .concat(d.prefix[this.pageType], ".")
          .concat(d.moduleName, ".more_tap");
      this.$emit("commentReport", t), this.$emit("commentMore", e);
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
      var a = ""
        .concat(d.prefix[this.pageType], ".")
        .concat(d.moduleName, ".tapImage")
        .concat(t.type ? ".".concat(t.type) : "");
      this.$emit("commentReport", a),
        "web" !== c.platform && "qqmac" !== c.platform
          ? h(t)
              .then(function () {})
              .catch(function () {
                e.onTapDetail(t, n, o);
              })
          : this.$emit("onTapImage", t);
    },
    onTapDetail: function (t, n, m) {
      var s = m.pageId,
        l = m.newsCommentId,
        h = void 0 === l ? "" : l,
        u = m.topTag,
        g = m.gdId;
      if ("web" !== c.platform) {
        var v = c.isObject(t) && t.id ? t : this.commentsData[n],
          y = v || {},
          T = y.id,
          I = y.is_wx_long,
          w = y.topic_info,
          b =
            (y.type,
            ""
              .concat(d.prefix[this.pageType], ".")
              .concat(d.moduleName, ".detail")
              .concat(t ? ".".concat(t) : "")
              .concat(
                (null == w ? void 0 : w.topic_id) ? ".operate" : "",
                "_tap"
              ));
        this.$emit("commentReport", {
          eventName: b,
          data: {
            postid: (null == v ? void 0 : v.id) || "",
            stockid: (null == v ? void 0 : v.stock_id) || "",
          },
        });
        var _ = {},
          x = c.getUrlParams(this, c.platform) || {},
          N = x.act_actid,
          k = x.act_id,
          D = x.act_tid,
          P = x.act_url;
        if (
          (k && (_ = { act_actid: N, act_id: k, act_tid: D, act_url: P }),
          "needAnchor" !== t ||
            -1 === ["stock", "topic", "personal"].indexOf(this.pageType) ||
            "zxg" !== c.platform)
        ) {
          this.$emit("onTapDetail", this.commentsData[n] || {});
          var q = {
              id: T,
              needAnchor: -1 !== ["needAnchor", "more_needAnchor"].indexOf(t),
              newsCommentId: h,
              topTag: u,
              pageType: this.pageType,
            },
            C = (function (t, n) {
              for (var m in n || (n = {})) a.call(n, m) && r(t, m, n[m]);
              if (o) {
                var c,
                  s = e(o(n));
                try {
                  for (s.s(); !(c = s.n()).done; ) {
                    m = c.value;
                    i.call(n, m) && r(t, m, n[m]);
                  }
                } catch (e) {
                  s.e(e);
                } finally {
                  s.f();
                }
              }
              return t;
            })(
              {
                url: d.toShyDetail(q),
                eventName: "detail",
                itemId: T,
                pageId: s,
                gdId: g,
                instance: this,
                newsCommentId: h,
                topTag: u,
                pageType: this.pageType,
              },
              _
            );
          I ? f("请到自选股APP查看原文") : p.goPageCommon(C);
        }
      }
    },
    onTapContent: function (e, t, n) {
      var o = n.itemData,
        a = void 0 === o ? {} : o,
        i = e || {},
        r = i.eventName,
        m = i.eventData,
        s = m || {},
        l = s.symbol,
        h = s.text,
        u = s.strategyId,
        g = s.personId,
        y = s.topicId,
        T = s.id,
        I = s.link,
        w = "".concat(d.prefix[this.pageType], ".content.").concat(r, "_tap");
      this.$emit("commentReport", {
        eventName: w,
        data: { postid: (null == a ? void 0 : a.id) || "", stockid: l || "" },
      });
      var b = (I && I.data) || {},
        _ = b.hyperH5Url,
        x = b.hyperHybirdUrl,
        N = "wzq" === c.platform ? _ : x,
        k = {
          stockdetail: d.toStockDetail(l, h),
          strategy: d.toShyDetail({ id: u, pageType: this.pageType }),
          person: d.toPerson(g),
          topic: d.toShyTopic(y),
          live: d.toLive(T),
          chaolian: N,
        },
        D = l && l.substr(0, 2);
      if (
        ("wzq" === c.platform || c.IsMINAPP) &&
        ("stockjj" === r ||
          (-1 !== ["fu", "gn", "ft", "fx", "jj"].indexOf(D) &&
            "ftDAX30" !== l &&
            "fuCN" !== l) ||
          -1 !== ["hd"].indexOf(D))
      )
        return "mini" === c.platform
          ? void f("该行情仅自选股App可看")
          : void this.goAppStock({ symbol: l, name: m.text || m.name });
      if (Object.keys(k).includes(r)) {
        var P = {
          platform: c.platform,
          url: k[r],
          eventName: r,
          symbol: l,
          topicId: y,
          chaolian: N,
          userId: g,
          liveid: T,
          instance: this,
          text: h,
          pageType: this.pageType,
        };
        "miniapp" === this.from && c.IsMINAPP ? p.goPageCommon(P) : v(P);
      }
    },
    onTapShowBox: function (e, t, n) {
      var o = n.pageType,
        a = e || {},
        i = a.eventName,
        r = a.eventData || {},
        m = r.stock_id,
        s = r.stock_name,
        l = r.topic_id,
        h = r.topic_name,
        f = r.url;
      "web" === c.platform && this.$emit("onTapShowBox", e);
      var g = {
          p_showNav: !0,
          p_key: "com.tencent.shy.commentSystem",
          p_url: "comment-comment?symbol=".concat(m, "&name=").concat(s),
          p_title: "",
        },
        y = { url: f, stock: d.toShyCommon(g), topic: d.toShyTopic(l) };
      if (Object.keys(y).includes(i)) {
        var T = ""
          .concat(d.prefix[o], ".")
          .concat(d.sourceBoxMap[i] || d.moduleName, ".source_tap");
        this.$emit("commentReport", T, { topicId: l, topicName: h });
        var I = {
          url: y[i],
          eventName: i,
          topicName: h,
          symbol: m,
          topicId: l,
          instance: this,
          name: s,
        };
        "miniapp" === this.from && c.IsMINAPP ? p.goPageCommon(I) : v(I),
          u({ eventName: T });
      }
    },
    onToggleShow: function (e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        o = n.newsCommentId,
        a = void 0 === o ? "" : o,
        i = e.showType,
        r = this.commentsData[t] || {},
        m = r.detailInfo,
        s = this.commentsData[t] || {},
        l = s.id;
      "turnShort" === i && (l = null == m ? void 0 : m.id);
      var h = "".concat(d.prefix[this.pageType], ".content.quanwen_tap");
      this.$emit("commentReport", h);
      var u = { id: l, newsCommentId: a, pageType: this.pageType },
        f = {
          url: d.toShyDetail(u),
          eventName: "detail",
          itemId: l,
          instance: this,
          newsCommentId: a,
          pageType: this.pageType,
        };
      "miniapp" === this.from && c.IsMINAPP ? p.goPageCommon(f) : v(f);
    },
    onTapOtherSource: function (e) {
      e.newsFrom;
      var t = e.newsid,
        n = (e.link, e.itemData),
        o = n || {},
        a =
          (o.title,
          o.stock_id,
          2 == +o.special_type ? "morningReport" : "news");
      27 == +o.news_type && (a = "aiFinancialReport");
      var i = { eventName: a, itemId: (n || {}).id, newsid: t, instance: this };
      p.goPageCommon(i);
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
      "miniapp" === this.from && c.IsMINAPP ? p.goPageCommon(o) : v(o);
    },
    commentReport: function (e) {
      this.$emit("commentReport", e);
    },
    platformType: function () {
      return c.platform, "";
    },
    goAppStock: function (e) {
      var t = this,
        n = e.symbol;
      this.hqBridge &&
        this.hqBridge
          .getInstallState({
            packageName: "com.tencent.portfolio",
            packageUrl: "qqstock://qqstockweixincallback",
          })
          .then(function (e) {
            if (e)
              try {
                t.hqBridge.launch3rdApp({
                  appid: "wx9cf8c670ebd68ce4",
                  appid_3rd: "wxcbc3ab3807acb685",
                  name: "com.tencent.portfolio",
                  sign: "98a6788beeaeaa9446e0a7d146d222be",
                  param: "wxwzq",
                  url: n ? "qqstock://detailstock/".concat(n) : "",
                });
              } catch (e) {
                t.hqBridge.openExtraWebview(
                  "https://gu.qq.com/resource/jump/m.htm?immediate=0&number=2001"
                );
              }
            else
              g({ content: "前往下载腾讯自选股" }).then(function () {
                t.currentDeviceIsiOS()
                  ? (location.href =
                      "https://itunes.apple.com/us/app/id485653572?ls=1&mt=8")
                  : (location.href =
                      "https://gu.qq.com/resource/jump/m.htm?immediate=0&number=18");
              });
          });
    },
    currentDeviceIsiOS: function () {
      return m.wx$1.getSystemInfoSync().system.indexOf("iOS") >= 0;
    },
  };
exports.store = y;
