var e =
  require("../../../@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.HEVCSupportType = void 0),
  (exports.default = function (e, r) {
    return u(this, void 0, void 0, function () {
      var t, i, d, u, l, f, w, g, R, C, b, S;
      return c(this, function (c) {
        switch (c.label) {
          case 0:
            return (
              (t = ""),
              ((S = {})[a.PERFORMANCE_KEY.computeCKeyStart] = 0),
              (S[a.PERFORMANCE_KEY.computeCKeyEnd] = 0),
              (S[a.PERFORMANCE_KEY.getVideoInfoRequestStart] = 0),
              (S[a.PERFORMANCE_KEY.getVideoInfoRequestEnd] = 0),
              (S[a.PERFORMANCE_KEY.parseVideoInfoStart] = 0),
              (S[a.PERFORMANCE_KEY.parseVideoInfoEnd] = 0),
              (i = S),
              (d = e.raw),
              (u = 0),
              (P = d) && void 0 !== P.s && void 0 !== P.em
                ? [3, 4]
                : [4, y(e, r)]
            );
          case 1:
            return (l = c.sent()).res.em !== h || l.res.exem !== E
              ? [3, 3]
              : [4, y(e, r, l.res.curTime)];
          case 2:
            (l = c.sent()), (u += 1), (c.label = 3);
          case 3:
            (i = s(s({}, i), l.timeParams)),
              (t = l.buildRes.reqUrl),
              (d = l.res),
              (c.label = 4);
          case 4:
            p("raw", d);
            try {
              return (
                (i[a.PERFORMANCE_KEY.parseVideoInfoStart] = Date.now()),
                (f = e.defn),
                (w = e.sdtfrom),
                (g = void 0 === w ? v.sdtfrom : w),
                (R = e.platform),
                (C = (function (e, r) {
                  var t, i, a, d;
                  if (e.em !== m || "f" === e.s)
                    throw n.default.vodCgiError(
                      "".concat(e.em || o.ErrorCode.UNKNOWN),
                      "".concat(e.exem || o.ErrorCode.SUCCESS),
                      e.msg
                    );
                  var s = e.preview,
                    u = e.dltype,
                    c = e.vl,
                    l = e.fl,
                    p = {
                      urls: [],
                      duration: 0,
                      durationS: 0,
                      vid: "",
                      id: "",
                      paid: 0,
                      definitions: [],
                      watermarks: [],
                      width: 0,
                      height: 0,
                      title: "",
                      fileSize: 0,
                      drm: !1,
                      preview: s,
                      charged: 0,
                      license: "",
                      certificate: "",
                    },
                    f = c.vi[0];
                  if (
                    ((p.head = f.head),
                    (p.tail = f.tail),
                    (p.vid = f.vid),
                    (p.isPreview =
                      0 !== e.exem || (0 === e.exem && 8 === f.st)),
                    p.isPreview)
                  ) {
                    if (0 === s)
                      throw n.default.vodCgiError(
                        o.ErrorCode.NO_PREVIEW,
                        o.ErrorCode.SUCCESS,
                        o.ErrorMsg.NO_PREVIEW
                      );
                    p.duration = s;
                  }
                  p.id = f.lnk;
                  var v = l.fi;
                  (p.definitions = v.map(function (e) {
                    return {
                      name: e.name,
                      displayName: e.sname,
                      resolution: e.resolution,
                      selected: !!e.sl,
                      limited: !!e.lmt,
                      format: e.id,
                    };
                  })),
                    (p.watermarks = (f.wl.wi || [])
                      .filter(function (e) {
                        return /^https/.test(e.surl);
                      })
                      .map(function (e) {
                        return {
                          url: e.surl,
                          alpha: e.a,
                          width: e.w,
                          height: e.h,
                          top: e.y,
                          right: e.x,
                        };
                      }));
                  var h =
                      (null === (t = f.ckc) || void 0 === t
                        ? void 0
                        : t.split("|")) || "",
                    E = h[0],
                    y = h[1];
                  (p.license = E), (p.certificate = y), (p.drm = !!f.ckc);
                  var w = f.ul,
                    g = f.fvkey,
                    R = f.td,
                    C = f.vh,
                    b = f.vw,
                    S = f.fn,
                    P = f.fs,
                    q = f.ti,
                    V = f.ch,
                    O = w.ui,
                    _ = void 0 === O ? [] : O;
                  (p.durationS = +R),
                    p.duration || (p.duration = p.durationS),
                    (p.width = +b),
                    (p.height = +C),
                    (p.fileSize = +P),
                    (p.title = q),
                    (p.paid = +V),
                    e.play &&
                      (p.urls =
                        null ===
                          (a =
                            null === (i = e.play) || void 0 === i
                              ? void 0
                              : i.masterurl) || void 0 === a
                          ? void 0
                          : a.filter(function (e) {
                              return e;
                            }));
                  if (
                    !(
                      (null === (d = p.urls) || void 0 === d
                        ? void 0
                        : d.length) > 0
                    )
                  ) {
                    var F = "platform="
                      .concat(r.platform, "&sdtfrom=")
                      .concat(r.sdtfrom);
                    switch (u) {
                      case 1:
                        p.urls = _.map(function (e) {
                          return ""
                            .concat(e.url)
                            .concat(S, "?vkey=")
                            .concat(g, "&")
                            .concat(F);
                        });
                        break;
                      case 3:
                      case 8:
                        p.urls = _.map(function (e) {
                          var r;
                          return ""
                            .concat(e.url)
                            .concat(
                              (null === (r = e.hls) || void 0 === r
                                ? void 0
                                : r.pt) || "",
                              "&"
                            )
                            .concat(F);
                        });
                    }
                  }
                  return p;
                })(d, {
                  defn: f,
                  platform: void 0 === R ? v.platform : R,
                  sdtfrom: g,
                })),
                (i[a.PERFORMANCE_KEY.parseVideoInfoEnd] = Date.now()),
                p("parsed", C),
                [
                  2,
                  s(s({}, C), {
                    raw: d,
                    req: { path: t, retryCount: u },
                    timeParams: i,
                  }),
                ]
              );
            } catch (e) {
              throw (((b = e).data = { path: t, retryCount: u, raw: d }), b);
            }
            return [2];
        }
        var P;
      });
    });
  }),
  require("../../../@babel/runtime/helpers/Arrayincludes");
var r = require("../../../behaviors/logger"),
  t = e(require("../../../libs/md5")),
  o = require("../../../enums"),
  i = e(require("../../../index")),
  n = e(require("../../error/index")),
  a = require("../../performance/enum"),
  d = require("../../utils/index"),
  s = function () {
    return (s =
      Object.assign ||
      function (e) {
        for (var r, t = 1, o = arguments.length; t < o; t++)
          for (var i in (r = arguments[t]))
            Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
        return e;
      }).apply(this, arguments);
  },
  u = function (e, r, t, o) {
    return new (t || (t = Promise))(function (i, n) {
      function a(e) {
        try {
          s(o.next(e));
        } catch (e) {
          n(e);
        }
      }
      function d(e) {
        try {
          s(o.throw(e));
        } catch (e) {
          n(e);
        }
      }
      function s(e) {
        var r;
        e.done
          ? i(e.value)
          : ((r = e.value),
            r instanceof t
              ? r
              : new t(function (e) {
                  e(r);
                })).then(a, d);
      }
      s((o = o.apply(e, r || [])).next());
    });
  },
  c = function (e, r) {
    var t,
      o,
      i,
      n,
      a = {
        label: 0,
        sent: function () {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (n = { next: d(0), throw: d(1), return: d(2) }),
      "function" == typeof Symbol &&
        (n[Symbol.iterator] = function () {
          return this;
        }),
      n
    );
    function d(d) {
      return function (s) {
        return (function (d) {
          if (t) throw new TypeError("Generator is already executing.");
          for (; n && ((n = 0), d[0] && (a = 0)), a; )
            try {
              if (
                ((t = 1),
                o &&
                  (i =
                    2 & d[0]
                      ? o.return
                      : d[0]
                      ? o.throw || ((i = o.return) && i.call(o), 0)
                      : o.next) &&
                  !(i = i.call(o, d[1])).done)
              )
                return i;
              switch (((o = 0), i && (d = [2 & d[0], i.value]), d[0])) {
                case 0:
                case 1:
                  i = d;
                  break;
                case 4:
                  return a.label++, { value: d[1], done: !1 };
                case 5:
                  a.label++, (o = d[1]), (d = [0]);
                  continue;
                case 7:
                  (d = a.ops.pop()), a.trys.pop();
                  continue;
                default:
                  if (
                    !((i = a.trys),
                    (i = i.length > 0 && i[i.length - 1]) ||
                      (6 !== d[0] && 2 !== d[0]))
                  ) {
                    a = 0;
                    continue;
                  }
                  if (3 === d[0] && (!i || (d[1] > i[0] && d[1] < i[3]))) {
                    a.label = d[1];
                    break;
                  }
                  if (6 === d[0] && a.label < i[1]) {
                    (a.label = i[1]), (i = d);
                    break;
                  }
                  if (i && a.label < i[2]) {
                    (a.label = i[2]), a.ops.push(d);
                    break;
                  }
                  i[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }
              d = r.call(e, a);
            } catch (e) {
              (d = [6, e]), (o = 0);
            } finally {
              t = i = 0;
            }
          if (5 & d[0]) throw d[1];
          return { value: d[0] ? d[1] : void 0, done: !0 };
        })([d, s]);
      };
    }
  };
require("../../../libs/ckey");
var l,
  p = (0, r.logFactory)("getvinfo"),
  f = {
    production: "https://h5vv6.video.qq.com/getvinfo",
    production_backup: "https://bkvv.video.qq.com/getvinfo",
    test: "https://testvv.video.qq.com/getvinfo",
    production_ipv4: "https://h5vv.video.qq.com/getvinfo",
  },
  v = {
    platform: "4210801",
    sdtfrom: "v4169",
    encryptVer: "8.4",
    appVer: i.default.getPlayerVersion(),
  };
!(function (e) {
  (e[(e.base = 1)] = "base"), (e[(e.v265 = 2)] = "v265");
})(l || (exports.HEVCSupportType = l = {}));
var m = 0,
  h = 85,
  E = -3;
function y(e, r, t) {
  return (
    void 0 === t && (t = 0),
    u(this, void 0, void 0, function () {
      var o, i, n;
      return c(this, function (d) {
        switch (d.label) {
          case 0:
            return (o = {}), [4, w(e, t)];
          case 1:
            return (
              (i = d.sent()),
              (o[a.PERFORMANCE_KEY.computeCKeyStart] = i.computeCKeyStart),
              (o[a.PERFORMANCE_KEY.computeCKeyEnd] = i.computeCKeyEnd),
              (o[a.PERFORMANCE_KEY.getVideoInfoRequestStart] = Date.now()),
              [4, g(i.reqUrl, e, r)]
            );
          case 2:
            return (
              (n = d.sent()),
              (o[a.PERFORMANCE_KEY.getVideoInfoRequestEnd] = Date.now()),
              [2, { buildRes: i, res: n, timeParams: o }]
            );
        }
      });
    })
  );
}
function w(e, r) {
  return (
    void 0 === r && (r = 0),
    u(this, void 0, void 0, function () {
      var n,
        a,
        u,
        p,
        m,
        h,
        E,
        y,
        w,
        g,
        R,
        C,
        b,
        S,
        P,
        q,
        V,
        O,
        _,
        F,
        K,
        k,
        x,
        N,
        I,
        M,
        A,
        D,
        Y,
        T,
        H,
        U,
        W,
        j,
        Q,
        z,
        G,
        X,
        B,
        L,
        J,
        Z,
        $,
        ee;
      return c(this, function (c) {
        switch (c.label) {
          case 0:
            if (!(null == e ? void 0 : e.vid)) throw new Error();
            return (
              (n = e.vid),
              (a = e.fhdswitch),
              (u = void 0 === a ? 0 : a),
              (p = e.defn),
              (m = e.sdtfrom),
              (h = void 0 === m ? v.sdtfrom : m),
              (E = e.platform),
              (y = void 0 === E ? v.platform : E),
              (w = e.env),
              (g = void 0 === w ? "production" : w),
              (R = e.guid),
              (C = void 0 === R ? "" : R),
              (b = e.drm),
              (S = void 0 !== b && b),
              (P = e.supportHEVC),
              (q = void 0 === P ? 0 : P),
              (V = e.show1080p),
              (O = void 0 !== V && V),
              (_ = e.supportedPaidFormat),
              (F = void 0 === _ ? [] : _),
              (K = e.flowid),
              (k = void 0 === K ? "" : K),
              (x = e.cgi),
              (N = void 0 === x ? "" : x),
              (I = e.requestParams),
              (M = void 0 === I ? {} : I),
              (D = (A = "string" != typeof n) ? n.previd : n),
              (Y = A
                ? (0, t.default)("".concat(D, "magicCC")).substring(0, 12)
                : D),
              (T = i.default.getSystemInfo()),
              (H = T.osPlatform),
              (U = T.clientVer),
              (W = "ios" === H),
              (Q = !(j = "android" === H) && !W),
              (z = (function (e) {
                var r = e.drm,
                  t = e.clientVer,
                  o = e.isIOS,
                  i = e.isAndroid,
                  n = !0;
                i &&
                  d.IS_WX &&
                  -1 === (0, d.compareVersion)(t, "8.0.38") &&
                  (n = !1);
                i &&
                  !d.IS_WX &&
                  -1 === (0, d.compareVersion)(t, "8.9.73") &&
                  (n = !1);
                return r && n
                  ? { drm: o ? 16 : 32, ckcver: o ? 1 : 0, spmasterm3u8: 3 }
                  : void 0;
              })({ drm: S, clientVer: U, isIOS: W, isAndroid: j })),
              (G = (r || Math.ceil(new Date().getTime() / 1e3)).toString()),
              (X = Date.now()),
              (B = wx.getckey(Y, G, v.appVer, C, y, "")),
              (L = Date.now()),
              O && !F.includes(o.PaidFormat.FHD) && F.push(o.PaidFormat.FHD),
              (J = (function (e) {
                var r = wx.getSystemInfoSync(),
                  t = r.system,
                  i = r.model,
                  n = {
                    spaudio: 0,
                    spvideo: 0,
                    spsfrhdr: 0,
                    defnpayver: e.includes(o.PaidFormat.FHD) ? 1 : 0,
                  };
                if (t.startsWith("iOS")) {
                  var a = t.slice(4);
                  -1 !== (0, d.compareVersion)(a, "14.1") &&
                    (0, d.checkIphoneModel)(i, 10) &&
                    (e.includes(o.PaidFormat.HDR10) &&
                      ((n.spvideo |= 4), (n.defnpayver |= 4)),
                    e.includes(o.PaidFormat.SFR_HDR) &&
                      ((n.spvideo |= 4),
                      (n.spaudio |= 64),
                      (n.spsfrhdr = 100),
                      (n.defnpayver |= 4)),
                    e.includes(o.PaidFormat.DOLBY) &&
                      ((n.spaudio |= 4),
                      (n.spvideo |= 16),
                      (n.defnpayver |= 4)));
                }
                return n;
              })(F)),
              (ee = {
                clip: "4",
                _rnd: G,
                encryptVer: v.encryptVer,
                cKey: B,
                appVer: v.appVer,
                defn: p,
                sdtfrom: h,
                fhdswitch: u,
                guid: C,
                platform: y,
                otype: "ojson",
                dtype: Q ? "1" : "3",
                hevclv: q & l.base ? 26 : 0,
                spv265: q & l.v265 ? 15 : 0,
                from: "miniapp",
                sphttps: 1,
              }),
              [4, i.default.getNetworkType()]
            );
          case 1:
            return (
              (Z = s.apply(void 0, [
                s.apply(void 0, [
                  s.apply(void 0, [
                    ((ee.newnettype = c.sent()),
                    (ee.spwm = 1),
                    (ee.flowid = k),
                    ee),
                    z,
                  ]),
                  J,
                ]),
                M,
              ])),
              A ? ((Z.previd = D), (Z.previd_type = 0)) : (Z.vid = D),
              ($ = (0, d.objectToQueryString)(Z)),
              [
                2,
                {
                  reqUrl: "".concat(N || f[g], "?").concat($),
                  computeCKeyStart: X,
                  computeCKeyEnd: L,
                },
              ]
            );
        }
      });
    })
  );
}
function g(e, r, t) {
  return u(this, void 0, void 0, function () {
    var a, u;
    return c(this, function (c) {
      switch (c.label) {
        case 0:
          return (
            (a = r.requestHeaders),
            (u = void 0 === a ? {} : a),
            [
              4,
              (0, d.request)(
                {
                  method: "GET",
                  url: e,
                  header: s({ Cookie: i.default.getCookieAsString() }, u),
                  success: function (e) {
                    return e.data;
                  },
                  fail: function (e) {
                    return (
                      p("getvinfo error", e),
                      n.default.vodCgiError(
                        o.ErrorCode.REQUEST_ERROR,
                        "".concat(e.errno),
                        o.ErrorMsg.REQUEST_ERROR
                      )
                    );
                  },
                },
                t
              ),
            ]
          );
        case 1:
          return [2, c.sent()];
      }
    });
  });
}
