var t = require("../../../@babel/runtime/helpers/defineProperty"),
  e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  i = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var r = require("../../../common/vendor.js"),
  n = require("../../../model/apply/profile/utils/string.js"),
  a = require("../../../stores/apply/useProfile.js"),
  s = {
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
      var t = a.useProfileStore(),
        e = r.storeToRefs(t);
      return {
        formList: e.formList,
        formData: e.formData,
        updateData: t.updateData,
      };
    },
    data: function () {
      return { isShow: !1, selectId: [], otherVal: "", shows: [] };
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
      itemWithSpecial: function () {
        return this.item.data.val
          ? this.item.data.val.filter(function (t) {
              return t.special;
            })
          : [];
      },
      showErrInfo: function () {
        var t = this.shows.filter(function (t) {
          return !!t.errInfo;
        });
        return t.length > 0 ? t[0].errInfo : null;
      },
      errInfo: function () {
        return this.showErrInfo || this.item.data.errInfo || "";
      },
      itemWithoutSpecial: function () {
        return this.item.data.val
          ? this.item.data.val.filter(function (t) {
              return !t.special;
            })
          : [];
      },
      isSubmitable: function () {
        return (
          r.isEmpty(this.errInfo) &&
          ((!r.isEmpty(this.selectId) && !this.isIncludeOther) ||
            (this.isIncludeOther && !r.isEmpty(this.otherVal)))
        );
      },
      isIncludeOther: function () {
        return this.selectId.includes(this.item.data.otherId);
      },
    },
    watch: {
      value: function (t) {
        this.isShow = t;
      },
      isShow: function (t) {
        t &&
          ((this.selectId = this.formData[this.item.key]
            .split("+")
            .filter(function (t) {
              return t;
            })),
          this.item.data.otherId &&
            this.selectId.includes(this.item.data.otherId) &&
            (this.otherVal = this.formData[this.item.otherKey] || "")),
          this.$emit("input", t);
      },
    },
    methods: {
      showToast: function (t) {
        r.index.showToast({ title: t, icon: "none" });
      },
      select: function (t, e) {
        this.selectId.slice();
        var i = this.selectId.findIndex(function (e) {
          return e === t;
        });
        if (i >= 0)
          this.selectId.splice(i, 1),
            t === this.item.data.otherId && (this.otherId = "");
        else if (e)
          (this.selectId = [t]),
            t !== this.item.data.otherId && (this.otherId = "");
        else {
          var r = this.selectId[0];
          r && (this.item.data.val.get(r) || {}).single
            ? (this.selectId = [t])
            : this.selectId.push(t);
        }
        this.updateSelectedShow();
      },
      updateSelectedShow: function () {
        var t = this;
        if (0 !== this.selectId.length) {
          var e = this.selectId
            .map(function (e) {
              return t.item.data.val.get(e);
            })
            .sort(function (e, i) {
              return t.item.data.val.indexOfId(e.id) >=
                t.item.data.val.indexOfId(i.id)
                ? 1
                : -1;
            });
          this.shows = e
            .map(function (t) {
              return t.show;
            })
            .filter(function (t) {
              return !!t;
            });
        } else this.shows = [];
      },
      valid: function (t, r) {
        var n = this;
        return i(
          e().mark(function i() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      !n.isIncludeOther ||
                      !(
                        (n.item.data.minLength &&
                          t.otherVal.length < n.item.data.minLength) ||
                        (n.item.data.maxLength &&
                          t.otherVal.length > n.item.data.maxLength)
                      )
                    ) {
                      e.next = 2;
                      break;
                    }
                    throw "输入内容长度需为"
                      .concat(n.item.data.minLength || 0, " - ")
                      .concat(n.item.data.maxLength || "无上限");
                  case 2:
                    if (((e.t0 = n.item.data.valid), !e.t0)) {
                      e.next = 6;
                      break;
                    }
                    return (e.next = 6), n.item.data.valid(t, r);
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
      onClose: function (t) {
        t || (this.$nextTick(this.resetData), this.$emit("close", !1));
      },
      onBeforeClose: function (a) {
        var s = this;
        return i(
          e().mark(function i() {
            var o, l, c, u;
            return e().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (s.item.data.trim &&
                          (s.otherVal = s.item.data.trim(s.otherVal)),
                        s.isSubmitable)
                      ) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return", void (null == a || a(!1)));
                    case 2:
                      if (
                        !s.isIncludeOther ||
                        r.isEmpty(s.otherVal) ||
                        !n.judgeStrInclude(s.otherVal, ["<", ">", "'"])
                      ) {
                        e.next = 4;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        (s.showToast("内容不能包含特殊字符，请重新输入"),
                        void (null == a || a(!1)))
                      );
                    case 4:
                      return (
                        (o = s.selectId),
                        (l = s.otherVal),
                        (c = { selectId: o, otherVal: l }),
                        (e.prev = 5),
                        (e.next = 8),
                        s.valid(c, s.formData)
                      );
                    case 8:
                      e.next = 13;
                      break;
                    case 10:
                      return (
                        (e.prev = 10),
                        (e.t0 = e.catch(5)),
                        e.abrupt(
                          "return",
                          (s.showToast(e.t0), void (null == a || a(!1)))
                        )
                      );
                    case 13:
                      if (!s.item.data.confirm) {
                        e.next = 22;
                        break;
                      }
                      return (
                        (e.prev = 14),
                        (e.next = 17),
                        s.item.data.confirm(c, s.formData)
                      );
                    case 17:
                      e.next = 22;
                      break;
                    case 19:
                      return (
                        (e.prev = 19),
                        (e.t1 = e.catch(14)),
                        e.abrupt("return", void (null == a || a(!1)))
                      );
                    case 22:
                      (u = t({}, s.item.key, s.selectId.join("+"))),
                        s.item.otherKey &&
                          Object.assign(
                            u,
                            t(
                              {},
                              s.item.otherKey,
                              s.isIncludeOther ? s.otherVal : ""
                            )
                          ),
                        s.updateData({ data: u }),
                        s.$nextTick(s.resetData),
                        null == a || a();
                    case 24:
                    case "end":
                      return e.stop();
                  }
              },
              i,
              null,
              [
                [5, 10],
                [14, 19],
              ]
            );
          })
        )();
      },
      resetData: function () {
        (this.selectId = []), (this.otherVal = ""), (this.shows = []);
      },
    },
  };
