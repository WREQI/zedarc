var e = require("../../../@babel/runtime/helpers/typeof"),
  r = require("../../../@babel/runtime/helpers/slicedToArray"),
  a = require("../../../common/vendor.js");
require("../../sdk/lib/api.js");
var t = require("../../sdk/platform/mp-weixin.js");
require("../../aegis/platform/not-wujie.js"),
  (exports.zxgAdapter = function (s) {
    var d = a.buildFullPath(s.baseURL, s.url);
    return new Promise(function (i, o) {
      performance.now(),
        t.sdk.request(
          {
            method: s.method.toUpperCase(),
            url: a.buildURL(d, s.params, s.paramsSerializer),
            header: s.headers,
            data: s.data,
            dataType: s.dataType,
            responseType: s.responseType,
            sslVerify: s.sslVerify,
          },
          function (t) {
            if ("request:ok" === t.err_msg) {
              t = {
                data: t.data,
                status: t.statusCode || 200,
                errMsg: t.err_msg,
                header: t.header,
                config: s,
              };
              try {
                if ("string" == typeof t.data) {
                  var d;
                  (d = t.data.match(/"retcode":"(\d+)"/) || []),
                    "0" === r(d, 2)[1] ? 0 : 1;
                } else
                  "object" == e(t.data) && ("0" === t.data.retcode ? 0 : 1);
              } catch (e) {}
            } else
              t = {
                data: { retcode: t.err_code, retmsg: t.err_desc },
                status: 200,
                errMsg: t.err_msg,
                header: t.header,
                config: s,
              };
            a.settle(i, o, t);
          }
        );
    });
  });
