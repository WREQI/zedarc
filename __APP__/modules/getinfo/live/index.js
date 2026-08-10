var e =
  require("../../../@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.default = function (e) {
    return c(this, void 0, void 0, function () {
      var r, t, n, o, c, d, f;
      return u(this, function (u) {
        switch (u.label) {
          case 0:
            return (r = 0), [4, y(e)];
          case 1:
            return (
              (t = u.sent()),
              (n = t.res),
              (o = t.reqUrl),
              n.iretcode !== v || n.type !== h ? [3, 3] : [4, y(e, n.rand)]
            );
          case 2:
            (c = u.sent()),
              (n = c.res),
              (o = c.reqUrl),
              (r += 1),
              (u.label = 3);
          case 3:
            s("raw", n);
            try {
              return (
                (d = (function (e) {
                  var r = {
                      urls: [],
                      id: "",
                      duration: 1 / 0,
                      durationS: 1 / 0,
                      paid: 0,
                      definitions: [],
                      watermarks: [],
                      width: 0,
                      height: 0,
                      title: "",
                      fileSize: 0,
                      drm: !1,
                      preview: -1,
                      charged: 0,
                      license: "",
                      certificate: "",
                    },
                    t = e.iretcode,
                    n = e.iretdetailcode,
                    o = e.errinfo,
                    a = e.formats,
                    c = e.defn,
                    u = e.drmckc,
                    s = e.backurl_list,
                    d = e.playurl,
                    f = e.ispay,
                    v = e.isuserpay,
                    h = e.restpreviewcnt,
                    y = e.playtime,
                    m = e.totalplaytime;
                  if (t !== p)
                    throw i.default.liveCgiError(
                      "".concat(t),
                      "".concat(n),
                      "".concat(o)
                    );
                  (r.id = e.livesid),
                    (r.definitions = a.map(function (e) {
                      return {
                        name: e.fn,
                        displayName: e.defnname,
                        limited: !!e.vip,
                        format: e.id,
                        resolution: e.defnrate,
                        selected: e.fn === c,
                      };
                    }));
                  var b = (null == u ? void 0 : u.split("|")) || "",
                    g = b[0],
                    w = b[1],
                    q = s.map(function (e) {
                      return "string" == typeof e ? e : e.url;
                    });
                  -1 !== h &&
                    1 === f &&
                    0 === v &&
                    (r.preview = Math.min(y, m));
                  return (
                    (r.drm = !!u),
                    (r.license = g),
                    (r.certificate = w),
                    (r.urls = l([d], q, !0)),
                    (r.paid = f && v),
                    r
                  );
                })(n)),
                s("parsed", d),
                [2, a(a({}, d), { raw: n, req: { path: o, retryCount: r } })]
              );
            } catch (e) {
              throw (((f = e).data = { path: o, retryCount: r }), f);
            }
            return [2];
        }
      });
    });
  });
var r = require("../../../behaviors/logger"),
  t = require("../../../enums"),
  n = e(require("../../../index")),
  i = e(require("../../error/index")),
  o = require("../../utils/index"),
  a = function () {
    return (a =
      Object.assign ||
      function (e) {
        for (var r, t = 1, n = arguments.length; t < n; t++)
          for (var i in (r = arguments[t]))
            Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
        return e;
      }).apply(this, arguments);
  },
  c = function (e, r, t, n) {
    return new (t || (t = Promise))(function (i, o) {
      function a(e) {
        try {
          u(n.next(e));
        } catch (e) {
          o(e);
        }
      }
      function c(e) {
        try {
          u(n.throw(e));
        } catch (e) {
          o(e);
        }
      }
      function u(e) {
        var r;
        e.done
          ? i(e.value)
          : ((r = e.value),
            r instanceof t
              ? r
              : new t(function (e) {
                  e(r);
                })).then(a, c);
      }
      u((n = n.apply(e, r || [])).next());
    });
  },
  u = function (e, r) {
    var t,
      n,
      i,
      o,
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
      (o = { next: c(0), throw: c(1), return: c(2) }),
      "function" == typeof Symbol &&
        (o[Symbol.iterator] = function () {
          return this;
        }),
      o
    );
    function c(c) {
      return function (u) {
        return (function (c) {
          if (t) throw new TypeError("Generator is already executing.");
          for (; o && ((o = 0), c[0] && (a = 0)), a; )
            try {
              if (
                ((t = 1),
                n &&
                  (i =
                    2 & c[0]
                      ? n.return
                      : c[0]
                      ? n.throw || ((i = n.return) && i.call(n), 0)
                      : n.next) &&
                  !(i = i.call(n, c[1])).done)
              )
                return i;
              switch (((n = 0), i && (c = [2 & c[0], i.value]), c[0])) {
                case 0:
                case 1:
                  i = c;
                  break;
                case 4:
                  return a.label++, { value: c[1], done: !1 };
                case 5:
                  a.label++, (n = c[1]), (c = [0]);
                  continue;
                case 7:
                  (c = a.ops.pop()), a.trys.pop();
                  continue;
                default:
                  if (
                    !((i = a.trys),
                    (i = i.length > 0 && i[i.length - 1]) ||
                      (6 !== c[0] && 2 !== c[0]))
                  ) {
                    a = 0;
                    continue;
                  }
                  if (3 === c[0] && (!i || (c[1] > i[0] && c[1] < i[3]))) {
                    a.label = c[1];
                    break;
                  }
                  if (6 === c[0] && a.label < i[1]) {
                    (a.label = i[1]), (i = c);
                    break;
                  }
                  if (i && a.label < i[2]) {
                    (a.label = i[2]), a.ops.push(c);
                    break;
                  }
                  i[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }
              c = r.call(e, a);
            } catch (e) {
              (c = [6, e]), (n = 0);
            } finally {
              t = i = 0;
            }
          if (5 & c[0]) throw c[1];
          return { value: c[0] ? c[1] : void 0, done: !0 };
        })([c, u]);
      };
    }
  },
  l = function (e, r, t) {
    if (t || 2 === arguments.length)
      for (var n, i = 0, o = r.length; i < o; i++)
        (!n && i in r) ||
          (n || (n = Array.prototype.slice.call(r, 0, i)), (n[i] = r[i]));
    return e.concat(n || Array.prototype.slice.call(r));
  };
