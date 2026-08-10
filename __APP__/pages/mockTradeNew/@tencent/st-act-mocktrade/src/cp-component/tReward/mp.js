var t = require("../../../../../../../common/vendor.js"),
  e = {
    props: {
      desc: { type: String, default: "" },
      isShowToast: { type: Boolean, default: !1 },
      backUrl: { type: String, default: "" },
      backBtnText: { type: String, default: "去查看" },
      rewardImg: { type: String, default: "" },
    },
    components: {
      Toast: function () {
        return "../../components/task/toast.js";
      },
      Bar: function () {
        return "../../components/task/bar.js";
      },
    },
    data: function () {
      return { text: "已完成任务", showToast: this.isShowToast, showTask: !0 };
    },
    computed: {
      rewardShowImg: function () {
        return (
          this.rewardImg ||
          "https://wzq.gtimg.com/resource/images/774dbadc1557bbfb59d703c3b779cfce.png"
        );
      },
    },
    methods: {
      close: function () {
        this.showTask = !1;
      },
      clkBack: function () {
        if (this.backUrl) {
          var t = decodeURIComponent(decodeURIComponent(this.backUrl));
          location.href = t;
        }
        this.close();
      },
    },
  };
Array || (t.resolveComponent("Bar") + t.resolveComponent("Toast"))();
var o = t._export_sfc(e, [
  [
    "render",
    function (e, o, s, r, a, n) {
      return t.e(
        { a: a.showTask },
        a.showTask
          ? t.e(
              {
                b: t.o(n.clkBack, 3263),
                c: t.o(n.close, 3264),
                d: t.p({
                  reward: s.desc,
                  rewardText: "已获得",
                  backText: s.backBtnText,
                  iconImg: "",
                }),
                e: s.isShowToast && s.desc,
              },
              s.isShowToast && s.desc
                ? {
                    f: t.p({
                      reward: s.desc,
                      toastImg: n.rewardShowImg,
                      title: "任务完成",
                    }),
                  }
                : {}
            )
          : {}
      );
    },
  ],
]);
wx.createComponent(o);
