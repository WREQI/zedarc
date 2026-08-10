var t = require("../../../@babel/runtime/helpers/defineProperty"),
  e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var r = require("../../../common/vendor.js"),
  a = require("../../../stores/app/useMode.js"),
  n = require("../../../stores/apply/useProfile.js"),
  o = {
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
      var t = a.useModeStore(),
        e = n.useProfileStore(),
        i = r.storeToRefs(t).simpleMode,
        o = r.storeToRefs(e);
      return {
        simpleMode: i,
        formList: o.formList,
        formData: o.formData,
        updateData: e.updateData,
      };
    },
    data: function () {
      return { selectId: "", otherVal: "", show: {} };
    },
    computed: {
      title: function () {
        return this.item.title || "";
      },
      item: function () {
        var t = this;
        return (
          this.formList.find(function (e) {
            return e.key === t.selectKey;
          }) || { data: {} }
        );
      },
      placeholder: function () {
        return "function" == typeof this.item.data.placeholder
          ? this.item.data.placeholder(this.formData)
          : this.item.data.placeholder;
      },
      info: function () {
        return this.show.info || this.item.data.info;
      },
      errInfo: function () {
        return this.show.errInfo || this.item.data.errInfo || null;
      },
      warnInfo: function () {
        var t, e;
        return (
          (null == (t = this.show) ? void 0 : t.warnInfo) ||
          (null == (e = this.item.data) ? void 0 : e.warnInfo) ||
          null
        );
      },
      isSubmitable: function () {
        return (
          r.isEmpty(this.errInfo) &&
          ((!r.isEmpty(this.selectId) && !this.isOtherNow) ||
            (this.isOtherNow && !r.isEmpty(this.otherVal)))
        );
      },
      isOtherNow: function () {
        return this.item.otherKey && this.selectId === this.item.data.otherId;
      },
    },
    watch: {
      selectId: function (t, e) {
        this.item.data.otherId,
          e === this.item.data.otherId && (this.otherVal = "");
      },
      value: function (t) {
        var e,
          i = this;
        if (
          t &&
          ((this.selectId = this.formData[this.item.key] || ""),
          this.item.data.otherId &&
            this.selectId === this.item.data.otherId &&
            (this.otherVal = this.formData[this.item.otherKey] || ""),
          this.selectId && this.item.data.val)
        ) {
          var r = this.item.data.val.find(function (t) {
            return t.id === i.selectId;
          });
          (null == (e = null == r ? void 0 : r.show) ? void 0 : e.warnInfo) &&
            (this.show = { warnInfo: r.show.warnInfo });
        }
      },
    },
    methods: {
      showToast: function (t) {
        r.index.showToast({ title: t, icon: "none" });
      },
      commitData: function (t) {
        this.updateData({ data: t });
      },
      onChange: function (t) {
        var e,
          i = this,
          r = t.detail.value,
          a = this.item.data.val.find(function (t) {
            return t.id === r;
          });
        this.selectId !== r &&
          ((this.selectId = r), (this.show = a.show || {})),
          (null == (e = a.show) ? void 0 : e.warnInfo) ||
            this.isOtherNow ||
            this.onBeforeClose(function (t) {
              !1 !== t && i.onClose(!1);
            });
      },
      valid: function (t, r) {
        var a = this;
        return i(
          e().mark(function i() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      !a.isIncludeOther ||
                      !(
                        (a.item.data.minLength &&
                          t.otherVal.length < a.item.data.minLength) ||
                        (a.item.data.maxLength &&
                          t.otherVal.length > a.item.data.maxLength)
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
                    return (e.next = 6), a.item.data.valid(t, r);
                  case 6:
                    return e.abrupt("return", !0);
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, i);
          })
        )();
      },
      onClose: function (e) {
        var i;
        if (!e) {
          if (
            this.selectId &&
            (null == (i = this.show) ? void 0 : i.warnInfo)
          ) {
            var r = t({}, this.item.key, this.selectId);
            this.item.otherKey &&
              Object.assign(
                r,
                t({}, this.item.otherKey, this.isOtherNow ? this.otherVal : "")
              ),
              this.commitData(r);
          }
          this.$nextTick(this.resetData), this.$emit("close", !1);
        }
      },
      onBeforeClose: function (r) {
        var a = this;
        return i(
          e().mark(function i() {
            var n, o, s, h;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (a.item.data.trim &&
                          (a.otherVal = a.item.data.trim(a.otherVal)),
                        a.isSubmitable)
                      ) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", void (null == r || r(!1)));
                    case 2:
                      return (
                        (n = a.selectId),
                        (o = a.otherVal),
                        (s = { selectId: n, otherVal: o }),
                        (e.prev = 3),
                        (e.next = 6),
                        a.valid(s, a.formData)
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
                          (a.showToast(e.t0), void (null == r || r(!1)))
                        )
                      );
                    case 11:
                      if (!a.item.data.confirm) {
                        e.next = 20;
                        break;
                      }
                      return (
                        (e.prev = 12),
                        (e.next = 15),
                        a.item.data.confirm(s, a.formData, a.formList)
                      );
                    case 15:
                      e.next = 20;
                      break;
                    case 17:
                      return (
                        (e.prev = 17),
                        (e.t1 = e.catch(12)),
                        e.abrupt("return", void (null == r || r(!1)))
                      );
                    case 20:
                      (h = t({}, a.item.key, a.selectId)),
                        a.item.otherKey &&
                          Object.assign(
                            h,
                            t(
                              {},
                              a.item.otherKey,
                              a.isOtherNow ? a.otherVal : ""
                            )
                          ),
                        a.$stat.click(
                          "trade."
                            .concat(a.biz, ".personaldate.")
                            .concat(a.item.key, ".confirm")
                        ),
                        a.commitData(h),
                        a.$nextTick(a.resetData),
                        null == r || r();
                    case 22:
                    case "end":
                      return e.stop();
                  }
              },
              i,
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
        (this.selectId = ""), (this.otherVal = ""), (this.show = {});
      },
      onBlur: function () {},
    },
  };
