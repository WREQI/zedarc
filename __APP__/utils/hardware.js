var e = require("../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../@babel/runtime/helpers/asyncToGenerator");
require("../app.js");
var t = require("../common/vendor.js");
require("../service/broker.js");
var n = require("../service/aegis/platform/not-wujie.js"),
  a = require("./getPlatform.js");
require("../service/sdk/lib/api.js");
var i = require("../service/sdk/platform/mp-weixin.js"),
  o = require("../config/broker/11100/index.js"),
  s = a.getPlatform(),
  c = s.isZxg,
  u = s.isZxgHarmony,
  p = s.bizPlatformVer,
  l = o.brokerConfig.trade.notification.audioSrc,
  v = t.debounce(
    (function () {
      var a = r(
        e().mark(function r(a) {
          var o;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!c || u || !t.gte(p, "11.27.0")) {
                      e.next = 10;
                      break;
                    }
                    return (e.prev = 1), (e.next = 4), i.sdk.playVoice({});
                  case 4:
                    e.next = 9;
                    break;
                  case 6:
                    (e.prev = 6),
                      (e.t0 = e.catch(1)),
                      n.aegisReporter.reportEvent("ORDER-AUDIO-STATE", {
                        ext2: "zxg",
                        ext3: "invoke playVoice fail",
                      });
                  case 9:
                    return e.abrupt("return");
                  case 10:
                    ((o = t.index.createInnerAudioContext()).src = l),
                      o.onPlay(function () {}),
                      o.onError(function (e) {
                        n.aegisReporter.reportEvent("ORDER-AUDIO-STATE", {
                          ext2: c ? "zxg" : "wzq",
                          ext3: "fail",
                        });
                      });
                    try {
                      o.play();
                    } catch (e) {}
                    "function" == typeof a && a(o);
                  case 14:
                  case "end":
                    return e.stop();
                }
            },
            r,
            null,
            [[1, 6]]
          );
        })
      );
      return function (e) {
        return a.apply(this, arguments);
      };
    })(),
    100
  ),
  f = t.debounce(
    r(
      e().mark(function r() {
        var t,
          n = arguments;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (t = n.length > 0 && void 0 !== n[0] ? n[0] : 400),
                    (e.prev = 1),
                    (e.next = 4),
                    i.sdk.vibrate(t)
                  );
                case 4:
                  e.next = 8;
                  break;
                case 6:
                  (e.prev = 6), (e.t0 = e.catch(1));
                case 8:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[1, 6]]
        );
      })
    ),
    100
  );
(exports.beep = v),
  (exports.destroyInnerAudioContext = function (e) {
    var r;
    e && (null == (r = e.destroy) || r.call(e), (e = null));
  }),
  (exports.vibrate = f);