require("../../../libs/ckey");
var s = (0, r.logFactory)("live-getinfo"),
  d = {
    platform: "4210801",
    sdtfrom: "v4169",
    encryptVer: "8.4",
    appVer: n.default.getPlayerVersion(),
  },
  f = {
    production: "https://info.zb.video.qq.com",
    production_backup: "https://bk.info.zb.video.qq.com",
    test: "https://test.zb.video.qq.com",
  },
  p = 0,
  v = 32,
  h = -3;
function y(e, r) {
  return (
    void 0 === r && (r = 0),
    c(this, void 0, void 0, function () {
      var t, i;
      return u(this, function (c) {
        switch (c.label) {
          case 0:
            return (
              (t = (function (e, r) {
                void 0 === r && (r = 0);
                var t = e.defn,
                  i = e.guid,
                  c = e.vid,
                  u = e.env,
                  l = e.platform,
                  s = void 0 === l ? d.platform : l,
                  p = e.sdtfrom,
                  v = void 0 === p ? d.sdtfrom : p,
                  h = e.appid,
                  y = e.drm,
                  m = void 0 !== y && y,
                  b = e.flowid,
                  g = void 0 === b ? "" : b,
                  w = e.cgi,
                  q = void 0 === w ? "" : w,
                  k = e.requestParams,
                  E = void 0 === k ? {} : k,
                  x = (r || Math.ceil(new Date().getTime() / 1e3)).toString(),
                  S = c.cnlid,
                  V = c.livepid,
                  R = wx.getckey(S, x, d.appVer, i, s, ""),
                  C = (function (e) {
                    var r = n.default.getSystemInfo(),
                      t = r.osPlatform,
                      i = r.clientVer,
                      a = "ios" === t,
                      c = !0;
                    "android" === t &&
                      o.IS_WX &&
                      -1 === (0, o.compareVersion)(i, "8.0.38") &&
                      (c = !1);
                    return e && c ? { livedrm: a ? 16 : 32 } : {};
                  })(m),
                  _ = a(
                    a(
                      {
                        appid: h,
                        host: "qq.com",
                        cmd: "2",
                        qq: "0",
                        guid: i,
                        appVer: d.appVer,
                        stream: "2",
                        ip: "",
                        system: "1",
                        platform: s,
                        sdtfrom: v,
                        livepid: V,
                        cnlid: S,
                        tm: x,
                        encryptVer: d.encryptVer,
                        cKey: R,
                        newnettype: "1",
                        defn: t,
                        fntick: Date.now(),
                        flowid: g,
                      },
                      C
                    ),
                    E
                  );
                return ""
                  .concat(q || f[u], "?")
                  .concat((0, o.objectToQueryString)(_));
              })(e, r)),
              [4, m(e, t)]
            );
          case 1:
            return (i = c.sent()), [2, { reqUrl: t, res: i }];
        }
      });
    })
  );
}
function m(e, r) {
  return c(this, void 0, void 0, function () {
    var c, l;
    return u(this, function (u) {
      switch (u.label) {
        case 0:
          return (
            (c = e.requestHeaders),
            (l = void 0 === c ? {} : c),
            [
              4,
              (0, o.request)({
                method: "GET",
                url: r,
                header: a({ Cookie: n.default.getCookieAsString() }, l),
                success: function (e) {
                  return e.data;
                },
                fail: function (e) {
                  return (
                    s("getvinfo error", e),
                    i.default.liveCgiError(
                      t.ErrorCode.REQUEST_ERROR,
                      "".concat(e.errno),
                      t.ErrorMsg.REQUEST_ERROR
                    )
                  );
                },
              }),
            ]
          );
        case 1:
          return [2, u.sent()];
      }
    });
  });
}
