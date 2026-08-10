var e = require("../../../../../../@babel/runtime/helpers/defineProperty");
require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../../@babel/runtime/helpers/slicedToArray");
require("../../../../../../@babel/runtime/helpers/Objectentries");
var r = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  s = Object.defineProperties,
  o = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  p = function (e, t, n) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  d = function (e, t) {
    for (var n in t || (t = {})) a.call(t, n) && p(e, n, t[n]);
    if (c) {
      var i,
        s = r(c(t));
      try {
        for (s.s(); !(i = s.n()).done; ) {
          n = i.value;
          u.call(t, n) && p(e, n, t[n]);
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }
    }
    return e;
  },
  l = function (e, t) {
    return s(e, o(t));
  },
  f = function (e, t, n) {
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
  h = require("../../../../../../common/vendor.js"),
  g = require("../../../stock-base/service/common/utils.js"),
  m = require("../../../stock-base/service/api/request.js"),
  k = require("../../../stock-crypto-modules-hq/src/config.js"),
  v = function (e, t) {
    return b(e) ? "pt".concat(t) : w(e) ? e + t : S(e) + t || "";
  },
  b = function (e) {
    return "p" === e || "pt" === e;
  },
  w = function (e) {
    return "bj" === e || "nq" === e;
  },
  S = function (e) {
    return { 0: "sz", 1: "sh", 2: "hk", 3: "us", p: "pt" }[e] || e;
  },
  y = ["mpwzq", "mpweapp"].includes("mpweapp");
function x() {
  return h.StockBridge.getStorage("choose/userGroups") || [];
}
var G = function () {
    var e,
      t,
      n = (
        null == (t = null == (e = h.wx$1) ? void 0 : e.getLaunchOptionsSync)
          ? void 0
          : t.call(e)
      )
        ? h.wx$1.getLaunchOptionsSync().scene
        : "";
    return {
      openid: h.StockBridge.getStorage("_qluin"),
      fskey: h.StockBridge.getStorage("_qlskey"),
      version: "1.0.1",
      scene: n,
    };
  },
  I = function (e) {
    var t = "https://proxy.finance.qq.com/newstock/stockapp/Updstock/operseq";
    if (t) {
      var r,
        i,
        s = G(),
        o = {
          app: k.ORIGIN.mpweapp,
          appid: k.APPIDENUM.mpweapp,
          check: 11,
          new_opt: 1,
        },
        c = d(d(d({}, o), e), s);
      return (
        (r = t),
        (t =
          (i = c) && 0 !== Object.keys(i).length
            ? "".concat(r, "?").concat(
                Object.entries(i)
                  .map(function (e) {
                    var t = n(e, 2),
                      r = t[0],
                      i = t[1];
                    return ""
                      .concat(encodeURIComponent(r), "=")
                      .concat(encodeURIComponent(i.toString()));
                  })
                  .join("&")
              )
            : r),
        m.request({
          url: t,
          method: h.RequestTypeEnum.POST,
          data: c,
          options: { appendParamsApp: !0, forceCallback: !0 },
        })
      );
    }
  },
  q = function (e, t, n) {
    var r = [],
      i = (function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return e.split(",").map(function (e) {
          var n = e.substr(0, e.indexOf(":"));
          if (!isNaN(n) || b(n)) {
            var r = v(n, e.substr(e.indexOf(":") + 1));
            return t
              ? (function (e) {
                  return [
                    "usDJI",
                    "usINX",
                    "usIXIC",
                    "usNDX",
                    "usHXC",
                    "usNBI",
                  ].includes(e)
                    ? "us.".concat(e.slice(2))
                    : e;
                })(r)
              : r;
          }
          return e.replace(/:/g, "");
        });
      })((null == e ? void 0 : e.join(",")) || "");
    return (
      t.map(function (e) {
        null == i ||
          i.map(function (t) {
            r.push({
              grpid: e,
              act: n,
              code: t,
              timestamp: new Date().getTime(),
            });
          });
      }),
      "".concat(encodeURIComponent(JSON.stringify(r)))
    );
  },
  C = "cancel",
  P = {
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
          return ["close", "del", "directlyDel", "move"].includes(e);
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
        return v(n[0], n[1]);
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
          return f(
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
                          t.next = 8;
                          break;
                        }
                        return (t.next = 5), this.setRenderData();
                      case 5:
                        (this.renderGroups = t.sent),
                          this.curGroupId &&
                            this.changeSelect(this.curGroupId, !0),
                          "directlyDel" === e && this.delStock();
                      case 8:
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
          return f(
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
          l(d({}, e), { isContain: r })
        );
      },
      setRenderData: function () {
        return f(
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
                      return (
                        (e.prev = 2),
                        (e.next = 5),
                        new Promise(function (e, n) {
                          return f(
                            exports,
                            null,
                            t().mark(function r() {
                              var i, s, o, c;
                              return t().wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          (t.prev = 0),
                                          (i = g.getApiFullUrl(
                                            "newstock/stockapp/zixuangu/stocklist",
                                            g.API_HOST_ENUM.PROXY_QQ,
                                            y
                                          )),
                                          (s = {
                                            range: "group",
                                            followedVer: 0,
                                            allInfoVer: 0,
                                            all_groups: 1,
                                            check: 11,
                                            new_opt: 1,
                                            appid: "wx4ffb369b6881ee5e",
                                          }),
                                          (o = G()),
                                          (t.next = 6),
                                          m.request({
                                            url: i,
                                            method: h.RequestTypeEnum.GET,
                                            data: d(d({}, s), o),
                                            options: {
                                              appendParamsApp: !0,
                                              forceCallback: !0,
                                            },
                                          })
                                        );
                                      case 6:
                                        !(c = t.sent) ||
                                        (void 0 !== c.code && 0 != +c.code)
                                          ? n(c)
                                          : e(c),
                                          (t.next = 13);
                                        break;
                                      case 10:
                                        (t.prev = 10),
                                          (t.t0 = t.catch(0)),
                                          n(t.t0);
                                      case 13:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                r,
                                null,
                                [[0, 10]]
                              );
                            })
                          );
                        })
                      );
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
        return f(
          this,
          null,
          t().mark(function e() {
            var n,
              r,
              i,
              s,
              o,
              c = this;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((n = ""),
                        (r = []),
                        this.renderGroups.forEach(function (e) {
                          c.select[e.id] && r.push(e.id);
                        }),
                        (e.prev = 3),
                        !(r.length > 0 && this.scodelist.length > 0))
                      ) {
                        e.next = 9;
                        break;
                      }
                      return (
                        (e.next = 7),
                        (s = this.scodelist),
                        (o = r),
                        new Promise(function (e, t) {
                          var n = q(s, o, "sa");
                          I({ seq: n })
                            .then(function (t) {
                              e(t);
                            })
                            .catch(function (e) {
                              return t(e);
                            });
                        })
                      );
                    case 7:
                      (i = e.sent) && 0 === i.code
                        ? ((C = "success"),
                          h.StockBridge.report("base.choose-list.addtogroup"))
                        : ((C = "fail"), (n = i && i.msg));
                    case 9:
                      e.next = 14;
                      break;
                    case 11:
                      (e.prev = 11), (e.t0 = e.catch(3)), (C = "fail");
                    case 14:
                      return (
                        (e.prev = 14),
                        "success" === C
                          ? h.StockBridge.toast(
                              this.toastConfig.move.success,
                              "success",
                              1e3
                            )
                          : h.StockBridge.toast(
                              n || this.toastConfig.move.fail,
                              "none"
                            ),
                        this.finish(),
                        h.StockBridge.report(
                          "quote.add_stock_popup_confirm_click"
                        ),
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
        this.select = l(d({}, this.select), e({}, t, n));
      },
      showAddGroup: function () {
        (this.addPopVisible = !0),
          h.StockBridge.report("quote.add_stock_popup_add_group_click");
      },
      addGroup: function () {
        return f(
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
                        (h.StockBridge.toast(
                          "您创建的分组已达到上限！",
                          "none"
                        ),
                        void this.finish())
                      );
                    case 5:
                      if (
                        !(
                          this.renderGroups.filter(function (e) {
                            return e.name === s.newGroupName;
                          }).length > 0
                        )
                      ) {
                        e.next = 7;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        void h.StockBridge.toast("命名重复，请重新输入", "none")
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
                        void h.StockBridge.toast(
                          "分组名不得含有特殊字符",
                          "none"
                        )
                      );
                    case 9:
                      return (
                        (n = ""),
                        (e.prev = 10),
                        (e.next = 13),
                        (i = {
                          id: (this.editItem && this.editItem.id) || "",
                          name: this.newGroupName,
                        }),
                        new Promise(function (e, t) {
                          var n = d(
                              {
                                grpid: i.id,
                                grpname: i.name,
                                act:
                                  "" !== (null == i ? void 0 : i.id)
                                    ? "gu"
                                    : "ga",
                              },
                              i
                            ),
                            r = { timestamp: new Date().getTime(), act: n.act };
                          switch (n.act) {
                            case "ga":
                            case "gu":
                              (r.grpid =
                                n.grpid ||
                                "TEMP-".concat(new Date().getTime())),
                                (r.grpname = n.grpname);
                              break;
                            case "gd":
                              (r.grpid = n.grpid), (r.sync = n.sync ? 1 : 0);
                              break;
                            case "go":
                              r.grplist = n.grplist;
                              break;
                            case "gs":
                            case "gh":
                              r.grpid = n.grpid;
                              break;
                            case "sa":
                              if (!n.grpid) {
                                var s = x().find(function (e) {
                                  return "全部" === e.name && 1 == +e.type;
                                });
                                n.grpid = s && void 0 !== s.id ? s.id : "1";
                              }
                              (r.grpid = n.grpid), (r.code = n.code);
                              break;
                            case "sd":
                              if (!n.grpid) {
                                var o = x().find(function (e) {
                                  return "全部" === e.name && 1 == +e.type;
                                });
                                n.grpid = o && void 0 !== o.id ? o.id : "1";
                              }
                              (r.grpid = n.grpid), (r.code = n.code);
                              break;
                            case "sp":
                            case "st":
                              (r.grpid = n.grpid), (r.code = n.code);
                              break;
                            case "so":
                              (r.grpid = n.grpid), (r.codelist = n.codelist);
                          }
                          I({
                            seq: "".concat(
                              encodeURIComponent(JSON.stringify([r]))
                            ),
                          })
                            .then(function (t) {
                              e(t);
                            })
                            .catch(function (e) {
                              return t(e);
                            });
                        })
                      );
                    case 13:
                      (r = e.sent) && 0 === r.code
                        ? (C = "success")
                        : (n = r && r.msg),
                        (e.next = 20);
                      break;
                    case 17:
                      (e.prev = 17), (e.t0 = e.catch(10)), (C = "fail");
                    case 20:
                      return (
                        (e.prev = 20),
                        "success" === C
                          ? (h.StockBridge.toast(
                              this.editItem
                                ? "修改成功"
                                : this.toastConfig.add.success,
                              "success",
                              1e3
                            ),
                            h.StockBridge.report(
                              this.editItem
                                ? "base.choose-batch.group.modify"
                                : "base.choose-batch.group.add"
                            ))
                          : h.StockBridge.toast(
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
        return f(
          this,
          null,
          t().mark(function e() {
            var n, r, i, s, o;
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
                      return (
                        (e.next = 6),
                        (s = this.scodelist),
                        (o = r),
                        new Promise(function (e, t) {
                          var n = q(s, o, "sd");
                          I({ seq: n })
                            .then(function (t) {
                              e(t);
                            })
                            .catch(function (e) {
                              return t(e);
                            });
                        })
                      );
                    case 6:
                      (i = e.sent) && 0 === i.code
                        ? (C = "success")
                        : (n = i && i.msg);
                    case 8:
                      e.next = 13;
                      break;
                    case 10:
                      (e.prev = 10), (e.t0 = e.catch(2)), (C = "fail");
                    case 13:
                      return (
                        (e.prev = 13),
                        "success" === C
                          ? h.StockBridge.toast(
                              this.toastConfig.del.success,
                              "success",
                              1e3
                            )
                          : h.StockBridge.toast(
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
        (C = "cancel"), this.finish();
      },
      finish: function () {
        (this.editItem = null),
          (this.newGroupName = ""),
          this.$emit("finish", this.innerShow, C),
          (this.addPopVisible = !1),
          "move" === this.innerShow &&
            h.StockBridge.report("quote.add_stock_popup_cancel_click"),
          (C = "cancel");
      },
    },
  };
Array || (h.resolveComponent("Popup") + h.resolveComponent("Checkbox"))();
var _ = h._export_sfc(P, [
  [
    "render",
    function (e, t, n, r, i, s) {
      return h.e(
        { a: "del" === s.innerShow },
        "del" === s.innerShow
          ? {
              b: h.o(s.cancel, 4402),
              c: h.o(s.delStock, 4403),
              d: h.p({
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
              h: h.o(
                [
                  [
                    function (e) {
                      return (i.newGroupName = e.detail.value);
                    },
                    4405,
                  ],
                  [
                    function () {
                      return (
                        s.addGroupInputChange &&
                        s.addGroupInputChange.apply(s, arguments)
                      );
                    },
                    4404,
                  ],
                ],
                4406
              ),
              i: i.newGroupName,
              j: s.isBlackSkin ? 1 : "",
              k: h.o(s.cancel, 4407),
              l: h.o(s.addGroup, 4408),
              m: h.o(function () {}, 4409),
              n: h.p({
                title: "请输入分组名称",
                "is-black-skin": s.isBlackSkin,
              }),
            }
          : {},
        { o: "move" === s.innerShow },
        "move" === s.innerShow
          ? {
              p: h.f(i.renderGroups, function (e, t, n) {
                return h.e(
                  {
                    a: "0fb450dc-3-" + n + ",0fb450dc-2",
                    b: h.p({
                      value: i.select[e.id],
                      "is-black-skin": s.isBlackSkin,
                      disabled: e.isContain,
                    }),
                    c: h.t(e.name),
                    d: 3 == e.type && e.isContain,
                  },
                  (3 == e.type && e.isContain, {}),
                  {
                    e: "movepopgrous".concat(t),
                    f: h.o(
                      function (t) {
                        return s.changeSelect(e.id, !i.select[e.id]);
                      },
                      4410,
                      "movepopgrous".concat(t)
                    ),
                  }
                );
              }),
              q: h.o(function () {
                return s.showAddGroup && s.showAddGroup.apply(s, arguments);
              }, 4411),
              r: s.isBlackSkin ? 1 : "",
              s: h.o(s.cancel, 4412),
              t: h.o(s.moveStocks, 4413),
              v: h.p({
                title: "添加到如下分组",
                "is-black-skin": s.isBlackSkin,
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-0fb450dc"],
]);
wx.createComponent(_);
