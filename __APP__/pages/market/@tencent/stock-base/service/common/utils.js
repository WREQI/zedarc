var t = {
    WZQ: "/",
    SNP: "https://snp.tenpay.com/",
    PROXY_QQ: "https://proxy.finance.qq.com/",
    BISHENG: "https://bisheng.tenpay.com/fcgi-bin/",
    SQT: "https://sqt.gtimg.cn/",
    TENPAY: "https://wzq.tenpay.com/",
  },
  Q = {
    WZQ: "WZQ",
    SNP: "SNP",
    PROXY_QQ: "PROXY_QQ",
    OPENAPI_QQ: "OPENAPI_QQ",
    BISHENG: "BISHENG",
    SQT: "SQT",
    TENPAY: "TENPAY",
  };
(exports.API_HOST_ENUM = Q),
  (exports.getApiFullUrl = function (n) {
    var p =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Q.WZQ,
      c = arguments.length > 2 ? arguments[2] : void 0;
    try {
      if (c)
        return (p === Q.WZQ ? "https://wzq.tenpay.com".concat(t[p]) : t[p]) + n;
    } catch (t) {}
    return t[p] + n;
  });