Array ||
  (r.resolveComponent("st-checkbox") + r.resolveComponent("mp-action-sheet"))(),
  Math;
var o = r._export_sfc(s, [
  [
    "render",
    function (t, e, i, n, a, s) {
      return r.e(
        { a: s.item.data.info },
        s.item.data.info ? { b: s.item.data.info } : {},
        { c: s.itemWithSpecial.length },
        s.itemWithSpecial.length
          ? {
              d: r.f(s.itemWithSpecial, function (t, e, i) {
                return {
                  a: r.t(t.name),
                  b: "680ff90c-1-" + i + ",680ff90c-0",
                  c: r.p({ value: a.selectId.includes(t.id), size: "small" }),
                  d: e,
                  e: r.o(function (e) {
                    return s.select(t.id, t.single);
                  }, e),
                };
              }),
              e: r.n(s.item.data.isRow ? "row" : "column"),
              f: s.item.data.specialInfo.replace(/color-2/, "text-color-2"),
              g: s.item.data.specialInfo,
            }
          : {},
        {
          h: r.f(s.itemWithoutSpecial, function (t, e, i) {
            return {
              a: r.t(t.name),
              b: "680ff90c-2-" + i + ",680ff90c-0",
              c: r.p({ value: a.selectId.includes(t.id), size: "small" }),
              d: e,
              e: r.o(function (e) {
                return s.select(t.id, t.single);
              }, e),
            };
          }),
          i: r.n(s.item.data.isRow ? "row" : "column"),
          j: s.isIncludeOther,
          k: s.item.data.type || "text",
          l: s.item.data.maxLength || 20,
          m: s.placeholder || "请填写",
          n: a.otherVal,
          o: r.o(function (t) {
            return (a.otherVal = t.detail.value);
          }),
          p: s.errInfo,
        },
        s.errInfo ? { q: s.errInfo } : {},
        {
          r: s.isSubmitable ? "" : 1,
          s: r.o(s.onClose),
          t: r.p({
            pickerStyle: !0,
            maskClosable: !0,
            value: a.isShow,
            title: s.title,
            "confirm-txt": "确定",
            "before-close": s.onBeforeClose,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-680ff90c"],
]);
wx.createComponent(o);
