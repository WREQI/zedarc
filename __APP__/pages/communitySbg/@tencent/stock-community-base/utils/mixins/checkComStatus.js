var e = require("../knife.js"),
  t = require("../constant.js");
require("../../../../../../common/vendor.js");
var s = e.sdk,
  n = s.showToast,
  i = s.showKnowModal,
  r = {
    methods: {
      checkSubjectStatus: function (e, s) {
        var r = !0;
        if (e && t.commentSpecialStatus.indexOf(e.status) > -1) {
          var o = "";
          return (
            "tapSelfVisible" === s
              ? ((o = t.opeOwnerVisibleCommentTextMap[+e.status]), (r = !1))
              : [
                  "turn",
                  "putComment",
                  "putLike",
                  "putTurn",
                  "putPeply",
                ].indexOf(s) > -1 &&
                ((o = t.opeAuditCommentTextMap[+e.status]), (r = !1)),
            o &&
              o.length > 0 &&
              i({
                content: o,
                confirmText: "我知道了",
                confirmColor: "#3077EC",
              }),
            r
          );
        }
        if (e && [1, 2].indexOf(e.check_label) > -1)
          switch (e.check_label) {
            case 1:
              n("帖子正在审核中，暂时不可操作哦", this), (r = !1);
              break;
            case 2:
              "delete" !== s &&
                (n("帖子未审核通过，不可进行操作哦", this), (r = !1));
          }
        return r;
      },
    },
  };
exports.CheckStatusMixin = r;
