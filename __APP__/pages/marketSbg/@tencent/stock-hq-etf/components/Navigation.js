var t = require("../../../../../common/vendor.js"),
  i = {
    props: ["title", "fixed", "invisible", "showFirst", "customBack"],
    data: function () {
      return {
        theme: "",
        opacity: 0,
        backIconVisible: !1,
        statusBarHeight: window.__statusBarHeight__ || 20,
      };
    },
    watch: {
      backIconVisible: function (t) {
        var i = this;
        t &&
          this.$nextTick(function () {
            i.registerScrollEvents();
          });
      },
    },
    created: function () {
      var t = this;
      this.$sdk.getSystemInfo(function (i) {
        i && i.theme && (t.theme = i.theme);
      }),
        (this.backIconVisible = !0);
    },
    methods: {
      registerScrollEvents: function () {
        var t = this,
          i = this.$refs.navigation;
        this.fixed || this.invisible
          ? (this.opacity = 1)
          : ((this.height = i.getBoundingClientRect().height),
            window.addEventListener(
              "scroll",
              function () {
                t.fadeNavigation();
              },
              !1
            ));
      },
      fadeNavigation: function () {
        var t = document.body.getBoundingClientRect().top,
          i = this.height;
        this.opacity =
          t >= 0 ? 0 : t > -1 * i ? Math.min(1, (0.8 * Math.abs(t)) / i) : 1;
      },
      navigateBack: function () {
        this.customBack ? this.$emit("back") : this.$sdk.closeWindow();
      },
    },
  },
  e = t._export_sfc(i, [
    [
      "render",
      function (i, e, n, a, o, s) {
        return t.e(
          { a: !n.invisible && o.backIconVisible },
          !n.invisible && o.backIconVisible
            ? {
                b: o.opacity,
                c: o.statusBarHeight + "px",
                d: o.opacity,
                e: t.o(function () {
                  return s.navigateBack && s.navigateBack.apply(s, arguments);
                }, 2700),
                f: t.t(n.title),
                g: t.n(n.showFirst ? "" : "border-bottom-1px"),
                h: n.showFirst ? 1 : o.opacity,
                i: t.n("navigation-" + o.theme),
                j: t.n(0 == o.opacity ? "navigation-initial" : ""),
              }
            : {}
        );
      },
    ],
  ]);
wx.createComponent(e);
