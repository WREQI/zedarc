var e = require("../../../../../../@babel/runtime/helpers/defineProperty");
require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  i = Object.defineProperties,
  s = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  c = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  a = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  l = function (e, t) {
    for (var r in t || (t = {})) c.call(t, r) && a(e, r, t[r]);
    if (o) {
      var i,
        s = n(o(t));
      try {
        for (s.s(); !(i = s.n()).done; ) {
          r = i.value;
          u.call(t, r) && a(e, r, t[r]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  h = function (e, t) {
    return i(e, s(t));
  },
  p = function (e, t, n) {
    return new Promise(function (r, i) {
      var s = function (e) {
          try {
            c(n.next(e));
          } catch (e) {
            i(e);
          }
        },
        o = function (e) {
          try {
            c(n.throw(e));
          } catch (e) {
            i(e);
          }
        },
        c = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(s, o);
        };
      c((n = n.apply(e, t)).next());
    });
  },
  d = require("../../utils/batch/NewChooseAPI.js"),
  f = require("../../../../../../common/vendor.js"),
  m = "cancel",
  k = {},
  v = {
    components: {
      Checkbox: function () {
        return "./Checkbox.js";
      },
      Popup: function () {
        return "./Popup.js";
      },
    },
    props: {
      show: {
        type: String,
        default: "close",
        validator: function (e) {
          return [
            "close",
            "del",
            "directlyDel",
            "move",
            "directlyMove",
          ].includes(e);
        },
      },
      scodelist: {
        type: Array,
        default: function () {
          return [];
        },
      },
      groups: {
        type: Array,
        default: function () {
          return [];
        },
      },
      stockLists: {
        type: Array,
        default: function () {
          return [];
        },
      },
      curGroupId: { type: String, default: "" },
      skin: {
        type: String,
        default: "white",
        validator: function (e) {
          return ["white", "dark", "black"].includes(e);
        },
      },
      toastConfig: {
        type: Object,
        default: function () {
          return {
            add: { success: "添加分组成功", fail: "添加分组失败" },
            del: { success: "已取消自选", fail: "取消自选失败" },
            move: { success: "已添加自选", fail: "添加自选失败" },
          };
        },
      },
    },
    data: function () {
      return {
        newGroupName: "",
        editItem: null,
        addPopVisible: !1,
        isAllGroup: "",
        select: {},
        placeholder: "最多输入六个字",
        renderGroups: [],
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
      stockSymbol: function () {
        var e,
          t,
          n =
            (null == (t = null == (e = this.scodelist) ? void 0 : e[0])
              ? void 0
              : t.split(":")) || [];
        return d.getSymbol(n[0], n[1]);
      },
      innerShow: function () {
        return this.addPopVisible ? "add" : this.show;
      },
      isBlackSkin: function () {
        return "white" !== this.skin;
      },
    },
    watch: {
      innerShow: {
        handler: function (e, n) {
          return p(
            this,
            null,
            t().mark(function r() {
              return t().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ("move" !== e && "add" !== n && (this.select = {}),
                          (t.t0 = "close" !== e && "add" !== e),
                          !t.t0)
                        ) {
                          t.next = 9;
                          break;
                        }
                        return (t.next = 5), this.setRenderData();
                      case 5:
                        (this.renderGroups = t.sent),
                          this.curGroupId &&
                            this.changeSelect(this.curGroupId, !0),
                          "directlyDel" === e && this.delStock(),
                          "directlyMove" === e && this.moveStocks();
                      case 9:
                      case "end":
                        return t.stop();
                    }
                },
                r,
                this
              );
            })
          );
        },
        immediate: !0,
      },
      groups: {
        handler: function () {
          return p(
            this,
            null,
            t().mark(function e() {
              return t().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), this.setRenderData();
                      case 2:
                        (this.renderGroups = e.sent),
                          this.curGroupId &&
                            this.changeSelect(this.curGroupId, !0);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          );
        },
        deep: !0,
      },
    },
    methods: {
      setRenderItem: function (e) {
        var t = this,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (!e) return !1;
        var r =
          this.stockSymbol &&
          n.some(function (e) {
            return e.symbol === t.stockSymbol;
          });
        return (
          "1" === e.type && (this.changeSelect(e.id, !r), (r = !0)),
          h(l({}, e), { isContain: r })
        );
      },
      setRenderData: function () {
        return p(
          this,
          null,
          t().mark(function e() {
            var n,
              r = this;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!(this.groups.length > 0)) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        this.groups
                          .filter(function (e) {
                            return e && ["1", "3"].includes(e.type);
                          })
                          .map(function (e) {
                            return r.setRenderItem(e, r.stockLists[e.id] || []);
                          })
                      );
                    case 2:
                      return (e.prev = 2), (e.next = 5), d.queryUserStock();
                    case 5:
                      if (
                        (n = e.sent) &&
                        !n.code &&
                        n.data &&
                        n.data.grouplist
                      ) {
                        e.next = 8;
                        break;
                      }
                      throw new Error("queryUserStock error");
                    case 8:
                      return e.abrupt(
                        "return",
                        n.data.grouplist
                          .filter(function (e) {
                            return (
                              e &&
                              e.groupinfo &&
                              ["1", "3"].includes(e.groupinfo.type)
                            );
                          })
                          .map(function (e) {
                            return r.setRenderItem(e.groupinfo, e.stocklist);
                          })
                      );
                    case 11:
                      return (
                        (e.prev = 11),
                        (e.t0 = e.catch(2)),
                        e.abrupt("return", [])
                      );
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[2, 11]]
            );
          })
        );
      },
      addGroupInputChange: function (e) {
        var t = this,
          n = e.target.value;
        if (n && n.replace(/[\u4e00-\u9fa5]/g, "xx").length > 12) {
          for (var r = n; r.replace(/[\u4e00-\u9fa5]/g, "xx").length > 12; )
            r = r.substr(0, r.length - 1);
          setTimeout(function () {
            t.newGroupName = r;
          }, 0);
        } else this.newGroupName = n;
      },
      moveStocks: function () {
        return p(
          this,
          null,
          t().mark(function e() {
            var n,
              r,
              i,
              s = this;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = ""),
                        (r = []),
                        this.renderGroups.forEach(function (e) {
                          s.select[e.id] && r.push(e.id);
                        }),
                        (e.prev = 3),
                        !(r.length > 0 && this.scodelist.length > 0))
                      ) {
                        e.next = 9;
                        break;
                      }
                      return (
                        (e.next = 7), d.followBatchStock(this.scodelist, r)
                      );
                    case 7:
                      (i = e.sent) && 0 === i.code
                        ? ((m = "success"),
                          (k = {
                            lctAuthPopup: !(!i.data || !i.data.lct_auth_popup),
                          }))
                        : ((m = "fail"), (n = i && i.msg));
                    case 9:
                      e.next = 14;
                      break;
                    case 11:
                      (e.prev = 11), (e.t0 = e.catch(3)), (m = "fail");
                    case 14:
                      return (
                        (e.prev = 14),
                        "success" === m
                          ? k.lctAuthPopup ||
                            f.StockBridge.toast(
                              this.toastConfig.move.success,
                              "success",
                              1e3
                            )
                          : f.StockBridge.toast(
                              n || this.toastConfig.move.fail,
                              "none"
                            ),
                        this.finish(),
                        e.finish(14)
                      );
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[3, 11, 14, 17]]
            );
          })
        );
      },
      changeSelect: function (t, n) {
        this.select = h(l({}, this.select), e({}, t, n));
      },
      showAddGroup: function () {
        this.addPopVisible = !0;
      },
      addGroup: function () {
        return p(
          this,
          null,
          t().mark(function e() {
            var n,
              r,
              i = this;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (this.newGroupName) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", void this.finish());
                    case 2:
                      if (!(this.renderGroups.length > 0)) {
                        e.next = 7;
                        break;
                      }
                      if (
                        !(
                          this.renderGroups.filter(function (e) {
                            return 3 === e.type;
                          }).length >= 50
                        ) ||
                        this.editItem
                      ) {
                        e.next = 5;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        (f.StockBridge.toast(
                          "您创建的分组已达到上限！",
                          "none"
                        ),
                        void this.finish())
                      );
                    case 5:
                      if (
                        !(
                          this.renderGroups.filter(function (e) {
                            return e.name === i.newGroupName;
                          }).length > 0
                        )
                      ) {
                        e.next = 7;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void f.StockBridge.toast("命名重复，请重新输入", "none")
                      );
                    case 7:
                      if (
                        !/\/|\~|\!|\@|\#|\\$|\%|\^|\&|\*|\(|\)|\_|\+|\{|\}|\:|\<|\>|\?|\[|\]|\,|\.|\/|\;|\'|\`|\-|\=|\\\|\|/g.test(
                          this.newGroupName
                        )
                      ) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void f.StockBridge.toast(
                          "分组名不得含有特殊字符",
                          "none"
                        )
                      );
                    case 9:
                      return (
                        (n = ""),
                        (e.prev = 10),
                        (e.next = 13),
                        d.editGroup({
                          id: (this.editItem && this.editItem.id) || "",
                          name: this.newGroupName,
                        })
                      );
                    case 13:
                      (r = e.sent) && 0 === r.code
                        ? (m = "success")
                        : (n = r && r.msg),
                        (e.next = 20);
                      break;
                    case 17:
                      (e.prev = 17), (e.t0 = e.catch(10)), (m = "fail");
                    case 20:
                      return (
                        (e.prev = 20),
                        "success" === m
                          ? f.StockBridge.toast(
                              this.editItem
                                ? "修改成功"
                                : this.toastConfig.add.success,
                              "success",
                              1e3
                            )
                          : f.StockBridge.toast(
                              n ||
                                (this.editItem
                                  ? "修改失败"
                                  : this.toastConfig.add.fail),
                              "none"
                            ),
                        this.finish(),
                        e.finish(20)
                      );
                    case 23:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[10, 17, 20, 23]]
            );
          })
        );
      },
      delStock: function () {
        return p(
          this,
          null,
          t().mark(function e() {
            var n, r, i;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = ""),
                        (r = this.renderGroups
                          .filter(function (e) {
                            return e.isContain;
                          })
                          .map(function (e) {
                            return e.id;
                          })),
                        (e.prev = 2),
                        !(this.scodelist.length > 0 && r.length > 0))
                      ) {
                        e.next = 8;
                        break;
                      }
                      return (e.next = 6), d.batchDelStock(this.scodelist, r);
                    case 6:
                      (i = e.sent) && 0 === i.code
                        ? (m = "success")
                        : (n = i && i.msg);
                    case 8:
                      e.next = 13;
                      break;
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(2)), (m = "fail");
                    case 13:
                      return (
                        (e.prev = 13),
                        "success" === m
                          ? f.StockBridge.toast(
                              this.toastConfig.del.success,
                              "success",
                              1e3
                            )
                          : f.StockBridge.toast(
                              n || this.toastConfig.del.fail,
                              "none"
                            ),
                        this.finish(),
                        e.finish(13)
                      );
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[2, 10, 13, 16]]
            );
          })
        );
      },
      cancel: function () {
        (m = "cancel"), this.finish();
      },
      finish: function () {
        (this.editItem = null),
          (this.newGroupName = ""),
          this.$emit("finish", this.innerShow, m, k),
          (this.addPopVisible = !1),
          (m = "cancel"),
          (k = {});
      },
    },
  };
