require("../../../app.js");
var n = require("../../../common/vendor.js"),
  o = n._export_sfc(
    {
      setup: function () {
        return {
          iconList: [
            "icon-hq",
            "icon-quote",
            "icon-buy",
            "icon-sell",
            "icon-analysis",
            "icon-condition-order",
            "icon-trade",
            "icon-detail",
            "icon-setting",
            "icon-share",
            "icon-repo",
            "icon-currency",
          ],
        };
      },
    },
    [
      [
        "render",
        function (o, i, e, c, r, t) {
          return {
            a: n.f(c.iconList, function (o, i, e) {
              return { a: n.n(o), b: o };
            }),
          };
        },
      ],
    ]
  );
wx.createComponent(o);
