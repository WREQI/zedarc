var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../common/vendor.js");
getApp().globalData;
var n = {
  props: {
    visible: { type: Boolean },
    type: { type: Number, value: 1 },
    notConfirmList: { type: Array },
  },
  data: function () {
    return { popVisible: !1 };
  },
  onReady: function () {
    this.popVisible = this.visible;
  },
  methods: {
    onCancel: function () {
      this.nextPopupState &&
        t.wx$1.setStorageSync("180823mpflow", this.nextPopupState),
        (this.popVisible = !1);
    },
    onConfirm: function () {
      return (
        (n = this),
        null,
        (r = e().mark(function n() {
          var r, o, i;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = this.notConfirmList.map(function (e) {
                        return e.id;
                      })),
                      (e.prev = 1),
                      (e.next = 4),
                      t.AccountAPI.updateUserArgreementStatus({
                        action: "agree",
                        agreement_ids: r,
                      })
                    );
                  case 4:
                    e.next = 8;
                    break;
                  case 6:
                    (e.prev = 6), (e.t0 = e.catch(1));
                  case 8:
                    this.popVisible = !1;
                    try {
                      (o = new Date().getTime()),
                        ((i = t.wx$1.getStorageSync(
                          "PROTOCOL/USERAGREEMENTLIST"
                        )).val = ""),
                        t.wx$1.setStorageSync("PROTOCOL/USERAGREEMENTLIST", {
                          val: i.val,
                          time: o,
                        });
                    } catch (e) {}
                  case 10:
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
                a(r.next(e));
              } catch (e) {
                t(e);
              }
            },
            i = function (e) {
              try {
                a(r.throw(e));
              } catch (e) {
                t(e);
              }
            },
            a = function (t) {
              return t.done ? e(t.value) : Promise.resolve(t.value).then(o, i);
            };
          a((r = r.apply(n, null)).next());
        })
      );
      var n, r;
    },
    clickProtocol: function (e) {
      var n,
        r,
        o = e.currentTarget.dataset.from,
        i = getCurrentPages(),
        a = i[i.length - 1].route;
      if (((this.frompage = a), "about" !== o))
        return (
          (n = e.currentTarget.dataset.url),
          (r = "/pages/additional/webview/index?url=".concat(
            encodeURIComponent(n)
          )),
          t.wx$1.navigateTo({ url: r }),
          !1
        );
      (n = e.target.dataset.url),
        (r = "/pages/additional/webview/index?url=".concat(
          encodeURIComponent(n)
        ));
    },
  },
};
Array || t.resolveComponent("mp-privacy-dialog")();
var r = t._export_sfc(n, [
  [
    "render",
    function (e, n, r, o, i, a) {
      return t.e(
        { a: e.rootFontSize, b: e.item.id && e.item.title && e.item.url },
        e.item.id && e.item.title && e.item.url
          ? {
              c: t.f(r.notConfirmList, function (e, n, r) {
                return {
                  a: t.t(e.title),
                  b: n,
                  c: e.url,
                  d: t.o(
                    function () {
                      return (
                        a.clickProtocol && a.clickProtocol.apply(a, arguments)
                      );
                    },
                    70,
                    n
                  ),
                };
              }),
            }
          : {},
        {
          d: t.o(function () {
            return a.onCancel && a.onCancel.apply(a, arguments);
          }, 71),
          e: t.o(function () {
            return a.onConfirm && a.onConfirm.apply(a, arguments);
          }, 72),
          f: t.n(i.popVisible ? "show" : ""),
        }
      );
    },
  ],
  ["__scopeId", "data-v-bea87391"],
]);
wx.createPage(r);
