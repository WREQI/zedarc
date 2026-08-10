var e = require("../../../../@babel/runtime/helpers/toConsumableArray");
require("../../../../app.js");
var t = require("../../../../common/vendor.js"),
  n = require("../../../../stores/apply/useAddress.js"),
  i = require("../../../../model/apply/profile/utils/address.js"),
  o = {
    name: "DistrictSelect",
    options: { styleIsolation: "shared" },
    emits: ["change", "confirm", "close"],
    components: {
      MpActionSheet: function () {
        return "../../../../common/components/ActionSheet/index.js";
      },
    },
    props: {
      isShow: {
        type: Boolean,
        default: function () {
          return !1;
        },
      },
      title: {
        type: String,
        default: function () {
          return "";
        },
      },
    },
    setup: function (o) {
      var a = t.getCurrentInstance().proxy,
        c = n.useAddressStore(),
        r = t.storeToRefs(c),
        u = r.pickerData,
        l = r.pickedIndexes,
        s = t.ref("id"),
        v = t.ref("");
      function m(e) {
        v.value = s.value + e;
      }
      var d = t.ref("0"),
        f = t.ref("1"),
        p = t.ref("2"),
        h = t.ref(d.value),
        N = t.ref(!1),
        y = t.ref(!1),
        C = t.computed(function () {
          return g(d.value);
        }),
        k = t.computed(function () {
          return g(f.value);
        }),
        b = t.computed(function () {
          return g(p.value);
        });
      function g(e) {
        var t,
          n = l.value[e];
        return null === n
          ? "请选择"
          : null == (t = i.addressUtil.getChildrenList(u.value[e])[n])
          ? void 0
          : t.name;
      }
      var S = t.computed(function () {
          var e, t;
          return (
            (null == (e = I.value[l.value[h.value]]) ? void 0 : e.code) ||
            (null == (t = w.value[0]) ? void 0 : t.code)
          );
        }),
        x = t.computed(function () {
          var e = {},
            t = u.value[h.value] || {};
          return (
            Object.keys(t)
              .sort()
              .forEach(function (n) {
                t[n] && (e[n] = t[n]);
              }),
            e
          );
        }),
        I = t.computed(function () {
          return i.addressUtil.getChildrenList(x.value);
        }),
        w = t.computed(function () {
          return Object.keys(x.value).reduce(function (t, n) {
            var i;
            return [].concat(e(t), [
              {
                initial: n,
                code: null == (i = x.value[n][0]) ? void 0 : i.code,
              },
            ]);
          }, []);
        }),
        A = t.computed(function () {
          return l.value.filter(function (e) {
            return null !== e;
          }).length;
        }),
        j = t.computed(function () {
          return u.value.filter(function (e) {
            return e;
          }).length;
        }),
        z = t.computed(function () {
          return A.value === j.value;
        });
      return (
        t.watch(h, function () {
          t.nextTick$1(function () {
            S.value && m(S.value);
          });
        }),
        t.watch(
          u,
          function () {
            switch (
              ((h.value = j.value ? String(j.value - 1) : "0"), j.value)
            ) {
              case 2:
                (N.value = !0), (y.value = !1);
                break;
              case 3:
                (N.value = !0), (y.value = !0);
                break;
              default:
                (N.value = !1), (y.value = !1);
            }
          },
          { immediate: !0 }
        ),
        {
          idPrefix: s,
          srcollToId: v,
          popluarCities: [
            { provinceName: "广东省", cityName: "深圳市" },
            { provinceName: "重庆市", cityName: "重庆市" },
            { provinceName: "上海市", cityName: "上海市" },
            { provinceName: "广东省", cityName: "广州市" },
            { provinceName: "北京市", cityName: "北京市" },
            { provinceName: "广东省", cityName: "佛山市" },
            { provinceName: "广东省", cityName: "东莞市" },
            { provinceName: "江苏省", cityName: "苏州市" },
            { provinceName: "四川省", cityName: "成都市" },
            { provinceName: "广东省", cityName: "汕头市" },
            { provinceName: "天津市", cityName: "天津市" },
            { provinceName: "福建省", cityName: "厦门市" },
          ],
          province: d,
          city: f,
          zone: p,
          pickerData: u,
          pickedIndexes: l,
          activeColumn: h,
          hasCity: N,
          hasZone: y,
          scrollList: I,
          intialFirstIdxs: w,
          provinceName: C,
          cityName: k,
          zoneName: b,
          realSelectedColNum: A,
          isSubmitable: z,
          scrollTo: m,
          isShowInitial: function (e) {
            return w.value.some(function (t) {
              return t.code === e;
            });
          },
          showInitial: function (e) {
            var t = "";
            return (
              w.value.some(function (n) {
                return n.code === e && ((t = n.initial), !0);
              }),
              t
            );
          },
          changeActiveCol: function (e) {
            h.value = e;
          },
          onPicked: function (e) {
            switch (h.value) {
              case d.value:
                e !== l.value[d.value] &&
                  a.$emit("change", [I.value[e].name, "", ""]);
                break;
              case f.value:
                e !== l.value[f.value] &&
                  a.$emit("change", [C.value, I.value[e].name, ""]);
                break;
              case p.value:
                e !== l.value[p.value] &&
                  a.$emit("change", [C.value, k.value, I.value[e].name]);
            }
          },
          pickPopCity: function (e) {
            a.$emit("change", [e.provinceName, e.cityName, ""]);
          },
        }
      );
    },
    created: function () {
      this.activeColumn = this.realSelectedColNum
        ? String(
            this.pickerData.filter(function (e) {
              return e;
            }).length - 1
          )
        : "0";
    },
    methods: {
      onClose: function (e) {
        e || this.$emit("close", !1);
      },
      onBeforeClose: function (e) {
        if (!this.isSubmitable)
          return (
            t.index.showToast({ title: "请选择完整地址", icon: "none" }),
            void (e && e(!1))
          );
        var n = [
          this.provinceName,
          "请选择" === this.cityName ? "" : this.cityName,
          "请选择" === this.zoneName ? "" : this.zoneName,
        ];
        this.$emit("confirm", n), e && e();
      },
    },
  };
