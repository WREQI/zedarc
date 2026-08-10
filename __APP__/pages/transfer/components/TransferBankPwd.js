var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var r = require("../../../common/vendor.js"),
  t = require("../../../utils/crypt/index.js"),
  a = require("../../../stores/user/useUserinfo.js");
require("../../../service/broker.js");
var o = require("../../../config/broker/11100/index.js"),
  s = {
    name: "TransferBankPwd",
    components: {
      StCellGroup: function () {
        return "../../../common/components/CellGroup/index.js";
      },
      StCell: function () {
        return "../../../common/components/Cell/index.js";
      },
    },
    emits: ["click"],
    props: {
      transferData: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function () {
      return {
        userinfo: r.storeToRefs(a.useUserinfoStore()).userinfo,
        accountName: o.brokerConfig.bind.accountCalled || "资金账号",
      };
    },
    data: function () {
      return { bankPassword: "", btnLoading: !1 };
    },
    methods: {
      handleClickBankPassword: function () {
        var a = this;
        return n(
          e().mark(function n() {
            var o;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (a.btnLoading = !0),
                        (e.next = 4),
                        t.cryptPasswd(a.bankPassword)
                      );
                    case 4:
                      (o = e.sent),
                        (a.btnLoading = !1),
                        a.$emit("click", o),
                        (e.next = 11);
                      break;
                    case 8:
                      (e.prev = 8),
                        (e.t0 = e.catch(0)),
                        (a.btnLoading = !1),
                        r.index.showToast({ title: e.t0.retmsg });
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              n,
              null,
              [[0, 8]]
            );
          })
        )();
      },
    },
  };
Array ||
  (r.resolveComponent("st-cell") + r.resolveComponent("st-cell-group"))();
var i = r._export_sfc(s, [
  [
    "render",
    function (e, n, t, a, o, s) {
      return {
        a: r.t(t.transferData.bankName),
        b: r.t(t.transferData.bankName),
        c: r.p({ title: a.accountName, value: a.userinfo.fundaccount }),
        d: o.bankPassword,
        e: r.o(function (e) {
          return (o.bankPassword = e.detail.value);
        }),
        f: r.p({ title: "银行密码" }),
        g: !o.bankPassword.length || o.btnLoading,
        h: r.o(function () {
          return (
            s.handleClickBankPassword &&
            s.handleClickBankPassword.apply(s, arguments)
          );
        }),
      };
    },
  ],
]);
wx.createComponent(i);
