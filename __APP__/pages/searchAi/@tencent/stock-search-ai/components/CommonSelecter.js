var p = require("../../../../../common/vendor.js"),
  t = {
    inject: ["hqBridge"],
    props: ["skin", "landscape", "position"],
    data: function () {
      return {
        data: [],
        currentId: "",
        popup: {
          show: !1,
          ready: !1,
          flip: !1,
          num: 1,
          height: 0,
          optionMaxHeight: "",
          top: 0,
          left: 0,
          startY: 0,
          canClick: !0,
        },
      };
    },
    computed: {
      arrowImage: function () {
        return "https://st.gtimg.com/image/kline/arrow".concat(
          "dark" === this.skin || "black" === this.skin ? "-dark" : "",
          ".png"
        );
      },
    },
    created: function () {
      var p = this;
      window.addEventListener("resize", function () {
        p.timer && clearTimeout(p.timer),
          (p.timer = setTimeout(function () {
            p.maskClick();
          }, 100));
      });
    },
    methods: {
      maskClick: function () {
        this.popup.show = !1;
      },
      onPopupMore: function (p) {
        var t = this;
        (this.data = p.data),
          (this.currentId = p.currentId),
          (this.popup.optionMaxHeight = ""),
          (this.popup.show = !0),
          (this.popup.ready = !1);
        var o = this.data.length;
        this.$nextTick(function () {
          var i = p.location,
            e = i.top,
            n = i.bottom,
            a = i.left,
            u = i.width,
            c = t.$refs.popup.getBoundingClientRect().width,
            r = document.body.clientHeight,
            s = t.landscape ? 0 : 38 * window.devicePixelRatio;
          e - s > r - n - 40 * window.devicePixelRatio
            ? ((t.popup.flip = !1),
              (t.popup.height = Math.min(
                e - s - 3 * window.devicePixelRatio,
                45 * o
              )),
              (t.popup.top = Math.max(
                e - t.popup.height - 3 * window.devicePixelRatio,
                5 * window.devicePixelRatio
              )),
              (t.popup.left = a + u - c),
              (t.popup.optionMaxHeight =
                e - 5 * window.devicePixelRatio + "px"))
            : ((t.popup.flip = !0),
              (t.popup.top = n + 3 * window.devicePixelRatio),
              (t.popup.left = a + u - c),
              (t.popup.height = Math.min(
                r - n - 40 * window.devicePixelRatio,
                50 * o
              ))),
            (t.popup.ready = !0);
        });
      },
      switchTab: function (p) {
        (this.popup.show = !1), this.$emit("changeTab", p);
      },
      popupTouchStart: function (p) {
        (this.popup.startY = p.touches[0].pageY), (this.popup.canClick = !0);
      },
      popupTouchMove: function (p) {
        this.popup.canClick = !1;
        var t = this.$refs.popupScroll,
          o = this.$refs.popupScrollInner;
        0 === t.scrollTop &&
          p.touches[0].pageY > this.popup.startY &&
          p.cancelable &&
          p.preventDefault(),
          t.offsetHeight + t.scrollTop + 2 * window.devicePixelRatio >=
            o.scrollHeight &&
            p.touches[0].pageY < this.popup.startY &&
            p.cancelable &&
            p.preventDefault();
      },
    },
  },
  o = p._export_sfc(t, [
    [
      "render",
      function (t, o, i, e, n, a) {
        return {
          a: n.popup.flip,
          b: a.arrowImage,
          c: p.f(n.data, function (t, o, i) {
            return {
              a: p.t(t.name),
              b: t.id,
              c: n.currentId === t.id ? 1 : "",
              d: p.o(
                function (p) {
                  return n.popup.canClick && a.switchTab(t.id);
                },
                5042,
                t.id
              ),
              e: t.id + "line",
            };
          }),
          d: p.n(n.popup.flip ? "flip" : ""),
          e: p.o(function () {
            return a.popupTouchStart && a.popupTouchStart.apply(a, arguments);
          }, 5043),
          f: p.o(function () {
            return a.popupTouchMove && a.popupTouchMove.apply(a, arguments);
          }, 5044),
          g: !n.popup.flip,
          h: a.arrowImage,
          i: i.landscape ? 1 : "",
          j: n.popup.top + "px",
          k:
            "right" === i.position
              ? n.popup.left + 74 + "px"
              : n.popup.left + "px",
          l: n.popup.height + "px",
          m: n.popup.show,
          n: "dark" === i.skin ? 1 : "",
          o: n.popup.ready ? 1 : 0,
          p: p.o(function () {}, 5045),
          q: p.o(function () {
            return a.maskClick && a.maskClick.apply(a, arguments);
          }, 5046),
        };
      },
    ],
    ["__scopeId", "data-v-9b7b10bb"],
  ]);
wx.createComponent(o);
