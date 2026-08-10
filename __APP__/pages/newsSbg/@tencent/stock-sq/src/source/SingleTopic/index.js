var t = require("../../../../stock-community-base/utils/constant.js"),
  a = require("../../../../stock-community-base/utils/knife.js"),
  e = require("../../../../../../../common/vendor.js"),
  o = {},
  i = {},
  c = {
    name: "SingleTopic",
    props: {
      topicData: { type: Object, default: function () {} },
      readNum: { type: Number, default: 0 },
      isAndroid: { type: Boolean, default: !1 },
      theme: { type: String, default: "" },
      pageType: { type: String, default: "" },
    },
    data: function () {
      return { NEW_STATIC_URL: t.NEW_STATIC_URL, platform: a.platform };
    },
    created: function () {
      if ("relatedTopic" === this.topicData.type) {
        var a = "".concat(
          t.prefix[this.pageType],
          ".feedsbanner_relatedTopic_expouse"
        );
        this.$emit("commentReport", a);
      }
    },
    mounted: function () {
      this.adaptTopicBox();
    },
    components: {},
    computed: {
      isMacOrIpadApp: function () {
        return o.IS_ZXG && (o.IS_ZXG_IMAC || i.ipad);
      },
      comCount: function () {
        var t, a;
        return (
          (null ==
          (a = null == (t = this.topicData) ? void 0 : t.banner_comment)
            ? void 0
            : a.count) || 0
        );
      },
      topicPic: function () {
        var t =
          this.topicData.pic ||
          "".concat(
            this.NEW_STATIC_URL,
            "3ae430b241cb42f59cfb7a6879023fae.png"
          );
        return "relatedTopic" === this.topicData.type
          ? (t =
              "https://st.gtimg.com/design/e8170cd9842d4758d68d6d2680835ea3.png")
          : "black" === this.theme && "miniapp" !== this.topicData.type
          ? t.replace(/\.png$/, "-black.png")
          : t;
      },
      viewColor: function () {
        var t = ["#FF7070", "#4E6DFF", "#3889FF", "#2398DA", "#398BFF"];
        return t[+this.topicData.bg_color] || t[1];
      },
      textFormat: function () {
        return function (t, a) {
          if ("post" === t) return "阅读数 ".concat(this.formatView(a));
          if ("relatedTopic" === t) {
            var e = "".concat(this.formatView(a), "次阅读"),
              o = "".concat(this.formatView(this.comCount), "条讨论");
            return ""
              .concat(a ? e : "")
              .concat(a && this.comCount ? "，" : "")
              .concat(this.comCount ? o : "");
          }
          return "共 ".concat(this.formatView(a), " 条讨论");
        };
      },
    },
    methods: {
      formatView: function (t) {
        return a.formatView(t);
      },
      adaptTopicBox: function () {
        var t = this.$el.querySelector(".topic-box");
        if (t) {
          var a = this.topicPic,
            e = new Image();
          (e.src = a),
            (e.onload = function () {
              var o = e.width / e.height,
                i = t.offsetWidth / o;
              (t.style.height = "".concat(i, "px")),
                (t.style.backgroundImage = "url(".concat(a, ")"));
            });
        }
      },
    },
  },
  p = e._export_sfc(c, [
    [
      "render",
      function (t, a, o, i, c, p) {
        return e.e(
          { a: "relatedTopic" !== o.topicData.type && p.isMacOrIpadApp },
          "relatedTopic" !== o.topicData.type && p.isMacOrIpadApp
            ? {
                b: "url(".concat(p.topicPic, ")"),
                c: "url(".concat(p.topicPic, ")"),
              }
            : e.e(
                {
                  d: e.t(o.topicData.word),
                  e: e.n(
                    "relatedTopic" === o.topicData.type
                      ? "top-title-small"
                      : "top-title"
                  ),
                  f: e.n(o.isAndroid ? "android" : ""),
                  g: o.readNum && "relatedTopic" !== o.topicData.type,
                },
                o.readNum && "relatedTopic" !== o.topicData.type
                  ? {
                      h: e.t(p.textFormat(o.topicData.type, o.readNum)),
                      i: p.viewColor,
                    }
                  : {},
                {
                  j: e.n(
                    "relatedTopic" === o.topicData.type ? "top-box-small" : ""
                  ),
                  k: "relatedTopic" === o.topicData.type,
                },
                "relatedTopic" === o.topicData.type
                  ? e.e(
                      {
                        l: e.t("# " + o.topicData.title),
                        m: o.topicData.sub_title,
                      },
                      o.topicData.sub_title
                        ? { n: e.t("# " + o.topicData.sub_title) }
                        : {}
                    )
                  : {
                      o: e.t(o.topicData.title),
                      p: e.t(o.topicData.sub_title),
                    },
                { q: "relatedTopic" === o.topicData.type },
                "relatedTopic" === o.topicData.type
                  ? { r: e.t(p.textFormat(o.topicData.type, o.readNum)) }
                  : {},
                { s: "relatedTopic" !== o.topicData.type },
                (o.topicData.type, {}),
                {
                  t: e.n(
                    "relatedTopic" === o.topicData.type
                      ? "topic-box-small"
                      : "topic-box"
                  ),
                  v: e.n("wzq" !== c.platform ? "notWzq" : ""),
                  w: e.n(o.isAndroid ? "android" : ""),
                  x: "url(".concat(p.topicPic, ")"),
                }
              ),
          { y: "relatedTopic" === o.topicData.type },
          (o.topicData.type, {}),
          { z: e.n("black" === o.theme ? "black" : "") }
        );
      },
    ],
    ["__scopeId", "data-v-81dbaa29"],
  ]);
wx.createComponent(p);
