var e = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../@babel/runtime/helpers/defineProperty"),
  n = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var a = require("../../../common/vendor.js"),
  i = require("../../../model/account/usePersonal.js"),
  r = require("../../../common/components/Dialog/index.js"),
  s = require("../../../model/apply/profile/items.js"),
  c = require("../../../stores/user/useUserinfo.js");
require("../../../service/broker.js");
var d = require("../../../model/biz/useIdcardCheck.js"),
  l = require("../../../config/enum/account.js"),
  u = require("../../../stores/hall/useDepartment.js"),
  h = require("../../../config/broker/11100/index.js"),
  m = l.JOB_SPECIAL_NEW,
  g = {
    name: "AccountPersonalBaseInfo",
    components: {
      CardInfo: function () {
        return "./CardInfo.js";
      },
      StCellGroup: function () {
        return "../../../common/components/CellGroup/index.js";
      },
      StCell: function () {
        return "../../../common/components/Cell/index.js";
      },
      MpDialog: function () {
        return "../../../common/components/Dialog/Dialog.js";
      },
      ProfileRadio: function () {
        return "./profile/ProfileRadio.js";
      },
      ProfileText: function () {
        return "./profile/ProfileText.js";
      },
      ProfileAddress: function () {
        return "./profile/ProfileAddress.js";
      },
      DepartmentInfo: function () {
        return "../../../pages/account/components/department/DepartmentInfo.js";
      },
    },
    props: {
      fundaccount: String,
      dealer_name: String,
      dealerbranchname: String,
      profile_name: String,
      credentialid: String,
      degree: String,
      t_card_tailnumber: String,
      t_risk_model: String,
      t_risk_disable: Boolean,
      mobilephone: String,
      job: String,
      posttitle: String,
      postoptions: String,
      postErrMsg: String,
      contactaddr: String,
      contactaddrErrMsg: String,
      companyaddr: String,
      companyErrMsg: String,
      jobErrMsg: String,
      cachedDicts: Object,
      yearIncomeStr: String,
    },
    setup: function (e) {
      var t,
        r = a.getCurrentInstance().proxy,
        s = i.usePersonal(),
        m = s.setDealerUserInfo,
        g = s.itemShowConfig,
        f = c.useUserinfoStore(),
        p = a.storeToRefs(f).userinfo,
        S = f.updateUserInfoValue,
        b = h.brokerConfig.bind.accountCalled || "资金账号",
        C = u.useDepartment().searchDepartment,
        w = d.useIdcardCheck(),
        E = w.isIdcardExpiring,
        v = w.isIdcardExpired,
        _ = a.computed(function () {
          return E.value
            ? "身份证将过期，过期后会影响资金出入"
            : v.value
            ? "身份证已过期，会影响资金出入"
            : "";
        }),
        I = a.computed(function () {
          return p.value.riskflag;
        }),
        D = a.computed(function () {
          return "1" === I.value ? "已过期，会影响交易下单" : e.t_risk_model;
        }),
        A = a.computed(function () {
          return "1" === I.value
            ? "st-cell-value-errmsg"
            : e.t_risk_disable
            ? "cell-value-disable"
            : "";
        }),
        T = a.computed(function () {
          return _.value
            ? "st-cell-value-errmsg"
            : g.value.credentialid.enable
            ? ""
            : "cell-value-disable";
        }),
        j = a.computed(function () {
          return e.postErrMsg
            ? "st-cell-value-errmsg"
            : g.value.posttitle.enable
            ? ""
            : "cell-value-disable";
        }),
        y = a.computed(function () {
          return e.companyErrMsg
            ? "st-cell-value-errmsg"
            : g.value.companyaddr.enable
            ? ""
            : "cell-value-disable";
        }),
        L = a.computed(function () {
          return _.value ? _.value : e.credentialid;
        }),
        P = a.computed(function () {
          return e.postErrMsg ? e.postErrMsg : R.value;
        }),
        R = a.computed(function () {
          if (e.posttitle === l.TITLE_SPECIAL.other)
            return e.postoptions || "无";
          if (e.cachedDicts.duty) {
            var t = e.cachedDicts.duty.find(function (t) {
              return t.id === e.posttitle;
            });
            return t ? t.name : "无";
          }
          return "无";
        }),
        k = a.computed(function () {
          return e.companyErrMsg ? e.companyErrMsg : e.companyaddr;
        }),
        M = !1,
        x = a.reactive({ address: "", phone: "" });
      function Y(e) {
        r.showStatus.departmentInfo = e;
      }
      return {
        setDealerUserInfo: m,
        itemShowConfig: g,
        userinfo: p,
        updateUserInfoValue: S,
        accountName: b,
        idcardErrTip: _,
        credentialidValue: L,
        posttitlestr: R,
        postValue: P,
        computeCompanyaddrClassName: y,
        companyaddrValue: k,
        computePostClassName: j,
        credentialidComputedClassName: T,
        riskValue: D,
        riskComputedClassName: A,
        deptInfo: x,
        onDeptClick:
          ((t = o(
            n().mark(function t() {
              var o, a;
              return n().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!e.dealerbranchname) {
                          t.next = 12;
                          break;
                        }
                        if (M) {
                          t.next = 11;
                          break;
                        }
                        return (
                          (t.prev = 2),
                          (t.next = 5),
                          C(
                            u.SearchType.keyword,
                            { keywords: e.dealerbranchname },
                            { once: !0 }
                          )
                        );
                      case 5:
                        (o = t.sent),
                          (M = !0),
                          o.length > 0 &&
                            ((a = o[0]),
                            (x.address = a.address),
                            (x.phone = a.phone)),
                          (t.next = 11);
                        break;
                      case 9:
                        (t.prev = 9), (t.t0 = t.catch(2));
                      case 11:
                        x.address || x.phone
                          ? Y(!0)
                          : r.handleTo("BizDepartment");
                      case 12:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[2, 9]]
              );
            })
          )),
          function () {
            return t.apply(this, arguments);
          }),
        showDeptInfo: Y,
      };
    },
    data: function () {
      return {
        DEGREES: [],
        selectedDegree: "",
        showStatus: {
          radioDegreeActionSheet: !1,
          radioJobActionSheet: !1,
          radioPostActionSheet: !1,
          textActionSheet: !1,
          addressActionSheet: !1,
          radioYearIncomeActionSheet: !1,
          departmentInfo: !1,
        },
        JOBS: [],
        selectedVocation: "",
        showVocationDialog: !1,
      };
    },
    methods: {
      getBankChangeDesc: function () {
        return h.brokerConfig.trade.bankcardchange || {};
      },
      handleTo: function (e) {
        this.$stat.click("trade.account.".concat(e));
        var t = {};
        if ("BizIdUpdate" === e) t = { name: e };
        else if ("AccountCard" === e && !this.t_card_tailnumber) {
          var n = this.getBankChangeDesc(),
            o = n.key,
            a = n.name;
          o && (t = { name: "VProtocol", query: { key: o, name: a } });
        }
        t.name ||
          (t = {
            name: e,
            query: {
              returl: this.$route.query.returl,
              from: "accountPersonal",
            },
          }),
          this.$router.push(t);
      },
      handleDegreeChange: function () {
        if (
          (this.$stat.click("trade.account.degreechange"),
          (this.DEGREES = (this.cachedDicts && this.cachedDicts.edu) || []),
          0 !== this.DEGREES.length)
        ) {
          var e = "edu",
            n = Object.assign({}, s.originItem.ALL_ITEM_LIST.edu);
          n.data = Object.assign({}, s.originItem.ALL_ITEM_CFG.edu, {
            val: this.DEGREES,
          });
          var o = t({}, e, (this.userinfo && this.userinfo.degree) || "");
          this.$refs.radioDegreeActionSheet.setItem(n, o),
            (this.showStatus.radioDegreeActionSheet = !0);
        }
      },
      handleDegreeSubmit: function (e) {
        var t = e.edu;
        if (((this.selectedDegree = t), this.selectedDegree)) {
          if (this.selectedDegree === this.userinfo.degree)
            return void (this.showDegreeDialog = !1);
          this.requestSetDegreeChange();
        }
      },
      requestSetDegreeChange: function () {
        var e = this;
        return o(
          n().mark(function t() {
            var o;
            return n().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (o = { action: "3", education: e.selectedDegree }),
                        (t.prev = 1),
                        a.index.showLoading({ title: "更新中" }),
                        (t.next = 5),
                        e.setDealerUserInfo(o)
                      );
                    case 5:
                      (e.showDegreeDialog = !1),
                        e.updateUserInfoValue({
                          key: "degree",
                          value: e.selectedDegree,
                        }),
                        e.$emit("submitRes"),
                        (t.next = 13);
                      break;
                    case 10:
                      (t.prev = 10),
                        (t.t0 = t.catch(1)),
                        r.Dialog({ message: t.t0.retmsg });
                    case 13:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[1, 10]]
            );
          })
        )();
      },
      handleAddressChange: function () {
        var e = "mail_address",
          n = Object.assign({}, s.originItem.ALL_ITEM_LIST[e]);
        n.data = Object.assign({}, s.originItem.ALL_ITEM_CFG[e]);
        var o = t({}, e, this.contactaddr.length > 2 ? this.contactaddr : "");
        this.$refs.addressActionSheet.setItem(n, o),
          (this.showStatus.addressActionSheet = !0);
      },
      onContactaddrDataChange: function (e) {
        var t = e.mail_address;
        null === t ||
          t.length < 2 ||
          this.requestSetItemChange(l.DEALER_REQUEST_TYPE.ADDRESS, t);
      },
      handleCompanyChange: function () {
        if ([m.XS, m.WY].includes(this.userinfo.job))
          r.Dialog({ message: "根据所选职业信息自动填充，不可修改" });
        else {
          var e = "company",
            n = Object.assign({}, s.originItem.ALL_ITEM_LIST[e]);
          n.data = Object.assign({}, s.originItem.ALL_ITEM_CFG[e]);
          var o = t({}, e, this.companyaddr.length > 2 ? this.companyaddr : "");
          this.$refs.textActionSheet.setItem(n, o),
            (this.showStatus.textActionSheet = !0);
        }
      },
      onCompanyaddrDataChange: function (e) {
        var t = e.company;
        null === t ||
          t.length < 2 ||
          this.requestSetItemChange(l.DEALER_REQUEST_TYPE.COMPANY, t);
      },
      handlePostChange: function () {
        var e;
        if ([m.XS, m.WY, m.NM].includes(this.userinfo.job))
          r.Dialog({ message: "根据所选职业信息自动填充，不可修改" });
        else {
          var n = (this.cachedDicts && this.cachedDicts.duty) || [];
          if (0 !== n.length) {
            var o = "job_title_enum",
              a = Object.assign({}, s.originItem.ALL_ITEM_LIST[o]);
            (a.data = Object.assign({}, s.originItem.ALL_ITEM_CFG[o], {
              val: n,
            })),
              (a.data.otherId = l.TITLE_SPECIAL.other);
            var i =
              (t((e = {}), o, this.posttitle ? this.posttitle : ""),
              t(
                e,
                "job_title_options",
                this.postoptions ? this.postoptions : ""
              ),
              e);
            this.$refs.radioPostActionSheet.setItem(a, i),
              (this.showStatus.radioPostActionSheet = !0);
          }
        }
      },
      onPostDataChange: function (e) {
        var t = e.job_title_enum,
          n = e.job_title_options || "";
        null !== t &&
          ((t === this.posttitle && n === this.postoptions) ||
            this.requestSetItemChange(l.DEALER_REQUEST_TYPE.POST, {
              title: t,
              title_options: n,
            }));
      },
      handleJobChange: function () {
        this.$stat.click("trade.account.jobchange");
        var e = (this.cachedDicts && this.cachedDicts.job) || [];
        if (0 !== e.length) {
          var n = "job",
            o = Object.assign({}, s.originItem.ALL_ITEM_LIST.job);
          (o.data = Object.assign({}, s.originItem.ALL_ITEM_CFG.job, {
            val: e,
          })),
            o.data.val.get ||
              Object.defineProperty(o.data.val, "get", {
                enumerable: !1,
                value: function (e) {
                  return this.find(function (t) {
                    return t.id === e;
                  });
                },
              });
          var a = t({}, n, (this.userinfo && this.userinfo.job) || "");
          this.$refs.radioJobActionSheet.setItem(o, a),
            (this.showStatus.radioJobActionSheet = !0);
        }
      },
      handleVocationSubmit: function (e) {
        var n = e.job;
        if (((this.selectedVocation = n), null !== n)) {
          if (n === this.userinfo.job) return;
          if (!this.itemShowConfig.jobfilter.enable)
            return void this.requestSetItemChange(
              l.DEALER_REQUEST_TYPE.JOB,
              ""
            );
          if ([m.XS, m.WY, m.NM, m.LTX].includes(this.selectedVocation)) {
            var o,
              a =
                (t((o = {}), m.NM, "农民"),
                t(o, m.WY, "无职务"),
                t(o, m.XS, "学生"),
                t(o, m.LTX, "无职务"),
                o),
              i = l.TITLE_SPECIAL.other,
              r = !1;
            ((this.cachedDicts && this.cachedDicts.duty) || []).forEach(
              function (e) {
                e.id === i && (r = !0);
              }
            ),
              r || (i = l.TITLE_SPECIAL.none);
            var s = {
              action: l.DEALER_REQUEST_TYPE.UNION,
              job: this.selectedVocation,
              title: i,
              title_options: a[this.selectedVocation],
              company_addr: "无工作单位",
            };
            this.requestSetItemChange(l.DEALER_REQUEST_TYPE.UNION, s);
          } else this.requestSetItemChange(l.DEALER_REQUEST_TYPE.JOB, "");
        }
      },
      handleYearIncomeChange: function () {
        var e, n;
        this.$stat.click("trade.account.year_income_change");
        var o = (null == (e = this.cachedDicts) ? void 0 : e.year_income) || [];
        if (0 !== o.length) {
          var a = "year_income",
            i = Object.assign({}, s.originItem.ALL_ITEM_LIST[a]);
          (i.data = Object.assign({}, s.originItem.ALL_ITEM_CFG[a], {
            val: o,
          })),
            i.data.val.get ||
              Object.defineProperty(i.data.val, "get", {
                enumerable: !1,
                value: function (e) {
                  return this.find(function (t) {
                    return t.id === e;
                  });
                },
              });
          var r = t({}, a, (null == (n = this.userinfo) ? void 0 : n[a]) || "");
          this.$refs.radioYearIncomeActionSheet.setItem(i, r),
            (this.showStatus.radioYearIncomeActionSheet = !0);
        }
      },
      onYearIncomeDataChange: function (e) {
        var t = e.year_income;
        t &&
          t !== this.userinfo.year_income &&
          this.requestSetItemChange(l.DEALER_REQUEST_TYPE.YEAR_INCOME, {
            year_income: t,
          });
      },
      requestSetItemChange: function (t) {
        var i = arguments,
          s = this;
        return o(
          n().mark(function o() {
            var c, d;
            return n().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (c = i.length > 1 && void 0 !== i[1] ? i[1] : {}),
                        null,
                        (d =
                          t === l.DEALER_REQUEST_TYPE.JOB
                            ? { action: t, job: s.selectedVocation }
                            : t === l.DEALER_REQUEST_TYPE.POST
                            ? Object.assign({}, { action: t }, c)
                            : t === l.DEALER_REQUEST_TYPE.ADDRESS
                            ? { action: t, contact_addr: c }
                            : t === l.DEALER_REQUEST_TYPE.COMPANY
                            ? { action: t, company_addr: c }
                            : t === l.DEALER_REQUEST_TYPE.UNION
                            ? c
                            : e({ action: t }, c)),
                        a.index.showLoading({ title: "更新中" }),
                        (n.prev = 3),
                        (n.next = 6),
                        s.setDealerUserInfo(d)
                      );
                    case 6:
                      setTimeout(function () {
                        (t !== l.DEALER_REQUEST_TYPE.JOB &&
                          t !== l.DEALER_REQUEST_TYPE.UNION) ||
                          (s.showVocationDialog = !1),
                          s.$emit("submitRes");
                      }, 1e3),
                        (n.next = 12);
                      break;
                    case 9:
                      (n.prev = 9),
                        (n.t0 = n.catch(3)),
                        r.Dialog({ message: n.t0.retmsg });
                    case 12:
                    case "end":
                      return n.stop();
                  }
              },
              o,
              null,
              [[3, 9]]
            );
          })
        )();
      },
    },
  };
