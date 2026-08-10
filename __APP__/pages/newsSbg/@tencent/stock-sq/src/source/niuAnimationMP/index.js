var e = require("../../../../stock-community-base/utils/knife.js"),
  t = require("../../../../../../../common/vendor.js"),
  n = {
    name: "niuAnimationMP",
    inject: { communityComCanOpt: { default: !1 } },
    props: {
      isTap: { default: !1 },
      num: { default: 0 },
      selected: { default: !1 },
      customize: { type: [Boolean, String], require: !1 },
      inReplyBox: { default: !1 },
    },
    data: function () {
      return {
        fillId: "gradient_".concat(Math.random()),
        zooming: !1,
        scrolling: !1,
        offset: 0,
        interval: 500,
      };
    },
    computed: {
      fillSelector: function () {
        return "url(#".concat(this.fillId, ")");
      },
      niuImgIsInLite: function () {
        return this.communityComCanOpt && e.IS_WZQ_XCX;
      },
      unselectedNiuImgInLite: function () {
        return this.inReplyBox
          ? "https://st.gtimg.com/design/36230852a951fa7fae841b4bf82bb02f.png"
          : "https://st.gtimg.com/design/8fd10ec13dbeced7bc07a0262273ff37.png";
      },
      selectedNiuImgInLite: function () {
        return this.inReplyBox
          ? "https://st.gtimg.com/design/c1cc91d52ecd9f498632aa2695fc123d.png"
          : "https://st.gtimg.com/design/48e0a3aaa98633565c8a4923ec9ff1ea.png";
      },
    },
    methods: {
      linear: function (e, t, n) {
        return n;
      },
      tween: function (e, t, n, i) {
        (arguments.length > 4 && void 0 !== arguments[4]) || this.linear;
      },
    },
    watch: {
      selected: {
        handler: function (e, t) {
          var n = this;
          e !== t &&
            ((this.zooming = !0),
            (this.scrolling = !0),
            e
              ? this.tween(0, 1, this.interval, function (e) {
                  n.offset = e;
                })
              : this.tween(1, 0, this.interval / 2, function (e) {
                  n.offset = e;
                }));
        },
      },
    },
  },
  i = t._export_sfc(n, [
    [
      "render",
      function (e, n, i, s, c, o) {
        return t.e(
          { a: !o.niuImgIsInLite },
          o.niuImgIsInLite
            ? t.e(
                { f: !i.selected },
                i.selected
                  ? {}
                  : {
                      g: t.n(
                        i.inReplyBox
                          ? "sq-icon-niu-lite-replybox"
                          : "sq-icon-niu-lite"
                      ),
                      h: o.unselectedNiuImgInLite,
                    },
                { i: i.selected },
                i.selected
                  ? {
                      j: t.n(
                        i.inReplyBox
                          ? "sq-icon-niu-lite-replybox"
                          : "sq-icon-niu-lite"
                      ),
                      k: o.selectedNiuImgInLite,
                    }
                  : {}
              )
            : t.e(
                { b: !i.isTap },
                i.isTap
                  ? {}
                  : t.e(
                      { c: i.selected },
                      (i.selected, {}),
                      { d: !i.selected },
                      (i.selected, {})
                    ),
                { e: i.isTap },
                (i.isTap, {})
              ),
          { l: !i.selected },
          i.selected ? {} : { m: t.t(i.num || "很牛"), n: t.t(i.num + 1) },
          { o: i.selected },
          i.selected ? { p: t.t(i.num - 1 || "很牛"), q: t.t(i.num) } : {},
          {
            r: i.isTap ? 1 : "",
            s: i.selected ? 1 : "",
            t: i.selected ? 1 : "",
            v: c.zooming ? 1 : "",
            w: i.customize ? 1 : "",
            x: i.inReplyBox ? 1 : "",
          }
        );
      },
    ],
    ["__scopeId", "data-v-91e26929"],
  ]);
wx.createComponent(i);
