var e = require("../../../common/vendor.js"),
  a = [
    "/pages/index/information/main",
    "/pages/index/index",
    "/pages/index/market",
    "/pages/index/trade",
    "/pages/index/account/main",
  ].map(function (e) {
    return e.replace("/pages/index/", "").replace("/main", "");
  }),
  n = {
    data: function () {
      return { tabBarList: a };
    },
  },
  t = e._export_sfc(n, [
    [
      "render",
      function (a, n, t, r, i, c) {
        return {
          a: e.f(i.tabBarList, function (a, n, t) {
            return {
              a: n,
              b: e.n("virtual_tabbar_item virtual_tabbar_item_".concat(a)),
            };
          }),
        };
      },
    ],
    ["__scopeId", "data-v-1041f020"],
  ]);
wx.createComponent(t);
