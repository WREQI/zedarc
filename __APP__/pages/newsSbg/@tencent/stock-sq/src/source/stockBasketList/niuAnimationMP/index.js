var e = require("../../../../../../../../common/vendor.js"),
  t = {
    name: "niuAnimationMP",
    inject: { platformType: { default: "" } },
    props: {
      isTap: { default: !1 },
      num: { default: 0 },
      selected: { default: !1 },
      customize: { type: [Boolean, String], require: !1 },
      inReplyBox: { default: !1 },
      pageType: { type: String, default: "" },
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
      platformClass: function () {
        return this.platformType;
      },
      fillSelector: function () {
        return "url(#".concat(this.fillId, ")");
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
  n = e._export_sfc(t, [
    [
      "render",
      function (t, n, i, o, l, s) {
        return e.e(
          { a: !i.isTap },
          i.isTap
            ? {}
            : e.e(
                { b: i.selected },
                (i.selected, {}),
                { c: !i.selected },
                (i.selected, {})
              ),
          { d: i.isTap },
          (i.isTap, {}),
          { e: !i.selected },
          i.selected ? {} : { f: e.t(i.num || "很牛"), g: e.t(i.num + 1) },
          { h: i.selected },
          i.selected ? { i: e.t(i.num - 1 || "很牛"), j: e.t(i.num) } : {},
          {
            k: i.isTap ? 1 : "",
            l: i.selected ? 1 : "",
            m: e.n({
              selected: i.selected,
              zooming: l.zooming,
              customize: i.customize,
              inReplyBox: i.inReplyBox,
            }),
            n: e.n(s.platformClass),
            o: e.n(i.pageType),
          }
        );
      },
    ],
    ["__scopeId", "data-v-7bb2f9b9"],
  ]);
wx.createComponent(n);
