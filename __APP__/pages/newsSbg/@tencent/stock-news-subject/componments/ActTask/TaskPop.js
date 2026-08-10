var o = require("../../../stock-news-core/utils/force2https.js"),
  t = require("../../../../../../common/vendor.js"),
  n = {
    props: {
      options: {
        type: Object,
        default: function () {
          return { showPop: !1 };
        },
      },
    },
    methods: {
      forceHttpsAdvanced: o.forceHttpsAdvanced,
      close: function () {
        this.showContainer = !1;
      },
    },
  },
  s = t._export_sfc(n, [
    [
      "render",
      function (o, n, s, r, p, e) {
        return t.e(
          { a: s.options.showPop },
          s.options.showPop
            ? t.e(
                { b: !!s.options.showArrowUp },
                s.options.showArrowUp
                  ? {
                      c: s.options.arrowLeftUp,
                      d: "transparent transparent ".concat(
                        s.options.arrow_color,
                        "  transparent"
                      ),
                    }
                  : {},
                {
                  e: t.t(s.options.pop_text),
                  f: s.options.pop_text_color,
                  g: s.options.showFinishBtn,
                },
                s.options.showFinishBtn
                  ? {
                      h: t.t(s.options.toast_right_btn_text || "查看"),
                      i: t.o(function () {
                        return o.goFinish && o.goFinish.apply(o, arguments);
                      }, 4036),
                    }
                  : {
                      j:
                        e.forceHttpsAdvanced(s.options.toast_right_icon) ||
                        "https://wzq.gtimg.com/resource/images/8b02a01fb3aae2f99eccc1afcf8376d8.png",
                      k: t.o(function () {
                        return e.close && e.close.apply(e, arguments);
                      }, 4037),
                    },
                {
                  l: "".concat(s.options.arrow_color),
                  m: !!s.options.showArrowDown,
                },
                s.options.showArrowDown
                  ? {
                      n: s.options.arrowLeftDown,
                      o: "".concat(
                        s.options.arrow_color,
                        " transparent transparent"
                      ),
                    }
                  : {},
                {
                  p: s.options.showArrowUp || s.options.showArrowDown ? "" : 1,
                  q: s.options.top,
                  r: s.options.left,
                  s: s.options.width,
                  t: s.options.bottom,
                  v: s.options.position,
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-fb82ecb8"],
  ]);
wx.createComponent(s);
