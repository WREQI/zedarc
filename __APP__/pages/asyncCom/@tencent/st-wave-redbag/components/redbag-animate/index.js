var t = require("../../../../../../@babel/runtime/helpers/defineProperty"),
  e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../../../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../../../../@babel/runtime/helpers/createClass"),
  a = function (t, e, o) {
    return new Promise(function (i, a) {
      var n = function (t) {
          try {
            s(o.next(t));
          } catch (t) {
            a(t);
          }
        },
        r = function (t) {
          try {
            s(o.throw(t));
          } catch (t) {
            a(t);
          }
        },
        s = function (t) {
          return t.done ? i(t.value) : Promise.resolve(t.value).then(n, r);
        };
      s((o = o.apply(t, e)).next());
    });
  },
  n = require("../../../../../../common/vendor.js"),
  r = require("../../utils/util.js"),
  s = new ((function () {
    function t() {
      o(this, t);
    }
    return (
      i(t, [
        {
          key: "changeQouteBodong",
          value: function () {
            return a(
              this,
              null,
              e().mark(function t() {
                return e().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          n.StockBridge.request(
                            "https://wzq.tenpay.com/cgi-bin/activity.fcgi",
                            "GET",
                            {
                              activity: "quote_change",
                              action: "subscribe_viewgen",
                              subscribe: "off",
                            }
                          )
                            .then(function (t) {
                              return t.data;
                            })
                            .catch()
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
          },
        },
      ]),
      t
    );
  })())(),
  c = {};
Object.defineProperty(c, "__esModule", { value: !0 });
var d,
  l = (c.default = function () {
    var t = n.wx$1.getSystemInfoSync(),
      e = t.platform,
      o = t.version,
      i = t.system;
    return {
      env: { IS_PCWEIXIN: /(windows|mac)/i.test(e) },
      platformVersion: o,
      os: i,
    };
  }),
  h = {};
d = n.Wuji;
var u,
  g,
  p,
  m = l().env,
  f = m.IS_PCWEIXIN,
  y = (m.IS_LITE_MODE, n.dayjs(new Date()).format("YYYYMMDD")),
  S = n.StockBridge.getStorage("yy.redpacket.close_today"),
  b = !S || (S && !S[y]);
(u = "https://st.gtimg.com/design/8106d372b778d22f7f400d2e3bf43b9d.png"),
  (g = "https://st.gtimg.com/design/a2b99a31bf7180529c4116020ba6e232.png"),
  (p = "https://st.gtimg.com/design/642cf69a654ff06aeab14899c60219ee.json");
var k = {},
  w = "market-updateSetting",
  v = "bodong_redbag_brow_flag",
  _ = 0,
  P = {
    name: "RedbagAnimate",
    components: {
      CloseConfirm: function () {
        return "./close-confirm.js";
      },
      Animation: function () {
        return "../../../../../common/lottie.js";
      },
    },
    props: {
      userinfo: { type: Object, default: function () {} },
      width: { type: Number, default: 0 },
      height: { type: Number, default: 0 },
      options: { type: Object, default: function () {} },
      stockType: { type: String, default: "" },
      stockName: { type: String, default: "" },
      from: { type: String, default: "" },
    },
    data: function () {
      return {
        redbagIcon: u,
        redbagClose: g,
        lottieJson: p,
        ratio: 1,
        redbagParams: {},
        redBagAnimate: null,
        canvasData: {},
        imgPosition: null,
        scode: "0",
        redPocketTicket: "",
        bdongShow: !0,
        lottieShow: !1,
        clickAreaShow: !1,
        isShowCloseBtnStat: !1,
        isShowRedBagAnimate: b,
        isShowClosePopup: !1,
        animationOver: !1,
        outerStyle: "translateY(-46rpx)",
        ballStyle: "translateX(-46rpx)",
        redPointStyleX: "-20px",
        redPointStyleY: "-20px",
      };
    },
    mounted: function () {
      return a(
        this,
        null,
        e().mark(function t() {
          var o, i, a, s, c, d, l, h, u;
          return e().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      ((k = n.StockBridge.getCurRouteInfo().query),
                      this.isShowRedBagAnimate)
                    ) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return");
                  case 2:
                    (i = (o = k).point),
                      (a = o.trend),
                      (s = o.scode),
                      (c = o.type),
                      o.market,
                      (d = o.guide),
                      (l = c),
                      (h = r.findAnimationStock(s, l)) &&
                        ((this.redbagParams = h), r.setRedbagClicked(s, l)),
                      d
                        ? (this.isShowRedBagAnimate = !1)
                        : i || a || h || "chooseIndex" === this.from
                        ? (!i &&
                          this.redbagParams &&
                          this.redbagParams.timepoint
                            ? (this.point = this.redbagParams.timepoint)
                            : (this.point = i),
                          (u =
                            "chooseIndex" === this.from
                              ? "market-getPointPositionResult_chooseIndex"
                              : "market-getPointPositionResult"),
                          (this.trend = a || "down"),
                          n.StockBridge.busOff(u, this.setPointPosition),
                          n.StockBridge.busOn(u, this.setPointPosition),
                          n.StockBridge.busOff(w, this.updateSetting),
                          n.StockBridge.busOn(w, this.updateSetting),
                          (this.eventName = u),
                          this.getPointPosition())
                        : (this.isShowRedBagAnimate = !1);
                  case 4:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this
          );
        })
      );
    },
    methods: {
      getPointPosition: function () {
        var t = this;
        setTimeout(function () {
          var e;
          n.StockBridge.busEmit("market-getPointPosition", {
            time: null == (e = t.point) ? void 0 : e.slice(-4),
            trend: t.trend,
          });
        }, 500);
      },
      setPointPosition: function (t) {
        var e = "try later" === t || !t || null == t.x || null == t.y;
        if (e && _ < 4) return (_ += 1), void this.getPointPosition();
        (this.targetPointData = {
          x: e ? 130 : t.x * this.ratio,
          y: e ? 180 : t.y * this.ratio,
        }),
          this.playMp();
      },
      updateSetting: function () {},
      goto: function () {
        var t,
          e = this.redPocketTicket,
          o = k,
          i = o.stat_data,
          a = o.stat,
          s = o.notice_type,
          c = o.tid,
          d = o.used_flag,
          l = void 0 === d ? "" : d,
          u = o.invite_code,
          g = void 0 === u ? "" : u,
          p = i || a || h.stat_data || h.stat,
          m = h.usertype,
          f = void 0 === m ? "" : m,
          y =
            "chooseIndex" === this.from
              ? "yy.bodong.bigcard_hotstock_click"
              : "YY.bodong.kline_click";
        this.postStatData(y);
        var S = r.isIndex(this.stockType) ? "marketswing" : "selfswing";
        s && (S = s),
          (null == (t = this.redbagParams) ? void 0 : t.notice_type) &&
            (S = this.redbagParams.notice_type),
          setTimeout(function () {
            var t =
              "https://wzq.tenpay.com/activity/page/wavepacket/#/page?notice_type="
                .concat(S, "&stat_data=")
                .concat(p, "&lite=0");
            e && (t = "".concat(t, "&redpocket_ticket=").concat(e)),
              "newuser" === f && (t = "".concat(t, "&usertype=newuser")),
              c &&
                (t = ""
                  .concat(t, "&tid=")
                  .concat(c, "&used_flag=")
                  .concat(l, "&invite_code=")
                  .concat(g)),
              n.wx$1.navigateTo({
                url: "/pages/act/webview/main?url=".concat(
                  encodeURIComponent(t)
                ),
              });
          }, 100);
      },
      postStatData: function (t, e) {
        var o = this.stockName,
          i = n.StockBridge.getCurRouteInfo().query.trend,
          a = n.StockBridge.getCurRouteInfo().query.vtoolsid;
        try {
          e && "undefined" === a && (a = JSON.parse(e).graypolicyId);
        } catch (t) {
          a = a || "";
        }
        var r = a
          ? "".concat(o, "-").concat(i, "-").concat(a)
          : "".concat(o, "-").concat(i);
        e
          ? n.StockBridge.report(t, {
              yy_public_str1: r,
              report_info: JSON.parse(e),
            })
          : n.StockBridge.report(t, { yy_public_str1: r });
      },
      checkShowClose: function () {
        return a(
          this,
          null,
          e().mark(function t() {
            var o, i, a, n, r, s, c, l, h;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((i = (o = k).stat_data),
                        (a = o.stat),
                        (n = o.act_flow_id),
                        !(r = i || a) || "stk-wave" === n)
                      ) {
                        t.next = 10;
                        break;
                      }
                      return (
                        (t.next = 4),
                        d.get({
                          appid: "act",
                          schemaid: "wave_redbag_stock",
                          schemakey: "f07077f5eeaf41bda9f9219c4f601393",
                        })
                      );
                    case 4:
                      (s = t.sent),
                        (c = s.data),
                        200 == +s.code
                          ? ((l = c[0] || {}),
                            (h = l.stat_data),
                            (this.isShowCloseBtnStat = -1 === h.indexOf(r)))
                          : (this.isShowCloseBtnStat = !0),
                        (t.next = 11);
                      break;
                    case 10:
                      this.isShowCloseBtnStat = !0;
                    case 11:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      playH5: function () {
        return a(
          this,
          null,
          e().mark(function t() {
            var o,
              i,
              a,
              s,
              c,
              d,
              l,
              h,
              m,
              f,
              y,
              S,
              b,
              w,
              _,
              P,
              x,
              B,
              C,
              A,
              D,
              I = this;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        (o = document.getElementById("target")) &&
                        o.getContext
                      ) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        void (this.isShowRedBagAnimate = !1)
                      );
                    case 3:
                      if (
                        ((i = o.getContext("2d")),
                        (a = {
                          cWidth: this.width * this.ratio,
                          cHeight: this.height * this.ratio,
                          lWidth: document.body.clientWidth * this.ratio,
                        }),
                        (s = { width: 367, aspect: 664 / 551 }),
                        (c = { width: 40, aspect: 1 }),
                        (d = "chooseIndex" !== this.from ? g : ""),
                        (h = (l = k).scode),
                        (m = l.redpocket_ticket),
                        (f = l.report_info),
                        (S = (y = k).invite_code),
                        (b = y.drawnsign),
                        (w = y.act_flow_id),
                        (_ = this.point),
                        (this.scode = h),
                        (this.redPocketTicket = m),
                        (P = this.options.isTrading),
                        (x = this.options.options),
                        (B = x.setting),
                        (C = x.layout),
                        (B.layout = C),
                        (A = n.dayjs().format("YYYYMMDD")),
                        (this.isShowCloseBtnStat = "stk_wave" === w),
                        "chooseIndex" !== this.from && !r.isToday(_))
                      ) {
                        t.next = 19;
                        break;
                      }
                      return (t.next = 11), this.checkShowClose();
                    case 11:
                      if (
                        ((this.redBagAnimate = new RED_BAG_ANIMATE({
                          ctx: i,
                          canvasData: a,
                          imgData: s,
                          imgSrc: u,
                          closeData: c,
                          closeSrc: d,
                          targetPointData: this.targetPointData,
                          insertThis: this,
                          isShowCloseBtnStat: this.isShowCloseBtnStat,
                          setting: B,
                        })),
                        n.StockBridge.getStorage("redbagAnimate") === A ||
                        S ||
                        b
                          ? (this.redBagAnimate.start("img", P),
                            this.setRedbagClickArea())
                          : (n.StockBridge.setStorage("redbagAnimate", A),
                            (this.anim = lottie.loadAnimation({
                              container:
                                document.getElementById("bdong-animate"),
                              renderer: "svg",
                              loop: !1,
                              path: p,
                            })),
                            this.anim.addEventListener("complete", function () {
                              (I.bdongShow = !1),
                                I.redBagAnimate.start("all", P),
                                I.setRedbagClickArea();
                            })),
                        n.StockBridge.getStorage(v))
                      ) {
                        t.next = 17;
                        break;
                      }
                      n.StockBridge.setStorage(v),
                        (D =
                          "chooseIndex" === this.from
                            ? "yy.bodong.bigcard_hotstock_brow"
                            : "YY.bodong.kline_brow"),
                        f ? this.postStatData(D, f) : this.postStatData(D);
                    case 17:
                      t.next = 20;
                      break;
                    case 19:
                      this.bdongShow = !1;
                    case 20:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      setRedbagClickArea: function () {
        var t = this;
        (this.clickAreaShow = !0),
          this.$nextTick(function () {
            var e = document.getElementsByClassName("redbag-click")[0];
            if (
              (null == e ? void 0 : e.style) &&
              t.redBagAnimate.endImgPosition
            ) {
              var o =
                (t.isShowCloseBtnStat
                  ? t.redBagAnimate.imgClosePosition.height
                  : 0) + 15;
              if (
                ((e.style.top =
                  (t.redBagAnimate.endImgPosition.y - o) /
                    t.redBagAnimate.ratio +
                  "px"),
                (e.style.left =
                  t.redBagAnimate.endImgPosition.x / t.redBagAnimate.ratio +
                  "px"),
                f)
              ) {
                var i = t.redBagAnimate.endImgPosition.y - o,
                  a = Math.max(i / t.redBagAnimate.ratio, 0),
                  n = document.getElementsByClassName("close-btn")[0];
                (e.style.top = "".concat(a, "px")),
                  (e.style.width = "60px"),
                  (e.style.height = "80px"),
                  (null == n ? void 0 : n.style) &&
                    ((n.style.width = "26px"), (n.style.height = "30px"));
              }
            }
          });
      },
      playMp: function () {
        return a(
          this,
          null,
          e().mark(function t() {
            var o, i, a, s, c, d, l, h;
            return e().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((o = this.point),
                        (a = (i = k).scode),
                        (s = i.redpocket_ticket),
                        (c = i.report_info),
                        (d = i.invite_code),
                        i.act_flow_id,
                        (this.scode = a),
                        (this.redPocketTicket = s),
                        (l = n.dayjs().format("YYYYMMDD")),
                        !r.isToday(o))
                      ) {
                        t.next = 11;
                        break;
                      }
                      return (t.next = 6), this.checkShowClose();
                    case 6:
                      (h =
                        "chooseIndex" === this.from
                          ? "yy.bodong.bigcard_hotstock_brow"
                          : "YY.bodong.kline_brow"),
                        c ? this.postStatData(h, c) : this.postStatData(h),
                        +(n.StockBridge.getStorage("redbagAnimate") || 0) ==
                          +l || d
                          ? this.setRedbagClickAreaMp()
                          : (n.StockBridge.setStorage("redbagAnimate", l),
                            (this.lottieShow = !0)),
                        (t.next = 12);
                      break;
                    case 11:
                      this.isShowRedBagAnimate = !1;
                    case 12:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      lottieComplete: function () {
        var t = this;
        setTimeout(function () {
          (t.bdongShow = !1), t.setRedbagClickAreaMp(!0);
        }, 100);
      },
      setRedbagClickAreaMp: function (t) {
        var e = this;
        void 0 !== this.targetPointData.x &&
          void 0 !== this.targetPointData.y &&
          this.$nextTick(function () {
            var o, i;
            (o =
              e.targetPointData.y <= 50
                ? e.targetPointData.y + 30
                : e.targetPointData.y - 30),
              (i =
                e.targetPointData.x <= 10
                  ? e.targetPointData.x + 5
                  : e.targetPointData.x > e.width - 20
                  ? e.targetPointData.x - 20
                  : e.targetPointData.x - 10),
              t
                ? (e.$scope.animate(
                    ".bdong-logo",
                    [{ translateY: 130 }, { translateY: o, ease: "ease-in" }],
                    400
                  ),
                  e.$scope.animate(
                    ".redbag-wrap",
                    [{ translateX: 180 }, { translateX: i, ease: "ease-out" }],
                    400
                  ),
                  setTimeout(function () {
                    e.animationOver = !0;
                  }, 500))
                : ((e.outerStyle = "translateY(".concat(o, "px) !important")),
                  (e.ballStyle = "translateX(".concat(i, "px) !important")),
                  (e.bdongShow = !1),
                  (e.animationOver = !0)),
              (e.redPointStyleY = e.targetPointData.y - 1 + "px"),
              (e.redPointStyleX = e.targetPointData.x - 1 + "px");
          });
      },
      clickClose: function () {
        (this.isShowClosePopup = !0),
          n.StockBridge.report("yy.bodong2.kline_closepopup_close");
      },
      handleTodayClose: function () {
        return a(
          this,
          null,
          e().mark(function o() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      n.StockBridge.report(
                        "yy.bodong2.kline_closepopup_closetoday"
                      ),
                        (this.isShowClosePopup = !1),
                        (this.isShowRedBagAnimate = !1),
                        n.StockBridge.setStorage(
                          "yy.redpacket.close_today",
                          t({}, y, 1)
                        );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              },
              o,
              this
            );
          })
        );
      },
      handleAlwaysClose: function () {
        return a(
          this,
          null,
          e().mark(function o() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        n.StockBridge.report(
                          "yy.bodong2.kline_closepopup_closebtn"
                        ),
                        (e.prev = 1),
                        (e.next = 4),
                        s.changeQouteBodong()
                      );
                    case 4:
                      (this.isShowClosePopup = !1),
                        (this.isShowRedBagAnimate = !1),
                        n.StockBridge.setStorage(
                          "yy.redpacket.close_today",
                          t({}, y, 1)
                        ),
                        (e.next = 12);
                      break;
                    case 9:
                      (e.prev = 9),
                        (e.t0 = e.catch(1)),
                        (this.isShowClosePopup = !1),
                        (this.isShowRedBagAnimate = !1);
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              o,
              this,
              [[1, 9]]
            );
          })
        );
      },
      handleHide: function () {
        (this.isShowClosePopup = !1),
          n.StockBridge.report("yy.bodong2.kline_closepopup_cancelbtn");
      },
    },
    beforeDestroy: function () {
      this.eventName &&
        n.StockBridge.busOff(this.eventName, this.setPointPosition),
        n.StockBridge.busOff(w, this.updateSetting);
    },
  };
Array ||
  (n.resolveComponent("animation") + n.resolveComponent("CloseConfirm"))();
var x = n._export_sfc(P, [
  [
    "render",
    function (t, e, o, i, a, r) {
      return n.e(
        { a: a.isShowRedBagAnimate },
        a.isShowRedBagAnimate
          ? n.e(
              { b: a.animationOver },
              a.animationOver
                ? { c: a.redPointStyleY, d: a.redPointStyleX }
                : {},
              { e: !a.bdongShow },
              a.bdongShow
                ? a.lottieShow
                  ? {
                      q: n.o(r.lottieComplete, 2878),
                      r: n.p({
                        width: 390,
                        height: 632,
                        path: a.lottieJson,
                        autoplay: !0,
                      }),
                    }
                  : {}
                : {
                    f: a.redbagIcon,
                    g: n.o(function () {
                      return r.goto && r.goto.apply(r, arguments);
                    }, 2876),
                    h: a.redbagClose,
                    i: a.animationOver,
                    j: n.o(function () {
                      return r.clickClose && r.clickClose.apply(r, arguments);
                    }, 2877),
                    k: n.n(a.animationOver && "yy-activity-wave-animation"),
                    l: a.ballStyle,
                    m: a.ballStyle,
                    n: a.outerStyle,
                    o: a.outerStyle,
                  },
              {
                p: a.lottieShow,
                s: n.o(r.handleHide, 2879),
                t: n.o(r.handleTodayClose, 2880),
                v: n.o(r.handleAlwaysClose, 2881),
                w: n.p({
                  visible: a.isShowClosePopup,
                  title: "关闭红包",
                  desc: "是否永久关闭自选页红包功能",
                }),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-9ae2531d"],
]);
wx.createComponent(x);
