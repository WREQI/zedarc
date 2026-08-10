var t = require("../../../../../common/vendor.js"),
  e = {
    name: "RemindModalBody",
    props: {
      remindData: {
        type: Object,
        default: function () {
          return { title: "", summary: "", items: [], eventTime: "" };
        },
      },
      isIOS: { type: Boolean, default: !1 },
    },
    data: function () {
      return { pollingTimer: null };
    },
    computed: {
      timeStr: function () {
        var e = this.remindData.eventTime;
        if (!+e) return "";
        var i = t.dayjs(),
          n = "string" == typeof e ? parseInt(e) : e,
          a = t.dayjs(1e3 * n),
          r = i.isSame(a, "day"),
          m = i.subtract(1, "day").isSame(a, "day"),
          o = i.isSame(a, "year");
        return r
          ? a.format("HH:mm")
          : m
          ? "昨日 ".concat(a.format("HH:mm"))
          : o
          ? a.format("MM-DD HH:mm")
          : a.format("YYYY-MM-DD HH:mm");
      },
    },
    watch: {
      "remindData.items": {
        immediate: !0,
        handler: function (t) {
          0 === t.length ? this.startPolling() : this.stopPolling();
        },
      },
    },
    beforeDestroy: function () {
      this.stopPolling();
    },
    methods: {
      startPolling: function () {
        var t = this;
        this.pollingTimer ||
          (this.pollingTimer = setInterval(function () {
            t.$emit("poll");
          }, 3e3));
      },
      stopPolling: function () {
        this.pollingTimer &&
          (clearInterval(this.pollingTimer), (this.pollingTimer = null));
      },
    },
  },
  i = t._export_sfc(e, [
    [
      "render",
      function (e, i, n, a, r, m) {
        return t.e(
          { a: n.remindData.title },
          n.remindData.title ? { b: t.t(n.remindData.title) } : {},
          { c: m.timeStr },
          m.timeStr ? { d: t.t(m.timeStr) } : {},
          { e: 0 === n.remindData.items.length },
          0 === n.remindData.items.length
            ? {}
            : {
                f: t.f(n.remindData.items, function (e, i, n) {
                  return { a: t.t(e.strategy), b: t.t(e.msg), c: i };
                }),
              },
          { g: n.remindData.items.length },
          (n.remindData.items.length, {}),
          { h: t.n(n.isIOS ? "" : "remind-modal__body-and") }
        );
      },
    ],
    ["__scopeId", "data-v-52676426"],
  ]);
wx.createComponent(i);
