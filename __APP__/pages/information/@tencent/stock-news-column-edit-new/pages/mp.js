var t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  e = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  o = function (t, n, e) {
    return n in t
      ? i(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (t[n] = e);
  },
  r = function (i, r) {
    for (var h in r || (r = {})) e.call(r, h) && o(i, h, r[h]);
    if (n) {
      var c,
        a = t(n(r));
      try {
        for (a.s(); !(c = a.n()).done; ) {
          h = c.value;
          s.call(r, h) && o(i, h, r[h]);
        }
      } catch (t) {
        a.e(t);
      } finally {
        a.f();
      }
    }
    return i;
  },
  h = require("../../../../../common/vendor.js"),
  c = {
    name: "MenuGrid",
    components: {
      NewsColumnItem: function () {
        return "../components/NewsColumnItem.js";
      },
    },
    data: function () {
      return {
        myColumns: [],
        recommendedColumns: [],
        columns: 3,
        itemWidth: 113,
        itemHeight: 54,
        itemGapX: 10,
        itemGapY: 16,
        currentIndex: -1,
        closestIndex: -1,
        startX: 0,
        startY: 0,
        moveOffsetX: 0,
        moveOffsetY: 0,
        positions: [],
        isDragging: !1,
      };
    },
    created: function () {
      var t = this.getStorageTabConfigs().tabConfigs;
      this.setColumnDataFromJSON(t);
    },
    mounted: function () {
      this.initPositions();
    },
    methods: {
      initPositions: function () {
        var t = this;
        this.positions = [];
        var i = this.itemWidth,
          n = this.itemHeight,
          e = this.itemGapX,
          s = this.itemGapY,
          o = this.columns;
        this.myColumns.forEach(function (r, h) {
          var c = Math.floor(h / o),
            a = h % o;
          t.positions.push({ x: a * (i + e), y: c * (n + s), zIndex: 1 });
        });
      },
      getPositionStyle: function (t) {
        if (!this.positions[t]) return "";
        var i = this.positions[t];
        return {
          transform: "translate3d(".concat(i.x, "px, ").concat(i.y, "px, 0)"),
          zIndex: i.zIndex || 1,
        };
      },
      getRecommendedStyle: function () {
        return {
          marginTop: "".concat(2 * this.itemHeight + this.itemGapY, "px"),
        };
      },
      handleTouchStart: function (t, i) {
        if (!this.isDragging) {
          var n = t.touches[0];
          (this.currentIndex = i),
            (this.startX = n.clientX),
            (this.startY = n.clientY),
            (this.moveOffsetX = 0),
            (this.moveOffsetY = 0),
            (this.isDragging = !0),
            (this.positions[i].zIndex = 10);
        }
      },
      handleTouchMove: function (t) {
        if (-1 !== this.currentIndex && this.isDragging) {
          var i = t.touches[0],
            n = i.clientX - this.startX,
            e = i.clientY - this.startY;
          (this.moveOffsetX += n),
            (this.moveOffsetY += e),
            (this.positions[this.currentIndex].x += n),
            (this.positions[this.currentIndex].y += e),
            (this.startX = i.clientX),
            (this.startY = i.clientY),
            this.checkForSwap();
        }
      },
      handleTouchEnd: function () {
        var t;
        -1 === this.closestIndex ||
          (null == (t = this.myColumns[this.closestIndex])
            ? void 0
            : t.isConst) ||
          this.swapItems(this.currentIndex, this.closestIndex),
          -1 !== this.currentIndex &&
            (this.positions[this.currentIndex] &&
              (this.positions[this.currentIndex].zIndex = 1),
            this.snapAllItemsToGrid(),
            (this.isDragging = !1),
            (this.currentIndex = -1),
            (this.closestIndex = -1),
            (this.moveOffsetX = 0),
            (this.moveOffsetY = 0));
      },
      snapAllItemsToGrid: function () {
        var t = this,
          i = this.itemWidth,
          n = this.itemHeight,
          e = this.itemGapX,
          s = this.itemGapY,
          o = this.columns;
        this.myColumns.forEach(function (r, h) {
          var c = Math.floor(h / o),
            a = h % o;
          t.positions[h] = { x: a * (i + e), y: c * (n + s), zIndex: 1 };
        });
      },
      checkForSwap: function () {
        var t = this;
        if (-1 !== this.currentIndex) {
          var i = this.positions[this.currentIndex],
            n = this.itemWidth,
            e = this.itemHeight,
            s = this.itemGapX,
            o = Number.MAX_VALUE;
          this.positions.forEach(function (r, h) {
            if (h !== t.currentIndex) {
              var c = i.x + n / 2,
                a = i.y + e / 2,
                u = r.x + n / 2,
                m = r.y + e / 2,
                d = Math.sqrt(Math.pow(c - u, 2) + Math.pow(a - m, 2));
              d < 0.6 * (n + s) && d < o && ((o = d), (t.closestIndex = h));
            }
          });
        }
      },
      swapItems: function (t, i) {
        var n = r({}, this.myColumns[t]);
        (this.myColumns[t] = r({}, this.myColumns[i])), (this.myColumns[i] = n);
        var e = this.positions[t];
        (this.positions[t] = this.positions[i]), (this.positions[i] = e);
      },
      setColumnDataFromJSON: function (t) {
        if (t) {
          var i = [],
            n = [];
          t.forEach(function (t) {
            1 === t.isSelected ? i.push(t) : n.push(t);
          }),
            (this.myColumns = i),
            (this.recommendedColumns = n);
        }
      },
      getStorageTabConfigs: function () {
        try {
          var t = h.StockBridge.getStorage("information/tabs-config");
          if (t) return JSON.parse(t);
        } catch (t) {}
        return { tabConfigs: [], tabConfigVersion: 0 };
      },
      clickFinshBtn: function () {
        h.StockBridge.busEmit(
          "news-tabs-change",
          this.myColumns.concat(this.recommendedColumns)
        ),
          h.wx$1.navigateBack();
      },
      onClose: function (t) {
        var i,
          n = this,
          e = [];
        null == (i = this.myColumns) ||
          i.forEach(function (i) {
            i.id === t.id
              ? ((i.isSelected = 0), n.recommendedColumns.push(i))
              : e.push(i);
          }),
          (this.myColumns = e);
      },
      addItem: function (t) {
        var i,
          n = this,
          e = [];
        null == (i = this.recommendedColumns) ||
          i.forEach(function (i) {
            i.id === t.id
              ? ((i.isSelected = 1), n.myColumns.push(i))
              : e.push(i);
          }),
          (this.recommendedColumns = e),
          this.initPositions();
      },
      setSize: function (t, i) {
        (this.itemWidth = t), (this.itemHeight = i), this.initPositions();
      },
    },
  };
Array || h.resolveComponent("NewsColumnItem")();
var a = h._export_sfc(c, [
  [
    "render",
    function (t, i, n, e, s, o) {
      return {
        a: h.o(function () {
          return o.clickFinshBtn && o.clickFinshBtn.apply(o, arguments);
        }, 685),
        b: h.f(s.myColumns, function (t, i, n) {
          return {
            a: h.o(
              function (i) {
                return o.onClose(t);
              },
              686,
              i
            ),
            b: h.o(o.setSize, 687, i),
            c: "87e3c89d-0-" + n,
            d: h.p({ item: t, "is-mp": !0 }),
            e: i,
            f: h.n(t.isConst ? "grid-item-none" : ""),
            g: h.s(o.getPositionStyle(i)),
            h: h.o(
              function (t) {
                return o.handleTouchStart(t, i);
              },
              688,
              i
            ),
            i: h.o(
              function (t) {
                return o.handleTouchMove(t);
              },
              689,
              i
            ),
            j: h.o(
              function () {
                return o.handleTouchEnd && o.handleTouchEnd.apply(o, arguments);
              },
              690,
              i
            ),
          };
        }),
        c: h.s(o.getRecommendedStyle()),
        d: h.f(s.recommendedColumns, function (t, i, n) {
          return {
            a: i,
            b: h.o(
              function (i) {
                return o.addItem(t);
              },
              691,
              i
            ),
            c: "87e3c89d-1-" + n,
            d: h.p({ item: t }),
          };
        }),
      };
    },
  ],
  ["__scopeId", "data-v-87e3c89d"],
]);
wx.createComponent(a);
