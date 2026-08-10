var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../stock-sq/src/utils/mixins/securityCheck/index.js"),
  r = require("../../stock-community-base/utils/privacyCheck.js"),
  n = require("../../../../../common/vendor.js"),
  i = {
    mixins: [t.securityCheck],
    inject: { stockBridge: { default: {} } },
    props: {
      type: { default: "" },
      reportPrefix: { type: String, default: "" },
      bottomBar: {
        default: function () {
          return {
            type: "comments",
            title: "评论",
            praise: "0",
            praiseTitle: "很牛",
            transpondTitle: "转发",
          };
        },
      },
      forbidComment: { type: Boolean, default: !1 },
      forwardNum: { type: Number, default: 0 },
    },
    computed: {
      isNewsDetail: function () {
        return "newsDetail" === this.type;
      },
    },
    methods: {
      bindTapInput: function () {
        return (
          (t = this),
          null,
          (n = e().mark(function t() {
            var n = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (this.forbidComment) {
                        e.next = 9;
                        break;
                      }
                      if (((e.t0 = r.isH5Native), !e.t0)) {
                        e.next = 6;
                        break;
                      }
                      return (e.next = 5), r.sqPrivacyCheck();
                    case 5:
                      e.t0 = !e.sent;
                    case 6:
                      if (!e.t0) {
                        e.next = 8;
                        break;
                      }
                      return e.abrupt("return");
                    case 8:
                      this.userCheck({
                        eventName: "putSubject",
                        fakeInput: this.$refs.myInput,
                      }).then(function () {
                        n.stockBridge.report(
                          "".concat(n.reportPrefix, "_fatie")
                        ),
                          n.$emit("goEdit");
                      });
                    case 9:
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
                  s(n.next(e));
                } catch (e) {
                  r(e);
                }
              },
              o = function (e) {
                try {
                  s(n.throw(e));
                } catch (e) {
                  r(e);
                }
              },
              s = function (t) {
                return t.done
                  ? e(t.value)
                  : Promise.resolve(t.value).then(i, o);
              };
            s((n = n.apply(t, null)).next());
          })
        );
        var t, n;
      },
      inputFocus: function () {
        this.$refs.myInput.focus();
      },
    },
  },
  o = n._export_sfc(i, [
    [
      "render",
      function (e, t, r, i, o, s) {
        return n.e(
          { a: s.isNewsDetail },
          s.isNewsDetail
            ? n.e({ b: r.forbidComment }, (r.forbidComment, {}), {
                c: n.t(r.forbidComment ? "暂不开放评论" : "谈谈我的想法"),
                d: n.n(r.forbidComment ? "gray" : ""),
                e: n.o(function () {
                  return s.bindTapInput && s.bindTapInput.apply(s, arguments);
                }, 2379),
              })
            : {},
          { f: s.isNewsDetail ? 1 : "" }
        );
      },
    ],
    ["__scopeId", "data-v-0ba4f3b5"],
  ]);
wx.createComponent(o);
