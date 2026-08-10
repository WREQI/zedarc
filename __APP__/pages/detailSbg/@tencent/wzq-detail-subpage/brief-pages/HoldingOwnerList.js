var t = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  e = require("api/index.js"),
  i = require("../../../../../common/vendor.js"),
  o = {
    inject: ["hqBridge"],
    components: {
      SelectPlate: function () {
        return "../../wzq-detail-finance/components/SelectPlate.js";
      },
      FreezGrid: function () {
        return "./components/freezeGrid/mp.js";
      },
    },
    props: { symbol: { type: String, default: "" } },
    data: function () {
      return {
        name: "",
        gdData: [],
        typeList: [],
        selectTips: '"全部"股东',
        columns: [
          { name: "持股数(股)", key: "cgs" },
          { name: "占比", key: "cgbl" },
          { name: "变动股数", key: "cgsChange" },
          { name: "变动比例", key: "cgblChange" },
          { name: "发布日期", key: "period" },
        ],
        showBlock: !0,
        captionScrolling: !1,
        listScrolling: !1,
        showPanel: !1,
        curType: "all",
        showTypeName: "全部",
        isLoading: !0,
        scrollLeft: 0,
        scrollTop: 0,
      };
    },
    computed: {
      isMini: function () {
        return "mp" === this.hqBridge.ENV;
      },
    },
    created: function () {
      this.hqBridge.setTitle("股东统计"), this.getData();
    },
    mounted: function () {
      this.isMini ||
        (this.scrollTogether(),
        this.hqBridge.busOn("commonSelectChange", this.changeSelect)),
        this.hqBridge.report("hq.stock_detail.depth.gd_list_brow", {
          stockid: this.symbol,
        });
    },
    beforeDestroy: function () {
      var t, e;
      this.isMini ||
        (this.hqBridge.busOff("commonSelectChange", this.changeSelect),
        null == (t = this.$refs.captionScroll) ||
          t.removeEventListener("scroll", this.horizontalScroll),
        null == (e = this.$refs.listScroll) ||
          e.removeEventListener("scroll", this.horizontalScroll));
    },
    methods: {
      handlePageScroll: function (t) {
        (this.scrollTop = t.scrollTop),
          !this.isScrollPage &&
            this.scrollTop > 20 &&
            ((this.isScrollPage = !0),
            this.hqBridge.report("hq.stock_detail.depth.gd_scroll_page", {
              stockid: this.symbol,
            }));
      },
      changeSelect: function (t) {
        if (this.showPanel) {
          this.showPanel = !1;
          var e = this.typeList.find(function (e) {
            return e.id === t;
          });
          (this.curType = e.id),
            (this.showTypeName = e.name),
            this.getData(),
            this.hqBridge.report("hq.stock_detail.depth.gd_change_select", {
              stockid: this.symbol,
              currentId: e.id,
            });
        }
      },
      showGdPlate: function (t) {
        var e = this;
        (this.showPanel = !0),
          this.hqBridge.report("hq.stock_detail.depth.gd_open_select", {
            stockid: this.symbol,
          }),
          this.isMini
            ? this.$nextTick(function () {
                e.$refs.selectPlateGd && e.$refs.selectPlateGd.onPopupMore();
              })
            : this.hqBridge.busEmit("showCommonPopup", {
                data: this.typeList,
                currentId: this.curType,
                location: t.target.getBoundingClientRect(),
              });
      },
      getData: function () {
        var i = this;
        (this.isLoading = !0),
          e
            .getGudongList(this.hqBridge, {
              code: this.symbol,
              type: "all" !== this.curType ? "".concat(this.curType) : "",
            })
            .then(function (e) {
              var o, l;
              (i.isLoading = !1),
                e &&
                  0 == +e.code &&
                  ((i.gdData = (null == (o = e.data) ? void 0 : o.list) || []),
                  (i.typeList = [{ id: "all", name: "全部" }].concat(
                    t((null == (l = e.data) ? void 0 : l.types) || [])
                  )),
                  i.scrollTogether(),
                  i.gdData &&
                    i.gdData.length > 0 &&
                    i.gdData.map(function (t) {
                      (t.cgblChange =
                        +t.cgblChange <= 0
                          ? t.cgblChange
                          : "+".concat(t.cgblChange)),
                        (t.cgsChange =
                          +t.cgsChange <= 0
                            ? t.cgsChange
                            : "+".concat(t.cgsChange)),
                        i.columns.map(function (e) {
                          var o = "".concat(e.key, "_className");
                          (t[o] = i.colorFilter(t[e.key])),
                            (t["".concat(e.key, "_showValue")] = i.changeText(
                              t[e.key],
                              e.key
                            ));
                        });
                    }),
                  i.$nextTick(function () {
                    i.isMini ? i.$emit("loaded") : i.hqBridge.busEmit("loaded");
                  }),
                  setTimeout(function () {
                    (i.isScrollPage = !1), (i.isScrollColumn = !1);
                  }, 300));
            });
      },
      changeNum: function (t) {
        var e = Math.abs(+t);
        return e >= 0 && e < 1e4
          ? "".concat(t)
          : e >= 1e4 && e < 1e8
          ? "".concat((t / 1e4).toFixed(2), "万")
          : e >= 1e8 && e < 1e12
          ? "".concat((t / 1e8).toFixed(2), "亿")
          : "9999亿";
      },
      colorFilter: function (t) {
        return t
          ? "+" === t[0]
            ? "red"
            : "-" === t[0]
            ? "green"
            : void 0
          : "";
      },
      changeText: function (t, e) {
        return "cgbl" === e
          ? "".concat(t, "%")
          : "cgblChange" === e
          ? 0 == +t
            ? "未变"
            : "".concat(t, "%")
          : "cgs" === e
          ? "".concat(this.changeNum(t))
          : "cgsChange" === e
          ? 0 == +t
            ? "未变"
            : "".concat(t[0]).concat(this.changeNum(t.slice(1)))
          : t;
      },
      scrollTogether: function () {
        var t = this;
        setTimeout(function () {
          var e, i;
          null == (e = t.$refs.captionScroll) ||
            e.addEventListener("scroll", t.horizontalScroll),
            null == (i = t.$refs.listScroll) ||
              i.addEventListener("scroll", t.horizontalScroll);
        }, 1e3);
      },
      horizontalScroll: function (t) {
        var e = this.$refs.captionScroll.scrollWidth,
          i = this.$refs.captionScroll.clientWidth,
          o = this.$refs.captionScroll.scrollLeft;
        if (
          ((this.showBlock = !(e - i - o < 10)),
          t.target === this.$refs.captionScroll)
        ) {
          if (this.listScrolling) return void (this.listScrolling = !1);
          (this.captionScrolling = !0),
            (this.$refs.listScroll.scrollLeft =
              this.$refs.captionScroll.scrollLeft);
        } else if (t.target === this.$refs.listScroll) {
          if (this.captionScrolling) return void (this.captionScrolling = !1);
          (this.listScrolling = !0),
            (this.$refs.captionScroll.scrollLeft =
              this.$refs.listScroll.scrollLeft);
        }
        !this.isScrollColumn &&
          o > 20 &&
          ((this.isScrollColumn = !0),
          this.hqBridge.report("hq.stock_detail.depth.gd_scroll_columns", {
            stockid: this.symbol,
          }));
      },
    },
  };
Array ||
  (i.resolveComponent("SelectPlate") + i.resolveComponent("freez-grid"))();
var l = i._export_sfc(o, [
  [
    "render",
    function (t, e, o, l, s, n) {
      return i.e(
        {
          a: i.t(s.showTypeName),
          b: i.o(function () {
            return n.showGdPlate && n.showGdPlate.apply(n, arguments);
          }, 1337),
          c: s.showPanel && n.isMini,
        },
        s.showPanel && n.isMini
          ? {
              d: i.sr("selectPlateGd", "7557b66f-0"),
              e: i.o(n.changeSelect, 1338),
              f: i.p({
                data: s.typeList,
                "cur-tab-index": s.curType,
                "tab-type": "gd",
              }),
            }
          : {},
        { g: s.gdData && s.gdData.length > 0 },
        s.gdData && s.gdData.length > 0
          ? {
              h: i.p({
                gdData: s.gdData,
                columns: s.columns,
                scrollTop: s.scrollTop,
              }),
            }
          : {},
        { i: s.scrollTop > 24 ? 1 : "" }
      );
    },
  ],
  ["__scopeId", "data-v-7557b66f"],
]);
wx.createComponent(l);
