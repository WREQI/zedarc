var t = require("../../../../../common/vendor.js"),
  e = {
    name: "McpQuoteItem",
    props: {
      mcpQuote: {
        required: !1,
        type: String,
        default: "正在检索腾讯金融数据库...",
      },
      reply: { required: !1, type: String, default: "" },
      factInnerDocs: { required: !0, type: Array },
      factOuterDocs: { required: !0, type: Array },
    },
    data: function () {
      return {
        titleStr: "",
        arrowIconImage:
          "https://st.gtimg.com/design/3554240d56e5e6647e543bb5e0fbd279.png",
        hideDetail: !1,
        showOuterDocs: !1,
        zxgDocs: [],
        outerDocs: [],
        isHasInnerDocs: !1,
        isHasOuterDocs: !1,
        allOuterLinks: !1,
      };
    },
    watch: {
      mcpQuote: {
        handler: function (t, e) {
          this.mcpQuote && this.mcpQuote.endsWith("...")
            ? (this.titleStr = this.mcpQuote.slice(0, -3))
            : (this.titleStr = this.mcpQuote);
        },
        immediate: !0,
      },
      factInnerDocs: {
        handler: function (t) {
          var e;
          this.isHasInnerDocs =
            (null == (e = this.factInnerDocs) ? void 0 : e.length) > 0;
        },
        immediate: !0,
      },
      factOuterDocs: {
        handler: function (t) {
          var e,
            s,
            o = this;
          (null == (e = this.factOuterDocs) ? void 0 : e.length) > 0
            ? ((this.isHasOuterDocs = !0),
              (this.zxgDocs = []),
              (this.outerDocs = []),
              this.factOuterDocs.forEach(function (t) {
                null != t.reference_url &&
                (t.reference_url.startsWith("https://gu.qq.com/") ||
                  t.reference_url.startsWith("http://gu.qq.com/"))
                  ? o.zxgDocs.push(t)
                  : o.outerDocs.push(t);
              }),
              this.outerDocs.length ===
                (null == (s = this.factOuterDocs) ? void 0 : s.length) &&
                ((this.isHasOuterDocs = !1),
                (this.allOuterLinks = !0),
                (this.titleStr = "引用".concat(
                  this.outerDocs.length,
                  "篇站外资料"
                ))))
            : (this.isHasOuterDocs = !1);
        },
        immediate: !0,
      },
    },
    computed: {
      canShowLoading: function () {
        return !(
          !this.mcpQuote ||
          !this.mcpQuote.endsWith("...") ||
          "" !== this.reply
        );
      },
      getArrowIconRotate: function () {
        return this.showOuterDocs ? "rotateArrowIcon" : "defaultArrowIcon";
      },
      manuStop: function () {
        return "已暂停生成" === this.reply;
      },
      hasDocsData: function () {
        return this.isHasInnerDocs || this.isHasOuterDocs;
      },
    },
    methods: {
      getQuoteContentList: function () {
        return this.showOuterDocs ? "showQuote" : "goneQuote";
      },
      toggleListDetail: function () {
        this.allOuterLinks ||
          (!1 === this.showOuterDocs
            ? (this.showOuterDocs = !0)
            : (this.showOuterDocs = !1));
      },
    },
  },
  s = t._export_sfc(e, [
    [
      "render",
      function (e, s, o, r, n, i) {
        return t.e(
          { a: !i.manuStop },
          i.manuStop
            ? {}
            : t.e(
                {
                  b: t.t(n.titleStr),
                  c: t.o(function (t) {
                    return i.toggleListDetail();
                  }, 5014),
                  d: i.hasDocsData && !n.allOuterLinks,
                },
                i.hasDocsData && !n.allOuterLinks
                  ? {
                      e: n.arrowIconImage,
                      f: t.o(function (t) {
                        return i.toggleListDetail();
                      }, 5015),
                      g: t.n(i.getArrowIconRotate),
                    }
                  : {},
                { h: i.canShowLoading },
                (i.canShowLoading, {})
              ),
          { i: n.isHasInnerDocs || n.isHasOuterDocs },
          n.isHasInnerDocs || n.isHasOuterDocs
            ? t.e(
                { j: n.isHasInnerDocs },
                n.isHasInnerDocs
                  ? {
                      k: t.f(o.factInnerDocs, function (e, s, o) {
                        return { a: t.t(s + 1 + ". " + e.reference), b: s };
                      }),
                    }
                  : n.isHasOuterDocs
                  ? t.e(
                      {
                        m: t.f(n.zxgDocs, function (e, s, o) {
                          return {
                            a: t.t(s + 1 + ". " + e.reference_title),
                            b: s,
                            c: t.n(
                              void 0 === e.reference_url ||
                                0 === e.reference_url.length
                                ? "quoteContentListItemDisable"
                                : ""
                            ),
                          };
                        }),
                        n: n.outerDocs.length > 0,
                      },
                      n.outerDocs.length > 0
                        ? { o: t.t("及" + n.outerDocs.length + "篇站外资料") }
                        : {}
                    )
                  : {},
                {
                  l: n.isHasOuterDocs,
                  p: t.n(n.outerDocs.length > 0 ? "hasLastLineStyle" : ""),
                  q: t.n(i.getQuoteContentList()),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-1d648dcd"],
  ]);
wx.createComponent(s);
