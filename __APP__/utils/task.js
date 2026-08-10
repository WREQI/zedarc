require("../@babel/runtime/helpers/Arrayincludes"),
  (exports.isInitiativeTask = function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      e = t.act_actid,
      i = t.act_tid,
      r = t.share_code,
      a = t.share_type;
    if (e && i) return !0;
    if (r && a && a.includes("task_")) return !0;
    var s = getApp().globalData.taskConfig || {},
      n = s.actid,
      c = s.tid;
    return !(!n || !c);
  });
