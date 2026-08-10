var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../stock-sq/src/utils/mixins/securityCheck/index.js"),
  n = require("../../node-modules/@tencent/st-tools/dist/mpDetect.js"),
  r = require("../../../../../../common/vendor.js"),
  i = require("../../../stock-community-base/utils/privacyCheck.js"),
  o = "shaidan_icon_last_hide_time",
  c = n.detect(),
  s = c.IS_LITE_MODE,
  a = c.IS_WZQ_XCX,
  u = c.IS_ZXG_XCX_ALLH5,
  h = {
    mixins: [t.securityCheck],
    inject: {
      didAgreeUserAgreement: {
        default: function () {
          return { value: !0 };
        },
      },
      onCheckUserAgreementStatus: {
        default: function () {
          return function () {};
        },
      },
    },
    props: {
      showGuide: { default: !1 },
      topicText: { type: String, default: "" },
    },
    data: function () {
      return { showShaidanIcon: !1 };
    },
    mounted: function () {
      this.checkIcon();
    },
    methods: {
      checkIcon: function () {
        var e = r.StockBridge.getStorage(o);
        (!e || (e && this.isMoreThan7Day(e))) && (this.showShaidanIcon = !0);
      },
      isMoreThan7Day: function (e) {
        return !isNaN(e) && (Date.now() - e) / 864e5 > 7;
      },
      updateIconHideTime: function () {
        this.showShaidanIcon &&
          (r.StockBridge.setStorage(o, Date.now()),
          (this.showShaidanIcon = !1));
      },
      goEditor: function () {
        r.StockBridge.report("tap_post_square_button"), this.$emit("goEdit");
      },
      onTapBtn: function () {
        return (
          (t = this),
          null,
          (n = e().mark(function t() {
            var n,
              r = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!i.isH5Native) {
                        e.next = 7;
                        break;
                      }
                      return (e.next = 3), i.sqPrivacyCheck();
                    case 3:
                      if (e.sent) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt("return");
                    case 5:
                      e.next = 9;
                      break;
                    case 7:
                      if (
                        !(s || a || u) ||
                        (null == (n = this.didAgreeUserAgreement)
                          ? void 0
                          : n.value) ||
                        "function" != typeof this.onCheckUserAgreementStatus
                      ) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void this.onCheckUserAgreementStatus()
                      );
                    case 9:
                      this.userCheck({
                        eventName: "putSubject",
                        fakeInput: this.$refs.fakeInput,
                      }).then(function () {
                        r.updateIconHideTime(), r.goEditor();
                      });
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this
            );
          })),
          new Promise(function (e, r) {
            var i = function (e) {
                try {
                  c(n.next(e));
                } catch (e) {
                  r(e);
                }
              },
              o = function (e) {
                try {
                  c(n.throw(e));
                } catch (e) {
                  r(e);
                }
              },
              c = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(i, o);
              };
            c((n = n.apply(t, null)).next());
          })
        );
        var t, n;
      },
      focus: function () {
        this.$refs.fakeInput.focus();
      },
    },
  },
  d = r._export_sfc(h, [
    [
      "render",
      function (e, t, n, i, o, c) {
        return r.e(
          { a: n.topicText },
          n.topicText ? { b: r.t(n.topicText) } : (o.showShaidanIcon, {}),
          {
            c: o.showShaidanIcon,
            d: r.o(function () {
              return c.onTapBtn && c.onTapBtn.apply(c, arguments);
            }, 2634),
          }
        );
      },
    ],
    ["__scopeId", "data-v-7473bf8b"],
  ]);
wx.createComponent(d);
