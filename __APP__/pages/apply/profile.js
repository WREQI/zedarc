require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../@babel/runtime/helpers/asyncToGenerator");
require("../../app.js");
var o = require("../../common/vendor.js");
require("../../service/sdk/lib/api.js");
var n = require("../../service/sdk/platform/mp-weixin.js"),
  i = require("../../model/apply/useApply.js"),
  s = require("../../cgi/apply.js"),
  a = require("../../model/apply/profile/helper.js");
require("../../service/broker.js");
var c = require("../../model/apply/profile/declare.js"),
  l = require("../../model/apply/profile/utils/index.js"),
  d = require("../../model/apply/profile/utils/address.js"),
  u = require("../../bizs/apply/SignProtocols/useSignProtocols.js"),
  f = require("../../service/aegis/platform/not-wujie.js"),
  p = require("../../common/components/Dialog/index.js"),
  m = require("../../model/apply/usePreReview.js"),
  h = require("../../stores/apply/useProfile.js"),
  y = require("../../stores/apply/useDigitalHuman.js"),
  g = require("./composables/useDigitalHuman.js"),
  k = require("../../mixin/platforms/index.js"),
  b = require("../../config/broker/11100/index.js"),
  S = {
    mixins: [k.pluginMixins],
    components: {
      ProfileChangeMobile: function () {
        return "../../bizs/apply/profile/ProfileChangeMobile.js";
      },
      ProfileText: function () {
        return "../../bizs/apply/profile/ProfileText.js";
      },
      ProfileRadio: function () {
        return "../../bizs/apply/profile/ProfileRadio.js";
      },
      ProfileSelect: function () {
        return "../../bizs/apply/profile/ProfileSelect.js";
      },
      ProfileCheck: function () {
        return "../../bizs/apply/profile/ProfileCheck.js";
      },
      ProfileAddress: function () {
        return "../../bizs/apply/profile/ProfileAddress.js";
      },
      FootPrint: function () {
        return "../../bizs/apply/FootPrint.js";
      },
      SignProtocol: function () {
        return "../../bizs/apply/SignProtocols/index.js";
      },
      StCellGroup: function () {
        return "../../common/components/CellGroup/index.js";
      },
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
      StCell: function () {
        return "../../common/components/Cell/index.js";
      },
      ProgressBar: function () {
        return "../../bizs/apply/ProgressBar.js";
      },
      StepButtons: function () {
        return "./components/StepButtons/StepButtons.js";
      },
      DigitalHuman: function () {
        return "./components/DigitalHuman/index.js";
      },
      PreReviewModifyCard: function () {
        return "./components/PreReviewModifyCard/PreReviewModifyCard.js";
      },
    },
    provide: function () {
      return { onPageInit: this.onPageInit };
    },
    setup: function () {
      var e = o.getCurrentInstance().proxy,
        n = h.useProfileStore(),
        s = o.storeToRefs(n),
        a = s.formList,
        c = s.dictsList,
        l = n.setFormList,
        f = n.setFormData,
        p = n.setDictsList,
        k = n.updateData,
        b = n.formData,
        S = i.useApply(),
        v = S.applyInfo,
        _ = S.setLocalApplyInfo,
        x = S.isRecoverMode,
        D = S.commitApplyData,
        A = S.useTelAndIdFirstMode,
        I = S.curStepInfo,
        C = S.curStepConf,
        P = S.navigateNextStep,
        w = S.nextStepInfo,
        L = S.abtApplyFlexible,
        M = S.isPreReviewAbt,
        R = m.usePreReview(),
        T = R.isModifyMode,
        j = R.goNextModifyStep,
        E = R.profileModifyFieldKeys,
        q = o.storeToRefs(y.useDigitalHuman()).isSupportDigitalHuman,
        O = y.useDigitalHuman().routeToVideoIdMap,
        F = g.useDigitalHuman(),
        B = F.digitalHumanRef,
        N = F.videoId,
        $ = o.ref(!1);
      o.watch(
        function () {
          return v.value;
        },
        r(
          t().mark(function r() {
            var o,
              n,
              i,
              s,
              a,
              c = arguments;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((o = c.length > 0 && void 0 !== c[0] ? c[0] : {}),
                        (n = !1),
                        !o.cred_address)
                      ) {
                        t.next = 17;
                        break;
                      }
                      return (
                        (t.prev = 3),
                        (t.next = 6),
                        d.addressUtil.splitAddress(o.cred_address, {
                          ignoreFail: !0,
                        })
                      );
                    case 6:
                      return (
                        (i = t.sent),
                        (s = i[3] || ""),
                        (t.next = 10),
                        d.addressUtil.getSelected(i, { ignoreFail: !0 })
                      );
                    case 10:
                      (a = t.sent),
                        ((!a.codes.some(function (e) {
                          return !e;
                        }) &&
                          s) ||
                          e.curStepConf.ignoreSplitFailure) &&
                          (n = !0),
                        (t.next = 17);
                      break;
                    case 15:
                      (t.prev = 15), (t.t0 = t.catch(3));
                    case 17:
                      $.value = n;
                    case 18:
                    case "end":
                      return t.stop();
                  }
              },
              r,
              null,
              [[3, 15]]
            );
          })
        )
      ),
        o.watch(b, function (e) {
          var t;
          if (!A.value) {
            var r = a.value.filter(function (e) {
              return "" === e.content;
            });
            1 === r.length &&
              "tel" === (null == (t = r[0]) ? void 0 : t.key) &&
              (N.value = "3-2");
          }
        });
      var z = o.ref(!1),
        H = o.ref(!0),
        U = o.ref(!1),
        K = C.protocol || {},
        Y = u.useSignProtocols(v, K),
        V = Y.protocolConfigObj,
        G = Y.genMergingList,
        W = function (e) {
          var t = E.value;
          return M.value && T.value && t
            ? e.filter(function (e) {
                return t.has(e.key);
              })
            : e;
        },
        J = o.computed(function () {
          return W(
            a.value.filter(function (e) {
              return !1 !== e.required;
            })
          );
        }),
        Q = o.computed(function () {
          return W(
            a.value.filter(function (e) {
              return !1 === e.required;
            })
          );
        });
      return {
        applyInfo: v,
        setLocalApplyInfo: _,
        isRecoverMode: x,
        curStepInfo: I,
        curStepConf: C,
        navigateNextStep: P,
        nextStepInfo: w,
        commitApplyData: D,
        isPreReviewAbt: M,
        isModifyMode: T,
        goNextModifyStep: j,
        isCheckStatus: z,
        formData: b,
        isOcrAddrEnable: $,
        isProtocolCheck: H,
        isClickMailAddressSame: U,
        profileProtocolConfig: V,
        genMergingList: G,
        formList: a,
        dictsList: c,
        setFormList: l,
        setFormData: f,
        updateData: k,
        setDictsList: p,
        useTelAndIdFirstMode: A,
        abtApplyFlexible: L,
        isSupportDigitalHuman: q,
        routeToVideoIdMap: O,
        videoId: N,
        digitalHumanRef: B,
        requiredList: J,
        optionalList: Q,
      };
    },
    data: function () {
      return {
        isInit: !0,
        isPending: !1,
        itemKey: "",
        selectKeysData: ["edu", "job", "job_title_enum", "year_income"],
        showStatus: {
          radioActionSheet: !1,
          multiRadioActionSheet: !1,
          textActionSheet: !1,
          changeMobileActionSheet: !1,
          checkActionSheet: !1,
          addressActionSheet: !1,
        },
        showExplainDialog: !1,
        isRemoteOpen: !1,
        confirmRemoteOpen: !1,
        showConfirmDialog: !1,
      };
    },
    computed: {
      captchaLen: function () {
        return b.brokerConfig.apply.captchaLen;
      },
      autoSetMailAddressSame: function () {
        return (
          this.curStepConf.autoSetMailAddressSame || this.isClickMailAddressSame
        );
      },
      isNextButtonDisabled: function () {
        return (
          "1" === this.formData.natural_person_flag ||
          "1" === this.formData.past_transaction
        );
      },
    },
    methods: {
      onPageInit: function () {
        var e = this;
        return r(
          t().mark(function r() {
            var n, i;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e.videoId = e.routeToVideoIdMap.ApplyProfile),
                        (e.isCheckStatus = e.isRecoverMode),
                        (e.isInit = !0),
                        (t.prev = 1),
                        e.genMergingList(),
                        (n = new a.ProfileHelper(s.applyCgi)),
                        e.useTelAndIdFirstMode && (e.curStepConf.list.tel = !1),
                        (t.next = 7),
                        n.getItemList({
                          listCfg: e.curStepConf.list,
                          applyInfo: e.applyInfo,
                          isRecoverMode: e.isRecoverMode,
                        })
                      );
                    case 7:
                      if (
                        ((i = t.sent),
                        e.setFormList(i.formList),
                        e.setDictsList(i.dictsList),
                        e.curStepConf.optional &&
                          (e.selectKeysData = e.selectKeysData.filter(function (
                            t
                          ) {
                            return !e.curStepConf.optional.includes(t);
                          })),
                        !o.isEmpty(e.applyInfo.cred_name) &&
                          !o.isEmpty(e.applyInfo.cred_id))
                      ) {
                        t.next = 10;
                        break;
                      }
                      throw (
                        (f.aegisReporter.reportEvent(
                          "MONITOR-APPLY-PROFILE-NAMEID-FAIL"
                        ),
                        { retmsg: "姓名和身份证号码数据有误，请重新填写" })
                      );
                    case 10:
                      if (
                        (e.setDefaultData(),
                        e.setFormData(e.applyInfo),
                        e.formData.mail_address || !e.applyInfo.cred_address)
                      ) {
                        t.next = 19;
                        break;
                      }
                      return (
                        (t.next = 13),
                        e.setAddressDetailInfo(e.applyInfo.cred_address)
                      );
                    case 13:
                      if (((t.t0 = t.sent), !t.t0)) {
                        t.next = 16;
                        break;
                      }
                      t.t0 = e.curStepConf.autoFillMailAddress;
                    case 16:
                      if (((t.t1 = t.t0), !t.t1)) {
                        t.next = 19;
                        break;
                      }
                      e.formData.mail_address = e.applyInfo.cred_address;
                    case 19:
                      (e.formData.verify_tel = e.formData.tel),
                        "0" === e.applyInfo.is_verify_tel &&
                          (e.formData.tel = ""),
                        e.setData(),
                        (t.next = 25);
                      break;
                    case 22:
                      (t.prev = 22),
                        (t.t2 = t.catch(1)),
                        p.Dialog({
                          message: t.t2.retmsg,
                          onConfirm: function () {
                            return e.$router.back();
                          },
                        }),
                        f.aegisReporter.reportEvent(
                          "MONITOR-APPLY-PROFILE-INIT-FAIL",
                          { ext2: JSON.stringify(t.t2) }
                        );
                    case 25:
                      return (
                        (t.prev = 25),
                        e.$nextTick(function () {
                          e.isInit = !1;
                        }),
                        t.finish(25)
                      );
                    case 28:
                    case "end":
                      return t.stop();
                  }
              },
              r,
              null,
              [[1, 22, 25, 28]]
            );
          })
        )();
      },
      confirmDialog: function () {
        var e = this;
        return r(
          t().mark(function r() {
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e.showConfirmDialog = !1),
                        (t.prev = 1),
                        (t.next = 4),
                        e.sendReq()
                      );
                    case 4:
                      t.next = 8;
                      break;
                    case 6:
                      (t.prev = 6), (t.t0 = t.catch(1));
                    case 8:
                    case "end":
                      return t.stop();
                  }
              },
              r,
              null,
              [[1, 6]]
            );
          })
        )();
      },
      cancelDialog: function () {
        this.showConfirmDialog = !1;
      },
      setDefaultData: function () {
        var e, t;
        (this.formData.ctrl = "0"),
          (this.formData.benifit = "0"),
          (this.formData.tax = "0"),
          (this.formData.past_transaction_compliance = "0"),
          (null == (t = null == (e = this.curStepConf) ? void 0 : e.list)
            ? void 0
            : t.credit_record) &&
            ((this.formData.credit_record = "8"),
            (this.formData.credit_record = "07")),
          this.applyInfo.cred_id &&
            ((this.formData.age = l.ageUtil.getAge(this.applyInfo.cred_id)),
            (this.formData.sex = l.sexUtil.getSex(this.applyInfo.cred_id)));
        var r = (this.$route.query || {}).zipCode,
          o = void 0 === r ? "" : r;
        o && (this.formData.zip_code = o);
        var n = a.handleSetBrokerDefaultData({
          formData: this.formData,
          dictsList: this.dictsList,
          applyInfo: this.applyInfo,
        });
        this.setData(n);
      },
      setData: function (e) {
        this.updateData({ data: e, isInit: this.isInit });
      },
      setItem: function (e) {
        var t = this;
        Object.keys(e).forEach(function (r) {
          t.formList.get(r) &&
            Object.keys(e[r]).forEach(function (o) {
              var n = t.formList.getIdx(r);
              t.formList[n][o] = e[r][o];
            });
        });
      },
      showAction: function (e) {
        var t = this,
          r = this.formList.find(function (t) {
            return t.key === e;
          });
        switch (
          ((this.itemKey = e),
          Object.keys(this.showStatus).forEach(function (e) {
            t.showStatus[e] = !1;
          }),
          r.type)
        ) {
          case c.INPUT_TYPE.MULTI_RADIO:
            this.$refs.multiRadioActionSheet,
              (this.showStatus.multiRadioActionSheet = !0);
            break;
          case c.INPUT_TYPE.RADIO:
            this.$refs.radioActionSheet,
              (this.showStatus.radioActionSheet = !0);
            break;
          case c.INPUT_TYPE.MOBILE:
            this.$refs.changeMobileActionSheet,
              (this.showStatus.changeMobileActionSheet = !0);
            break;
          case c.INPUT_TYPE.CHECK:
            this.$refs.checkActionSheet,
              (this.showStatus.checkActionSheet = !0);
            break;
          case c.INPUT_TYPE.ADDR:
            this.$refs.addressActionSheet,
              (this.showStatus.addressActionSheet = !0);
            break;
          case c.INPUT_TYPE.TEXT:
          default:
            this.$refs.textActionSheet, (this.showStatus.textActionSheet = !0);
        }
        r && r.stat && this.$stat.click(r.stat);
      },
      onDataChange: function (e, t) {
        this.setData(e), t && this.setLocalApplyInfo(e);
      },
      useMailAddress: function (e) {
        var t = this;
        e.content === this.formData.mail_address
          ? (this.$stat.click(
              "trade.apply.personaldate.not_quickly_input_house_address"
            ),
            this.formList.forEach(function (r, o) {
              r.key === e.key &&
                ((e.content = ""),
                (t.formData.house_address = ""),
                (t.formList[o] = e));
            }))
          : (this.$stat.click(
              "trade.apply.personaldate.quickly_input_house_address"
            ),
            this.formList.forEach(function (r, o) {
              r.key === e.key &&
                ((e.content = t.formData.mail_address),
                (t.formData.house_address = t.formData.mail_address),
                (t.formList[o] = e));
            }));
      },
      useIDcardAddress: function (n) {
        var i = this;
        return r(
          t().mark(function r() {
            var s, a;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      n.content !== i.applyInfo.cred_address ||
                      !i.autoSetMailAddressSame
                    ) {
                      t.next = 4;
                      break;
                    }
                    i.$stat.click(
                      "trade.apply.personaldate.not_quickly_input_address"
                    ),
                      i.formList.forEach(function (e, t) {
                        e.key === n.key &&
                          ((n.content = ""),
                          (i.formData.mail_address = ""),
                          (i.formList[t] = n));
                      }),
                      (t.next = 13);
                    break;
                  case 4:
                    if (
                      (i.$stat.click(
                        "trade.apply.personaldate.quickly_input_address"
                      ),
                      !i.curStepConf.useIDAddressSecondConfirm)
                    ) {
                      t.next = 12;
                      break;
                    }
                    return (t.next = 7), o.to(i.confirmUseIDcardAddress());
                  case 7:
                    if (((s = t.sent), (a = e(s, 1)), !a[0])) {
                      t.next = 12;
                      break;
                    }
                    return t.abrupt("return");
                  case 12:
                    i.formList.forEach(function (e, t) {
                      e.key === n.key &&
                        ((n.content = i.applyInfo.cred_address),
                        (i.formData.mail_address = i.applyInfo.cred_address),
                        (i.formList[t] = n));
                    });
                  case 13:
                    (i.isClickMailAddressSame = !0),
                      i.setAddressDetailInfo(n.content);
                  case 14:
                  case "end":
                    return t.stop();
                }
            }, r);
          })
        )();
      },
      confirmUseIDcardAddress: function () {
        return new Promise(function (e, t) {
          p.Dialog({
            message: "联系地址与证件地址是否一致",
            confirmButtonText: "确认",
            cancelButtonText: "重新输入",
            showCancelButton: !0,
            onConfirm: e,
            onCancel: t,
          });
        });
      },
      setAddressDetailInfo: function (e) {
        var o = this;
        return r(
          t().mark(function r() {
            var n, i, s, a;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (e) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        (o.setData({
                          province_code: "",
                          city_code: "",
                          area_code: "",
                          detailed_address: "",
                        }),
                        !0)
                      );
                    case 2:
                      return (
                        (t.prev = 2),
                        (t.next = 5),
                        d.addressUtil.splitAddress(e, { ignoreFail: !0 })
                      );
                    case 5:
                      return (
                        (n = t.sent),
                        (i = n[3] || ""),
                        (t.next = 9),
                        d.addressUtil.getSelected(n, { ignoreFail: !0 })
                      );
                    case 9:
                      return (
                        (s = t.sent),
                        (a = s.codes),
                        t.abrupt(
                          "return",
                          (a.some(function (e) {
                            return !e;
                          }) &&
                            o.$stat.click(
                              "trade.apply.personaldate.split_fail_from_cred_address"
                            ),
                          !!(
                            o.curStepConf.ignoreSplitFailure ||
                            (!a.some(function (e) {
                              return !e;
                            }) &&
                              i)
                          ) &&
                            (o.setData({
                              province_code: a[0],
                              city_code: a[1],
                              area_code: a[2],
                              detailed_address: i,
                            }),
                            !0))
                        )
                      );
                    case 14:
                      return (
                        (t.prev = 14),
                        (t.t0 = t.catch(2)),
                        t.abrupt("return", !1)
                      );
                    case 17:
                    case "end":
                      return t.stop();
                  }
              },
              r,
              null,
              [[2, 14]]
            );
          })
        )();
      },
      handlerProtocolCheck: function (e) {
        this.isProtocolCheck = e;
      },
      submit: function () {
        var e = this;
        return r(
          t().mark(function r() {
            var n, i, s, c, l, d, u;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((n = e), !e.isPending)) {
                        t.next = 3;
                        break;
                      }
                      return t.abrupt("return");
                    case 3:
                      if (
                        (e.$stat.click("trade.apply.personaldate.next"),
                        (e.isPending = !0),
                        (e.isCheckStatus = !0),
                        !e.profileProtocolConfig.signText || e.isProtocolCheck)
                      ) {
                        t.next = 5;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        (p.Dialog({
                          message: ""
                            .concat(e.profileProtocolConfig.signText)
                            .concat(
                              e.profileProtocolConfig.allProtocolName || ""
                            ),
                          confirmButtonText: "确认",
                          cancelButtonText: "取消",
                          showCancelButton: !0,
                          onConfirm: function () {
                            (n.isProtocolCheck = !0), n.submit();
                          },
                        }),
                        void (e.isPending = !1))
                      );
                    case 5:
                      if (
                        ((i = e.curStepConf.optional || []),
                        !(s = e.formList.find(function (e) {
                          return !e.hidden && !e.content && !i.includes(e.key);
                        })))
                      ) {
                        t.next = 8;
                        break;
                      }
                      return t.abrupt(
                        "return",
                        (p.Dialog({
                          message: s.errMsg,
                          confirmButtonText: "确定",
                        }),
                        void (e.isPending = !1))
                      );
                    case 8:
                      if (
                        ((c = a.checkRule(e.formData, e.formList)),
                        (l = c.result),
                        (d = c.data),
                        (u = c.item),
                        !l)
                      ) {
                        t.next = 39;
                        break;
                      }
                      return (
                        (t.prev = 10),
                        (t.next = 13),
                        a.beforeSubmit({
                          formData: e.formData,
                          formList: e.formList,
                          applyInfo: e.applyInfo,
                          extraInfo: {
                            abtApplyFlexible: e.abtApplyFlexible,
                            isPreReviewAbt: e.isPreReviewAbt,
                          },
                        })
                      );
                    case 13:
                      if (t.sent) {
                        t.next = 15;
                        break;
                      }
                      return t.abrupt("return", void (e.isPending = !1));
                    case 15:
                      t.next = 20;
                      break;
                    case 17:
                      return (
                        (t.prev = 17),
                        (t.t0 = t.catch(10)),
                        t.abrupt("return", void (e.isPending = !1))
                      );
                    case 20:
                      return (t.prev = 20), (t.next = 23), e.checkRemoteOpen();
                    case 23:
                      if (e.confirmRemoteOpen || !e.isRemoteOpen) {
                        t.next = 27;
                        break;
                      }
                      p.Dialog({
                        message:
                          "您填写的联系地址与移动电话归属地非同一地区，请进行确认",
                        showCancelButton: !0,
                        cancelButtonText: "重新填写",
                        confirmButtonText: "我已确认",
                        onConfirm: function () {
                          (e.confirmRemoteOpen = !0), e.submit();
                        },
                      }),
                        (t.next = 33);
                      break;
                    case 27:
                      if (!e.curStepConf.showConfirmDialog) {
                        t.next = 31;
                        break;
                      }
                      (e.confirmRemoteOpen = !1),
                        (e.showConfirmDialog = !0),
                        (t.next = 33);
                      break;
                    case 31:
                      return (t.next = 33), e.sendReq();
                    case 33:
                      t.next = 37;
                      break;
                    case 35:
                      (t.prev = 35), (t.t1 = t.catch(20));
                    case 37:
                      t.next = 40;
                      break;
                    case 39:
                      o.isEmpty(d) || e.setData(d),
                        o.isEmpty(u) || e.setItem(u),
                        e.$nextTick(function () {
                          o.index.showToast({
                            title: "内容填写存在冲突，请修改",
                            icon: "none",
                          });
                        });
                    case 40:
                      e.isPending = !1;
                    case 41:
                    case "end":
                      return t.stop();
                  }
              },
              r,
              null,
              [
                [10, 17],
                [20, 35],
              ]
            );
          })
        )();
      },
      sendReq: function () {
        var e = this;
        return r(
          t().mark(function i() {
            var a, c, l, d, u;
            return t().wrap(
              function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      return (
                        (e.confirmRemoteOpen = !1),
                        e.$stat.click(
                          "trade.apply.personaldate.job.".concat(e.formData.job)
                        ),
                        (a = {}),
                        (c = [
                          "age",
                          "sex",
                          "tel",
                          "ctrl",
                          "benifit",
                          "tax",
                          "verify_tel",
                          "natural_person_flag",
                          "past_transaction",
                        ]),
                        Object.keys(e.formData).forEach(function (t) {
                          c.includes(t) || (a[t] = e.formData[t]);
                        }),
                        (a.tel_address_check = e.isRemoteOpen ? "1" : "0"),
                        (i.prev = 3),
                        (i.next = 6),
                        e.commitApplyData(s.ACTION.PROFILE_SUBMIT, a, {
                          encodeFields: [
                            "mail_address",
                            "house_address",
                            "detailed_address",
                            "cred_id",
                            "cred_name",
                          ],
                        })
                      );
                    case 6:
                      (l = i.sent),
                        e.setLocalApplyInfo(a),
                        "1" === l.is_exist
                          ? p.Dialog({
                              message: "你已有".concat(
                                b.brokerConfig.base.name,
                                "账户，绑定即可使用"
                              ),
                              confirmButtonText: "立即绑定",
                              cancelButtonText: "取消",
                              showCancelButton: !0,
                              onConfirm: (function () {
                                var i = r(
                                  t().mark(function r() {
                                    var i;
                                    return t().wrap(function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            return (
                                              (i =
                                                b.brokerConfig.apply
                                                  .applyRetainInfos),
                                              (t.next = 3),
                                              n.sdk
                                                .applyAccountRetain(i, !0)
                                                .catch(o.noop)
                                            );
                                          case 3:
                                            e.$router.push({
                                              name: "AccountBind",
                                              query: { accounts: l.accounts },
                                            });
                                          case 4:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, r);
                                  })
                                );
                                return function () {
                                  return i.apply(this, arguments);
                                };
                              })(),
                            })
                          : (e.isRecoverMode ||
                              e.$stat.click(
                                "trade.apply.personaldate.pass.first"
                              ),
                            e.isModifyMode
                              ? e.goNextModifyStep()
                              : e.navigateNextStep()),
                        (i.next = 14);
                      break;
                    case 10:
                      (i.prev = 10),
                        (i.t0 = i.catch(3)),
                        (d = i.t0.retcode),
                        (u = i.t0.retmsg),
                        p.Dialog({
                          message: u,
                          onConfirm: function () {
                            51079718 === d && e.$router.back();
                          },
                        });
                    case 14:
                    case "end":
                      return i.stop();
                  }
              },
              i,
              null,
              [[3, 10]]
            );
          })
        )();
      },
      linkage: function (e, t) {
        var r = t.newVal,
          n = t.oldVal,
          i = l.ageUtil.getAge(this.applyInfo.cred_id),
          s = l.sexUtil.getSex(this.applyInfo.cred_id),
          c = a.linkageRule({
            modifiedKey: e,
            modifiedVal: { oldVal: n, newVal: r },
            isInit: this.isInit,
            formList: this.formList,
            dictsList: this.dictsList,
            personInfos: { age: i, sex: s },
          }),
          d = c.data,
          u = c.item;
        o.isEmpty(u) || this.setItem(u), o.isEmpty(d) || this.setData(d);
      },
      checkRemoteOpen: function () {
        var e = this;
        return r(
          t().mark(function r() {
            var o;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (e.confirmRemoteOpen) {
                        t.next = 14;
                        break;
                      }
                      if (!e.curStepConf.needCheckRemoteOpen) {
                        t.next = 13;
                        break;
                      }
                      return (
                        (t.prev = 2),
                        (t.next = 5),
                        e.commitApplyData(s.ACTION.QRY_TEL_ADDRESS_CHECK, {
                          tel: e.formData.tel,
                          mail_address: e.formData.mail_address,
                        })
                      );
                    case 5:
                      if (((o = t.sent), "1" !== o.check_status)) {
                        t.next = 9;
                        break;
                      }
                      return t.abrupt("return", void (e.isRemoteOpen = !0));
                    case 9:
                      t.next = 13;
                      break;
                    case 11:
                      (t.prev = 11), (t.t0 = t.catch(2));
                    case 13:
                      e.isRemoteOpen = !1;
                    case 14:
                    case "end":
                      return t.stop();
                  }
              },
              r,
              null,
              [[2, 11]]
            );
          })
        )();
      },
    },
  };
