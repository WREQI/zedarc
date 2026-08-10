require("../../app.js");
var e = require("../../common/vendor.js"),
  t = require("./useHistoryNew.js"),
  r = require("../../config/key.js");
exports.useHistoryTab = function (i) {
  var n = e.ref(t.STATE_TYPE.DEFAULT),
    u = e.computed(function () {
      return "".concat(n.value);
    });
  function c(t) {
    n.value = t;
    try {
      e.index.setStorageSync(r.LAST_TRADE_RECORD_TAB, t);
    } catch (e) {}
  }
  var o = t.useHistoryNew({
      defaultTop: i.defaultTop,
      emptyPrefix: "委托",
      tabType: t.STATE_TYPE.DEFAULT,
      historyListRef: i.orderRef,
    }),
    a = t.useHistoryNew({
      defaultTop: i.defaultTop,
      emptyPrefix: "成交",
      tabType: t.STATE_TYPE.COMPLETE,
      historyListRef: i.completeRef,
    });
  function T() {
    return +u.value === t.STATE_TYPE.DEFAULT ? o : a;
  }
  var l = e.computed(function () {
      return T().pickerData.value;
    }),
    s = e.computed(function () {
      return T().monthSetData.value;
    }),
    p = e.computed(function () {
      return T().isTimeFilter.value;
    }),
    f = e.computed(function () {
      return T().isTypeFilter.value;
    }),
    y = e.computed(function () {
      return T().typeText.value;
    }),
    d = e.computed(function () {
      return T().curTimeForPicker.value;
    });
  function m(e) {
    c(e), T().handleTabChange(e);
  }
  return {
    selectedType: e.computed(function () {
      return T().selectedType.value;
    }),
    curTimeForPicker: d,
    typeText: y,
    isTypeFilter: f,
    isTimeFilter: p,
    monthSetData: s,
    pickerData: l,
    tabs: ["委托记录", "成交记录"],
    tabCurIndex: u,
    setActiveRecordsId: c,
    queryHistoryData: function (e, t) {
      T().queryHistoryData(e, t);
    },
    changeFilterTime: function (e) {
      T().changeFilterTime(e);
    },
    selectTime: function (e) {
      T().selectTime(e);
    },
    handleTimeFilter: function (e, t) {
      T().handleTimeFilter(e, t);
    },
    changeFilterType: function (e) {
      T().changeFilterType(e);
    },
    selectType: function (e) {
      T().selectType(e);
    },
    handleTabChange: m,
    historyOrder: o,
    historyComplete: a,
    onSwiperChange: function (e) {
      e.detail.source && m(e.detail.current);
    },
    initActiveRecordsId: function () {
      try {
        var i = e.index.getStorageSync(r.LAST_TRADE_RECORD_TAB);
        n.value = i || t.STATE_TYPE.DEFAULT;
      } catch (e) {}
    },
  };
};
