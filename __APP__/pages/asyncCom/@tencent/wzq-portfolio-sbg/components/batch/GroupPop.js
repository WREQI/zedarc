var e = require("../../../stock-markets-base/utils/market.js"),
  t = require("../../../../../../common/vendor.js"),
  o = {
    components: {
      Checkbox: function () {
        return "./Checkbox.js";
      },
      Popup: function () {
        return "./Popup.js";
      },
    },
    inject: ["hqBridge"],
    props: ["groups", "curGroupId", "containStocksGroupId"],
    data: function () {
      return {
        newGroupName: "",
        delItem: null,
        editItem: null,
        moveName: "",
        defaultTrue: !0,
        delStockPopVisible: !1,
        delPopVisible: !1,
        addPopVisible: !1,
        addCallBack: "",
        movePopVisible: !1,
        isAllGroup: "",
        delStockFromAllCheck: !1,
        delOtherGroupsStockCheck: !1,
        select: {},
        placeholder: "最多输入六个字",
      };
    },
    computed: {
      maxLen: function () {
        return (
          12 -
          (this.newGroupName.length -
            this.newGroupName.replace(/[\u4e00-\u9fa5]/g, "").length)
        );
      },
      realGroups: function () {
        return (this.groups || []).filter(function (e) {
          return 1 == +e.type || 3 == +e.type;
        });
      },
    },
    watch: {
      movePopVisible: function () {
        this.select = {};
      },
    },
    methods: {
      contentTouchStart: function (e) {
        this.startY = e.touches[0].pageY;
      },
      isContainId: function (e) {
        return (
          this.containStocksGroupId &&
          this.containStocksGroupId.indexOf &&
          this.containStocksGroupId.indexOf(e) > -1
        );
      },
      addGroupInputChange: function (e) {
        var t = this,
          o = e.target.value;
        if (o && o.replace(/[\u4e00-\u9fa5]/g, "xx").length > 12) {
          for (var i = o; i.replace(/[\u4e00-\u9fa5]/g, "xx").length > 12; )
            i = i.substr(0, i.length - 1);
          setTimeout(function () {
            t.newGroupName = i;
          }, 0);
        } else this.newGroupName = o;
      },
      toggleItem: function (e, t) {
        3 != t ||
          e == this.curGroupId ||
          this.isContainId(e) ||
          ((this.select[e] = !this.select[e]),
          (this.select = Object.assign({}, this.select)));
      },
      toggle: function (e) {
        this[e] = !this[e];
      },
      showMoveStocks: function (e) {
        var t = this;
        "move" == e
          ? (this.moveName = "移动到如下分组")
          : "add" == e
          ? (this.moveName = "添加到如下分组")
          : e || (this.moveName = this.moveName || "添加到如下分组"),
          (this.select = {}),
          setTimeout(function () {
            t.movePopVisible = !0;
          }, 100);
      },
      moveStocks: function () {
        var e = this,
          t = [];
        this.groups.forEach(function (o) {
          e.select[o.id] && t.push(o.id);
        }),
          t && t.length > 0
            ? this.$emit("moveStocks", t.join(","))
            : this.$emit("moveStocks"),
          this.hqBridge.report("quote.add_stock_popup_confirm_click");
      },
      showDelGroup: function (e) {
        (this.delItem = e), (this.delPopVisible = !0);
      },
      delGroup: function () {
        this.$emit("delGroup", this.delItem, this.delOtherGroupsStockCheck);
      },
      showAddGroup: function (e, t) {
        var o = this;
        (this.addPopVisible = !0),
          e &&
            e.name &&
            ((this.editItem = e), this.addGroupInputChange(e.name)),
          t &&
            (this.close("move"),
            (this.addCallBack = function () {
              o.movePopVisible = !0;
            })),
          this.hqBridge.report("quote.add_stock_popup_add_group_click");
      },
      addGroup: function () {
        var e = this;
        if (this.newGroupName) {
          if (this.groups) {
            if (
              this.groups.filter(function (e) {
                return 3 === e.type;
              }).length >= 50 &&
              !this.editItem
            )
              return (
                this.hqBridge.toast("您创建的分组已达到上限！", "none"),
                void this.close("add")
              );
            if (
              this.groups.filter(function (t) {
                return t.name === e.newGroupName;
              }).length > 0
            )
              return void this.hqBridge.toast("命名重复，请重新输入", "none");
          }
          /\/|\~|\!|\@|\#|\\$|\%|\^|\&|\*|\(|\)|\_|\+|\{|\}|\:|\<|\>|\?|\[|\]|\,|\.|\/|\;|\'|\`|\-|\=|\\\|\|/g.test(
            this.newGroupName
          )
            ? this.hqBridge.toast("分组名不得含有特殊字符", "none")
            : this.$emit("addGroup", this.newGroupName, this.editItem);
        }
      },
      showDelStocks: function (e, t) {
        (this.isAllGroup = e),
          (this.delStockList = t),
          (this.delStockPopVisible = !0);
      },
      delStock: function () {
        var t, o;
        this.$emit("delStock", this.delStockFromAllCheck, this.delStockList);
        var i =
            (null == (o = null == (t = this.delStockList) ? void 0 : t[0])
              ? void 0
              : o.split(":")) || [],
          s = e.getSymbol(i[0], i[1]);
        this.hqBridge.report("choose.delete", { stockid: s });
      },
      close: function (e) {
        "add" === e
          ? ((this.addPopVisible = !1),
            (this.editItem = null),
            (this.newGroupName = ""),
            this.addCallBack && this.addCallBack(),
            (this.addCallBack = ""))
          : "del" === e
          ? ((this.delPopVisible = !1),
            (this.delItem = null),
            (this.delOtherGroupsStockCheck = !1),
            this.hqBridge.report("choose.delete_cancle"))
          : "move" === e
          ? ((this.movePopVisible = !1),
            this.hqBridge.report("quote.add_stock_popup_cancel_click"))
          : "delstock" === e
          ? ((this.delStockPopVisible = !1),
            (this.delStockFromAllCheck = !1),
            (this.delStockList = null))
          : ((this.addPopVisible = !1),
            (this.editItem = null),
            (this.newGroupName = ""),
            this.addCallBack && this.addCallBack(),
            (this.addCallBack = ""),
            (this.delPopVisible = !1),
            (this.delItem = null),
            (this.delOtherGroupsStockCheck = !1),
            (this.movePopVisible = !1),
            (this.delStockPopVisible = !1),
            (this.delStockFromAllCheck = !1),
            (this.delStockList = null)),
          this.$emit("close");
      },
    },
  };
