var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = function (e, t, n) {
    return new Promise(function (a, i) {
      var r = function (e) {
          try {
            c(n.next(e));
          } catch (e) {
            i(e);
          }
        },
        s = function (e) {
          try {
            c(n.throw(e));
          } catch (e) {
            i(e);
          }
        },
        c = function (e) {
          return e.done ? a(e.value) : Promise.resolve(e.value).then(r, s);
        };
      c((n = n.apply(e, t)).next());
    });
  },
  n = require("../../../common/vendor.js"),
  a = require("./api.js"),
  i = {
    components: {
      SubscribeGuide: function () {
        return "../../asyncCom/components/subscribeGuide.js";
      },
    },
    data: function () {
      return {
        headerTop: 0,
        headerHeigth: 0,
        calendarId: "",
        detail: null,
        calendarTypeMaps: { CALENDAR_TYPE_PUBLIC: "公开" },
        periodMaps: {
          PERIOD_ONCE: "仅一次",
          PERIOD_DAILY: "每交易日",
          PERIOD_WEEKLY: "每周",
          PERIOD_MONTHLY: "每月",
        },
        bgImgMaps: {
          COLOR_RED:
            "https://st.gtimg.com/design/fe0f63b9ec082883ec3e24cab8c81e56.png",
          COLOR_BLUE:
            "https://st.gtimg.com/design/af05f47a58a10b1004ada25c4c4f288a.png",
          COLOR_ORANGE:
            "https://st.gtimg.com/design/c352e4067518f82fe21f9d462f760172.png",
          COLOR_GREEN:
            "https://st.gtimg.com/design/89142e268fa23b836b1cfeb872b88fd2.png",
        },
        showSubscribeGuide: !1,
        settingBackFlag: !1,
      };
    },
    onShow: function () {
      return t(
        this,
        null,
        e().mark(function t() {
          var a;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!this.settingBackFlag) {
                      e.next = 13;
                      break;
                    }
                    return (
                      (e.t1 = n),
                      (e.next = 4),
                      n.getTemplateId(this.detail.templateId)
                    );
                  case 4:
                    return (
                      (e.t2 = e.sent),
                      (e.next = 7),
                      e.t1.querySubscribeSwitch.call(e.t1, e.t2)
                    );
                  case 7:
                    if (((e.t0 = e.sent), e.t0)) {
                      e.next = 10;
                      break;
                    }
                    e.t0 = {};
                  case 10:
                    (a = e.t0),
                      "accept" === a.status && this.calendarsSubscribe(0);
                  case 13:
                  case "end":
                    return e.stop();
                }
            },
            t,
            this
          );
        })
      );
    },
    onLoad: function (n) {
      return t(
        this,
        null,
        e().mark(function t() {
          var i, r, s, c, l, o, d, u, h, b, p, g, f;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (i = n.id),
                      (this.calendarId = i),
                      (e.next = 4),
                      a.getCalendarDetail(i)
                    );
                  case 4:
                    (r = e.sent),
                      (s = r.code),
                      (c = r.title),
                      (l = r.calendarType),
                      (o = r.creator),
                      (d = r.description),
                      (u = r.subscribers),
                      (h = r.subscribing),
                      (b = r.items),
                      (p = r.bgColor),
                      (g = r.channelId),
                      (f = r.templateId),
                      0 === s &&
                        (this.detail = {
                          title: c,
                          calendarType: l,
                          creator: o,
                          description: d,
                          subscribers: u,
                          subscribing: h,
                          items: b,
                          bgColor: p,
                          channelId: g,
                          templateId: f,
                        });
                  case 17:
                  case "end":
                    return e.stop();
                }
            },
            t,
            this
          );
        })
      );
    },
    onShareAppMessage: function () {
      return {
        title: "我订阅了“".concat(this.detail.title, "”，一起来订阅吧！"),
        path: "/pages/act/investcalendar/detail?id="
          .concat(this.calendarId, "&stat=")
          .concat(this.detail.channelId),
      };
    },
    mounted: function () {
      var e = n.wx$1.getSystemInfoSync(),
        t = n.wx$1.getMenuButtonBoundingClientRect();
      (this.headerTop = null == t ? void 0 : t.top),
        (this.headerHeigth =
          e.statusBarHeight + t.height + 2 * (t.top - e.statusBarHeight));
    },
    methods: {
      handleScroll: function () {
        this.listScrollReport ||
          (n.Request.reportMTAData({
            eventName: "yy.investcalendar.detail_scroll_click",
            calendarid: this.detail.calendarId,
          }),
          (this.listScrollReport = !0));
      },
      handleBack: function () {
        var e = getCurrentPages();
        e[e.length - 2]
          ? n.wx$1.navigateBack()
          : n.wx$1.redirectTo({ url: "/pages/act/investcalendar/main" });
      },
      handleShare: function () {
        n.Request.reportMTAData({
          eventName: "yy.investcalendar.detail_share_click",
          calendarid: this.detail.calendarId,
        });
      },
      handleSubscrib: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            var a,
              i,
              r,
              s,
              c = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!this.clickFlag) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      if (
                        ((this.clickFlag = !0),
                        (a = this.detail.subscribing),
                        (e.prev = 4),
                        n.Request.reportMTAData({
                          eventName: "yy.investcalendar.detail_".concat(
                            a ? "nosubscribe" : "subscribe",
                            "_click"
                          ),
                          calendarid: this.detail.calendarId,
                        }),
                        !a)
                      ) {
                        e.next = 9;
                        break;
                      }
                      n.wx$1.showModal({
                        title: "",
                        content:
                          "取消订阅后，将无法收到相关提醒 是否确定取消？",
                        confirmColor: "#E63535",
                        success: function (e) {
                          (null == e ? void 0 : e.confirm) &&
                            c.calendarsSubscribe(1);
                        },
                      }),
                        (this.clickFlag = !1),
                        (e.next = 26);
                      break;
                    case 9:
                      if (this.detail.templateId) {
                        e.next = 11;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        ((this.clickFlag = !1),
                        void n.wx$1.showToast({
                          title: "缺少消息模版，请稍后再试",
                          icon: "none",
                          duration: 2e3,
                        }))
                      );
                    case 11:
                      return (
                        (e.t1 = n),
                        (e.next = 14),
                        n.getTemplateId(this.detail.templateId)
                      );
                    case 14:
                      return (
                        (e.t2 = e.sent),
                        (e.next = 17),
                        e.t1.querySubscribeSwitch.call(e.t1, e.t2)
                      );
                    case 17:
                      if (((e.t0 = e.sent), e.t0)) {
                        e.next = 20;
                        break;
                      }
                      e.t0 = {};
                    case 20:
                      if (((i = e.t0), (r = i.mainSwitch), (s = i.status), r)) {
                        e.next = 25;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        ((this.showSubscribeGuide = !0),
                        void (this.clickFlag = !1))
                      );
                    case 25:
                      "reject" === s
                        ? ((this.showSubscribeGuide = !0),
                          (this.clickFlag = !1))
                        : this.subscribeStockRemind();
                    case 26:
                      e.next = 31;
                      break;
                    case 28:
                      (e.prev = 28), (e.t3 = e.catch(4)), (this.clickFlag = !1);
                    case 31:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[4, 28]]
            );
          })
        );
      },
      subscribeStockRemind: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            var a, i;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (a = this.detail.templateId),
                        (e.t0 = n),
                        (e.t1 = a),
                        (e.next = 6),
                        n.getTemplateId(a)
                      );
                    case 6:
                      return (
                        (e.t2 = e.sent),
                        (e.next = 9),
                        e.t0.subscribe.call(e.t0, e.t1, e.t2)
                      );
                    case 9:
                      "accept" === (i = e.sent)
                        ? this.calendarsSubscribe(0)
                        : "reject" !== i &&
                          n.wx$1.showToast({
                            title: "订阅失败",
                            icon: "error",
                            duration: 1500,
                          }),
                        (e.next = 16);
                      break;
                    case 13:
                      (e.prev = 13),
                        (e.t3 = e.catch(0)),
                        n.wx$1.showToast({
                          title: "订阅失败",
                          icon: "error",
                          duration: 1500,
                        });
                    case 16:
                      this.clickFlag = !1;
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[0, 13]]
            );
          })
        );
      },
      calendarsSubscribe: function (i) {
        return t(
          this,
          null,
          e().mark(function t() {
            var r;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        a.calendarsSubscribe({
                          calendar_id: this.calendarId,
                          cmd: i,
                        })
                      );
                    case 2:
                      0 === (null == (r = e.sent) ? void 0 : r.code) &&
                        (n.wx$1.showToast({
                          title: i ? "已取消订阅" : "订阅成功",
                          icon: i ? "none" : "success",
                          duration: 1500,
                        }),
                        (this.detail.subscribing = !this.detail.subscribing),
                        (this.detail.subscribers =
                          +this.detail.subscribers + (i ? -1 : 1)),
                        (this.settingBackFlag = !1));
                    case 4:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      handleGuideSetting: function () {
        this.settingBackFlag = !0;
      },
      handleLink: function (e) {
        var t = (null == e ? void 0 : e.jumpUrl) || "";
        t &&
          n.wx$1.navigateTo({
            url: "".concat(/^pages/.test(t) ? "/" : "").concat(t),
          });
      },
    },
  };
Array ||
  (
    n.resolveComponent("mp-privacy-dialog") +
    n.resolveComponent("stock-privacy-dialog") +
    n.resolveComponent("SubscribeGuide")
  )();
var r = n._export_sfc(i, [
  [
    "render",
    function (e, t, a, i, r, s) {
      return n.e(
        { a: e.rootFontSize, b: r.detail },
        r.detail
          ? n.e(
              {
                c: n.p({ "no-auto": !0 }),
                d: r.bgImgMaps[r.detail.bgColor],
                e: n.n(r.detail.bgColor),
                f: r.headerTop + 4 + "px",
                g: n.o(function () {
                  return s.handleBack && s.handleBack.apply(s, arguments);
                }, 395),
                h: n.t(r.detail.title),
                i: r.headerTop + 8 + "px",
                j: r.headerHeigth + "px",
                k: n.t(r.calendarTypeMaps[r.detail.calendarType]),
                l: n.t(r.detail.creator),
                m: n.t(r.detail.subscribers),
                n: n.t(r.detail.description),
                o: r.detail.items.length,
              },
              r.detail.items.length
                ? {
                    p: n.f(r.detail.items, function (e, t, a) {
                      return {
                        a: n.t(e.title),
                        b: n.t(e.date),
                        c: n.t(e.week),
                        d: n.t(e.time),
                        e: n.t(r.periodMaps[e.period]),
                        f: t === r.detail.items.length - 1 ? 1 : "",
                        g: t,
                        h: n.o(
                          function (t) {
                            return s.handleLink(e);
                          },
                          396,
                          t
                        ),
                      };
                    }),
                    q: n.n(r.detail.bgColor),
                    r: n.o(function () {
                      return (
                        s.handleScroll && s.handleScroll.apply(s, arguments)
                      );
                    }, 397),
                  }
                : {},
              {
                s: r.headerHeigth + 24 + "px",
                t: n.o(function () {
                  return s.handleShare && s.handleShare.apply(s, arguments);
                }, 398),
                v: n.t(r.detail.subscribing ? "取消订阅" : "订阅日历"),
                w: n.n(r.detail.subscribing ? "yes" : "no"),
                x: n.o(function () {
                  return (
                    s.handleSubscrib && s.handleSubscrib.apply(s, arguments)
                  );
                }, 399),
                y: n.o(function (e) {
                  return (r.showSubscribeGuide = !1);
                }, 400),
                z: n.o(s.handleGuideSetting, 401),
                A: n.p({
                  show: r.showSubscribeGuide,
                  title: "开启投资日历通知",
                  gifImg:
                    "https://st.gtimg.com/design/c3dcc0cb3c8838ae1cb73abec2addb2b.gif",
                }),
              }
            )
          : {}
      );
    },
  ],
]);
(i.__runtimeHooks = 2), wx.createPage(r);
