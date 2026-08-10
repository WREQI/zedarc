var e = { exports: {} },
  t = require("../pageAuth.js").__CJS__import__15__.F_BROKER_NOPEN,
  a = [
    {
      root: "pages/message",
      pages: [
        {
          path: "box",
          style: {
            navigationBarTitleText: "交易助手",
            enablePullDownRefresh: !1,
          },
          name: "MessageBox",
          meta: { signature: t.COMMON },
          busis: ["trade"],
        },
        {
          path: "newbox",
          style: {
            navigationBarTitleText: "交易通知",
            enablePullDownRefresh: !1,
          },
          name: "NewMessageBox",
          meta: { signature: t.COMMON },
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
(exports.__CJS__export_default__ = r), (exports.__CJS__import__17__ = _);
