var t = require("../../../../common/vendor.js"),
  o = {
    inject: ["hqBridge"],
    components: {},
    props: {
      list: {
        type: Array,
        require: !0,
        default: function () {
          return [];
        },
      },
      diaPosition: { type: Number, require: !0, default: 0 },
      direction: { type: String, require: !0, default: !1 },
    },
    data: function () {
      return { scrollTop: 0, vHeight: 0 };
    },
    computed: {},
    mounted: function () {
      "mp" !== t.StockBridge.ENV &&
        "undefined" != typeof document &&
        document.body &&
        this.disableScroll(),
        t.StockBridge.report("hq.detail.fund.dialog.expose");
    },
    beforeDestroy: function () {
      "undefined" != typeof document && document.body && this.recoverScroll();
    },
    deactivated: function () {
      this.$emit("onClose");
    },
    methods: {
      close: function () {
        this.$emit("onClose");
      },
      goDetail: function (t) {
        this.$emit("onClose"), this.$emit("goDetail", t, !0);
      },
      disableScroll: function () {
        if ("undefined" != typeof document && document.body) {
          this.scrollTop =
            document.body.scrollTop || document.documentElement.scrollTop;
          var t = document.body.style,
            o = document.body.clientHeight;
          (this.vHeight = o),
            (t.position = "fixed"),
            (t.width = "100%"),
            (t.height = "100%"),
            (t.top = -this.scrollTop + "px"),
            (t.overflowY = "hidden"),
            this.hqBridge.busEmit("change-pulldown-status", !0);
        }
      },
      recoverScroll: function () {
        if ("undefined" != typeof document && document.body) {
          var t = document.body.style;
          (t.width = "unset"),
            (t.position = "unset"),
            (t.height = this.vHeight),
            (t.top = 0),
            (t.overflowY = "auto"),
            (document.body.scrollTop = document.documentElement.scrollTop =
              this.scrollTop || 0),
            this.hqBridge.busEmit("change-pulldown-status", !1);
        }
      },
    },
  },
  e = t._export_sfc(o, [
    [
      "render",
      function (o, e, n, i, c, d) {
        return {
          a: t.o(function () {
            return d.close && d.close.apply(d, arguments);
          }, 3198),
          b: t.s("".concat(n.direction, ": -4px")),
          c: t.f(n.list, function (o, e, n) {
            return {
              a: o.icon,
              b: t.t("lhb" === o.type ? "龙虎榜" : "主力资金"),
              c: t.t(o.title),
              d: t.t(o.count),
              e: o.color,
              f: t.o(
                function (t) {
                  return d.goDetail(o.type);
                },
                3199,
                o.ob_id
              ),
              g: o.ob_id,
            };
          }),
          d: t.s("".concat(n.direction, ": ").concat(n.diaPosition, "px;")),
          e: t.o(function () {}, 3200),
        };
      },
    ],
    ["__scopeId", "data-v-c9a8bbf9"],
  ]);
wx.createComponent(e);
