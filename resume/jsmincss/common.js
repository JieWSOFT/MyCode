/*! jQuery v2.0.0 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e, undefined) {
    var t, n, r = typeof undefined, i = e.location, o = e.document, s = o.documentElement, a = e.jQuery, u = e.$, l = {}, c = [], f = "2.0.0", p = c.concat, h = c.push, d = c.slice, g = c.indexOf, m = l.toString, y = l.hasOwnProperty, v = f.trim, x = function(e, n) {
        return new x.fn.init(e, n, t);
    }, b = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, w = /\S+/g, T = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, k = /^-ms-/, N = /-([\da-z])/gi, E = function(e, t) {
        return t.toUpperCase();
    }, S = function() {
        o.removeEventListener("DOMContentLoaded", S, !1), e.removeEventListener("load", S, !1), 
        x.ready();
    };
    x.fn = x.prototype = {
        jquery: f,
        constructor: x,
        init: function(e, t, n) {
            var r, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [ null, e, null ] : T.exec(e), 
                !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : o, !0)), 
                    C.test(r[1]) && x.isPlainObject(t)) for (r in t) x.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this;
                }
                return i = o.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), 
                this.context = o, this.selector = e, this;
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? n.ready(e) : (e.selector !== undefined && (this.selector = e.selector, 
            this.context = e.context), x.makeArray(e, this));
        },
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this);
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t;
        },
        each: function(e, t) {
            return x.each(this, e, t);
        },
        ready: function(e) {
            return x.ready.promise().done(e), this;
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [ this[n] ] : []);
        },
        map: function(e) {
            return this.pushStack(x.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: h,
        sort: [].sort,
        splice: [].splice
    }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[1] || {}, a = 2), "object" == typeof s || x.isFunction(s) || (s = {}), 
        u === a && (s = this, --a); u > a; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], 
        r = e[t], s !== r && (l && r && (x.isPlainObject(r) || (i = x.isArray(r))) ? (i ? (i = !1, 
        o = n && x.isArray(n) ? n : []) : o = n && x.isPlainObject(n) ? n : {}, s[t] = x.extend(l, o, r)) : r !== undefined && (s[t] = r));
        return s;
    }, x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = a), x;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? x.readyWait++ : x.ready(!0);
        },
        ready: function(e) {
            (e === !0 ? --x.readyWait : x.isReady) || (x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(o, [ x ]), 
            x.fn.trigger && x(o).trigger("ready").off("ready")));
        },
        isFunction: function(e) {
            return "function" === x.type(e);
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window;
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e;
        },
        isPlainObject: function(e) {
            if ("object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;
            try {
                if (e.constructor && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (t) {
                return !1;
            }
            return !0;
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        error: function(e) {
            throw Error(e);
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || o;
            var r = C.exec(e), i = !n && [];
            return r ? [ t.createElement(r[1]) ] : (r = x.buildFragment([ e ], t, i), i && x(i).remove(), 
            x.merge([], r.childNodes));
        },
        parseJSON: JSON.parse,
        parseXML: function(e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
                n = new DOMParser(), t = n.parseFromString(e, "text/xml");
            } catch (r) {
                t = undefined;
            }
            return (!t || t.getElementsByTagName("parsererror").length) && x.error("Invalid XML: " + e), 
            t;
        },
        noop: function() {},
        globalEval: function(e) {
            var t, n = eval;
            e = x.trim(e), e && (1 === e.indexOf("use strict") ? (t = o.createElement("script"), 
            t.text = e, o.head.appendChild(t).parentNode.removeChild(t)) : n(e));
        },
        camelCase: function(e) {
            return e.replace(k, "ms-").replace(N, E);
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(e, t, n) {
            var r, i = 0, o = e.length, s = j(e);
            if (n) {
                if (s) {
                    for (;o > i; i++) if (r = t.apply(e[i], n), r === !1) break;
                } else for (i in e) if (r = t.apply(e[i], n), r === !1) break;
            } else if (s) {
                for (;o > i; i++) if (r = t.call(e[i], i, e[i]), r === !1) break;
            } else for (i in e) if (r = t.call(e[i], i, e[i]), r === !1) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : v.call(e);
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (j(Object(e)) ? x.merge(n, "string" == typeof e ? [ e ] : e) : h.call(n, e)), 
            n;
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : g.call(t, e, n);
        },
        merge: function(e, t) {
            var n = t.length, r = e.length, i = 0;
            if ("number" == typeof n) for (;n > i; i++) e[r++] = t[i]; else while (t[i] !== undefined) e[r++] = t[i++];
            return e.length = r, e;
        },
        grep: function(e, t, n) {
            var r, i = [], o = 0, s = e.length;
            for (n = !!n; s > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i;
        },
        map: function(e, t, n) {
            var r, i = 0, o = e.length, s = j(e), a = [];
            if (s) for (;o > i; i++) r = t(e[i], i, n), null != r && (a[a.length] = r); else for (i in e) r = t(e[i], i, n), 
            null != r && (a[a.length] = r);
            return p.apply([], a);
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n), x.isFunction(e) ? (r = d.call(arguments, 2), 
            i = function() {
                return e.apply(t || this, r.concat(d.call(arguments)));
            }, i.guid = e.guid = e.guid || x.guid++, i) : undefined;
        },
        access: function(e, t, n, r, i, o, s) {
            var a = 0, u = e.length, l = null == n;
            if ("object" === x.type(n)) {
                i = !0;
                for (a in n) x.access(e, t, a, n[a], !0, o, s);
            } else if (r !== undefined && (i = !0, x.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), 
            t = null) : (l = t, t = function(e, t, n) {
                return l.call(x(e), n);
            })), t)) for (;u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        now: Date.now,
        swap: function(e, t, n, r) {
            var i, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = s[o];
            return i;
        }
    }), x.ready.promise = function(t) {
        return n || (n = x.Deferred(), "complete" === o.readyState ? setTimeout(x.ready) : (o.addEventListener("DOMContentLoaded", S, !1), 
        e.addEventListener("load", S, !1))), n.promise(t);
    }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
    });
    function j(e) {
        var t = e.length, n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }
    t = x(o), function(e, undefined) {
        var t, n, r, i, o, s, a, u, l, c, f, p, h, d, g, m, y = "sizzle" + -new Date(), v = e.document, b = {}, w = 0, T = 0, C = ot(), k = ot(), N = ot(), E = !1, S = function() {
            return 0;
        }, j = typeof undefined, D = 1 << 31, A = [], L = A.pop, q = A.push, H = A.push, O = A.slice, F = A.indexOf || function(e) {
            var t = 0, n = this.length;
            for (;n > t; t++) if (this[t] === e) return t;
            return -1;
        }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", R = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W = M.replace("w", "w#"), $ = "\\[" + R + "*(" + M + ")" + R + "*(?:([*^$|!~]?=)" + R + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + R + "*\\]", B = ":(" + M + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)", I = RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"), z = RegExp("^" + R + "*," + R + "*"), _ = RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"), X = RegExp(R + "*[+~]"), U = RegExp("=" + R + "*([^\\]'\"]*)" + R + "*\\]", "g"), Y = RegExp(B), V = RegExp("^" + W + "$"), G = {
            ID: RegExp("^#(" + M + ")"),
            CLASS: RegExp("^\\.(" + M + ")"),
            TAG: RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + $),
            PSEUDO: RegExp("^" + B),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
            "boolean": RegExp("^(?:" + P + ")$", "i"),
            needsContext: RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
        }, J = /^[^{]+\{\s*\[native \w/, Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, et = /'|\\/g, tt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, nt = function(e, t) {
            var n = "0x" + t - 65536;
            return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n);
        };
        try {
            H.apply(A = O.call(v.childNodes), v.childNodes), A[v.childNodes.length].nodeType;
        } catch (rt) {
            H = {
                apply: A.length ? function(e, t) {
                    q.apply(e, O.call(t));
                } : function(e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]) ;
                    e.length = n - 1;
                }
            };
        }
        function it(e) {
            return J.test(e + "");
        }
        function ot() {
            var e, t = [];
            return e = function(n, i) {
                return t.push(n += " ") > r.cacheLength && delete e[t.shift()], e[n] = i;
            };
        }
        function st(e) {
            return e[y] = !0, e;
        }
        function at(e) {
            var t = c.createElement("div");
            try {
                return !!e(t);
            } catch (n) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function ut(e, t, n, r) {
            var i, o, s, a, u, f, d, g, x, w;
            if ((t ? t.ownerDocument || t : v) !== c && l(t), t = t || c, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (a = t.nodeType) && 9 !== a) return [];
            if (p && !r) {
                if (i = Q.exec(e)) if (s = i[1]) {
                    if (9 === a) {
                        if (o = t.getElementById(s), !o || !o.parentNode) return n;
                        if (o.id === s) return n.push(o), n;
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && m(t, o) && o.id === s) return n.push(o), 
                    n;
                } else {
                    if (i[2]) return H.apply(n, t.getElementsByTagName(e)), n;
                    if ((s = i[3]) && b.getElementsByClassName && t.getElementsByClassName) return H.apply(n, t.getElementsByClassName(s)), 
                    n;
                }
                if (b.qsa && (!h || !h.test(e))) {
                    if (g = d = y, x = t, w = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        f = gt(e), (d = t.getAttribute("id")) ? g = d.replace(et, "\\$&") : t.setAttribute("id", g), 
                        g = "[id='" + g + "'] ", u = f.length;
                        while (u--) f[u] = g + mt(f[u]);
                        x = X.test(e) && t.parentNode || t, w = f.join(",");
                    }
                    if (w) try {
                        return H.apply(n, x.querySelectorAll(w)), n;
                    } catch (T) {} finally {
                        d || t.removeAttribute("id");
                    }
                }
            }
            return kt(e.replace(I, "$1"), t, n, r);
        }
        o = ut.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1;
        }, l = ut.setDocument = function(e) {
            var t = e ? e.ownerDocument || e : v;
            return t !== c && 9 === t.nodeType && t.documentElement ? (c = t, f = t.documentElement, 
            p = !o(t), b.getElementsByTagName = at(function(e) {
                return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length;
            }), b.attributes = at(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), b.getElementsByClassName = at(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 
                2 === e.getElementsByClassName("i").length;
            }), b.sortDetached = at(function(e) {
                return 1 & e.compareDocumentPosition(c.createElement("div"));
            }), b.getById = at(function(e) {
                return f.appendChild(e).id = y, !t.getElementsByName || !t.getElementsByName(y).length;
            }), b.getById ? (r.find.ID = function(e, t) {
                if (typeof t.getElementById !== j && p) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [ n ] : [];
                }
            }, r.filter.ID = function(e) {
                var t = e.replace(tt, nt);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }) : (r.find.ID = function(e, t) {
                if (typeof t.getElementById !== j && p) {
                    var n = t.getElementById(e);
                    return n ? n.id === e || typeof n.getAttributeNode !== j && n.getAttributeNode("id").value === e ? [ n ] : undefined : [];
                }
            }, r.filter.ID = function(e) {
                var t = e.replace(tt, nt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }), r.find.TAG = b.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== j ? t.getElementsByTagName(e) : undefined;
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r;
                }
                return o;
            }, r.find.CLASS = b.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== j && p ? t.getElementsByClassName(e) : undefined;
            }, d = [], h = [], (b.qsa = it(t.querySelectorAll)) && (at(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || h.push("\\[" + R + "*(?:value|" + P + ")"), 
                e.querySelectorAll(":checked").length || h.push(":checked");
            }), at(function(e) {
                var t = c.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && h.push("[*^$]=" + R + "*(?:''|\"\")"), 
                e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
                h.push(",.*:");
            })), (b.matchesSelector = it(g = f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function(e) {
                b.disconnectedMatch = g.call(e, "div"), g.call(e, "[s!='']:x"), d.push("!=", B);
            }), h = h.length && RegExp(h.join("|")), d = d.length && RegExp(d.join("|")), m = it(f.contains) || f.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function(e, t) {
                if (t) while (t = t.parentNode) if (t === e) return !0;
                return !1;
            }, S = f.compareDocumentPosition ? function(e, n) {
                if (e === n) return E = !0, 0;
                var r = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
                return r ? 1 & r || !b.sortDetached && n.compareDocumentPosition(e) === r ? e === t || m(v, e) ? -1 : n === t || m(v, n) ? 1 : u ? F.call(u, e) - F.call(u, n) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
            } : function(e, n) {
                var r, i = 0, o = e.parentNode, s = n.parentNode, a = [ e ], l = [ n ];
                if (e === n) return E = !0, 0;
                if (!o || !s) return e === t ? -1 : n === t ? 1 : o ? -1 : s ? 1 : u ? F.call(u, e) - F.call(u, n) : 0;
                if (o === s) return lt(e, n);
                r = e;
                while (r = r.parentNode) a.unshift(r);
                r = n;
                while (r = r.parentNode) l.unshift(r);
                while (a[i] === l[i]) i++;
                return i ? lt(a[i], l[i]) : a[i] === v ? -1 : l[i] === v ? 1 : 0;
            }, c) : c;
        }, ut.matches = function(e, t) {
            return ut(e, null, null, t);
        }, ut.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== c && l(e), t = t.replace(U, "='$1']"), !(!b.matchesSelector || !p || d && d.test(t) || h && h.test(t))) try {
                var n = g.call(e, t);
                if (n || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
            } catch (r) {}
            return ut(t, c, null, [ e ]).length > 0;
        }, ut.contains = function(e, t) {
            return (e.ownerDocument || e) !== c && l(e), m(e, t);
        }, ut.attr = function(e, t) {
            (e.ownerDocument || e) !== c && l(e);
            var n = r.attrHandle[t.toLowerCase()], i = n && n(e, t, !p);
            return i === undefined ? b.attributes || !p ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null : i;
        }, ut.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e);
        }, ut.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (E = !b.detectDuplicates, u = !b.sortStable && e.slice(0), e.sort(S), E) {
                while (t = e[i++]) t === e[i] && (r = n.push(i));
                while (r--) e.splice(n[r], 1);
            }
            return e;
        };
        function lt(e, t) {
            var n = t && e, r = n && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function ct(e, t, n) {
            var r;
            return n ? undefined : (r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null;
        }
        function ft(e, t, n) {
            var r;
            return n ? undefined : r = e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }
        function pt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e;
            };
        }
        function ht(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function dt(e) {
            return st(function(t) {
                return t = +t, st(function(n, r) {
                    var i, o = e([], n.length, t), s = o.length;
                    while (s--) n[i = o[s]] && (n[i] = !(r[i] = n[i]));
                });
            });
        }
        i = ut.getText = function(e) {
            var t, n = "", r = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (;t = e[r]; r++) n += i(t);
            return n;
        }, r = ut.selectors = {
            cacheLength: 50,
            createPseudo: st,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(tt, nt), e[3] = (e[4] || e[5] || "").replace(tt, nt), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ut.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ut.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && Y.test(n) && (t = gt(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(tt, nt).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = C[e + " "];
                    return t || (t = RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && C(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = ut.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0;
                    };
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode;
                    } : function(t, n, u) {
                        var l, c, f, p, h, d, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), x = !u && !a;
                        if (m) {
                            if (o) {
                                while (g) {
                                    f = t;
                                    while (f = f[g]) if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    d = g = "only" === e && !d && "nextSibling";
                                }
                                return !0;
                            }
                            if (d = [ s ? m.firstChild : m.lastChild ], s && x) {
                                c = m[y] || (m[y] = {}), l = c[e] || [], h = l[0] === w && l[1], p = l[0] === w && l[2], 
                                f = h && m.childNodes[h];
                                while (f = ++h && f && f[g] || (p = h = 0) || d.pop()) if (1 === f.nodeType && ++p && f === t) {
                                    c[e] = [ w, h, p ];
                                    break;
                                }
                            } else if (x && (l = (t[y] || (t[y] = {}))[e]) && l[0] === w) p = l[1]; else while (f = ++h && f && f[g] || (p = h = 0) || d.pop()) if ((a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) && ++p && (x && ((f[y] || (f[y] = {}))[e] = [ w, p ]), 
                            f === t)) break;
                            return p -= i, p === r || 0 === p % r && p / r >= 0;
                        }
                    };
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ut.error("unsupported pseudo: " + e);
                    return i[y] ? i(t) : i.length > 1 ? (n = [ e, e, "", t ], r.setFilters.hasOwnProperty(e.toLowerCase()) ? st(function(e, n) {
                        var r, o = i(e, t), s = o.length;
                        while (s--) r = F.call(e, o[s]), e[r] = !(n[r] = o[s]);
                    }) : function(e) {
                        return i(e, 0, n);
                    }) : i;
                }
            },
            pseudos: {
                not: st(function(e) {
                    var t = [], n = [], r = s(e.replace(I, "$1"));
                    return r[y] ? st(function(e, t, n, i) {
                        var o, s = r(e, null, i, []), a = e.length;
                        while (a--) (o = s[a]) && (e[a] = !(t[a] = o));
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop();
                    };
                }),
                has: st(function(e) {
                    return function(t) {
                        return ut(e, t).length > 0;
                    };
                }),
                contains: st(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                    };
                }),
                lang: st(function(e) {
                    return V.test(e || "") || ut.error("unsupported lang: " + e), e = e.replace(tt, nt).toLowerCase(), 
                    function(t) {
                        var n;
                        do if (n = p ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), 
                        n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function(e) {
                    return e === f;
                },
                focus: function(e) {
                    return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: function(e) {
                    return e.disabled === !1;
                },
                disabled: function(e) {
                    return e.disabled === !0;
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !r.pseudos.empty(e);
                },
                header: function(e) {
                    return Z.test(e.nodeName);
                },
                input: function(e) {
                    return K.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
                },
                first: dt(function() {
                    return [ 0 ];
                }),
                last: dt(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: dt(function(e, t, n) {
                    return [ 0 > n ? n + t : n ];
                }),
                even: dt(function(e, t) {
                    var n = 0;
                    for (;t > n; n += 2) e.push(n);
                    return e;
                }),
                odd: dt(function(e, t) {
                    var n = 1;
                    for (;t > n; n += 2) e.push(n);
                    return e;
                }),
                lt: dt(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (;--r >= 0; ) e.push(r);
                    return e;
                }),
                gt: dt(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (;t > ++r; ) e.push(r);
                    return e;
                })
            }
        };
        for (t in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) r.pseudos[t] = pt(t);
        for (t in {
            submit: !0,
            reset: !0
        }) r.pseudos[t] = ht(t);
        function gt(e, t) {
            var n, i, o, s, a, u, l, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            a = e, u = [], l = r.preFilter;
            while (a) {
                (!n || (i = z.exec(a))) && (i && (a = a.slice(i[0].length) || a), u.push(o = [])), 
                n = !1, (i = _.exec(a)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(I, " ")
                }), a = a.slice(n.length));
                for (s in r.filter) !(i = G[s].exec(a)) || l[s] && !(i = l[s](i)) || (n = i.shift(), 
                o.push({
                    value: n,
                    type: s,
                    matches: i
                }), a = a.slice(n.length));
                if (!n) break;
            }
            return t ? a.length : a ? ut.error(e) : k(e, u).slice(0);
        }
        function mt(e) {
            var t = 0, n = e.length, r = "";
            for (;n > t; t++) r += e[t].value;
            return r;
        }
        function yt(e, t, r) {
            var i = t.dir, o = r && "parentNode" === i, s = T++;
            return t.first ? function(t, n, r) {
                while (t = t[i]) if (1 === t.nodeType || o) return e(t, n, r);
            } : function(t, r, a) {
                var u, l, c, f = w + " " + s;
                if (a) {
                    while (t = t[i]) if ((1 === t.nodeType || o) && e(t, r, a)) return !0;
                } else while (t = t[i]) if (1 === t.nodeType || o) if (c = t[y] || (t[y] = {}), 
                (l = c[i]) && l[0] === f) {
                    if ((u = l[1]) === !0 || u === n) return u === !0;
                } else if (l = c[i] = [ f ], l[1] = e(t, r, a) || n, l[1] === !0) return !0;
            };
        }
        function vt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--) if (!e[i](t, n, r)) return !1;
                return !0;
            } : e[0];
        }
        function xt(e, t, n, r, i) {
            var o, s = [], a = 0, u = e.length, l = null != t;
            for (;u > a; a++) (o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
            return s;
        }
        function bt(e, t, n, r, i, o) {
            return r && !r[y] && (r = bt(r)), i && !i[y] && (i = bt(i, o)), st(function(o, s, a, u) {
                var l, c, f, p = [], h = [], d = s.length, g = o || Ct(t || "*", a.nodeType ? [ a ] : a, []), m = !e || !o && t ? g : xt(g, p, e, a, u), y = n ? i || (o ? e : d || r) ? [] : s : m;
                if (n && n(m, y, a, u), r) {
                    l = xt(y, h), r(l, [], a, u), c = l.length;
                    while (c--) (f = l[c]) && (y[h[c]] = !(m[h[c]] = f));
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = y.length;
                            while (c--) (f = y[c]) && l.push(m[c] = f);
                            i(null, y = [], l, u);
                        }
                        c = y.length;
                        while (c--) (f = y[c]) && (l = i ? F.call(o, f) : p[c]) > -1 && (o[l] = !(s[l] = f));
                    }
                } else y = xt(y === s ? y.splice(d, y.length) : y), i ? i(null, s, y, u) : H.apply(s, y);
            });
        }
        function wt(e) {
            var t, n, i, o = e.length, s = r.relative[e[0].type], u = s || r.relative[" "], l = s ? 1 : 0, c = yt(function(e) {
                return e === t;
            }, u, !0), f = yt(function(e) {
                return F.call(t, e) > -1;
            }, u, !0), p = [ function(e, n, r) {
                return !s && (r || n !== a) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
            } ];
            for (;o > l; l++) if (n = r.relative[e[l].type]) p = [ yt(vt(p), n) ]; else {
                if (n = r.filter[e[l].type].apply(null, e[l].matches), n[y]) {
                    for (i = ++l; o > i; i++) if (r.relative[e[i].type]) break;
                    return bt(l > 1 && vt(p), l > 1 && mt(e.slice(0, l - 1)).replace(I, "$1"), n, i > l && wt(e.slice(l, i)), o > i && wt(e = e.slice(i)), o > i && mt(e));
                }
                p.push(n);
            }
            return vt(p);
        }
        function Tt(e, t) {
            var i = 0, o = t.length > 0, s = e.length > 0, u = function(u, l, f, p, h) {
                var d, g, m, y = [], v = 0, x = "0", b = u && [], T = null != h, C = a, k = u || s && r.find.TAG("*", h && l.parentNode || l), N = w += null == C ? 1 : Math.random() || .1;
                for (T && (a = l !== c && l, n = i); null != (d = k[x]); x++) {
                    if (s && d) {
                        g = 0;
                        while (m = e[g++]) if (m(d, l, f)) {
                            p.push(d);
                            break;
                        }
                        T && (w = N, n = ++i);
                    }
                    o && ((d = !m && d) && v--, u && b.push(d));
                }
                if (v += x, o && x !== v) {
                    g = 0;
                    while (m = t[g++]) m(b, y, l, f);
                    if (u) {
                        if (v > 0) while (x--) b[x] || y[x] || (y[x] = L.call(p));
                        y = xt(y);
                    }
                    H.apply(p, y), T && !u && y.length > 0 && v + t.length > 1 && ut.uniqueSort(p);
                }
                return T && (w = N, a = C), b;
            };
            return o ? st(u) : u;
        }
        s = ut.compile = function(e, t) {
            var n, r = [], i = [], o = N[e + " "];
            if (!o) {
                t || (t = gt(e)), n = t.length;
                while (n--) o = wt(t[n]), o[y] ? r.push(o) : i.push(o);
                o = N(e, Tt(i, r));
            }
            return o;
        };
        function Ct(e, t, n) {
            var r = 0, i = t.length;
            for (;i > r; r++) ut(e, t[r], n);
            return n;
        }
        function kt(e, t, n, i) {
            var o, a, u, l, c, f = gt(e);
            if (!i && 1 === f.length) {
                if (a = f[0] = f[0].slice(0), a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && p && r.relative[a[1].type]) {
                    if (t = (r.find.ID(u.matches[0].replace(tt, nt), t) || [])[0], !t) return n;
                    e = e.slice(a.shift().value.length);
                }
                o = G.needsContext.test(e) ? 0 : a.length;
                while (o--) {
                    if (u = a[o], r.relative[l = u.type]) break;
                    if ((c = r.find[l]) && (i = c(u.matches[0].replace(tt, nt), X.test(a[0].type) && t.parentNode || t))) {
                        if (a.splice(o, 1), e = i.length && mt(a), !e) return H.apply(n, i), n;
                        break;
                    }
                }
            }
            return s(e, f)(i, t, !p, n, X.test(e)), n;
        }
        r.pseudos.nth = r.pseudos.eq;
        function Nt() {}
        Nt.prototype = r.filters = r.pseudos, r.setFilters = new Nt(), b.sortStable = y.split("").sort(S).join("") === y, 
        l(), [ 0, 0 ].sort(S), b.detectDuplicates = E, at(function(e) {
            if (e.innerHTML = "<a href='#'></a>", "#" !== e.firstChild.getAttribute("href")) {
                var t = "type|href|height|width".split("|"), n = t.length;
                while (n--) r.attrHandle[t[n]] = ft;
            }
        }), at(function(e) {
            if (null != e.getAttribute("disabled")) {
                var t = P.split("|"), n = t.length;
                while (n--) r.attrHandle[t[n]] = ct;
            }
        }), x.find = ut, x.expr = ut.selectors, x.expr[":"] = x.expr.pseudos, x.unique = ut.uniqueSort, 
        x.text = ut.getText, x.isXMLDoc = ut.isXML, x.contains = ut.contains;
    }(e);
    var D = {};
    function A(e) {
        var t = D[e] = {};
        return x.each(e.match(w) || [], function(e, n) {
            t[n] = !0;
        }), t;
    }
    x.Callbacks = function(e) {
        e = "string" == typeof e ? D[e] || A(e) : x.extend({}, e);
        var t, n, r, i, o, s, a = [], u = !e.once && [], l = function(f) {
            for (t = e.memory && f, n = !0, s = i || 0, i = 0, o = a.length, r = !0; a && o > s; s++) if (a[s].apply(f[0], f[1]) === !1 && e.stopOnFalse) {
                t = !1;
                break;
            }
            r = !1, a && (u ? u.length && l(u.shift()) : t ? a = [] : c.disable());
        }, c = {
            add: function() {
                if (a) {
                    var n = a.length;
                    (function s(t) {
                        x.each(t, function(t, n) {
                            var r = x.type(n);
                            "function" === r ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== r && s(n);
                        });
                    })(arguments), r ? o = a.length : t && (i = n, l(t));
                }
                return this;
            },
            remove: function() {
                return a && x.each(arguments, function(e, t) {
                    var n;
                    while ((n = x.inArray(t, a, n)) > -1) a.splice(n, 1), r && (o >= n && o--, s >= n && s--);
                }), this;
            },
            has: function(e) {
                return e ? x.inArray(e, a) > -1 : !(!a || !a.length);
            },
            empty: function() {
                return a = [], o = 0, this;
            },
            disable: function() {
                return a = u = t = undefined, this;
            },
            disabled: function() {
                return !a;
            },
            lock: function() {
                return u = undefined, t || c.disable(), this;
            },
            locked: function() {
                return !u;
            },
            fireWith: function(e, t) {
                return t = t || [], t = [ e, t.slice ? t.slice() : t ], !a || n && !u || (r ? u.push(t) : l(t)), 
                this;
            },
            fire: function() {
                return c.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!n;
            }
        };
        return c;
    }, x.extend({
        Deferred: function(e) {
            var t = [ [ "resolve", "done", x.Callbacks("once memory"), "resolved" ], [ "reject", "fail", x.Callbacks("once memory"), "rejected" ], [ "notify", "progress", x.Callbacks("memory") ] ], n = "pending", r = {
                state: function() {
                    return n;
                },
                always: function() {
                    return i.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var e = arguments;
                    return x.Deferred(function(n) {
                        x.each(t, function(t, o) {
                            var s = o[0], a = x.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === r ? n.promise() : this, a ? [ e ] : arguments);
                            });
                        }), e = null;
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? x.extend(e, r) : r;
                }
            }, i = {};
            return r.pipe = r.then, x.each(t, function(e, o) {
                var s = o[2], a = o[3];
                r[o[1]] = s.add, a && s.add(function() {
                    n = a;
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this;
                }, i[o[0] + "With"] = s.fireWith;
            }), r.promise(i), e && e.call(i, i), i;
        },
        when: function(e) {
            var t = 0, n = d.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), s = function(e, t, n) {
                return function(r) {
                    t[e] = this, n[e] = arguments.length > 1 ? d.call(arguments) : r, n === a ? o.notifyWith(t, n) : --i || o.resolveWith(t, n);
                };
            }, a, u, l;
            if (r > 1) for (a = Array(r), u = Array(r), l = Array(r); r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(s(t, l, n)).fail(o.reject).progress(s(t, u, a)) : --i;
            return i || o.resolveWith(l, n), o.promise();
        }
    }), x.support = function(t) {
        var n = o.createElement("input"), r = o.createDocumentFragment(), i = o.createElement("div"), s = o.createElement("select"), a = s.appendChild(o.createElement("option"));
        return n.type ? (n.type = "checkbox", t.checkOn = "" !== n.value, t.optSelected = a.selected, 
        t.reliableMarginRight = !0, t.boxSizingReliable = !0, t.pixelPosition = !1, n.checked = !0, 
        t.noCloneChecked = n.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !a.disabled, 
        n = o.createElement("input"), n.value = "t", n.type = "radio", t.radioValue = "t" === n.value, 
        n.setAttribute("checked", "t"), n.setAttribute("name", "t"), r.appendChild(n), t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        t.focusinBubbles = "onfocusin" in e, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", 
        t.clearCloneStyle = "content-box" === i.style.backgroundClip, x(function() {
            var n, r, s = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", a = o.getElementsByTagName("body")[0];
            a && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
            a.appendChild(n).appendChild(i), i.innerHTML = "", i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", 
            x.swap(a, null != a.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === i.offsetWidth;
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top, 
            t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || {
                width: "4px"
            }).width, r = i.appendChild(o.createElement("div")), r.style.cssText = i.style.cssText = s, 
            r.style.marginRight = r.style.width = "0", i.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), 
            a.removeChild(n));
        }), t) : t;
    }({});
    var L, q, H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, O = /([A-Z])/g;
    function F() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        }), this.expando = x.expando + Math.random();
    }
    F.uid = 1, F.accepts = function(e) {
        return e.nodeType ? 1 === e.nodeType || 9 === e.nodeType : !0;
    }, F.prototype = {
        key: function(e) {
            if (!F.accepts(e)) return 0;
            var t = {}, n = e[this.expando];
            if (!n) {
                n = F.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    }, Object.defineProperties(e, t);
                } catch (r) {
                    t[this.expando] = n, x.extend(e, t);
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n;
        },
        set: function(e, t, n) {
            var r, i = this.key(e), o = this.cache[i];
            if ("string" == typeof t) o[t] = n; else if (x.isEmptyObject(o)) this.cache[i] = t; else for (r in t) o[r] = t[r];
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return t === undefined ? n : n[t];
        },
        access: function(e, t, n) {
            return t === undefined || t && "string" == typeof t && n === undefined ? this.get(e, t) : (this.set(e, t, n), 
            n !== undefined ? n : t);
        },
        remove: function(e, t) {
            var n, r, i = this.key(e), o = this.cache[i];
            if (t === undefined) this.cache[i] = {}; else {
                x.isArray(t) ? r = t.concat(t.map(x.camelCase)) : t in o ? r = [ t ] : (r = x.camelCase(t), 
                r = r in o ? [ r ] : r.match(w) || []), n = r.length;
                while (n--) delete o[r[n]];
            }
        },
        hasData: function(e) {
            return !x.isEmptyObject(this.cache[e[this.expando]] || {});
        },
        discard: function(e) {
            delete this.cache[this.key(e)];
        }
    }, L = new F(), q = new F(), x.extend({
        acceptData: F.accepts,
        hasData: function(e) {
            return L.hasData(e) || q.hasData(e);
        },
        data: function(e, t, n) {
            return L.access(e, t, n);
        },
        removeData: function(e, t) {
            L.remove(e, t);
        },
        _data: function(e, t, n) {
            return q.access(e, t, n);
        },
        _removeData: function(e, t) {
            q.remove(e, t);
        }
    }), x.fn.extend({
        data: function(e, t) {
            var n, r, i = this[0], o = 0, s = null;
            if (e === undefined) {
                if (this.length && (s = L.get(i), 1 === i.nodeType && !q.get(i, "hasDataAttrs"))) {
                    for (n = i.attributes; n.length > o; o++) r = n[o].name, 0 === r.indexOf("data-") && (r = x.camelCase(r.substring(5)), 
                    P(i, r, s[r]));
                    q.set(i, "hasDataAttrs", !0);
                }
                return s;
            }
            return "object" == typeof e ? this.each(function() {
                L.set(this, e);
            }) : x.access(this, function(t) {
                var n, r = x.camelCase(e);
                if (i && t === undefined) {
                    if (n = L.get(i, e), n !== undefined) return n;
                    if (n = L.get(i, r), n !== undefined) return n;
                    if (n = P(i, r, undefined), n !== undefined) return n;
                } else this.each(function() {
                    var n = L.get(this, r);
                    L.set(this, r, t), -1 !== e.indexOf("-") && n !== undefined && L.set(this, e, t);
                });
            }, null, t, arguments.length > 1, null, !0);
        },
        removeData: function(e) {
            return this.each(function() {
                L.remove(this, e);
            });
        }
    });
    function P(e, t, n) {
        var r;
        if (n === undefined && 1 === e.nodeType) if (r = "data-" + t.replace(O, "-$1").toLowerCase(), 
        n = e.getAttribute(r), "string" == typeof n) {
            try {
                n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : H.test(n) ? JSON.parse(n) : n;
            } catch (i) {}
            L.set(e, t, n);
        } else n = undefined;
        return n;
    }
    x.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = q.get(e, t), n && (!r || x.isArray(n) ? r = q.access(e, t, x.makeArray(n)) : r.push(n)), 
            r || []) : undefined;
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t), r = n.length, i = n.shift(), o = x._queueHooks(e, t), s = function() {
                x.dequeue(e, t);
            };
            "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), 
            delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return q.get(e, n) || q.access(e, n, {
                empty: x.Callbacks("once memory").add(function() {
                    q.remove(e, [ t + "queue", n ]);
                })
            });
        }
    }), x.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), n > arguments.length ? x.queue(this[0], e) : t === undefined ? this : this.each(function() {
                var n = x.queue(this, e, t);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e);
            });
        },
        delay: function(e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r);
                };
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            var n, r = 1, i = x.Deferred(), o = this, s = this.length, a = function() {
                --r || i.resolveWith(o, [ o ]);
            };
            "string" != typeof e && (t = e, e = undefined), e = e || "fx";
            while (s--) n = q.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t);
        }
    });
    var R, M, W = /[\t\r\n]/g, $ = /\r/g, B = /^(?:input|select|textarea|button)$/i;
    x.fn.extend({
        attr: function(e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e);
            });
        },
        prop: function(e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[x.propFix[e] || e];
            });
        },
        addClass: function(e) {
            var t, n, r, i, o, s = 0, a = this.length, u = "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function(t) {
                x(this).addClass(e.call(this, t, this.className));
            });
            if (u) for (t = (e || "").match(w) || []; a > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : " ")) {
                o = 0;
                while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
                n.className = x.trim(r);
            }
            return this;
        },
        removeClass: function(e) {
            var t, n, r, i, o, s = 0, a = this.length, u = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e)) return this.each(function(t) {
                x(this).removeClass(e.call(this, t, this.className));
            });
            if (u) for (t = (e || "").match(w) || []; a > s; s++) if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : "")) {
                o = 0;
                while (i = t[o++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                n.className = e ? x.trim(r) : "";
            }
            return this;
        },
        toggleClass: function(e, t) {
            var n = typeof e, i = "boolean" == typeof t;
            return x.isFunction(e) ? this.each(function(n) {
                x(this).toggleClass(e.call(this, n, this.className, t), t);
            }) : this.each(function() {
                if ("string" === n) {
                    var o, s = 0, a = x(this), u = t, l = e.match(w) || [];
                    while (o = l[s++]) u = i ? u : !a.hasClass(o), a[u ? "addClass" : "removeClass"](o);
                } else (n === r || "boolean" === n) && (this.className && q.set(this, "__className__", this.className), 
                this.className = this.className || e === !1 ? "" : q.get(this, "__className__") || "");
            });
        },
        hasClass: function(e) {
            var t = " " + e + " ", n = 0, r = this.length;
            for (;r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(W, " ").indexOf(t) >= 0) return !0;
            return !1;
        },
        val: function(e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length) return r = x.isFunction(e), this.each(function(n) {
                    var i, o = x(this);
                    1 === this.nodeType && (i = r ? e.call(this, n, o.val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : x.isArray(i) && (i = x.map(i, function(e) {
                        return null == e ? "" : e + "";
                    })), t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], t && "set" in t && t.set(this, i, "value") !== undefined || (this.value = i));
                });
                if (i) return t = x.valHooks[i.type] || x.valHooks[i.nodeName.toLowerCase()], t && "get" in t && (n = t.get(i, "value")) !== undefined ? n : (n = i.value, 
                "string" == typeof n ? n.replace($, "") : null == n ? "" : n);
            }
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text;
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, u = 0 > i ? a : o ? i : 0;
                    for (;a > u; u++) if (n = r[u], !(!n.selected && u !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                        if (t = x(n).val(), o) return t;
                        s.push(t);
                    }
                    return s;
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = x.makeArray(t), s = i.length;
                    while (s--) r = i[s], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                }
            }
        },
        attr: function(e, t, n) {
            var i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === r ? x.prop(e, t, n) : (1 === s && x.isXMLDoc(e) || (t = t.toLowerCase(), 
            i = x.attrHooks[t] || (x.expr.match.boolean.test(t) ? M : R)), n === undefined ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = x.find.attr(e, t), 
            null == o ? undefined : o) : null !== n ? i && "set" in i && (o = i.set(e, n, t)) !== undefined ? o : (e.setAttribute(t, n + ""), 
            n) : (x.removeAttr(e, t), undefined));
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(w);
            if (o && 1 === e.nodeType) while (n = o[i++]) r = x.propFix[n] || n, x.expr.match.boolean.test(n) && (e[r] = !1), 
            e.removeAttribute(n);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !x.isXMLDoc(e), o && (t = x.propFix[t] || t, 
            i = x.propHooks[t]), n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || B.test(e.nodeName) || e.href ? e.tabIndex : -1;
                }
            }
        }
    }), M = {
        set: function(e, t, n) {
            return t === !1 ? x.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, x.each(x.expr.match.boolean.source.match(/\w+/g), function(e, t) {
        var n = x.expr.attrHandle[t] || x.find.attr;
        x.expr.attrHandle[t] = function(e, t, r) {
            var i = x.expr.attrHandle[t], o = r ? undefined : (x.expr.attrHandle[t] = undefined) != n(e, t, r) ? t.toLowerCase() : null;
            return x.expr.attrHandle[t] = i, o;
        };
    }), x.support.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        }
    }), x.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        x.propFix[this.toLowerCase()] = this;
    }), x.each([ "radio", "checkbox" ], function() {
        x.valHooks[this] = {
            set: function(e, t) {
                return x.isArray(t) ? e.checked = x.inArray(x(e).val(), t) >= 0 : undefined;
            }
        }, x.support.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    });
    var I = /^key/, z = /^(?:mouse|contextmenu)|click/, _ = /^(?:focusinfocus|focusoutblur)$/, X = /^([^.]*)(?:\.(.+)|)$/;
    function U() {
        return !0;
    }
    function Y() {
        return !1;
    }
    function V() {
        try {
            return o.activeElement;
        } catch (e) {}
    }
    x.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var s, a, u, l, c, f, p, h, d, g, m, y = q.get(e);
            if (y) {
                n.handler && (s = n, n = s.handler, o = s.selector), n.guid || (n.guid = x.guid++), 
                (l = y.events) || (l = y.events = {}), (a = y.handle) || (a = y.handle = function(e) {
                    return typeof x === r || e && x.event.triggered === e.type ? undefined : x.event.dispatch.apply(a.elem, arguments);
                }, a.elem = e), t = (t || "").match(w) || [ "" ], c = t.length;
                while (c--) u = X.exec(t[c]) || [], d = m = u[1], g = (u[2] || "").split(".").sort(), 
                d && (p = x.event.special[d] || {}, d = (o ? p.delegateType : p.bindType) || d, 
                p = x.event.special[d] || {}, f = x.extend({
                    type: d,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && x.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                }, s), (h = l[d]) || (h = l[d] = [], h.delegateCount = 0, p.setup && p.setup.call(e, i, g, a) !== !1 || e.addEventListener && e.addEventListener(d, a, !1)), 
                p.add && (p.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, f) : h.push(f), 
                x.event.global[d] = !0);
                e = null;
            }
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, h, d, g, m = q.hasData(e) && q.get(e);
            if (m && (u = m.events)) {
                t = (t || "").match(w) || [ "" ], l = t.length;
                while (l--) if (a = X.exec(t[l]) || [], h = g = a[1], d = (a[2] || "").split(".").sort(), 
                h) {
                    f = x.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, p = u[h] || [], 
                    a = a[2] && RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length;
                    while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), 
                    c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    s && !p.length && (f.teardown && f.teardown.call(e, d, m.handle) !== !1 || x.removeEvent(e, h, m.handle), 
                    delete u[h]);
                } else for (h in u) x.event.remove(e, h + t[l], n, r, !0);
                x.isEmptyObject(u) && (delete m.handle, q.remove(e, "events"));
            }
        },
        trigger: function(t, n, r, i) {
            var s, a, u, l, c, f, p, h = [ r || o ], d = y.call(t, "type") ? t.type : t, g = y.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = u = r = r || o, 3 !== r.nodeType && 8 !== r.nodeType && !_.test(d + x.event.triggered) && (d.indexOf(".") >= 0 && (g = d.split("."), 
            d = g.shift(), g.sort()), c = 0 > d.indexOf(":") && "on" + d, t = t[x.expando] ? t : new x.Event(d, "object" == typeof t && t), 
            t.isTrigger = i ? 2 : 3, t.namespace = g.join("."), t.namespace_re = t.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            t.result = undefined, t.target || (t.target = r), n = null == n ? [ t ] : x.makeArray(n, [ t ]), 
            p = x.event.special[d] || {}, i || !p.trigger || p.trigger.apply(r, n) !== !1)) {
                if (!i && !p.noBubble && !x.isWindow(r)) {
                    for (l = p.delegateType || d, _.test(l + d) || (a = a.parentNode); a; a = a.parentNode) h.push(a), 
                    u = a;
                    u === (r.ownerDocument || o) && h.push(u.defaultView || u.parentWindow || e);
                }
                s = 0;
                while ((a = h[s++]) && !t.isPropagationStopped()) t.type = s > 1 ? l : p.bindType || d, 
                f = (q.get(a, "events") || {})[t.type] && q.get(a, "handle"), f && f.apply(a, n), 
                f = c && a[c], f && x.acceptData(a) && f.apply && f.apply(a, n) === !1 && t.preventDefault();
                return t.type = d, i || t.isDefaultPrevented() || p._default && p._default.apply(h.pop(), n) !== !1 || !x.acceptData(r) || c && x.isFunction(r[d]) && !x.isWindow(r) && (u = r[c], 
                u && (r[c] = null), x.event.triggered = d, r[d](), x.event.triggered = undefined, 
                u && (r[c] = u)), t.result;
            }
        },
        dispatch: function(e) {
            e = x.event.fix(e);
            var t, n, r, i, o, s = [], a = d.call(arguments), u = (q.get(this, "events") || {})[e.type] || [], l = x.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                s = x.event.handlers.call(this, e, u), t = 0;
                while ((i = s[t++]) && !e.isPropagationStopped()) {
                    e.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !e.isImmediatePropagationStopped()) (!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, 
                    e.data = o.data, r = ((x.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), 
                    r !== undefined && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                }
                return l.postDispatch && l.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [], a = t.delegateCount, u = e.target;
            if (a && u.nodeType && (!e.button || "click" !== e.type)) for (;u !== this; u = u.parentNode || this) if (u.disabled !== !0 || "click" !== e.type) {
                for (r = [], n = 0; a > n; n++) o = t[n], i = o.selector + " ", r[i] === undefined && (r[i] = o.needsContext ? x(i, this).index(u) >= 0 : x.find(i, this, null, [ u ]).length), 
                r[i] && r.push(o);
                r.length && s.push({
                    elem: u,
                    handlers: r
                });
            }
            return t.length > a && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), 
                e;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, s = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || o, 
                r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), 
                e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), 
                e.which || s === undefined || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), 
                e;
            }
        },
        fix: function(e) {
            if (e[x.expando]) return e;
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = z.test(i) ? this.mouseHooks : I.test(i) ? this.keyHooks : {}), 
            r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
            while (t--) n = r[t], e[n] = o[n];
            return 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== V() && this.focus ? (this.focus(), !1) : undefined;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === V() && this.blur ? (this.blur(), !1) : undefined;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && x.nodeName(this, "input") ? (this.click(), 
                    !1) : undefined;
                },
                _default: function(e) {
                    return x.nodeName(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== undefined && (e.originalEvent.returnValue = e.result);
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = x.extend(new x.Event(), n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
        }
    }, x.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
    }, x.Event = function(e, t) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, 
        this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? U : Y) : this.type = e, 
        t && x.extend(this, t), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, 
        undefined) : new x.Event(e, t);
    }, x.Event.prototype = {
        isDefaultPrevented: Y,
        isPropagationStopped: Y,
        isImmediatePropagationStopped: Y,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = U, e && e.preventDefault && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = U, e && e.stopPropagation && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = U, this.stopPropagation();
        }
    }, x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), 
                e.type = t), n;
            }
        };
    }), x.support.focusinBubbles || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0, r = function(e) {
            x.event.simulate(t, e.target, x.event.fix(e), !0);
        };
        x.event.special[t] = {
            setup: function() {
                0 === n++ && o.addEventListener(e, r, !0);
            },
            teardown: function() {
                0 === --n && o.removeEventListener(e, r, !0);
            }
        };
    }), x.fn.extend({
        on: function(e, t, n, r, i) {
            var o, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = undefined);
                for (s in e) this.on(s, t, n, e[s], i);
                return this;
            }
            if (null == n && null == r ? (r = t, n = t = undefined) : null == r && ("string" == typeof t ? (r = n, 
            n = undefined) : (r = n, n = t, t = undefined)), r === !1) r = Y; else if (!r) return this;
            return 1 === i && (o = r, r = function(e) {
                return x().off(e), o.apply(this, arguments);
            }, r.guid = o.guid || (o.guid = x.guid++)), this.each(function() {
                x.event.add(this, e, r, n, t);
            });
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1);
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, x(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
            this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this;
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = undefined), n === !1 && (n = Y), 
            this.each(function() {
                x.event.remove(this, e, n, t);
            });
        },
        trigger: function(e, t) {
            return this.each(function() {
                x.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? x.event.trigger(e, t, n, !0) : undefined;
        }
    });
    var G = /^.[^:#\[\.,]*$/, J = x.expr.match.needsContext, Q = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    x.fn.extend({
        find: function(e) {
            var t, n, r, i = this.length;
            if ("string" != typeof e) return t = this, this.pushStack(x(e).filter(function() {
                for (r = 0; i > r; r++) if (x.contains(t[r], this)) return !0;
            }));
            for (n = [], r = 0; i > r; r++) x.find(e, this[r], n);
            return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, 
            n;
        },
        has: function(e) {
            var t = x(e, this), n = t.length;
            return this.filter(function() {
                var e = 0;
                for (;n > e; e++) if (x.contains(this, t[e])) return !0;
            });
        },
        not: function(e) {
            return this.pushStack(Z(this, e || [], !0));
        },
        filter: function(e) {
            return this.pushStack(Z(this, e || [], !1));
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? J.test(e) ? x(e, this.context).index(this[0]) >= 0 : x.filter(e, this).length > 0 : this.filter(e).length > 0);
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], s = J.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (;i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                n = o.push(n);
                break;
            }
            return this.pushStack(o.length > 1 ? x.unique(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? g.call(x(e), this[0]) : g.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [ e ] : e), r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    });
    function K(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType) ;
        return e;
    }
    x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return x.dir(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return x.dir(e, "parentNode", n);
        },
        next: function(e) {
            return K(e, "nextSibling");
        },
        prev: function(e) {
            return K(e, "previousSibling");
        },
        nextAll: function(e) {
            return x.dir(e, "nextSibling");
        },
        prevAll: function(e) {
            return x.dir(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return x.dir(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return x.dir(e, "previousSibling", n);
        },
        siblings: function(e) {
            return x.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return x.sibling(e.firstChild);
        },
        contents: function(e) {
            return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes);
        }
    }, function(e, t) {
        x.fn[e] = function(n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), 
            this.length > 1 && (Q[e] || x.unique(i), "p" === e[0] && i.reverse()), this.pushStack(i);
        };
    }), x.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [ r ] : [] : x.find.matches(e, x.grep(t, function(e) {
                return 1 === e.nodeType;
            }));
        },
        dir: function(e, t, n) {
            var r = [], i = n !== undefined;
            while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
                if (i && x(e).is(n)) break;
                r.push(e);
            }
            return r;
        },
        sibling: function(e, t) {
            var n = [];
            for (;e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        }
    });
    function Z(e, t, n) {
        if (x.isFunction(t)) return x.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n;
        });
        if (t.nodeType) return x.grep(e, function(e) {
            return e === t !== n;
        });
        if ("string" == typeof t) {
            if (G.test(t)) return x.filter(t, e, n);
            t = x.filter(t, e);
        }
        return x.grep(e, function(e) {
            return g.call(t, e) >= 0 !== n;
        });
    }
    var et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, tt = /<([\w:]+)/, nt = /<|&#?\w+;/, rt = /<(?:script|style|link)/i, it = /^(?:checkbox|radio)$/i, ot = /checked\s*(?:[^=]|=\s*.checked.)/i, st = /^$|\/(?:java|ecma)script/i, at = /^true\/(.*)/, ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, lt = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    lt.optgroup = lt.option, lt.tbody = lt.tfoot = lt.colgroup = lt.caption = lt.col = lt.thead, 
    lt.th = lt.td, x.fn.extend({
        text: function(e) {
            return x.access(this, function(e) {
                return e === undefined ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e));
            }, null, e, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ct(this, e);
                    t.appendChild(e);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ct(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        remove: function(e, t) {
            var n, r = e ? x.filter(e, this) : this, i = 0;
            for (;null != (n = r[i]); i++) t || 1 !== n.nodeType || x.cleanData(gt(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && ht(gt(n, "script")), 
            n.parentNode.removeChild(n));
            return this;
        },
        empty: function() {
            var e, t = 0;
            for (;null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(gt(e, !1)), e.textContent = "");
            return this;
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return x.clone(this, e, t);
            });
        },
        html: function(e) {
            return x.access(this, function(e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (e === undefined && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !rt.test(e) && !lt[(tt.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = e.replace(et, "<$1></$2>");
                    try {
                        for (;r > n; n++) t = this[n] || {}, 1 === t.nodeType && (x.cleanData(gt(t, !1)), 
                        t.innerHTML = e);
                        t = 0;
                    } catch (i) {}
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var e = x.map(this, function(e) {
                return [ e.nextSibling, e.parentNode ];
            }), t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++], i = e[t++];
                i && (x(this).remove(), i.insertBefore(n, r));
            }, !0), t ? this : this.remove();
        },
        detach: function(e) {
            return this.remove(e, !0);
        },
        domManip: function(e, t, n) {
            e = p.apply([], e);
            var r, i, o, s, a, u, l = 0, c = this.length, f = this, h = c - 1, d = e[0], g = x.isFunction(d);
            if (g || !(1 >= c || "string" != typeof d || x.support.checkClone) && ot.test(d)) return this.each(function(r) {
                var i = f.eq(r);
                g && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n);
            });
            if (c && (r = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = r.firstChild, 
            1 === r.childNodes.length && (r = i), i)) {
                for (o = x.map(gt(r, "script"), ft), s = o.length; c > l; l++) a = r, l !== h && (a = x.clone(a, !0, !0), 
                s && x.merge(o, gt(a, "script"))), t.call(this[l], a, l);
                if (s) for (u = o[o.length - 1].ownerDocument, x.map(o, pt), l = 0; s > l; l++) a = o[l], 
                st.test(a.type || "") && !q.access(a, "globalEval") && x.contains(u, a) && (a.src ? x._evalUrl(a.src) : x.globalEval(a.textContent.replace(ut, "")));
            }
            return this;
        }
    }), x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        x.fn[e] = function(e) {
            var n, r = [], i = x(e), o = i.length - 1, s = 0;
            for (;o >= s; s++) n = s === o ? this : this.clone(!0), x(i[s])[t](n), h.apply(r, n.get());
            return this.pushStack(r);
        };
    }), x.extend({
        clone: function(e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0), u = x.contains(e.ownerDocument, e);
            if (!(x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (s = gt(a), 
            o = gt(e), r = 0, i = o.length; i > r; r++) mt(o[r], s[r]);
            if (t) if (n) for (o = o || gt(e), s = s || gt(a), r = 0, i = o.length; i > r; r++) dt(o[r], s[r]); else dt(e, a);
            return s = gt(a, "script"), s.length > 0 && ht(s, !u && gt(e, "script")), a;
        },
        buildFragment: function(e, t, n, r) {
            var i, o, s, a, u, l, c = 0, f = e.length, p = t.createDocumentFragment(), h = [];
            for (;f > c; c++) if (i = e[c], i || 0 === i) if ("object" === x.type(i)) x.merge(h, i.nodeType ? [ i ] : i); else if (nt.test(i)) {
                o = o || p.appendChild(t.createElement("div")), s = (tt.exec(i) || [ "", "" ])[1].toLowerCase(), 
                a = lt[s] || lt._default, o.innerHTML = a[1] + i.replace(et, "<$1></$2>") + a[2], 
                l = a[0];
                while (l--) o = o.firstChild;
                x.merge(h, o.childNodes), o = p.firstChild, o.textContent = "";
            } else h.push(t.createTextNode(i));
            p.textContent = "", c = 0;
            while (i = h[c++]) if ((!r || -1 === x.inArray(i, r)) && (u = x.contains(i.ownerDocument, i), 
            o = gt(p.appendChild(i), "script"), u && ht(o), n)) {
                l = 0;
                while (i = o[l++]) st.test(i.type || "") && n.push(i);
            }
            return p;
        },
        cleanData: function(e) {
            var t, n, r, i = e.length, o = 0, s = x.event.special;
            for (;i > o; o++) {
                if (n = e[o], x.acceptData(n) && (t = q.access(n))) for (r in t.events) s[r] ? x.event.remove(n, r) : x.removeEvent(n, r, t.handle);
                L.discard(n), q.discard(n);
            }
        },
        _evalUrl: function(e) {
            return x.ajax({
                url: e,
                type: "GET",
                dataType: "text",
                async: !1,
                global: !1,
                success: x.globalEval
            });
        }
    });
    function ct(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
    }
    function ft(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function pt(e) {
        var t = at.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function ht(e, t) {
        var n = e.length, r = 0;
        for (;n > r; r++) q.set(e[r], "globalEval", !t || q.get(t[r], "globalEval"));
    }
    function dt(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (q.hasData(e) && (o = q.access(e), s = x.extend({}, o), l = o.events, q.set(t, s), 
            l)) {
                delete s.handle, s.events = {};
                for (i in l) for (n = 0, r = l[i].length; r > n; n++) x.event.add(t, i, l[i][n]);
            }
            L.hasData(e) && (a = L.access(e), u = x.extend({}, a), L.set(t, u));
        }
    }
    function gt(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return t === undefined || t && x.nodeName(e, t) ? x.merge([ e ], n) : n;
    }
    function mt(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && it.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
    }
    x.fn.extend({
        wrapAll: function(e) {
            var t;
            return x.isFunction(e) ? this.each(function(t) {
                x(this).wrapAll(e.call(this, t));
            }) : (this[0] && (t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), 
            t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
            }).append(this)), this);
        },
        wrapInner: function(e) {
            return x.isFunction(e) ? this.each(function(t) {
                x(this).wrapInner(e.call(this, t));
            }) : this.each(function() {
                var t = x(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = x.isFunction(e);
            return this.each(function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                x.nodeName(this, "body") || x(this).replaceWith(this.childNodes);
            }).end();
        }
    });
    var yt, vt, xt = /^(none|table(?!-c[ea]).+)/, bt = /^margin/, wt = RegExp("^(" + b + ")(.*)$", "i"), Tt = RegExp("^(" + b + ")(?!px)[a-z%]+$", "i"), Ct = RegExp("^([+-])=(" + b + ")", "i"), kt = {
        BODY: "block"
    }, Nt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Et = {
        letterSpacing: 0,
        fontWeight: 400
    }, St = [ "Top", "Right", "Bottom", "Left" ], jt = [ "Webkit", "O", "Moz", "ms" ];
    function Dt(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = jt.length;
        while (i--) if (t = jt[i] + n, t in e) return t;
        return r;
    }
    function At(e, t) {
        return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e);
    }
    function Lt(t) {
        return e.getComputedStyle(t, null);
    }
    function qt(e, t) {
        var n, r, i, o = [], s = 0, a = e.length;
        for (;a > s; s++) r = e[s], r.style && (o[s] = q.get(r, "olddisplay"), n = r.style.display, 
        t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && At(r) && (o[s] = q.access(r, "olddisplay", Pt(r.nodeName)))) : o[s] || (i = At(r), 
        (n && "none" !== n || !i) && q.set(r, "olddisplay", i ? n : x.css(r, "display"))));
        for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e;
    }
    x.fn.extend({
        css: function(e, t) {
            return x.access(this, function(e, t, n) {
                var r, i, o = {}, s = 0;
                if (x.isArray(t)) {
                    for (r = Lt(e), i = t.length; i > s; s++) o[t[s]] = x.css(e, t[s], !1, r);
                    return o;
                }
                return n !== undefined ? x.style(e, t, n) : x.css(e, t);
            }, e, t, arguments.length > 1);
        },
        show: function() {
            return qt(this, !0);
        },
        hide: function() {
            return qt(this);
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e : At(this)) ? x(this).show() : x(this).hide();
            });
        }
    }), x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = yt(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = x.camelCase(t), u = e.style;
                return t = x.cssProps[a] || (x.cssProps[a] = Dt(u, a)), s = x.cssHooks[t] || x.cssHooks[a], 
                n === undefined ? s && "get" in s && (i = s.get(e, !1, r)) !== undefined ? i : u[t] : (o = typeof n, 
                "string" === o && (i = Ct.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(x.css(e, t)), 
                o = "number"), null == n || "number" === o && isNaN(n) || ("number" !== o || x.cssNumber[a] || (n += "px"), 
                x.support.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), 
                s && "set" in s && (n = s.set(e, n, r)) === undefined || (u[t] = n)), undefined);
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = x.camelCase(t);
            return t = x.cssProps[a] || (x.cssProps[a] = Dt(e.style, a)), s = x.cssHooks[t] || x.cssHooks[a], 
            s && "get" in s && (i = s.get(e, !0, n)), i === undefined && (i = yt(e, t, r)), 
            "normal" === i && t in Et && (i = Et[t]), "" === n || n ? (o = parseFloat(i), n === !0 || x.isNumeric(o) ? o || 0 : i) : i;
        }
    }), yt = function(e, t, n) {
        var r, i, o, s = n || Lt(e), a = s ? s.getPropertyValue(t) || s[t] : undefined, u = e.style;
        return s && ("" !== a || x.contains(e.ownerDocument, e) || (a = x.style(e, t)), 
        Tt.test(a) && bt.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, 
        a = s.width, u.width = r, u.minWidth = i, u.maxWidth = o)), a;
    };
    function Ht(e, t, n) {
        var r = wt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
    }
    function Ot(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0;
        for (;4 > o; o += 2) "margin" === n && (s += x.css(e, n + St[o], !0, i)), r ? ("content" === n && (s -= x.css(e, "padding" + St[o], !0, i)), 
        "margin" !== n && (s -= x.css(e, "border" + St[o] + "Width", !0, i))) : (s += x.css(e, "padding" + St[o], !0, i), 
        "padding" !== n && (s += x.css(e, "border" + St[o] + "Width", !0, i)));
        return s;
    }
    function Ft(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Lt(e), s = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = yt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Tt.test(i)) return i;
            r = s && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
        }
        return i + Ot(e, t, n || (s ? "border" : "content"), r, o) + "px";
    }
    function Pt(e) {
        var t = o, n = kt[e];
        return n || (n = Rt(e, t), "none" !== n && n || (vt = (vt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), 
        t = (vt[0].contentWindow || vt[0].contentDocument).document, t.write("<!doctype html><html><body>"), 
        t.close(), n = Rt(e, t), vt.detach()), kt[e] = n), n;
    }
    function Rt(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body), r = x.css(n[0], "display");
        return n.remove(), r;
    }
    x.each([ "height", "width" ], function(e, t) {
        x.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? 0 === e.offsetWidth && xt.test(x.css(e, "display")) ? x.swap(e, Nt, function() {
                    return Ft(e, t, r);
                }) : Ft(e, t, r) : undefined;
            },
            set: function(e, n, r) {
                var i = r && Lt(e);
                return Ht(e, n, r ? Ot(e, t, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0);
            }
        };
    }), x(function() {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {
            get: function(e, t) {
                return t ? x.swap(e, {
                    display: "inline-block"
                }, yt, [ e, "marginRight" ]) : undefined;
            }
        }), !x.support.pixelPosition && x.fn.position && x.each([ "top", "left" ], function(e, t) {
            x.cssHooks[t] = {
                get: function(e, n) {
                    return n ? (n = yt(e, t), Tt.test(n) ? x(e).position()[t] + "px" : n) : undefined;
                }
            };
        });
    }), x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight;
    }, x.expr.filters.visible = function(e) {
        return !x.expr.filters.hidden(e);
    }), x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [ n ];
                for (;4 > r; r++) i[e + St[r] + t] = o[r] || o[r - 2] || o[0];
                return i;
            }
        }, bt.test(e) || (x.cssHooks[e + t].set = Ht);
    });
    var Mt = /%20/g, Wt = /\[\]$/, $t = /\r?\n/g, Bt = /^(?:submit|button|image|reset|file)$/i, It = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && It.test(this.nodeName) && !Bt.test(e) && (this.checked || !it.test(e));
            }).map(function(e, t) {
                var n = x(this).val();
                return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace($t, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace($t, "\r\n")
                };
            }).get();
        }
    }), x.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            t = x.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };
        if (t === undefined && (t = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
            i(this.name, this.value);
        }); else for (n in e) zt(n, e[n], t, i);
        return r.join("&").replace(Mt, "+");
    };
    function zt(e, t, n, r) {
        var i;
        if (x.isArray(t)) x.each(t, function(t, i) {
            n || Wt.test(e) ? r(e, i) : zt(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
        }); else if (n || "object" !== x.type(t)) r(e, t); else for (i in t) zt(e + "[" + i + "]", t[i], n, r);
    }
    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        x.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), x.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    });
    var _t, Xt, Ut = x.now(), Yt = /\?/, Vt = /#.*$/, Gt = /([?&])_=[^&]*/, Jt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Kt = /^(?:GET|HEAD)$/, Zt = /^\/\//, en = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, tn = x.fn.load, nn = {}, rn = {}, on = "*/".concat("*");
    try {
        Xt = i.href;
    } catch (sn) {
        Xt = o.createElement("a"), Xt.href = "", Xt = Xt.href;
    }
    _t = en.exec(Xt.toLowerCase()) || [];
    function an(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(w) || [];
            if (x.isFunction(n)) while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function un(e, t, n, r) {
        var i = {}, o = e === rn;
        function s(a) {
            var u;
            return i[a] = !0, x.each(e[a] || [], function(e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : undefined : (t.dataTypes.unshift(l), 
                s(l), !1);
            }), u;
        }
        return s(t.dataTypes[0]) || !i["*"] && s("*");
    }
    function ln(e, t) {
        var n, r, i = x.ajaxSettings.flatOptions || {};
        for (n in t) t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && x.extend(!0, e, r), e;
    }
    x.fn.load = function(e, t, n) {
        if ("string" != typeof e && tn) return tn.apply(this, arguments);
        var r, i, o, s = this, a = e.indexOf(" ");
        return a >= 0 && (r = e.slice(a), e = e.slice(0, a)), x.isFunction(t) ? (n = t, 
        t = undefined) : t && "object" == typeof t && (i = "POST"), s.length > 0 && x.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(r ? x("<div>").append(x.parseHTML(e)).find(r) : e);
        }).complete(n && function(e, t) {
            s.each(n, o || [ e.responseText, t, e ]);
        }), this;
    }, x.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Xt,
            type: "GET",
            isLocal: Qt.test(_t[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": on,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": x.parseJSON,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? ln(ln(e, x.ajaxSettings), t) : ln(x.ajaxSettings, e);
        },
        ajaxPrefilter: an(nn),
        ajaxTransport: an(rn),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = undefined), t = t || {};
            var n, r, i, o, s, a, u, l, c = x.ajaxSetup({}, t), f = c.context || c, p = c.context && (f.nodeType || f.jquery) ? x(f) : x.event, h = x.Deferred(), d = x.Callbacks("once memory"), g = c.statusCode || {}, m = {}, y = {}, v = 0, b = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === v) {
                        if (!o) {
                            o = {};
                            while (t = Jt.exec(i)) o[t[1].toLowerCase()] = t[2];
                        }
                        t = o[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return 2 === v ? i : null;
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return v || (e = y[n] = y[n] || e, m[e] = t), this;
                },
                overrideMimeType: function(e) {
                    return v || (c.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > v) for (t in e) g[t] = [ g[t], e[t] ]; else T.always(e[T.status]);
                    return this;
                },
                abort: function(e) {
                    var t = e || b;
                    return n && n.abort(t), k(0, t), this;
                }
            };
            if (h.promise(T).complete = d.add, T.success = T.done, T.error = T.fail, c.url = ((e || c.url || Xt) + "").replace(Vt, "").replace(Zt, _t[1] + "//"), 
            c.type = t.method || t.type || c.method || c.type, c.dataTypes = x.trim(c.dataType || "*").toLowerCase().match(w) || [ "" ], 
            null == c.crossDomain && (a = en.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === _t[1] && a[2] === _t[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (_t[3] || ("http:" === _t[1] ? "80" : "443")))), 
            c.data && c.processData && "string" != typeof c.data && (c.data = x.param(c.data, c.traditional)), 
            un(nn, c, t, T), 2 === v) return T;
            u = c.global, u && 0 === x.active++ && x.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), 
            c.hasContent = !Kt.test(c.type), r = c.url, c.hasContent || (c.data && (r = c.url += (Yt.test(r) ? "&" : "?") + c.data, 
            delete c.data), c.cache === !1 && (c.url = Gt.test(r) ? r.replace(Gt, "$1_=" + Ut++) : r + (Yt.test(r) ? "&" : "?") + "_=" + Ut++)), 
            c.ifModified && (x.lastModified[r] && T.setRequestHeader("If-Modified-Since", x.lastModified[r]), 
            x.etag[r] && T.setRequestHeader("If-None-Match", x.etag[r])), (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", c.contentType), 
            T.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + on + "; q=0.01" : "") : c.accepts["*"]);
            for (l in c.headers) T.setRequestHeader(l, c.headers[l]);
            if (c.beforeSend && (c.beforeSend.call(f, T, c) === !1 || 2 === v)) return T.abort();
            b = "abort";
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            }) T[l](c[l]);
            if (n = un(rn, c, t, T)) {
                T.readyState = 1, u && p.trigger("ajaxSend", [ T, c ]), c.async && c.timeout > 0 && (s = setTimeout(function() {
                    T.abort("timeout");
                }, c.timeout));
                try {
                    v = 1, n.send(m, k);
                } catch (C) {
                    if (!(2 > v)) throw C;
                    k(-1, C);
                }
            } else k(-1, "No Transport");
            function k(e, t, o, a) {
                var l, m, y, b, w, C = t;
                2 !== v && (v = 2, s && clearTimeout(s), n = undefined, i = a || "", T.readyState = e > 0 ? 4 : 0, 
                l = e >= 200 && 300 > e || 304 === e, o && (b = cn(c, T, o)), b = fn(c, b, T, l), 
                l ? (c.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (x.lastModified[r] = w), 
                w = T.getResponseHeader("etag"), w && (x.etag[r] = w)), 204 === e ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, 
                m = b.data, y = b.error, l = !y)) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), 
                T.status = e, T.statusText = (t || C) + "", l ? h.resolveWith(f, [ m, C, T ]) : h.rejectWith(f, [ T, C, y ]), 
                T.statusCode(g), g = undefined, u && p.trigger(l ? "ajaxSuccess" : "ajaxError", [ T, c, l ? m : y ]), 
                d.fireWith(f, [ T, C ]), u && (p.trigger("ajaxComplete", [ T, c ]), --x.active || x.event.trigger("ajaxStop")));
            }
            return T;
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return x.get(e, undefined, t, "script");
        }
    }), x.each([ "get", "post" ], function(e, t) {
        x[t] = function(e, n, r, i) {
            return x.isFunction(n) && (i = i || r, r = n, n = undefined), x.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            });
        };
    });
    function cn(e, t, n) {
        var r, i, o, s, a = e.contents, u = e.dataTypes;
        while ("*" === u[0]) u.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) for (i in a) if (a[i] && a[i].test(r)) {
            u.unshift(i);
            break;
        }
        if (u[0] in n) o = u[0]; else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break;
                }
                s || (s = i);
            }
            o = o || s;
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : undefined;
    }
    function fn(e, t, n, r) {
        var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
        if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        o = c.shift();
        while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), 
        u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (s = l[u + " " + o] || l["* " + o], !s) for (i in l) if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                break;
            }
            if (s !== !0) if (s && e["throws"]) t = s(t); else try {
                t = s(t);
            } catch (f) {
                return {
                    state: "parsererror",
                    error: s ? f : "No conversion from " + u + " to " + o
                };
            }
        }
        return {
            state: "success",
            data: t
        };
    }
    x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e), e;
            }
        }
    }), x.ajaxPrefilter("script", function(e) {
        e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), x.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = x("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type);
                    }), o.head.appendChild(t[0]);
                },
                abort: function() {
                    n && n();
                }
            };
        }
    });
    var pn = [], hn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = pn.pop() || x.expando + "_" + Ut++;
            return this[e] = !0, e;
        }
    }), x.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, s, a = t.jsonp !== !1 && (hn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && hn.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = x.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, 
        a ? t[a] = t[a].replace(hn, "$1" + i) : t.jsonp !== !1 && (t.url += (Yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), 
        t.converters["script json"] = function() {
            return s || x.error(i + " was not called"), s[0];
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            s = arguments;
        }, r.always(function() {
            e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, pn.push(i)), s && x.isFunction(o) && o(s[0]), 
            s = o = undefined;
        }), "script") : undefined;
    }), x.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (e) {}
    };
    var dn = x.ajaxSettings.xhr(), gn = {
        0: 200,
        1223: 204
    }, mn = 0, yn = {};
    e.ActiveXObject && x(e).on("unload", function() {
        for (var e in yn) yn[e]();
        yn = undefined;
    }), x.support.cors = !!dn && "withCredentials" in dn, x.support.ajax = dn = !!dn, 
    x.ajaxTransport(function(e) {
        var t;
        return x.support.cors || dn && !e.crossDomain ? {
            send: function(n, r) {
                var i, o, s = e.xhr();
                if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) s[i] = e.xhrFields[i];
                e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) s.setRequestHeader(i, n[i]);
                t = function(e) {
                    return function() {
                        t && (delete yn[o], t = s.onload = s.onerror = null, "abort" === e ? s.abort() : "error" === e ? r(s.status || 404, s.statusText) : r(gn[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
                            text: s.responseText
                        } : undefined, s.getAllResponseHeaders()));
                    };
                }, s.onload = t(), s.onerror = t("error"), t = yn[o = mn++] = t("abort"), s.send(e.hasContent && e.data || null);
            },
            abort: function() {
                t && t();
            }
        } : undefined;
    });
    var vn, xn, bn = /^(?:toggle|show|hide)$/, wn = RegExp("^(?:([+-])=|)(" + b + ")([a-z%]*)$", "i"), Tn = /queueHooks$/, Cn = [ Dn ], kn = {
        "*": [ function(e, t) {
            var n, r, i = this.createTween(e, t), o = wn.exec(t), s = i.cur(), a = +s || 0, u = 1, l = 20;
            if (o) {
                if (n = +o[2], r = o[3] || (x.cssNumber[e] ? "" : "px"), "px" !== r && a) {
                    a = x.css(i.elem, e, !0) || n || 1;
                    do u = u || ".5", a /= u, x.style(i.elem, e, a + r); while (u !== (u = i.cur() / s) && 1 !== u && --l);
                }
                i.unit = r, i.start = a, i.end = o[1] ? a + (o[1] + 1) * n : n;
            }
            return i;
        } ]
    };
    function Nn() {
        return setTimeout(function() {
            vn = undefined;
        }), vn = x.now();
    }
    function En(e, t) {
        x.each(t, function(t, n) {
            var r = (kn[t] || []).concat(kn["*"]), i = 0, o = r.length;
            for (;o > i; i++) if (r[i].call(e, t, n)) return;
        });
    }
    function Sn(e, t, n) {
        var r, i, o = 0, s = Cn.length, a = x.Deferred().always(function() {
            delete u.elem;
        }), u = function() {
            if (i) return !1;
            var t = vn || Nn(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length;
            for (;u > s; s++) l.tweens[s].run(o);
            return a.notifyWith(e, [ l, o, n ]), 1 > o && u ? n : (a.resolveWith(e, [ l ]), 
            !1);
        }, l = a.promise({
            elem: e,
            props: x.extend({}, t),
            opts: x.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: vn || Nn(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = x.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r;
            },
            stop: function(t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i) return this;
                for (i = !0; r > n; n++) l.tweens[n].run(1);
                return t ? a.resolveWith(e, [ l, t ]) : a.rejectWith(e, [ l, t ]), this;
            }
        }), c = l.props;
        for (jn(c, l.opts.specialEasing); s > o; o++) if (r = Cn[o].call(l, e, c, l.opts)) return r;
        return En(l, c), x.isFunction(l.opts.start) && l.opts.start.call(e, l), x.fx.timer(x.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
    }
    function jn(e, t) {
        var n, r, i, o, s;
        for (n in e) if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], 
        o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = x.cssHooks[r], s && "expand" in s) {
            o = s.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
    }
    x.Animation = x.extend(Sn, {
        tweener: function(e, t) {
            x.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (;i > r; r++) n = e[r], kn[n] = kn[n] || [], kn[n].unshift(t);
        },
        prefilter: function(e, t) {
            t ? Cn.unshift(e) : Cn.push(e);
        }
    });
    function Dn(e, t, n) {
        var r, i, o, s, a, u, l, c, f, p = this, h = e.style, d = {}, g = [], m = e.nodeType && At(e);
        n.queue || (c = x._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, f = c.empty.fire, 
        c.empty.fire = function() {
            c.unqueued || f();
        }), c.unqueued++, p.always(function() {
            p.always(function() {
                c.unqueued--, x.queue(e, "fx").length || c.empty.fire();
            });
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
        "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (h.display = "inline-block")), 
        n.overflow && (h.overflow = "hidden", p.always(function() {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
        })), a = q.get(e, "fxshow");
        for (r in t) if (o = t[r], bn.exec(o)) {
            if (delete t[r], u = u || "toggle" === o, o === (m ? "hide" : "show")) {
                if ("show" !== o || a === undefined || a[r] === undefined) continue;
                m = !0;
            }
            g.push(r);
        }
        if (s = g.length) {
            a = q.get(e, "fxshow") || q.access(e, "fxshow", {}), "hidden" in a && (m = a.hidden), 
            u && (a.hidden = !m), m ? x(e).show() : p.done(function() {
                x(e).hide();
            }), p.done(function() {
                var t;
                q.remove(e, "fxshow");
                for (t in d) x.style(e, t, d[t]);
            });
            for (r = 0; s > r; r++) i = g[r], l = p.createTween(i, m ? a[i] : 0), d[i] = a[i] || x.style(e, i), 
            i in a || (a[i] = l.start, m && (l.end = l.start, l.start = "width" === i || "height" === i ? 1 : 0));
        }
    }
    function An(e, t, n, r, i) {
        return new An.prototype.init(e, t, n, r, i);
    }
    x.Tween = An, An.prototype = {
        constructor: An,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), 
            this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = An.propHooks[this.prop];
            return e && e.get ? e.get(this) : An.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = An.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : An.propHooks._default.set(this), this;
        }
    }, An.prototype.init.prototype = An.prototype, An.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), 
                t && "auto" !== t ? t : 0) : e.elem[e.prop];
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
            }
        }
    }, An.propHooks.scrollTop = An.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, x.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Ln(t, !0), e, r, i);
        };
    }), x.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(At).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(e, t, n, r) {
            var i = x.isEmptyObject(e), o = x.speed(t, n, r), s = function() {
                var t = Sn(this, x.extend({}, e), o);
                s.finish = function() {
                    t.stop(!0);
                }, (i || q.get(this, "finish")) && t.stop(!0);
            };
            return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s);
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n);
            };
            return "string" != typeof e && (n = t, t = e, e = undefined), t && e !== !1 && this.queue(e || "fx", []), 
            this.each(function() {
                var t = !0, i = null != e && e + "queueHooks", o = x.timers, s = q.get(this);
                if (i) s[i] && s[i].stop && r(s[i]); else for (i in s) s[i] && s[i].stop && Tn.test(i) && r(s[i]);
                for (i = o.length; i--; ) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), 
                t = !1, o.splice(i, 1));
                (t || !n) && x.dequeue(this, e);
            });
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = q.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, s = r ? r.length : 0;
                for (n.finish = !0, x.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), 
                t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
                o.splice(t, 1));
                for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
            });
        }
    });
    function Ln(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = St[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    x.each({
        slideDown: Ln("show"),
        slideUp: Ln("hide"),
        slideToggle: Ln("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        x.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), x.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || x.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !x.isFunction(t) && t
        };
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, 
        (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue);
        }, r;
    }, x.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        }
    }, x.timers = [], x.fx = An.prototype.init, x.fx.tick = function() {
        var e, t = x.timers, n = 0;
        for (vn = x.now(); t.length > n; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
        t.length || x.fx.stop(), vn = undefined;
    }, x.fx.timer = function(e) {
        e() && x.timers.push(e) && x.fx.start();
    }, x.fx.interval = 13, x.fx.start = function() {
        xn || (xn = setInterval(x.fx.tick, x.fx.interval));
    }, x.fx.stop = function() {
        clearInterval(xn), xn = null;
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
        return x.grep(x.timers, function(t) {
            return e === t.elem;
        }).length;
    }), x.fn.offset = function(e) {
        if (arguments.length) return e === undefined ? this : this.each(function(t) {
            x.offset.setOffset(this, e, t);
        });
        var t, n, i = this[0], o = {
            top: 0,
            left: 0
        }, s = i && i.ownerDocument;
        if (s) return t = s.documentElement, x.contains(t, i) ? (typeof i.getBoundingClientRect !== r && (o = i.getBoundingClientRect()), 
        n = qn(s), {
            top: o.top + n.pageYOffset - t.clientTop,
            left: o.left + n.pageXOffset - t.clientLeft
        }) : o;
    }, x.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l, c = x.css(e, "position"), f = x(e), p = {};
            "static" === c && (e.style.position = "relative"), a = f.offset(), o = x.css(e, "top"), 
            u = x.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, 
            l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), 
            x.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (p.top = t.top - a.top + s), 
            null != t.left && (p.left = t.left - a.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
        }
    }, x.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === x.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), 
                t = this.offset(), x.nodeName(e[0], "html") || (r = e.offset()), r.top += x.css(e[0], "borderTopWidth", !0), 
                r.left += x.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - x.css(n, "marginTop", !0),
                    left: t.left - r.left - x.css(n, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || s;
                while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = e.offsetParent;
                return e || s;
            });
        }
    }), x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var r = "pageYOffset" === n;
        x.fn[t] = function(i) {
            return x.access(this, function(t, i, o) {
                var s = qn(t);
                return o === undefined ? s ? s[n] : t[i] : (s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o, 
                undefined);
            }, t, i, arguments.length, null);
        };
    });
    function qn(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
    }
    x.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        x.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            x.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r), s = n || (r === !0 || i === !0 ? "margin" : "border");
                return x.access(this, function(t, n, r) {
                    var i;
                    return x.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, 
                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? x.css(t, n, s) : x.style(t, n, r, s);
                }, t, o ? r : undefined, o, null);
            };
        });
    }), x.fn.size = function() {
        return this.length;
    }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && "object" == typeof module.exports ? module.exports = x : "function" == typeof define && define.amd && define("jquery", [], function() {
        return x;
    }), "object" == typeof e && "object" == typeof e.document && (e.jQuery = e.$ = x);
})(window);

