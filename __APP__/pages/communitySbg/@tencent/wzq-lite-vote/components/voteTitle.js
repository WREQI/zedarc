var t = require("../../stock-community-base/utils/knife.js"),
  n = require("../../../../../common/vendor.js"),
  o = {
    inject: {
      stockBridge: {
        default: function () {
          return {};
        },
      },
    },
    props: {
      voteInfo: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    data: function () {
      return { countDown: { day: "--", hour: "--", min: "--", sec: "--" } };
    },
    computed: {
      voteType: function () {
        var t, n, o;
        return 2 ===
          (null == (n = null == (t = this.voteInfo) ? void 0 : t.vote_items)
            ? void 0
            : n.length)
          ? ""
          : (null == (o = this.voteInfo) ? void 0 : o.vote_multiple)
          ? "(多选)"
          : "(单选)";
      },
      count: function () {
        var n,
          o,
          e =
            +(null == (o = null == (n = this.voteInfo) ? void 0 : n.vote_items)
              ? void 0
              : o
                  .map(function (t) {
                    return t.item_count;
                  })
                  .reduce(function (t, n) {
                    return t + n;
                  })) || 0;
        return t.formatView(e);
      },
      colorClass: function () {
        return "zxg-color";
      },
    },
    watch: {
      voteInfo: {
        deep: !0,
        handler: function (t) {
          try {
            this.configCountDown();
          } catch (t) {}
        },
        immediate: !0,
      },
    },
    created: function () {
      this.configCountDown();
    },
    beforeDestroy: function () {
      clearInterval(this.interval);
    },
    activated: function () {
      this.configCountDown();
    },
    deactivated: function () {
      clearInterval(this.interval);
    },
    methods: {
      configCountDown: function () {
        var t, n;
        if (this.voteInfo.status) {
          var o =
            Date.parse(
              null == (n = null == (t = this.voteInfo) ? void 0 : t.deadline)
                ? void 0
                : n.replace(/-/g, "/")
            ) - Date.now();
          o > 0 ? this.handleCountDown(o / 1e3) : (this.countDown = null);
        }
      },
      handleCountDown: function (t) {
        var n = this,
          o = t;
        this.interval && (clearInterval(this.interval), (this.interval = null)),
          (this.countDown = this.caclCountDown(o)),
          (this.interval = setInterval(function () {
            if ((o -= 60) <= 0)
              return (
                (n.countDown = null),
                clearInterval(n.interval),
                (n.interval = null),
                void n.$emit("updateList")
              );
            n.countDown = n.caclCountDown(o);
          }, 6e4));
      },
      caclCountDown: function (t) {
        var n,
          o = this.formatDate,
          e = Math.floor(t / 86400);
        n = t - 86400 * e;
        var i = Math.floor(n / 3600);
        n -= 3600 * i;
        var r = Math.floor(n / 60);
        n -= 60 * r;
        var u = Math.floor(n);
        return { day: o(e), hour: o(i), min: o(r), sec: o(u) };
      },
      formatDate: function (t) {
        return t < 10 ? "0".concat(t) : "".concat(t);
      },
    },
  },
  e = n._export_sfc(o, [
    [
      "render",
      function (t, o, e, i, r, u) {
        return n.e(
          { a: n.n(u.colorClass), b: e.voteInfo.vote_title },
          e.voteInfo.vote_title
            ? { c: n.t(e.voteInfo.vote_title + u.voteType) }
            : {},
          { d: n.t(u.count), e: e.voteInfo.status && r.countDown },
          e.voteInfo.status && r.countDown
            ? n.e(
                { f: "00" !== r.countDown.day },
                "00" !== r.countDown.day ? { g: n.t(r.countDown.day) } : {},
                { h: n.t(r.countDown.hour), i: n.t(r.countDown.min) }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-1a61b9ae"],
  ]);
wx.createComponent(e);
