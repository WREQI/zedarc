var e = require("../../../../@babel/runtime/helpers/defineProperty"),
  t = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../../app.js");
var i = require("./mixin.js"),
  n = require("../../../../stores/app/useMode.js"),
  a = require("../../../../common/vendor.js"),
  o = {
    options: { styleIsolation: "shared" },
    components: {
      MpActionSheet: function () {
        return "../../../../common/components/ActionSheet/index.js";
      },
    },
    mixins: [i.ProfileComponentMixin],
    props: { biz: { type: String, required: !0 } },
    setup: function () {
      var e = n.useModeStore();
      return { simpleMode: a.storeToRefs(e).simpleMode };
    },
    data: function () {
      return { selectId: "", otherVal: "", show: {} };
    },
    computed: {
      info: function () {
        return this.show.info || this.item.data.info;
      },
      errInfo: function () {
        return this.show.errInfo || this.item.data.errInfo || null;
      },
      isSubmitable: function () {
        return (
          a.isEmpty(this.errInfo) &&
          ((!a.isEmpty(this.selectId) && !this.isOtherNow) ||
            (this.isOtherNow && !a.isEmpty(this.otherVal)))
        );
      },
      isOtherNow: function () {
        return this.item.otherKey && this.selectId === this.item.data.otherId;
      },
    },
    watch: {
      selectId: function (e, t) {
        this.item.data.otherId,
          t === this.item.data.otherId && (this.otherVal = "");
      },
    },
    methods: {
      onChange: function (e) {
        var t = this,
          r = e.detail.value,
          i = this.item.data.val.find(function (e) {
            return e.id === r;
          });
        this.selectId !== r &&
          ((this.selectId = r), (this.show = i.show || {})),
          this.isOtherNow ||
            this.onBeforeClose(function (e) {
              !1 !== e && (t.isShow = !1);
            });
      },
      valid: function (e, i) {
        var n = this;
        return r(
          t().mark(function r() {
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      !n.isIncludeOther ||
                      !(
                        (n.item.data.minLength &&
                          e.otherVal.length < n.item.data.minLength) ||
                        (n.item.data.maxLength &&
                          e.otherVal.length > n.item.data.maxLength)
                      )
                    ) {
                      t.next = 2;
                      break;
                    }
                    throw "输入内容长度需为"
                      .concat(n.item.data.minLength || 0, " - ")
                      .concat(n.item.data.maxLength || "无上限");
                  case 2:
                    if (((t.t0 = n.item.data.valid), !t.t0)) {
                      t.next = 6;
                      break;
                    }
                    return (t.next = 6), n.item.data.valid(e, i);
                  case 6:
                    return t.abrupt("return", !0);
                  case 7:
                  case "end":
                    return t.stop();
                }
            }, r);
          })
        )();
      },
      onClose: function (e) {
        e || (this.$nextTick(this.resetData), this.$emit("close", !1));
      },
      onBeforeClose: function (i) {
        var n = this;
        return r(
          t().mark(function r() {
            var a, o, s, h;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        (n.item.data.trim &&
                          (n.otherVal = n.item.data.trim(n.otherVal)),
                        n.isSubmitable)
                      ) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return", void (null == i || i(!1)));
                    case 2:
                      return (
                        (a = n.selectId),
                        (o = n.otherVal),
                        (s = { selectId: a, otherVal: o }),
                        (t.prev = 3),
                        (t.next = 6),
                        n.valid(s, n.formData)
                      );
                    case 6:
                      t.next = 11;
                      break;
                    case 8:
                      return (
                        (t.prev = 8),
                        (t.t0 = t.catch(3)),
                        t.abrupt(
                          "return",
                          (n.showToast(t.t0), void (null == i || i(!1)))
                        )
                      );
                    case 11:
                      if (!n.item.data.confirm) {
                        t.next = 20;
                        break;
                      }
                      return (
                        (t.prev = 12),
                        (t.next = 15),
                        n.item.data.confirm(s, n.formData, n.formList)
                      );
                    case 15:
                      t.next = 20;
                      break;
                    case 17:
                      return (
                        (t.prev = 17),
                        (t.t1 = t.catch(12)),
                        t.abrupt("return", void (null == i || i(!1)))
                      );
                    case 20:
                      (h = e({}, n.item.key, n.selectId)),
                        n.item.otherKey &&
                          Object.assign(
                            h,
                            e(
                              {},
                              n.item.otherKey,
                              n.isOtherNow ? n.otherVal : ""
                            )
                          ),
                        n.$stat.click(
                          "trade."
                            .concat(n.biz, ".personaldate.")
                            .concat(n.item.key, ".confirm")
                        ),
                        n.commitData(h),
                        n.$nextTick(n.resetData),
                        null == i || i();
                    case 22:
                    case "end":
                      return t.stop();
                  }
              },
              r,
              null,
              [
                [3, 8],
                [12, 17],
              ]
            );
          })
        )();
      },
      setData: function (e) {
        (this.selectId = e[this.item.key] || ""),
          this.item.data.otherId &&
            this.selectId === this.item.data.otherId &&
            (this.otherVal = e[this.item.otherKey] || "");
      },
      resetData: function () {
        (this.selectId = ""), (this.otherVal = ""), (this.show = {});
      },
      onBlur: function () {},
    },
  };
Array || a.resolveComponent("mp-action-sheet")();
var s = a._export_sfc(o, [
  [
    "render",
    function (e, t, r, i, n, o) {
      return a.e(
        {
          a: a.f(e.item.data.val, function (t, r, s) {
            return a.e(
              {
                a: a.t(t.name),
                b: a.n(t.feDisabled ? "text-color-5" : "text-color-1"),
                c: t.feDisabled,
              },
              t.feDisabled
                ? {}
                : {
                    d: i.simpleMode ? "#e63535" : "#3077ec",
                    e: t.id,
                    f: t.id === n.selectId,
                  },
              {
                g: !t.hidden,
                h: r,
                i:
                  e.item.data.isRow ||
                  (o.isOtherNow && !(r < e.item.data.val.length - 1))
                    ? ""
                    : 1,
              }
            );
          }),
          b: e.item.data.isRow ? "" : 1,
          c: a.n(e.item.data.isRow ? "row" : "column"),
          d: a.o(function () {
            return o.onChange && o.onChange.apply(o, arguments);
          }),
          e: o.isOtherNow,
          f: e.item.data.type || "text",
          g: e.item.data.maxLength || 20,
          h: e.placeholder || "请填写",
          i: a.o(function () {
            return o.onBlur && o.onBlur.apply(o, arguments);
          }),
          j: n.otherVal,
          k: a.o(function (e) {
            return (n.otherVal = e.detail.value);
          }),
          l: o.errInfo,
        },
        o.errInfo ? { m: o.errInfo } : {},
        {
          n: o.isSubmitable ? "" : 1,
          o: o.isOtherNow ? "" : 1,
          p: a.o(o.onClose),
          q: a.p({
            pickerStyle: !0,
            maskClosable: !0,
            value: e.isShow,
            title: e.title,
            subtitle: e.item.data.info,
            "confirm-txt": "确定",
            "before-close": o.onBeforeClose,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-6e741d0e"],
]);
wx.createComponent(s);
