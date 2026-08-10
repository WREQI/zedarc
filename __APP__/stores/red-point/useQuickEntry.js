require("../../@babel/runtime/helpers/Arrayincludes"), require("../../app.js");
var e = require("../../common/vendor.js"),
  i = require("../../config/key.js"),
  t = require("./useEntryTips.js"),
  n = e.defineStore("quick-entry", function () {
    var n = t.useEntryTips(),
      r = e.storeToRefs(n),
      l = r.redPoints,
      u = r.bizHall,
      d = r.allEntryBubble,
      o = n.addRedPoint,
      a = n.deleteRedPoint,
      c = n.addBubbleTip,
      s = n.deleteBubbleTip,
      f = [];
    return {
      redPoints: l,
      allEntryBubble: d,
      addRedPoint: o,
      deleteRedPoint: a,
      addBizHallRedPoint: function (e) {
        var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          t = "boolean" == typeof i ? { deleteAfterClick: i } : i,
          n = t.type,
          r = void 0 === n ? "redPoint" : n,
          l = t.contentText,
          d = t.deleteAfterClick,
          o = void 0 !== d && d,
          a = u.value.findIndex(function (i) {
            return i.biz === e;
          });
        -1 !== a
          ? (u.value[a] = { biz: e, type: r, contentText: l })
          : u.value.push({ biz: e, type: r, contentText: l }),
          o && !f.includes(e) && f.push(e);
      },
      deleteBizHallRedPoint: function (e) {
        var i = u.value.findIndex(function (i) {
          return i.biz === e;
        });
        if (-1 !== i) {
          u.value.splice(i, 1);
          var t = f.indexOf(e);
          -1 !== t && f.splice(t, 1);
        }
      },
      addBubbleTip: c,
      deleteBubbleTip: s,
      isBizClickBefore: function (t) {
        return (e.index.getStorageSync(i.ASSET_ENTRY_ALL_REDPOINT) || "")
          .split(",")
          .includes(t);
      },
      deleteBizHallAfterClick: function () {
        if (f.length > 0) {
          u.value = u.value.filter(function (e) {
            return !f.includes(e.biz);
          });
          var t = [
            e.index.getStorageSync(i.ASSET_ENTRY_ALL_REDPOINT) || "",
            f.join(","),
          ]
            .filter(function (e) {
              return e;
            })
            .join(",");
          e.index.setStorageSync(i.ASSET_ENTRY_ALL_REDPOINT, t), (f = []);
        }
      },
    };
  });
exports.useQuickEntry = n;
