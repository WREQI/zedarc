var t = require("../../../../../../common/vendor.js"),
  e = {
    inject: { hqBridge: {}, statusBarHeight: { default: 0 } },
    components: {
      LabelBlock: function () {
        return "../common/LabelBlock.js";
      },
      CategoryContent: function () {
        return "../common/CategoryContent.js";
      },
      NoDataBlock: function () {
        return "../common/no-data-block/index.js";
      },
    },
    props: {
      data: { type: Object, default: function () {} },
      categorySwitchState: {
        type: Array,
        default: function () {
          return [];
        },
      },
      pageScrollTop: { type: Number, default: 0 },
      isMarketTabbarCeiling: { type: Boolean, default: !1 },
      accoutOpened: { type: Boolean, default: !1 },
    },
    data: function () {
      return {
        selectedLabel: 0,
        labelList: ["新股", "新债"],
        labelTab: 0,
        labelMapping: ["stock", "bond"],
        pendingGoPublicData: [],
        tag: "pendingGoPublic",
        isEmptyPage: !1,
        isActivated: !1,
        labelScrollReported: [!1, !1],
        env: this.hqBridge.ENV,
      };
    },
    computed: {
      isMp: function () {
        return "mp" === this.hqBridge.ENV;
      },
    },
    watch: {
      pageScrollTop: function (t) {
        this.isActivated &&
          0 !== t &&
          !this.labelScrollReported[this.selectedLabel] &&
          ((this.labelScrollReported[this.selectedLabel] = !0),
          this.hqBridge.report(
            "hq.daxin_calendar_hstab.pending_go_public_tab_new_".concat(
              this.labelMapping[this.selectedLabel],
              "_scroll"
            )
          ));
      },
    },
    created: function () {
      this.initData(), (this.isActivated = !0);
    },
    mounted: function () {
      this.autoSwitchLabel();
    },
    activated: function () {
      this.isActivated = !0;
    },
    deactivated: function () {
      this.isActivated = !1;
    },
    methods: {
      showTeachPop: function (t, e, a) {
        this.$emit("showTeachPop", t, e, a);
      },
      initData: function () {
        var t = this,
          e = this.data,
          a = e.todayAnnouncement,
          n = void 0 === a ? {} : a,
          o = e.notGoPublic,
          i = void 0 === o ? {} : o,
          c = { stock: "暂无此类新股", bond: "暂无此类新债" };
        this.labelMapping.forEach(function (e, a) {
          t.pendingGoPublicData[a] = [
            {
              market: "hs",
              type: e,
              data: n[e],
              name: "今日公布中签",
              noDataText: c[e],
            },
            {
              market: "hs",
              type: e,
              data: i[e],
              name: "未上市",
              noDataText: c[e],
              className: "",
            },
          ];
        }),
          (this.isEmptyPage = !(n.stock || n.bond || i.stock || i.bond));
      },
      updateLabelTab: function (t) {
        (this.selectedLabel = t),
          this.hqBridge.report(
            "hq.daxin_calendar_hstab.pending_go_public_tab_new_".concat(
              this.labelMapping[t],
              "_label_click"
            )
          );
      },
      autoSwitchLabel: function () {
        var t;
        if (this.$route && this.$route.query) {
          var e = "bond" === this.$route.query.type ? 1 : 0;
          null == (t = this.$refs.labelBlock) || t.switchLabel(e);
        }
      },
    },
  };
Array ||
  (
    t.resolveComponent("label-block") +
    t.resolveComponent("category-content") +
    t.resolveComponent("no-data-block")
  )();
var a = t._export_sfc(e, [
  [
    "render",
    function (e, a, n, o, i, c) {
      return t.e(
        { a: !i.isEmptyPage },
        i.isEmptyPage
          ? {
              j: t.p({
                market: "hs",
                type: "pendingGoPublic",
                accoutOpened: n.accoutOpened,
              }),
            }
          : {
              b: t.sr("labelBlock", "e6571f81-0"),
              c: t.o(c.updateLabelTab, 3050),
              d: t.p({ labelList: i.labelList, labelTab: i.selectedLabel }),
              e: 0 === i.selectedLabel,
              f: t.p({
                contentType: "common",
                contentData: i.pendingGoPublicData[0],
                tag: i.tag,
              }),
              g: 1 === i.selectedLabel,
              h: t.o(c.showTeachPop, 3051),
              i: t.p({
                contentType: "common",
                contentData: i.pendingGoPublicData[1],
                tag: i.tag,
              }),
            },
        { k: t.n(i.isEmptyPage && c.isMp ? "nodata-wrapper" : "") }
      );
    },
  ],
  ["__scopeId", "data-v-e6571f81"],
]);
wx.createComponent(a);
