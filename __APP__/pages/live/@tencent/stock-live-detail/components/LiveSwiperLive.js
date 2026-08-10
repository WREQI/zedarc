var e = require("../../../../../common/vendor.js"),
  t = { IS_WZQ_XCX: !1 },
  i = t.IS_WZQ_XCX,
  l = t.IS_LITE_MODE,
  s = {
    components: {
      LiveList: function () {
        return "./LiveList.js";
      },
    },
    props: [
      "live",
      "live_list",
      "delta_time",
      "isSharePage",
      "qtData",
      "slist",
      "innerFundList",
      "userinfo",
    ],
    computed: {
      ulRefreshBottom: function () {
        return i || l ? "" : this.isSharePage ? "100px" : "50px";
      },
    },
    methods: {
      showNewsDetail: function (e) {
        this.$emit("showNewsDetail", e);
      },
      manageSelfStock: function (e) {
        this.$emit("manageSelfStock", e);
      },
    },
  };
Array || e.resolveComponent("live-list")();
var n = e._export_sfc(s, [
  [
    "render",
    function (t, i, l, s, n, o) {
      return e.e(
        {
          a: e.o(o.showNewsDetail, 5201),
          b: e.o(o.manageSelfStock, 5202),
          c: e.p({
            "live-content": l.live,
            list: l.live_list.top,
            top_flag: 1,
            delta_time: l.delta_time,
            slist: l.slist,
            "qt-data": l.qtData,
            "inner-fund-list": l.innerFundList,
            userinfo: l.userinfo,
          }),
          d: e.f(l.live_list.groups, function (t, i, s) {
            return {
              a: e.t(t.key),
              b: e.o(o.showNewsDetail, 5203, t.key),
              c: e.o(o.manageSelfStock, 5204, t.key),
              d: "05f0bf9b-1-" + s,
              e: e.p({
                "live-content": l.live,
                list: t.list,
                top_flag: 0,
                delta_time: l.delta_time,
                slist: l.slist,
                "qt-data": l.qtData,
                "inner-fund-list": l.innerFundList,
                userinfo: l.userinfo,
              }),
              f: t.key,
            };
          }),
          e:
            l.live_list.loaded &&
            0 == l.live_list.groups.length &&
            0 == l.live_list.top.length,
        },
        l.live_list.loaded &&
          0 == l.live_list.groups.length &&
          0 == l.live_list.top.length
          ? {}
          : l.live_list.limited && l.live_list.list.length > 0
          ? { g: o.ulRefreshBottom }
          : {},
        { f: l.live_list.limited && l.live_list.list.length > 0 }
      );
    },
  ],
]);
wx.createComponent(n);
