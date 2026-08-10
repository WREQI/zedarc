var e = require("../../../../../common/vendor.js"),
  n = require("../utils/envUtils.js"),
  t = {
    name: "AiModelSelectDialog",
    props: {
      theme: { type: String, default: "white" },
      moduleName: { required: !0, type: String, default: "" },
      scene: { type: String, default: "fullscreen" },
    },
    data: function () {
      return { isLight: n.IS_LITE_MODE, isWZQ: !1 };
    },
    computed: {
      isQuikModel: function () {
        return (
          "hunyuan-t1" === this.moduleName ||
          "hunyuan-t3-think" === this.moduleName
        );
      },
      isDeepSeek: function () {
        return "deepseek" === this.moduleName;
      },
      isDeepSea: function () {
        return "deepsea" === this.moduleName;
      },
      canShowShenHai: function () {
        return !1;
      },
      checkIcon: function () {
        return "https://st.gtimg.com/design/720f466c93abf2606e1b75b0c8988916.png";
      },
      contentStyle: function () {
        if ("halfscreen" === this.scene) return "margin-top: 45px;";
        if (e.wx$1.getMenuButtonBoundingClientRect)
          try {
            var n = e.wx$1.getMenuButtonBoundingClientRect().bottom;
            return "margin-top: ".concat(n - 2, "px;");
          } catch (e) {}
        return "";
      },
      withoutNavBar: function () {
        return this.isWZQ || !1;
      },
    },
    methods: {
      closeDialog: function () {
        this.$emit("closeDialog");
      },
      onContentClick: function () {},
      chooseModel: function (e) {
        this.$emit("chooseModel", e);
      },
    },
  },
  o = e._export_sfc(t, [
    [
      "render",
      function (n, t, o, i, c, u) {
        return e.e(
          { a: e.s(u.contentStyle), b: u.isQuikModel },
          u.isQuikModel ? { c: u.checkIcon } : {},
          {
            d: e.o(function (e) {
              return u.chooseModel("hunyuan-t1");
            }, 4825),
            e: u.isDeepSeek,
          },
          u.isDeepSeek ? { f: u.checkIcon } : {},
          {
            g: e.o(function (e) {
              return u.chooseModel("deepseek");
            }, 4826),
            h: u.canShowShenHai,
          },
          u.canShowShenHai
            ? e.e({ i: u.isDeepSea }, u.isDeepSea ? { j: u.checkIcon } : {}, {
                k: e.o(function (e) {
                  return u.chooseModel("deepsea");
                }, 4827),
              })
            : {},
          {
            l: e.o(function () {
              return u.onContentClick && u.onContentClick.apply(u, arguments);
            }, 4828),
            m: e.n(c.isLight ? "light" : ""),
            n: e.n("skin-".concat(o.theme)),
            o: e.n(u.withoutNavBar ? "without-navbar" : ""),
            p: e.o(function () {
              return u.closeDialog && u.closeDialog.apply(u, arguments);
            }, 4829),
          }
        );
      },
    ],
    ["__scopeId", "data-v-ddd65fb3"],
  ]);
wx.createComponent(o);
