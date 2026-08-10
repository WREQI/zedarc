var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var n = require("../../common/vendor.js"),
  t = require("../../service/stat/mp-weixin.js"),
  a = require("../../service/aegis/platform/not-wujie.js"),
  u = require("../../utils/getPlatform.js");
require("../../service/broker.js");
var i = require("../../cgi/apply.js"),
  l = require("../../adapter/router.js"),
  o = require("../../config/broker/11100/index.js"),
  s = n.defineStore("ApplyChannelStore", function () {
    var s,
      c = n.ref(null),
      p = null;
    function v() {
      return f.apply(this, arguments);
    }
    function f() {
      return (f = r(
        e().mark(function i() {
          var l, o, s, v, f;
          return e().wrap(function (i) {
            for (;;)
              switch ((i.prev = i.next)) {
                case 0:
                  if (!p) {
                    i.next = 2;
                    break;
                  }
                  return i.abrupt("return", p);
                case 2:
                  if (!c.value) {
                    i.next = 4;
                    break;
                  }
                  return i.abrupt("return", Promise.resolve(c.value));
                case 4:
                  if (
                    ((l = u.getPlatform()),
                    (o = l.isWeixin),
                    (s = l.isOEM),
                    o && !s)
                  ) {
                    i.next = 7;
                    break;
                  }
                  return i.abrupt("return", Promise.resolve(null));
                case 7:
                  return (
                    (v = t.stat.getChannel()),
                    (f = v.fchannel_id_o),
                    i.abrupt(
                      "return",
                      f
                        ? (p = new Promise(
                            (function () {
                              var t = r(
                                e().mark(function r(t, u) {
                                  var i, l, o, s, v, d, h;
                                  return e().wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (e.prev = 0),
                                              (v = "channel_id=".concat(f)),
                                              (e.next = 4),
                                              n.__CJS__export_default__$1.get({
                                                appid: "base",
                                                schemaid: "channel_manage",
                                                filter: encodeURIComponent(v),
                                              })
                                            );
                                          case 4:
                                            (d = e.sent),
                                              (h =
                                                (null ==
                                                (i =
                                                  null == d ? void 0 : d.data)
                                                  ? void 0
                                                  : i[0]) || null),
                                              (c.value = h),
                                              t(h),
                                              (e.next = 12);
                                            break;
                                          case 9:
                                            (e.prev = 9),
                                              (e.t0 = e.catch(0)),
                                              u(e.t0),
                                              null ==
                                                (s =
                                                  null ==
                                                  (o =
                                                    null ==
                                                    (l = a.aegisReporter)
                                                      ? void 0
                                                      : l.sdk)
                                                    ? void 0
                                                    : o.error) ||
                                                s.call(o, {
                                                  msg: "fetchChannelInfoFail",
                                                  ext3: f,
                                                  trace: "trace",
                                                });
                                          case 12:
                                            return (
                                              (e.prev = 12),
                                              (p = null),
                                              e.finish(12)
                                            );
                                          case 15:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    r,
                                    null,
                                    [[0, 9, 12, 15]]
                                  );
                                })
                              );
                              return function (e, r) {
                                return t.apply(this, arguments);
                              };
                            })()
                          ))
                        : Promise.resolve(null)
                    )
                  );
                case 9:
                case "end":
                  return i.stop();
              }
          }, i);
        })
      )).apply(this, arguments);
    }
    return {
      fetchChannelInfo: v,
      isPayProjectChannel: n.computed(function () {
        var e = c.value;
        return !!e && "pay" === e.main_project;
      }),
      setApplyChannel:
        ((s = r(
          e().mark(function r(n) {
            var t;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), v();
                    case 3:
                      (t = (function () {
                        var e,
                          r = l.route().query.qrcode,
                          n = void 0 === r ? "" : r;
                        if (n) return n;
                        var t = {
                          10100: function () {
                            var e;
                            return (
                              {
                                AMS: "01",
                                字节广告: "02",
                                小红书广告: "03",
                                百度广告: "04",
                                应用市场广告: "05",
                                话费: "06",
                                信用卡: "07",
                              }[
                                null == (e = c.value)
                                  ? void 0
                                  : e.first_sub_project
                              ] || ""
                            );
                          },
                          12800: function () {
                            var e,
                              r = {
                                zxg: "CpSrJjp253",
                                "mp-weixin": "FF2zVJv06u",
                                "h5-weixin": "TXqFpIcHRtYE",
                                AMS: "1iOAv14Hwj",
                                字节广告: "jLNgbwGKXZ",
                                小红书广告: "gqXdliRAwQ",
                                百度广告: "XSJlK53DeC",
                                应用市场广告: "eEEsCLY1da",
                                话费: "htVNb4lG9W",
                                信用卡: "XQuLMGJDCc",
                              };
                            return (
                              r[
                                null == (e = c.value)
                                  ? void 0
                                  : e.first_sub_project
                              ] ||
                              r[u.getPlatform().bizPlatform] ||
                              ""
                            );
                          },
                          15900: function () {
                            var e, r;
                            return (
                              {
                                话费: "0",
                                信用卡: "1",
                                AMS: "2",
                                应用市场广告: "4",
                              }[
                                null == (e = c.value)
                                  ? void 0
                                  : e.first_sub_project
                              ] ||
                              { OZB: "3" }[
                                null == (r = c.value) ? void 0 : r.pos_id
                              ] ||
                              ""
                            );
                          },
                        };
                        return (
                          (null == (e = t[o.brokerConfig.base.code])
                            ? void 0
                            : e.call(t)) || ""
                        );
                      })()),
                        i.applyCgi.setApplyChannel(t, n),
                        (e.next = 9);
                      break;
                    case 7:
                      (e.prev = 7), (e.t0 = e.catch(0));
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              null,
              [[0, 7]]
            );
          })
        )),
        function (e) {
          return s.apply(this, arguments);
        }),
    };
  });
exports.useChannelStore = s;
