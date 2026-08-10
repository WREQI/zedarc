var e = require("../../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = function (e, t, n) {
    return new Promise(function (c, o) {
      var r = function (e) {
          try {
            s(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        i = function (e) {
          try {
            s(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        s = function (e) {
          return e.done ? c(e.value) : Promise.resolve(e.value).then(r, i);
        };
      s((n = n.apply(e, t)).next());
    });
  },
  n = require("../../../../../../../common/vendor.js"),
  c = {
    inject: { hqBridge: {}, isAccountOpen: { default: function () {} } },
    components: {
      AccountOpenedBlock: function () {
        return "../NoDataCard.js";
      },
      NoAccountOpenedBlock: function () {
        return "./NoAccountOpenedBlock.js";
      },
    },
    props: {
      market: { type: String, default: "" },
      type: { type: String, default: "" },
      accoutOpened: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        accountOpenedText: "暂无此类新股/债",
        env: this.hqBridge.ENV,
        isGetAccountOpenState: !0,
        isOpen: !1,
      };
    },
    created: function () {
      "wzq" === this.env &&
        ((this.isOpen = this.isAccountOpen), (this.isGetAccountOpenState = !0)),
        "app" === this.env && this.handleAppAccount(),
        "mp" === this.env &&
          ((this.isOpen = this.accoutOpened),
          (this.isGetAccountOpenState = !0));
    },
    methods: {
      handleAppAccount: function () {
        return t(
          this,
          null,
          e().mark(function n() {
            var c = this;
            return e().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), this.isAccountOpen();
                    case 2:
                      (this.isOpen = n.sent),
                        (this.isGetAccountOpenState = !0),
                        this.hqBridge.onPageInvisible(function () {
                          return t(
                            c,
                            null,
                            e().mark(function t() {
                              return e().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2), this.isAccountOpen()
                                        );
                                      case 2:
                                        this.isOpen = e.sent;
                                      case 3:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                t,
                                this
                              );
                            })
                          );
                        });
                    case 5:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              this
            );
          })
        );
      },
    },
  };
Array ||
  (
    n.resolveComponent("account-opened-block") +
    n.resolveComponent("no-account-opened-block")
  )();
var o = n._export_sfc(c, [
  [
    "render",
    function (e, t, c, o, r, i) {
      return n.e(
        { a: r.isGetAccountOpenState },
        r.isGetAccountOpenState
          ? n.e(
              { b: r.isOpen },
              r.isOpen
                ? { c: n.p({ text: r.accountOpenedText }) }
                : { d: n.p({ market: c.market, type: c.type }) }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-c2c7babe"],
]);
wx.createComponent(o);
