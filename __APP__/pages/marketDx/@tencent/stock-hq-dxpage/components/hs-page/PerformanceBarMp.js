var t = require("../../utils/common.js"),
  e = require("../../../../../../common/vendor.js"),
  i = {
    inject: ["hqBridge"],
    props: { data: { type: Object, default: function () {} } },
    components: {},
    data: function () {
      return { profitList: [], env: this.hqBridge.ENV, activeTabIndex: 0 };
    },
    computed: {
      swiper: function () {
        var t;
        return null == (t = this.$refs.performanceBar) ? void 0 : t.swiper;
      },
      isMp: function () {
        return "mp" === this.hqBridge.ENV;
      },
    },
    created: function () {
      this.setProfitList();
    },
    methods: {
      setColor: t.setColor,
      setProfitList: function () {
        this.profitList = [
          {
            title: "近3月主板新股表现",
            subTitle: "平均每签获利",
            amount: this.data.stock,
          },
          {
            title: "近3月新债表现",
            subTitle: "平均每签获利",
            amount: this.data.bond,
          },
        ];
      },
      swiperChange: function (t) {
        var e = ((null == t ? void 0 : t.detail) || {}).current;
        this.activeTabIndex = e || 0;
      },
      gotoNewStockPurchase: function () {
        var t = 0 === this.activeTabIndex ? "stock" : "bond";
        if ("wzq" === this.env)
          this.hqBridge.routeTo({
            path: "/newstockpurchase",
            query: {
              market: "hs",
              type: t,
              timestamp: Date.now(),
              periodTab: 0,
            },
          });
        else if ("mp" === this.hqBridge.ENV)
          this.hqBridge.routeTo({
            path: "/pages/marketDx/DxPerformDetailPage",
            query: {
              market: "hs",
              type: t,
              timestamp: Date.now(),
              periodTab: 0,
            },
          });
        else if ("app" === this.hqBridge.ENV) {
          var e = encodeURIComponent(
            JSON.stringify({
              p_key: "newstockpurchase",
              p_showNav: !0,
              market: "hs",
              type: t,
              period: 90,
            })
          );
          this.hqBridge.routeTo({ url: "qqstock://Hippy?info=".concat(e) });
        }
        this.hqBridge.report("hq.xingurili.goto_purchase_hs_".concat(t));
      },
    },
  },
  r = e._export_sfc(i, [
    [
      "render",
      function (t, i, r, o, n, s) {
        return {
          a: e.f(n.profitList, function (t, i, r) {
            return {
              a: e.t(t.title),
              b: e.t(t.subTitle),
              c: e.t(t.amount),
              d: e.n(s.setColor(t.amount)),
              e: i,
              f: e.o(
                function (t) {
                  return s.gotoNewStockPurchase();
                },
                2148,
                i
              ),
            };
          }),
          b: e.o(function () {
            return s.swiperChange && s.swiperChange.apply(s, arguments);
          }, 2149),
        };
      },
    ],
    ["__scopeId", "data-v-11acc0c4"],
  ]);
wx.createComponent(r);
