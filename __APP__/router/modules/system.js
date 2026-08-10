var e = { exports: {} },
  t = [
    {
      root: "pages/system",
      pages: [
        {
          path: "error",
          style: { navigationBarTitleText: "交易", enablePullDownRefresh: !1 },
          meta: {
            signature:
              require("../pageAuth.js").__CJS__import__15__.F_BROKER_NOPEN
                .COMMON,
          },
          name: "SystemError",
          busis: ["trade"],
        },
      ],
    },
  ];
e.exports = t;
var r = (null == e.exports ? {} : e.exports).default || e.exports,
  _ = Object.freeze(
    Object.defineProperty({ __proto__: null, default: r }, Symbol.toStringTag, {
      value: "Module",
    })
  );
(exports.__CJS__export_default__ = r), (exports.__CJS__import__10__ = _);
