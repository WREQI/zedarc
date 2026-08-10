var e = { exports: {} },
  t = require("../pageAuth.js").__CJS__import__15__.F_BROKER_NOPEN,
  o = [
    {
      path: "pages/protocol/vtools-protocol",
      name: "VProtocol",
      style: { navigationBarTitleText: "协议", enablePullDownRefresh: !1 },
      meta: { signature: t.COMMON },
      busis: ["trade", "apply"],
    },
    {
      path: "pages/protocol/imgs-protocol",
      name: "ImgProtocol",
      style: { navigationBarTitleText: "协议", enablePullDownRefresh: !1 },
      meta: { signature: t.COMMON },
      busis: ["trade", "apply"],
    },
    {
      path: "pages/protocol/confirmation-protocol",
      name: "ConfirmationProtocol",
      style: { navigationBarTitleText: "协议", enablePullDownRefresh: !1 },
      meta: { signature: t.COMMON },
      busis: ["trade"],
    },
    {
      path: "pages/protocol/duotianqi-protocol",
      name: "DuotianqiProtocol",
      style: {
        navigationBarTitleText: "客户协议及风险揭示书",
        enablePullDownRefresh: !1,
      },
      busis: ["trade"],
    },
  ];
e.exports = o;
var a = (null == e.exports ? {} : e.exports).default || e.exports,
  r = Object.freeze(
    Object.defineProperty({ __proto__: null, default: a }, Symbol.toStringTag, {
      value: "Module",
    })
  );
(exports.__CJS__export_default__ = a), (exports.__CJS__import__8__ = r);
