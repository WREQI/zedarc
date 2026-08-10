var e = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  t = require("../../../../../../@babel/runtime/helpers/slicedToArray"),
  s = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  i = Object.getOwnPropertySymbols,
  u = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  n = function (e, t, s) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s);
  },
  h = function (e, t) {
    for (var r in t || (t = {})) u.call(t, r) && n(e, r, t[r]);
    if (i) {
      var h,
        a = s(i(t));
      try {
        for (a.s(); !(h = a.n()).done; ) {
          r = h.value;
          o.call(t, r) && n(e, r, t[r]);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    }
    return e;
  },
  a = require("../../../../../../common/vendor.js"),
  c = {
    data: function () {
      return {
        batchObserver: null,
        exposedIds: new Set(),
        exposureQueue: { items: new Map(), postIds: new Set(), timer: null },
        observedElements: new Map(),
        pendingUnobserveIds: [],
        _unobserveScheduled: !1,
      };
    },
    provide: function () {
      return {
        registerExposureElement: this.registerExposureElement,
        unregisterExposureElement: this.unregisterExposureElement,
        addToExposureQueue: this.addToExposureQueue,
      };
    },
    mounted: function () {},
    methods: {
      removeAllExposureData: function () {
        this.flushExposureQueue(), this.destroyBatchObserver();
      },
      initBatchObserver: function () {
        if (!this.batchObserver)
          try {
            this._initMPObserver();
          } catch (e) {}
      },
      destroyBatchObserver: function () {
        if (this.batchObserver)
          try {
            this.batchObserver.disconnect(), (this.batchObserver = null);
          } catch (e) {}
        this.exposedIds.clear();
      },
      scheduleExposureReport: function () {
        var e = this;
        this.exposureQueue.timer && clearTimeout(this.exposureQueue.timer),
          (this.exposureQueue.timer = setTimeout(function () {
            e.flushExposureQueue();
          }, 2e3));
      },
      flushExposureQueue: function () {
        var e = this;
        this.exposureQueue.timer &&
          (clearTimeout(this.exposureQueue.timer),
          (this.exposureQueue.timer = null));
        var t = this.exposureQueue,
          s = t.items,
          r = t.postIds;
        if (0 !== s.size) {
          var i = [],
            u = [];
          if (
            (s.forEach(function (e, t) {
              i.push(t), u.push(e);
            }),
            this.reportExposure(i, u),
            this.exposedIds.size > 500)
          ) {
            var o = Array.from(this.exposedIds);
            this.exposedIds = new Set(o.slice(-300));
          }
          r.forEach(function (t) {
            return e.exposedIds.add(t);
          }),
            r.clear(),
            s.clear();
        }
      },
      reportExposure: function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        if (e && 0 !== e.length) {
          var s = this.getExposureEventName();
          if (s) {
            var r = h(
              h(
                h(
                  { postlist: e.join(",") },
                  t.length > 0 && { from_user: t.filter(Boolean).join(",") }
                ),
                "stock" === this.pageType && { stockid: this.pageId || "" }
              ),
              "news" === this.pageType && { newsid: this.newsId || "" }
            );
            a.StockBridge.report(s, r);
          }
        }
      },
      getExposureEventName: function () {
        return (
          {
            stock: "shequ.comment.comment_brow",
            news: "news.informationdetail.comment_brow",
          }[this.pageType] || ""
        );
      },
      shouldHandleExposure: function () {
        return "stock" === this.pageType || "news" === this.pageType;
      },
      resetExposureQueue: function () {
        this.exposureQueue.timer &&
          (clearTimeout(this.exposureQueue.timer),
          (this.exposureQueue.timer = null)),
          this.exposureQueue.items.clear(),
          this.exposureQueue.postIds.clear();
      },
      onHideExposure: function () {
        this.flushExposureQueue();
      },
      _initMPObserver: function () {
        var e = this;
        (this.batchObserver = this.createIntersectionObserver({
          observeAll: !0,
          thresholds: [0.9],
        })),
          this.batchObserver.relativeToViewport(),
          this.batchObserver.observe(".mod-com-list-item", function (t) {
            e._handleMPIntersection(t);
          });
      },
      _handleMPIntersection: function (e) {
        var t;
        try {
          var s = null == (t = e.dataset) ? void 0 : t.postid;
          if (!s) return;
          if (this.exposedIds.has(s)) return;
          if (e.intersectionRatio >= 0.9) {
            this.exposedIds.add(s);
            var r = this.findItemById(s),
              i = r ? this.getExposureInfo(r) : "";
            this.addPostToExposureQueue(s, i);
          }
        } catch (e) {}
      },
      findItemById: function (e) {
        if (!this.commentsData || !Array.isArray(this.commentsData))
          return null;
        var t = String(e);
        return (
          this.commentsData.find(function (e) {
            return String(e.id) === t || String(e.subject_id) === t;
          }) || null
        );
      },
      reinitBatchObserver: function () {
        if (this.shouldHandleExposure()) {
          if (this.batchObserver)
            try {
              this.batchObserver.disconnect(), (this.batchObserver = null);
            } catch (e) {}
          this.initBatchObserver();
        }
      },
      addPostToExposureQueue: function (e, s) {
        var r = this;
        if (e && this.shouldHandleExposure()) {
          var i = "",
            u = [],
            o = [];
          if (s) {
            var n = s.split(",");
            i = n[0] || "";
            for (var h = 1; h < n.length; h++) {
              var a = n[h].split(":"),
                c = t(a, 2),
                l = c[0],
                p = c[1];
              l && (u.push(l), o.push(p || ""));
            }
          }
          this.exposureQueue.items.has(e) ||
            (this.exposureQueue.items.set(e, i),
            this.exposureQueue.postIds.add(e)),
            u.forEach(function (e, t) {
              r.exposureQueue.items.has(e) ||
                r.exposureQueue.items.set(e, o[t] || "");
            }),
            this.exposureQueue.items.size >= 10
              ? this.flushExposureQueue()
              : this.scheduleExposureReport();
        }
      },
      addToExposureQueueWithUsers: function (e, t) {
        var s = this;
        e &&
          0 !== e.length &&
          this.shouldHandleExposure() &&
          (e.forEach(function (e, r) {
            s.exposedIds.has(e) ||
              s.exposureQueue.items.has(e) ||
              s.exposureQueue.items.set(e, t[r] || "");
          }),
          this.exposureQueue.items.size >= 10
            ? this.flushExposureQueue()
            : this.scheduleExposureReport());
      },
      getExposureInfo: function (t) {
        var s;
        return [(null == t ? void 0 : t.user_id) || ""]
          .concat(
            e(
              (
                (null == (s = null == t ? void 0 : t.commentsTail)
                  ? void 0
                  : s.list) || []
              )
                .map(function (e) {
                  var t = e.comment_id || "",
                    s = e.user_id || "";
                  return t ? "".concat(t, ":").concat(s) : "";
                })
                .filter(Boolean)
            )
          )
          .join(",");
      },
      _initH5Observer: function () {
        var e = this;
        this.batchObserver = new IntersectionObserver(
          function (t) {
            t.forEach(function (t) {
              e._handleH5Intersection(t);
            });
          },
          { threshold: 0.9, rootMargin: "0px" }
        );
      },
      _handleH5Intersection: function (e) {
        var t, s, r, i;
        try {
          var u =
            (null == (s = null == (t = e.target) ? void 0 : t.dataset)
              ? void 0
              : s.postid) ||
            (null == (i = null == (r = e.target) ? void 0 : r.dataset)
              ? void 0
              : i.commentid);
          if (!u) return;
          var o = this.observedElements.get(u);
          if (!o || o.hasTriggered) return;
          e.isIntersecting &&
            e.intersectionRatio >= 0.9 &&
            ((o.hasTriggered = !0),
            "function" == typeof o.callback && o.callback(!0, e),
            this.scheduleUnobserve(u));
        } catch (e) {}
      },
      registerExposureElement: function (e, t, s, r) {},
      unregisterExposureElement: function (e) {},
      addToExposureQueue: function (e, t) {
        var s =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        t &&
          this.shouldHandleExposure() &&
          (this.exposedIds.has(t) ||
            (this.exposureQueue.items.has(t) ||
              this.exposureQueue.items.set(t, s || ""),
            this.exposureQueue.items.size >= 10
              ? this.flushExposureQueue()
              : this.scheduleExposureReport()));
      },
      scheduleUnobserve: function (e) {},
      flushPendingUnobserve: function () {},
    },
  };
exports.exposureReport = c;
