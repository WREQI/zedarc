require("../../@babel/runtime/helpers/Arrayincludes"),
  require("../../@babel/runtime/helpers/Objectvalues");
var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../@babel/runtime/helpers/objectSpread2");
require("../../app.js");
var r = require("../../common/vendor.js"),
  o = require("../../utils/getPlatform.js"),
  i = require("../../config/enum/account.js");
require("../../service/broker.js");
var a = require("../../model/account/usePersonal.js"),
  s = require("../../common/components/Dialog/index.js"),
  c = require("../../model/apply/profile/broker/11100.js"),
  u = require("../../stores/user/useUserinfo.js"),
  l = require("../../model/biz/usePermission.js"),
  d = require("../../stores/red-point/useQuickEntry.js"),
  h = require("../../cgi/userproperty.js");
require("../../service/sdk/lib/api.js");
var f = require("../../service/sdk/platform/mp-weixin.js"),
  p = require("../../service/aegis/utils.js"),
  m = require("../../model/account/accountMonitorEvents.js"),
  g = require("../../mixin/platforms/index.js"),
  b = require("../../config/broker/11100/index.js"),
  v = "job",
  C = "edu",
  S = "duty",
  E = "limitreason",
  _ = "yearincome",
  k = "my",
  y = o.getPlatform(),
  x = y.platform,
  P = y.isPCWeixin,
  j = "ios" === x,
  I = {
    name: "AccountPersonal",
    mixins: [g.pluginMixins],
    components: {
      ChangeAccount: function () {
        return "../../bizs/account/personal/ChangeAccount.js";
      },
      BaseInfo: function () {
        return "../../bizs/account/personal/BaseInfo.js";
      },
      MpDialog: function () {
        return "../../common/components/Dialog/Dialog.js";
      },
      LoginInfo: function () {
        return "../../bizs/account/personal/LoginInfo.js";
      },
      ShareholderCardStack: function () {
        return "../../bizs/account/personal/ShareholderCardStack.js";
      },
      TradingPermissionPanel: function () {
        return "../../bizs/account/personal/TradingPermissionPanel.js";
      },
      PreloadCardBg: function () {
        return "../../bizs/account/personal/PreloadCardBg.js";
      },
      CustomNavbar: function () {
        return "../../bizs/account/personal/CustomNavbar.js";
      },
    },
    setup: function () {
      var e = a.usePersonal().getDict,
        n = u.useUserinfoStore(),
        o = r.storeToRefs(n).userinfo,
        i = n.forceGetUserInfo,
        s = l.usePermission(),
        c = s.initPermissionData,
        d = s.pageStatus,
        h = s.PAGE_STATUS,
        f = s.shareholderCardList,
        p = s.shareholderCardPermissionsMap,
        m = s.iconPermissionList,
        g = s.kcGrowStatus,
        b = s.hasNqHolder,
        v = r.computed(function () {
          var e,
            n = (null == (e = o.value) ? void 0 : e.credentialname) || "";
          return f.value.map(function (e) {
            return t(t({}, e), {}, { holderName: n });
          });
        }),
        C = r.computed(function () {
          return g.value.keChuangOpened;
        }),
        S = r.ref(!1);
      S.value = !0;
      var E = r.ref(0);
      return {
        userinfo: o,
        getDict: e,
        forceGetUserInfo: i,
        loadPermissionData: c,
        permissionPageStatus: d,
        PAGE_STATUS: h,
        shareholderCardList: v,
        shareholderCardPermissionsMap: p,
        iconPermissionList: m,
        isKeChuangOpened: C,
        hasNqHolder: b,
        navHeight: E,
        showCutomNavbar: S,
        handleNavbarHeightReady: function (e) {
          var n = e.height;
          E.value = n;
        },
      };
    },
    data: function () {
      return {
        cachedDicts: {},
        dealer_name: "未知",
        fundaccount: "未知",
        dealerbranchname: "未知",
        profile_name: "未知",
        credentialid: "未知",
        mobilephone: "未知",
        contactaddr: "未知",
        contactaddrErrMsg: "",
        companyaddr: "无",
        companyErrMsg: "",
        jobErrMsg: "",
        posttitle: "",
        postoptions: "",
        postErrMsg: "",
        job: "无",
        degree: "未知",
        t_card_tailnumber: "未知银行",
        t_risk_model: "",
        t_risk_disable: !1,
        is_loading: !0,
        dealer_limit_info: "",
        dealerLimitState: "0",
        scrollToId: "",
        actualScrollTop: 0,
        lastScrollTop: 0,
        isCardExpanded: !1,
        touchStartY: 0,
        isPCWeixin: P,
        hideAccountInfo: !0,
      };
    },
    computed: {
      isLoginInfoShow: function () {
        var e;
        return null == (e = b.brokerConfig.hall) ? void 0 : e.loginInfo;
      },
      itemShowConfig: function () {
        var e;
        return null == (e = b.brokerConfig.hall) ? void 0 : e.personal;
      },
      maskAccountInfoEnabled: function () {
        var e;
        return !!(null == (e = b.brokerConfig.hall)
          ? void 0
          : e.maskAccountInfo);
      },
      displayFundAccount: function () {
        return this.maskAccountInfoEnabled && this.hideAccountInfo
          ? this.maskStr(this.fundaccount)
          : this.fundaccount;
      },
      yearIncomeStr: function () {
        var e,
          n,
          t = "year_income";
        if (!(null == (e = this.cachedDicts) ? void 0 : e[t])) return "";
        var r = this.cachedDicts[t];
        return (
          (null == (n = null == r ? void 0 : r.nameOf)
            ? void 0
            : n.call(r, this.userinfo[t])) || "未知"
        );
      },
    },
    methods: {
      maskStr: function (e) {
        return !e || e.length < 4
          ? "****"
          : ""
              .concat(e.substring(0, 1), "**")
              .concat(e.substring(e.length - 3));
      },
      handleToggleAccountInfo: function () {
        this.hideAccountInfo = !this.hideAccountInfo;
      },
      scrollToButton: function () {
        var e = this;
        this.$nextTick(function () {
          e.scrollToId = "changeAccountPosition";
        });
      },
      requestUpdateData: function () {
        var t = this;
        return n(
          e().mark(function n() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), t.forceGetUserInfo({ action: 1 });
                  case 2:
                    t.loadPermissionData(),
                      t
                        .requestGetDict([v, C, S, E, _], k)
                        .then(function (e) {
                          var n,
                            r =
                              (null == (n = c.brokerConfig)
                                ? void 0
                                : n.dictionary) || {},
                            o = Object.assign({}, r, e);
                          Object.values(o).forEach(function (e) {
                            Object.prototype.hasOwnProperty.call(e, "nameOf") ||
                              Object.defineProperty(e, "nameOf", {
                                enumerable: !1,
                                value: function (n) {
                                  var t = e.find(function (e) {
                                    return e.id === n;
                                  });
                                  return (null == t ? void 0 : t.name) || "";
                                },
                              });
                          }),
                            (t.cachedDicts = o);
                        })
                        .then(function () {
                          t.render(),
                            "unbind" === t.$route.query.action &&
                              t.scrollToButton();
                        })
                        .catch(function (e) {
                          p.reportMonitorEvent(
                            m.ACCOUNT_MONITOR.PERSONAL_LOAD_FAIL,
                            {
                              ext3: ""
                                .concat(
                                  (null == e ? void 0 : e.retcode) || "unknown",
                                  "|"
                                )
                                .concat((null == e ? void 0 : e.retmsg) || ""),
                            }
                          ),
                            s.Dialog({ message: e.retmsg });
                        });
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, n);
          })
        )();
      },
      requestGetDict: function (e, n) {
        var t = this;
        return new Promise(function (r, o) {
          if (0 === e.length) return r({});
          var i,
            a = "".concat(n, "_");
          return (
            t.userinfo &&
            t
              .getDict({
                dealercode: t.userinfo.dealercode,
                qry_item: e
                  .map(function (e) {
                    return "".concat(a).concat(e);
                  })
                  .join("|"),
              })
              .then(function (e) {
                if (
                  (delete e.retcode,
                  delete e.retmsg,
                  "{}" === JSON.stringify(e))
                )
                  o({ retcode: "-1", retmsg: "数据获取失败" });
                else {
                  var n = {},
                    t = function () {
                      var t = [];
                      e[i].map(function (e) {
                        t[e.order] = e;
                      }),
                        (t = t.filter(function (e) {
                          return e;
                        })),
                        (i = i.startsWith(a) ? i.substr(a.length) : i) === _ &&
                          (i = "year_income"),
                        (n[i] = t);
                    };
                  for (i in e) t();
                  r(n);
                }
              })
              .catch(function (e) {
                o(e);
              })
          );
        });
      },
      render: function () {
        var t = this;
        return n(
          e().mark(function n() {
            var o;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!t.userinfo) {
                      e.next = 12;
                      break;
                    }
                    (e.t0 =
                      ((t.dealer_name = t.userinfo.dealername || "未知"),
                      (t.fundaccount = t.userinfo.fundaccount || "未知"),
                      (t.dealerbranchname =
                        t.userinfo.dealerbranchname || "未知"),
                      (t.profile_name = t.userinfo.credentialname || "未知"),
                      (t.credentialid = t.userinfo.credentialid || "未知"),
                      (t.mobilephone = t.userinfo.mobilephone || "未知"),
                      t.cachedDicts.job
                        ? "199" === t.userinfo.job
                          ? (t.job = "")
                          : (t.job =
                              t.cachedDicts.job.nameOf(t.userinfo.job) || "无")
                        : (t.job = "无"),
                      t.cachedDicts.edu
                        ? (t.degree =
                            t.cachedDicts.edu.nameOf(t.userinfo.degree) ||
                            "未知")
                        : (t.degree = "未知"),
                      (t.contactaddr = t.userinfo.contact_addr || "未知"),
                      (t.companyaddr = t.userinfo.company_addr || "无"),
                      (t.posttitle = t.userinfo.title || ""),
                      (t.postoptions = t.userinfo.title_options || ""),
                      t.userinfo.bankname
                        ? (t.t_card_tailnumber =
                            t.userinfo.bankname +
                            (t.userinfo.bankcard
                              ? "(尾号".concat(t.userinfo.bankcard, ")")
                              : ""))
                        : (t.t_card_tailnumber = ""),
                      t.userinfo.riskflag)),
                      (e.next =
                        "1" === e.t0
                          ? 4
                          : "2" === e.t0
                          ? 6
                          : "3" === e.t0
                          ? 8
                          : 10);
                    break;
                  case 4:
                    return (
                      (o = b.brokerConfig.common.RISK.EXPIRED),
                      e.abrupt("break", 11)
                    );
                  case 6:
                    return (
                      (o = b.brokerConfig.common.RISK.INCOMPLETE),
                      e.abrupt("break", 11)
                    );
                  case 8:
                    return (
                      (o = b.brokerConfig.common.RISK.NOTEVLUATED),
                      e.abrupt("break", 11)
                    );
                  case 10:
                    o = b.brokerConfig.common.RISK[t.userinfo.risk_level];
                  case 11:
                    (t.t_risk_model = r.get(o, "text", "未知")),
                      (t.t_risk_disable = r.get(o, "disable", !1)),
                      t.showLimitState(),
                      t.showConflictState();
                  case 12:
                    t.is_loading = !1;
                  case 13:
                  case "end":
                    return e.stop();
                }
            }, n);
          })
        )();
      },
      showLimitState: function () {
        if (
          ((this.jobErrMsg = ""),
          (this.contactaddrErrMsg = ""),
          "0" === this.userinfo.limit_status)
        )
          this.dealerLimitState = "0";
        else if ("1" === this.userinfo.limit_status)
          if (
            r.isEmpty(this.userinfo.limit_audit_item) &&
            r.isEmpty(this.userinfo.limit_reason)
          )
            this.dealerLimitState = "2";
          else if (
            !1 === r.isEmpty(this.userinfo.limit_audit_item) &&
            r.isEmpty(this.userinfo.limit_reason)
          )
            this.dealerLimitState = "3";
          else {
            this.dealerLimitState = "1";
            var e = null,
              n = null;
            this.userinfo.limit_reason.split("|").forEach(function (t) {
              var r = t.split("#");
              if (2 === r.length) {
                var o = r[0],
                  i = r[1].split(",");
                "1" === o && i.length > 0
                  ? (e = i[0])
                  : "2" === o && i.length > 0 && (n = i[0]);
              }
            }),
              e &&
                this.cachedDicts.limitreason &&
                (this.jobErrMsg = this.cachedDicts.limitreason.nameOf(e) || ""),
              n &&
                this.cachedDicts.limitreason &&
                (this.contactaddrErrMsg =
                  this.cachedDicts.limitreason.nameOf(n) || "");
          }
        if ("1" === this.dealerLimitState)
          this.dealer_limit_info = "当前账户受限，请修改错误项";
        else if ("2" === this.dealerLimitState) {
          var t = this.userinfo.dealername || "",
            o = this.userinfo.dealertel || "";
          this.dealer_limit_info = "当前账户受限，请联系".concat(t).concat(o);
        } else
          "3" === this.dealerLimitState &&
            (this.dealer_limit_info =
              "修改已提交，请等待券商审核，结果将通过微信告知");
      },
      showConflictState: function () {
        if (
          this.userinfo.job &&
          !1 ===
            [
              i.JOB_SPECIAL_NEW.XS,
              i.JOB_SPECIAL_NEW.WY,
              i.JOB_SPECIAL_NEW.NM,
              i.JOB_SPECIAL_NEW.LTX,
              i.JOB_SPECIAL_NEW.GSH,
            ].includes(this.userinfo.job)
        ) {
          if (
            ("" === this.companyaddr ||
            ["无", "无业", "无工作", "无单位", "无工作单位"].includes(
              this.companyaddr
            )
              ? (this.companyErrMsg = "工作单位与".concat(
                  this.job,
                  "冲突,请修改"
                ))
              : (this.companyErrMsg = ""),
            "" === this.posttitle)
          )
            this.postErrMsg = "职务与".concat(this.job, "冲突,请修改");
          else if (this.posttitle === i.TITLE_SPECIAL.other) {
            "" === this.postoptions ||
            ["无", "无职务", "无工作"].includes(this.postoptions)
              ? (this.postErrMsg = "职务与".concat(this.job, "冲突,请修改"))
              : (this.postErrMsg = "");
          } else
            this.posttitle === i.TITLE_SPECIAL.none
              ? (this.postErrMsg = "职务与".concat(this.job, "冲突,请修改"))
              : (this.postErrMsg = "");
        } else (this.postErrMsg = ""), (this.companyErrMsg = "");
      },
      submitResFunc: function () {
        var t = this;
        return n(
          e().mark(function n() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      r.index.showLoading({ title: "更新中" }),
                      (e.next = 3),
                      t.forceGetUserInfo({ action: 1 })
                    );
                  case 3:
                    t.render();
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, n);
          })
        )();
      },
      handleToBrokerService: function (e) {
        var n = "personal" === e ? "BizProfileUpdate" : "Biz".concat(e);
        this.$stat.click("trade.account.".concat(n, "_click")),
          this.$router.push({
            name: "BizBrokerService",
            query: { key: e, returl: this.$route.query.returl },
          });
      },
      handleCopyFundAccount: function () {
        r.index.setClipboardData({
          data: this.fundaccount,
          success: function () {
            r.index.showToast({ title: "已复制", icon: "success" });
          },
        });
      },
      handleScroll: function (e) {
        var n,
          t = (null == (n = e.detail) ? void 0 : n.scrollTop) || 0;
        this.isPCWeixin &&
          this.isCardExpanded &&
          t - this.lastScrollTop > 5 &&
          ((this.isCardExpanded = !1), (this.lastScrollTop = 0)),
          (this.lastScrollTop = t),
          (this.actualScrollTop = t);
      },
      handleTouchStart: function (e) {
        var n, t;
        this.isPCWeixin ||
          ((this.isCardExpanded || this.actualScrollTop <= 0) &&
            (this.touchStartY =
              (null == (t = null == (n = e.touches) ? void 0 : n[0])
                ? void 0
                : t.clientY) || 0));
      },
      handleTouchMove: r.throttle(function (e) {
        var n, t;
        if (!this.isPCWeixin && this.touchStartY) {
          var r = !this.isCardExpanded && this.actualScrollTop <= 0,
            o = this.isCardExpanded;
          if (r || o) {
            var i =
              ((null == (t = null == (n = e.touches) ? void 0 : n[0])
                ? void 0
                : t.clientY) || 0) - this.touchStartY;
            if (o && i < 0)
              return (this.isCardExpanded = !1), void (this.touchStartY = 0);
            r && i > 0 && ((this.isCardExpanded = !0), (this.touchStartY = 0));
          }
        }
      }, 100),
      handleTouchEnd: function () {
        this.isPCWeixin || (this.touchStartY = 0);
      },
      handleCardExpand: function () {
        this.isCardExpanded = !0;
      },
      handleCardCollapse: function () {
        this.isCardExpanded = !1;
      },
      handleCardOpen: function (e) {
        e && this.$router.push({ name: e });
      },
      toUpper: function (e) {
        this.actualScrollTop = 0;
      },
      handleBack: function () {
        this.$router.back();
      },
    },
    onShow: function () {
      var t = this;
      return n(
        e().mark(function n() {
          var r, o, i, a;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((e.prev = 0),
                      "1" !== t.userinfo.newer_shareholder_notify)
                    ) {
                      e.next = 7;
                      break;
                    }
                    return (
                      (a = d.useQuickEntry()).deleteBizHallRedPoint(
                        "newerShareholder"
                      ),
                      a.deleteBubbleTip(
                        (null ==
                        (o =
                          null == (r = b.brokerConfig.dictionary.Enties)
                            ? void 0
                            : r.account)
                          ? void 0
                          : o.routeName) || "AccountPersonal"
                      ),
                      (e.next = 7),
                      h.UserPropertyCgi.confirmNewerShareholder()
                    );
                  case 7:
                    e.next = 11;
                    break;
                  case 9:
                    (e.prev = 9), (e.t0 = e.catch(0));
                  case 11:
                    if (
                      (t.requestUpdateData(), (e.prev = 12), (e.t1 = j), !e.t1)
                    ) {
                      e.next = 17;
                      break;
                    }
                    return (
                      (e.next = 17),
                      null == (i = f.sdk) ? void 0 : i.setBounce(!1)
                    );
                  case 17:
                    e.next = 21;
                    break;
                  case 19:
                    (e.prev = 19), (e.t2 = e.catch(12));
                  case 21:
                  case "end":
                    return e.stop();
                }
            },
            n,
            null,
            [
              [0, 9],
              [12, 19],
            ]
          );
        })
      )();
    },
    onHide: function () {
      return n(
        e().mark(function n() {
          var t;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((e.prev = 0), (e.t0 = j), !e.t0)) {
                      e.next = 5;
                      break;
                    }
                    return (
                      (e.next = 5),
                      null == (t = f.sdk) ? void 0 : t.setBounce(!0)
                    );
                  case 5:
                    e.next = 9;
                    break;
                  case 7:
                    (e.prev = 7), (e.t1 = e.catch(0));
                  case 9:
                  case "end":
                    return e.stop();
                }
            },
            n,
            null,
            [[0, 7]]
          );
        })
      )();
    },
    beforeUnmount: function () {
      return n(
        e().mark(function n() {
          var t;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((e.prev = 0), (e.t0 = j), !e.t0)) {
                      e.next = 5;
                      break;
                    }
                    return (
                      (e.next = 5),
                      null == (t = f.sdk) ? void 0 : t.setBounce(!0)
                    );
                  case 5:
                    e.next = 9;
                    break;
                  case 7:
                    (e.prev = 7), (e.t1 = e.catch(0));
                  case 9:
                  case "end":
                    return e.stop();
                }
            },
            n,
            null,
            [[0, 7]]
          );
        })
      )();
    },
  };