Array || (f.resolveComponent("Popup") + f.resolveComponent("Checkbox"))();
var g = f._export_sfc(v, [
  [
    "render",
    function (e, t, n, r, i, s) {
      return f.e(
        { a: "del" === s.innerShow },
        "del" === s.innerShow
          ? {
              b: f.o(s.cancel, 4130),
              c: f.o(s.delStock, 4131),
              d: f.p({
                title: "确认从所有分组中删除已选股票？",
                "is-black-skin": s.isBlackSkin,
              }),
            }
          : {},
        { e: "add" === s.innerShow },
        "add" === s.innerShow
          ? {
              f: s.maxLen,
              g: i.placeholder,
              h: f.o(
                [
                  [
                    function (e) {
                      return (i.newGroupName = e.detail.value);
                    },
                    4133,
                  ],
                  [
                    function () {
                      return (
                        s.addGroupInputChange &&
                        s.addGroupInputChange.apply(s, arguments)
                      );
                    },
                    4132,
                  ],
                ],
                4134
              ),
              i: i.newGroupName,
              j: s.isBlackSkin ? 1 : "",
              k: f.o(s.cancel, 4135),
              l: f.o(s.addGroup, 4136),
              m: f.o(function () {}, 4137),
              n: f.p({
                title: "请输入分组名称",
                "is-black-skin": s.isBlackSkin,
              }),
            }
          : {},
        { o: "move" === s.innerShow },
        "move" === s.innerShow
          ? {
              p: f.f(i.renderGroups, function (e, t, n) {
                return f.e(
                  {
                    a: "a30375f2-3-" + n + ",a30375f2-2",
                    b: f.p({
                      value: i.select[e.id],
                      "is-black-skin": s.isBlackSkin,
                      disabled: e.isContain,
                    }),
                    c: f.t(e.name),
                    d: 3 == e.type && e.isContain,
                  },
                  (3 == e.type && e.isContain, {}),
                  {
                    e: "movepopgrous".concat(t),
                    f: f.o(
                      function (t) {
                        return s.changeSelect(e.id, !i.select[e.id]);
                      },
                      4138,
                      "movepopgrous".concat(t)
                    ),
                  }
                );
              }),
              q: f.o(function () {
                return s.showAddGroup && s.showAddGroup.apply(s, arguments);
              }, 4139),
              r: s.isBlackSkin ? 1 : "",
              s: f.o(s.cancel, 4140),
              t: f.o(s.moveStocks, 4141),
              v: f.p({
                title: "添加到如下分组",
                "is-black-skin": s.isBlackSkin,
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-a30375f2"],
]);
wx.createComponent(g);
