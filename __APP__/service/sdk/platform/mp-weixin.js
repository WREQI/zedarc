var e,
  r,
  n,
  t,
  i = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  u = require("../../../@babel/runtime/helpers/objectSpread2"),
  a = require("../../../common/vendor.js"),
  c = require("../lib/api.js"),
  s = require("../lib/common.js"),
  l = require("../lib/enum.js"),
  p = require("../../cookie/mp-weixin.js"),
  f = require("../../log/index.js"),
  d = require("../../../config/mpConfig.js"),
  v = require("../../navigateMp.js"),
  m = require("../../../utils/getPlatform.js"),
  h = require("../../../utils/index.js"),
  g = m.getPlatform().isMpPlugin,
  S = new f.Log(),
  A = new p.AdapterCookie(),
  T = l.ENUM_SDK_STATUS.READY,
  k = {},
  w = function (e) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return new Promise(function (t, i) {
      var o, c, s, p, f, d, v;
      function m() {
        v && (clearTimeout(v), (v = null));
      }
      n.wxAPITimeout &&
        (v = setTimeout(function () {
          i({
            retcode: l.ENUM_SDK_RESULTS.TIMEOUT,
            errmsg: "调用API超时",
            errcode: "",
          }),
            m();
        }, n.wxAPITimeout));
      var h,
        g,
        A = function (e) {
          var r = { errmsg: e.errMsg, errcode: e.errCode };
          delete e.errMsg, delete e.errCode, t(u(u({}, e), r)), m();
        },
        T = function (e) {
          S.error(JSON.stringify(e));
          var r = /[:|\s]cancel/gi.test(e.errMsg);
          i({
            retcode: r
              ? l.ENUM_SDK_RESULTS.CANCELED
              : l.ENUM_SDK_RESULTS.FAILED,
            errmsg: e.errMsg,
            errcode: e.errCode,
          }),
            m();
        },
        k = n.complete || function () {};
      if (
        n.precheckApiExist &&
        !(g = n.pluginCallMp
          ? null ==
            (s =
              null ==
              (c =
                null == (o = requireMiniProgram()) ? void 0 : o.main2Plugin())
                ? void 0
                : c.mainWx())
            ? void 0
            : s[e]
          : null == (p = a.wx$1)
          ? void 0
          : p[e])
      )
        return (
          i({
            retcode: l.ENUM_SDK_RESULTS.NO_SUPPORT,
            errmsg: "不支持该API",
            errcode: "",
          }),
          void m()
        );
      (h = n.pluginCallMp
        ? g
          ? g(u(u({}, r), {}, { success: A, fail: T, complete: k }))
          : requireMiniProgram()
              .main2Plugin()
              .mainMpWx(
                e,
                u(u({}, r), {}, { success: A, fail: T, complete: k })
              )
        : null == (d = (f = a.wx$1)[e])
        ? void 0
        : d.call(f, u(u({}, r), {}, { success: A, fail: T, complete: k }))),
        "function" == typeof n.objCallback && n.objCallback(h);
    });
  },
  I = Object.assign({}, s.common, {
    init: function () {
      return o(
        i().mark(function e() {
          return i().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )();
    },
    can: function (e) {
      var r = {};
      return new Promise(function (n) {
        a.isArray(e) || (e = Array.prototype.slice.call(e));
        for (var t = 0; t < e.length; t++) {
          var i = e[t];
          if (k[i]) r[i] = k[i];
          else {
            var o = a.wx$1.canIUse(i);
            (r[i] = o), (k[i] = o);
          }
        }
        if (Object.keys(r).length === e.length)
          return n(
            (function (e) {
              var r = !0;
              for (var n in e)
                e.hasOwnProperty(n) &&
                  (c.API.versionControl[n] &&
                    (e[n] =
                      e[n] &&
                      c.API.version.compare(
                        c.API.versionControl[n][ENV.OS.ios ? "ios" : "android"]
                      )),
                  e[n] || (r = !1));
              return r;
            })(r)
          );
        n(!1);
      });
    },
    getNetworkType: function () {
      return o(
        i().mark(function e() {
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.prev = 0), (e.next = 3), w(c.API.getNetworkType);
                  case 3:
                    return e.abrupt("return", e.sent.networkType.toUpperCase());
                  case 6:
                    return (
                      (e.prev = 6), (e.t0 = e.catch(0)), e.abrupt("return", !1)
                    );
                  case 9:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[0, 6]]
          );
        })
      )();
    },
    chooseImage: function (e) {
      var r = e.sourceType,
        n = e.sizeType,
        t = e.count;
      return (
        (r && 0 !== r.length) ||
          (r = [
            l.ENUM_SDK_CONSTANTS.SOURCE.CAMERA,
            l.ENUM_SDK_CONSTANTS.SOURCE.ALBUM,
          ]),
        (n && 0 !== n.length) ||
          (n = [
            l.ENUM_SDK_CONSTANTS.QUALITY.ORIGINAL,
            l.ENUM_SDK_CONSTANTS.QUALITY.COMPRESSED,
          ]),
        w(c.API.chooseImage, { sourceType: r, sizeType: n, count: t })
      );
    },
    uploadFile: function (e) {
      return o(
        i().mark(function r() {
          var n, t, o, u, s, l, p, f, d, v;
          return i().wrap(function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (n = e.url),
                    (t = e.filePath),
                    (o = e.formData),
                    (u = e.name),
                    (s = e.header),
                    (l = void 0 === s ? {} : s),
                    (p = e.taskCallback),
                    (f = void 0 === p ? a.noop : p),
                    (l.Cookie = A.getCookiesStr()),
                    (r.next = 4),
                    w(
                      c.API.uploadFile,
                      { url: n, filePath: t, name: u, header: l, formData: o },
                      { objCallback: f }
                    )
                  );
                case 4:
                  if (200 === (d = r.sent).statusCode) {
                    r.next = 7;
                    break;
                  }
                  throw d;
                case 7:
                  if ("0" === (v = JSON.parse(d.data)).retcode) {
                    r.next = 10;
                    break;
                  }
                  throw v;
                case 10:
                  return r.abrupt("return", v);
                case 11:
                case "end":
                  return r.stop();
              }
          }, r);
        })
      )();
    },
    downloadFile: function (e) {
      var r = e.url,
        n = e.header,
        t = void 0 === n ? {} : n,
        i = e.timeout,
        o = void 0 === i ? 6e4 : i,
        u = e.filePath,
        s = e.taskCallback,
        l = void 0 === s ? a.noop : s;
      return w(
        c.API.downloadFile,
        { url: r, header: t, timeout: o, filePath: u },
        { objCallback: l }
      );
    },
    uploadImage: function (e) {
      return (e.name = e.name || "photo"), this.uploadFile(e);
    },
    downloadImage: function (e) {
      return this.downloadFile(e);
    },
    previewImage: function (e) {
      return o(
        i().mark(function r() {
          var n, t;
          return i().wrap(function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (n = e.urls),
                    (t = e.current),
                    r.abrupt(
                      "return",
                      w(c.API.previewImage, { urls: n, current: t })
                    )
                  );
                case 2:
                case "end":
                  return r.stop();
              }
          }, r);
        })
      )();
    },
    previewMedia: function (e) {
      return o(
        i().mark(function r() {
          var n, t;
          return i().wrap(function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (n = e.sources),
                    (t = e.current),
                    r.abrupt(
                      "return",
                      w(c.API.previewMedia, { sources: n, current: t })
                    )
                  );
                case 2:
                case "end":
                  return r.stop();
              }
          }, r);
        })
      )();
    },
    closeWindow: function () {
      a.wx$1.navigateBack();
    },
    setPageTitle: function (e) {
      return o(
        i().mark(function r() {
          var n, t, o;
          return i().wrap(function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (n = e.title),
                    (t = void 0 === n ? "" : n),
                    (o = !1),
                    r.abrupt(
                      "return",
                      (h.getIsMpPluginComponent() && (o = !0),
                      w(
                        "setNavigationBarTitle",
                        { title: t },
                        { pluginCallMp: o }
                      ))
                    )
                  );
                case 3:
                case "end":
                  return r.stop();
              }
          }, r);
        })
      )();
    },
    chooseVideo: function (e) {
      var r = e.sourceType,
        n = e.maxDuration,
        t = e.camera;
      return (
        (r && 0 !== r.length) ||
          (r = [
            l.ENUM_SDK_CONSTANTS.SOURCE.CAMERA,
            l.ENUM_SDK_CONSTANTS.SOURCE.ALBUM,
          ]),
        (n = +n || 10),
        (t && 0 !== t.length) || (t = l.ENUM_SDK_CONSTANTS.SOURCE.FRONT),
        w(c.API.chooseVideo, { sourceType: r, maxDuration: n, camera: t })
      );
    },
    uploadVideo: function (e) {
      return (e.name = e.name || "video"), this.uploadFile(e);
    },
    checkIsSupportFacialRecognition: function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return (
        (e.checkAliveType =
          +e.checkAliveType || l.ENUM_SDK_CONSTANTS.ALIVE_TYPE.NUMBER),
        w(c.API.checkIsSupportFacialRecognition, e, { pluginCallMp: !0 })
      );
    },
    requestWxFacePictureVerifyUnionVideo: function (e) {
      return (
        (e.checkAliveType =
          +e.checkAliveType || l.ENUM_SDK_CONSTANTS.ALIVE_TYPE.NUMBER),
        w("startFacialRecognitionVerify", e, { pluginCallMp: g })
      );
    },
    checkIsSupportFaceVerifyV2: function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return w("checkIsSupportFacialRecognition", e, {
        pluginCallMp: g,
        precheckApiExist: !0,
      }).then(
        function () {
          return !0;
        },
        function () {
          return !1;
        }
      );
    },
    requestWxFaceVerifyV2: function (e) {
      var r = {
        verifyId:
          (null == e ? void 0 : e.faceVerifyKey) ||
          (null == e ? void 0 : e.verifyId) ||
          "",
      };
      return w("requestFacialVerify", r, {
        pluginCallMp: g,
        precheckApiExist: !0,
      });
    },
    hideMenuItems: function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : ["shareAppMessage", "shareTimeline"];
      w(c.API.hideMenuItems, { menus: e });
    },
    getSystemInfo: function () {
      return o(
        i().mark(function e() {
          var r;
          return i().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), w(c.API.getSystemInfo);
                case 2:
                  return (
                    (r = e.sent),
                    e.abrupt("return", {
                      os: r.platform,
                      appVersion: r.version,
                      osVersion: r.system,
                    })
                  );
                case 4:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )();
    },
    handleJSTouchEventFirst: function () {
      return new Promise(function (e) {
        return e();
      });
    },
    makePhoneCall: function (e) {
      w("makePhoneCall", { phoneNumber: e });
    },
    vibrate: function () {
      w("vibrateLong");
    },
    openUrlWithExtraWebview: function (e) {
      if (e.url) {
        var r = e.url;
        if (
          (e.isThirdUrl &&
            (r = a.dist.urltools.make(e.url, { returl: h.getH5Url() })),
          r)
        ) {
          if (
            ((r = ""
              .concat(h.getWebviewUrl(), "?url=")
              .concat(encodeURIComponent(r))),
            g)
          )
            return void v.navigateTo({
              url: r,
              linkType: d.linkTypeMap.plugin2Plugin,
            });
          a.index.navigateTo({ url: r });
        }
      }
    },
    importAddress:
      ((t = o(
        i().mark(function e() {
          return i().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt("return", w("chooseAddress"));
                case 1:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )),
      function () {
        return t.apply(this, arguments);
      }),
    applyAccountRetain: function () {
      return o(
        i().mark(function e() {
          return i().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )();
    },
    requirePrivacyAuthorize:
      ((n = o(
        i().mark(function e() {
          return i().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt("return", w("requirePrivacyAuthorize"));
                case 1:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )),
      function () {
        return n.apply(this, arguments);
      }),
    setContainerHeight: function () {},
    postDataToHost: function (e) {},
    onUpdateTradeInfo: function () {},
    onEmbeddedTradeReady: function () {},
    notifyUserState: function () {},
    notifyBusinessLoaded: function () {},
    getLocation:
      ((r = o(
        i().mark(function e() {
          var r,
            n = arguments;
          return i().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (r = n.length > 0 && void 0 !== n[0] ? n[0] : "gcj02"),
                    e.abrupt("return", w("getLocation", { type: r }))
                  );
                case 2:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )),
      function () {
        return r.apply(this, arguments);
      }),
    openLocation:
      ((e = o(
        i().mark(function e(r) {
          return i().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    w("openLocation", {
                      latitude: r.latitude,
                      longitude: r.longitude,
                      name: r.name,
                      address: r.address,
                      scale: r.scale || 1,
                    })
                  );
                case 1:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )),
      function (r) {
        return e.apply(this, arguments);
      }),
    checkIsSupportSoterAuthentication: function (e) {
      if (g)
        return w("checkIsSupportSoterAuthentication", e, {
          wxAPITimeout: 6e3,
          precheckApiExist: !0,
          pluginCallMp: !0,
        });
    },
    checkIsSoterEnrolledInDevice: function (e) {
      if (g)
        return w("checkIsSoterEnrolledInDevice", e, {
          wxAPITimeout: 6e3,
          precheckApiExist: !0,
          pluginCallMp: !0,
        });
    },
    startSoterAuthentication: function (e) {
      if (g)
        return w("startSoterAuthentication", e, {
          precheckApiExist: !0,
          pluginCallMp: !0,
        });
    },
    setBounce: function () {},
  });
Object.defineProperty(I, "status", {
  configurable: !1,
  enumerable: !1,
  get: function () {
    return T;
  },
}),
  c.API.fullfill(I);
var C = Object.freeze(
  Object.defineProperty({ __proto__: null, default: I }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.__CJS__import__1__ = C), (exports.sdk = I);
