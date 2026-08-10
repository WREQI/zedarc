require("../../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../../app.js");
var n = require("../utils/index.js"),
  e = require("../../../../common/components/Dialog/index.js"),
  o = {
    linkageRule: function (n, e) {
      return { data: n.data, item: n.item };
    },
    dictionary: {
      tax: [
        { name: "仅为中国税收居民", id: "0" },
        {
          name: "仅为非居民",
          id: "1",
          show: {
            errInfo:
              "<span class=red>网上开户仅适用于中国税收居民，您可前往附近营业部办理开户或联系国信证券客服电话95536</span>",
          },
        },
        {
          name: "本人既是中国纳税居民又是其它国家(地区)纳税居民",
          id: "2",
          show: {
            errInfo:
              "<span class=red>网上开户仅适用于中国税收居民，您可前往附近营业部办理开户或联系国信证券客服电话95536</span>",
          },
        },
      ],
      credit_record: [
        { name: "无任何不良诚信记录", id: "8", special: !0, single: !0 },
        {
          name: "中国人民银行征信中心",
          id: "0",
          show: {
            errInfo:
              "<span class=red>有不良诚信记录暂无法网上开户，请重新选择诚信记录或联系附近券商营业部办理开户</span>",
          },
        },
        {
          name: "最高人民法院失信被执行人名单",
          id: "1",
          show: {
            errInfo:
              "<span class=red>有不良诚信记录暂无法网上开户，请重新选择诚信记录或联系附近券商营业部办理开户</span>",
          },
        },
        {
          name: "工商行政管理机构",
          id: "2",
          show: {
            errInfo:
              "<span class=red>有不良诚信记录暂无法网上开户，请重新选择诚信记录或联系附近券商营业部办理开户</span>",
          },
        },
        {
          name: "税务管理机构",
          id: "3",
          show: {
            errInfo:
              "<span class=red>有不良诚信记录暂无法网上开户，请重新选择诚信记录或联系附近券商营业部办理开户</span>",
          },
        },
        {
          name: "监管机构、自律组织",
          id: "4",
          show: {
            errInfo:
              "<span class=red>有不良诚信记录暂无法网上开户，请重新选择诚信记录或联系附近券商营业部办理开户</span>",
          },
        },
        {
          name: "投资者在证券经营机构的失信记录",
          id: "5",
          show: {
            errInfo:
              "<span class=red>有不良诚信记录暂无法网上开户，请重新选择诚信记录或联系附近券商营业部办理开户</span>",
          },
        },
        {
          name: "交易违规情况",
          id: "9",
          show: {
            errInfo:
              "<span class=red>有不良诚信记录暂无法网上开户，请重新选择诚信记录或联系附近券商营业部办理开户</span>",
          },
        },
        {
          name: "其他违规情况",
          id: "7",
          show: {
            errInfo:
              "<span class=red>有不良诚信记录暂无法网上开户，请重新选择诚信记录或联系附近券商营业部办理开户</span>",
          },
        },
      ],
    },
    itemConfig: {
      job: {
        confirm: function (o, s, i) {
          var a = s.age,
            r = s.sex === n.sexUtil.SEX_TYPE.MALE,
            t = s.sex === n.sexUtil.SEX_TYPE.FEMALE,
            l = (r && a >= 60) || (t && a >= 55),
            d = i.find(function (n) {
              return "edu" === n.key;
            }),
            c = function () {
              var n,
                e,
                o,
                i,
                a =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [];
              s.edu && a.includes(s.edu) && ((s.edu = ""), (d.content = "")),
                (null == a ? void 0 : a.length)
                  ? null ==
                      (e =
                        null == (n = null == d ? void 0 : d.data)
                          ? void 0
                          : n.val) ||
                    e.forEach(function (n) {
                      n.hidden = a.includes(n.id);
                    })
                  : null ==
                      (i =
                        null == (o = null == d ? void 0 : d.data)
                          ? void 0
                          : o.val) ||
                    i.forEach(function (n) {
                      n.hidden = !1;
                    });
            };
          return l &&
            [
              "200",
              "201",
              "232",
              "208",
              "206",
              "207",
              "209",
              "214",
              "215",
            ].includes(o.selectId)
            ? new Promise(function (n, o) {
                e.Dialog({
                  message: "请核实您的职业是否为离退休人员",
                  confirmButtonText: "确认",
                  showCancelButton: !0,
                  onConfirm: n,
                  onCancel: o,
                });
              })
            : ["205", "212"].includes(o.selectId)
            ? l
              ? new Promise(function (n, o) {
                  e.Dialog({
                    message: "请核实您的职业是否为离退休人员",
                    confirmButtonText: "确认",
                    showCancelButton: !0,
                    onConfirm: function () {
                      c(["10"]), n(!0);
                    },
                    onCancel: o,
                  });
                })
              : a <= 25
              ? new Promise(function (n, o) {
                  e.Dialog({
                    message: "您的年龄与所选职业不匹配，请核对后再提交",
                    confirmButtonText: "确认",
                    showCancelButton: !0,
                    onConfirm: function () {
                      c(["10"]), n(!0);
                    },
                    onCancel: o,
                  });
                })
              : c(["10"])
            : (a >= 30 && "237" === o.selectId) ||
              (((r && a < 55) || (t && a < 50)) && "234" === o.selectId)
            ? new Promise(function (n, o) {
                e.Dialog({
                  message: "您的年龄与所选职业不匹配，请核对后再提交",
                  confirmButtonText: "确认",
                  showCancelButton: !0,
                  onConfirm: n,
                  onCancel: o,
                });
              })
            : ["249", "250", "233"].includes(o.selectId)
            ? l
              ? new Promise(function (n, o) {
                  e.Dialog({
                    message: "请核实您的职业是否为离退休人员",
                    confirmButtonText: "确认",
                    showCancelButton: !0,
                    onConfirm: function () {
                      c(["6", "4", "10"]), n(!0);
                    },
                    onCancel: o,
                  });
                })
              : c(["6", "4", "10"])
            : ["202", "203", "204", "213", "216"].includes(o.selectId)
            ? c(["6", "4", "10"])
            : void c();
        },
        otherId: "214",
        valid: function (n, e) {
          var o,
            s = n.selectId,
            i = n.otherVal,
            a = void 0 === i ? "" : i,
            r = null == (o = this.val.get(s)) ? void 0 : o.name;
          if (r && /^证券从业/.test(r)) throw "".concat(r, "不能开通股东账户");
          if (this.otherId && s === this.otherId && a) {
            var t = a.trim();
            if (
              [
                "无",
                "其他",
                "没有",
                "没",
                "无职业",
                "其他职业",
                "没有职业",
              ].includes(t)
            )
              throw "您填写的职业无效，请正确填写后提交";
          }
        },
      },
    },
  };
exports.brokerConfig = o;
