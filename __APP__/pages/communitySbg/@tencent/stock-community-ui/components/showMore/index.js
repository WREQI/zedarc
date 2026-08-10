var e = require("../../../stock-community-base/utils/knife.js"),
  t = require("../../../../../../common/vendor.js"),
  o = {
    name: "showMore",
    components: {},
    props: {
      showType: { type: String, default: "" },
      pageType: { type: String, default: "" },
      lineClamp: { type: Number, default: 0 },
    },
    data: function () {
      return {
        hasShowMore: !1,
        isFolded: !1,
        foldH: "auto",
        ele: null,
        eleH: "",
        eleLH: "",
        eleFS: "",
        eleColor: "",
        moreW: "",
      };
    },
    computed: {
      showLine: function () {
        return this.lineClamp > 0
          ? this.lineClamp
          : {
              long: 3,
              turn: 6,
              turnNews: 6,
              turnShort: 6,
              short: 6,
              reply: 4,
              comment: 2,
              turnLog: 1,
              desc: 3,
            }[this.showType] || 0;
      },
      onlyEllipsis: function () {
        return -1 !== ["long"].indexOf(this.showType);
      },
      foldedAndShow: function () {
        return -1 !== ["turn", "turnLog"].indexOf(this.showType);
      },
      onlyFolded: function () {
        return (
          -1 !==
          ["short", "turn", "turnNews", "turnShort"].indexOf(this.showType)
        );
      },
      showBR: function () {
        return -1 !== ["short"].indexOf(this.showType);
      },
      showText: function () {
        return (
          {
            short: "全文",
            turn: "全文",
            turnNews: "全文",
            turnShort: "全文",
            turnLog: "展开更多",
          }[this.showType] || "展开"
        );
      },
      hideText: function () {
        return { turn: "收起更多" }[this.showType] || "收起";
      },
      shadowColor: function () {
        return (
          { comment: "#F5F6FA", turnShort: "#F5F6FA" }[this.showType] ||
          "#FFFFFF"
        );
      },
    },
    methods: {
      initShowMore: function (t) {
        var o = this;
        if (this.showLine)
          if (t)
            if (((this.ele = t), this.onlyEllipsis))
              (t.style.whiteSpace = "normal"),
                (t.style.wordWrap = "break-word"),
                (t.style.wordBreak = "break-all"),
                (t.style.display = "-webkit-box"),
                (t.style.WebkitBoxOrient = "vertical"),
                (t.style.WebkitLineClamp = +this.showLine),
                (t.style.overflow = "hidden");
            else {
              if (
                ((this.hasShowMore = !1),
                (t.style.opacity = 0),
                (t.style.position = ""),
                (t.style.height = ""),
                (t.style.overflow = ""),
                (this.eleH = Math.floor(
                  e.getCurrentStyle(this.ele, "height").replace("px", "")
                )),
                0 == +this.eleH)
              )
                return void setTimeout(function () {
                  o.initShowMore(t);
                }, 300);
              var s = t.querySelector("span");
              s &&
                ((this.eleLH = Math.floor(
                  e.getCurrentStyle(s, "line-height").replace("px", "")
                )),
                (this.eleFS = Math.floor(
                  e.getCurrentStyle(s, "font-size").replace("px", "")
                )),
                (this.eleColor = e
                  .getCurrentStyle(s, "color")
                  .replace("px", ""))),
                (this.foldH = this.eleLH * +this.showLine),
                isNaN(this.eleLH) && (this.eleLH = ""),
                isNaN(this.eleFS) && (this.eleFS = ""),
                isNaN(this.eleColor) && (this.eleColor = ""),
                +this.eleH > +this.foldH + 10 &&
                  ((this.hasShowMore = !0),
                  (this.isFolded = !0),
                  this.$nextTick(function () {
                    (o.ele.style.position = "relative"),
                      (o.ele.style.height = "".concat(o.foldH, "px")),
                      (o.ele.style.lineHeight = "".concat(o.eleLH, "px")),
                      (o.ele.style.overflow = "hidden"),
                      (o.$refs.showMore.style.fontSize = o.eleFS - 1 + "px"),
                      (o.$refs.showMore.style.lineHeight = "".concat(
                        o.eleLH,
                        "px"
                      )),
                      (o.$refs.showMore.style.top =
                        o.eleLH * (o.showLine - 1) + "px");
                  })),
                (t.style.opacity = 1);
            }
          else
            setTimeout(function () {
              o.initShowMore(t);
            }, 300);
      },
      toggleShow: function (e) {
        var t = this;
        this.onlyFolded
          ? this.$emit("toggleShow", { isShow: e, showType: this.showType })
          : ("desc" === this.showType && this.$emit("toggleShow", e),
            e
              ? ((this.isFolded = !1),
                (this.ele.style.width = "auto"),
                (this.ele.style.height = "auto"),
                (this.$refs.showMore.style.position = ""),
                (this.$refs.showMore.style.top = ""))
              : ((this.isFolded = !0),
                (this.ele.style.width =
                  this.ele.offsetWidth - this.moreW + "px"),
                (this.ele.style.height = "".concat(this.foldH, "px")),
                (this.$refs.showMore.style.position = "absolute"),
                (this.$refs.showMore.style.top =
                  this.eleLH * (this.showLine - 1) + "px"),
                this.onlyEllipsis ||
                  this.$nextTick(function () {
                    t.$refs.showMore.style.right = -t.moreW + "px";
                  })));
      },
    },
    mounted: function () {
      this.$emit("mounted");
    },
    watch: {},
  },
  s = t._export_sfc(o, [
    [
      "render",
      function (e, o, s, i, l, h) {
        return t.e(
          { a: !h.onlyEllipsis && l.isFolded },
          (!h.onlyEllipsis && l.isFolded, {}),
          { b: l.isFolded },
          l.isFolded
            ? {
                c: l.eleColor,
                d: t.t(h.showText),
                e: t.o(function (e) {
                  return h.toggleShow(!0);
                }, 5730),
                f: t.n(s.showType),
              }
            : {},
          {
            g:
              !l.isFolded && !h.foldedAndShow && "commentDetail" !== s.pageType,
          },
          l.isFolded || h.foldedAndShow || "commentDetail" === s.pageType
            ? {}
            : {
                h: t.t(h.hideText),
                i: t.o(function (e) {
                  return h.toggleShow(!1);
                }, 5731),
                j: t.n(s.showType),
              },
          {
            k: t.n(s.showType),
            l: t.n(l.isFolded ? "isFolded" : ""),
            m: l.hasShowMore,
          }
        );
      },
    ],
    ["__scopeId", "data-v-bfbc051f"],
  ]);
wx.createComponent(s);