/*!
 * Knockout JavaScript library v3.3.0
 * (c) Steven Sanderson - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function() {
    (function(p) {
        var y = this || (0, eval)("this"), w = y.document, M = y.navigator, u = y.jQuery, E = y.JSON;
        (function(p) {
            "function" === typeof define && define.amd ? define("knockout", [ "exports", "require" ], p) : "function" === typeof require && "object" === typeof exports && "object" === typeof module ? p(module.exports || exports) : p(y.ko = {});
        })(function(N, O) {
            function J(a, d) {
                return null === a || typeof a in Q ? a === d : !1;
            }
            function R(a, d) {
                var c;
                return function() {
                    c || (c = setTimeout(function() {
                        c = p;
                        a();
                    }, d));
                };
            }
            function S(a, d) {
                var c;
                return function() {
                    clearTimeout(c);
                    c = setTimeout(a, d);
                };
            }
            function K(b, d, c, e) {
                a.d[b] = {
                    init: function(b, k, h, l, g) {
                        var m, x;
                        a.w(function() {
                            var q = a.a.c(k()), n = !c !== !q, r = !x;
                            if (r || d || n !== m) r && a.Z.oa() && (x = a.a.la(a.e.childNodes(b), !0)), n ? (r || a.e.T(b, a.a.la(x)), 
                            a.Ja(e ? e(g, q) : g, b)) : a.e.ma(b), m = n;
                        }, null, {
                            q: b
                        });
                        return {
                            controlsDescendantBindings: !0
                        };
                    }
                };
                a.h.ka[b] = !1;
                a.e.R[b] = !0;
            }
            var a = "undefined" !== typeof N ? N : {};
            a.b = function(b, d) {
                for (var c = b.split("."), e = a, f = 0; f < c.length - 1; f++) e = e[c[f]];
                e[c[c.length - 1]] = d;
            };
            a.D = function(a, d, c) {
                a[d] = c;
            };
            a.version = "3.3.0";
            a.b("version", a.version);
            a.a = function() {
                function b(a, b) {
                    for (var c in a) a.hasOwnProperty(c) && b(c, a[c]);
                }
                function d(a, b) {
                    if (b) for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
                    return a;
                }
                function c(a, b) {
                    a.__proto__ = b;
                    return a;
                }
                function e(b, c, g, d) {
                    var e = b[c].match(m) || [];
                    a.a.o(g.match(m), function(b) {
                        a.a.ga(e, b, d);
                    });
                    b[c] = e.join(" ");
                }
                var f = {
                    __proto__: []
                } instanceof Array, k = {}, h = {};
                k[M && /Firefox\/2/i.test(M.userAgent) ? "KeyboardEvent" : "UIEvents"] = [ "keyup", "keydown", "keypress" ];
                k.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
                b(k, function(a, b) {
                    if (b.length) for (var c = 0, g = b.length; c < g; c++) h[b[c]] = a;
                });
                var l = {
                    propertychange: !0
                }, g = w && function() {
                    for (var a = 3, b = w.createElement("div"), c = b.getElementsByTagName("i"); b.innerHTML = "<!--[if gt IE " + ++a + "]><i></i><![endif]-->", 
                    c[0]; ) ;
                    return 4 < a ? a : p;
                }(), m = /\S+/g;
                return {
                    Bb: [ "authenticity_token", /^__RequestVerificationToken(_.*)?$/ ],
                    o: function(a, b) {
                        for (var c = 0, g = a.length; c < g; c++) b(a[c], c);
                    },
                    m: function(a, b) {
                        if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(a, b);
                        for (var c = 0, g = a.length; c < g; c++) if (a[c] === b) return c;
                        return -1;
                    },
                    vb: function(a, b, c) {
                        for (var g = 0, d = a.length; g < d; g++) if (b.call(c, a[g], g)) return a[g];
                        return null;
                    },
                    ya: function(b, c) {
                        var g = a.a.m(b, c);
                        0 < g ? b.splice(g, 1) : 0 === g && b.shift();
                    },
                    wb: function(b) {
                        b = b || [];
                        for (var c = [], g = 0, d = b.length; g < d; g++) 0 > a.a.m(c, b[g]) && c.push(b[g]);
                        return c;
                    },
                    Ka: function(a, b) {
                        a = a || [];
                        for (var c = [], g = 0, d = a.length; g < d; g++) c.push(b(a[g], g));
                        return c;
                    },
                    xa: function(a, b) {
                        a = a || [];
                        for (var c = [], g = 0, d = a.length; g < d; g++) b(a[g], g) && c.push(a[g]);
                        return c;
                    },
                    ia: function(a, b) {
                        if (b instanceof Array) a.push.apply(a, b); else for (var c = 0, g = b.length; c < g; c++) a.push(b[c]);
                        return a;
                    },
                    ga: function(b, c, g) {
                        var d = a.a.m(a.a.cb(b), c);
                        0 > d ? g && b.push(c) : g || b.splice(d, 1);
                    },
                    za: f,
                    extend: d,
                    Fa: c,
                    Ga: f ? c : d,
                    A: b,
                    pa: function(a, b) {
                        if (!a) return a;
                        var c = {}, g;
                        for (g in a) a.hasOwnProperty(g) && (c[g] = b(a[g], g, a));
                        return c;
                    },
                    Ra: function(b) {
                        for (;b.firstChild; ) a.removeNode(b.firstChild);
                    },
                    Jb: function(b) {
                        b = a.a.O(b);
                        for (var c = (b[0] && b[0].ownerDocument || w).createElement("div"), g = 0, d = b.length; g < d; g++) c.appendChild(a.S(b[g]));
                        return c;
                    },
                    la: function(b, c) {
                        for (var g = 0, d = b.length, e = []; g < d; g++) {
                            var m = b[g].cloneNode(!0);
                            e.push(c ? a.S(m) : m);
                        }
                        return e;
                    },
                    T: function(b, c) {
                        a.a.Ra(b);
                        if (c) for (var g = 0, d = c.length; g < d; g++) b.appendChild(c[g]);
                    },
                    Qb: function(b, c) {
                        var g = b.nodeType ? [ b ] : b;
                        if (0 < g.length) {
                            for (var d = g[0], e = d.parentNode, m = 0, f = c.length; m < f; m++) e.insertBefore(c[m], d);
                            m = 0;
                            for (f = g.length; m < f; m++) a.removeNode(g[m]);
                        }
                    },
                    na: function(a, b) {
                        if (a.length) {
                            for (b = 8 === b.nodeType && b.parentNode || b; a.length && a[0].parentNode !== b; ) a.splice(0, 1);
                            if (1 < a.length) {
                                var c = a[0], g = a[a.length - 1];
                                for (a.length = 0; c !== g; ) if (a.push(c), c = c.nextSibling, !c) return;
                                a.push(g);
                            }
                        }
                        return a;
                    },
                    Sb: function(a, b) {
                        7 > g ? a.setAttribute("selected", b) : a.selected = b;
                    },
                    ib: function(a) {
                        return null === a || a === p ? "" : a.trim ? a.trim() : a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
                    },
                    Dc: function(a, b) {
                        a = a || "";
                        return b.length > a.length ? !1 : a.substring(0, b.length) === b;
                    },
                    jc: function(a, b) {
                        if (a === b) return !0;
                        if (11 === a.nodeType) return !1;
                        if (b.contains) return b.contains(3 === a.nodeType ? a.parentNode : a);
                        if (b.compareDocumentPosition) return 16 == (b.compareDocumentPosition(a) & 16);
                        for (;a && a != b; ) a = a.parentNode;
                        return !!a;
                    },
                    Qa: function(b) {
                        return a.a.jc(b, b.ownerDocument.documentElement);
                    },
                    tb: function(b) {
                        return !!a.a.vb(b, a.a.Qa);
                    },
                    v: function(a) {
                        return a && a.tagName && a.tagName.toLowerCase();
                    },
                    n: function(b, c, d) {
                        var m = g && l[c];
                        if (!m && u) u(b).bind(c, d); else if (m || "function" != typeof b.addEventListener) if ("undefined" != typeof b.attachEvent) {
                            var e = function(a) {
                                d.call(b, a);
                            }, f = "on" + c;
                            b.attachEvent(f, e);
                            a.a.C.fa(b, function() {
                                b.detachEvent(f, e);
                            });
                        } else throw Error("Browser doesn't support addEventListener or attachEvent"); else b.addEventListener(c, d, !1);
                    },
                    qa: function(b, c) {
                        if (!b || !b.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
                        var g;
                        "input" === a.a.v(b) && b.type && "click" == c.toLowerCase() ? (g = b.type, g = "checkbox" == g || "radio" == g) : g = !1;
                        if (u && !g) u(b).trigger(c); else if ("function" == typeof w.createEvent) if ("function" == typeof b.dispatchEvent) g = w.createEvent(h[c] || "HTMLEvents"), 
                        g.initEvent(c, !0, !0, y, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, b), b.dispatchEvent(g); else throw Error("The supplied element doesn't support dispatchEvent"); else if (g && b.click) b.click(); else if ("undefined" != typeof b.fireEvent) b.fireEvent("on" + c); else throw Error("Browser doesn't support triggering events");
                    },
                    c: function(b) {
                        return a.F(b) ? b() : b;
                    },
                    cb: function(b) {
                        return a.F(b) ? b.B() : b;
                    },
                    Ia: function(b, c, g) {
                        var d;
                        c && ("object" === typeof b.classList ? (d = b.classList[g ? "add" : "remove"], 
                        a.a.o(c.match(m), function(a) {
                            d.call(b.classList, a);
                        })) : "string" === typeof b.className.baseVal ? e(b.className, "baseVal", c, g) : e(b, "className", c, g));
                    },
                    Ha: function(b, c) {
                        var g = a.a.c(c);
                        if (null === g || g === p) g = "";
                        var d = a.e.firstChild(b);
                        !d || 3 != d.nodeType || a.e.nextSibling(d) ? a.e.T(b, [ b.ownerDocument.createTextNode(g) ]) : d.data = g;
                        a.a.mc(b);
                    },
                    Rb: function(a, b) {
                        a.name = b;
                        if (7 >= g) try {
                            a.mergeAttributes(w.createElement("<input name='" + a.name + "'/>"), !1);
                        } catch (c) {}
                    },
                    mc: function(a) {
                        9 <= g && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom));
                    },
                    kc: function(a) {
                        if (g) {
                            var b = a.style.width;
                            a.style.width = 0;
                            a.style.width = b;
                        }
                    },
                    Bc: function(b, c) {
                        b = a.a.c(b);
                        c = a.a.c(c);
                        for (var g = [], d = b; d <= c; d++) g.push(d);
                        return g;
                    },
                    O: function(a) {
                        for (var b = [], c = 0, g = a.length; c < g; c++) b.push(a[c]);
                        return b;
                    },
                    Hc: 6 === g,
                    Ic: 7 === g,
                    M: g,
                    Db: function(b, c) {
                        for (var g = a.a.O(b.getElementsByTagName("input")).concat(a.a.O(b.getElementsByTagName("textarea"))), d = "string" == typeof c ? function(a) {
                            return a.name === c;
                        } : function(a) {
                            return c.test(a.name);
                        }, m = [], e = g.length - 1; 0 <= e; e--) d(g[e]) && m.push(g[e]);
                        return m;
                    },
                    yc: function(b) {
                        return "string" == typeof b && (b = a.a.ib(b)) ? E && E.parse ? E.parse(b) : new Function("return " + b)() : null;
                    },
                    jb: function(b, c, g) {
                        if (!E || !E.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                        return E.stringify(a.a.c(b), c, g);
                    },
                    zc: function(c, g, d) {
                        d = d || {};
                        var m = d.params || {}, e = d.includeFields || this.Bb, f = c;
                        if ("object" == typeof c && "form" === a.a.v(c)) for (var f = c.action, l = e.length - 1; 0 <= l; l--) for (var k = a.a.Db(c, e[l]), h = k.length - 1; 0 <= h; h--) m[k[h].name] = k[h].value;
                        g = a.a.c(g);
                        var s = w.createElement("form");
                        s.style.display = "none";
                        s.action = f;
                        s.method = "post";
                        for (var p in g) c = w.createElement("input"), c.type = "hidden", c.name = p, c.value = a.a.jb(a.a.c(g[p])), 
                        s.appendChild(c);
                        b(m, function(a, b) {
                            var c = w.createElement("input");
                            c.type = "hidden";
                            c.name = a;
                            c.value = b;
                            s.appendChild(c);
                        });
                        w.body.appendChild(s);
                        d.submitter ? d.submitter(s) : s.submit();
                        setTimeout(function() {
                            s.parentNode.removeChild(s);
                        }, 0);
                    }
                };
            }();
            a.b("utils", a.a);
            a.b("utils.arrayForEach", a.a.o);
            a.b("utils.arrayFirst", a.a.vb);
            a.b("utils.arrayFilter", a.a.xa);
            a.b("utils.arrayGetDistinctValues", a.a.wb);
            a.b("utils.arrayIndexOf", a.a.m);
            a.b("utils.arrayMap", a.a.Ka);
            a.b("utils.arrayPushAll", a.a.ia);
            a.b("utils.arrayRemoveItem", a.a.ya);
            a.b("utils.extend", a.a.extend);
            a.b("utils.fieldsIncludedWithJsonPost", a.a.Bb);
            a.b("utils.getFormFields", a.a.Db);
            a.b("utils.peekObservable", a.a.cb);
            a.b("utils.postJson", a.a.zc);
            a.b("utils.parseJson", a.a.yc);
            a.b("utils.registerEventHandler", a.a.n);
            a.b("utils.stringifyJson", a.a.jb);
            a.b("utils.range", a.a.Bc);
            a.b("utils.toggleDomNodeCssClass", a.a.Ia);
            a.b("utils.triggerEvent", a.a.qa);
            a.b("utils.unwrapObservable", a.a.c);
            a.b("utils.objectForEach", a.a.A);
            a.b("utils.addOrRemoveItem", a.a.ga);
            a.b("utils.setTextContent", a.a.Ha);
            a.b("unwrap", a.a.c);
            Function.prototype.bind || (Function.prototype.bind = function(a) {
                var d = this;
                if (1 === arguments.length) return function() {
                    return d.apply(a, arguments);
                };
                var c = Array.prototype.slice.call(arguments, 1);
                return function() {
                    var e = c.slice(0);
                    e.push.apply(e, arguments);
                    return d.apply(a, e);
                };
            });
            a.a.f = new function() {
                function a(b, k) {
                    var h = b[c];
                    if (!h || "null" === h || !e[h]) {
                        if (!k) return p;
                        h = b[c] = "ko" + d++;
                        e[h] = {};
                    }
                    return e[h];
                }
                var d = 0, c = "__ko__" + new Date().getTime(), e = {};
                return {
                    get: function(c, d) {
                        var e = a(c, !1);
                        return e === p ? p : e[d];
                    },
                    set: function(c, d, e) {
                        if (e !== p || a(c, !1) !== p) a(c, !0)[d] = e;
                    },
                    clear: function(a) {
                        var b = a[c];
                        return b ? (delete e[b], a[c] = null, !0) : !1;
                    },
                    I: function() {
                        return d++ + c;
                    }
                };
            }();
            a.b("utils.domData", a.a.f);
            a.b("utils.domData.clear", a.a.f.clear);
            a.a.C = new function() {
                function b(b, d) {
                    var e = a.a.f.get(b, c);
                    e === p && d && (e = [], a.a.f.set(b, c, e));
                    return e;
                }
                function d(c) {
                    var e = b(c, !1);
                    if (e) for (var e = e.slice(0), l = 0; l < e.length; l++) e[l](c);
                    a.a.f.clear(c);
                    a.a.C.cleanExternalData(c);
                    if (f[c.nodeType]) for (e = c.firstChild; c = e; ) e = c.nextSibling, 8 === c.nodeType && d(c);
                }
                var c = a.a.f.I(), e = {
                    1: !0,
                    8: !0,
                    9: !0
                }, f = {
                    1: !0,
                    9: !0
                };
                return {
                    fa: function(a, c) {
                        if ("function" != typeof c) throw Error("Callback must be a function");
                        b(a, !0).push(c);
                    },
                    Pb: function(d, e) {
                        var f = b(d, !1);
                        f && (a.a.ya(f, e), 0 == f.length && a.a.f.set(d, c, p));
                    },
                    S: function(b) {
                        if (e[b.nodeType] && (d(b), f[b.nodeType])) {
                            var c = [];
                            a.a.ia(c, b.getElementsByTagName("*"));
                            for (var l = 0, g = c.length; l < g; l++) d(c[l]);
                        }
                        return b;
                    },
                    removeNode: function(b) {
                        a.S(b);
                        b.parentNode && b.parentNode.removeChild(b);
                    },
                    cleanExternalData: function(a) {
                        u && "function" == typeof u.cleanData && u.cleanData([ a ]);
                    }
                };
            }();
            a.S = a.a.C.S;
            a.removeNode = a.a.C.removeNode;
            a.b("cleanNode", a.S);
            a.b("removeNode", a.removeNode);
            a.b("utils.domNodeDisposal", a.a.C);
            a.b("utils.domNodeDisposal.addDisposeCallback", a.a.C.fa);
            a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.C.Pb);
            (function() {
                a.a.ca = function(b, d) {
                    var c;
                    if (u) if (u.parseHTML) c = u.parseHTML(b, d) || []; else {
                        if ((c = u.clean([ b ], d)) && c[0]) {
                            for (var e = c[0]; e.parentNode && 11 !== e.parentNode.nodeType; ) e = e.parentNode;
                            e.parentNode && e.parentNode.removeChild(e);
                        }
                    } else {
                        (e = d) || (e = w);
                        c = e.parentWindow || e.defaultView || y;
                        var f = a.a.ib(b).toLowerCase(), e = e.createElement("div"), f = f.match(/^<(thead|tbody|tfoot)/) && [ 1, "<table>", "</table>" ] || !f.indexOf("<tr") && [ 2, "<table><tbody>", "</tbody></table>" ] || (!f.indexOf("<td") || !f.indexOf("<th")) && [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ] || [ 0, "", "" ], k = "ignored<div>" + f[1] + b + f[2] + "</div>";
                        for ("function" == typeof c.innerShiv ? e.appendChild(c.innerShiv(k)) : e.innerHTML = k; f[0]--; ) e = e.lastChild;
                        c = a.a.O(e.lastChild.childNodes);
                    }
                    return c;
                };
                a.a.gb = function(b, d) {
                    a.a.Ra(b);
                    d = a.a.c(d);
                    if (null !== d && d !== p) if ("string" != typeof d && (d = d.toString()), u) u(b).html(d); else for (var c = a.a.ca(d, b.ownerDocument), e = 0; e < c.length; e++) b.appendChild(c[e]);
                };
            })();
            a.b("utils.parseHtmlFragment", a.a.ca);
            a.b("utils.setHtml", a.a.gb);
            a.H = function() {
                function b(c, d) {
                    if (c) if (8 == c.nodeType) {
                        var f = a.H.Lb(c.nodeValue);
                        null != f && d.push({
                            ic: c,
                            wc: f
                        });
                    } else if (1 == c.nodeType) for (var f = 0, k = c.childNodes, h = k.length; f < h; f++) b(k[f], d);
                }
                var d = {};
                return {
                    $a: function(a) {
                        if ("function" != typeof a) throw Error("You can only pass a function to ko.memoization.memoize()");
                        var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
                        d[b] = a;
                        return "<!--[ko_memo:" + b + "]-->";
                    },
                    Wb: function(a, b) {
                        var f = d[a];
                        if (f === p) throw Error("Couldn't find any memo with ID " + a + ". Perhaps it's already been unmemoized.");
                        try {
                            return f.apply(null, b || []), !0;
                        } finally {
                            delete d[a];
                        }
                    },
                    Xb: function(c, d) {
                        var f = [];
                        b(c, f);
                        for (var k = 0, h = f.length; k < h; k++) {
                            var l = f[k].ic, g = [ l ];
                            d && a.a.ia(g, d);
                            a.H.Wb(f[k].wc, g);
                            l.nodeValue = "";
                            l.parentNode && l.parentNode.removeChild(l);
                        }
                    },
                    Lb: function(a) {
                        return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : null;
                    }
                };
            }();
            a.b("memoization", a.H);
            a.b("memoization.memoize", a.H.$a);
            a.b("memoization.unmemoize", a.H.Wb);
            a.b("memoization.parseMemoText", a.H.Lb);
            a.b("memoization.unmemoizeDomNodeAndDescendants", a.H.Xb);
            a.Sa = {
                throttle: function(b, d) {
                    b.throttleEvaluation = d;
                    var c = null;
                    return a.j({
                        read: b,
                        write: function(a) {
                            clearTimeout(c);
                            c = setTimeout(function() {
                                b(a);
                            }, d);
                        }
                    });
                },
                rateLimit: function(a, d) {
                    var c, e, f;
                    "number" == typeof d ? c = d : (c = d.timeout, e = d.method);
                    f = "notifyWhenChangesStop" == e ? S : R;
                    a.Za(function(a) {
                        return f(a, c);
                    });
                },
                notify: function(a, d) {
                    a.equalityComparer = "always" == d ? null : J;
                }
            };
            var Q = {
                undefined: 1,
                "boolean": 1,
                number: 1,
                string: 1
            };
            a.b("extenders", a.Sa);
            a.Ub = function(b, d, c) {
                this.da = b;
                this.La = d;
                this.hc = c;
                this.Gb = !1;
                a.D(this, "dispose", this.p);
            };
            a.Ub.prototype.p = function() {
                this.Gb = !0;
                this.hc();
            };
            a.Q = function() {
                a.a.Ga(this, a.Q.fn);
                this.G = {};
                this.rb = 1;
            };
            var z = {
                U: function(b, d, c) {
                    var e = this;
                    c = c || "change";
                    var f = new a.Ub(e, d ? b.bind(d) : b, function() {
                        a.a.ya(e.G[c], f);
                        e.ua && e.ua(c);
                    });
                    e.ja && e.ja(c);
                    e.G[c] || (e.G[c] = []);
                    e.G[c].push(f);
                    return f;
                },
                notifySubscribers: function(b, d) {
                    d = d || "change";
                    "change" === d && this.Yb();
                    if (this.Ba(d)) try {
                        a.k.xb();
                        for (var c = this.G[d].slice(0), e = 0, f; f = c[e]; ++e) f.Gb || f.La(b);
                    } finally {
                        a.k.end();
                    }
                },
                Aa: function() {
                    return this.rb;
                },
                pc: function(a) {
                    return this.Aa() !== a;
                },
                Yb: function() {
                    ++this.rb;
                },
                Za: function(b) {
                    var d = this, c = a.F(d), e, f, k;
                    d.ta || (d.ta = d.notifySubscribers, d.notifySubscribers = function(a, b) {
                        b && "change" !== b ? "beforeChange" === b ? d.pb(a) : d.ta(a, b) : d.qb(a);
                    });
                    var h = b(function() {
                        c && k === d && (k = d());
                        e = !1;
                        d.Wa(f, k) && d.ta(f = k);
                    });
                    d.qb = function(a) {
                        e = !0;
                        k = a;
                        h();
                    };
                    d.pb = function(a) {
                        e || (f = a, d.ta(a, "beforeChange"));
                    };
                },
                Ba: function(a) {
                    return this.G[a] && this.G[a].length;
                },
                nc: function(b) {
                    if (b) return this.G[b] && this.G[b].length || 0;
                    var d = 0;
                    a.a.A(this.G, function(a, b) {
                        d += b.length;
                    });
                    return d;
                },
                Wa: function(a, d) {
                    return !this.equalityComparer || !this.equalityComparer(a, d);
                },
                extend: function(b) {
                    var d = this;
                    b && a.a.A(b, function(b, e) {
                        var f = a.Sa[b];
                        "function" == typeof f && (d = f(d, e) || d);
                    });
                    return d;
                }
            };
            a.D(z, "subscribe", z.U);
            a.D(z, "extend", z.extend);
            a.D(z, "getSubscriptionsCount", z.nc);
            a.a.za && a.a.Fa(z, Function.prototype);
            a.Q.fn = z;
            a.Hb = function(a) {
                return null != a && "function" == typeof a.U && "function" == typeof a.notifySubscribers;
            };
            a.b("subscribable", a.Q);
            a.b("isSubscribable", a.Hb);
            a.Z = a.k = function() {
                function b(a) {
                    c.push(e);
                    e = a;
                }
                function d() {
                    e = c.pop();
                }
                var c = [], e, f = 0;
                return {
                    xb: b,
                    end: d,
                    Ob: function(b) {
                        if (e) {
                            if (!a.Hb(b)) throw Error("Only subscribable things can act as dependencies");
                            e.La(b, b.ac || (b.ac = ++f));
                        }
                    },
                    u: function(a, c, e) {
                        try {
                            return b(), a.apply(c, e || []);
                        } finally {
                            d();
                        }
                    },
                    oa: function() {
                        if (e) return e.w.oa();
                    },
                    Ca: function() {
                        if (e) return e.Ca;
                    }
                };
            }();
            a.b("computedContext", a.Z);
            a.b("computedContext.getDependenciesCount", a.Z.oa);
            a.b("computedContext.isInitial", a.Z.Ca);
            a.b("computedContext.isSleeping", a.Z.Jc);
            a.b("ignoreDependencies", a.Gc = a.k.u);
            a.r = function(b) {
                function d() {
                    if (0 < arguments.length) return d.Wa(c, arguments[0]) && (d.X(), c = arguments[0], 
                    d.W()), this;
                    a.k.Ob(d);
                    return c;
                }
                var c = b;
                a.Q.call(d);
                a.a.Ga(d, a.r.fn);
                d.B = function() {
                    return c;
                };
                d.W = function() {
                    d.notifySubscribers(c);
                };
                d.X = function() {
                    d.notifySubscribers(c, "beforeChange");
                };
                a.D(d, "peek", d.B);
                a.D(d, "valueHasMutated", d.W);
                a.D(d, "valueWillMutate", d.X);
                return d;
            };
            a.r.fn = {
                equalityComparer: J
            };
            var H = a.r.Ac = "__ko_proto__";
            a.r.fn[H] = a.r;
            a.a.za && a.a.Fa(a.r.fn, a.Q.fn);
            a.Ta = function(b, d) {
                return null === b || b === p || b[H] === p ? !1 : b[H] === d ? !0 : a.Ta(b[H], d);
            };
            a.F = function(b) {
                return a.Ta(b, a.r);
            };
            a.Da = function(b) {
                return "function" == typeof b && b[H] === a.r || "function" == typeof b && b[H] === a.j && b.qc ? !0 : !1;
            };
            a.b("observable", a.r);
            a.b("isObservable", a.F);
            a.b("isWriteableObservable", a.Da);
            a.b("isWritableObservable", a.Da);
            a.ba = function(b) {
                b = b || [];
                if ("object" != typeof b || !("length" in b)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                b = a.r(b);
                a.a.Ga(b, a.ba.fn);
                return b.extend({
                    trackArrayChanges: !0
                });
            };
            a.ba.fn = {
                remove: function(b) {
                    for (var d = this.B(), c = [], e = "function" != typeof b || a.F(b) ? function(a) {
                        return a === b;
                    } : b, f = 0; f < d.length; f++) {
                        var k = d[f];
                        e(k) && (0 === c.length && this.X(), c.push(k), d.splice(f, 1), f--);
                    }
                    c.length && this.W();
                    return c;
                },
                removeAll: function(b) {
                    if (b === p) {
                        var d = this.B(), c = d.slice(0);
                        this.X();
                        d.splice(0, d.length);
                        this.W();
                        return c;
                    }
                    return b ? this.remove(function(c) {
                        return 0 <= a.a.m(b, c);
                    }) : [];
                },
                destroy: function(b) {
                    var d = this.B(), c = "function" != typeof b || a.F(b) ? function(a) {
                        return a === b;
                    } : b;
                    this.X();
                    for (var e = d.length - 1; 0 <= e; e--) c(d[e]) && (d[e]._destroy = !0);
                    this.W();
                },
                destroyAll: function(b) {
                    return b === p ? this.destroy(function() {
                        return !0;
                    }) : b ? this.destroy(function(d) {
                        return 0 <= a.a.m(b, d);
                    }) : [];
                },
                indexOf: function(b) {
                    var d = this();
                    return a.a.m(d, b);
                },
                replace: function(a, d) {
                    var c = this.indexOf(a);
                    0 <= c && (this.X(), this.B()[c] = d, this.W());
                }
            };
            a.a.o("pop push reverse shift sort splice unshift".split(" "), function(b) {
                a.ba.fn[b] = function() {
                    var a = this.B();
                    this.X();
                    this.yb(a, b, arguments);
                    a = a[b].apply(a, arguments);
                    this.W();
                    return a;
                };
            });
            a.a.o([ "slice" ], function(b) {
                a.ba.fn[b] = function() {
                    var a = this();
                    return a[b].apply(a, arguments);
                };
            });
            a.a.za && a.a.Fa(a.ba.fn, a.r.fn);
            a.b("observableArray", a.ba);
            a.Sa.trackArrayChanges = function(b) {
                function d() {
                    if (!c) {
                        c = !0;
                        var g = b.notifySubscribers;
                        b.notifySubscribers = function(a, b) {
                            b && "change" !== b || ++k;
                            return g.apply(this, arguments);
                        };
                        var d = [].concat(b.B() || []);
                        e = null;
                        f = b.U(function(c) {
                            c = [].concat(c || []);
                            if (b.Ba("arrayChange")) {
                                var g;
                                if (!e || 1 < k) e = a.a.Ma(d, c, {
                                    sparse: !0
                                });
                                g = e;
                            }
                            d = c;
                            e = null;
                            k = 0;
                            g && g.length && b.notifySubscribers(g, "arrayChange");
                        });
                    }
                }
                if (!b.yb) {
                    var c = !1, e = null, f, k = 0, h = b.ja, l = b.ua;
                    b.ja = function(a) {
                        h && h.call(b, a);
                        "arrayChange" === a && d();
                    };
                    b.ua = function(a) {
                        l && l.call(b, a);
                        "arrayChange" !== a || b.Ba("arrayChange") || (f.p(), c = !1);
                    };
                    b.yb = function(b, d, f) {
                        function l(a, b, c) {
                            return h[h.length] = {
                                status: a,
                                value: b,
                                index: c
                            };
                        }
                        if (c && !k) {
                            var h = [], r = b.length, v = f.length, t = 0;
                            switch (d) {
                              case "push":
                                t = r;

                              case "unshift":
                                for (d = 0; d < v; d++) l("added", f[d], t + d);
                                break;

                              case "pop":
                                t = r - 1;

                              case "shift":
                                r && l("deleted", b[t], t);
                                break;

                              case "splice":
                                d = Math.min(Math.max(0, 0 > f[0] ? r + f[0] : f[0]), r);
                                for (var r = 1 === v ? r : Math.min(d + (f[1] || 0), r), v = d + v - 2, t = Math.max(r, v), G = [], A = [], p = 2; d < t; ++d, 
                                ++p) d < r && A.push(l("deleted", b[d], d)), d < v && G.push(l("added", f[p], d));
                                a.a.Cb(A, G);
                                break;

                              default:
                                return;
                            }
                            e = h;
                        }
                    };
                }
            };
            a.w = a.j = function(b, d, c) {
                function e(a, b, c) {
                    if (I && b === g) throw Error("A 'pure' computed must not be called recursively");
                    B[a] = c;
                    c.sa = F++;
                    c.ea = b.Aa();
                }
                function f() {
                    var a, b;
                    for (a in B) if (B.hasOwnProperty(a) && (b = B[a], b.da.pc(b.ea))) return !0;
                }
                function k() {
                    !s && B && a.a.A(B, function(a, b) {
                        b.p && b.p();
                    });
                    B = null;
                    F = 0;
                    G = !0;
                    s = r = !1;
                }
                function h() {
                    var a = g.throttleEvaluation;
                    a && 0 <= a ? (clearTimeout(z), z = setTimeout(function() {
                        l(!0);
                    }, a)) : g.nb ? g.nb() : l(!0);
                }
                function l(b) {
                    if (!v && !G) {
                        if (y && y()) {
                            if (!t) {
                                w();
                                return;
                            }
                        } else t = !1;
                        v = !0;
                        try {
                            var c = B, m = F, f = I ? p : !F;
                            a.k.xb({
                                La: function(a, b) {
                                    G || (m && c[b] ? (e(b, a, c[b]), delete c[b], --m) : B[b] || e(b, a, s ? {
                                        da: a
                                    } : a.U(h)));
                                },
                                w: g,
                                Ca: f
                            });
                            B = {};
                            F = 0;
                            try {
                                var l = d ? A.call(d) : A();
                            } finally {
                                a.k.end(), m && !s && a.a.A(c, function(a, b) {
                                    b.p && b.p();
                                }), r = !1;
                            }
                            g.Wa(n, l) && (s || q(n, "beforeChange"), n = l, s ? g.Yb() : b && q(n));
                            f && q(n, "awake");
                        } finally {
                            v = !1;
                        }
                        F || w();
                    }
                }
                function g() {
                    if (0 < arguments.length) {
                        if ("function" === typeof C) C.apply(d, arguments); else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                        return this;
                    }
                    a.k.Ob(g);
                    (r || s && f()) && l();
                    return n;
                }
                function m() {
                    (r && !F || s && f()) && l();
                    return n;
                }
                function x() {
                    return r || 0 < F;
                }
                function q(a, b) {
                    g.notifySubscribers(a, b);
                }
                var n, r = !0, v = !1, t = !1, G = !1, A = b, I = !1, s = !1;
                A && "object" == typeof A ? (c = A, A = c.read) : (c = c || {}, A || (A = c.read));
                if ("function" != typeof A) throw Error("Pass a function that returns the value of the ko.computed");
                var C = c.write, D = c.disposeWhenNodeIsRemoved || c.q || null, u = c.disposeWhen || c.Pa, y = u, w = k, B = {}, F = 0, z = null;
                d || (d = c.owner);
                a.Q.call(g);
                a.a.Ga(g, a.j.fn);
                g.B = m;
                g.oa = function() {
                    return F;
                };
                g.qc = "function" === typeof C;
                g.p = function() {
                    w();
                };
                g.$ = x;
                var T = g.Za;
                g.Za = function(a) {
                    T.call(g, a);
                    g.nb = function() {
                        g.pb(n);
                        r = !0;
                        g.qb(g);
                    };
                };
                c.pure ? (s = I = !0, g.ja = function(b) {
                    if (!G && s && "change" == b) {
                        s = !1;
                        if (r || f()) B = null, F = 0, r = !0, l(); else {
                            var c = [];
                            a.a.A(B, function(a, b) {
                                c[b.sa] = a;
                            });
                            a.a.o(c, function(a, b) {
                                var c = B[a], g = c.da.U(h);
                                g.sa = b;
                                g.ea = c.ea;
                                B[a] = g;
                            });
                        }
                        G || q(n, "awake");
                    }
                }, g.ua = function(b) {
                    G || "change" != b || g.Ba("change") || (a.a.A(B, function(a, b) {
                        b.p && (B[a] = {
                            da: b.da,
                            sa: b.sa,
                            ea: b.ea
                        }, b.p());
                    }), s = !0, q(p, "asleep"));
                }, g.bc = g.Aa, g.Aa = function() {
                    s && (r || f()) && l();
                    return g.bc();
                }) : c.deferEvaluation && (g.ja = function(a) {
                    "change" != a && "beforeChange" != a || m();
                });
                a.D(g, "peek", g.B);
                a.D(g, "dispose", g.p);
                a.D(g, "isActive", g.$);
                a.D(g, "getDependenciesCount", g.oa);
                D && (t = !0, D.nodeType && (y = function() {
                    return !a.a.Qa(D) || u && u();
                }));
                s || c.deferEvaluation || l();
                D && x() && D.nodeType && (w = function() {
                    a.a.C.Pb(D, w);
                    k();
                }, a.a.C.fa(D, w));
                return g;
            };
            a.sc = function(b) {
                return a.Ta(b, a.j);
            };
            z = a.r.Ac;
            a.j[z] = a.r;
            a.j.fn = {
                equalityComparer: J
            };
            a.j.fn[z] = a.j;
            a.a.za && a.a.Fa(a.j.fn, a.Q.fn);
            a.b("dependentObservable", a.j);
            a.b("computed", a.j);
            a.b("isComputed", a.sc);
            a.Nb = function(b, d) {
                if ("function" === typeof b) return a.w(b, d, {
                    pure: !0
                });
                b = a.a.extend({}, b);
                b.pure = !0;
                return a.w(b, d);
            };
            a.b("pureComputed", a.Nb);
            (function() {
                function b(a, f, k) {
                    k = k || new c();
                    a = f(a);
                    if ("object" != typeof a || null === a || a === p || a instanceof Date || a instanceof String || a instanceof Number || a instanceof Boolean) return a;
                    var h = a instanceof Array ? [] : {};
                    k.save(a, h);
                    d(a, function(c) {
                        var g = f(a[c]);
                        switch (typeof g) {
                          case "boolean":
                          case "number":
                          case "string":
                          case "function":
                            h[c] = g;
                            break;

                          case "object":
                          case "undefined":
                            var d = k.get(g);
                            h[c] = d !== p ? d : b(g, f, k);
                        }
                    });
                    return h;
                }
                function d(a, b) {
                    if (a instanceof Array) {
                        for (var c = 0; c < a.length; c++) b(c);
                        "function" == typeof a.toJSON && b("toJSON");
                    } else for (c in a) b(c);
                }
                function c() {
                    this.keys = [];
                    this.mb = [];
                }
                a.Vb = function(c) {
                    if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");
                    return b(c, function(b) {
                        for (var c = 0; a.F(b) && 10 > c; c++) b = b();
                        return b;
                    });
                };
                a.toJSON = function(b, c, d) {
                    b = a.Vb(b);
                    return a.a.jb(b, c, d);
                };
                c.prototype = {
                    save: function(b, c) {
                        var d = a.a.m(this.keys, b);
                        0 <= d ? this.mb[d] = c : (this.keys.push(b), this.mb.push(c));
                    },
                    get: function(b) {
                        b = a.a.m(this.keys, b);
                        return 0 <= b ? this.mb[b] : p;
                    }
                };
            })();
            a.b("toJS", a.Vb);
            a.b("toJSON", a.toJSON);
            (function() {
                a.i = {
                    s: function(b) {
                        switch (a.a.v(b)) {
                          case "option":
                            return !0 === b.__ko__hasDomDataOptionValue__ ? a.a.f.get(b, a.d.options.ab) : 7 >= a.a.M ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value;

                          case "select":
                            return 0 <= b.selectedIndex ? a.i.s(b.options[b.selectedIndex]) : p;

                          default:
                            return b.value;
                        }
                    },
                    Y: function(b, d, c) {
                        switch (a.a.v(b)) {
                          case "option":
                            switch (typeof d) {
                              case "string":
                                a.a.f.set(b, a.d.options.ab, p);
                                "__ko__hasDomDataOptionValue__" in b && delete b.__ko__hasDomDataOptionValue__;
                                b.value = d;
                                break;

                              default:
                                a.a.f.set(b, a.d.options.ab, d), b.__ko__hasDomDataOptionValue__ = !0, b.value = "number" === typeof d ? d : "";
                            }
                            break;

                          case "select":
                            if ("" === d || null === d) d = p;
                            for (var e = -1, f = 0, k = b.options.length, h; f < k; ++f) if (h = a.i.s(b.options[f]), 
                            h == d || "" == h && d === p) {
                                e = f;
                                break;
                            }
                            if (c || 0 <= e || d === p && 1 < b.size) b.selectedIndex = e;
                            break;

                          default:
                            if (null === d || d === p) d = "";
                            b.value = d;
                        }
                    }
                };
            })();
            a.b("selectExtensions", a.i);
            a.b("selectExtensions.readValue", a.i.s);
            a.b("selectExtensions.writeValue", a.i.Y);
            a.h = function() {
                function b(b) {
                    b = a.a.ib(b);
                    123 === b.charCodeAt(0) && (b = b.slice(1, -1));
                    var c = [], d = b.match(e), x, h = [], n = 0;
                    if (d) {
                        d.push(",");
                        for (var r = 0, v; v = d[r]; ++r) {
                            var t = v.charCodeAt(0);
                            if (44 === t) {
                                if (0 >= n) {
                                    c.push(x && h.length ? {
                                        key: x,
                                        value: h.join("")
                                    } : {
                                        unknown: x || h.join("")
                                    });
                                    x = n = 0;
                                    h = [];
                                    continue;
                                }
                            } else if (58 === t) {
                                if (!n && !x && 1 === h.length) {
                                    x = h.pop();
                                    continue;
                                }
                            } else 47 === t && r && 1 < v.length ? (t = d[r - 1].match(f)) && !k[t[0]] && (b = b.substr(b.indexOf(v) + 1), 
                            d = b.match(e), d.push(","), r = -1, v = "/") : 40 === t || 123 === t || 91 === t ? ++n : 41 === t || 125 === t || 93 === t ? --n : x || h.length || 34 !== t && 39 !== t || (v = v.slice(1, -1));
                            h.push(v);
                        }
                    }
                    return c;
                }
                var d = [ "true", "false", "null", "undefined" ], c = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i, e = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"), f = /[\])"'A-Za-z0-9_$]+$/, k = {
                    "in": 1,
                    "return": 1,
                    "typeof": 1
                }, h = {};
                return {
                    ka: [],
                    V: h,
                    bb: b,
                    Ea: function(e, g) {
                        function m(b, g) {
                            var e;
                            if (!r) {
                                var l = a.getBindingHandler(b);
                                if (l && l.preprocess && !(g = l.preprocess(g, b, m))) return;
                                if (l = h[b]) e = g, 0 <= a.a.m(d, e) ? e = !1 : (l = e.match(c), e = null === l ? !1 : l[1] ? "Object(" + l[1] + ")" + l[2] : e), 
                                l = e;
                                l && k.push("'" + b + "':function(_z){" + e + "=_z}");
                            }
                            n && (g = "function(){return " + g + " }");
                            f.push("'" + b + "':" + g);
                        }
                        g = g || {};
                        var f = [], k = [], n = g.valueAccessors, r = g.bindingParams, v = "string" === typeof e ? b(e) : e;
                        a.a.o(v, function(a) {
                            m(a.key || a.unknown, a.value);
                        });
                        k.length && m("_ko_property_writers", "{" + k.join(",") + " }");
                        return f.join(",");
                    },
                    vc: function(a, b) {
                        for (var c = 0; c < a.length; c++) if (a[c].key == b) return !0;
                        return !1;
                    },
                    ra: function(b, c, d, e, f) {
                        if (b && a.F(b)) !a.Da(b) || f && b.B() === e || b(e); else if ((b = c.get("_ko_property_writers")) && b[d]) b[d](e);
                    }
                };
            }();
            a.b("expressionRewriting", a.h);
            a.b("expressionRewriting.bindingRewriteValidators", a.h.ka);
            a.b("expressionRewriting.parseObjectLiteral", a.h.bb);
            a.b("expressionRewriting.preProcessBindings", a.h.Ea);
            a.b("expressionRewriting._twoWayBindings", a.h.V);
            a.b("jsonExpressionRewriting", a.h);
            a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.h.Ea);
            (function() {
                function b(a) {
                    return 8 == a.nodeType && k.test(f ? a.text : a.nodeValue);
                }
                function d(a) {
                    return 8 == a.nodeType && h.test(f ? a.text : a.nodeValue);
                }
                function c(a, c) {
                    for (var e = a, f = 1, l = []; e = e.nextSibling; ) {
                        if (d(e) && (f--, 0 === f)) return l;
                        l.push(e);
                        b(e) && f++;
                    }
                    if (!c) throw Error("Cannot find closing comment tag to match: " + a.nodeValue);
                    return null;
                }
                function e(a, b) {
                    var d = c(a, b);
                    return d ? 0 < d.length ? d[d.length - 1].nextSibling : a.nextSibling : null;
                }
                var f = w && "<!--test-->" === w.createComment("test").text, k = f ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/, h = f ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/, l = {
                    ul: !0,
                    ol: !0
                };
                a.e = {
                    R: {},
                    childNodes: function(a) {
                        return b(a) ? c(a) : a.childNodes;
                    },
                    ma: function(c) {
                        if (b(c)) {
                            c = a.e.childNodes(c);
                            for (var d = 0, e = c.length; d < e; d++) a.removeNode(c[d]);
                        } else a.a.Ra(c);
                    },
                    T: function(c, d) {
                        if (b(c)) {
                            a.e.ma(c);
                            for (var e = c.nextSibling, f = 0, l = d.length; f < l; f++) e.parentNode.insertBefore(d[f], e);
                        } else a.a.T(c, d);
                    },
                    Mb: function(a, c) {
                        b(a) ? a.parentNode.insertBefore(c, a.nextSibling) : a.firstChild ? a.insertBefore(c, a.firstChild) : a.appendChild(c);
                    },
                    Fb: function(c, d, e) {
                        e ? b(c) ? c.parentNode.insertBefore(d, e.nextSibling) : e.nextSibling ? c.insertBefore(d, e.nextSibling) : c.appendChild(d) : a.e.Mb(c, d);
                    },
                    firstChild: function(a) {
                        return b(a) ? !a.nextSibling || d(a.nextSibling) ? null : a.nextSibling : a.firstChild;
                    },
                    nextSibling: function(a) {
                        b(a) && (a = e(a));
                        return a.nextSibling && d(a.nextSibling) ? null : a.nextSibling;
                    },
                    oc: b,
                    Fc: function(a) {
                        return (a = (f ? a.text : a.nodeValue).match(k)) ? a[1] : null;
                    },
                    Kb: function(c) {
                        if (l[a.a.v(c)]) {
                            var m = c.firstChild;
                            if (m) {
                                do if (1 === m.nodeType) {
                                    var f;
                                    f = m.firstChild;
                                    var h = null;
                                    if (f) {
                                        do if (h) h.push(f); else if (b(f)) {
                                            var k = e(f, !0);
                                            k ? f = k : h = [ f ];
                                        } else d(f) && (h = [ f ]); while (f = f.nextSibling);
                                    }
                                    if (f = h) for (h = m.nextSibling, k = 0; k < f.length; k++) h ? c.insertBefore(f[k], h) : c.appendChild(f[k]);
                                } while (m = m.nextSibling);
                            }
                        }
                    }
                };
            })();
            a.b("virtualElements", a.e);
            a.b("virtualElements.allowedBindings", a.e.R);
            a.b("virtualElements.emptyNode", a.e.ma);
            a.b("virtualElements.insertAfter", a.e.Fb);
            a.b("virtualElements.prepend", a.e.Mb);
            a.b("virtualElements.setDomNodeChildren", a.e.T);
            (function() {
                a.L = function() {
                    this.ec = {};
                };
                a.a.extend(a.L.prototype, {
                    nodeHasBindings: function(b) {
                        switch (b.nodeType) {
                          case 1:
                            return null != b.getAttribute("data-bind") || a.g.getComponentNameForNode(b);

                          case 8:
                            return a.e.oc(b);

                          default:
                            return !1;
                        }
                    },
                    getBindings: function(b, d) {
                        var c = this.getBindingsString(b, d), c = c ? this.parseBindingsString(c, d, b) : null;
                        return a.g.sb(c, b, d, !1);
                    },
                    getBindingAccessors: function(b, d) {
                        var c = this.getBindingsString(b, d), c = c ? this.parseBindingsString(c, d, b, {
                            valueAccessors: !0
                        }) : null;
                        return a.g.sb(c, b, d, !0);
                    },
                    getBindingsString: function(b) {
                        switch (b.nodeType) {
                          case 1:
                            return b.getAttribute("data-bind");

                          case 8:
                            return a.e.Fc(b);

                          default:
                            return null;
                        }
                    },
                    parseBindingsString: function(b, d, c, e) {
                        try {
                            var f = this.ec, k = b + (e && e.valueAccessors || ""), h;
                            if (!(h = f[k])) {
                                var l, g = "with($context){with($data||{}){return{" + a.h.Ea(b, e) + "}}}";
                                l = new Function("$context", "$element", g);
                                h = f[k] = l;
                            }
                            return h(d, c);
                        } catch (m) {
                            throw m.message = "Unable to parse bindings.\nBindings value: " + b + "\nMessage: " + m.message, 
                            m;
                        }
                    }
                });
                a.L.instance = new a.L();
            })();
            a.b("bindingProvider", a.L);
            (function() {
                function b(a) {
                    return function() {
                        return a;
                    };
                }
                function d(a) {
                    return a();
                }
                function c(b) {
                    return a.a.pa(a.k.u(b), function(a, c) {
                        return function() {
                            return b()[c];
                        };
                    });
                }
                function e(d, g, e) {
                    return "function" === typeof d ? c(d.bind(null, g, e)) : a.a.pa(d, b);
                }
                function f(a, b) {
                    return c(this.getBindings.bind(this, a, b));
                }
                function k(b, c, d) {
                    var g, e = a.e.firstChild(c), f = a.L.instance, m = f.preprocessNode;
                    if (m) {
                        for (;g = e; ) e = a.e.nextSibling(g), m.call(f, g);
                        e = a.e.firstChild(c);
                    }
                    for (;g = e; ) e = a.e.nextSibling(g), h(b, g, d);
                }
                function h(b, c, d) {
                    var e = !0, f = 1 === c.nodeType;
                    f && a.e.Kb(c);
                    if (f && d || a.L.instance.nodeHasBindings(c)) e = g(c, null, b, d).shouldBindDescendants;
                    e && !x[a.a.v(c)] && k(b, c, !f);
                }
                function l(b) {
                    var c = [], d = {}, g = [];
                    a.a.A(b, function I(e) {
                        if (!d[e]) {
                            var f = a.getBindingHandler(e);
                            f && (f.after && (g.push(e), a.a.o(f.after, function(c) {
                                if (b[c]) {
                                    if (-1 !== a.a.m(g, c)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + g.join(", "));
                                    I(c);
                                }
                            }), g.length--), c.push({
                                key: e,
                                Eb: f
                            }));
                            d[e] = !0;
                        }
                    });
                    return c;
                }
                function g(b, c, g, e) {
                    var m = a.a.f.get(b, q);
                    if (!c) {
                        if (m) throw Error("You cannot apply bindings multiple times to the same element.");
                        a.a.f.set(b, q, !0);
                    }
                    !m && e && a.Tb(b, g);
                    var h;
                    if (c && "function" !== typeof c) h = c; else {
                        var k = a.L.instance, x = k.getBindingAccessors || f, n = a.j(function() {
                            (h = c ? c(g, b) : x.call(k, b, g)) && g.K && g.K();
                            return h;
                        }, null, {
                            q: b
                        });
                        h && n.$() || (n = null);
                    }
                    var u;
                    if (h) {
                        var w = n ? function(a) {
                            return function() {
                                return d(n()[a]);
                            };
                        } : function(a) {
                            return h[a];
                        }, y = function() {
                            return a.a.pa(n ? n() : h, d);
                        };
                        y.get = function(a) {
                            return h[a] && d(w(a));
                        };
                        y.has = function(a) {
                            return a in h;
                        };
                        e = l(h);
                        a.a.o(e, function(c) {
                            var d = c.Eb.init, e = c.Eb.update, f = c.key;
                            if (8 === b.nodeType && !a.e.R[f]) throw Error("The binding '" + f + "' cannot be used with virtual elements");
                            try {
                                "function" == typeof d && a.k.u(function() {
                                    var a = d(b, w(f), y, g.$data, g);
                                    if (a && a.controlsDescendantBindings) {
                                        if (u !== p) throw Error("Multiple bindings (" + u + " and " + f + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                        u = f;
                                    }
                                }), "function" == typeof e && a.j(function() {
                                    e(b, w(f), y, g.$data, g);
                                }, null, {
                                    q: b
                                });
                            } catch (m) {
                                throw m.message = 'Unable to process binding "' + f + ": " + h[f] + '"\nMessage: ' + m.message, 
                                m;
                            }
                        });
                    }
                    return {
                        shouldBindDescendants: u === p
                    };
                }
                function m(b) {
                    return b && b instanceof a.N ? b : new a.N(b);
                }
                a.d = {};
                var x = {
                    script: !0,
                    textarea: !0
                };
                a.getBindingHandler = function(b) {
                    return a.d[b];
                };
                a.N = function(b, c, d, g) {
                    var e = this, f = "function" == typeof b && !a.F(b), m, l = a.j(function() {
                        var m = f ? b() : b, h = a.a.c(m);
                        c ? (c.K && c.K(), a.a.extend(e, c), l && (e.K = l)) : (e.$parents = [], e.$root = h, 
                        e.ko = a);
                        e.$rawData = m;
                        e.$data = h;
                        d && (e[d] = h);
                        g && g(e, c, h);
                        return e.$data;
                    }, null, {
                        Pa: function() {
                            return m && !a.a.tb(m);
                        },
                        q: !0
                    });
                    l.$() && (e.K = l, l.equalityComparer = null, m = [], l.Zb = function(b) {
                        m.push(b);
                        a.a.C.fa(b, function(b) {
                            a.a.ya(m, b);
                            m.length || (l.p(), e.K = l = p);
                        });
                    });
                };
                a.N.prototype.createChildContext = function(b, c, d) {
                    return new a.N(b, this, c, function(a, b) {
                        a.$parentContext = b;
                        a.$parent = b.$data;
                        a.$parents = (b.$parents || []).slice(0);
                        a.$parents.unshift(a.$parent);
                        d && d(a);
                    });
                };
                a.N.prototype.extend = function(b) {
                    return new a.N(this.K || this.$data, this, null, function(c, d) {
                        c.$rawData = d.$rawData;
                        a.a.extend(c, "function" == typeof b ? b() : b);
                    });
                };
                var q = a.a.f.I(), n = a.a.f.I();
                a.Tb = function(b, c) {
                    if (2 == arguments.length) a.a.f.set(b, n, c), c.K && c.K.Zb(b); else return a.a.f.get(b, n);
                };
                a.va = function(b, c, d) {
                    1 === b.nodeType && a.e.Kb(b);
                    return g(b, c, m(d), !0);
                };
                a.cc = function(b, c, d) {
                    d = m(d);
                    return a.va(b, e(c, d, b), d);
                };
                a.Ja = function(a, b) {
                    1 !== b.nodeType && 8 !== b.nodeType || k(m(a), b, !0);
                };
                a.ub = function(a, b) {
                    !u && y.jQuery && (u = y.jQuery);
                    if (b && 1 !== b.nodeType && 8 !== b.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                    b = b || y.document.body;
                    h(m(a), b, !0);
                };
                a.Oa = function(b) {
                    switch (b.nodeType) {
                      case 1:
                      case 8:
                        var c = a.Tb(b);
                        if (c) return c;
                        if (b.parentNode) return a.Oa(b.parentNode);
                    }
                    return p;
                };
                a.gc = function(b) {
                    return (b = a.Oa(b)) ? b.$data : p;
                };
                a.b("bindingHandlers", a.d);
                a.b("applyBindings", a.ub);
                a.b("applyBindingsToDescendants", a.Ja);
                a.b("applyBindingAccessorsToNode", a.va);
                a.b("applyBindingsToNode", a.cc);
                a.b("contextFor", a.Oa);
                a.b("dataFor", a.gc);
            })();
            (function(b) {
                function d(d, e) {
                    var g = f.hasOwnProperty(d) ? f[d] : b, m;
                    g ? g.U(e) : (g = f[d] = new a.Q(), g.U(e), c(d, function(a, b) {
                        var c = !(!b || !b.synchronous);
                        k[d] = {
                            definition: a,
                            tc: c
                        };
                        delete f[d];
                        m || c ? g.notifySubscribers(a) : setTimeout(function() {
                            g.notifySubscribers(a);
                        }, 0);
                    }), m = !0);
                }
                function c(a, b) {
                    e("getConfig", [ a ], function(c) {
                        c ? e("loadComponent", [ a, c ], function(a) {
                            b(a, c);
                        }) : b(null, null);
                    });
                }
                function e(c, d, g, f) {
                    f || (f = a.g.loaders.slice(0));
                    var k = f.shift();
                    if (k) {
                        var q = k[c];
                        if (q) {
                            var n = !1;
                            if (q.apply(k, d.concat(function(a) {
                                n ? g(null) : null !== a ? g(a) : e(c, d, g, f);
                            })) !== b && (n = !0, !k.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
                        } else e(c, d, g, f);
                    } else g(null);
                }
                var f = {}, k = {};
                a.g = {
                    get: function(c, e) {
                        var g = k.hasOwnProperty(c) ? k[c] : b;
                        g ? g.tc ? a.k.u(function() {
                            e(g.definition);
                        }) : setTimeout(function() {
                            e(g.definition);
                        }, 0) : d(c, e);
                    },
                    zb: function(a) {
                        delete k[a];
                    },
                    ob: e
                };
                a.g.loaders = [];
                a.b("components", a.g);
                a.b("components.get", a.g.get);
                a.b("components.clearCachedDefinition", a.g.zb);
            })();
            (function() {
                function b(b, c, d, e) {
                    function k() {
                        0 === --v && e(h);
                    }
                    var h = {}, v = 2, t = d.template;
                    d = d.viewModel;
                    t ? f(c, t, function(c) {
                        a.g.ob("loadTemplate", [ b, c ], function(a) {
                            h.template = a;
                            k();
                        });
                    }) : k();
                    d ? f(c, d, function(c) {
                        a.g.ob("loadViewModel", [ b, c ], function(a) {
                            h[l] = a;
                            k();
                        });
                    }) : k();
                }
                function d(a, b, c) {
                    if ("function" === typeof b) c(function(a) {
                        return new b(a);
                    }); else if ("function" === typeof b[l]) c(b[l]); else if ("instance" in b) {
                        var e = b.instance;
                        c(function() {
                            return e;
                        });
                    } else "viewModel" in b ? d(a, b.viewModel, c) : a("Unknown viewModel value: " + b);
                }
                function c(b) {
                    switch (a.a.v(b)) {
                      case "script":
                        return a.a.ca(b.text);

                      case "textarea":
                        return a.a.ca(b.value);

                      case "template":
                        if (e(b.content)) return a.a.la(b.content.childNodes);
                    }
                    return a.a.la(b.childNodes);
                }
                function e(a) {
                    return y.DocumentFragment ? a instanceof DocumentFragment : a && 11 === a.nodeType;
                }
                function f(a, b, c) {
                    "string" === typeof b.require ? O || y.require ? (O || y.require)([ b.require ], c) : a("Uses require, but no AMD loader is present") : c(b);
                }
                function k(a) {
                    return function(b) {
                        throw Error("Component '" + a + "': " + b);
                    };
                }
                var h = {};
                a.g.register = function(b, c) {
                    if (!c) throw Error("Invalid configuration for " + b);
                    if (a.g.Xa(b)) throw Error("Component " + b + " is already registered");
                    h[b] = c;
                };
                a.g.Xa = function(a) {
                    return a in h;
                };
                a.g.Ec = function(b) {
                    delete h[b];
                    a.g.zb(b);
                };
                a.g.Ab = {
                    getConfig: function(a, b) {
                        b(h.hasOwnProperty(a) ? h[a] : null);
                    },
                    loadComponent: function(a, c, d) {
                        var e = k(a);
                        f(e, c, function(c) {
                            b(a, e, c, d);
                        });
                    },
                    loadTemplate: function(b, d, f) {
                        b = k(b);
                        if ("string" === typeof d) f(a.a.ca(d)); else if (d instanceof Array) f(d); else if (e(d)) f(a.a.O(d.childNodes)); else if (d.element) if (d = d.element, 
                        y.HTMLElement ? d instanceof HTMLElement : d && d.tagName && 1 === d.nodeType) f(c(d)); else if ("string" === typeof d) {
                            var l = w.getElementById(d);
                            l ? f(c(l)) : b("Cannot find element with ID " + d);
                        } else b("Unknown element type: " + d); else b("Unknown template value: " + d);
                    },
                    loadViewModel: function(a, b, c) {
                        d(k(a), b, c);
                    }
                };
                var l = "createViewModel";
                a.b("components.register", a.g.register);
                a.b("components.isRegistered", a.g.Xa);
                a.b("components.unregister", a.g.Ec);
                a.b("components.defaultLoader", a.g.Ab);
                a.g.loaders.push(a.g.Ab);
                a.g.$b = h;
            })();
            (function() {
                function b(b, e) {
                    var f = b.getAttribute("params");
                    if (f) {
                        var f = d.parseBindingsString(f, e, b, {
                            valueAccessors: !0,
                            bindingParams: !0
                        }), f = a.a.pa(f, function(d) {
                            return a.w(d, null, {
                                q: b
                            });
                        }), k = a.a.pa(f, function(d) {
                            var e = d.B();
                            return d.$() ? a.w({
                                read: function() {
                                    return a.a.c(d());
                                },
                                write: a.Da(e) && function(a) {
                                    d()(a);
                                },
                                q: b
                            }) : e;
                        });
                        k.hasOwnProperty("$raw") || (k.$raw = f);
                        return k;
                    }
                    return {
                        $raw: {}
                    };
                }
                a.g.getComponentNameForNode = function(b) {
                    b = a.a.v(b);
                    return a.g.Xa(b) && b;
                };
                a.g.sb = function(c, d, f, k) {
                    if (1 === d.nodeType) {
                        var h = a.g.getComponentNameForNode(d);
                        if (h) {
                            c = c || {};
                            if (c.component) throw Error('Cannot use the "component" binding on a custom element matching a component');
                            var l = {
                                name: h,
                                params: b(d, f)
                            };
                            c.component = k ? function() {
                                return l;
                            } : l;
                        }
                    }
                    return c;
                };
                var d = new a.L();
                9 > a.a.M && (a.g.register = function(a) {
                    return function(b) {
                        w.createElement(b);
                        return a.apply(this, arguments);
                    };
                }(a.g.register), w.createDocumentFragment = function(b) {
                    return function() {
                        var d = b(), f = a.g.$b, k;
                        for (k in f) f.hasOwnProperty(k) && d.createElement(k);
                        return d;
                    };
                }(w.createDocumentFragment));
            })();
            (function(b) {
                function d(b, c, d) {
                    c = c.template;
                    if (!c) throw Error("Component '" + b + "' has no template");
                    b = a.a.la(c);
                    a.e.T(d, b);
                }
                function c(a, b, c, d) {
                    var e = a.createViewModel;
                    return e ? e.call(a, d, {
                        element: b,
                        templateNodes: c
                    }) : d;
                }
                var e = 0;
                a.d.component = {
                    init: function(f, k, h, l, g) {
                        function m() {
                            var a = x && x.dispose;
                            "function" === typeof a && a.call(x);
                            q = null;
                        }
                        var x, q, n = a.a.O(a.e.childNodes(f));
                        a.a.C.fa(f, m);
                        a.w(function() {
                            var l = a.a.c(k()), h, t;
                            "string" === typeof l ? h = l : (h = a.a.c(l.name), t = a.a.c(l.params));
                            if (!h) throw Error("No component name specified");
                            var p = q = ++e;
                            a.g.get(h, function(e) {
                                if (q === p) {
                                    m();
                                    if (!e) throw Error("Unknown component '" + h + "'");
                                    d(h, e, f);
                                    var l = c(e, f, n, t);
                                    e = g.createChildContext(l, b, function(a) {
                                        a.$component = l;
                                        a.$componentTemplateNodes = n;
                                    });
                                    x = l;
                                    a.Ja(e, f);
                                }
                            });
                        }, null, {
                            q: f
                        });
                        return {
                            controlsDescendantBindings: !0
                        };
                    }
                };
                a.e.R.component = !0;
            })();
            var P = {
                "class": "className",
                "for": "htmlFor"
            };
            a.d.attr = {
                update: function(b, d) {
                    var c = a.a.c(d()) || {};
                    a.a.A(c, function(c, d) {
                        d = a.a.c(d);
                        var k = !1 === d || null === d || d === p;
                        k && b.removeAttribute(c);
                        8 >= a.a.M && c in P ? (c = P[c], k ? b.removeAttribute(c) : b[c] = d) : k || b.setAttribute(c, d.toString());
                        "name" === c && a.a.Rb(b, k ? "" : d.toString());
                    });
                }
            };
            (function() {
                a.d.checked = {
                    after: [ "value", "attr" ],
                    init: function(b, d, c) {
                        function e() {
                            var e = b.checked, f = x ? k() : e;
                            if (!a.Z.Ca() && (!l || e)) {
                                var h = a.k.u(d);
                                g ? m !== f ? (e && (a.a.ga(h, f, !0), a.a.ga(h, m, !1)), m = f) : a.a.ga(h, f, e) : a.h.ra(h, c, "checked", f, !0);
                            }
                        }
                        function f() {
                            var c = a.a.c(d());
                            b.checked = g ? 0 <= a.a.m(c, k()) : h ? c : k() === c;
                        }
                        var k = a.Nb(function() {
                            return c.has("checkedValue") ? a.a.c(c.get("checkedValue")) : c.has("value") ? a.a.c(c.get("value")) : b.value;
                        }), h = "checkbox" == b.type, l = "radio" == b.type;
                        if (h || l) {
                            var g = h && a.a.c(d()) instanceof Array, m = g ? k() : p, x = l || g;
                            l && !b.name && a.d.uniqueName.init(b, function() {
                                return !0;
                            });
                            a.w(e, null, {
                                q: b
                            });
                            a.a.n(b, "click", e);
                            a.w(f, null, {
                                q: b
                            });
                        }
                    }
                };
                a.h.V.checked = !0;
                a.d.checkedValue = {
                    update: function(b, d) {
                        b.value = a.a.c(d());
                    }
                };
            })();
            a.d.css = {
                update: function(b, d) {
                    var c = a.a.c(d());
                    null !== c && "object" == typeof c ? a.a.A(c, function(c, d) {
                        d = a.a.c(d);
                        a.a.Ia(b, c, d);
                    }) : (c = String(c || ""), a.a.Ia(b, b.__ko__cssValue, !1), b.__ko__cssValue = c, 
                    a.a.Ia(b, c, !0));
                }
            };
            a.d.enable = {
                update: function(b, d) {
                    var c = a.a.c(d());
                    c && b.disabled ? b.removeAttribute("disabled") : c || b.disabled || (b.disabled = !0);
                }
            };
            a.d.disable = {
                update: function(b, d) {
                    a.d.enable.update(b, function() {
                        return !a.a.c(d());
                    });
                }
            };
            a.d.event = {
                init: function(b, d, c, e, f) {
                    var k = d() || {};
                    a.a.A(k, function(h) {
                        "string" == typeof h && a.a.n(b, h, function(b) {
                            var g, m = d()[h];
                            if (m) {
                                try {
                                    var k = a.a.O(arguments);
                                    e = f.$data;
                                    k.unshift(e);
                                    g = m.apply(e, k);
                                } finally {
                                    !0 !== g && (b.preventDefault ? b.preventDefault() : b.returnValue = !1);
                                }
                                !1 === c.get(h + "Bubble") && (b.cancelBubble = !0, b.stopPropagation && b.stopPropagation());
                            }
                        });
                    });
                }
            };
            a.d.foreach = {
                Ib: function(b) {
                    return function() {
                        var d = b(), c = a.a.cb(d);
                        if (!c || "number" == typeof c.length) return {
                            foreach: d,
                            templateEngine: a.P.Va
                        };
                        a.a.c(d);
                        return {
                            foreach: c.data,
                            as: c.as,
                            includeDestroyed: c.includeDestroyed,
                            afterAdd: c.afterAdd,
                            beforeRemove: c.beforeRemove,
                            afterRender: c.afterRender,
                            beforeMove: c.beforeMove,
                            afterMove: c.afterMove,
                            templateEngine: a.P.Va
                        };
                    };
                },
                init: function(b, d) {
                    return a.d.template.init(b, a.d.foreach.Ib(d));
                },
                update: function(b, d, c, e, f) {
                    return a.d.template.update(b, a.d.foreach.Ib(d), c, e, f);
                }
            };
            a.h.ka.foreach = !1;
            a.e.R.foreach = !0;
            a.d.hasfocus = {
                init: function(b, d, c) {
                    function e(e) {
                        b.__ko_hasfocusUpdating = !0;
                        var f = b.ownerDocument;
                        if ("activeElement" in f) {
                            var g;
                            try {
                                g = f.activeElement;
                            } catch (m) {
                                g = f.body;
                            }
                            e = g === b;
                        }
                        f = d();
                        a.h.ra(f, c, "hasfocus", e, !0);
                        b.__ko_hasfocusLastValue = e;
                        b.__ko_hasfocusUpdating = !1;
                    }
                    var f = e.bind(null, !0), k = e.bind(null, !1);
                    a.a.n(b, "focus", f);
                    a.a.n(b, "focusin", f);
                    a.a.n(b, "blur", k);
                    a.a.n(b, "focusout", k);
                },
                update: function(b, d) {
                    var c = !!a.a.c(d());
                    b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue === c || (c ? b.focus() : b.blur(), 
                    a.k.u(a.a.qa, null, [ b, c ? "focusin" : "focusout" ]));
                }
            };
            a.h.V.hasfocus = !0;
            a.d.hasFocus = a.d.hasfocus;
            a.h.V.hasFocus = !0;
            a.d.html = {
                init: function() {
                    return {
                        controlsDescendantBindings: !0
                    };
                },
                update: function(b, d) {
                    a.a.gb(b, d());
                }
            };
            K("if");
            K("ifnot", !1, !0);
            K("with", !0, !1, function(a, d) {
                return a.createChildContext(d);
            });
            var L = {};
            a.d.options = {
                init: function(b) {
                    if ("select" !== a.a.v(b)) throw Error("options binding applies only to SELECT elements");
                    for (;0 < b.length; ) b.remove(0);
                    return {
                        controlsDescendantBindings: !0
                    };
                },
                update: function(b, d, c) {
                    function e() {
                        return a.a.xa(b.options, function(a) {
                            return a.selected;
                        });
                    }
                    function f(a, b, c) {
                        var d = typeof b;
                        return "function" == d ? b(a) : "string" == d ? a[b] : c;
                    }
                    function k(d, e) {
                        if (r && m) a.i.Y(b, a.a.c(c.get("value")), !0); else if (n.length) {
                            var g = 0 <= a.a.m(n, a.i.s(e[0]));
                            a.a.Sb(e[0], g);
                            r && !g && a.k.u(a.a.qa, null, [ b, "change" ]);
                        }
                    }
                    var h = b.multiple, l = 0 != b.length && h ? b.scrollTop : null, g = a.a.c(d()), m = c.get("valueAllowUnset") && c.has("value"), x = c.get("optionsIncludeDestroyed");
                    d = {};
                    var q, n = [];
                    m || (h ? n = a.a.Ka(e(), a.i.s) : 0 <= b.selectedIndex && n.push(a.i.s(b.options[b.selectedIndex])));
                    g && ("undefined" == typeof g.length && (g = [ g ]), q = a.a.xa(g, function(b) {
                        return x || b === p || null === b || !a.a.c(b._destroy);
                    }), c.has("optionsCaption") && (g = a.a.c(c.get("optionsCaption")), null !== g && g !== p && q.unshift(L)));
                    var r = !1;
                    d.beforeRemove = function(a) {
                        b.removeChild(a);
                    };
                    g = k;
                    c.has("optionsAfterRender") && "function" == typeof c.get("optionsAfterRender") && (g = function(b, d) {
                        k(0, d);
                        a.k.u(c.get("optionsAfterRender"), null, [ d[0], b !== L ? b : p ]);
                    });
                    a.a.fb(b, q, function(d, e, g) {
                        g.length && (n = !m && g[0].selected ? [ a.i.s(g[0]) ] : [], r = !0);
                        e = b.ownerDocument.createElement("option");
                        d === L ? (a.a.Ha(e, c.get("optionsCaption")), a.i.Y(e, p)) : (g = f(d, c.get("optionsValue"), d), 
                        a.i.Y(e, a.a.c(g)), d = f(d, c.get("optionsText"), g), a.a.Ha(e, d));
                        return [ e ];
                    }, d, g);
                    a.k.u(function() {
                        m ? a.i.Y(b, a.a.c(c.get("value")), !0) : (h ? n.length && e().length < n.length : n.length && 0 <= b.selectedIndex ? a.i.s(b.options[b.selectedIndex]) !== n[0] : n.length || 0 <= b.selectedIndex) && a.a.qa(b, "change");
                    });
                    a.a.kc(b);
                    l && 20 < Math.abs(l - b.scrollTop) && (b.scrollTop = l);
                }
            };
            a.d.options.ab = a.a.f.I();
            a.d.selectedOptions = {
                after: [ "options", "foreach" ],
                init: function(b, d, c) {
                    a.a.n(b, "change", function() {
                        var e = d(), f = [];
                        a.a.o(b.getElementsByTagName("option"), function(b) {
                            b.selected && f.push(a.i.s(b));
                        });
                        a.h.ra(e, c, "selectedOptions", f);
                    });
                },
                update: function(b, d) {
                    if ("select" != a.a.v(b)) throw Error("values binding applies only to SELECT elements");
                    var c = a.a.c(d());
                    c && "number" == typeof c.length && a.a.o(b.getElementsByTagName("option"), function(b) {
                        var d = 0 <= a.a.m(c, a.i.s(b));
                        a.a.Sb(b, d);
                    });
                }
            };
            a.h.V.selectedOptions = !0;
            a.d.style = {
                update: function(b, d) {
                    var c = a.a.c(d() || {});
                    a.a.A(c, function(c, d) {
                        d = a.a.c(d);
                        if (null === d || d === p || !1 === d) d = "";
                        b.style[c] = d;
                    });
                }
            };
            a.d.submit = {
                init: function(b, d, c, e, f) {
                    if ("function" != typeof d()) throw Error("The value for a submit binding must be a function");
                    a.a.n(b, "submit", function(a) {
                        var c, e = d();
                        try {
                            c = e.call(f.$data, b);
                        } finally {
                            !0 !== c && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
                        }
                    });
                }
            };
            a.d.text = {
                init: function() {
                    return {
                        controlsDescendantBindings: !0
                    };
                },
                update: function(b, d) {
                    a.a.Ha(b, d());
                }
            };
            a.e.R.text = !0;
            (function() {
                if (y && y.navigator) var b = function(a) {
                    if (a) return parseFloat(a[1]);
                }, d = y.opera && y.opera.version && parseInt(y.opera.version()), c = y.navigator.userAgent, e = b(c.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)), f = b(c.match(/Firefox\/([^ ]*)/));
                if (10 > a.a.M) var k = a.a.f.I(), h = a.a.f.I(), l = function(b) {
                    var c = this.activeElement;
                    (c = c && a.a.f.get(c, h)) && c(b);
                }, g = function(b, c) {
                    var d = b.ownerDocument;
                    a.a.f.get(d, k) || (a.a.f.set(d, k, !0), a.a.n(d, "selectionchange", l));
                    a.a.f.set(b, h, c);
                };
                a.d.textInput = {
                    init: function(b, c, l) {
                        function h(c, d) {
                            a.a.n(b, c, d);
                        }
                        function k() {
                            var d = a.a.c(c());
                            if (null === d || d === p) d = "";
                            w !== p && d === w ? setTimeout(k, 4) : b.value !== d && (u = d, b.value = d);
                        }
                        function v() {
                            A || (w = b.value, A = setTimeout(t, 4));
                        }
                        function t() {
                            clearTimeout(A);
                            w = A = p;
                            var d = b.value;
                            u !== d && (u = d, a.h.ra(c(), l, "textInput", d));
                        }
                        var u = b.value, A, w;
                        10 > a.a.M ? (h("propertychange", function(a) {
                            "value" === a.propertyName && t();
                        }), 8 == a.a.M && (h("keyup", t), h("keydown", t)), 8 <= a.a.M && (g(b, t), h("dragend", v))) : (h("input", t), 
                        5 > e && "textarea" === a.a.v(b) ? (h("keydown", v), h("paste", v), h("cut", v)) : 11 > d ? h("keydown", v) : 4 > f && (h("DOMAutoComplete", t), 
                        h("dragdrop", t), h("drop", t)));
                        h("change", t);
                        a.w(k, null, {
                            q: b
                        });
                    }
                };
                a.h.V.textInput = !0;
                a.d.textinput = {
                    preprocess: function(a, b, c) {
                        c("textInput", a);
                    }
                };
            })();
            a.d.uniqueName = {
                init: function(b, d) {
                    if (d()) {
                        var c = "ko_unique_" + ++a.d.uniqueName.fc;
                        a.a.Rb(b, c);
                    }
                }
            };
            a.d.uniqueName.fc = 0;
            a.d.value = {
                after: [ "options", "foreach" ],
                init: function(b, d, c) {
                    if ("input" != b.tagName.toLowerCase() || "checkbox" != b.type && "radio" != b.type) {
                        var e = [ "change" ], f = c.get("valueUpdate"), k = !1, h = null;
                        f && ("string" == typeof f && (f = [ f ]), a.a.ia(e, f), e = a.a.wb(e));
                        var l = function() {
                            h = null;
                            k = !1;
                            var e = d(), g = a.i.s(b);
                            a.h.ra(e, c, "value", g);
                        };
                        !a.a.M || "input" != b.tagName.toLowerCase() || "text" != b.type || "off" == b.autocomplete || b.form && "off" == b.form.autocomplete || -1 != a.a.m(e, "propertychange") || (a.a.n(b, "propertychange", function() {
                            k = !0;
                        }), a.a.n(b, "focus", function() {
                            k = !1;
                        }), a.a.n(b, "blur", function() {
                            k && l();
                        }));
                        a.a.o(e, function(c) {
                            var d = l;
                            a.a.Dc(c, "after") && (d = function() {
                                h = a.i.s(b);
                                setTimeout(l, 0);
                            }, c = c.substring(5));
                            a.a.n(b, c, d);
                        });
                        var g = function() {
                            var e = a.a.c(d()), f = a.i.s(b);
                            if (null !== h && e === h) setTimeout(g, 0); else if (e !== f) if ("select" === a.a.v(b)) {
                                var l = c.get("valueAllowUnset"), f = function() {
                                    a.i.Y(b, e, l);
                                };
                                f();
                                l || e === a.i.s(b) ? setTimeout(f, 0) : a.k.u(a.a.qa, null, [ b, "change" ]);
                            } else a.i.Y(b, e);
                        };
                        a.w(g, null, {
                            q: b
                        });
                    } else a.va(b, {
                        checkedValue: d
                    });
                },
                update: function() {}
            };
            a.h.V.value = !0;
            a.d.visible = {
                update: function(b, d) {
                    var c = a.a.c(d()), e = "none" != b.style.display;
                    c && !e ? b.style.display = "" : !c && e && (b.style.display = "none");
                }
            };
            (function(b) {
                a.d[b] = {
                    init: function(d, c, e, f, k) {
                        return a.d.event.init.call(this, d, function() {
                            var a = {};
                            a[b] = c();
                            return a;
                        }, e, f, k);
                    }
                };
            })("click");
            a.J = function() {};
            a.J.prototype.renderTemplateSource = function() {
                throw Error("Override renderTemplateSource");
            };
            a.J.prototype.createJavaScriptEvaluatorBlock = function() {
                throw Error("Override createJavaScriptEvaluatorBlock");
            };
            a.J.prototype.makeTemplateSource = function(b, d) {
                if ("string" == typeof b) {
                    d = d || w;
                    var c = d.getElementById(b);
                    if (!c) throw Error("Cannot find template with ID " + b);
                    return new a.t.l(c);
                }
                if (1 == b.nodeType || 8 == b.nodeType) return new a.t.ha(b);
                throw Error("Unknown template type: " + b);
            };
            a.J.prototype.renderTemplate = function(a, d, c, e) {
                a = this.makeTemplateSource(a, e);
                return this.renderTemplateSource(a, d, c, e);
            };
            a.J.prototype.isTemplateRewritten = function(a, d) {
                return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(a, d).data("isRewritten");
            };
            a.J.prototype.rewriteTemplate = function(a, d, c) {
                a = this.makeTemplateSource(a, c);
                d = d(a.text());
                a.text(d);
                a.data("isRewritten", !0);
            };
            a.b("templateEngine", a.J);
            a.kb = function() {
                function b(b, c, d, h) {
                    b = a.h.bb(b);
                    for (var l = a.h.ka, g = 0; g < b.length; g++) {
                        var m = b[g].key;
                        if (l.hasOwnProperty(m)) {
                            var x = l[m];
                            if ("function" === typeof x) {
                                if (m = x(b[g].value)) throw Error(m);
                            } else if (!x) throw Error("This template engine does not support the '" + m + "' binding within its templates");
                        }
                    }
                    d = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.h.Ea(b, {
                        valueAccessors: !0
                    }) + " } })()},'" + d.toLowerCase() + "')";
                    return h.createJavaScriptEvaluatorBlock(d) + c;
                }
                var d = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi, c = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
                return {
                    lc: function(b, c, d) {
                        c.isTemplateRewritten(b, d) || c.rewriteTemplate(b, function(b) {
                            return a.kb.xc(b, c);
                        }, d);
                    },
                    xc: function(a, f) {
                        return a.replace(d, function(a, c, d, e, m) {
                            return b(m, c, d, f);
                        }).replace(c, function(a, c) {
                            return b(c, "<!-- ko -->", "#comment", f);
                        });
                    },
                    dc: function(b, c) {
                        return a.H.$a(function(d, h) {
                            var l = d.nextSibling;
                            l && l.nodeName.toLowerCase() === c && a.va(l, b, h);
                        });
                    }
                };
            }();
            a.b("__tr_ambtns", a.kb.dc);
            (function() {
                a.t = {};
                a.t.l = function(a) {
                    this.l = a;
                };
                a.t.l.prototype.text = function() {
                    var b = a.a.v(this.l), b = "script" === b ? "text" : "textarea" === b ? "value" : "innerHTML";
                    if (0 == arguments.length) return this.l[b];
                    var d = arguments[0];
                    "innerHTML" === b ? a.a.gb(this.l, d) : this.l[b] = d;
                };
                var b = a.a.f.I() + "_";
                a.t.l.prototype.data = function(c) {
                    if (1 === arguments.length) return a.a.f.get(this.l, b + c);
                    a.a.f.set(this.l, b + c, arguments[1]);
                };
                var d = a.a.f.I();
                a.t.ha = function(a) {
                    this.l = a;
                };
                a.t.ha.prototype = new a.t.l();
                a.t.ha.prototype.text = function() {
                    if (0 == arguments.length) {
                        var b = a.a.f.get(this.l, d) || {};
                        b.lb === p && b.Na && (b.lb = b.Na.innerHTML);
                        return b.lb;
                    }
                    a.a.f.set(this.l, d, {
                        lb: arguments[0]
                    });
                };
                a.t.l.prototype.nodes = function() {
                    if (0 == arguments.length) return (a.a.f.get(this.l, d) || {}).Na;
                    a.a.f.set(this.l, d, {
                        Na: arguments[0]
                    });
                };
                a.b("templateSources", a.t);
                a.b("templateSources.domElement", a.t.l);
                a.b("templateSources.anonymousTemplate", a.t.ha);
            })();
            (function() {
                function b(b, c, d) {
                    var e;
                    for (c = a.e.nextSibling(c); b && (e = b) !== c; ) b = a.e.nextSibling(e), d(e, b);
                }
                function d(c, d) {
                    if (c.length) {
                        var e = c[0], f = c[c.length - 1], h = e.parentNode, k = a.L.instance, r = k.preprocessNode;
                        if (r) {
                            b(e, f, function(a, b) {
                                var c = a.previousSibling, d = r.call(k, a);
                                d && (a === e && (e = d[0] || b), a === f && (f = d[d.length - 1] || c));
                            });
                            c.length = 0;
                            if (!e) return;
                            e === f ? c.push(e) : (c.push(e, f), a.a.na(c, h));
                        }
                        b(e, f, function(b) {
                            1 !== b.nodeType && 8 !== b.nodeType || a.ub(d, b);
                        });
                        b(e, f, function(b) {
                            1 !== b.nodeType && 8 !== b.nodeType || a.H.Xb(b, [ d ]);
                        });
                        a.a.na(c, h);
                    }
                }
                function c(a) {
                    return a.nodeType ? a : 0 < a.length ? a[0] : null;
                }
                function e(b, e, f, h, q) {
                    q = q || {};
                    var n = (b && c(b) || f || {}).ownerDocument, r = q.templateEngine || k;
                    a.kb.lc(f, r, n);
                    f = r.renderTemplate(f, h, q, n);
                    if ("number" != typeof f.length || 0 < f.length && "number" != typeof f[0].nodeType) throw Error("Template engine must return an array of DOM nodes");
                    n = !1;
                    switch (e) {
                      case "replaceChildren":
                        a.e.T(b, f);
                        n = !0;
                        break;

                      case "replaceNode":
                        a.a.Qb(b, f);
                        n = !0;
                        break;

                      case "ignoreTargetNode":
                        break;

                      default:
                        throw Error("Unknown renderMode: " + e);
                    }
                    n && (d(f, h), q.afterRender && a.k.u(q.afterRender, null, [ f, h.$data ]));
                    return f;
                }
                function f(b, c, d) {
                    return a.F(b) ? b() : "function" === typeof b ? b(c, d) : b;
                }
                var k;
                a.hb = function(b) {
                    if (b != p && !(b instanceof a.J)) throw Error("templateEngine must inherit from ko.templateEngine");
                    k = b;
                };
                a.eb = function(b, d, h, x, q) {
                    h = h || {};
                    if ((h.templateEngine || k) == p) throw Error("Set a template engine before calling renderTemplate");
                    q = q || "replaceChildren";
                    if (x) {
                        var n = c(x);
                        return a.j(function() {
                            var k = d && d instanceof a.N ? d : new a.N(a.a.c(d)), p = f(b, k.$data, k), k = e(x, q, p, k, h);
                            "replaceNode" == q && (x = k, n = c(x));
                        }, null, {
                            Pa: function() {
                                return !n || !a.a.Qa(n);
                            },
                            q: n && "replaceNode" == q ? n.parentNode : n
                        });
                    }
                    return a.H.$a(function(c) {
                        a.eb(b, d, h, c, "replaceNode");
                    });
                };
                a.Cc = function(b, c, h, k, q) {
                    function n(a, b) {
                        d(b, v);
                        h.afterRender && h.afterRender(b, a);
                        v = null;
                    }
                    function r(a, c) {
                        v = q.createChildContext(a, h.as, function(a) {
                            a.$index = c;
                        });
                        var d = f(b, a, v);
                        return e(null, "ignoreTargetNode", d, v, h);
                    }
                    var v;
                    return a.j(function() {
                        var b = a.a.c(c) || [];
                        "undefined" == typeof b.length && (b = [ b ]);
                        b = a.a.xa(b, function(b) {
                            return h.includeDestroyed || b === p || null === b || !a.a.c(b._destroy);
                        });
                        a.k.u(a.a.fb, null, [ k, b, r, h, n ]);
                    }, null, {
                        q: k
                    });
                };
                var h = a.a.f.I();
                a.d.template = {
                    init: function(b, c) {
                        var d = a.a.c(c());
                        if ("string" == typeof d || d.name) a.e.ma(b); else {
                            if ("nodes" in d) {
                                if (d = d.nodes || [], a.F(d)) throw Error('The "nodes" option must be a plain, non-observable array.');
                            } else d = a.e.childNodes(b);
                            d = a.a.Jb(d);
                            new a.t.ha(b).nodes(d);
                        }
                        return {
                            controlsDescendantBindings: !0
                        };
                    },
                    update: function(b, c, d, e, f) {
                        var k = c(), r;
                        c = a.a.c(k);
                        d = !0;
                        e = null;
                        "string" == typeof c ? c = {} : (k = c.name, "if" in c && (d = a.a.c(c["if"])), 
                        d && "ifnot" in c && (d = !a.a.c(c.ifnot)), r = a.a.c(c.data));
                        "foreach" in c ? e = a.Cc(k || b, d && c.foreach || [], c, b, f) : d ? (f = "data" in c ? f.createChildContext(r, c.as) : f, 
                        e = a.eb(k || b, f, c, b)) : a.e.ma(b);
                        f = e;
                        (r = a.a.f.get(b, h)) && "function" == typeof r.p && r.p();
                        a.a.f.set(b, h, f && f.$() ? f : p);
                    }
                };
                a.h.ka.template = function(b) {
                    b = a.h.bb(b);
                    return 1 == b.length && b[0].unknown || a.h.vc(b, "name") ? null : "This template engine does not support anonymous templates nested within its templates";
                };
                a.e.R.template = !0;
            })();
            a.b("setTemplateEngine", a.hb);
            a.b("renderTemplate", a.eb);
            a.a.Cb = function(a, d, c) {
                if (a.length && d.length) {
                    var e, f, k, h, l;
                    for (e = f = 0; (!c || e < c) && (h = a[f]); ++f) {
                        for (k = 0; l = d[k]; ++k) if (h.value === l.value) {
                            h.moved = l.index;
                            l.moved = h.index;
                            d.splice(k, 1);
                            e = k = 0;
                            break;
                        }
                        e += k;
                    }
                }
            };
            a.a.Ma = function() {
                function b(b, c, e, f, k) {
                    var h = Math.min, l = Math.max, g = [], m, p = b.length, q, n = c.length, r = n - p || 1, v = p + n + 1, t, u, w;
                    for (m = 0; m <= p; m++) for (u = t, g.push(t = []), w = h(n, m + r), q = l(0, m - 1); q <= w; q++) t[q] = q ? m ? b[m - 1] === c[q - 1] ? u[q - 1] : h(u[q] || v, t[q - 1] || v) + 1 : q + 1 : m + 1;
                    h = [];
                    l = [];
                    r = [];
                    m = p;
                    for (q = n; m || q; ) n = g[m][q] - 1, q && n === g[m][q - 1] ? l.push(h[h.length] = {
                        status: e,
                        value: c[--q],
                        index: q
                    }) : m && n === g[m - 1][q] ? r.push(h[h.length] = {
                        status: f,
                        value: b[--m],
                        index: m
                    }) : (--q, --m, k.sparse || h.push({
                        status: "retained",
                        value: c[q]
                    }));
                    a.a.Cb(l, r, 10 * p);
                    return h.reverse();
                }
                return function(a, c, e) {
                    e = "boolean" === typeof e ? {
                        dontLimitMoves: e
                    } : e || {};
                    a = a || [];
                    c = c || [];
                    return a.length <= c.length ? b(a, c, "added", "deleted", e) : b(c, a, "deleted", "added", e);
                };
            }();
            a.b("utils.compareArrays", a.a.Ma);
            (function() {
                function b(b, d, f, k, h) {
                    var l = [], g = a.j(function() {
                        var g = d(f, h, a.a.na(l, b)) || [];
                        0 < l.length && (a.a.Qb(l, g), k && a.k.u(k, null, [ f, g, h ]));
                        l.length = 0;
                        a.a.ia(l, g);
                    }, null, {
                        q: b,
                        Pa: function() {
                            return !a.a.tb(l);
                        }
                    });
                    return {
                        aa: l,
                        j: g.$() ? g : p
                    };
                }
                var d = a.a.f.I();
                a.a.fb = function(c, e, f, k, h) {
                    function l(b, d) {
                        s = u[d];
                        t !== d && (z[b] = s);
                        s.Ua(t++);
                        a.a.na(s.aa, c);
                        r.push(s);
                        y.push(s);
                    }
                    function g(b, c) {
                        if (b) for (var d = 0, e = c.length; d < e; d++) c[d] && a.a.o(c[d].aa, function(a) {
                            b(a, d, c[d].wa);
                        });
                    }
                    e = e || [];
                    k = k || {};
                    var m = a.a.f.get(c, d) === p, u = a.a.f.get(c, d) || [], q = a.a.Ka(u, function(a) {
                        return a.wa;
                    }), n = a.a.Ma(q, e, k.dontLimitMoves), r = [], v = 0, t = 0, w = [], y = [];
                    e = [];
                    for (var z = [], q = [], s, C = 0, D, E; D = n[C]; C++) switch (E = D.moved, D.status) {
                      case "deleted":
                        E === p && (s = u[v], s.j && s.j.p(), w.push.apply(w, a.a.na(s.aa, c)), k.beforeRemove && (e[C] = s, 
                        y.push(s)));
                        v++;
                        break;

                      case "retained":
                        l(C, v++);
                        break;

                      case "added":
                        E !== p ? l(C, E) : (s = {
                            wa: D.value,
                            Ua: a.r(t++)
                        }, r.push(s), y.push(s), m || (q[C] = s));
                    }
                    g(k.beforeMove, z);
                    a.a.o(w, k.beforeRemove ? a.S : a.removeNode);
                    for (var C = 0, m = a.e.firstChild(c), H; s = y[C]; C++) {
                        s.aa || a.a.extend(s, b(c, f, s.wa, h, s.Ua));
                        for (v = 0; n = s.aa[v]; m = n.nextSibling, H = n, v++) n !== m && a.e.Fb(c, n, H);
                        !s.rc && h && (h(s.wa, s.aa, s.Ua), s.rc = !0);
                    }
                    g(k.beforeRemove, e);
                    g(k.afterMove, z);
                    g(k.afterAdd, q);
                    a.a.f.set(c, d, r);
                };
            })();
            a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.fb);
            a.P = function() {
                this.allowTemplateRewriting = !1;
            };
            a.P.prototype = new a.J();
            a.P.prototype.renderTemplateSource = function(b, d, c, e) {
                if (d = (9 > a.a.M ? 0 : b.nodes) ? b.nodes() : null) return a.a.O(d.cloneNode(!0).childNodes);
                b = b.text();
                return a.a.ca(b, e);
            };
            a.P.Va = new a.P();
            a.hb(a.P.Va);
            a.b("nativeTemplateEngine", a.P);
            (function() {
                a.Ya = function() {
                    var a = this.uc = function() {
                        if (!u || !u.tmpl) return 0;
                        try {
                            if (0 <= u.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2;
                        } catch (a) {}
                        return 1;
                    }();
                    this.renderTemplateSource = function(b, e, f, k) {
                        k = k || w;
                        f = f || {};
                        if (2 > a) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                        var h = b.data("precompiled");
                        h || (h = b.text() || "", h = u.template(null, "{{ko_with $item.koBindingContext}}" + h + "{{/ko_with}}"), 
                        b.data("precompiled", h));
                        b = [ e.$data ];
                        e = u.extend({
                            koBindingContext: e
                        }, f.templateOptions);
                        e = u.tmpl(h, b, e);
                        e.appendTo(k.createElement("div"));
                        u.fragments = {};
                        return e;
                    };
                    this.createJavaScriptEvaluatorBlock = function(a) {
                        return "{{ko_code ((function() { return " + a + " })()) }}";
                    };
                    this.addTemplate = function(a, b) {
                        w.write("<script type='text/html' id='" + a + "'>" + b + "</script>");
                    };
                    0 < a && (u.tmpl.tag.ko_code = {
                        open: "__.push($1 || '');"
                    }, u.tmpl.tag.ko_with = {
                        open: "with($1) {",
                        close: "} "
                    });
                };
                a.Ya.prototype = new a.J();
                var b = new a.Ya();
                0 < b.uc && a.hb(b);
                a.b("jqueryTmplTemplateEngine", a.Ya);
            })();
        });
    })();
})();

/**
 * fullPage 2.5.4
 * https://github.com/alvarotrigo/fullPage.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 */
