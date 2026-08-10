var t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../../@babel/runtime/helpers/defineProperty"),
  a = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var r = require("../../../common/vendor.js"),
  n = require("../../../stores/apply/useProfile.js"),
  i = {
    options: { styleIsolation: "shared" },
    components: {
      MpActionSheet: function () {
        return "../../../common/components/ActionSheet/index.js";
      },
    },
    props: {
      biz: { type: String, required: !0 },
      selectKey: { type: String, required: !0 },
      value: { type: Boolean, required: !0 },
    },
    setup: function () {
      var t = n.useProfileStore(),
        e = r.storeToRefs(t);
      return {
        formData: e.formData,
        formList: e.formList,
        updateData: t.updateData,
      };
    },
    data: function () {
      return { inputVal: "", errText: "", focus: !1 };
    },
    computed: {
      isSubmitable: function () {
        return !r.isEmpty(this.inputVal);
      },
      item: function () {
        var t,
          e = this;
        return (
          (null == (t = this.formList)
            ? void 0
            : t.find(function (t) {
                return t.key === e.selectKey;
              })) || { data: {} }
        );
      },
      title: function () {
        return this.item.title || "";
      },
      placeholder: function () {
        return "function" == typeof this.item.data.placeholder
          ? this.item.data.placeholder(this.formData)
          : this.item.data.placeholder;
      },
    },
    watch: {
      value: function (t) {
        var e = this;
        t
          ? ((this.inputVal = this.formData[this.item.key] || ""),
            this.$emit("input", t),
            setTimeout(function () {
              e.focus = !0;
            }, 300))
          : (this.focus = !1);
      },
    },
    methods: {
      onClose: function (t) {
        t || (this.$nextTick(this.resetData), this.$emit("close", !1));
      },
      onBeforeClose: function (n) {
        var i = this;
        return a(
          t().mark(function a() {
            var o, u, l;
            return t().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        (i.item.data.trim &&
                          (i.inputVal = i.item.data.trim(i.inputVal)),
                        i.isSubmitable)
                      ) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return", void (null == n || n(!1)));
                    case 2:
                      return (
                        (l = { inputVal: i.inputVal }),
                        (t.prev = 3),
                        (t.next = 6),
                        i.valid(l, i.formData)
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
                          ((i.errText = t.t0), void (null == n || n(!1)))
                        )
                      );
                    case 11:
                      if (!i.item.data.confirm) {
                        t.next = 20;
                        break;
                      }
                      return (
                        (t.prev = 12),
                        (t.next = 15),
                        i.item.data.confirm(l, i.formData)
                      );
                    case 15:
                      t.next = 20;
                      break;
                    case 17:
                      return (
                        (t.prev = 17),
                        (t.t1 = t.catch(12)),
                        t.abrupt("return", void (null == n || n(!1)))
                      );
                    case 20:
                      i.$stat.click(
                        "trade."
                          .concat(i.biz, ".personaldate.")
                          .concat(i.item.key, ".confirm")
                      ),
                        i.commitData(e({}, i.item.key, i.inputVal)),
                        i.$nextTick(i.resetData),
                        null == n || n(),
                        null ==
                          (u =
                            null == (o = r.wx$1) ? void 0 : o.hideKeyboard) ||
                          u.call(o);
                    case 21:
                    case "end":
                      return t.stop();
                  }
              },
              a,
              null,
              [
                [3, 8],
                [12, 17],
              ]
            );
          })
        )();
      },
      resetData: function () {
        (this.inputVal = ""), (this.errText = "");
      },
      valid: function (e, r) {
        var n = this;
        return a(
          t().mark(function a() {
            var i, o;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      (null == (o = (i = n.item.data).ignoreLengthValid)
                        ? void 0
                        : o.call(i, e, r)) ||
                      !(
                        (n.item.data.minLength &&
                          e.inputVal.length < n.item.data.minLength) ||
                        (n.item.data.maxLength &&
                          e.inputVal.length > n.item.data.maxLength)
                      )
                    ) {
                      t.next = 2;
                      break;
                    }
                    throw "输入内容长度需为"
                      .concat(n.item.data.minLength || 0, " - ")
                      .concat(n.item.data.maxLength || "无上限", "个字");
                  case 2:
                    if (((t.t0 = n.item.data.valid), !t.t0)) {
                      t.next = 6;
                      break;
                    }
                    return (t.next = 6), n.item.data.valid(e, r, n.item);
                  case 6:
                    return t.abrupt("return", !0);
                  case 7:
                  case "end":
                    return t.stop();
                }
            }, a);
          })
        )();
      },
      onBlur: function () {},
      commitData: function (t) {
        this.updateData({ data: t });
      },
    },
  };
Array || r.resolveComponent("mp-action-sheet")();
var o = r._export_sfc(i, [
  [
    "render",
    function (t, e, a, n, i, o) {
      return r.e(
        {
          a: o.item.data.type || "text",
          b: o.item.data.maxLength || 20,
          c: o.placeholder || "请填写",
          d: i.focus,
          e: r.o(function () {
            return o.onBlur && o.onBlur.apply(o, arguments);
          }),
          f: i.inputVal,
          g: r.o(function (t) {
            return (i.inputVal = t.detail.value);
          }),
          h: "company" === o.item.key,
        },
        "company" === o.item.key
          ? r.e({ i: "学校" === o.item.label }, (o.item.label, {}))
          : {},
        { j: i.errText },
        i.errText ? { k: r.t(i.errText) } : {},
        {
          l: o.isSubmitable ? "" : 1,
          m: r.o(o.onClose),
          n: r.p({
            value: a.value,
            title: o.title,
            subtitle: o.item.data.info,
            "confirm-txt": "确定",
            "before-close": o.onBeforeClose,
            "picker-style": !0,
            "mask-closable": !0,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-f35ededf"],
]);
wx.createComponent(o);
