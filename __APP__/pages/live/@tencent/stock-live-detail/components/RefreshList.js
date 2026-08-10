var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../common/vendor.js"),
  r = {
    props: ["theme", "onListRefresh", "iconOnly", "disabled"],
    data: function () {
      return {
        os: "ios",
        tabBarHeight: 40,
        loading: !1,
        refreshTime: Date.now(),
        endReached: !1,
      };
    },
    created: function () {},
    destroyed: function () {},
    updated: function () {},
    methods: {
      onPulldown: function (e) {
        this.arrowPlay = !this.loading && e.offsetY < -50;
      },
      onRefresh: function () {
        return (
          (n = this),
          null,
          (r = e().mark(function n() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((this.loading = !0), !this.onListRefresh)) {
                        e.next = 9;
                        break;
                      }
                      return (
                        (e.prev = 1),
                        (e.next = 4),
                        Promise.race([
                          this.onListRefresh(),
                          new Promise(function (e) {
                            setTimeout(function () {
                              e();
                            }, 1e4);
                          }),
                        ])
                      );
                    case 4:
                      e.next = 8;
                      break;
                    case 6:
                      (e.prev = 6), (e.t0 = e.catch(1));
                    case 8:
                      this.stopRefresh();
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              this,
              [[1, 6]]
            );
          })),
          new Promise(function (e, t) {
            var o = function (e) {
                try {
                  i(r.next(e));
                } catch (e) {
                  t(e);
                }
              },
              s = function (e) {
                try {
                  i(r.throw(e));
                } catch (e) {
                  t(e);
                }
              },
              i = function (n) {
                return n.done
                  ? e(n.value)
                  : Promise.resolve(n.value).then(o, s);
              };
            i((r = r.apply(n, null)).next());
          })
        );
        var n, r;
      },
      stopRefresh: function () {
        this.$refs.refresh.stopPullDownRefresh();
      },
      onEndReached: function () {},
      onScroll: function (e) {},
    },
  };
Array || n.resolveComponent("st-pull-refresh")();
var t = n._export_sfc(r, [
  [
    "render",
    function (e, r, t, o, s, i) {
      return n.e(
        { a: !0 === t.iconOnly },
        !0 === t.iconOnly
          ? {
              b: n.sr("refresh", "799a60c4-0"),
              c: n.o(i.onRefresh, 5199),
              d: n.p({
                "pull-down-area-height": "20",
                icon: "loading",
                successText: "",
                pullingText: "",
                loosingText: "",
                loadingText: "",
                disabled: t.disabled,
              }),
            }
          : {
              e: n.sr("refresh", "799a60c4-1"),
              f: n.o(i.onRefresh, 5200),
              g: n.p({ disabled: t.disabled }),
            }
      );
    },
  ],
]);
wx.createComponent(t);
