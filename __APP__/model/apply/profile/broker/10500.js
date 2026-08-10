require("../../../../app.js");
exports.brokerConfig = {
  linkageRule: function (e, n) {
    return { data: e.data, item: e.item };
  },
  dictionary: {
    ctrl: [
      { name: "本人", id: "0" },
      {
        name: "非本人",
        id: "1",
        show: {
          errInfo:
            "<span class=red>根据账户实名制管理，如您的账户实际控制人非您本人时，您需要前往广发证券营业部进行开户。</span>",
        },
      },
    ],
    benifit: [
      { name: "本人", id: "0" },
      {
        name: "非本人",
        id: "1",
        show: {
          errInfo:
            "<span class=red>根据账户实名制管理，如您的账户实际受益人非您本人时，您需要前往广发证券营业部进行开户。</span>",
        },
      },
    ],
  },
  itemConfig: {
    job: {
      minLength: 2,
      maxLength: 20,
      valid: function (e) {
        var n,
          i = e.selectId,
          a = null == (n = this.val.get(i)) ? void 0 : n.name;
        if (a && /^证券从业/.test(a))
          throw "暂不支持证券从业人员开户，如有需要可咨询广发证券客服，电话（020）95575";
      },
    },
  },
};
