var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../../app.js");
var t = require("../../../../common/vendor.js"),
  o = require("../../../../stores/app/useMode.js"),
  i = require("../../../../model/trade/useHistoryNew.js"),
  n = require("../../../../model/trade/useHistoryTab.js"),
  s = require("../../../../adapter/router.js"),
  a = require("../../../../utils/index.js");
require("../../../../utils/getPlatform.js").getPlatform();
var c = {
  components: {
    Tabbar: function () {
      return "../../../../common/components/Tabbar/index.js";
    },
    HistoryList: function () {
      return "./HistoryList.js";
    },
    CustomPicker: function () {
      return "../../../../components/CustomPicker/CustomPicker.js";
    },
    TypeSelector: function () {
      return "./TypeSelector.js";
    },
  },
  setup: function () {
    var c = t.getCurrentInstance().proxy,
      l = o.useModeStore(),
      p = t.storeToRefs(l).simpleMode,
      u = "https://st.gtimg.com/image/mp-broker/trade/icon-classify".concat(
        a.isDarkTheme() ? "-dark" : "",
        ".png"
      ),
      T = n.useHistoryTab({
        defaultTop: 178,
        orderRef: "historyOrderRef",
        completeRef: "historyCompleteRef",
      });
    t.provide("tradeHistoryNew", T);
    var d = T.selectedType,
      m = T.curTimeForPicker,
      y = T.typeText,
      h = T.isTypeFilter,
      b = T.isTimeFilter,
      f = T.monthSetData,
      C = T.pickerData,
      g = T.tabs,
      v = T.tabCurIndex,
      F = T.queryHistoryData,
      k = T.changeFilterTime,
      S = T.selectTime,
      x = T.handleTimeFilter,
      w = T.changeFilterType,
      P = T.selectType,
      j = T.handleTabChange,
      q = T.historyOrder,
      H = T.historyComplete,
      E = T.onSwiperChange,
      I = T.initActiveRecordsId;
    return (
      t.onMounted(function () {
        c.$stat.click("trade.history.new.brow"),
          I(),
          r(
            e().mark(function r() {
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), F();
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, r);
            })
          )();
      }),
      {
        pickerData: C,
        monthSetData: f,
        tabCurIndex: v,
        tabs: g,
        simpleMode: p,
        handleTabChange: j,
        isTimeFilter: b,
        selectTime: S,
        changeFilterTime: k,
        handleTimeFilter: x,
        curTimeForPicker: m,
        typeText: y,
        isTypeFilter: h,
        selectedType: d,
        changeFilterType: w,
        selectType: P,
        tempInput: t.ref(null),
        toTradeHistorySeach: function () {
          c.$stat.click("trade.history.search"),
            s.router().push({ name: "TradeHistorySearch" });
        },
        iconClassify: u,
        handleShow: function () {},
        onSwiperChange: E,
        STATE_TYPE: i.STATE_TYPE,
        historyOrder: q,
        historyComplete: H,
      }
    );
  },
};
Array ||
  (
    t.resolveComponent("Tabbar") +
    t.resolveComponent("HistoryList") +
    t.resolveComponent("TypeSelector") +
    t.resolveComponent("CustomPicker")
  )(),
  Math;
var l = t._export_sfc(c, [
  [
    "render",
    function (e, r, o, i, n, s) {
      return {
        a: t.o(i.handleTabChange),
        b: t.p({
          value: i.tabCurIndex,
          data: i.tabs,
          "show-slider": !0,
          "simple-mode": i.simpleMode,
          border: !1,
        }),
        c: t.o(function () {
          return (
            i.toTradeHistorySeach && i.toTradeHistorySeach.apply(i, arguments)
          );
        }),
        d: t.t(i.typeText),
        e: i.iconClassify,
        f: t.o(function (e) {
          return i.changeFilterType(!0);
        }),
        g: t.sr("historyOrderRef", "339bbbcd-1"),
        h: t.p({
          "tab-key": i.STATE_TYPE.DEFAULT,
          "page-class": "history-new-list",
        }),
        i: t.t(i.typeText),
        j: i.iconClassify,
        k: t.o(function (e) {
          return i.changeFilterType(!0);
        }),
        l: t.sr("historyCompleteRef", "339bbbcd-2"),
        m: t.p({
          "tab-key": i.STATE_TYPE.COMPLETE,
          "page-class": "history-new-list",
        }),
        n: i.tabCurIndex,
        o: t.o(function () {
          return i.onSwiperChange && i.onSwiperChange.apply(i, arguments);
        }),
        p: t.o(i.selectType),
        q: t.o(function (e) {
          return i.changeFilterType(!1);
        }),
        r: t.p({
          "record-type": i.tabCurIndex,
          value: i.isTypeFilter,
          "selected-val": i.selectedType,
        }),
        s: t.o(function (e) {
          return i.changeFilterTime(!1);
        }),
        t: t.o(i.selectTime),
        v: t.p({
          value: i.isTimeFilter,
          title: "选择时间",
          data: i.pickerData,
          "selected-val": i.curTimeForPicker,
        }),
      };
    },
  ],
  ["__scopeId", "data-v-339bbbcd"],
]);
wx.createComponent(l);
