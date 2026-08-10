var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var n = require("../../vendor.js"),
  o = {
    name: "MpTabbar",
    components: {
      Overlay: function () {
        return "../Overlay/index.js";
      },
    },
    props: {
      value: { type: String, required: !0 },
      data: {
        type: Array,
        default: function () {
          return [];
        },
      },
      activeDropdown: { type: Number, default: 0 },
      inline: { type: Boolean, default: !1 },
      showSlider: { type: Boolean, default: !1 },
      animation: { type: Boolean, default: !0 },
      swipeThreshold: { type: Number, default: 4 },
      border: { type: Boolean, default: !0 },
      simpleMode: { type: Boolean, default: !1 },
      intoView: { type: Boolean, default: !1 },
      showMask: { type: Boolean, default: !1 },
    },
    emits: ["click", "input", "change", "clickMask", "clickDropDown"],
    data: function () {
      return {
        sliderWidth: 0,
        sliderTransition: "",
        sliderTransform: "",
        toggleDropDown: !1,
        dropDownSelect: 0,
      };
    },
    computed: {
      ndata: function () {
        return this.data.map(function (e, t) {
          return "string" == typeof e
            ? { label: e, value: String(t) }
            : "number" == typeof e.value
            ? { label: e.label, value: String(e.value) }
            : e;
        });
      },
      scrollable: function () {
        return this.ndata.length > this.swipeThreshold;
      },
      className: function () {
        return [
          this.inline ? "mp-tab-bar--inline" : "",
          this.scrollable || 1 == this.ndata.length
            ? "mp-tab-bar--scrollable"
            : "",
          this.simpleMode ? "mp-tab-bar__simple-mode" : "",
        ];
      },
      subLabel: function () {
        var e = this,
          t = [];
        return (
          this.ndata.forEach(function (n) {
            var o, r, i;
            try {
              if (!n.dropDown)
                return t.push((null == n ? void 0 : n.subLabel) || "");
              if (n.dropDownSelected && n.dropDown.findIndex) {
                var a = n.dropDown.findIndex(function (e) {
                    return e.value === n.dropDownSelected && e.subLabel;
                  }),
                  l =
                    -1 !== a
                      ? null == (r = null == (o = n.dropDown) ? void 0 : o[a])
                        ? void 0
                        : r.subLabel
                      : "";
                return t.push(l);
              }
              t.push(
                (null == (i = n.dropDown[e.dropDownSelect || 0])
                  ? void 0
                  : i.subLabel) || ""
              );
            } catch (l) {}
          }),
          t
        );
      },
    },
    watch: {
      value: function () {
        this.intoView && this.scrollIntoView();
      },
      activeDropdown: {
        handler: function (e) {
          this.dropDownSelect = e;
        },
        immediate: !0,
      },
    },
    mounted: function () {},
    methods: {
      trigger: function (e) {
        var t = this,
          n = e.currentTarget.dataset.value;
        this.$emit("click", n),
          n !== this.value &&
            ["input", "change"].forEach(function (e) {
              t.$emit(e, n);
            });
      },
      onClickTab: function (e) {
        var t;
        this.value === e.value &&
          (this.toggleDropDown =
            (null == (t = null == e ? void 0 : e.dropDown)
              ? void 0
              : t.length) && !this.toggleDropDown);
      },
      onClickMask: function () {
        this.toggleDropDown = !1;
      },
      _updateSliderStyle: function () {
        var n = this;
        this.showSlider &&
          this.$nextTick(
            t(
              e().mark(function t() {
                var o, r, i, a;
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), n._getSliderWidthAndIndex();
                      case 2:
                        return (
                          (o = e.sent),
                          (r = o.width),
                          (n.sliderWidth = "".concat(r, "px")),
                          (e.next = 7),
                          n._getOffsetLeft(r)
                        );
                      case 7:
                        (i = e.sent),
                          (a = i.offsetLeft),
                          n.setSliderTransform(a);
                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, t);
              })
            )
          );
      },
      setSliderTransform: function (e) {
        "number" == typeof e && (e = "".concat(e, "px")),
          this.showSlider &&
            (this.animation &&
              (this.sliderTransition = "all 0.1s cubic-bezier(0, 0, 1, 0.71)"),
            (this.sliderTransform = "translateX(".concat(
              e,
              ") translateZ(0)"
            )));
      },
      _getSliderWidthAndIndex: function () {
        var e = this;
        return new Promise(function (t) {
          var o = 0;
          e.ndata.length > 0 &&
            n.index
              .createSelectorQuery()
              .in(e)
              .select(".mp-tab-".concat(e.value, " .tab-text"))
              .boundingClientRect(function (e) {
                (o = 0.7 * e.width), t({ width: o });
              })
              .exec();
        });
      },
      _getOffsetLeft: function (e) {
        var t = this;
        return new Promise(function (o) {
          var r = 0;
          n.index
            .createSelectorQuery()
            .in(t)
            .select(".mp-tab-".concat(t.value))
            .boundingClientRect(function (t) {
              (r = t.left + t.width / 2 - e / 2), o({ offsetLeft: r });
            })
            .exec();
        });
      },
      onClickDropDown: function (e, t) {
        (this.dropDownSelect = t),
          (this.toggleDropDown = !1),
          this.$emit("clickDropDown", e, t);
      },
      scrollIntoView: function () {
        var e,
          t = this,
          o = 0;
        (null == (e = this.ndata) ? void 0 : e.length) > 0 &&
          (o = this.ndata.findIndex(function (e) {
            return e.value === t.value;
          }));
        var r = this.$refs.nav;
        r &&
          "function" == typeof r.scrollTo &&
          n.index
            .createSelectorQuery()
            .in(this)
            .select(".mp-tab-".concat(o))
            .boundingClientRect(function (e) {
              var t =
                e.left - ((null == r ? void 0 : r.offsetWidth) - e.width) / 2;
              null == r || r.scrollTo({ left: t, behavior: "smooth" });
            })
            .exec();
      },
      showDropDown: function (e) {
        return e.dropDown && e.dropDown.length > 1 && this.toggleDropDown;
      },
    },
  },
  r = n._export_sfc(o, [
    [
      "render",
      function (e, t, o, r, i, a) {
        return n.e(
          {
            a: n.f(a.ndata, function (e, t, r) {
              return n.e(
                { a: e.prefixIcon },
                e.prefixIcon
                  ? { b: n.n(e.prefixIcon), c: n.n("^".concat(e.prefixIcon)) }
                  : {},
                { d: n.t(e.label), e: a.subLabel[t] },
                a.subLabel[t] ? { f: n.t(a.subLabel[t]) } : {},
                { g: o.value === e.value },
                (o.value, e.value, {}),
                { h: e.showDropDown },
                (e.showDropDown, {}),
                { i: o.showMask && a.showDropDown(e) },
                o.showMask && a.showDropDown(e)
                  ? {
                      j: n.o(function () {
                        return (
                          a.onClickMask && a.onClickMask.apply(a, arguments)
                        );
                      }, e.value),
                    }
                  : {},
                { k: a.showDropDown(e) },
                a.showDropDown(e)
                  ? {
                      l: n.f(e.dropDown, function (t, o, r) {
                        return {
                          a: n.t(t.label),
                          b: t.value,
                          c: n.n(
                            e.dropDownSelected === t.value ||
                              (!e.dropDownSelected && o === i.dropDownSelect)
                              ? "selected"
                              : ""
                          ),
                          d: n.n(
                            o !== e.dropDown.length - 1 ? "border-bottom" : ""
                          ),
                          e: n.o(function (e) {
                            return a.onClickDropDown(t, o);
                          }, t.value),
                        };
                      }),
                      m: n.n(e.dropdownStyle),
                    }
                  : {},
                {
                  n: n.o(function (t) {
                    return a.onClickTab(e);
                  }, e.value),
                  o: e.value,
                  p: n.n(
                    o.value === e.value ? "mp-tab--active ^mp-tab--active" : ""
                  ),
                  q: n.n("mp-tab-".concat(t)),
                  r: n.n("^mp-tab-".concat(t)),
                  s: e.value,
                  t: n.o(function () {
                    return a.trigger && a.trigger.apply(a, arguments);
                  }, e.value),
                }
              );
            }),
            b: o.showSlider,
          },
          o.showSlider
            ? { c: i.sliderWidth, d: i.sliderTransition, e: i.sliderTransform }
            : {},
          { f: n.n(a.className), g: n.n(o.border ? "border--bottom" : "") }
        );
      },
    ],
  ]);
wx.createComponent(r);
