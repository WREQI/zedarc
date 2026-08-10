var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = function (e, t, r) {
    return new Promise(function (n, o) {
      var i = function (e) {
          try {
            s(r.next(e));
          } catch (e) {
            o(e);
          }
        },
        u = function (e) {
          try {
            s(r.throw(e));
          } catch (e) {
            o(e);
          }
        },
        s = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(i, u);
        };
      s((r = r.apply(e, t)).next());
    });
  },
  r = require("../../../../../common/vendor.js"),
  n = require("../Index.js"),
  o = {
    options: { styleIsolation: "shared" },
    props: {
      moveName: { type: String, default: "添加到如下分组" },
      isSimpleMode: { type: Boolean, default: !0 },
    },
    components: {
      Popup: function () {
        return "../../../../asyncCom/@tencent/stock-ui/mp/mp-popup/index.js";
      },
    },
    data: function () {
      return {
        newGroupName: "",
        movePopVisible: !1,
        addPopVisible: !1,
        groups: [],
        select: {},
        isAllGroup: "",
        placeholder: "最多输入六个字",
        autofocus: !1,
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
    },
    methods: {
      show: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), this.init();
                    case 2:
                      (this.movePopVisible = !0), (this.addPopVisible = !1);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      init: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            var r, o, i, u;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!this.initFlag) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (e.next = 4), n.queryUserStock();
                    case 4:
                      if (((e.t0 = e.sent), e.t0)) {
                        e.next = 7;
                        break;
                      }
                      e.t0 = {};
                    case 7:
                      (r = e.t0),
                        (o = r.retcode),
                        (i = r.data),
                        (u = (void 0 === i ? {} : i).grouplist),
                        +o ||
                          ((this.groups = (u || [])
                            .map(function (e) {
                              return e.groupinfo;
                            })
                            .filter(function (e) {
                              return "2" !== e.type;
                            })),
                          (this.initFlag = !0));
                    case 13:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
      close: function (e) {
        "add" === e
          ? ((this.addPopVisible = !1), (this.movePopVisible = !0))
          : (r.StockBridge.report("yy.imgocr.group_cancel_click"),
            (this.movePopVisible = !1));
      },
      showAddGroup: function () {
        var e = this;
        (this.addPopVisible = !0),
          (this.movePopVisible = !1),
          (this.autofocus = !0),
          (this.newGroupName = ""),
          this.$nextTick(function () {
            r.StockBridge.ENV !== r.EnvTypeEnum.MP &&
              e.$refs.groupInput &&
              e.$refs.groupInput.querySelector("input") &&
              e.$refs.groupInput.querySelector("input").focus();
          });
      },
      moveStocks: function () {
        var e = this;
        r.StockBridge.report("yy.imgocr.group_sure_click");
        var t = [];
        this.groups.forEach(function (r) {
          e.select[r.id] && t.push(r.id);
        }),
          this.$emit("moveStocks", t),
          (this.movePopVisible = !1);
      },
      handleToggle: function (e) {
        var t = null == e ? void 0 : e.id;
        this.$set(this.select, t, !this.select[t]);
      },
      addGroupInputChange: function (e) {
        var t = e.target.value;
        if (t.replace(/[\u4e00-\u9fa5]/g, "xx").length > 12) {
          for (var r = t; r.replace(/[\u4e00-\u9fa5]/g, "xx").length > 12; )
            r = r.substr(0, r.length - 1);
          this.newGroupName = r;
        } else this.newGroupName = t;
      },
      addGroup: function () {
        return t(
          this,
          null,
          e().mark(function t() {
            var o,
              i,
              u,
              s,
              a,
              p,
              c,
              d,
              l,
              h,
              f,
              m = this;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((this.newGroupName = this.newGroupName.trim()),
                        this.newGroupName)
                      ) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void r.StockBridge.toast("请输入分组名称", "none")
                      );
                    case 3:
                      if (!this.groups) {
                        e.next = 8;
                        break;
                      }
                      if (
                        !(
                          this.groups.filter(function (e) {
                            return 3 == e.type;
                          }).length >= 50
                        )
                      ) {
                        e.next = 6;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        (r.StockBridge.toast(
                          "您创建的分组已达到上限！",
                          "none"
                        ),
                        void this.close("add"))
                      );
                    case 6:
                      if (
                        !(
                          this.groups.filter(function (e) {
                            return e.name == m.newGroupName;
                          }).length > 0
                        )
                      ) {
                        e.next = 8;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void r.StockBridge.toast("命名重复，请重新输入", "none")
                      );
                    case 8:
                      if (
                        !/\/|\~|\!|\@|\#|\\$|\%|\^|\&|\*|\(|\)|\_|\+|\{|\}|\:|\<|\>|\?|\[|\]|\,|\.|\/|\;|\'|\`|\-|\=|\\\|\|/g.test(
                          this.newGroupName
                        )
                      ) {
                        e.next = 10;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void r.StockBridge.toast(
                          "分组名不得含有特殊字符",
                          "none"
                        )
                      );
                    case 10:
                      return (
                        (i = new Date().getTime()),
                        (e.next = 13),
                        n.updateStock([
                          {
                            timestamp: i,
                            act: "ga",
                            grpid: "TEMP-".concat(i),
                            grpname: this.newGroupName,
                          },
                        ])
                      );
                    case 13:
                      if (
                        ((u = e.sent),
                        (s = u.code),
                        (a = u.data),
                        (c = (p = void 0 === a ? {} : a).record),
                        (d = void 0 === c ? [] : c),
                        (l = p.IDMap),
                        (h = void 0 === l ? {} : l),
                        !+s)
                      ) {
                        e.next = 23;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void r.StockBridge.toast("添加失败", "none")
                      );
                    case 23:
                      (f = h[null == (o = d[0]) ? void 0 : o.gid] || "")
                        ? (this.groups.push({ id: f.realID, name: f.grpname }),
                          r.StockBridge.toast("添加成功", "none"),
                          this.close("add"))
                        : r.StockBridge.toast("请刷新重试~", "none");
                    case 25:
                    case "end":
                      return e.stop();
                  }
              },
              t,
              this
            );
          })
        );
      },
    },
  };
