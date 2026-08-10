var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  a = function (e, n, r) {
    return n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[n] = r);
  },
  i = function (t, i) {
    for (var c in i || (i = {})) r.call(i, c) && a(t, c, i[c]);
    if (n) {
      var u,
        m = e(n(i));
      try {
        for (m.s(); !(u = m.n()).done; ) {
          c = u.value;
          o.call(i, c) && a(t, c, i[c]);
        }
      } catch (e) {
        m.e(e);
      } finally {
        m.f();
      }
    }
    return t;
  },
  c = require("../../../../../../common/vendor.js"),
  u = require("../../../stock-community-base/utils/api/index.js"),
  m = require("../../utils/interaction-help.js");
require("../../../stock-community-base/utils/knife.js"),
  require("../../../stock-community-base/utils/constant.js"),
  require("../../../stock-hq-data/api/hostConfig.js");
var l = require("help.js"),
  s = require("../../../stock-news-core/utils/force2https.js"),
  d = u.api.goPageCommon,
  p = u.api.goPageCommon,
  v = u.api.goPageCommon,
  f = {
    components: {},
    props: {
      reportPrefix: { type: String, default: "" },
      reportWithParams: {
        type: Object,
        default: function () {
          return {};
        },
      },
      itemIndex: { type: Number, default: 0 },
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      itemType: { type: String, default: "" },
    },
    setup: function (e) {
      var t,
        n = c.getCurrentInstance().proxy || c.getCurrentInstance();
      return (
        (t =
          e.itemType === l.IteractionItemType.COMMENT
            ? (function (e, t) {
                var n = e.reportPrefix,
                  r = c.computed(function () {
                    var t;
                    return (
                      (null == (t = e.itemData) ? void 0 : t.user_image) ||
                      "https://mat1.gtimg.com/finance/images/stock/p/xcx/6bacbb862beefac2.png"
                    );
                  }),
                  o = c.computed(function () {
                    var t;
                    return (
                      (null == (t = e.itemData) ? void 0 : t.user_name) || ""
                    );
                  }),
                  a = c.computed(function () {
                    var t, n;
                    return (
                      (null == (t = e.itemData) ? void 0 : t.vip_type) ||
                      (null == (n = e.itemData) ? void 0 : n.from_vip_type) ||
                      ""
                    );
                  }),
                  u = c.computed(function () {
                    var t, n, r;
                    return (
                      1 ===
                        (null == (t = e.itemData) ? void 0 : t.is_yb_answer) &&
                      (null == (n = e.itemData) ? void 0 : n.yb_disclaimer) &&
                      (null == (r = e.itemData)
                        ? void 0
                        : r.yb_disclaimer.length) > 0
                    );
                  }),
                  l = c.computed(function () {
                    var t,
                      n,
                      r,
                      o,
                      a,
                      i =
                        (null ==
                        (n = null == (t = e.itemData) ? void 0 : t.replyTo)
                          ? void 0
                          : n.text) ||
                        (null ==
                        (a =
                          null ==
                          (o = null == (r = e.itemData) ? void 0 : r.detailInfo)
                            ? void 0
                            : o.replyTo)
                          ? void 0
                          : a.text);
                    return i ? "回复了".concat(i, ":") : "";
                  }),
                  s = c.computed(function () {
                    return m.getCommentContentStr(e.itemData);
                  }),
                  p = c.computed(function () {
                    return m.getCommentFormatDate(e.itemData);
                  }),
                  v = c.computed(function () {
                    return m.getPostContentImg(e.itemData);
                  }),
                  f = c.computed(function () {
                    return m.getPostContentStr(e.itemData);
                  }),
                  g = c.inject("stockBridge"),
                  D = c.computed(function () {
                    return i({ positionid: e.itemIndex }, e.reportWithParams);
                  });
                return {
                  headImg: r,
                  userName: o,
                  userType: a,
                  replyName: l,
                  isYbAnswer: u,
                  replyMessage: s,
                  commentDate: p,
                  sourceImg: v,
                  sourceContent: f,
                  onItemClick: function () {
                    var r, o;
                    g.report("".concat(n, ".item_click"), D.value),
                      e.itemData && e.itemData.is_wx_long
                        ? g.toast("请到自选股APP查看原文", "none")
                        : d({
                            eventName: "detail",
                            itemId:
                              (null == (r = e.itemData)
                                ? void 0
                                : r.subject_id) || "",
                            anchorId:
                              null == (o = e.itemData) ? void 0 : o.comment_id,
                            instance: t,
                          });
                  },
                  onHeadClick: function () {
                    var r;
                    g.report("".concat(n, ".head_click"), D.value);
                    var o = {
                      eventName: "person",
                      userId:
                        (null == (r = e.itemData) ? void 0 : r.user_id) || "",
                      instance: t,
                    };
                    d(o);
                  },
                };
              })(e, n)
            : e.itemType === l.IteractionItemType.LIKE
            ? (function (e, t) {
                var n = e.reportPrefix,
                  r = c.computed(function () {
                    var t;
                    return (
                      (null == (t = e.itemData) ? void 0 : t.user_image) ||
                      "https://mat1.gtimg.com/finance/images/stock/p/xcx/6bacbb862beefac2.png"
                    );
                  }),
                  o = c.computed(function () {
                    var t;
                    return (
                      (null == (t = e.itemData) ? void 0 : t.user_name) || ""
                    );
                  }),
                  a = c.computed(function () {
                    return "";
                  }),
                  u = c.computed(function () {
                    return m.isMainPost(e.itemData)
                      ? "赞了你的帖子"
                      : "赞了你的评论";
                  }),
                  l = c.computed(function () {
                    return m.getCommentFormatDate(e.itemData);
                  }),
                  s = c.computed(function () {
                    return m.getPostContentImg(e.itemData);
                  }),
                  d = c.computed(function () {
                    return m.getPostContentStr(e.itemData, !0);
                  }),
                  v = c.inject("stockBridge"),
                  f = c.computed(function () {
                    return i({ positionid: e.itemIndex }, e.reportWithParams);
                  });
                return {
                  headImg: r,
                  userName: o,
                  replyName: a,
                  replyMessage: u,
                  commentDate: l,
                  sourceImg: s,
                  sourceContent: d,
                  onItemClick: function () {
                    var r, o;
                    v.report("".concat(n, ".item_click"), f.value),
                      e.itemData && e.itemData.is_wx_long
                        ? v.toast("请到自选股APP查看原文", "none")
                        : p({
                            eventName: "detail",
                            itemId:
                              (null ==
                              (o =
                                null == (r = e.itemData)
                                  ? void 0
                                  : r.detailInfo)
                                ? void 0
                                : o.subject_id) || "",
                            instance: t,
                          });
                  },
                  onHeadClick: function () {
                    var r;
                    v.report("".concat(n, ".head_click"), f.value);
                    var o = {
                      eventName: "person",
                      userId:
                        (null == (r = e.itemData) ? void 0 : r.user_id) || "",
                      instance: t,
                    };
                    p(o);
                  },
                };
              })(e, n)
            : e.itemType === l.IteractionItemType.HOTISSUESHARE
            ? (function (e) {
                var t = e.reportPrefix,
                  n = c.computed(function () {
                    var t;
                    return (
                      (null == (t = e.itemData) ? void 0 : t.click_avatar) ||
                      "https://pic.finance.qq.com/user/headimg/28248877c306c0214e45e00067c184cc"
                    );
                  }),
                  r = c.computed(function () {
                    var t;
                    return (
                      (null == (t = e.itemData) ? void 0 : t.click_nick) || ""
                    );
                  }),
                  o = c.computed(function () {
                    return "";
                  }),
                  a = c.computed(function () {
                    return "查看了你的分享";
                  }),
                  u = c.computed(function () {
                    return m.getCommentFormatDate(e.itemData);
                  }),
                  l = c.computed(function () {
                    var t;
                    return (null == (t = e.itemData) ? void 0 : t.bg_url) || "";
                  }),
                  s = c.computed(function () {
                    return m.getPostContentStr(e.itemData, !0);
                  }),
                  d = c.inject("stockBridge"),
                  p = c.computed(function () {
                    return i({ positionid: e.itemIndex }, e.reportWithParams);
                  });
                return {
                  headImg: n,
                  userName: r,
                  replyName: o,
                  replyMessage: a,
                  commentDate: u,
                  sourceImg: l,
                  sourceContent: s,
                  onItemClick: function () {
                    var n;
                    d.report("".concat(t, ".item_click"), p.value),
                      c.StockRouter.routeTo({
                        name: "discoverEventDetail",
                        query: {
                          event_id:
                            null == (n = e.itemData) ? void 0 : n.event_id,
                        },
                      });
                  },
                  onHeadClick: function () {
                    var n;
                    d.report("".concat(t, ".head_click"), p.value),
                      c.StockRouter.routeTo({
                        name: "discoverEventDetail",
                        query: {
                          event_id:
                            null == (n = e.itemData) ? void 0 : n.event_id,
                        },
                      });
                  },
                };
              })(e)
            : (function (e, t) {
                var n = e.reportPrefix,
                  r = c.computed(function () {
                    var t;
                    return (
                      (null == (t = e.itemData) ? void 0 : t.user_image) ||
                      "https://mat1.gtimg.com/finance/images/stock/p/xcx/6bacbb862beefac2.png"
                    );
                  }),
                  o = c.computed(function () {
                    var t;
                    return (
                      (null == (t = e.itemData) ? void 0 : t.user_name) || ""
                    );
                  }),
                  a = c.computed(function () {
                    return "";
                  }),
                  u = c.computed(function () {
                    return "在帖子中@了你";
                  }),
                  l = c.computed(function () {
                    return m.getCommentFormatDate(e.itemData);
                  }),
                  s = c.computed(function () {
                    return m.getPostContentImg(e.itemData);
                  }),
                  d = c.computed(function () {
                    return m.getPostContentStr(e.itemData);
                  }),
                  p = c.inject("stockBridge"),
                  f = c.computed(function () {
                    return i({ positionid: e.itemIndex }, e.reportWithParams);
                  });
                return {
                  headImg: r,
                  userName: o,
                  replyName: a,
                  replyMessage: u,
                  commentDate: l,
                  sourceImg: s,
                  sourceContent: d,
                  onItemClick: function () {
                    var r, o;
                    p.report("".concat(n, ".item_click"), f.value),
                      e.itemData && e.itemData.is_wx_long
                        ? p.toast("请到自选股APP查看原文", "none")
                        : v({
                            eventName: "detail",
                            itemId:
                              (null ==
                              (o =
                                null == (r = e.itemData)
                                  ? void 0
                                  : r.detailInfo)
                                ? void 0
                                : o.subject_id) || "",
                            instance: t,
                          });
                  },
                  onHeadClick: function () {
                    var r;
                    p.report("".concat(n, ".head_click"), f.value);
                    var o = {
                      eventName: "person",
                      userId:
                        (null == (r = e.itemData) ? void 0 : r.user_id) || "",
                      instance: t,
                    };
                    v(o);
                  },
                };
              })(e, n)),
        i({ forceHttpsAdvanced: s.forceHttpsAdvanced }, t)
      );
    },
  },
  g = c._export_sfc(f, [
    [
      "render",
      function (e, t, n, r, o, a) {
        return c.e(
          {
            a: r.forceHttpsAdvanced(e.headImg || ""),
            b: c.o(function () {
              return e.onHeadClick && e.onHeadClick.apply(e, arguments);
            }, 4879),
            c: c.n(2 === e.userType ? "vip" : ""),
            d: c.n(1001 === e.userType ? "personal vip" : ""),
            e: c.n(1002 === e.userType ? "enterprise vip" : ""),
            f: c.t(e.userName),
            g: e.replyName,
          },
          e.replyName ? { h: c.t(e.replyName) } : {},
          {
            i: c.t(e.replyMessage),
            j: c.n(e.isYbAnswer ? "reply-container-additional" : ""),
            k: e.isYbAnswer,
          },
          e.isYbAnswer ? { l: c.t(n.itemData.yb_disclaimer) } : {},
          { m: c.t(e.commentDate), n: e.sourceImg },
          e.sourceImg
            ? { o: r.forceHttpsAdvanced(e.sourceImg || "") }
            : { p: c.t(e.sourceContent) },
          {
            q: c.o(function () {
              return e.onItemClick && e.onItemClick.apply(e, arguments);
            }, 4880),
            r: "intercation-item-".concat(n.itemData.created_at),
          }
        );
      },
    ],
    ["__scopeId", "data-v-b36d45e3"],
  ]);
wx.createComponent(g);
