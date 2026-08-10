require("../../../../app.js");
var e = require("../../../../common/components/Dialog/index.js"),
  i = require("../../usePreReview.js"),
  n = "请在联系地址中补齐门牌号、单元号或者楼层和房间号，否则无法开户成功",
  t = {
    linkageRule: function (e, i) {
      return { data: e.data, item: e.item };
    },
    dictionary: {
      year_income: [
        { name: "0-10万", id: "0" },
        { name: "10-30万", id: "1" },
        { name: "30-50万", id: "2" },
        { name: "50-100万", id: "3" },
        { name: "100-300万", id: "4" },
        { name: "300万以上", id: "5" },
      ],
    },
    itemConfig: {},
    beforeSubmit: function (t) {
      var o,
        r,
        a,
        s =
          null == (o = null == t ? void 0 : t.extraInfo)
            ? void 0
            : o.abtApplyFlexible,
        m =
          (null == (r = t.formList.get("mail_address")) ? void 0 : r.content) ||
          "",
        l = /[0-9一二三四五六七八九十]{1,}/,
        u = s && !l.test(m);
      return (
        null == (a = null == t ? void 0 : t.extraInfo)
          ? void 0
          : a.isPreReviewAbt
      )
        ? ((0, i.usePreReview().setLocalPreReviewTips)(
            "profile",
            l.test(m) ? [] : [n]
          ),
          !0)
        : new Promise(function (i) {
            u
              ? e.Dialog({
                  messageType: "html",
                  messageAlign: "justify",
                  message: n,
                  confirmButtonText: "确认",
                  onConfirm: function () {
                    return i(!1);
                  },
                })
              : i(!0);
          });
    },
  };
exports.brokerConfig = t;
