var e = require("../../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../../@babel/runtime/helpers/createClass"),
  r = require("../../../../@babel/runtime/helpers/inherits"),
  t = require("../../../../@babel/runtime/helpers/createSuper");
require("../../../../app.js");
var o = require("../../../../common/vendor.js"),
  i = require("../../../../bizs/protocol/rich-text-protocol/BaseProtocolConfig.js"),
  a = {
    components: {
      Protocol: function () {
        return "../../protocol.js";
      },
    },
    props: { matchInfo: { type: Object, default: function () {} } },
    setup: function (a) {
      var c = o.ref("gem"),
        u = o.ref("创业板市场股票交易权限开通"),
        s = new ((function (o) {
          r(a, o);
          var i = t(a);
          function a() {
            return e(this, a), i.apply(this, arguments);
          }
          return (
            n(a, [
              {
                key: "pname",
                get: function () {
                  return u.value;
                },
              },
              {
                key: "priskLevel",
                get: function () {
                  return "中等偏高风险";
                },
              },
              {
                key: "pinvestTerm",
                get: function () {
                  return "0-1年";
                },
              },
              {
                key: "pinvestRange",
                get: function () {
                  return "权益类";
                },
              },
              {
                key: "termTip",
                get: function () {
                  return this.flagTerm ? "不一致" : "一致";
                },
              },
              {
                key: "rangeTip",
                get: function () {
                  return this.flagInRange ? "不一致" : "一致";
                },
              },
              {
                key: "levelTip",
                get: function () {
                  var e =
                    '其风险等级与您在客户风险评估中所显示的风险承受能力等级<span class="blue">一致</span>。';
                  return (
                    this.flagRisk &&
                      (e =
                        '其风险等级<span class="blue">高于</span>您在客户风险评估中所显示的风险承受能力等级。'),
                    e
                  );
                },
              },
            ]),
            a
          );
        })(i.BaseProtocolConfig))({ matchInfo: a.matchInfo, biz: c.value });
      return o.provide("protocolConfig", s), { biz: c, pname: u };
    },
    methods: {
      handleCancel: function () {
        this.$emit("cancel");
      },
      handleConfirm: function () {
        this.$emit("confirm");
      },
    },
  };
Array || o.resolveComponent("Protocol")();
var c = o._export_sfc(a, [
  [
    "render",
    function (e, n, r, t, i, a) {
      return {
        a: o.o(a.handleConfirm),
        b: o.o(a.handleCancel),
        c: o.p({
          "protocol-key": "zhongjincaifu_base_unmatch",
          "match-info": r.matchInfo,
        }),
      };
    },
  ],
]);
wx.createComponent(c);