Array ||
  (
    r.resolveComponent("custom-navbar") +
    r.resolveComponent("ShareholderCardStack") +
    r.resolveComponent("TradingPermissionPanel") +
    r.resolveComponent("PreloadCardBg") +
    r.resolveComponent("BaseInfo") +
    r.resolveComponent("change-account") +
    r.resolveComponent("login-info") +
    r.resolveComponent("MpDialog") +
    r.resolveComponent("GlobalWrap")
  )(),
  Math;
var T = r._export_sfc(I, [
  [
    "render",
    function (e, n, t, o, i, a) {
      return r.e(
        { a: e.rootFontSize, b: o.showCutomNavbar },
        o.showCutomNavbar
          ? { c: r.o(o.handleNavbarHeightReady), d: r.o(a.handleBack) }
          : {},
        { e: "0" !== i.dealerLimitState },
        "0" !== i.dealerLimitState
          ? {
              f: r.t(i.dealer_limit_info),
              g: r.n(
                "3" === i.dealerLimitState
                  ? "limit-info-wait"
                  : "limit-info-can"
              ),
            }
          : {},
        { h: r.t(a.displayFundAccount), i: a.maskAccountInfoEnabled },
        a.maskAccountInfoEnabled
          ? {
              j: r.n(i.hideAccountInfo ? "icon-eye-close" : "icon-eye-open"),
              k: r.o(function () {
                return (
                  a.handleToggleAccountInfo &&
                  a.handleToggleAccountInfo.apply(a, arguments)
                );
              }),
            }
          : {},
        { l: !(a.maskAccountInfoEnabled && i.hideAccountInfo) },
        a.maskAccountInfoEnabled && i.hideAccountInfo
          ? {}
          : {
              m: r.o(function () {
                return (
                  a.handleCopyFundAccount &&
                  a.handleCopyFundAccount.apply(a, arguments)
                );
              }),
            },
        {
          n: r.o(a.handleCardExpand),
          o: r.o(a.handleCardCollapse),
          p: r.o(a.handleCardOpen),
          q: r.p({
            "card-list": o.shareholderCardList,
            "permissions-map": o.shareholderCardPermissionsMap,
            expanded: i.isCardExpanded,
            "hide-info": a.maskAccountInfoEnabled && i.hideAccountInfo,
          }),
          r: r.o(a.handleCardCollapse),
          s: r.p({
            "icon-permissions": o.iconPermissionList,
            loading: o.permissionPageStatus !== o.PAGE_STATUS.ready,
            "is-ke-chuang-opened": o.isKeChuangOpened,
            "has-nq-holder": o.hasNqHolder,
          }),
          t: i.isCardExpanded ? 1 : "",
          v: r.o(a.submitResFunc),
          w: r.p({
            fundaccount: i.fundaccount,
            dealer_name: i.dealer_name,
            dealerbranchname: i.dealerbranchname,
            profile_name: i.profile_name,
            credentialid: i.credentialid,
            t_card_tailnumber: i.t_card_tailnumber,
            t_risk_model: i.t_risk_model,
            t_risk_disable: i.t_risk_disable,
            degree: i.degree,
            cachedDicts: i.cachedDicts,
            mobilephone: i.mobilephone,
            job: i.job,
            posttitle: i.posttitle,
            postoptions: i.postoptions,
            postErrMsg: i.postErrMsg,
            contactaddr: i.contactaddr,
            contactaddrErrMsg: i.contactaddrErrMsg,
            companyaddr: i.companyaddr,
            companyErrMsg: i.companyErrMsg,
            jobErrMsg: i.jobErrMsg,
            yearIncomeStr: a.yearIncomeStr,
          }),
          x: a.itemShowConfig.profileupdate.show,
        },
        a.itemShowConfig.profileupdate.show
          ? {
              y: r.o(function (e) {
                return a.handleToBrokerService("personal");
              }),
            }
          : {},
        {
          z:
            a.itemShowConfig.cancelaccount &&
            a.itemShowConfig.cancelaccount.show,
        },
        a.itemShowConfig.cancelaccount && a.itemShowConfig.cancelaccount.show
          ? {
              A: r.o(function (e) {
                return a.handleToBrokerService("cancelaccount");
              }),
            }
          : {},
        {
          B:
            a.itemShowConfig.accountquery && a.itemShowConfig.accountquery.show,
        },
        a.itemShowConfig.accountquery && a.itemShowConfig.accountquery.show
          ? {
              C: r.o(function (e) {
                return a.handleToBrokerService("accountquery");
              }),
            }
          : {},
        { D: a.isLoginInfoShow },
        (a.isLoginInfoShow, {}),
        {
          E: r.p({ id: "mp-dialog" }),
          F: i.scrollToId,
          G: !i.isCardExpanded || i.isPCWeixin,
          H: o.navHeight + "px",
          I: r.o(function () {
            return a.toUpper && a.toUpper.apply(a, arguments);
          }),
          J: r.o(function () {
            return a.handleScroll && a.handleScroll.apply(a, arguments);
          }),
          K: r.o(function () {
            return a.handleTouchStart && a.handleTouchStart.apply(a, arguments);
          }),
          L: r.o(function () {
            return a.handleTouchMove && a.handleTouchMove.apply(a, arguments);
          }),
          M: r.o(function () {
            return a.handleTouchEnd && a.handleTouchEnd.apply(a, arguments);
          }),
          N: r.sr("#global-wrap", "d2173416-0"),
          O: r.p({
            id: "global-wrap",
            filePath: "/account/personal",
            defaultTheme: "",
          }),
        }
      );
    },
  ],
]);
wx.createPage(T);