(function(b) {
    b.fn.fullpage = function(c) {
        function pa(a) {
            a.find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>');
            "#fff" != c.controlArrowColor && (a.find(".fp-controlArrow.fp-next").css("border-color", "transparent transparent transparent " + c.controlArrowColor), 
            a.find(".fp-controlArrow.fp-prev").css("border-color", "transparent " + c.controlArrowColor + " transparent transparent"));
            c.loopHorizontal || a.find(".fp-controlArrow.fp-prev").hide();
        }
        function qa() {
            b("body").append('<div id="fp-nav"><ul></ul></div>');
            k = b("#fp-nav");
            k.css("color", c.navigationColor);
            k.addClass(c.navigationPosition);
            for (var a = 0; a < b(".fp-section").length; a++) {
                var d = "";
                c.anchors.length && (d = c.anchors[a]);
                var d = '<li><a href="#' + d + '"><span></span></a>', e = c.navigationTooltips[a];
                void 0 != e && "" != e && (d += '<div class="fp-tooltip ' + c.navigationPosition + '">' + e + "</div>");
                d += "</li>";
                k.find("ul").append(d);
            }
        }
        function R() {
            b(".fp-section").each(function() {
                var a = b(this).find(".fp-slide");
                a.length ? a.each(function() {
                    y(b(this));
                }) : y(b(this));
            });
            b.isFunction(c.afterRender) && c.afterRender.call(this);
        }
        function S() {
            if (!c.autoScrolling || c.scrollBar) {
                var a = b(window).scrollTop(), d = 0, e = Math.abs(a - b(".fp-section").first().offset().top);
                b(".fp-section").each(function(c) {
                    var f = Math.abs(a - b(this).offset().top);
                    f < e && (d = c, e = f);
                });
                var f = b(".fp-section").eq(d);
            }
            if (!c.autoScrolling && !f.hasClass("active")) {
                F = !0;
                var ra = b(".fp-section.active").index(".fp-section") + 1, g = G(f), h = f.data("anchor"), k = f.index(".fp-section") + 1, l = f.find(".fp-slide.active");
                if (l.length) var n = l.data("anchor"), t = l.index();
                f.addClass("active").siblings().removeClass("active");
                m || (b.isFunction(c.onLeave) && c.onLeave.call(this, ra, k, g), b.isFunction(c.afterLoad) && c.afterLoad.call(this, h, k));
                H(h, 0);
                c.anchors.length && !m && (p = h, I(t, n, h, k));
                clearTimeout(T);
                T = setTimeout(function() {
                    F = !1;
                }, 100);
            }
            c.scrollBar && (clearTimeout(U), U = setTimeout(function() {
                m || q(f);
            }, 1e3));
        }
        function V(a) {
            return scrollable = a.find(".fp-slides").length ? a.find(".fp-slide.active").find(".fp-scrollable") : a.find(".fp-scrollable");
        }
        function z(a, d) {
            if (l[a]) {
                if ("down" == a) var c = "bottom", f = b.fn.fullpage.moveSectionDown; else c = "top", 
                f = b.fn.fullpage.moveSectionUp;
                if (0 < d.length) if (c = "top" === c ? !d.scrollTop() : "bottom" === c ? d.scrollTop() + 1 + d.innerHeight() >= d[0].scrollHeight : void 0, 
                c) f(); else return !0; else f();
            }
        }
        function sa(a) {
            var d = a.originalEvent;
            if (!W(a.target)) {
                c.autoScrolling && !c.scrollBar && a.preventDefault();
                a = b(".fp-section.active");
                var e = V(a);
                m || t || (d = X(d), u = d.y, A = d.x, a.find(".fp-slides").length && Math.abs(B - A) > Math.abs(v - u) ? Math.abs(B - A) > b(window).width() / 100 * c.touchSensitivity && (B > A ? l.right && b.fn.fullpage.moveSlideRight() : l.left && b.fn.fullpage.moveSlideLeft()) : c.autoScrolling && !c.scrollBar && Math.abs(v - u) > b(window).height() / 100 * c.touchSensitivity && (v > u ? z("down", e) : u > v && z("up", e)));
            }
        }
        function W(a, d) {
            d = d || 0;
            var e = b(a).parent();
            return d < c.normalScrollElementTouchThreshold && e.is(c.normalScrollElements) ? !0 : d == c.normalScrollElementTouchThreshold ? !1 : W(e, ++d);
        }
        function ta(a) {
            a = X(a.originalEvent);
            v = a.y;
            B = a.x;
        }
        function r(a) {
            if (c.autoScrolling) {
                a = window.event || a;
                var d = Math.max(-1, Math.min(1, a.wheelDelta || -a.deltaY || -a.detail));
                c.scrollBar && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
                a = b(".fp-section.active");
                a = V(a);
                m || (0 > d ? z("down", a) : z("up", a));
                return !1;
            }
        }
        function Y(a) {
            var d = b(".fp-section.active").find(".fp-slides");
            if (d.length && !t) {
                var e = d.find(".fp-slide.active"), f = null, f = "prev" === a ? e.prev(".fp-slide") : e.next(".fp-slide");
                if (!f.length) {
                    if (!c.loopHorizontal) return;
                    f = "prev" === a ? e.siblings(":last") : e.siblings(":first");
                }
                t = !0;
                w(d, f);
            }
        }
        function Z() {
            b(".fp-slide.active").each(function() {
                J(b(this));
            });
        }
        function q(a, d, e) {
            var f = a.position();
            if ("undefined" !== typeof f && (d = {
                element: a,
                callback: d,
                isMovementUp: e,
                dest: f,
                dtop: f.top,
                yMovement: G(a),
                anchorLink: a.data("anchor"),
                sectionIndex: a.index(".fp-section"),
                activeSlide: a.find(".fp-slide.active"),
                activeSection: b(".fp-section.active"),
                leavingSection: b(".fp-section.active").index(".fp-section") + 1,
                localIsResizing: x
            }, !(d.activeSection.is(a) && !x || c.scrollBar && b(window).scrollTop() === d.dtop))) {
                if (d.activeSlide.length) var g = d.activeSlide.data("anchor"), h = d.activeSlide.index();
                c.autoScrolling && c.continuousVertical && "undefined" !== typeof d.isMovementUp && (!d.isMovementUp && "up" == d.yMovement || d.isMovementUp && "down" == d.yMovement) && (d.isMovementUp ? b(".fp-section.active").before(d.activeSection.nextAll(".fp-section")) : b(".fp-section.active").after(d.activeSection.prevAll(".fp-section").get().reverse()), 
                n(b(".fp-section.active").position().top), Z(), d.wrapAroundElements = d.activeSection, 
                d.dest = d.element.position(), d.dtop = d.dest.top, d.yMovement = G(d.element));
                a.addClass("active").siblings().removeClass("active");
                m = !0;
                I(h, g, d.anchorLink, d.sectionIndex);
                b.isFunction(c.onLeave) && !d.localIsResizing && c.onLeave.call(this, d.leavingSection, d.sectionIndex + 1, d.yMovement);
                ua(d);
                p = d.anchorLink;
                c.autoScrolling && H(d.anchorLink, d.sectionIndex);
            }
        }
        function ua(a) {
            if (c.css3 && c.autoScrolling && !c.scrollBar) aa("translate3d(0px, -" + a.dtop + "px, 0px)", !0), 
            setTimeout(function() {
                ba(a);
            }, c.scrollingSpeed); else {
                var d = va(a);
                b(d.element).animate(d.options, c.scrollingSpeed, c.easing).promise().done(function() {
                    ba(a);
                });
            }
        }
        function va(a) {
            var b = {};
            c.autoScrolling && !c.scrollBar ? (b.options = {
                top: -a.dtop
            }, b.element = "." + ca) : (b.options = {
                scrollTop: a.dtop
            }, b.element = "html, body");
            return b;
        }
        function wa(a) {
            a.wrapAroundElements && a.wrapAroundElements.length && (a.isMovementUp ? b(".fp-section:first").before(a.wrapAroundElements) : b(".fp-section:last").after(a.wrapAroundElements), 
            n(b(".fp-section.active").position().top), Z());
        }
        function ba(a) {
            wa(a);
            b.isFunction(c.afterLoad) && !a.localIsResizing && c.afterLoad.call(this, a.anchorLink, a.sectionIndex + 1);
            setTimeout(function() {
                m = !1;
                b.isFunction(a.callback) && a.callback.call(this);
            }, 600);
        }
        function da() {
            if (!F) {
                var a = window.location.hash.replace("#", "").split("/"), b = a[0], a = a[1];
                if (b.length) {
                    var c = "undefined" === typeof p, f = "undefined" === typeof p && "undefined" === typeof a && !t;
                    (b && b !== p && !c || f || !t && K != a) && L(b, a);
                }
            }
        }
        function w(a, d) {
            var e = d.position(), f = a.find(".fp-slidesContainer").parent(), g = d.index(), h = a.closest(".fp-section"), k = h.index(".fp-section"), l = h.data("anchor"), n = h.find(".fp-slidesNav"), m = d.data("anchor"), q = x;
            if (c.onSlideLeave) {
                var p = h.find(".fp-slide.active").index(), r;
                r = p == g ? "none" : p > g ? "left" : "right";
                q || "none" === r || b.isFunction(c.onSlideLeave) && c.onSlideLeave.call(this, l, k + 1, p, r);
            }
            d.addClass("active").siblings().removeClass("active");
            "undefined" === typeof m && (m = g);
            !c.loopHorizontal && c.controlArrows && (h.find(".fp-controlArrow.fp-prev").toggle(0 != g), 
            h.find(".fp-controlArrow.fp-next").toggle(!d.is(":last-child")));
            h.hasClass("active") && I(g, m, l, k);
            var u = function() {
                q || b.isFunction(c.afterSlideLoad) && c.afterSlideLoad.call(this, l, k + 1, m, g);
                t = !1;
            };
            c.css3 ? (e = "translate3d(-" + e.left + "px, 0px, 0px)", ea(a.find(".fp-slidesContainer"), 0 < c.scrollingSpeed).css(fa(e)), 
            setTimeout(function() {
                u();
            }, c.scrollingSpeed, c.easing)) : f.animate({
                scrollLeft: e.left
            }, c.scrollingSpeed, c.easing, function() {
                u();
            });
            n.find(".active").removeClass("active");
            n.find("li").eq(g).find("a").addClass("active");
        }
        function ga() {
            ha();
            if (C) {
                if ("text" !== b(document.activeElement).attr("type")) {
                    var a = b(window).height();
                    Math.abs(a - M) > 20 * Math.max(M, a) / 100 && (b.fn.fullpage.reBuild(!0), M = a);
                }
            } else clearTimeout(ia), ia = setTimeout(function() {
                b.fn.fullpage.reBuild(!0);
            }, 500);
        }
        function ha() {
            if (c.responsive) {
                var a = g.hasClass("fp-responsive");
                b(window).width() < c.responsive ? a || (b.fn.fullpage.setAutoScrolling(!1, "internal"), 
                b("#fp-nav").hide(), g.addClass("fp-responsive")) : a && (b.fn.fullpage.setAutoScrolling(N.autoScrolling, "internal"), 
                b("#fp-nav").show(), g.removeClass("fp-responsive"));
            }
        }
        function ea(a) {
            var b = "all " + c.scrollingSpeed + "ms " + c.easingcss3;
            a.removeClass("fp-notransition");
            return a.css({
                "-webkit-transition": b,
                transition: b
            });
        }
        function O(a) {
            return a.addClass("fp-notransition");
        }
        function xa(a, d) {
            if (825 > a || 900 > d) {
                var c = Math.min(100 * a / 825, 100 * d / 900).toFixed(2);
                b("body").css("font-size", c + "%");
            } else b("body").css("font-size", "100%");
        }
        function H(a, d) {
            c.menu && (b(c.menu).find(".active").removeClass("active"), b(c.menu).find('[data-menuanchor="' + a + '"]').addClass("active"));
            c.navigation && (b("#fp-nav").find(".active").removeClass("active"), a ? b("#fp-nav").find('a[href="#' + a + '"]').addClass("active") : b("#fp-nav").find("li").eq(d).find("a").addClass("active"));
        }
        function G(a) {
            var d = b(".fp-section.active").index(".fp-section");
            a = a.index(".fp-section");
            return d == a ? "none" : d > a ? "up" : "down";
        }
        function y(a) {
            a.css("overflow", "hidden");
            var b = a.closest(".fp-section"), e = a.find(".fp-scrollable");
            if (e.length) var f = e.get(0).scrollHeight; else f = a.get(0).scrollHeight, c.verticalCentered && (f = a.find(".fp-tableCell").get(0).scrollHeight);
            b = h - parseInt(b.css("padding-bottom")) - parseInt(b.css("padding-top"));
            f > b ? e.length ? e.css("height", b + "px").parent().css("height", b + "px") : (c.verticalCentered ? a.find(".fp-tableCell").wrapInner('<div class="fp-scrollable" />') : a.wrapInner('<div class="fp-scrollable" />'), 
            a.find(".fp-scrollable").slimScroll({
                allowPageScroll: !0,
                height: b + "px",
                size: "10px",
                alwaysVisible: !0
            })) : ja(a);
            a.css("overflow", "");
        }
        function ja(a) {
            a.find(".fp-scrollable").children().first().unwrap().unwrap();
            a.find(".slimScrollBar").remove();
            a.find(".slimScrollRail").remove();
        }
        function ka(a) {
            a.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:' + la(a) + 'px;" />');
        }
        function la(a) {
            var b = h;
            if (c.paddingTop || c.paddingBottom) b = a, b.hasClass("fp-section") || (b = a.closest(".fp-section")), 
            a = parseInt(b.css("padding-top")) + parseInt(b.css("padding-bottom")), b = h - a;
            return b;
        }
        function aa(a, b) {
            b ? ea(g) : O(g);
            g.css(fa(a));
            setTimeout(function() {
                g.removeClass("fp-notransition");
            }, 10);
        }
        function L(a, d) {
            "undefined" === typeof d && (d = 0);
            var c = isNaN(a) ? b('[data-anchor="' + a + '"]') : b(".fp-section").eq(a - 1);
            a === p || c.hasClass("active") ? ma(c, d) : q(c, function() {
                ma(c, d);
            });
        }
        function ma(a, b) {
            if ("undefined" != typeof b) {
                var c = a.find(".fp-slides"), f = c.find('[data-anchor="' + b + '"]');
                f.length || (f = c.find(".fp-slide").eq(b));
                f.length && w(c, f);
            }
        }
        function ya(a, b) {
            a.append('<div class="fp-slidesNav"><ul></ul></div>');
            var e = a.find(".fp-slidesNav");
            e.addClass(c.slidesNavPosition);
            for (var f = 0; f < b; f++) e.find("ul").append('<li><a href="#"><span></span></a></li>');
            e.css("margin-left", "-" + e.width() / 2 + "px");
            e.find("li").first().find("a").addClass("active");
        }
        function I(a, b, e, f) {
            var g = "";
            c.anchors.length ? (a ? ("undefined" !== typeof e && (g = e), "undefined" === typeof b && (b = a), 
            K = b, na(g + "/" + b)) : ("undefined" !== typeof a && (K = b), na(e)), D(location.hash)) : "undefined" !== typeof a ? D(f + "-" + a) : D(String(f));
        }
        function na(a) {
            if (c.recordHistory) location.hash = a; else if (C || P) history.replaceState(void 0, void 0, "#" + a); else {
                var b = window.location.href.split("#")[0];
                window.location.replace(b + "#" + a);
            }
        }
        function D(a) {
            a = a.replace("/", "-").replace("#", "");
            b("body")[0].className = b("body")[0].className.replace(/\b\s?fp-viewing-[^\s]+\b/g, "");
            b("body").addClass("fp-viewing-" + a);
        }
        function za() {
            var a = document.createElement("p"), b, c = {
                webkitTransform: "-webkit-transform",
                OTransform: "-o-transform",
                msTransform: "-ms-transform",
                MozTransform: "-moz-transform",
                transform: "transform"
            };
            document.body.insertBefore(a, null);
            for (var f in c) void 0 !== a.style[f] && (a.style[f] = "translate3d(1px,1px,1px)", 
            b = window.getComputedStyle(a).getPropertyValue(c[f]));
            document.body.removeChild(a);
            return void 0 !== b && 0 < b.length && "none" !== b;
        }
        function oa() {
            return window.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove"
            } : {
                down: "MSPointerDown",
                move: "MSPointerMove"
            };
        }
        function X(a) {
            var b = [];
            b.y = "undefined" !== typeof a.pageY && (a.pageY || a.pageX) ? a.pageY : a.touches[0].pageY;
            b.x = "undefined" !== typeof a.pageX && (a.pageY || a.pageX) ? a.pageX : a.touches[0].pageX;
            return b;
        }
        function J(a) {
            b.fn.fullpage.setScrollingSpeed(0, "internal");
            w(a.closest(".fp-slides"), a);
            b.fn.fullpage.setScrollingSpeed(N.scrollingSpeed, "internal");
        }
        function n(a) {
            c.scrollBar ? g.scrollTop(a) : c.css3 ? aa("translate3d(0px, -" + a + "px, 0px)", !1) : g.css("top", -a);
        }
        function fa(a) {
            return {
                "-webkit-transform": a,
                "-moz-transform": a,
                "-ms-transform": a,
                transform: a
            };
        }
        function Aa() {
            n(0);
            b("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove();
            b(".fp-section").css({
                height: "",
                "background-color": "",
                padding: ""
            });
            b(".fp-slide").css({
                width: ""
            });
            g.css({
                height: "",
                position: "",
                "-ms-touch-action": "",
                "touch-action": ""
            });
            b(".fp-section, .fp-slide").each(function() {
                ja(b(this));
                b(this).removeClass("fp-table active");
            });
            O(g);
            O(g.find(".fp-easing"));
            g.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function() {
                b(this).replaceWith(this.childNodes);
            });
            b("html, body").scrollTop(0);
        }
        function Q(a, b, e) {
            c[a] = b;
            "internal" !== e && (N[a] = b);
        }
        function E(a, b) {
            console && console[a] && console[a]("fullPage: " + b);
        }
        c = b.extend({
            menu: !1,
            anchors: [],
            navigation: !1,
            navigationPosition: "right",
            navigationColor: "#000",
            navigationTooltips: [],
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            easing: "easeInQuart",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            normalScrollElements: null,
            scrollOverflow: !1,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            keyboardScrolling: !0,
            animateAnchor: !0,
            recordHistory: !0,
            controlArrows: !0,
            controlArrowColor: "#fff",
            verticalCentered: !0,
            resize: !0,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,
            sectionSelector: ".section",
            slideSelector: ".slide",
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null
        }, c);
        (function() {
            c.continuousVertical && (c.loopTop || c.loopBottom) && (c.continuousVertical = !1, 
            E("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"));
            c.continuousVertical && c.scrollBar && (c.continuousVertical = !1, E("warn", "Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"));
            b.each(c.anchors, function(a, c) {
                (b("#" + c).length || b('[name="' + c + '"]').length) && E("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
            });
        })();
        b.extend(b.easing, {
            easeInQuart: function(a, b, c, f, g) {
                return f * (b /= g) * b * b * b + c;
            }
        });
        b.fn.fullpage.setAutoScrolling = function(a, d) {
            Q("autoScrolling", a, d);
            var e = b(".fp-section.active");
            c.autoScrolling && !c.scrollBar ? (b("html, body").css({
                overflow: "hidden",
                height: "100%"
            }), b.fn.fullpage.setRecordHistory(c.recordHistory, "internal"), g.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }), e.length && n(e.position().top)) : (b("html, body").css({
                overflow: "visible",
                height: "initial"
            }), b.fn.fullpage.setRecordHistory(!1, "internal"), g.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }), n(0), b("html, body").scrollTop(e.position().top));
        };
        b.fn.fullpage.setRecordHistory = function(a, b) {
            Q("recordHistory", a, b);
        };
        b.fn.fullpage.setScrollingSpeed = function(a, b) {
            Q("scrollingSpeed", a, b);
        };
        b.fn.fullpage.setMouseWheelScrolling = function(a) {
            a ? document.addEventListener ? (document.addEventListener("mousewheel", r, !1), 
            document.addEventListener("wheel", r, !1)) : document.attachEvent("onmousewheel", r) : document.addEventListener ? (document.removeEventListener("mousewheel", r, !1), 
            document.removeEventListener("wheel", r, !1)) : document.detachEvent("onmousewheel", r);
        };
        b.fn.fullpage.setAllowScrolling = function(a, c) {
            if ("undefined" != typeof c) c = c.replace(" ", "").split(","), b.each(c, function(c, d) {
                switch (d) {
                  case "up":
                    l.up = a;
                    break;

                  case "down":
                    l.down = a;
                    break;

                  case "left":
                    l.left = a;
                    break;

                  case "right":
                    l.right = a;
                    break;

                  case "all":
                    b.fn.fullpage.setAllowScrolling(a);
                }
            }); else if (a) {
                if (b.fn.fullpage.setMouseWheelScrolling(!0), C || P) MSPointer = oa(), b(document).off("touchstart " + MSPointer.down).on("touchstart " + MSPointer.down, ta), 
                b(document).off("touchmove " + MSPointer.move).on("touchmove " + MSPointer.move, sa);
            } else if (b.fn.fullpage.setMouseWheelScrolling(!1), C || P) MSPointer = oa(), b(document).off("touchstart " + MSPointer.down), 
            b(document).off("touchmove " + MSPointer.move);
        };
        b.fn.fullpage.setKeyboardScrolling = function(a) {
            c.keyboardScrolling = a;
        };
        b.fn.fullpage.moveSectionUp = function() {
            var a = b(".fp-section.active").prev(".fp-section");
            a.length || !c.loopTop && !c.continuousVertical || (a = b(".fp-section").last());
            a.length && q(a, null, !0);
        };
        b.fn.fullpage.moveSectionDown = function() {
            var a = b(".fp-section.active").next(".fp-section");
            a.length || !c.loopBottom && !c.continuousVertical || (a = b(".fp-section").first());
            a.length && q(a, null, !1);
        };
        b.fn.fullpage.moveTo = function(a, c) {
            var e = "", e = isNaN(a) ? b('[data-anchor="' + a + '"]') : b(".fp-section").eq(a - 1);
            "undefined" !== typeof c ? L(a, c) : 0 < e.length && q(e);
        };
        b.fn.fullpage.moveSlideRight = function() {
            Y("next");
        };
        b.fn.fullpage.moveSlideLeft = function() {
            Y("prev");
        };
        b.fn.fullpage.reBuild = function(a) {
            x = !0;
            var d = b(window).width();
            h = b(window).height();
            c.resize && xa(h, d);
            b(".fp-section").each(function() {
                parseInt(b(this).css("padding-bottom"));
                parseInt(b(this).css("padding-top"));
                c.verticalCentered && b(this).find(".fp-tableCell").css("height", la(b(this)) + "px");
                b(this).css("height", h + "px");
                if (c.scrollOverflow) {
                    var a = b(this).find(".fp-slide");
                    a.length ? a.each(function() {
                        y(b(this));
                    }) : y(b(this));
                }
                a = b(this).find(".fp-slides");
                a.length && w(a, a.find(".fp-slide.active"));
            });
            b(".fp-section.active").position();
            d = b(".fp-section.active");
            d.index(".fp-section") && q(d);
            x = !1;
            b.isFunction(c.afterResize) && a && c.afterResize.call(this);
            b.isFunction(c.afterReBuild) && !a && c.afterReBuild.call(this);
        };
        var t = !1, C = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|Windows Phone|Tizen|Bada)/), P = "ontouchstart" in window || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints, g = b(this), h = b(window).height(), m = !1, x = !1, p, K, k, ca = "fullpage-wrapper", l = {
            up: !0,
            down: !0,
            left: !0,
            right: !0
        }, N = jQuery.extend(!0, {}, c);
        b.fn.fullpage.setAllowScrolling(!0);
        c.css3 && (c.css3 = za());
        b(this).length ? (g.css({
            height: "100%",
            position: "relative"
        }), g.addClass(ca)) : E("error", "Error! Fullpage.js needs to be initialized with a selector. For example: $('#myContainer').fullpage();");
        b(c.sectionSelector).each(function() {
            b(this).addClass("fp-section");
        });
        b(c.slideSelector).each(function() {
            b(this).addClass("fp-slide");
        });
        c.navigation && qa();
        b(".fp-section").each(function(a) {
            var d = b(this), e = b(this).find(".fp-slide"), f = e.length;
            a || 0 !== b(".fp-section.active").length || b(this).addClass("active");
            b(this).css("height", h + "px");
            (c.paddingTop || c.paddingBottom) && b(this).css("padding", c.paddingTop + " 0 " + c.paddingBottom + " 0");
            "undefined" !== typeof c.sectionsColor[a] && b(this).css("background-color", c.sectionsColor[a]);
            "undefined" !== typeof c.anchors[a] && b(this).attr("data-anchor", c.anchors[a]);
            if (1 < f) {
                a = 100 * f;
                var g = 100 / f;
                e.wrapAll('<div class="fp-slidesContainer" />');
                e.parent().wrap('<div class="fp-slides" />');
                b(this).find(".fp-slidesContainer").css("width", a + "%");
                c.controlArrows && pa(b(this));
                c.slidesNavigation && ya(b(this), f);
                e.each(function(a) {
                    b(this).css("width", g + "%");
                    c.verticalCentered && ka(b(this));
                });
                d = d.find(".fp-slide.active");
                0 == d.length ? e.eq(0).addClass("active") : J(d);
            } else c.verticalCentered && ka(b(this));
        }).promise().done(function() {
            b.fn.fullpage.setAutoScrolling(c.autoScrolling, "internal");
            var a = b(".fp-section.active").find(".fp-slide.active");
            a.length && (0 != b(".fp-section.active").index(".fp-section") || 0 == b(".fp-section.active").index(".fp-section") && 0 != a.index()) && J(a);
            c.fixedElements && c.css3 && b(c.fixedElements).appendTo("body");
            c.navigation && (k.css("margin-top", "-" + k.height() / 2 + "px"), k.find("li").eq(b(".fp-section.active").index(".fp-section")).find("a").addClass("active"));
            c.menu && c.css3 && b(c.menu).closest(".fullpage-wrapper").length && b(c.menu).appendTo("body");
            c.scrollOverflow ? ("complete" === document.readyState && R(), b(window).on("load", R)) : b.isFunction(c.afterRender) && c.afterRender.call(this);
            ha();
            a = window.location.hash.replace("#", "").split("/")[0];
            if (a.length) {
                var d = b('[data-anchor="' + a + '"]');
                !c.animateAnchor && d.length && (c.autoScrolling ? n(d.position().top) : (n(0), 
                D(a), b("html, body").scrollTop(d.position().top)), H(a, null), b.isFunction(c.afterLoad) && c.afterLoad.call(this, a, d.index(".fp-section") + 1), 
                d.addClass("active").siblings().removeClass("active"));
            }
            b(window).on("load", function() {
                var a = window.location.hash.replace("#", "").split("/"), b = a[0], a = a[1];
                b && L(b, a);
            });
        });
        var T, U, F = !1;
        b(window).on("scroll", S);
        var v = 0, B = 0, u = 0, A = 0;
        b(window).on("hashchange", da);
        b(document).keydown(function(a) {
            if (c.keyboardScrolling && c.autoScrolling && (40 != a.which && 38 != a.which || a.preventDefault(), 
            !m)) switch (a.which) {
              case 38:
              case 33:
                b.fn.fullpage.moveSectionUp();
                break;

              case 40:
              case 34:
                b.fn.fullpage.moveSectionDown();
                break;

              case 36:
                b.fn.fullpage.moveTo(1);
                break;

              case 35:
                b.fn.fullpage.moveTo(b(".fp-section").length);
                break;

              case 37:
                b.fn.fullpage.moveSlideLeft();
                break;

              case 39:
                b.fn.fullpage.moveSlideRight();
            }
        });
        b(document).on("click touchstart", "#fp-nav a", function(a) {
            a.preventDefault();
            a = b(this).parent().index();
            q(b(".fp-section").eq(a));
        });
        b(document).on("click touchstart", ".fp-slidesNav a", function(a) {
            a.preventDefault();
            a = b(this).closest(".fp-section").find(".fp-slides");
            var c = a.find(".fp-slide").eq(b(this).closest("li").index());
            w(a, c);
        });
        c.normalScrollElements && (b(document).on("mouseenter", c.normalScrollElements, function() {
            b.fn.fullpage.setMouseWheelScrolling(!1);
        }), b(document).on("mouseleave", c.normalScrollElements, function() {
            b.fn.fullpage.setMouseWheelScrolling(!0);
        }));
        b(".fp-section").on("click touchstart", ".fp-controlArrow", function() {
            b(this).hasClass("fp-prev") ? b.fn.fullpage.moveSlideLeft() : b.fn.fullpage.moveSlideRight();
        });
        b(window).resize(ga);
        var M = h, ia;
        b.fn.fullpage.destroy = function(a) {
            b.fn.fullpage.setAutoScrolling(!1, "internal");
            b.fn.fullpage.setAllowScrolling(!1);
            b.fn.fullpage.setKeyboardScrolling(!1);
            b(window).off("scroll", S).off("hashchange", da).off("resize", ga);
            b(document).off("click", "#fp-nav a").off("mouseenter", "#fp-nav li").off("mouseleave", "#fp-nav li").off("click", ".fp-slidesNav a").off("mouseover", c.normalScrollElements).off("mouseout", c.normalScrollElements);
            b(".fp-section").off("click", ".fp-controlArrow");
            a && Aa();
        };
    };
})(jQuery);

