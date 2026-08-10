require("../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../@babel/runtime/helpers/toConsumableArray"),
  e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../../app.js");
var r = require("../../../../common/vendor.js"),
  o = require("../../../../model/apply/useApply.js"),
  a = require("../../../../utils/getPlatform.js"),
  i = require("../../../../cgi/apply.js"),
  s = require("../../../../service/stat/mp-weixin.js"),
  c = require("../../../../service/aegis/platform/not-wujie.js"),
  u = require("../../../../common/components/Dialog/index.js"),
  p = require("../../../../lib/bankcardhelper.js"),
  d = require("../../../../service/mpPluginSub/index.js"),
  l = require("../../../../stores/apply/useCommonData.js"),
  f = require("../../../../config/bank.js"),
  k = require("./useBankPasswordFlow.js"),
  m = require("../../../../service/mpPluginSub/config.js"),
  h = a.getPlatform(),
  b = h.platform,
  v = (h.bizPlatform, h.bizPlatformVer),
  B = {
    components: {
      MpDialog: function () {
        return "../../../../common/components/Dialog/Dialog.js";
      },
      StCellGroup: function () {
        return "../../../../common/components/CellGroup/index.js";
      },
      StCell: function () {
        return "../../../../common/components/Cell/index.js";
      },
      StPicker: function () {
        return "../../../../common/components/Picker/index.js";
      },
      BankCardOcr: function () {
        return "./BankCardOcr.js";
      },
      StepButtons: function () {
        return "../../components/StepButtons/StepButtons.js";
      },
      BankAuthPopup: function () {
        return "./BankAuthPopup.js";
      },
      FootPrint: function () {
        return "../../../../bizs/apply/FootPrint.js";
      },
    },
    props: {
      canSwitchMode: { type: Boolean, default: !1 },
      supportedBankList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      setDefaultValue: { type: Boolean, default: !0 },
    },
    setup: function (t, a) {
      var c,
        u = a.emit,
        p = r.getCurrentInstance().proxy,
        d = o.useApply(),
        l = d.applyInfo,
        f = d.isRecoverMode,
        m = d.commitApplyData,
        h = d.curStepConf,
        B = d.curStepInfo,
        w = d.nextStepInfo,
        C = r.reactive({
          cardNo: "",
          bankName: "",
          bankAbbr: "",
          bankCode: "",
        }),
        S = r.ref(0),
        N = r.ref(""),
        y = r.reactive({
          selectBankPicker: !1,
          errorTip: !1,
          scanTips: !1,
          bankAuthPopup: !1,
          cardNoError: !1,
          cardNameError: !1,
        }),
        A = h.isNewUnionpayAuth,
        D = h.unionpayBankcardProtocol,
        P = void 0 === D ? {} : D,
        g = k.useBankPasswordFlow({
          getRouter: function () {
            return p.$router;
          },
          onSubmit:
            ((c = n(
              e().mark(function t(n) {
                return e().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), p.doSubmitBankcard(n);
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )),
            function (t) {
              return c.apply(this, arguments);
            }),
          emitProcessing: function (t) {
            return u("bankPwdProcessing", t);
          },
        });
      r.onBeforeUnmount(function () {
        g.cleanupIfPending();
      });
      var x = r.computed(function () {
          return (
            "1" === l.value.bank_card_ocr && (r.gte(v, "7.6.0") || "ios" !== b)
          );
        }),
        I = r.computed(function () {
          return C.cardNo && C.bankAbbr && !N.value;
        });
      return (
        r.provide("showOcrExample", function () {
          y.scanTips = !0;
        }),
        r.onMounted(function () {
          if (!t.setDefaultValue) return (C.cardNo = ""), void p.setBankInfo();
          if (!C.cardNo && l.value.bank_account && l.value.bank_code) {
            C.cardNo = l.value.bank_account;
            var e = t.supportedBankList.find(function (t) {
              return t.bankCode === l.value.bank_code;
            });
            e && p.setBankInfo(e.bankAbbr);
          }
        }),
        {
          applyInfo: l,
          isRecoverMode: f,
          curStepConf: h,
          curStepInfo: B,
          nextStepInfo: w,
          commitApplyData: m,
          formData: C,
          pickerSelected: S,
          errorContent: N,
          showStatus: y,
          unionpayBankcardProtocol: P,
          authScene: i.BankAuthScene.input,
          isSubmitable: I,
          showBankCardOCRBtn: x,
          isNewUnionpayAuth: A,
          navigateBindCard: function () {
            s.stat.click("trade.apply.inputcard.quick_input"), u("switchMode");
          },
          showSupportCardList: function () {
            s.stat.click("trade.apply.bankcard.support"),
              u("showSupportCardList");
          },
          onCommitSuccess: function () {
            u("navigateNextStep");
          },
          onBankAuthError: function (t) {
            t.clear && ((C.cardNo = ""), p.setBankInfo()),
              (y.cardNoError = !0),
              (y.cardNameError = !0);
          },
          bankPwdFlow: g,
        }
      );
    },
    methods: {
      startOcr: r.debounce(function () {
        this.$refs.ocr.process();
      }, 200),
      showSelectBankPicker: function () {
        var t, e;
        0 !== this.supportedBankList.length
          ? (this.$stat.click("trade.apply.bankcard.name_enter"),
            (this.showStatus.selectBankPicker = !0),
            (this.showStatus.cardNameError = !1),
            null == (e = null == (t = r.wx$1) ? void 0 : t.hideKeyboard) ||
              e.call(t))
          : r.index.showToast({ title: "暂无可支持的银行", icon: "none" });
      },
      selectBank: function (t) {
        var e = t[0],
          n = this.supportedBankList[e].bankAbbr;
        this.setBankInfo(n), (this.pickerSelected = e);
      },
      checkInput: function () {
        if (!this.formData.cardNo)
          return (this.formData.cardNo = ""), void this.setBankInfo();
        var t = this.formData.cardNo.replace(/\D/g, "");
        return (
          (this.formData.cardNo = t),
          /^(\d)\1\1\1\1\1/.test(t) || !/^\d+$/.test(t)
            ? (this.setBankInfo(), void this.showErr("请输入正确的银行卡号"))
            : t.length < 15 || t.length > 19
            ? (this.setBankInfo(),
              void this.showErr("银行卡位数必须是15到19位"))
            : (this.showErr(""), void this.verifyCardBin(t))
        );
      },
      verifyCardBin: function (e) {
        var n = this;
        p.__CJS__export_default__
          .getBankBin(e)
          .then(function (e) {
            var r;
            if (e) {
              var o = e.bankName,
                a = e.bankCode,
                i = void 0 === a ? "" : a,
                s = e.aliases,
                c = void 0 === s ? [] : s,
                u = e.cardType,
                p = [i.toLowerCase()].concat(
                  t(
                    c.map(function (t) {
                      return t.toLowerCase();
                    })
                  )
                ),
                d =
                  (null ==
                  (r = n.supportedBankList.find(function (t) {
                    return p.includes(t.bankAbbr);
                  }))
                    ? void 0
                    : r.bankAbbr) || "";
              if (void 0 === o) return n.setBankInfo(), void n.showErr("");
              if (!d)
                return (
                  n.setBankInfo(),
                  void n.showErr(
                    "暂不支持".concat(o, "网上开户，请更换其他银行卡继续开户")
                  )
                );
              if ("DC" !== u)
                return (
                  n.setBankInfo(),
                  void n.showErr(
                    "暂不支持信用卡开户，请更换为其他储蓄卡继续开户"
                  )
                );
              n.setBankInfo(d), n.showErr();
            }
          })
          .catch(function (t) {
            n.setBankInfo(), (n.errorContent = t);
          });
      },
      setBankInfo: function (t) {
        if (t) {
          var e = this.supportedBankList.findIndex(function (e) {
              return e.bankAbbr === t;
            }),
            n = this.supportedBankList[e];
          (this.formData.bankName = n.bankName || ""),
            (this.formData.bankAbbr = n.bankAbbr || ""),
            (this.formData.bankCode = n.bankCode || ""),
            (this.pickerSelected = e > -1 ? e : 0);
        } else
          (this.formData.bankName = ""),
            (this.formData.bankAbbr = ""),
            (this.formData.bankCode = ""),
            (this.pickerSelected = 0);
        (this.showStatus.cardNoError = !1),
          (this.showStatus.cardNameError = !1);
      },
      showErr: function (t) {
        this.errorContent = t;
      },
      commitBankcardInfo: function () {
        var t = this;
        return n(
          e().mark(function n() {
            var r;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    t.$stat.click("trade.apply.bankcard.next");
                    try {
                      t.$route.query.amssub &&
                        d.asyncShowMpSub("trade_inputcard", m.TMPIDARR.AMSSUB);
                    } catch (t) {}
                    if (!t.bankPwdFlow.isNeedPassword(t.formData.bankAbbr)) {
                      e.next = 6;
                      break;
                    }
                    t.bankPwdFlow.startFlow(
                      t.formData.bankAbbr,
                      t.formData.bankName,
                      (null == (r = t.formData.cardNo)
                        ? void 0
                        : r.slice(-3)) || ""
                    ),
                      (e.next = 8);
                    break;
                  case 6:
                    return (e.next = 8), t.doSubmitBankcard();
                  case 8:
                  case "end":
                    return e.stop();
                }
            }, n);
          })
        )();
      },
      doSubmitBankcard: function () {
        var t = arguments,
          o = this;
        return n(
          e().mark(function n() {
            var a, s, c, p, d, k, m, h, b, v, B, w;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = t.length > 0 && void 0 !== t[0] ? t[0] : ""),
                        (c = l.useCommonData()),
                        (e.prev = 2),
                        r.index.showLoading({ title: "验证中", mask: !0 }),
                        (p = o.supportedBankList.find(function (t) {
                          return t.bankAbbr === o.formData.bankAbbr;
                        })),
                        (d = r.storeToRefs(c)),
                        (k = d.applyArgs),
                        (m = k.value),
                        (h = m.bank_sell_code),
                        (b = m.out_abbr),
                        (v = void 0 === b ? "" : b),
                        (B = {
                          bank_code: p.bankCode,
                          bank_account: o.formData.cardNo.replace(/\s+/g, ""),
                          bank_sell_code: h || "",
                          bank_activity_from:
                            (null == (s = f.BANKS[v]) ? void 0 : s.code) || "",
                        }),
                        a && (B.bank_pwd = a),
                        (e.next = 8),
                        o.commitApplyData(i.ACTION.CARD_SUMBIT, B, {
                          encodeFields: ["bank_account"],
                        })
                      );
                    case 8:
                      if (
                        ((w = e.sent),
                        r.index.hideLoading(),
                        "1" !== w.need_auth)
                      ) {
                        e.next = 15;
                        break;
                      }
                      if (!o.isNewUnionpayAuth) {
                        e.next = 12;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void (o.showStatus.bankAuthPopup = !0)
                      );
                    case 12:
                      o.$router.push({ name: "ApplyBankAuth" }), (e.next = 16);
                      break;
                    case 15:
                      o.onCommitSuccess();
                    case 16:
                      e.next = 21;
                      break;
                    case 18:
                      (e.prev = 18),
                        (e.t0 = e.catch(2)),
                        r.index.hideLoading(),
                        u.Dialog({ message: e.t0.retmsg });
                    case 21:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              null,
              [[2, 18]]
            );
          })
        )();
      },
      onOcrSuc: function (t) {
        var e = this,
          n = t.cardNo;
        if (!n)
          return (
            u.Dialog({
              title: "银行卡识别失败",
              message:
                "银行卡识别失败，请确保银行卡卡号面向上，完整放置在拍摄框内，信息清晰可见，无反光、无遮挡。请重新拍摄。",
              confirmButtonText: "重新拍摄",
              cancelButtonText: "手动输入卡号",
              showCancelButton: !0,
              onConfirm: function () {
                setTimeout(function () {
                  e.startOcr();
                }, 200);
              },
            }),
            void c.aegisReporter.reportEvent(
              "MONITOR-APPLY-INPUTCARD-OCR-EMPTY"
            )
          );
        (this.formData.cardNo = n),
          this.checkInput(n),
          c.aegisReporter.reportEvent("MONITOR-APPLY-INPUTCARD-OCR-SUC");
      },
      onOcrErr: function (t) {
        u.Dialog({ message: t.retmsg || "网络繁忙 请稍后再试" }),
          (this.formData.cardNo = ""),
          this.setBankInfo(),
          c.aegisReporter.reportEvent("MONITOR-APPLY-INPUTCARD-OCR-FAIL", {
            ext2: JSON.stringify(t || {}),
          });
      },
      confirmOcrExample: function () {
        this.$refs.ocr.confirmOcrExample();
      },
      onCardNoFocus: function () {
        this.$stat.click("trade.apply.bankcard.num_enter"),
          (this.showStatus.cardNoError = !1);
      },
      clickInputWithHideNumber: function () {
        (this.formData.cardNo = ""),
          (this.showStatus.cardNoError = !1),
          this.setBankInfo(),
          this.$stat.click("trade.apply.bankcard.num_enter");
      },
    },
  };
