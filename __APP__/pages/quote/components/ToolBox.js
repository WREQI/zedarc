var e = require("../../../common/vendor.js"),
  t = e.useBrokerInfo(),
  i = t.hasBind,
  n = t.navigateToTrade,
  a = {
    components: {
      Modal: function () {
        return "./Modal.js";
      },
    },
    inject: ["hqBridge"],
    props: ["skin", "landscape", "market", "scode", "setting"],
    data: function () {
      return {
        imageUrl: "https://st.gtimg.com/image/kline",
        toolboxFold: !1,
        magicNine: {
          popupShow: !1,
          noticeModalShow: !1,
          flag: { hasTried: !1 },
        },
        tradeLine: {
          noticeModalShow: !1,
          teachModalShow: !1,
          flag: { visited: !1, hasTried: !1 },
        },
      };
    },
    computed: {
      isAccountOpen: function () {
        return i.value;
      },
    },
    created: function () {
      (this.toolboxFold = this.hqBridge.getStorage("chartToolboxFold")),
        this.getMagicNineState(),
        this.getTradeLineState();
    },
    methods: {
      goTeach: function (e) {
        var t = {
          general: "SN20221219144650846cba69",
          magicNine: "SN202212191449558343ff0c",
          tradeLine: "SN20230424102742846f52b2",
        }[e];
        this.hqBridge.routeTo({
          path: "/pages/newsCon/newsDetail/main",
          query: { id: t, zxtype: 1, articleStyle: "fullTeach" },
        }),
          (this.tradeLine.teachModalShow = !1);
      },
      getMagicNineState: function () {
        this.setting.magicNine &&
          !this.isAccountOpen &&
          ((this.setting.magicNine = !1),
          this.$parent.updateSetting(this.setting));
        var e = this.hqBridge.getStorage("magicNineFlag") || {};
        this.magicNine.flag.hasTried = e.hasTried;
      },
      toggleMagicNine: function () {
        if (
          (this.hqBridge.report("hq.stock_detail.magic_nine_click"),
          this.isAccountOpen)
        ) {
          (this.setting.magicNine = !this.setting.magicNine),
            this.$parent.updateSetting(this.setting);
          var e = this.$parent.$refs.composition;
          this.setting.magicNine
            ? (/Kline/.test(this.$parent.tabKey)
                ? e.getInnerRef(!0).toggleMagicNine(!0)
                : e.switchChart("dayKline"),
              this.magicNine.flag.hasTried ||
                ((this.magicNine.noticeModalShow = !0),
                (this.magicNine.flag.hasTried = !0),
                this.hqBridge.setStorage("magicNineFlag", this.magicNine.flag),
                this.hqBridge.report(
                  "hq.stock_detail.magic_nine_notice_exposure"
                )))
            : /Kline/.test(this.$parent.tabKey) &&
              e.getInnerRef(!0).toggleMagicNine(!1);
        } else
          (this.magicNine.popupShow = !0),
            this.hqBridge.report("hq.stock_detail.magic_nine_intro_exposure");
      },
      onNoticeConfirm: function () {
        this.magicNine.noticeModalShow
          ? ((this.magicNine.noticeModalShow = !1),
            this.hqBridge.report("hq.stock_detail.magic_nine_notice_click"))
          : this.tradeLine.noticeModalShow &&
            (this.tradeLine.noticeModalShow = !1);
      },
      goOpenAccount: function () {
        (this.magicNine.popupShow = !1),
          n({ name: "ApplyIndex", query: { stat_data: "Imw28p007s005" } }),
          this.hqBridge.report("hq.stock_detail.magic_nine_account_click");
      },
      getTradeLineState: function () {
        this.setting.tradeLine &&
          !this.isAccountOpen &&
          ((this.setting.tradeLine = !1),
          this.$parent.updateSetting(this.setting));
        var e = this.hqBridge.getStorage("tradeLineFlag") || {};
        (this.tradeLine.flag.visited = e.visited),
          (this.tradeLine.flag.hasTried = e.hasTried);
      },
      toggleTradeLine: function () {
        if (
          (this.hqBridge.report("hq.stock_detail.trade_line_click"),
          this.tradeLine.flag.visited ||
            ((this.tradeLine.flag.visited = !0),
            this.hqBridge.setStorage("tradeLineFlag", this.tradeLine.flag)),
          this.isAccountOpen)
        ) {
          (this.setting.tradeLine = !this.setting.tradeLine),
            this.$parent.updateSetting(this.setting);
          var e = this.$parent.$refs.composition;
          this.setting.tradeLine
            ? ("dayKline" === this.$parent.tabKey
                ? (e.getInnerRef(!0).toggleTradeLine(!0),
                  this.$nextTick(function () {
                    e.updateData(!0);
                  }))
                : e.switchChart("dayKline"),
              this.tradeLine.flag.hasTried ||
                ((this.tradeLine.noticeModalShow = !0),
                (this.tradeLine.flag.hasTried = !0),
                this.hqBridge.setStorage("tradeLineFlag", this.tradeLine.flag)))
            : "dayKline" === this.$parent.tabKey &&
              (e.getInnerRef(!0).toggleTradeLine(!1),
              this.$nextTick(function () {
                e.updateData(!0);
              }));
        } else
          this.hqBridge.routeTo({
            path: "/pages/quote/tradeLineIntro",
            query: { stat: "IfU00p000a022" },
          });
      },
    },
  };
Array || e.resolveComponent("Modal")(), Math;
var o = e._export_sfc(a, [
  [
    "render",
    function (t, i, n, a, o, r) {
      return e.e(
        { a: o.magicNine.popupShow },
        o.magicNine.popupShow
          ? {
              b: e.o(function (e) {
                return (o.magicNine.popupShow = !1);
              }, 2867),
              c: "".concat(o.imageUrl, "/magic-nine/intro.png"),
              d: "".concat(o.imageUrl, "/next.png"),
              e: e.o(function (e) {
                return r.goTeach("magicNine");
              }, 2868),
              f: "".concat(
                o.imageUrl,
                "/magic-nine/open-account-landscape.png"
              ),
              g: e.o(function (e) {
                return r.goOpenAccount();
              }, 2869),
              h: e.o(function () {}, 2870),
              i: e.o(function () {}, 2871),
              j: e.o(function (e) {
                return (o.magicNine.popupShow = !1);
              }, 2872),
            }
          : {},
        { k: o.magicNine.noticeModalShow || o.tradeLine.noticeModalShow },
        o.magicNine.noticeModalShow || o.tradeLine.noticeModalShow
          ? {
              l: e.o(function (e) {
                return r.onNoticeConfirm();
              }, 2873),
              m: e.p({
                title: "使用须知",
                rightButton: "我已知晓",
                landscape: n.landscape,
              }),
            }
          : {},
        { n: o.tradeLine.teachModalShow },
        o.tradeLine.teachModalShow
          ? {
              o: "".concat(o.imageUrl, "/trade-line/icon-red2.png"),
              p: e.t("<"),
              q: "".concat(o.imageUrl, "/trade-line/icon-green2.png"),
              r: e.o(function (e) {
                return r.goTeach("tradeLine");
              }, 2874),
              s: e.o(function (e) {
                return (o.tradeLine.teachModalShow = !1);
              }, 2875),
              t: e.p({
                title: "操盘线图例说明",
                leftButton: "更多使用说明",
                rightButton: "我知道了",
                landscape: n.landscape,
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-596c3425"],
]);
wx.createComponent(o);
