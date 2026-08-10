var t = {};
Object.defineProperty(t, "__esModule", { value: !0 }),
  (t.lt =
    t.gt =
    t.eq =
    exports.div_1 =
    t.div =
    exports.mul_1 =
    t.mul =
    exports.reduce_1 =
    t.reduce =
    exports.add_1 =
    t.add =
      void 0);
var r = function (t, r) {
  var e,
    a,
    o,
    n,
    i = t.toString(),
    u = r.toString();
  try {
    e = i.split(".")[1].length;
  } catch (t) {
    e = 0;
  }
  try {
    a = u.split(".")[1].length;
  } catch (t) {
    a = 0;
  }
  if (((n = Math.abs(e - a)), (o = Math.pow(10, Math.max(e, a))), n > 0)) {
    var p = Math.pow(10, n);
    e > a
      ? ((t = Number(i.replace(".", ""))), (r = Number(u.replace(".", "")) * p))
      : ((t = Number(i.replace(".", "")) * p),
        (r = Number(u.replace(".", ""))));
  } else (t = Number(i.replace(".", ""))), (r = Number(u.replace(".", "")));
  return (t + r) / o;
};
exports.add_1 = t.add = r;
var e = function (t, r) {
  var e, a, o, n;
  try {
    e = t.toString().split(".")[1].length;
  } catch (t) {
    e = 0;
  }
  try {
    a = r.toString().split(".")[1].length;
  } catch (t) {
    a = 0;
  }
  return (
    (n = Math.max(e, a)), +((t * (o = Math.pow(10, n)) - r * o) / o).toFixed(n)
  );
};
exports.reduce_1 = t.reduce = e;
var a = function (t, r) {
  var e = 0,
    a = t.toString(),
    o = r.toString();
  try {
    e += a.split(".")[1].length;
  } catch (t) {}
  try {
    e += o.split(".")[1].length;
  } catch (t) {}
  return (
    (Number(a.replace(".", "")) * Number(o.replace(".", ""))) / Math.pow(10, e)
  );
};
exports.mul_1 = t.mul = a;
var o = function (t, r, e) {
  void 0 === e && (e = 2);
  var a,
    o,
    n,
    i = 0,
    u = 0;
  try {
    i = t.toString().split(".")[1].length;
  } catch (t) {}
  try {
    u = r.toString().split(".")[1].length;
  } catch (t) {}
  if (
    ((n = Math.max(i, u, e)),
    (a = Number(t.toString().replace(".", ""))),
    0 === (o = Number(r.toString().replace(".", ""))))
  )
    throw RangeError("no one can be dived by zero");
  return +((a / o) * Math.pow(10, u - i)).toFixed(n);
};
exports.div_1 = t.div = o;
var n = function (t, r) {
  if (((t = parseFloat(t)), (r = parseFloat(r)), isNaN(t) || isNaN(r)))
    throw "must provide two numbers to make a comparison";
  return t === r;
};
t.eq = n;
var i = function (t, r) {
  if (((t = parseFloat(t)), (r = parseFloat(r)), isNaN(t) || isNaN(r)))
    throw "must provide two numbers to make a comparison";
  return t > r;
};
t.gt = i;
var u = function (t, r) {
  if (((t = parseFloat(t)), (r = parseFloat(r)), isNaN(t) || isNaN(r)))
    throw "must provide two numbers to make a comparison";
  return t < r;
};
t.lt = u;
var p = (function () {
  function t(t) {
    this.val = t || 0;
  }
  return (
    (t.prototype.add = function (t) {
      return (this.val = r(this.val, t)), this;
    }),
    (t.prototype.reduce = function (t) {
      return (this.val = e(this.val, t)), this;
    }),
    (t.prototype.div = function (t) {
      return (this.val = o(this.val, t)), this;
    }),
    (t.prototype.mul = function (t) {
      return (this.val = a(this.val, t)), this;
    }),
    (t.prototype.eq = function (t) {
      return n(this.val, t);
    }),
    (t.prototype.gt = function (t) {
      return i(this.val, t);
    }),
    (t.prototype.lt = function (t) {
      return u(this.val, t);
    }),
    (t.prototype.value = function () {
      return this.val;
    }),
    t
  );
})();
t.default = function (t) {
  return new p(t);
};
