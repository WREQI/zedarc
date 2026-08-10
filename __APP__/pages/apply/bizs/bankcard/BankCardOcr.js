var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../../app.js");
var t = require("../../../../common/vendor.js"),
  o = require("../../../../config/enum.js"),
  n = require("../../../../model/apply/ocr/index.js"),
  a = require("../../../../model/apply/useDegradation.js"),
  c = require("../../../../model/apply/useApply.js"),
  s = require("../../../../utils/getPlatform.js"),
  i = require("../../../../cgi/apply.js"),
  u = require("../../../../config/key.js"),
  p = require("../../../../common/components/Dialog/index.js"),
  d = require("../../../../service/aegis/platform/not-wujie.js"),
  l = s.getPlatform(),
  m = l.isZxg,
  g =
    (l.bizPlatform,
    {
      setup: function () {
        var s = t.ref(""),
          i = t.ref(o.MEDIA_STATUS.UNSET),
          u = t.inject("showOcrExample"),
          p = t.ref("0"),
          d = t.ref(!1),
          l = c.useApply().getMode,
          g = a.useDegradation(new n.MpController("bankcard"), {}),
          f = g.setDegraded,
          A = g.service;
        return (
          t.onBeforeMount(
            r(
              e().mark(function r() {
                var t;
                return e().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.prev = 0), (e.next = 3), l();
                        case 3:
                          (t = e.sent), (e.next = 8);
                          break;
                        case 6:
                          (e.prev = 6), (e.t0 = e.catch(0));
                        case 8:
                          p.value =
                            (null == t ? void 0 : t.bankcard_ocr) || "0";
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  },
                  r,
                  null,
                  [[0, 6]]
                );
              })
            )
          ),
          t.onMounted(function () {}),
          {
            ocrImg: s,
            imgStatus: i,
            mController: A,
            bankCardOcrMode: p,
            isLocalImg: d,
            STATUS: o.MEDIA_STATUS,
            showImg: !m,
            showOcrExample: u,
            getMode: l,
            setDegraded: f,
          }
        );
      },
      methods: {
        process: function () {
          var n = this;
          return r(
            e().mark(function r() {
              var a, c, s, l, g, f;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (n.mController) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          void n.$log.error("没有对应图片流程控制器实例")
                        );
                      case 2:
                        if (t.index.getStorageSync(u.APPLY_BANKCARD_EXAMPLE)) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt("return", void n.showOcrExample());
                      case 4:
                        return (
                          (a = i.applyCgi.getFullApplyUrl(i.ACTION.CARD_OCR)),
                          (c = { bankcard_ocr: n.bankCardOcrMode }),
                          (e.prev = 5),
                          (e.next = 8),
                          n.mController.ocr({ ocrCgi: a, ocrData: c })
                        );
                      case 8:
                        (s = e.sent),
                          (l = s.ocrImg),
                          (g = s.isLocalImg),
                          (f = void 0 !== g && g),
                          n.loadImg(l),
                          (n.isLocalImg = f),
                          (n.imgStatus = o.MEDIA_STATUS.SUCCESS),
                          n.$emit("success", s),
                          (e.next = 22);
                        break;
                      case 15:
                        if (
                          ((e.prev = 15),
                          (e.t0 = e.catch(5)),
                          e.t0.statusCode !== o.MEDIA_STATUS.CANCEL)
                        ) {
                          e.next = 19;
                          break;
                        }
                        return e.abrupt("return");
                      case 19:
                        if (
                          !(
                            (m && /13\d\d\d/.test(e.t0.err_code)) ||
                            (null == e.t0 ? void 0 : e.t0.downgrade)
                          )
                        ) {
                          e.next = 21;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          (n.setDegraded(),
                          p.Dialog({
                            message: "服务异常，请重试",
                            confirmButtonText: "重试",
                            onConfirm: function () {
                              n.process(),
                                d.aegisReporter.reportEvent(
                                  "MONITOR-APPLY-BANKCARD-OCR-DEGRADE-RETRY"
                                );
                            },
                          }),
                          void d.aegisReporter.reportEvent(
                            "MONITOR-APPLY-BANKCARD-OCR-DEGRADE"
                          ))
                        );
                      case 21:
                        (n.imgStatus = o.MEDIA_STATUS.FAIL),
                          n.$emit("error", e.t0);
                      case 22:
                      case "end":
                        return e.stop();
                    }
                },
                r,
                null,
                [[5, 15]]
              );
            })
          )();
        },
        loadImg: function (e) {
          (this.imgStatus = o.MEDIA_STATUS.UNSET), (this.ocrImg = e);
        },
        onPicLoadEnd: function () {},
        onPicLoadError: function (e) {},
        confirmOcrExample: function () {
          t.index.setStorageSync(u.APPLY_BANKCARD_EXAMPLE, !0), this.process();
        },
      },
    }),
  f = t._export_sfc(g, [
    [
      "render",
      function (e, r, o, n, a, c) {
        return t.e(
          { a: n.ocrImg },
          n.ocrImg
            ? {
                b: n.ocrImg,
                c: t.o(function () {
                  return c.onPicLoadEnd && c.onPicLoadEnd.apply(c, arguments);
                }),
                d: t.o(function () {
                  return (
                    c.onPicLoadError && c.onPicLoadError.apply(c, arguments)
                  );
                }),
              }
            : {},
          {
            e: n.isLocalImg ? 1 : "",
            f: n.showImg && n.imgStatus === n.STATUS.SUCCESS,
            g: t.o(function () {
              return c.process && c.process.apply(c, arguments);
            }),
          }
        );
      },
    ],
    ["__scopeId", "data-v-06c37515"],
  ]);
wx.createComponent(f);
