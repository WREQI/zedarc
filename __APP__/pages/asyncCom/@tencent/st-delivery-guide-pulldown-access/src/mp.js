var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = function (e, t, i) {
    return new Promise(function (n, o) {
      var r = function (e) {
          try {
            u(i.next(e));
          } catch (e) {
            o(e);
          }
        },
        s = function (e) {
          try {
            u(i.throw(e));
          } catch (e) {
            o(e);
          }
        },
        u = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(r, s);
        };
      u((i = i.apply(e, t)).next());
    });
  },
  i = require("../../../../../common/vendor.js"),
  n = {
    props: ["premote"],
    inject: { stockBridge: { default: function () {} } },
    data: function () {
      return {
        advConfig: null,
        advPicInfo: null,
        advStyleConfig: {},
        showAdv: !1,
        premoteNew: null,
        elTopCal: "",
      };
    },
    watch: {
      premote: {
        immediate: !0,
        handler: function (e) {
          var t,
            i,
            n,
            o,
            r,
            s,
            u = this;
          e &&
            ((this.premoteNew = e),
            e.ad_list &&
              e.ad_list.length > 0 &&
              (this.advConfig = e.ad_list[0]),
            (this.advStyleConfig = JSON.parse(
              null ==
                (i =
                  null == (t = null == e ? void 0 : e.component_param)
                    ? void 0
                    : t.component_style)
                ? void 0
                : i.template
            )),
            (this.advPicInfo =
              null ==
              (o = null == (n = this.stockBridge) ? void 0 : n.deliverySdk)
                ? void 0
                : o.deliveryFormatPic(this.premoteNew)),
            this.preSettimeout && clearTimeout(this.preSettimeout),
            (this.preSettimeout = null),
            (null == (r = this.advStyleConfig) ? void 0 : r.pre_wait_second)
              ? (this.preSettimeout = setTimeout(function () {
                  u.showGuide();
                }, 1e3 *
                  (null == (s = this.advStyleConfig)
                    ? void 0
                    : s.pre_wait_second)))
              : this.showGuide());
        },
      },
    },
    onPageHide: function () {
      this.closeAndClear();
    },
    methods: {
      closeAndClear: function () {
        (this.showAdv = !1),
          this.hideSettimeout && clearTimeout(this.hideSettimeout),
          (this.hideSettimeout = null),
          this.preSettimeout && clearTimeout(this.preSettimeout),
          (this.preSettimeout = null);
      },
      showGuide: function () {
        var e,
          t,
          i = this;
        (this.showAdv = !0),
          this.calBubblePosition(),
          this.reportShow(),
          this.hideSettimeout && clearTimeout(this.hideSettimeout),
          (this.hideSettimeout = null),
          (null == (e = this.advStyleConfig) ? void 0 : e.exp_hold_s) &&
            (this.hideSettimeout = setTimeout(function () {
              i.showAdv = !1;
            }, 1e3 *
              (null == (t = this.advStyleConfig) ? void 0 : t.exp_hold_s)));
      },
      calBubblePosition: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            var n, o, r, s, u;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((e.prev = 0),
                        (n = i.wx$1
                          .createSelectorQuery()
                          .in(this.$parent)
                          .select(".delivery-guide-pulldown-access")))
                      ) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt("return");
                    case 4:
                      return (e.next = 6), this.getNodeWidth(n);
                    case 6:
                      if ((o = e.sent)) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt("return");
                    case 9:
                      (r = o.height),
                        (s = o.top),
                        (u = 750 / this.getWindowWidth()),
                        (this.elTopCal = "".concat(s + r + 12 / u, "px")),
                        (e.next = 16);
                      break;
                    case 13:
                      (e.prev = 13),
                        (e.t0 = e.catch(0)),
                        (this.elTopCal = "182px");
                    case 16:
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
      getWindowWidth: function () {
        var e;
        return (
          i.index.getSystemInfo({
            success: function (t) {
              e = t.windowWidth;
            },
          }),
          e
        );
      },
      getNodeWidth: function (i) {
        return t(
          this,
          null,
          e().mark(function t() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      new Promise(function (e) {
                        i.boundingClientRect(function (t) {
                          e(t);
                        }).exec();
                      })
                    );
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        );
      },
      reportShow: function () {
        var e, t;
        null == (t = null == (e = this.stockBridge) ? void 0 : e.deliverySdk) ||
          t.deliveryMtaAndRport(this.premote, "show");
      },
      clickAdv: function () {
        var e, t;
        this.closeAndClear(),
          null ==
            (t = null == (e = this.stockBridge) ? void 0 : e.deliverySdk) ||
            t.deliveryMtaAndRport(this.premote, "click");
      },
    },
  },
  o = i._export_sfc(n, [
    [
      "render",
      function (e, t, n, o, r, s) {
        return i.e(
          {
            a: r.showAdv && r.premoteNew && r.advPicInfo && r.advPicInfo.ad_pic,
          },
          r.showAdv && r.premoteNew && r.advPicInfo && r.advPicInfo.ad_pic
            ? {
                b: "url(".concat(r.advPicInfo.ad_pic, ")"),
                c: "".concat(r.elTopCal),
                d: i.o(function () {
                  return s.clickAdv && s.clickAdv.apply(s, arguments);
                }, 2185),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-bc0fb375"],
  ]);
wx.createComponent(o);