define("fullPage", function() {});

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
jQuery.easing.jswing = jQuery.easing.swing;

jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g);
    },
    easeInQuad: function(e, f, a, h, g) {
        return h * (f /= g) * f + a;
    },
    easeOutQuad: function(e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a;
    },
    easeInOutQuad: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a;
        }
        return -h / 2 * (--f * (f - 2) - 1) + a;
    },
    easeInCubic: function(e, f, a, h, g) {
        return h * (f /= g) * f * f + a;
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a;
    },
    easeInOutCubic: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a;
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a;
    },
    easeInQuart: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a;
    },
    easeOutQuart: function(e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a;
    },
    easeInOutQuart: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a;
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a;
    },
    easeInQuint: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a;
    },
    easeOutQuint: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a;
    },
    easeInOutQuint: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a;
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a;
    },
    easeInSine: function(e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a;
    },
    easeOutSine: function(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a;
    },
    easeInOutSine: function(e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a;
    },
    easeInExpo: function(e, f, a, h, g) {
        return f == 0 ? a : h * Math.pow(2, 10 * (f / g - 1)) + a;
    },
    easeOutExpo: function(e, f, a, h, g) {
        return f == g ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a;
    },
    easeInOutExpo: function(e, f, a, h, g) {
        if (f == 0) {
            return a;
        }
        if (f == g) {
            return a + h;
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a;
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a;
    },
    easeInCirc: function(e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a;
    },
    easeOutCirc: function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a;
    },
    easeInOutCirc: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a;
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a;
    },
    easeInElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e;
        }
        if ((h /= k) == 1) {
            return e + l;
        }
        if (!j) {
            j = k * .3;
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4;
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g);
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e;
    },
    easeOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e;
        }
        if ((h /= k) == 1) {
            return e + l;
        }
        if (!j) {
            j = k * .3;
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4;
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g);
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e;
    },
    easeInOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e;
        }
        if ((h /= k / 2) == 2) {
            return e + l;
        }
        if (!j) {
            j = k * (.3 * 1.5);
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4;
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g);
        }
        if (h < 1) {
            return -.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e;
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * .5 + l + e;
    },
    easeInBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158;
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a;
    },
    easeOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158;
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a;
    },
    easeInOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158;
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= 1.525) + 1) * f - g)) + a;
        }
        return i / 2 * ((f -= 2) * f * (((g *= 1.525) + 1) * f + g) + 2) + a;
    },
    easeInBounce: function(e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a;
    },
    easeOutBounce: function(e, f, a, h, g) {
        if ((f /= g) < 1 / 2.75) {
            return h * (7.5625 * f * f) + a;
        } else {
            if (f < 2 / 2.75) {
                return h * (7.5625 * (f -= 1.5 / 2.75) * f + .75) + a;
            } else {
                if (f < 2.5 / 2.75) {
                    return h * (7.5625 * (f -= 2.25 / 2.75) * f + .9375) + a;
                } else {
                    return h * (7.5625 * (f -= 2.625 / 2.75) * f + .984375) + a;
                }
            }
        }
    },
    easeInOutBounce: function(e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * .5 + a;
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * .5 + h * .5 + a;
    }
});

