var t = require("../../../../../../../../@babel/runtime/helpers/toConsumableArray");
require("../../../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../../../common/vendor.js"),
  n = { 1: 3, 2: 2 },
  i = {
    name: "BulletChat",
    props: {
      listData: {
        type: Array,
        default: function () {
          return [];
        },
      },
      type: {
        type: Number,
        default: 1,
        validator: function (t) {
          return [1, 2].includes(t);
        },
      },
    },
    data: function () {
      return {
        contentWidth: 0,
        contentLeft: 0,
        newArray: [],
        timer: null,
        listTimer: null,
        isComponentVisible: !0,
      };
    },
    computed: {
      bgImg: function () {
        return 1 === this.type
          ? "https://st.gtimg.com/design/d449826578206aa579922e837d362a47.png"
          : "https://st.gtimg.com/design/c4def72b61e5115ec179cbc69b164653.png";
      },
    },
    watch: {
      listData: {
        handler: function (t) {
          this.updateArray(t);
        },
        immediate: !0,
      },
    },
    activated: function () {
      (this.isComponentVisible = !0), this.newArray.length > 0 && this.play();
    },
    deactivated: function () {
      (this.isComponentVisible = !1), this.clearTimers();
    },
    beforeDestroy: function () {
      this.clearTimers();
    },
    methods: {
      updateArray: function (e) {
        var i = this,
          r = n[e.length] || 1;
        (this.newArray = Array.from({ length: r }, function () {
          return t(e);
        }).flat()),
          clearTimeout(this.listTimer),
          clearInterval(this.timer),
          (this.contentLeft = 0),
          0 !== this.newArray.length &&
            (this.listTimer = setTimeout(function () {
              i.getContentInfo();
            }, 0));
      },
      newContent: function (t) {
        return (null == t ? void 0 : t.length) > 30
          ? "".concat(t.slice(0, 30), "...")
          : t;
      },
      play: function () {
        var t = this;
        if (0 !== this.newArray.length && this.isComponentVisible) {
          clearInterval(this.timer);
          var e = this.contentWidth / 2;
          this.timer = setInterval(function () {
            t.isComponentVisible
              ? t.contentWidth > 0 &&
                t.contentLeft > -t.contentWidth &&
                ((t.contentLeft -= 0.5),
                t.contentLeft <= -e && (t.contentLeft = 0))
              : clearInterval(t.timer);
          }, 25);
        }
      },
      getContentInfo: function () {
        var t = this;
        void 0 !== e.wx$1 &&
          this.isComponentVisible &&
          e.wx$1
            .createSelectorQuery()
            .in(this)
            .select("#content")
            .boundingClientRect(function (e) {
              e &&
                e.width > 0 &&
                ((t.contentWidth = Math.round(e.width)), t.play());
            })
            .exec();
      },
      bulletAnchorPoint: function (t) {
        this.$emit("bulletAnchorPoint", t);
      },
      clearTimers: function () {
        clearTimeout(this.listTimer), clearInterval(this.timer);
      },
    },
  },
  r = e._export_sfc(i, [
    [
      "render",
      function (t, n, i, r, o, a) {
        return e.e(
          { a: o.newArray.length > 0 },
          o.newArray.length > 0
            ? {
                b: e.f(2, function (t, n, i) {
                  return {
                    a: e.f(o.newArray, function (n, i, r) {
                      return {
                        a: "url(".concat(n.avatar, ")"),
                        b: e.t(a.newContent(n.content.text)),
                        c: "bullet-" + t + "-" + i,
                        d: e.o(
                          function (t) {
                            return a.bulletAnchorPoint(n);
                          },
                          4881,
                          "bullet-" + t + "-" + i
                        ),
                      };
                    }),
                    b: "track-" + t,
                  };
                }),
                c: "url(".concat(a.bgImg, ")"),
                d: o.contentLeft + "px",
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-9b335bd4"],
  ]);
wx.createComponent(r);
