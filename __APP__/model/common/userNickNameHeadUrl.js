var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../utils/getPlatform.js");
require("../../service/sdk/lib/api.js");
var s = require("../../service/sdk/platform/mp-weixin.js"),
  t = require("../../stores/user/useUserinfo.js");
exports.userNickNameHeadUrl = r(
  e().mark(function r() {
    var a, i, u, c, l, o, m, p, d, k;
    return e().wrap(
      function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              if (
                ((i = ""),
                (u = ""),
                (c = n.getPlatform()),
                (l = c.isZxg),
                (o = c.isEscapeMode),
                (m = t.useUserinfoStore()),
                (p = m.getUserInfo),
                !l || o)
              ) {
                e.next = 7;
                break;
              }
              return (e.next = 5), null == (a = s.sdk) ? void 0 : a.login();
            case 5:
              return (
                (d = e.sent),
                e.abrupt(
                  "return",
                  ((i = (null == d ? void 0 : d.nickName) || ""),
                  (u = (null == d ? void 0 : d.headUrl) || ""),
                  { nickName: i, headUrl: u })
                )
              );
            case 7:
              return (e.prev = 7), (e.next = 10), p();
            case 10:
              (k = e.sent), (i = k.nickname), (u = k.headimgurl), (e.next = 16);
              break;
            case 14:
              (e.prev = 14), (e.t0 = e.catch(7));
            case 16:
              return e.abrupt("return", { nickName: i, headUrl: u });
            case 17:
            case "end":
              return e.stop();
          }
      },
      r,
      null,
      [[7, 14]]
    );
  })
);
