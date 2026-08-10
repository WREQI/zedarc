require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../common/vendor.js"),
  t = {
    components: {
      redPointNum: function () {
        return "../redPointNum/index.js";
      },
    },
    props: {
      entryData: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (t, n) {
      var r = n.emit;
      return {
        clickCustomEntry: function (e) {
          r("clickCustomEntry", e);
        },
        isSimpleMode: e.computed(function () {
          return ["mpwzq", "wzqlight"].includes("mpweapp");
        }),
      };
    },
  };
Array || e.resolveComponent("redPointNum")();
var n = e._export_sfc(t, [
  [
    "render",
    function (t, n, r, a, o, m) {
      return e.e(
        {
          a: e.p({
            showType: r.entryData.show_type,
            unreadNum: r.entryData.unread_num,
          }),
          b: a.isSimpleMode
            ? r.entryData.iconSelected
            : r.entryData.iconSelectedPro,
          c: e.n("message-custom-item-icon" + r.entryData.msg_box_type),
          d: e.n("message-custom-item-icon-con" + r.entryData.msg_box_type),
          e: e.t(r.entryData.title),
          f: r.entryData.showTime,
        },
        r.entryData.showTime ? { g: e.t(r.entryData.time) } : {},
        {
          h: e.t(r.entryData.summary),
          i: e.n(
            "暂无消息" === r.entryData.summary
              ? "message-custom-item-right-bot-nomsg"
              : "message-custom-item-right-bot-hasmsg"
          ),
          j: e.o(function (e) {
            return a.clickCustomEntry(r.entryData);
          }, 2335),
        }
      );
    },
  ],
  ["__scopeId", "data-v-9be4f5ff"],
]);
wx.createComponent(n);
