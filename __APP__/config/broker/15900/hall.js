var o = require("../../../@babel/runtime/helpers/createClass"),
  e = require("../../../@babel/runtime/helpers/classCallCheck"),
  n = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  t = require("../../../@babel/runtime/helpers/inherits"),
  a = require("../../../@babel/runtime/helpers/createSuper"),
  c = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var b = Object.defineProperty,
  p = function (o, e, n) {
    return (
      (function (o, e, n) {
        e in o
          ? b(o, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (o[e] = n);
      })(o, "symbol" != c(e) ? e + "" : e, n),
      n
    );
  },
  i = require("../index.js"),
  l = require("./base.js"),
  s = require("../../../utils/getPlatform.js").getPlatform(),
  r = s.isZxg,
  m = s.isInMainXcx,
  w = s.isLightWeb,
  h = "",
  d = "";
r
  ? ((h = "2003000000000"), (d = "0401001"))
  : m
  ? ((h = "2353000000000"), (d = "0402002"))
  : w
  ? ((h = "2455000000000"), (d = "0402003"))
  : ((h = "2429000000000"), (d = "0402001"));
var u = function (o) {
    return l.base.testDomain === o;
  },
  y = new ((function (c) {
    t(i, c);
    var b = a(i);
    function i() {
      var o;
      return (
        e(this, i),
        (o = b.apply(this, arguments)),
        p(n(o), "personal", {
          fundaccount: { show: !0, enable: !0 },
          dealername: { show: !0 },
          dealerbranchname: { show: !0 },
          profilename: { show: !0 },
          credentialid: { show: !0, enable: !0 },
          degree: { show: !0, enable: !0 },
          mobilephone: { show: !0, enable: !0 },
          contactaddr: { show: !1, enable: !0 },
          job: { show: !0, enable: !0 },
          companyaddr: { show: !1, enable: !0 },
          posttitle: { show: !1, enable: !0 },
          yearincome: { show: !1, enable: !1 },
          cardtailnumber: { show: !0, enable: !0 },
          riskmodel: { show: !0, enable: !0 },
          jobfilter: { enable: !1 },
          profileupdate: { show: !1 },
        }),
        p(n(o), "newstock", {
          kcb: !0,
          booking: {
            protocols: [
              { name: "国金证券股份有限公司预约打新协议", key: "gjzq-yydxxy" },
              {
                name: "国金证券股份有限公司关于新股申购的风险揭示书",
                key: "gjzq-gyxgsgdfxjss",
              },
              {
                name: "关于可转债、可交债申购的风险揭示书 ",
                key: "gjzq-gykzzkjzsgdfxjss",
              },
            ],
          },
        }),
        p(n(o), "setting", { debt: !0 }),
        p(n(o), "business", { kcb: !0 }),
        p(n(o), "loginInfo", !1),
        p(n(o), "bankcard", { changePreCheck: !0 }),
        p(n(o), "third", {
          enable: !0,
          tccMode: "2",
          noEncrypt: !0,
          needOpenid: !0,
          extraOption: { channel_type: h },
          entry: {
            kcb: "https://".concat(
              u(null == location ? void 0 : location.hostname)
                ? "fzwebapps.yjbtest.com"
                : "webapps.yongjinbao.com.cn",
              "/yjbwebmoc/moc/web/moc-pro/build/goGroupView4qq.html?groupName=stibQueryForWeb&app_id=yjbweb"
            ),
            kechuanggrowth: "https://".concat(
              u(null == location ? void 0 : location.hostname)
                ? "fzwebapps.yjbtest.com"
                : "webapps.yongjinbao.com.cn",
              "/yjbwebmoc/moc/web/moc-pro/build/goGroupView4qq.html?groupName=openkcbczcForWeb&app_id=yjbweb"
            ),
            gem: "https://".concat(
              u(null == location ? void 0 : location.hostname)
                ? "fzwebapps.yjbtest.com"
                : "webapps.yongjinbao.com.cn",
              "/yjbwebmoc/moc/web/moc-pro/build/goGroupView4qq.html?groupName=startUpBoardQueryForWeb&app_id=yjbweb"
            ),
            personal: "https://".concat(
              u(null == location ? void 0 : location.hostname)
                ? "fzwebapps.yjbtest.com"
                : "webapps.yongjinbao.com.cn",
              "/yjbwebmoc/moc/web/moc-pro/build/goGroupView4qq.html?groupName=personalForWeb&app_id=yjbweb"
            ),
            risk: "https://".concat(
              u(null == location ? void 0 : location.hostname)
                ? "fzwebapps.yjbtest.com"
                : "webapps.yongjinbao.com.cn",
              "/yjbwebmoc/moc/web/moc-pro/build/goGroupView4qq.html?groupName=riskForWeb&app_id=yjbweb"
            ),
            idcard: "https://".concat(
              u(null == location ? void 0 : location.hostname)
                ? "fzwebapps.yjbtest.com"
                : "webapps.yongjinbao.com.cn",
              "/yjbwebmoc/moc/web/moc-pro/build/goGroupView4qq.html?groupName=idupdateForWeb&app_id=yjbweb"
            ),
            bankcardchange: "https://".concat(
              u(null == location ? void 0 : location.hostname)
                ? "fzwebapps.yjbtest.com"
                : "webapps.yongjinbao.com.cn",
              "/yjbwebmoc/moc/web/moc-pro/build/goGroupView4qq.html?groupName=thirdpartForWeb&app_id=yjbweb"
            ),
            specify: "https://".concat(
              u(null == location ? void 0 : location.hostname)
                ? "fzwebapps.yjbtest.com"
                : "webapps.yongjinbao.com.cn",
              "/yjbwebmoc/moc/web/moc-pro/build/goGroupView4qq.html?groupName=specifiedForWeb&app_id=yjbweb"
            ),
            replenish: "https://".concat(
              u(null == location ? void 0 : location.hostname)
                ? "fzwebapps.yjbtest.com"
                : "webapps.yongjinbao.com.cn",
              "/yjbwebmoc/moc/web/moc-pro/build/goGroupView4qq.html?groupName=stockAForWeb&app_id=yjbweb"
            ),
            st: "https://".concat(
              u(null == location ? void 0 : location.hostname)
                ? "fzwebapps.yjbtest.com"
                : "webapps.yongjinbao.com.cn",
              "/yjbwebmoc/moc/web/moc-pro/build/goGroupView4qq.html?groupName=riskwarnForWeb&app_id=yjbweb"
            ),
            changephone: "https://".concat(
              u(null == location ? void 0 : location.hostname)
                ? "fzwebapps.yjbtest.com"
                : "webapps.yongjinbao.com.cn",
              "/yjbwebmoc/moc/web/moc-pro/build/goGroupView4qq.html?groupName=personalForWeb&app_id=yjbweb"
            ),
            kzzopen: "https://".concat(
              u(null == location ? void 0 : location.hostname)
                ? "fzwebapps.yjbtest.com"
                : "webapps.yongjinbao.com.cn",
              "/yjbwebmoc/moc/web/moc-pro/build/goGroupView4qq.html?groupName=holderRightsForWeb&app_id=yjbweb"
            ),
            aboutcompany: "https://".concat(
              u(null == location ? void 0 : location.hostname)
                ? "fzwebapps.yjbtest.com"
                : "webapps.yongjinbao.com.cn",
              "/yjbwebcommon/common/page/gjInfo.html?showContact=1"
            ),
            duotianqiopen: "https://".concat(
              u(null == location ? void 0 : location.hostname)
                ? "fzwebapps.yjbtest.com"
                : "webapps.yongjinbao.com.cn",
              "/yjbwebmoc/moc/web/moc-pro/build/goGroupView4qq.html?groupName=quoteRepurchaseForWeb&app_id=yjbweb"
            ),
            shadowaccount: "https://"
              .concat(
                u(null == location ? void 0 : location.hostname)
                  ? "fzwebapps.yjbtest.com"
                  : "webapps.yongjinbao.com.cn",
                "/yjbwebservice/core/static/login-bridge.html?account_type=0&back_url="
              )
              .concat(
                encodeURIComponent(
                  "https://" +
                    (u(null == location ? void 0 : location.hostname)
                      ? "fzwebapps.yjbtest.com"
                      : "webapps.yongjinbao.com.cn") +
                    "/yjbshadowaccount/shadow-account/explain.html?channel_type="
                      .concat(h, "&entrance_type=")
                      .concat(d)
                )
              ),
            resetpwd: "https://".concat(
              u(null == location ? void 0 : location.hostname)
                ? "fzwebapps.yjbtest.com"
                : "webapps.yongjinbao.com.cn",
              "/yjbwebmoc/moc/web/moc-pro/build/goGroupView.html?groupName=goClearPwdForWeb&app_id=yjbweb"
            ),
            changefundpwd: "https://".concat(
              u(null == location ? void 0 : location.hostname)
                ? "fzwebapps.yjbtest.com"
                : "webapps.yongjinbao.com.cn",
              "/yjbwebmoc/moc/web/moc-pro/build/goGroupView4qq.html?groupName=resetFundPwdForWeb&app_id=yjbweb"
            ),
            changetradepwd: "https://".concat(
              u(null == location ? void 0 : location.hostname)
                ? "fzwebapps.yjbtest.com"
                : "webapps.yongjinbao.com.cn",
              "/yjbwebmoc/moc/web/moc-pro/build/goGroupView4qq.html?groupName=resetTradePwdForWeb&app_id=yjbweb"
            ),
            shareholder: "https://".concat(
              u(null == location ? void 0 : location.hostname)
                ? "fzwebapps.yjbtest.com"
                : "webapps.yongjinbao.com.cn",
              "/yjbwebmoc/moc/web/moc-pro/build/goGroupView4qq.html?groupName=stockA&app_id=yjbweb"
            ),
            aiSelect: "https://"
              .concat(
                u(null == location ? void 0 : location.hostname)
                  ? "fzwebapps.yjbtest.com"
                  : "webapps.yongjinbao.com.cn",
                "/yjbwebservice/core/static/login-bridge.html?account_type=0&back_url="
              )
              .concat(
                encodeURIComponent(
                  "https://" +
                    (u(null == location ? void 0 : location.hostname)
                      ? "fzwebapps.yjbtest.com"
                      : "webapps.yongjinbao.com.cn") +
                    "/comarket/userCenter/bridge-channel.html?channel_type="
                      .concat(h, "&entrance_type=")
                      .concat(d, "&tabKey=AI_SELECT_V2")
                )
              ),
            bj: "https://".concat(
              u(null == location ? void 0 : location.hostname)
                ? "fzwebapps.yjbtest.com"
                : "webapps.yongjinbao.com.cn",
              "/yjbwebmoc/moc/web/moc-pro/build/goGroupView4qq.html?groupName=stockBeiQueryForWeb&app_id=yjbweb&channel_type=2003000000000"
            ),
            stocktransfer: "https://".concat(
              u(null == location ? void 0 : location.hostname)
                ? "fzwebapps.yjbtest.com"
                : "webapps.yongjinbao.com.cn",
              "/yjbwebmoc/moc/web/moc-pro/build/goGroupView4qq.html?groupName=specialRightsForWeb&app_id=yjbweb&channel_type=2003000000000"
            ),
            stocktransferAuth: "https://".concat(
              u(null == location ? void 0 : location.hostname)
                ? "fzwebapps.yjbtest.com"
                : "webapps.yongjinbao.com.cn",
              "/yjbwebmoc/moc/web/moc-pro/build/goGroupView4qq.html?groupName=delistRightsForWeb&app_id=yjbweb&channel_type=2003000000000"
            ),
            MarginAssetIndex: "https://".concat(
              u(null == location ? void 0 : location.hostname)
                ? "zzwebh5ftxcx.yjbtest.com"
                : "fchatwebtrade.yongjinbao.com.cn",
              "/index.html?channel_id=200300&channelType=2003000000000#!/deal/index_rzrq"
            ),
            MarginTradeIndex: "https://".concat(
              u(null == location ? void 0 : location.hostname)
                ? "zzwebh5ftxcx.yjbtest.com"
                : "fchatwebtrade.yongjinbao.com.cn",
              "/index.html#!/deal/rzrqstock?tab=0&type=3&channel_id=200300&channelType=2003000000000"
            ),
            MarginIpoIndex: "https://".concat(
              u(null == location ? void 0 : location.hostname)
                ? "zzwebh5ftxcx.yjbtest.com"
                : "fchatwebtrade.yongjinbao.com.cn",
              "/dist/src/new-stock/index.html#/new-stock/index?logintype=2&tokentype=1&channel_id=200300&channelType=2003000000000"
            ),
            MarginFundTransfer: "https://".concat(
              u(null == location ? void 0 : location.hostname)
                ? "zzwebh5ftxcx.yjbtest.com"
                : "fchatwebtrade.yongjinbao.com.cn",
              "/dist/src/account-transfer/index.html#/bank-bond-bankcr?type=into&logintype=2&channel_id=200300&channelType=2003000000000"
            ),
          },
        }),
        p(n(o), "supportedBanks", [
          "ICBC",
          "ABC",
          "BOC",
          "CCB",
          "COMM",
          "CMB",
          "CEB",
          "GDB",
          "HXB",
        ]),
        p(n(o), "password", { reset: { hide: !0 } }),
        o
      );
    }
    return o(i);
  })(i.BrokerHall))();
exports.hall = y;
