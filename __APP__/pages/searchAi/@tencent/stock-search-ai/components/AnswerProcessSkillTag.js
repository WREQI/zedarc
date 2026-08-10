var e = require("../../../../../common/vendor.js"),
  n = /^node scripts\/index\.js\s*/;
var r = e.defineComponent({
    name: "AnswerProcessSkillTag",
    props: { step: { type: Object, required: !0 } },
    computed: {
      displayName: function () {
        return (function (e) {
          return (
            (function (e) {
              if (!e || "string" != typeof e) return "";
              try {
                var r = JSON.parse(e),
                  t = null == r ? void 0 : r.skill,
                  o = null == r ? void 0 : r.command;
                if (!t || "string" != typeof t || !o || "string" != typeof o)
                  return "";
                var i = o.replace(n, "").trim();
                return i ? "".concat(t, "  ").concat(i) : "";
              } catch (e) {
                return "";
              }
            })((null == e ? void 0 : e.arguments) || "") ||
            (null == e ? void 0 : e.title) ||
            (null == e ? void 0 : e.name) ||
            ""
          );
        })(this.step);
      },
    },
  }),
  t = e._export_sfc(r, [
    [
      "render",
      function (n, r, t, o, i, s) {
        return { a: e.t(n.displayName) };
      },
    ],
    ["__scopeId", "data-v-94379a89"],
  ]);
wx.createComponent(t);
