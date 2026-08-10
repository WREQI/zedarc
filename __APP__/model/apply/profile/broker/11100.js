require("../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../@babel/runtime/helpers/objectSpread2");
require("../../../../app.js");
var i = require("../utils/string.js"),
  n = require("../../../../service/aegis/platform/not-wujie.js"),
  r = { 6: ["211", "212"], 10: ["210", "211", "212"] },
  a = {
    linkageRule: function (i, a) {
      var t,
        d,
        o,
        s,
        l,
        u,
        c = i.data,
        m = i.item,
        f = a.modifiedKey,
        v = a.modifiedVal.newVal;
      if ("edu" === f) {
        var p =
          null == (d = null == (t = a.dictsList) ? void 0 : t.job)
            ? void 0
            : d.slice();
        if (!p)
          return (
            n.aegisReporter.reportEvent(
              "MONITOR-APPLY-PROFILE-INIT-FAIL-LINK",
              { ext2: JSON.stringify(a) }
            ),
            Object.assign(c, { company: "" }),
            { data: c, item: m }
          );
        var b =
          (null ==
          (u =
            null ==
            (l =
              null ==
              (s =
                null == (o = null == a ? void 0 : a.formList)
                  ? void 0
                  : o.filter)
                ? void 0
                : s.call(o, function (e) {
                    return "job" === (null == e ? void 0 : e.key);
                  }))
              ? void 0
              : l[0])
            ? void 0
            : u.data) || {};
        r[v] &&
          ((p = p.filter(function (e) {
            return !r[v].includes(e.id);
          })),
          r[v].forEach(function (e) {
            var i;
            null == (i = null == a ? void 0 : a.formList) ||
              i.forEach(function (i) {
                var n;
                "job" === (null == i ? void 0 : i.key) &&
                  (null == (n = null == i ? void 0 : i.feIds)
                    ? void 0
                    : n.includes(e)) &&
                  Object.assign(c, { job: "" });
              });
          })),
          Object.defineProperty(p, "get", {
            enumerable: !1,
            value: function (e) {
              return this.find(function (i) {
                return i.id === e;
              });
            },
          }),
          Object.assign(m, {
            job: {
              data: e(e({}, b), {}, { val: p }),
              hidden: !1,
              disabled: p.length <= 1,
            },
          });
      }
      return Object.assign(c, { company: "" }), { data: c, item: m };
    },
    dictionary: {
      credit_record: [
        { name: "无不良诚信记录", id: "07", special: !0, single: !0 },
        { name: "证券经营机构内部诚信记录", id: "00" },
        { name: "中国人民银行征信中心", id: "01" },
        { name: "最高人民法院失信被执行名单", id: "02" },
        { name: "工商行政管理机构", id: "03" },
        { name: "税务管理机构", id: "04" },
        { name: "监管机构、自律组织", id: "X1" },
        { name: "恶意维权等不当行为信息", id: "06" },
        { name: "其他违规情况", id: "99" },
      ],
      tax: [
        { name: "仅为中国税收居民", id: "0" },
        {
          name: "仅为非居民",
          id: "1",
          show: {
            errInfo:
              "<span class=red>网上开户仅适用于中国税收居民，您可前往附近营业部办理开户或联系中信建投证券客服电话95587</span>",
          },
        },
        {
          name: "本人既是中国纳税居民又是其它国家(地区)纳税居民",
          id: "2",
          show: {
            errInfo:
              "<span class=red>网上开户仅适用于中国税收居民，您可前往附近营业部办理开户或联系中信建投证券客服电话95587</span>",
          },
        },
      ],
      year_income: [
        { name: "0-12万", id: "0" },
        { name: "12-30万", id: "1" },
        { name: "30-50万", id: "2" },
        { name: "50-100万", id: "3" },
        { name: "100-300万", id: "4" },
        { name: "300万以上", id: "5" },
      ],
    },
    itemConfig: {
      mail_address: {
        minLength: 0,
        maxLength: 64,
        valid: function (e) {
          var n = e.address,
            r = e.topTwoAddress,
            a = e.street,
            t = i.getChineseStrLength(n);
          if (t < 24 || t > 64)
            throw "联系地址不能少于24个字符、不能超过64个字符";
          if (i.hasRepeatStr({ str: n, length: 4 }))
            throw "联系地址不能含有3个以上重复字";
          var d = ["<", ">", "'"];
          if (i.judgeStrInclude(n, d))
            throw "联系地址含".concat(d.join("，"), "等特殊字符，请重新填写");
          if (r && a) {
            var o = [];
            if (
              (["北京市", "上海市", "天津市", "重庆市"].includes(r[0])
                ? o.push(r[0])
                : (o = r),
              o.some(function (e) {
                return a.indexOf(e) > -1;
              }))
            )
              throw "联系地址不能重复省市名称";
          }
        },
      },
    },
    jobCompanyDisabledList: ["230", "236", "234"],
  };
exports.brokerConfig = a;
