var e = require("../../../@babel/runtime/helpers/createClass"),
  t = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  r = require("../../../@babel/runtime/helpers/inherits"),
  s = require("../../../@babel/runtime/helpers/createSuper"),
  g = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var a = Object.defineProperty,
  b = function (e, t, i) {
    return (
      (function (e, t, i) {
        t in e
          ? a(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[t] = i);
      })(e, "symbol" != g(t) ? t + "" : t, i),
      i
    );
  },
  n = new ((function (g) {
    r(n, g);
    var a = s(n);
    function n() {
      var e;
      return (
        t(this, n),
        (e = a.apply(this, arguments)),
        b(i(e), "detailTimeSupportSecond", !0),
        b(i(e), "activiateGuide", {
          cmb: [
            {
              title: "1. 进入首页搜索“银证转账”",
              imgUrl:
                "https://st.gtimg.com/design/6708b4b8646b756f18fe33639462e2f1.png",
            },
            {
              title: "2. 点击搜索结果“银证转账”",
              imgUrl:
                "https://st.gtimg.com/design/d3144715b33b8613aa1e2c2c2617bed6.png",
            },
            {
              title: "3. 输入密码",
              imgUrl:
                "https://st.gtimg.com/design/41448feb7ef4a9e278b2e918b3a11388.png",
            },
            {
              title: "4. 输入金额并提交，完成激活",
              imgUrl:
                "https://st.gtimg.com/design/1cc5d4f9b1a4a9eda489ccd3bb3320ad.png",
            },
          ],
          pab: [
            {
              title: "1. 登录平安口袋银行APP，搜索“银证转账”",
              imgUrl:
                "https://st.gtimg.com/design/3840a5d24c2b28fd6ffc4f70e36bdb20.png",
            },
            {
              title: "2. 点击搜索结果“银证转账”",
              imgUrl:
                "https://st.gtimg.com/design/4813d199ccfeb699c716f3c3397e613a.png",
            },
            {
              title: "3. 输入金额并提交，完成激活",
              imgUrl:
                "https://st.gtimg.com/design/1095eb38a77e21118369161dd07b838a.png",
            },
          ],
          spdb: [
            {
              title: "1. 登录浦发银行APP，点击“全部” ",
              imgUrl:
                "https://st.gtimg.com/design/b44094aebac27430b4ad9b1b6ebd4025.png",
            },
            {
              title: "2. 点击“证券”",
              imgUrl:
                "https://st.gtimg.com/design/ce0ff38cef61c8a73f0b7b7f60e3de49.png",
            },
            {
              title: "3. 点击“立即激活”",
              imgUrl:
                "https://st.gtimg.com/design/fa58ec4d7a60a29699db1f6ac8139393.png",
              tips: [
                {
                  text: "若不通过弹窗可点击底部的余额tab进入我的三方存管账户页",
                  imgUrl:
                    "https://st.gtimg.com/design/1c5d6a5a700f2867580b269b93677fbf.png",
                },
              ],
            },
            {
              title: "4. 点击“立即激活”，进入签约信息激活页",
              imgUrl:
                "https://st.gtimg.com/design/45bd839294075c9c72bff54f3d7ab26f.png",
            },
            {
              title: "5. 点击“激活”按钮，完成激活 ",
              imgUrl:
                "https://st.gtimg.com/design/3fa340b2a872b8c86a8fd69babb7a8b2.png",
            },
          ],
        }),
        b(i(e), "idCardExpireRecently", {
          isDisableForIn: !1,
          isDisableForOut: !0,
          tips: "身份证已过有效期，出金受限",
        }),
        b(i(e), "idCardExpired", {
          isDisableForIn: !0,
          isDisableForOut: !0,
          tips: "身份证已过有效期，出入金受限",
        }),
        e
      );
    }
    return e(n);
  })(require("../index.js").BrokerTransfer))();
exports.transfer = n;
