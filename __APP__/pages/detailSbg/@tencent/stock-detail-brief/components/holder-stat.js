var t = require("../../stock-hq-data/index.js"),
  e = require("../../../../../common/vendor.js"),
  i = require("../../stock-base/visibilityObserver/index.js"),
  n = {
    name: "HolderStat",
    props: { gdData: { type: Object, required: !0 } },
    data: function () {
      return {
        tabList: [
          { id: "cggd", name: "持股股东" },
          { id: "gdfb", name: "股东分布" },
        ],
        activeTab: "cggd",
      };
    },
    computed: {
      gdtj: function () {
        return this.gdData;
      },
    },
    beforeDestroy: function () {
      var t, e, i;
      null ==
        (i =
          null == (e = null == (t = this.VISIBILITY_OBJ) ? void 0 : t.observer)
            ? void 0
            : e.disconnect) || i.call(e),
        (this.VISIBILITY_OBJ = null);
    },
    mounted: function () {
      var t, n;
      (null == (n = null == (t = this.gdtj) ? void 0 : t.cggd)
        ? void 0
        : n.list) &&
        !this.gdtj.cggd.list.length &&
        ((this.activeTab = "gdfb"),
        (this.tabList = [{ id: "gdfb", name: "股东分布" }])),
        (this.VISIBILITY_OBJ = new i.VisibilityObserver(
          ".gdtj-block",
          {
            once: !0,
            callback: function (t) {
              t && e.StockBridge.report("hq.stock_detail.briefus_gdtj_brow");
            },
            intersection: { threshold: 0.2 },
          },
          this
        ));
    },
    methods: {
      changeTab: function (t) {
        e.StockBridge.report(
          "hq.stock_detail.briefus_gdtj_".concat(t, "_click")
        ),
          (this.activeTab = t);
      },
      formatNumber: function (e) {
        return e ? t.utils.bigNumberToText(e, "", 2, 0, 1) : "--";
      },
      formatPercentage: function (t) {
        return null == t ? "--" : "".concat(t, "%");
      },
      getCurrentDate: function () {
        return this.gdtj && this.gdtj[this.activeTab]
          ? this.gdtj[this.activeTab].date
          : "";
      },
      getCurrentList: function () {
        if (
          !this.gdtj ||
          !this.gdtj[this.activeTab] ||
          !this.gdtj[this.activeTab].list
        )
          return [];
        var t = this.gdtj[this.activeTab].list,
          e = "cggd" === this.activeTab ? 5 : 7;
        return t.slice(0, e);
      },
      openDetail: function () {
        e.StockBridge.report("hq.stock_detail.briefus_gdtj_detail_click"),
          this.$emit("openDetail");
      },
    },
  },
  r = e._export_sfc(n, [
    [
      "render",
      function (t, i, n, r, a, c) {
        return e.e(
          { a: c.gdtj },
          c.gdtj
            ? e.e(
                {
                  b: e.t(c.getCurrentDate()),
                  c: e.o(function (t) {
                    return c.openDetail();
                  }, 3210),
                  d: a.tabList.length > 1,
                },
                a.tabList.length > 1
                  ? {
                      e: e.f(a.tabList, function (t, i, n) {
                        return {
                          a: e.t(t.name),
                          b: e.n(a.activeTab === t.id ? "active" : ""),
                          c: t.id,
                          d: e.o(
                            function (e) {
                              return c.changeTab(t.id);
                            },
                            3211,
                            t.id
                          ),
                        };
                      }),
                      f: e.n("col-" + a.tabList.length),
                    }
                  : {},
                {
                  g: e.t("cggd" === a.activeTab ? "股东名称" : "持股机构"),
                  h: e.f(c.getCurrentList(), function (t, i, n) {
                    return {
                      a: e.t(t.name),
                      b: e.t(c.formatNumber(t.cgs)),
                      c: e.t(c.formatPercentage(t.cgbl || t.zb)),
                      d: i,
                    };
                  }),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-e143f6bb"],
  ]);
wx.createComponent(r);
