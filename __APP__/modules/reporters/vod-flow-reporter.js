var e = require("../../@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.default = void 0);
var t,
  r,
  a = require("../../@babel/runtime/helpers/typeof"),
  i = require("../../behaviors/logger"),
  o = require("../../enums"),
  n = e(require("../../index")),
  s = require("../dataset/enum"),
  p = e(require("../plugins/base/index")),
  l = require("../performance/enum"),
  d = require("../utils/index"),
  u =
    ((t = function (e, r) {
      return (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        })(e, r);
    }),
    function (e, r) {
      if ("function" != typeof r && null !== r)
        throw new TypeError(
          "Class extends value " + String(r) + " is not a constructor or null"
        );
      function a() {
        this.constructor = e;
      }
      t(e, r),
        (e.prototype =
          null === r
            ? Object.create(r)
            : ((a.prototype = r.prototype), new a()));
    }),
  h = function () {
    return (h =
      Object.assign ||
      function (e) {
        for (var t, r = 1, a = arguments.length; r < a; r++)
          for (var i in (t = arguments[r]))
            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      }).apply(this, arguments);
  },
  c = function (e, t, r, i) {
    var o,
      n = arguments.length,
      s =
        n < 3
          ? t
          : null === i
          ? (i = Object.getOwnPropertyDescriptor(t, r))
          : i;
    if (
      "object" === ("undefined" == typeof Reflect ? "undefined" : a(Reflect)) &&
      "function" == typeof Reflect.decorate
    )
      s = Reflect.decorate(e, t, r, i);
    else
      for (var p = e.length - 1; p >= 0; p--)
        (o = e[p]) && (s = (n < 3 ? o(s) : n > 3 ? o(t, r, s) : o(t, r)) || s);
    return n > 3 && s && Object.defineProperty(t, r, s), s;
  },
  f = "__tp_vod_flow_report__",
  _ = (((r = { 3e4: 2e4, 12e4: 3e4, 12e5: 6e4 })[1 / 0] = 3e5), r),
  y = {
    hc_main_login: "",
    hc_qq: "",
    hc_vuserid: "",
    hc_openid: "",
    app_version: "",
    platform: "",
    client_model: "",
    wx_version: "",
    network: 0,
    ptag: "",
    step: "",
    iformat: -1,
    duration: 0,
    defn: "",
    tpay: 0,
    adid: "",
    playtime: 0,
    page_url: "",
    page_query: "",
    page_ref: "",
    cid: "",
    vid: "",
    isvip: -1,
    val1: "",
    val2: "",
    val3: "",
    appname: "plugin",
    nick: "",
    rmd: "",
    hc_appid: "",
    videourl: "",
    scene: "",
    additional: "",
    omgid: "",
    appid: "",
    ad_time: 0,
    ad_pdtm_ms: 0,
    source2: "",
    qimei36: "",
    pid: "",
    experience_duration_ms: 0,
    insert_duration_time: 0,
    insert_flowid: 0,
    ctime: 0,
    p_version: n.default.getPlayerVersion(),
    client_version: "",
    guid: "",
    render_type: 0,
    experiment_id: "",
    fmt: -1,
  },
  v = { 4210801: "plugin", 10801: "video", 10001: "video" },
  E = (function (e) {
    function t(t, r) {
      var a;
      void 0 === r && (r = {});
      var i = e.call(this, t) || this;
      return (
        (i.config = r),
        (i.adPlayed = !1),
        (i.step8Seq = 0),
        (i.lastStep8Time = 0),
        (i.stateMap =
          (((a = {})[s.DataState.FIRST_PLAY] = i.handleFirstPlay),
          (a[s.DataState.SESSION_START] = i.once(i.step3, i)),
          (a[s.DataState.GET_INFO_END] = i.once(i.step4, i)),
          (a[s.DataState.SESSION_END] = i.once(i.handleSessionEnd, i)),
          a)),
        i.bindEvents(),
        i
      );
    }
    return (
      u(t, e),
      Object.defineProperty(t.prototype, "header", {
        get: function () {
          var e,
            t,
            r,
            a,
            i = n.default.getSystemInfo(),
            o = i.osPlatform,
            p = i.clientVer,
            l = i.deviceModel,
            d = this.player.dataset.auth,
            u = d.vuid,
            c = d.appId,
            f = d.openId,
            _ = d.mainLogin,
            E = this.player.dataset.stats,
            A = E.adDuration,
            O = E.adPlayDuration,
            g = E.playDuration,
            m = E.duration,
            M = this.player.currentPlayConfig || {},
            T = M.isAd,
            D = M.extra,
            P = this.player.dataset.getCommonKv([
              s.COMMON_DATA_KEY.appVer,
              s.COMMON_DATA_KEY.pageQuery,
              s.COMMON_DATA_KEY.pageRef,
              s.COMMON_DATA_KEY.pageUrl,
              s.COMMON_DATA_KEY.envAppId,
              s.COMMON_DATA_KEY.vid,
              s.COMMON_DATA_KEY.flowid,
              s.COMMON_DATA_KEY.guid,
              s.COMMON_DATA_KEY.platform,
            ]);
          return h(
            h(
              h(h({}, y), {
                hc_main_login: _,
                hc_vuserid: u,
                hc_appid: c,
                hc_openid: f,
                guid: P[s.COMMON_DATA_KEY.guid],
                tpay: (null == D ? void 0 : D.paid) || 0,
              }),
              this.config
            ),
            {
              wx_version: p,
              platform: o,
              client_model: l,
              client_version: p,
              appname: v[P[s.COMMON_DATA_KEY.platform]] || "plugin",
              ctime: Date.now(),
              vid: P[s.COMMON_DATA_KEY.vid],
              pid: P[s.COMMON_DATA_KEY.flowid],
              playtime: g,
              duration: Math.floor(m),
              experience_duration_ms: T ? 0 : null == D ? void 0 : D.preview,
              ad_time: A,
              ad_pdtm_ms: O,
              defn:
                (null === (e = this.player.currentDefinition) || void 0 === e
                  ? void 0
                  : e.resolution) || "",
              videourl:
                (null === (t = this.player.currentVideoInfo) || void 0 === t
                  ? void 0
                  : t.loadingUrl) || "",
              page_query: P[s.COMMON_DATA_KEY.pageQuery],
              page_url: P[s.COMMON_DATA_KEY.pageUrl],
              page_ref: P[s.COMMON_DATA_KEY.pageRef],
              appid: P[s.COMMON_DATA_KEY.envAppId],
              app_version: P[s.COMMON_DATA_KEY.appVer],
              fmt: +(null !==
                (a =
                  null === (r = this.player.currentDefinition) || void 0 === r
                    ? void 0
                    : r.format) && void 0 !== a
                ? a
                : -1),
            }
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.destroy = function () {
        this.unbindEvents();
      }),
      (t.prototype.updateConfig = function (e) {
        this.config = h(h({}, this.config), e);
      }),
      (t.prototype.bindEvents = function () {
        this.player.internalMsg.on(
          o.EventsExt.DATASET_STATE_UPDATE,
          this.onDataSetStateUpdate,
          this
        ),
          this.player.internalMsg.on(
            o.EventsExt.COMPONENT_PAGE_SHOW,
            this.onPageShow,
            this
          ),
          this.player.internalMsg.on(
            o.EventsExt.COMPONENT_PAGE_HIDE,
            this.onPageHide,
            this
          ),
          this.player.internalMsg.on(
            o.EventsExt.DATASET_PLAYTIME_UPDATE,
            this.onPlayTimeUpdate,
            this
          ),
          this.player.internalMsg.on(
            o.EventsExt.QUALITY_REPORT,
            this.qualityReport,
            this
          );
      }),
      (t.prototype.unbindEvents = function () {
        this.player.internalMsg.off(
          o.EventsExt.DATASET_STATE_UPDATE,
          this.onDataSetStateUpdate,
          this
        ),
          this.player.internalMsg.off(
            o.EventsExt.COMPONENT_PAGE_SHOW,
            this.onPageShow,
            this
          ),
          this.player.internalMsg.off(
            o.EventsExt.COMPONENT_PAGE_HIDE,
            this.onPageHide,
            this
          ),
          this.player.internalMsg.off(
            o.EventsExt.DATASET_PLAYTIME_UPDATE,
            this.onPlayTimeUpdate,
            this
          ),
          this.player.internalMsg.off(
            o.EventsExt.QUALITY_REPORT,
            this.qualityReport,
            this
          );
      }),
      (t.prototype.report = function (e) {
        var t = (0, d.objectToQueryString)(e),
          r = ""
            .concat(
              "https://h.trace.qq.com/bosskv?attaid=z3d00004327&token=3331933761&"
            )
            .concat(t);
        (0, d.request)({ url: r });
      }),
      (t.prototype.cache = function (e, t) {
        var r = d.Cache.get(f) || {};
        (r[e] = t), d.Cache.set(f, r);
      }),
      (t.prototype.onDataSetStateUpdate = function (e) {
        var t = e.key;
        this.stateMap[t] && this.stateMap[t].apply(this, [e]);
      }),
      (t.prototype.onPageShow = function () {
        var e = this,
          t = Date.now(),
          r = d.Cache.get(f) || {},
          a = [];
        Object.keys(r).forEach(function (i) {
          var o = r[i],
            n = !1;
          o.forEach(function (r) {
            r.pid !== e.player.dataset.getCommonKv(s.COMMON_DATA_KEY.flowid)
              ? (t - r.ctime >= 3e5 || !r.ctime) && (a.push(r), (n = !0))
              : (n = !0);
          }),
            n && delete r[i];
        }),
          a.forEach(function (t) {
            return e.report(t);
          }),
          d.Cache.set(f, r);
      }),
      (t.prototype.onPageHide = function () {
        if (this.player.state !== o.VideoState.IDLE) {
          var e = this.player.dataset.stats,
            t = e.useDuration,
            r = e.hasPlayed,
            a = e.playDuration,
            i = h(h({}, this.header), {
              val1: "".concat(t),
              val2: r ? "2" : "0",
              val3: "cache",
              insert_flowid: this.step8Seq,
            });
          this.cache(i.pid, [
            h(h({}, i), { step: "5" }),
            h(h({}, i), {
              step: "8",
              insert_duration_time: a - this.lastStep8Time,
            }),
          ]);
        }
      }),
      (t.prototype.onPlayTimeUpdate = function (e) {
        var t = e.currentTime,
          r = +Object.keys(_).find(function (e) {
            return t < +e;
          }),
          a = t - this.lastStep8Time;
        a >= _[r] && (this.step8(a), (this.lastStep8Time = t));
      }),
      (t.prototype.step3 = function () {
        this.report(
          h(h({}, this.header), {
            step: "3",
            val1: this.player.dataset.getCommonKv(s.COMMON_DATA_KEY.playertype),
            val2: "0",
            val3: "0",
          })
        );
      }),
      (t.prototype.step4 = function (e) {
        var t = e.newVal,
          r = t.code,
          a = t.ext;
        this.report(
          h(h({}, this.header), {
            step: "4",
            val1: "0",
            val2: r,
            val3: null == a ? void 0 : a.path,
          })
        );
      }),
      (t.prototype.handleSessionEnd = function (e) {
        this.player.currentVideoInfo && (this.step5(e), this.step50(e));
      }),
      (t.prototype.step5 = function (e) {
        var t = e.newVal.code,
          r = this.player.dataset.stats,
          a = r.useDuration,
          i = r.hasPlayed,
          o = r.playDuration,
          n = h(h({}, this.header), {
            step: "5",
            val1: "".concat(a),
            val2: "1",
            val3: t,
            insert_flowid: this.step8Seq,
          });
        (n.val2 = "0" !== t ? "3" : i ? "1" : "0"),
          this.report(n),
          this.step8(o - this.lastStep8Time, n);
      }),
      (t.prototype.handleFirstPlay = function (e) {
        this.player.currentVideoInfo &&
          (this.step6and7(e), this.player.isAd || this.step30());
      }),
      (t.prototype.step6and7 = function (e) {
        var t = e.newVal.currentUrl,
          r = void 0 === t ? "" : t;
        if (this.player.isAd) {
          if (this.adPlayed) return;
          return (
            this.report(
              h(h({}, this.header), {
                step: "7",
                val1: "0",
                val2: "0",
                val3: r,
              })
            ),
            void (this.adPlayed = !0)
          );
        }
        var a = this.player.currentVideoInfo,
          i = a.performance,
          o = a.preloaded;
        this.report(
          h(h({}, this.header), {
            step: "6",
            val1: o ? "-1" : "".concat(i.loadEnd - i.loadStart),
            val2: this.adPlayed ? "0" : "1",
            val3: r,
          })
        );
      }),
      (t.prototype.step8 = function (e, t) {
        void 0 === t && (t = {});
        var r = this.player.dataset.stats.useDuration;
        this.report(
          h(
            h(
              h(h({}, this.header), {
                val1: "".concat(r),
                val2: "4",
                val3: "",
                insert_duration_time: e,
                insert_flowid: this.step8Seq,
              }),
              t
            ),
            { step: "8" }
          )
        ),
          (this.step8Seq += 1);
      }),
      (t.prototype.step30 = function () {
        var e = this.player.currentVideoInfo.performance,
          t = { stime: e.loadStart || 0, etime: e.loadEnd || 0 };
        this.report(
          h(h({}, this.header), {
            step: "30",
            val1: JSON.stringify(t),
            val2: "",
            val3: "",
          })
        );
      }),
      (t.prototype.step50 = function (e) {
        var t = e.newVal.code,
          r = {
            playduration: this.player.dataset.stats.playDuration / 1e3 || 0,
            code: t,
          };
        this.report(
          h(h({}, this.header), {
            step: "50",
            val1: JSON.stringify(r),
            val2: "",
            val3: "",
          })
        );
      }),
      (t.prototype.qualityReport = function () {
        var e,
          t = this.player.performance.getReportData(),
          r = t.reportCount,
          a = t.hasHidePage,
          i = t.hasVideoNodeRetry,
          o = t.retryReason,
          n = t.isAdPlayError,
          s = t.hasAdRequestRetry,
          p = t.hasVideoRequestRetry,
          d = t.network,
          u = t.isPreload,
          c = t.data;
        this.player.performance.setReportParam(
          (((e = {})[l.PERFORMANCE_KEY.reportCount] = r + 1), e)
        ),
          a ||
            this.report(
              h(h({}, this.header), {
                step: "200",
                val1: JSON.stringify(c),
                val2: r,
                val3: JSON.stringify({
                  hasVideoNodeRetry: i,
                  isAdPlayError: n,
                  hasAdRequestRetry: s,
                  hasVideoRequestRetry: p,
                  isPreload: u,
                  retryReason: o,
                  network: d,
                }),
              })
            ),
          this.player.performance.restore();
      }),
      (t.prototype.once = function (e, t) {
        var r = "";
        return function () {
          for (var a = [], i = 0; i < arguments.length; i++)
            a[i] = arguments[i];
          var o = t.player.dataset.getCommonKv(s.COMMON_DATA_KEY.flowid);
          o !== r && ((r = o), e.apply(t, a));
        };
      }),
      (t.pluginName = "vod_flow_reporter"),
      c([(0, i.log)("vod-flow-reporter")], t.prototype, "report", null),
      t
    );
  })(p.default);
exports.default = E;
