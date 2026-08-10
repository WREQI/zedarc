var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../common/vendor.js"),
  n = t.useBrokerInfo(),
  r = {
    onLoad: function (r) {
      return (
        (a = this),
        null,
        (o = e().mark(function () {
          var a, o, i, c, u, d, s, l;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    (t.wx$1.showLoading({ title: "加载中" }),
                    (o = (a = r || {}).url),
                    (i = a.act_actid),
                    (c = a.act_id),
                    (u = a.act_tid),
                    (d = a.act_url),
                    (s = a.stat_data),
                    c &&
                      (getApp().globalData.taskConfig = {
                        actid: i,
                        tid: u,
                        id: c,
                        url: d,
                        stat_data: s,
                        done: !1,
                        visible: !0,
                      }),
                    t.wx$1.hideLoading(),
                    !decodeURIComponent(o).includes("/pages/index/trade"))
                  ) {
                    e.next = 8;
                    break;
                  }
                  return (
                    (l = {
                      url: "/pages/index/trade",
                      query: { stat_data: s },
                    }),
                    (e.next = 6),
                    n.navigateToTrade(l)
                  );
                case 6:
                  e.next = 9;
                  break;
                case 8:
                  t.wx$1.switchTab({ url: decodeURIComponent(o) });
                case 9:
                case "end":
                  return e.stop();
              }
          }, c);
        })),
        new Promise(function (e, t) {
          var n = function e(n) {
              try {
                i(o.next(n));
              } catch (e) {
                t(e);
              }
            },
            r = function (e) {
              try {
                i(o.throw(e));
              } catch (e) {
                t(e);
              }
            },
            i = function (t) {
              return t.done ? e(t.value) : Promise.resolve(t.value).then(n, r);
            };
          i((o = o.apply(a, null)).next());
        })
      );
      var a, o;
    },
    methods: {},
  },
  a = t._export_sfc(r, [
    [
      "render",
      function (e, t, n, r, a, o) {
        return {};
      },
    ],
  ]);
wx.createPage(a);