define("erasing", function() {});

(function(e, t) {
    if (!e) return t;
    var n = function() {
        this.el = t;
        this.items = t;
        this.sizes = [];
        this.max = [ 0, 0 ];
        this.current = 0;
        this.interval = t;
        this.opts = {
            speed: 500,
            delay: 3e3,
            complete: t,
            keys: !t,
            dots: t,
            fluid: t
        };
        var n = this;
        this.init = function(t, n) {
            this.el = t;
            this.ul = t.children("ul");
            this.max = [ t.outerWidth(), t.outerHeight() ];
            this.items = this.ul.children("li").each(this.calculate);
            this.opts = e.extend(this.opts, n);
            this.setup();
            return this;
        };
        this.calculate = function(t) {
            var r = e(this), i = r.outerWidth(), s = r.outerHeight();
            n.sizes[t] = [ i, s ];
            if (i > n.max[0]) n.max[0] = i;
            if (s > n.max[1]) n.max[1] = s;
        };
        this.setup = function() {
            this.el.css({
                overflow: "hidden",
                width: n.max[0],
                height: this.items.first().outerHeight()
            });
            this.ul.css({
                width: this.items.length * 100 + "%",
                position: "relative"
            });
            this.items.css("width", 100 / this.items.length + "%");
            if (this.opts.delay !== t) {
                this.start();
                this.el.hover(this.stop, this.start);
            }
            this.opts.keys && e(document).keydown(this.keys);
            this.opts.dots && this.dots();
            if (this.opts.fluid) {
                var r = function() {
                    n.el.css("width", Math.min(Math.round(n.el.outerWidth() / n.el.parent().outerWidth() * 100), 100) + "%");
                };
                r();
                e(window).resize(r);
            }
            if (this.opts.arrows) {
                this.el.parent().append('<p class="arrows"><span class="prev">←</span><span class="next">→</span></p>').find(".arrows span").click(function() {
                    e.isFunction(n[this.className]) && n[this.className]();
                });
            }
            if (e.event.swipe) {
                this.el.on("swipeleft", n.prev).on("swiperight", n.next);
            }
        };
        this.move = function(t, r) {
            if (!this.items.eq(t).length) t = 0;
            if (t < 0) t = this.items.length - 1;
            var i = this.items.eq(t);
            var s = {
                height: i.outerHeight()
            };
            var o = r ? 5 : this.opts.speed;
            if (!this.ul.is(":animated")) {
                n.el.find(".dot:eq(" + t + ")").addClass("active").siblings().removeClass("active");
                this.el.animate(s, o) && this.ul.animate(e.extend({
                    left: "-" + t + "00%"
                }, s), o, function(i) {
                    n.current = t;
                    e.isFunction(n.opts.complete) && !r && n.opts.complete(n.el);
                });
            }
        };
        this.start = function() {
            n.interval = setInterval(function() {
                n.move(n.current + 1);
            }, n.opts.delay);
        };
        this.stop = function() {
            n.interval = clearInterval(n.interval);
            return n;
        };
        this.keys = function(t) {
            var r = t.which;
            var i = {
                37: n.prev,
                39: n.next,
                27: n.stop
            };
            if (e.isFunction(i[r])) {
                i[r]();
            }
        };
        this.next = function() {
            return n.stop().move(n.current + 1);
        };
        this.prev = function() {
            return n.stop().move(n.current - 1);
        };
        this.dots = function() {
            var t = '<ol class="dots">';
            e.each(this.items, function(e) {
                t += '<li class="dot' + (e < 1 ? " active" : "") + '">' + (e + 1) + "</li>";
            });
            t += "</ol>";
            this.el.addClass("has-dots").append(t).find(".dot").click(function() {
                n.move(e(this).index());
            });
        };
    };
    e.fn.unslider = function(t) {
        var r = this.length;
        return this.each(function(i) {
            var s = e(this);
            var u = new n().init(s, t);
            s.data("unslider" + (r > 1 ? "-" + (i + 1) : ""), u);
        });
    };
})(window.jQuery, false);

define("unSlide", function() {});

define("common", function() {});