Array || r.resolveComponent("popup")();
var i = r._export_sfc(o, [
  [
    "render",
    function (e, t, n, o, i, u) {
      return {
        a: u.maxLen,
        b: i.placeholder,
        c: i.autofocus,
        d: r.o(
          [
            [
              function (e) {
                return (i.newGroupName = e.detail.value);
              },
              2298,
            ],
            [
              function () {
                return (
                  u.addGroupInputChange &&
                  u.addGroupInputChange.apply(u, arguments)
                );
              },
              2297,
            ],
          ],
          2299
        ),
        e: i.newGroupName,
        f: r.o(function (e) {
          return u.close("add");
        }, 2300),
        g: r.o(function () {
          return u.addGroup && u.addGroup.apply(u, arguments);
        }, 2301),
        h: r.sr("addpop", "8e377b2b-0"),
        i: r.p({ show: i.addPopVisible, maskClosable: !0, zIndex: 103 }),
        j: r.t(n.moveName),
        k: r.f(i.groups, function (e, t, n) {
          return r.e(
            { a: 1 == e.type },
            1 == e.type ? {} : { b: i.select[e.id] ? 1 : "" },
            {
              c: r.t(e.name),
              d: t,
              e: r.o(
                function (t) {
                  return u.handleToggle(e);
                },
                2302,
                t
              ),
            }
          );
        }),
        l: r.o(function () {
          return u.showAddGroup && u.showAddGroup.apply(u, arguments);
        }, 2303),
        m: r.o(function (e) {
          return u.close("move");
        }, 2304),
        n: r.o(function () {
          return u.moveStocks && u.moveStocks.apply(u, arguments);
        }, 2305),
        o: r.sr("movepop", "8e377b2b-1"),
        p: r.p({ show: i.movePopVisible, maskClosable: !0, zIndex: 101 }),
        q: n.isSimpleMode ? 1 : "",
      };
    },
  ],
  ["__scopeId", "data-v-8e377b2b"],
]);
wx.createComponent(i);
