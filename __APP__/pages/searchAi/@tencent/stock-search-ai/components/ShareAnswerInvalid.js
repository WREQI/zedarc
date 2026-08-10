var r = require("../../../../../common/vendor.js"),
  e = {
    name: "ShareAnswerInvalid",
    props: {
      errorTipTop: { type: String, default: "抱歉，你访问的分享链接已失效" },
      errorTipBottom: {
        type: String,
        default: "你可发起新对话，我会随时为你解答金融问题～",
      },
    },
  },
  t = r._export_sfc(e, [
    [
      "render",
      function (e, t, o, n, p, a) {
        return { a: r.t(o.errorTipTop), b: r.t(o.errorTipBottom) };
      },
    ],
    ["__scopeId", "data-v-457641a1"],
  ]);
wx.createComponent(t);
