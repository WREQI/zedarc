var e = require("../../stock-news-core/utils/tools.js"),
  t = require("../../../../../common/vendor.js"),
  i = require("../../stock-news-core/utils/force2https.js"),
  a = { IS_WZQ_XCX: !1 },
  n = a.IS_ZXG_XCX,
  o = a.IS_WZQ_XCX,
  r = a.IS_PCWEIXIN,
  s = {},
  c = {
    inject: { isLiteMode: { default: o } },
    props: {
      liveData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      showLinkLine: { type: Boolean, default: !0 },
      showPlaybackTag: { type: Boolean, default: !1 },
      wzqConfig: {
        type: Object,
        default: function () {
          return {
            Helper: { navigateTo: function () {} },
            stat: { click: function () {} },
            openStock: function () {},
          };
        },
      },
      showShare: { type: Boolean, default: !0 },
      showDate: { type: Boolean, default: !1 },
      theme: { type: String, default: "blue" },
    },
    data: function () {
      return {
        isWZQ: !1,
        isAndroid: s.android,
        isiOs: s.ios,
        isPCMP: r && (n || o),
        isiPad: s.ipad,
      };
    },
    computed: {
      isMac: function () {
        var e;
        return (
          null != (e = null == navigator ? void 0 : navigator.userAgent)
            ? e
            : ""
        ).includes("Macintosh");
      },
      liveInfo: function () {
        var e;
        return (null == (e = this.liveData) ? void 0 : e.extra_info) || {};
      },
      liveStatus: function () {
        var e = this.liveInfo,
          t = +(null == e ? void 0 : e.live_status),
          i = +(null == e ? void 0 : e.reserve_flag);
        return 20 === t ? i : 21 === t ? 3 : 22 === t ? 4 : 0;
      },
      durationTime: function () {
        var t = this.liveInfo,
          i = t.estimate_start_time,
          a = t.estimate_end_time;
        if (
          "square" === this.liveData.livecard_type &&
          (22 === this.liveInfo.live_status || this.showDate)
        ) {
          var n = e.getTimeDate(1e3 * i) || {},
            o = n.year,
            r = n.month,
            s = n.date,
            c = n.hour,
            l = void 0 === c ? "" : c,
            v = n.minute,
            u = void 0 === v ? "" : v,
            d = e.getTimeDate(1e3 * a) || {},
            p = d.year,
            f = d.month,
            h = d.date,
            m = d.hour,
            _ = void 0 === m ? "" : m,
            y = d.minute,
            w = void 0 === y ? "" : y,
            g = "".concat(_, ":").concat(w);
          return (
            h != s &&
              (g = ""
                .concat(p, ".")
                .concat(f < 10 ? "0".concat(f) : r, ".")
                .concat(h < 10 ? "0".concat(h) : h, " ")
                .concat(g)),
            "".concat(
              ""
                .concat(o, ".")
                .concat(r < 10 ? "0".concat(r) : r, ".")
                .concat(s < 10 ? "0".concat(s) : s, " ")
                .concat(l, ":")
                .concat(u),
              "-",
              g
            )
          );
        }
        var S = e.getTimeDate(1e3 * i) || {},
          D = S.hour,
          I = void 0 === D ? "" : D,
          A = S.minute,
          P = void 0 === A ? "" : A,
          k = e.getTimeDate(1e3 * a) || {},
          C = k.hour,
          L = void 0 === C ? "" : C,
          T = k.minute,
          q = void 0 === T ? "" : T;
        return "".concat(I, ":").concat(P, "-").concat(L, ":").concat(q);
      },
      participateNum: function () {
        var e = this.liveInfo;
        return null == e ? void 0 : e.participate_num;
      },
      participateText: function () {
        var e = { 1: "已预约", 2: "已预约", 3: "正在观看", 4: "围观" };
        return "square" === this.liveData.livecard_type
          ? e[this.liveStatus] || "已预约"
          : e[this.liveStatus] || "";
      },
      posterImg: function () {
        var e = this.liveData || {};
        return i.forceHttpsAdvanced(
          e.focus_image || e.focus_img || e.thumb_image || e.thumb_img || ""
        );
      },
      viewerAvatars: function () {
        var e = (this.liveInfo.viewer_icons_url || "").split("|");
        return e.length > 0 ? e.slice(0, 3) : [];
      },
      isShowLivePlayer: function () {
        var e = this.liveData,
          t = e.type,
          i = e.news_type;
        return 4 != +t && 4 != +i;
      },
    },
    methods: {
      forceHttpsAdvanced: i.forceHttpsAdvanced,
      handleClick: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        this.$emit("tapLiveCard", { action: e, data: this.liveData });
      },
      handleReserve: function () {
        this.$emit("reserve");
      },
    },
  },
  l = t._export_sfc(c, [
    [
      "render",
      function (e, i, a, n, o, r) {
        return t.e(
          { a: 4 === a.liveData.news_type || 4 === a.liveData.type },
          4 === a.liveData.news_type || 4 === a.liveData.type
            ? { b: t.t(a.liveData.extra_info.live_count || 0) }
            : t.e(
                { c: 1 === r.liveStatus },
                1 === r.liveStatus
                  ? {
                      d: t.n(o.isiOs ? "ios" : ""),
                      e: t.n(o.isAndroid && !o.isWZQ ? "android" : ""),
                      f: t.o(function () {
                        return (
                          r.handleReserve && r.handleReserve.apply(r, arguments)
                        );
                      }, 4501),
                    }
                  : 2 === r.liveStatus
                  ? {
                      h: t.n(o.isiOs ? "ios" : ""),
                      i: t.n(o.isAndroid && !o.isWZQ ? "android" : ""),
                      j: t.o(function () {
                        return (
                          r.handleReserve && r.handleReserve.apply(r, arguments)
                        );
                      }, 4502),
                    }
                  : 3 === r.liveStatus
                  ? {
                      l: t.n(o.isiOs ? "ios" : ""),
                      m: t.n(o.isAndroid && !o.isWZQ ? "android" : ""),
                    }
                  : 4 !== r.liveStatus ||
                    ("square" !== a.liveData.livecard_type &&
                      !a.showPlaybackTag)
                  ? {}
                  : {
                      o: t.n(o.isiOs ? "ios" : ""),
                      p: t.n(o.isAndroid && !o.isWZQ ? "android" : ""),
                    },
                {
                  g: 2 === r.liveStatus,
                  k: 3 === r.liveStatus,
                  n:
                    4 === r.liveStatus &&
                    ("square" === a.liveData.livecard_type ||
                      a.showPlaybackTag),
                  q: t.t(r.durationTime),
                }
              ),
          {
            r: t.t(a.liveData.title || ""),
            s: t.n(o.isAndroid ? "android" : ""),
            t: r.isMac || o.isiPad,
          },
          r.isMac || o.isiPad
            ? t.e(
                { v: r.posterImg, w: r.posterImg, x: r.isShowLivePlayer },
                (r.isShowLivePlayer, {}),
                { y: t.n(o.isPCMP ? "pcmp" : "") }
              )
            : t.e(
                { z: r.posterImg, A: r.isShowLivePlayer },
                (r.isShowLivePlayer, {}),
                { B: t.n(o.isPCMP ? "pcmp" : "") }
              ),
          {
            C: t.o(function (e) {
              return r.handleClick("detail");
            }, 4503),
            D: r.viewerAvatars.length > 0 && "" !== r.viewerAvatars[0],
          },
          r.viewerAvatars.length > 0 && "" !== r.viewerAvatars[0]
            ? {
                E: t.f(r.viewerAvatars, function (e, i, a) {
                  return t.e(
                    { a: e },
                    e ? { b: r.forceHttpsAdvanced(e) } : {},
                    { c: 0 !== i ? 1 : "", d: e }
                  );
                }),
                F: t.t(r.participateNum),
                G: t.t(r.participateText),
              }
            : "square" === a.liveData.livecard_type &&
              r.liveInfo.media_icon_url &&
              r.liveInfo.media_name
            ? {
                I: r.forceHttpsAdvanced(r.liveInfo.media_icon_url),
                J: t.o(function (e) {
                  return r.handleClick("media");
                }, 4504),
                K: t.t(r.liveInfo.media_name),
                L: t.t(r.participateNum),
                M: t.t(r.participateText),
              }
            : {},
          {
            H:
              "square" === a.liveData.livecard_type &&
              r.liveInfo.media_icon_url &&
              r.liveInfo.media_name,
            N: a.showShare,
          },
          a.showShare
            ? {
                O: t.o(function (e) {
                  return r.handleClick("share");
                }, 4505),
              }
            : {},
          {
            P: t.n(a.showLinkLine ? "link-line" : ""),
            Q: t.n(a.theme),
            R: t.n(r.isLiteMode ? "lite-mode" : ""),
          }
        );
      },
    ],
    ["__scopeId", "data-v-f8fac6ac"],
  ]);
wx.createComponent(l);
