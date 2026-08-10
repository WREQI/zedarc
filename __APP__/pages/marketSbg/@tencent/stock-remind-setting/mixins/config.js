var e = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  t = [
    "R-001|131810|1|0.1|0|100",
    "R-002|131811|2|0.2|0|100",
    "R-003|131800|3|0.3|0|100",
    "R-004|131809|4|0.4|0|100",
    "R-007|131801|7|0.5|0|100",
    "R-014|131802|14|1|0|100",
    "R-028|131803|28|2|0|100",
    "R-091|131805|91|3|0|100",
    "R-182|131806|182|3|0|100",
    "GC001|204001|1|0.1|1|1000",
    "GC002|204002|2|0.2|1|1000",
    "GC003|204003|3|0.3|1|1000",
    "GC004|204004|4|0.4|1|1000",
    "GC007|204007|7|0.5|1|1000",
    "GC014|204014|14|1|1|1000",
    "GC028|204028|28|2|1|1000",
    "GC091|204091|91|3|1|1000",
    "GC182|204182|182|3|1|1000",
  ],
  l = [1, 2, 3, 4, 15, 16, 5, 6];
(exports.REMIND_TEMPLATE = [
  {
    label: "股价涨到",
    unit: "",
    type: 1,
    showBubble: !1,
    bubbleText: "priceUpBubbleText",
    chooseOn: !1,
    placeholder: "填写提醒值",
    selected: !1,
    value: "",
  },
  {
    label: "股价跌到",
    unit: "",
    type: 2,
    showBubble: !1,
    bubbleText: "priceDownBubbleText",
    chooseOn: !1,
    placeholder: "填写提醒值",
    selected: !1,
    value: "",
  },
  {
    label: "日涨幅超",
    unit: "%",
    type: 3,
    showBubble: !1,
    bubbleText: "zdfUpBubbleText",
    chooseOn: !1,
    placeholder: "填写提醒值",
    selected: !1,
    value: "",
  },
  {
    label: "日跌幅超",
    unit: "%",
    type: 4,
    seq: 0,
    showBubble: !1,
    bubbleText: "zdfDownBubbleText",
    chooseOn: !1,
    placeholder: "填写提醒值",
    selected: !1,
    value: "",
  },
  {
    label: "溢折率涨到",
    unit: "%",
    type: 15,
    showBubble: !1,
    bubbleText: "overflowRatioUpBubbleText",
    chooseOn: !1,
    placeholder: "填写提醒值",
    selected: !1,
    value: "",
  },
  {
    label: "溢折率跌到",
    unit: "%",
    type: 16,
    showBubble: !1,
    bubbleText: "overflowRatioDownBubbleText",
    chooseOn: !1,
    placeholder: "填写提醒值",
    selected: !1,
    value: "",
  },
  {
    label: "成交额超",
    unit: "万",
    type: 5,
    showBubble: !1,
    chooseOn: !1,
    placeholder: "填写提醒值",
    selected: !1,
    value: "",
  },
  {
    label: "主力资金",
    unit: "万",
    type: 6,
    showBubble: !1,
    chooseOn: !1,
    placeholder: "填写提醒值",
    selected: !1,
    value: "",
  },
  {
    label: "年化收益率涨到",
    unit: "%",
    type: 1,
    showBubble: !1,
    bubbleText: "priceUpBubbleText",
    chooseOn: !1,
    placeholder: "填写提醒值",
    selected: !1,
    value: "",
  },
]),
  (exports.SMART_REMIND_TEMPLATE = [
    { text: "净值更新提醒", name: "fund_nav_update", key: "fund_nav_update" },
    { text: "涨跌停提醒", name: "limit_up_down", key: "limit_up_down" },
    {
      text: "股价新高或新低提醒",
      etfText: "价格新高或新低提醒",
      name: "new_high_low",
      key: "new_high_low",
    },
    { text: "公司大事提醒", name: "big_event", key: "big_event" },
    { text: "大单交易提醒", name: "large_order", key: "large_order" },
  ]),
  (exports.getDebtMarketPeriod = function (e) {
    if (!e) return "";
    if (!e) return "";
    var l = e
        .toString()
        .trim()
        .replace(/[\uFF01-\uFF5E]/g, function (e) {
          return String.fromCharCode(e.charCodeAt(0) - 65248);
        })
        .toUpperCase()
        .replace(/\.$/, ""),
      o = t.find(function (e) {
        return e.split("|")[0] === l;
      });
    if (!o) return "";
    var b = o.split("|");
    return "".concat("0" === b[4] ? "深市" : "沪市").concat(b[2], "天期");
  }),
  (exports.sortRemindItemsByType = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      o =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "type";
    return e(t).sort(function (e, t) {
      var b = +(null == e ? void 0 : e[o]),
        u = +(null == t ? void 0 : t[o]),
        r = l.indexOf(b),
        n = l.indexOf(u),
        a = -1 === r ? Number.MAX_SAFE_INTEGER : r,
        i = -1 === n ? Number.MAX_SAFE_INTEGER : n,
        s = Number.isNaN(b) ? Number.MAX_SAFE_INTEGER : b,
        c = Number.isNaN(u) ? Number.MAX_SAFE_INTEGER : u;
      return a === i ? s - c : a - i;
    });
  });
