var e,
  t,
  n = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../@babel/runtime/helpers/defineProperty"),
  o = function (e, t, n) {
    return new Promise(function (i, o) {
      var s = function (e) {
          try {
            a(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        r = function (e) {
          try {
            a(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          return e.done ? i(e.value) : Promise.resolve(e.value).then(s, r);
        };
      a((n = n.apply(e, t)).next());
    });
  },
  s = require("../../../common/vendor.js"),
  r = require("../hooks/useMultiBrokerCardInfo.js"),
  a = s.useBrokerInfo(),
  c = a.navigateToTrade,
  u = a.isEmbeddedMpEnable,
  l = a.getBrokerMaintain,
  d = s.useApplyEntry,
  h = d.toApply,
  T = d.toBind,
  p = {
    OPEN: "OPEN_ACCOUNT",
    LOGIN: "LOGIN_ACCOUNT",
    SWITCH: "SWITCH_ACCOUNT",
  },
  f =
    (i((e = {}), p.SWITCH, {
      id: p.SWITCH,
      text: "已有券商",
      stat: "switch",
      disableText: "更多券商接入中",
    }),
    i(e, [p.LOGIN], {
      id: p.LOGIN,
      text: "登录券商",
      stat: "bind",
      disableText: "更多券商接入中",
    }),
    i(e, p.OPEN, {
      id: p.OPEN,
      text: "新开券商",
      stat: "open",
      disableText: "更多券商接入中",
    }),
    e),
  I =
    (i((t = { ENTRY: "请选择" }), p.SWITCH, "请选择券商"),
    i(t, p.LOGIN, "请选择券商"),
    i(t, p.OPEN, "在线开户"),
    t),
  E = s.useBrokerInfo(),
  C = E.hasBind,
  L = E.dealerList,
  N = {
    components: {
      BrokerLogo: function () {
        return "./BrokerLogo.js";
      },
    },
    props: { type: { type: String, default: "default" } },
    setup: function () {
      return { mainBindList: r.useMultiBrokerCard().canBindList };
    },
    data: function () {
      var e;
      return {
        sheetTitle: I.ENTRY,
        entryMenuList: [],
        secondMenuList: [],
        isShowOthers: !1,
        actionType: "",
        BIZ_TYPE: p,
        selectedCode: "",
        curSheetLevel: 0,
        showCustomNavbar:
          getApp().globalData.ShowCustomNavbar &&
          (null == (e = null == __wxConfig ? void 0 : __wxConfig.tabBar)
            ? void 0
            : e.custom),
        isOnlySecondMenu: !1,
      };
    },
    computed: {
      isAccountOpen: function () {
        return C.value;
      },
      dealerList: function () {
        return L.value.filter(function (e) {
          return "1" === e.can_bind;
        });
      },
      applyList: function () {
        return this.dealerList.filter(function (e) {
          return (
            e.userstateFront & s.USERSTATE_PID.NOACCOUNT &&
            !(e.userstateFront & s.USERSTATE_PID.UNBIND) &&
            "1" === e.can_apply
          );
        });
      },
      hasActive: function () {
        return (
          this.dealerList.filter(function (e) {
            return (
              e.userstateFront & s.USERSTATE_PID.BIND_ACTIVE &&
              "1" === e.can_bind
            );
          }).length > 0
        );
      },
    },
    watch: {
      type: function () {
        this.specialTypeHandle();
      },
      mainBindList: function () {
        this.genEntryMenuList();
      },
    },
    mounted: function () {
      return o(
        this,
        null,
        n().mark(function e() {
          return n().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    this.genEntryMenuList(), this.specialTypeHandle();
                  case 1:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this
          );
        })
      );
    },
    methods: {
      nil: function () {},
      onClose: function () {
        this.$emit("close"),
          (this.curSheetLevel = 0),
          (this.selectedCode = ""),
          (this.sheetTitle = I.ENTRY);
      },
      onReturn: function () {
        (this.curSheetLevel -= 1),
          (this.actionType = p.ENTRY),
          (this.sheetTitle = I.ENTRY);
      },
      genEntryMenuList: function () {
        (f.OPEN_ACCOUNT.disable = 0 === this.applyList.length),
          (f.LOGIN_ACCOUNT.disable = 0 === this.mainBindList.length),
          (f.SWITCH_ACCOUNT.disable = 0 === this.mainBindList.length),
          (this.entryMenuList = []),
          this.entryMenuList.push(f.OPEN_ACCOUNT),
          this.hasActive && this.entryMenuList.push(f.SWITCH_ACCOUNT),
          this.hasActive || this.entryMenuList.push(f.LOGIN_ACCOUNT);
      },
      genBrokerMenuList: function () {
        var e = this.actionType;
        if (e)
          switch (((this.secondMenuList = []), e)) {
            case p.SWITCH:
            case p.LOGIN:
              (this.secondMenuList = this.hasActive
                ? this.mainBindList
                : this.dealerList),
                this.setTopUsingBroker(this.secondMenuList);
              break;
            case p.OPEN:
              this.secondMenuList = this.applyList;
          }
      },
      onEntryItemClick: function (e) {
        var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          n = arguments.length > 2 ? arguments[2] : void 0;
        e &&
          !n &&
          ((this.actionType = e),
          t &&
            s.Request.reportMTAData({
              eventName: "my.brokeraccount.".concat(f[this.actionType].stat),
            }),
          this.genBrokerMenuList(),
          this.setSheet());
      },
      goToTrade: function (e, t) {
        return o(
          this,
          null,
          n().mark(function i() {
            var o;
            return n().wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      if (((n.prev = 0), !u(t))) {
                        n.next = 6;
                        break;
                      }
                      return (n.next = 4), c({ name: e, dealercode: t });
                    case 4:
                      n.next = 7;
                      break;
                    case 6:
                      s.wx$1.showModal({
                        confirmText: "确定",
                        content: "小程序暂不支持该券商交易",
                        showCancel: !1,
                      });
                    case 7:
                      n.next = 13;
                      break;
                    case 9:
                      (n.prev = 9),
                        (n.t0 = n.catch(0)),
                        (o =
                          "ERR_MAINTAIN" === n.t0.retcode
                            ? n.t0.retmsg
                            : "系统繁忙请稍后再试"),
                        s.wx$1.showModal({
                          confirmText: "确定",
                          content: o,
                          showCancel: !1,
                        });
                    case 13:
                    case "end":
                      return n.stop();
                  }
              },
              i,
              null,
              [[0, 9]]
            );
          })
        );
      },
      goToGuildPage: function (e) {
        var t,
          n,
          i = e.userstateFront & s.USERSTATE_PID.VERIFYING,
          o = e.userstateFront & s.USERSTATE_PID.FAILED;
        if (e.userstateFront & s.USERSTATE_PID.EXTERNAL_CHANNEL_APPLY)
          return (
            s.wx$1.showModal({
              content: "已在其它渠道提交开户申请",
              confirmText: "确定",
              showCancel: !1,
            }),
            !1
          );
        (
          null ==
          (n = null == (t = getApp().globalData.detect) ? void 0 : t.env)
            ? void 0
            : n.IS_PCWEIXIN
        )
          ? s.wx$1.navigateTo({ url: "/pages/noaccount/textImage/TextImage" })
          : i
          ? this.goToTrade("ApplyProgress", e.code)
          : o && this.goToTrade("ApplyRecover", e.code);
      },
      goToAssetPage: function (e) {
        var t = e.userstateFront & s.USERSTATE_PID.BIND_ACTIVE,
          n = e.userstateFront & s.USERSTATE_PID.BIND_UNACTIVE;
        t
          ? this.goToTrade("AssetIndex", e.code)
          : n
          ? this.goToTrade("AccountSwitching", e.code)
          : T(e.code);
      },
      onMainBrokerItemClick: function (e) {
        if (e)
          if (
            ((this.selectedCode = e.code),
            s.Request.reportMTAData({
              eventName: "my.brokeraccount."
                .concat(f[this.actionType].stat, ".main.")
                .concat(this.selectedCode),
            }),
            this.isMaintain(e))
          )
            s.wx$1.showModal({
              confirmText: "知道了",
              content:
                e.maintainText ||
                "".concat(e.name, "维护中，请稍后再试或切换其他券商"),
              showCancel: !1,
            });
          else if (u(e.code)) {
            this.onClose();
            var t =
              e.userstateFront & s.USERSTATE_PID.NOAPPLY ||
              e.userstateFront & s.USERSTATE_PID.APPLYING;
            if (this.actionType === p.OPEN)
              return t
                ? (s.Request.updateChannel("I3J00p000b120"),
                  void h({ dealerCode: e.code }))
                : void this.goToGuildPage(e);
            (this.actionType !== p.SWITCH && this.actionType !== p.LOGIN) ||
              this.goToAssetPage(e);
          } else
            s.wx$1.showModal({
              confirmText: "确定",
              content: "小程序暂不支持该券商交易",
              showCancel: !1,
            });
      },
      setSheet: function (e) {
        this.curSheetLevel < 1 && (this.curSheetLevel += 1),
          (this.sheetTitle = I[e || this.actionType] || "");
      },
      isCurrentUse: function (e) {
        return (
          (null == e ? void 0 : e.userstateFront) & s.USERSTATE_PID.BIND_ACTIVE
        );
      },
      setTopUsingBroker: function (e) {
        var t = this,
          n = e.findIndex(function (e) {
            return t.isCurrentUse(e);
          });
        if (n > 0) {
          var i = e.splice(n, 1)[0];
          i && e.unshift(i);
        }
      },
      isMaintain: function (e) {
        if (!e) return !1;
        var t = null;
        return (
          (t =
            this.actionType === p.OPEN ||
            e.userstateFront & s.USERSTATE_PID.VERIFYING ||
            e.userstateFront & s.USERSTATE_PID.FAILED
              ? s.BULLETIN_TYPE.APPLY
              : s.BULLETIN_TYPE.TRADE),
          l({ bulletinType: t, brokerCode: null == e ? void 0 : e.code })
            .isMaintain
        );
      },
      specialTypeHandle: function () {
        "login" === this.type &&
          (this.onEntryItemClick(p.LOGIN, !1), (this.isOnlySecondMenu = !0));
      },
    },
  };
Array || s.resolveComponent("broker-logo")();
var y = s._export_sfc(N, [
  [
    "render",
    function (e, t, n, i, o, r) {
      return s.e(
        { a: 1 === o.curSheetLevel && !o.isOnlySecondMenu },
        1 !== o.curSheetLevel || o.isOnlySecondMenu
          ? {}
          : {
              b: s.o(function () {
                return r.onReturn && r.onReturn.apply(r, arguments);
              }, 659),
            },
        {
          c: s.o(function () {
            return r.onClose && r.onClose.apply(r, arguments);
          }, 660),
          d: s.t(o.sheetTitle),
          e: 0 === o.curSheetLevel,
        },
        0 === o.curSheetLevel
          ? {
              f: s.f(o.entryMenuList, function (e, t, n) {
                return s.e(
                  { a: s.t(e.text), b: e.disable },
                  e.disable ? { c: s.t(e.disableText) } : {},
                  {
                    d: e.id,
                    e: s.o(
                      function (t) {
                        return r.onEntryItemClick(e.id, !0, e.disable);
                      },
                      661,
                      e.id
                    ),
                  }
                );
              }),
            }
          : {},
        { g: 1 === o.curSheetLevel && o.actionType === o.BIZ_TYPE.OPEN },
        1 === o.curSheetLevel && o.actionType === o.BIZ_TYPE.OPEN
          ? s.e(
              {
                h: s.f(o.secondMenuList, function (e, t, n) {
                  return s.e(
                    {
                      a: "14643a9d-0-" + n,
                      b: s.p({ "broker-code": e.code }),
                      c: s.t(e.name),
                      d: r.isMaintain(e),
                    },
                    (r.isMaintain(e), {}),
                    {
                      e: s.t(e.desc),
                      f: e.code,
                      g: s.o(
                        function (t) {
                          return r.onMainBrokerItemClick(e);
                        },
                        662,
                        e.code
                      ),
                    }
                  );
                }),
                i: 0 === o.secondMenuList.length,
              },
              (o.secondMenuList.length, {})
            )
          : {},
        { j: 1 === o.curSheetLevel && o.actionType !== o.BIZ_TYPE.OPEN },
        1 === o.curSheetLevel && o.actionType !== o.BIZ_TYPE.OPEN
          ? {
              k: s.f(o.secondMenuList, function (e, t, n) {
                return s.e(
                  {
                    a: "14643a9d-1-" + n,
                    b: s.p({ "broker-code": e.code }),
                    c: s.t(e.name),
                    d: r.isMaintain(e),
                  },
                  (r.isMaintain(e), {}),
                  { e: r.isCurrentUse(e) },
                  (r.isCurrentUse(e), {}),
                  {
                    f:
                      o.actionType === o.BIZ_TYPE.SWITCH &&
                      e.code === o.selectedCode &&
                      !r.isMaintain(e),
                  },
                  (o.actionType !== o.BIZ_TYPE.SWITCH ||
                    e.code !== o.selectedCode ||
                    r.isMaintain(e),
                  {}),
                  (o.actionType, o.BIZ_TYPE.LOGIN, {}),
                  {
                    g: e.code,
                    h: s.o(
                      function (t) {
                        return r.onMainBrokerItemClick(e);
                      },
                      663,
                      e.code
                    ),
                  }
                );
              }),
              l: o.actionType === o.BIZ_TYPE.LOGIN,
            }
          : {},
        {
          m: s.o(function () {
            return r.nil && r.nil.apply(r, arguments);
          }, 664),
          n: s.n(o.showCustomNavbar ? "custom-navbar" : ""),
          o: s.o(function () {
            return r.onClose && r.onClose.apply(r, arguments);
          }, 665),
        }
      );
    },
  ],
  ["__scopeId", "data-v-14643a9d"],
]);
wx.createComponent(y);
