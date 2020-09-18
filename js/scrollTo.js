!function (e) { "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery) }(function (e) { var t = e.scrollTo = function (t, n, o) { return e(window).scrollTo(t, n, o) }; function n(t) { return e.isFunction(t) || "object" == typeof t ? t : { top: t, left: t } } return t.defaults = { axis: "xy", duration: parseFloat(e.fn.jquery) >= 1.3 ? 0 : 1, limit: !0 }, t.window = function (t) { return e(window)._scrollable() }, e.fn._scrollable = function () { return this.map(function () { var t = this; if (!(!t.nodeName || -1 != e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]))) return t; var n = (t.contentWindow || t).document || t.ownerDocument || t; return /webkit/i.test(navigator.userAgent) || "BackCompat" == n.compatMode ? n.body : n.documentElement }) }, e.fn.scrollTo = function (o, r, i) { return "object" == typeof r && (i = r, r = 0), "function" == typeof i && (i = { onAfter: i }), "max" == o && (o = 9e9), i = e.extend({}, t.defaults, i), r = r || i.duration, i.queue = i.queue && i.axis.length > 1, i.queue && (r /= 2), i.offset = n(i.offset), i.over = n(i.over), this._scrollable().each(function () { if (null != o) { var a, s = this, f = e(s), u = o, c = {}, l = f.is("html,body"); switch (typeof u) { case "number": case "string": if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(u)) { u = n(u); break } if (!(u = e(u, this)).length) return; case "object": (u.is || u.style) && (a = (u = e(u)).offset()) }var d = e.isFunction(i.offset) && i.offset(s, u) || i.offset; e.each(i.axis.split(""), function (e, n) { var o = "x" == n ? "Left" : "Top", r = o.toLowerCase(), h = "scroll" + o, p = s[h], w = t.max(s, n); if (a) c[h] = a[r] + (l ? 0 : p - f.offset()[r]), i.margin && (c[h] -= parseInt(u.css("margin" + o)) || 0, c[h] -= parseInt(u.css("border" + o + "Width")) || 0), c[h] += d[r] || 0, i.over[r] && (c[h] += u["x" == n ? "width" : "height"]() * i.over[r]); else { var y = u[r]; c[h] = y.slice && "%" == y.slice(-1) ? parseFloat(y) / 100 * w : y } i.limit && /^\d+$/.test(c[h]) && (c[h] = c[h] <= 0 ? 0 : Math.min(c[h], w)), !e && i.queue && (p != c[h] && m(i.onAfterFirst), delete c[h]) }), m(i.onAfter) } function m(e) { f.animate(c, r, i.easing, e && function () { e.call(this, u, i) }) } }).end() }, t.max = function (t, n) { var o = "x" == n ? "Width" : "Height", r = "scroll" + o; if (!e(t).is("html,body")) return t[r] - e(t)[o.toLowerCase()](); var i = "client" + o, a = t.ownerDocument.documentElement, s = t.ownerDocument.body; return Math.max(a[r], s[r]) - Math.min(a[i], s[i]) }, t });