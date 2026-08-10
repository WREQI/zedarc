var e = { exports: {} },
  t = [
    {
      root: "pages/oauth",
      pages: [
        {
          path: "broker",
          style: { enablePullDownRefresh: !1 },
          name: "OauthBroker",
          busis: ["trade"],
          meta: {
            signature:
              require("../pageAuth.js").__CJS__import__15__.F_BROKER_NOPEN
                .COMMON,
          },
        },
      ],
    },
  ];
e.exports = t;
var _ = (null == e.exports ? {} : e.exports).default || e.exports,
  r = Object.freeze(
    Object.defineProperty({ __proto__: null, default: _ }, Symbol.toStringTag, {
      value: "Module",
    })
  );
(exports.__CJS__export_default__ = _), (exports.__CJS__import__18__ = r);
