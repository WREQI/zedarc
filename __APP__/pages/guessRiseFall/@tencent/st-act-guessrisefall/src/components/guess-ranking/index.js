var e = require("../../../../../../../common/vendor.js"),
  r = require("../../mixins/guess-page-mixin.js"),
  t = {
    name: "GuessRanking",
    props: {
      myPerformance: {
        type: Object,
        default: function () {
          return {};
        },
      },
      allPerformance: {
        type: Array,
        default: function () {
          return [];
        },
      },
      actId: { type: String, default: "" },
      showLct: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        defaultImgXcx:
          "https://wzq.gtimg.com/image/activity/guessRiseFall/head.png",
        defaultImgH5:
          "https://st.gtimg.com/design/50451867dfaf2307dc8e84f2a010aaf9.png",
        currMonth: "",
        IS_XCX: r.IS_XCX,
      };
    },
    computed: {
      headurl: function () {
        return this.myPerformance.headurl || this.defaultImgH5;
      },
      defaultHeadImg: function () {
        return this.IS_XCX ? this.defaultImgXcx : this.defaultImgH5;
      },
      showMyResult: function () {
        return void 0 !== this.myPerformance.jointimes;
      },
      showRank: function () {
        return this.showMyResult || !!this.allPerformance.length;
      },
      isMyPerformance: function () {
        return !this.IS_XCX || this.myPerformance;
      },
    },
    created: function () {
      this.IS_XCX || e.StockBridge.report("shequ_caizhangdie_ranking_baoguang"),
        (this.currMonth = new Date().getMonth() + 1);
    },
    mounted: function () {
      this.IS_XCX &&
        this.showRank &&
        e.StockBridge.report("yy.guessrisefall.show_rank"),
        this.myPerformance &&
          !this.myPerformance.headimgurl &&
          this.IS_XCX &&
          e.StockBridge.report("yy.guessrisefall.show_authsetting");
    },
    methods: {
      getHeadImgUrl: function (e) {
        return (null == e ? void 0 : e.headimgurl) || this.defaultHeadImg;
      },
      goViewMore: function () {
        var r = this.actId;
        if (
          (this.showLct
            ? e.StockBridge.report("act.lctguess.clickseeall")
            : e.StockBridge.report("shequ_caizhangdie_rangking_clickseeall"),
          this.IS_XCX)
        ) {
          e.StockBridge.report("yy.guessrisefall.click_gorank");
          var t = encodeURIComponent(
            "https://wzq.tenpay.com/activity/page/guessRiseFall/#/rank?actId=3"
          );
          e.StockRouter.routeTo({
            name: "actWebview",
            query: { url: t, shareTitle: "排行榜" },
          });
        } else e.StockRouter.routeTo({ path: "rank", query: { actId: r } });
      },
      goMyPerformance: function () {
        var r = this.actId;
        if (this.IS_XCX) {
          e.StockBridge.report("yy.guessrisefall.click_gohistory");
          var t = encodeURIComponent(
            "https://wzq.tenpay.com/activity/page/guessRiseFall/#/home?actId=3"
          );
          e.StockRouter.routeTo({
            name: "actWebview",
            query: { url: t, shareTitle: "历史战绩" },
          });
        } else
          e.StockBridge.report("shequ_caizhangdie_ranking_myhistory"),
            e.StockRouter.routeTo({ path: "home", query: { actId: r } });
      },
      getAuthBtn: function () {
        this.$emit("getAuthBtn");
      },
      confirmAuth: function () {
        var r = this;
        this.IS_XCX &&
          this.myPerformance &&
          !this.myPerformance.headimgurl &&
          (e.StockBridge.report("yy.czdupdate_homeauth_exposure", {}, {}),
          e.wx$1.getSetting({
            success: function (t) {
              t.authSetting["scope.userInfo"] &&
                e.wx$1.getUserProfile({
                  desc: "获取你的昵称、头像",
                  success: function (e) {
                    var t, n;
                    r.$emit(
                      "userSetting",
                      (null == (t = e.userInfo) ? void 0 : t.nickName) || "",
                      (null == (n = e.userInfo) ? void 0 : n.avatarUrl) || ""
                    );
                  },
                  fail: function (e) {},
                });
            },
          }));
      },
    },
  };
