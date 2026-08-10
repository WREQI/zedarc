var e = require("./knife.js");
/mac/g.test(((navigator && navigator.userAgent) || "").toLowerCase());
var t = (navigator && navigator.userAgent) || "",
  o = /\bAndroid([^;]+)/.test(t),
  n = /\b(iPad|iPhone|iPod)\b.*? OS ([\d_]+)/.test(t);
(exports.NEW_STATIC_URL = "https://dlied5.qq.com/zixuangu/pkg/community/"),
  (exports.commentSpecialStatus = [2, 3, 1e3]),
  (exports.defaultAvatar =
    "https://st.gtimg.com/design/165ac65f41c4706b2cadf02428bd9eed.png"),
  (exports.defaultAvatarColorful =
    "https://st.gtimg.com/design/e61c08f09b687e141e569a12997c1e6c.png"),
  (exports.fatieqiOperate = [
    "putSubject",
    "putComment",
    "putTurn",
    "putPeply",
    "turn",
    "turnNews",
  ]),
  (exports.headimgurl =
    "https://thirdwx.qlogo.cn/mmopen/vi_32/ajNVdqHZLLCd0MCMyKpiaHBAwOIbFDPQubgcIChGSfh3evrA5mo1iaZib6k7MkoiczxdkI7Zibp0tib9DgcdMhykHYfg/132"),
  (exports.isAndroid = o),
  (exports.isIOS = n),
  (exports.moduleName = "comment_area"),
  (exports.modules = {
    news: "zuixinpinglun_zuixinpinglun",
    personal: "opinion_list",
    stockbasket: "detail",
    stockmpdetail: "detail",
    commentDetail: "comment-detail",
    discoveryevent: "event-detail",
  }),
  (exports.opeAuditCommentTextMap = {
    2: "亲，帖子正在审核中，暂时不支持转评赞等操作~",
    3: "该帖可能含有违规内容，容易被他人误读/误解，暂时不支持转评赞等操作",
    1e3: "亲，帖子正在审核中，暂时不支持转评赞等操作~",
  }),
  (exports.opeOwnerVisibleCommentTextMap = {
    2: "帖子正在审核中，暂时限制了展示",
    3: "帖子可能含有违规内容，暂时限制了展示",
    1e3: "帖子正在审核中，暂时限制了展示",
  }),
  (exports.operateMap = {
    putSubject: "subject_add",
    putTurn: "tran_comment",
    turn: "tran_subject",
    putComment: "comment_add",
    putPeply: "comment_add",
    putLike: "like_add",
    tapLike: "like_add",
    tapFollow: "follow_add",
    tapUnfollow: "follow_del",
    turnNews: "tran_news",
  }),
  (exports.postOperate = [
    "putComment",
    "putPeply",
    "putTurn",
    "turn",
    "putLike",
    "tapLike",
  ]),
  (exports.prefix = {
    stgy: "xg.index",
    fund: "xj.index",
    news: "shequ_zixun",
    personal: "personal_home_page",
    square: "shequ_shouye_guangchang",
    friends: "shequ_shouye_guyouquan",
    detail: "shequ_detail",
    stock: "shequ_gegu",
    topic: "shequ_huati",
    newbie: "shequ_huati",
    earn: "earn_comment",
    index: "shequ_shouye",
    hqStock: "hq_shequ_gegu",
    share: "shequ_shouye_share",
    qqmac: "qqmac_shequ",
    dailyStock: "shequ_gegu",
    basketcolumn: "basket_column",
    stockbasket: "hq_basket",
    stockmpdetail: "hq_quote",
    discovery: "news.discover",
    commentDetail: "shequ",
    discoveryevent: "news.eventdetail",
  }),
  (exports.shareH5 = function (e, t) {
    return "https://gu.qq.com/community/comment/index.html#/comment-detail-detail?inApp=0&nid="
      .concat(e, "&newsCommentId=")
      .concat(t, "&_tentrees_trans=0");
  }),
  (exports.sourceBoxMap = { stock: "comment_area", topic: "topic" }),
  (exports.toApeal = function () {
    return "qqstock://CommunityAppeal";
  }),
  (exports.toLive = function (e) {
    return "qqstock://liveView/".concat(e);
  }),
  (exports.toPerson = function (e) {
    return "qqstock://CommunityUserCenter/?info=".concat(
      encodeURIComponent(JSON.stringify({ personid: e }))
    );
  }),
  (exports.toProfilePop = function (e) {
    var t = e.title,
      o = e.avatar,
      n = e.name,
      i = e.desc;
    return "qqstock://GlobalPopDialog?info=".concat(
      encodeURIComponent(
        JSON.stringify({
          action: "editProfile",
          title: t,
          avatar: o,
          name: n,
          desc: i,
        })
      )
    );
  }),
  (exports.toShyCommon = function (e) {
    return "qqstock://SHY?info=".concat(encodeURIComponent(JSON.stringify(e)));
  }),
  (exports.toShyDetail = function (e) {
    var t = e.id,
      o = e.event,
      n = void 0 === o ? "" : o,
      i = e.needAnchor,
      a = void 0 !== i && i,
      c = e.newsCommentId,
      s = e.topTag,
      r = e.pageType,
      p = e.gdId,
      u = void 0 === p ? "" : p,
      d = e.yb_scene,
      m = void 0 === d ? "" : d,
      l = e.yb_scene_id,
      _ = void 0 === l ? "" : l;
    return "qqstock://SHY?info=".concat(
      encodeURIComponent(
        JSON.stringify({
          p_showNav: !0,
          p_key: "com.tencent.shy.commentSystem",
          p_url: "comment-detail-detail?nid="
            .concat(t, "&event=")
            .concat(n, "&needAnchor=")
            .concat(a, "&newsCommentId=")
            .concat(c, "&belong=")
            .concat(r, "&topTag=")
            .concat(s, "&gdId=")
            .concat(u, "&yb_scene=")
            .concat(m, "&yb_scene_id=")
            .concat(_),
          p_title: "",
        })
      )
    );
  }),
  (exports.toShyTopic = function (t, o) {
    var n = e.buildUrl("topic-topic", { topicid: t, selection: o });
    return "qqstock://SHY?info=".concat(
      encodeURIComponent(
        JSON.stringify({
          p_showNav: !0,
          p_key: "com.tencent.shy.commentSystem",
          p_url: n,
          p_title: "",
        })
      )
    );
  }),
  (exports.toStockDetail = function (e, t) {
    return "qqstock://StockDetail?info=".concat(
      encodeURIComponent(
        JSON.stringify({
          code: e,
          name: t,
          pre_page_event: "community_square_entry",
          showNav: !0,
        })
      )
    );
  }),
  (exports.toWebPage = function (e) {
    return "qqstock://WebBrowser?info=".concat(
      encodeURIComponent(
        JSON.stringify({ p_url: e, StockWebviewJSBridgeEnabled: !0 })
      )
    );
  }),
  (exports.writeOperate = [
    "putSubject",
    "putComment",
    "putTurn",
    "putLike",
    "tapLike",
    "tapFollow",
    "tapUnfollow",
    "putPeply",
    "turn",
    "turnNews",
  ]);
