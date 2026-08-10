require("../../../../app.js");
var e = require("../../../../common/components/Dialog/index.js"),
  n = {
    linkageRule: function (e, n) {
      return { data: e.data, item: e.item };
    },
    dictionary: {
      year_income: [
        { name: "0≤年收入≤5万", id: "5" },
        { name: "5万<年收入≤10万", id: "10" },
        { name: "10万<年收入≤20万", id: "20" },
        { name: "20万<年收入≤50万", id: "50" },
        { name: "50万<年收入≤100万", id: "100" },
        { name: "100万<年收入≤300万", id: "300" },
        { name: "300万以上", id: "399.99" },
      ],
    },
    itemConfig: {},
    beforeSubmit: function (n) {
      var i,
        t,
        o =
          null == (i = null == n ? void 0 : n.extraInfo)
            ? void 0
            : i.abtApplyFlexible,
        a =
          (null == (t = n.formList.get("mail_address")) ? void 0 : t.content) ||
          "",
        r = /[0-9一二三四五六七八九十]{1,}/;
      return new Promise(function (n) {
        o && !r.test(a)
          ? e.Dialog({
              messageType: "html",
              messageAlign: "justify",
              message:
                "请在联系地址中补齐门牌号、单元号或者楼层和房间号，否则无法开户成功",
              confirmButtonText: "确认",
              onConfirm: function () {
                return n(!1);
              },
            })
          : n(!0);
      });
    },
  };
exports.brokerConfig = n;
