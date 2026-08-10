var e = require("../../@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.default = void 0);
var t = require("../../@babel/runtime/helpers/typeof");
require("../../@babel/runtime/helpers/Objectentries");
var r,
  i = e(require("../../index")),
  n = require("../../enums"),
  a = require("../dataset/enum"),
  o = require("../getinfo/vod/index"),
  s = e(require("../plugins/base/index")),
  u = e(require("./beacon_mp.min.js")),
  l =
    ((r = function (e, t) {
      return (r =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        })(e, t);
    }),
    function (e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Class extends value " + String(t) + " is not a constructor or null"
        );
      function i() {
        this.constructor = e;
      }
      r(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((i.prototype = t.prototype), new i()));
    }),
  c = function () {
    return (c =
      Object.assign ||
      function (e) {
        for (var t, r = 1, i = arguments.length; r < i; r++)
          for (var n in (t = arguments[r]))
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
      }).apply(this, arguments);
  },
  d = function (e, t, r, i) {
    return new (r || (r = Promise))(function (n, a) {
      function o(e) {
        try {
          u(i.next(e));
        } catch (e) {
          a(e);
        }
      }
      function s(e) {
        try {
          u(i.throw(e));
        } catch (e) {
          a(e);
        }
      }
      function u(e) {
        var t;
        e.done
          ? n(e.value)
          : ((t = e.value),
            t instanceof r
              ? t
              : new r(function (e) {
                  e(t);
                })).then(o, s);
      }
      u((i = i.apply(e, t || [])).next());
    });
  },
  f = function (e, t) {
    var r,
      i,
      n,
      a,
      o = {
        label: 0,
        sent: function () {
          if (1 & n[0]) throw n[1];
          return n[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (a = { next: s(0), throw: s(1), return: s(2) }),
      "function" == typeof Symbol &&
        (a[Symbol.iterator] = function () {
          return this;
        }),
      a
    );
    function s(s) {
      return function (u) {
        return (function (s) {
          if (r) throw new TypeError("Generator is already executing.");
          for (; a && ((a = 0), s[0] && (o = 0)), o; )
            try {
              if (
                ((r = 1),
                i &&
                  (n =
                    2 & s[0]
                      ? i.return
                      : s[0]
                      ? i.throw || ((n = i.return) && n.call(i), 0)
                      : i.next) &&
                  !(n = n.call(i, s[1])).done)
              )
                return n;
              switch (((i = 0), n && (s = [2 & s[0], n.value]), s[0])) {
                case 0:
                case 1:
                  n = s;
                  break;
                case 4:
                  return o.label++, { value: s[1], done: !1 };
                case 5:
                  o.label++, (i = s[1]), (s = [0]);
                  continue;
                case 7:
                  (s = o.ops.pop()), o.trys.pop();
                  continue;
                default:
                  if (
                    !((n = o.trys),
                    (n = n.length > 0 && n[n.length - 1]) ||
                      (6 !== s[0] && 2 !== s[0]))
                  ) {
                    o = 0;
                    continue;
                  }
                  if (3 === s[0] && (!n || (s[1] > n[0] && s[1] < n[3]))) {
                    o.label = s[1];
                    break;
                  }
                  if (6 === s[0] && o.label < n[1]) {
                    (o.label = n[1]), (n = s);
                    break;
                  }
                  if (n && o.label < n[2]) {
                    (o.label = n[2]), o.ops.push(s);
                    break;
                  }
                  n[2] && o.ops.pop(), o.trys.pop();
                  continue;
              }
              s = t.call(e, o);
            } catch (e) {
              (s = [6, e]), (i = 0);
            } finally {
              r = n = 0;
            }
          if (5 & s[0]) throw s[1];
          return { value: s[0] ? s[1] : void 0, done: !0 };
        })([s, u]);
      };
    }
  },
  p = 0,
  v = 4,
  h = 5,
  m = "none",
  y = "L3",
  b = (function (e) {
    function r(t, r, i) {
      void 0 === r && (r = {});
      var n = e.call(this, t) || this;
      return (
        (n.seq = -1),
        (n.bufferCount = 0),
        (n.bufferParams = { tcount: 0, tduration: 0, val: [] }),
        (n.bufferCache = []),
        (n.seekCount = 0),
        (n.seekParams = { tcount: 0, tbcount: 0, tbduration: 0, val: [] }),
        (n.seekCache = []),
        (n.setLevelParams = {}),
        (n.config = r.params || {}),
        (n.beforeReport = r.beforeReport),
        (n.extraParams = i),
        n.bindEvents(!0),
        n
      );
    }
    return (
      l(r, e),
      (r.prototype.destroy = function () {
        this.bindEvents(!1), (this.player = null);
      }),
      (r.prototype.bindEvents = function (e) {
        var t = this.player.internalMsg[e ? "on" : "off"].bind(
          this.player.internalMsg
        );
        t(n.EventsExt.DATASET_STATE_UPDATE, this.patchStateChange, this),
          t(n.EventsExt.PROGRESS_CHANGING, this.saveSeekParams, this),
          t(n.EventsExt.PROGRESS_CHANGE, this.saveLastSeekParams, this),
          this.player[e ? "on" : "off"](
            n.Events.VIDEO_SETLEVEL_START,
            this.saveBeforeSetLevel,
            this
          );
      }),
      (r.prototype.patchStateChange = function (e) {
        var t,
          r =
            (((t = {})[a.DataState.FIRST_PLAY] = this.step30),
            (t[a.DataState.BUFFER_START] = this.saveBufferParams),
            (t[a.DataState.BUFFER_END] = this.step35),
            (t[a.DataState.SEEK_END] = this.step40),
            (t[a.DataState.SET_LEVEL_START] = this.setLevelStart),
            (t[a.DataState.SET_LEVEL_END] = this.step45),
            (t[a.DataState.LOAD_START] = this.cacheGetInfoParams),
            (t[a.DataState.SESSION_END] = this.step50),
            t),
          i = e.key;
        r[i] && r[i].call(this, e);
      }),
      (r.prototype.getDefaultReportParams = function (e, t) {
        var r, n, o, s;
        return (
          void 0 === t && (t = !0),
          d(this, void 0, void 0, function () {
            var u,
              l,
              d,
              p,
              v,
              h,
              m,
              y,
              b,
              P,
              g,
              w,
              S,
              D,
              E,
              _,
              k,
              A,
              I,
              O,
              C,
              T,
              x,
              R,
              V,
              q,
              N,
              L,
              M,
              U,
              j,
              B,
              G,
              K,
              Y,
              F,
              H,
              J,
              W,
              Q,
              z,
              X,
              Z,
              $,
              ee,
              te,
              re,
              ie,
              ne,
              ae,
              oe,
              se;
            return f(this, function (f) {
              switch (f.label) {
                case 0:
                  return (
                    (u =
                      (null === (r = this.player.currentPlayConfig) ||
                      void 0 === r
                        ? void 0
                        : r.extra.raw) || {}),
                    (l = u.ip),
                    (d = void 0 === l ? "" : l),
                    (p = u.vl),
                    (v = void 0 === p ? {} : p),
                    (h = u.dltype),
                    (m = void 0 === h ? 0 : h),
                    (y =
                      (null === (n = v.vi) || void 0 === n ? void 0 : n[0]) ||
                      {}),
                    (b = y.ul),
                    (P = void 0 === b ? {} : b),
                    (g = y.purevid),
                    (w = void 0 === g ? "" : g),
                    (S = y.br),
                    (D = void 0 === S ? 0 : S),
                    (E = y.type),
                    (_ = void 0 === E ? 0 : E),
                    (k = (this.player.currentVideoInfo || {}).durationS),
                    (A = void 0 === k ? 0 : k),
                    (I = this.player.currentDefinition || {}),
                    (O = I.format),
                    (C = void 0 === O ? 0 : O),
                    (T = I.resolution),
                    (x = void 0 === T ? "" : T),
                    (R = this.getDeviceInfo()),
                    (V = R.brand),
                    (q = void 0 === V ? "" : V),
                    (N = R.model),
                    (L = void 0 === N ? "" : N),
                    (M = R.system),
                    (U = void 0 === M ? "" : M),
                    (j = this.getWindowInfo()),
                    (B = j.screenWidth),
                    (G = void 0 === B ? 0 : B),
                    (K = j.screenHeight),
                    (Y = void 0 === K ? 0 : K),
                    (F = this.player.dataset.getCommonKv([
                      a.COMMON_DATA_KEY.guid,
                      a.COMMON_DATA_KEY.appVer,
                      a.COMMON_DATA_KEY.platform,
                      a.COMMON_DATA_KEY.flowid,
                      a.COMMON_DATA_KEY.vid,
                      a.COMMON_DATA_KEY.pageUrl,
                    ])),
                    (H = F.guid),
                    (J = void 0 === H ? "" : H),
                    (W = F.appVer),
                    (Q = void 0 === W ? "" : W),
                    (z = F.platform),
                    (X = void 0 === z ? "" : z),
                    (Z = F.flowid),
                    ($ = void 0 === Z ? "" : Z),
                    (ee = F.vid),
                    (te = void 0 === ee ? "" : ee),
                    (re = F.pageUrl),
                    (ie = void 0 === re ? "" : re),
                    (ae = [c({}, this.config)]),
                    (se = {
                      step: e,
                      vuid: this.player.dataset.auth.vuid || "",
                      guid: J,
                      uip: d,
                      cdnuip: d,
                      downloadkit: 0,
                      online: 1,
                      p2p: 0,
                    }),
                    (oe = Number),
                    [4, i.default.getNetworkType()]
                  );
                case 1:
                  return (
                    (ne = c.apply(
                      void 0,
                      ae.concat([
                        ((se.network = oe.apply(void 0, [f.sent()])),
                        (se.device = "".concat(q).concat(L)),
                        (se.resolution = "".concat(G, "*").concat(Y)),
                        (se.osver = U),
                        (se.appver = Q),
                        (se.playerver = i.default.getPlayerVersion()),
                        (se.playertype = 0),
                        (se.cdnid =
                          (null ===
                            (s =
                              null === (o = P.ui) || void 0 === o
                                ? void 0
                                : o[0]) || void 0 === s
                            ? void 0
                            : s.vt) || ""),
                        (se.ts = +new Date()),
                        (se.platform = X),
                        (se.manufacture = q),
                        (se.flowid = $),
                        (se.dltype = m),
                        (se.vid = te),
                        (se.purevid = w),
                        (se.fmt = C),
                        (se.rate = D),
                        (se.clip = 1),
                        (se.type = _),
                        (se.duration = A),
                        (se.isavsseparate = 0),
                        (se.effecttype = 0),
                        (se.multitrack = 0),
                        (se.defn = x),
                        (se.hdrmappingtype = "sdr_mapping"),
                        (se.usedvideoposttype = 0),
                        (se.url = ie),
                        (se.refer = ie),
                        se),
                      ])
                    )),
                    t && (ne.seq = this.getSeq()),
                    [2, ne]
                  );
              }
            });
          })
        );
      }),
      (r.prototype.getSeq = function () {
        return (this.seq += 1), this.seq;
      }),
      (r.prototype.getDeviceInfo = function () {
        var e;
        return (
          r.deviceInfo ||
            (r.deviceInfo =
              (null === (e = wx.getDeviceInfo) || void 0 === e
                ? void 0
                : e.call(wx)) || {}),
          r.deviceInfo
        );
      }),
      (r.prototype.getWindowInfo = function () {
        var e;
        return (
          r.windowInfo ||
            (r.windowInfo =
              (null === (e = wx.getWindowInfo) || void 0 === e
                ? void 0
                : e.call(wx)) || {}),
          r.windowInfo
        );
      }),
      (r.prototype.step30 = function () {
        return d(this, void 0, void 0, function () {
          var e, t, r, i, n, a, o, s;
          return f(this, function (u) {
            switch (u.label) {
              case 0:
                return [4, this.getDefaultReportParams(30)];
              case 1:
                return (
                  (e = u.sent()),
                  (t = this.player.currentVideoInfo),
                  (r = t.performance),
                  (i = void 0 === r ? { loadStart: 0, loadEnd: 0 } : r),
                  (n = t.loadingUrl),
                  (a = void 0 === n ? "" : n),
                  (o = t.loadingUrlIndex),
                  (s = void 0 === o ? 0 : o),
                  [
                    4,
                    this.report(
                      c(c({}, e), {
                        data: JSON.stringify({
                          stime: i.loadStart,
                          etime: i.loadEnd,
                          url: a,
                          vt: e.cdnid,
                          urlindex: s,
                          code: "0.0",
                        }),
                      })
                    ),
                  ]
                );
              case 2:
                return u.sent(), [2];
            }
          });
        });
      }),
      (r.prototype.step35 = function (e) {
        return d(this, void 0, void 0, function () {
          return f(this, function (t) {
            return (
              this.bufferCount > 20 ||
                (this.handlePreBufferParams(e),
                (this.bufferCount += 1),
                this.bufferCache.push(this.bufferParams),
                (this.bufferParams = { tcount: 0, tduration: 0, val: [] })),
              [2]
            );
          });
        });
      }),
      (r.prototype.saveBufferParams = function (e) {
        var t, r;
        this.bufferCount > 20 ||
          (0 !== this.bufferParams.tcount && this.handlePreBufferParams(e),
          this.bufferParams.val.push({
            scene: this.player.playbackRate > 1 ? 1 : 0,
            format:
              (null === (t = this.player.currentDefinition) || void 0 === t
                ? void 0
                : t.format) || 0,
            ptime:
              (null === (r = this.player.currentVideoInfo) || void 0 === r
                ? void 0
                : r.playtime) || 0,
            stime: +new Date(),
            levent: this.seekParams.tcount > 0 ? 1 : 0,
          }),
          (this.bufferParams.tcount += 1));
      }),
      (r.prototype.handlePreBufferParams = function (e) {
        var t,
          r = this.bufferParams.val[this.bufferParams.tcount - 1];
        (r.etime = +new Date()),
          (r.code = e.newVal.code ? "0.".concat(e.newVal.code) : "0.0"),
          "0.0" !== r.code &&
            (r.url =
              (null === (t = this.player.currentVideoInfo) || void 0 === t
                ? void 0
                : t.loadingUrl) || ""),
          (this.bufferParams.tduration += r.etime - r.stime);
      }),
      (r.prototype.step40 = function (e) {
        return d(this, void 0, void 0, function () {
          var t, r;
          return f(this, function (i) {
            return (
              this.seekCount > 20 ||
                0 === this.seekParams.val.length ||
                ((this.seekCount += 1),
                (t = this.seekParams.val[this.seekParams.tcount - 1]),
                (r = +new Date() - t.letime) > 1200 &&
                  ((this.seekParams.tbduration = r),
                  (this.seekParams.tbcount = 1)),
                (t.code = e.newVal.code ? "0.".concat(e.newVal.code) : "0.0"),
                this.seekCache.push(this.seekParams),
                (this.seekParams = {
                  tcount: 0,
                  tbcount: 0,
                  tbduration: 0,
                  val: [],
                })),
              [2]
            );
          });
        });
      }),
      (r.prototype.saveSeekParams = function () {
        var e, t;
        this.seekParams.tcount > 0 ||
          this.seekCount > 20 ||
          (this.seekParams.val.push({
            format:
              (null === (e = this.player.currentDefinition) || void 0 === e
                ? void 0
                : e.format) || 0,
            pstime:
              (null === (t = this.player.currentVideoInfo) || void 0 === t
                ? void 0
                : t.playtime) || 0,
            lstime: +new Date(),
          }),
          (this.seekParams.tcount += 1));
      }),
      (r.prototype.saveLastSeekParams = function (e) {
        var t = e.seekTime,
          r = void 0 === t ? 0 : t;
        if (!(this.seekCount > 20)) {
          0 === this.seekParams.tcount && this.saveSeekParams();
          var i = this.seekParams.val[this.seekParams.tcount - 1];
          (i.petime = r), (i.letime = +new Date());
        }
      }),
      (r.prototype.step45 = function (e) {
        return d(this, void 0, void 0, function () {
          var t, r, i, n, a, o;
          return f(this, function (s) {
            switch (s.label) {
              case 0:
                return (
                  (t = this.player.currentVideoInfo),
                  (r = t.loadingUrl),
                  (i = void 0 === r ? "" : r),
                  (n = t.loadingUrlIndex),
                  (a = void 0 === n ? 0 : n),
                  [4, this.getDefaultReportParams(45)]
                );
              case 1:
                return (
                  (o = s.sent()),
                  [
                    4,
                    this.report(
                      c(c({}, o), {
                        data: JSON.stringify(
                          c(c({}, this.setLevelParams), {
                            letime: +new Date(),
                            auto: 1,
                            postfmt: o.fmt,
                            url: i,
                            vt: o.cdnid,
                            urlindex: a,
                            code: e.newVal.code
                              ? "0.".concat(e.newVal.code)
                              : "0.0",
                          })
                        ),
                      })
                    ),
                  ]
                );
              case 2:
                return s.sent(), [2];
            }
          });
        });
      }),
      (r.prototype.saveBeforeSetLevel = function () {
        var e,
          t = this.player.currentVideoInfo.playtime,
          r = void 0 === t ? 0 : t;
        (this.setLevelParams = {
          prefmt:
            (null === (e = this.player.currentDefinition) || void 0 === e
              ? void 0
              : e.format) || "",
          pstime: r,
          pmtime: r,
          petime: r,
        }),
          this.delayReportStep35And40();
      }),
      (r.prototype.setLevelStart = function () {
        var e = +new Date();
        (this.setLevelParams.lstime = e),
          (this.setLevelParams.lmtime = e / 1e3);
      }),
      (r.prototype.step50 = function (e) {
        var t, r;
        return d(this, void 0, void 0, function () {
          var n, a, s, u, l, d, b;
          return f(this, function (f) {
            switch (f.label) {
              case 0:
                if (
                  ((n = this.player.dataset.stats.playDuration),
                  (a = void 0 === n ? 0 : n),
                  (s = p),
                  null === (t = this.player.currentVideoInfo) || void 0 === t
                    ? void 0
                    : t.isDrm)
                )
                  switch (i.default.getSystemInfo().osPlatform) {
                    case "ios":
                      s = v;
                      break;
                    case "android":
                      s = h;
                  }
                return (
                  (u = this.extraParams),
                  (l = u.supportHEVC),
                  (d = u.defn),
                  [4, this.getDefaultReportParams(50, !1)]
                );
              case 1:
                return (
                  (b = f.sent()),
                  [
                    4,
                    Promise.all([
                      this.delayReportStep35And40(b),
                      this.report(
                        c(c({}, b), {
                          seq: this.getSeq(),
                          data: JSON.stringify(
                            c(c({}, this.getInfoParams), {
                              etime: +new Date(),
                              playduration: a / 1e3 || 0,
                              drmtype: s,
                              assettype: 2,
                              subtitles: 0,
                              hevclv: l & o.HEVCSupportType.base ? 26 : 0,
                              widevinelevel:
                                !1 ===
                                (null === (r = wx.getStorageSync("drm")) ||
                                void 0 === r
                                  ? void 0
                                  : r.isSupportDrm)
                                  ? m
                                  : y,
                              code: e.newVal.code
                                ? "0.".concat(e.newVal.code)
                                : "0.0",
                              opendefn: d && "auto" !== d ? d : "adaptive",
                            })
                          ),
                        })
                      ),
                    ]),
                  ]
                );
              case 2:
                return f.sent(), [2];
            }
          });
        });
      }),
      (r.prototype.cacheGetInfoParams = function () {
        var e = this.player.performance.getReportData().data;
        this.getInfoParams = {
          vinfostime: e.getVideoInfoRequestStart || 0,
          vinfoetime: e.getVideoInfoRequestEnd || 0,
        };
      }),
      (r.prototype.delayReportStep35And40 = function (e) {
        return d(this, void 0, void 0, function () {
          var r, i, n, a, o, s, u, l;
          return f(this, function (d) {
            switch (d.label) {
              case 0:
                (r = function (t, r) {
                  var n, a;
                  return f(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return i[r].length
                          ? ((n = {}),
                            e
                              ? ((n = c(c({}, e), {
                                  seq: i.getSeq(),
                                  step: t,
                                })),
                                [3, 3])
                              : [3, 1])
                          : [2, { value: void 0 }];
                      case 1:
                        return [4, i.getDefaultReportParams(t)];
                      case 2:
                        (n = o.sent()), (o.label = 3);
                      case 3:
                        return (
                          (a = i[r][0]),
                          i[r].slice(1).forEach(function (e) {
                            Object.entries(e).forEach(function (e) {
                              var t,
                                r = e[0],
                                i = e[1];
                              Array.isArray(i)
                                ? (t = a[r]).push.apply(t, i)
                                : (a[r] += i);
                            });
                          }),
                          [
                            4,
                            i.report(c(c({}, n), { data: JSON.stringify(a) })),
                          ]
                        );
                      case 4:
                        return o.sent(), (i[r] = []), [2];
                    }
                  });
                }),
                  (i = this),
                  (n = 0),
                  (a = [
                    [35, "bufferCache"],
                    [40, "seekCache"],
                  ]),
                  (d.label = 1);
              case 1:
                return n < a.length
                  ? ((o = a[n]), (s = o[0]), (u = o[1]), [5, r(s, u)])
                  : [3, 4];
              case 2:
                if (((l = d.sent()), "object" === t(l))) return [2, l.value];
                d.label = 3;
              case 3:
                return n++, [3, 1];
              case 4:
                return [2];
            }
          });
        });
      }),
      (r.prototype.report = function (e) {
        var t, i;
        return d(this, void 0, void 0, function () {
          var n;
          return f(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  r.beacon ||
                    (r.beacon = new ((null ===
                      (t =
                        null === requireMiniProgram ||
                        void 0 === requireMiniProgram
                          ? void 0
                          : requireMiniProgram()) || void 0 === t
                      ? void 0
                      : t.BeaconAction) || u.default)({
                      appkey: "0AND0F8T5N4N7QT0",
                    })),
                  [
                    4,
                    null === (i = this.beforeReport) || void 0 === i
                      ? void 0
                      : i.call(this, e),
                  ]
                );
              case 1:
                return (
                  (n = a.sent() || {}),
                  r.beacon.onDirectUserAction(
                    "boss_cmd_player_quality_feitian",
                    c(c({}, e), n)
                  ),
                  [2]
                );
            }
          });
        });
      }),
      (r.pluginName = "vod-fly-reporter"),
      r
    );
  })(s.default);
exports.default = b;