Array || t.resolveComponent("mp-action-sheet")();
var a = t._export_sfc(o, [
  [
    "render",
    function (e, n, i, o, a, c) {
      return t.e(
        {
          a: t.t(o.provinceName),
          b: o.activeColumn === o.province ? 1 : "",
          c: t.o(function (e) {
            return o.changeActiveCol(o.province);
          }),
          d: o.hasCity,
        },
        o.hasCity
          ? {
              e: t.t(o.cityName),
              f: o.activeColumn === o.city ? 1 : "",
              g: t.o(function (e) {
                return o.changeActiveCol(o.city);
              }),
            }
          : {},
        { h: o.hasZone },
        o.hasZone
          ? {
              i: t.t(o.zoneName),
              j: o.activeColumn === o.zone ? 1 : "",
              k: t.o(function (e) {
                return o.changeActiveCol(o.zone);
              }),
            }
          : {},
        {
          l: t.f(o.popluarCities, function (e, n, i) {
            return {
              a: t.t(e.cityName),
              b: n,
              c: t.o(function (t) {
                return o.pickPopCity(e);
              }, n),
            };
          }),
          m: "0" === o.activeColumn,
          n: t.f(o.scrollList, function (e, n, i) {
            return t.e(
              { a: o.isShowInitial(e.code) },
              o.isShowInitial(e.code) ? { b: t.t(o.showInitial(e.code)) } : {},
              {
                c: t.t(e.name),
                d: n === o.pickedIndexes[o.activeColumn] ? 1 : "",
                e: t.o(function (e) {
                  return o.onPicked(n);
                }, e.code),
                f: n === o.pickedIndexes[o.activeColumn],
              },
              (o.pickedIndexes[o.activeColumn], {}),
              { g: o.idPrefix + e.code, h: e.code }
            );
          }),
          o: o.srcollToId,
          p: t.f(o.intialFirstIdxs, function (e, n, i) {
            return {
              a: t.t(e.initial),
              b: e.code,
              c: t.o(function (t) {
                return o.scrollTo(e.code);
              }, e.code),
            };
          }),
          q: o.isSubmitable ? "" : 1,
          r: t.o(c.onClose),
          s: t.p({
            "picker-style": !0,
            "mask-closable": !0,
            "before-close": c.onBeforeClose,
            value: i.isShow,
            title: i.title,
            "confirm-txt": "确定",
          }),
        }
      );
    },
  ],
]);
wx.createComponent(a);