Array || (t.resolveComponent("Checkbox") + t.resolveComponent("Popup"))();
var i = t._export_sfc(o, [
  [
    "render",
    function (e, o, i, s, n, l) {
      return t.e(
        { a: n.isAllGroup },
        (n.isAllGroup, {}),
        { b: !n.isAllGroup },
        n.isAllGroup
          ? {}
          : {
              c: t.o(function (e) {
                return (n.delStockFromAllCheck = e);
              }, 2659),
              d: t.p({ value: n.delStockFromAllCheck, size: "" }),
              e: t.o(function (e) {
                return l.toggle("delStockFromAllCheck");
              }, 2660),
            },
        {
          f: t.o(function (e) {
            return l.close("delstock");
          }, 2661),
          g: t.o(function () {
            return l.delStock && l.delStock.apply(l, arguments);
          }, 2662),
          h: t.sr("delstockpop", "bbc008f5-0"),
          i: t.o(function (e) {
            return (n.delStockPopVisible = e);
          }, 2663),
          j: t.p({
            value: n.delStockPopVisible,
            "mask-closable": !0,
            "z-index": 101,
          }),
          k: t.o(function (e) {
            return (n.delOtherGroupsStockCheck = e);
          }, 2664),
          l: t.p({ value: n.delOtherGroupsStockCheck, size: "" }),
          m: t.o(function (e) {
            return l.toggle("delOtherGroupsStockCheck");
          }, 2665),
          n: t.o(function (e) {
            return l.close("del");
          }, 2666),
          o: t.o(function () {
            return l.delGroup && l.delGroup.apply(l, arguments);
          }, 2667),
          p: t.sr("delpop", "bbc008f5-2"),
          q: t.o(function (e) {
            return (n.delPopVisible = e);
          }, 2668),
          r: t.p({
            value: n.delPopVisible,
            "mask-closable": !0,
            "z-index": 101,
          }),
          s: l.maxLen,
          t: n.placeholder,
          v: t.o(
            [
              [
                function (e) {
                  return (n.newGroupName = e.detail.value);
                },
                2670,
              ],
              [
                function () {
                  return (
                    l.addGroupInputChange &&
                    l.addGroupInputChange.apply(l, arguments)
                  );
                },
                2669,
              ],
            ],
            2671
          ),
          w: n.newGroupName,
          x: t.o(function (e) {
            return l.close("add");
          }, 2672),
          y: t.o(function () {
            return l.addGroup && l.addGroup.apply(l, arguments);
          }, 2673),
          z: t.sr("addpop", "bbc008f5-4"),
          A: t.o(function (e) {
            return (n.addPopVisible = e);
          }, 2674),
          B: t.p({
            value: n.addPopVisible,
            "mask-closable": !0,
            "z-index": 103,
          }),
          C: t.t(n.moveName),
          D: t.f(l.realGroups, function (e, o, s) {
            return t.e(
              {
                a: 3 == e.type && e.id != i.curGroupId && !l.isContainId(e.id),
              },
              3 != e.type || e.id == i.curGroupId || l.isContainId(e.id)
                ? {}
                : {
                    b: "bbc008f5-6-" + s + ",bbc008f5-5",
                    c: t.p({ disabled: !0, value: n.select[e.id], size: "" }),
                  },
              { d: 1 == e.type || e.id == i.curGroupId || l.isContainId(e.id) },
              1 == e.type || e.id == i.curGroupId || l.isContainId(e.id)
                ? {
                    e: "bbc008f5-7-" + s + ",bbc008f5-5",
                    f: t.p({
                      disabled: !0,
                      value: n.defaultTrue,
                      "is-added": n.defaultTrue,
                    }),
                  }
                : {},
              { g: t.t(e.name), h: 3 == e.type && l.isContainId(e.id) },
              (3 == e.type && l.isContainId(e.id), {}),
              {
                i: t.o(
                  function (t) {
                    return l.toggleItem(e.id, e.type);
                  },
                  2675,
                  "movepopgrous".concat(o)
                ),
                j: "movepopgrous".concat(o),
              }
            );
          }),
          E: t.t(i.curGroupId),
          F: t.o(function (e) {
            return l.showAddGroup("", !0);
          }, 2676),
          G: t.o(function (e) {
            return l.close("move");
          }, 2677),
          H: t.o(function () {
            return l.moveStocks && l.moveStocks.apply(l, arguments);
          }, 2678),
          I: t.sr("movepop", "bbc008f5-5"),
          J: t.o(function (e) {
            return (n.movePopVisible = e);
          }, 2679),
          K: t.p({
            value: n.movePopVisible,
            "mask-closable": !0,
            "z-index": 101,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-bbc008f5"],
]);
wx.createComponent(i);
