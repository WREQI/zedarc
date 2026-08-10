require("../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../@babel/runtime/helpers/slicedToArray"),
  r = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var i = require("../../../common/vendor.js"),
  o = require("../../../common/components/Dialog/index.js");
require("../../../cgi/base.js"), require("../../../service/broker.js");
var a = require("../../../utils/getPlatform.js");
require("../../../utils/index.js"), require("../../../utils/accountHelper.js");
var n = require("../../../service/stat/mp-weixin.js"),
  c = require("../../../model/apply/useApply.js"),
  s = require("../../../model/apply/usePrivacyInfo.js");
require("../../../service/sdk/lib/api.js");
var u = require("../../../service/sdk/platform/mp-weixin.js"),
  p = require("../../../service/aegis/platform/not-wujie.js"),
  l = require("../../../stores/apply/useIdCardQuickImport.js"),
  d = require("../../../stores/app/useMode.js"),
  v = require("../../../config/broker/11100/index.js"),
  m = a.getPlatform(),
  f = m.isZxg,
  k = m.isWeixin,
  g = {
    name: "QuickImport",
    components: {
      MpDialog: function () {
        return "../../../common/components/Dialog/Dialog.js";
      },
      MpPopup: function () {
        return "../../../common/components/Popup/index.js";
      },
    },
    setup: function (a, m) {
      var g,
        y = m.emit;
      i.getCurrentInstance().proxy;
      var _,
        h = l.useIdCardQuickImport(),
        b = d.useModeStore(),
        I = i.storeToRefs(b).simpleMode,
        P = 0,
        A = c.useApply(),
        S = A.setLocalApplyInfo,
        x = A.curStepConf,
        R = A.applyInfo,
        q = A.useTelAndIdFirstMode,
        w = i.computed(function () {
          return "1" === R.value.idfront || "1" === R.value.idback;
        }),
        C = s.usePrivacyInfo(s.EScene.APPLY),
        T = C.setPrivacySignStatus,
        L = C.getProtocolUrl,
        j = C.getAuthStatus,
        F = C.toProtocol,
        D = i.ref(!1),
        E = !1,
        M = i.ref(!1);
      function U() {
        return O.apply(this, arguments);
      }
      function O() {
        return (O = t(
          r().mark(function e() {
            var t,
              i,
              o = arguments;
            return r().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = o.length > 0 && void 0 !== o[0] ? o[0] : ""),
                        (e.prev = 1),
                        (e.next = 4),
                        h.queryCredStatus()
                      );
                    case 4:
                      if (((e.t0 = e.sent), e.t0)) {
                        e.next = 7;
                        break;
                      }
                      e.t0 = {};
                    case 7:
                      (i = e.t0),
                        "0" === i.cred_status
                          ? ((M.value = !0),
                            n.stat.click(
                              "trade.apply.idcard.has_cft_cred",
                              void 0,
                              void 0,
                              { platform: t }
                            ))
                          : ((M.value = !1),
                            n.stat.click(
                              "trade.apply.idcard.has_not_cft_cred",
                              void 0,
                              void 0,
                              { platform: t }
                            )),
                        (e.next = 15);
                      break;
                    case 12:
                      (e.prev = 12),
                        (e.t1 = e.catch(1)),
                        (M.value = !0),
                        n.stat.click(
                          "trade.apply.idcard.has_not_cft_cred.fail"
                        ),
                        p.aegisReporter.reportEvent(
                          "ERR-IDCARD-CFT-QUERY-FAIL"
                        );
                    case 15:
                      return (
                        (e.prev = 15), h.resetPreQueryPromise(), e.finish(15)
                      );
                    case 18:
                      return e.abrupt(
                        "return",
                        (M.value &&
                          n.stat.click("trade.apply.idcard.quick_import.brow"),
                        M.value)
                      );
                    case 19:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[1, 12, 15, 18]]
            );
          })
        )).apply(this, arguments);
      }
      function N() {
        return Q.apply(this, arguments);
      }
      function Q() {
        return (Q = t(
          r().mark(function i() {
            var o,
              a,
              c,
              s,
              u,
              d = arguments;
            return r().wrap(
              function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      if (
                        ((o = d.length > 0 && void 0 !== d[0] ? d[0] : {}),
                        (a = o.isAutoImport),
                        (c = void 0 !== a && a),
                        (h.isAutoImport = c),
                        c ||
                          n.stat.click("trade.apply.idcard.quick_import.click"),
                        !E)
                      ) {
                        i.next = 4;
                        break;
                      }
                      return i.abrupt("return");
                    case 4:
                      return (
                        (E = !0),
                        c || (P = Date.now()),
                        (s = !1),
                        (i.prev = 6),
                        (i.next = 9),
                        j({ isShowErr: !c })
                      );
                    case 9:
                      (s = i.sent), (i.next = 15);
                      break;
                    case 12:
                      return (
                        (i.prev = 12),
                        (i.t0 = i.catch(6)),
                        i.abrupt("return", void (E = !1))
                      );
                    case 15:
                      if (s) {
                        i.next = 17;
                        break;
                      }
                      return i.abrupt(
                        "return",
                        ((!f && c) ||
                          ((D.value = !0),
                          n.stat.click(
                            "trade.apply.idcard.privacy_dialog.brow"
                          )),
                        c &&
                          (15900 === v.brokerConfig.base.code
                            ? ((D.value = !0),
                              n.stat.click(
                                "trade.apply.idcard.privacy_dialog.brow"
                              ))
                            : n.stat.click(
                                "trade.apply.idcard.privacy_autoimport_refuse"
                              )),
                        void (E = !1))
                      );
                    case 17:
                      return (
                        (i.next = 19),
                        (function () {
                          var i = t(
                            r().mark(function t(i) {
                              var o,
                                a,
                                c,
                                s,
                                u,
                                d,
                                v,
                                m,
                                f,
                                k,
                                g,
                                _,
                                b,
                                I,
                                P,
                                A;
                              return r().wrap(
                                function (r) {
                                  for (;;)
                                    switch ((r.prev = r.next)) {
                                      case 0:
                                        return (
                                          (o = i.isShowErr),
                                          void 0 === o || o,
                                          (r.prev = 1),
                                          (h.isPulling = !0),
                                          (h.pullStatus = l.PULL_STATUS.IDLE),
                                          (h.ocrFailMsg = ""),
                                          (s = l.minLoadingPromise()),
                                          (r.next = 6),
                                          Promise.all([
                                            h.pull().catch(function (e) {
                                              return s.then(function () {
                                                return Promise.reject(e);
                                              });
                                            }),
                                            s,
                                          ])
                                        );
                                      case 6:
                                        return (
                                          (u = r.sent),
                                          (d = e(u, 1)),
                                          (v = d[0]),
                                          n.stat.click(
                                            "trade.apply.idcard.quick_import.success"
                                          ),
                                          (m = v.cred_id),
                                          (f = void 0 === m ? "" : m),
                                          (k = v.cred_name),
                                          (g = void 0 === k ? "" : k),
                                          (_ = v.cred_valid),
                                          (b = void 0 === _ ? "" : _),
                                          (I = v.cred_address),
                                          (P = void 0 === I ? "" : I),
                                          (A = v.cred_authority),
                                          (h.isPulling = !1),
                                          (r.prev = 12),
                                          (r.next = 15),
                                          (function (e) {
                                            var r = e.need_retry,
                                              t = e.ocr_msg,
                                              i = void 0 === t ? [] : t;
                                            return new Promise(function (e, t) {
                                              if (
                                                (i.length > 0 &&
                                                  p.aegisReporter.reportEvent(
                                                    "MONITOR-APPLY-CFT-OCR-FAIL"
                                                  ),
                                                "1" === r)
                                              ) {
                                                var o = i
                                                    .map(function (e) {
                                                      return e.msg;
                                                    })
                                                    .join("\n"),
                                                  a = i.map(function (e) {
                                                    return e.code;
                                                  });
                                                (h.ocrFailMsg = o),
                                                  (h.pullStatus =
                                                    l.PULL_STATUS.OCR_FAIL_RETRY),
                                                  t({
                                                    type: "fail",
                                                    msgs: o,
                                                    codes: a,
                                                  });
                                              } else (h.pullStatus = l.PULL_STATUS.SUCCESS), e();
                                            });
                                          })(v)
                                        );
                                      case 15:
                                        n.stat.click(
                                          "trade.apply.idcard.quick_import.ocr_success"
                                        ),
                                          (r.next = 21);
                                        break;
                                      case 18:
                                        (r.prev = 18),
                                          (r.t0 = r.catch(12)),
                                          n.stat.click(
                                            "trade.apply.idcard.quick_import.ocr_fail",
                                            void 0,
                                            void 0,
                                            {
                                              codes:
                                                null ==
                                                (a =
                                                  null == r.t0
                                                    ? void 0
                                                    : r.t0.codes)
                                                  ? void 0
                                                  : a.join(","),
                                            }
                                          ),
                                          p.aegisReporter.reportEvent(
                                            "ERR-IDCARD-CFT-OCR-FAIL",
                                            {
                                              ext2:
                                                null ==
                                                (c =
                                                  null == r.t0
                                                    ? void 0
                                                    : r.t0.codes)
                                                  ? void 0
                                                  : c.join(","),
                                              ext3:
                                                null == r.t0
                                                  ? void 0
                                                  : r.t0.msgs,
                                            }
                                          );
                                      case 21:
                                        S({
                                          idfront: "1",
                                          idback: "1",
                                          cred_id: f,
                                          cred_name: g,
                                          cred_valid: b,
                                          cred_address: P,
                                          cred_authority: A,
                                        }),
                                          y("import-card"),
                                          (r.next = 28);
                                        break;
                                      case 24:
                                        (r.prev = 24),
                                          (r.t1 = r.catch(1)),
                                          (h.ocrFailMsg =
                                            (null == r.t1
                                              ? void 0
                                              : r.t1.retmsg) ||
                                            "网络繁忙，请手动上传身份证原件照片"),
                                          (h.isPulling = !1),
                                          ["51095705", "51079731"].includes(
                                            String(r.t1.retcode)
                                          )
                                            ? ((h.pullStatus =
                                                l.PULL_STATUS.OCR_FAIL_NO_RETRY),
                                              S({ idfront: "1", idback: "1" }),
                                              y("import-card"))
                                            : (h.pullStatus =
                                                l.PULL_STATUS.PULL_FAIL),
                                          n.stat.click(
                                            "trade.apply.idcard.quick_import.fail"
                                          ),
                                          p.aegisReporter.reportEvent(
                                            "ERR-IDCARD-CFT-IMPORT-FAIL"
                                          ),
                                          y("updateVideoId", "2-3"),
                                          [
                                            "51095705",
                                            "51095706",
                                            "51095709",
                                            "51079731",
                                          ].includes(String(r.t1.retcode)) &&
                                            (M.value = !1);
                                      case 28:
                                        return (
                                          (r.prev = 28),
                                          h.resetPrePullPromise(),
                                          r.finish(28)
                                        );
                                      case 31:
                                      case "end":
                                        return r.stop();
                                    }
                                },
                                t,
                                null,
                                [
                                  [1, 24, 28, 31],
                                  [12, 18],
                                ]
                              );
                            })
                          );
                          return function (e) {
                            return i.apply(this, arguments);
                          };
                        })()({ isShowErr: !c }).finally(function () {
                          E = !1;
                        })
                      );
                    case 19:
                      (u = Date.now() - P),
                        p.aegisReporter.reportTime(
                          "MONITOR-IDCARD-CFT-IMPORT-TIME",
                          u,
                          { ext2: c ? "auto" : "manual" }
                        );
                    case 21:
                    case "end":
                      return i.stop();
                  }
              },
              i,
              null,
              [[6, 12]]
            );
          })
        )).apply(this, arguments);
      }
      function Y() {
        var e;
        (null == (e = x.quickImport) ? void 0 : e.autoImport) &&
          !w.value &&
          N({ isAutoImport: !0 });
      }
      return (
        (null == (g = x.quickImport) ? void 0 : g.enable) &&
          ((P = Date.now()),
          f
            ? u.sdk
                .login()
                .then(function (e) {
                  var r = e.loginFrom;
                  if ("wx" === r) return U(r);
                })
                .then(function (e) {
                  e && Y();
                })
                .catch(function () {
                  U().then(function (e) {
                    e && Y();
                  });
                })
            : k &&
              U("wx").then(function (e) {
                e && Y();
              })),
        {
          privacyDialogShow: D,
          showQuickImport: M,
          broker: v.brokerConfig,
          brokerName: v.brokerConfig.base.name,
          toProtocol: F,
          takeCftIdcard: N,
          getAuthStatus: j,
          signPrivacy:
            ((_ = t(
              r().mark(function e(t) {
                var i;
                return r().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t
                              ? n.stat.click(
                                  "trade.apply.idcard.privacy_dialog.confirm"
                                )
                              : n.stat.click(
                                  "trade.apply.idcard.privacy_dialog.refuse"
                                ),
                            (i = L()),
                            (e.prev = 2),
                            (e.next = 5),
                            T({ isSign: t, protocolUrl: i })
                          );
                        case 5:
                          t && N(), (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e.catch(2)),
                            o.Dialog({
                              message:
                                "个人信息授权协议签署失败，请您重新点击快速导入身份证按钮签署协议后方可使用此功能",
                              messageAlign: "justify",
                            }),
                            p.aegisReporter.reportEvent(
                              "MONITOR-APPLY-ERR_APPLY_SIGN_CFT_FAIL"
                            );
                        case 11:
                          return (e.prev = 11), (D.value = !1), e.finish(11);
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 8, 11, 14]]
                );
              })
            )),
            function (e) {
              return _.apply(this, arguments);
            }),
          useTelAndIdFirstMode: q,
          simpleMode: I,
        }
      );
    },
  };
Array || (i.resolveComponent("BrokerLogo") + i.resolveComponent("mp-popup"))(),
  Math;
var y = i._export_sfc(g, [
  [
    "render",
    function (e, r, t, o, a, n) {
      return i.e(
        { a: o.showQuickImport },
        o.showQuickImport
          ? {
              b: i.o(function () {
                return o.takeCftIdcard && o.takeCftIdcard.apply(o, arguments);
              }),
              c: i.n(o.simpleMode ? "border--top" : "border--bottom"),
              d: i.t(o.brokerName),
              e: i.o(function () {
                return o.toProtocol && o.toProtocol.apply(o, arguments);
              }),
              f: i.t(o.brokerName),
              g: i.t(o.brokerName),
              h: i.o(function (e) {
                return o.signPrivacy(!1);
              }),
              i: i.o(function (e) {
                return o.signPrivacy(!0);
              }),
              j: i.p({ show: o.privacyDialogShow, position: "bottom" }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-84f8ba21"],
]);
wx.createComponent(y);
