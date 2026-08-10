var e = require("../../../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../../../../../../../common/vendor.js"),
  t = require("../../service/platform/index.js"),
  n = {
    name: "backBar",
    props: {
      sourceFrom: { type: String, default: "" },
      showBackpop: { type: Boolean, default: !1 },
    },
    data: function () {
      return { uiConfig: {}, isHidden: !1, isExpanded: !1, hideTimer: null };
    },
    computed: {
      topImage: function () {
        var e, i, t;
        return (
          (null ==
          (t =
            null == (i = null == (e = this.uiConfig) ? void 0 : e.aiPluginPop)
              ? void 0
              : i.backPop)
            ? void 0
            : t.topImage) ||
          "https://st.gtimg.com/design/12fecec78e5f1b361148ea8b7cadc1fa.png"
        );
      },
      bottomImage: function () {
        var e, i, t;
        return (
          (null ==
          (t =
            null == (i = null == (e = this.uiConfig) ? void 0 : e.aiPluginPop)
              ? void 0
              : i.backPop)
            ? void 0
            : t.bottomImage) ||
          "https://st.gtimg.com/design/f0fe84d09c8f4584a79c840a85be92ad.png"
        );
      },
      jumpLink: function () {
        var e, i, t;
        return (
          (null ==
          (t =
            null == (i = null == (e = this.uiConfig) ? void 0 : e.aiPluginPop)
              ? void 0
              : i.backPop)
            ? void 0
            : t.jumpLink) ||
          "https://zqact01.tenpay.com/activity/page/ThirteenYear/#/home"
        );
      },
    },
    created: function () {
      this.initWujiConfig(), this.startHideTimer();
    },
    beforeDestroy: function () {
      this.clearTimers();
    },
    methods: {
      initWujiConfig: function () {
        return (
          (t = this),
          null,
          (n = e().mark(function t() {
            var n, o, r, a, s;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        i.Wuji.get({
                          appid: "act",
                          schemaid: "yy_activity_page_config",
                          filter: encodeURIComponent("act_id=thirteen_year"),
                        })
                      );
                    case 3:
                      if (((n = e.sent), (o = n.data), 200 == +n.code)) {
                        e.next = 8;
                        break;
                      }
                      return e.abrupt("return");
                    case 8:
                      (r = (o && o[0]) || {}),
                        (a = r.ui_conf),
                        (s = void 0 === a ? "{}" : a),
                        (this.uiConfig = JSON.parse(s) || {}),
                        (e.next = 15);
                      break;
                    case 12:
                      (e.prev = 12), (e.t0 = e.catch(0)), (this.uiConfig = {});
                    case 15:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this,
              [[0, 12]]
            );
          })),
          new Promise(function (e, i) {
            var o = function (e) {
                try {
                  a(n.next(e));
                } catch (e) {
                  i(e);
                }
              },
              r = function (e) {
                try {
                  a(n.throw(e));
                } catch (e) {
                  i(e);
                }
              },
              a = function (i) {
                return i.done
                  ? e(i.value)
                  : Promise.resolve(i.value).then(o, r);
              };
            a((n = n.apply(t, null)).next());
          })
        );
        var t, n;
      },
      handleJump: function () {
        t.platform.backHome(this.jumpLink);
      },
      handleComponentClick: function () {
        this.isHidden
          ? this.showComponent()
          : this.isExpanded
          ? this.handleJump()
          : this.expandComponent();
      },
      showComponent: function () {
        (this.isHidden = !1), (this.isExpanded = !0), this.startHideTimer();
      },
      expandComponent: function () {
        (this.isExpanded = !0), this.startHideTimer();
      },
      startHideTimer: function () {
        var e = this;
        this.clearTimers(),
          (this.hideTimer = setTimeout(function () {
            e.hideComponent();
          }, 3e3));
      },
      hideComponent: function () {
        (this.isHidden = !0), (this.isExpanded = !1);
      },
      clearTimers: function () {
        this.hideTimer &&
          (clearTimeout(this.hideTimer), (this.hideTimer = null));
      },
    },
  },
  o = i._export_sfc(n, [
    [
      "render",
      function (e, t, n, o, r, a) {
        return i.e(
          { a: n.showBackpop },
          n.showBackpop
            ? {
                b: a.topImage,
                c: a.bottomImage,
                d: i.o(function () {
                  return (
                    a.handleComponentClick &&
                    a.handleComponentClick.apply(a, arguments)
                  );
                }, 4877),
                e: r.isHidden ? 1 : "",
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-b543c9c3"],
  ]);
wx.createComponent(o);
