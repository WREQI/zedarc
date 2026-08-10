var e = require("../../../@babel/runtime/helpers/createClass"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  i = require("../../../@babel/runtime/helpers/assertThisInitialized"),
  a = require("../../../@babel/runtime/helpers/inherits"),
  t = require("../../../@babel/runtime/helpers/createSuper"),
  n = require("../../../@babel/runtime/helpers/typeof");
require("../../../app.js");
var l = Object.defineProperty,
  o = function (e, r, i) {
    return (
      (function (e, r, i) {
        r in e
          ? l(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
          : (e[r] = i);
      })(e, "symbol" != n(r) ? r + "" : r, i),
      i
    );
  },
  u = new ((function (n) {
    a(u, n);
    var l = t(u);
    function u() {
      var e;
      return (
        r(this, u),
        (e = l.apply(this, arguments)),
        o(i(e), "functions", {
          index: {
            entry: [
              "marginTrade",
              "marginFundTransfer",
              "marginRepay",
              "marginCollateral",
              "marginContract",
              "marginTradeRecord",
              "marginFundRecord",
              "marginAll",
            ],
            aics: { show: !0 },
          },
          all: {
            entry: [
              { name: "account", title: "账户", entry: ["account", "setting"] },
              {
                name: "trade",
                title: "交易",
                entry: [
                  "marginTrade",
                  "marginRepay",
                  "marginTradeRecord",
                  "safesetting",
                ],
              },
              {
                name: "fund",
                title: "资金",
                entry: [
                  "marginFundRecord",
                  "marginCollateral",
                  "marginFundTransfer",
                  "marginInterest",
                  "marginContract",
                ],
              },
              {
                name: "business",
                title: "网厅",
                entry: ["changepwd", "resetpwd"],
              },
            ],
          },
        }),
        o(i(e), "protocols", {
          contract: [{ name: "展期须知", key: "cmschina_zqxz", id: "20" }],
        }),
        o(i(e), "indicators", []),
        o(i(e), "ratios", [
          {
            key: "0",
            value: 100,
            weight: 0,
            fill: "#262E40",
            color: "#262E40",
            text: "",
          },
          {
            key: "1",
            value: 110,
            weight: 8.325,
            fill: "l(90) 0:#25C84A 1:#1CAA3C",
            color: "#1CAA3C",
            text: "请于T+1日上午收市前追加担保物或偿还负债",
          },
          {
            key: "2",
            value: 140,
            weight: 24.975,
            fill: "l(90) 0:#21DD31 1:#25C74A",
            color: "#1AC93C",
            text: "请尽快追加担保物或偿还负债",
          },
          {
            key: "3",
            value: 150,
            weight: 33.333,
            fill: "l(40) 0:#22DD31 1:#54E11E",
            color: "#1FD91A",
            text: "请关注账户风险，做好追加保证金准备",
          },
          {
            key: "4",
            value: 300,
            weight: 66.667,
            fill: "l(0) 0:#53E21F 1:#82EF15",
            color: "#32D311",
            text: "未达到提取线，保证金不可提取",
          },
          {
            key: "5",
            value: 500,
            weight: 100,
            fill: "l(90) 0:#3077EC 1:#629DFF",
            color: "#3077EC",
            text: "可正常提取",
          },
        ]),
        o(i(e), "maxRatioValue", 1e10),
        o(i(e), "lessonIds", [
          { key: "guide.trade", id: "11" },
          { key: "guide.repay", id: "12" },
          { key: "guide.repay-choose", id: "13" },
          { key: "guide.collateral", id: "14" },
          { key: "guide.collateral-choose", id: "15" },
        ]),
        e
      );
    }
    return e(u);
  })(require("../index.js").BrokerMargin))();
exports.margin = u;
