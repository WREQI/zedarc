var n = require("../../../../../common/vendor.js"),
  o = {
    props: { config: { type: Object, default: function () {} } },
    setup: function () {
      return {
        formatText: function (n) {
          return n
            .replace(
              /<strong>(.*?)<\/strong>/g,
              '<strong class="highlight">$1</strong>'
            )
            .replace(/<p>(.*?)<\/p>/g, '<p class="rule-item">$1</p>');
        },
      };
    },
  },
  e = n._export_sfc(o, [
    [
      "render",
      function (o, e, i, f, r, t) {
        return n.e(
          { a: i.config.uiConfig.flow },
          i.config.uiConfig.flow ? { b: i.config.uiConfig.flow } : {},
          { c: i.config.uiConfig.bank },
          i.config.uiConfig.bank ? { d: i.config.uiConfig.bank } : {},
          { e: i.config.rule },
          i.config.rule ? { f: f.formatText(i.config.rule) } : {}
        );
      },
    ],
    ["__scopeId", "data-v-e666dae2"],
  ]);
wx.createComponent(e);
