var t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = function (t, e, n) {
    return new Promise(function (r, a) {
      var i = function (t) {
          try {
            c(n.next(t));
          } catch (t) {
            a(t);
          }
        },
        s = function (t) {
          try {
            c(n.throw(t));
          } catch (t) {
            a(t);
          }
        },
        c = function (t) {
          return t.done ? r(t.value) : Promise.resolve(t.value).then(i, s);
        };
      c((n = n.apply(t, e)).next());
    });
  },
  n = require("../../../common/vendor.js"),
  r = require("./api.js"),
  a = {
    components: {
      SubscribeGuide: function () {
        return "../../asyncCom/components/subscribeGuide.js";
      },
    },
    data: function () {
      return {
        error: "",
        list: [],
        showSubscribeGuide: !1,
        settingBackFlag: !1,
      };
    },
    onShow: function () {
      return e(
        this,
        null,
        t().mark(function e() {
          var r, a;
          return t().wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (!this.settingBackFlag) {
                      t.next = 15;
                      break;
                    }
                    return (
                      (t.t1 = n),
                      (t.next = 4),
                      n.getTemplateId(
                        null == (r = this.calendarData) ? void 0 : r.templateId
                      )
                    );
                  case 4:
                    return (
                      (t.t2 = t.sent),
                      (t.next = 7),
                      t.t1.querySubscribeSwitch.call(t.t1, t.t2)
                    );
                  case 7:
                    if (((t.t0 = t.sent), t.t0)) {
                      t.next = 10;
                      break;
                    }
                    t.t0 = {};
                  case 10:
                    (a = t.t0),
                      "accept" === a.status &&
                        this.calendarsSubscribe(this.calendarData, 0),
                      (t.next = 16);
                    break;
                  case 15:
                    this.setListData();
                  case 16:
                  case "end":
                    return t.stop();
                }
            },
            e,
            this
          );
        })
      );
    },
    onLoad: function () {
      n.wx$1.setNavigationBarTitle({ title: "公共日历" });
    },
    methods: {
      setListData: function () {
        return e(
          this,
          null,
          t().mark(function e() {
            var a, i, s;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), r.getCalendarsList();
                    case 2:
                      (a = t.sent),
                        (i = a.code),
                        (s = a.Calendars),
                        0 === i
                          ? ((this.list = s), (this.error = ""))
                          : (this.error = n.COMMON_PAGE_STATUS.ERROR);
                    case 6:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      handleGoDetail: function (t) {
        n.Request.reportMTAData({
          eventName: "yy.investcalendar.list_item_click",
          calendarid: t,
        }),
          n.wx$1.navigateTo({
            url: "/pages/act/investcalendar/detail?id=".concat(t),
          });
      },
      handleSubscrib: function (r) {
        return e(
          this,
          null,
          t().mark(function e() {
            var a, i, s, c;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((t.prev = 0), !this.clickFlag)) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt("return");
                    case 3:
                      if (
                        ((this.clickFlag = !0),
                        (a = null == r ? void 0 : r.templateId),
                        n.Request.reportMTAData({
                          eventName: "yy.investcalendar.list_subscribe_click",
                          calendarid: null == r ? void 0 : r.calendarId,
                        }),
                        (this.calendarData = r),
                        a)
                      ) {
                        t.next = 7;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        ((this.clickFlag = !1),
                        void n.wx$1.showToast({
                          title: "缺少消息模版，请稍后再试",
                          icon: "none",
                          duration: 2e3,
                        }))
                      );
                    case 7:
                      return (t.t1 = n), (t.next = 10), n.getTemplateId(a);
                    case 10:
                      return (
                        (t.t2 = t.sent),
                        (t.next = 13),
                        t.t1.querySubscribeSwitch.call(t.t1, t.t2)
                      );
                    case 13:
                      if (((t.t0 = t.sent), t.t0)) {
                        t.next = 16;
                        break;
                      }
                      t.t0 = {};
                    case 16:
                      if (((i = t.t0), (s = i.mainSwitch), (c = i.status), s)) {
                        t.next = 21;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        ((this.showSubscribeGuide = !0),
                        void (this.clickFlag = !1))
                      );
                    case 21:
                      "reject" === c
                        ? ((this.showSubscribeGuide = !0),
                          (this.clickFlag = !1))
                        : this.subscribeStockRemind(r),
                        (t.next = 27);
                      break;
                    case 24:
                      (t.prev = 24), (t.t3 = t.catch(0)), (this.clickFlag = !1);
                    case 27:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[0, 24]]
            );
          })
        );
      },
      subscribeStockRemind: function (r) {
        return e(
          this,
          null,
          t().mark(function e() {
            var a, i, s;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (i =
                          null == (a = this.calendarData)
                            ? void 0
                            : a.templateId),
                        (t.t0 = n),
                        (t.t1 = i),
                        (t.next = 6),
                        n.getTemplateId(i)
                      );
                    case 6:
                      return (
                        (t.t2 = t.sent),
                        (t.next = 9),
                        t.t0.subscribe.call(t.t0, t.t1, t.t2)
                      );
                    case 9:
                      "accept" === (s = t.sent)
                        ? this.calendarsSubscribe(r, 0)
                        : "reject" !== s &&
                          n.wx$1.showToast({
                            title: "订阅失败",
                            duration: 1500,
                          }),
                        (t.next = 16);
                      break;
                    case 13:
                      (t.prev = 13),
                        (t.t3 = t.catch(0)),
                        n.wx$1.showToast({ title: "订阅失败", duration: 1500 });
                    case 16:
                      this.clickFlag = !1;
                    case 17:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this,
              [[0, 13]]
            );
          })
        );
      },
      calendarsSubscribe: function (a, i) {
        return e(
          this,
          null,
          t().mark(function e() {
            var s, c, u, o, l, d, b;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (c = null == a ? void 0 : a.calendarId),
                        (t.next = 3),
                        r.calendarsSubscribe({ calendar_id: c, cmd: i })
                      );
                    case 3:
                      if (0 !== (null == (u = t.sent) ? void 0 : u.code)) {
                        t.next = 12;
                        break;
                      }
                      return (
                        n.wx$1.showToast({
                          title: i ? "已取消订阅" : "订阅成功",
                          icon: i ? "none" : "success",
                          duration: 1500,
                        }),
                        (this.settingBackFlag = !1),
                        (t.next = 8),
                        r.getCalendarsList()
                      );
                    case 8:
                      (o = t.sent),
                        (l = o.code),
                        (d = o.Calendars),
                        0 === l &&
                          (b =
                            (null ==
                            (s = d.filter(function (t) {
                              return t.calendarId === c;
                            }))
                              ? void 0
                              : s[0]) || "") &&
                          this.list.forEach(function (t) {
                            (null == t ? void 0 : t.calendarId) === c &&
                              ((t.avatars = b.avatars),
                              (t.subscribing = b.subscribing),
                              (t.subscribers = b.subscribers));
                          });
                    case 12:
                    case "end":
                      return t.stop();
                  }
              },
              e,
              this
            );
          })
        );
      },
      handleGuideSetting: function () {
        this.settingBackFlag = !0;
      },
    },
  };
