var e = require("../../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../../common/vendor.js");
exports.uniAdapterWrap = function (t) {
  return function (a) {
    var n = a;
    "function" == typeof t && (n = t(n)),
      n.redirect || (n = e(e({}, n), {}, { redirect: "manual" }));
    var i = r.buildFullPath(n.baseURL, n.url);
    return new Promise(function (e, t) {
      var a = r.index.request({
        method: n.method.toUpperCase(),
        url: r.buildURL(i, n.params, n.paramsSerializer),
        header: n.headers,
        data: n.data,
        dataType: n.dataType,
        responseType: n.responseType,
        sslVerify: n.sslVerify,
        timeout: n.timeout,
        enableHttp2: !0,
        redirect: n.redirect,
        complete: function (a) {
          (a = {
            data: a.data,
            status: a.statusCode,
            errMsg: a.errMsg,
            header: a.header,
            config: n,
          }),
            r.settle(e, t, a);
        },
        fail: function (e) {
          var r = e;
          r && !r.config && (r.config = n), t(r);
        },
      });
      n.cancelToken &&
        n.cancelToken.promise.then(function (e) {
          a.abort(), t(e);
        });
    });
  };
};