Array || e.resolveComponent("st-icon")();
var n = e._export_sfc(t, [
  [
    "render",
    function (r, t, n, o, a, c) {
      return e.e(
        { a: c.showRank },
        c.showRank
          ? e.e(
              { b: !a.IS_XCX },
              a.IS_XCX ? {} : { c: e.p({ name: "arrow-right", size: "10px" }) },
              {
                d: e.o(function () {
                  return (
                    c.goMyPerformance && c.goMyPerformance.apply(c, arguments)
                  );
                }, 3867),
                e: n.allPerformance.length,
              },
              n.allPerformance.length
                ? e.e(
                    { f: c.isMyPerformance && n.myPerformance.rank },
                    c.isMyPerformance && n.myPerformance.rank
                      ? {
                          g: e.t(n.myPerformance.rank),
                          h:
                            "999+" == n.myPerformance.rank ||
                            "99+" == n.myPerformance.rank
                              ? 1
                              : "",
                        }
                      : {
                          i:
                            "999+" == n.myPerformance.rank ||
                            "99+" == n.myPerformance.rank
                              ? 1
                              : "",
                        },
                    { j: n.myPerformance && n.myPerformance.headimgurl },
                    n.myPerformance && n.myPerformance.headimgurl
                      ? { k: n.myPerformance.headimgurl }
                      : e.e({ l: a.IS_XCX }, (a.IS_XCX, {})),
                    { m: n.myPerformance && n.myPerformance.nickname },
                    n.myPerformance && n.myPerformance.nickname
                      ? { n: e.t(n.myPerformance.nickname) }
                      : {},
                    {
                      o:
                        n.myPerformance &&
                        n.myPerformance.headimgurl &&
                        !n.myPerformance.nickname,
                    },
                    (n.myPerformance &&
                      n.myPerformance.headimgurl &&
                      n.myPerformance.nickname,
                    {}),
                    {
                      p:
                        n.myPerformance &&
                        !n.myPerformance.headimgurl &&
                        !n.myPerformance.nickname,
                    },
                    !n.myPerformance ||
                      n.myPerformance.headimgurl ||
                      n.myPerformance.nickname
                      ? {}
                      : {
                          q: e.o(function () {
                            return (
                              c.confirmAuth && c.confirmAuth.apply(c, arguments)
                            );
                          }, 3868),
                        },
                    {
                      r: e.t(n.myPerformance.correct),
                      s: e.t(n.myPerformance.continCorrect),
                      t: e.t(n.myPerformance.perform),
                      v: e.o(function () {
                        return (
                          c.goMyPerformance &&
                          c.goMyPerformance.apply(c, arguments)
                        );
                      }, 3869),
                      w: e.f(n.allPerformance, function (r, t, n) {
                        return {
                          a: e.t(t + 1),
                          b: c.getHeadImgUrl(r),
                          c: e.t(r.nickname || "匿名用户"),
                          d: e.t(r.correct),
                          e: e.t(r.contin_correct),
                          f: e.t(r.perform),
                          g: r.uid,
                        };
                      }),
                      x: e.o(function () {
                        return c.goViewMore && c.goViewMore.apply(c, arguments);
                      }, 3870),
                    }
                  )
                : {}
            )
          : e.e(
              { y: !a.IS_XCX },
              a.IS_XCX ? {} : { z: e.p({ name: "arrow-right", size: "10px" }) },
              {
                A: e.o(function () {
                  return (
                    c.goMyPerformance && c.goMyPerformance.apply(c, arguments)
                  );
                }, 3871),
                B: e.t(a.currMonth),
              }
            )
      );
    },
  ],
  ["__scopeId", "data-v-35245244"],
]);
wx.createComponent(n);
