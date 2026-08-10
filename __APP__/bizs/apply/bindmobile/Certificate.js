var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js"), require("../../../service/broker.js");
var r = require("../../../common/vendor.js"),
  n = require("../../../model/apply/useApply.js"),
  o = require("../../../cgi/apply.js"),
  a = require("../../../common/components/Dialog/index.js"),
  i = require("../../../model/chooseImage/index.js"),
  s = require("../../../utils/getPlatform.js"),
  u = require("../../../service/sdk/lib/enum.js");
require("../../../service/sdk/lib/api.js");
var c = require("../../../service/sdk/platform/mp-weixin.js"),
  p = require("../../../config/enum.js"),
  l = require("../../../service/aegis/platform/not-wujie.js"),
  m = require("../../../config/broker/11100/index.js"),
  f = s.getPlatform().isZxg,
  g = {
    name: "Certificate",
    components: {
      MpDialog: function () {
        return "../../../common/components/Dialog/Dialog.js";
      },
      ActionSheet: function () {
        return "../../../common/components/ActionSheet/index.js";
      },
      StepButtons: function () {
        return "../../../pages/apply/components/StepButtons/StepButtons.js";
      },
    },
    setup: function () {
      try {
        c.sdk.setPageTitle({ title: "手机机主证明材料" });
      } catch (e) {}
      var s,
        g,
        v = n.useApply(),
        h = v.curStepConf,
        x = v.navigateNextStep,
        d = r.ref(
          "由于您的手机号已在".concat(
            m.brokerConfig.base.name,
            "开立过账户，为加强身份验证，针对您当前的开户手机号进行实名制核验"
          )
        ),
        S = r.computed(function () {
          return h.certificate;
        }),
        b = r.ref(""),
        y = r.ref(!1),
        C = [
          {
            content: "拍照",
            sourceType: u.ENUM_SDK_CONSTANTS.SOURCE.CAMERA,
            stat: "trade.apply.certificate.source_camera",
          },
          {
            content: "从手机相册选择",
            sourceType: u.ENUM_SDK_CONSTANTS.SOURCE.ALBUM,
            stat: "trade.apply.certificate.source_album",
          },
        ],
        T = !1,
        j = r.ref(""),
        A = new i.MpController();
      function k(e) {
        return q.apply(this, arguments);
      }
      function q() {
        return (q = t(
          e().mark(function t(r) {
            var n;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = r.sourceType),
                        (e.prev = 1),
                        (e.next = 4),
                        A.capture({ sourceType: n })
                      );
                    case 4:
                      (j.value = e.sent), (e.next = 12);
                      break;
                    case 7:
                      if (
                        ((e.prev = 7),
                        (e.t0 = e.catch(1)),
                        e.t0.statusCode !== p.MEDIA_STATUS.CANCEL)
                      ) {
                        e.next = 11;
                        break;
                      }
                      return e.abrupt("return");
                    case 11:
                      l.aegisReporter.reportEvent("CHOOSE-IMG-FAIL", {
                        ext2: e.t0.retcode,
                        ext3: "BIND_MOBILE",
                      }),
                        a.Dialog({
                          message: e.t0.retmsg || "网络繁忙 请稍后再试",
                        });
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              null,
              [[1, 7]]
            );
          })
        )).apply(this, arguments);
      }
      return {
        explainText: d,
        options: S,
        isSubmitable: r.computed(function () {
          return b.value && j.value;
        }),
        photoSrc: j,
        sourceType: C,
        onChange: function (e) {
          var t;
          b.value =
            null == (t = null == e ? void 0 : e.detail) ? void 0 : t.value;
        },
        choosePict:
          ((g = t(
            e().mark(function t() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      A &&
                        (T ||
                          (f
                            ? (y.value = !0)
                            : k({
                                sourceType: C.map(function (e) {
                                  return e.sourceType;
                                }),
                              })));
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, t);
            })
          )),
          function () {
            return g.apply(this, arguments);
          }),
        submit:
          ((s = t(
            e().mark(function t() {
              var r, n;
              return e().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (T) {
                          e.next = 13;
                          break;
                        }
                        return (
                          (T = !0),
                          (e.prev = 2),
                          (r = o.applyCgi.getFullApplyUrl(o.ACTION.TEL_CHECK)),
                          (n = {
                            action: o.ACTION.TEL_CHECK,
                            register_status: b.value,
                          }),
                          (e.next = 6),
                          A.upload(r, n)
                        );
                      case 6:
                        x(), (e.next = 12);
                        break;
                      case 9:
                        (e.prev = 9),
                          (e.t0 = e.catch(2)),
                          a.Dialog({ message: e.t0.retmsg });
                      case 12:
                        T = !1;
                      case 13:
                      case "end":
                        return e.stop();
                    }
                },
                t,
                null,
                [[2, 9]]
              );
            })
          )),
          function () {
            return s.apply(this, arguments);
          }),
        isZxg: f,
        isZxgSheetShow: y,
        chooseZxgSource: function (e) {
          k({ sourceType: e.sourceType });
        },
      };
    },
  };
Array ||
  (
    r.resolveComponent("StepButtons") +
    r.resolveComponent("action-sheet") +
    r.resolveComponent("mp-dialog")
  )();
var v = r._export_sfc(g, [
  [
    "render",
    function (e, t, n, o, a, i) {
      return r.e(
        {
          a: r.t(o.explainText),
          b: r.f(o.options, function (e, t, n) {
            return { a: r.t(e.name), b: e.value, c: e.key };
          }),
          c: r.o(function () {
            return o.onChange && o.onChange.apply(o, arguments);
          }),
          d: o.photoSrc,
        },
        o.photoSrc ? { e: o.photoSrc } : {},
        { f: o.photoSrc },
        (o.photoSrc, {}),
        {
          g: r.o(function () {
            return o.choosePict && o.choosePict.apply(o, arguments);
          }),
          h: r.o(o.submit),
          i: r.p({
            fixed: !0,
            "transparent-bg": !0,
            "disable-next-button": !o.isSubmitable,
            "hide-prev-button": !0,
            "next-button-text": "提交开户",
          }),
          j: o.isZxg,
        },
        o.isZxg
          ? {
              k: r.o(o.chooseZxgSource),
              l: r.o(function (e) {
                return (o.isZxgSheetShow = e);
              }),
              m: r.p({ value: o.isZxgSheetShow, data: o.sourceType }),
            }
          : {},
        { n: r.p({ id: "mp-dialog" }) }
      );
    },
  ],
  ["__scopeId", "data-v-ba197006"],
]);
wx.createComponent(v);
