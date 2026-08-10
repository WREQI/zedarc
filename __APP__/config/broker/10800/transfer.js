var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  r = require("../../../@babel/runtime/helpers/inherits"),
  s = require("../../../@babel/runtime/helpers/createSuper"),
  a = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var l = Object.defineProperty,
  n = function (e, t, i) {
    return (
      (function (e, t, i) {
        t in e
          ? l(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i);
      })(e, "symbol" != a(t) ? t + "" : t, i),
      i
    );
  },
  g = new ((function (a) {
    r(g, a);
    var l = s(g);
    function g() {
      var e;
      return (
        t(this, g),
        (e = l.apply(this, arguments)),
        n(i(e), "detailTimeSupportSecond", !1),
        n(i(e), "transferTime", function () {
          return e.bankTime.default;
        }),
        n(i(e), "bankTime", {
          default: { startTime: [8, 30, 0], endTime: [16, 0, 0] },
          cmb: { startTime: [0, 0, 0], endTime: [24, 0, 0] },
        }),
        n(i(e), "realTimeTipsText", { cmb: "预计实时到账" }),
        n(i(e), "activiateGuide", {
          cmb: [
            {
              title: "1. 进入首页搜索“银证转账”",
              imgUrl:
                "https://st.gtimg.com/design/537e1c8a08b42d12fdcff4de80a05d88.png",
            },
            {
              title: "2. 点击搜索结果“银证转账”",
              imgUrl:
                "https://st.gtimg.com/design/322dd1211ed78b00504c7e5ce2bbe22b.png",
            },
            {
              title: "3. 输入密码",
              imgUrl:
                "https://st.gtimg.com/design/9e445ae673a1275800ac21fd01cacd8f.png",
            },
            {
              title: "4. 输入金额并提交，完成激活",
              imgUrl:
                "https://st.gtimg.com/design/6eb1a880b2416966543b7651545822eb.png",
            },
          ],
          pab: [
            {
              title: "1. 登录平安口袋银行APP，搜索“银证转账”",
              imgUrl:
                "https://st.gtimg.com/design/51bae8bb2ee739c1df9d4863a2fb4651.png",
            },
            {
              title: "2. 点击搜索结果“银证转账”",
              imgUrl:
                "https://st.gtimg.com/design/6f8ce328ab8cf1cab768df52d30f4610.png",
            },
            {
              title: "3. 输入金额并提交，完成激活",
              imgUrl:
                "https://st.gtimg.com/design/eb4a1fedd9bda173b2906b047dd22f7c.png",
            },
          ],
          spdb: [
            {
              title: "1. 登录浦发银行APP，点击“全部” ",
              imgUrl:
                "https://st.gtimg.com/design/5c43acaea359cbb35fa2b2e970daf64d.png",
            },
            {
              title: "2. 点击“证券”",
              imgUrl:
                "https://st.gtimg.com/design/c8ed599ebb3d3702ffb4a937518ed1d0.png",
            },
            {
              title: "3. 点击“立即激活”",
              imgUrl:
                "https://st.gtimg.com/design/4338faaf32d11b3217cea77076898718.png",
              tips: [
                {
                  text: "若不通过弹窗可点击底部的余额tab进入我的三方存管账户页",
                  imgUrl:
                    "https://st.gtimg.com/design/f092cdfbe118c83009638fe63c4e0195.png",
                },
              ],
            },
            {
              title: "4. 点击“立即激活”，进入签约信息激活页",
              imgUrl:
                "https://st.gtimg.com/design/0eface4940b403e1b93ccc92ee6c8b2f.png",
            },
            {
              title: "5. 点击“激活”按钮，完成激活 ",
              imgUrl:
                "https://st.gtimg.com/design/cd666774a16b5843b98f8080e32814d3.png",
            },
          ],
        }),
        n(i(e), "transferClassify", [
          { text: "全部", value: "0" },
          { text: "转入", value: "1" },
          { text: "转出", value: "2" },
          { text: "买入", value: "3" },
          { text: "卖出", value: "4" },
          { text: "分红派息", value: "5" },
          { text: "通用回购", value: "6" },
          { text: "余额增值", value: "7" },
        ]),
        n(i(e), "fundsRecordsStatus", [
          { text: "全部", value: "0" },
          { text: "成功", value: "3" },
          { text: "失败", value: "4" },
          { text: "在途", value: "12" },
          { text: "部分成功", value: "11" },
        ]),
        n(i(e), "transferNewVersionDate", "20240831"),
        n(i(e), "hideBulletin", !0),
        n(i(e), "idCardExpireRecently", {
          isDisableForIn: !1,
          isDisableForOut: !0,
          tips: "身份证已过有效期，出金受限",
        }),
        n(i(e), "idCardExpired", {
          isDisableForIn: !1,
          isDisableForOut: !0,
          tips: "身份证已过有效期，出金受限",
        }),
        e
      );
    }
    return e(g);
  })(require("../index.js").BrokerTransfer))();
exports.transfer = g;
