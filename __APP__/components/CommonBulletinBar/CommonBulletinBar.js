var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var n = require("../BulletinBar/useBulletin.js"),
  l = require("../../common/vendor.js"),
  i = require("../../common/components/Dialog/index.js"),
  r = require("../../cgi/bulletin.js"),
  u = require("../../service/aegis/platform/not-wujie.js");
require("../../service/broker.js");
var o = require("../../config/broker/11100/index.js"),
  s = {
    components: {
      BulletinBar: function () {
        return "../BulletinBar/index.js";
      },
    },
    props: { scene: { type: String, default: "" } },
    setup: function (s) {
      var a,
        c,
        p,
        d,
        f,
        v,
        b = l.ref(""),
        B = l.reactive({ status: "0", title: "", content: "" });
      if (s.scene && r.BULLETIN_ACTION[s.scene]) {
        var g = !0;
        switch (s.scene) {
          case "APPLY_PROGRESS":
            g = !(null ==
            (p =
              null ==
              (c = null == (a = o.brokerConfig.apply) ? void 0 : a.stepConfig)
                ? void 0
                : c.progress)
              ? void 0
              : p.hideBulletin);
            break;
          case "TRANSFER":
            g = !(null == (d = o.brokerConfig.transfer)
              ? void 0
              : d.hideBulletin);
            break;
          case "IDCARD_VERIFY":
            g = !(null ==
            (v = null == (f = o.brokerConfig.hall) ? void 0 : f.idcard)
              ? void 0
              : v.hideBulletin);
        }
        g && (b.value = "".concat(s.scene, "_BULLETIN"));
      }
      var h = l.computed(function () {
          return "1" === (null == B ? void 0 : B.status);
        }),
        m = n.useBulletin({ expire: 1, id: b.value, bizShowBulletin: h }),
        q = m.hideBulletin,
        x = m.closeBulletin;
      function C() {
        (B.status = "0"), (B.title = ""), (B.content = "");
      }
      return (
        l.onMounted(
          t(
            e().mark(function t() {
              var n, l;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!b.value) {
                          e.next = 11;
                          break;
                        }
                        return (
                          (e.prev = 1),
                          (e.next = 4),
                          r.bulletinApi.qryBulletin({
                            action: r.BULLETIN_ACTION[s.scene],
                          })
                        );
                      case 4:
                        (l = e.sent),
                          (null == (n = null == l ? void 0 : l.bulletin)
                            ? void 0
                            : n.length) > 0
                            ? (function (e) {
                                var t = e.filter(function (e) {
                                  return "1" === e.bulletin_status;
                                });
                                if (0 !== t.length) {
                                  var n = t[0];
                                  (B.status = n.bulletin_status),
                                    (B.title = n.bulletin_title),
                                    n.bulletin_content
                                      ? (B.content = n.bulletin_content
                                          .replace(/&lt;/g, "<")
                                          .replace(/&gt;/g, ">")
                                          .replace(/&quot;/g, '"'))
                                      : (B.content = "");
                                } else C();
                              })(l.bulletin)
                            : C(),
                          (e.next = 11);
                        break;
                      case 8:
                        (e.prev = 8),
                          (e.t0 = e.catch(1)),
                          C(),
                          u.aegisReporter.sdk.error({
                            msg: "qry-bulletin-error",
                            ext2: JSON.stringify(e.t0 || {}),
                            trace: "trace",
                          });
                      case 11:
                      case "end":
                        return e.stop();
                    }
                },
                t,
                null,
                [[1, 8]]
              );
            })
          )
        ),
        {
          hideBulletin: q,
          bulletinId: b,
          bulletinConfig: B,
          showBulletinContent: function () {
            if (B.content) {
              var e = '<p style="text-align:left;">'.concat(B.content, "</p>");
              i.Dialog({
                title: B.title,
                message: e,
                messageType: "html",
                confirmButtonText: "我已知晓",
              });
            }
          },
          closeBulletin: x,
        }
      );
    },
  };
Array || l.resolveComponent("BulletinBar")();
var a = l._export_sfc(s, [
  [
    "render",
    function (e, t, n, i, r, u) {
      return l.e(
        { a: !i.hideBulletin },
        i.hideBulletin
          ? {}
          : {
              b: l.t(i.bulletinConfig.title),
              c: l.o(i.closeBulletin),
              d: l.o(i.showBulletinContent),
              e: l.p({
                "bulletin-id": i.bulletinId,
                "click-stop": !1,
                "show-right-icon": !0,
                animate: !1,
              }),
            }
      );
    },
  ],
]);
wx.createComponent(a);
