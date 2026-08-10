var t = require("../../../../../common/vendor.js"),
  e = require("../../stock-news-core/utils/force2https.js"),
  i = ["日", "一", "二", "三", "四", "五", "六"],
  n = function (t) {
    var e = t,
      n = new Date(e),
      o = n.getFullYear(),
      a = n.getMonth() + 1,
      r = n.getDate(),
      s = i[n.getDay()],
      u = n.getHours(),
      c = n.getMinutes(),
      l = n.getSeconds() < 10 ? n.getSeconds() : "0".concat(n.getSeconds());
    return {
      time: e,
      year: o,
      month: a,
      date: r,
      day: s,
      hour: u < 10 ? "0".concat(u) : u,
      minute: c < 10 ? "0".concat(c) : c,
      secend: l < 10 ? "0".concat(l) : l,
      dateStr: new Date(n).toLocaleDateString(),
    };
  },
  o = {}.IS_ZXG,
  a = {},
  r = {
    components: {},
    props: {
      liveData: {
        type: Object,
        default: function () {
          return {};
        },
      },
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
      theme: { type: String, default: "blue" },
    },
    data: function () {
      return { isWZQ: !1, isiOs: a.ios, isAPP: o };
    },
    computed: {
      windowWidth: function () {
        return this.getMPWindowInfo().windowWidth;
      },
      liveTitleWidth: function () {
        return this.windowWidth - 160;
      },
      liveInfo: function () {
        var t;
        return (null == (t = this.liveData) ? void 0 : t.extra_info) || {};
      },
      liveStatus: function () {
        var t = this.liveInfo,
          e = +(null == t ? void 0 : t.live_status),
          i = +(null == t ? void 0 : t.reserve_flag);
        return 20 === e ? i : 21 === e ? 3 : 22 === e ? 4 : 1;
      },
      durationTime: function () {
        var t = this.liveInfo,
          e = t.estimate_start_time,
          i = t.estimate_end_time,
          o = n(1e3 * e) || {},
          a = o.hour,
          r = void 0 === a ? "" : a,
          s = o.minute,
          u = void 0 === s ? "" : s,
          c = n(1e3 * i) || {},
          l = c.hour,
          v = void 0 === l ? "" : l,
          d = c.minute,
          f = void 0 === d ? "" : d;
        return "".concat(r, ":").concat(u, "-").concat(v, ":").concat(f);
      },
      participateNum: function () {
        var t = this.liveInfo;
        return null == t ? void 0 : t.participate_num;
      },
      participateText: function () {
        var t = { 1: "已预约", 2: "已预约", 3: "正在观看", 4: "围观" };
        return "square" === this.liveData.livecard_type
          ? t[this.liveStatus] || "已预约"
          : t[this.liveStatus] || "";
      },
      posterImg: function () {
        var t = this.liveData || {},
          i = t.focus_img,
          n = t.thumb_img;
        return e.forceHttpsAdvanced(i || n || "");
      },
      isShowLivePlayer: function () {
        return 4 != +this.liveData.type;
      },
    },
    methods: {
      getMPWindowInfo: function () {
        return (
          (t.wx$1.getWindowInfo && t.wx$1.getWindowInfo()) ||
          t.wx$1.getSystemInfoSync()
        );
      },
      handleClick: function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        this.$emit("tapLiveCard", { action: t, data: this.liveData });
      },
      handleReserve: function () {
        this.$emit("reserve");
      },
    },
  },
  s = t._export_sfc(r, [
    [
      "render",
      function (e, i, n, o, a, r) {
        return t.e(
          { a: r.posterImg, b: r.isShowLivePlayer },
          (r.isShowLivePlayer, {}),
          {
            c: t.t(n.liveData.title || ""),
            d: r.liveTitleWidth + "px",
            e: 1 === r.liveStatus,
          },
          1 === r.liveStatus
            ? {
                f: t.n(a.isiOs || a.isAPP ? "move-down" : ""),
                g: t.o(function () {
                  return r.handleReserve && r.handleReserve.apply(r, arguments);
                }, 5490),
              }
            : 2 === r.liveStatus
            ? {
                i: t.n(a.isiOs || a.isAPP ? "move-down" : ""),
                j: t.o(function () {
                  return r.handleReserve && r.handleReserve.apply(r, arguments);
                }, 5491),
              }
            : 3 === r.liveStatus
            ? { l: t.n(a.isiOs || a.isAPP ? "move-down" : "") }
            : 4 === r.liveStatus
            ? { n: t.n(a.isiOs || a.isAPP ? "move-down" : "") }
            : {},
          {
            h: 2 === r.liveStatus,
            k: 3 === r.liveStatus,
            m: 4 === r.liveStatus,
            o: t.t(r.durationTime),
            p: t.t(r.participateNum),
            q: t.t(r.participateText),
            r: t.o(function (t) {
              return r.handleClick("detail");
            }, 5492),
            s: t.n(n.theme),
          }
        );
      },
    ],
    ["__scopeId", "data-v-c2bf738d"],
  ]);
wx.createComponent(s);
