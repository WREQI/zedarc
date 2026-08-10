var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../common/vendor.js"),
  t = {
    name: "EscapeNotice",
    components: {
      webViewComp: function () {
        return "../../components/webView.js";
      },
    },
    setup: function () {
      var t = this,
        r = "https://wzq.tenpay.com/mp/v2/escape.html?srcsite=zxgxcx_h5",
        o = n.ref(r);
      return (
        n.onMounted(function () {
          return (
            (n = t),
            null,
            (c = e().mark(function () {
              var n, t, c, a, s, u;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (a =
                        (null ==
                        (c =
                          null ==
                          (t =
                            null == (n = getApp().globalData)
                              ? void 0
                              : n.Login)
                            ? void 0
                            : t.getEscapeIdentity)
                          ? void 0
                          : c.call(t)) || {}),
                        (s = a.espUinEn),
                        (u = a.espDealer),
                        s &&
                          u &&
                          (o.value = ""
                            .concat(r, "&esp_uin_en=")
                            .concat(encodeURIComponent(s), "&esp_dealer=")
                            .concat(encodeURIComponent(u)));
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, c);
            })),
            new Promise(function (e, t) {
              var r = function (e) {
                  try {
                    a(c.next(e));
                  } catch (e) {
                    t(e);
                  }
                },
                o = function (e) {
                  try {
                    a(c.throw(e));
                  } catch (e) {
                    t(e);
                  }
                },
                a = function (n) {
                  return n.done
                    ? e(n.value)
                    : Promise.resolve(n.value).then(r, o);
                };
              a((c = c.apply(n, null)).next());
            })
          );
          var n, c;
        }),
        { escapeUrl: o }
      );
    },
  };
Array || n.resolveComponent("web-view-comp")();
var r = n._export_sfc(t, [
  [
    "render",
    function (e, t, r, o, c, a) {
      return { a: n.p({ src: o.escapeUrl, "add-params": !1 }) };
    },
  ],
]);
wx.createComponent(r);
