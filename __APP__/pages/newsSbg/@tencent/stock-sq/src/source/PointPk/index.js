var t = require("../../../../stock-community-base/utils/knife.js"),
  i = require("../../../../stock-community-base/utils/constant.js"),
  n = require("../../../../../../../common/vendor.js"),
  e = {
    name: "PointPk",
    props: {
      isAndroid: { type: Boolean, default: !1 },
      pointData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      pickPlay: { type: Boolean, default: !1 },
      theme: { type: String, default: "" },
    },
    data: function () {
      return {
        redBar: "https://st.gtimg.com/image/sq/navButton/red.png",
        blueBar: "https://st.gtimg.com/image/sq/navButton/blue.png",
        redBarS: "https://st.gtimg.com/image/sq/navButton/red-s.png",
        blueBarS: "https://st.gtimg.com/image/sq/navButton/blue-s.png",
        redBarH: "https://st.gtimg.com/image/sq/navButton/red-h.png",
        blueBarH: "https://st.gtimg.com/image/sq/navButton/blue-h.png",
        pickBlue: "https://st.gtimg.com/image/sq/navButton/pick-blue.png",
        pickRed: "https://st.gtimg.com/image/sq/navButton/pick-red.png",
        pickState: !1,
        plusState: !1,
        NEW_STATIC_URL: i.NEW_STATIC_URL,
        pickId: "",
        pickKey: "",
        platform: t.platform,
      };
    },
    created: function () {
      this.picked && (this.pickState = !0);
    },
    components: {},
    watch: {
      pickPlay: {
        handler: function (t) {
          var i = this;
          t &&
            ((this.ratioData[this.pickKey].like_id = this.pickId),
            (this.ratioData[this.pickKey].like_num += 1),
            setTimeout(function () {
              (i.pickState = !0), (i.plusState = !0);
            }, 500));
        },
      },
      picked: {
        handler: function (t) {
          var i = this;
          t &&
            setTimeout(function () {
              i.pickState = !0;
            }, 500);
        },
      },
    },
    methods: {
      pickPoint: function (t, i) {
        (this.pickId = t),
          (this.pickKey = i),
          this.$emit("pickPoint", { data: t, key: i });
      },
      thickWidth: function (t, i) {
        return Math.round(((t <= 90 ? t + 12 : t) / 100) * i) || 0;
      },
      thinWidth: function (t, i) {
        return Math.round(((t < 10 ? 28 : t ? t + 12 : 5) / 100) * i) || 0;
      },
      ratioImg: function (t, i) {
        return t
          ? i <= 10
            ? this.blueBarS
            : i <= 90
            ? this.blueBarH
            : this.blueBar
          : i <= 10
          ? this.redBarS
          : i <= 90
          ? this.redBarH
          : this.redBar;
      },
    },
    computed: {
      ratioData: function () {
        return this.pointData.ratio_list || [];
      },
      pointId: function () {
        return this.pointData.id || "";
      },
      pointPic: function () {
        var t =
          this.pointData.pic ||
          "".concat(
            this.NEW_STATIC_URL,
            "9a331326d6986e64090d57c40dd3d477.png"
          );
        return "black" === this.theme ? t.replace(/\.png$/, "-black.png") : t;
      },
      comment: function () {
        return this.pointData.banner_comment || [];
      },
      commentCnt: function () {
        var i = this.ratioData
          .map(function (t) {
            return t.like_num;
          })
          .reduce(function (t, i) {
            return t + i;
          });
        return t.formatView(+i) || 0;
      },
      picked: function () {
        return (
          -1 !==
          this.ratioData
            .map(function (t) {
              return !!t.like_id;
            })
            .indexOf(!0)
        );
      },
      ratioBar: function () {
        var t = this.ratioData.map(function (t) {
          return t.like_num;
        });
        return t.map(function (i) {
          return Math.round(
            (100 * i) /
              t.reduce(function (t, i) {
                return t + i;
              })
          );
        });
      },
      ratioList: function () {
        var i = this;
        return this.ratioData.map(function (n, e) {
          return (
            (n.widthS =
              i.ratioBar[e] >= 50
                ? t.transformByDPR(2 * i.thickWidth(i.ratioBar[e], 173))
                : t.transformByDPR(2 * i.thinWidth(i.ratioBar[e], 173))),
            n
          );
        });
      },
    },
  },
  r = n._export_sfc(e, [
    [
      "render",
      function (t, i, e, r, a, o) {
        return n.e(
          { a: o.commentCnt },
          o.commentCnt ? { b: n.t(o.commentCnt) } : {},
          { c: n.t(e.pointData.title), d: !o.picked },
          o.picked
            ? {}
            : {
                e: n.f(o.ratioList, function (t, i, e) {
                  return {
                    a: n.t(t.point),
                    b: n.o(
                      function (n) {
                        return o.pickPoint(t.data, i);
                      },
                      5724,
                      i
                    ),
                    c: i,
                    d: n.n(1 === i ? "right" : "left"),
                  };
                }),
              },
          { f: o.picked },
          o.picked
            ? {
                g: n.f(o.ratioList, function (t, i, e) {
                  return {
                    a: o.ratioImg(i, o.ratioBar[i]),
                    b: n.n(o.ratioBar[i] >= 50 ? "thick" : "thin"),
                    c: n.n(1 === i ? "right" : "left"),
                    d: n.n(
                      o.ratioBar[i] <= 70 && o.ratioBar[i] >= 50 && "barH"
                    ),
                    e: n.n(50 === o.ratioBar[i] && "equal"),
                    f: (a.pickState ? t.widthS : 0) + "px",
                    g: n.n(o.ratioBar[i] >= 50 && "thickW"),
                    h: i,
                  };
                }),
                h:
                  o.ratioList
                    .map(function (t) {
                      return t.widthS;
                    })
                    .reduce(function (t, i) {
                      return t + i;
                    }) + "px",
              }
            : {},
          { i: o.picked },
          o.picked
            ? {
                j: n.f(o.ratioList, function (t, i, e) {
                  return n.e(
                    { a: n.t(o.ratioBar[i]), b: t.like_id },
                    t.like_id ? { c: 1 === i ? a.pickBlue : a.pickRed } : {},
                    {
                      d: n.t(t.like_id ? "已投" : ""),
                      e: n.t(t.point),
                      f: n.n(1 === i ? "right" : "left"),
                      g: n.n(1 === i ? "right" : "left"),
                      h: n.n(t.like_id && a.plusState && "op"),
                      i: n.n(1 === i ? "right" : "left"),
                      j: n.n(t.like_id && "hasIcon"),
                      k: i,
                      l: n.n(1 === i ? "right" : "left"),
                      m: n.n(o.ratioBar[i] >= 50 ? "thick" : "thin"),
                      n: n.n(50 === o.ratioBar[i] && "equal"),
                    }
                  );
                }),
                k:
                  o.ratioList
                    .map(function (t) {
                      return t.widthS;
                    })
                    .reduce(function (t, i) {
                      return t + i;
                    }) + "px",
              }
            : {},
          {
            l: n.n("wzq" !== a.platform ? "notWzq" : ""),
            m: n.n(e.isAndroid ? "android" : ""),
            n: "url(".concat(o.pointPic, ")"),
          }
        );
      },
    ],
    ["__scopeId", "data-v-ae8dfcb9"],
  ]);
wx.createComponent(r);