Array ||
  (
    a.resolveComponent("st-cell") +
    a.resolveComponent("st-cell-group") +
    a.resolveComponent("ProfileRadio") +
    a.resolveComponent("mp-dialog") +
    a.resolveComponent("ProfileAddress") +
    a.resolveComponent("ProfileText") +
    a.resolveComponent("DepartmentInfo")
  )();
var f = a._export_sfc(g, [
  [
    "render",
    function (e, t, n, o, i, r) {
      return a.e(
        { a: o.itemShowConfig.dealername.show },
        o.itemShowConfig.dealername.show
          ? {
              b: a.n(
                o.itemShowConfig.dealername.enable ? "" : "cell-value-disable"
              ),
              c: a.p({
                title: "服务券商",
                value: n.dealer_name,
                "arrow-direction": o.itemShowConfig.dealername.enable
                  ? "right"
                  : "",
              }),
            }
          : {},
        { d: o.itemShowConfig.dealerbranchname.show },
        o.itemShowConfig.dealerbranchname.show
          ? {
              e: a.n(
                o.itemShowConfig.dealerbranchname.enable && n.dealerbranchname
                  ? ""
                  : "cell-value-disable"
              ),
              f: a.o(function (e) {
                return (
                  o.itemShowConfig.dealerbranchname.enable && o.onDeptClick()
                );
              }),
              g: a.p({
                title: "所属营业部",
                value: n.dealerbranchname,
                "arrow-direction":
                  o.itemShowConfig.dealerbranchname.enable && n.dealerbranchname
                    ? "right"
                    : "",
              }),
            }
          : {},
        { h: o.itemShowConfig.cardtailnumber.show },
        o.itemShowConfig.cardtailnumber.show
          ? {
              i: a.n(
                o.itemShowConfig.cardtailnumber.enable
                  ? ""
                  : "cell-value-disable"
              ),
              j: a.o(function (e) {
                return r.handleTo("AccountCard");
              }),
              k: a.p({
                title: "资金安全卡",
                value: n.t_card_tailnumber || "查看绑定方法",
                "arrow-direction": o.itemShowConfig.cardtailnumber.enable
                  ? "right"
                  : "",
              }),
            }
          : {},
        { l: o.itemShowConfig.riskmodel.show },
        o.itemShowConfig.riskmodel.show
          ? {
              m: a.n(o.riskComputedClassName),
              n: a.o(function (e) {
                return (
                  o.itemShowConfig.riskmodel.enable &&
                  r.handleTo("BizRiskUpdateResult")
                );
              }),
              o: a.p({
                title: "风险测评",
                value: o.riskValue || "未知",
                border: !1,
                "arrow-direction": o.itemShowConfig.riskmodel.enable
                  ? "right"
                  : "",
              }),
            }
          : {},
        {
          p: a.p({ "border-bottom": !1, "border-top": !1 }),
          q: o.itemShowConfig.profilename.show,
        },
        o.itemShowConfig.profilename.show
          ? {
              r: a.n(
                o.itemShowConfig.profilename.enable ? "" : "cell-value-disable"
              ),
              s: a.p({
                title: "真实姓名",
                value: n.profile_name,
                "arrow-direction": o.itemShowConfig.profilename.enable
                  ? "right"
                  : "",
              }),
            }
          : {},
        { t: o.itemShowConfig.credentialid.show },
        o.itemShowConfig.credentialid.show
          ? {
              v: a.n(o.credentialidComputedClassName),
              w: a.o(function (e) {
                return (
                  o.itemShowConfig.credentialid.enable &&
                  r.handleTo("BizIdUpdate")
                );
              }),
              x: a.p({
                title: o.itemShowConfig.credentialid.title || "身份证号",
                "arrow-direction": o.itemShowConfig.credentialid.enable
                  ? "right"
                  : "",
                value: o.credentialidValue,
              }),
            }
          : {},
        { y: o.itemShowConfig.mobilephone.show },
        o.itemShowConfig.mobilephone.show
          ? {
              z: a.n(
                o.itemShowConfig.mobilephone.enable ? "" : "cell-value-disable"
              ),
              A: a.o(function (e) {
                return (
                  o.itemShowConfig.mobilephone.enable &&
                  r.handleTo("BizPhoneUpdate")
                );
              }),
              B: a.p({
                title: "联系手机",
                value: n.mobilephone,
                "arrow-direction": o.itemShowConfig.mobilephone.enable
                  ? "right"
                  : "",
              }),
            }
          : {},
        { C: o.itemShowConfig.contactaddr.show },
        o.itemShowConfig.contactaddr.show
          ? a.e(
              {
                D: a.t(n.contactaddr),
                E: o.itemShowConfig.contactaddr.enable && n.contactaddrErrMsg,
              },
              o.itemShowConfig.contactaddr.enable && n.contactaddrErrMsg
                ? { F: a.t(n.contactaddrErrMsg) }
                : {},
              {
                G: a.n(
                  o.itemShowConfig.contactaddr.enable && n.contactaddrErrMsg
                    ? "st-cell-red"
                    : "st-cell-normal"
                ),
                H: a.o(function (e) {
                  return (
                    o.itemShowConfig.contactaddr.enable &&
                    r.handleAddressChange()
                  );
                }),
                I: a.p({
                  title: "联系地址",
                  "arrow-direction": o.itemShowConfig.contactaddr.enable
                    ? "right"
                    : "",
                }),
              }
            )
          : {},
        { J: o.itemShowConfig.job.show },
        o.itemShowConfig.job.show
          ? {
              K: a.n(o.itemShowConfig.job.enable ? "" : "cell-value-disable"),
              L: a.o(function (e) {
                return o.itemShowConfig.job.enable && r.handleJobChange();
              }),
              M: a.p({
                title: "职业",
                value: n.job,
                "arrow-direction": o.itemShowConfig.job.enable ? "right" : "",
              }),
            }
          : {},
        { N: o.itemShowConfig.companyaddr.show },
        o.itemShowConfig.companyaddr.show
          ? {
              O: a.n(o.computeCompanyaddrClassName),
              P: a.o(function (e) {
                return (
                  o.itemShowConfig.companyaddr.enable && r.handleCompanyChange()
                );
              }),
              Q: a.p({
                title: "工作单位",
                value: o.companyaddrValue,
                "arrow-direction": o.itemShowConfig.companyaddr.enable
                  ? "right"
                  : "",
              }),
            }
          : {},
        { R: o.itemShowConfig.posttitle.show },
        o.itemShowConfig.posttitle.show
          ? {
              S: a.n(o.computePostClassName),
              T: a.o(function (e) {
                return (
                  o.itemShowConfig.posttitle.enable && r.handlePostChange()
                );
              }),
              U: a.p({
                title: "职务",
                value: o.postValue,
                "arrow-direction": o.itemShowConfig.posttitle.enable
                  ? "right"
                  : "",
              }),
            }
          : {},
        { V: o.itemShowConfig.degree.show },
        o.itemShowConfig.degree.show
          ? {
              W: a.n(
                o.itemShowConfig.degree.enable ? "" : "cell-value-disable"
              ),
              X: a.o(function (e) {
                return o.itemShowConfig.degree.enable && r.handleDegreeChange();
              }),
              Y: a.p({
                title: "学历",
                value: n.degree,
                "arrow-direction": o.itemShowConfig.degree.enable
                  ? "right"
                  : "",
              }),
            }
          : {},
        { Z: o.itemShowConfig.yearincome.show },
        o.itemShowConfig.yearincome.show
          ? {
              aa: a.n(
                o.itemShowConfig.yearincome.enable ? "" : "cell-value-disable"
              ),
              ab: a.o(function (e) {
                return (
                  o.itemShowConfig.yearincome.enable &&
                  r.handleYearIncomeChange()
                );
              }),
              ac: a.p({
                title: "年收入",
                value: n.yearIncomeStr,
                border: !1,
                "arrow-direction": o.itemShowConfig.yearincome.enable
                  ? "right"
                  : "",
              }),
            }
          : {},
        {
          ad: a.p({ "border-bottom": !1, "border-top": !1 }),
          ae: a.sr("radioDegreeActionSheet", "1ded7d59-15"),
          af: a.o(function (e) {
            return (i.showStatus.radioDegreeActionSheet = !1);
          }),
          ag: a.o(r.handleDegreeSubmit),
          ah: a.o(function (e) {
            return (i.showStatus.radioDegreeActionSheet = e);
          }),
          ai: a.p({
            value: i.showStatus.radioDegreeActionSheet,
            biz: "account",
          }),
          aj: a.p({ id: "mp-dialog" }),
          ak: a.sr("radioJobActionSheet", "1ded7d59-17"),
          al: a.o(function (e) {
            return (i.showStatus.radioJobActionSheet = !1);
          }),
          am: a.o(r.handleVocationSubmit),
          an: a.o(function (e) {
            return (i.showStatus.radioJobActionSheet = e);
          }),
          ao: a.p({ value: i.showStatus.radioJobActionSheet, biz: "account" }),
          ap: a.p({ id: "mp-dialog" }),
          aq: a.sr("addressActionSheet", "1ded7d59-19"),
          ar: a.o(r.onContactaddrDataChange),
          as: a.o(function (e) {
            return (i.showStatus.addressActionSheet = !1);
          }),
          at: a.o(function (e) {
            return (i.showStatus.addressActionSheet = e);
          }),
          av: a.p({
            value: i.showStatus.addressActionSheet,
            biz: "account",
            "ignore-split-failure": !1,
          }),
          aw: a.sr("textActionSheet", "1ded7d59-20"),
          ax: a.o(r.onCompanyaddrDataChange),
          ay: a.o(function (e) {
            return (i.showStatus.textActionSheet = !1);
          }),
          az: a.o(function (e) {
            return (i.showStatus.textActionSheet = e);
          }),
          aA: a.p({ value: i.showStatus.textActionSheet, biz: "account" }),
          aB: a.sr("radioPostActionSheet", "1ded7d59-21"),
          aC: a.o(function (e) {
            return (i.showStatus.radioPostActionSheet = !1);
          }),
          aD: a.o(r.onPostDataChange),
          aE: a.o(function (e) {
            return (i.showStatus.radioPostActionSheet = e);
          }),
          aF: a.p({ value: i.showStatus.radioPostActionSheet, biz: "account" }),
          aG: a.sr("radioYearIncomeActionSheet", "1ded7d59-22"),
          aH: a.o(function (e) {
            return (i.showStatus.radioYearIncomeActionSheet = !1);
          }),
          aI: a.o(r.onYearIncomeDataChange),
          aJ: a.o(function (e) {
            return (i.showStatus.radioYearIncomeActionSheet = e);
          }),
          aK: a.p({
            value: i.showStatus.radioYearIncomeActionSheet,
            biz: "account",
          }),
          aL: a.o(function (e) {
            return o.showDeptInfo(!1);
          }),
          aM: a.o(function (e) {
            return r.handleTo("BizDepartment");
          }),
          aN: a.p({
            show: i.showStatus.departmentInfo,
            name: n.dealerbranchname,
            address: o.deptInfo.address,
            phone: o.deptInfo.phone,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-1ded7d59"],
]);
wx.createComponent(f);
