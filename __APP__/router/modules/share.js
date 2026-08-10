var e = { exports: {} },
  t = require("../pageAuth.js").__CJS__import__15__.F_BROKER_NOPEN,
  a = [
    {
      root: "pages/share",
      pages: [
        {
          path: "jumppage",
          style: { navigationBarTitleText: "交易", enablePullDownRefresh: !1 },
          meta: { signature: t.COMMON },
          name: "ShareJump",
          busis: ["trade"],
        },
        {
          path: "weekly",
          style: { navigationBarTitleText: "交易", enablePullDownRefresh: !1 },
          meta: { signature: t.COMMON },
          name: "ShareWeekly",
          busis: ["trade"],
        },
      ],
    },
  ];
e.exports = a;
var r = (null == e.exports ? {} : e.exports).default || e.exports,
  _ = Object.freeze(
    Object.defineProperty({ __proto__: null, default: r }, Symbol.toStringTag, {
      value: "Module",
    })
  );
(exports.__CJS__export_default__ = r), (exports.__CJS__import__9__ = _);
