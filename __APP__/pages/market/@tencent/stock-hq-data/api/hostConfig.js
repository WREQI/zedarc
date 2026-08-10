var t = require("../../stock-crypto-modules-config/dist/index.js"),
  o = {
    wzq: t.dist.SIGN_KEY.stock,
    zxg_xcx: t.dist.SIGN_KEY.mpweapp,
    wzqxcx: t.dist.SIGN_KEY.mpwzq,
    h5: t.dist.SIGN_KEY.h5,
    df: t.dist.SIGN_KEY.df,
  };
(exports.HOSTENUM = {
  DEFAULT: {
    PROXY_QQ: "/domain_upstream/proxyfinanceqqcom",
    SQT: "/domain_upstream/sqtgtimgcn",
  },
  DAFENG: { PROXY_QQ: "/proxyfinanceqqcom", SQT: "/sqtgtimgcn" },
  GUOSEN: {
    PROXY_QQ: "/domain_upstream/proxyfinanceqqcom",
    SQT: "/domain_upstream/sqtgtimgcn",
  },
  ZHONGXINJIANTOU: {
    PROXY_QQ: "https://zxgcloud.csc108.com/domain_upstream/proxyfinanceqqcom",
    SQT: "https://zxgcloud.csc108.com/domain_upstream/sqtgtimgcn",
  },
}),
  (exports.SIGN_KEY = o),
  (exports.SOURCEENUM = {
    DEFAULT: "wzq",
    DAFENG: "df",
    GUOSEN: "oem_guosen",
    ZHONGXINJIANTOU: "oem_jiantou",
  });