Array ||
  (
    o.resolveComponent("digital-human") +
    o.resolveComponent("progress-bar") +
    o.resolveComponent("pre-review-modify-card") +
    o.resolveComponent("st-cell") +
    o.resolveComponent("st-cell-group") +
    o.resolveComponent("SignProtocol") +
    o.resolveComponent("FootPrint") +
    o.resolveComponent("StepButtons") +
    o.resolveComponent("ProfileRadio") +
    o.resolveComponent("ProfileSelect") +
    o.resolveComponent("ProfileText") +
    o.resolveComponent("ProfileChangeMobile") +
    o.resolveComponent("ProfileCheck") +
    o.resolveComponent("ProfileAddress") +
    o.resolveComponent("mp-dialog") +
    o.resolveComponent("ApplyWrap") +
    o.resolveComponent("GlobalWrap")
  )(),
  Math ||
    (
      function () {
        return "../../components/ApplyWrap/ApplyWrap.js";
      } +
      function () {
        return "../../components/GlobalWrap/GlobalWrap.js";
      }
    )();
var v = o._export_sfc(S, [
  [
    "render",
    function (e, t, r, n, i, s) {
      return o.e(
        { a: e.rootFontSize, b: n.isSupportDigitalHuman },
        n.isSupportDigitalHuman
          ? {
              c: o.sr("digitalHumanRef", "43f83ff6-2,43f83ff6-1"),
              d: o.p({ videoId: n.videoId }),
            }
          : {},
        {
          e: o.p({ "step-name": n.curStepInfo.name }),
          f: n.isPreReviewAbt && n.isModifyMode,
        },
        n.isPreReviewAbt && n.isModifyMode
          ? { g: o.p({ "step-key": "profile" }) }
          : {},
        {
          h: o.f(n.requiredList, function (e, t, r) {
            return o.e(
              {
                a: o.t(e.content || e.placeholder),
                b: o.n(e.disabled || !e.content ? "disabledColor" : ""),
                c: o.o(function (t) {
                  return !e.disabled && s.showAction(e.key);
                }, e.key),
                d:
                  t === n.formList.length - 1 ||
                  "mail_address" === e.key ||
                  "house_address" === e.key
                    ? 1
                    : "",
                e: n.isCheckStatus && !e.content ? 1 : "",
                f: "43f83ff6-6-" + r + ",43f83ff6-5",
                g: o.p({
                  border: "mail_address" !== e.key && "house_address" !== e.key,
                  title: e.label,
                  label: e.sub_label,
                  disabled: e.disabled,
                  "arrow-direction": e.disabled ? "" : "right",
                }),
                h: "mail_address" === e.key && n.isOcrAddrEnable,
              },
              "mail_address" === e.key && n.isOcrAddrEnable
                ? {
                    i: o.n(
                      n.applyInfo.cred_address &&
                        e.content === n.applyInfo.cred_address &&
                        s.autoSetMailAddressSame
                        ? "icon-checked"
                        : "icon-check-box"
                    ),
                    j:
                      n.applyInfo.cred_address &&
                      e.content === n.applyInfo.cred_address &&
                      s.autoSetMailAddressSame
                        ? 1
                        : "",
                    k: o.o(function (t) {
                      return (
                        !!n.applyInfo.cred_address && s.useIDcardAddress(e)
                      );
                    }, e.key),
                  }
                : {},
              { l: "house_address" === e.key && n.formData.mail_address },
              "house_address" === e.key && n.formData.mail_address
                ? {
                    m: o.n(
                      n.applyInfo.cred_address &&
                        e.content === n.applyInfo.cred_address &&
                        s.autoSetMailAddressSame
                        ? "icon-checked"
                        : "icon-check-box"
                    ),
                    n: e.content === n.formData.mail_address ? 1 : "",
                    o: o.o(function (t) {
                      return s.useMailAddress(e);
                    }, e.key),
                  }
                : {},
              {
                p:
                  t < n.formList.length - 1 &&
                  ("mail_address" === e.key || "house_address" === e.key),
              },
              (t < n.formList.length - 1 && ("mail_address" === e.key || e.key),
              {}),
              { q: e.warn },
              e.warn ? { r: o.t(e.warn) } : {},
              { s: !e.hidden, t: e.key }
            );
          }),
          i: n.optionalList.length > 0,
        },
        (n.optionalList.length, {}),
        {
          j: o.f(n.optionalList, function (e, t, r) {
            return o.e(
              {
                a: o.t(e.content || e.placeholder),
                b: o.n(e.disabled || !e.content ? "disabledColor" : ""),
                c: o.o(function (t) {
                  return !e.disabled && s.showAction(e.key);
                }, e.key),
                d:
                  t === n.formList.length - 1 ||
                  "mail_address" === e.key ||
                  "house_address" === e.key
                    ? 1
                    : "",
                e: n.isCheckStatus && !e.content ? 1 : "",
                f: "43f83ff6-7-" + r + ",43f83ff6-5",
                g: o.p({
                  border: "mail_address" !== e.key && "house_address" !== e.key,
                  title: e.label,
                  label: e.sub_label,
                  disabled: e.disabled,
                  "arrow-direction": e.disabled ? "" : "right",
                }),
                h: "mail_address" === e.key && n.isOcrAddrEnable,
              },
              "mail_address" === e.key && n.isOcrAddrEnable
                ? {
                    i: o.n(
                      n.applyInfo.cred_address &&
                        e.content === n.applyInfo.cred_address &&
                        s.autoSetMailAddressSame
                        ? "icon-checked"
                        : "icon-check-box"
                    ),
                    j:
                      n.applyInfo.cred_address &&
                      e.content === n.applyInfo.cred_address &&
                      s.autoSetMailAddressSame
                        ? 1
                        : "",
                    k: o.o(function (t) {
                      return (
                        !!n.applyInfo.cred_address && s.useIDcardAddress(e)
                      );
                    }, e.key),
                  }
                : {},
              { l: "house_address" === e.key && n.formData.mail_address },
              "house_address" === e.key && n.formData.mail_address
                ? {
                    m: o.n(
                      n.applyInfo.cred_address &&
                        e.content === n.applyInfo.cred_address &&
                        s.autoSetMailAddressSame
                        ? "icon-checked"
                        : "icon-check-box"
                    ),
                    n: e.content === n.formData.mail_address ? 1 : "",
                    o: o.o(function (t) {
                      return s.useMailAddress(e);
                    }, e.key),
                  }
                : {},
              {
                p:
                  t < n.formList.length - 1 &&
                  ("mail_address" === e.key || "house_address" === e.key),
              },
              (t < n.formList.length - 1 && ("mail_address" === e.key || e.key),
              {}),
              { q: e.warn },
              e.warn ? { r: o.t(e.warn) } : {},
              { s: !e.hidden, t: e.key }
            );
          }),
          k: n.formList.length > 0 && n.profileProtocolConfig.signText,
        },
        n.formList.length > 0 && n.profileProtocolConfig.signText
          ? {
              l: o.sr("SignProtocol", "43f83ff6-8,43f83ff6-1"),
              m: o.o(s.handlerProtocolCheck),
              n: o.p({
                "protocol-config": n.profileProtocolConfig,
                "is-protocol-check": n.isProtocolCheck,
              }),
            }
          : {},
        {
          o: o.n(n.isSupportDigitalHuman ? "section-content" : ""),
          p: n.formList.length > 0,
        },
        n.formList.length > 0
          ? {
              q: o.o(s.submit),
              r: o.p({
                stat: "profile",
                fixed: !0,
                "disable-next-button": s.isNextButtonDisabled,
              }),
            }
          : {},
        {
          s: o.sr("radioActionSheet", "43f83ff6-11,43f83ff6-1"),
          t: o.o(function (e) {
            return (i.showStatus.radioActionSheet = !1);
          }),
          v: o.p({
            value: i.showStatus.radioActionSheet,
            biz: "apply",
            "select-key": i.itemKey,
          }),
          w: i.showStatus.multiRadioActionSheet,
        },
        i.showStatus.multiRadioActionSheet
          ? {
              x: o.sr("multiRadioActionSheet", "43f83ff6-12,43f83ff6-1"),
              y: o.o(function (e) {
                return (i.showStatus.multiRadioActionSheet = !1);
              }),
              z: o.p({
                "select-key": i.itemKey,
                keys: i.selectKeysData,
                value: i.showStatus.multiRadioActionSheet,
                biz: "apply",
              }),
            }
          : {},
        {
          A: o.sr("textActionSheet", "43f83ff6-13,43f83ff6-1"),
          B: o.o(function (e) {
            return (i.showStatus.textActionSheet = !1);
          }),
          C: o.p({
            value: i.showStatus.textActionSheet,
            "select-key": i.itemKey,
            biz: "apply",
          }),
          D: o.sr("changeMobileActionSheet", "43f83ff6-14,43f83ff6-1"),
          E: o.o(function (e) {
            return (i.showStatus.changeMobileActionSheet = !1);
          }),
          F: o.p({
            value: i.showStatus.changeMobileActionSheet,
            selectKey: i.itemKey,
            biz: "apply",
            captchaLen: s.captchaLen,
          }),
          G: o.sr("checkActionSheet", "43f83ff6-15,43f83ff6-1"),
          H: o.o(function (e) {
            return (i.showStatus.checkActionSheet = !1);
          }),
          I: o.p({
            value: i.showStatus.checkActionSheet,
            "select-key": i.itemKey,
            biz: "apply",
          }),
          J: o.sr("addressActionSheet", "43f83ff6-16,43f83ff6-1"),
          K: o.o(function (e) {
            return (i.showStatus.addressActionSheet = !1);
          }),
          L: o.p({
            value: i.showStatus.addressActionSheet,
            "select-key": i.itemKey,
            biz: "apply",
            "ignore-split-failure": n.curStepConf.ignoreSplitFailure,
          }),
          M: o.p({ id: "mp-dialog" }),
          N: o.o(function (e) {
            return (i.showExplainDialog = !1);
          }),
          O: o.p({ visible: i.showExplainDialog }),
          P: o.t(n.formData.mail_address),
          Q: o.o(s.confirmDialog),
          R: o.o(s.cancelDialog),
          S: o.p({
            visible: i.showConfirmDialog,
            "show-cancel-button": !0,
            "cancel-button-text": "返回修改",
            "confirm-button-text": "确认",
          }),
          T: o.sr("#global-wrap", "43f83ff6-0"),
          U: o.p({
            id: "global-wrap",
            filePath: "/apply/profile",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
]);
wx.createPage(v);
