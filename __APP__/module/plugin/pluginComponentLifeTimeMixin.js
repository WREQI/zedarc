var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = function (e, n, l) {
    return new Promise(function (t, o) {
      var a = function (e) {
          try {
            r(l.next(e));
          } catch (e) {
            o(e);
          }
        },
        i = function (e) {
          try {
            r(l.throw(e));
          } catch (e) {
            o(e);
          }
        },
        r = function (e) {
          return e.done ? t(e.value) : Promise.resolve(e.value).then(a, i);
        };
      r((l = l.apply(e, n)).next());
    });
  },
  l = require("../../common/vendor.js"),
  t = {
    inject: ["handlePageLifeTime"],
    mounted: function () {
      var t = this;
      (this.handlePageLifeTime.handleLoad = function (l) {
        return n(
          t,
          null,
          e().mark(function n() {
            var t, o;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (o = this.selectComponent(this.componentEle)),
                        (e.next = 3),
                        null == (t = null == o ? void 0 : o.handleLoad)
                          ? void 0
                          : t.call(o, l)
                      );
                    case 3:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              this
            );
          })
        );
      }),
        (this.handlePageLifeTime.handleShow = function () {
          var e,
            n = t.selectComponent(t.componentEle);
          null == (e = null == n ? void 0 : n.handleShow) || e.call(n),
            t.isAsset
              ? l.wx$1.setNavigationBarTitle({ title: "腾讯自选股" })
              : t.isApplyRecover || t.isApplyProgress
              ? l.wx$1.setNavigationBarTitle({ title: "提交开户申请" })
              : l.wx$1.setNavigationBarTitle({ title: "腾讯自选股" });
        }),
        (this.handlePageLifeTime.handleReady = function () {
          var e,
            n = t.selectComponent(t.componentEle);
          null == (e = null == n ? void 0 : n.handleReady) || e.call(n);
        }),
        (this.handlePageLifeTime.handleHide = function () {
          var e,
            n = t.selectComponent(t.componentEle);
          null == (e = null == n ? void 0 : n.handleHide) || e.call(n);
        }),
        (this.handlePageLifeTime.handleUnload = function () {
          var e,
            n = t.selectComponent(t.componentEle);
          null == (e = null == n ? void 0 : n.handleUnload) || e.call(n);
        }),
        (this.handlePageLifeTime.handleRouteDone = function () {
          var e,
            n = t.selectComponent(t.componentEle);
          null == (e = null == n ? void 0 : n.handleRouteDone) || e.call(n);
        }),
        (this.handlePageLifeTime.handlePullDownRefresh = function () {
          return n(
            t,
            null,
            e().mark(function n() {
              var t;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (t = this.selectComponent(this.componentEle)),
                          (e.next = 4),
                          t.handlePullDownRefresh()
                        );
                      case 4:
                        l.wx$1.stopPullDownRefresh(), (e.next = 10);
                        break;
                      case 7:
                        (e.prev = 7),
                          (e.t0 = e.catch(0)),
                          l.wx$1.stopPullDownRefresh();
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                n,
                this,
                [[0, 7]]
              );
            })
          );
        }),
        (this.handlePageLifeTime.handleReachBottom = function () {
          var e,
            n = t.selectComponent(t.componentEle);
          null == (e = null == n ? void 0 : n.handleReachBottom) || e.call(n);
        }),
        (this.handlePageLifeTime.handlePageScroll = function (e) {
          var n,
            l = t.selectComponent(t.componentEle);
          null == (n = null == l ? void 0 : l.handlePageScroll) || n.call(l, e);
        }),
        (this.handlePageLifeTime.handleResize = function () {
          var e,
            n = t.selectComponent(t.componentEle);
          null == (e = null == n ? void 0 : n.handleResize) || e.call(n);
        });
    },
  };
exports.PluginComponentLifeTimeMixin = t;
