var t = require("../../../../../../common/vendor.js"),
  e = {
    name: "AiEnterLiveSupportComponent",
    props: {
      propsObj: { type: Object, required: !0 },
      theme: { required: !0, type: String },
      curRequestId: { type: String, default: "" },
      curSessionId: { type: String, default: "" },
    },
    data: function () {
      return { icon: "", jump_url: "", text: "" };
    },
    created: function () {
      var t, e, r;
      (this.icon = null == (t = this.propsObj) ? void 0 : t.icon),
        (this.jump_url = null == (e = this.propsObj) ? void 0 : e.jump_url),
        (this.text = null == (r = this.propsObj) ? void 0 : r.text);
    },
    mounted: function () {
      t.StockBridge.report("base.ai_search.entry_live_support_brow", {
        requestid: this.curRequestId,
        session: this.curSessionId,
        url: this.jump_url,
      });
    },
    methods: {
      handleEnterBottom: function () {
        var e;
        this.jump_url &&
          (t.StockBridge.report("base.ai_search.entry_live_support_click", {
            requestid: this.curRequestId,
            session: this.curSessionId,
            url: this.jump_url,
          }),
          (null == (e = this.jump_url) ? void 0 : e.startsWith("qqstock"))
            ? t.StockBridge.routeTo({ url: this.jump_url })
            : t.StockBridge.openExtraWebview(this.jump_url));
      },
    },
  },
  r = t._export_sfc(e, [
    [
      "render",
      function (e, r, i, o, u, n) {
        return t.e({ a: u.icon }, u.icon ? { b: u.icon } : {}, {
          c: t.t(u.text),
          d: t.o(function () {
            return (
              n.handleEnterBottom && n.handleEnterBottom.apply(n, arguments)
            );
          }, 5895),
          e: t.n("skin-".concat(i.theme)),
        });
      },
    ],
    ["__scopeId", "data-v-1b5ef2e0"],
  ]);
wx.createComponent(r);