Array ||
  (
    r.resolveComponent("st-cell") +
    r.resolveComponent("st-cell-group") +
    r.resolveComponent("bank-card-ocr") +
    r.resolveComponent("FootPrint") +
    r.resolveComponent("StepButtons") +
    r.resolveComponent("st-picker") +
    r.resolveComponent("mp-dialog") +
    r.resolveComponent("BankAuthPopup")
  )();
var w = r._export_sfc(B, [
  [
    "render",
    function (t, e, n, o, a, i) {
      return r.e(
        { a: n.canSwitchMode },
        n.canSwitchMode ? { b: r.o(o.navigateBindCard) } : {},
        {
          c: r.sr("ocr", "09d06219-3,09d06219-2"),
          d: r.o(i.onOcrSuc),
          e: r.o(i.onOcrErr),
          f: o.showStatus.cardNoError ? 1 : "",
          g: o.formData.cardNo.includes("*"),
        },
        o.formData.cardNo.includes("*")
          ? {
              h: r.o(function () {
                return (
                  i.clickInputWithHideNumber &&
                  i.clickInputWithHideNumber.apply(i, arguments)
                );
              }),
              i: o.formData.cardNo,
              j: r.o(function (t) {
                return (o.formData.cardNo = t.detail.value);
              }),
            }
          : {
              k: r.o(function () {
                return i.onCardNoFocus && i.onCardNoFocus.apply(i, arguments);
              }),
              l: r.o(function () {
                return i.checkInput && i.checkInput.apply(i, arguments);
              }),
              m: o.formData.cardNo,
              n: r.o(function (t) {
                return (o.formData.cardNo = t.detail.value);
              }),
            },
        { o: o.showBankCardOCRBtn },
        o.showBankCardOCRBtn
          ? {
              p: r.o(function () {
                return i.startOcr && i.startOcr.apply(i, arguments);
              }),
            }
          : {},
        {
          q: o.showStatus.cardNameError ? 1 : "",
          r: r.o(function () {
            return (
              i.showSelectBankPicker &&
              i.showSelectBankPicker.apply(i, arguments)
            );
          }),
          s: o.formData.bankName,
          t: r.o(function (t) {
            return (o.formData.bankName = t.detail.value);
          }),
          v: r.t(o.errorContent),
          w: !!o.errorContent,
          x: r.o(function () {
            return (
              o.showSupportCardList && o.showSupportCardList.apply(o, arguments)
            );
          }),
          y: r.p({ fixed: !0 }),
          z: r.o(i.commitBankcardInfo),
          A: r.p({
            fixed: !0,
            stat: "bankcard",
            "next-button-text": "提交银行卡信息",
            "disable-next-button": !o.isSubmitable,
          }),
          B: r.o(function (t) {
            return (o.showStatus.selectBankPicker = t);
          }),
          C: r.o(i.selectBank),
          D: r.p({
            value: o.showStatus.selectBankPicker,
            title: "请选择银行名称",
            list: n.supportedBankList,
            alias: { value: "bankAbbr", text: "bankName" },
            "selected-index": [o.pickerSelected],
          }),
          E: r.o(function (t) {
            return (o.showStatus.scanTips = !1);
          }),
          F: r.o(i.confirmOcrExample),
          G: r.p({
            visible: o.showStatus.scanTips,
            title: "银行卡拍摄提示",
            "confirm-button-text": "我知道了，立即拍摄",
          }),
          H: o.isNewUnionpayAuth,
        },
        o.isNewUnionpayAuth
          ? {
              I: r.o(function (t) {
                return (o.showStatus.bankAuthPopup = t);
              }),
              J: r.o(o.onCommitSuccess),
              K: r.o(o.onBankAuthError),
              L: r.p({
                value: o.showStatus.bankAuthPopup,
                "apply-info-tel": o.applyInfo.tel,
                "card-num": o.formData.cardNo,
                "bank-code": o.formData.bankCode,
                "unionpay-bankcard-protocol": o.unionpayBankcardProtocol,
                "auth-scene": o.authScene,
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-09d06219"],
]);
wx.createComponent(w);
