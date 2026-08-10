var e = require("../../../../../../common/vendor.js"),
  t = {
    inject: ["hqBridge"],
    props: {
      type: { type: String, default: "baseInfo" },
      skin: { type: String, default: "white" },
    },
    data: function () {
      return { isShowTips: !0, canClose: !1 };
    },
    computed: {
      title: function () {
        return {
          baseInfo: "基本信息",
          yjbx: "业绩表现",
          cyr: "持有人结构",
          deal: "交易信息",
          realtime: "持仓占比",
          ylyc: "盈利预测功能说明",
          iopv: "参考净值 (IOPV)",
        }[this.type];
      },
    },
    mounted: function () {
      var e = this;
      "iopv" !== this.type &&
        this.hqBridge.report(
          "hq.stock_detail.".concat(
            "realtime" === this.type ? "asset_realtime" : "etf_tip",
            ".modal_brow"
          ),
          { type: this.type }
        ),
        setTimeout(function () {
          e.canClose = !0;
        }, 300);
    },
    methods: {
      handleClose: function () {
        var e = this;
        this.canClose &&
          ((this.isShowTips = !1),
          setTimeout(function () {
            e.$emit("close");
          }, 300),
          "iopv" !== this.type &&
            this.hqBridge.report("hq.stock_detail.etf_tip.modal_close", {
              type: this.type,
            }));
      },
    },
  },
  i = e._export_sfc(t, [
    [
      "render",
      function (t, i, o, n, p, s) {
        return e.e(
          {
            a: e.t(s.title),
            b: e.o(function () {
              return s.handleClose && s.handleClose.apply(s, arguments);
            }, 2243),
            c: "baseInfo" === o.type,
          },
          (o.type, {}),
          { d: "realtime" === o.type },
          (o.type, {}),
          { e: "yjbx" === o.type },
          (o.type, {}),
          { f: "cyr" === o.type },
          (o.type, {}),
          { g: "deal" === o.type },
          (o.type, {}),
          { h: "ylyc" === o.type },
          (o.type, {}),
          { i: "iopv" === o.type },
          (o.type, {}),
          {
            j: e.n(p.isShowTips ? "fade-up" : "fade-down"),
            k: e.o(function () {}, 2244),
            l: e.n(p.isShowTips ? "fade-in" : "fade-out"),
            m: e.n(o.skin + "-theme"),
            n: e.o(function () {}, 2245),
            o: e.o(function () {
              return s.handleClose && s.handleClose.apply(s, arguments);
            }, 2246),
          }
        );
      },
    ],
    ["__scopeId", "data-v-0222f833"],
  ]);
wx.createComponent(i);
