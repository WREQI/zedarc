require("../../@babel/runtime/helpers/Objectvalues"), require("../../app.js");
var t = (function (t) {
    return (
      (t.OPEN_ACCOUNT = "10001"),
      (t.FIRST_DEPOSIT = "20001"),
      (t.FIRST_BUY = "30001"),
      (t.FIRST_PROFIT = "40001"),
      t
    );
  })(t || {}),
  e = new Set(["10001"]),
  i = new Set(["20001", "30001", "40001"]),
  s = {
    10001: {
      title: "恭喜您开户成功！",
      subtitle: "交易所规定新开户当天无法交易",
    },
    20001: {
      title: "恭喜您首次入金成功！",
      subtitle: "每一笔伟大投资，都始于一颗小小的种子",
      delyId: "AHI",
      advStat: {
        browId: "trade.assetindex.deposit_incentive_popup_btn_brow",
        clickId: "trade.assetindex.deposit_incentive_popup_btn_click",
      },
    },
    30001: { title: "", subtitle: "您的财富专列即将发车", delyId: "" },
    40001: {
      title: "恭喜您赚钱啦！",
      subtitle: "好一个平平无奇的炒股小天才",
      delyId: "",
      defaultOrder: 70,
    },
  },
  d = Object.values(s)
    .map(function (t) {
      return t.delyId;
    })
    .filter(function (t) {
      return !!t;
    });
(exports.ALL_EXCITE_DELY_IDS = d),
  (exports.CAROUSEL_EXCITE_TYPES = i),
  (exports.EXCITE_CONFIG = s),
  (exports.ExciteType = t),
  (exports.IMAGES = {
    confetti:
      "https://st.gtimg.com/design/b57ca216584dff7ae2f5eb9f1b73ec67.gif",
    cardStackBack:
      "https://st.gtimg.com/design/3a8a022fbd880e88e87368d5ee0491c2.png",
    cardStackFront:
      "https://st.gtimg.com/design/249069199c9caf28b695c29f67f1ad72.png",
    shCard: "https://st.gtimg.com/design/832b1c73e88814a339f3d027a782245e.png",
    szCard: "https://st.gtimg.com/design/a76652603bf99f805a6aa9d297f44da0.png",
  }),
  (exports.SOLO_EXCITE_TYPES = e);
