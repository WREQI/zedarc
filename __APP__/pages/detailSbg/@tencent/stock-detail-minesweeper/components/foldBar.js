var t = require("../../../../../common/vendor.js"),
  e = {
    props: ["data", "title", "tip", "type", "mpscrollTop"],
    watch: {
      data: {
        handler: function (t, e) {
          if (t && t !== e) {
            var a = (+t.tag.tag_value || 1) <= 1;
            (this.isFolded = a), this.setQue();
          }
        },
        immediate: !0,
      },
    },
    data: function () {
      return { isFolded: !0 };
    },
    created: function () {
      t.StockBridge.busOn("market-detail-act-fold", this.handleActFold);
    },
    beforeUnmount: function () {
      t.StockBridge.busOff("market-detail-act-fold", this.handleActFold);
    },
    methods: {
      handleActFold: function (t) {
        if (Object.prototype.hasOwnProperty.call(t, "foldedAll")) {
          var e = t.foldedAll;
          this.isFolded = e;
        }
      },
      setGoTeach: function () {
        var e = this.data.tag,
          a = e.module,
          o = e.tag_name_eng,
          d =
            "https://wzq.tenpay.com/resources/diagnoseStock/#/teachMineSweeperWzqV2?part="
              .concat(a, "&pos=")
              .concat(o);
        t.StockBridge.report("hq.stock_detail.ms_teach", {
          moduleId: o,
          tab: a,
        }),
          t.StockBridge.openExtraWebview(d);
      },
      setTips: function () {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return t.length > 18 ? "".concat(t.slice(0, 17), "...") : t;
      },
      fold: function () {
        var e = this.isFolded;
        t.StockBridge.report(
          "hq.stock_detail.ms_" + (e ? "unfold" : "folded"),
          "",
          "",
          { moduleId: this.data.tag.tag_name_eng }
        ),
          (this.isFolded = !e),
          this.$emit("foldChange"),
          this.setQue();
      },
      setQue: function () {
        var e = this;
        this.$nextTick(function () {
          var a = {};
          (a[e.type] = { type: e.type, folded: e.isFolded }),
            t.StockBridge.busEmit("market-detail-act-fold", a);
        });
      },
      scrollToCurrentBar: function (e) {
        var a = this;
        "mp" === t.StockBridge.ENV &&
          t.wx$1
            .createSelectorQuery()
            .in(this)
            .select("#".concat(e))
            .boundingClientRect(function (e) {
              if (e) {
                t.StockBridge.report("hq.stock_detail.ms_risk_tag");
                var o = e && e.top + (a.mpscrollTop || 0);
                t.wx$1.pageScrollTo({ scrollTop: o, duration: 360 }),
                  (a.isFolded = !1);
              }
            })
            .exec();
      },
    },
  },
  a = t._export_sfc(e, [
    [
      "render",
      function (e, a, o, d, n, i) {
        return t.e(
          {
            a:
              o.data &&
              o.data.tag &&
              o.data.tag.module_name &&
              o.data.show_module,
          },
          o.data && o.data.tag && o.data.tag.module_name && o.data.show_module
            ? t.e(
                {
                  b: t.t(o.data.tag.module_name),
                  c: t.n("risk-".concat(o.data.tag.tag_value)),
                  d: t.t(i.setTips(o.data.comment_fold)),
                  e: t.o(function () {
                    return i.fold && i.fold.apply(i, arguments);
                  }, 3725),
                  f: o.data.comment,
                },
                o.data.comment
                  ? {
                      g: t.t(o.data.comment),
                      h: t.o(function () {
                        return i.setGoTeach && i.setGoTeach.apply(i, arguments);
                      }, 3726),
                    }
                  : {},
                {
                  i: t.n(n.isFolded ? "folded" : ""),
                  j: o.data.tag.tag_name_eng,
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-315adf4b"],
  ]);
wx.createComponent(a);
