require("../../../../app.js");
var e = require("../../../../common/components/Dialog/index.js"),
  i = {
    linkageRule: function (e, i) {
      return { data: e.data, item: e.item };
    },
    dictionary: {
      year_income: [
        { name: "0-50万", id: "0" },
        { name: "50-100万", id: "1" },
        { name: "100-500万", id: "2" },
        { name: "500-1000万", id: "3" },
        { name: "1000万以上", id: "4" },
      ],
    },
    itemConfig: { mail_address: { jumpProfileAddressCheck: !0 } },
    beforeSubmit: function (i) {
      var n,
        t =
          (null == (n = i.formList.get("mail_address")) ? void 0 : n.content) ||
          "",
        r = /[0-9一二三四五六七八九十]{1,}/;
      return new Promise(function (i) {
        r.test(t)
          ? i(!0)
          : e.Dialog({
              messageType: "html",
              messageAlign: "justify",
              message:
                "门牌号不全，开户审核可能会被驳回。门牌号：需要包含何阿拉伯数字（0-9）或中文数字（一至十）；",
              confirmButtonText: "确认",
              onConfirm: function () {
                return i(!1);
              },
            });
      });
    },
  };
exports.brokerConfig = i;
