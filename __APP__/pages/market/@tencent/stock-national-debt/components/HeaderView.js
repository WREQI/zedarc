var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../@babel/runtime/helpers/defineProperty"),
  i = require("../../../../../common/vendor.js"),
  n = require("../nationalDebtIndex.js"),
  r = "gznhgnotice",
  c = {
    inject: { hqBridge: { default: {} }, stockBridge: { default: null } },
    props: ["oneYearPercent", "fromYYGG", "theme"],
    watch: {
      oneYearPercent: {
        handler: function (e) {
          this.mZDFPercent = e;
        },
        immediate: !0,
      },
    },
    components: {
      SubscribeBtn: function () {
        return "./SubscribeBtn.js";
      },
    },
    data: function () {
      return {
        mIsHaveHollidayPic: !1,
        mHolidayPicUrl:
          "https://st.gtimg.com/design/51cc4fc8a22f78133465a8e1b91bdd81.png",
        mHolidayPicUrlBlack:
          "https://st.gtimg.com/design/9c101b6f8ec9ff39c2f685eeb95764c4.png",
        mZDFPercent: 1.8,
        hasSubscribed: !1,
        advcheck: !1,
      };
    },
    computed: {
      percentColor: function () {
        return +this.mZDFPercent > 0
          ? "red"
          : +this.mZDFPercent < 0
          ? "green"
          : "gray";
      },
    },
    created: function () {
      if (
        (this.requestHolidayPicture(),
        this.initPopUpConfig(),
        this.hqBridge && "mp" !== this.hqBridge.ENV)
      ) {
        var e = this.$route.query;
        "advcheck" === (null == e ? void 0 : e.tf_channel) &&
          ((this.advcheck = !0),
          (this.mHolidayPicUrl =
            "https://st.gtimg.com/design/2d9d38ca7809f459cb07aee92f9d4fa2.png"));
      }
    },
    methods: {
      initPopUpConfig: function () {
        var e = this;
        n.queryUseSetting({ querysub: r }).then(function (t) {
          e.hasSubscribed = 1 === t[r].switch;
        });
      },
      onGoHome: function () {
        this.$emit("onGoHome");
      },
      onSubscribe: function () {
        var e,
          i = this,
          c = this.hasSubscribed ? "unsubscribe" : "subscribe",
          o = (t((e = {}), c, r), t(e, "scene", "wzq_xcx"), e);
        n.queryUseSetting(o, "POST").then(function (e) {
          0 == +e.retcode &&
            ((i.hasSubscribed = !i.hasSubscribed),
            i.$emit("subscribe", { hasSubscribed: i.hasSubscribed }),
            i.hqBridge.report(
              "hq.nationaldebtbuy.notice_".concat(
                i.hasSubscribed ? "subscribe" : "unsubscribe",
                "_click"
              )
            ));
        });
      },
      getPercentText: function () {
        var e;
        return (
          (e =
            0 === this.mZDFPercent
              ? "--"
              : "".concat(
                  (function (e) {
                    var t = e.num,
                      i = e.unit,
                      n = void 0 === i ? this.unit : i,
                      r = e.priceFixed,
                      c = void 0 === r ? 2 : r,
                      o = e.noSymbol;
                    if (null == t || isNaN(t)) return "";
                    if (0 === t) return Number(t).toFixed(c);
                    var s = parseFloat(t) / n;
                    return (
                      (s = s.toFixed(c)),
                      o ||
                        (s =
                          s > 0
                            ? "+".concat(s.replace(/^\+/, ""))
                            : 0 === s
                            ? s
                            : "-".concat(s.replace(/^-/, ""))),
                      s
                    );
                  })({
                    num: this.mZDFPercent,
                    unit: 1,
                    priceFixed: 3,
                    noSymbol: !0,
                  }),
                  "%"
                )),
          this.$emit("getHightlightPercent", e),
          e
        );
      },
      requestHolidayPicture: function () {
        return (
          (t = this),
          null,
          (n = e().mark(function () {
            var t, n, r, c;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        i.Wuji.get({ appid: "act", schemaid: "debt_top_img" })
                      );
                    case 2:
                      (r = e.sent),
                        (null ==
                        (c =
                          null ==
                          (n =
                            null == (t = null == r ? void 0 : r.data)
                              ? void 0
                              : t.reverse()[0])
                            ? void 0
                            : n.img)
                          ? void 0
                          : c.length) > 0 &&
                          ((this.mIsHaveHollidayPic = !0),
                          (this.mHolidayPicUrl = c));
                    case 5:
                    case "end":
                      return e.stop();
                  }
              },
              r,
              this
            );
          })),
          new Promise(function (e, i) {
            var r = function (e) {
                try {
                  o(n.next(e));
                } catch (e) {
                  i(e);
                }
              },
              c = function (e) {
                try {
                  o(n.throw(e));
                } catch (e) {
                  i(e);
                }
              },
              o = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(r, c);
              };
            o((n = n.apply(t, null)).next());
          })
        );
        var t, n;
      },
    },
  };
Array || i.resolveComponent("SubscribeBtn")();
var o = i._export_sfc(c, [
  [
    "render",
    function (e, t, n, r, c, o) {
      return i.e(
        {
          a: "black" === n.theme ? c.mHolidayPicUrlBlack : c.mHolidayPicUrl,
          b: !c.advcheck,
        },
        c.advcheck
          ? {}
          : i.e(
              { c: n.fromYYGG },
              n.fromYYGG
                ? {
                    d: i.o(function () {
                      return o.onGoHome && o.onGoHome.apply(o, arguments);
                    }, 2188),
                  }
                : {
                    e: i.sr("subscribeBtn", "ae1443cb-0"),
                    f: i.o(o.onSubscribe, 2189),
                    g: i.p({ theme: n.theme, hasSubscribed: c.hasSubscribed }),
                  }
            ),
        { h: !c.mIsHaveHollidayPic && !c.advcheck },
        c.mIsHaveHollidayPic || c.advcheck
          ? {}
          : { i: i.t(o.getPercentText()), j: i.n(o.percentColor) }
      );
    },
  ],
  ["__scopeId", "data-v-ae1443cb"],
]);
wx.createComponent(o);
