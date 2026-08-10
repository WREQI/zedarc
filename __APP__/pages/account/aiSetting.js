var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../common/vendor.js"),
  i = getApp().globalData,
  n = {
    components: {},
    data: function () {
      return { aiSetting: !1 };
    },
    watch: {},
    mounted: function () {
      t.Request.reportMTAData({ eventName: "base.aisetting.aisetting_brow" }),
        this.querySwitch();
    },
    methods: {
      querySwitch: function () {
        return (
          (t = this),
          null,
          (n = e().mark(function t() {
            var n = this;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    i.wx.request({
                      url: "/cgi-bin/usersetting.fcgi",
                      data: { querysub: "ai_helper_guice_msg" },
                      success: function (e) {
                        var t = e.ai_helper_guice_msg,
                          i = void 0 === t ? {} : t;
                        n.aiSetting = 1 == +(null == i ? void 0 : i.switch);
                      },
                    });
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, t);
          })),
          new Promise(function (e, i) {
            var r = function (e) {
                try {
                  o(n.next(e));
                } catch (e) {
                  i(e);
                }
              },
              a = function (e) {
                try {
                  o(n.throw(e));
                } catch (e) {
                  i(e);
                }
              },
              o = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(r, a);
              };
            o((n = n.apply(t, null)).next());
          })
        );
        var t, n;
      },
      toggleSwitch: function () {
        t.Request.reportMTAData({
          eventName:
            "base.aisetting." +
            (this.aiSetting ? "aisetting_close" : "aisetting_open"),
        }),
          this.doSwitch(this.aiSetting);
      },
      doSwitch: function (e) {
        var t = this,
          n = { subscribe: "ai_helper_guice_msg" };
        e && (n = { unsubscribe: "ai_helper_guice_msg" }),
          i.wx.request({
            url: "/cgi-bin/usersetting.fcgi",
            data: n,
            success: function () {
              t.aiSetting = !e;
            },
          });
      },
    },
  };
Array ||
  (
    t.resolveComponent("mp-privacy-dialog") +
    t.resolveComponent("stock-privacy-dialog")
  )();
var r = t._export_sfc(n, [
  [
    "render",
    function (e, i, n, r, a, o) {
      return {
        a: e.rootFontSize,
        b: t.p({ "no-auto": !0 }),
        c: t.n(a.aiSetting ? "on" : ""),
        d: t.o(function () {
          return o.toggleSwitch && o.toggleSwitch.apply(o, arguments);
        }, 237),
      };
    },
  ],
  ["__scopeId", "data-v-5dd8e442"],
]);
wx.createPage(r);
