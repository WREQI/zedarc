var e = require("../../../stock-community-base/utils/knife.js"),
  t = require("../../../../../../common/vendor.js"),
  r = {
    name: "BaseImage",
    props: {
      src: { require: !0, type: String, default: "" },
      showType: { require: !1, default: "img" },
      backgroundText: { require: !1 },
      backgrounColor: { require: !1 },
      defaultImg: { require: !1 },
      opacity: { require: !1, type: Boolean, default: !1 },
      imageRefreshFlag: { default: 0 },
      shape: { default: "" },
      imgIndex: { type: Number, default: 0 },
    },
    data: function () {
      return { isFail: !0, tryTime: 0, timer: null, startTime: Date.now() };
    },
    computed: {
      refreshSrc: {
        get: function () {
          return this.getSrc(this.src);
        },
        set: function (e) {},
      },
    },
    watch: {
      imageRefreshFlag: function (e, t) {
        e !== t &&
          ((this.refreshSrc = ""
            .concat(this.refreshSrc, "?_=")
            .concat(Math.random())),
          this.$emit("update:src", this.refreshSrc),
          (this.tryTime = 0),
          this.error());
      },
    },
    created: function () {},
    mounted: function () {
      this.startTime = Date.now();
    },
    beforeDestroy: function () {
      this.clearTimer();
    },
    methods: {
      clearTimer: function () {
        this.timer && (clearTimeout(this.timer), (this.timer = null));
      },
      getSrc: function (t) {
        return ((t || "").length > 0 && e.toHttps(t)) || "";
      },
      setStatus: function (e) {
        if (((this.isFail = e), e)) this.$emit("failed");
        else {
          var t = this.$refs.img;
          this.$emit("loaded", {
            img: this.$refs.img,
            src: this.refreshSrc,
            width: t && t.naturalWidth,
            height: t && t.naturalHeight,
            index: this.imgIndex,
          });
        }
      },
      load: function () {
        this.setStatus(!1), this.clearTimer();
      },
      error: function () {
        var e = this;
        this.clearTimer(),
          this.tryTime < 3
            ? (this.timer = setTimeout(function () {
                e.$refs &&
                  e.$refs.img &&
                  e.refreshSrc &&
                  (e.$refs.img.src = e.refreshSrc),
                  (e.tryTime += 1);
              }, 100))
            : this.setStatus(!0);
      },
      click: function (e) {
        this.$emit("tapImg", e);
      },
    },
  },
  i = t._export_sfc(r, [
    [
      "render",
      function (e, r, i, s, n, a) {
        return {
          a: 0 == n.isFail,
          b: a.refreshSrc,
          c: a.refreshSrc,
          d: a.refreshSrc,
          e: t.o(function () {
            return a.load && a.load.apply(a, arguments);
          }, 5547),
          f: t.o(function () {
            return a.error && a.error.apply(a, arguments);
          }, 5548),
          g: t.o(function () {
            return a.click && a.click.apply(a, arguments);
          }, 5549),
          h: i.defaultImg && 1 == n.isFail,
          i: i.defaultImg,
          j: t.n(n.isFail ? "empty" : ""),
          k: t.n(0 == n.isFail && i.opacity ? "opacity" : ""),
          l: t.n(i.backgrounColor ? i.backgrounColor : ""),
          m: t.n(n.isFail && i.backgroundText ? "tencent-uniE900" : ""),
          n: t.n(i.shape),
        };
      },
    ],
    ["__scopeId", "data-v-ff1a0ff3"],
  ]);
wx.createComponent(i);