Array || r.resolveComponent("mp-action-sheet")();
var s = r._export_sfc(o, [
  [
    "render",
    function (t, e, i, a, n, o) {
      return r.e(
        {
          a: r.f(o.item.data.val, function (t, e, i) {
            return r.e(
              {
                a: r.t(t.name),
                b: r.n(t.feDisabled ? "text-color-5" : "text-color-1"),
                c: t.feDisabled,
              },
              t.feDisabled
                ? {}
                : {
                    d: a.simpleMode ? "#e63535" : "#3077ec",
                    e: t.id,
                    f: t.id === n.selectId,
                  },
              { g: o.isOtherNow && n.selectId === t.id },
              o.isOtherNow && n.selectId === t.id
                ? {
                    h: o.item.data.type || "text",
                    i: o.item.data.maxLength || 20,
                    j: o.placeholder || "请填写",
                    k: r.o(function () {
                      return o.onBlur && o.onBlur.apply(o, arguments);
                    }, e),
                    l: n.otherVal,
                    m: r.o(function (t) {
                      return (n.otherVal = t.detail.value);
                    }, e),
                  }
                : {},
              { n: !o.item.data.isRow && o.errInfo && n.selectId === t.id },
              !o.item.data.isRow && o.errInfo && n.selectId === t.id
                ? { o: o.errInfo }
                : {},
              { p: !o.item.data.isRow && o.warnInfo && n.selectId === t.id },
              !o.item.data.isRow && o.warnInfo && n.selectId === t.id
                ? { q: o.warnInfo }
                : {},
              {
                r: !t.hidden,
                s: e,
                t:
                  !o.item.data.isRow && e < o.item.data.val.length - 1 ? 1 : "",
              }
            );
          }),
          b: r.n(o.item.data.isRow ? "row" : "column"),
          c: r.o(function () {
            return o.onChange && o.onChange.apply(o, arguments);
          }),
          d: o.item.data.isRow && o.errInfo,
        },
        o.item.data.isRow && o.errInfo ? { e: o.errInfo } : {},
        { f: o.item.data.isRow && o.warnInfo },
        o.item.data.isRow && o.warnInfo ? { g: o.warnInfo } : {},
        {
          h: o.isSubmitable ? "" : 1,
          i: o.isOtherNow ? "" : 1,
          j: r.o(o.onClose),
          k: r.p({
            pickerStyle: !0,
            maskClosable: !0,
            value: i.value,
            title: o.title,
            subtitle: o.item.data.info,
            "confirm-txt": "确定",
            "before-close": o.onBeforeClose,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-657d225a"],
]);
wx.createComponent(s);
