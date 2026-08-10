var e = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../@babel/runtime/helpers/defineProperty"),
  n = require("../../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../../app.js");
var r = require("../../../../common/vendor.js"),
  a = {
    options: { styleIsolation: "shared" },
    components: {
      MpActionSheet: function () {
        return "../../../../common/components/ActionSheet/index.js";
      },
    },
    mixins: [require("./mixin.js").ProfileComponentMixin],
    props: { biz: { type: String, required: !0 } },
    data: function () {
      return { inputVal: "", errText: "", focus: !1 };
    },
    computed: {
      isSubmitable: function () {
        return !r.isEmpty(this.inputVal);
      },
    },
    watch: {
      isShow: function (e) {
        var t = this;
        e
          ? setTimeout(function () {
              t.focus = !0;
            }, 300)
          : (this.focus = !1);
      },
    },
    methods: {
      onClose: function (e) {
        e || (this.$nextTick(this.resetData), this.$emit("close", !1));
      },
      onBeforeClose: function (a) {
        var i = this;
        return n(
          e().mark(function n() {
            var o, u, c;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (i.item.data.trim &&
                          (i.inputVal = i.item.data.trim(i.inputVal)),
                        i.isSubmitable)
                      ) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", void (null == a || a(!1)));
                    case 2:
                      return (
                        (c = { inputVal: i.inputVal }),
                        (e.prev = 3),
                        (e.next = 6),
                        i.valid(c, i.formData)
                      );
                    case 6:
                      e.next = 11;
                      break;
                    case 8:
                      return (
                        (e.prev = 8),
                        (e.t0 = e.catch(3)),
                        e.abrupt(
                          "return",
                          ((i.errText = e.t0), void (null == a || a(!1)))
                        )
                      );
                    case 11:
                      if (!i.item.data.confirm) {
                        e.next = 20;
                        break;
                      }
                      return (
                        (e.prev = 12),
                        (e.next = 15),
                        i.item.data.confirm(c, i.formData)
                      );
                    case 15:
                      e.next = 20;
                      break;
                    case 17:
                      return (
                        (e.prev = 17),
                        (e.t1 = e.catch(12)),
                        e.abrupt("return", void (null == a || a(!1)))
                      );
                    case 20:
                      i.$stat.click(
                        "trade."
                          .concat(i.biz, ".personaldate.")
                          .concat(i.item.key, ".confirm")
                      ),
                        i.commitData(t({}, i.item.key, i.inputVal)),
                        i.$nextTick(i.resetData),
                        null == a || a(),
                        null ==
                          (u =
                            null == (o = r.wx$1) ? void 0 : o.hideKeyboard) ||
                          u.call(o);
                    case 21:
                    case "end":
                      return e.stop();
                  }
              },
              n,
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
        this.inputVal = e[this.item.key] || "";
      },
      resetData: function () {
        (this.inputVal = ""), (this.errText = "");
      },
      valid: function (t, r) {
        var a = this;
        return n(
          e().mark(function n() {
            var i, o;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      (null == (o = (i = a.item.data).ignoreLengthValid)
                        ? void 0
                        : o.call(i, t, r)) ||
                      !(
                        (a.item.data.minLength &&
                          t.inputVal.length < a.item.data.minLength) ||
                        (a.item.data.maxLength &&
                          t.inputVal.length > a.item.data.maxLength)
                      )
                    ) {
                      e.next = 2;
                      break;
                    }
                    throw "输入内容长度需为"
                      .concat(a.item.data.minLength || 0, " - ")
                      .concat(a.item.data.maxLength || "无上限");
                  case 2:
                    if (((e.t0 = a.item.data.valid), !e.t0)) {
                      e.next = 6;
                      break;
                    }
                    return (e.next = 6), a.item.data.valid(t, r, a.item);
                  case 6:
                    return e.abrupt("return", !0);
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, n);
          })
        )();
      },
      onBlur: function () {},
    },
  };
Array || r.resolveComponent("mp-action-sheet")();
var i = r._export_sfc(a, [
  [
    "render",
    function (e, t, n, a, i, o) {
      return r.e(
        {
          a: e.item.data.type || "text",
          b: e.item.data.maxLength || 20,
          c: e.placeholder || "请填写",
          d: i.focus,
          e: r.o(function () {
            return o.onBlur && o.onBlur.apply(o, arguments);
          }),
          f: i.inputVal,
          g: r.o(function (e) {
            return (i.inputVal = e.detail.value);
          }),
          h: "company" === e.item.key,
        },
        "company" === e.item.key
          ? r.e({ i: "学校" === e.item.label }, (e.item.label, {}))
          : {},
        { j: i.errText },
        i.errText ? { k: r.t(i.errText) } : {},
        {
          l: o.isSubmitable ? "" : 1,
          m: r.o(o.onClose),
          n: r.p({
            value: e.isShow,
            title: e.title,
            subtitle: e.item.data.info,
            "confirm-txt": "确定",
            "before-close": o.onBeforeClose,
            "picker-style": !0,
            "mask-closable": !0,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-2b350f3e"],
]);
wx.createComponent(i);
