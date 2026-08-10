var e = require("../utils/StockBridgeWrapper.js"),
  t = require("../../../../../common/vendor.js"),
  n = {
    name: "QuestionItemLongPressMenu",
    props: {
      isLongPres: { type: Boolean, default: !1 },
      target: { type: Object, default: {} },
      question: { type: String, default: "" },
      disableEdit: { type: Boolean, default: !1 },
      curRequestId: { type: String, default: "" },
      theme: { required: !0, type: String },
    },
    computed: {
      reverseArrow: function () {
        var e = this.target;
        return e.y < 3 * e.height;
      },
      menuContainerStyle: function () {
        var e = this.target,
          t = e.x,
          n = e.y,
          r = e.width,
          i = e.height,
          o = this.reverseArrow ? n + i : n - 56;
        return r <= 124
          ? "right: 12px; top: ".concat(o, "px;")
          : "left: "
              .concat(t, "px; width: ")
              .concat(r, "px; top: ")
              .concat(o, "px;");
      },
      isShortContent: function () {
        return this.target.width <= 124;
      },
    },
    methods: {
      menuOperate: function (t) {
        e.StockBridge.report(
          "jichu.ai_search.question_menu_".concat(t, "_tap"),
          { requestid: this.curRequestId }
        ),
          this.$emit("tapMeunu", t, this.question);
      },
      onClickContainer: function (e) {},
    },
  },
  r = t._export_sfc(n, [
    [
      "render",
      function (e, n, r, i, o, u) {
        return t.e(
          { a: r.isLongPres },
          r.isLongPres
            ? t.e(
                {
                  b: u.isShortContent ? 1 : "",
                  c: t.o(function (e) {
                    return u.menuOperate("copy");
                  }, 4831),
                  d: !r.disableEdit,
                },
                r.disableEdit
                  ? {}
                  : {
                      e: t.o(function (e) {
                        return u.menuOperate("edit");
                      }, 4832),
                    },
                {
                  f: u.reverseArrow ? 1 : "",
                  g: t.n("skin-".concat(r.theme)),
                  h: t.s(u.menuContainerStyle),
                  i: t.o(function () {
                    return (
                      u.onClickContainer &&
                      u.onClickContainer.apply(u, arguments)
                    );
                  }, 4833),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-ae31fc72"],
  ]);
wx.createComponent(r);