Array ||
  (
    n.resolveComponent("mp-privacy-dialog") +
    n.resolveComponent("stock-privacy-dialog") +
    n.resolveComponent("st-status") +
    n.resolveComponent("SubscribeGuide")
  )();
var i = n._export_sfc(a, [
  [
    "render",
    function (t, e, r, a, i, s) {
      return n.e(
        { a: t.rootFontSize, b: n.p({ "no-auto": !0 }), c: i.error },
        i.error
          ? {
              d: n.o(function (t) {
                return s.setListData();
              }, 390),
              e: n.p({ type: i.error }),
            }
          : i.list.length
          ? {
              g: n.f(i.list, function (t, e, r) {
                return n.e(
                  { a: n.n(t.bgColor), b: n.t(t.title), c: t.avatars.length },
                  t.avatars.length
                    ? {
                        d: n.f(t.avatars, function (t, e, n) {
                          return { a: t };
                        }),
                      }
                    : {},
                  { e: n.t(t.subscribers), f: t.subscribing },
                  t.subscribing
                    ? {}
                    : {
                        g: n.o(
                          function (e) {
                            return s.handleSubscrib(t);
                          },
                          391,
                          e
                        ),
                      },
                  {
                    h: e === i.list.length - 1 ? 1 : "",
                    i: e,
                    j: n.o(
                      function (e) {
                        return s.handleGoDetail(t.calendarId);
                      },
                      392,
                      e
                    ),
                  }
                );
              }),
            }
          : {},
        {
          f: i.list.length,
          h: n.o(function (t) {
            return (i.showSubscribeGuide = !1);
          }, 393),
          i: n.o(s.handleGuideSetting, 394),
          j: n.p({
            show: i.showSubscribeGuide,
            title: "开启投资日历通知",
            gifImg:
              "https://st.gtimg.com/design/c3dcc0cb3c8838ae1cb73abec2addb2b.gif",
          }),
        }
      );
    },
  ],
]);
wx.createPage(i);
