var f, aa = aa || {}, m = this;

function n(a) {
    return void 0 !== a
}

function q(a, b, c) {
    a = a.split(".");
    c = c || m;
    a[0] in c || !c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift());)
        !a.length && n(b) ? c[d] = b : c[d] ? c = c[d] : c = c[d] = {}
}

function t(a, b) {
    for (var c = a.split("."), d = b || m, e; e = c.shift();)
        if (null != d[e])
            d = d[e];
        else
            return null;
    return d
}

function v() {
}

function ba(a) {
    a.getInstance = function () {
        return a.Cb ? a.Cb : a.Cb = new a
    }
}

function ca(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) {
            if (a instanceof Array)
                return "array";
            if (a instanceof Object)
                return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c)
                return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                return "function"
        } else
            return "null";
    else if ("function" == b && "undefined" == typeof a.call)
        return "object";
    return b
}

function da(a) {
    return null === a
}

function ea(a) {
    return "array" == ca(a)
}

function ga(a) {
    var b = ca(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}

function w(a) {
    return "string" == typeof a
}

function ha(a) {
    return "number" == typeof a
}

function ia(a) {
    return "function" == ca(a)
}

function ja(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}

function ka(a) {
    return a[la] || (a[la] = ++ma)
}

var la = "closure_uid_" + (1E9 * Math.random() >>> 0), ma = 0;

function na(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function oa(a, b, c) {
    if (!a)
        throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function () {
        return a.apply(b, arguments)
    }
}

function x(a, b, c) {
    x = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? na : oa;
    return x.apply(null, arguments)
}

function pa(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
    }
}

function qa(a, b) {
    for (var c in b)
        a[c] = b[c]
}

var y = Date.now || function () {
        return +new Date
    };

function ra(a, b) {
    b && (a = a.replace(/\{\$([^}]+)}/g, function (a, d) {
        return d in b ? b[d] : a
    }));
    return a
}

function inherit(a, b) {
    function c() {
    }

    c.prototype = b.prototype;
    a.J = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.base = function (a, c, g) {
        for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++)
            h[k - 2] = arguments[k];
        return b.prototype[c].apply(a, h)
    }
}

Function.prototype.bind = Function.prototype.bind || function (a, b) {
    if (1 < arguments.length) {
        var c = Array.prototype.slice.call(arguments, 1);
        c.unshift(this, a);
        return x.apply(null, c)
    }
    return x(this, a)
};
function ta(a) {
    if (Error.captureStackTrace)
        Error.captureStackTrace(this, ta);
    else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
}

inherit(ta, Error);
ta.prototype.name = "CustomError";
var ua;

function va(a, b) {
    return 0 == a.lastIndexOf(b, 0)
}

function wa(a, b) {
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) == c
}

function A(a) {
    return /^[\s\xa0]*$/.test(a)
}

var xa = String.prototype.trim ? function (a) {
    return a.trim()
} : function (a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};

function ya(a) {
    return encodeURIComponent(String(a))
}

function za(a) {
    return decodeURIComponent(a.replace(/\+/g, " "))
}

function Aa(a) {
    if (!Ba.test(a))
        return a;
    -1 != a.indexOf("&") && (a = a.replace(Ca, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(Da, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(Ea, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(Fa, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(Ga, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(Ha, "&#0;"));
    return a
}

var Ca = /&/g, Da = /</g, Ea = />/g, Fa = /"/g, Ga = /'/g, Ha = /\x00/g, Ba = /[\x00&<>"']/;

function Ia(a) {
    return -1 != a.indexOf("&") ? "document" in m ? Ja(a) : Ka(a) : a
}

function Ja(a) {
    var b = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"'}, c;
    c = m.document.createElement("div");
    return a.replace(La, function (a, e) {
        var g = b[a];
        if (g)
            return g;
        if ("#" == e.charAt(0)) {
            var h = Number("0" + e.substr(1));
            isNaN(h) || (g = String.fromCharCode(h))
        }
        g || (c.innerHTML = a + " ", g = c.firstChild.nodeValue.slice(0, -1));
        return b[a] = g
    })
}

function Ka(a) {
    return a.replace(/&([^;]+);/g, function (a, c) {
        switch (c) {
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "quot":
                return '"';
            default:
                if ("#" == c.charAt(0)) {
                    var d = Number("0" + c.substr(1));
                    if (!isNaN(d))
                        return String.fromCharCode(d)
                }
                return a
        }
    })
}

var La = /&([^;\s<&]+);?/g;

function Ma(a, b) {
    a.length > b && (a = a.substring(0, b - 3) + "...");
    return a
}

function Na(a, b) {
    return -1 != a.toLowerCase().indexOf(b.toLowerCase())
}

function Oa(a) {
    return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
}

function Pa(a, b) {
    return Array(b + 1).join(a)
}

function Qa(a) {
    a = n(void 0) ? a.toFixed(void 0) : String(a);
    var b = a.indexOf(".");
    -1 == b && (b = a.length);
    return Pa("0", Math.max(0, 2 - b)) + a
}

function B(a) {
    return null == a ? "" : String(a)
}

function Ra(a) {
    return Array.prototype.join.call(arguments, "")
}

function Sa(a, b) {
    for (var c = 0, d = xa(String(a)).split("."), e = xa(String(b)).split("."), g = Math.max(d.length, e.length), h = 0; 0 == c && h < g; h++) {
        var k = d[h] || "", l = e[h] || "", p = RegExp("(\\d*)(\\D*)", "g"), r = RegExp("(\\d*)(\\D*)", "g");
        do {
            var u = p.exec(k) || ["", "", ""], C = r.exec(l) || ["", "", ""];
            if (0 == u[0].length && 0 == C[0].length)
                break;
            c = Ta(0 == u[1].length ? 0 : parseInt(u[1], 10), 0 == C[1].length ? 0 : parseInt(C[1], 10)) || Ta(0 == u[2].length, 0 == C[2].length) || Ta(u[2], C[2])
        } while (0 == c)
    }
    return c
}

function Ta(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
}

var Ua = 2147483648 * Math.random() | 0;

function Va() {
    return "goog_" + Ua++
}

function Wa(a) {
    var b = Number(a);
    return 0 == b && A(a) ? NaN : b
}

function Xa(a) {
    return String(a).replace(/\-([a-z])/g, function (a, c) {
        return c.toUpperCase()
    })
}

function Ya(a) {
    var b = w(void 0) ? Oa(void 0) : "\\s";
    return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (a, b, e) {
        return b + e.toUpperCase()
    })
}

function Za(a) {
    isFinite(a) && (a = String(a));
    return w(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN
}

function $a(a, b, c) {
    a = a.split(b);
    for (var d = []; 0 < c && a.length;)
        d.push(a.shift()), c--;
    a.length && d.push(a.join(b));
    return d
}
;
function ab() {
}
;
function bb(a) {
    return a[a.length - 1]
}

var cb = Array.prototype, db = cb.indexOf ? function (a, b, c) {
    return cb.indexOf.call(a, b, c)
} : function (a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (w(a))
        return w(b) && 1 == b.length ? a.indexOf(b, c) : -1;
    for (; c < a.length; c++)
        if (c in a && a[c] === b)
            return c;
    return -1
}, eb = cb.lastIndexOf ? function (a, b, c) {
    return cb.lastIndexOf.call(a, b, null == c ? a.length - 1 : c)
} : function (a, b, c) {
    c = null == c ? a.length - 1 : c;
    0 > c && (c = Math.max(0, a.length + c));
    if (w(a))
        return w(b) && 1 == b.length ? a.lastIndexOf(b, c) : -1;
    for (; 0 <= c; c--)
        if (c in a && a[c] === b)
            return c;
    return -1
}, D = cb.forEach ? function (a, b, c) {
    cb.forEach.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = w(a) ? a.split("") : a, g = 0; g < d; g++)
        g in e && b.call(c, e[g], g, a)
}, fb = cb.filter ? function (a, b, c) {
    return cb.filter.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = [], g = 0, h = w(a) ? a.split("") : a, k = 0; k < d; k++)
        if (k in h) {
            var l = h[k];
            b.call(c, l, k, a) && (e[g++] = l)
        }
    return e
}, E = cb.map ? function (a, b, c) {
    return cb.map.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = Array(d), g = w(a) ? a.split("") : a, h = 0; h < d; h++)
        h in g && (e[h] = b.call(c,
            g[h], h, a));
    return e
}, gb = cb.reduce ? function (a, b, c, d) {
    d && (b = x(b, d));
    return cb.reduce.call(a, b, c)
} : function (a, b, c, d) {
    var e = c;
    D(a, function (c, h) {
        e = b.call(d, e, c, h, a)
    });
    return e
}, hb = cb.some ? function (a, b, c) {
    return cb.some.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = w(a) ? a.split("") : a, g = 0; g < d; g++)
        if (g in e && b.call(c, e[g], g, a))
            return !0;
    return !1
}, ib = cb.every ? function (a, b, c) {
    return cb.every.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = w(a) ? a.split("") : a, g = 0; g < d; g++)
        if (g in e && !b.call(c, e[g], g, a))
            return !1;
    return !0
};

function F(a, b, c) {
    b = jb(a, b, c);
    return 0 > b ? null : w(a) ? a.charAt(b) : a[b]
}

function jb(a, b, c) {
    for (var d = a.length, e = w(a) ? a.split("") : a, g = 0; g < d; g++)
        if (g in e && b.call(c, e[g], g, a))
            return g;
    return -1
}

function kb(a, b) {
    var c = lb(a, b, void 0);
    return 0 > c ? null : w(a) ? a.charAt(c) : a[c]
}

function lb(a, b, c) {
    for (var d = w(a) ? a.split("") : a, e = a.length - 1; 0 <= e; e--)
        if (e in d && b.call(c, d[e], e, a))
            return e;
    return -1
}

function G(a, b) {
    return 0 <= db(a, b)
}

function mb(a) {
    return 0 == a.length
}

function nb(a) {
    if (!ea(a))
        for (var b = a.length - 1; 0 <= b; b--)
            delete a[b];
    a.length = 0
}

function ob(a, b) {
    G(a, b) || a.push(b)
}

function pb(a, b) {
    var c = db(a, b), d;
    (d = 0 <= c) && qb(a, c);
    return d
}

function qb(a, b) {
    cb.splice.call(a, b, 1)
}

function rb(a, b) {
    var c = jb(a, b, void 0);
    0 <= c && qb(a, c)
}

function sb(a) {
    return cb.concat.apply(cb, arguments)
}

function tb(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)
            c[d] = a[d];
        return c
    }
    return []
}

function ub(a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (ga(d)) {
            var e = a.length || 0, g = d.length || 0;
            a.length = e + g;
            for (var h = 0; h < g; h++)
                a[e + h] = d[h]
        } else
            a.push(d)
    }
}

function vb(a, b, c, d) {
    cb.splice.apply(a, wb(arguments, 1))
}

function wb(a, b, c) {
    return 2 >= arguments.length ? cb.slice.call(a, b) : cb.slice.call(a, b, c)
}

function xb(a, b, c) {
    b = b || a;
    c = c || function () {
        return ja(h) ? "o" + ka(h) : (typeof h).charAt(0) + h
    };
    for (var d = {}, e = 0, g = 0; g < a.length;) {
        var h = a[g++], k = c(h);
        Object.prototype.hasOwnProperty.call(d, k) || (d[k] = !0, b[e++] = h)
    }
    b.length = e
}

function yb(a, b, c) {
    c = c || zb;
    for (var d = 0, e = a.length, g; d < e;) {
        var h = d + e >> 1, k;
        k = c(b, a[h]);
        0 < k ? d = h + 1 : (e = h, g = !k)
    }
    return g ? d : ~d
}

function Ab(a, b) {
    a.sort(b || zb)
}

function Bb(a, b, c) {
    var d = c || zb;
    Ab(a, function (a, c) {
        return d(b(a), b(c))
    })
}

function Cb(a, b) {
    Bb(a, function (a) {
        return a[b]
    }, void 0)
}

function Db(a, b, c) {
    if (!ga(a) || !ga(b) || a.length != b.length)
        return !1;
    var d = a.length;
    c = c || Eb;
    for (var e = 0; e < d; e++)
        if (!c(a[e], b[e]))
            return !1;
    return !0
}

function zb(a, b) {
    return a > b ? 1 : a < b ? -1 : 0
}

function Eb(a, b) {
    return a === b
}

function Fb(a, b, c) {
    c = yb(a, b, c);
    0 > c && vb(a, -(c + 1), 0, b)
}

function Gb(a) {
    for (var b = [], c = 0; c < a; c++)
        b[c] = 0;
    return b
}

function Hb(a) {
    for (var b = [], c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        if (ea(d))
            for (var e = 0; e < d.length; e += 8192)
                for (var g = wb(d, e, e + 8192), g = Hb.apply(null, g), h = 0; h < g.length; h++)
                    b.push(g[h]);
        else
            b.push(d)
    }
    return b
}
;
function Ib(a, b, c) {
    for (var d in a)
        b.call(c, a[d], d, a)
}

function Jb(a, b, c) {
    var d = {}, e;
    for (e in a)
        b.call(c, a[e], e, a) && (d[e] = a[e]);
    return d
}

function Kb(a, b, c) {
    for (var d in a)
        if (b.call(c, a[d], d, a))
            return !0;
    return !1
}

function Lb(a, b) {
    for (var c in a)
        if (!b.call(void 0, a[c], c, a))
            return !1;
    return !0
}

function Mb(a) {
    var b = 0, c;
    for (c in a)
        b++;
    return b
}

function Nb(a, b) {
    return Ob(a, b)
}

function Pb(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = a[d];
    return b
}

function Qb(a) {
    var b = [], c = 0, d;
    for (d in a)
        b[c++] = d;
    return b
}

function Rb(a, b) {
    for (var c = ga(b), d = c ? b : arguments, c = c ? 0 : 1; c < d.length && (a = a[d[c]], n(a)); c++)
        ;
    return a
}

function Ob(a, b) {
    for (var c in a)
        if (a[c] == b)
            return !0;
    return !1
}

function Sb(a, b, c) {
    for (var d in a)
        if (b.call(c, a[d], d, a))
            return d
}

function Tb(a) {
    var b = Ub;
    return (a = Sb(b, a, void 0)) && b[a]
}

function Vb(a) {
    for (var b in a)
        return !1;
    return !0
}

function Wb(a) {
    for (var b in a)
        delete a[b]
}

function Xb(a, b) {
    b in a && delete a[b]
}

function Zb(a, b, c) {
    return b in a ? a[b] : c
}

function $b(a) {
    var b = {}, c;
    for (c in a)
        b[c] = a[c];
    return b
}

function ac(a) {
    var b = ca(a);
    if ("object" == b || "array" == b) {
        if (a.clone)
            return a.clone();
        var b = "array" == b ? [] : {}, c;
        for (c in a)
            b[c] = ac(a[c]);
        return b
    }
    return a
}

var bc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function cc(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)
            a[c] = d[c];
        for (var g = 0; g < bc.length; g++)
            c = bc[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
}

function dc(a) {
    var b = arguments.length;
    if (1 == b && ea(arguments[0]))
        return dc.apply(null, arguments[0]);
    if (b % 2)
        throw Error("Uneven number of arguments");
    for (var c = {}, d = 0; d < b; d += 2)
        c[arguments[d]] = arguments[d + 1];
    return c
}

function ec(a) {
    var b = arguments.length;
    if (1 == b && ea(arguments[0]))
        return ec.apply(null, arguments[0]);
    for (var c = {}, d = 0; d < b; d++)
        c[arguments[d]] = !0;
    return c
}
;
var fc = ec("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
var gc = /<[^>]*>|&[^;]+;/g;

function hc(a, b) {
    return b ? a.replace(gc, "") : a
}

var ic = RegExp("[\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]"), jc = RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"), kc = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]"), lc = /^http:\/\/.*/, mc = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i, nc =
    /\s+/, oc = /\d/;

function pc() {
    this.j = "";
    this.k = qc
}

pc.prototype.Ce = !0;
pc.prototype.ue = function () {
    return this.j
};
pc.prototype.toString = function () {
    return "Const{" + this.j + "}"
};
function rc(a) {
    return a instanceof pc && a.constructor === pc && a.k === qc ? a.j : "type_error:Const"
}

function sc() {
    var a = new pc;
    a.j = "HTML that is escaped and sanitized server-side and passed through yt.net.ajax";
    return a
}

var qc = {};

function tc() {
    this.j = "";
    this.k = uc
}

tc.prototype.Ce = !0;
var uc = {};
tc.prototype.ue = function () {
    return this.j
};
function vc(a) {
    var b = new tc;
    b.j = a;
    return b
}

var wc = vc(""), xc = /^[-,."'%_!# a-zA-Z0-9]+$/;

function yc() {
    this.j = "";
    this.k = zc
}

yc.prototype.Ce = !0;
yc.prototype.ue = function () {
    return this.j
};
yc.prototype.Hl = !0;
yc.prototype.rf = function () {
    return 1
};
function Ac(a) {
    return a instanceof yc && a.constructor === yc && a.k === zc ? a.j : "type_error:SafeUrl"
}

var Bc = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;

function Cc(a) {
    try {
        var b = encodeURI(a)
    } catch (c) {
        return "about:invalid#zClosurez"
    }
    return b.replace(Dc, function (a) {
        return Ec[a]
    })
}

var Dc = /[()']|%5B|%5D|%25/g, Ec = {
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "%5B": "[",
    "%5D": "]",
    "%25": "%"
}, zc = {};

function Fc() {
    this.j = Gc
}

Fc.prototype.Ce = !0;
Fc.prototype.ue = function () {
    return ""
};
Fc.prototype.Hl = !0;
Fc.prototype.rf = function () {
    return 1
};
var Gc = {};

function Hc() {
    this.j = "";
    this.o = Ic;
    this.k = null
}

Hc.prototype.Hl = !0;
Hc.prototype.rf = function () {
    return this.k
};
Hc.prototype.Ce = !0;
Hc.prototype.ue = function () {
    return this.j
};
function Jc(a) {
    return a instanceof Hc && a.constructor === Hc && a.o === Ic ? a.j : "type_error:SafeHtml"
}

var Kc = /^[a-zA-Z0-9-]+$/, Lc = ec("action", "cite", "data", "formaction", "href", "manifest", "poster", "src"), Mc = ec("embed", "iframe", "link", "object", "script", "style", "template");

function Nc(a) {
    function b(a) {
        if (ea(a))
            D(a, b);
        else {
            var g;
            a instanceof Hc ? g = a : (g = null, a
        .
            Hl && (g = a.rf()), a = Aa(a.Ce ? a.ue() : String(a)), g = Oc(a, g)
        )
            ;
            d += Jc(g);
            g = g.rf();
            0 == c ? c = g : 0 != g && c != g && (c = null)
        }
    }

    var c = 0, d = "";
    D(arguments, b);
    return Oc(d, c)
}

var Ic = {};

function Oc(a, b) {
    var c = new Hc;
    c.j = a;
    c.k = b;
    return c
}

Oc("", 0);
function Pc(a, b, c) {
    return Math.min(Math.max(a, b), c)
}
;
function Qc(a, b) {
    this.x = n(a) ? a : 0;
    this.y = n(b) ? b : 0
}

f = Qc.prototype;
f.clone = function () {
    return new Qc(this.x, this.y)
};
function Rc(a, b) {
    return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
}

function Sc(a, b) {
    return new Qc(a.x - b.x, a.y - b.y)
}

f.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
f.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
f.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
f.scale = function (a, b) {
    var c = ha(b) ? b : a;
    this.x *= a;
    this.y *= c;
    return this
};
function H(a, b) {
    this.width = a;
    this.height = b
}

function Tc(a, b) {
    return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
}

f = H.prototype;
f.clone = function () {
    return new H(this.width, this.height)
};
f.isEmpty = function () {
    return !(this.width * this.height)
};
f.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
f.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
f.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
f.scale = function (a, b) {
    var c = ha(b) ? b : a;
    this.width *= a;
    this.height *= c;
    return this
};
var Uc;
t: {
    var Vc = m.navigator;
    if (Vc) {
        var Wc = Vc.userAgent;
        if (Wc) {
            Uc = Wc;
            break t
        }
    }
    Uc = ""
}
function Xc(a) {
    return -1 != Uc.indexOf(a)
}
;
function Yc() {
    return Xc("Opera") || Xc("OPR")
}

function Zc() {
    return (Xc("Chrome") || Xc("CriOS")) && !Yc()
}
;
function $c() {
    return Xc("iPhone") && !Xc("iPod") && !Xc("iPad")
}
;
var ad = Yc(), bd = Xc("Trident") || Xc("MSIE"), cd = Xc("Gecko") && !Na(Uc, "WebKit") && !(Xc("Trident") || Xc("MSIE")), dd = Na(Uc, "WebKit"), ed = dd && Xc("Mobile"), fd = Xc("Macintosh"), gd = Xc("Windows"), hd = Xc("Linux") || Xc("CrOS"), id = Xc("Android"), jd = $c(), kd = Xc("iPad");

function ld() {
    var a = m.document;
    return a ? a.documentMode : void 0
}

var md = function () {
    var a = "", b;
    if (ad && m.opera)
        return a = m.opera.version, ia(a) ? a() : a;
    cd ? b = /rv\:([^\);]+)(\)|;)/ : bd ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : dd && (b = /WebKit\/(\S+)/);
    b && (a = (a = b.exec(Uc)) ? a[1] : "");
    return bd && (b = ld(), b > parseFloat(a)) ? String(b) : a
}(), nd = {};

function od(a) {
    return nd[a] || (nd[a] = 0 <= Sa(md, a))
}

function pd(a) {
    return bd && qd >= a
}

var sd = m.document, qd = sd && bd ? ld() || ("CSS1Compat" == sd.compatMode ? parseInt(md, 10) : 5) : void 0;
var td = !bd || pd(9), ud = !cd && !bd || bd && pd(9) || cd && od("1.9.1"), vd = bd && !od("9"), wd = bd || ad || dd;

function xd(a) {
    return a ? new yd(zd(a)) : ua || (ua = new yd)
}

function Ad(a) {
    return w(a) ? document.getElementById(a) : a
}

function Bd(a, b) {
    var c = b || document;
    return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : Cd("*", a, b)
}

function Dd(a, b) {
    var c = b || document, d = null;
    c.querySelectorAll && c.querySelector ? d = c.querySelector("." + a) : d = Cd("*", a, b)[0];
    return d || null
}

function Cd(a, b, c) {
    var d = document;
    c = c || d;
    a = a && "*" != a ? a.toUpperCase() : "";
    if (c.querySelectorAll && c.querySelector && (a || b))
        return c.querySelectorAll(a + (b ? "." + b : ""));
    if (b && c.getElementsByClassName) {
        c = c.getElementsByClassName(b);
        if (a) {
            for (var d = {}, e = 0, g = 0, h; h = c[g]; g++)
                a == h.nodeName && (d[e++] = h);
            d.length = e;
            return d
        }
        return c
    }
    c = c.getElementsByTagName(a || "*");
    if (b) {
        d = {};
        for (g = e = 0; h = c[g]; g++)
            a = h.className, "function" == typeof a.split && G(a.split(/\s+/), b) && (d[e++] = h);
        d.length = e;
        return d
    }
    return c
}

function Ed(a, b) {
    Ib(b, function (b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Fd ? a.setAttribute(Fd[d], b) : va(d, "aria-") || va(d, "data-") ? a.setAttribute(d, b) : a[d] = b
    })
}

var Fd = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
};

function Gd(a) {
    a = a.document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new H(a.clientWidth, a.clientHeight)
}

function Hd(a) {
    var b = Id(a);
    a = a.parentWindow || a.defaultView;
    return bd && od("10") && a.pageYOffset != b.scrollTop ? new Qc(b.scrollLeft, b.scrollTop) : new Qc(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
}

function Id(a) {
    return dd || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
}

function Jd(a) {
    return a ? a.parentWindow || a.defaultView : window
}

function I(a, b, c) {
    return Kd(document, arguments)
}

function Kd(a, b) {
    var c = b[0], d = b[1];
    if (!td && d && (d.name || d.type)) {
        c = ["<", c];
        d.name && c.push(' name="', Aa(d.name), '"');
        if (d.type) {
            c.push(' type="', Aa(d.type), '"');
            var e = {};
            cc(e, d);
            delete e.type;
            d = e
        }
        c.push(">");
        c = c.join("")
    }
    c = a.createElement(c);
    d && (w(d) ? c.className = d : ea(d) ? c.className = d.join(" ") : Ed(c, d));
    2 < b.length && Ld(a, c, b, 2);
    return c
}

function Ld(a, b, c, d) {
    function e(c) {
        c && b.appendChild(w(c) ? a.createTextNode(c) : c)
    }

    for (; d < c.length; d++) {
        var g = c[d];
        !ga(g) || ja(g) && 0 < g.nodeType ? e(g) : D(Md(g) ? tb(g) : g, e)
    }
}

function Nd(a) {
    return document.createElement(a)
}

function Od(a) {
    return document.createTextNode(String(a))
}

function Pd(a, b) {
    a.appendChild(b)
}

function Qd(a, b) {
    Ld(zd(a), a, arguments, 1)
}

function Rd(a) {
    for (var b; b = a.firstChild;)
        a.removeChild(b)
}

function Sd(a) {
    a && a.parentNode && a.parentNode.removeChild(a)
}

function Td(a, b) {
    var c = b.parentNode;
    c && c.replaceChild(a, b)
}

function Ud(a) {
    return ud && void 0 != a.children ? a.children : fb(a.childNodes, function (a) {
        return 1 == a.nodeType
    })
}

function Vd(a) {
    return void 0 != a.firstElementChild ? a.firstElementChild : Wd(a.firstChild)
}

function Wd(a) {
    for (; a && 1 != a.nodeType;)
        a = a.nextSibling;
    return a
}

function Xd(a) {
    return ja(a) && 1 == a.nodeType
}

function Yd(a) {
    var b;
    if (wd && !(bd && od("9") && !od("10") && m.SVGElement && a instanceof m.SVGElement) && (b = a.parentElement))
        return b;
    b = a.parentNode;
    return Xd(b) ? b : null
}

function Zd(a, b) {
    if (a.contains && 1 == b.nodeType)
        return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition)
        return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;)
        b = b.parentNode;
    return b == a
}

function zd(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}

function $d(a) {
    return a.contentWindow || Jd(a.contentDocument || a.contentWindow.document)
}

function ae(a, b) {
    if ("textContent" in a)
        a.textContent = b;
    else if (3 == a.nodeType)
        a.data = b;
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;)
            a.removeChild(a.lastChild);
        a.firstChild.data = b
    } else {
        Rd(a);
        var c = zd(a);
        a.appendChild(c.createTextNode(String(b)))
    }
}

function be(a, b) {
    var c = [];
    return ce(a, b, c, !0) ? c[0] : void 0
}

function ce(a, b, c, d) {
    if (null != a)
        for (a = a.firstChild; a;) {
            if (b(a) && (c.push(a), d) || ce(a, b, c, d))
                return !0;
            a = a.nextSibling
        }
    return !1
}

var de = {SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1}, ee = {IMG: " ", BR: "\n"};

function fe(a) {
    var b;
    (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!ge(a) || he(a)) : ge(a) && he(a)) && bd ? (a = ia(a.getBoundingClientRect) ? a.getBoundingClientRect() : {
        height: a.offsetHeight,
        width: a.offsetWidth
    }, a = null != a && 0 < a.height && 0 < a.width):a = b;
    return a
}

function ge(a) {
    a = a.getAttributeNode("tabindex");
    return null != a && a.specified
}

function he(a) {
    a = a.tabIndex;
    return ha(a) && 0 <= a && 32768 > a
}

function ie(a, b, c) {
    if (!(a.nodeName in de))
        if (3 == a.nodeType)
            c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if (a.nodeName in ee)
            b.push(ee[a.nodeName]);
        else
            for (a = a.firstChild; a;)
                ie(a, b, c), a = a.nextSibling
}

function Md(a) {
    if (a && "number" == typeof a.length) {
        if (ja(a))
            return "function" == typeof a.item || "string" == typeof a.item;
        if (ia(a))
            return "function" == typeof a.item
    }
    return !1
}

function ke(a, b) {
    return b ? le(a, function (a) {
        return !b || w(a.className) && G(a.className.split(/\s+/), b)
    }, !0, void 0) : null
}

function le(a, b, c, d) {
    c || (a = a.parentNode);
    c = null == d;
    for (var e = 0; a && (c || e <= d);) {
        if (b(a))
            return a;
        a = a.parentNode;
        e++
    }
    return null
}

function yd(a) {
    this.j = a || m.document || document
}

f = yd.prototype;
f.N = function (a) {
    return w(a) ? this.j.getElementById(a) : a
};
f.setProperties = Ed;
f.fx = function (a, b, c) {
    return Kd(this.j, arguments)
};
f.createElement = function (a) {
    return this.j.createElement(a)
};
function me(a) {
    return "CSS1Compat" == a.j.compatMode
}

function ne(a) {
    a = a.j;
    return a.parentWindow || a.defaultView
}

function oe(a) {
    return Hd(a.j)
}

f.appendChild = Pd;
f.append = Qd;
f.contains = Zd;
var pe = "StopIteration" in m ? m.StopIteration : Error("StopIteration");

function qe() {
}

qe.prototype.next = function () {
    throw pe;
};
qe.prototype.Wb = function () {
    return this
};
function re(a) {
    if (a instanceof qe)
        return a;
    if ("function" == typeof a.Wb)
        return a.Wb(!1);
    if (ga(a)) {
        var b = 0, c = new qe;
        c.next = function () {
            for (; ;) {
                if (b >= a.length)
                    throw pe;
                if (b in a)
                    return a[b++];
                b++
            }
        };
        return c
    }
    throw Error("Not implemented");
}

function se(a, b, c) {
    if (ga(a))
        try {
            D(a, b, c)
        } catch (d) {
            if (d !== pe)
                throw d;
        }
    else {
        a = re(a);
        try {
            for (; ;)
                b.call(c, a.next(), void 0, a)
        } catch (e) {
            if (e !== pe)
                throw e;
        }
    }
}

function te(a) {
    if (ga(a))
        return tb(a);
    a = re(a);
    var b = [];
    se(a, function (a) {
        b.push(a)
    });
    return b
}
;
function ue(a, b) {
    this.k = {};
    this.j = [];
    this.Xd = this.ma = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c % 2)
            throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2)
            this.set(arguments[d], arguments[d + 1])
    } else if (a) {
        a instanceof ue ? (c = a.Ha(), d = a.Ka()): (c = Qb(a), d = Pb(a));
        for (var e = 0; e < c.length; e++)
            this.set(c[e], d[e])
    }
}

f = ue.prototype;
f.Pa = function () {
    return this.ma
};
f.Ka = function () {
    ve(this);
    for (var a = [], b = 0; b < this.j.length; b++)
        a.push(this.k[this.j[b]]);
    return a
};
f.Ha = function () {
    ve(this);
    return this.j.concat()
};
function we(a, b) {
    return xe(a.k, b)
}

f.jf = function (a) {
    for (var b = 0; b < this.j.length; b++) {
        var c = this.j[b];
        if (xe(this.k, c) && this.k[c] == a)
            return !0
    }
    return !1
};
f.equals = function (a, b) {
    if (this === a)
        return !0;
    if (this.ma != a.Pa())
        return !1;
    var c = b || ye;
    ve(this);
    for (var d, e = 0; d = this.j[e]; e++)
        if (!c(this.get(d), a.get(d)))
            return !1;
    return !0
};
function ye(a, b) {
    return a === b
}

f.isEmpty = function () {
    return 0 == this.ma
};
f.clear = function () {
    this.k = {};
    this.Xd = this.ma = this.j.length = 0
};
f.remove = function (a) {
    return xe(this.k, a) ? (delete this.k[a], this.ma--, this.Xd++, this.j.length > 2 * this.ma && ve(this), !0) : !1
};
function ve(a) {
    if (a.ma != a.j.length) {
        for (var b = 0, c = 0; b < a.j.length;) {
            var d = a.j[b];
            xe(a.k, d) && (a.j[c++] = d);
            b++
        }
        a.j.length = c
    }
    if (a.ma != a.j.length) {
        for (var e = {}, c = b = 0; b < a.j.length;)
            d = a.j[b], xe(e, d) || (a.j[c++] = d, e[d] = 1), b++;
        a.j.length = c
    }
}

f.get = function (a, b) {
    return xe(this.k, a) ? this.k[a] : b
};
f.set = function (a, b) {
    xe(this.k, a) || (this.ma++, this.j.push(a), this.Xd++);
    this.k[a] = b
};
f.forEach = function (a, b) {
    for (var c = this.Ha(), d = 0; d < c.length; d++) {
        var e = c[d], g = this.get(e);
        a.call(b, g, e, this)
    }
};
f.clone = function () {
    return new ue(this)
};
f.Wb = function (a) {
    ve(this);
    var b = 0, c = this.j, d = this.k, e = this.Xd, g = this, h = new qe;
    h.next = function () {
        for (; ;) {
            if (e != g.Xd)
                throw Error("The map has changed since the iterator was created");
            if (b >= c.length)
                throw pe;
            var h = c[b++];
            return a ? h : d[h]
        }
    };
    return h
};
function xe(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
}
;
function ze(a) {
    return "function" == typeof a.Pa ? a.Pa() : ga(a) || w(a) ? a.length : Mb(a)
}

function Ae(a) {
    if ("function" == typeof a.Ka)
        return a.Ka();
    if (w(a))
        return a.split("");
    if (ga(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++)
            b.push(a[d]);
        return b
    }
    return Pb(a)
}

function Be(a) {
    if ("function" == typeof a.Ha)
        return a.Ha();
    if ("function" != typeof a.Ka) {
        if (ga(a) || w(a)) {
            var b = [];
            a = a.length;
            for (var c = 0; c < a; c++)
                b.push(c);
            return b
        }
        return Qb(a)
    }
}

function Ce(a, b, c) {
    if ("function" == typeof a.forEach)
        a.forEach(b, c);
    else if (ga(a) || w(a))
        D(a, b, c);
    else
        for (var d = Be(a), e = Ae(a), g = e.length, h = 0; h < g; h++)
            b.call(c, e[h], d && d[h], a)
}

function De(a, b, c) {
    if ("function" == typeof a.every)
        return a.every(b, c);
    if (ga(a) || w(a))
        return ib(a, b, c);
    for (var d = Be(a), e = Ae(a), g = e.length, h = 0; h < g; h++)
        if (!b.call(c, e[h], d && d[h], a))
            return !1;
    return !0
}
;
var Ee = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

function Fe(a) {
    if (Ge) {
        Ge = !1;
        var b = m.location;
        if (b) {
            var c = b.href;
            if (c && (c = He(c)) && c != b.hostname)
                throw Ge = !0, Error();
        }
    }
    return a.match(Ee)
}

var Ge = dd;

function Ie(a) {
    return a ? decodeURI(a) : a
}

function He(a) {
    return Ie(Fe(a)[3] || null)
}

function Je(a, b) {
    for (var c = a.split("&"), d = 0; d < c.length; d++) {
        var e = c[d].indexOf("="), g = null, h = null;
        0 <= e ? (g = c[d].substring(0, e), h = c[d].substring(e + 1)):g = c[d];
        b(g, h ? za(h) : "")
    }
}

function Ke(a) {
    if (a[1]) {
        var b = a[0], c = b.indexOf("#");
        0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
        c = b.indexOf("?");
        0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0)
    }
    return a.join("")
}

function Le(a, b, c) {
    if (ea(b))
        for (var d = 0; d < b.length; d++)
            Le(a, String(b[d]), c);
    else
        null != b && c.push("&", a, "" === b ? "" : "=", ya(b))
}

function Me(a, b, c) {
    Math.max(b.length - (c || 0), 0);
    for (c = c || 0; c < b.length; c += 2)
        Le(b[c], b[c + 1], a);
    return a
}

function Oe(a, b) {
    for (var c in b)
        Le(c, b[c], a);
    return a
}

function Pe(a) {
    a = Oe([], a);
    a[0] = "";
    return a.join("")
}

function Qe(a, b) {
    return Ke(2 == arguments.length ? Me([a], arguments[1], 0) : Me([a], arguments, 1))
}

function Re(a, b) {
    return Ke(Oe([a], b))
}

function Se(a, b, c, d) {
    for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
        var g = a.charCodeAt(b - 1);
        if (38 == g || 63 == g)
            if (g = a.charCodeAt(b + e), !g || 61 == g || 38 == g || 35 == g)
                return b;
        b += e + 1
    }
    return -1
}

var Te = /#|$/;

function Ve(a, b) {
    var c = a.search(Te), d = Se(a, 0, b, c);
    if (0 > d)
        return null;
    var e = a.indexOf("&", d);
    if (0 > e || e > c)
        e = c;
    d += b.length + 1;
    return za(a.substr(d, e - d))
}

var We = /[?&]($|#)/;

function Xe(a, b, c) {
    for (var d = a.search(Te), e = 0, g, h = []; 0 <= (g = Se(a, e, b, d));)
        h.push(a.substring(e, g)), e = Math.min(a.indexOf("&", g) + 1 || d, d);
    h.push(a.substr(e));
    a = [h.join("").replace(We, "$1"), "&", b];
    null != c && a.push("=", ya(c));
    return Ke(a)
}
;
function J(a, b) {
    var c;
    a instanceof J ? (this.ve = n(b) ? b : a.ve, Ye(this, a.Ib), this.Oe = a.Oe, Ze(this, a.mb), $e(this, a.md), af(this, a.Hb), bf(this, a.j.clone()), this.nf = a.sf()) : a && (c = Fe(String(a))) ? (this.ve = !!b, Ye(this, c[1] || "", !0), this.Oe = cf(c[2] || ""), Ze(this, c[3] || "", !0), $e(this, c[4]), af(this, c[5] || "", !0), bf(this, c[6] || "", !0), this.nf = cf(c[7] || "")) : (this.ve = !!b, this.j = new df(null, 0, this.ve))
}

f = J.prototype;
f.Ib = "";
f.Oe = "";
f.mb = "";
f.md = null;
f.Hb = "";
f.nf = "";
f.ve = !1;
f.toString = function () {
    var a = [], b = this.Ib;
    b && a.push(ef(b, ff, !0), ":");
    if (b = this.mb) {
        a.push("//");
        var c = this.Oe;
        c && a.push(ef(c, ff, !0), "@");
        a.push(ya(b).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
        b = this.md;
        null != b && a.push(":", String(b))
    }
    if (b = this.Hb)
        this.mb && "/" != b.charAt(0) && a.push("/"), a.push(ef(b, "/" == b.charAt(0) ? gf : hf, !0));
    (b = this.j.toString()) && a.push("?", b);
    (b = this.sf()) && a.push("#", ef(b, jf));
    return a.join("")
};
f.resolve = function (a) {
    var b = this.clone(), c = !!a.Ib;
    c ? Ye(b, a.Ib) : c = !!a.Oe;
    c ? b.Oe = a.Oe : c = !!a.mb;
    c ? Ze(b, a.mb) : c = null != a.md;
    var d = a.Hb;
    if (c)
        $e(b, a.md);
    else if (c = !!a.Hb) {
        if ("/" != d.charAt(0))
            if (this.mb && !this.Hb)
                d = "/" + d;
            else {
                var e = b.Hb.lastIndexOf("/");
                -1 != e && (d = b.Hb.substr(0, e + 1) + d)
            }
        e = d;
        if (".." == e || "." == e)
            d = "";
        else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
            for (var d = va(e, "/"), e = e.split("/"), g = [], h = 0; h < e.length;) {
                var k = e[h++];
                "." == k ? d && h == e.length && g.push("") : ".." == k ? ((1 < g.length || 1 == g.length && "" != g[0]) &&
                g.pop(), d && h == e.length && g.push("")) : (g.push(k), d = !0)
            }
            d = g.join("/")
        } else
            d = e
    }
    c ? af(b, d) : c = "" !== a.j.toString();
    c ? bf(b, cf(a.j.toString())) : c = !!a.nf;
    c && (b.nf = a.sf());
    return b
};
f.clone = function () {
    return new J(this)
};
function Ye(a, b, c) {
    a.Ib = c ? cf(b, !0) : b;
    a.Ib && (a.Ib = a.Ib.replace(/:$/, ""))
}

function kf(a) {
    return a.mb
}

function Ze(a, b, c) {
    a.mb = c ? cf(b, !0) : b;
    return a
}

function $e(a, b) {
    if (b) {
        b = Number(b);
        if (isNaN(b) || 0 > b)
            throw Error("Bad port number " + b);
        a.md = b
    } else
        a.md = null;
    return a
}

function af(a, b, c) {
    a.Hb = c ? cf(b, !0) : b
}

function bf(a, b, c) {
    b instanceof df ? (a.j = b, lf(a.j, a.ve)) : (c || (b = ef(b, mf)), a.j = new df(b, 0, a.ve));
    return a
}

function nf(a) {
    return a.j
}

f.ep = function () {
    return this.j.toString()
};
function K(a, b, c) {
    a.j.set(b, c);
    return a
}

function of(a, b, c) {
    ea(c) || (c = [String(c)]);
    pf(a.j, b, c)
}

function qf(a, b) {
    return a.j.get(b)
}

f.sf = function () {
    return this.nf
};
function rf(a) {
    K(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ y()).toString(36));
    return a
}

function sf(a) {
    return a instanceof J ? a.clone() : new J(a, void 0)
}

function tf(a, b, c, d) {
    var e = new J(null, void 0);
    a && Ye(e, a);
    b && Ze(e, b);
    c && $e(e, c);
    d && af(e, d);
    return e
}

function cf(a, b) {
    return a ? b ? decodeURI(a) : decodeURIComponent(a) : ""
}

function ef(a, b, c) {
    return w(a) ? (a = encodeURI(a).replace(b, uf), c
&&
    (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a
) :
    null
}

function uf(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}

var ff = /[#\/\?@]/g, hf = /[\#\?:]/g, gf = /[\#\?]/g, mf = /[\#\?@]/g, jf = /#/g;

function df(a, b, c) {
    this.j = a || null;
    this.k = !!c
}

function vf(a) {
    a.cb || (a.cb = new ue, a.ma = 0, a.j && Je(a.j, function (b, c) {
        a.add(za(b), c)
    }))
}

f = df.prototype;
f.cb = null;
f.ma = null;
f.Pa = function () {
    vf(this);
    return this.ma
};
f.add = function (a, b) {
    vf(this);
    this.j = null;
    a = wf(this, a);
    var c = this.cb.get(a);
    c || this.cb.set(a, c = []);
    c.push(b);
    this.ma++;
    return this
};
f.remove = function (a) {
    vf(this);
    a = wf(this, a);
    return we(this.cb, a) ? (this.j = null, this.ma -= this.cb.get(a).length, this.cb.remove(a)) : !1
};
f.clear = function () {
    this.cb = this.j = null;
    this.ma = 0
};
f.isEmpty = function () {
    vf(this);
    return 0 == this.ma
};
function xf(a, b) {
    vf(a);
    b = wf(a, b);
    return we(a.cb, b)
}

f.jf = function (a) {
    var b = this.Ka();
    return G(b, a)
};
f.Ha = function () {
    vf(this);
    for (var a = this.cb.Ka(), b = this.cb.Ha(), c = [], d = 0; d < b.length; d++)
        for (var e = a[d], g = 0; g < e.length; g++)
            c.push(b[d]);
    return c
};
f.Ka = function (a) {
    vf(this);
    var b = [];
    if (w(a))
        xf(this, a) && (b = sb(b, this.cb.get(wf(this, a))));
    else {
        a = this.cb.Ka();
        for (var c = 0; c < a.length; c++)
            b = sb(b, a[c])
    }
    return b
};
f.set = function (a, b) {
    vf(this);
    this.j = null;
    a = wf(this, a);
    xf(this, a) && (this.ma -= this.cb.get(a).length);
    this.cb.set(a, [b]);
    this.ma++;
    return this
};
f.get = function (a, b) {
    var c = a ? this.Ka(a) : [];
    return 0 < c.length ? String(c[0]) : b
};
function pf(a, b, c) {
    a.remove(b);
    0 < c.length && (a.j = null, a.cb.set(wf(a, b), tb(c)), a.ma += c.length)
}

f.toString = function () {
    if (this.j)
        return this.j;
    if (!this.cb)
        return "";
    for (var a = [], b = this.cb.Ha(), c = 0; c < b.length; c++)
        for (var d = b[c], e = ya(d), d = this.Ka(d), g = 0; g < d.length; g++) {
            var h = e;
            "" !== d[g] && (h += "=" + ya(d[g]));
            a.push(h)
        }
    return this.j = a.join("&")
};
f.clone = function () {
    var a = new df;
    a.j = this.j;
    this.cb && (a.cb = this.cb.clone(), a.ma = this.ma);
    return a
};
function wf(a, b) {
    var c = String(b);
    a.k && (c = c.toLowerCase());
    return c
}

function lf(a, b) {
    b && !a.k && (vf(a), a.j = null, a.cb.forEach(function (a, b) {
        var e = b.toLowerCase();
        b != e && (this.remove(b), pf(this, e, a))
    }, a));
    a.k = b
}

f.extend = function (a) {
    for (var b = 0; b < arguments.length; b++)
        Ce(arguments[b], function (a, b) {
            this.add(b, a)
        }, this)
};
var yf = /^https?:\/\/([-\w.]+\.youtube(education)?\.com\/|[a-z0-9\-]{1,63}\.([a-z]{3}|i)\.corp\.google\.com\/|0\.borg-playground-[a-z0-9\-]+\.youtube-dev\.([a-z]{2}|i)\.borg\.google\.com(:[0-9]+)?\/|yt-devenv-shared\.corp\.google\.com\/|(docs|drive)\.google\.com\/(a\/[^/\\%]+\/|)|play\.google\.com\/)/, zf = /^https?:\/\/([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|borg\.google\.com|prod\.google\.com|video\.google\.com|youtube\.com|youtube\.googleapis\.com|youtube-nocookie\.com|youtubeeducation\.com)(:[0-9]+)?([\/\?\#]|$)/,
    Af = /^https?:\/\/([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|borg\.google\.com|prod\.google\.com|video\.google\.com|youtube\.com|youtube\.googleapis\.com|youtube-nocookie\.com|youtubeeducation\.com)(:[0-9]+)?\/+embed\/+/, Bf = /^https?:\/\/([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|borg\.google\.com|gdata\.youtube\.com|prod\.google\.com)(:[0-9]+)?([\/\?\#]|$)/, Cf = /^(https?:\/\/(lh|dp|gp)[3-6]\.googleusercontent\.com(:[0-9]+)?\/)?[A-Za-z0-9_/-]+photo\.jpg($|\?)|^https?:\/\/(s2\.googleusercontent\.com\/s2\/favicons\?|yt[3-4]\.ggpht\.com\/|([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleplex\.com|play\.google\.com|prod\.google\.com|sandbox\.google\.com|plus\.google\.com|video\.google\.com|youtube\.com|ytimg\.com)(:[0-9]+)?([\/\?\#]|$))/,
    Df = /^https?.*#ocr$|^https?:\/\/(secure\-..\.imrworldwide\.com\/|cdn\.imrworldwide\.com\/|aksecure\.imrworldwide\.com\/)/, Ef = /^https?:\/\/(www\.google\.com\/(aclk|pagead\/conversion)|googleadservices\.com\/(aclk|pagead\/conversion)|googleads\.g\.doubleclick\.net\/(aclk|pagead\/conversion))/, Ff = /^https?:\/\/(www\.google\.com\/pagead\/sul|www\.youtube\.com\/gen_204\?a=sul)/, Gf = /^https?:\/\/([A-Za-z0-9-]{1,63}\.)*(ba\.l\.google\.com|c\.googlesyndication\.com|corp\.google\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleplex\.com|googlevideo\.com|play\.google\.com|prod\.google\.com|sandbox\.google\.com|plus\.google\.com|ed\.video\.google\.com|vp\.video\.l\.google\.com|youtube\.com|youtubeeducation\.com)(:[0-9]+)?([\/\?\#]|$)/,
    Hf = /^https?:\/\/(www\.gstatic\.com\/doubleclick\/studio\/innovation\/ytplayer|www\.gstatic\.com\/doubleclick\/studio\/innovation\/h5\/layouts\/tetris|tpc\.googlesyndication\.com\/pagead\/gadgets\/|([A-Za-z0-9-]{1,63}\.)*(imasdk\.googleapis\.com|2mdn\.net|googlesyndication\.com|corp\.google\.com|borg\.google\.com|googleads\.g\.doubleclick\.net|prod\.google\.com|static\.doubleclick\.net|static\.googleadsserving\.cn|studioapi\.doubleclick\.net|youtube\.com|youtube\.googleapis\.com|youtube-nocookie\.com|youtubeeducation\.com|ytimg\.com)(:[0-9]+)?([\/\?\#]|$))/,
    If = /^https?:\/\/(sf\.api\.[a-z0-9\-]+\.km\.playstation\.net\/|([A-Za-z0-9-]{1,63}\.)*(themis\.dl\.playstation\.net)(:[0-9]+)?([\/\?\#]|$))/, Jf = /^https?:\/\/((www\.|encrypted\.)?google(\.com|\.co)?\.[a-z]{2,3}\/(search|webhp)\?|24e12c4a-a-95274a9c-s-sites.googlegroups.com\/a\/google.com\/flash-api-test-harness\/apiharness.swf|([A-Za-z0-9-]{1,63}\.)*(corp\.google\.com|borg\.google\.com|docs\.google\.com|drive\.google\.com|googleplex\.com|play\.google\.com|prod\.google\.com|sandbox\.google\.com|photos\.google\.com|plus\.google\.com|books\.googleusercontent\.com|mail\.google\.com|talkgadget\.google\.com|survey\.g\.doubleclick\.net|youtube\.com|youtube\.googleapis\.com|youtube-nocookie\.com|youtubeeducation\.com|vevo\.com)(:[0-9]+)?([\/\?\#]|$))/;
var Kf = window.yt && window.yt.config_ || {};
q("yt.config_", Kf, void 0);
q("yt.tokens_", window.yt && window.yt.tokens_ || {}, void 0);
var Lf = window.yt && window.yt.msgs_ || {};
q("yt.msgs_", Lf, void 0);
function Mf(a) {
    Nf(Kf, arguments)
}

function Of(a, b) {
    return a in Kf ? Kf[a] : b
}

function L(a, b) {
    ia(a) && (a = Pf(a));
    return window.setTimeout(a, b)
}

function Qf(a, b) {
    ia(a) && (a = Pf(a));
    return window.setInterval(a, b)
}

function M(a) {
    window.clearTimeout(a)
}

function Rf(a) {
    window.clearInterval(a)
}

function Pf(a) {
    return a && window.yterr ? function () {
        try {
            return a.apply(this, arguments)
        } catch (b) {
            throw Sf(b), b;
        }
    } : a
}

function Sf(a, b) {
    var c = t("yt.www.errors.log");
    c ? c(a, b) : (c = Of("ERRORS") || [], c
.
    push([a, b]), Mf("ERRORS", c)
)
}

function Tf(a) {
    Nf(Lf, arguments)
}

function Uf(a, b, c) {
    var d = b || {};
    if (a = a in Lf ? Lf[a] : c)
        for (var e in d)
            a = a.replace(new RegExp("\\$" + e, "gi"), function () {
                return d[e]
            });
    return a
}

ra = function (a, b) {
    var c = b || {}, d = a in Lf ? Lf[a] : a;
    if (d)
        for (var e in c)
            var g = ("" + c[e]).replace(/\$/g, "$$$$"), d = d.replace(new RegExp("\\{\\$" + e + "\\}", "gi"), g), d = d.replace(new RegExp("\\$" + e, "gi"), g);
    return d
};
function Nf(a, b) {
    if (1 < b.length) {
        var c = b[0];
        a[c] = b[1]
    } else {
        var d = b[0];
        for (c in d)
            a[c] = d[c]
    }
}
;
var Vf = "corp.google.com googleplex.com youtube.com youtube-nocookie.com youtubeeducation.com borg.google.com prod.google.com sandbox.google.com books.googleusercontent.com docs.google.com drive.google.com mail.google.com photos.google.com plus.google.com play.google.com googlevideo.com talkgadget.google.com survey.g.doubleclick.net youtube.googleapis.com vevo.com".split(" "), Wf = "2mdn.net corp.google.com imasdk.googleapis.com static.doubleclick.net tpc.googlesyndication.com/pagead/gadgets gstatic.com/doubleclick/studio/innovation/h5/layouts/tetris studioapi.doubleclick.net googleads.g.doubleclick.net gstatic.com/doubleclick/studio/innovation/ytplayer".split(" "),
    Xf = "";

function Yf(a) {
    return a && a == Xf ? !0 : Zf(a, Vf) ? (Xf = a, !0
) :
    !1
}

function $f(a) {
    var b = !!a && -1 != a.search(Jf), c = Yf(a) || Zf(a, Wf);
    b != c && (b = Error("isTrustedLoader(" + a + ") behavior is not consistent"), (!(0 <= a.indexOf("imasdk.googleapis.com") || 0 <= a.indexOf("s0.2mdn.net")) || .01 > Math.random()) && Sf(b, "WARNING"));
    return c
}

function ag(a) {
    return !!a && -1 != a.search(Cf)
}

function bg(a) {
    return !!a && -1 != a.search(Hf)
}

function Zf(a, b) {
    return (new RegExp("^(https?:)?//([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, ".") + ")(:[0-9]+)?([/?#]|$)", "i")).test(a)
}

function cg(a) {
    a = new J(a);
    Ye(a, document.location.protocol);
    Ze(a, document.location.hostname);
    document.location.port && $e(a, document.location.port);
    return a.toString()
}

function dg(a) {
    a = new J(a);
    Ye(a, document.location.protocol);
    return a.toString()
}
;
var eg = {}, fg = 0, gg = t("yt.net.ping.workerUrl_") || null;
q("yt.net.ping.workerUrl_", gg, void 0);
function hg(a, b, c) {
    a && (c ? a && (a = I("iframe", {
        src: 'javascript:"data:text/html,<body><img src=\\"' + a + '\\"></body>"',
        style: "display:none"
    }), zd(a).body.appendChild(a)) : ig(a, b))
}

function ig(a, b) {
    var c = new Image, d = "" + fg++;
    eg[d] = c;
    c.onload = c.onerror = function () {
        b && eg[d] && b();
        delete eg[d]
    };
    c.src = a;
    c = eval("null")
}
;
function jg(a) {
    a = String(a);
    if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
        try {
            return eval("(" + a + ")")
        } catch (b) {
        }
    throw Error("Invalid JSON string: " + a);
}

function kg(a) {
    return eval("(" + a + ")")
}

function lg(a) {
    return (new mg(void 0)).D(a)
}

function mg(a) {
    this.j = a
}

mg.prototype.D = function (a) {
    var b = [];
    ng(this, a, b);
    return b.join("")
};
function ng(a, b, c) {
    switch (typeof b) {
        case "string":
            og(b, c);
            break;
        case "number":
            c.push(isFinite(b) && !isNaN(b) ? b : "null");
            break;
        case "boolean":
            c.push(b);
            break;
        case "undefined":
            c.push("null");
            break;
        case "object":
            if (null == b) {
                c.push("null");
                break
            }
            if (ea(b)) {
                var d = b.length;
                c.push("[");
                for (var e = "", g = 0; g < d; g++)
                    c.push(e), e = b[g], ng(a, a.j ? a.j.call(b, String(g), e) : e, c), e = ",";
                c.push("]");
                break
            }
            c.push("{");
            d = "";
            for (g in b)
                Object.prototype.hasOwnProperty.call(b, g) && (e = b[g], "function" != typeof e && (c.push(d), og(g, c),
                    c.push(":"), ng(a, a.j ? a.j.call(b, g, e) : e, c), d = ","));
            c.push("}");
            break;
        case "function":
            break;
        default:
            throw Error("Unknown type: " + typeof b);
    }
}

var pg = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\u000b"
}, qg = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

function og(a, b) {
    b.push('"', a.replace(qg, function (a) {
        if (a in pg)
            return pg[a];
        var b = a.charCodeAt(0), e = "\\u";
        16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
        return pg[a] = e + b.toString(16)
    }), '"')
}
;
function rg(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
}

f = rg.prototype;
f.getHeight = function () {
    return this.bottom - this.top
};
f.clone = function () {
    return new rg(this.top, this.right, this.bottom, this.left)
};
f.contains = function (a) {
    return this && a ? a instanceof rg ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
f.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
f.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
f.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
f.scale = function (a, b) {
    var c = ha(b) ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= c;
    this.bottom *= c;
    return this
};
function sg(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
}

f = sg.prototype;
f.clone = function () {
    return new sg(this.left, this.top, this.width, this.height)
};
function tg(a) {
    return new rg(a.top, a.left + a.width, a.top + a.height, a.left)
}

function ug(a) {
    return new sg(a.left, a.top, a.right - a.left, a.bottom - a.top)
}

function vg(a, b) {
    return a == b ? !0 : a && b ? a.left == b.left && a.width == b.width && a.top == b.top && a.height == b.height : !1
}

function wg(a, b) {
    var c = Math.max(a.left, b.left), d = Math.min(a.left + a.width, b.left + b.width);
    if (c <= d) {
        var e = Math.max(a.top, b.top), g = Math.min(a.top + a.height, b.top + b.height);
        if (e <= g)
            return a.left = c, a.top = e, a.width = d - c, a.height = g - e, !0
    }
    return !1
}

f.contains = function (a) {
    return a instanceof sg ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
function xg(a) {
    return new H(a.width, a.height)
}

f.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
f.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
f.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
f.scale = function (a, b) {
    var c = ha(b) ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= c;
    this.height *= c;
    return this
};
function yg(a) {
    yg[" "](a);
    return a
}

yg[" "] = v;
function zg(a, b) {
    try {
        return yg(a[b]), !0
    } catch (c) {
    }
    return !1
}
;
function Ag() {
    return dd ? "Webkit" : cd ? "Moz" : bd ? "ms" : ad ? "O" : null
}
;
function Bg(a, b, c) {
    if (w(b))
        (b = Cg(a, b)) && (a.style[b] = c);
    else
        for (var d in b) {
            c = a;
            var e = b[d], g = Cg(c, d);
            g && (c.style[g] = e)
        }
}

var Dg = {};

function Cg(a, b) {
    var c = Dg[b];
    if (!c) {
        var d = Xa(b), c = d;
        void 0 === a.style[d] && (d = Ag() + Ya(d), void 0 !== a.style[d] && (c = d));
        Dg[b] = c
    }
    return c
}

function Eg(a, b) {
    var c = a.style[Xa(b)];
    return "undefined" !== typeof c ? c : a.style[Cg(a, b)] || ""
}

function Fg(a, b) {
    var c = zd(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
}

function Gg(a, b) {
    return Fg(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}

function Hg(a, b, c) {
    var d;
    b instanceof Qc ? (d = b.x, b = b.y): (d = b, b = c);
    a.style.left = Ig(d, !1);
    a.style.top = Ig(b, !1)
}

function Jg(a) {
    return new Qc(a.offsetLeft, a.offsetTop)
}

function Kg(a) {
    var b;
    try {
        b = a.getBoundingClientRect()
    } catch (c) {
        return {left: 0, top: 0, right: 0, bottom: 0}
    }
    bd && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}

function Lg(a) {
    if (bd && !pd(8))
        return a.offsetParent;
    var b = zd(a), c = Gg(a, "position"), d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (11 == a.nodeType && a.host && (a = a.host), c = Gg(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))
            return a;
    return null
}

function Mg(a) {
    for (var b = new rg(0, Infinity, Infinity, 0), c = xd(a), d = c.j.body, e = c.j.documentElement, g = Id(c.j); a = Lg(a);)
        if (!(bd && 0 == a.clientWidth || dd && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != Gg(a, "overflow")) {
            var h = Ng(a), k = new Qc(a.clientLeft, a.clientTop);
            h.x += k.x;
            h.y += k.y;
            b.top = Math.max(b.top, h.y);
            b.right = Math.min(b.right, h.x + a.clientWidth);
            b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
            b.left = Math.max(b.left, h.x)
        }
    d = g.scrollLeft;
    g = g.scrollTop;
    b.left = Math.max(b.left, d);
    b.top = Math.max(b.top, g);
    c = Gd(ne(c) || window);
    b.right = Math.min(b.right, d + c.width);
    b.bottom = Math.min(b.bottom, g + c.height);
    return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
}

function Ng(a) {
    var b = zd(a);
    Gg(a, "position");
    var c = new Qc(0, 0), d;
    d = b ? zd(b) : document;
    d = !bd || pd(9) || me(xd(d)) ? d.documentElement : d.body;
    if (a == d)
        return c;
    a = Kg(a);
    b = oe(xd(b));
    c.x = a.left + b.x;
    c.y = a.top + b.y;
    return c
}

function Og(a, b) {
    var c = new Qc(0, 0), d = Jd(zd(a)), e = a;
    do {
        var g = d == b ? Ng(e) : Pg(e);
        c.x += g.x;
        c.y += g.y
    } while (d && d != b && d != d.parent && (e = d.frameElement) && (d = d.parent));
    return c
}

function Pg(a) {
    a = Kg(a);
    return new Qc(a.left, a.top)
}

function Qg(a) {
    if (1 == a.nodeType)
        return Pg(a);
    var b = ia(a.D), c = a;
    a.targetTouches && a.targetTouches.length ? c = a.targetTouches[0] : b && a.j.targetTouches && a.j.targetTouches.length && (c = a.j.targetTouches[0]);
    return new Qc(c.clientX, c.clientY)
}

function Rg(a, b, c) {
    if (b instanceof H)
        c = b.height, b = b.width;
    else if (void 0 == c)
        throw Error("missing height argument");
    Sg(a, b);
    a.style.height = Ig(c, !0)
}

function Ig(a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a
}

function Sg(a, b) {
    a.style.width = Ig(b, !0)
}

function Tg(a) {
    return Ug(a)
}

function Ug(a) {
    var b = Vg;
    if ("none" != Gg(a, "display"))
        return b(a);
    var c = a.style, d = c.display, e = c.visibility, g = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = g;
    c.visibility = e;
    return a
}

function Vg(a) {
    var b = a.offsetWidth, c = a.offsetHeight, d = dd && !b && !c;
    return n(b) && !d || !a.getBoundingClientRect ? new H(b, c) : (a = Kg(a),
    new H(a.right - a.left, a.bottom - a.top)
)
}

function Wg(a) {
    var b = Ng(a);
    a = Ug(a);
    return new sg(b.x, b.y, a.width, a.height)
}

function Xg(a, b) {
    var c = a.style;
    "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
}

function Yg(a, b) {
    a.style.display = b ? "" : "none"
}

function Zg(a) {
    return "rtl" == Gg(a, "direction")
}

function $g(a, b) {
    if (/^\d+px?$/.test(b))
        return parseInt(b, 10);
    var c = a.style.left, d = a.runtimeStyle.left;
    a.runtimeStyle.left = a.currentStyle.left;
    a.style.left = b;
    var e = a.style.pixelLeft;
    a.style.left = c;
    a.runtimeStyle.left = d;
    return e
}

function ah(a, b) {
    var c = a.currentStyle ? a.currentStyle[b] : null;
    return c ? $g(a, c) : 0
}

var bh = {thin: 2, medium: 4, thick: 6};

function ch(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null))
        return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"] : null;
    return c in bh ? bh[c] : $g(a, c)
}

function dh(a) {
    if (bd && !pd(9)) {
        var b = ch(a, "borderLeft"), c = ch(a, "borderRight"), d = ch(a, "borderTop");
        a = ch(a, "borderBottom");
        return new rg(d, c, a, b)
    }
    b = Fg(a, "borderLeftWidth");
    c = Fg(a, "borderRightWidth");
    d = Fg(a, "borderTopWidth");
    a = Fg(a, "borderBottomWidth");
    return new rg(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
}

var eh = /[^\d]+$/, fh = {cm: 1, "in": 1, mm: 1, pc: 1, pt: 1}, gh = {em: 1, ex: 1};

function hh(a) {
    var b = Gg(a, "fontSize"), c;
    c = (c = b.match(eh)) && c[0] || null;
    if (b && "px" == c)
        return parseInt(b, 10);
    if (bd) {
        if (c in fh)
            return $g(a, b);
        if (a.parentNode && 1 == a.parentNode.nodeType && c in gh)
            return a = a.parentNode, c = Gg(a, "fontSize"), $g(a, b == c ? "1em" : b)
    }
    c = I("span", {style: "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"});
    a.appendChild(c);
    b = c.offsetHeight;
    Sd(c);
    return b
}
;
function ih(a) {
    if (a.classList)
        return a.classList;
    a = a.className;
    return w(a) && a.match(/\S+/g) || []
}

function jh(a, b) {
    return a.classList ? a.classList.contains(b) : G(ih(a), b)
}

function N(a, b) {
    a.classList ? a.classList.add(b) : jh(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
}

function kh(a, b) {
    if (a.classList)
        D(b, function (b) {
            N(a, b)
        });
    else {
        var c = {};
        D(ih(a), function (a) {
            c[a] = !0
        });
        D(b, function (a) {
            c[a] = !0
        });
        a.className = "";
        for (var d in c)
            a.className += 0 < a.className.length ? " " + d : d
    }
}

function lh(a, b) {
    a.classList ? a.classList.remove(b) : jh(a, b) && (a.className = fb(ih(a), function (a) {
        return a != b
    }).join(" "))
}

function mh(a, b) {
    a.classList ? D(b, function (b) {
        lh(a, b)
    }) : a.className = fb(ih(a), function (a) {
        return !G(b, a)
    }).join(" ")
}

function P(a, b, c) {
    c ? N(a, b) : lh(a, b)
}

function nh(a, b) {
    var c = !jh(a, b);
    P(a, b, c)
}
;
var oh = dd ? "webkit" : cd ? "moz" : bd ? "ms" : ad ? "o" : "";

function ph(a) {
    var b = a.__yt_uid_key;
    b || (b = qh(), a.__yt_uid_key = b);
    return b
}

var qh = t("yt.dom.getNextId_");
if (!qh) {
    qh = function () {
        return ++rh
    };
    q("yt.dom.getNextId_", qh, void 0);
    var rh = 0
}
function sh(a, b) {
    var c = Cd(a, null, b);
    return c.length ? c[0] : null
}

function th(a, b) {
    if (a in b)
        return b[a];
    var c = oh + a.charAt(0).toUpperCase() + a.substr(1);
    if (c in b)
        return b[c]
}

function uh(a, b) {
    var c;
    hb(a, function (a) {
        c = th(a, b);
        return !!c
    });
    return c
}
;
function vh(a) {
    if (a = a || window.event) {
        for (var b in a)
            b in wh || (this[b] = a[b]);
        this.scale = a.scale;
        this.rotation = a.rotation;
        this.Mb = a;
        (b = a.target || a.srcElement) && 3 == b.nodeType && (b = b.parentNode);
        this.target = b;
        if (b = a.relatedTarget)
            try {
                b = b.nodeName ? b : null
            } catch (c) {
                b = null
            }
        else
            "mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
        this.relatedTarget = b;
        this.clientX = void 0 != a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 != a.clientY ? a.clientY : a.pageY;
        this.keyCode = a.keyCode ? a.keyCode : a.which;
        this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
        this.altKey = a.altKey;
        this.ctrlKey = a.ctrlKey;
        this.shiftKey = a.shiftKey;
        "MozMousePixelScroll" == this.type ? (this.wheelDeltaX = a.axis == a.HORIZONTAL_AXIS ? a.detail : 0, this.wheelDeltaY = a.axis == a.HORIZONTAL_AXIS ? 0 : a.detail) : window.opera ? (this.wheelDeltaX = 0, this.wheelDeltaY = a.detail) : 0 == a.wheelDelta % 120 ? "WebkitTransform" in document.documentElement.style ? window.chrome && 0 == navigator.platform.indexOf("Mac") ? (this.wheelDeltaX = a.wheelDeltaX / -30, this.wheelDeltaY =
            a.wheelDeltaY / -30) : (this.wheelDeltaX = a.wheelDeltaX / -1.2, this.wheelDeltaY = a.wheelDeltaY / -1.2) : (this.wheelDeltaX = 0, this.wheelDeltaY = a.wheelDelta / -1.6) : (this.wheelDeltaX = a.wheelDeltaX / -3, this.wheelDeltaY = a.wheelDeltaY / -3);
        this.j = a.pageX;
        this.k = a.pageY
    }
}

function xh(a) {
    if (document.body && document.documentElement) {
        var b = document.body.scrollTop + document.documentElement.scrollTop;
        a.j = a.clientX + (document.body.scrollLeft + document.documentElement.scrollLeft);
        a.k = a.clientY + b
    }
}

function yh(a) {
    n(a.j) || xh(a);
    return a.j
}

function zh(a) {
    n(a.k) || xh(a);
    return a.k
}

f = vh.prototype;
f.Mb = null;
f.type = "";
f.target = null;
f.relatedTarget = null;
f.currentTarget = null;
f.data = null;
f.source = null;
f.state = null;
f.keyCode = 0;
f.charCode = 0;
f.altKey = !1;
f.ctrlKey = !1;
f.shiftKey = !1;
f.clientX = 0;
f.clientY = 0;
f.wheelDeltaX = 0;
f.wheelDeltaY = 0;
f.rotation = 0;
f.scale = 1;
f.touches = null;
f.changedTouches = null;
f.preventDefault = function () {
    this.Mb.returnValue = !1;
    this.Mb.preventDefault && this.Mb.preventDefault()
};
f.stopPropagation = function () {
    this.Mb.cancelBubble = !0;
    this.Mb.stopPropagation && this.Mb.stopPropagation()
};
f.stopImmediatePropagation = function () {
    this.Mb.cancelBubble = !0;
    this.Mb.stopImmediatePropagation && this.Mb.stopImmediatePropagation()
};
var wh = {
    stopImmediatePropagation: 1,
    stopPropagation: 1,
    preventMouseEvent: 1,
    preventManipulation: 1,
    preventDefault: 1,
    layerX: 1,
    layerY: 1,
    scale: 1,
    rotation: 1
};
var Ah = t("yt.events.listeners_") || {};
q("yt.events.listeners_", Ah, void 0);
var Bh = t("yt.events.counter_") || {count: 0};
q("yt.events.counter_", Bh, void 0);
function Ch(a, b, c, d) {
    return Sb(Ah, function (e) {
        return e[0] == a && e[1] == b && e[2] == c && e[4] == !!d
    })
}

function Q(a, b, c, d) {
    if (!a || !a.addEventListener && !a.attachEvent)
        return "";
    d = !!d;
    var e = Ch(a, b, c, d);
    if (e)
        return e;
    var e = ++Bh.count + "", g = !("mouseenter" != b && "mouseleave" != b || !a.addEventListener || "onmouseenter" in document), h;
    h = g ? function (d) {
        d = new vh(d);
        if (!le(d.relatedTarget, function (b) {
                return b == a
            }, !0))
            return d.currentTarget = a, d.type = b, c.call(a, d)
    } : function (b) {
        b = new vh(b);
        b.currentTarget = a;
        return c.call(a, b)
    };
    h = Pf(h);
    Ah[e] = [a, b, c, h, d];
    a.addEventListener ? "mouseenter" == b && g ? a.addEventListener("mouseover",
        h, d) : "mouseleave" == b && g ? a.addEventListener("mouseout", h, d) : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style ? a.addEventListener("MozMousePixelScroll", h, d) : a.addEventListener(b, h, d) : a.attachEvent("on" + b, h);
    return e
}

function Dh(a, b) {
    var c;
    c = Q(a, "playing", function () {
        Eh(c);
        b.apply(a, arguments)
    }, void 0)
}

function Fh(a, b, c, d) {
    return Gh(a, b, c, function (a) {
        return jh(a, d)
    })
}

function Gh(a, b, c, d) {
    var e = a || document;
    return Q(e, b, function (a) {
        var b = le(a.target, function (a) {
            return a === e || d(a)
        }, !0);
        b && b !== e && !b.disabled && (a.currentTarget = b, c.call(b, a))
    })
}

function Eh(a) {
    a && ("string" == typeof a && (a = [a]), D(a, function (a) {
        if (a in Ah) {
            var c = Ah[a], d = c[0], e = c[1], g = c[3], c = c[4];
            d.removeEventListener ? d.removeEventListener(e, g, c) : d.detachEvent && d.detachEvent("on" + e, g);
            delete Ah[a]
        }
    }))
}

function Hh(a) {
    for (var b in Ah)
        Ah[b][0] == a && Eh(b)
}

function Ih(a, b) {
    if (document.createEvent) {
        var c = document.createEvent("HTMLEvents");
        c.initEvent(b, !0, !0);
        a.dispatchEvent(c)
    } else
        c = document.createEventObject(), a.fireEvent("on" + b, c)
}
;
function Jh() {
    return !!uh(["fullscreenEnabled", "fullScreenEnabled"], document)
}

function Kh() {
    return uh(["fullscreenElement", "fullScreenElement"], document)
}
;
function Lh(a) {
    a = a || {};
    this.url = a.url || "";
    this.urlV8 = a.url_v8 || "";
    this.urlV9As2 = a.url_v9as2 || "";
    this.args = a.args || $b(Mh);
    this.assets = a.assets || {};
    this.attrs = a.attrs || $b(Nh);
    this.params = a.params || $b(Oh);
    this.minVersion = a.min_version || "8.0.0";
    this.fallback = a.fallback || null;
    this.fallbackMessage = a.fallbackMessage || null;
    this.html5 = !!a.html5;
    this.disable = a.disable || {};
    this.loaded = !!a.loaded;
    this.messages = a.messages || {}
}

var Mh = {enablejsapi: 1}, Nh = {}, Oh = {allowscriptaccess: "always", allowfullscreen: "true", bgcolor: "#000000"};
Lh.prototype.clone = function () {
    var a = new Lh, b;
    for (b in this) {
        var c = this[b];
        "object" == ca(c) ? a[b] = $b(c) : a[b] = c
    }
    return a
};
var Ph = Xc("Firefox"), Qh = $c() || Xc("iPod"), Rh = Xc("iPad"), Sh = Xc("Android") && !(Zc() || Xc("Firefox") || Yc() || Xc("Silk")), Th = Zc(), Uh = Xc("Safari") && !(Zc() || Xc("Coast") || Yc() || Xc("Silk") || Xc("Android"));
var Vh = y(), Wh = null, Xh = Array(50), Yh = -1, Zh = !1;

function $h(a) {
    ai();
    Wh.push(a);
    bi(Wh)
}

function ci(a) {
    var b = t("yt.mdx.remote.debug.handlers_");
    pb(b || [], a)
}

function di(a, b) {
    ai();
    var c = Wh, d = ei(a, String(b));
    mb(c) ? fi(d) : (bi(c), D(c, function (a) {
        a(d)
    }))
}

function ai() {
    Wh || (Wh = t("yt.mdx.remote.debug.handlers_") || [], q("yt.mdx.remote.debug.handlers_", Wh, void 0))
}

function fi(a) {
    var b = (Yh + 1) % 50;
    Yh = b;
    Xh[b] = a;
    Zh || (Zh = 49 == b)
}

function bi(a) {
    var b = Xh;
    if (b[0]) {
        var c = Yh, d = Zh ? c : -1;
        do {
            var d = (d + 1) % 50, e = b[d];
            D(a, function (a) {
                a(e)
            })
        } while (d != c);
        Xh = Array(50);
        Yh = -1;
        Zh = !1
    }
}

function ei(a, b) {
    var c = (y() - Vh) / 1E3;
    c.toFixed && (c = c.toFixed(3));
    var d = [];
    d.push("[", c + "s", "] ");
    d.push("[", "yt.mdx.remote", "] ");
    d.push(a + ": " + b, "\n");
    return d.join("")
}
;
function gi(a) {
    a = a || {};
    this.name = a.name || "";
    this.id = a.id || a.screenId || "";
    this.token = a.token || a.loungeToken || "";
    this.uuid = a.uuid || a.dialId || ""
}

function hi(a, b) {
    return !!b && (a.id == b || a.uuid == b)
}

function ii(a, b) {
    return a || b ? !a != !b ? !1 : a.id == b.id && a.token == b.token && a.name == b.name && a.uuid == b.uuid : !0
}

function ji(a) {
    return {name: a.name, screenId: a.id, loungeToken: a.token, dialId: a.uuid}
}

function ki(a) {
    return new gi(a)
}

function li(a) {
    return ea(a) ? E(a, ki) : []
}

function mi(a) {
    return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + (a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + "}" : "null"
}

function ni(a) {
    return ea(a) ? "[" + E(a, mi).join(",") + "]" : "null"
}
;
function oi(a, b, c) {
    a && (a.dataset ? a.dataset[pi(b)] = c : a.setAttribute("data-" + b, c))
}

function qi(a, b) {
    return a ? a.dataset ? a.dataset[pi(b)] : a.getAttribute("data-" + b) : null
}

var ri = {};

function pi(a) {
    return ri[a] || (ri[a] = String(a).replace(/\-([a-z])/g, function (a, c) {
            return c.toUpperCase()
        }))
}
;
function R() {
    this.Ua = this.Ua;
    this.Ga = this.Ga
}

R.prototype.Ua = !1;
R.prototype.ha = function () {
    return this.Ua
};
R.prototype.dispose = function () {
    this.Ua || (this.Ua = !0, this.L())
};
function S(a, b) {
    si(a, pa(ti, b))
}

function si(a, b) {
    a.Ua ? b.call(void 0) : (a.Ga || (a.Ga = []), a.Ga.push(n(void 0) ? x(b, void 0) : b))
}

R.prototype.L = function () {
    if (this.Ga)
        for (; this.Ga.length;)
            this.Ga.shift()()
};
function ui(a) {
    return a && "function" == typeof a.ha ? a.ha() : !1
}

function ti(a) {
    a && "function" == typeof a.dispose && a.dispose()
}

function vi(a) {
    for (var b = 0, c = arguments.length; b < c; ++b) {
        var d = arguments[b];
        ga(d) ? vi.apply(null, d) : ti(d)
    }
}
;
function wi() {
    R.call(this);
    this.j = [];
    this.gc = {}
}

inherit(wi, R);
f = wi.prototype;
f.hp = 1;
f.Zi = 0;
f.subscribe = function (a, b, c) {
    var d = this.gc[a];
    d || (d = this.gc[a] = []);
    var e = this.hp;
    this.j[e] = a;
    this.j[e + 1] = b;
    this.j[e + 2] = c;
    this.hp = e + 3;
    d.push(e);
    return e
};
f.unsubscribe = function (a, b, c) {
    if (a = this.gc[a]) {
        var d = this.j;
        if (a = F(a, function (a) {
                return d[a + 1] == b && d[a + 2] == c
            }))
            return this.Lb(a)
    }
    return !1
};
f.Lb = function (a) {
    if (0 != this.Zi)
        return this.k || (this.k = []), this.k.push(a), !1;
    var b = this.j[a];
    if (b) {
        var c = this.gc[b];
        c && pb(c, a);
        delete this.j[a];
        delete this.j[a + 1];
        delete this.j[a + 2]
    }
    return !!b
};
f.publish = function (a, b) {
    var c = this.gc[a];
    if (c) {
        this.Zi++;
        for (var d = Array(arguments.length - 1), e = 1, g = arguments.length; e < g; e++)
            d[e - 1] = arguments[e];
        e = 0;
        for (g = c.length; e < g; e++) {
            var h = c[e];
            this.j[h + 1].apply(this.j[h + 2], d)
        }
        this.Zi--;
        if (this.k && 0 == this.Zi)
            for (; c = this.k.pop();)
                this.Lb(c);
        return 0 != e
    }
    return !1
};
f.clear = function (a) {
    if (a) {
        var b = this.gc[a];
        b && (D(b, this.Lb, this), delete this.gc[a])
    } else
        this.j.length = 0, this.gc = {}
};
f.Pa = function (a) {
    if (a) {
        var b = this.gc[a];
        return b ? b.length : 0
    }
    a = 0;
    for (b in this.gc)
        a += this.Pa(b);
    return a
};
f.L = function () {
    wi.J.L.call(this);
    delete this.j;
    delete this.gc;
    delete this.k
};
var xi = t("yt.pubsub.instance_") || new wi;
wi.prototype.subscribe = wi.prototype.subscribe;
wi.prototype.unsubscribeByKey = wi.prototype.Lb;
wi.prototype.publish = wi.prototype.publish;
wi.prototype.clear = wi.prototype.clear;
q("yt.pubsub.instance_", xi, void 0);
var yi = t("yt.pubsub.subscribedKeys_") || {};
q("yt.pubsub.subscribedKeys_", yi, void 0);
var zi = t("yt.pubsub.topicToKeys_") || {};
q("yt.pubsub.topicToKeys_", zi, void 0);
var Ai = t("yt.pubsub.isSynchronous_") || {};
q("yt.pubsub.isSynchronous_", Ai, void 0);
var Bi = t("yt.pubsub.skipSubId_") || null;
q("yt.pubsub.skipSubId_", Bi, void 0);
function Ci(a, b, c) {
    var d = Di();
    if (d) {
        var e = d.subscribe(a, function () {
            if (!Bi || Bi != e) {
                var d = arguments, h = function () {
                    yi[e] && b.apply(c || window, d)
                };
                try {
                    Ai[a] ? h() : L(h, 0)
                } catch (k) {
                    Sf(k)
                }
            }
        }, c);
        yi[e] = !0;
        zi[a] || (zi[a] = []);
        zi[a].push(e);
        return e
    }
    return 0
}

function Ei(a) {
    var b = Di();
    b && ("number" == typeof a ? a = [a] : "string" == typeof a && (a = [parseInt(a, 10)]), D(a, function (a) {
        b.unsubscribeByKey(a);
        delete yi[a]
    }))
}

function Fi(a, b) {
    var c = Di();
    c && c.publish.apply(c, arguments)
}

function Gi(a, b) {
    Ai[a] = !0;
    var c = Di();
    c && c.publish.apply(c, arguments);
    Ai[a] = !1
}

function Di() {
    return t("yt.pubsub.instance_")
}
;
function Hi() {
}
;
function Ii() {
}

inherit(Ii, Hi);
Ii.prototype.Pa = function () {
    var a = 0;
    se(this.Wb(!0), function () {
        a++
    });
    return a
};
Ii.prototype.clear = function () {
    var a = te(this.Wb(!0)), b = this;
    D(a, function (a) {
        b.remove(a)
    })
};
function Ji(a) {
    this.j = a
}

inherit(Ji, Ii);
f = Ji.prototype;
f.isAvailable = function () {
    if (!this.j)
        return !1;
    try {
        return this.j.setItem("__sak", "1"), this.j.removeItem("__sak"), !0
    } catch (a) {
        return !1
    }
};
f.set = function (a, b) {
    try {
        this.j.setItem(a, b)
    } catch (c) {
        if (0 == this.j.length)
            throw "Storage mechanism: Storage disabled";
        throw "Storage mechanism: Quota exceeded";
    }
};
f.get = function (a) {
    a = this.j.getItem(a);
    if (!w(a) && null !== a)
        throw "Storage mechanism: Invalid value was encountered";
    return a
};
f.remove = function (a) {
    this.j.removeItem(a)
};
f.Pa = function () {
    return this.j.length
};
f.Wb = function (a) {
    var b = 0, c = this.j, d = new qe;
    d.next = function () {
        if (b >= c.length)
            throw pe;
        var d;
        d = c.key(b++);
        if (a)
            return d;
        d = c.getItem(d);
        if (!w(d))
            throw "Storage mechanism: Invalid value was encountered";
        return d
    };
    return d
};
f.clear = function () {
    this.j.clear()
};
f.key = function (a) {
    return this.j.key(a)
};
function Ki() {
    var a = null;
    try {
        a = window.localStorage || null
    } catch (b) {
    }
    this.j = a
}

inherit(Ki, Ji);
function Li() {
    var a = null;
    try {
        a = window.sessionStorage || null
    } catch (b) {
    }
    this.j = a
}

inherit(Li, Ji);
function Mi(a) {
    this.j = a
}

Mi.prototype.set = function (a, b) {
    n(b) ? this.j.set(a, lg(b)) : this.j.remove(a)
};
Mi.prototype.get = function (a) {
    var b;
    try {
        b = this.j.get(a)
    } catch (c) {
        return
    }
    if (null !== b)
        try {
            return jg(b)
        } catch (d) {
            throw "Storage: Invalid value was encountered";
        }
};
Mi.prototype.remove = function (a) {
    this.j.remove(a)
};
function Ni(a) {
    this.j = a
}

inherit(Ni, Mi);
function Oi(a) {
    this.data = a
}

function Pi(a) {
    return !n(a) || a instanceof Oi ? a : new Oi(a)
}

Ni.prototype.set = function (a, b) {
    Ni.J.set.call(this, a, Pi(b))
};
Ni.prototype.k = function (a) {
    a = Ni.J.get.call(this, a);
    if (!n(a) || a instanceof Object)
        return a;
    throw "Storage: Invalid value was encountered";
};
Ni.prototype.get = function (a) {
    if (a = this.k(a)) {
        if (a = a.data, !n(a))
            throw "Storage: Invalid value was encountered";
    } else
        a = void 0;
    return a
};
function Qi(a) {
    this.j = a
}

inherit(Qi, Ni);
function Ri(a) {
    var b = a.creation;
    a = a.expiration;
    return !!a && a < y() || !!b && b > y()
}

Qi.prototype.set = function (a, b, c) {
    if (b = Pi(b)) {
        if (c) {
            if (c < y()) {
                Qi.prototype.remove.call(this, a);
                return
            }
            b.expiration = c
        }
        b.creation = y()
    }
    Qi.J.set.call(this, a, b)
};
Qi.prototype.k = function (a, b) {
    var c = Qi.J.k.call(this, a);
    if (c)
        if (!b && Ri(c))
            Qi.prototype.remove.call(this, a);
        else
            return c
};
function Si(a) {
    this.j = a
}

inherit(Si, Qi);
function Ti(a, b) {
    var c = [];
    se(b, function (a) {
        var b;
        try {
            b = Si.prototype.k.call(this, a, !0)
        } catch (g) {
            if ("Storage: Invalid value was encountered" == g)
                return;
            throw g;
        }
        n(b) ? Ri(b) && c.push(a) : c.push(a)
    }, a);
    return c
}

function Ui(a, b) {
    var c = Ti(a, b);
    D(c, function (a) {
        Si.prototype.remove.call(this, a)
    }, a)
}

function Vi() {
    var a = Wi;
    Ui(a, a.j.Wb(!0))
}
;
function Xi(a, b, c) {
    var d = c && 0 < c ? c : 0;
    c = d ? y() + 1E3 * d : 0;
    if ((d = d ? Wi : Yi) && window.JSON) {
        w(b) || (b = JSON.stringify(b, void 0));
        try {
            d.set(a, b, c)
        } catch (e) {
            d.remove(a)
        }
    }
}

function Zi(a) {
    if (!Yi && !Wi || !window.JSON)
        return null;
    var b;
    try {
        b = Yi.get(a)
    } catch (c) {
    }
    if (!w(b))
        try {
            b = Wi.get(a)
        } catch (d) {
        }
    if (!w(b))
        return null;
    try {
        b = JSON.parse(b, void 0)
    } catch (e) {
    }
    return b
}

function $i(a) {
    Yi && Yi.remove(a);
    Wi && Wi.remove(a)
}

var Wi, aj = new Ki;
Wi = aj.isAvailable() ? new Si(aj) : null;
var Yi, bj = new Li;
Yi = bj.isAvailable() ? new Si(bj) : null;
var cj = ["boadgeojelhgndaghljhdicfkmllpafd", "dliochdbjfkdbacpmhlcpmleaejidimm", "hfaagokkkhdbgiakmmlclaapfelnkoah", "fmfcbgogabcbclcofgocippekhfcmgfj", "enhhojjnijigcajfphajepfemndkmdlo"];

function dj(a, b) {
    a == cj.length ? b(null) : ej(cj[a], function (c) {
        c ? (c = cj[a], Xi("yt-remote-cast-last-extension", c), b(c)
        ) :
        dj(a + 1, b)
    })
}

function fj(a) {
    return "chrome-extension://" + a + "/cast_sender.js"
}

function ej(a, b) {
    var c = new XMLHttpRequest;
    c.onreadystatechange = function () {
        4 == c.readyState && 200 == c.status && b(!0)
    };
    c.onerror = function () {
        b(!1)
    };
    try {
        c.open("GET", fj(a), !0), c.send()
    } catch (d) {
        b(!1)
    }
}

function gj(a) {
    window.__onGCastApiAvailable = a;
    hj(function (b) {
        if (b) {
            di("bootstrap", "Found cast extension: " + b);
            q("chrome.cast.extensionId", b, void 0);
            var c = document.createElement("script");
            c.src = fj(b);
            c.onerror = function () {
                ij();
                $i("yt-remote-cast-last-extension");
                a(!1, "Extension JS failed to load.")
            };
            (document.head || document.documentElement).appendChild(c)
        } else
            di("bootstrap", "No cast extension found"), a(!1, "No cast extension found")
    })
}

function ij() {
    window.__onGCastApiAvailable && delete window.__onGCastApiAvailable
}

function hj(a) {
    var b = Zi("yt-remote-cast-last-extension");
    b ? a(b) : dj(0, a)
}
;
var jj = {EJ: "ska", lJ: "que", KI: "mus", BJ: "sus"};

function kj(a) {
    var b = a.type;
    if (!n(b))
        return null;
    switch (b.toLowerCase()) {
        case "checkbox":
        case "radio":
            return a.checked ? a.value : null;
        case "select-one":
            return b = a.selectedIndex, 0 <= b ? a.options[b].value : null;
        case "select-multiple":
            for (var b = [], c, d = 0; c = a.options[d]; d++)
                c.selected && b.push(c.value);
            return b.length ? b : null;
        default:
            return n(a.value) ? a.value : null
    }
}
;
function lj(a, b) {
    rc(a);
    rc(a);
    return Oc(b, null)
}
;
function mj(a, b) {
    for (var c = a.split(b), d = {}, e = 0, g = c.length; e < g; e++) {
        var h = c[e].split("=");
        if (1 == h.length && h[0] || 2 == h.length) {
            var k = za(h[0] || ""), h = za(h[1] || "");
            k in d ? ea(d[k]) ? ub(d[k], h) : d[k] = [d[k], h] : d[k] = h
        }
    }
    return d
}

function nj(a, b) {
    var c = [];
    Ib(a, function (a, b) {
        var g = ya(b), h;
        ea(a) ? h = a : h = [a];
        D(h, function (a) {
            "" == a ? c.push(g) : c.push(g + "=" + ya(a))
        })
    });
    return c.join(b)
}

function oj(a) {
    "?" == a.charAt(0) && (a = a.substr(1));
    return mj(a, "&")
}

function pj(a) {
    a = a.split(",");
    return a = a.map(function (a) {
        return oj(a)
    })
}

function qj(a) {
    return -1 != a.indexOf("?") ? (a = (a || "").split("#")[0], a = a.split("?", 2), oj(1 < a.length ? a[1] : a[0])
) :
    {}
}

var rj = He;

function sj(a) {
    var b = Fe(a);
    a = b[1];
    var c = b[2], d = b[3], b = b[4], e = "";
    a && (e += a + ":");
    d && (e += "//", c && (e += c + "@"), e += d, b && (e += ":" + b));
    return e
}

function tj(a, b) {
    var c = a.split("#", 2);
    a = c[0];
    var c = 1 < c.length ? "#" + c[1] : "", d = a.split("?", 2);
    a = d[0];
    var d = oj(d[1] || ""), e;
    for (e in b)
        d[e] = b[e];
    return Re(a, d) + c
}

function uj() {
    var a;
    a || (a = document.location.href);
    a = Fe(a)[1] || null;
    return null !== a && "https" == a
}
;
var vj = null;
"undefined" != typeof XMLHttpRequest ? vj = function () {
    return new XMLHttpRequest
} : "undefined" != typeof ActiveXObject && (vj = function () {
    return new ActiveXObject("Microsoft.XMLHTTP")
});
function wj(a) {
    switch (a && "status" in a ? a.status : -1) {
        case 200:
        case 201:
        case 202:
        case 203:
        case 204:
        case 205:
        case 206:
        case 304:
            return !0;
        default:
            return !1
    }
}
;
function xj(a, b, c, d, e, g, h) {
    function k() {
        4 == (l && "readyState" in l ? l.readyState : 0) && b && Pf(b)(l)
    }

    var l = vj && vj();
    if (!("open" in l))
        return null;
    "onloadend" in l ? l.addEventListener("loadend", k, !1) : l.onreadystatechange = k;
    c = (c || "GET").toUpperCase();
    d = d || "";
    l.open(c, a, !0);
    g && (l.responseType = g);
    h && (l.withCredentials = !0);
    g = "POST" == c;
    if (e = yj(a, e))
        for (var p in e)
            l.setRequestHeader(p, e[p]), "content-type" == p.toLowerCase() && (g = !1);
    g && l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    l.send(d);
    return l
}

function yj(a, b) {
    b = b || {};
    for (var c in zj) {
        var d = Of(zj[c]), e;
        if (e = d) {
            e = a;
            var g = void 0;
            g = window.location.href;
            var h = Fe(e)[1] || null, k = rj(e);
            h && k ? (e = Fe(e), g = Fe(g), e = e[3] == g[3] && e[1] == g[1] && e[4] == g[4]):e = k ? rj(g) == k && (Number(Fe(g)[4] || null) || null) == (Number(Fe(e)[4] || null) || null) : !0;
            e || (e = c, g = Of("CORS_HEADER_WHITELIST") || {}, e = (h = rj(a)) ? (g = g[h]) ? G(g, e) : !1 : !0)
        }
        e && (b[c] = d)
    }
    return b
}

function Aj(a, b) {
    var c = Of("XSRF_FIELD_NAME"), d;
    b.headers && (d = b.headers["Content-Type"]);
    return !b.NK && (!rj(a) || rj(a) == document.location.hostname) && "POST" == b.method && (!d || "application/x-www-form-urlencoded" == d) && !(b.Eb && b.Eb[c])
}

function Bj(a, b) {
    var c = b.format || "JSON";
    b.TK && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
    var d = Of("XSRF_FIELD_NAME"), e = Of("XSRF_TOKEN"), g = b.Vf;
    g && (g[d] && delete g[d], a = tj(a, g));
    var h = b.JC || "", g = b.Eb;
    Aj(a, b) && (g || (g = {}), g[d] = e);
    g && w(h) && (d = oj(h), cc(d, g), h = Pe(d));
    var k = !1, l, p = xj(a, function (a) {
        if (!k) {
            k = !0;
            l && M(l);
            var d = wj(a), e = null;
            if (d || 400 <= a.status && 500 > a.status)
                e = Cj(c, a, b.MK);
            if (d)
                t: {
                    switch (c) {
                        case "XML":
                            d = 0 == parseInt(e &&
                            e.return_code, 10);
                            break t;
                        case "RAW":
                            d = !0;
                            break t
                    }
                    d = !!e
                }
            var e = e || {}, g = b.context || m;
            d ? b.fb && b.fb.call(g, a, e) : b.onError && b.onError.call(g, a, e);
            b.$b && b.$b.call(g, a, e)
        }
    }, b.method, h, b.headers, b.responseType, b.withCredentials);
    b.Ge && 0 < b.timeout && (l = L(function () {
        k || (k = !0, p.abort(), M(l), b.Ge.call(b.context || m, p))
    }, b.timeout));
    return p
}

function Cj(a, b, c) {
    var d = null;
    switch (a) {
        case "JSON":
            a = b.responseText;
            b = b.getResponseHeader("Content-Type") || "";
            a && 0 <= b.indexOf("json") && (d = kg(a));
            break;
        case "XML":
            if (b = (b = b.responseXML) ? Dj(b) : null)
                d = {}, D(b.getElementsByTagName("*"), function (a) {
                    d[a.tagName] = Ej(a)
                })
    }
    if (c)
        for (var e in d)
            wa(e, "_html") && (d[e] = lj(sc(), d[e]));
    return d
}

function Dj(a) {
    return a ? (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : null : null
}

function Ej(a) {
    var b = "";
    D(a.childNodes, function (a) {
        b += a.nodeValue
    });
    return b
}

var Fj = {
    html5_ajax: "action_get_html5_token",
    watch_actions_ajax: "action_get_watch_actions_token",
    addto_ajax: "action_get_wl_token",
    playlist_video_ajax: "action_get_html5_wl_token"
}, Gj = {
    html5_ajax: "html5_ajax_token",
    watch_actions_ajax: "watch_actions_ajax_token",
    addto_ajax: "addto_ajax_token",
    playlist_video_ajax: "playlist_video_ajax_token"
};

function Hj(a, b, c, d) {
    if (Of("XSRF_TOKEN"))
        c && window.setTimeout(c, 0);
    else {
        var e = sj(document.location.href) + "/token_ajax", g = {};
        a && (g.authuser = a);
        b && (g.pageid = b);
        g[Fj.watch_actions_ajax] = 1;
        Bj(e, {
            format: "RAW", method: "GET", Vf: g, $b: function (a) {
                var b = oj(a.responseText);
                b[Gj.watch_actions_ajax] ? c && c() : d && d(a, b)
            }
        })
    }
}

var zj = {
    "X-YouTube-Page-CL": "PAGE_CL",
    "X-YouTube-Page-Timestamp": "PAGE_BUILD_TIMESTAMP",
    "X-YouTube-Variants-Checksum": "VARIANTS_CHECKSUM"
};

function Ij(a) {
    this.port = this.o = "";
    this.j = "/api/lounge";
    this.k = !0;
    a = a || document.location.href;
    var b = Number(Fe(a)[4] || null) || null || "";
    b && (this.port = ":" + b);
    this.o = He(a) || "";
    a = Uc;
    0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > Sa(a, "10.0") && (this.k = !1))
}

function Jj(a, b, c, d) {
    var e = a.j;
    if (n(d) ? d : a.k)
        e = "https://" + a.o + a.port + a.j;
    return Re(e + b, c || {})
}

Ij.prototype.sendRequest = function (a, b, c, d, e, g, h) {
    a = {
        format: g ? "RAW" : "JSON",
        method: a,
        context: this,
        timeout: 5E3,
        withCredentials: !!h,
        fb: pa(this.B, d, !g),
        onError: pa(this.A, e),
        Ge: pa(this.C, e)
    };
    c && (a.Eb = c, a.headers = {"Content-Type": "application/x-www-form-urlencoded"});
    return Bj(b, a)
};
Ij.prototype.B = function (a, b, c, d) {
    b ? a(d) : a({text: c.responseText})
};
Ij.prototype.A = function (a, b) {
    a(Error("Request error: " + b.status))
};
Ij.prototype.C = function (a) {
    a(Error("request timed out"))
};
function Kj(a) {
    a && (this.id = a.id || "", this.name = a.name || "", this.activityId = a.activityId || "", this.status = a.status || "UNKNOWN")
}

Kj.prototype.id = "";
Kj.prototype.name = "";
Kj.prototype.activityId = "";
Kj.prototype.status = "UNKNOWN";
Kj.prototype.toString = function () {
    return "{id:" + this.id + ",name:" + this.name + ",activityId:" + this.activityId + ",status:" + this.status + "}"
};
function Lj() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
        var b = 16 * Math.random() | 0;
        return ("x" == a ? b : b & 3 | 8).toString(16)
    })
}

function Mj(a) {
    return E(a, function (a) {
        return {key: a.id, name: a.name}
    })
}

function Nj(a) {
    return E(a, function (a) {
        return new Kj(a)
    })
}

function Oj(a, b) {
    return F(a, function (a) {
        return a.id == b
    })
}

function Pj(a, b) {
    return F(a, function (a) {
        return a || b ? !a != !b ? !1 : a.id == b.id : !0
    })
}

function Qj(a, b) {
    return F(a, function (a) {
        return hi(a, b)
    })
}
;
function T() {
    R.call(this);
    this.P = new wi;
    S(this, this.P)
}

inherit(T, R);
T.prototype.subscribe = function (a, b, c) {
    return this.ha() ? 0 : this.P.subscribe(a, b, c)
};
T.prototype.unsubscribe = function (a, b, c) {
    return this.ha() ? !1 : this.P.unsubscribe(a, b, c)
};
T.prototype.Lb = function (a) {
    return this.ha() ? !1 : this.P.Lb(a)
};
T.prototype.publish = function (a, b) {
    return this.ha() ? !1 : this.P.publish.apply(this.P, arguments)
};
function Rj(a) {
    T.call(this);
    this.C = a;
    this.screens = []
}

inherit(Rj, T);
f = Rj.prototype;
f.Zb = function () {
    return this.screens
};
f.contains = function (a) {
    return !!Pj(this.screens, a)
};
f.get = function (a) {
    return a ? Qj(this.screens, a) : null
};
function Sj(a, b) {
    var c = a.get(b.uuid) || a.get(b.id);
    if (c) {
        var d = c.name;
        c.id = b.id || c.id;
        c.name = b.name;
        c.token = b.token;
        c.uuid = b.uuid || c.uuid;
        return c.name != d
    }
    a.screens.push(b);
    return !0
}

function Tj(a, b) {
    var c = a.screens.length != b.length;
    a.screens = fb(a.screens, function (a) {
        return !!Pj(b, a)
    });
    for (var d = 0, e = b.length; d < e; d++)
        c = Sj(a, b[d]) || c;
    return c
}

function Uj(a, b) {
    var c = a.screens.length;
    a.screens = fb(a.screens, function (a) {
        return !(a || b ? !a != !b ? 0 : a.id == b.id : 1)
    });
    return a.screens.length < c
}

f.info = function (a) {
    di(this.C, a)
};
f.warn = function (a) {
    di(this.C, a)
};
function Vj(a, b, c, d) {
    T.call(this);
    this.D = a;
    this.C = b;
    this.A = c;
    this.B = d;
    this.o = 0;
    this.j = null;
    this.k = NaN
}

inherit(Vj, T);
var Wj = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
f = Vj.prototype;
f.start = function () {
    !this.j && isNaN(this.k) && this.Ds()
};
f.stop = function () {
    this.j && (this.j.abort(), this.j = null);
    isNaN(this.k) || (M(this.k), this.k = NaN)
};
f.L = function () {
    this.stop();
    Vj.J.L.call(this)
};
f.Ds = function () {
    this.k = NaN;
    this.j = Bj(Jj(this.D, "/pairing/get_screen"), {
        method: "POST",
        Eb: {pairing_code: this.C},
        timeout: 5E3,
        fb: x(this.ID, this),
        onError: x(this.HD, this),
        Ge: x(this.JD, this)
    })
};
f.ID = function (a, b) {
    this.j = null;
    var c = b.screen || {};
    c.dialId = this.A;
    c.name = this.B;
    this.publish("pairingComplete", new gi(c))
};
f.HD = function (a) {
    this.j = null;
    a.status && 404 == a.status ? this.o >= Wj.length ? this.publish("pairingFailed", Error("DIAL polling timed out")) : (a = Wj[this.o], this.k = L(x(this.Ds, this), a), this.o++
    ) :
    this.publish("pairingFailed", Error("Server error " + a.status))
};
f.JD = function () {
    this.j = null;
    this.publish("pairingFailed", Error("Server not responding"))
};
function Xj(a, b) {
    this.If = a;
    this.ze = b + "::"
}

inherit(Xj, Ii);
f = Xj.prototype;
f.If = null;
f.ze = "";
f.set = function (a, b) {
    this.If.set(this.ze + a, b)
};
f.get = function (a) {
    return this.If.get(this.ze + a)
};
f.remove = function (a) {
    this.If.remove(this.ze + a)
};
f.Wb = function (a) {
    var b = this.If.Wb(!0), c = this, d = new qe;
    d.next = function () {
        for (var d = b.next(); d.substr(0, c.ze.length) != c.ze;)
            d = b.next();
        return a ? d.substr(c.ze.length) : c.If.get(d)
    };
    return d
};
function Yj(a) {
    var b = new Ki;
    return b.isAvailable() ? a ? new Xj(b, a) : b : null
}
;
function Zj(a) {
    this.j = new ue;
    if (a) {
        a = Ae(a);
        for (var b = a.length, c = 0; c < b; c++)
            this.add(a[c])
    }
}

function ak(a) {
    var b = typeof a;
    return "object" == b && a || "function" == b ? "o" + ka(a) : b.substr(0, 1) + a
}

f = Zj.prototype;
f.Pa = function () {
    return this.j.Pa()
};
f.add = function (a) {
    this.j.set(ak(a), a)
};
f.removeAll = function (a) {
    a = Ae(a);
    for (var b = a.length, c = 0; c < b; c++)
        this.remove(a[c])
};
f.remove = function (a) {
    return this.j.remove(ak(a))
};
f.clear = function () {
    this.j.clear()
};
f.isEmpty = function () {
    return this.j.isEmpty()
};
f.contains = function (a) {
    return we(this.j, ak(a))
};
f.Ka = function () {
    return this.j.Ka()
};
f.clone = function () {
    return new Zj(this)
};
f.equals = function (a) {
    return this.Pa() == ze(a) && bk(this, a)
};
function bk(a, b) {
    var c = ze(b);
    if (a.Pa() > c)
        return !1;
    !(b instanceof Zj) && 5 < c && (b = new Zj(b));
    return De(a, function (a) {
        var c = b;
        return "function" == typeof c.contains ? c.contains(a) : "function" == typeof c.jf ? c.jf(a) : ga(c) || w(c) ? G(c, a) : Ob(c, a)
    })
}

f.Wb = function () {
    return this.j.Wb(!1)
};
function ck(a) {
    a && (this.id = a.id || a.name, this.name = a.name, this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.us = a.user || "", this.avatar = a.userAvatarUri || "", this.theme = a.theme || "u", this.capabilities = new Zj(fb((a.capabilities || "").split(","), pa(Nb, jj))))
}

ck.prototype.id = "";
ck.prototype.name = "";
f = ck.prototype;
f.app = "";
f.type = "REMOTE_CONTROL";
f.us = "";
f.avatar = "";
f.theme = "u";
f.equals = function (a) {
    return a ? this.id == a.id : !1
};
function dk(a) {
    this.j = a
}

var ek = /\s*;\s*/;
f = dk.prototype;
f.set = function (a, b, c, d, e, g) {
    if (/[;=\s]/.test(a))
        throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b))
        throw Error('Invalid cookie value "' + b + '"');
    n(c) || (c = -1);
    e = e ? ";domain=" + e : "";
    d = d ? ";path=" + d : "";
    g = g ? ";secure" : "";
    c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(y() + 1E3 * c)).toUTCString();
    this.j.cookie = a + "=" + b + e + d + c + g
};
f.get = function (a, b) {
    for (var c = a + "=", d = (this.j.cookie || "").split(ek), e = 0, g; g = d[e]; e++) {
        if (0 == g.lastIndexOf(c, 0))
            return g.substr(c.length);
        if (g == a)
            return ""
    }
    return b
};
f.remove = function (a, b, c) {
    var d = n(this.get(a));
    this.set(a, "", 0, b, c);
    return d
};
f.Ha = function () {
    return fk(this).keys
};
f.Ka = function () {
    return fk(this).values
};
f.isEmpty = function () {
    return !this.j.cookie
};
f.Pa = function () {
    return this.j.cookie ? (this.j.cookie || "").split(ek).length : 0
};
f.jf = function (a) {
    for (var b = fk(this).values, c = 0; c < b.length; c++)
        if (b[c] == a)
            return !0;
    return !1
};
f.clear = function () {
    for (var a = fk(this).keys, b = a.length - 1; 0 <= b; b--)
        this.remove(a[b])
};
function fk(a) {
    a = (a.j.cookie || "").split(ek);
    for (var b = [], c = [], d, e, g = 0; e = a[g]; g++)
        d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    return {keys: b, values: c}
}

var gk = new dk(document);
gk.k = 3950;
function hk(a, b) {
    gk.set("" + a, b, void 0, "/", "youtube.com")
}
;
var ik;

function jk() {
    var a = kk(), b = lk();
    G(a, b);
    mk() && Fb(a, b);
    a = nk(a);
    if (mb(a))
        try {
            a = "remote_sid", gk.remove("" + a, "/", "youtube.com")
        } catch (c) {
        }
    else
        try {
            hk("remote_sid", a.join(","))
        } catch (d) {
        }
}

function kk() {
    var a = Zi("yt-remote-connected-devices") || [];
    Ab(a);
    return a
}

function nk(a) {
    if (mb(a))
        return [];
    var b = a[0].indexOf("#"), c = -1 == b ? a[0] : a[0].substring(0, b);
    return E(a, function (a, b) {
        return 0 == b ? a : a.substring(c.length)
    })
}

function ok(a) {
    Xi("yt-remote-connected-devices", a, 86400)
}

function lk() {
    if (pk)
        return pk;
    var a = Zi("yt-remote-device-id");
    a || (a = Lj(), Xi("yt-remote-device-id", a, 31536E3));
    for (var b = kk(), c = 1, d = a; G(b, d);)
        c++, d = a + "#" + c;
    return pk = d
}

function qk() {
    return Zi("yt-remote-session-browser-channel")
}

function mk() {
    return Zi("yt-remote-session-screen-id")
}

function rk(a) {
    5 < a.length && (a = a.slice(a.length - 5));
    var b = E(sk(), function (a) {
        return a.loungeToken
    }), c = E(a, function (a) {
        return a.loungeToken
    });
    ib(c, function (a) {
        return !G(b, a)
    }) && tk();
    Xi("yt-remote-local-screens", a, 31536E3)
}

function sk() {
    return Zi("yt-remote-local-screens") || []
}

function tk() {
    Xi("yt-remote-lounge-token-expiration", !0, 86400)
}

function uk(a) {
    Xi("yt-remote-online-screens", a, 60)
}

function vk() {
    return Zi("yt-remote-online-dial-devices") || []
}

function wk(a, b) {
    Xi("yt-remote-session-browser-channel", a);
    Xi("yt-remote-session-screen-id", b);
    var c = kk(), d = lk();
    G(c, d) || c.push(d);
    ok(c);
    jk()
}

function xk(a) {
    a || ($i("yt-remote-session-screen-id"), $i("yt-remote-session-video-id"));
    jk();
    a = kk();
    pb(a, lk());
    ok(a)
}

function yk() {
    if (!ik) {
        var a = Yj();
        a && (ik = new Mi(a))
    }
    return ik ? !!ik.get("yt-remote-use-staging-server") : !1
}

var pk = "";

function zk(a) {
    Rj.call(this, "LocalScreenService");
    this.k = a;
    this.j = NaN;
    Ak(this);
    this.info("Initializing with " + ni(this.screens))
}

inherit(zk, Rj);
f = zk.prototype;
f.start = function () {
    Ak(this) && this.publish("screenChange");
    !Zi("yt-remote-lounge-token-expiration") && Bk(this);
    M(this.j);
    this.j = L(x(this.start, this), 1E4)
};
f.add = function (a, b) {
    Ak(this);
    Sj(this, a);
    Ck(this, !1);
    this.publish("screenChange");
    b(a);
    a.token || Bk(this)
};
f.remove = function (a, b) {
    var c = Ak(this);
    Uj(this, a) && (Ck(this, !1), c = !0);
    b(a);
    c && this.publish("screenChange")
};
f.Ej = function (a, b, c, d) {
    var e = Ak(this), g = this.get(a.id);
    g ? (g.name != b && (g.name = b, Ck(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
    e && this.publish("screenChange")
};
f.L = function () {
    M(this.j);
    zk.J.L.call(this)
};
function Bk(a) {
    if (a.screens.length) {
        var b = E(a.screens, function (a) {
            return a.id
        }), c = Jj(a.k, "/pairing/get_lounge_token_batch");
        a.k.sendRequest("POST", c, {screen_ids: b.join(",")}, x(a.Gx, a), x(a.Fx, a))
    }
}

f.Gx = function (a) {
    Ak(this);
    var b = this.screens.length;
    a = a && a.screens || [];
    for (var c = 0, d = a.length; c < d; ++c) {
        var e = a[c], g = this.get(e.screenId);
        g && (g.token = e.loungeToken, --b)
    }
    Ck(this, !b);
    b && this.warn("Missed " + b + " lounge tokens.")
};
f.Fx = function (a) {
    this.warn("Requesting lounge tokens failed: " + a)
};
function Ak(a) {
    var b = li(sk()), b = fb(b, function (a) {
        return !a.uuid
    });
    return Tj(a, b)
}

function Ck(a, b) {
    rk(E(a.screens, ji));
    b && tk()
}
;
function Dk(a, b) {
    T.call(this);
    this.B = b;
    for (var c = Zi("yt-remote-online-screen-ids") || "", c = c ? c.split(",") : [], d = {}, e = this.B(), g = 0, h = e.length; g < h; ++g) {
        var k = e[g].id;
        d[k] = G(c, k)
    }
    this.j = d;
    this.C = a;
    this.o = this.A = NaN;
    this.k = null;
    Ek("Initialized with " + lg(this.j))
}

inherit(Dk, T);
f = Dk.prototype;
f.start = function () {
    var a = parseInt(Zi("yt-remote-fast-check-period") || "0", 10);
    (this.A = y() - 144E5 < a ? 0 : a) ? Fk(this) : (this.A = y() + 3E5, Xi("yt-remote-fast-check-period", this.A), this.xm())
};
f.isEmpty = function () {
    return Vb(this.j)
};
f.update = function () {
    Ek("Updating availability on schedule.");
    var a = this.B(), b = Jb(this.j, function (b, d) {
        return b && !!Qj(a, d)
    }, this);
    Gk(this, b)
};
function Hk(a, b, c) {
    var d = Jj(a.C, "/pairing/get_screen_availability");
    a.C.sendRequest("POST", d, {lounge_token: b.token}, x(function (a) {
        a = a.screens || [];
        for (var d = 0, h = a.length; d < h; ++d)
            if (a[d].loungeToken == b.token) {
                c("online" == a[d].status);
                return
            }
        c(!1)
    }, a), x(function () {
        c(!1)
    }, a))
}

f.L = function () {
    M(this.o);
    this.o = NaN;
    this.k && (this.k.abort(), this.k = null);
    Dk.J.L.call(this)
};
function Gk(a, b) {
    var c;
    t: if (Mb(b) != Mb(a.j))
        c = !1;
    else {
        c = Qb(b);
        for (var d = 0, e = c.length; d < e; ++d)
            if (!a.j[c[d]]) {
                c = !1;
                break t
            }
        c = !0
    }
    c || (Ek("Updated online screens: " + lg(a.j)), a.j = b, a.publish("screenChange"));
    Ik(a)
}

function Fk(a) {
    isNaN(a.o) || M(a.o);
    a.o = L(x(a.xm, a), 0 < a.A && a.A < y() ? 2E4 : 1E4)
}

f.xm = function () {
    M(this.o);
    this.o = NaN;
    this.k && this.k.abort();
    var a = Jk(this);
    if (Mb(a)) {
        var b = Jj(this.C, "/pairing/get_screen_availability"), c = {lounge_token: Qb(a).join(",")};
        this.k = this.C.sendRequest("POST", b, c, x(this.BB, this, a), x(this.AB, this))
    } else
        Gk(this, {}), Fk(this)
};
f.BB = function (a, b) {
    this.k = null;
    var c = Qb(Jk(this));
    if (Db(c, Qb(a))) {
        for (var c = b.screens || [], d = {}, e = 0, g = c.length; e < g; ++e)
            d[a[c[e].loungeToken]] = "online" == c[e].status;
        Gk(this, d);
        Fk(this)
    } else
        this.Ra("Changing Screen set during request."), this.xm()
};
f.AB = function (a) {
    this.Ra("Screen availability failed: " + a);
    this.k = null;
    Fk(this)
};
function Ek(a) {
    di("OnlineScreenService", a)
}

f.Ra = function (a) {
    di("OnlineScreenService", a)
};
function Jk(a) {
    var b = {};
    D(a.B(), function (a) {
        a.token ? b[a.token] = a.id : this.Ra("Requesting availability of screen w/o lounge token.")
    });
    return b
}

function Ik(a) {
    var b = Qb(Jb(a.j, function (a) {
        return a
    }));
    Ab(b);
    b.length ? Xi("yt-remote-online-screen-ids", b.join(","), 60) : $i("yt-remote-online-screen-ids");
    a = fb(a.B(), function (a) {
        return !!this.j[a.id]
    }, a);
    uk(E(a, ji))
}
;
function Kk(a) {
    Rj.call(this, "ScreenService");
    this.B = a;
    this.j = this.k = null;
    this.o = [];
    this.A = {};
    Lk(this)
}

inherit(Kk, Rj);
f = Kk.prototype;
f.start = function () {
    this.k.start();
    this.j.start();
    this.screens.length && (this.publish("screenChange"), this.j.isEmpty() || this.publish("onlineScreenChange"))
};
f.add = function (a, b, c) {
    this.k.add(a, b, c)
};
f.remove = function (a, b, c) {
    this.k.remove(a, b, c);
    this.j.update()
};
f.Ej = function (a, b, c, d) {
    this.k.contains(a) ? this.k.Ej(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name,
    this.warn(a), d(Error(a))
    )
};
f.Zb = function (a) {
    return a ? this.screens : sb(this.screens, fb(this.o, function (a) {
        return !this.contains(a)
    }, this))
};
f.Es = function () {
    return fb(this.Zb(!0), function (a) {
        return !!this.j.j[a.id]
    }, this)
};
function Mk(a, b, c, d, e, g) {
    a.info("getAutomaticScreenByIds " + c + " / " + b);
    c || (c = a.A[b]);
    var h = a.Zb();
    if (h = (c ? Qj(h, c) : null) || Qj(h, b)) {
        h.uuid = b;
        var k = Nk(a, h);
        Hk(a.j, k, function (a) {
            e(a ? k : null)
        })
    } else
        c ? Ok(a, c, x(function (a) {
            var g = Nk(this, new gi({name: d, screenId: c, loungeToken: a, dialId: b || ""}));
            Hk(this.j, g, function (a) {
                e(a ? g : null)
            })
        }, a), g) : e(null)
}

f.Fs = function (a, b, c, d, e) {
    this.info("getDialScreenByPairingCode " + a + " / " + b);
    var g = new Vj(this.B, a, b, c);
    g.subscribe("pairingComplete", x(function (a) {
        ti(g);
        d(Nk(this, a))
    }, this));
    g.subscribe("pairingFailed", function (a) {
        ti(g);
        e(a)
    });
    g.start();
    return x(g.stop, g)
};
function Pk(a, b) {
    for (var c = 0, d = a.screens.length; c < d; ++c)
        if (a.screens[c].name == b)
            return a.screens[c];
    return null
}

f.$w = function (a, b) {
    for (var c = 2, d = b(a, c); Pk(this, d);) {
        c++;
        if (20 < c)
            return a;
        d = b(a, c)
    }
    return d
};
f.LD = function (a, b, c, d) {
    Bj(Jj(this.B, "/pairing/get_screen"), {
        method: "POST", Eb: {pairing_code: a}, timeout: 5E3, fb: x(function (a, d) {
            var h = new gi(d.screen || {});
            if (!h.name || Pk(this, h.name))
                h.name = this.$w(h.name, b);
            c(Nk(this, h))
        }, this), onError: x(function (a) {
            d(Error("pairing request failed: " + a.status))
        }, this), Ge: x(function () {
            d(Error("pairing request timed out."))
        }, this)
    })
};
f.L = function () {
    ti(this.k);
    ti(this.j);
    Kk.J.L.call(this)
};
function Ok(a, b, c, d) {
    a.info("requestLoungeToken_ for " + b);
    var e = {
        Eb: {screen_ids: b}, method: "POST", context: a, fb: function (a, e) {
            var k = e && e.screens || [];
            k[0] && k[0].screenId == b ? c(k[0].loungeToken) : d(Error("Missing lounge token in token response"))
        }, onError: function () {
            d(Error("Request screen lounge token failed"))
        }
    };
    Bj(Jj(a.B, "/pairing/get_lounge_token_batch"), e)
}

function Qk(a) {
    a.screens = a.k.Zb();
    var b = a.A, c = {}, d;
    for (d in b)
        c[b[d]] = d;
    b = 0;
    for (d = a.screens.length; b < d; ++b) {
        var e = a.screens[b];
        e.uuid = c[e.id] || ""
    }
    a.info("Updated manual screens: " + ni(a.screens))
}

f.gy = function () {
    Qk(this);
    this.publish("screenChange");
    this.j.update()
};
function Lk(a) {
    Rk(a);
    a.k = new zk(a.B);
    a.k.subscribe("screenChange", x(a.gy, a));
    Qk(a);
    a.o = li(Zi("yt-remote-automatic-screen-cache") || []);
    Rk(a);
    a.info("Initializing automatic screens: " + ni(a.o));
    a.j = new Dk(a.B, x(a.Zb, a, !0));
    a.j.subscribe("screenChange", x(function () {
        this.publish("onlineScreenChange")
    }, a))
}

function Nk(a, b) {
    var c = a.get(b.id);
    c ? (c.uuid = b.uuid, b = c) : ((c = Qj(a.o, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.o.push(b), Xi("yt-remote-automatic-screen-cache", E(a.o, ji)));
    Rk(a);
    a.A[b.uuid] = b.id;
    Xi("yt-remote-device-id-map", a.A, 31536E3);
    return b
}

function Rk(a) {
    a.A = Zi("yt-remote-device-id-map") || {}
}

Kk.prototype.dispose = Kk.prototype.dispose;
function Sk(a, b, c) {
    T.call(this);
    this.K = c;
    this.G = a;
    this.k = b;
    this.o = null
}

inherit(Sk, T);
function Tk(a, b) {
    a.o = b;
    a.publish("sessionScreen", a.o)
}

f = Sk.prototype;
f.Sb = function (a) {
    this.ha() || (a && this.warn("" + a), this.o = null, this.publish("sessionScreen", null))
};
f.info = function (a) {
    di(this.K, a)
};
f.warn = function (a) {
    di(this.K, a)
};
f.Hs = function () {
    return null
};
f.Fm = function (a) {
    var b = this.k;
    a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
    chrome.cast.setReceiverDisplayStatus(b, x(function () {
        this.info("Updated receiver status for " + b.friendlyName + ": " + a)
    }, this), x(function () {
        this.warn("Failed to update receiver status for: " + b.friendlyName)
    }, this))
};
f.L = function () {
    this.Fm("");
    Sk.J.L.call(this)
};
function Uk(a, b) {
    Sk.call(this, a, b, "CastSession");
    this.j = null;
    this.B = 0;
    this.A = null;
    this.D = x(this.MD, this);
    this.C = x(this.EC, this);
    this.B = L(x(function () {
        Vk(this, null)
    }, this), 12E4)
}

inherit(Uk, Sk);
f = Uk.prototype;
f.Em = function (a) {
    if (this.j) {
        if (this.j == a)
            return;
        this.warn("Overriding cast sesison with new session object");
        this.j.removeUpdateListener(this.D);
        this.j.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.C)
    }
    this.j = a;
    this.j.addUpdateListener(this.D);
    this.j.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.C);
    this.A && Wk(this);
    Xk(this, "getMdxSessionStatus")
};
f.Ff = function (a) {
    this.info("launchWithParams: " + lg(a));
    this.A = a;
    this.j && Wk(this)
};
f.stop = function () {
    this.j ? this.j.stop(x(function () {
        this.Sb()
    }, this), x(function () {
        this.Sb(Error("Failed to stop receiver app."))
    }, this)) : this.Sb(Error("Stopping cast device witout session."))
};
f.Fm = v;
f.L = function () {
    this.info("disposeInternal");
    M(this.B);
    this.B = 0;
    this.j && (this.j.removeUpdateListener(this.D), this.j.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.C));
    this.j = null;
    Uk.J.L.call(this)
};
function Wk(a) {
    var b = a.A.videoId || a.A.videoIds[a.A.index];
    b && Xk(a, "flingVideo", {videoId: b, currentTime: a.A.currentTime || 0});
    a.A = null
}

function Xk(a, b, c) {
    a.info("sendYoutubeMessage_: " + b + " " + lg(c));
    var d = {};
    d.type = b;
    c && (d.data = c);
    a.j ? a.j.sendMessage("urn:x-cast:com.google.youtube.mdx", d, v, x(function () {
        this.warn("Failed to send message: " + b + ".")
    }, a)) : a.warn("Sending yt message without session: " + lg(d))
}

f.EC = function (a, b) {
    if (!this.ha())
        if (b) {
            var c = kg(b);
            if (c) {
                var d = "" + c.type, c = c.data || {};
                this.info("onYoutubeMessage_: " + d + " " + lg(c));
                switch (d) {
                    case "mdxSessionStatus":
                        Vk(this, c.screenId);
                        break;
                    default:
                        this.warn("Unknown youtube message: " + d)
                }
            } else
                this.warn("Unable to parse message.")
        } else
            this.warn("No data in message.")
};
function Vk(a, b) {
    M(a.B);
    b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.o && a.o.id == b || Mk(a.G, a.k.label, b, a.k.friendlyName, x(function (a) {
        a ? Tk(this, a) : this.Sb(Error("Unable to fetch screen."))
    }, a), x(a.Sb, a))) : a.Sb(Error("Waiting for session status timed out."))
}

f.Hs = function () {
    return this.j
};
f.MD = function (a) {
    this.ha() || a || (this.warn("Cast session died."), this.Sb())
};
function Yk(a, b) {
    Sk.call(this, a, b, "DialSession");
    this.B = this.F = null;
    this.H = "";
    this.A = null;
    this.D = v;
    this.C = NaN;
    this.I = x(this.OD, this);
    this.j = v
}

inherit(Yk, Sk);
f = Yk.prototype;
f.Em = function (a) {
    this.B = a;
    this.B.addUpdateListener(this.I)
};
f.Ff = function (a) {
    this.A = a;
    this.D()
};
f.stop = function () {
    this.j();
    this.j = v;
    M(this.C);
    this.B ? this.B.stop(x(this.Sb, this, null), x(this.Sb, this, "Failed to stop DIAL device.")) : this.Sb()
};
f.L = function () {
    this.j();
    this.j = v;
    M(this.C);
    this.B && this.B.removeUpdateListener(this.I);
    this.B = null;
    Yk.J.L.call(this)
};
function Zk(a) {
    a.j = a.G.Fs(a.H, a.k.label, a.k.friendlyName, x(function (a) {
        this.j = v;
        Tk(this, a)
    }, a), x(function (a) {
        this.j = v;
        this.Sb(a)
    }, a))
}

f.OD = function (a) {
    this.ha() || a || (this.warn("DIAL session died."), this.j(), this.j = v, this.Sb())
};
function $k(a) {
    var b = {};
    b.pairingCode = a.H;
    if (a.A) {
        var c = a.A.index || 0, d = a.A.currentTime || 0;
        b.v = a.A.videoId || a.A.videoIds[c];
        b.t = d
    }
    yk() && (b.env_useStageMdx = 1);
    return Pe(b)
}

f.Il = function (a) {
    this.H = Lj();
    if (this.A) {
        var b = new chrome.cast.DialLaunchResponse(!0, $k(this));
        a(b);
        Zk(this)
    } else
        this.D = x(function () {
            M(this.C);
            this.D = v;
            this.C = NaN;
            var b = new chrome.cast.DialLaunchResponse(!0, $k(this));
            a(b);
            Zk(this)
        }, this), this.C = L(x(function () {
            this.D()
        }, this), 100)
};
f.ez = function (a, b) {
    Mk(this.G, this.F.receiver.label, a, this.k.friendlyName, x(function (a) {
        a && a.token ? (Tk(this, a), b(new chrome.cast.DialLaunchResponse(!1))) : this.Il(b)
    }, this), x(function (a) {
        this.warn("Failed to get DIAL screen: " + a);
        this.Il(b)
    }, this))
};
function al(a, b) {
    Sk.call(this, a, b, "ManualSession");
    this.j = L(x(this.Ff, this, null), 150)
}

inherit(al, Sk);
al.prototype.stop = function () {
    this.Sb()
};
al.prototype.Em = v;
al.prototype.Ff = function () {
    M(this.j);
    this.j = NaN;
    var a = Qj(this.G.Zb(), this.k.label);
    a ? Tk(this, a) : this.Sb(Error("No such screen"))
};
al.prototype.L = function () {
    M(this.j);
    this.j = NaN;
    al.J.L.call(this)
};
function bl(a) {
    T.call(this);
    this.k = a;
    this.j = null;
    this.B = !1;
    this.o = [];
    this.A = x(this.tB, this)
}

inherit(bl, T);
f = bl.prototype;
f.init = function (a, b) {
    chrome.cast.timeout.requestSession = 3E4;
    var c = new chrome.cast.SessionRequest("233637DE");
    c.dialRequest = new chrome.cast.DialRequest("YouTube");
    var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED, e = a ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION, c = new chrome.cast.ApiConfig(c, x(this.ar, this), x(this.wB, this), d, e);
    c.customDialLaunchCallback = x(this.xA, this);
    chrome.cast.initialize(c, x(function () {
        this.ha() || (chrome.cast.addReceiverActionListener(this.A),
            $h(cl), this.k.subscribe("onlineScreenChange", x(this.Gs, this)), this.o = dl(this), chrome.cast.setCustomReceivers(this.o, v, x(function (a) {
            this.Ra("Failed to set initial custom receivers: " + lg(a))
        }, this)), this.publish("yt-remote-cast2-availability-change", el(this)), b(!0))
    }, this), function (a) {
        this.Ra("Failed to initialize API: " + lg(a));
        b(!1)
    })
};
f.YC = function (a, b) {
    fl("Setting connected screen ID: " + a + " -> " + b);
    if (this.j) {
        var c = this.j.o;
        if (!a || c && c.id != a)
            fl("Unsetting old screen status: " + this.j.k.friendlyName), ti(this.j), this.j = null
    }
    if (a && b) {
        if (!this.j) {
            c = Qj(this.k.Zb(), a);
            if (!c) {
                fl("setConnectedScreenStatus: Unknown screen.");
                return
            }
            var d = gl(this, c);
            d || (fl("setConnectedScreenStatus: Connected receiver not custom..."), d = new chrome.cast.Receiver(c.uuid ? c.uuid : c.id, c.name), d.receiverType = chrome.cast.ReceiverType.CUSTOM, this.o.push(d), chrome.cast.setCustomReceivers(this.o,
                v, x(function (a) {
                    this.Ra("Failed to set initial custom receivers: " + lg(a))
                }, this)));
            fl("setConnectedScreenStatus: new active receiver: " + d.friendlyName);
            hl(this, new al(this.k, d), !0)
        }
        this.j.Fm(b)
    } else
        fl("setConnectedScreenStatus: no screen.")
};
function gl(a, b) {
    return b ? F(a.o, function (a) {
        return hi(b, a.label)
    }, a) : null
}

f.ZC = function (a) {
    this.ha() ? this.Ra("Setting connection data on disposed cast v2") : this.j ? this.j.Ff(a) : this.Ra("Setting connection data without a session")
};
f.stopSession = function () {
    this.ha() ? this.Ra("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), ti(this.j), this.j = null) : fl("Stopping non-existing session")
};
f.requestSession = function () {
    chrome.cast.requestSession(x(this.ar, this), x(this.FB, this))
};
f.L = function () {
    this.k.unsubscribe("onlineScreenChange", x(this.Gs, this));
    window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.A);
    ci(cl);
    ti(this.j);
    bl.J.L.call(this)
};
function fl(a) {
    di("Controller", a)
}

f.Ra = function (a) {
    di("Controller", a)
};
function cl(a) {
    window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
}

function el(a) {
    return a.B || !!a.o.length || !!a.j
}

function hl(a, b, c) {
    ti(a.j);
    (a.j = b) ? (c ? a.publish("yt-remote-cast2-receiver-resumed", b.k) : a.publish("yt-remote-cast2-receiver-selected", b.k), b.subscribe("sessionScreen", x(a.dr, a, b)), b.o ? a.publish("yt-remote-cast2-session-change", b.o) : c && a.j.Ff(null)) : a.publish("yt-remote-cast2-session-change", null)
}

f.dr = function (a, b) {
    this.j == a && (b || hl(this, null), this.publish("yt-remote-cast2-session-change", b))
};
f.tB = function (a, b) {
    if (!this.ha())
        if (a)
            switch (fl("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.k.label != a.label)
                            fl("onReceiverAction_: Stopping active receiver: " + this.j.k.friendlyName), this.j.stop();
                        else {
                            fl("onReceiverAction_: Casting to active receiver.");
                            this.j.o && this.publish("yt-remote-cast2-session-change", this.j.o);
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            hl(this, new al(this.k, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            hl(this,
                                new Yk(this.k, a));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            hl(this, new Uk(this.k, a));
                            break;
                        default:
                            this.Ra("Unknown receiver type: " + a.receiverType);
                            return
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.k.label == a.label ? this.j.stop() : this.Ra("Stopping receiver w/o session: " + a.friendlyName)
            }
        else
            this.Ra("onReceiverAction_ called without receiver.")
};
f.xA = function (a) {
    if (this.ha())
        return Promise.reject(Error("disposed"));
    var b = a.receiver;
    b.receiverType != chrome.cast.ReceiverType.DIAL && (this.Ra("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
    var c = this.j ? this.j.k : null;
    if (!c || c.label != b.label)
        return this.Ra("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
    if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
        if (this.j.o)
            return fl("Reselecting dial screen."),
                this.publish("yt-remote-cast2-session-change", this.j.o), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
        this.Ra('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
        hl(this, new Yk(this.k, b))
    }
    b = this.j;
    b.F = a;
    return b.F.appState == chrome.cast.DialAppState.RUNNING ? new Promise(x(b.ez, b, (b.F.extraData || {}).screenId || null)) : new Promise(x(b.Il, b))
};
f.ar = function (a) {
    if (!this.ha()) {
        fl("New cast session ID: " + a.sessionId);
        var b = a.receiver;
        if (b.receiverType != chrome.cast.ReceiverType.CUSTOM) {
            if (!this.j)
                if (b.receiverType == chrome.cast.ReceiverType.CAST)
                    fl("Got resumed cast session before resumed mdx connection."), hl(this, new Uk(this.k, b), !0);
                else {
                    this.Ra("Got non-cast session without previous mdx receiver event, or mdx resume.");
                    return
                }
            var c = this.j.k, d = Qj(this.k.Zb(), c.label);
            d && hi(d, b.label) && c.receiverType != chrome.cast.ReceiverType.CAST && b.receiverType ==
            chrome.cast.ReceiverType.CAST && (fl("onSessionEstablished_: manual to cast session change " + b.friendlyName), ti(this.j), this.j = new Uk(this.k, b), this.j.subscribe("sessionScreen", x(this.dr, this, this.j)), this.j.Ff(null));
            this.j.Em(a)
        }
    }
};
f.ND = function () {
    return this.j ? this.j.Hs() : null
};
f.FB = function (a) {
    this.ha() || (this.Ra("Failed to estabilish a session: " + lg(a)), a.code != chrome.cast.ErrorCode.CANCEL && hl(this, null))
};
f.wB = function (a) {
    fl("Receiver availability updated: " + a);
    if (!this.ha()) {
        var b = el(this);
        this.B = a == chrome.cast.ReceiverAvailability.AVAILABLE;
        el(this) != b && this.publish("yt-remote-cast2-availability-change", el(this))
    }
};
function dl(a) {
    var b = a.k.Es(), c = a.j && a.j.k;
    a = E(b, function (a) {
        c && hi(a, c.label) && (c = null);
        var b = a.uuid ? a.uuid : a.id, g = gl(this, a);
        g ? (g.label = b, g.friendlyName = a.name) : (g = new chrome.cast.Receiver(b, a.name), g
        .
        receiverType = chrome.cast.ReceiverType.CUSTOM
        )
        ;
        return g
    }, a);
    c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
    return a
}

f.Gs = function () {
    if (!this.ha()) {
        var a = el(this);
        this.o = dl(this);
        fl("Updating custom receivers: " + lg(this.o));
        chrome.cast.setCustomReceivers(this.o, v, x(function () {
            this.Ra("Failed to set custom receivers.")
        }, this));
        var b = el(this);
        b != a && this.publish("yt-remote-cast2-availability-change", b)
    }
};
bl.prototype.setLaunchParams = bl.prototype.ZC;
bl.prototype.setConnectedScreenStatus = bl.prototype.YC;
bl.prototype.stopSession = bl.prototype.stopSession;
bl.prototype.getCastSession = bl.prototype.ND;
bl.prototype.requestSession = bl.prototype.requestSession;
bl.prototype.init = bl.prototype.init;
bl.prototype.dispose = bl.prototype.dispose;
function il(a, b, c) {
    jl() ? ll(b) && (ml(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? nl(a, c) : gj(function (b, e) {
        b ? nl(a, c) : (ol("Failed to load cast API: " + e), pl(!1), ml(!1), $i("yt-remote-cast-available"), $i("yt-remote-cast-receiver"), ql(), c(!1))
    })) : kl("Cannot initialize because not running Chrome")
}

function ql() {
    kl("dispose");
    ij();
    var a = rl();
    a && a.dispose();
    sl = null;
    q("yt.mdx.remote.cloudview.instance_", null, void 0);
    tl(!1);
    Ei(ul);
    ul.length = 0
}

function vl() {
    return !!Zi("yt-remote-cast-installed")
}

function wl() {
    var a = Zi("yt-remote-cast-receiver");
    return a ? a.friendlyName : null
}

function xl() {
    return vl() ? rl() ? sl.getCastSession() : (ol("getCastSelector: Cast is not initialized."), null) : (ol("getCastSelector: Cast API is not installed!"), null)
}

function yl() {
    vl() ? rl() ? zl() ? (kl("Requesting cast selector."), sl.requestSession()) : (kl("Wait for cast API to be ready to request the session."), ul.push(Ci("yt-remote-cast2-api-ready", yl))) : ol("requestCastSelector: Cast is not initialized.") : ol("requestCastSelector: Cast API is not installed!")
}

function Al(a) {
    zl() ? rl().setLaunchParams(a) : ol("setLaunchParams called before ready.")
}

function Bl() {
    var a = Cl();
    zl() ? rl().setConnectedScreenStatus(a, "YouTube TV") : ol("setConnectedScreenStatus called before ready.")
}

var sl = null;

function jl() {
    var a;
    a = 0 <= Uc.search(/\ (CrMo|Chrome|CriOS)\//);
    return Th || a
}

function Dl(a, b) {
    sl.init(a, b)
}

function ll(a) {
    var b = !1;
    if (!sl) {
        var c = t("yt.mdx.remote.cloudview.instance_");
        c || (c = new bl(a), c.subscribe("yt-remote-cast2-availability-change", function (a) {
            Xi("yt-remote-cast-available", a);
            Fi("yt-remote-cast2-availability-change", a)
        }), c.subscribe("yt-remote-cast2-receiver-selected", function (a) {
            kl("onReceiverSelected: " + a.friendlyName);
            Xi("yt-remote-cast-receiver", a);
            Fi("yt-remote-cast2-receiver-selected", a)
        }), c.subscribe("yt-remote-cast2-receiver-resumed", function (a) {
            kl("onReceiverResumed: " + a.friendlyName);
            Xi("yt-remote-cast-receiver", a)
        }), c.subscribe("yt-remote-cast2-session-change", function (a) {
            kl("onSessionChange: " + mi(a));
            a || $i("yt-remote-cast-receiver");
            Fi("yt-remote-cast2-session-change", a)
        }), q("yt.mdx.remote.cloudview.instance_", c, void 0), b = !0);
        sl = c
    }
    kl("cloudview.createSingleton_: " + b);
    return b
}

function rl() {
    sl || (sl = t("yt.mdx.remote.cloudview.instance_"));
    return sl
}

function nl(a, b) {
    pl(!0);
    ml(!1);
    Dl(a, function (a) {
        a ? (tl(!0), Fi("yt-remote-cast2-api-ready")) : (ol("Failed to initialize cast API."), pl(!1), $i("yt-remote-cast-available"), $i("yt-remote-cast-receiver"), ql());
        b(a)
    })
}

function kl(a) {
    di("cloudview", a)
}

function ol(a) {
    di("cloudview", a)
}

function pl(a) {
    kl("setCastInstalled_ " + a);
    Xi("yt-remote-cast-installed", a)
}

function zl() {
    return !!t("yt.mdx.remote.cloudview.apiReady_")
}

function tl(a) {
    kl("setApiReady_ " + a);
    q("yt.mdx.remote.cloudview.apiReady_", a, void 0)
}

function ml(a) {
    q("yt.mdx.remote.cloudview.initializing_", a, void 0)
}

var ul = [];

function El(a, b) {
    this.action = a;
    this.params = b || null
}
;
function Fl() {
    if (!("cast" in window))
        return !1;
    var a = window.cast || {};
    return "ActivityStatus" in a && "Api" in a && "LaunchRequest" in a && "Receiver" in a
}

function Gl(a) {
    di("CAST", a)
}

function Hl(a) {
    var b = Il();
    b && b.logMessage && b.logMessage(a)
}

function Jl(a) {
    if (a.source == window && a.data && "CastApi" == a.data.source && "Hello" == a.data.event)
        for (; Kl.length;)
            Kl.shift()()
}

function Ll() {
    if (!t("yt.mdx.remote.castv2_") && !Ml && (mb(Nl) && ub(Nl, vk()), Fl())) {
        var a = Il();
        a ? (a.removeReceiverListener("YouTube", Ol), a.addReceiverListener("YouTube", Ol), Gl("API initialized in the other binary")) : (a = new cast.Api, Pl
        (a), a.addReceiverListener("YouTube", Ol), a.setReloadTabRequestHandler && a.setReloadTabRequestHandler(function () {
            L(function () {
                window.location.reload(!0)
            }, 1E3)
        }), $h(Hl), Gl("API initialized")
    )
        ;
        Ml = !0
    }
}

function Ql() {
    var a = Il();
    a && (Gl("API disposed"), ci(Hl), a.setReloadTabRequestHandler && a.setReloadTabRequestHandler(v), a.removeReceiverListener("YouTube", Ol), Pl(null));
    Ml = !1;
    Kl = null;
    (a = Ch(window, "message", Jl, !1)) && Eh(a)
}

function Rl(a) {
    var b = jb(Nl, function (b) {
        return b.id == a.id
    });
    0 <= b && (Nl[b] = {id: a.id, name: a.name, activityId: a.activityId, status: a.status})
}

function Ol(a) {
    a.length && Gl("Updating receivers: " + lg(a));
    Sl(a);
    Fi("yt-remote-cast-device-list-update");
    D(Tl(), function (a) {
        Ul(a.id)
    });
    D(a, function (a) {
        if (a.isTabProjected) {
            var c = Vl(a.id);
            Gl("Detected device: " + c.id + " is tab projected. Firing DEVICE_TAB_PROJECTED event.");
            L(function () {
                Fi("yt-remote-cast-device-tab-projected", c.id)
            }, 1E3)
        }
    })
}

function Wl(a, b) {
    Gl("Updating " + a + " activity status: " + lg(b));
    var c = Vl(a);
    c ? (b.activityId && (c.activityId = b.activityId), c.status = "running" == b.status ? "RUNNING" : "stopped" == b.status ? "STOPPED" : "error" == b.status ? "ERROR" : "UNKNOWN", "RUNNING" != c.status && (c.activityId = ""), Rl(c), Fi("yt-remote-cast-device-status-update", c)) : Gl("Device not found")
}

function Tl() {
    Ll();
    return Nj(Nl)
}

function Sl(a) {
    a = E(a, function (a) {
        var c = {id: a.id, name: Ia(a.name)};
        if (a = Vl(a.id))
            c.activityId = a.activityId, c.status = a.status;
        return c
    });
    nb(Nl);
    ub(Nl, a)
}

function Vl(a) {
    var b = Tl();
    return F(b, function (b) {
            return b.id == a
        }) || null
}

function Ul(a) {
    var b = Vl(a), c = Il();
    c && b && b.activityId && c.getActivityStatus(b.activityId, function (b) {
        "error" == b.status && (b.status = "stopped");
        Wl(a, b)
    })
}

function Xl(a) {
    Ll();
    var b = Vl(a), c = Il();
    c && b && b.activityId ? (Gl("Stopping cast activity"), c.stopActivity(b.activityId, pa(Wl, a))) : Gl("Dropping cast activity stop")
}

function Il() {
    return t("yt.mdx.remote.castapi.api_")
}

function Pl(a) {
    q("yt.mdx.remote.castapi.api_", a, void 0)
}

var Ml = !1, Kl = null, Nl = t("yt.mdx.remote.castapi.devices_") || [];
q("yt.mdx.remote.castapi.devices_", Nl, void 0);
function Yl() {
}
;
function Zl() {
    this.j = y()
}

new Zl;
Zl.prototype.set = function (a) {
    this.j = a
};
Zl.prototype.get = function () {
    return this.j
};
function $l(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.k = !1;
    this.Gr = !0
}

$l.prototype.stopPropagation = function () {
    this.k = !0
};
$l.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
    this.Gr = !1
};
function am(a) {
    a.stopPropagation()
}
;
var bm = !bd || pd(9), cm = bd && !od("9");
!dd || od("528");
cd && od("1.9b") || bd && od("8") || ad && od("9.5") || dd && od("528");
cd && !od("8") || bd && od("9");
var dm = "ontouchstart" in m || !!(m.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!m.navigator || !m.navigator.msMaxTouchPoints);

function em(a, b) {
    $l.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.j = this.state = null;
    a && this.init(a, b)
}

inherit(em, $l);
em.prototype.init = function (a, b) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    d ? cd && (zg(d, "nodeName") || (d = null)) : "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    this.relatedTarget = d;
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
    this.screenX = a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode :
        0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.state = a.state;
    this.j = a;
    a.defaultPrevented && this.preventDefault()
};
em.prototype.stopPropagation = function () {
    em.J.stopPropagation.call(this);
    this.j.stopPropagation ? this.j.stopPropagation() : this.j.cancelBubble = !0
};
em.prototype.preventDefault = function () {
    em.J.preventDefault.call(this);
    var a = this.j;
    if (a.preventDefault)
        a.preventDefault();
    else if (a.returnValue = !1, cm)
        try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                a.keyCode = -1
        } catch (b) {
        }
};
em.prototype.D = function () {
    return this.j
};
var fm = "closure_listenable_" + (1E6 * Math.random() | 0);

function gm(a) {
    return !(!a || !a[fm])
}

var hm = 0;

function im(a, b, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.ff = !!d;
    this.Lc = e;
    this.key = ++hm;
    this.removed = this.Ph = !1
}

function jm(a) {
    a.removed = !0;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.Lc = null
}
;
function km(a) {
    this.src = a;
    this.j = {};
    this.k = 0
}

km.prototype.add = function (a, b, c, d, e) {
    var g = a.toString();
    a = this.j[g];
    a || (a = this.j[g] = [], this.k++);
    var h = lm(a, b, d, e);
    -1 < h ? (b = a[h], c
    ||
    (b.Ph = !1)
    ) :
    (b = new im(b, this.src, g, !!d, e), b
    .
    Ph = c, a.push(b)
    )
    ;
    return b
};
km.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.j))
        return !1;
    var e = this.j[a];
    b = lm(e, b, c, d);
    return -1 < b ? (jm(e[b]), qb(e, b), 0 == e.length && (delete this.j[a], this.k--), !0) : !1
};
function mm(a, b) {
    var c = b.type;
    if (!(c in a.j))
        return !1;
    var d = pb(a.j[c], b);
    d && (jm(b), 0 == a.j[c].length && (delete a.j[c], a.k--));
    return d
}

km.prototype.removeAll = function (a) {
    a = a && a.toString();
    var b = 0, c;
    for (c in this.j)
        if (!a || c == a) {
            for (var d = this.j[c], e = 0; e < d.length; e++)
                ++b, jm(d[e]);
            delete this.j[c];
            this.k--
        }
    return b
};
function nm(a, b, c, d, e) {
    a = a.j[b.toString()];
    b = -1;
    a && (b = lm(a, c, d, e));
    return -1 < b ? a[b] : null
}

function lm(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var g = a[e];
        if (!g.removed && g.listener == b && g.ff == !!c && g.Lc == d)
            return e
    }
    return -1
}
;
var om = "closure_lm_" + (1E6 * Math.random() | 0), pm = {}, qm = 0;

function rm(a, b, c, d, e) {
    if (ea(b)) {
        for (var g = 0; g < b.length; g++)
            rm(a, b[g], c, d, e);
        return null
    }
    c = sm(c);
    return gm(a) ? a.listen(b, c, d, e) : tm(a, b, c, !1, d, e)
}

function tm(a, b, c, d, e, g) {
    if (!b)
        throw Error("Invalid event type");
    var h = !!e, k = um(a);
    k || (a[om] = k = new km(a));
    c = k.add(b, c, d, e, g);
    if (c.proxy)
        return c;
    d = vm();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    a.addEventListener ? a.addEventListener(b.toString(), d, h) : a.attachEvent(wm(b.toString()), d);
    qm++;
    return c
}

function vm() {
    var a = xm, b = bm ? function (c) {
        return a.call(b.src, b.listener, c)
    } : function (c) {
        c = a.call(b.src, b.listener, c);
        if (!c)
            return c
    };
    return b
}

function ym(a, b, c, d, e) {
    if (ea(b)) {
        for (var g = 0; g < b.length; g++)
            ym(a, b[g], c, d, e);
        return null
    }
    c = sm(c);
    return gm(a) ? a.Xc.add(String(b), c, !0, d, e) : tm(a, b, c, !0, d, e)
}

function zm(a, b, c, d, e) {
    if (ea(b))
        for (var g = 0; g < b.length; g++)
            zm(a, b[g], c, d, e);
    else
        c = sm(c), gm(a) ? a.Da(b, c, d, e) : a && (a = um(a)) && (b = nm(a, b, c, !!d, e)) && Am(b)
}

function Am(a) {
    if (ha(a) || !a || a.removed)
        return !1;
    var b = a.src;
    if (gm(b))
        return mm(b.Xc, a);
    var c = a.type, d = a.proxy;
    b.removeEventListener ? b.removeEventListener(c, d, a.ff) : b.detachEvent && b.detachEvent(wm(c), d);
    qm--;
    (c = um(b)) ? (mm(c, a), 0 == c.k && (c.src = null, b[om] = null)) : jm(a);
    return !0
}

function wm(a) {
    return a in pm ? pm[a] : pm[a] = "on" + a
}

function Bm(a, b, c, d) {
    var e = !0;
    if (a = um(a))
        if (b = a.j[b.toString()])
            for (b = b.concat(), a = 0; a < b.length; a++) {
                var g = b[a];
                g && g.ff == c && !g.removed && (g = Cm(g, d), e = e && !1 !== g)
            }
    return e
}

function Cm(a, b) {
    var c = a.listener, d = a.Lc || a.src;
    a.Ph && Am(a);
    return c.call(d, b)
}

function xm(a, b) {
    if (a.removed)
        return !0;
    if (!bm) {
        var c = b || t("window.event"), d = new em(c, this), e = !0;
        if (!(0 > c.keyCode || void 0 != c.returnValue)) {
            t: {
                var g = !1;
                if (0 == c.keyCode)
                    try {
                        c.keyCode = -1;
                        break t
                    } catch (h) {
                        g = !0
                    }
                if (g || void 0 == c.returnValue)
                    c.returnValue = !0
            }
            c = [];
            for (g = d.currentTarget; g; g = g.parentNode)
                c.push(g);
            for (var g = a.type, k = c.length - 1; !d.k && 0 <= k; k--) {
                d.currentTarget = c[k];
                var l = Bm(c[k], g, !0, d), e = e && l
            }
            for (k = 0; !d.k && k < c.length; k++)
                d.currentTarget = c[k], l = Bm(c[k], g, !1, d), e = e && l
        }
        return e
    }
    return Cm(a, new em(b,
        this))
}

function um(a) {
    a = a[om];
    return a instanceof km ? a : null
}

var Dm = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

function sm(a) {
    if (ia(a))
        return a;
    a[Dm] || (a[Dm] = function (b) {
        return a.handleEvent(b)
    });
    return a[Dm]
}
;
function U() {
    R.call(this);
    this.Xc = new km(this);
    this.na = this;
    this.X = null
}

inherit(U, R);
U.prototype[fm] = !0;
f = U.prototype;
f.nj = function (a) {
    this.X = a
};
f.addEventListener = function (a, b, c, d) {
    rm(this, a, b, c, d)
};
f.removeEventListener = function (a, b, c, d) {
    zm(this, a, b, c, d)
};
f.U = function (a) {
    var b, c = this.X;
    if (c) {
        b = [];
        for (var d = 1; c; c = c.X)
            b.push(c), ++d
    }
    c = this.na;
    d = a.type || a;
    if (w(a))
        a = new $l(a, c);
    else if (a instanceof $l)
        a.target = a.target || c;
    else {
        var e = a;
        a = new $l(d, c);
        cc(a, e)
    }
    var e = !0, g;
    if (b)
        for (var h = b.length - 1; !a.k && 0 <= h; h--)
            g = a.currentTarget = b[h], e = Em(g, d, !0, a) && e;
    a.k || (g = a.currentTarget = c, e = Em(g, d, !0, a) && e, a.k || (e = Em(g, d, !1, a) && e));
    if (b)
        for (h = 0; !a.k && h < b.length; h++)
            g = a.currentTarget = b[h], e = Em(g, d, !1, a) && e;
    return e
};
f.L = function () {
    U.J.L.call(this);
    this.removeAllListeners();
    this.X = null
};
f.listen = function (a, b, c, d) {
    return this.Xc.add(String(a), b, !1, c, d)
};
f.Da = function (a, b, c, d) {
    return this.Xc.remove(String(a), b, c, d)
};
f.removeAllListeners = function (a) {
    return this.Xc ? this.Xc.removeAll(a) : 0
};
function Em(a, b, c, d) {
    b = a.Xc.j[String(b)];
    if (!b)
        return !0;
    b = b.concat();
    for (var e = !0, g = 0; g < b.length; ++g) {
        var h = b[g];
        if (h && !h.removed && h.ff == c) {
            var k = h.listener, l = h.Lc || h.src;
            h.Ph && mm(a.Xc, h);
            e = !1 !== k.call(l, d) && e
        }
    }
    return e && 0 != d.Gr
}
;
function Fm(a, b) {
    this.k = new mg(a);
    this.j = b ? kg : jg
}

Fm.prototype.stringify = function (a) {
    return this.k.D(a)
};
Fm.prototype.parse = function (a) {
    return this.j(a)
};
function Gm(a) {
    this.k = 0;
    this.o = a || 100;
    this.j = []
}

f = Gm.prototype;
f.add = function (a) {
    var b = this.j[this.k];
    this.j[this.k] = a;
    this.k = (this.k + 1) % this.o;
    return b
};
f.get = function (a) {
    a = Hm(this, a);
    return this.j[a]
};
f.set = function (a, b) {
    a = Hm(this, a);
    this.j[a] = b
};
f.Pa = function () {
    return this.j.length
};
f.isEmpty = function () {
    return 0 == this.j.length
};
f.clear = function () {
    this.k = this.j.length = 0
};
f.Ka = function () {
    for (var a = this.Pa(), b = this.Pa(), c = [], a = this.Pa() - a; a < b; a++)
        c.push(this.get(a));
    return c
};
f.Ha = function () {
    for (var a = [], b = this.Pa(), c = 0; c < b; c++)
        a[c] = c;
    return a
};
f.jf = function (a) {
    for (var b = this.Pa(), c = 0; c < b; c++)
        if (this.get(c) == a)
            return !0;
    return !1
};
function Hm(a, b) {
    if (b >= a.j.length)
        throw Error("Out of bounds exception");
    return a.j.length < a.o ? b : (a.k + Number(b)) % a.o
}
;
function Im(a) {
    m.setTimeout(function () {
        throw a;
    }, 0)
}

var Jm;

function Km() {
    var a = m.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !Xc("Presto") && (a = function () {
        var a = document.createElement("iframe");
        a.style.display = "none";
        a.src = "";
        document.documentElement.appendChild(a);
        var b = a.contentWindow, a = b.document;
        a.open();
        a.write("");
        a.close();
        var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host, a = x(function (a) {
            if (("*" == d || a.origin == d) && a.data ==
                c)
                this.port1.onmessage()
        }, this);
        b.addEventListener("message", a, !1);
        this.port1 = {};
        this.port2 = {
            postMessage: function () {
                b.postMessage(c, d)
            }
        }
    });
    if ("undefined" !== typeof a && !Xc("Trident") && !Xc("MSIE")) {
        var b = new a, c = {}, d = c;
        b.port1.onmessage = function () {
            if (n(c.next)) {
                c = c.next;
                var a = c.wo;
                c.wo = null;
                a()
            }
        };
        return function (a) {
            d.next = {wo: a};
            d = d.next;
            b.port2.postMessage(0)
        }
    }
    return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function (a) {
        var b = document.createElement("script");
        b.onreadystatechange = function () {
            b.onreadystatechange = null;
            b.parentNode.removeChild(b);
            b = null;
            a();
            a = null
        };
        document.documentElement.appendChild(b)
    } : function (a) {
        m.setTimeout(a, 0)
    }
}
;
function Lm(a, b) {
    Mm || Nm();
    Om || (Mm(), Om = !0);
    Pm.push(new Qm(a, b))
}

var Mm;

function Nm() {
    if (m.Promise && m.Promise.resolve) {
        var a = m.Promise.resolve();
        Mm = function () {
            a.then(Rm)
        }
    } else
        Mm = function () {
            var a = Rm;
            !ia(m.setImmediate) || m.Window && m.Window.prototype && m.Window.prototype.setImmediate == m.setImmediate ? (Jm || (Jm = Km()), Jm(a)) : m.setImmediate(a)
        }
}

var Om = !1, Pm = [];

function Rm() {
    for (; Pm.length;) {
        var a = Pm;
        Pm = [];
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            try {
                c.j.call(c.scope)
            } catch (d) {
                Im(d)
            }
        }
    }
    Om = !1
}

function Qm(a, b) {
    this.j = a;
    this.scope = b
}
;
function Sm(a) {
    a.prototype.then = a.prototype.then;
    a.prototype.$goog_Thenable = !0
}

function Tm(a) {
    if (!a)
        return !1;
    try {
        return !!a.$goog_Thenable
    } catch (b) {
        return !1
    }
}
;
function Um(a, b) {
    this.k = 0;
    this.C = void 0;
    this.j = this.o = null;
    this.A = this.B = !1;
    try {
        var c = this;
        a.call(b, function (a) {
            Vm(c, 2, a)
        }, function (a) {
            Vm(c, 3, a)
        })
    } catch (d) {
        Vm(this, 3, d)
    }
}

Um.prototype.then = function (a, b, c) {
    return Wm(this, ia(a) ? a : null, ia(b) ? b : null, c)
};
Sm(Um);
Um.prototype.cancel = function (a) {
    0 == this.k && Lm(function () {
        var b = new Xm(a);
        Ym(this, b)
    }, this)
};
function Ym(a, b) {
    if (0 == a.k)
        if (a.o) {
            var c = a.o;
            if (c.j) {
                for (var d = 0, e = -1, g = 0, h; h = c.j[g]; g++)
                    if (h = h.ng)
                        if (d++, h == a && (e = g), 0 <= e && 1 < d)
                            break;
                0 <= e && (0 == c.k && 1 == d ? Ym(c, b) : (d = c.j.splice(e, 1)[0], Zm(c, d, 3, b)
            ))
            }
        } else
            Vm(a, 3, b)
}

function $m(a, b) {
    a.j && a.j.length || 2 != a.k && 3 != a.k || an(a);
    a.j || (a.j = []);
    a.j.push(b)
}

function Wm(a, b, c, d) {
    var e = {ng: null, Fq: null, Wq: null};
    e.ng = new Um(function (a, h) {
        e.Fq = b ? function (c) {
            try {
                var e = b.call(d, c);
                a(e)
            } catch (p) {
                h(p)
            }
        } : a;
        e.Wq = c ? function (b) {
            try {
                var e = c.call(d, b);
                !n(e) && b instanceof Xm ? h(b) : a(e)
            } catch (p) {
                h(p)
            }
        } : h
    });
    e.ng.o = a;
    $m(a, e);
    return e.ng
}

Um.prototype.D = function (a) {
    this.k = 0;
    Vm(this, 2, a)
};
Um.prototype.F = function (a) {
    this.k = 0;
    Vm(this, 3, a)
};
function Vm(a, b, c) {
    if (0 == a.k) {
        if (a == c)
            b = 3, c = new TypeError("Promise cannot resolve to itself");
        else {
            if (Tm(c)) {
                a.k = 1;
                c.then(a.D, a.F, a);
                return
            }
            if (ja(c))
                try {
                    var d = c.then;
                    if (ia(d)) {
                        bn(a, c, d);
                        return
                    }
                } catch (e) {
                    b = 3, c = e
                }
        }
        a.C = c;
        a.k = b;
        an(a);
        3 != b || c instanceof Xm || cn(a, c)
    }
}

function bn(a, b, c) {
    function d(b) {
        g || (g = !0, a.F(b))
    }

    function e(b) {
        g || (g = !0, a.D(b))
    }

    a.k = 1;
    var g = !1;
    try {
        c.call(b, e, d)
    } catch (h) {
        d(h)
    }
}

function an(a) {
    a.B || (a.B = !0, Lm(a.G, a))
}

Um.prototype.G = function () {
    for (; this.j && this.j.length;) {
        var a = this.j;
        this.j = [];
        for (var b = 0; b < a.length; b++)
            Zm(this, a[b], this.k, this.C)
    }
    this.B = !1
};
function Zm(a, b, c, d) {
    if (2 == c)
        b.Fq(d);
    else {
        if (b.ng)
            for (; a && a.A; a = a.o)
                a.A = !1;
        b.Wq(d)
    }
}

function cn(a, b) {
    a.A = !0;
    Lm(function () {
        a.A && dn.call(null, b)
    })
}

var dn = Im;

function Xm(a) {
    ta.call(this, a)
}

inherit(Xm, ta);
Xm.prototype.name = "cancel";
function en(a, b) {
    U.call(this);
    this.j = a || 1;
    this.k = b || m;
    this.o = x(this.ax, this);
    this.A = y()
}

inherit(en, U);
f = en.prototype;
f.enabled = !1;
f.hc = null;
function fn(a, b) {
    a.j = b;
    a.hc && a.enabled ? (a.stop(), a.start()) : a.hc && a.stop()
}

f.ax = function () {
    if (this.enabled) {
        var a = y() - this.A;
        0 < a && a < .8 * this.j ? this.hc = this.k.setTimeout(this.o, this.j - a) : (this.hc && (this.k.clearTimeout(this.hc), this.hc = null), this.U("tick"), this.enabled && (this.hc = this.k.setTimeout(this.o, this.j), this.A = y()))
    }
};
f.start = function () {
    this.enabled = !0;
    this.hc || (this.hc = this.k.setTimeout(this.o, this.j), this.A = y())
};
f.stop = function () {
    this.enabled = !1;
    this.hc && (this.k.clearTimeout(this.hc), this.hc = null)
};
f.L = function () {
    en.J.L.call(this);
    this.stop();
    delete this.k
};
function gn(a, b, c) {
    if (ia(a))
        c && (a = x(a, c));
    else if (a && "function" == typeof a.handleEvent)
        a = x(a.handleEvent, a);
    else
        throw Error("Invalid listener argument");
    return 2147483647 < b ? -1 : m.setTimeout(a, b || 0)
}

function hn(a) {
    m.clearTimeout(a)
}
;
function jn(a, b, c) {
    R.call(this);
    this.A = a;
    this.o = b;
    this.k = c;
    this.j = x(this.QB, this)
}

inherit(jn, R);
f = jn.prototype;
f.Sf = !1;
f.Qg = 0;
f.we = null;
function kn(a) {
    a.we || a.Qg ? a.Sf = !0 : ln(a)
}

f.stop = function () {
    this.we && (hn(this.we), this.we = null, this.Sf = !1)
};
f.pause = function () {
    this.Qg++
};
f.resume = function () {
    this.Qg--;
    this.Qg || !this.Sf || this.we || (this.Sf = !1, ln(this))
};
f.L = function () {
    jn.J.L.call(this);
    this.stop()
};
f.QB = function () {
    this.we = null;
    this.Sf && !this.Qg && (this.Sf = !1, ln(this))
};
function ln(a) {
    a.we = gn(a.j, a.o);
    a.A.call(a.k)
}
;
function mn(a) {
    R.call(this);
    this.A = a;
    this.k = {}
}

inherit(mn, R);
var nn = [];
f = mn.prototype;
f.listen = function (a, b, c, d) {
    return on(this, a, b, c, d)
};
function pn(a, b, c, d, e) {
    on(a, b, c, d, !1, e)
}

function on(a, b, c, d, e, g) {
    ea(c) || (c && (nn[0] = c.toString()), c = nn);
    for (var h = 0; h < c.length; h++) {
        var k = rm(b, c[h], d || a.handleEvent, e || !1, g || a.A || a);
        if (!k)
            break;
        a.k[k.key] = k
    }
    return a
}

function qn(a, b, c, d) {
    rn(a, b, c, d, void 0)
}

function sn(a, b, c, d, e) {
    rn(a, b, c, d, !1, e)
}

function rn(a, b, c, d, e, g) {
    if (ea(c))
        for (var h = 0; h < c.length; h++)
            rn(a, b, c[h], d, e, g);
    else
        (b = ym(b, c, d || a.handleEvent, e, g || a.A || a)) && (a.k[b.key] = b)
}

f.Da = function (a, b, c, d, e) {
    if (ea(b))
        for (var g = 0; g < b.length; g++)
            this.Da(a, b[g], c, d, e);
    else
        c = c || this.handleEvent, e = e || this.A || this, c = sm(c), d = !!d, b = gm(a) ? nm(a.Xc, String(b), c, d, e) : a ? (a = um(a)) ? nm(a, b, c, d, e) : null : null, b && (Am(b), delete this.k[b.key]);
    return this
};
f.removeAll = function () {
    Ib(this.k, Am);
    this.k = {}
};
f.L = function () {
    mn.J.L.call(this);
    this.removeAll()
};
f.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
};
function tn(a) {
    switch (a) {
        case 0:
            return "No Error";
        case 1:
            return "Access denied to content document";
        case 2:
            return "File not found";
        case 3:
            return "Firefox silently errored";
        case 4:
            return "Application custom error";
        case 5:
            return "An exception occurred";
        case 6:
            return "Http response at 400 or 500 level";
        case 7:
            return "Request was aborted";
        case 8:
            return "Request timed out";
        case 9:
            return "The resource is not available offline";
        default:
            return "Unrecognized error code"
    }
}
;
function un() {
}

un.prototype.j = null;
function vn(a) {
    var b;
    (b = a.j) || (b = {}, wn(a) && (b[0] = !0, b[1] = !0), b = a.j = b);
    return b
}
;
var xn;

function yn() {
}

inherit(yn, un);
function zn(a) {
    return (a = wn(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}

function wn(a) {
    if (!a.k && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
            var d = b[c];
            try {
                return new ActiveXObject(d), a.k = d
            } catch (e) {
            }
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return a.k
}

xn = new yn;
function An(a, b, c, d, e) {
    this.j = a;
    this.o = c;
    this.D = d;
    this.C = e || 1;
    this.vb = 45E3;
    this.A = new mn(this);
    this.k = new en;
    fn(this.k, 250)
}

f = An.prototype;
f.xe = null;
f.Bc = !1;
f.Xf = null;
f.bn = null;
f.Tg = null;
f.wf = null;
f.xd = null;
f.Pd = null;
f.He = null;
f.qb = null;
f.ih = 0;
f.Ec = null;
f.Hj = null;
f.ye = null;
f.Bg = -1;
f.Nr = !0;
f.oe = !1;
f.il = 0;
f.aj = null;
var Bn = {}, Cn = {};
f = An.prototype;
f.setTimeout = function (a) {
    this.vb = a
};
function Dn(a, b, c) {
    a.wf = 1;
    a.xd = rf(b.clone());
    a.He = c;
    a.B = !0;
    En(a, null)
}

function Fn(a, b, c, d, e) {
    a.wf = 1;
    a.xd = rf(b.clone());
    a.He = null;
    a.B = c;
    e && (a.Nr = !1);
    En(a, d)
}

function En(a, b) {
    a.Tg = y();
    Gn(a);
    a.Pd = a.xd.clone();
    of(a.Pd, "t", a.C);
    a.ih = 0;
    a.qb = a.j.Jk(a.j.ah() ? b : null);
    0 < a.il && (a.aj = new jn(x(a.Bs, a, a.qb), a.il));
    a.A.listen(a.qb, "readystatechange", a.NC);
    var c = a.xe ? $b(a.xe) : {};
    a.He ? (a.Hj = "POST", c["Content-Type"] = "application/x-www-form-urlencoded", a.qb.send(a.Pd, a.Hj, a.He, c)) : (a.Hj = "GET", a.Nr && !dd && (c.Connection = "close"), a.qb.send(a.Pd, a.Hj, null, c));
    a.j.yc(1)
}

f.NC = function (a) {
    a = a.target;
    var b = this.aj;
    b && 3 == Hn(a) ? kn(b) : this.Bs(a)
};
f.Bs = function (a) {
    try {
        if (a == this.qb)
            t: {
                var b = Hn(this.qb), c = this.qb.k, d = this.qb.getStatus();
                if (bd && !pd(10) || dd && !od("420+")) {
                    if (4 > b)
                        break t
                } else if (3 > b || 3 == b && !ad && !In(this.qb))
                    break t;
                this.oe || 4 != b || 7 == c || (8 == c || 0 >= d ? this.j.yc(3) : this.j.yc(2));
                Jn(this);
                var e = this.qb.getStatus();
                this.Bg = e;
                var g = In(this.qb);
                (this.Bc = 200 == e) ? (4 == b && Kn(this), this.B ? (Ln(this, b, g), ad && this.Bc && 3 == b && (this.A.listen(this.k, "tick", this.IC), this.k.start())) : Mn(this, g), this.Bc && !this.oe && (4 == b ? this.j.Vi(this) : (this.Bc = !1, Gn(this)))) :
                    (this.ye = 400 == e && 0 < g.indexOf("Unknown SID") ? 3 : 0, Nn(), Kn(this), On(this))
            }
    } catch (h) {
        this.qb && In(this.qb)
    } finally {
    }
};
function Ln(a, b, c) {
    for (var d = !0; !a.oe && a.ih < c.length;) {
        var e = Pn(a, c);
        if (e == Cn) {
            4 == b && (a.ye = 4, Nn(), d = !1);
            break
        } else if (e == Bn) {
            a.ye = 4;
            Nn();
            d = !1;
            break
        } else
            Mn(a, e)
    }
    4 == b && 0 == c.length && (a.ye = 1, Nn(), d = !1);
    a.Bc = a.Bc && d;
    d || (Kn(a), On(a))
}

f.IC = function () {
    var a = Hn(this.qb), b = In(this.qb);
    this.ih < b.length && (Jn(this), Ln(this, a, b), this.Bc && 4 != a && Gn(this))
};
function Pn(a, b) {
    var c = a.ih, d = b.indexOf("\n", c);
    if (-1 == d)
        return Cn;
    c = Number(b.substring(c, d));
    if (isNaN(c))
        return Bn;
    d += 1;
    if (d + c > b.length)
        return Cn;
    var e = b.substr(d, c);
    a.ih = d + c;
    return e
}

function Qn(a, b) {
    a.Tg = y();
    Gn(a);
    var c = b ? window.location.hostname : "";
    a.Pd = a.xd.clone();
    K(a.Pd, "DOMAIN", c);
    K(a.Pd, "t", a.C);
    try {
        a.Ec = new ActiveXObject("htmlfile")
    } catch (d) {
        Kn(a);
        a.ye = 7;
        Nn();
        On(a);
        return
    }
    var e = "<html><body>";
    b && (e += '<script>document.domain="' + c + '"\x3c/script>');
    e += "</body></html>";
    a.Ec.open();
    a.Ec.write(e);
    a.Ec.close();
    a.Ec.parentWindow.m = x(a.$B, a);
    a.Ec.parentWindow.d = x(a.pr, a, !0);
    a.Ec.parentWindow.rpcClose = x(a.pr, a, !1);
    c = a.Ec.createElement("div");
    a.Ec.parentWindow.document.body.appendChild(c);
    c.innerHTML = '<iframe src="' + a.Pd + '"></iframe>';
    a.j.yc(1)
}

f.$B = function (a) {
    Rn(x(this.ZB, this, a), 0)
};
f.ZB = function (a) {
    this.oe || (Jn(this), Mn(this, a), Gn(this))
};
f.pr = function (a) {
    Rn(x(this.YB, this, a), 0)
};
f.YB = function (a) {
    this.oe || (Kn(this), this.Bc = a, this.j.Vi(this), this.j.yc(4))
};
f.cancel = function () {
    this.oe = !0;
    Kn(this)
};
function Gn(a) {
    a.bn = y() + a.vb;
    Sn(a, a.vb)
}

function Sn(a, b) {
    if (null != a.Xf)
        throw Error("WatchDog timer not null");
    a.Xf = Rn(x(a.yC, a), b)
}

function Jn(a) {
    a.Xf && (m.clearTimeout(a.Xf), a.Xf = null)
}

f.yC = function () {
    this.Xf = null;
    var a = y();
    0 <= a - this.bn ? (2 != this.wf && this.j.yc(3), Kn(this), this.ye = 2, Nn(), On(this)) : Sn(this, this.bn - a)
};
function On(a) {
    a.j.fp() || a.oe || a.j.Vi(a)
}

function Kn(a) {
    Jn(a);
    ti(a.aj);
    a.aj = null;
    a.k.stop();
    a.A.removeAll();
    if (a.qb) {
        var b = a.qb;
        a.qb = null;
        b.abort();
        b.dispose()
    }
    a.Ec && (a.Ec = null)
}

function Mn(a, b) {
    try {
        a.j.Zq(a, b), a.j.yc(4)
    } catch (c) {
    }
}
;
function Tn(a, b, c, d, e) {
    if (0 == d)
        c(!1);
    else {
        var g = e || 0;
        d--;
        Un(a, b, function (e) {
            e ? c(!0) : m.setTimeout(function () {
                Tn(a, b, c, d, g)
            }, g)
        })
    }
}

function Un(a, b, c) {
    var d = new Image;
    d.onload = function () {
        try {
            Vn(d), c(!0)
        } catch (a) {
        }
    };
    d.onerror = function () {
        try {
            Vn(d), c(!1)
        } catch (a) {
        }
    };
    d.onabort = function () {
        try {
            Vn(d), c(!1)
        } catch (a) {
        }
    };
    d.ontimeout = function () {
        try {
            Vn(d), c(!1)
        } catch (a) {
        }
    };
    m.setTimeout(function () {
        if (d.ontimeout)
            d.ontimeout()
    }, b);
    d.src = a
}

function Vn(a) {
    a.onload = null;
    a.onerror = null;
    a.onabort = null;
    a.ontimeout = null
}
;
function Wn(a) {
    this.j = a;
    this.k = new Fm(null, !0)
}

f = Wn.prototype;
f.al = null;
f.bc = null;
f.bj = !1;
f.gp = null;
f.ci = null;
f.bl = null;
f.fl = null;
f.ic = null;
f.Zc = -1;
f.Ag = null;
f.mg = null;
f.connect = function (a) {
    this.fl = a;
    a = Xn(this.j, null, this.fl);
    Nn();
    this.gp = y();
    var b = this.j.F;
    null != b ? (this.Ag = b[0], (this.mg = b[1]) ? (this.ic = 1, Yn(this)) : (this.ic = 2, Zn(this))) : (of(a, "MODE", "init"), this.bc = new An(this, 0, void 0, void 0, void 0), this.bc.xe = this.al, Fn(this.bc, a, !1, null, !0), this.ic = 0)
};
function Yn(a) {
    var b = Xn(a.j, a.mg, "/mail/images/cleardot.gif");
    rf(b);
    Tn(b.toString(), 5E3, x(a.yw, a), 3, 2E3);
    a.yc(1)
}

f.yw = function (a) {
    if (a)
        this.ic = 2, Zn(this);
    else {
        Nn();
        var b = this.j;
        b.wc = b.yd.Zc;
        $n(b, 9)
    }
    a && this.yc(2)
};
function Zn(a) {
    var b = a.j.G;
    if (null != b)
        Nn(), b ? (Nn(), ao(a.j, a, !1)) : (Nn(), ao(a.j, a, !0));
    else if (a.bc = new An(a, 0, void 0, void 0, void 0), a.bc.xe = a.al, b = a.j, b = Xn(b, b.ah() ? a.Ag : null, a.fl), Nn(), !bd || pd(10))
        of(b, "TYPE", "xmlhttp"), Fn(a.bc, b, !1, a.Ag, !1);
    else {
        of(b, "TYPE", "html");
        var c = a.bc;
        a = Boolean(a.Ag);
        c.wf = 3;
        c.xd = rf(b.clone());
        Qn(c, a)
    }
}

f.Jk = function (a) {
    return this.j.Jk(a)
};
f.abort = function () {
    this.bc && (this.bc.cancel(), this.bc = null);
    this.Zc = -1
};
f.fp = function () {
    return !1
};
f.Zq = function (a, b) {
    this.Zc = a.Bg;
    if (0 == this.ic)
        if (b) {
            try {
                var c = this.k.parse(b)
            } catch (d) {
                c = this.j;
                c.wc = this.Zc;
                $n(c, 2);
                return
            }
            this.Ag = c[0];
            this.mg = c[1]
        } else
            c = this.j, c.wc = this.Zc, $n(c, 2);
    else if (2 == this.ic)
        if (this.bj)
            Nn(), this.bl = y();
        else if ("11111" == b) {
            if (Nn(), this.bj = !0, this.ci = y(), c = this.ci - this.gp, !bd || pd(10) || 500 > c)
                this.Zc = 200, this.bc.cancel(), Nn(), ao(this.j, this, !0)
        } else
            Nn(), this.ci = this.bl = y(), this.bj = !1
};
f.Vi = function () {
    this.Zc = this.bc.Bg;
    if (this.bc.Bc)
        0 == this.ic ? this.mg ? (this.ic = 1, Yn(this)) : (this.ic = 2, Zn(this)) : 2 == this.ic && (a = !1, (a = !bd || pd(10) ? this.bj : 200 > this.bl - this.ci ? !1 : !0) ? (Nn(), ao(this.j, this, !0)) : (Nn(), ao(this.j, this, !1)));
    else {
        0 == this.ic ? Nn() : 2 == this.ic && Nn();
        var a = this.j;
        a.wc = this.Zc;
        $n(a, 2)
    }
};
f.ah = function () {
    return this.j.ah()
};
f.isActive = function () {
    return this.j.isActive()
};
f.yc = function (a) {
    this.j.yc(a)
};
function bo(a) {
    U.call(this);
    this.headers = new ue;
    this.K = a || null;
    this.o = !1;
    this.I = this.j = null;
    this.S = this.F = "";
    this.k = 0;
    this.C = "";
    this.A = this.P = this.D = this.M = !1;
    this.B = 0;
    this.G = null;
    this.R = "";
    this.H = this.O = !1
}

inherit(bo, U);
var co = /^https?$/i, eo = ["POST", "PUT"];

function fo(a, b) {
    a.B = Math.max(0, b)
}

f = bo.prototype;
f.send = function (a, b, c, d) {
    if (this.j)
        throw Error("[goog.net.XhrIo] Object is active with another request=" + this.F + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.F = a;
    this.C = "";
    this.k = 0;
    this.S = b;
    this.M = !1;
    this.o = !0;
    this.j = this.K ? zn(this.K) : zn(xn);
    this.I = this.K ? vn(this.K) : vn(xn);
    this.j.onreadystatechange = x(this.Uq, this);
    try {
        Yl(go(this, "Opening Xhr")), this.P = !0, this.j.open(b, String(a), !0), this.P = !1
    } catch (e) {
        Yl(go(this, "Error opening Xhr: " + e.message));
        ho(this, e);
        return
    }
    a = c || "";
    var g = this.headers.clone();
    d && Ce(d, function (a, b) {
        g.set(b, a)
    });
    d = F(g.Ha(), io);
    c = m.FormData && a instanceof m.FormData;
    !G(eo, b) || d || c || g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    g.forEach(function (a, b) {
        this.j.setRequestHeader(b, a)
    }, this);
    this.R && (this.j.responseType = this.R);
    "withCredentials" in this.j && (this.j.withCredentials = this.O);
    try {
        jo(this), 0 < this.B && (this.H = ko(this.j), Yl(go(this, "Will abort after " + this.B + "ms if incomplete, xhr2 " + this.H)), this.H ? (this.j.timeout = this.B, this.j.ontimeout = x(this.vb,
            this)) : this.G = gn(this.vb, this.B, this)), Yl(go(this, "Sending request")), this.D = !0, this.j.send(a), this.D = !1
    } catch (h) {
        Yl(go(this, "Send error: " + h.message)), ho(this, h)
    }
};
function ko(a) {
    return bd && od(9) && ha(a.timeout) && n(a.ontimeout)
}

function io(a) {
    return "content-type" == a.toLowerCase()
}

f.vb = function () {
    "undefined" != typeof aa && this.j && (this.C = "Timed out after " + this.B + "ms, aborting", this.k = 8, go(this, this.C), this.U("timeout"), this.abort(8))
};
function ho(a, b) {
    a.o = !1;
    a.j && (a.A = !0, a.j.abort(), a.A = !1);
    a.C = b;
    a.k = 5;
    lo(a);
    mo(a)
}

function lo(a) {
    a.M || (a.M = !0, a.U("complete"), a.U("error"))
}

f.abort = function (a) {
    this.j && this.o && (go(this, "Aborting"), this.o = !1, this.A = !0, this.j.abort(), this.A = !1, this.k = a || 7, this.U("complete"), this.U("abort"), mo(this))
};
f.L = function () {
    this.j && (this.o && (this.o = !1, this.A = !0, this.j.abort(), this.A = !1), mo(this, !0));
    bo.J.L.call(this)
};
f.Uq = function () {
    this.ha() || (this.P || this.D || this.A ? no(this) : this.sB())
};
f.sB = function () {
    no(this)
};
function no(a) {
    if (a.o && "undefined" != typeof aa)
        if (a.I[1] && 4 == Hn(a) && 2 == a.getStatus())
            go(a, "Local request error detected and ignored");
        else if (a.D && 4 == Hn(a))
            gn(a.Uq, 0, a);
        else if (a.U("readystatechange"), 4 == Hn(a)) {
            go(a, "Request complete");
            a.o = !1;
            try {
                var b = a.getStatus(), c;
                t: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        c = !0;
                        break t;
                    default:
                        c = !1
                }
                var d;
                if (!(d = c)) {
                    var e;
                    if (e = 0 === b) {
                        var g = Fe(String(a.F))[1] || null;
                        if (!g && self.location)
                            var h = self.location.protocol, g = h.substr(0, h.length -
                            1);
                        e = !co.test(g ? g.toLowerCase() : "")
                    }
                    d = e
                }
                if (d)
                    a.U("complete"), a.U("success");
                else {
                    a.k = 6;
                    var k;
                    try {
                        k = 2 < Hn(a) ? a.j.statusText : ""
                    } catch (l) {
                        k = ""
                    }
                    a.C = k + " [" + a.getStatus() + "]";
                    lo(a)
                }
            } finally {
                mo(a)
            }
        }
}

function mo(a, b) {
    if (a.j) {
        jo(a);
        var c = a.j, d = a.I[0] ? v : null;
        a.j = null;
        a.I = null;
        b || a.U("ready");
        try {
            c.onreadystatechange = d
        } catch (e) {
        }
    }
}

function jo(a) {
    a.j && a.H && (a.j.ontimeout = null);
    ha(a.G) && (hn(a.G), a.G = null)
}

f.isActive = function () {
    return !!this.j
};
function Hn(a) {
    return a.j ? a.j.readyState : 0
}

f.getStatus = function () {
    try {
        return 2 < Hn(this) ? this.j.status : -1
    } catch (a) {
        return -1
    }
};
function In(a) {
    try {
        return a.j ? a.j.responseText : ""
    } catch (b) {
        return ""
    }
}

function go(a, b) {
    return b + " [" + a.S + " " + a.F + " " + a.getStatus() + "]"
}
;
function oo(a, b, c) {
    this.D = a || null;
    this.j = 1;
    this.k = [];
    this.A = [];
    this.B = new Fm(null, !0);
    this.F = b || null;
    this.G = null != c ? c : null
}

function po(a, b) {
    this.j = a;
    this.map = b;
    this.context = null
}

f = oo.prototype;
f.ug = null;
f.Ob = null;
f.hb = null;
f.$k = null;
f.fi = null;
f.po = null;
f.ni = null;
f.Ng = 0;
f.Ez = 0;
f.Bb = null;
f.Ed = null;
f.Uc = null;
f.qe = null;
f.yd = null;
f.Gj = null;
f.Df = -1;
f.Xp = -1;
f.wc = -1;
f.vg = 0;
f.df = 0;
f.pe = 8;
var qo = new U;

function ro(a) {
    $l.call(this, "statevent", a)
}

inherit(ro, $l);
function so(a, b) {
    $l.call(this, "timingevent", a);
    this.size = b
}

inherit(so, $l);
function to(a) {
    $l.call(this, "serverreachability", a)
}

inherit(to, $l);
f = oo.prototype;
f.connect = function (a, b, c, d, e) {
    Nn();
    this.$k = b;
    this.ug = c || {};
    d && n(e) && (this.ug.OSID = d, this.ug.OAID = e);
    this.yd = new Wn(this);
    this.yd.al = null;
    this.yd.k = this.B;
    this.yd.connect(a)
};
f.disconnect = function () {
    uo(this);
    if (3 == this.j) {
        var a = this.Ng++, b = this.fi.clone();
        K(b, "SID", this.o);
        K(b, "RID", a);
        K(b, "TYPE", "terminate");
        vo(this, b);
        a = new An(this, 0, this.o, a, void 0);
        a.wf = 2;
        a.xd = rf(b.clone());
        (new Image).src = a.xd;
        a.Tg = y();
        Gn(a)
    }
    wo(this)
};
function uo(a) {
    a.yd && (a.yd.abort(), a.yd = null);
    a.hb && (a.hb.cancel(), a.hb = null);
    a.Uc && (m.clearTimeout(a.Uc), a.Uc = null);
    xo(a);
    a.Ob && (a.Ob.cancel(), a.Ob = null);
    a.Ed && (m.clearTimeout(a.Ed), a.Ed = null)
}

function yo(a, b) {
    if (0 == a.j)
        throw Error("Invalid operation: sending map when state is closed");
    a.k.push(new po(a.Ez++, b));
    2 != a.j && 3 != a.j || zo(a)
}

f.fp = function () {
    return 0 == this.j
};
f.getState = function () {
    return this.j
};
function Ao(a) {
    var b = 0;
    a.hb && b++;
    a.Ob && b++;
    return b
}

function zo(a) {
    a.Ob || a.Ed || (a.Ed = Rn(x(a.lr, a), 0), a.vg = 0)
}

f.lr = function (a) {
    this.Ed = null;
    Bo(this, a)
};
function Bo(a, b) {
    if (1 == a.j) {
        if (!b) {
            a.Ng = Math.floor(1E5 * Math.random());
            var c = a.Ng++, d = new An(a, 0, "", c, void 0);
            d.xe = null;
            var e = Co(a), g = a.fi.clone();
            K(g, "RID", c);
            a.D && K(g, "CVER", a.D);
            vo(a, g);
            Dn(d, g, e);
            a.Ob = d;
            a.j = 2
        }
    } else
        3 == a.j && (b ? Do(a, b) : 0 != a.k.length && (a.Ob || Do(a)))
}

function Do(a, b) {
    var c, d;
    b ? 6 < a.pe ? (a.k = a.A.concat(a.k), a.A.length = 0, c = a.Ng - 1, d = Co(a)) : (c = b.D, d = b.He): (c = a.Ng++, d = Co(a));
    var e = a.fi.clone();
    K(e, "SID", a.o);
    K(e, "RID", c);
    K(e, "AID", a.Df);
    vo(a, e);
    c = new An(a, 0, a.o, c, a.vg + 1);
    c.xe = null;
    c.setTimeout(Math.round(1E4) + Math.round(1E4 * Math.random()));
    a.Ob = c;
    Dn(c, e, d)
}

function vo(a, b) {
    if (a.Bb) {
        var c = a.Bb.Vo(a);
        c && Ib(c, function (a, c) {
            K(b, c, a)
        })
    }
}

function Co(a) {
    var b = Math.min(a.k.length, 1E3), c = ["count=" + b], d;
    6 < a.pe && 0 < b ? (d = a.k[0].j, c
.
    push("ofs=" + d)
) :
    d = 0;
    for (var e = 0; e < b; e++) {
        var g = a.k[e].j, h = a.k[e].map, g = 6 >= a.pe ? e : g - d;
        try {
            Ce(h, function (a, b) {
                c.push("req" + g + "_" + b + "=" + encodeURIComponent(a))
            })
        } catch (k) {
            c.push("req" + g + "_type=" + encodeURIComponent("_badmap"))
        }
    }
    a.A = a.A.concat(a.k.splice(0, b));
    return c.join("&")
}

function Eo(a) {
    a.hb || a.Uc || (a.C = 1, a.Uc = Rn(x(a.kr, a), 0), a.df = 0)
}

function Fo(a) {
    if (a.hb || a.Uc || 3 <= a.df)
        return !1;
    a.C++;
    a.Uc = Rn(x(a.kr, a), Go(a, a.df));
    a.df++;
    return !0
}

f.kr = function () {
    this.Uc = null;
    this.hb = new An(this, 0, this.o, "rpc", this.C);
    this.hb.xe = null;
    this.hb.il = 0;
    var a = this.po.clone();
    K(a, "RID", "rpc");
    K(a, "SID", this.o);
    K(a, "CI", this.Gj ? "0" : "1");
    K(a, "AID", this.Df);
    vo(this, a);
    if (!bd || pd(10))
        K(a, "TYPE", "xmlhttp"), Fn(this.hb, a, !0, this.ni, !1);
    else {
        K(a, "TYPE", "html");
        var b = this.hb, c = Boolean(this.ni);
        b.wf = 3;
        b.xd = rf(a.clone());
        Qn(b, c)
    }
};
function ao(a, b, c) {
    a.Gj = c;
    a.wc = b.Zc;
    a.Mw(1, 0);
    a.fi = Xn(a, null, a.$k);
    zo(a)
}

f.Zq = function (a, b) {
    if (0 != this.j && (this.hb == a || this.Ob == a))
        if (this.wc = a.Bg, this.Ob == a && 3 == this.j)
            if (7 < this.pe) {
                var c;
                try {
                    c = this.B.parse(b)
                } catch (d) {
                    c = null
                }
                if (ea(c) && 3 == c.length)
                    if (0 == c[0])
                        t: {
                            if (!this.Uc) {
                                if (this.hb)
                                    if (this.hb.Tg + 3E3 < this.Ob.Tg)
                                        xo(this), this.hb.cancel(), this.hb = null;
                                    else
                                        break t;
                                Fo(this);
                                Nn()
                            }
                        }
                    else
                        this.Xp = c[1], 0 < this.Xp - this.Df && 37500 > c[2] && this.Gj && 0 == this.df && !this.qe && (this.qe = Rn(x(this.Zz, this), 6E3));
                else
                    $n(this, 11)
            } else
                "y2f%" != b && $n(this, 11);
        else if (this.hb == a && xo(this), !A(b)) {
            c =
                this.B.parse(b);
            ea(c);
            for (var e = 0; e < c.length; e++) {
                var g = c[e];
                this.Df = g[0];
                g = g[1];
                2 == this.j ? "c" == g[0] ? (this.o = g[1], this.ni = g[2], g = g[3], null != g ? this.pe = g : this.pe = 6, this.j = 3, this.Bb && this.Bb.Ao(this), this.po = Xn(this, this.ah() ? this.ni : null, this.$k), Eo(this)) : "stop" == g[0] && $n(this, 7) : 3 == this.j && ("stop" == g[0] ? $n(this, 7) : "noop" != g[0] && this.Bb && this.Bb.zo(this, g), this.df = 0)
            }
        }
};
f.Zz = function () {
    null != this.qe && (this.qe = null, this.hb.cancel(), this.hb = null, Fo(this), Nn())
};
function xo(a) {
    null != a.qe && (m.clearTimeout(a.qe), a.qe = null)
}

f.Vi = function (a) {
    var b;
    if (this.hb == a)
        xo(this), this.hb = null, b = 2;
    else if (this.Ob == a)
        this.Ob = null, b = 1;
    else
        return;
    this.wc = a.Bg;
    if (0 != this.j)
        if (a.Bc)
            1 == b ? (y(), qo.U(new so(qo, a.He ? a.He.length : 0)), zo(this), this.A.length = 0) : Eo(this);
        else {
            var c = a.ye, d;
            if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.wc)) {
                if (d = 1 == b)
                    this.Ob || this.Ed || 1 == this.j || 2 <= this.vg ? d = !1 : (this.Ed = Rn(x(this.lr, this, a), Go(this, this.vg)), this.vg++, d = !0);
                d = !(d || 2 == b && Fo(this))
            }
            if (d)
                switch (c) {
                    case 1:
                        $n(this, 5);
                        break;
                    case 4:
                        $n(this, 10);
                        break;
                    case 3:
                        $n(this,
                            6);
                        break;
                    case 7:
                        $n(this, 12);
                        break;
                    default:
                        $n(this, 2)
                }
        }
};
function Go(a, b) {
    var c = 5E3 + Math.floor(1E4 * Math.random());
    a.isActive() || (c *= 2);
    return c * b
}

f.Mw = function (a) {
    if (!G(arguments, this.j))
        throw Error("Unexpected channel state: " + this.j);
};
function $n(a, b) {
    if (2 == b || 9 == b) {
        var c = null;
        a.Bb && (c = null);
        var d = x(a.nD, a);
        c || (c = new J("//www.google.com/images/cleardot.gif"), rf(c));
        Un(c.toString(), 1E4, d)
    } else
        Nn();
    Ho(a, b)
}

f.nD = function (a) {
    a ? Nn() : (Nn(), Ho(this, 8))
};
function Ho(a, b) {
    a.j = 0;
    a.Bb && a.Bb.yo(a, b);
    wo(a);
    uo(a)
}

function wo(a) {
    a.j = 0;
    a.wc = -1;
    if (a.Bb)
        if (0 == a.A.length && 0 == a.k.length)
            a.Bb.Bk(a);
        else {
            var b = tb(a.A), c = tb(a.k);
            a.A.length = 0;
            a.k.length = 0;
            a.Bb.Bk(a, b, c)
        }
}

function Xn(a, b, c) {
    var d = sf(c);
    if ("" != d.mb)
        b && Ze(d, b + "." + d.mb), $e(d, d.md);
    else
        var e = window.location, d = tf(e.protocol, b ? b + "." + e.hostname : e.hostname, e.port, c);
    a.ug && Ib(a.ug, function (a, b) {
        K(d, b, a)
    });
    K(d, "VER", a.pe);
    vo(a, d);
    return d
}

f.Jk = function (a) {
    if (a)
        throw Error("Can't create secondary domain capable XhrIo object.");
    a = new bo;
    a.O = !1;
    return a
};
f.isActive = function () {
    return !!this.Bb && this.Bb.isActive(this)
};
function Rn(a, b) {
    if (!ia(a))
        throw Error("Fn must not be null and must be a function");
    return m.setTimeout(function () {
        a()
    }, b)
}

f.yc = function () {
    qo.U(new to(qo))
};
function Nn() {
    qo.U(new ro(qo))
}

f.ah = function () {
    return !(!bd || pd(10))
};
function Io() {
}

f = Io.prototype;
f.Ao = function () {
};
f.zo = function () {
};
f.yo = function () {
};
f.Bk = function () {
};
f.Vo = function () {
    return {}
};
f.isActive = function () {
    return !0
};
function Jo(a, b) {
    en.call(this);
    if (ia(a))
        b && (a = x(a, b));
    else if (a && ia(a.handleEvent))
        a = x(a.handleEvent, a);
    else
        throw Error("Invalid listener argument");
    this.D = a;
    rm(this, "tick", x(this.C, this));
    this.stop();
    fn(this, 5E3 + 2E4 * Math.random())
}

inherit(Jo, en);
Jo.prototype.B = 0;
Jo.prototype.C = function () {
    if (500 < this.j) {
        var a = this.j;
        24E4 > 2 * a && (a *= 2);
        fn(this, a)
    }
    this.D()
};
Jo.prototype.start = function () {
    Jo.J.start.call(this);
    this.B = y() + this.j
};
Jo.prototype.stop = function () {
    this.B = 0;
    Jo.J.stop.call(this)
};
function Ko(a, b) {
    this.I = a;
    this.A = b;
    this.o = new wi;
    this.k = new Jo(this.GD, this);
    this.j = null;
    this.H = !1;
    this.C = null;
    this.G = "";
    this.F = this.B = 0;
    this.D = []
}

inherit(Ko, Io);
f = Ko.prototype;
f.subscribe = function (a, b, c) {
    return this.o.subscribe(a, b, c)
};
f.unsubscribe = function (a, b, c) {
    return this.o.unsubscribe(a, b, c)
};
f.Lb = function (a) {
    return this.o.Lb(a)
};
f.publish = function (a, b) {
    return this.o.publish.apply(this.o, arguments)
};
f.dispose = function () {
    this.H || (this.H = !0, this.o.clear(), this.disconnect(), ti(this.o))
};
f.ha = function () {
    return this.H
};
function Lo(a) {
    return {firstTestResults: [""], secondTestResults: !a.j.Gj, sessionId: a.j.o, arrayId: a.j.Df}
}

f.connect = function (a, b, c) {
    if (!this.j || 2 != this.j.getState()) {
        this.G = "";
        this.k.stop();
        this.C = a || null;
        this.B = b || 0;
        a = this.I + "/test";
        b = this.I + "/bind";
        var d = new oo("1", c ? c.firstTestResults : null, c ? c.secondTestResults : null), e = this.j;
        e && (e.Bb = null);
        d.Bb = this;
        this.j = d;
        e ? (3 != e.getState() && 0 == Ao(e) || e.getState(), this.j.connect(a, b, this.A, e.o, e.Df)) : c ? this.j.connect(a, b, this.A, c.sessionId, c.arrayId) : this.j.connect(a, b, this.A)
    }
};
f.disconnect = function (a) {
    this.F = a || 0;
    this.k.stop();
    this.j && (3 == this.j.getState() && Bo(this.j), this.j.disconnect());
    this.F = 0
};
f.sendMessage = function (a, b) {
    var c = {_sc: a};
    b && cc(c, b);
    this.k.enabled || 2 == (this.j ? this.j.getState() : 0) ? this.D.push(c) : this.j && 3 == this.j.getState() && yo(this.j, c)
};
f.Ao = function () {
    var a = this.k;
    a.stop();
    fn(a, 5E3 + 2E4 * Math.random());
    this.C = null;
    this.B = 0;
    if (this.D.length) {
        a = this.D;
        this.D = [];
        for (var b = 0, c = a.length; b < c; ++b)
            yo(this.j, a[b])
    }
    this.publish("handlerOpened")
};
f.yo = function (a, b) {
    var c = 2 == b && 401 == this.j.wc;
    if (4 != b && !c) {
        if (6 == b || 410 == this.j.wc)
            c = this.k, c.stop(), fn(c, 500);
        this.k.start()
    }
    this.publish("handlerError", b)
};
f.Bk = function (a, b, c) {
    if (!this.k.enabled)
        this.publish("handlerClosed");
    else if (c)
        for (a = 0, b = c.length; a < b; ++a)
            this.D.push(c[a].map)
};
f.Vo = function () {
    var a = {v: 2};
    this.G && (a.gsessionid = this.G);
    0 != this.B && (a.ui = "" + this.B);
    0 != this.F && (a.ui = "" + this.F);
    this.C && cc(a, this.C);
    return a
};
f.zo = function (a, b) {
    if ("S" == b[0])
        this.G = b[1];
    else if ("gracefulReconnect" == b[0]) {
        var c = this.k;
        c.stop();
        fn(c, 500);
        this.k.start();
        this.j.disconnect()
    } else
        this.publish("handlerMessage", new El(b[0], b[1]))
};
function Mo(a, b) {
    (a.A.loungeIdToken = b) || a.k.stop()
}

f.getDeviceId = function () {
    return this.A.id
};
f.GD = function () {
    this.k.stop();
    0 != Ao(this.j) ? this.k.start() : this.connect(this.C, this.B)
};
function No() {
    this.j = [];
    this.k = []
}

function Oo(a) {
    mb(a.j) && (a.j = a.k, a.j.reverse(), a.k = [])
}

function Po(a, b) {
    a.k.push(b)
}

function Qo(a) {
    Oo(a);
    return a.j.pop()
}

f = No.prototype;
f.Pa = function () {
    return this.j.length + this.k.length
};
f.isEmpty = function () {
    return mb(this.j) && mb(this.k)
};
f.clear = function () {
    this.j = [];
    this.k = []
};
f.contains = function (a) {
    return G(this.j, a) || G(this.k, a)
};
f.remove = function (a) {
    var b = eb(this.j, a);
    if (0 > b)
        return pb(this.k, a);
    qb(this.j, b);
    return !0
};
f.Ka = function () {
    for (var a = [], b = this.j.length - 1; 0 <= b; --b)
        a.push(this.j[b]);
    for (var c = this.k.length, b = 0; b < c; ++b)
        a.push(this.k[b]);
    return a
};
function Ro(a) {
    So(this, a)
}

function To(a, b) {
    if (a.k)
        throw Error(b + " is not allowed in V3.");
}

function Uo(a) {
    a.volume = -1;
    a.muted = !1;
    a.o = null;
    a.j = -1;
    a.A = null;
    a.B = 0;
    a.C = y()
}

function So(a, b) {
    a.videoIds = [];
    a.k = "";
    Vo(a);
    b && (a.videoIds = b.videoIds, a.index = b.index, a.k = b.listId, a.videoId = b.videoId, a.j = b.playerState, a.A = b.errorReason, a.volume = b.volume, a.muted = b.muted, a.o = b.trackData, a.B = b.playerTime, a.C = b.playerTimeAt)
}

function Vo(a) {
    a.index = -1;
    a.videoId = "";
    Uo(a)
}

f = Ro.prototype;
f.ub = function () {
    return 1 == this.j
};
function Wo(a) {
    return a.k ? a.videoId : a.videoIds[a.index]
}

function Xo(a, b) {
    a.B = b;
    a.C = y()
}

function Yo(a) {
    switch (a.j) {
        case 1:
            return (y() - a.C) / 1E3 + a.B;
        case -1E3:
            return 0
    }
    return a.B
}

f.setVideoId = function (a) {
    To(this, "setVideoId");
    var b = this.index;
    this.index = db(this.videoIds, a);
    b != this.index && Uo(this);
    return -1 != b
};
function Zo(a, b, c) {
    var d = a.videoId;
    a.videoId = b;
    a.index = c;
    b != d && Uo(a)
}

function $o(a, b, c) {
    To(a, "setPlaylist");
    c = c || Wo(a);
    Db(a.videoIds, b) && c == Wo(a) || (a.videoIds = tb(b), a.setVideoId(c))
}

f.add = function (a) {
    To(this, "add");
    return a && !G(this.videoIds, a) ? (this.videoIds.push(a), !0) : !1
};
f.remove = function (a) {
    To(this, "remove");
    var b = Wo(this);
    return pb(this.videoIds, a) ? (this.index = db(this.videoIds, b), !0) : !1
};
function ap(a) {
    var b = {};
    b.videoIds = tb(a.videoIds);
    b.index = a.index;
    b.listId = a.k;
    b.videoId = a.videoId;
    b.playerState = a.j;
    b.errorReason = a.A;
    b.volume = a.volume;
    b.muted = a.muted;
    b.trackData = ac(a.o);
    b.playerTime = a.B;
    b.playerTimeAt = a.C;
    return b
}

f.clone = function () {
    return new Ro(ap(this))
};
function bp(a, b) {
    T.call(this);
    this.o = 0;
    this.A = a;
    this.D = [];
    this.C = new No;
    this.B = NaN;
    this.k = this.j = null;
    this.H = x(this.dA, this);
    this.F = x(this.Og, this);
    this.G = x(this.cA, this);
    var c = 0;
    a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.nn, this), cp(this))
) :
    c = 3;
    0 != c && (b ? this.nn(c) : L(x(function () {
        this.nn(c)
    }, this), 0));
    dp(this, xl())
}

inherit(bp, T);
f = bp.prototype;
f.getState = function () {
    return this.o
};
function ep(a) {
    return new Ro(a.A.getPlayerContextData())
}

f.play = function () {
    1 == this.getState() ? (this.j ? this.j.play(null, v, x(function () {
        this.Ra("Failed to play video with cast v2 channel.");
        fp(this, "play")
    }, this)) : fp(this, "play"), gp(this, 1, Yo(ep(this))), hp(this)) : ip(this, this.play)
};
f.pause = function () {
    1 == this.getState() ? (this.j ? this.j.pause(null, v, x(function () {
        this.Ra("Failed to pause video with cast v2 channel.");
        fp(this, "pause")
    }, this)) : fp(this, "pause"), gp(this, 2, Yo(ep(this))), hp(this)) : ip(this, this.pause)
};
f.Cs = function (a) {
    if (1 == this.getState()) {
        if (this.j) {
            var b = ep(this), c = new chrome.cast.media.SeekRequest;
            c.currentTime = a;
            c.resumeState = b.ub() || 3 == b.j ? chrome.cast.media.ResumeState.PLAYBACK_START : chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
            this.j.seek(c, v, x(function () {
                this.Ra("Failed to seek in video with cast v2 channel.");
                fp(this, "seekTo", {newTime: a})
            }, this))
        } else
            fp(this, "seekTo", {newTime: a});
        gp(this, 3, a);
        hp(this)
    } else
        ip(this, pa(this.Cs, a))
};
f.stop = function () {
    if (1 == this.getState()) {
        this.j ? this.j.stop(null, v, x(function () {
            this.Ra("Failed to stop video with cast v2 channel.");
            fp(this, "stopVideo")
        }, this)) : fp(this, "stopVideo");
        var a = ep(this);
        Vo(a);
        jp(this, a);
        hp(this)
    } else
        ip(this, this.stop)
};
f.setVolume = function (a, b) {
    if (1 == this.getState()) {
        var c = ep(this);
        if (this.k) {
            if (c.volume != a) {
                var d = Math.round(a) / 100;
                this.k.setReceiverVolumeLevel(d, x(function () {
                    kp("set receiver volume: " + d)
                }, this), x(function () {
                    this.Ra("failed to set receiver volume.")
                }, this))
            }
            c.muted != b && this.k.setReceiverMuted(b, x(function () {
                kp("set receiver muted: " + b)
            }, this), x(function () {
                this.Ra("failed to set receiver muted.")
            }, this))
        } else {
            var e = {volume: a, muted: b};
            -1 != c.volume && (e.delta = a - c.volume);
            fp(this, "setVolume", e)
        }
        c.muted =
            b;
        c.volume = a;
        jp(this, c);
        hp(this)
    } else
        ip(this, pa(this.setVolume, a, b))
};
f.Im = function (a, b) {
    if (1 == this.getState()) {
        var c = ep(this);
        if (b) {
            c.o = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                format: b.format,
                kind: b.kind
            };
            var d = {videoId: a, style: lg(b.style)};
            cc(d, c.o);
            fp(this, "setSubtitlesTrack", d)
        } else
            d = {videoId: a}, fp(this, "setSubtitlesTrack", d);
        jp(this, c)
    } else
        ip(this, pa(this.Im, a, b))
};
function lp(a, b, c, d, e) {
    var g = ep(a);
    d = d || 0;
    var h = {videoId: b, currentIndex: d, listId: e || g.k};
    Zo(g, b, d);
    n(c) && (Xo(g, c), h.currentTime = c);
    fp(a, "setPlaylist", h);
    e || jp(a, g)
}

f.dispose = function () {
    if (3 != this.o) {
        var a = this.o;
        this.o = 3;
        this.publish("proxyStateChange", a, this.o)
    }
    bp.J.dispose.call(this)
};
f.L = function () {
    M(this.B);
    this.B = NaN;
    mp(this);
    this.A = null;
    this.C.clear();
    dp(this, null);
    bp.J.L.call(this)
};
function cp(a) {
    D(["remotePlayerChange", "remoteQueueChange"], function (a) {
        this.D.push(this.A.subscribe(a, pa(this.mB, a), this))
    }, a)
}

function mp(a) {
    D(a.D, function (a) {
        this.A.unsubscribeByKey(a)
    }, a);
    a.D.length = 0
}

function ip(a, b) {
    50 > a.C.Pa() && Po(a.C, b)
}

function gp(a, b, c) {
    var d = ep(a);
    Xo(d, c);
    -1E3 != d.j && (d.j = b);
    jp(a, d)
}

function fp(a, b, c) {
    a.A.sendMessage(b, c)
}

function jp(a, b) {
    mp(a);
    a.A.setPlayerContextData(ap(b));
    cp(a)
}

f.nn = function (a) {
    if ((a != this.o || 2 == a) && 3 != this.o && 0 != a) {
        var b = this.o;
        this.o = a;
        this.publish("proxyStateChange", b, a);
        if (1 == a)
            for (; !this.C.isEmpty();)
                Qo(this.C).apply(this);
        else
            3 == a && this.dispose()
    }
};
function hp(a) {
    M(a.B);
    a.B = L(x(function () {
        this.publish("remotePlayerChange");
        this.B = NaN
    }, a), 2E3)
}

f.mB = function (a) {
    ("remotePlayerChange" != a || isNaN(this.B)) && this.publish(a)
};
function dp(a, b) {
    a.k && (a.k.removeUpdateListener(a.H), a.k.removeMediaListener(a.F), a.Og(null));
    a.k = b;
    a.k && (kp("Setting cast session: " + a.k.sessionId), a.k.addUpdateListener(a.H), a.k.addMediaListener(a.F), a.k.media.length && a.Og(a.k.media[0]))
}

f.dA = function (a) {
    if (!a)
        this.Og(null), dp(this, null);
    else if (this.k.receiver.volume) {
        a = this.k.receiver.volume;
        var b = ep(this);
        if (b.volume != a.level || b.muted != a.muted)
            kp("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = Math.round(100 * a.level || 0), b.muted = !!a.muted, jp(this, b), hp(this)
    }
};
f.Og = function (a) {
    kp("Cast media: " + !!a);
    this.j && this.j.removeUpdateListener(this.G);
    if (this.j = a)
        this.j.addUpdateListener(this.G), np(this), hp(this)
};
function np(a) {
    var b = a.j.customData;
    if (a.j.media) {
        var c = a.j.media, d = ep(a);
        c.contentId != d.videoId && kp("Cast changing video to: " + c.contentId);
        var e = c.customData;
        d.index = e.currentIndex;
        d.k = e.listId;
        d.videoId = c.contentId;
        d.j = b.playerState;
        Xo(d, a.j.getEstimatedTime());
        jp(a, d)
    } else
        kp("No cast media video. Ignoring state update.")
}

f.cA = function (a) {
    a ? (np(this), hp(this)) : this.Og(null)
};
function kp(a) {
    di("CP", a)
}

f.Ra = function (a) {
    di("CP", a)
};
function op(a, b, c) {
    T.call(this);
    this.O = a;
    this.D = [];
    this.D.push(Q(window, "beforeunload", x(this.lx, this)));
    this.k = [];
    this.ca = new Ro;
    3 == c["mdx-version"] && (this.ca.k = "RQ" + b.token);
    this.F = b.id;
    this.j = pp(this, c);
    this.j.subscribe("handlerOpened", this.iA, this);
    this.j.subscribe("handlerClosed", this.eA, this);
    this.j.subscribe("handlerError", this.fA, this);
    this.ca.k ? this.j.subscribe("handlerMessage", this.gA, this) : this.j.subscribe("handlerMessage", this.hA, this);
    Mo(this.j, b.token);
    this.subscribe("remoteQueueChange",
        function () {
            var a = this.ca.videoId;
            mk() && Xi("yt-remote-session-video-id", a)
        }, this)
}

inherit(op, T);
f = op.prototype;
f.og = NaN;
f.um = !1;
f.cj = NaN;
f.pm = NaN;
f.Vh = NaN;
f.qi = NaN;
f.connect = function (a, b) {
    if (b) {
        if (this.ca.k) {
            var c = b.listId, d = b.videoId, e = b.index, g = b.currentTime || 0;
            5 >= g && (g = 0);
            h = {videoId: d, currentTime: g};
            c && (h.listId = c);
            n(e) && (h.currentIndex = e);
            c && (this.ca.k = c);
            this.ca.videoId = d;
            this.ca.index = e || 0
        } else {
            var d = b.videoIds[b.index], g = b.currentTime || 0;
            5 >= g && (g = 0);
            var h = {videoIds: d, videoId: d, currentTime: g};
            this.ca.videoIds = [d];
            this.ca.index = 0
        }
        this.ca.state = 3;
        Xo(this.ca, g);
        this.La("Connecting with setPlaylist and params: " + lg(h));
        this.j.connect({
            method: "setPlaylist",
            params: lg(h)
        }, a, qk())
    } else
        this.La("Connecting without params"), this.j.connect({}, a, qk());
    qp(this)
};
f.dispose = function () {
    this.ha() || (this.publish("beforeDispose"), rp(this, 3));
    op.J.dispose.call(this)
};
f.L = function () {
    sp(this);
    tp(this);
    up(this);
    M(this.Vh);
    this.Vh = NaN;
    M(this.qi);
    this.qi = NaN;
    this.A = null;
    Eh(this.D);
    this.D.length = 0;
    this.j.dispose();
    op.J.L.call(this);
    this.k = this.ca = this.j = null
};
f.La = function (a) {
    di("conn", a)
};
f.lx = function () {
    this.o(2)
};
function pp(a, b) {
    return new Ko(Jj(a.O, "/bc", void 0, !1), b)
}

function rp(a, b) {
    a.publish("proxyStateChange", b)
}

function qp(a) {
    a.og = L(x(function () {
        this.La("Connecting timeout");
        this.o(1)
    }, a), 2E4)
}

function sp(a) {
    M(a.og);
    a.og = NaN
}

function up(a) {
    M(a.cj);
    a.cj = NaN
}

function vp(a) {
    tp(a);
    a.pm = L(x(function () {
        wp(this, "getNowPlaying")
    }, a), 2E4)
}

function tp(a) {
    M(a.pm);
    a.pm = NaN
}

function xp(a) {
    var b = a.j;
    return !!b.j && 3 == b.j.getState() && isNaN(a.og)
}

f.iA = function () {
    this.La("Channel opened");
    this.um && (this.um = !1, up(this), this.cj = L(x(function () {
        this.La("Timing out waiting for a screen.");
        this.o(1)
    }, this), 15E3));
    wk(Lo(this.j), this.F)
};
f.eA = function () {
    this.La("Channel closed");
    isNaN(this.og) ? xk(!0) : xk();
    this.dispose()
};
f.fA = function (a) {
    xk();
    isNaN(this.B()) ? (this.La("Channel error: " + a + " without reconnection"), this.dispose()) : (this.um = !0, this.La("Channel error: " + a + " with reconnection in " + this.B() + " ms"), rp(this, 2))
};
function yp(a, b) {
    b && (sp(a), up(a));
    b == xp(a) ? b && (rp(a, 1), wp(a, "getSubtitlesTrack")) : b ? (a.C() && So(a.ca), rp(a, 1), wp(a, "getNowPlaying"), zp(a)) : a.o(1)
}

function Ap(a, b) {
    var c = b.params.videoId;
    delete b.params.videoId;
    c == a.ca.videoId && (Vb(b.params) ? a.ca.o = null : a.ca.o = b.params, a.publish("remotePlayerChange"))
}

function Bp(a, b) {
    var c = b.params.videoId || b.params.video_id, d = parseInt(b.params.currentIndex, 10);
    a.ca.k = b.params.listId || a.ca.k;
    Zo(a.ca, c, d);
    a.publish("remoteQueueChange")
}

function Cp(a, b) {
    b.params = b.params || {};
    Bp(a, b);
    Dp(a, b)
}

function Dp(a, b) {
    var c = parseInt(b.params.currentTime || b.params.current_time, 10);
    Xo(a.ca, isNaN(c) ? 0 : c);
    c = parseInt(b.params.state, 10);
    c = isNaN(c) ? -1 : c;
    -1 == c && -1E3 == a.ca.j && (c = -1E3);
    a.ca.j = c;
    var d = null;
    -1E3 == c && (d = a.ca.A || "unknown", n(b.params.currentError) && (d = jg(b.params.currentError).reason || d));
    a.ca.A = d;
    1 == a.ca.j ? vp(a) : tp(a);
    a.publish("remotePlayerChange")
}

function Ep(a, b) {
    var c = "true" == b.params.muted;
    a.ca.volume = parseInt(b.params.volume, 10);
    a.ca.muted = c;
    a.publish("remotePlayerChange")
}

f.gA = function (a) {
    a.params ? this.La("Received: action=" + a.action + ", params=" + lg(a.params)) : this.La("Received: action=" + a.action + " {}");
    switch (a.action) {
        case "loungeStatus":
            a = jg(a.params.devices);
            this.k = E(a, function (a) {
                return new ck(a)
            });
            a = !!F(this.k, function (a) {
                return "LOUNGE_SCREEN" == a.type
            });
            yp(this, a);
            break;
        case "loungeScreenConnected":
            yp(this, !0);
            break;
        case "loungeScreenDisconnected":
            rb(this.k, function (a) {
                return "LOUNGE_SCREEN" == a.type
            });
            yp(this, !1);
            break;
        case "remoteConnected":
            var b = new ck(jg(a.params.device));
            F(this.k, function (a) {
                return a.equals(b)
            }) || ob(this.k, b);
            break;
        case "remoteDisconnected":
            b = new ck(jg(a.params.device));
            rb(this.k, function (a) {
                return a.equals(b)
            });
            break;
        case "gracefulDisconnect":
            break;
        case "playlistModified":
            Bp(this, a);
            break;
        case "nowPlaying":
            Cp(this, a);
            break;
        case "onStateChange":
            Dp(this, a);
            break;
        case "onVolumeChanged":
            Ep(this, a);
            break;
        case "onSubtitlesTrackChanged":
            Ap(this, a);
            break;
        default:
            this.La("Unrecognized action: " + a.action)
    }
};
f.hA = function (a) {
    a.params ? this.La("Received: action=" + a.action + ", params=" + lg(a.params)) : this.La("Received: action=" + a.action);
    Fp(this, a);
    Gp(this, a);
    if (xp(this)) {
        var b = this.ca.clone(), c = !1, d, e, g, h, k, l, p;
        a.params && (d = a.params.videoId || a.params.video_id, e = a.params.videoIds || a.params.video_ids, g = a.params.state, h = a.params.currentTime || a.params.current_time, k = a.params.volume, l = a.params.muted, n(a.params.currentError) && (p = jg(a.params.currentError)));
        if ("onSubtitlesTrackChanged" == a.action)
            d == Wo(this.ca) &&
            (delete a.params.videoId, Vb(a.params) ? this.ca.o = null : this.ca.o = a.params, this.publish("remotePlayerChange"));
        else if (Wo(this.ca) || "onStateChange" != a.action)
            "playlistModified" != a.action && "nowPlayingPlaylist" != a.action || e ? (d || "nowPlaying" != a.action && "nowPlayingPlaylist" != a.action ? d || (d = Wo(this.ca)) : this.ca.setVideoId(""), e && (e = e.split(","), $o(this.ca, e, d))) : $o(this.ca, []), this.ca.add(d) && wp(this, "getPlaylist"), d && this.ca.setVideoId(d), b.index == this.ca.index && Db(b.videoIds, this.ca.videoIds) || this.publish("remoteQueueChange"),
            n(g) && (b = parseInt(g, 10), b = isNaN(b) ? -1 : b, -1 == b && -1E3 == this.ca.j && (b = -1E3), 0 == b && "0" == h && (b = -1), c = c || b != this.ca.j, this.ca.j = b, d = null, -1E3 == b && (d = this.ca.A || "unknown", p && (d = p.reason || d)), c = c || this.ca.A != d, this.ca.A = d, 1 == this.ca.j ? vp(this) : tp(this)), "onError" != a.action || -1 != this.ca.j && -1E3 != this.ca.j || (a = jg(a.params.errors) || [], 1 == a.length && "PLAYER_ERROR" == a[0].error && a[0].videoId == Wo(this.ca) && (this.ca.j = -1E3, this.ca.A = a[0].reason || "unknown", c = !0)), h && (b = parseInt(h, 10), Xo(this.ca, isNaN(b) ? 0 : b), c = !0),
            n(k) && (b = parseInt(k, 10), isNaN(b) || (c = c || this.ca.volume != b, this.ca.volume = b), n(l) && (l = "true" == l, c = c || this.ca.muted != l, this.ca.muted = l)), c && this.publish("remotePlayerChange")
    }
};
function Fp(a, b) {
    switch (b.action) {
        case "loungeStatus":
            var c = jg(b.params.devices);
            a.k = E(c, function (a) {
                return new ck(a)
            });
            break;
        case "loungeScreenDisconnected":
            rb(a.k, function (a) {
                return "LOUNGE_SCREEN" == a.type
            });
            break;
        case "remoteConnected":
            var d = new ck(jg(b.params.device));
            F(a.k, function (a) {
                return a.equals(d)
            }) || ob(a.k, d);
            break;
        case "remoteDisconnected":
            d = new ck(jg(b.params.device)), rb(a.k, function (a) {
                return a.equals(d)
            })
    }
}

function Gp(a, b) {
    var c = !1;
    if ("loungeStatus" == b.action)
        c = !!F(a.k, function (a) {
            return "LOUNGE_SCREEN" == a.type
        });
    else if ("loungeScreenConnected" == b.action)
        c = !0;
    else if ("loungeScreenDisconnected" == b.action)
        c = !1;
    else
        return;
    if (!isNaN(a.cj))
        if (c)
            up(a);
        else
            return;
    c == xp(a) ? c && rp(a, 1) : c ? (sp(a), a.C() && So(a.ca), rp(a, 1), wp(a, "getNowPlaying"), zp(a)) : a.o(1)
}

f.QC = function () {
    if (this.A) {
        var a = this.A;
        this.A = null;
        this.ca.videoId != a && wp(this, "getNowPlaying")
    }
};
op.prototype.subscribe = op.prototype.subscribe;
op.prototype.unsubscribeByKey = op.prototype.Lb;
op.prototype.I = function () {
    var a = 3;
    this.ha() || (a = 0, isNaN(this.B()) ? xp(this) && (a = 1) : a = 2);
    return a
};
op.prototype.getProxyState = op.prototype.I;
op.prototype.o = function (a) {
    this.La("Disconnecting with " + a);
    sp(this);
    this.publish("beforeDisconnect", a);
    1 == a && xk();
    this.j.disconnect(a);
    this.dispose()
};
op.prototype.disconnect = op.prototype.o;
op.prototype.H = function () {
    var a = this.ca;
    this.A && (a = this.ca.clone(), Zo(a, this.A, a.index));
    return ap(a)
};
op.prototype.getPlayerContextData = op.prototype.H;
op.prototype.M = function (a) {
    var b = new Ro(a);
    b.videoId && b.videoId != this.ca.videoId && (this.A = b.videoId, M(this.Vh), this.Vh = L(x(this.QC, this), 5E3));
    var c = [];
    this.ca.k == b.k && this.ca.videoId == b.videoId && this.ca.index == b.index && Db(this.ca.videoIds, b.videoIds) || c.push("remoteQueueChange");
    this.ca.j == b.j && this.ca.volume == b.volume && this.ca.muted == b.muted && Yo(this.ca) == Yo(b) && lg(this.ca.o) == lg(b.o) || c.push("remotePlayerChange");
    So(this.ca, a);
    D(c, function (a) {
        this.publish(a)
    }, this)
};
op.prototype.setPlayerContextData = op.prototype.M;
op.prototype.G = function () {
    return this.j.A.loungeIdToken
};
op.prototype.getLoungeToken = op.prototype.G;
op.prototype.C = function () {
    var a = this.j.getDeviceId(), b = F(this.k, function (b) {
        return "REMOTE_CONTROL" == b.type && b.id != a
    });
    return b ? b.id : ""
};
op.prototype.getOtherConnectedRemoteId = op.prototype.C;
op.prototype.B = function () {
    var a = this.j;
    return a.k.enabled ? a.k.B - y() : NaN
};
op.prototype.getReconnectTimeout = op.prototype.B;
op.prototype.S = function () {
    if (!isNaN(this.B())) {
        var a = this.j.k;
        a.enabled && (a.stop(), a.start(), a.C())
    }
};
op.prototype.reconnect = op.prototype.S;
function zp(a) {
    M(a.qi);
    a.qi = L(x(a.o, a, 1), 864E5)
}

function wp(a, b, c) {
    c ? a.La("Sending: action=" + b + ", params=" + lg(c)) : a.La("Sending: action=" + b);
    a.j.sendMessage(b, c)
}

op.prototype.K = function (a, b) {
    wp(this, a, b);
    zp(this)
};
op.prototype.sendMessage = op.prototype.K;
var Hp = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];

function Ip(a, b) {
    var c = Jp(a);
    return fb(b, function (a) {
        return a.uuid ? (a = Oj(this.o, a.uuid), !!a && "RUNNING" == a.status
        ) :
        !!Pj(c, a)
    }, a)
}

function Kp(a, b, c) {
    var d = Lp, e = "";
    M(d.k);
    d.k = NaN;
    d.A = "";
    if (Oj(d.o, a)) {
        if (!e) {
            var g = e = Lj();
            Ll();
            var h = Vl(a), k = Il();
            if (k && h) {
                var l = new cast.Receiver(h.id, h.name), l = new cast.LaunchRequest("YouTube", l);
                l.parameters = "pairingCode=" + g;
                l.description = new cast.LaunchDescription;
                l.description.text = document.title;
                b && (l.parameters += "&v=" + b, c && (l.parameters += "&t=" + Math.round(c)), l.description.url = "http://i.ytimg.com/vi/" + b + "/default.jpg");
                "UNKNOWN" != h.status && (h.status = "UNKNOWN", Rl(h), Fi("yt-remote-cast-device-status-update",
                    h));
                Gl("Sending a cast launch request with params: " + l.parameters);
                k.launch(l, pa(Wl, a))
            } else
                Gl("No cast API or no cast device. Dropping cast launch.")
        }
        d.A = e;
        d.k = L(x(d.G, d, a, 0, e), Hp[0])
    } else
        d.La("No DIAL device with id: " + a)
}

function Mp(a, b) {
    var c = Qj(Jp(a), b);
    a.La("Found screen: " + mi(c) + " with key: " + b);
    return c
}

function Np(a) {
    var b = Lp, c = Qj(b.j, a);
    b.La("Found online screen: " + mi(c) + " with key: " + a);
    return c
}

function Op(a) {
    var b = Lp, c = Oj(b.o, a);
    if (!c) {
        var d = Qj(b.C, a);
        d && (c = Oj(b.o, d.uuid))
    }
    b.La("Found DIAL: " + (c ? c.toString() : "null") + " with key: " + a);
    return c
}

function Jp(a) {
    return sb(a.B, fb(a.C, function (a) {
        return !Pj(this.B, a)
    }, a))
}
;
function Pp(a) {
    Rj.call(this, "ScreenServiceProxy");
    this.Cb = a;
    this.j = [];
    this.j.push(this.Cb.$_s("screenChange", x(this.KD, this)));
    this.j.push(this.Cb.$_s("onlineScreenChange", x(this.gB, this)))
}

inherit(Pp, Rj);
f = Pp.prototype;
f.Zb = function (a) {
    return this.Cb.$_gs(a)
};
f.contains = function (a) {
    return !!this.Cb.$_c(a)
};
f.get = function (a) {
    return this.Cb.$_g(a)
};
f.start = function () {
    this.Cb.$_st()
};
f.add = function (a, b, c) {
    this.Cb.$_a(a, b, c)
};
f.remove = function (a, b, c) {
    this.Cb.$_r(a, b, c)
};
f.Ej = function (a, b, c, d) {
    this.Cb.$_un(a, b, c, d)
};
f.L = function () {
    for (var a = 0, b = this.j.length; a < b; ++a)
        this.Cb.$_ubk(this.j[a]);
    this.j.length = 0;
    this.Cb = null;
    Pp.J.L.call(this)
};
f.KD = function () {
    this.publish("screenChange")
};
f.gB = function () {
    this.publish("onlineScreenChange")
};
Kk.prototype.$_st = Kk.prototype.start;
Kk.prototype.$_gspc = Kk.prototype.LD;
Kk.prototype.$_gsppc = Kk.prototype.Fs;
Kk.prototype.$_c = Kk.prototype.contains;
Kk.prototype.$_g = Kk.prototype.get;
Kk.prototype.$_a = Kk.prototype.add;
Kk.prototype.$_un = Kk.prototype.Ej;
Kk.prototype.$_r = Kk.prototype.remove;
Kk.prototype.$_gs = Kk.prototype.Zb;
Kk.prototype.$_gos = Kk.prototype.Es;
Kk.prototype.$_s = Kk.prototype.subscribe;
Kk.prototype.$_ubk = Kk.prototype.Lb;
function Qp(a) {
    q("yt.mdx.remote.castv2_", !0, void 0);
    Wi && Vi();
    jk();
    Rp || (Rp = new Ij, yk() && (Rp.j = "/api/loungedev"));
    Sp || (Sp = t("yt.mdx.remote.deferredProxies_") || [], q("yt.mdx.remote.deferredProxies_", Sp, void 0));
    Tp();
    var b = Up();
    if (!b) {
        var c = new Kk(Rp);
        q("yt.mdx.remote.screenService_", c, void 0);
        b = Up();
        il(a, c, function (a) {
            a ? Cl() && Bl() : c.subscribe("onlineScreenChange", function () {
                Fi("yt-remote-receiver-availability-change")
            })
        })
    }
}

function Vp() {
    Ei(Wp);
    Wp.length = 0;
    ti(Xp);
    Xp = null;
    Sp && (D(Sp, function (a) {
        a(null)
    }), Sp.length = 0, Sp = null, q("yt.mdx.remote.deferredProxies_", null, void 0));
    Lp && (ti(Lp), Lp = null);
    Rp = null;
    Ql()
}

function Yp() {
    if (Zp() && vl()) {
        var a = [];
        if (Zi("yt-remote-cast-available") || t("yt.mdx.remote.cloudview.castButtonShown_") || $p())
            a.push({
                key: "cast-selector-receiver",
                name: aq()
            }), q("yt.mdx.remote.cloudview.castButtonShown_", !0, void 0);
        return a
    }
    if (t("yt.mdx.remote.cloudview.initializing_"))
        return [];
    var b = [], b = bq() ? Up().Cb.$_gos() : li(Zi("yt-remote-online-screens") || []);
    (a = cq()) && $p() && (Pj(b, a) || b.push(a));
    bq() || (a = Nj(vk()), a = fb(a, function (a) {
        return !Qj(b, a.id)
    }), b = sb(b, a));
    return Mj(b)
}

function dq() {
    if (Zp() && vl()) {
        var a = wl();
        return a ? {key: "cast-selector-receiver", name: a} : null
    }
    var a = Yp(), b = eq(), c = cq();
    c || (c = fq());
    return F(a, function (a) {
        return c && hi(c, a.key) || b && (a = Op(a.key)) && a.id == b ? !0 : !1
    })
}

function aq() {
    if (Zp() && vl())
        return wl();
    var a = cq();
    return a ? a.name : null
}

function cq() {
    var a = Cl();
    if (!a)
        return null;
    if (!Lp) {
        var b = Up().Zb();
        return Qj(b, a)
    }
    return Mp(Lp, a)
}

function gq(a, b) {
    hq("Connecting to: " + lg(a));
    if ("cast-selector-receiver" == a.key)
        iq(b || null), Al(b || null);
    else {
        jq();
        iq(b || null);
        var c = null;
        Lp ? c = Np(a.key) : (c = Up().Zb(), c = Qj(c, a.key));
        if (c)
            kq(c);
        else {
            if (Lp && (c = Op(a.key))) {
                lq(c);
                return
            }
            L(function () {
                mq(null)
            }, 0)
        }
    }
}

function jq() {
    if (Lp) {
        var a = Lp;
        M(a.k);
        a.k = NaN;
        a.A = ""
    }
    t: {
        if (a = $p())
            if (a = a.getOtherConnectedRemoteId()) {
                hq("Do not stop DIAL due to " + a);
                nq("");
                break t
            }
        (a = eq()) ? (hq("Stopping DIAL: " + a), Xl(a), nq("")) : (a = cq()) && a.uuid && (hq("Stopping DIAL: " + a.uuid), Xl(a.uuid))
    }
    zl() ? rl().stopSession() : ol("stopSession called before API ready.");
    (a = $p()) ? a.disconnect(1) : (Gi("yt-remote-before-disconnect", 1), Gi("yt-remote-connection-change", !1));
    mq(null)
}

function oq() {
    var a = pq(), a = a ? a.currentTime : 0, b = qq();
    0 == a && b && (a = Yo(ep(b)));
    return a
}

function qq() {
    var a = $p();
    return a && 3 != a.getProxyState() ? new bp(a, void 0) : null
}

function hq(a) {
    di("remote", a)
}

function Zp() {
    return !!t("yt.mdx.remote.castv2_")
}

function bq() {
    return t("yt.mdx.remote.screenService_")
}

function Up() {
    if (!Xp) {
        var a = bq();
        Xp = a ? new Pp(a) : null
    }
    return Xp
}

function Cl() {
    return t("yt.mdx.remote.currentScreenId_")
}

function rq(a) {
    q("yt.mdx.remote.currentScreenId_", a, void 0);
    if (Lp) {
        var b = Lp;
        b.F = y() + 3E5;
        if (b.D = a) {
            var c = Mp(b, a);
            if (c && !Pj(b.j, c)) {
                a = tb(b.j);
                a.push(c);
                var c = Ip(b, a), d = !Db(b.j, c, ii);
                mb(a) || uk(E(c, ji));
                d && (b.La("Updating online screens: " + ni(b.j) + " -> " + ni(c)), b.j = c, b.publish("onlineReceiverChange"))
            }
        }
    }
}

function eq() {
    return t("yt.mdx.remote.currentDialId_")
}

function nq(a) {
    q("yt.mdx.remote.currentDialId_", a, void 0)
}

function pq() {
    return t("yt.mdx.remote.connectData_")
}

function iq(a) {
    q("yt.mdx.remote.connectData_", a, void 0)
}

function $p() {
    return t("yt.mdx.remote.connection_")
}

function mq(a) {
    var b = $p();
    iq(null);
    a ? ab(!$p()) : (rq(""), nq(""));
    q("yt.mdx.remote.connection_", a, void 0);
    Sp && (D(Sp, function (b) {
        b(a)
    }), Sp.length = 0);
    b && !a ? Gi("yt-remote-connection-change", !1) : !b && a && Fi("yt-remote-connection-change", !0)
}

function fq() {
    var a = mk();
    if (!a)
        return null;
    if (bq()) {
        var b = Up().Zb();
        return Qj(b, a)
    }
    return Lp ? Mp(Lp, a) : null
}

function kq(a) {
    ab(!Cl());
    rq(a.id);
    a = new op(Rp, a, sq());
    a.connect(1, pq());
    a.subscribe("beforeDisconnect", function (a) {
        Gi("yt-remote-before-disconnect", a)
    });
    a.subscribe("beforeDispose", function () {
        $p() && ($p(), mq(null))
    });
    mq(a)
}

function lq(a) {
    eq();
    hq("Connecting to: " + (a ? a.toString() : "null"));
    nq(a.id);
    var b = pq();
    b ? Kp(a.id, b.videoIds[b.index], b.currentTime) : Kp(a.id)
}

var Rp = null, Sp = null, Xp = null, Lp = null;

function Tp() {
    var a = sq();
    if (Vb(a)) {
        var a = lk(), b = Zi("yt-remote-session-name") || "", c = Zi("yt-remote-session-app") || "", a = {
            device: "REMOTE_CONTROL",
            id: a,
            name: b,
            app: c,
            "mdx-version": 3
        };
        q("yt.mdx.remote.channelParams_", a, void 0)
    }
}

function sq() {
    return t("yt.mdx.remote.channelParams_") || {}
}

var Wp = [];

function tq() {
    var a = {volume: 100, muted: !1}, b = Zi("yt-player-volume") || {};
    a.volume = isNaN(b.volume) ? 100 : Pc(b.volume, 0, 100);
    a.muted = void 0 == b.muted ? !1 : b.muted;
    return a
}

function uq(a) {
    Xi("yt-player-bandwidth", a, 2592E3)
}
;
function vq(a, b, c) {
    w(a) && (a = {mediaContentUrl: a, startSeconds: b, suggestedQuality: c});
    b = a;
    c = /\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);
    b.videoId = c && c[2] ? c[2] : null;
    return wq(a)
}

function wq(a, b, c) {
    if (ja(a)) {
        b = "endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");
        c = {};
        for (var d = 0; d < b.length; d++) {
            var e = b[d];
            a[e] && (c[e] = a[e])
        }
        return c
    }
    return {videoId: a, startSeconds: b, suggestedQuality: c}
}
;
function xq(a, b, c) {
    this.errorCode = a;
    this.k = b;
    this.j = c || ""
}
;
function yq(a, b) {
    R.call(this);
    this.app = a;
    this.$d = null;
    this.Mf = {};
    this.Ig = {};
    this.o = {};
    this.k = {};
    this.j = null;
    this.playerType = b;
    W(this, "cueVideoById", this.eE);
    W(this, "loadVideoById", this.vn);
    W(this, "cueVideoByUrl", this.fE);
    W(this, "loadVideoByUrl", this.uE);
    W(this, "playVideo", this.wn);
    W(this, "pauseVideo", this.pauseVideo);
    W(this, "stopVideo", this.$s);
    W(this, "clearVideo", this.cE);
    W(this, "getVideoBytesLoaded", this.oE);
    W(this, "getVideoBytesTotal", this.pE);
    W(this, "getVideoLoadedFraction", this.un);
    W(this, "getVideoStartBytes",
        this.rE);
    W(this, "cuePlaylist", this.dE);
    W(this, "loadPlaylist", this.Ws);
    W(this, "nextVideo", this.Ys);
    W(this, "previousVideo", this.Zs);
    W(this, "playVideoAt", this.xn);
    W(this, "setShuffle", this.CE);
    W(this, "setLoop", this.zE);
    W(this, "getPlaylist", this.rd);
    W(this, "getPlaylistIndex", this.Ss);
    W(this, "getPlaylistId", this.Rs);
    W(this, "loadModule", this.Vs);
    W(this, "unloadModule", this.FE);
    W(this, "setOption", this.yn);
    W(this, "getOption", this.Rj);
    W(this, "getOptions", this.kE);
    W(this, "mute", this.Xs);
    W(this, "unMute", this.bt);
    W(this, "isMuted", this.Us);
    W(this, "setVolume", this.setVolume);
    W(this, "getVolume", this.Ts);
    W(this, "seekTo", this.oh);
    W(this, "getPlayerState", this.getPlayerState);
    W(this, "getPlaybackRate", this.mE);
    W(this, "setPlaybackRate", this.BE);
    W(this, "getAvailablePlaybackRates", this.hE);
    W(this, "getPlaybackQuality", this.lE);
    W(this, "setPlaybackQuality", this.zn);
    W(this, "getAvailableQualityLevels", this.iE);
    W(this, "getCurrentTime", this.getCurrentTime);
    W(this, "getDuration", this.nh);
    W(this, "addEventListener", this.addEventListener);
    W(this, "removeEventListener", this.removeEventListener);
    W(this, "getVideoUrl", this.getVideoUrl);
    W(this, "getDebugText", this.Qs);
    W(this, "getVideoEmbedCode", this.qE);
    W(this, "getVideoData", this.getVideoData);
    W(this, "addCueRange", this.Ps);
    W(this, "removeCueRange", this.vE);
    W(this, "setSize", this.DE);
    W(this, "getApiInterface", this.gE);
    W(this, "destroy", this.destroy);
    W(this, "showVideoInfo", this.EE);
    W(this, "hideVideoInfo", this.sE);
    zq(this, "getInternalApiInterface", this.jE);
    zq(this, "getAdState", this.getAdState);
    zq(this, "isNotServable", this.tE);
    zq(this, "getUpdatedConfigurationData", this.nE);
    zq(this, "updateRemoteReceivers", this.GE);
    zq(this, "sendAbandonmentPing", this.wE);
    zq(this, "setAutonav", this.xE);
    zq(this, "setAutonavState", this.yE);
    zq(this, "setMinimized", this.AE);
    zq(this, "channelSubscribed", v);
    zq(this, "channelUnsubscribed", v)
}

inherit(yq, R);
function W(a, b, c) {
    a.Mf[b] = x(c, a)
}

function zq(a, b, c) {
    a.Ig[b] = x(c, a)
}

f = yq.prototype;
f.gE = function () {
    return Qb(this.Mf)
};
f.jE = function () {
    return Qb(this.Ig)
};
f.N = function () {
    return this.$d
};
f.addEventListener = function (a, b) {
    if (w(b)) {
        var c = function () {
            t(b).apply(window, arguments)
        };
        this.o[b] = c;
        this.app.subscribe(a, c)
    } else
        this.app.subscribe(a, b)
};
f.Nw = function (a, b) {
    var c = w(b) ? a + b : a + ka(b);
    if (!this.k[c]) {
        var d;
        w(b) ? d = function () {
            t(b).apply(window, arguments)
        } : d = b;
        var e = x(function (a) {
            d({target: this.j, data: a})
        }, this);
        this.k[c] = e;
        this.addEventListener(a, e)
    }
};
f.removeEventListener = function (a, b) {
    if (w(b)) {
        var c = this.o[b];
        Xb(this.o, b);
        this.app.unsubscribe(a, c)
    } else
        this.app.unsubscribe(a, b)
};
f.Ow = function (a, b) {
    var c = w(b) ? a + b : a + ka(b), d = this.k[c];
    d && (this.removeEventListener(a, d), Xb(this.k, c))
};
f.getPlayerState = function () {
    return Aq(this.app)
};
f.oh = function (a, b) {
    Bq(this.app, !0, this.playerType);
    Cq(this.app, a, b, void 0, this.playerType)
};
f.getCurrentTime = function () {
    return this.app.getCurrentTime(this.playerType)
};
f.nh = function () {
    return Dq(this.app, 1)
};
f.Ts = function () {
    return Eq(this.app)
};
f.setVolume = function (a) {
    this.app.setVolume(a)
};
f.Us = function () {
    return this.app.H.muted
};
f.Xs = function () {
    Fq(this.app)
};
f.bt = function () {
    Gq(this.app)
};
f.wn = function () {
    Bq(this.app, !0, this.playerType);
    Hq(this.app, this.playerType)
};
f.pauseVideo = function () {
    Iq(this.app, this.playerType)
};
f.$s = function () {
    var a = this.app, b = this.playerType;
    Jq(a.j) && Kq(a, !1);
    Lq(a, "play_pause") || Mq(a, b)
};
f.cE = function () {
};
f.mE = function () {
    return this.app.ja
};
f.BE = function (a) {
    Nq(this.app, a)
};
f.hE = function () {
    return this.app.j.K ? Oq : [1]
};
f.lE = function () {
    return Pq(this.app, this.playerType)
};
f.zn = function (a) {
    var b = this.app, c = Qq(b, this.playerType);
    c && !b.j.isMobile && (a = Rq(a, a, !0), Sq(c, "p", a))
};
f.iE = function () {
    var a = Qq(this.app, this.playerType);
    return a ? Tq(a) : []
};
f.oE = function () {
    return this.un()
};
f.pE = function () {
    return 1
};
f.un = function () {
    return Uq(this.app.ba)
};
f.rE = function () {
    return 0
};
f.DE = function () {
    this.app.o.Sh()
};
f.xE = function (a) {
    var b = this.app;
    a = a ? 2 : 1;
    b.getVideoData().ne = a;
    b.Qa("autonavchange", a)
};
f.yE = function (a) {
    var b = this.app;
    b.getVideoData().ne = a;
    b.Qa("autonavchange", a)
};
f.AE = function (a) {
    this.app.j.Vp = a
};
f.Vs = function (a) {
    this.app.F.isAvailable(a) && (a = Vq(this.app.F, a)) && !a.loaded && a.load()
};
f.FE = function (a) {
    this.app.F.isAvailable(a) && (a = Vq(this.app.F, a)) && a.loaded && a.unload()
};
f.vn = function (a, b, c) {
    a = Wq(this.app, wq(a, b, c), this.playerType);
    Bq(this.app, a, this.playerType)
};
f.eE = function (a, b, c) {
    Xq(this.app, wq(a, b, c), this.playerType)
};
f.uE = function (a, b, c) {
    a = vq(a, b, c);
    b = Wq(this.app, a, this.playerType);
    Bq(this.app, b, this.playerType);
    b = this.app;
    (a = nf(new J(a.mediaContentUrl))) && Yq(b.j, a)
};
f.fE = function (a, b, c) {
    b = vq(a, b, c);
    Xq(this.app, b, this.playerType);
    a = this.app;
    (b = nf(new J(b.mediaContentUrl))) && Yq(a.j, b)
};
f.getVideoUrl = function () {
    return Zq(this.app)
};
f.Qs = function () {
    return $q(this.app)
};
f.qE = function () {
    return ar(this.app)
};
f.Ps = function (a, b, c) {
    return br(this.app, a, b, c)
};
f.vE = function (a) {
    t: {
        for (var b = this.app, c = b.k.C.j.j || [], d = 0; d < c.length; d++) {
            var e = c[d];
            if (e.getId() == a) {
                e.Ya.clear();
                b.k.C.mh(e);
                cr(b, "cuerangesremoved", [e]);
                a = !0;
                break t
            }
        }
        a = !1
    }
    return a
};
f.Ws = function (a, b, c, d) {
    var e = this.app;
    e.S = !1;
    dr(e, a, b, c, d);
    Bq(this.app, !0, this.playerType)
};
f.dE = function (a, b, c, d) {
    var e = this.app;
    e.S = !0;
    dr(e, a, b, c, d)
};
f.Ys = function () {
    er(this.app);
    Bq(this.app, !0, this.playerType)
};
f.Zs = function () {
    fr(this.app);
    Bq(this.app, !0, this.playerType)
};
f.xn = function (a) {
    gr(this.app, a);
    Bq(this.app, !0, this.playerType)
};
f.CE = function (a) {
    var b = this.app;
    b.A && hr(b.A, a)
};
f.zE = function (a) {
    var b = this.app;
    b.A && (b.A.ag = a)
};
f.rd = function () {
    var a = this.app.A;
    if (!a)
        return null;
    for (var b = [], c = 0; c < a.kc; c++) {
        var d = ir(a, c);
        d && b.push(d.videoId)
    }
    return b
};
f.Ss = function () {
    var a;
    a = this.app;
    a = a.A ? a.A.Sa : null;
    return null == a ? -1 : a
};
f.Rs = function () {
    return jr(this.app)
};
f.yn = function (a, b, c) {
    return kr(this.app, a, b, c)
};
f.Rj = function (a, b, c) {
    return kr(this.app, a, b, c)
};
f.kE = function (a) {
    return lr(this.app, a)
};
f.getVideoData = function () {
    var a = Qq(this.app, this.playerType), a = a ? a.getVideoData() : {}, a = {
        video_id: a.videoId,
        author: a.author,
        title: a.title
    }, b = this.Rs();
    b && (a.list = b);
    return a
};
f.EE = function () {
    this.app.o.K.show()
};
f.sE = function () {
    this.app.o.K.hide()
};
f.getAdState = function () {
    return this.app.getAdState()
};
f.tE = function (a) {
    var b = this.app;
    a != b.X.args.video_id ? a = !1 : (a = (a = b.k) ? a.getPlayerState() : null, a = !(!a || !X(a, 128) || 5 != mr[a.j.errorCode]));
    return a
};
f.nE = function () {
    var a = this.app, b = a.X.clone(), c = b.args, a = nr(a), d = $b(a.A);
    !a.Na && 0 < a.startSeconds && (d.start = a.startSeconds);
    qa(c, d);
    return b
};
f.GE = function (a, b) {
    var c = this.app;
    c.D && or(c.D, a, b);
    pr(c.j) && 6 != c.I && (c.j.pg = !mb(a), c.j.pg ? (1 != c.I && 3 != c.I || !b || qr(c.G), a.length && 1 != c.I && rr(c)) : qr(c.D))
};
f.destroy = function () {
    this.app.dispose()
};
f.wE = function () {
    var a = Qq(this.app);
    a && !X(a.getPlayerState(), 128) && (sr(a), tr(a))
};
f.L = function () {
    if (this.$d) {
        for (var a in this.Mf)
            this.$d[a] = null;
        for (a in this.Ig)
            this.$d[a] = null;
        this.$d = null
    }
    this.o = this.k = null;
    yq.J.L.call(this)
};
function ur(a, b) {
    yq.call(this, a, b);
    W(this, "addInfoCardXml", this.HE);
    W(this, "cueVideoByPlayerVars", this.IE);
    W(this, "loadVideoByPlayerVars", this.ct);
    W(this, "preloadVideoByPlayerVars", this.NE);
    W(this, "seekBy", this.ft);
    W(this, "enableLicenseIntercept", this.JE);
    W(this, "updatePlaylist", this.TE);
    W(this, "resumeLicenseSession", this.OE);
    W(this, "updateLastActiveTime", this.SE);
    W(this, "updateVideoData", this.UE);
    W(this, "getStoryboardFormat", this.LE);
    W(this, "getProgressState", this.ph);
    W(this, "hideUserInterface",
        this.ME);
    W(this, "showUserInterface", this.RE);
    W(this, "getHousebrandProperties", this.KE);
    W(this, "setPlaybackQualityRange", this.QE);
    W(this, "getCurrentPlaylistSequence", this.Ww);
    W(this, "canPlayType", this.canPlayType);
    W(this, "sendVideoStatsEngageEvent", this.PE)
}

inherit(ur, yq);
f = ur.prototype;
f.Ps = function (a, b, c, d, e) {
    return br(this.app, a, b, c, d, e)
};
f.HE = function (a, b) {
    var c = this.app;
    c.j.V = a;
    c.j.Kb = b
};
f.IE = function (a) {
    Xq(this.app, a, this.playerType)
};
f.getPlayerState = function (a) {
    return Aq(this.app, a)
};
f.ct = function (a) {
    Wq(this.app, a, this.playerType)
};
f.NE = function (a) {
    var b = this.app, c = this.playerType;
    c && 1 != c || b.M && b.M.getVideoData().videoId == a.videoId || (a = new vr(a), wr(b, a))
};
f.wn = function () {
    Hq(this.app, this.playerType)
};
f.oh = function (a, b) {
    Cq(this.app, a, b, void 0, this.playerType)
};
f.Ws = function (a, b, c, d) {
    var e = this.app;
    e.S = !1;
    dr(e, a, b, c, d)
};
f.Ys = function () {
    er(this.app)
};
f.Zs = function () {
    fr(this.app)
};
f.xn = function (a) {
    gr(this.app, a)
};
f.ft = function (a, b, c) {
    var d = this.app, e = this.playerType;
    Cq(d, d.getCurrentTime() + a, b, c, e)
};
f.JE = function () {
    var a = this.app;
    a.Wa || (a.Wa = !0, a.pa = {})
};
f.TE = function () {
    var a = this.app;
    xr(a, nr(a));
    a.Qa("onPlaylistUpdate")
};
f.OE = function (a, b) {
    var c = this.app, d = c.pa[a];
    d && (yr(d, b), d.start(), delete c.pa[a])
};
f.SE = function () {
    zr()
};
f.UE = function (a) {
    var b = Qq(this.app, this.playerType || 1);
    b && (b = b.j, Ar(b, a), b.publish("dataupdated"))
};
f.LE = function () {
    var a = this.app.getVideoData();
    return a.A.storyboard_spec || a.A.live_storyboard_spec
};
f.ME = function () {
    this.app.o.Yg(!1)
};
f.RE = function () {
    this.app.o.Yg(!0)
};
f.KE = function () {
    var a = this.app.T();
    return {Jb: a.Jb, Db: a.Db(), $g: a.$g}
};
f.getVideoData = function () {
    var a = ur.J.getVideoData.call(this), b = Qq(this.app, this.playerType), b = b ? b.getVideoData() : {};
    a.cpn = b.ya;
    a.isLive = b.Na;
    return a
};
f.getCurrentTime = function (a) {
    return a ? this.app.getCurrentTime(a) : ur.J.getCurrentTime.call(this)
};
f.nh = function (a) {
    return a ? Dq(this.app, a) : ur.J.nh.call(this)
};
f.ph = function () {
    var a = this.app.getVideoData(), b = !a.Na || a.rb, c = a.clipEnd, a = a.clipStart, d = this.getCurrentTime(), e = this.nh(), g = Qq(this.app, void 0);
    if (g)
        var h = Br(g.k), g = isNaN(h) ? g.getCurrentTime() : h;
    else
        g = 0;
    return {
        allowSeeking: b,
        clipEnd: c,
        clipStart: a,
        current: d,
        displayedStart: -1,
        duration: e,
        loaded: g,
        seekableEnd: Cr(Qq(this.app)),
        seekableStart: Dr(Qq(this.app).j)
    }
};
f.un = function (a) {
    var b = this.app;
    return (b.C && 2 == b.C.getPlayerType()) == (2 == a) ? Uq(b.ba) : 0
};
f.canPlayType = function (a) {
    return this.app.canPlayType(a)
};
f.QE = function (a, b) {
    Er(this.app, a, this.playerType, b)
};
f.Ww = function () {
    var a;
    var b = this.app.getVideoData();
    a = this.app.getCurrentTime();
    if (b.k && b.Na) {
        var c = b.k.j[b.o.id];
        c && c.index ? (b = c.index.yg(a), c = c.index.Ve(b), a = {sequence: b, elapsed: a - c}):a = null
    } else
        a = null;
    return a
};
f.PE = function (a) {
    var b = this.app;
    b.j.experiments.K && (b = Qq(b, this.playerType)) && b.A && (b = Fr(b.A, "engage"), b.F = a, b.send())
};
function Gr(a, b) {
    ur.call(this, a, b)
}

inherit(Gr, ur);
f = Gr.prototype;
f.getPlayerType = function () {
    return this.playerType
};
f.vn = function (a, b, c) {
    Wq(this.app, wq(a, b, c), this.playerType)
};
function Hr(a, b) {
    a.app.o.o.appendChild(b)
}

f.Ja = function () {
    return this.app.o.N()
};
f.vf = function () {
    return this.app.vf()
};
f.T = function () {
    return this.app.T()
};
f.rd = function () {
    return this.app.A
};
f.getVideoData = function () {
    var a = Qq(this.app, this.playerType);
    return a && a.getVideoData()
};
f.isFullscreen = function () {
    return this.app.T().bb
};
f.addEventListener = function (a, b, c) {
    this.app.subscribe(a, b, c)
};
f.removeEventListener = function (a, b, c) {
    this.app.unsubscribe(a, b, c)
};
f.zn = function (a) {
    Er(this.app, a, 1)
};
f.Qs = function (a) {
    return $q(this.app, a)
};
f.getVideoUrl = function (a) {
    return Zq(this.app, a)
};
function Ir(a, b) {
    this.start = a;
    this.end = b
}

function Jr(a, b) {
    return a.start != b.start ? a.start - b.start : a.end != b.end ? a.end - b.end : ka(a) - ka(b)
}

Ir.prototype.contains = function (a, b) {
    return a >= this.start && (a < this.end || a == this.end && this.start == this.end) && (null == b || a < b && b <= this.end)
};
Ir.prototype.toString = function () {
    return "Interval[" + this.start + ", " + this.end + "]"
};
function Kr() {
    this.j = []
}

function Lr(a, b) {
    for (var c = [], d = 0; d < a.j.length; ++d) {
        var e = a.j[d];
        e.contains(b) && c.push(e);
        if (e.start > b)
            break
    }
    return c
}

function Mr(a, b, c) {
    for (var d = [], e = 0; e < a.j.length; ++e) {
        var g = a.j[e];
        if (null != c && g.start > c)
            break;
        g.start > b && d.push(g)
    }
    return d
}

function Nr(a, b) {
    for (var c = [], d = 0; d < a.j.length; ++d) {
        var e = a.j[d];
        e.contains(b) && c.push(e.end);
        if (e.start > b) {
            c.push(e.start);
            break
        }
    }
    c.sort(zb);
    return c[0]
}
;
function Or(a) {
    var b = "";
    if (a)
        for (var c = 0; c < a.length; c++)
            b += a.start(c).toFixed(3) + "-" + a.end(c).toFixed(3) + ",";
    return b
}

function Pr(a, b) {
    if (!a)
        return -1;
    for (var c = 0; c < a.length; c++)
        if (a.start(c) <= b && a.end(c) >= b)
            return c;
    return -1
}

function Qr(a, b) {
    var c = Pr(a, b);
    return 0 <= c ? a.end(c) : NaN
}

function Rr(a) {
    return a && a.length ? a.end(a.length - 1) : NaN
}

function Sr(a, b) {
    var c = Qr(a, b);
    return 0 <= c ? c - b : 0
}
;
var Tr, Ur;
var Vr = Uc, Wr = Vr.match(/\((iPad|iPhone|iPod)( Simulator)?;/);
if (!Wr || 2 > Wr.length)
    Tr = void 0;
else {
    var Xr = Vr.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d_\d)[_ ]/);
    Tr = Xr && 6 == Xr.length ? Number(Xr[5].replace("_", ".")) : 0
}
(Ur = 0 <= Tr) && 0 <= Uc.search("Safari") && Uc.search("Version");
var Yr = Qh || Rh;

function Zr() {
    return $r("(ps3; leanback shell)")
}

function as() {
    return $r("safari/") && $r(" version/8")
}

function bs() {
    return Th && $r("crkey")
}

function $r(a) {
    var b = Uc;
    return b ? 0 <= b.toLowerCase().indexOf(a) : !1
}
;
function cs() {
}

var ds = Ur && 4 > Tr ? .1 : 0, es = new cs;
f = cs.prototype;
f.sd = null;
f.uk = !1;
function fs(a, b) {
    var c = "";
    b && (a.sd = b, c = gs(b));
    a.src && "" == c || (c && a.src != c && (a.src = c), b && b.j || a.load())
}

function hs(a, b) {
    0 < a.readyState && (a.currentTime = Math.max(ds, b))
}

f.getCurrentTime = function () {
    return this.currentTime || 0
};
function Br(a) {
    return 0 < Rr(a.buffered) && a.duration ? Qr(a.buffered, a.currentTime) : 0
}

function Uq(a) {
    var b = a.duration || 0;
    return Infinity == b ? 1 : b ? Br(a) / b : 0
}

function is(a) {
    return a.paused || a.ended
}

function js(a) {
    a.ended && hs(a, 0);
    !a.hasAttribute("src") && a.sd && (a.src = gs(a.sd), a.sd.j || a.load());
    a.play();
    Ur && 7 <= Tr && Dh(a, x(function () {
        L(x(this.Uo, this, this.currentTime, 0), 500)
    }, a))
}

f.Uo = function (a, b) {
    this.paused || this.currentTime > a || 10 < b || (this.play(), L(x(this.Uo, this, this.currentTime, b + 1), 500))
};
f.pauseVideo = function () {
    this.pause()
};
function ks(a) {
    a.currentSrc && (Yr && hs(a, 0), Rd(a), a.removeAttribute("src"), a.load(), a.sd && a.sd.j && (a.sd = null))
}

function ls(a) {
    ks(a);
    a.sd = null
}

f.setVolume = function (a, b) {
    this.volume = a / 100;
    this.muted = b
};
function ms(a, b) {
    a.defaultPlaybackRate = b;
    a.playbackRate = b
}

f.zw = function () {
    this.hasAttribute("controls") && this.setAttribute("controls", "true")
};
f.Bw = function () {
    this.uk && !this.muted && (this.muted = !0)
};
cs.prototype.getDebugInfo = function () {
    return {
        vct: this.currentTime.toFixed(3),
        vd: this.duration.toFixed(3),
        vpl: Or(this.played),
        vbu: Or(this.buffered),
        vpa: this.paused,
        vsk: this.seeking,
        vpr: this.playbackRate,
        vrs: this.readyState,
        vns: this.networkState,
        vec: this.error ? this.error.errorCode : null
    }
};
function ns(a, b) {
    this.k = a || 64;
    this.j = b || null
}

function os(a, b, c) {
    if (X(a, 128))
        return a;
    var d = a.k, e = a.j, g = b.target;
    switch (b.type) {
        case "ended":
            if (0 >= g.networkState || !g.src)
                break;
            d = 14;
            e = null;
            break;
        case "pause":
            X(a, 256) ? (d ^= 256) || (d = 64) : X(a, 32) || X(a, 2) || (d = 4, X(a, 1) && X(a, 8) && (d |= 1), e = null);
            break;
        case "playing":
            d = 8;
            e = null;
            break;
        case "abort":
            if (64 == d)
                break;
        case "error":
            t: if ((b = g.error) && b.code) {
                switch (b.code) {
                    case b.MEDIA_ERR_NETWORK:
                        b = "progressive.net";
                        break;
                    case b.MEDIA_ERR_DECODE:
                        b = "fmt.decode";
                        break;
                    case b.MEDIA_ERR_SRC_NOT_SUPPORTED:
                        b = "fmt.unplayable";
                        break;
                    default:
                        b = null;
                        break t
                }
                b = {errorCode: b}
            } else
                b = null;
            b && (e = b, d |= 128);
            break;
        case "canplay":
            d &= -2;
            break;
        case "progress":
            X(a, 8) && ps(c, g) && (d |= 1);
            break;
        case "seeked":
            d &= -17;
            break;
        case "seeking":
            d |= 16;
            0 >= Sr(g.buffered, g.currentTime) && (d |= 1);
            d &= -3;
            break;
        case "waiting":
            X(a, 2) || (d |= 1);
            break;
        case "timeupdate":
            X(a, 16) || (d = ps(c, g) ? d | 1 : d & -2);
            1 < g.readyState && 0 < g.currentTime && (d &= -65);
            break;
        default:
            return a
    }
    return qs(a, d, e)
}

function ps(a, b) {
    if (!a)
        return !1;
    var c = Sr(b.buffered, b.currentTime);
    return rs(a, b.currentTime, y(), c)
}

function qs(a, b, c) {
    return b == a.k && c == a.j || b & 128 && !c || b & 2 && b & 16 ? a : new ns(b, c)
}

function ss(a, b) {
    return qs(a, a.k | b)
}

function ts(a, b) {
    return qs(a, a.k & ~b)
}

function X(a, b) {
    return !!(a.k & b)
}

ns.prototype.ub = function () {
    return X(this, 8) && !X(this, 64) && !X(this, 2)
};
function us(a) {
    return X(a, 8) && !X(a, 2)
}

function vs(a) {
    return X(a, 128) ? -1 : X(a, 2) ? 0 : X(a, 1) && !X(a, 32) ? 3 : X(a, 64) ? -1 : X(a, 8) ? 1 : X(a, 4) ? 2 : -1
}
;
function ws(a, b, c) {
    Ir.call(this, a, b);
    a = c || {};
    this.wa = a.id || "";
    void 0 != a.priority && (this.Lf = a.priority);
    this.namespace = a.namespace || "";
    this.Ya = new wi;
    this.tooltip = a.tooltip;
    a.style && (this.style = a.style);
    a.visible && (this.visible = a.visible)
}

inherit(ws, Ir);
function xs(a) {
    return {
        start: a.start,
        end: a.end,
        id: a.wa,
        priority: a.Lf,
        namespace: a.namespace,
        tooltip: a.tooltip,
        style: "ytp-chapter-marker" == a.style ? "chapter" : "ad",
        visible: a.visible
    }
}

f = ws.prototype;
f.wa = "";
f.Lf = 7;
f.active = !0;
f.visible = !1;
f.style = "ytp-ad-progress";
f.Ya = null;
f.namespace = "";
f.getId = function () {
    return this.wa
};
function ys(a) {
    switch (a.style) {
        case "ytp-chapter-marker":
            return 8;
        case "ytp-ad-progress":
            return 6
    }
}

function zs(a, b) {
    return a.start == b.start ? a.Lf == b.Lf ? 0 : a.Lf < b.Lf ? -1 : 1 : a.start < b.start ? -1 : 1
}

f.toString = function () {
    return ws.J.toString.call(this)
};
function As(a, b, c, d) {
    T.call(this);
    this.F = a;
    this.D = b;
    this.C = c;
    this.G = d;
    this.A = new en(250);
    rm(this.A, "tick", this.nc, !1, this);
    S(this, this.A);
    this.k = [];
    this.j = new Kr
}

inherit(As, T);
f = As.prototype;
f.Ii = !1;
f.Td = !1;
f.Tl = !1;
f.ql = !1;
f.Mg = null;
function Bs(a, b) {
    a.nc();
    var c = a.j;
    if (1 < b.length && b.length > c.j.length)
        c.j = c.j.concat(b), c.j.sort(Jr);
    else
        for (var d = 0; d < b.length; d++) {
            var e = b[d];
            !c.j.length || 0 < Jr(e, c.j[c.j.length - 1]) ? c.j.push(e) : Fb(c.j, e, Jr)
        }
    a.nc()
}

f.mh = function (a) {
    for (var b = arguments.length - 1; 0 <= b; b--) {
        var c = arguments[b];
        if (c) {
            var d = this.k.indexOf(c);
            0 <= d && this.k.splice(d, 1);
            d = this.j.j;
            c = yb(d, c, Jr);
            0 <= c && qb(d, c)
        }
    }
    this.nc()
};
f.Tf = function () {
    this.o = Cs(this);
    this.Td = !0;
    this.nc()
};
function Ds(a, b) {
    var c = [];
    if (!b.length)
        return c;
    b.sort(zs);
    for (var d = 0; d < b.length; d++) {
        var e = b[d];
        e.active && -1 == a.k.indexOf(e) && (a.k.push(e), c.push(["onEnter", e]))
    }
    return c
}

function Es(a, b) {
    var c = [];
    if (!b.length)
        return c;
    b.sort(zs);
    for (var d = 0; d < b.length; d++) {
        var e = b[d], g = a.k.indexOf(e);
        0 > g || (a.k.splice(g, 1), c.push(["onExit", e]))
    }
    return c
}

f.nc = function () {
    this.ql = !0;
    if (!this.Tl)
        for (var a = 3; this.ql && a;) {
            this.ql = !1;
            this.Tl = !0;
            if (this.Td && !this.Ii) {
                Fs(this);
                for (var b = Cs(this), c = [], d = [], e = 0; e < this.k.length; e++) {
                    var g = this.k[e];
                    g.active && !g.contains(b) && d.push(g)
                }
                c = c.concat(Es(this, d));
                d = Lr(this.j, b);
                e = this.C();
                !X(e, 48) && b > this.o && (d = d.concat(Mr(this.j, this.o, b)));
                c = c.concat(Ds(this, d));
                this.o = b;
                !this.Ii && this.B && (c.unshift(["onLockBlockExit", this.B]), this.B = null, X(e, 2) && (this.o = 2147483647));
                this.G() && (b = Nr(this.j, this.o), null != b && (b = (b -
                this.o) / this.D(), this.Mg = gn(x(this.nc, this), b)));
                Hs(this, c)
            }
            this.Tl = !1;
            a--
        }
};
function Hs(a, b) {
    for (var c = 0; c < b.length; c++) {
        var d = b[c], e = d[1];
        "onLockBlockExit" == d[0] || "onLockBlockEnter" == d[0] ? a.publish.apply(a, d) : e.Ya.publish.apply(e.Ya, d)
    }
}

function Fs(a) {
    null != a.Mg && (hn(a.Mg), a.Mg = null)
}

function Cs(a) {
    return X(a.C(), 2) ? 2147483647 : 1E3 * a.F()
}

f.L = function () {
    zm(this.A, "tick", this.nc, !1, this);
    Fs(this);
    this.B = this.j = this.k = null;
    As.J.L.call(this)
};
function Is(a) {
    T.call(this);
    this.j = a;
    this.Km && (a = Yj("yt-html5-player-modules::" + this.Km)) && (this.W = new Mi(a))
}

inherit(Is, T);
f = Is.prototype;
f.ua = "";
f.sc = "";
f.be = !1;
f.loaded = !1;
f.Uj = !1;
f.Tb = null;
function Js(a, b) {
    for (var c = 0; c < b.length; c++) {
        var d = b[c];
        d.namespace = a.ua;
        d.Ya.subscribe("onEnter", a.zc, a);
        d.Ya.subscribe("onExit", a.Oc, a)
    }
    a.publish("command_add_cuerange", b, a.j.getPlayerType())
}

function Ks(a, b) {
    a.publish("command_remove_cuerange", b, a.j.getPlayerType())
}

function Ls(a) {
    a.publish("command_remove_cuerange_all", a.ua, a.j.getPlayerType())
}

function Ms(a) {
    a.publish("command_preroll_ready", a.ua, a.j.getPlayerType())
}

function Ns(a, b) {
    N(b, a.ua);
    a.j.app.o.na.appendChild(b)
}

function Os(a, b) {
    a.publish("command_show_dialog", b)
}

f.Eg = function () {
    Os(this)
};
f.create = function () {
    this.be || (this.Ca(this.j), N(this.j.Ja(), this.ua + "-created"), this.be = !0)
};
f.destroy = function () {
    this.loaded && this.unload();
    lh(this.j.Ja(), this.ua + "-created");
    this.be = !1
};
f.load = function () {
    this.loaded = !0;
    N(this.j.Ja(), this.ua + "-loaded");
    this.publish("loaded", this.ua)
};
f.unload = function () {
    this.loaded = !1;
    lh(this.j.Ja(), this.ua + "-loaded");
    this.publish("unloaded", this.ua)
};
f.zc = function () {
};
f.Oc = function () {
};
f.Od = function () {
};
function Ps(a, b, c) {
    a.publish("command_navigate_to_url", b, c)
}

f.log = function (a) {
    this.publish("command_log", this.sc, a)
};
function Qs(a, b, c) {
    var d = {}, e;
    for (e in b)
        d[a.ua + "_" + e] = b[e];
    b = {};
    for (var g in c)
        b[a.ua + "_" + g] = c[g];
    a.publish("command_log_timing", d, b)
}

f.sh = function () {
    return null
};
function Rs(a, b) {
    if (!a.W)
        return null;
    var c;
    try {
        c = a.W.get(b)
    } catch (d) {
        a.W && a.W.remove(b)
    }
    return c
}

function Ss(a, b, c) {
    if (a.W)
        try {
            a.W.set(b, c)
        } catch (d) {
        }
}

function Ts(a, b) {
    a.publish("command_disable_controls", b, a.ua)
}

function Us(a, b) {
    a.publish("command_enable_controls", b, a.ua)
}

function Vs(a) {
    a.publish("command_stop_redirect_controls")
}

function Ws(a) {
    a.publish("command_play", !1, a.j.getPlayerType())
}

f.pauseVideo = function () {
    this.publish("command_pause", !1, this.j.getPlayerType())
};
function Xs(a, b) {
    a.publish("command_redirected_show_is_playing", b)
}

f.Fj = function (a, b) {
    this.publish("command_progress", a, b)
};
function Ys(a) {
    return a.j.app.o.k
}

function Zs(a, b, c) {
    a.publish("module_menu_button_add", b, c)
}

function $s(a, b) {
    a.publish("module_menu_button_remove", b)
}

function at(a, b) {
    a.publish("module_menu_item_add", b)
}

function bt(a, b) {
    a.publish("module_menu_item_remove", b)
}

function ct(a) {
    a.publish("module_menu_show")
}

f.cg = function () {
};
f.dg = function () {
    return []
};
f.Ca = function () {
    return !1
};
f.Lm = function () {
    return !0
};
f.ej = function (a, b) {
    this.Tb && this.Tb.Od && this.Tb.Od.apply(this.Tb, arguments)
};
f.Ti = function () {
};
var dt = {
    RG: "YTP_ERROR_ALREADY_PINNED_ON_A_DEVICE",
    VG: "ERROR_AUTHENTICATION_EXPIRED",
    WG: "ERROR_AUTHENTICATION_MALFORMED",
    XG: "ERROR_AUTHENTICATION_MISSING",
    YG: "ERROR_BAD_REQUEST",
    eH: "YTP_ERROR_CANNOT_ACTIVATE_RENTAL",
    mH: "ERROR_CGI_PARAMS_MALFORMED",
    nH: "ERROR_CGI_PARAMS_MISSING",
    wH: "YTP_DEVICE_FALLBACK",
    CH: "YTP_ERROR_LICENSE",
    FH: "YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK_FLASH",
    GH: "YTP_ERROR_GEO_FAILURE",
    YH: "YTP_ERROR_GENERIC",
    ZH: "YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK",
    hI: "YTP_ERROR_INVALID_DRM_MESSAGE",
    mI: "LEARN_MORE",
    QI: "YTP_ERROR_NOT_SIGNED_IN",
    jJ: "YTP_ERROR_PURCHASE_NOT_FOUND",
    kJ: "YTP_ERROR_PURCHASE_REFUNDED",
    oJ: "YTP_ERROR_RENTAL_EXPIRED",
    gH: "YTP_ERROR_CAST_SESSION_DEVICE_MISMATCHED",
    hH: "YTP_ERROR_CAST_SESSION_VIDEO_MISMATCHED",
    jH: "YTP_ERROR_CAST_TOKEN_FAILED",
    iH: "YTP_ERROR_CAST_TOKEN_EXPIRED",
    kH: "YTP_ERROR_CAST_TOKEN_MALFORMED",
    zJ: "YTP_ERROR_SERVER_ERROR",
    MJ: "YTP_ERROR_STOPPED_BY_ANOTHER_PLAYBACK",
    OJ: "YTP_ERROR_STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED",
    PJ: "YTP_ERROR_STREAMING_NOT_ALLOWED",
    QJ: "YTP_ERROR_STREAMING_UNAVAILABLE",
    rJ: "YTP_ERROR_RETRYABLE_ERROR",
    bK: "YTP_ERROR_TOO_MANY_STREAMS_PER_USER",
    aK: "YTP_ERROR_TOO_MANY_STREAMS_PER_ENTITLEMENT",
    iK: "YTP_ERROR_UNSUPPORTED_DEVICE",
    jK: "YTP_ERROR_UNUSUAL_ACTIVITY",
    sK: "YTP_ERROR_VIDEO_FORBIDDEN",
    uK: "YTP_ERROR_VIDEO_NOT_FOUND"
}, et = {
    300: "YTP_ERROR_STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED",
    301: "YTP_ERROR_ALREADY_PINNED_ON_A_DEVICE",
    303: "YTP_ERROR_STOPPED_BY_ANOTHER_PLAYBACK",
    304: "YTP_ERROR_TOO_MANY_STREAMS_PER_USER",
    305: "YTP_ERROR_TOO_MANY_STREAMS_PER_ENTITLEMENT",
    400: "YTP_ERROR_VIDEO_NOT_FOUND",
    401: "YTP_ERROR_GEO_FAILURE",
    402: "YTP_ERROR_STREAMING_NOT_ALLOWED",
    403: "YTP_ERROR_UNSUPPORTED_DEVICE",
    405: "YTP_ERROR_VIDEO_FORBIDDEN",
    500: "YTP_ERROR_PURCHASE_NOT_FOUND",
    501: "YTP_ERROR_RENTAL_EXPIRED",
    502: "YTP_ERROR_PURCHASE_REFUNDED",
    5E3: "ERROR_BAD_REQUEST",
    5001: "ERROR_CGI_PARAMS_MISSING",
    5002: "ERROR_CGI_PARAMS_MALFORMED",
    5100: "ERROR_AUTHENTICATION_MISSING",
    5101: "ERROR_AUTHENTICATION_MALFORMED",
    5102: "ERROR_AUTHENTICATION_EXPIRED",
    5200: "YTP_ERROR_CAST_TOKEN_MALFORMED",
    5201: "YTP_ERROR_CAST_TOKEN_EXPIRED",
    5202: "YTP_ERROR_CAST_TOKEN_FAILED",
    5203: "YTP_ERROR_CAST_SESSION_VIDEO_MISMATCHED",
    5204: "YTP_ERROR_CAST_SESSION_DEVICE_MISMATCHED",
    6E3: "YTP_ERROR_INVALID_DRM_MESSAGE",
    7E3: "YTP_ERROR_SERVER_ERROR",
    8E3: "YTP_ERROR_RETRYABLE_ERROR"
};

function ft(a) {
    return (a = et[a.toString()]) ? a : "YTP_ERROR_LICENSE"
}
;
var gt = {
    Mu: function (a, b) {
        a.splice(0, b)
    }, hQ: function (a, b) {
        var c = a[0];
        a[0] = a[b % a.length];
        a[b] = c
    }, Rb: function (a) {
        a.reverse()
    }
};

function ht(a) {
    a = a.split("");
    gt.hQ(a, 70);
    gt.Rb(a, 40);
    gt.hQ(a, 66);
    gt.Mu(a, 1);
    gt.hQ(a, 70);
    gt.hQ(a, 26);
    gt.Rb(a, 37);
    gt.hQ(a, 48);
    return a.join("")
}
;
var it = {
    160: "h",
    133: "h",
    134: "h",
    135: "h",
    136: "h",
    137: "h",
    264: "h",
    266: "h",
    138: "h",
    298: "h",
    299: "h",
    304: "h",
    305: "h",
    140: "a",
    161: "H",
    142: "H",
    143: "H",
    144: "H",
    222: "H",
    223: "H",
    145: "H",
    224: "H",
    225: "H",
    146: "H",
    226: "H",
    147: "H",
    149: "A",
    261: "M",
    278: "9",
    242: "9",
    243: "9",
    244: "9",
    247: "9",
    248: "9",
    271: "9",
    313: "9",
    272: "9",
    302: "9",
    303: "9",
    308: "9",
    315: "9",
    171: "v",
    250: "o",
    251: "o",
    194: "*",
    195: "*",
    220: "*",
    221: "*",
    196: "*",
    197: "*",
    198: "V",
    279: "(",
    280: "(",
    273: "(",
    274: "(",
    275: "(",
    276: "(",
    314: "(",
    277: "("
};

function jt(a, b, c) {
    this.k = a;
    this.j = b;
    this.o = c
}

var kt = {
    playready: ["com.youtube.playready", "com.microsoft.playready"],
    widevine: ["com.widevine.alpha"],
    clearkey: ["org.w3.clearkey", "webkit-org.w3.clearkey"]
}, lt = ["widevine", "playready"];

function mt() {
    var a = window.MediaKeys || window.MSMediaKeys;
    return a && a.isTypeSupported ? a : null
}

function nt(a, b, c, d) {
    return !(0 != b.indexOf("audio/mp4") || "widevine" != c || !a.canPlayType(b) || !a.canPlayType('video/mp4; codecs="avc1"', d))
}

function ot(a, b, c) {
    var d, e = mt();
    if (e)
        d = function (a, b) {
            return e.isTypeSupported(b, a)
        };
    else if (a.addKey || a.webkitAddKey)
        d = function (b, c) {
            return a.canPlayType(b, c)
        };
    else
        return null;
    for (var g = 0; g < lt.length; g++) {
        var h = lt[g];
        if (c[h])
            for (var k = kt[h], l = 0; l < k.length; l++) {
                var p = k[l];
                if (d(b, p) || nt(a, b, h, p))
                    return new jt(h, p, c[h])
            }
    }
    return null
}
;
function pt() {
}
;
function qt(a, b, c, d, e, g, h) {
    this.id = "" + a;
    this.o = 0 <= b.indexOf("/mp4") ? 1 : 0 <= b.indexOf("/webm") ? 2 : 0 <= b.indexOf("/x-flv") ? 3 : 0 <= b.indexOf("/vtt") ? 4 : 0;
    this.mimeType = b;
    this.ra = h || 0;
    this.j = c || null;
    this.video = d || null;
    this.Jd = e || null;
    this.A = g || null;
    this.k = it[rt(this)] || ""
}

function rt(a) {
    return a.id.split(";", 1)[0]
}

function st(a) {
    return 2 == a.o
}

function tt(a) {
    return !(a.j && a.video)
}

function ut(a) {
    return 0 <= a.indexOf("opus") || 0 <= a.indexOf("vorbis") || 0 <= a.indexOf("mp4a")
}

function vt(a) {
    return 0 <= a.indexOf("vp9") || 0 <= a.indexOf("vp8") || 0 <= a.indexOf("avc1")
}
;
function wt(a) {
    this.languageCode = a.languageCode;
    this.languageName = a.languageName || null;
    this.Ei = a.languageOriginal || null;
    this.id = a.id || null;
    this.isDefault = a.is_default || !1
}

wt.prototype.toString = function () {
    return this.languageCode + "_" + this.languageName + "_" + this.Ei + "_" + this.id + "_" + this.isDefault
};
function xt(a) {
    a = a || {};
    this.H = a.formats || "";
    this.B = a.format || 1;
    if (1 == this.B)
        for (var b = this.H.split(","), c = 0; c < b.length; c++) {
            var d = parseInt(b[c], 10);
            isNaN(d) || (this.B = Math.max(d, this.B))
        }
    this.k = a.languageCode || "";
    this.C = a.languageName;
    this.A = a.kind || "";
    this.o = a.name;
    this.wa = a.id;
    this.I = a.is_servable;
    this.isDefault = a.is_default;
    this.F = a.is_translateable;
    this.D = a.url || null;
    this.G = a.vss_id || "";
    this.j = null;
    a.translationLanguage && (this.j = new wt(a.translationLanguage))
}

function zt(a) {
    var b = {
        format: a.B,
        languageCode: a.k,
        languageName: a.C,
        displayName: At(a),
        kind: a.A,
        name: a.o,
        id: a.wa,
        is_servable: a.I,
        is_default: a.isDefault,
        is_translateable: a.F
    };
    a.j && (a = a.j, b.translationLanguage = {
        languageCode: a.languageCode,
        languageName: a.languageName,
        languageOriginal: a.Ei,
        id: a.id,
        is_default: a.isDefault
    });
    return b
}

function At(a) {
    var b = [a.C];
    "asr" == a.A && -1 == a.C.indexOf("(") && b.push(" (", Uf("YTP_ASR_SETTINGS_LABEL"), ")");
    a.o && b.push(" - ", a.o);
    a.j && b.push(" >> ", a.j.languageName);
    return b.join("")
}

xt.prototype.toString = function () {
    var a = [this.k, ": ", this.o, " (", this.A, ")"];
    this.j && a.push(" >> ", this.j.languageCode);
    return a.join("")
};
function Bt(a, b) {
    var c = new xt;
    c.k = a.k;
    c.C = a.C;
    c.o = a.o;
    c.A = a.A;
    c.isDefault = !1;
    c.F = a.F;
    c.G = a.G;
    c.D = a.D;
    c.j = b;
    return c
}

xt.prototype.equals = function (a) {
    if (!a)
        return !1;
    var b = this.j, c = a.j;
    if (b && c) {
        if (b.languageCode != c.languageCode)
            return !1
    } else if (b || c)
        return !1;
    return this.k == a.k && this.o == a.o && this.A == a.A
};
function Ct(a, b, c, d, e) {
    this.id = a;
    this.name = b;
    this.language = c;
    this.tk = d;
    this.isDefault = e;
    this.captionTracks = [];
    this.di = this.Lk = null;
    this.uo = 0
}

Ct.prototype.toString = function () {
    return this.name
};
var Ub = {
    tu: "auto",
    WJ: "tiny",
    nI: "light",
    SMALL: "small",
    yv: "medium",
    LARGE: "large",
    LH: "hd720",
    HH: "hd1080",
    IH: "hd1440",
    JH: "hd2160",
    KH: "hd2880",
    WH: "highres",
    UNKNOWN: "unknown"
}, Dt = {
    auto: 0,
    tiny: 144,
    light: 144,
    small: 240,
    medium: 360,
    large: 480,
    hd720: 720,
    hd1080: 1080,
    hd1440: 1440,
    hd2160: 2160,
    hd2880: 2880,
    highres: 4320
}, Et = "highres hd2880 hd2160 hd1440 hd1080 hd720 large medium small tiny".split(" ");

function Ft(a, b, c) {
    this.k = a || 0;
    this.j = b || 0;
    this.o = c
}

Ft.prototype.equals = function (a) {
    return this.k == a.k && this.j == a.j && this.o == a.o
};
function Rq(a, b, c) {
    return new Ft(Dt[a] || 0, Dt[b] || 0, c)
}

var Gt = Rq("auto", "large", !1), Ht = Rq("auto", "auto", !1);

function It(a) {
    var b = Dt.auto;
    return a.k == b && a.j == b
}

function Jt(a) {
    return a.o && !!a.k && a.k == a.j
}

function Kt(a, b) {
    if (b.o && It(b))
        return Ht;
    if (b.o || It(a))
        return b;
    if (a.o || It(b))
        return a;
    var c = a.k && b.k ? Math.max(a.k, b.k) : a.k || b.k, d = a.j && b.j ? Math.min(a.j, b.j) : a.j || b.j, c = Math.min(c, d);
    return c == a.k && d == a.j ? a : new Ft(c, d, !1)
}

function Lt(a) {
    var b = a.j || a.k;
    return Tb(function (a) {
            return Dt[a] == b
        }) || "auto"
}

Ft.prototype.A = function (a) {
    if (!a.video)
        return !1;
    a = Dt[a.video.quality];
    return this.k <= a && (!this.j || this.j >= a)
};
function Mt(a, b) {
    this.k = a;
    this.j = b || null;
    this.audioTracks = [];
    if (this.j) {
        var c = {};
        D(this.j, x(function (a) {
            if (a.Jd && !c[a.id]) {
                var b = new Ct(a.id, a.Jd.name, a.Jd.language, a.Jd.tk, a.Jd.isDefault);
                c[a.id] = b;
                this.audioTracks.push(b)
            }
        }, this))
    }
}

function Nt(a, b) {
    var c = b || Ht, c = fb(a.k, x(c.A, c)), c = E(c, function (a) {
        return a.video.quality
    });
    xb(c);
    return c
}

function Ot(a) {
    var b = {};
    E(a.k, function (a) {
        b[a.video.quality] = a.video.fps
    });
    return b
}
;
function Pt(a, b, c, d, e, g) {
    this.width = a;
    this.height = b;
    if (!g)
        t: {
            g = Math.max(a, b);
            a = Math.min(a, b);
            for (b = 0; b < Et.length; b++) {
                var h = Et[b], k = Dt[h];
                if (g >= 16 * k / 9 || a >= k) {
                    g = h;
                    break t
                }
            }
            g = "tiny"
        }
    this.quality = g;
    this.fps = c || 0;
    this.j = e || 0;
    this.projectionType = d || 0
}
;
var Qt, Rt;
var St = Uc, St = St.toLowerCase();
if (-1 != St.indexOf("android")) {
    var Tt = St.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);
    if (Tt)
        Qt = Number(Tt[1]);
    else {
        var Ut = {
            cupcake: 1.5,
            donut: 1.6,
            eclair: 2,
            froyo: 2.2,
            gingerbread: 2.3,
            honeycomb: 3,
            "ice cream sandwich": 4,
            jellybean: 4.1
        }, Vt = St.match("(" + Qb(Ut).join("|") + ")");
        Qt = Vt ? Ut[Vt[0]] : 0
    }
} else
    Qt = void 0;
Rt = 0 <= Qt;
var Wt, Xt;

function Yt() {
    var a = t("yt.player.utils.videoElement_");
    a || (a = document.createElement("video"), q("yt.player.utils.videoElement_", a, void 0));
    return a
}

function Zt() {
    if (2.2 == Qt)
        return !0;
    var a = Yt();
    try {
        return !(!a || !a.canPlayType || !a.canPlayType('video/mp4; codecs="avc1.42001E, mp4a.40.2"') && !a.canPlayType('video/webm; codecs="vp8.0, vorbis"'))
    } catch (b) {
        return !1
    }
}
;
function $t(a) {
    return (a = a.exec(Uc)) ? a[1] : ""
}

var au = function () {
    if (Ph)
        return $t(/Firefox\/([0-9.]+)/);
    if (bd || ad)
        return md;
    if (Th)
        return $t(/Chrome\/([0-9.]+)/);
    if (Uh && !($c() || Xc("iPad") || Xc("iPod")))
        return $t(/Version\/([0-9.]+)/);
    if (Qh || Rh) {
        var a;
        if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Uc))
            return a[1] + "." + a[2]
    } else if (Sh)
        return (a = $t(/Android\s+([0-9.]+)/)) ? a : $t(/Version\/([0-9.]+)/);
    return ""
}();

function bu(a, b) {
    this.k = a;
    this.o = b;
    this.A = 0;
    Object.defineProperty(this, "timestampOffset", {get: this.BD, set: this.FD});
    Object.defineProperty(this, "buffered", {get: this.zD})
}

f = bu.prototype;
f.append = function (a) {
    this.k.webkitSourceAppend(this.o, a)
};
f.abort = function () {
    this.k.webkitSourceAbort(this.o)
};
f.zD = function () {
    return this.k.webkitSourceState == this.k.SOURCE_CLOSED ? new cu : this.k.webkitSourceBuffered(this.o)
};
f.BD = function () {
    return this.A
};
f.FD = function (a) {
    this.A = a;
    this.k.webkitSourceTimestampOffset(this.o, a)
};
function cu() {
    this.length = 0
}
;
function du(a) {
    this.activeSourceBuffers = this.sourceBuffers = [];
    this.j = a;
    this.k = NaN;
    this.o = 0;
    Object.defineProperty(this, "duration", {get: this.AD, set: this.ED});
    Object.defineProperty(this, "readyState", {get: this.CD});
    this.j.addEventListener("webkitsourceclose", x(this.DD, this), !0)
}

f = du.prototype;
f.addEventListener = function (a, b, c) {
    this.j.addEventListener(a, b, c)
};
f.EG = function () {
    return this.j.webkitMediaSourceURL
};
f.addSourceBuffer = function (a) {
    var b = (this.o++).toString();
    this.j.webkitSourceAddId(b, a);
    a = new bu(this.j, b);
    this.sourceBuffers.push(a);
    return a
};
f.CD = function () {
    switch (this.j.webkitSourceState) {
        case this.j.SOURCE_CLOSED:
            return "closed";
        case this.j.SOURCE_OPEN:
            return "open";
        case this.j.SOURCE_ENDED:
            return "ended"
    }
    return ""
};
f.endOfStream = function (a) {
    var b = this.j.EOS_NO_ERROR;
    "network" == a ? b = this.j.EOS_NETWORK_ERR : "decode" == a && (b = this.j.EOS_DECODE_ERR);
    this.j.webkitSourceEndOfStream(b)
};
f.DD = function () {
    nb(this.sourceBuffers)
};
f.AD = function () {
    return this.k
};
f.ED = function (a) {
    this.k = a;
    this.j.webkitSourceSetDuration && this.j.webkitSourceSetDuration(a)
};
function eu(a) {
    this.A = [];
    this.H = a || null
}

function fu(a, b, c, d) {
    for (var e = 0; e < c.length; e++)
        a.listen(b, c[e], d)
}

eu.prototype.listen = function (a, b, c) {
    c = x(c, this.H || this);
    a.addEventListener(b, c, !1);
    this.A.push(a, b, c)
};
eu.prototype.removeAll = function () {
    if (this.A)
        for (; this.A.length;) {
            var a = this.A.shift(), b = this.A.shift(), c = this.A.shift();
            a.removeEventListener && a.removeEventListener(b, c)
        }
};
eu.prototype.ha = function () {
    return null === this.A
};
eu.prototype.dispose = function () {
    this.removeAll();
    this.A = null
};
function gu(a, b, c, d) {
    eu.call(this);
    this.k = this.j = null;
    this.C = b;
    this.o = window.MediaSource ? new window.MediaSource : window.WebKitMediaSource ? new window.WebKitMediaSource : new du(a);
    this.B = "";
    this.D = null;
    fu(this, this.o, ["sourceopen", "webkitsourceopen"], pa(this.G, d, c));
    fu(this, this.o, ["sourceclose", "webkitsourceclose"], this.F)
}

inherit(gu, eu);
function hu(a, b) {
    a.D = b
}

function iu(a) {
    if (!a.B) {
        var b;
        b = a.o;
        b = b.EG ? b.j.webkitMediaSourceURL : window.URL.createObjectURL(b);
        a.B = b
    }
    return a.B
}

gu.prototype.Qf = function (a) {
    ju(this) ? this.o.duration = a : this.C = a
};
function ju(a) {
    return "open" == a.o.readyState
}

function ku(a) {
    return "closed" == a.o.readyState
}

function lu(a) {
    return a.j.updating || a.k.updating
}

function mu(a) {
    return a.j ? !!a.j.appendBuffer : !(!window.MediaSource || !window.MediaSource.isTypeSupported)
}

gu.prototype.G = function (a, b) {
    isNaN(this.C) || (this.o.duration = this.C, this.C = NaN, this.j = this.o.addSourceBuffer(a), this.k = this.o.addSourceBuffer(b), this.D && (this.D(this), this.D = null))
};
gu.prototype.F = function () {
    this.dispose()
};
gu.prototype.dispose = function () {
    var a = this.B;
    if (a)
        try {
            window.URL.revokeObjectURL(a)
        } catch (b) {
        }
    this.B = "";
    gu.J.dispose.call(this)
};
function nu(a) {
    if (/opus/.test(a) && (Th && !(0 <= Sa(au, "38")) || bs()))
        return !1;
    if (window.MediaSource && window.MediaSource.isTypeSupported)
        return window.MediaSource.isTypeSupported(a);
    if (/webm/.test(a) && !$r("(ps4; leanback shell)"))
        return !1;
    'audio/mp4; codecs="mp4a.40.2"' == a && (a = 'video/mp4; codecs="avc1.4d401f"');
    return !!Yt().canPlayType(a)
}
;
function ou(a, b) {
    this.o = a;
    this.j = b;
    this.k = {}
}

function gs(a) {
    return a.j ? a.o : Re(a.o, a.k)
}
;
function pu(a, b) {
    this.k = new ou(a, !1);
    this.j = b
}

var qu = "9h8(H*".split(""), ru = "h98H(*".split(""), su = "oMavAV".split("");
pu.prototype.getInfo = function () {
    return this.j
};
pu.prototype.Wk = function () {
    return this.j.video.quality
};
var tu = {'video/mp4; codecs="avc1.42001E, mp4a.40.2"': "maybe"}, uu = {"application/x-mpegURL": "maybe"}, vu = {"application/x-mpegURL": "maybe"};

function wu(a, b) {
    if (!Zt())
        return [];
    var c = xu(a, b);
    a = !c.length && b ? xu(a, !1) : c;
    for (var d = {}, c = Yt(), e = 0; e < a.length; e++) {
        var g = a[e];
        if (yu(c, g.getInfo().mimeType) && !zu(g)) {
            var h = g.Wk();
            if (!d[h] || st(d[h].getInfo()))
                d[h] = g
        }
    }
    var k = [];
    d.auto && k.push(d.auto);
    D(Et, function (a) {
        (g = d[a]) && k.push(g)
    });
    return k
}

function yu(a, b) {
    var c;
    if (!(c = a.canPlayType(b))) {
        var d;
        Yr ? d = vu[b] : 2.2 == Qt ? d = tu[b] : $r("android") && $r("chrome") && (d = uu[b]);
        c = d || ""
    }
    return c
}

function zu(a) {
    return rt(a.j) in Au || Zr() && "5" == rt(a.j)
}

function Bu() {
    var a = $r("android") && $r("chrome") && !(0 <= Sa(au, 29)), b = $r("google tv") && $r("chrome") && !(0 <= Sa(au, 30));
    return a || b ? !1 : !!(window.MediaSource || window.WebKitMediaSource || window.HTMLMediaElement && HTMLMediaElement.prototype.webkitSourceAddId)
}

var Au = {52: !0, 53: !0, 54: !0, 55: !0, 60: !0, 79: !0, 87: !0};

function Cu(a) {
    var b = [];
    D(a, function (a) {
        a.url && b.push(Du(a.url, a.type, "medium", "0"))
    });
    return b
}

function Du(a, b, c, d, e) {
    var g = new pt;
    c in Dt || (c = "small");
    var h = Dt[c], k = Math.round(16 * h / 9);
    c = new Pt(k, h, 0, null, e ? -1 : 0, c);
    b = unescape(b.replace(/&quot;/g, '"'));
    return new pu(a, new qt(d, b, g, c))
}

function xu(a, b) {
    for (var c = [], d = 0; d < a.length; d++) {
        var e = a[d], g;
        if (g = cd && 0 != e.j.video.j)
            g = 1 == e.getInfo().o;
        g || 0 != e.j.video.j == b && c.push(e)
    }
    return c
}

function Eu(a, b) {
    for (var c = [], d = 0; d < a.length; d++) {
        var e = a[d];
        if (e.sig || e.s) {
            var g = e.sig || ht(e.s);
            e.url = tj(e.url, {signature: g})
        }
        e.url && c.push(Du(e.url, e.type, e.quality, e.itag, e.stereo3d))
    }
    return wu(c, !!b)
}

function Fu(a) {
    a = Cu(a);
    return wu(a, !1)
}

function Gu(a, b) {
    if (!b.j)
        return a[0];
    for (var c = 0; c < a.length; c++) {
        var d = a[c].getInfo(), e = Dt[d.video.quality];
        if ((!b.o || "auto" != d.video.quality) && e <= b.j)
            return a[c]
    }
    return a[a.length - 1]
}

function Hu(a) {
    function b(a) {
        return !!c[a]
    }

    var c = {}, d, e;
    for (e in a.j) {
        var g = a.j[e];
        if (nu(g.info.mimeType)) {
            if (g.info.A) {
                d || (d = Yt());
                if (!ot(d, g.info.mimeType, g.info.A))
                    continue;
                if (261 == rt(g.info) && (Zr() || !d.canPlayType('audio/mp4; codecs="aac51"', "com.widevine.alpha")))
                    continue
            }
            c[g.info.k] = c[g.info.k] || [];
            c[g.info.k].push(g.info)
        }
    }
    a = qu;
    if ($r("cros armv7") || $r("windows nt 5.1"))
        a = ru;
    d = F(a, b);
    a = F(su, b);
    if (!d || !a)
        return null;
    "9" == d && c.h && (e = function (a, b) {
        return Math.max(a, b.video.height)
    }, g = gb(c["9"],
        e, 0), gb(c.h, e, 0) > 1.5 * g && (d = "h"));
    d = c[d];
    a = c[a];
    Ab(d, function (a, b) {
        return b.video.width - a.video.width || b.ra - a.ra
    });
    Ab(a, function (a, b) {
        return b.ra - a.ra
    });
    return new Mt(d, a)
}
;
var Iu = {
    created: 1,
    ready: 2,
    testing: 4,
    "testing-starting": 3,
    live: 6,
    "live-starting": 5,
    complete: 8,
    "complete-starting": 7
};
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
 */
function Ju(a, b) {
    this.B = [];
    this.K = a;
    this.I = b || null;
    this.A = this.j = !1;
    this.o = void 0;
    this.G = this.M = this.D = !1;
    this.C = 0;
    this.k = null;
    this.F = 0
}

Ju.prototype.cancel = function (a) {
    if (this.j)
        this.o instanceof Ju && this.o.cancel();
    else {
        if (this.k) {
            var b = this.k;
            delete this.k;
            a ? b.cancel(a) : (b.F--, 0 >= b.F && b.cancel())
        }
        this.K ? this.K.call(this.I, this) : this.G = !0;
        this.j || Ku(this, new Lu)
    }
};
Ju.prototype.H = function (a, b) {
    this.D = !1;
    Mu(this, a, b)
};
function Mu(a, b, c) {
    a.j = !0;
    a.o = c;
    a.A = !b;
    Nu(a)
}

function Ou(a) {
    if (a.j) {
        if (!a.G)
            throw new Pu;
        a.G = !1
    }
}

function Ku(a, b) {
    Ou(a);
    Mu(a, !1, b)
}

function Qu(a, b, c) {
    Ru(a, b, null, c)
}

function Ru(a, b, c, d) {
    a.B.push([b, c, d]);
    a.j && Nu(a)
}

Ju.prototype.then = function (a, b, c) {
    var d, e, g = new Um(function (a, b) {
        d = a;
        e = b
    });
    Ru(this, d, function (a) {
        a instanceof Lu ? g.cancel() : e(a)
    });
    return g.then(a, b, c)
};
Sm(Ju);
function Su(a) {
    return hb(a.B, function (a) {
        return ia(a[1])
    })
}

function Nu(a) {
    if (a.C && a.j && Su(a)) {
        var b = a.C, c = Tu[b];
        c && (m.clearTimeout(c.wa), delete Tu[b]);
        a.C = 0
    }
    a.k && (a.k.F--, delete a.k);
    for (var b = a.o, d = c = !1; a.B.length && !a.D;) {
        var e = a.B.shift(), g = e[0], h = e[1], e = e[2];
        if (g = a.A ? h : g)
            try {
                var k = g.call(e || a.I, b);
                n(k) && (a.A = a.A && (k == b || k instanceof Error), a.o = b = k);
                Tm(b) && (d = !0, a.D = !0)
            } catch (l) {
                b = l, a.A = !0, Su(a) || (c = !0)
            }
    }
    a.o = b;
    d && (k = x(a.H, a, !0), d = x(a.H, a, !1), b instanceof Ju ? (Ru(b, k, d), b.M = !0) : b.then(k, d));
    c && (b = new Uu(b), Tu[b.wa] = b, a.C = b.wa)
}

function Pu() {
    ta.call(this)
}

inherit(Pu, ta);
Pu.prototype.message = "Deferred has already fired";
Pu.prototype.name = "AlreadyCalledError";
function Lu() {
    ta.call(this)
}

inherit(Lu, ta);
Lu.prototype.message = "Deferred was canceled";
Lu.prototype.name = "CanceledError";
function Uu(a) {
    this.wa = m.setTimeout(x(this.k, this), 0);
    this.j = a
}

Uu.prototype.k = function () {
    delete Tu[this.wa];
    throw this.j;
};
var Tu = {};

function Vu(a, b) {
    var c = b || {}, d = c.document || document, e = Nd("SCRIPT"), g = {
        Jr: e,
        vb: void 0
    }, h = new Ju(Wu, g), k = null, l = null != c.timeout ? c.timeout : 5E3;
    0 < l && (k = window.setTimeout(function () {
        Xu(e, !0);
        Ku(h, new Yu(1, "Timeout reached for loading script " + a))
    }, l), g.vb = k);
    e.onload = e.onreadystatechange = function () {
        e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Xu(e, c.Cw || !1, k), Ou(h), Mu(h, !0, null))
    };
    e.onerror = function () {
        Xu(e, !0, k);
        Ku(h, new Yu(0, "Error while loading script " + a))
    };
    Ed(e, {
        type: "text/javascript",
        charset: "UTF-8", src: a
    });
    Zu(d).appendChild(e);
    return h
}

function Zu(a) {
    var b = a.getElementsByTagName("HEAD");
    return !b || mb(b) ? a.documentElement : b[0]
}

function Wu() {
    if (this && this.Jr) {
        var a = this.Jr;
        a && "SCRIPT" == a.tagName && Xu(a, !0, this.vb)
    }
}

function Xu(a, b, c) {
    null != c && m.clearTimeout(c);
    a.onload = v;
    a.onerror = v;
    a.onreadystatechange = v;
    b && window.setTimeout(function () {
        Sd(a)
    }, 0)
}

function Yu(a, b) {
    var c = "Jsloader error (code #" + a + ")";
    b && (c += ": " + b);
    ta.call(this, c);
    this.code = a
}

inherit(Yu, ta);
function $u(a, b) {
    this.k = new J(a);
    this.j = b ? b : "callback";
    this.vb = 5E3
}

var av = 0;
$u.prototype.send = function (a, b, c, d) {
    a = a || null;
    d = d || "_" + (av++).toString(36) + y().toString(36);
    m._callbacks_ || (m._callbacks_ = {});
    var e = this.k.clone();
    if (a)
        for (var g in a)
            a.hasOwnProperty && !a.hasOwnProperty(g) || of(e, g, a[g]);
    b && (m._callbacks_[d] = bv(d, b), of(e, this.j, "_callbacks_." + d));
    b = Vu(e.toString(), {timeout: this.vb, Cw: !0});
    Ru(b, null, cv(d, a, c), void 0);
    return {wa: d, Fo: b}
};
$u.prototype.cancel = function (a) {
    a && (a.Fo && a.Fo.cancel(), a.wa && dv(a.wa, !1))
};
function cv(a, b, c) {
    return function () {
        dv(a, !1);
        c && c(b)
    }
}

function bv(a, b) {
    return function (c) {
        dv(a, !0);
        b.apply(void 0, arguments)
    }
}

function dv(a, b) {
    m._callbacks_[a] && (b ? delete m._callbacks_[a] : m._callbacks_[a] = v)
}
;
function ev(a, b) {
    T.call(this);
    this.A = b + "feeds/api/users/live/broadcasts/" + a + "/states?v=2&alt=json-in-script";
    this.j = new en(15E3 + Math.floor(3E4 * Math.random()));
    rm(this.j, "tick", x(this.k, this));
    this.k();
    this.j.start()
}

inherit(ev, T);
ev.prototype.L = function () {
    this.j.dispose();
    ev.J.L.call(this)
};
ev.prototype.k = function () {
    (new $u(this.A)).send(null, x(this.o, this), x(this.B, this))
};
ev.prototype.o = function (a) {
    this.publish("payload", a);
    fn(this.j, 15E3 + Math.floor(3E4 * Math.random()))
};
ev.prototype.B = function () {
    this.publish("error");
    var a = this.j.j;
    192E4 > a && fn(this.j, 2 * a)
};
function fv(a) {
    R.call(this);
    this.j = {};
    this.o = {};
    this.A = {};
    this.k = gv(this, a)
}

inherit(fv, R);
function gv(a, b, c) {
    var d = 0, e = Nd(b[d++]);
    if (w(b[d]) || ea(b[d]) || null === b[d]) {
        var g = b[d++];
        ea(g) && (g = g.join(" "));
        if (g = hv(a, e, "className", g))
            iv(a, e, "className", g), jv(a, g, e)
    }
    for (; d < b.length; d++) {
        var h = b[d];
        if (ea(h))
            gv(a, h, e);
        else if (ja(h)) {
            var g = a, k = e, l = void 0;
            for (l in h)
                h[l] && iv(g, k, l, hv(g, k, l, h[l]))
        } else
            w(h) && (g = hv(a, e, "child", h), null != g && e.appendChild(Od(g)))
    }
    c && c.appendChild(e);
    return e
}

f = fv.prototype;
f.N = function () {
    return this.k
};
function jv(a, b, c) {
    var d = b.split(" ");
    if (1 < d.length)
        for (b = 0; b < d.length; b++)
            jv(a, d[b], c);
    else
        a.j[b] = c
}

f.Y = function (a, b) {
    n(b) ? a.insertBefore(this.k, a.childNodes[b] || null) : a.appendChild(this.k)
};
f.detach = function () {
    Sd(this.k)
};
function hv(a, b, c, d) {
    return w(d) && "{{" == d.substr(0, 2) ? (a.o[d] = [b, c], null) : d
}

f.update = function (a) {
    for (var b in a)
        kv(this, b, a[b])
};
function kv(a, b, c) {
    if (c != a.A[b]) {
        var d = a.o["{{" + b + "}}"];
        d && (a.A[b] = c, iv(a, d[0], d[1], c))
    }
}

function lv(a) {
    return ea(a) && w(a[0])
}

function iv(a, b, c, d) {
    if ("child" == c) {
        Rd(b);
        if (!ea(d) || lv(d))
            d = [d];
        c = [];
        for (var e = 0; e < d.length; e++) {
            var g = d[e];
            if (ha(g) || w(g) || ja(g))
                !g.nodeType || 1 != g.nodeType && 3 != g.nodeType ? lv(g) ? c.push(gv(a, g)) : g.N ? c.push(g.N()) : c.push(Od(g.toString())) : c.push(g)
        }
        for (a = 0; a < c.length; a++)
            b.appendChild(c[a])
    } else
        "className" == c ? b.className = d : null === d ? b.removeAttribute(c) : b.setAttribute(c, d.toString())
}

f.L = function () {
    this.j = {};
    this.o = {};
    this.A = {};
    this.detach();
    delete this.k;
    fv.J.L.call(this)
};
function mv(a, b) {
    a && (a.style.display = b)
}

function nv(a, b) {
    var c = th("requestAnimationFrame", window);
    return L(function () {
        c ? c.call(window, a) : a()
    }, b || 0)
}
;
function Y(a) {
    R.call(this);
    this.template = new fv(a);
    S(this, this.template);
    this.element = this.template.N();
    this.ea = "block";
    this.P = !0;
    this.ib = []
}

inherit(Y, R);
f = Y.prototype;
f.N = function () {
    return this.element
};
f.Y = function (a, b) {
    this.template.Y(a, b)
};
f.detach = function () {
    this.template.detach()
};
f.ta = function (a, b) {
    kv(this.template, b || "content", a)
};
f.show = function () {
    mv(this.element, this.ea);
    this.P = !0;
    this.element.removeAttribute("aria-hidden")
};
f.hide = function () {
    mv(this.element, "none");
    this.P = !1;
    this.element.setAttribute("aria-hidden", "true")
};
function ov(a, b) {
    a.element.setAttribute("role", b)
}

f.gb = function (a) {
    this.element.setAttribute("aria-label", a)
};
f.Vb = function (a) {
    Ih(this.element, a)
};
f.listen = function (a, b, c) {
    return pv(this, this.element, a, b, c)
};
function pv(a, b, c, d, e, g) {
    b = Q(b, c, x(d, e || a), g);
    a.ib.push(b);
    return b
}

f.Da = function (a) {
    Eh(a)
};
f.L = function () {
    this.Da(this.ib);
    delete this.element;
    Y.J.L.call(this)
};
function qv(a) {
    var b = Math.abs(Math.floor(a)), c = Math.floor(b / 86400), d = Math.floor(b % 86400 / 3600), e = Math.floor(b % 3600 / 60), b = Math.floor(b % 60), g = "";
    0 < c && (g += c + ":", 10 > d && (g += "0"));
    if (0 < c || 0 < d)
        g += d + ":", 10 > e && (g += "0");
    g += e + ":";
    10 > b && (g += "0");
    g += b;
    return 0 <= a ? g : "-" + g
}

function rv(a) {
    return Math.round(1E3 * a) / 10
}

function sv(a) {
    return (!ha(a.button) || 0 == a.button) && !a.shiftKey && !a.altKey && !a.metaKey && !a.ctrlKey
}
;
var tv = {
    NJ: "html5-stop-propagation",
    RI: "ytp-no-controls",
    pI: "html5-live-dvr-disabled",
    qI: "html5-live-dvr-engaged",
    rI: "html5-live-playback",
    jI: "ytp-iv-drawer-enabled",
    kI: "ytp-iv-drawer-open",
    CI: "html5-mobile",
    FI: "modest-branding",
    MI: "html5-native-controls",
    SJ: "html5-tablet",
    RJ: "html5-tablet-body",
    xI: "html5-main-video",
    nK: "html5-video-container",
    oK: "html5-video-content",
    pK: "html5-video-controls",
    qK: "ytp-fallback",
    rK: "ytp-fallback-content",
    tK: "html5-video-loader",
    AK: "html5-watermark",
    bH: "html5-branded-watermark",
    rH: "html5-context-menu",
    Eu: "html5-context-menu-copy-debug-info",
    Fu: "html5-context-menu-copy-embed-html",
    Gu: "html5-context-menu-copy-video-url",
    Hu: "html5-context-menu-copy-video-url-at-current-time",
    Iu: "html5-context-menu-link",
    Ju: "html5-context-menu-report-playback-issue",
    Ku: "html5-context-menu-show-video-info",
    sH: "html5-show-video-info-template",
    DI: "html5-modal-panel",
    $H: "ideal-aspect",
    NH: "autohide-controls",
    PH: "autohide-controls-aspect",
    OH: "autohide-controls-fullscreen",
    AI: "autominimize-progress-bar",
    BI: "autominimize-progress-bar-non-aspect",
    QH: "hide-info-bar",
    RH: "html5-hide-share",
    SH: "html5-hide-volume",
    XJ: "ytp-tiny-mode",
    wK: "video-thumbnail",
    eJ: "ytp-dialog",
    TG: "html5-async-progress",
    UG: "html5-async-success",
    SG: "html5-async-error",
    lH: "html5-center-overlay",
    uJ: "ytp-scalable-icon-shrink",
    tJ: "ytp-scalable-icon-grow",
    XH: "house-brand",
    yJ: "sentiment-like",
    xJ: "sentiment-dislike"
};

function uv() {
    Y.call(this, ["div", ["ytp-fresca-module", "html5-stop-propagation"], ["div", "ytp-fresca-band-slate", ["hgroup", "ytp-fresca-message", ["h2", "ytp-fresca-heading", "{{heading}}"], ["h3", "ytp-fresca-subheading", "{{subheading}}"], ["h4", "ytp-fresca-long-test", "{{long_text}}"]], ["span", "ytp-fresca-countdown", "{{countdown}}"]]]);
    this.k = 0;
    this.j = null
}

inherit(uv, Y);
uv.prototype.update = function (a) {
    this.j && this.j.state == a.state && this.j.startTime == a.startTime && this.j.imageUrl == a.imageUrl && this.j.messageText.join() == a.messageText.join() || (this.j = a, this.element.style.backgroundImage = this.j.imageUrl || "none", a = this.j.getMessage(), this.template.update({
        heading: a[0] || "",
        subheading: a[1] || "",
        long_text: a[2] || ""
    }), this.o())
};
function vv(a) {
    var b = Math.floor(y() / 1E3);
    return b > a ? Uf("YTP_FRESCA_STARTING_SOON_MESSAGE") : qv(a - b)
}

uv.prototype.o = function () {
    var a;
    a = this.j;
    a.startTime ? (a = a.state, a = 6 == a || 8 == a || 7 == a ? !1 : !0):a = !1;
    P(this.element, "ytp-fresca-show-countdown", a);
    a && (this.template.update({countdown: vv(this.j.startTime)}), M(this.k), this.k = L(x(this.o, this), 1E3))
};
uv.prototype.L = function () {
    M(this.k);
    uv.J.L.call(this)
};
function wv(a) {
    this.messageText = [];
    this.j = !1;
    a && xv(this, a)
}

wv.prototype.state = -1;
function yv(a) {
    return {imageUrl: a.imageUrl, messageText: a.getMessage(), startTime: a.startTime, state: a.state}
}

function xv(a, b) {
    var c = b.feed;
    if (c) {
        var d = c.yt$lifeCycleState;
        d && (a.state = Iu[d.$t] || -1);
        (d = c.yt$when) && d.start && (d = new Date(d.start), a.startTime = Math.floor(d.valueOf() / 1E3));
        if (d = c.yt$slate)
            d.imgUrl && (a.imageUrl = "url(" + d.imgUrl + ")"), (d = d.content) && d.length && (d = d.splice(0, 3), a.messageText = E(d, function (a) {
                return a.$t
            }));
        if (c = c.entry)
            a.j = 0 <= jb(c, function (a) {
                a = a.yt$status;
                return !!a && "inactive" != a.$t
            })
    }
}

wv.prototype.getMessage = function () {
    return this.messageText.length ? this.messageText : zv(this)
};
function zv(a) {
    switch (a.state) {
        case 6:
            return a.j ? [] : [Uf("YTP_FRESCA_STAND_BY_MESSAGE"), Uf("YTP_FRESCA_TECHNICAL_DIFFICULTIES_MESSAGE")];
        case 8:
            return [Uf("YTP_FRESCA_EVENT_OVER_MESSAGE")];
        case 7:
            return [Uf("YTP_FRESCA_EVENT_OVER_MESSAGE"), Uf("YTP_FRESCA_COMPLETE_MESSAGE")];
        default:
            return [Uf("YTP_FRESCA_STAND_BY_MESSAGE")]
    }
}
;
function Av(a) {
    Is.call(this, a);
    Tf({
        YTP_FRESCA_STARTING_SOON_MESSAGE: "Starting soon...",
        YTP_FRESCA_EVENT_OVER_MESSAGE: "This live event is over.",
        YTP_FRESCA_COMPLETE_MESSAGE: "Thanks for watching!",
        YTP_FRESCA_STAND_BY_MESSAGE: "Please stand by.",
        YTP_FRESCA_TECHNICAL_DIFFICULTIES_MESSAGE: "We're experiencing technical difficulties."
    })
}

inherit(Av, Is);
f = Av.prototype;
f.ua = "fresca";
f.sc = "fresca";
f.Xi = !1;
f.Wg = !1;
f.Ca = function () {
    return Bv(this.j.getVideoData(), "fresca_module")
};
f.create = function (a) {
    Av.J.create.call(this);
    yu(Yt(), "application/x-mpegURL") || Bu() ? (this.Xi = this.Wg = !1, Ts(this, ["play_pause", "seek"]), this.o = new uv, Hr(this.j, this.o.N()), this.A = a || new ev(this.j.getVideoData().videoId, this.j.T().Se), this.A.subscribe("payload", this.vB, this), this.A.subscribe("error", this.uB, this), this.subscribe("onStateChange", this.lt, this)) : Cv(this.j.app.k, "fmt.noneavailable", "YTP_HTML5_NO_AVAILABLE_FORMATS_FALLBACK", void 0)
};
f.destroy = function () {
    this.unsubscribe("onStateChange", this.lt, this);
    vi(this.A, this.o);
    Av.J.destroy.call(this)
};
f.lt = function (a) {
    this.k && (this.Xi = X(a.state, 2), (Dv(a, 16) || this.Xi) && Ev(this, this.k))
};
f.uB = function () {
    this.Wg || (Fv(this, new wv), Ev(this, this.k))
};
f.vB = function (a) {
    Fv(this, new wv(a));
    a = this.j.getVideoData();
    6 != this.k.state || a.S || a.O ? Ev(this, this.k) : this.j.vn(a.videoId)
};
function Ev(a, b) {
    var c = 6 > b.state;
    !c && a.j.app.k.la && (b.imageUrl || b.messageText.length) && (c = !0);
    a.Xi && !a.j.T().ga && (c = !0);
    b.j || (c = !0);
    if (!a.Wg)
        switch (b.state) {
            case 6:
                b.j && (a.Wg = !0, Us(a, ["play_pause", "seek"]), Ms(a));
                break;
            case 8:
            case 7:
                c = a.Wg = !0
        }
    c && a.o.update(b);
    c && !a.loaded ? a.load() : !c && a.loaded && a.unload()
}

function Gv(a) {
    return Bv(a.getVideoData(), "fresca_module") ? new Av(a) : null
}

function Fv(a, b) {
    a.k != b && (a.k = b, a.j.T().Db() && a.publish("publish_external_event", "onFrescaStateChange", yv(a.k)))
}
;
function Hv(a) {
    this.mn = a || window;
    this.Yf = []
}

f = Hv.prototype;
f.mn = null;
f.Yf = null;
f.listen = function (a, b, c, d) {
    c = x(c, d || this.mn);
    a = Q(a, b, c);
    this.Yf.push(a);
    return a
};
function Iv(a, b, c, d, e, g) {
    d = x(d, g || a.mn);
    b = Fh(b, c, d, e);
    a.Yf.push(b)
}

f.Da = function (a) {
    Eh(a);
    pb(this.Yf, a)
};
f.removeAll = function () {
    Eh(this.Yf);
    this.Yf = []
};
function Jv(a, b, c) {
    R.call(this);
    this.j = a;
    this.A = b || 0;
    this.k = c;
    this.o = x(this.bx, this)
}

inherit(Jv, R);
f = Jv.prototype;
f.wa = 0;
f.L = function () {
    Jv.J.L.call(this);
    this.stop();
    delete this.j;
    delete this.k
};
f.start = function (a) {
    this.stop();
    this.wa = gn(this.o, n(a) ? a : this.A)
};
f.stop = function () {
    this.isActive() && hn(this.wa);
    this.wa = 0
};
f.isActive = function () {
    return 0 != this.wa
};
f.bx = function () {
    this.wa = 0;
    this.j && this.j.call(this.k)
};
function Kv(a, b) {
    U.call(this);
    this.j = a;
    var c = Xd(this.j) ? this.j : this.j ? this.j.body : null;
    c && Zg(c);
    this.k = rm(this.j, cd ? "DOMMouseScroll" : "mousewheel", this, b)
}

inherit(Kv, U);
Kv.prototype.handleEvent = function (a) {
    var b = 0, c = 0, d = 0;
    a = a.j;
    if ("mousewheel" == a.type) {
        c = 1;
        if (bd || dd && (gd || od("532.0")))
            c = 40;
        d = Lv(-a.wheelDelta, c);
        n(a.wheelDeltaX) ? (b = Lv(-a.wheelDeltaX, c), c = Lv(-a.wheelDeltaY, c)):c = d
    } else
        d = a.detail, 100 < d ? d = 3 : -100 > d && (d = -3), n(a.axis) && a.axis === a.HORIZONTAL_AXIS ? b = d : c = d;
    ha(this.o) && Pc(b, -this.o, this.o);
    ha(this.A) && Pc(c, -this.A, this.A);
    b = new Mv(d, a);
    this.U(b)
};
function Lv(a, b) {
    return dd && (fd || hd) && 0 != a % b ? a : a / b
}

Kv.prototype.L = function () {
    Kv.J.L.call(this);
    Am(this.k);
    this.k = null
};
function Mv(a, b) {
    em.call(this, b);
    this.type = "mousewheel";
    this.detail = a
}

inherit(Mv, em);
var Nv = {}, Ov = null;

function Pv(a) {
    a = ka(a);
    delete Nv[a];
    Vb(Nv) && Ov && Ov.stop()
}

function Qv() {
    Ov || (Ov = new Jv(function () {
        Rv()
    }, 20));
    var a = Ov;
    a.isActive() || a.start()
}

function Rv() {
    var a = y();
    Ib(Nv, function (b) {
        Sv(b, a)
    });
    Vb(Nv) || Qv()
}
;
function Tv() {
    U.call(this);
    this.j = 0;
    this.endTime = this.startTime = null
}

inherit(Tv, U);
f = Tv.prototype;
f.ub = function () {
    return 1 == this.j
};
f.Ni = function () {
    this.uc("begin")
};
f.Pg = function () {
    this.uc("end")
};
f.$b = function () {
    this.uc("finish")
};
f.onStop = function () {
    this.uc("stop")
};
f.uc = function (a) {
    this.U(a)
};
function Uv(a, b, c, d) {
    Tv.call(this);
    if (!ea(a) || !ea(b))
        throw Error("Start and end parameters must be arrays");
    if (a.length != b.length)
        throw Error("Start and end points must be the same length");
    this.A = a;
    this.G = b;
    this.duration = c;
    this.D = d;
    this.o = [];
    this.k = this.F = 0;
    this.C = null
}

inherit(Uv, Tv);
f = Uv.prototype;
f.play = function (a) {
    if (a || 0 == this.j)
        this.k = 0, this.o = this.A;
    else if (this.ub())
        return !1;
    Pv(this);
    this.startTime = a = y();
    -1 == this.j && (this.startTime -= this.duration * this.k);
    this.endTime = this.startTime + this.duration;
    this.C = this.startTime;
    this.k || this.Ni();
    this.uc("play");
    -1 == this.j && this.uc("resume");
    this.j = 1;
    var b = ka(this);
    b in Nv || (Nv[b] = this);
    Qv();
    Sv(this, a);
    return !0
};
f.stop = function (a) {
    Pv(this);
    this.j = 0;
    a && (this.k = 1);
    Vv(this, this.k);
    this.onStop();
    this.Pg()
};
f.pause = function () {
    this.ub() && (Pv(this), this.j = -1, this.uc("pause"))
};
f.L = function () {
    0 == this.j || this.stop(!1);
    this.uc("destroy");
    Uv.J.L.call(this)
};
f.destroy = function () {
    this.dispose()
};
function Sv(a, b) {
    a.k = (b - a.startTime) / (a.endTime - a.startTime);
    1 <= a.k && (a.k = 1);
    a.F = 1E3 / (b - a.C);
    a.C = b;
    Vv(a, a.k);
    1 == a.k ? (a.j = 0, Pv(a), a.$b(), a.Pg()) : a.ub() && a.dm()
}

function Vv(a, b) {
    ia(a.D) && (b = a.D(b));
    a.o = Array(a.A.length);
    for (var c = 0; c < a.A.length; c++)
        a.o[c] = (a.G[c] - a.A[c]) * b + a.A[c]
}

f.dm = function () {
    this.uc("animate")
};
f.uc = function (a) {
    this.U(new Wv(a, this))
};
function Wv(a, b) {
    $l.call(this, a);
    this.x = b.o[0];
    this.y = b.o[1];
    this.duration = b.duration;
    this.fps = b.F;
    this.state = b.j
}

inherit(Wv, $l);
function Xv(a) {
    return Math.pow(a, 3)
}

function Yv(a) {
    return 3 * a * a - 2 * a * a * a
}
;
function Zv(a) {
    return ea(a) && a.length ? a[0] : a
}

function $v(a) {
    var b = /.+/;
    return w(a) && null != b && null != a && a.match(b) ? a : ""
}

function aw(a, b) {
    if (null == a)
        return b;
    var c = parseInt(a, 0);
    if (isNaN(c))
        return b;
    c = c.toString(16);
    return "#" + "000000".substring(0, 6 - c.length) + c
}

function bw(a) {
    return w(a) ? a : ""
}

function cw(a, b, c) {
    for (var d in b)
        if (b[d] == a)
            return a;
    return c
}

function dw(a, b) {
    return "true" == a || "false" == a ? "true" == a : b
}

function ew(a, b) {
    return w(a) ? parseFloat(a) : b
}

function fw(a, b, c, d, e, g) {
    a = 10 == b ? parseFloat(a) : parseInt(a, b);
    if (null != a && !isNaN(a)) {
        if (e)
            return Pc(a, c, d);
        if (a >= c && a <= d)
            return a
    }
    return g
}

function gw(a) {
    if (null == a)
        return 0;
    if ("never" == a)
        return -1;
    a = a.split(":");
    if (3 < a.length)
        return 0;
    var b = 0, c = 1;
    D(a, function (a) {
        a = parseFloat(a);
        0 > a && (c = -c);
        b = 60 * b + Math.abs(a)
    });
    return c * b
}

function hw(a, b) {
    if (null == a)
        return null;
    if (ga(a)) {
        var c = [];
        D(a, function (a) {
            (a = b(a)) && c.push(a)
        });
        return c
    }
    var d = b(a);
    return d ? [d] : []
}

function iw(a) {
    function b(a) {
        return null != a && !isNaN(a)
    }

    return (a = a ? new rg(parseFloat(a.top), parseFloat(a.right), parseFloat(a.bottom), parseFloat(a.left)) : null) && b(a.top) && b(a.right) && b(a.bottom) && b(a.left) ? a : null
}

function jw(a) {
    function b(a) {
        return fb(a.split(/ +/), function (a) {
            return "" != a
        })
    }

    return null == a ? [] : b(a)
}
;
function kw(a, b, c) {
    this.value = a;
    this.target = b;
    this.showLinkIcon = c
}

var lw = {vH: "current", OI: "new"};

function mw(a) {
    if (!a)
        return null;
    var b = bw(a.value);
    if (!b || null == qj(b))
        return null;
    var c = cw(a.target, lw, "current");
    return null == c ? null : new kw(b, c, dw(a.show_link_icon, !0))
}
;
function nw(a) {
    if (!a)
        return !1;
    var b = ow(a);
    return ("com" == b[0] && "youtube" == b[1] || "be" == b[0] && "youtu" == b[1]) && -1 == a.indexOf("/redirect?")
}

function pw(a) {
    if (!a)
        return !1;
    a = ow(a);
    return "com" == a[0] && "google" == a[1] && "plus" == a[2]
}

function ow(a) {
    a = a.replace(/https?:\/\//g, "");
    a = a.split("/", 1);
    return !a || 1 > a.length || !a[0] ? [] : a[0].toLowerCase().split(".").reverse()
}

function qw(a, b) {
    if ("new" == a.target)
        return -1;
    var c = a.value ? a.value : null;
    if (!c)
        return -1;
    var c = c.replace(/https?:\/\//g, ""), d;
    (d = !nw(c)) || (d = Ie(Fe(c)[5] || null) || "", d = d.split("/"), d = "/" + (1 < d.length ? d[1] : ""), d = "/watch" != d);
    if (d)
        return -1;
    d = qj(c);
    if (!d || d.v != b || d.list || d.p)
        return -1;
    c = c.split("#", 2);
    if (!c || 2 > c.length)
        return -1;
    (c = oj(c[1])) && c.t ? (d = c.t, c = 0, -1 != d.indexOf("h") && (d = d.split("h"), c = 3600 * d[0], d = d[1]), -1 != d.indexOf("m") && (d = d.split("m"), c = 60 * d[0] + c, d = d[1]), -1 != d.indexOf("s") ? (d = d.split("s"), c = 1 *
    d[0] + c):c = 1 * d + c
) :
    c = -1;
    return c
}

function rw(a, b, c, d) {
    a = a.value ? a.value : null;
    if (!a)
        return null;
    if (nw(a)) {
        var e = {feature: "iv", src_vid: c, annotation_id: b}, g = qj(a);
        Ib(e, function (a, b) {
            b in g && Xb(e, b)
        });
        return tj(a, e)
    }
    return pw(a) && d ? sw(a, pa(tw, d.pageId, d.Za)) : a
}

function sw(a, b) {
    var c = new J(a);
    af(c, b(c.Hb));
    return c.toString()
}

function tw(a, b, c) {
    c = c.replace(/\/(u|b)\/[0-9]+/g, "");
    var d = /^[0-9]+$/;
    a && d.test(a) && (c = "/b/" + a + c);
    b && d.test(b) && (c = "/u/" + b + c);
    return c
}

function uw(a) {
    return a.target ? "new" == a.target ? "_blank" : "_top" : nw(a.value ? a.value : null) ? "_top" : "_blank"
}
;
function vw(a, b) {
    this.o = a;
    this.k = b;
    this.j = {}
}

function ww(a, b, c, d) {
    if (b) {
        var e = xw(a, b);
        a.j[b] = e["p-time"];
        e["iv-event"] = e.link || e["l-class"] || e["link-id"] ? 2 : 7;
        cc(e, c || {});
        b = tb(d || []);
        30 == e["a-type"] && (c = yw(a, e["a-id"], "cta_annotation_shown")) && b.push(c);
        zw(a, e, b)
    }
}

function Aw(a, b, c, d, e) {
    if (b) {
        var g = xw(a, b);
        g["iv-event"] = 3;
        g["i-time"] = a.j[b] || "";
        cc(g, d || {});
        b = tb(e || []);
        30 == g["a-type"] && (d = yw(a, g["a-id"], "cta_annotation_clicked")) && b.push(d);
        zw(a, g, b, c)
    }
}

function Bw(a, b) {
    if (b) {
        var c = xw(a, b);
        c["iv-event"] = 4;
        c["i-time"] = a.j[b] || "";
        cc(c, {});
        var d = tb([]);
        if (30 == c["a-type"]) {
            var e = yw(a, c["a-id"], "cta_annotation_closed");
            e && d.push(e)
        }
        zw(a, c, d)
    }
}

function yw(a, b, c) {
    a = a.k.getVideoData();
    if (a.lc) {
        if ((c = a.lc[c]) && -1 != c.search(Ef))
            return a = ya("[ANNOTATION_ID]"), 0 <= c.indexOf("[ANNOTATION_ID]") ? c = c.replace("[ANNOTATION_ID]", b) : 0 <= c.indexOf(a) && (c = c.replace(a, b)), c
    } else if (a.ka)
        return tj(a.ka, {label: c, value: "a_id=" + b});
    return ""
}

function zw(a, b, c, d) {
    var e = 1, g, h = -1;
    if (d) {
        var k = !1;
        g = function () {
            e--;
            e || k || (clearTimeout(h), k = !0, d())
        };
        h = setTimeout(function () {
            k = !0;
            d()
        }, 1E3)
    }
    D(c || [], function (a) {
        e++;
        hg(a, g)
    });
    a.La(b, g)
}

function xw(a, b) {
    var c = {};
    if (b) {
        var d = new df(b);
        D(d.Ha(), function (a) {
            c[a] = escape(d.get(a, ""))
        })
    }
    c["p-time"] = a.k.getCurrentTime().toFixed(2);
    c.ps = a.k.T().j;
    return c
}

function Cw(a, b, c) {
    var d = xw(a);
    d["iv-event"] = b;
    d["a-id"] = "card:drawer";
    d["a-type"] = 51;
    zw(a, d, c)
}

function Dw(a, b, c, d, e) {
    c && (c = xw(a, c), c["iv-event"] = b, cc(c, d || {}), zw(a, c, e))
}

vw.prototype.La = function (a, b) {
    this.o.publish("command_log", "iv", a, b)
};
function Ew(a, b) {
    this.K = a;
    this.context = b;
    this.$m = !1;
    this.D = 0
}

function Fw(a, b, c, d, e, g) {
    b = new ws(b, c, {id: d});
    b.namespace = "iv-module";
    e && b.Ya.subscribe("onEnter", e, a);
    g && b.Ya.subscribe("onExit", g, a);
    a.context.Ya.publish("command_add_cuerange", [b], a.context.k.getPlayerType())
}

f = Ew.prototype;
f.pj = function () {
    this.context.Ya.subscribe("onResize", this.zk, this)
};
f.N = function () {
    return this.K
};
f.qj = function (a, b, c, d, e) {
    Iv(this.context.j, a, "click", pa(this.Fe, a, b, c, d, e || []), "iv-click-target", this);
    Iv(this.context.j, a, "touchend", pa(this.Fe, a, b, c, d, e || []), "iv-click-target", this);
    Iv(this.context.j, a, "touchstart", pa(function () {
        this.$m = !1
    }), "iv-click-target", this);
    Iv(this.context.j, a, "touchmove", pa(function () {
        this.$m = !0
    }), "iv-click-target", this)
};
f.Fe = function (a, b, c, d, e, g) {
    if (this.$m)
        return !0;
    g.stopPropagation();
    g.preventDefault();
    var h = rw(b, c, this.context.o.videoId);
    a = x(function () {
        this.context.k.pauseVideo();
        window.open(h, uw(b))
    }, this);
    nw(b.value ? b.value : null) && "new" != b.target || (a(), a = null);
    c = {};
    c.interval = y() - this.D;
    Aw(this.context.logger, d, a, c, e);
    return !1
};
f.show = function () {
    this.D = y()
};
f.hide = function () {
};
f.destroy = function () {
    Sd(this.N())
};
f.zk = function () {
};
var Gw = 16 / 9, Hw = 4 / 3, Oq = [.25, .5, 1, 1.25, 1.5, 2];

function Iw(a, b) {
    ea(b) || (b = [b]);
    var c = E(b, function (a) {
        return w(a) ? a : a.property + " " + a.duration + "s " + a.timing + " " + a.Go + "s"
    });
    Jw(a, c.join(","))
}

var Kw = function (a) {
    var b = !1, c;
    return function () {
        b || (c = a(), b = !0);
        return c
    }
}(function () {
    if (bd)
        return od("10.0");
    var a = document.createElement("div"), b = dd ? "-webkit" : cd ? "-moz" : bd ? "-ms" : ad ? "-o" : null, c = {transition: "opacity 1s linear"};
    b && (c[b + "-transition"] = "opacity 1s linear");
    b = {style: c};
    if (!Kc.test("div"))
        throw Error("Invalid tag name <div>.");
    if ("div" in Mc)
        throw Error("Tag name <div> is not allowed for SafeHtml.");
    var c = null, d = "<div";
    if (b)
        for (var e in b) {
            if (!Kc.test(e))
                throw Error('Invalid attribute name "' +
                e + '".');
            var g = b[e];
            if (null != g) {
                var h;
                h = e;
                if (g instanceof pc)
                    g = rc(g);
                else if ("style" == h.toLowerCase()) {
                    if (!ja(g))
                        throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof g + " given: " + g);
                    if (!(g instanceof tc)) {
                        var k = "", l = void 0;
                        for (l in g) {
                            if (!/^[-_a-zA-Z0-9]+$/.test(l))
                                throw Error("Name allows only [-_a-zA-Z0-9], got: " + l);
                            var p = g[l];
                            if (null != p) {
                                if (p instanceof pc)
                                    p = rc(p);
                                else if (xc.test(p)) {
                                    for (var r = !0, u = !0, C = 0; C < p.length; C++) {
                                        var V = p.charAt(C);
                                        "'" == V &&
                                        u ? r = !r : '"' == V && r && (u = !u)
                                    }
                                    r && u || (p = "zClosurez")
                                } else
                                    p = "zClosurez";
                                k += l + ":" + p + ";"
                            }
                        }
                        g = k ? vc(k) : wc
                    }
                    k = void 0;
                    k = g instanceof tc && g.constructor === tc && g.k === uc ? g.j : "type_error:SafeStyle";
                    g = k
                } else {
                    if (/^on/i.test(h))
                        throw Error('Attribute "' + h + '" requires goog.string.Const value, "' + g + '" given.');
                    if (h.toLowerCase() in Lc)
                        if (g instanceof Fc)
                            g = g instanceof Fc && g.constructor === Fc && g.j === Gc ? "" : "type_error:TrustedResourceUrl";
                        else if (g instanceof yc)
                            g = Ac(g);
                        else
                            throw Error('Attribute "' + h + '" on tag "div" requires goog.html.SafeUrl or goog.string.Const value, "' +
                            g + '" given.');
                }
                g.Ce && (g = g.ue());
                h = h + '="' + Aa(String(g)) + '"';
                d = d + (" " + h)
            }
        }
    e = void 0;
    n(e) ? ea(e) || (e = [e]) : e = [];
    !0 === fc.div ? d += ">" : (c = Nc(e), d += ">" + Jc(c) + "</div>", c = c.rf()
    )
    ;
    (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? c = 0 : c = null);
    b = Oc(d, c);
    a.innerHTML = Jc(b);
    return "" != Eg(a.firstChild, "transition")
});

function Jw(a, b) {
    Bg(a, "transition", b)
}
;
function Lw(a, b) {
    (a = Ad(a)) && a.style && (Yg(a, b), P(a, "hid", !b))
}

function Mw(a) {
    return (a = Ad(a)) ? !("none" == a.style.display || jh(a, "hid")) : !1
}

function Nw(a) {
    D(arguments, function (a) {
        Lw(a, !0)
    })
}

function Ow(a) {
    D(arguments, function (a) {
        Lw(a, !1)
    })
}
;
function Pw() {
    return !!t("yt.scheduler.instance")
}

function Qw(a, b) {
    void 0 === b && (b = NaN);
    var c = t("yt.scheduler.instance.addJob");
    return c ? (isNaN(b) && (b = 0), c(a, 0, b)) : isNaN(b) ? (a(), NaN) : L(a, b || 0)
}

function Rw(a, b) {
    return Qw(a, b)
}

function Sw(a) {
    var b = t("yt.scheduler.instance.cancelJob");
    b ? b(a) : M(a)
}

function Tw() {
    var a = t("yt.scheduler.instance.start");
    a && (M(Uw), a())
}

var Uw = 0;

function Vw() {
    var a = t("yt.scheduler.instance.pause");
    a && (a(), M(Uw), Uw = L(Tw, 800))
}
;
function Ww(a, b) {
    this.version = a;
    this.args = b
}

function Xw(a) {
    if (!a.Xd) {
        var b = {};
        a.call(b);
        a.Xd = b.version
    }
    return a.Xd
}

function Yw(a, b) {
    function c() {
        a.apply(this, b.args)
    }

    if (!b.args || !b.version)
        throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");
    var d;
    try {
        d = Xw(a)
    } catch (e) {
    }
    if (!d || b.version != d)
        throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");
    c.prototype = a.prototype;
    try {
        return new c
    } catch (g) {
        throw g.message = "yt.pubsub2.Data.deserialize(): " + g.message, g;
    }
}

Ww.prototype.D = function () {
    return {version: this.version, args: this.args}
};
function Zw(a, b) {
    this.k = a;
    this.j = b
}

Zw.prototype.toString = function () {
    return this.k
};
var $w = t("yt.pubsub2.instance_") || new wi;
wi.prototype.subscribe = wi.prototype.subscribe;
wi.prototype.unsubscribeByKey = wi.prototype.Lb;
wi.prototype.publish = wi.prototype.publish;
wi.prototype.clear = wi.prototype.clear;
q("yt.pubsub2.instance_", $w, void 0);
var ax = t("yt.pubsub2.subscribedKeys_") || {};
q("yt.pubsub2.subscribedKeys_", ax, void 0);
var bx = t("yt.pubsub2.topicToKeys_") || {};
q("yt.pubsub2.topicToKeys_", bx, void 0);
var cx = t("yt.pubsub2.isAsync_") || {};
q("yt.pubsub2.isAsync_", cx, void 0);
q("yt.pubsub2.skipSubKey_", null, void 0);
function dx(a, b) {
    var c = ex, d = fx();
    if (!d)
        return 0;
    var e = d.subscribe(c.toString(), function (d, h) {
        if (!window.yt.pubsub2.skipSubKey_ || window.yt.pubsub2.skipSubKey_ != e) {
            var k = function () {
                if (ax[e])
                    try {
                        if (h && c instanceof Zw && c != d)
                            try {
                                h = Yw(c.j, h)
                            } catch (k) {
                                throw k.message = "yt.pubsub2 cross-binary conversion error for " + c.toString() + ": " + k.message, k;
                            }
                        a.call(b || window, h)
                    } catch (p) {
                        Sf(p)
                    }
            };
            cx[c.toString()] ? Pw() ? Qw(k, void 0) : L(k, 0) : k()
        }
    });
    ax[e] = !0;
    bx[c.toString()] || (bx[c.toString()] = []);
    bx[c.toString()].push(e);
    return e
}

function gx(a, b) {
    var c = dx(function (d) {
        a.apply(b, arguments);
        hx(c)
    }, b);
    return c
}

function hx(a) {
    var b = fx();
    b && (ha(a) && (a = [a]), D(a, function (a) {
        b.unsubscribeByKey(a);
        delete ax[a]
    }))
}

function fx() {
    return t("yt.pubsub2.instance_")
}
;
var ix = {}, jx = "ontouchstart" in document;

function kx(a, b, c) {
    var d;
    switch (a) {
        case "mouseover":
        case "mouseout":
            d = 3;
            break;
        case "mouseenter":
        case "mouseleave":
            d = 9
    }
    return le(c, function (a) {
        return jh(a, b)
    }, !0, d)
}

function lx(a) {
    var b = "mouseover" == a.type && "mouseenter" in ix || "mouseout" == a.type && "mouseleave" in ix, c = a.type in ix || b;
    if ("HTML" != a.target.tagName && c) {
        if (b) {
            var b = "mouseover" == a.type ? "mouseenter" : "mouseleave", c = ix[b], d;
            for (d in c.gc) {
                var e = kx(b, d, a.target);
                e && !le(a.relatedTarget, function (a) {
                    return a == e
                }, !0) && c.publish(d, e, b, a)
            }
        }
        if (b = ix[a.type])
            for (d in b.gc)
                (e = kx(a.type, d, a.target)) && b.publish(d, e, a.type, a)
    }
}

Q(document, "blur", lx, !0);
Q(document, "change", lx, !0);
Q(document, "click", lx);
Q(document, "focus", lx, !0);
Q(document, "mouseover", lx);
Q(document, "mouseout", lx);
Q(document, "mousedown", lx);
Q(document, "keydown", lx);
Q(document, "keyup", lx);
Q(document, "keypress", lx);
Q(document, "cut", lx);
Q(document, "paste", lx);
jx && (Q(document, "touchstart", lx), Q(document, "touchend", lx), Q(document, "touchcancel", lx));
function mx() {
    this.A = {};
    this.tm = []
}

function nx(a, b) {
    return "yt-uix" + (a.Wh ? "-" + a.Wh : "") + (b ? "-" + b : "")
}

mx.prototype.init = v;
mx.prototype.dispose = v;
function ox(a, b, c) {
    var d = nx(a, void 0), e = x(c, a);
    b in ix || (ix[b] = new wi);
    ix[b].subscribe(d, e);
    a.A[c] = e
}

mx.prototype.k = function (a, b, c) {
    var d = qi(a, b);
    if (d && (d = t(d))) {
        var e = wb(arguments, 2);
        vb(e, 0, 0, a);
        d.apply(null, e)
    }
};
function px(a, b) {
    oi(a, "tooltip-text", b)
}

mx.prototype.removeData = function (a, b) {
    a && (a.dataset ? delete a.dataset[pi(b)] : a.removeAttribute("data-" + b))
};
function qx() {
    mx.call(this);
    this.j = {}
}

inherit(qx, mx);
ba(qx);
f = qx.prototype;
f.Wh = "scroller";
f.register = function () {
    ox(this, "mouseenter", this.Cz);
    ox(this, "mouseleave", this.nq)
};
f.dispose = function () {
    for (var a in this.j)
        this.nq(this.j[a]);
    this.j = {}
};
f.Cz = function (a) {
    var b = Q(a, "mousewheel", x(this.Nx, this, a));
    oi(a, "scroller-mousewheel-listener", b);
    b = Q(a, "scroll", x(this.hy, this, a));
    oi(a, "scroller-scroll-listener", b);
    a && (b = ka(a).toString(), this.j[b] = a)
};
f.nq = function (a) {
    var b = qi(a, "scroller-mousewheel-listener") || "";
    oi(a, "scroller-mousewheel-listener", "");
    var c = qi(a, "scroller-scroll-listener") || "";
    oi(a, "scroller-scroll-listener", "");
    Eh(b);
    Eh(c);
    oi(a, "scroller-scroll-listener", "");
    a && (a = ka(a).toString(), delete this.j[a])
};
f.Nx = function (a, b) {
    b.preventDefault();
    b.wheelDeltaY && (a.scrollTop = a.scrollTop + b.wheelDeltaY);
    Fi("yt-dom-content-change", a)
};
f.hy = function (a) {
    this.k(a, "scroll-action")
};
var rx = window.yt && window.yt.uix && window.yt.uix.widgets_ || {};
q("yt.uix.widgets_", rx, void 0);
function sx(a) {
    a = a.getInstance();
    var b = nx(a);
    b in rx || (a.register(), a.tm.push(Ci("yt-uix-init-" + b, a.init, a)), a.tm.push(Ci("yt-uix-dispose-" + b, a.dispose, a)), rx[b] = a)
}
;
function tx(a, b, c) {
    this.id = a;
    this.type = b.card_type;
    this.A = b.teaser_text || b.title;
    this.teaserDurationMs = b.teaser_duration_ms || 5E3;
    this.startMs = b.start_ms;
    this.endMs = b.end_ms;
    this.jb = c;
    a = b.tracking || {};
    this.j = {dz: a.impression, click: a.click, close: a.close, mD: a.teaser_impression, cs: a.teaser_click}
}
;
function ux(a, b, c) {
    tx.call(this, a, b, c);
    this.o = b.custom_message;
    this.B = b.image_url;
    this.title = b.title;
    this.k = b.meta_info;
    this.url = mw({target: b.target || "new", value: b.url})
}

inherit(ux, tx);
function vx(a, b, c) {
    this.j = a;
    this.B = b;
    this.k = c
}

function wx(a, b) {
    var c = xx(a, b.url, b.id), c = ["article", "iv-card-channel", ["div", ["iv-card-content", "iv-click-target"], b.o ? ["p", "", ["a", {href: c}, b.o]] : "", ["div", "iv-card-channel-content", {style: "background-image: url(" + b.B + ");"}, ["h2", "", ["a", {href: c}, b.title]], yx(b)]]], c = new Y(c), d = c.N();
    zx(a, d, b);
    return c
}

function Ax(a, b) {
    var c = xx(a, b.url, b.id), c = ["article", "iv-card-playlist", ["div", ["iv-card-image", "iv-click-target"], ["img", {
        src: b.o,
        alt: ""
    }], ["div", "iv-card-image-overlay", ["span", "iv-card-playlist-video-count", b.playlistVideoCount.toString()], ["span", "iv-card-playlist-play-all", Uf("YTP_PLAY_ALL")]]], ["div", ["iv-card-content", "iv-click-target"], ["h2", "", ["a", {href: c}, b.title]], yx(b)]], c = new Y(c), d = c.N();
    zx(a, d, b);
    return c
}

function Bx(a, b) {
    var c = ["ul", "yt-uix-form-list-option"];
    ub(c, E(b.options, function (a) {
        return ["li", "", ["label", "iv-click-target", ["span", "yt-uix-form-input-radio-container", ["input", "yt-uix-form-input-radio", {
            type: "radio",
            name: "radio",
            value: a.index.toString()
        }], ["span", "yt-uix-form-input-radio-element"]], " ", a.desc]]
    }));
    var c = ["article", "iv-card-poll", ["div", "iv-card-content", ["h2", "", b.title], ["form", "", c, ["button", ["yt-uix-button", "yt-uix-button-size-default", "yt-uix-button-primary"], ["span", "yt-uix-button-content",
        Uf("YTP_DRAWER_POLL_SUBMIT")]]]]], c = new Y(c), d = c.N();
    Iv(a.j.j, d, "click", pa(a.o, b), "yt-uix-button", a);
    return c
}

function Cx(a, b) {
    var c = xx(a, b.url, b.id), c = Dx(b, c), c = new Y(c), d = c.N();
    zx(a, d, b);
    return c
}

function Ex(a, b) {
    var c = xx(a, b.url, b.id), c = Dx(b, c), c = new Y(c), d = c.N();
    Iv(a.j.j, d, "click", pa(a.A, b), "iv-click-target", a);
    return c
}

function Fx(a, b) {
    var c = xx(a, b.url, b.id), c = ["article", "iv-card-video", ["div", ["iv-card-image", "iv-click-target"], ["img", {
        src: b.o,
        alt: ""
    }], ["span", "iv-card-video-duration", b.videoDuration]], ["div", ["iv-card-content", "iv-click-target"], ["h2", "", ["a", {href: c}, b.title]], yx(b)]], c = new Y(c), d = c.N();
    zx(a, d, b);
    return c
}

function yx(a) {
    if (!a.k || 0 == a.k.length)
        return "";
    var b = ["ul", "iv-card-meta-info"];
    D(a.k, function (a) {
        b.push(["li", "", a])
    });
    return b
}

function Dx(a, b) {
    var c = a.displayDomain ? ["a", {href: b}, a.displayDomain] : "", d = ["iv-card-action"], e = {href: b}, g = ["span", "", a.D];
    a.k && (d.push("iv-card-action-icon"), e.style = "background-image: url(" + a.k + ");");
    d = ["a", d, e, g];
    a.showLinkIcon && (d.push("\u00a0"), d.push(["span", "iv-card-link-icon"]));
    return ["article", "", ["div", ["iv-card-image", "iv-click-target"], {style: "background-image: url(" + a.imageUrl + ");"}, c], ["div", ["iv-card-content", "iv-click-target"], ["h2", "", a.title], d]]
}

vx.prototype.o = function (a, b) {
    b.stopPropagation();
    b.preventDefault();
    var c = a.id, d;
    t: {
        var e = b.currentTarget.form.elements.radio;
        if (e) {
            if (e.type) {
                d = kj(e);
                break t
            }
            for (d = 0; d < e.length; d++) {
                var g = kj(e[d]);
                if (g) {
                    d = g;
                    break t
                }
            }
        }
        d = null
    }
    e = this.j.o.Mh;
    c = {Vf: {action_poll_vote: 1}, Eb: {poll_id: c, index: d}, method: "POST"};
    c.Eb || (c.Eb = {});
    Bj(e, c)
};
vx.prototype.A = function (a, b) {
    b.stopPropagation();
    b.preventDefault();
    var c = t("yt.www.ypc.bootstrap.api.loadOffers");
    c ? (this.j.k.pauseVideo(), this.j.k.isFullscreen() && Gx(this.j.k.app), Aw(this.j.logger, a.jb, a.j.click), c(a.C, a.B, a.o)) : this.k(b.target, a.url, a.id, a.jb, a.j.click, b)
};
function xx(a, b, c) {
    return b ? rw(b, c, a.j.o.videoId, a.j.Z) : null
}

function zx(a, b, c) {
    a.B(b, c.url, c.id, c.jb, c.j.click)
}
;
function Hx(a, b, c) {
    tx.call(this, a, b, c);
    this.o = b.image_url;
    this.playlistVideoCount = b.playlist_video_count;
    this.title = b.title;
    this.k = b.meta_info;
    this.url = mw({target: b.target || "new", value: b.url})
}

inherit(Hx, tx);
function Ix(a, b, c) {
    tx.call(this, a, b, c);
    this.imageUrl = b.image_url;
    this.title = b.title;
    this.options = b.options
}

inherit(Ix, tx);
function Jx(a, b, c) {
    tx.call(this, a, b, c);
    this.imageUrl = b.image_url;
    this.displayDomain = b.display_domain;
    this.showLinkIcon = b.show_link_icon;
    this.k = b.button_icon_url;
    this.title = b.title;
    this.D = b.custom_message;
    this.url = mw({target: b.target || "new", value: b.url})
}

inherit(Jx, tx);
function Kx(a, b, c) {
    Jx.call(this, a, b, c);
    this.C = b.ypc_item_type;
    this.B = b.ypc_item_id;
    this.o = b.ypc_flow_type
}

inherit(Kx, Jx);
function Lx(a, b, c) {
    tx.call(this, a, b, c);
    this.o = b.image_url;
    this.videoDuration = b.video_duration;
    this.title = b.title;
    this.k = b.meta_info;
    this.url = mw({target: b.target || "new", value: b.url})
}

inherit(Lx, tx);
function Mx(a, b) {
    Ew.call(this, a, b);
    this.Vl = this.j = this.G = this.I = !1;
    this.xk = new Jv(v, b.Z.Qc ? 4E3 : 3E3);
    this.B = new vx(b, x(this.qj, this), x(this.Fe, this));
    var c = ["div", "iv-drawer", ["div", "iv-drawer-header", Uf("YTP_DRAWER_HEADER_TEXT"), ["button", "iv-drawer-close-button"]], ["div", ["iv-drawer-content", "yt-uix-scroller"]]];
    this.F = (new Y(c)).N();
    this.Dd = Dd("iv-drawer-content", this.F);
    this.o = (new Y(["div", "iv-drawer-teaser", ["div", "iv-drawer-teaser-box"], ["div", "iv-drawer-teaser-text"], ["button", "", ["span"]]])).N();
    this.C = Dd("iv-drawer-teaser-text", this.o);
    this.Dc = null;
    this.A = [];
    this.H = this.k = null;
    b.Z.experiments.fz && Fw(this, 1E3 * b.o.lengthSeconds - 5E3, 2147483647, "", pa(this.vr, null))
}

inherit(Mx, Ew);
var Nx = {
    associated: Jx,
    channel: ux,
    collaborator: ux,
    fundraising: Jx,
    merch: Jx,
    playlist: Hx,
    poll: Ix,
    product: Jx,
    tip: Kx,
    video: Lx
};

function Ox(a) {
    a = a.N();
    a = ke(a, "ytp-iv-player-content");
    if (!a)
        return !1;
    a = Ug(a);
    return 177 < a.width && 177 < a.height
}

function Px(a) {
    var b = ["html5-stop-propagation", "iv-drawer-manager"];
    a.context.Z.experiments.gz && b.push("iv-drawer-teaser-style-exp");
    kh(a.N(), b);
    a.N().appendChild(a.o);
    a.N().appendChild(a.F);
    b = Dd("iv-drawer-close-button", a.F);
    a.context.j.listen(b, "click", a.Ko, a);
    a.context.j.listen(b, "touchend", a.Ko, a);
    b = new Kv(a.Dd);
    rm(b, "mousewheel", function () {
        this.xk.start()
    }, !1, a);
    a.context.j.listen(a.Dd, "touchend", function () {
        this.xk.start()
    }, a);
    a.context.j.listen(a.Dd, "scroll", a.AA, a);
    sx(qx);
    a.context.j.listen(a.o,
        "click", a.lD, a);
    a.context.j.listen(a.o, "mouseover", function () {
        this.Dc && this.Dc.stop()
    }, a);
    a.context.j.listen(a.o, "mouseout", function () {
        this.Dc && this.Dc.start()
    }, a);
    a.context.Ya.subscribe("onHideControls", function () {
        this.Vl = !0
    }, a);
    a.context.Ya.subscribe("onShowControls", function () {
        this.Vl = !1
    }, a)
}

f = Mx.prototype;
f.add = function (a) {
    this.I || (Px(this), this.I = !0);
    var b, c;
    switch (a.type) {
        case "associated":
        case "fundraising":
        case "merch":
        case "product":
            b = Cx(this.B, a);
            break;
        case "tip":
            b = Ex(this.B, a);
            break;
        case "video":
            b = Fx(this.B, a);
            break;
        case "playlist":
            b = Ax(this.B, a);
            break;
        case "collaborator":
        case "channel":
            b = wx(this.B, a);
            break;
        case "poll":
            b = Bx(this.B, a)
    }
    if (b) {
        c = b.N();
        c = {Vc: a, uw: c, aq: !1, bq: !1};
        var d = yb(this.A, c, function (a, b) {
            return a.Vc.startMs - b.Vc.startMs
        });
        0 > d && (d = -(d + 1));
        vb(this.A, d, 0, c);
        b.Y(this.Dd, d);
        this.zk();
        b = 1E3 * this.context.k.getCurrentTime();
        5E3 > b && b > a.startMs && this.Qr(c);
        Fw(this, a.startMs, a.startMs + 1, a.id, pa(this.Qr, c))
    }
};
f.qp = function () {
    this.Dc && (lh(this.o, "iv-drawer-teaser-active"), L(x(function () {
        this.Dc = null
    }, this), 330))
};
f.vr = function (a) {
    a && a.stopPropagation();
    this.j || (this.qp(), N(this.N(), "iv-drawer-open"), this.j = !0, N(this.context.k.Ja(), "ytp-iv-drawer-open"), this.D = y(), Cw(this.context.logger, 7), D(this.A, function (a) {
        a.bq || (a.bq = !0, ww(this.context.logger, a.Vc.jb, Qx(this, !0), a.Vc.j.dz))
    }, this))
};
f.AA = function () {
    P(this.N(), "iv-drawer-scrolled", 0 < this.Dd.scrollTop)
};
f.Ko = function () {
    this.j && (Cw(this.context.logger, 4, Rx(this).j.close), this.j && (lh(this.N(), "iv-drawer-open"), this.j = !1, lh(this.context.k.Ja(), "ytp-iv-drawer-open"), Cw(this.context.logger, 10)))
};
f.lD = function (a) {
    if (!this.j) {
        var b = Qx(this);
        if (this.k) {
            var c = Rx(this);
            this.Dc ? Dw(this.context.logger, 9, c.jb, b, c.j.cs) : Dw(this.context.logger, 12, c.jb, b, c.j.cs)
        } else
            Cw(this.context.logger, 12);
        this.vr(a)
    }
};
f.Qr = function (a) {
    if (!this.Dc) {
        this.k != a && (this.k = a, ae(this.C, a.Vc.A));
        var b;
        if (b = Mw(this.N()))
            2 == this.context.k.vf() ? b = 1 == (isNaN(void 0) ? this.context.k.getAdState() : void 0) : (b = isNaN(void 0) ? this.context.k.getPlayerState() : void 0, b = 1 == b || 0 == b && 0 === this.context.k.getCurrentTime());
        if (b && !this.Dc && !this.j && this.k) {
            N(this.o, "iv-drawer-teaser-active");
            b = this.k.Vc;
            this.Dc = new Jv(this.qp, 580 + b.teaserDurationMs, this);
            this.Dc.start();
            var c = Qx(this);
            Dw(this.context.logger, 8, b.jb, c, b.j.mD);
            this.context.Z.experiments.Jl &&
            (this.H = hh(this.C))
        }
        (!this.j || !this.xk.isActive() && this.Vl) && Sx(this, a)
    }
};
function Sx(a, b) {
    var c = new Uv([0, a.Dd.scrollTop], [0, b.uw.offsetTop], 600, Yv);
    a.context.j.listen(c, "animate", function (a) {
        this.Dd.scrollTop = a.y
    }, a);
    a.context.j.listen(c, "finish", function (a) {
        this.Dd.scrollTop = a.y
    }, a);
    c.play()
}

f.zk = function () {
    var a = Ox(this) && !!this.A.length;
    Lw(this.N(), a);
    P(this.context.k.Ja(), "ytp-iv-drawer-enabled", a);
    a && (this.G || (Cw(this.context.logger, 11), this.G = !0), D(this.A, function (a) {
        a.aq || (a.aq = !0, Dw(this.context.logger, 11, a.Vc.jb))
    }, this));
    this.context.Z.experiments.Jl && Tx(this)
};
function Rx(a) {
    return a.k && a.k.Vc || a.A[0] && a.A[0].Vc
}

function Tx(a) {
    var b = a.context.Z.Ij;
    if (b) {
        var c = 360 * Gw, b = Pc(b.width / b.height >= c / 360 ? b.height / 360 : b.width / c, 1, 1.3), b = Math.round(10 * b) / 10, c = 12;
        switch (b) {
            case 1.1:
                c = 13;
                break;
            case 1.2:
                c = 14;
                break;
            case 1.3:
                c = 15
        }
        c !== hh(a.C) && Bg(a.C, "font-size", c + "px")
    }
}

function Qx(a, b) {
    var c;
    if (a.context.Z.experiments.Jl) {
        c = {};
        var d = b ? a.H : hh(a.C);
        d && (c["a-fs"] = d)
    }
    return c
}

f.Fe = function (a, b, c, d, e, g) {
    var h = Qx(this, !0);
    h && "a-fs" in h && (d += "&a-fs=" + h["a-fs"]);
    return Mx.J.Fe.call(this, a, b, c, d, e, g)
};
var Ux = /#(.)(.)(.)/;

function Vx(a) {
    if (!Wx.test(a))
        throw Error("'" + a + "' is not a valid hex color");
    4 == a.length && (a = a.replace(Ux, "#$1$1$2$2$3$3"));
    a = a.toLowerCase();
    return [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}

var Wx = /^#(?:[0-9a-f]{3}){1,2}$/i;

function Xx(a, b, c, d, e) {
    Uv.call(this, b, c, d, e);
    this.element = a
}

inherit(Xx, Uv);
Xx.prototype.B = v;
Xx.prototype.dm = function () {
    this.B();
    Xx.J.dm.call(this)
};
Xx.prototype.Pg = function () {
    this.B();
    Xx.J.Pg.call(this)
};
Xx.prototype.Ni = function () {
    this.B();
    Xx.J.Ni.call(this)
};
function Yx(a, b, c, d, e) {
    if (2 != b.length || 2 != c.length)
        throw Error("Start and end points must be 2D");
    Xx.apply(this, arguments)
}

inherit(Yx, Xx);
Yx.prototype.B = function () {
    this.element.style.left = Math.round(this.o[0]) + "px";
    this.element.style.top = Math.round(this.o[1]) + "px"
};
function Zx(a, b, c, d, e) {
    if (2 != b.length || 2 != c.length)
        throw Error("Start and end points must be 2D");
    Xx.apply(this, arguments)
}

inherit(Zx, Xx);
Zx.prototype.B = function () {
    this.element.style.width = Math.round(this.o[0]) + "px";
    this.element.style.height = Math.round(this.o[1]) + "px"
};
function $x(a, b, c) {
    Ew.call(this, a, b);
    this.annotation = c;
    this.isActive = !1
}

inherit($x, Ew);
$x.prototype.pj = function () {
    $x.J.pj.call(this);
    var a = this.annotation.data;
    "start_ms" in a && "end_ms" in a && Fw(this, this.annotation.data.start_ms, this.annotation.data.end_ms, this.annotation.id, this.show, this.hide)
};
function ay(a, b, c) {
    $x.call(this, a, b, c);
    this.j = null;
    this.o = !1;
    this.pi = null;
    this.gd = !1;
    this.k = 0
}

inherit(ay, $x);
function by(a) {
    N(a.N(), "iv-branding");
    a.context.Z.experiments.Kl || N(a.N(), "iv-branding-legacy");
    var b = a.annotation.data;
    a.k = b.image_width;
    a.j = I("img", {
        src: b.image_url,
        "class": "branding-img iv-click-target iv-view-target hid",
        width: b.image_width,
        height: b.image_height
    });
    var c = I("div", "branding-img-container", a.j);
    a.N().appendChild(c);
    var d = I("div", "iv-branding-context-name");
    ae(d, b.channel_name);
    var e = I("div", "iv-branding-context-subscribe");
    a.annotation.o ? e.innerHTML = a.annotation.o : b.num_subscribers &&
    ae(e, b.num_subscribers);
    c = I("div", "iv-branding-context-subscribe-caret");
    d = I("div", ["branding-context-container-inner", "iv-view-target"], c, d, e);
    e = I("div", "branding-context-container-outer", d);
    Bg(e, "right", a.k + "px");
    a.N().appendChild(e);
    a.qj(a.N(), cy(a.annotation), a.annotation.id, a.annotation.jb);
    a.pi = new Jv(pa(function (a) {
        var b = Ug(a.parentElement);
        (new Zx(a.parentElement, [b.width, b.height], [0, 0], 200, Xv)).play();
        this.gd = !1
    }, d), 500, a);
    Iv(a.context.j, a.N(), "mouseover", pa(function (a, b, c) {
        this.pi.stop();
        if (!this.gd) {
            var d = Ug(a);
            Sg(a, d.width);
            c = Math.min(d.height, c);
            var e = Math.round(10);
            c = this.context.Z.experiments.Kl ? d.height - Math.max(c / 2 + e, 20) : Math.max(c / 2 - e, 0);
            Hg(b, d.width, c);
            this.gd = !0;
            b = 9;
            d = Ug(a);
            c = Ug(a.parentElement);
            (new Zx(a.parentElement, [c.width, c.height], [d.width + b, d.height], 200, Xv)).play()
        }
    }, d, c, b.image_height), "iv-view-target", a);
    Iv(a.context.j, a.N(), "mouseout", x(a.pi.start, a.pi), "iv-view-target", a)
}

ay.prototype.show = function () {
    if (!this.isActive) {
        ay.J.show.call(this);
        this.o || (by(this), this.o = !0);
        ww(this.context.logger, this.annotation.jb);
        Nw(this.N());
        this.isActive = !0;
        var a = this.j, b, c = Wg(a).width, d = ha(void 0) ? void 0 : c;
        b = b || 0;
        Hg(a, d);
        b = new Yx(a, [d, a.offsetTop], [d - c - b, a.offsetTop], 200, Xv);
        rm(b, "begin", pa(Nw, a));
        b.play()
    }
};
ay.prototype.hide = function () {
    this.isActive && (Ow(this.N()), this.isActive = !1)
};
function dy(a, b, c, d, e, g) {
    this.j = a;
    this.Z = b;
    this.o = c;
    this.logger = d;
    this.k = e;
    this.Ya = g
}
;
function ey(a) {
    this.value = a
}
;
function fy(a, b, c, d) {
    this.type = a;
    this.trigger = b;
    this.url = c;
    this.duration = d
}

var gy = {CLOSE: "close", XI: "openUrl", PAUSE: "pause", Rv: "subscribe"}, hy = {
    CLICK: "click",
    CLOSE: "close",
    MH: "hidden",
    sJ: "rollOut",
    Lv: "rollOver",
    Ov: "shown"
};

function iy(a) {
    if (!a)
        return null;
    var b = cw(a.type, gy), c = cw(a.trigger, hy), d = mw(Zv(a.url));
    Zv(a.subscribeData);
    (a = Zv(a.duration)) ? (a = gw(a.value), a = new ey(a)):a = null;
    return b ? new fy(b, c, d, a) : null
}
;
function jy(a, b, c, d, e, g, h, k, l, p, r, u, C, V) {
    this.B = a;
    this.A = b;
    this.C = c;
    this.D = d;
    this.k = e;
    this.H = g;
    this.o = h;
    this.textAlign = k;
    this.I = l;
    this.F = p;
    this.G = r;
    this.effects = u;
    this.j = C;
    this.K = V
}

function ky(a) {
    if (!a)
        return null;
    var b = aw(a.fgColor, "#1A1A1A"), c = aw(a.bgColor, "#FFF"), d = aw(a.borderColor, "#000"), e = fw(a.borderWidth, 10, 0, 5, !1, 0), g = fw(a.bgAlpha, 10, 0, 1, !1, .8);
    fw(a.borderAlpha, 10, 0, 1, !1, .2);
    fw(a.gloss, 16, 0, 255, !1, 0);
    var h = aw(a.highlightFontColor, "#F2F2F2"), k = fw(a.highlightWidth, 10, 0, 5, !1, 3), l = bw(a.textAlign), p = fw(a.textSize, 10, 3.3, 30.1, !0, 3.6107), r = bw(a.fontWeight), u = iw(a.padding), C = jw(a.effects), V = fw(a.cornerRadius, 10, 0, 10, !0, 0);
    var O = Zv(a.gradient);
    if (O) {
        a = fw(O.x1, 10, 0, 100, !0, 0);
        var fa = fw(O.y1, 10, 0, 100, !0, 0), sa = fw(O.x2, 10, 0, 100, !0, 100), Ne = fw(O.y2, 10, 0, 100, !0, 100), je = aw(O.color1, "#FFF"), Gs = aw(O.color2, "#000"), Nz = fw(O.opacity1, 10, 0, 100, !0, 100), O = fw(O.opacity2, 10, 0, 100, !0, 0);
        a = new ly(a, fa, sa, Ne, je, Gs, Nz, O)
    } else
        a = null;
    return new jy(b, c, d, e, g, h, k, l, p, r, u, C, V, a)
}

function ly(a, b, c, d, e, g, h, k) {
    this.B = a;
    this.D = b;
    this.C = c;
    this.F = d;
    this.j = e;
    this.k = g;
    this.o = h;
    this.A = k
}
;
function my(a, b) {
    this.j = a;
    this.videoId = b
}
;
var ny = {EK: "xx", FK: "xy", IK: "yx", JK: "yy"};

function oy(a, b, c) {
    var d = a.D, e = a.F, g = a.j ? a.j : "xy", h = py(c, a.A, g);
    a = qy(c, a.o, g);
    var g = 640 * b.width * h / 100, k = 360 * b.height * a / 100;
    return new sg(0 == d ? 640 * b.left * h / 100 : 0 < d ? d : c.width + d - g, 0 == e ? 360 * b.top * a / 100 : 0 < e ? e : c.height + e - k, g, k)
}

function py(a, b, c) {
    var d = (c = "xx" == c || "xy" == c) ? 640 : 360;
    return (d + ((c ? a.width : a.height) - d) * b) / d
}

function qy(a, b, c) {
    var d = (c = "xy" == c || "yy" == c) ? 360 : 640;
    return (d + ((c ? a.height : a.width) - d) * b) / d
}
;
function ry(a, b, c, d, e, g, h, k, l, p, r) {
    this.x = a;
    this.y = b;
    this.B = c;
    this.h = d;
    this.k = e;
    this.C = g;
    this.D = h;
    this.F = k;
    this.A = l;
    this.o = p;
    this.j = r
}

function sy(a, b) {
    if (!a)
        return null;
    var c = ew(a.x, 0), d = ew(a.y, 0), e = ew(a.w, 0), g = ew(a.h, 0), h = gw(a.t), k = ew(a.scaleSlope, 1);
    return b(c, d, e, g, h, ew(a.d, 0), ew(a.px, 0), ew(a.py, 0), ew(a.scaleSlopeX, k), ew(a.scaleSlopeY, k), cw(a.scaleDimension, ny, "xy"))
}

function ty(a, b, c) {
    c = c ? ty(c, b) : null;
    a = oy(a, new sg(a.x, a.y, a.B, a.h), b);
    c ? (a.top += c.top, a.left += c.left) : (a.top += b.top, a.left += b.left);
    c = a.clone();
    b && !b.contains(a) && (a.width < b.width ? c.left = Pc(a.left, b.left, b.left + b.width - a.width) : (c.left = b.left, c.width = b.width), a.height < b.height ? c.top = Pc(a.top, b.top, b.top + b.height - a.height) : (c.top = b.top, c.height = b.height));
    return c
}

function uy(a) {
    return a ? sy(a, function (a, c, d, e, g, h, k, l, p, r, u) {
        return new ry(a, c, d, e, g, h, k, l, p, r, u)
    }) : null
}
;
function vy(a, b, c, d, e, g, h, k, l, p, r, u, C) {
    ry.call(this, a, b, c, d, e, k, l, p, r, u, C);
    this.G = g;
    this.H = h
}

inherit(vy, ry);
function wy(a) {
    if (!a)
        return null;
    var b = ew(a.sx, 0), c = ew(a.sy, 0);
    return sy(a, function (a, e, g, h, k, l, p, r, u, C, V) {
        return new vy(a, e, g, h, k, b, c, l, p, r, u, C, V)
    })
}
;
function xy(a, b, c, d) {
    this.type = a;
    this.k = b;
    this.j = c;
    this.o = d
}

var yy = {su: "anchored", mJ: "rect", AJ: "shapeless"};

function zy(a) {
    if (!a)
        return null;
    var b = cw(a.type, yy, "rect"), c = hw(a.rectRegion, uy), d = hw(a.anchoredRegion, wy);
    a = hw(a.shapelessRegion, uy);
    return new xy(b, c, d, a)
}

function Ay(a) {
    return a.k && a.k.length ? a.k[0] : a.j && a.j.length ? a.j[0] : a.o && a.o.length ? a.o[0] : null
}
;
function By(a, b) {
    this.k = a;
    this.j = b
}
;
function Cy(a, b) {
    this.state = a;
    this.j = b
}

var Dy = {CLOSED: "closed", aJ: "playerControlShow", Lv: "rollOver", Ov: "shown"};

function Ey(a) {
    if (!a)
        return null;
    var b = cw(a.state, Dy);
    a = $v(a.ref);
    return b ? new Cy(b, a) : null
}
;
function Fy(a, b, c, d) {
    this.j = a || [];
    this.o = b || [];
    this.A = c;
    this.k = d;
    this.value = !1
}

function Gy(a) {
    if (!a)
        return null;
    var b = hw(a.condition, Ey), c = hw(a.notCondition, Ey), d = dw(a.show_delay, !1);
    a = dw(a.hide_delay, !1);
    return b || c ? new Fy(b, c, d, a) : null
}

function Hy(a, b, c) {
    D(a.j, pa(b, !1), c);
    D(a.o, pa(b, !0), c)
}
;
function Iy(a, b, c, d, e, g, h, k, l, p, r, u, C, V, O, fa) {
    this.id = a;
    this.author = b;
    this.type = c;
    this.style = d;
    this.C = e;
    this.k = g;
    this.B = h || [];
    this.F = k || [];
    this.j = l;
    this.G = p;
    this.A = r;
    this.D = u;
    this.o = V;
    this.data = O;
    this.jb = fa
}

var Jy = {
    su: "anchored",
    xu: "branding",
    oH: "channel",
    uH: "cta",
    VH: "highlightText",
    lI: "label",
    cJ: "playlist",
    dJ: "popup",
    IJ: "speech",
    Rv: "subscribe",
    YJ: "title",
    VIDEO: "video",
    zK: "vote",
    CK: "website"
}, Ky = {
    xu: "branding",
    fH: "card",
    UH: "highlight",
    Rn: "image",
    MARKER: "marker",
    PAUSE: "pause",
    iJ: "promotion",
    ao: "survey",
    TEXT: "text",
    DK: "widget"
}, Ly = {vK: "video_relative", bJ: "player_relative"};

function My(a) {
    if (!a)
        return null;
    var b = $v(a.id), c = $v(a.author), d = cw(a.type, Ky), e = cw(a.style, Jy), g = bw(Zv(a.TEXT)), h = bw(a.data), h = 0 != h.length ? jg(h) : {}, k;
    var l = Zv(a.segment);
    l ? ($v(l.timeRelative), k = $v(l.spaceRelative), k = (l = hw(l.movingRegion, zy)) ? new By(k, l) : null) : k = null;
    var l = hw(a.action, iy), p = hw(a.trigger, Gy), r = ky(Zv(a.appearance));
    r || (r = ky({}));
    var u = cw(a.coordinate_system, Ly, "video_relative"), C;
    C = (C = Zv(a.image_source)) ? new my(bw(C.standard_url), bw(C.video_id)) : null;
    var V = dw(a.closeable, !0), O = bw(a.html_blob);
    a = bw(a.log_data);
    return b && d ? new Iy(b, c, d, e, g, k, l, p, r, u, C, V, 0, O, h, a) : null
}

function cy(a) {
    return (a = Ny(a, function (a) {
        return "openUrl" == a.type && null != a.url
    })) ? a.url : null
}

Iy.prototype.showLinkIcon = function () {
    return Oy(this, function (a) {
        return null != a.url && a.url.showLinkIcon
    })
};
function Py(a) {
    return Oy(a, function (a) {
        return "click" == a.trigger
    })
}

function Oy(a, b) {
    return hb(a.B, b, void 0)
}

function Qy(a, b, c) {
    D(a.B, b, c)
}

function Ny(a, b) {
    return F(a.B, b, void 0)
}

function Ry(a, b, c) {
    D(a.F, b, c)
}

function Sy(a, b) {
    E(a.F, b, void 0)
}

function Ty(a) {
    return (a = Uy(a)) ? Ay(a) : null
}

function Uy(a) {
    a.k ? (a = a.k, a = a.j.length ? a.j[0] : null):a = null;
    return a
}

function Vy(a, b) {
    var c = Ty(a);
    return c && b ? qy(b, c.o, c.j ? c.j : "xy") : 1
}
;
function Wy(a, b, c) {
    $x.call(this, a, b, c);
    this.A = this.k = this.B = !1;
    this.o = 5E3;
    this.j = null;
    this.kf = I("div", "iv-promo-contents")
}

inherit(Wy, $x);
function Xy(a) {
    var b = a.annotation.data;
    a.o = b.collapse_delay_ms || a.o;
    var c = ["iv-promo", "iv-promo-inactive"], d;
    if (b.image_url) {
        d = I("div", "iv-promo-img");
        var e = I("img", {src: b.image_url, "class": "iv-click-target"});
        d.appendChild(e);
        b.video_duration && !b.is_live ? (e = I("span", ["iv-promo-video-duration", "iv-click-target"], b.video_duration), d
    .
        appendChild(e)
    ) :
        b.playlist_length && (e = I("span", ["iv-promo-playlist-length", "iv-click-target"], b.playlist_length.toString()), d.appendChild(e))
    }
    var e = I("div", "iv-promo-txt"),
        g, h, k;
    switch (a.annotation.style) {
        case "cta":
        case "website":
            g = I("p", "iv-click-target", I("strong", null, b.text_line_1));
            h = I("p", ["iv-promo-link", "iv-click-target"], b.text_line_2);
            N(e, "iv-click-target");
            break;
        case "playlist":
        case "video":
            g = I("p", "iv-click-target", b.text_line_1);
            h = I("p", "iv-click-target", I("strong", null, b.text_line_2));
            b.is_live && (g = h, h = I("span", ["yt-badge", "iv-promo-badge-live", "iv-click-target"], Uf("YTP_LIVE_NOW")));
            N(e, "iv-click-target");
            c.push("iv-promo-video");
            break;
        case "vote":
            g =
                I("p", null, I("strong", null, b.text_line_1));
            h = I("p", null, b.text_line_2);
            k = I("div", "iv-promo-button-container");
            var l = I("button", "iv-promo-button", I("span", "iv-promo-button-content", b.button_text));
            a.context.j.listen(l, "click", function (a) {
                a.stopPropagation();
                Aw(this.context.logger, this.annotation.jb, null, {contest_vote: "1"}, (b.tracking || {}).vote);
                var c = this.annotation.data;
                a = Dd("iv-promo-txt", this.kf);
                var d = Dd("iv-promo-button-container", this.kf), e = I("div", ["iv-promo-txt", "iv-click-target"]), g = I("p",
                    "iv-click-target", I("strong", null, c.text_line_3)), c = I("p", "iv-click-target", c.text_line_4);
                Qd(e, g, c);
                Sd(d);
                Td(e, a);
                lh(this.N(), "iv-promo-with-button");
                this.qj(this.kf, cy(this.annotation), this.annotation.id, this.annotation.jb)
            }, a);
            k.appendChild(l);
            c.push("iv-promo-with-button")
    }
    g && e.appendChild(g);
    h && e.appendChild(h);
    a.kf.appendChild(e);
    k && a.kf.appendChild(k);
    g = I("div", "iv-promo-actions");
    h = I("div", "iv-promo-expand");
    g.appendChild(h);
    a.context.j.listen(a.N(), "mouseover", a.Px, a);
    a.context.j.listen(a.N(),
        "touchend", pa(a.jp, 5E3), a);
    a.context.j.listen(a.N(), "mouseout", a.Ox, a);
    h = I("div", "iv-promo-close");
    g.appendChild(h);
    Yy(a, x(function () {
        this.hide()
    }, a), h);
    kh(a.N(), c);
    d && Pd(a.N(), d);
    Pd(a.N(), a.kf);
    Pd(a.N(), g);
    a.qj(a.N(), cy(a.annotation), a.annotation.id, a.annotation.jb)
}

f = Wy.prototype;
f.show = function () {
    this.isActive || (Wy.J.show.call(this), this.B || (Xy(this), this.B = !0), Nw(this.N()), this.annotation && this.annotation.jb && ww(this.context.logger, this.annotation.jb), lh(this.N(), "iv-promo-inactive"), this.isActive = !0, this.j && (hn(this.j), this.j = null), Zy(this), $y(this, this.o))
};
f.hide = function () {
    this.isActive && (N(this.N(), "iv-promo-inactive"), this.isActive = !1)
};
f.Fe = function (a, b, c, d, e, g) {
    return this.k ? !0 : Wy.J.Fe.call(this, a, b, c, d, e, g)
};
f.jp = function (a, b) {
    b.stopPropagation();
    Zy(this);
    $y(this, a)
};
f.Px = function (a) {
    this.A = !0;
    this.jp(500, a)
};
f.Ox = function () {
    this.A = !1;
    az(this)
};
function az(a) {
    a.k || a.A || a.j || (N(a.N(), "iv-promo-collapsed"), a.k = !0)
}

function Zy(a) {
    a.k && (lh(a.N(), "iv-promo-collapsed"), a.k = !1)
}

function $y(a, b) {
    a.j || (a.j = gn(function () {
        this.j && (hn(this.j), this.j = null);
        az(this)
    }, b, a))
}

function Yy(a, b, c) {
    function d(a) {
        Bw(this.context.logger, this.annotation.jb);
        b(a);
        a.stopPropagation()
    }

    a.context.j.listen(c, "click", x(d, a));
    a.context.j.listen(c, "touchend", x(d, a))
}
;
var bz = {sI: 1, tI: 2, uI: 3};

function cz(a, b, c) {
    this.j = {};
    this.k = !1;
    this.B = "ivTrigger:" + a;
    this.o = c;
    Hy(b, function (a, b) {
        var c = dz(b.state, b.j);
        this.o.subscribe(c, x(this.A, this, c, a));
        this.j[c] = a
    }, this)
}

cz.prototype.A = function (a, b, c, d) {
    this.j[a] = b ? !c : c;
    a = Lb(this.j, function (a) {
        return a
    });
    this.k != a && (this.k = a, this.o.publish(this.B, a, d))
};
function dz(a, b) {
    var c = "ivTriggerCondition:" + a;
    return b ? c + ":" + b : c
}
;
function ez(a, b, c) {
    this.o = a;
    this.annotation = b;
    this.j = c;
    this.k = null;
    this.B = this.isVisible = !1;
    fz(b, a)
}

function fz(a, b) {
    Sy(a, function (c) {
        return new cz(a.id, c, b)
    })
}

ez.prototype.hide = function () {
    this.isVisible = !1;
    this.o.unsubscribe("onResize", this.A, this);
    this.j && this.j.hide()
};
ez.prototype.show = function () {
    this.isVisible = !0;
    this.j && this.j.show();
    this.o.subscribe("onResize", this.A, this)
};
ez.prototype.destroy = function () {
    this.o.unsubscribe("onResize", this.A, this);
    if (this.j) {
        var a = this.j;
        a.F.removeAll();
        a.k && Sd(a.k);
        a.o && a.o.N() && Sd(a.o.N())
    }
    gz(this)
};
function gz(a) {
    a.k && (a.k.stop(), a.k = null)
}

ez.prototype.A = function () {
    this.j && hz(this.j)
};
function iz() {
}
;
function jz(a, b, c, d, e, g, h, k) {
    this.B = a;
    this.D = b;
    this.C = c;
    this.F = d;
    this.j = e;
    this.k = g;
    this.o = n(h) ? h : null;
    this.A = n(k) ? k : null
}

inherit(jz, iz);
function kz() {
    this.ia = [];
    this.ma = [];
    this.Tc = []
}

kz.prototype.gf = null;
kz.prototype.Jc = null;
kz.prototype.sj = !0;
var lz = [2, 2, 6, 6, 0];
f = kz.prototype;
f.clear = function () {
    this.ia.length = 0;
    this.ma.length = 0;
    this.Tc.length = 0;
    delete this.gf;
    delete this.Jc;
    delete this.sj;
    return this
};
function mz(a, b, c) {
    0 == bb(a.ia) ? a.Tc.length -= 2 : (a.ia.push(0), a.ma.push(1));
    a.Tc.push(b, c);
    a.Jc = a.gf = [b, c]
}

f.ab = function (a) {
    var b = bb(this.ia);
    if (null == b)
        throw Error("Path cannot start with lineTo");
    1 != b && (this.ia.push(1), this.ma.push(0));
    for (b = 0; b < arguments.length; b += 2) {
        var c = arguments[b], d = arguments[b + 1];
        this.Tc.push(c, d)
    }
    this.ma[this.ma.length - 1] += b / 2;
    this.Jc = [c, d]
};
f.close = function () {
    var a = bb(this.ia);
    if (null == a)
        throw Error("Path cannot start with close");
    4 != a && (this.ia.push(4), this.ma.push(1), this.Jc = this.gf);
    return this
};
function nz(a, b, c, d, e) {
    var g = a.Jc[0] - b * Math.cos(d * Math.PI / 180) + b * Math.cos((d + e) * Math.PI / 180), h = a.Jc[1] - c * Math.sin(d * Math.PI / 180) + c * Math.sin((d + e) * Math.PI / 180);
    a.ia.push(3);
    a.ma.push(1);
    a.Tc.push(b, c, d, e, g, h);
    a.sj = !1;
    a.Jc = [g, h]
}

function oz(a, b) {
    for (var c = a.Tc, d = 0, e = 0, g = a.ia.length; e < g; e++) {
        var h = a.ia[e], k = lz[h] * a.ma[e];
        b(h, c.slice(d, d + k));
        d += k
    }
}

f.clone = function () {
    var a = new this.constructor;
    a.ia = this.ia.concat();
    a.ma = this.ma.concat();
    a.Tc = this.Tc.concat();
    a.gf = this.gf && this.gf.concat();
    a.Jc = this.Jc && this.Jc.concat();
    a.sj = this.sj;
    return a
};
f.isEmpty = function () {
    return 0 == this.ia.length
};
function pz(a, b) {
    this.G = a;
    this.H = null == b ? 1 : b
}

inherit(pz, iz);
function qz(a, b) {
    this.j = a;
    this.k = b
}
;
function rz() {
}

ba(rz);
rz.prototype.j = 0;
function sz(a) {
    U.call(this);
    this.K = a || xd();
    this.wa = null;
    this.De = !1;
    this.j = null;
    this.B = void 0;
    this.C = this.F = this.G = null
}

inherit(sz, U);
f = sz.prototype;
f.Cy = rz.getInstance();
f.getId = function () {
    return this.wa || (this.wa = ":" + (this.Cy.j++).toString(36))
};
f.N = function () {
    return this.j
};
f.nj = function (a) {
    if (this.G && this.G != a)
        throw Error("Method not supported");
    sz.J.nj.call(this, a)
};
f.ip = function () {
    this.j = this.K.createElement("div")
};
f.tg = function () {
    tz(this, function (a) {
        a.De && a.tg()
    });
    this.B && this.B.removeAll();
    this.De = !1
};
f.L = function () {
    this.De && this.tg();
    this.B && (this.B.dispose(), delete this.B);
    tz(this, function (a) {
        a.dispose()
    });
    this.j && Sd(this.j);
    this.G = this.j = this.C = this.F = null;
    sz.J.L.call(this)
};
f.te = function () {
    return this.j
};
function tz(a, b) {
    a.F && D(a.F, b, void 0)
}

f.removeChild = function (a, b) {
    if (a) {
        var c = w(a) ? a : a.getId();
        a = this.C && c ? Zb(this.C, c) || null : null;
        if (c && a) {
            Xb(this.C, c);
            pb(this.F, a);
            b && (a.tg(), a.j && Sd(a.j));
            c = a;
            if (null == c)
                throw Error("Unable to set parent component");
            c.G = null;
            sz.J.nj.call(c, null)
        }
    }
    if (!a)
        throw Error("Child is not in parent component");
    return a
};
function uz(a, b, c, d, e) {
    sz.call(this, e);
    this.width = a;
    this.height = b;
    this.A = c || null;
    this.H = d || null
}

inherit(uz, sz);
uz.prototype.o = null;
uz.prototype.xg = function () {
    return this.De ? Tg(this.N()) : ha(this.width) && ha(this.height) ? new H(this.width, this.height) : null
};
function vz(a) {
    var b = a.xg();
    return b ? b.width / (a.A ? new H(a.A, a.H) : a.xg()).width : 0
}

uz.prototype.resume = function () {
};
function wz(a, b) {
    U.call(this);
    this.zg = a;
    this.Zk = b;
    this[fm] = !1
}

inherit(wz, U);
f = wz.prototype;
f.Zk = null;
f.zg = null;
f.N = function () {
    return this.zg
};
f.addEventListener = function (a, b, c, d) {
    rm(this.zg, a, b, c, d)
};
f.removeEventListener = function (a, b, c, d) {
    zm(this.zg, a, b, c, d)
};
f.L = function () {
    wz.J.L.call(this);
    var a = this.zg;
    if (a)
        if (gm(a))
            a.removeAllListeners(void 0);
        else if (a = um(a)) {
            var b = 0, c;
            for (c in a.j)
                for (var d = a.j[c].concat(), e = 0; e < d.length; ++e)
                    Am(d[e]) && ++b
        }
};
function xz(a, b, c, d) {
    wz.call(this, a, b);
    a = this.Zk;
    b = this.N();
    c ? (b.setAttribute("stroke", c.k), b.setAttribute("stroke-opacity", 1), c = c.j, w(c) && -1 != c.indexOf("px") ? b.setAttribute("stroke-width", parseFloat(c) / vz(a)) : b.setAttribute("stroke-width", c)) : b.setAttribute("stroke", "none");
    c = this.Zk;
    a = this.N();
    if (d instanceof pz)
        a.setAttribute("fill", d.G), a.setAttribute("fill-opacity", d.H);
    else if (d instanceof jz) {
        b = "lg-" + d.B + "-" + d.D + "-" + d.C + "-" + d.F + "-" + d.j + "-" + d.k;
        var e = yz(c, b);
        if (!e) {
            var e = zz(c, "linearGradient",
                {x1: d.B, y1: d.D, x2: d.C, y2: d.F, gradientUnits: "userSpaceOnUse"}), g = "stop-color:" + d.j;
            ha(d.o) && (g += ";stop-opacity:" + d.o);
            g = zz(c, "stop", {offset: "0%", style: g});
            e.appendChild(g);
            g = "stop-color:" + d.k;
            ha(d.A) && (g += ";stop-opacity:" + d.A);
            d = zz(c, "stop", {offset: "100%", style: g});
            e.appendChild(d);
            e = Az(c, b, e)
        }
        a.setAttribute("fill", "url(#" + e + ")")
    } else
        a.setAttribute("fill", "none")
}

inherit(xz, wz);
function Bz(a, b) {
    wz.call(this, a, b)
}

inherit(Bz, wz);
function Cz(a, b) {
    wz.call(this, a, b)
}

inherit(Cz, wz);
function Dz(a, b, c, d) {
    xz.call(this, a, b, c, d)
}

inherit(Dz, xz);
function Ez(a, b) {
    wz.call(this, a, b)
}

inherit(Ez, Bz);
Ez.prototype.clear = function () {
    Rd(this.N())
};
function Fz(a, b, c, d) {
    xz.call(this, a, b, c, d)
}

inherit(Fz, Dz);
function Gz(a, b) {
    wz.call(this, a, b)
}

inherit(Gz, Cz);
function Hz(a, b, c, d, e) {
    uz.call(this, a, b, c, d, e);
    this.k = {};
    this.M = dd && !od(526);
    this.I = new mn(this)
}

var Iz;
inherit(Hz, uz);
var Jz = 0;

function zz(a, b, c) {
    a = a.K.j.createElementNS("http://www.w3.org/2000/svg", b);
    if (c)
        for (var d in c)
            a.setAttribute(d, c[d]);
    return a
}

f = Hz.prototype;
f.ip = function () {
    var a = zz(this, "svg", {width: this.width, height: this.height, overflow: "hidden"}), b = zz(this, "g");
    this.D = zz(this, "defs");
    this.o = new Ez(b, this);
    a.appendChild(this.D);
    a.appendChild(b);
    this.j = a;
    this.A && (this.N().setAttribute("preserveAspectRatio", "none"), this.M ? this.os() : this.N().setAttribute("viewBox", "0 0 " + (this.A ? this.A + " " + this.H : "")))
};
f.os = function () {
    if (this.De) {
        var a = this.xg();
        if (0 == a.width)
            this.N().style.visibility = "hidden";
        else {
            this.N().style.visibility = "";
            var b = a.width / this.A, a = a.height / this.H;
            this.o.N().setAttribute("transform", "scale(" + b + " " + a + ") translate(0 0)")
        }
    }
};
f.xg = function () {
    if (!cd)
        return this.De ? Tg(this.N()) : Hz.J.xg.call(this);
    var a = this.width, b = this.height, c = w(a) && -1 != a.indexOf("%"), d = w(b) && -1 != b.indexOf("%");
    if (!this.De && (c || d))
        return null;
    var e, g;
    c && (e = this.N().parentNode, g = Ug(e), a = parseFloat(a) * g.width / 100);
    d && (e = e || this.N().parentNode, g = g || Ug(e), b = parseFloat(b) * g.height / 100);
    return new H(a, b)
};
f.clear = function () {
    this.o.clear();
    Rd(this.D);
    this.k = {}
};
function Kz(a, b, c, d) {
    b = zz(a, "path", {d: Lz(b)});
    c = new Fz(b, a, c, d);
    a.o.N().appendChild(c.N())
}

function Lz(a) {
    var b = [];
    oz(a, function (a, d) {
        switch (a) {
            case 0:
                b.push("M");
                Array.prototype.push.apply(b, d);
                break;
            case 1:
                b.push("L");
                Array.prototype.push.apply(b, d);
                break;
            case 2:
                b.push("C");
                Array.prototype.push.apply(b, d);
                break;
            case 3:
                var e = d[3];
                b.push("A", d[0], d[1], 0, 180 < Math.abs(e) ? 1 : 0, 0 < e ? 1 : 0, d[4], d[5]);
                break;
            case 4:
                b.push("Z")
        }
    });
    return b.join(" ")
}

function Az(a, b, c) {
    if (b in a.k)
        return a.k[b];
    var d = "_svgdef_" + Jz++;
    c.setAttribute("id", d);
    a.k[b] = d;
    a.D.appendChild(c);
    return d
}

function yz(a, b) {
    return b in a.k ? a.k[b] : null
}

f.tg = function () {
    Hz.J.tg.call(this);
    this.M && this.I.Da(Mz(), "tick", this.os)
};
f.L = function () {
    delete this.k;
    delete this.D;
    delete this.o;
    this.I.dispose();
    delete this.I;
    Hz.J.L.call(this)
};
function Mz() {
    Iz || (Iz = new en(400), Iz.start());
    return Iz
}
;
function Oz(a, b, c) {
    this.j = a;
    this.k = 0;
    this.D = b;
    this.F = c || 70;
    this.o = !1
}

Oz.prototype.start = function (a) {
    this.C = y();
    this.k = a;
    this.B = this.C + this.k;
    this.o = !0;
    Nw(this.j);
    Rf(this.A);
    this.A = Qf(x(this.G, this), this.F)
};
Oz.prototype.stop = function () {
    this.o = !1;
    Ow(this.j);
    this.A && Rf(this.A)
};
Oz.prototype.G = function () {
    if (this.o) {
        var a = y(), b;
        b = 0 == this.k || a >= this.B ? 0 : 1 - (a - this.C) / this.k;
        var c = Dd("countdowntimer-diminishing-pieslice", this.j), d = sh("svg", this.j);
        !d && this.j.querySelectorAll && (d = this.j.querySelectorAll("svg"), d = d.length ? d[0] : null);
        var d = parseInt(d.getAttribute("width"), 10), e = new kz, g = d / 2 - 5;
        mz(e, d / 2, d / 2);
        e.ab(d / 2, 5);
        nz(e, g, g, -90, 360 * -b);
        e.ab(d / 2, d / 2);
        e.close();
        c.setAttribute("d", Lz(e));
        a >= this.B && (this.stop(), this.D && this.D())
    }
};
function Pz() {
    R.call(this);
    this.element = this.label = null;
    this.priority = 0;
    this.A = this.B = !1;
    this.o = null
}

inherit(Pz, R);
Pz.prototype.listen = function (a, b, c) {
    return this.element.listen(a, b, c || this)
};
Pz.prototype.Da = function (a) {
    this.element.Da(a)
};
function Qz(a, b, c, d) {
    Y.call(this, ["div", {
        className: "ytp-button",
        "aria-disabled": "{{disabled}}",
        tabindex: "{{tabindex}}"
    }, "{{content}}"]);
    this.ea = "inline-block";
    this.G = a;
    this.I = this.o = this.B = null;
    this.A = !1;
    this.listen("click", this.PF);
    this.listen("keypress", this.QF);
    this.G.ig(this.element, x(this.Zw, this));
    ov(this, "button");
    b && Rz(this, b);
    c && this.gb(c);
    d && (this.o = d)
}

inherit(Qz, Y);
function Rz(a, b) {
    b && "" != b && (a.B && lh(a.element, a.B), a.B = b, N(a.element, b))
}

function Sz(a, b) {
    a.I = b;
    kv(a.template, "tabindex", b)
}

f = Qz.prototype;
f.Zw = function () {
    return this.A ? null : this.o ? this.o : null
};
f.enable = function () {
    this.A = !1;
    this.template.update({disabled: null, tabindex: this.I});
    lh(this.element, "ytp-disabled")
};
f.disable = function () {
    this.A = !0;
    this.template.update({disabled: "true", tabindex: null});
    N(this.element, "ytp-disabled")
};
f.PF = function (a) {
    this.A && (a.stopImmediatePropagation(), a.preventDefault())
};
f.QF = function (a) {
    if (13 == a.keyCode || 32 == a.keyCode)
        a.preventDefault(), this.Vb("click")
};
f.L = function () {
    this.G.wm(this.element);
    this.G = null;
    Qz.J.L.call(this)
};
function Tz(a, b, c) {
    Y.call(this, ["div", "ytp-segmented-control"]);
    this.o = a;
    this.k = -1;
    this.j = [];
    if (null != b)
        for (vi(this.j), this.j = [], a = 0; a < b.length; a++) {
            var d = new Qz(this.o);
            ov(d, "radio");
            this.j.push(d);
            c ? d.ta(["div", b[a]]) : d.ta(b[a]);
            0 != a && N(d.N(), "ytp-segmented-control-other");
            Uz(d, a == this.k);
            d.listen("click", pa(this.CB, a), this);
            d.Y(this.element)
        }
    ov(this, "radiogroup")
}

inherit(Tz, Y);
f = Tz.prototype;
f.Y = function (a, b) {
    Tz.J.Y.call(this, a, b);
    for (var c = 0, d = 0; d < this.j.length; d++)
        c = Math.max(c, Tg(this.j[d].N()).width);
    if (c)
        for (d = 0; d < this.j.length; d++)
            Sg(this.j[d].N(), c)
};
f.Ba = function (a) {
    this.k = a;
    for (var b = 0; b < this.j.length; b++)
        Uz(this.j[b], b == a)
};
f.getSelected = function () {
    return this.k
};
function Vz(a, b) {
    for (var c = 0; c < a.j.length; c++)
        Sz(a.j[c], b)
}

function Uz(a, b) {
    var c = a.N();
    b ? (lh(c, "ytp-segmented-control-deselected"), N(c, "ytp-segmented-control-selected"), c.setAttribute("aria-checked", !0)) : (lh(c, "ytp-segmented-control-selected"), N(c, "ytp-segmented-control-deselected"), c.setAttribute("aria-checked", !1))
}

f.CB = function (a) {
    a != this.k && (this.Ba(a), this.Vb("change"))
};
f.L = function () {
    vi(this.j);
    this.j = [];
    Tz.J.L.call(this)
};
function Wz(a) {
    Pz.call(this);
    this.label = Z(0, "YTP_ANNOTATIONS");
    this.element = new Tz(a, [Z(0, "YTP_OFF"), Z(0, "YTP_ON")]);
    S(this, this.element);
    this.element.gb(this.label);
    Vz(this.element, 2200);
    this.priority = 3;
    this.Ba(0)
}

inherit(Wz, Pz);
Wz.prototype.getSelected = function () {
    return this.element.getSelected()
};
Wz.prototype.Ba = function (a) {
    this.element.Ba(a)
};
function Xz(a, b) {
    this.start = a < b ? a : b;
    this.end = a < b ? b : a
}

Xz.prototype.clone = function () {
    return new Xz(this.start, this.end)
};
function Yz() {
    this.j = !1;
    this.B = this.o = null
}

function Zz(a, b, c) {
    a.o ? (Rg(a.o.N(), b, c), a.o.clear()) : (b = new Hz(b, c, void 0, void 0, void 0), a
.
    o = b, a.o.ip(), a.B = I("div"), b = a.o.N(), a.B.appendChild(b)
)
    ;
    return a.o
}

Yz.prototype.N = function () {
    return this.B
};
Yz.prototype.k = function () {
};
function $z(a, b, c) {
    var d = document.createElementNS("http://www.w3.org/2000/svg", a);
    b && Ib(b, function (a, b) {
        d.setAttribute(b, a)
    });
    for (var e = 2; e < arguments.length; e++)
        d.appendChild(arguments[e]);
    return d
}

function aA(a, b) {
    var c;
    c = ":" + (rz.getInstance().j++).toString(36);
    b.setAttribute("result", c);
    a.appendChild(b);
    return c
}
;
function bA(a, b) {
    var c = aA(a, $z("feGaussianBlur", {"in": b, stdDeviation: "1.8"})), c = aA(a, $z("feDiffuseLighting", {
        "in": c,
        surfaceScale: "4",
        diffuseConstant: "1"
    }, $z("feDistantLight", {
        azimuth: "270",
        elevation: "15",
        "lighting-color": "white"
    }))), c = aA(a, $z("feComposite", {"in": c, in2: b, operator: "in"}));
    return aA(a, $z("feComposite", {in2: c, "in": b, operator: "arithmetic", k2: 1, k3: .5, k4: 0}))
}

function cA(a, b) {
    var c = aA(a, $z("feOffset", {"in": b, dx: "-7", dy: "-7"})), c = aA(a, $z("feGaussianBlur", {
        "in": c,
        stdDeviation: "3"
    })), c = aA(a, $z("feColorMatrix", {
        "in": c,
        type: "matrix",
        values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0"
    })), d = aA(a, $z("feColorMatrix", {
        "in": b,
        type: "matrix",
        values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 100 0"
    })), d = aA(a, $z("feGaussianBlur", {
        "in": d,
        stdDeviation: "1"
    })), c = aA(a, $z("feComposite", {operator: "out", "in": c, in2: d}));
    return aA(a, $z("feComposite", {operator: "over", "in": b, in2: c}))
}

function dA(a, b) {
    return b
}

function eA(a) {
    var b = $z("filter", {filterUnits: "userSpaceOnUse"}), c = "SourceGraphic";
    D(a, function (a) {
        t: {
            switch (a) {
                case "bevel":
                    a = bA;
                    break t;
                case "dropshadow":
                    a = cA;
                    break t
            }
            a = dA
        }
        c = a(b, c)
    });
    return b
}

function fA(a) {
    a = fb(a, function (a) {
        return a in gA
    });
    Ab(a, function (a, c) {
        return gA[a] - gA[c]
    });
    return a
}

function hA(a) {
    return F(a, function (a) {
        return "dropshadow" == a
    }) ? new rg(0, 7, 7, 0) : new rg(0, 0, 0, 0)
}

var gA = {bevel: 1, dropshadow: 2};

function iA(a, b, c, d, e) {
    b = jA(b, c, d ? d.j / 2 + 1 : 0);
    Kz(a, b, d, e)
}

function jA(a, b, c) {
    var d = new kz;
    mz(d, a.left + b + c, a.top + c);
    d.ab(a.left + a.width - b - c, a.top + c);
    nz(d, b, b, -90, 90);
    d.ab(a.left + a.width - c, a.top + a.height - b - c);
    nz(d, b, b, 0, 90);
    d.ab(a.left + b + c, a.top + a.height - c);
    nz(d, b, b, 90, 90);
    d.ab(a.left + c, a.top + b + c);
    nz(d, b, b, 180, 90);
    d.close();
    return d
}

function kA(a, b, c, d) {
    var e = a.K;
    e ? a = new jz(e.B * b / 100, e.D * c / 100, e.C * b / 100, e.F * c / 100, e.j, e.k, e.o, e.A) : (b = lA(d, a.k), a = new pz(a.A, b));
    return a
}

function lA(a, b) {
    return a ? Math.max(b, .9) : b
}

function mA(a, b) {
    var c = tg(a), d = hA(b);
    ja(d) ? (c.top -= d.top, c.right += d.right, c.bottom += d.bottom, c.left -= d.left) : (c.top -= d, c.right += void 0, c.bottom += void 0, c.left -= NaN);
    return ug(c)
}

function nA(a, b, c) {
    if (c.length && (b = Cd("g", void 0, b), b.length)) {
        var d = fA(c);
        if (d) {
            c = "effects:" + (d ? d.join("|") : "");
            var e = yz(a, c);
            e ? a = e : (d = eA(d), a = 0 < d.childNodes.length ? Az(a, c, d) : null)
        } else
            a = null;
        a && b[0].setAttribute("filter", "url(#" + a + ")")
    }
}
;
function oA() {
    Yz.call(this);
    this.A = 0
}

inherit(oA, Yz);
oA.prototype.k = function (a, b, c) {
    var d = a.j, e = d.D, g = this.j && Py(a), e = (e += g ? 1 : 0) ? new qz(e, g ? d.B : d.C) : null;
    if (g = Ty(a)) {
        var h = ty(g, b, c);
        if (!(0 >= h.width || 0 >= h.height)) {
            var k;
            if (k = (a = (a = Uy(a)) && a.j ? a.j : null) && a.length ? a[0] : null) {
                var l;
                c = c ? ty(c, b) : null;
                a = oy(k, new sg(k.G, k.H, k.B, k.h), b);
                c ? (a.top += c.top, a.left += c.left) : (a.top += b.top, a.left += b.left);
                l = new Qc(a.left, a.top);
                c = h.clone();
                a = new sg(l.x, l.y, 1, 1);
                var g = Math.max(c.left + c.width, a.left + a.width), p = Math.max(c.top + c.height, a.top + a.height);
                c.left = Math.min(c.left,
                    a.left);
                c.top = Math.min(c.top, a.top);
                c.width = g - c.left;
                c.height = p - c.top;
                c = mA(c, d.effects);
                a = Zz(this, c.width, c.height);
                var g = kA(d, c.width, c.height, this.j), h = new sg(h.left - c.left, h.top - c.top, h.width, h.height), r = new Qc(l.x - c.left, l.y - c.top);
                this.A = 17 * qy(b, k.o, k.j ? k.j : "xy");
                b = d.j;
                k = e ? e.j / 2 : 0;
                l = pA(h, r);
                var p = this.C(h, b, r, l), u = r.x, r = r.y, C = h.width, V = h.height, O = h.left, h = h.top, fa = new kz;
                mz(fa, O + b + k, h + k);
                "t" == l && (fa.ab(p.start, h + k), fa.ab(u, r), fa.ab(p.end, h + k));
                fa.ab(O + C - b - k, h + k);
                nz(fa, b, b, -90, 90);
                "r" == l && (fa.ab(O +
                C - k, p.start), fa.ab(u, r), fa.ab(O + C - k, p.end));
                fa.ab(O + C - k, h + V - b - k);
                nz(fa, b, b, 0, 90);
                "b" == l && (fa.ab(p.end, h + V - k), fa.ab(u, r), fa.ab(p.start, h + V - k));
                fa.ab(O + b + k, h + V - k);
                nz(fa, b, b, 90, 90);
                "l" == l && (fa.ab(O + k, p.end), fa.ab(u, r), fa.ab(O + k, p.start));
                fa.ab(O + k, h + b + k);
                nz(fa, b, b, 180, 90);
                fa.close();
                Kz(a, fa, e, g);
                if (e = this.N())
                    N(e, "annotation-shape"), N(e, "annotation-speech-shape"), Hg(e, c.left, c.top), Rg(e, c.width, c.height), nA(a, e, d.effects)
            }
        }
    }
};
function pA(a, b) {
    var c = a.top - b.y, d = b.x - a.left - a.width, e = b.y - a.top - a.height, g = a.left - b.x, h = Math.max(c, d, e, g);
    if (0 > h)
        return "i";
    switch (h) {
        case c:
            return "t";
        case d:
            return "r";
        case e:
            return "b";
        case g:
            return "l"
    }
    return "i"
}

oA.prototype.C = function (a, b, c, d) {
    function e(a, c, d, e) {
        a = Math.min(Math.max(e - 2 * b, 0), a);
        c = Pc(c - a / 2, d + b, d + e - a - b);
        return new Xz(c, c + a)
    }

    return "t" == d || "b" == d ? e(this.A, c.x, a.left, a.width) : "l" == d || "r" == d ? e(this.A, c.y, a.top, a.height) : new Xz(0, 0)
};
function qA() {
    Yz.call(this)
}

inherit(qA, Yz);
qA.prototype.k = function (a, b, c) {
    var d = Ty(a);
    d && (b = ty(d, b, c), 0 >= b.width || 0 >= b.height || (a = a.j, c = mA(b, a.effects), d = Zz(this, c.width, c.height), iA(d, new sg(0, 0, b.width, b.height), a.j, new qz(!a.o && this.j ? 1 : a.o, a.A), new pz("#000", 0)), b = this.N(), N(b, "annotation-shape"), Xg(b, lA(this.j, a.k)), Hg(b, c.left, c.top), Rg(b, c.width, c.height)))
};
function rA(a, b) {
    return window.location.protocol + "//i1.ytimg.com/vi/" + escape(a) + "/" + (b || "hqdefault.jpg")
}
;
function sA(a, b, c) {
    Yz.call(this);
    this.A = a || 0;
    this.D = b || 0;
    this.C = c || !1
}

inherit(sA, Yz);
function tA(a, b) {
    var c = a.width, d = a.height, e = 0, g = 0;
    0 < b && (a.width / a.height > b ? (d = a.width / b, g = (a.height - d) / 2): (c = a.height * b, e = (a.width - c) / 2));
    return new sg(e, g, c, d)
}

sA.prototype.k = function (a, b, c) {
    var d = ty(Ty(a), b, c);
    if (!(0 >= d.width || 0 >= d.height)) {
        var e = tA(d, this.D);
        e.left += d.left;
        e.top += d.top;
        b = a.j;
        c = mA(e, b.effects);
        var g = Zz(this, c.width, c.height), h = new pz("#000", 0), e = tA(e, this.A);
        a = a.A ? a.A.j ? a.A.j : a.A.videoId ? rA(a.A.videoId, "hqdefault.jpg") : "" : "";
        e = zz(g, "image", {
            x: e.left,
            y: e.top,
            width: e.width,
            height: e.height,
            "image-rendering": "optimizeQuality",
            preserveAspectRatio: "none"
        });
        e.setAttributeNS("http://www.w3.org/1999/xlink", "href", a);
        e = new Gz(e, g);
        g.o.N().appendChild(e.N());
        if (a = this.N()) {
            var k = lA(this.j, b.k);
            Xg(a, k);
            if (this.C && 0 < b.o) {
                var k = new qz(b.o, b.A), d = new sg(0, 0, d.width, d.height), l;
                l = jA(d, b.j, k.j / 2 + 1);
                var p = yz(g, "mask");
                if (p)
                    l = p;
                else {
                    var p = document.createElementNS("http://www.w3.org/2000/svg", "mask"), r = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    r.setAttribute("d", Lz(l));
                    r.setAttribute("fill", "#FFF");
                    p.appendChild(r);
                    l = Az(g, "mask", p)
                }
                e = e.N();
                l && e.setAttribute("mask", "url(#" + l + ")");
                iA(g, d, b.j, k, h)
            }
            N(a, "annotation-shape");
            N(a, "annotation-image-shape");
            Hg(a, c.left, c.top);
            Rg(a, c.width, c.height);
            nA(g, a, b.effects)
        }
    }
};
function uA() {
    Yz.call(this)
}

inherit(uA, Yz);
uA.prototype.k = function (a, b, c) {
    var d = Ty(a);
    if (d) {
        var e = ty(d, b, c);
        if (!(0 >= e.width || 0 >= e.height)) {
            b = a.j;
            c = mA(e, b.effects);
            var d = Zz(this, c.width, c.height), g = b.D;
            a = this.j && Py(a);
            a = (g += a ? 1 : 0) ? new qz(g, a ? b.B : b.C) : null;
            g = new sg(0, 0, e.width, e.height);
            e = kA(b, e.width, e.height, this.j);
            iA(d, g, b.j, a, e);
            if (a = this.N())
                N(a, "annotation-shape"), N(a, "annotation-popup-shape"), Hg(a, c.left, c.top), Rg(a, c.width, c.height), nA(d, a, b.effects)
        }
    }
};
function vA() {
    oA.call(this)
}

inherit(vA, oA);
vA.prototype.C = function (a, b, c, d) {
    function e(a, c, d, e) {
        a = Math.min(Math.max(e - 2 * b, 0), a);
        c = c <= d + e / 2 ? Math.max(d + e / 4 - a / 2, d + b) : Math.min(d + 3 * e / 4 - a / 2, d + e - a - b);
        return new Xz(c, c + a)
    }

    return "t" == d || "b" == d ? e(this.A, c.x, a.left, a.width) : "l" == d || "r" == d ? e(this.A, c.y, a.top, a.height) : new Xz(0, 0)
};
function wA(a, b, c, d, e) {
    this.j = a;
    this.H = b;
    this.D = c;
    this.K = d;
    this.I = e;
    this.F = new Hv(this);
    this.G = this.o = this.B = this.A = this.C = this.k = null
}

function xA(a, b) {
    var c = x(function (a, c, g) {
        c = g ? yA(this, c, x(g, this)) : yA(this, c);
        this.F.listen(b, a, c)
    }, a);
    c("mouseover", "d", a.P);
    c("mouseout", "c", a.M);
    c("click", "a");
    c("touchend", "a")
}

function zA(a) {
    if (a.j.D) {
        var b;
        Oy(a.j, function (a) {
            return "close" == a.type
        }) ? b = a.k : (a.B = I("div", ["annotation-close-button", "hid"]), oi(a.B, "annotation_id", a.j.id), a.k.appendChild(a.B), b = a.B);
        var c = function (a) {
            a.stopPropagation()
        };
        a.F.listen(b, "click", yA(a, "b", c));
        a.F.listen(b, "touchend", yA(a, "b", c))
    }
}

function yA(a, b, c) {
    return x(function (a) {
        if (this.I)
            c && c(a);
        else if (a.target instanceof Element) {
            var e = a.target;
            Ow(e);
            try {
                var g = document.elementFromPoint(a.clientX, a.clientY);
                if (ke(g, "annotation")) {
                    var h = document.createEvent("MouseEvent");
                    h.initMouseEvent(a.type, a.bubbles, a.cancelable, a.view, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, a.button, a.relatedTarget);
                    g.dispatchEvent(h)
                }
            } finally {
                Nw(e)
            }
        }
        e = Wg(a.target);
        a = new Qc(a.clientX, a.clientY);
        "c" == b && e.contains(a) ||
        this.K.publish(b, this.j)
    }, a)
}

wA.prototype.P = function () {
    this.B && Nw(this.B);
    this.A && Xg(this.A, 1);
    var a = AA(this);
    this.o && (this.o.j = !0, Xg(this.k, BA(this) ? 1 : 0), a && this.o.k(this.j, a, CA(this)))
};
wA.prototype.M = function () {
    this.B && Ow(this.B);
    this.A && Xg(this.A, 0);
    var a = AA(this);
    this.o && (this.o.j = !1, Xg(this.k, BA(this) ? 1 : 0), a && this.o.k(this.j, a, CA(this)))
};
function CA(a) {
    return a.G ? Ty(a.G) : null
}

function hz(a) {
    if (a.k || a.o) {
        var b = Ty(a.j);
        if (b) {
            var c = AA(a), d = CA(a);
            if (a.k && c) {
                b = ty(b, c, d);
                Rg(a.k, b.width, b.height);
                Hg(a.k, b.left, b.top);
                var e = a.D.Bj;
                if (e) {
                    var g;
                    g = (g = Ty(a.j)) && e ? py(e, g.A, g.j ? g.j : "xy") : 1;
                    var e = Vy(a.j, e), h;
                    h = a.j.j;
                    h.G ? h = h.G : (h = "speech" == a.j.style ? 1.6 : .8, h = new rg(h, h, h, h));
                    h = new rg(360 * h.top * e / 100, 640 * h.right * g / 100, 360 * h.bottom * e / 100, 640 * h.left * g / 100);
                    a.A && (h.right += 1.5 * c.height / 100);
                    a.k.style.padding = h.top + "px " + h.right + "px " + h.bottom + "px " + h.left + "px";
                    "label" == a.j.style && a.C && (a.C.style.padding =
                        a.k.style.padding);
                    a.A && (g = g / e * c.height * 4.2 / 100, g = new H(g, g), Rg(a.A, g), "highlight" == a.j.type || "label" == a.j.style ? (e = 1.5 * c.height / 100, g = new Qc(b.width - g.width - e, b.height - g.height - e)):g = new Qc(b.width - g.width - 3 * c.height / 100, (b.height - g.height) / 2), Hg(a.A, g));
                    a.B && (g = 9 <= c.left + c.width - (b.left + b.width), e = 9 <= b.top - c.top, Hg(a.B, g && e ? new Qc(b.width - 9, -9) : g ? new Qc(b.width - 9, 45 < b.height ? 9 : b.height - 9) : e ? new Qc(45 < b.width ? b.width - 9 - 18 : -9, -9) : b.width / c.width > b.height / c.height ? new Qc(45 < b.width ? b.width - 9 - 18 : -9,
                        b.height - 9) : new Qc(-9, 45 < b.height ? 9 : b.height - 9)))
                }
            }
            a.o && c && a.o.k(a.j, c, d);
            if (a.k) {
                c = a.k;
                d = a.j.j;
                c.style.color = "highlightText" == a.j.style ? d.H : d.B;
                c.style.fontSize = 360 * d.I * Vy(a.j, a.D.Bj) / 100 + "px";
                b = a.j.style;
                c.style.textAlign = d.textAlign ? d.textAlign : "title" == b || "highlightText" == b ? "center" : "left";
                d.F && (c.style.fontWeight = d.F);
                a = a.k;
                c = a.style.overflow;
                d = Dd("annotation-link-icon", a);
                b = Mw(d);
                g = Dd("annotation-close-button", a);
                e = Mw(g);
                d && b && Ow(d);
                g && e && Ow(g);
                var k = h = "", l = Dd("inner-text", a);
                l && (h = l.style.overflow,
                    k = l.style.position, l.style.overflow = "visible", l.style.position = "static");
                a.style.overflow = "scroll";
                if (a.scrollHeight > a.offsetHeight || a.scrollWidth > a.offsetWidth) {
                    for (var p = hh(a), r = p, u = 5, C = Math.floor(p / 2); C;)
                        a.scrollHeight <= a.offsetHeight && a.scrollWidth <= a.offsetWidth ? (u = r, r = Math.min(r + C, p)):r = Math.max(r - C, u), C = Math.floor(C / 2), a.style.fontSize = r + "px";
                    r != u && (a.scrollHeight > a.offsetHeight || a.scrollWidth > a.offsetWidth) && (a.style.fontSize = u + "px")
                }
                a.style.overflow = c;
                l && (l.style.overflow = h, l.style.position =
                    k);
                g && e && Nw(g);
                d && b && Nw(d)
            }
        }
    }
}

wA.prototype.show = function () {
    var a = this.j.j, a = (a && 0 == a.k || "title" == this.j.style || "highlightText" == this.j.style || "pause" == this.j.type ? !1 : !0) && !this.o, b = !this.k, c = "widget" == this.j.type;
    if (a) {
        var d = AA(this);
        if (d) {
            var e = null;
            "highlight" == this.j.type || "label" == this.j.style ? e = new qA : "popup" == this.j.style ? e = new uA : "anchored" == this.j.style ? e = new oA : "speech" == this.j.style ? e = new vA : "image" == this.j.type && ("video" == this.j.style ? e = new sA(Hw, Gw, !0) : "channel" == this.j.style && (e = new sA));
            e && (e.k(this.j, d, CA(this)),
                this.o = e, d = e.N()) && (Ow(d), N(d, "annotation-type-" + this.j.type.toLowerCase()), this.H(d))
        }
    }
    if (b) {
        d = ["annotation", "hid"];
        "highlightText" != this.j.style || d.push("annotation-no-mouse");
        d.push("annotation-type-" + this.j.type.toLowerCase());
        this.k = I("div", d);
        this.j.C && (this.C = I("div", "inner-text"), "label" == this.j.style && (N(this.C, "label-text"), this.C.style.backgroundColor = this.j.j.A), ae(this.C, this.j.C), this.k.appendChild(this.C));
        oi(this.k, "annotation_id", this.j.id);
        this.H(this.k);
        xA(this, this.k);
        if (Py(this.j) &&
            "image" != this.j.type && this.j.showLinkIcon()) {
            if (d = cy(this.j))
                this.k.title = d.value ? d.value : null;
            this.A = I("span", "annotation-link-icon");
            this.k.appendChild(this.A)
        }
        zA(this);
        Py(this.j) || (this.k.style.cursor = "default")
    }
    c && ("subscribe" == this.j.style ? Dd("yt-uix-subscription-button", this.k) || (this.k.innerHTML = this.j.o) : this.j.o && (this.k.innerHTML = this.j.o));
    if (a || b) {
        t: {
            a = this.j.k.j;
            if (a.length && (a = Ay(a[0]))) {
                a = a.C;
                break t
            }
            a = 0
        }
        this.k && (this.k.style.zIndex = a);
        this.o && this.o.N() && (this.o.N().style.zIndex = a)
    }
    Nw(this.k);
    Xg(this.k, BA(this) ? 1 : 0);
    hz(this);
    this.o && Nw(this.o.N())
};
wA.prototype.hide = function () {
    Ow(this.k);
    this.o && Ow(this.o.N())
};
function BA(a) {
    return "label" != a.j.style || a.o.j
}

function AA(a) {
    var b = a.D.Bj;
    return b ? "player_relative" == a.j.G ? (a = a.D.Ij) ? new sg(-b.left, -b.top, a.width, a.height) : null : new sg(0, 0, b.width, b.height) : null
}
;
function DA(a) {
    Is.call(this, a);
    this.Uj = !0;
    this.ua = "iv-module";
    this.sc = "iv";
    this.M = !1;
    this.R = !0;
    this.F = !1;
    this.A = 0;
    this.k = {};
    this.K = {};
    this.H = null;
    this.D = new vw(this.P, a);
    a = EA;
    this.B = new Wz(Ys(this));
    S(this, this.B);
    this.B.listen("change", this.XE, this);
    this.subscribe("onHideControls", this.MA, this);
    this.subscribe("onShowControls", this.IB, this);
    this.subscribe("onStateChange", this.oB, this);
    this.subscribe("d", this.ZE, this);
    this.subscribe("c", this.YE, this);
    this.subscribe("a", this.Nz, this);
    this.subscribe("b",
        this.jA, this);
    this.subscribe("videodatachange", this.En, this);
    var b = new fv(["div", [a.Lu, "hid"], ["svg", {
        width: "60",
        height: "60"
    }, ["g", "", ["circle", "countdowntimer-background-circle", {
        cx: "30",
        cy: "30",
        r: "15"
    }], ["path", "countdowntimer-diminishing-pieslice", {d: "M30,30 z"}], ["circle", "countdowntimer-middle-dot", {
        cx: "30",
        cy: "30",
        r: "4"
    }]]]]);
    S(this, b);
    b = b.N();
    this.S = I("DIV", [a.pv, "html5-stop-propagation"]);
    this.X = I("DIV", a.Ru);
    this.C = null;
    Ns(this, I("DIV", a.uu, this.S, this.X));
    Ns(this, b);
    this.I = new Oz(b, x(this.Pk,
        this));
    this.G = this.o = null;
    this.O = []
}

inherit(DA, Is);
DA.B = "AnnotationsModule";
var EA = {
    uu: "video-annotations",
    Lu: "countdowntimer",
    Ru: "video-custom-annotations",
    pv: "video-legacy-annotations"
};
DA.A = function (a) {
    switch (a.type) {
        case "branding":
        case "promotion":
        case "survey":
            return !0
    }
    return !1
};
DA.o = function (a) {
    return "card" == a.type
};
DA.k = function (a) {
    return DA.Ca(a) ? new DA(a) : null
};
DA.Ca = function (a) {
    var b = a.T();
    return "leanback" == b.da ? !1 : b.V ? !0 : Bv(a.getVideoData(), "iv3_module")
};
DA.j = function () {
    return I("div", ["annotation", "annotation-type-custom", "hid"])
};
f = DA.prototype;
f.Ca = function () {
    return DA.Ca(this.j)
};
f.create = function () {
    DA.J.create.call(this);
    this.C = new Y(["div", ["ytp-player-content", "ytp-iv-player-content"]]);
    this.C.Y(this.j.Ja());
    at(this, this.B);
    var a = this.j.T();
    (1 == (a.na || this.j.getVideoData().pa) || a.V) && this.load()
};
f.destroy = function () {
    this.C.detach();
    this.C.dispose();
    bt(this, this.B);
    this.unsubscribe("videodatachange", this.En, this);
    DA.J.destroy.call(this)
};
f.XE = function () {
    var a = this.F || this.A, b = 1 == this.B.getSelected();
    a && !b ? (this.unload(), this.log({toggle: 0})) : !a && b && (this.load(), this.log({toggle: 1}))
};
f.oB = function (a) {
    this.R = X(a.state, 8);
    0 > Dv(a, 4) && this.I.stop()
};
f.load = function () {
    DA.J.load.call(this);
    var a = this.j.getVideoData(), b = x(this.Eq, this, a.videoId);
    Pw() && (b = FA(this, b));
    var b = {format: "XML", method: "GET", $b: b}, c = this.j.T(), d = c.V, e = c.Kb;
    if (d || e)
        b.method = "POST", b.Eb = {}, d && (b.Eb.ic_xml = d, c.V = ""), e && (b.Eb.ic_track = e, c.Kb = "");
    a.Mh && (this.A++, (!a.jo || d || e) && Bj(a.Mh, b));
    a.qk && (b = x(this.Eq, this, a.videoId), Pw() && (b = FA(this, b)), b = {
        format: "XML",
        method: "GET",
        $b: b
    }, this.A++, Bj(a.qk, b));
    this.B.Ba(1)
};
f.unload = function () {
    this.B.Ba(0);
    this.D.La({"iv-event": 1});
    this.Pk();
    Ls(this);
    Ib(this.k, function (a) {
        a.destroy()
    });
    Ib(this.K, function (a) {
        a.destroy()
    });
    this.G = null;
    this.o && (this.o.destroy(), this.o = null);
    this.A = 0;
    this.F = !1;
    this.k = {};
    this.K = {};
    DA.J.unload.call(this)
};
function GA(a, b) {
    for (var c = {}, d = 0; d < b.attributes.length; d++) {
        var e = b.attributes[d];
        c[e.name] = e.nodeValue
    }
    for (d = 0; d < b.childNodes.length; d++)
        if (e = b.childNodes[d], e.tagName) {
            var g;
            if (c[e.tagName])
                g = c[e.tagName];
            else if ("html_blob" == e.tagName || "data" == e.tagName) {
                0 < e.childNodes.length && (g = e.childNodes[0].nodeValue, c[e.tagName] = "string" == typeof g ? g.trim() : g);
                continue
            } else
                g = [], c[e.tagName] = g;
            e && "TEXT" == e.tagName ? 1 == e.childNodes.length && 3 == e.childNodes[0].nodeType ? g.push(e.childNodes[0].nodeValue) : g.push("") :
            e && g.push(GA(a, e))
        }
    return c
}

f.Eq = function (a, b) {
    if (this.A && !this.F && this.j.getVideoData().videoId == a) {
        this.A--;
        var c = b.responseXML ? b.responseXML.getElementsByTagName("annotations") : null;
        if (wj(b) && c) {
            HA(this, c[0]);
            N(this.j.Ja(), this.ua + "-loaded");
            0 == this.A && (this.F = !0);
            var c = [], d;
            for (d in this.k) {
                var e = this.k[d].annotation, g;
                if (e.k)
                    if (g = e.k, g.j.length)
                        if (g = g.j[0].k || g.j[0].j || g.j[0].o, !g || 2 > g.length)
                            g = null;
                        else {
                            var h = g.length - 1;
                            g = 0 >= g[0].k && 0 >= g[h].k ? null : {start: g[0].k, end: g[h].k}
                        }
                    else
                        g = null;
                else
                    g = null;
                if (h = g)
                    if (g = 1E3 * h.start,
                            h = 1E3 * h.end, 0 == g && (g++, h++), g == h && h++, !(h < g)) {
                        var k = {id: d};
                        "marker" == e.type && (k.style = "ytp-chapter-marker", k.tooltip = e.C, k.visible = !0);
                        e = new ws(g, h, k);
                        c.push(e)
                    }
            }
            Js(this, c)
        }
    }
};
function IA(a, b) {
    var c = JA(a, b);
    if (!c && "marker" != b.type)
        return null;
    Ry(b, function (a) {
        a = x(this.aC, this, b.id, a);
        this.subscribe("ivTrigger:" + b.id, a)
    }, a);
    return new ez(a.P, b, c)
}

function KA(a, b) {
    var c = a.C.N(), d = DA.j(), e = a.j.T(), g = null;
    switch (b.type) {
        case "branding":
            if (e.experiments.Kl && e.nb)
                break;
            c.appendChild(d);
            g = new ay(d, LA(a), b);
            break;
        case "promotion":
            e.experiments.F && "video" == b.style ? (c = qj(cy(b).value).v, d = gw(b.data.video_duration), c
        &&
            d && (a.H = {
                id: c,
                WK: d,
                ZK: "feature=endscreen",
                author: b.data.text_line_1,
                title: b.data.text_line_2,
                VK: 1
            }, a.En())
        ) :
            (c.appendChild(d), g = new Wy(d, LA(a), b))
    }
    g && g.pj();
    return g
}

f.En = function () {
    if (this.H) {
        var a = this.j.getVideoData().M;
        !a || 1 >= a.length || a[1].id == this.H.id || (vb(a, 1, 0, this.H), qb(a, a.length - 1))
    }
};
function MA(a, b) {
    if (!a.o) {
        var c = new Y(["div", "hid"]);
        a.o = new Mx(c.N(), LA(a));
        c.Y(a.C.N());
        a.o.pj()
    }
    (c = b && b.data && b.data.card_type) && Nx[c] && a.o.add(new Nx[c](b.id, b.data, b.jb))
}

function LA(a) {
    a.G || (a.G = new dy(new Hv(a), a.j.T(), a.j.getVideoData(), a.D, a.j, a.P));
    return a.G
}

function HA(a, b) {
    for (var c = b.getElementsByTagName("annotation"), d = 0; d < c.length; d++) {
        var e = GA(a, c[d]), g = null;
        try {
            g = My(e)
        } catch (h) {
        }
        g && (DA.A(g) ? (e = KA(a, g)) && (a.K[g.id] = e) : DA.o(g) ? MA(a, g) : (e = IA(a, g)) && (a.k[g.id] = e))
    }
    Ib(a.k, function (a) {
        var b = a.annotation;
        b.k && b.k.k && (b = this.k[b.k.k]) && (a.j.G = b.annotation)
    }, a)
}

f.zc = function (a) {
    DA.J.zc.call(this, a);
    a = a.getId();
    var b = this.k[a];
    b && !b.B && (b = b.annotation, "pause" == b.type ? NA(this, b) : (OA(this, a), ww(this.D, b.jb)))
};
f.Oc = function (a) {
    DA.J.Oc.call(this, a);
    PA(this, a.getId())
};
function NA(a, b) {
    if (a.R) {
        var c = Ny(b, function (a) {
            return "pause" == a.type && !!a.duration && !!a.duration.value
        });
        c && (a.M = !0, a.publish("command_pause"), a.I.start(1E3 * c.duration.value))
    }
}

function QA(a, b, c, d) {
    d ? OA(a, b, c) : PA(a, b, c)
}

function PA(a, b, c) {
    if (b = a.k[b])
        gz(b), c && c.k ? (a = x(a.pp, a, b), b
.
    k = new Jv(a, 2E3), b.k.start()
) :
    a.pp(b)
}

f.pp = function (a) {
    a && (a.hide(), RA(this, "shown", !1, a.annotation.id), this.bi(a.annotation, "hidden"))
};
function OA(a, b, c) {
    if (b = a.k[b])
        gz(b), c && c.A ? (a = x(a.Yr, a, b), b
.
    k = new Jv(a, 2E3), b.k.start()
) :
    a.Yr(b)
}

f.Yr = function (a) {
    a && (a.show(), RA(this, "shown", !0, a.annotation.id), this.bi(a.annotation, "shown"))
};
f.aC = function (a, b, c) {
    var d = this.k[a];
    if (d && b.value != c) {
        b.value = c;
        var e = !1;
        Ry(d.annotation, function (a) {
            e |= a.value
        });
        QA(this, a, b, e)
    }
};
f.Nz = function (a) {
    if (a && a.id) {
        var b = cy(a);
        if (b) {
            var c = x(this.bi, this, a, "click"), d = this.j.getVideoData();
            if ("new" == b.target || -1 != qw(b, d.videoId))
                c(), c = null;
            Aw(this.D, a.jb, c)
        }
    }
};
f.bi = function (a, b) {
    Qy(a, function (c) {
        if (c.trigger == b && "openUrl" == c.type) {
            var d = this.j.getVideoData(), e = qw(c.url, d.videoId);
            if (-1 != e)
                this.publish("command_seek", e), this.Pk();
            else if (d = rw(c.url, a.id, d.videoId, this.j.T()))
                this.pauseVideo(), window.open(d, uw(c.url))
        }
    }, this)
};
f.MA = function () {
    RA(this, "playerControlShow", !1)
};
f.IB = function () {
    RA(this, "playerControlShow", !0)
};
f.ZE = function (a) {
    RA(this, "rollOver", !0, a.id)
};
f.YE = function (a) {
    RA(this, "rollOver", !1, a.id)
};
f.jA = function (a) {
    if (a || a.id)
        this.k[a.id].B = !0, PA(this, a.id), a && (Bw(this.D, a.jb), this.bi(a, "close")), RA(this, "closed", !0, a.id)
};
f.Pk = function () {
    this.I.stop();
    this.M && (this.M = !1, this.publish("command_play"))
};
function JA(a, b) {
    if (SA(b)) {
        var c = b.D || Oy(b, function (a) {
                return "click" == a || "rollOut" == a || "rollOut" == a
            });
        return new wA(b, x(a.S.appendChild, a.S), a.j.T(), a.P, c)
    }
    return null
}

function SA(a) {
    if ("highlight" == a.type || "image" == a.type || "widget" == a.type)
        return !0;
    if ("text" == a.type)
        for (var b in Jy)
            if (a.style == Jy[b])
                return !0;
    return !1
}

function RA(a, b, c, d) {
    a.publish(dz(b, d), c, d)
}

function FA(a, b) {
    return x(function () {
        if (!this.ha()) {
            var a = Array.prototype.slice.call(arguments, 0);
            a.unshift(b);
            b = pa.apply(window, a);
            this.O.push(Qw(b, void 0))
        }
    }, a)
}

f.L = function () {
    for (var a = this.O, b = 0, c = a.length; b < c; b++)
        Sw(a[b]);
    this.O.length = 0;
    DA.J.L.call(this)
};
var TA = /^#(?:[0-9a-f]{3}){1,2}$/i, UA = "default monoSerif propSerif monoSans propSans casual cursive smallCaps".split(" "), VA = ["none", "raised", "depressed", "uniform", "dropShadow"], WA = ["sub", "inherit", "super"], XA = ["left", "right", "center"], YA = {
    id: 0,
    priority: 0,
    anchorPoint: 7,
    Hi: 50,
    yD: 80,
    Ud: 100,
    nd: 15,
    Fk: 100,
    isVisible: !0,
    textAlign: 2,
    Uf: 0,
    background: "#080808",
    color: "#fff",
    qo: 1,
    oD: 1,
    ww: 0,
    windowColor: "#000",
    aL: 0
}, ZA = {id: 98}, $A = {
    id: 99,
    priority: 1,
    anchorPoint: 0,
    Hi: 5,
    Ud: 5,
    nd: 2,
    Fk: 32,
    textAlign: 0
}, aB = ["en_CA", "en_US",
    "es_MX", "fr_CA"];
var bB = [{option: "#fff", message: "YTP_COLOR_WHITE"}, {
    option: "#ff0",
    message: "YTP_COLOR_YELLOW"
}, {option: "#0f0", message: "YTP_COLOR_GREEN"}, {option: "#0ff", message: "YTP_COLOR_CYAN"}, {
    option: "#00f",
    message: "YTP_COLOR_BLUE"
}, {option: "#f0f", message: "YTP_COLOR_MAGENTA"}, {option: "#f00", message: "YTP_COLOR_RED"}, {
    option: "#080808",
    message: "YTP_COLOR_BLACK"
}], cB = [{option: 0, text: "0%"}, {option: .25, text: "25%"}, {option: .5, text: "50%"}, {
    option: .75,
    text: "75%"
}, {option: 1, text: "100%"}], dB = [{option: .25, text: "25%"}, {
    option: .5,
    text: "50%"
}, {option: .75, text: "75%"}, {option: 1, text: "100%"}], eB = [{
    option: "fontFamily",
    message: "YTP_FONT_FAMILY",
    options: [{option: 1, message: "YTP_FONT_FAMILY_MONO_SERIF"}, {
        option: 2,
        message: "YTP_FONT_FAMILY_PROP_SERIF"
    }, {option: 3, message: "YTP_FONT_FAMILY_MONO_SANS"}, {
        option: 4,
        message: "YTP_FONT_FAMILY_PROP_SANS"
    }, {option: 5, message: "YTP_FONT_FAMILY_CASUAL"}, {option: 6, message: "YTP_FONT_FAMILY_CURSIVE"}, {
        option: 7,
        message: "YTP_FONT_FAMILY_SMALL_CAPS"
    }]
}, {option: "color", message: "YTP_FONT_COLOR", options: bB},
    {
        option: "fontSizeIncrement",
        message: "YTP_FONT_SIZE",
        options: [{option: -2, text: "50%"}, {option: -1, text: "75%"}, {option: 0, text: "100%"}, {
            option: 1,
            text: "150%"
        }, {option: 2, text: "200%"}, {option: 3, text: "300%"}, {option: 4, text: "400%"}]
    }, {option: "background", message: "YTP_BACKGROUND_COLOR", options: bB}, {
        option: "backgroundOpacity",
        message: "YTP_BACKGROUND_OPACITY",
        options: cB
    }, {option: "windowColor", message: "YTP_WINDOW_COLOR", options: bB}, {
        option: "windowOpacity",
        message: "YTP_WINDOW_OPACITY",
        options: cB
    }, {
        option: "charEdgeStyle",
        message: "YTP_CHAR_EDGE_STYLE",
        options: [{option: 0, message: "YTP_EDGE_STYLE_NONE"}, {
            option: 4,
            message: "YTP_EDGE_STYLE_DROP_SHADOW"
        }, {option: 1, message: "YTP_EDGE_STYLE_RAISED"}, {
            option: 2,
            message: "YTP_EDGE_STYLE_DEPRESSED"
        }, {option: 3, message: "YTP_EDGE_STYLE_OUTLINE"}]
    }, {option: "textOpacity", message: "YTP_FONT_OPACITY", options: dB}];
var fB;

function iB(a, b) {
    ea(b) && (b = b.join(" "));
    if ("" === b || void 0 == b) {
        var c;
        fB || (fB = {
            atomic: !1,
            autocomplete: "none",
            dropeffect: "none",
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: "vertical",
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: "none",
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        });
        c = fB;
        "pressed" in c ? a.setAttribute("aria-pressed", c.pressed) : a.removeAttribute("aria-pressed")
    } else
        a.setAttribute("aria-pressed", b)
}
;
function jB(a, b, c, d, e) {
    Qz.call(this, a, b, c, c);
    this.H = b;
    this.defaultTooltip = this.K = c;
    this.C = d || null;
    this.D = e || null;
    this.F = e || null;
    this.j = !1
}

inherit(jB, Qz);
jB.prototype.update = function () {
    Rz(this, this.j && this.C ? this.C : this.H);
    this.gb(this.j && this.D ? this.D : this.K);
    this.o = this.j && this.F ? this.F : this.defaultTooltip;
    P(this.element, "ytp-button-pressed", this.j)
};
function kB(a) {
    a.j = !0;
    iB(a.element, !0);
    a.update()
}

function lB(a) {
    a.j = !1;
    iB(a.element, !1);
    a.update()
}

function mB(a, b) {
    a.H = b;
    a.update()
}

jB.prototype.L = function () {
    this.F = this.D = this.C = null;
    jB.J.L.call(this)
};
function nB(a) {
    jB.call(this, a, "ytp-subtitles-button", Z(0, "YTP_SUBTITLES"), "ytp-subtitles-button-active");
    Sz(this, 6500);
    this.element.setAttribute("aria-haspopup", !0);
    this.element.id = "subtitles_button"
}

inherit(nB, jB);
function oB(a) {
    Y.call(this, a)
}

inherit(oB, Y);
oB.prototype.Ut = function () {
};
oB.prototype.focus = function () {
};
function pB(a, b, c, d) {
    Y.call(this, ["li", "ytp-subtitles-settings-dialog-list-option", "{{content}}"]);
    var e = b.text || (b.message ? Z(0, b.message) : ""), e = [new fv(["div", "ytp-subtitles-settings-dialog-list-text", e])];
    d && (d = new fv(["div", "ytp-subtitles-settings-dialog-list-swatch"]), d.N().style.background = b.option.toString(), e.unshift(d));
    c ? e.unshift(new fv(["div", "ytp-subtitles-settings-dialog-list-caret"])) : e.unshift(new fv(["div", "ytp-subtitles-settings-dialog-list-check"]));
    this.j = new Qz(a);
    S(this, this.j);
    this.j.ta(e);
    this.ta(this.j)
}

inherit(pB, Y);
pB.prototype.setEnabled = function (a) {
    P(this.j.N(), "ytp-subtitles-settings-dialog-list-selected", a)
};
function qB(a) {
    Y.call(this, ["div", ["ytp-subtitles-settings-dialog", "ytp-dialog", "html5-stop-propagation"], ["div", "ytp-dialog-body", ["div", "ytp-subtitles-settings-dialog-top-level", "{{top}}"], ["div", "ytp-subtitles-settings-dialog-sub-level", "{{sub}}"]], ["div", "ytp-dialog-buttons", "{{buttons}}"]]);
    this.A = a;
    this.k = null;
    var b = Z(0, "YTP_DONE"), c = new Qz(a, "ytp-dialog-button", b);
    S(this, c);
    c.ta(b);
    c.listen("click", pa(this.Vb, "cancel"), this);
    Sz(c, 1400);
    b = Z(0, "YTP_RESET");
    a = new Qz(a, "ytp-dialog-button", b);
    S(this,
        a);
    a.ta(b);
    N(a.N(), "ytp-dialog-button-left");
    a.listen("click", pa(this.Vb, "select"), this);
    Sz(a, 1300);
    this.o = {};
    this.j = {};
    this.template.update({top: rB(this, eB), buttons: [a, c]})
}

inherit(qB, oB);
function rB(a, b, c) {
    var d = new Y(["ul", "ytp-subtitles-settings-dialog-list"]), e, g = !1;
    n(c) ? (a.j = {}, e = a.j) : (a.o = {}, e = a.o, g = !0);
    for (var h = 0; h < b.length; h++) {
        var k = b[h], l = new pB(a.A, k, g, b == bB);
        g ? (l.listen("click", x(a.Zr, a, k.options, k.option)), Sz(l.j, 1100)) : c && (l.listen("click", x(a.$C, a, c, k.option)), Sz(l.j, 1200));
        e[k.option] = l;
        l.Y(d.N())
    }
    return d
}

f = qB.prototype;
f.Zr = function (a, b) {
    this.template.update({sub: rB(this, a, b)});
    sB(this, this.o, b);
    sB(this, this.j, this.k[b]);
    tB(this.template.j["ytp-subtitles-settings-dialog-sub-level"])
};
function tB(a) {
    (a = Dd("ytp-subtitles-settings-dialog-list-selected", a)) && a.focus()
}

f.focus = function () {
    tB(this.template.j["ytp-subtitles-settings-dialog-top-level"])
};
function sB(a, b, c) {
    Ib(b, function (a, b) {
        a.setEnabled(b == c)
    }, a)
}

f.setProperties = function (a) {
    this.k = a;
    (a = eB[0]) && a.options && this.Zr(a.options, a.option)
};
f.$C = function (a, b) {
    this.k && (this.k[a] = b, this.Vb("change"));
    sB(this, this.j, b);
    this.focus()
};
f.Ut = function () {
    var a = this.A.xb(), b = 2 * Math.floor(Math.min(560, Math.max(230, .65 * a.width)) / 2);
    this.N().style.width = b + "px";
    this.template.j["ytp-dialog-body"].style.height = a.height - 140 + "px"
};
f.L = function () {
    this.o = [];
    this.j = [];
    qB.J.L.call(this)
};
function uB(a, b, c) {
    Y.call(this, ["div", "ytp-drop-down", "{{content}}"]);
    this.o = !1;
    this.B = 0;
    this.F = this.D = null;
    this.A = new Hv(this);
    this.k = new Y(["div", "ytp-drop-down-menu", "{{content}}", {tabindex: -1}]);
    S(this, this.k);
    ov(this.k, "listbox");
    this.j = new Qz(a, "ytp-drop-down-label");
    S(this, this.j);
    this.j.listen("click", this.cG, this);
    this.C = new Y(["div", "ytp-drop-down-label-content", "{{content}}"]);
    S(this, this.C);
    this.j.ta([this.C, ["div", "ytp-drop-down-arrow"]]);
    this.ta([this.k, this.j]);
    n(b) && this.Qd(b);
    n(c) &&
    this.F != c && (this.k.ta(c), this.F = c, vB(this));
    vB(this)
}

inherit(uB, Y);
f = uB.prototype;
f.Qd = function (a) {
    this.D != a && (this.C.ta(a), this.D = a, vB(this))
};
f.ce = function () {
    this.o = !1;
    vB(this)
};
f.bG = function (a) {
    a.target && (Zd(this.k.N(), a.target) || Zd(this.j.N(), a.target)) || this.ce()
};
f.cG = function () {
    this.o = !this.o;
    vB(this);
    this.o && this.k.N().focus()
};
function wB(a, b) {
    b > a.B && (a.B = b, a.element.style.minWidth = a.B + "px")
}

f.focus = function () {
    this.j.N().focus()
};
function vB(a) {
    a.o ? (a.k.show(), a.A.listen(window, "blur", a.ce), a.A.listen(document, "click", a.bG)) : (a.k.hide(), a.A.removeAll());
    var b = Tg(a.j.N());
    a.k.N().style.bottom = b.height - 1 + "px";
    wB(a, b.width)
}
;
function xB(a, b) {
    Qz.call(this, a, "ytp-drop-down-menu-button");
    ov(this, "option");
    this.j = new Y(["div", "ytp-drop-down-menu-button-check"]);
    S(this, this.j);
    this.k = !!b
}

inherit(xB, Qz);
xB.prototype.ta = function (a) {
    xB.J.ta.call(this, [this.j, a])
};
xB.prototype.Ba = function (a) {
    P(this.element, "ytp-drop-down-menu-button-selected", a);
    this.k || P(this.element, "ytp-drop-down-menu-button-checked", a);
    this.element.setAttribute("aria-checked", a)
};
function yB(a, b) {
    P(a.element, "ytp-drop-down-menu-button-checked", b)
}
;
function zB(a, b, c, d) {
    Y.call(this, ["div", "ytp-drop-down-menu-content", {tabindex: "{{tabindex}}"}, "{{content}}"]);
    this.F = a;
    this.B = !!d;
    this.o = {};
    this.A = [];
    this.j = this.k = null;
    this.C = b;
    this.D = c
}

inherit(zB, Y);
function AB(a, b) {
    Db(a.A, b) || (Ib(a.o, function (a) {
        a.detach()
    }), a.A = [], b && D(b, function (a) {
        this.A.push(a);
        var b = BB(this, a);
        this.B && yB(b, a == this.j);
        b.Ba(a == this.k);
        b.Y(this.element)
    }, a))
}

zB.prototype.Ba = function (a) {
    null != this.k && BB(this, this.k).Ba(!1);
    null != a && BB(this, a).Ba(!0);
    this.k = a;
    this.B || (this.j = a)
};
zB.prototype.getSelected = function () {
    return this.k
};
function CB(a, b) {
    var c = BB(a, "translate");
    b ? c.disable() : c.enable()
}

function DB(a, b) {
    Ib(a.o, function (a) {
        Sz(a, b)
    })
}

function BB(a, b) {
    var c = a.o[b.toString()];
    if (c)
        return c.ta(a.C(b)), c;
    c = new xB(a.F, a.B);
    S(a, c);
    a.o[b.toString()] = c;
    c.ta(a.C(b));
    c.listen("click", x(a.D, a, b));
    return c
}
;
function EB(a, b, c, d, e, g) {
    Pz.call(this);
    this.K = b;
    this.M = c;
    this.I = d;
    this.P = e;
    this.H = g;
    this.k = {};
    this.k.off = Z(0, "YTP_LANGUAGE_OFF");
    this.k.translate = Z(0, "YTP_TRANSLATE_MENU_ITEM");
    this.k.contribute = Z(0, "YTP_CONTRIBUTE_MENU_ITEM");
    this.label = Z(0, "YTP_SUBTITLES");
    this.j = new zB(a, x(this.F, this), x(this.O, this));
    S(this, this.j);
    this.element = new uB(a, void 0, this.j);
    S(this, this.element);
    wB(this.element, 150);
    this.element.gb(this.label);
    this.priority = 1;
    this.B = !0;
    this.D = this.C = !1;
    FB(this, []);
    this.off()
}

inherit(EB, Pz);
EB.prototype.G = function () {
    this.I()
};
function FB(a, b) {
    for (var c = ["off"], d = 0; d < b.length; d++) {
        var e = b[d], g = e.toString();
        a.k[g] || (a.k[g] = At(e));
        c.push(g)
    }
    c.push("translate");
    a.D && c.push("contribute");
    AB(a.j, c);
    CB(a.j, !a.C);
    c = BB(a.j, "translate");
    P(c.element, "ytp-drop-down-menu-button-separated", !1);
    P(c.element, "ytp-drop-down-menu-button-separated-above", !0);
    c = 2500;
    DB(a.j, c++);
    c = c++;
    Sz(a.element.j, c)
}

function GB(a, b) {
    a.k[b] && (a.j.Ba(b), a.element.Qd(a.F(b)))
}

EB.prototype.off = function () {
    GB(this, "off")
};
EB.prototype.F = function (a) {
    return this.k[a]
};
EB.prototype.O = function (a) {
    this.element.ce();
    "off" == a ? this.K() : "translate" == a ? this.P() : "contribute" == a ? this.H() : this.M(a, !0)
};
function HB(a) {
    var b = ["div", ["ytp-dialog", "html5-stop-propagation"], ["div", "ytp-dialog-title", Z(0, "YTP_TRANSLATE_DIALOG_TITLE")], ["div", "ytp-dialog-body", "{{content}}"], ["div", "ytp-dialog-buttons", "{{buttons}}"]];
    Y.call(this, b);
    var c = Z(0, "YTP_DISMISS"), b = new Qz(a, "ytp-dialog-button", c);
    S(this, b);
    b.ta(c);
    b.listen("click", pa(this.Vb, "change"), this);
    Sz(b, 1400);
    var c = Z(0, "YTP_CANCEL"), d = new Qz(a, "ytp-dialog-button", c);
    S(this, d);
    d.ta(c);
    d.listen("click", pa(this.Vb, "cancel"), this);
    Sz(d, 1500);
    this.k = new zB(a,
        x(this.Zo, this), x(this.lF, this), !0);
    S(this, this.k);
    this.k.element.style.maxHeight = "100px";
    this.j = new uB(a, void 0, this.k);
    S(this, this.j);
    wB(this.j, 200);
    this.j.gb(Z(0, "YTP_TRANSLATE_DIALOG_TITLE"));
    this.o = null;
    this.template.update({content: this.j, buttons: [b, d]})
}

inherit(HB, oB);
f = HB.prototype;
f.Ba = function (a) {
    this.o = a;
    this.j.Qd(a ? this.Zo(a) : null)
};
f.getSelected = function () {
    return this.o
};
f.lF = function (a) {
    this.j.ce();
    this.Ba(a)
};
f.Zo = function (a) {
    return a.Ei ? a.languageName + " -- " + a.Ei : a.languageName
};
f.focus = function () {
    this.j.focus()
};
function IB(a) {
    jB.call(this, a, "ytp-settings-button", Z(0, "YTP_SETTINGS"), "ytp-settings-button-active");
    Sz(this, 6600);
    this.element.setAttribute("aria-haspopup", !0);
    this.element.id = "settings_button";
    this.k = new Y(["div", "{{content}}"]);
    S(this, this.k);
    this.ta(this.k);
    JB(this, "")
}

inherit(IB, jB);
function JB(a, b) {
    "highres" == b ? a.k.ta("ytp-settings-8k-quality-badge") : "hd2880" == b ? a.k.ta("ytp-settings-5k-quality-badge") : "hd2160" == b ? a.k.ta("ytp-settings-4k-quality-badge") : -1 != b.indexOf("hd") ? a.k.ta("ytp-settings-hd-quality-badge") : a.k.ta("")
}
;
function KB(a) {
    this.anchorPoint = 7;
    this.Hi = 50;
    this.Ud = 100;
    this.yD = 80;
    this.Uf = 0;
    this.textAlign = 2;
    this.backgroundColor = "#080808";
    this.color = "#fff";
    this.oD = this.qo = 1;
    this.nd = 15;
    this.Fk = 32;
    this.isVisible = !0;
    this.j = 0;
    this.bold = !1;
    this.offset = 1;
    this.ww = 3;
    a = a || YA;
    qa(this, a)
}
;
function LB(a, b) {
    this.id = a;
    this.za = new KB(b);
    var c = "caption-window";
    0 == this.id && (c = "standard-caption-window");
    this.Fa = I("div", {id: "caption-window-" + this.id, "class": c});
    this.Qb = I("span", {"class": "captions-text", style: "visibility: hidden"});
    this.Qb.innerHTML = "C";
    this.Oa = I("span", {"class": "captions-text", tabindex: 7E3, "aria-live": "assertive"});
    this.hh = I("div", {"class": "caption-window-transform"});
    this.hh.appendChild(this.Oa);
    this.Fa.appendChild(this.hh);
    this.j = 1
}

LB.prototype.id = 0;
f = LB.prototype;
f.za = null;
f.rg = "";
f.tc = null;
f.Fa = null;
f.hh = null;
f.Oa = null;
f.Qb = null;
f.type = 0;
f.qd = function (a, b) {
    a && qa(this.za, a);
    var c = this.za.charEdgeStyle, d = this.za.textOpacity, e = "";
    if (0 != c) {
        var g = "rgba(34, 34, 34, " + d + ")", h = "rgba(204, 204, 204, " + d + ")";
        this.za.charEdgeColor && (h = g = this.za.charEdgeColor);
        switch (c) {
            case 4:
                e = "2px 2px 3px " + g + ", 2px 2px 4px " + g + ", 2px 2px 5px " + g;
                break;
            case 1:
                e = "1px 1px " + g + ", 2px 2px " + g + ", 3px 3px " + g;
                break;
            case 2:
                e = "1px 1px " + h + ", 0 1px " + h + ", -1px -1px " + g + ", 0 -1px " + g;
                break;
            case 3:
                e = "0 0 4px " + g + ", 0 0 4px " + g + ", 0 0 4px " + g + ", 0 0 4px " + g
        }
    }
    c = this.za.fontFamily;
    g = "";
    switch (c) {
        case 1:
            g = '"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';
            break;
        case 2:
            g = '"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif';
            break;
        case 3:
            g = '"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';
            break;
        case 5:
            g = '"Comic Sans MS", Impact, Handlee, fantasy';
            break;
        case 6:
            g = '"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';
            break;
        case 7:
            g = '"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif';
            break;
        case 0:
        case 4:
            g = '"Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif'
    }
    var k = Vx(this.za.color), h = Vx(this.za.background), k = "rgba(" + k[0] + "," + k[1] + "," + k[2] + "," + d + ")", d = this.za.offset || 1;
    Bg(this.Oa, {
        color: k,
        fill: k,
        "background-color": "rgba(" + h[0] + "," + h[1] + "," + h[2] + "," + this.za.backgroundOpacity + ")",
        "text-shadow": e,
        "font-variant": 7 == c ? "small-caps" : "",
        "font-family": g,
        "font-weight": this.za.bold ? "bold" : "",
        "font-style": this.za.italic ? "italic" : "",
        "text-decoration": this.za.underline ?
            "underline" : "",
        "vertical-align": WA[d]
    });
    b && (this.j = b.height / 360);
    e = Vx(this.za.windowColor);
    c = this.za.windowOpacity;
    g = this.za.fontSizeIncrement || 0;
    1 != d && (g *= .8);
    Bg(this.hh, {
        "background-color": "rgba(" + e[0] + "," + e[1] + "," + e[2] + "," + c + ")",
        "font-size": Math.round(16 * (1 + .25 * g) * this.j) + "px"
    })
};
f.ji = function () {
    var a;
    this.Qb.style.fontFamily = this.Oa.style.fontFamily;
    this.Fa.appendChild(this.Qb);
    a = this.Qb.offsetHeight;
    this.Fa.removeChild(this.Qb);
    return a
};
f.Ke = function () {
    this.Oa && (0 != this.id && (Sg(this.Fa, "100%"), Sg(this.Fa, this.Oa.offsetWidth + 1)), MB(this), Lw(this.Fa, this.za.isVisible))
};
function MB(a) {
    Hg(a.Fa, a.za.Hi + "%", a.za.Ud + "%");
    for (var b = 0; 8 >= b; b++)
        lh(a.Fa, "anchor-point-" + b);
    N(a.Fa, "anchor-point-" + a.za.anchorPoint)
}

f.Tr = function (a) {
    var b = [];
    D(a, function (a) {
        a.o ? b[b.length - 1] += a.j : b.push(a.j)
    });
    if (a.length) {
        var c = a[a.length - 1].A;
        c && this.qd(NB(c))
    }
    this.Rd(b.join("\n"));
    this.tc = a
};
f.Rd = function (a) {
    this.rg = a = OB(a);
    this.Oa.innerHTML = this.rg;
    this.Fa.style.textAlign = XA[this.za.textAlign];
    1 == this.za.Uf ? this.Oa.setAttribute("dir", "rtl") : this.Oa.removeAttribute("dir");
    this.Ke()
};
f.toString = function () {
    var a = "Caption window (" + this.id + "): " + this.rg, b;
    for (b in this.za)
        a += b + " " + this.za[b] + " | ";
    return a
};
function OB(a) {
    a = a.split("\n");
    for (var b = 0, c = a.length; b < c; b++)
        a[b] = a[b] ? "&nbsp;" + a[b] + "&nbsp;" : "";
    return a.join("<br>")
}

f.Uh = function () {
    this.tc = [];
    this.Rd("")
};
function PB(a) {
    if ("undefined" != typeof DOMParser)
        return (new DOMParser).parseFromString(a, "application/xml");
    if ("undefined" != typeof ActiveXObject) {
        var b = QB();
        b.loadXML(a);
        return b
    }
    throw Error("Your browser does not support loading xml documents");
}

function RB(a) {
    if ("undefined" != typeof XMLSerializer)
        return (new XMLSerializer).serializeToString(a);
    if (a = a.xml)
        return a;
    throw Error("Your browser does not support serializing XML documents");
}

function SB(a, b) {
    if ("undefined" != typeof a.selectSingleNode) {
        var c = zd(a);
        "undefined" != typeof c.setProperty && c.setProperty("SelectionLanguage", "XPath");
        return a.selectSingleNode(b)
    }
    if (document.implementation.hasFeature("XPath", "3.0")) {
        var c = zd(a), d = c.createNSResolver(c.documentElement);
        return c.evaluate(b, a, d, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
    }
    return null
}

function TB(a) {
    if ("undefined" != typeof a.selectNodes) {
        var b = zd(a);
        "undefined" != typeof b.setProperty && b.setProperty("SelectionLanguage", "XPath");
        return a.selectNodes('vmap:Extensions/vmap:Extension[@type = "YTBreakTime"]/*[name() = "yt:BreakTime"]')
    }
    if (document.implementation.hasFeature("XPath", "3.0")) {
        var b = zd(a), c = b.createNSResolver(b.documentElement);
        a = b.evaluate('vmap:Extensions/vmap:Extension[@type = "YTBreakTime"]/*[name() = "yt:BreakTime"]', a, c, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        for (var b =
            [], c = a.snapshotLength, d = 0; d < c; d++)
            b.push(a.snapshotItem(d));
        return b
    }
    return []
}

function QB() {
    var a = new ActiveXObject("MSXML2.DOMDocument");
    if (a) {
        a.resolveExternals = !1;
        a.validateOnParse = !1;
        try {
            a.setProperty("ProhibitDTD", !0), a.setProperty("MaxXMLSize", 2048), a.setProperty("MaxElementDepth", 256)
        } catch (b) {
        }
    }
    return a
}
;
function UB() {
    this.k = [];
    this.j = []
}
;
function VB(a, b, c, d, e, g, h) {
    ws.call(this, a, a + b, {priority: c});
    this.k = d;
    this.j = e;
    this.o = g || !1;
    this.A = h || null
}

inherit(VB, ws);
VB.prototype.toString = function () {
    return VB.J.toString.call(this)
};
function WB(a) {
    var b = a.firstChild && a.firstChild.nodeValue || "", c = a.getAttribute("t"), c = c ? parseInt(c, 10) : 1E3 * parseFloat(a.getAttribute("start") || 0), d = a.getAttribute("d"), d = d ? parseFloat(d) : 1E3 * parseFloat(a.getAttribute("dur") || 0), e = parseInt(a.getAttribute("w"), 10) || 0;
    a = !!a.getAttribute("append");
    return new VB(c, d, a ? 6 : 5, e, b, a)
}

function XB(a, b, c, d, e, g, h) {
    ws.call(this, a, a + b, {priority: c});
    this.id = d;
    this.params = e || {};
    this.o = g || null;
    this.A = h || null;
    this.j = "";
    this.k = !1;
    YB(this)
}

inherit(XB, ws);
XB.prototype.B = !1;
function ZB(a) {
    return a.params.zz ? a.params.zz : a.params.pD ? 2 : a.k ? 1 : 0
}

function $B() {
    return new XB(0, 2147483647, 0, 0, YA)
}

function YB(a) {
    a.o && qa(a.params, NB(a.o));
    a.A && qa(a.params, NB(a.A))
}
;
function aC(a) {
    UB.call(this);
    this.j.push($B());
    a = a.firstChild.childNodes;
    for (var b = 0, c = a.length; b < c; b++) {
        var d = WB(a[b]);
        this.k.push(d)
    }
}

inherit(aC, UB);
function bC(a) {
    UB.call(this);
    this.o = {};
    for (a = a.firstChild.firstChild; a;) {
        switch (a.tagName) {
            case "window":
                var b = a, c = parseInt(b.getAttribute("id"), 10);
                t: {
                    var d = b, e = this.o[c];
                    if (d.getAttribute("t") || d.getAttribute("start")) {
                        b = d.getAttribute("start") ? 1E3 * parseFloat(d.getAttribute("start")) : parseInt(d.getAttribute("t"), 10);
                        e && (e.end >= b ? e.end = b : e = null);
                        switch (d.getAttribute("op")) {
                            case "kill":
                                b = null;
                                break t;
                            case "define":
                                e = null
                        }
                        e ? e.B = !0 : e = $B();
                        var g = {};
                        qa(g, e ? e.params : YA);
                        d.getAttribute("id") && (g.id = d.getAttribute("id"));
                        d.getAttribute("op") && (g.XK = d.getAttribute("op"));
                        d.getAttribute("rc") && (g.nd = parseInt(d.getAttribute("rc"), 10));
                        d.getAttribute("cc") && (g.Fk = parseInt(d.getAttribute("cc"), 10));
                        d.getAttribute("ap") && (e = parseInt(d.getAttribute("ap"), 10), g.anchorPoint = 0 > e || 8 < e ? 7 : e);
                        d.getAttribute("ah") && (g.Hi = parseInt(d.getAttribute("ah"), 10));
                        d.getAttribute("av") && (g.Ud = parseInt(d.getAttribute("av"), 10));
                        d.getAttribute("id") && (g.id = parseInt(d.getAttribute("id"), 10) || 0);
                        d.getAttribute("vs") && (g.isVisible = Boolean(d.getAttribute("vs")));
                        d.getAttribute("ju") && (g.textAlign = parseInt(d.getAttribute("ju"), 10));
                        d.getAttribute("pd") && (g.Uf = 1, 0 == parseInt(d.getAttribute("pd"), 10) && (g.Uf = 0));
                        d.getAttribute("bc") && (g.backgroundColor = parseInt(d.getAttribute("bc"), 16));
                        d.getAttribute("bo") && (g.qo = parseInt(d.getAttribute("bo"), 10) / 100);
                        d.getAttribute("fc") && (g.color = parseInt(d.getAttribute("fc"), 16));
                        d.getAttribute("sd") && (g.pD = parseInt(d.getAttribute("sd"), 10));
                        e = parseInt(d.getAttribute("d"), 10) || 1E3 * parseFloat(d.getAttribute("dur")) || 2147483647;
                        d = parseInt(d.getAttribute("id"), 10) || 0;
                        b = new XB(b, e, 0, d, g)
                    } else
                        b = null
                }
                this.o[c] = b;
                this.j.push(b);
                break;
            case "text":
                c = WB(a), this.k.push(c), b = c.k, this.o[b] && (b = this.o[b], c = c.j, "" != b.j && (b.k = !0), b.j += c)
        }
        a = a.nextSibling
    }
}

inherit(bC, UB);
function cC(a) {
    this.parent = a || null;
    this.j = {}
}

function dC(a, b, c) {
    var d = a.j[b];
    if (void 0 != d)
        return d;
    if (a.parent && (void 0 == c || c))
        return dC(a.parent, b)
}

function eC(a, b, c) {
    void 0 != c && (a.j[b] = c)
}

function fC(a, b, c) {
    void 0 != c && (a.j[b] = c)
}

function NB(a) {
    var b = a.parent ? NB(a.parent) : {};
    qa(b, a.j);
    return b
}
;
function gC(a) {
    UB.call(this);
    var b = {Wi: {}, cn: {}, fn: {}}, c, d;
    a = a.firstChild.childNodes;
    for (var e = 0; e < a.length; e++) {
        var g = a[e];
        switch (g.tagName) {
            case "head":
                c = g;
                break;
            case "body":
                d = g
        }
    }
    if (c)
        for (c = c.childNodes, a = 0; a < c.length; a++)
            switch (e = c[a], e.tagName) {
                case "pen":
                    var g = b, h = hC(e, "p"), k = void 0;
                    h && g.Wi[h] && (k = g.Wi[h]);
                    g = new cC(k);
                    eC(g, "id", hC(e, "id"));
                    h = iC(e, "b");
                    void 0 != h && (g.j.bold = h);
                    h = iC(e, "i");
                    void 0 != h && (g.j.italic = h);
                    h = iC(e, "u");
                    void 0 != h && (g.j.underline = h);
                    eC(g, "charEdgeStyle", jC(e, "et"));
                    eC(g, "offset",
                        jC(e, "of"));
                    eC(g, "textType", jC(e, "tt"));
                    fC(g, "background", kC(e, "bc"));
                    fC(g, "charEdgeColor", kC(e, "ec"));
                    fC(g, "color", kC(e, "fc"));
                    h = jC(e, "fs");
                    void 0 != h && 0 != h && eC(g, "fontFamily", h);
                    h = hC(e, "sz");
                    void 0 != h && eC(g, "fontSizeIncrement", h / 100 - 1);
                    h = hC(e, "bo");
                    void 0 != h && eC(g, "backgroundOpacity", h / 255);
                    e = hC(e, "fo");
                    void 0 != e && eC(g, "textOpacity", e / 255);
                    e = dC(g, "id", !1);
                    b.Wi[e] = g;
                    break;
                case "ws":
                    g = lC(b, e);
                    e = dC(g, "id", !1);
                    b.fn[e] = g;
                    break;
                case "wp":
                    g = mC(b, e), e = dC(g, "id", !1), b.cn[e] = g
            }
    if (d)
        for (c = {}, a = -1, d = d.childNodes,
                 e = 0; e < d.length; e++)
            switch (g = d[e], g.tagName) {
                case "w":
                    k = nC(b, g);
                    if (g = c[k.id])
                        g.end = k.start;
                    c[k.id] = k;
                    this.j.push(k);
                    break;
                case "p":
                    var h = b, l = g, k = hC(l, "t") || 0, p = hC(l, "d") || 0, r = l.textContent || "", u = hC(l, "w") || 0, C = !!iC(l, "a"), V = C ? 6 : 5, l = hC(l, "p"), h = new VB(k, p, V, u, r, C, l ? h.Wi[l] : null), k = c[h.k];
                    k || (k = nC(b, g), k.id = a--, h.k = k.id, this.j.push(k));
                    g = k;
                    k = h.j;
                    "" != g.j && (g.k = !0);
                    g.j += k;
                    this.k.push(h)
            }
}

inherit(gC, UB);
function hC(a, b) {
    var c = a.getAttribute(b);
    if (null != c)
        return parseFloat(c)
}

function iC(a, b) {
    var c = a.getAttribute(b);
    if (null != c)
        return "1" == c
}

function jC(a, b) {
    var c = hC(a, b);
    if (void 0 != c)
        return c
}

function kC(a, b) {
    var c = a.getAttribute(b);
    if (null != c)
        return TA.test(c), c
}

function lC(a, b) {
    var c = hC(b, "ws"), d;
    c && a.fn[c] && (d = a.fn[c]);
    c = new cC(d);
    eC(c, "id", hC(b, "id"));
    eC(c, "modeHint", jC(b, "mh"));
    eC(c, "textAlign", hC(b, "ju"));
    eC(c, "textPrintDirection", jC(b, "pd"));
    eC(c, "textScrollDirection", jC(b, "sd"));
    eC(c, "windowBorderType", jC(b, "et"));
    fC(c, "windowBorderColor", kC(b, "wbc"));
    fC(c, "windowColor", kC(b, "wfc"));
    d = hC(b, "wfo");
    void 0 != d && eC(c, "windowOpacity", d / 255);
    return c
}

function mC(a, b) {
    var c = hC(b, "wp"), d;
    c && a.cn[c] && (d = a.cn[c]);
    c = new cC(d);
    eC(c, "anchorPoint", jC(b, "ap"));
    eC(c, "colCount", hC(b, "cc"));
    eC(c, "id", hC(b, "id"));
    eC(c, "leftPercentage", hC(b, "ah"));
    eC(c, "rowCount", hC(b, "rc"));
    eC(c, "topPercentage", hC(b, "av"));
    return c
}

function nC(a, b) {
    var c = hC(b, "id") || 0, d;
    d = hC(b, "t");
    var e = hC(b, "d") || 2147483647, g = mC(a, b), h = lC(a, b);
    return new XB(d, e, 0, c, null, g, h)
}
;
function oC(a, b) {
    UB.call(this);
    this.j.push($B());
    for (var c = a.split(pC), d = 1; d < c.length; d++) {
        var e;
        e = c[d];
        var g = b;
        if ("" == e || 0 == e.search(qC))
            e = null;
        else {
            var h = e.split(rC), k = 0, l = h[k++].match(sC);
            l || (l = h[k++].match(sC));
            l ? (e = tC(l[1], g) || 0, g = tC(l[3], g) || 0, h = h.slice(k).join("\n"), e = new VB(e, g - e, 5, 0, h)):e = null
        }
        e && this.k.push(e)
    }
}

inherit(oC, UB);
var qC = /NOTE/, pC = /(?:\r\n|\r|\n){2,}/, rC = /\r\n|\r|\n/, sC = /(([\d]{2}:)?[\d]{2}:[\d]{2}\.[\d]{3})[\t ]+--\x3e[\t ]+(([\d]{2}:)?[\d]{2}:[\d]{2}\.[\d]{3})/;

function tC(a, b) {
    for (var c = a.split(":"), d = 0, e = 0; e < c.length; e++)
        d = 60 * d + parseFloat(c[e]);
    return 1E3 * d + b
}
;
function uC(a, b) {
    this.j = [];
    this.k = [];
    var c;
    c = a ? "WEBVTT" == a.substring(0, 6) ? new oC(a, b || 0) : (c = PB(a)) && c.firstChild ? "timedtext" == c.firstChild.tagName ? 3 == parseInt(c.firstChild.getAttribute("format"), 10) ? new gC(c) : new bC(c) : new aC(c) : null : null;
    c && (this.k = c.j, this.j = c.k)
}
;
function vC() {
    this.o = [];
    this.j = [];
    this.k = -1
}

function wC(a, b) {
    return b ? a.j.concat(a.o) : a.j
}

function xC(a, b) {
    switch (b.A) {
        case "asr":
            return yC(b, a.o);
        default:
            if (b.isDefault || 0 > a.k)
                a.k = a.j.length;
            return yC(b, a.j)
    }
}

function yC(a, b) {
    return F(b, x(a.equals, a)) ? !1 : (b.push(a), !0)
}

function zC(a, b) {
    var c = jb(a.j, x(b.equals, b));
    -1 != c && (a.k = c)
}
;
function AC(a) {
    this.Qp = !!a;
    this.k = new vC;
    this.A = []
}

inherit(AC, R);
function BC(a, b) {
    return F(wC(a.k, !0), function (a) {
        return a.toString() == b
    })
}

f = AC.prototype;
f.Yo = function (a) {
    var b = this.k.k, c = wC(this.k, !0);
    a && 0 > b && 0 < c.length && (b = 0);
    return 0 > b ? null : c[b]
};
f.Yc = function () {
    return null
};
f.seek = function () {
};
f.Vm = function () {
};
f.L = function () {
    AC.J.L.call(this);
    this.Vm()
};
function CC(a) {
    AC.call(this, a.Rh);
    this.o = null;
    this.A = a.od
}

inherit(CC, AC);
f = CC.prototype;
f.Eo = function () {
    for (var a = [], b = wC(this.k, void 0), c = 0; c < b.length; c++) {
        var d = b[c], e = {kind: "subtitles", label: d.o, srclang: d.k, src: DC(d)};
        d.isDefault && (e["default"] = 1);
        a.push(I("track", e))
    }
    return a
};
f.Xl = function (a, b) {
    var c = DC(a), d = x(function (c) {
        this.j = null;
        c = new uC(c.responseText);
        b(c, a)
    }, this);
    this.j && this.j.abort();
    this.j = Bj(c, {format: "RAW", fb: d, withCredentials: !0});
    this.o && this.o.di != a && (this.o.Lk = a)
};
f.Yl = function (a, b, c, d) {
    if (this.o = d || null)
        for (b = 0; b < this.o.captionTracks.length; b++)
            xC(this.k, this.o.captionTracks[b]);
    a()
};
function DC(a) {
    return a.j ? tj(a.D, {tlang: a.j.languageCode}) : a.D
}

f.Yc = function () {
    return this.o ? this.o.di : null
};
f.Yo = function () {
    return this.o ? this.o.Lk : null
};
f.L = function () {
    this.j && this.j.abort();
    CC.J.L.call(this)
};
function EC() {
    this.F = 1;
    this.C = 20971520;
    this.B = 8388608;
    this.j = 5242880;
    this.ra = NaN;
    this.H = 2;
    this.P = 25;
    this.D = 2097152;
    this.o = !1;
    this.k = 1800;
    this.A = Dt.auto;
    this.M = !0;
    this.liveChunkReadahead = 3;
    this.K = $r("xboxone");
    this.G = 0;
    this.X = this.O = this.R = this.S = this.I = !1
}
;
function FC() {
    this.ia = []
}

FC.prototype.contains = function (a) {
    a = yb(this.ia, a);
    return 0 <= a || 0 > a && 1 == (-a - 1) % 2
};
FC.prototype.length = function () {
    return this.ia.length / 2
};
function GC(a, b) {
    R.call(this);
    this.$ = b;
    this.D = new FC;
    this.A = !0;
    this.F = this.j = this.B = this.C = this.k = null;
    this.o = 0
}

inherit(GC, R);
GC.prototype.L = function () {
    Rf(this.o);
    this.o = 0;
    this.A = !0;
    this.j && this.j.abort()
};
GC.prototype.resume = function () {
    this.A = !1;
    Rf(this.o);
    this.seek(this.$.getCurrentTime());
    HC(this)
};
GC.prototype.seek = function (a) {
    this.k = bb(this.F.ki(a).j)
};
function IC(a, b) {
    a.C = b
}

function JC(a) {
    var b;
    if (b = !a.A && null !== a.k)
        b = a.k, b = b.j.rh(b);
    return b && !a.j && !(a.k && 30 < a.k.startTime - a.$.getCurrentTime())
}

function KC(a) {
    var b;
    b = a.k;
    b = LC(b.j, b);
    if (!a.D.contains(b.j[0].A)) {
        var c = MC(NC(b));
        a.j = Bj(c, {format: "RAW", $b: x(a.G, a), withCredentials: !0});
        a.B = b;
        var c = a.D, d = a.B.j[0].A, e = yb(c.ia, d);
        0 <= e || 0 > e && 1 == (-e - 1) % 2 || (e = -e - 1, 0 < e && 1 == d - c.ia[e - 1] && e < c.ia.length && 1 == c.ia[e] - d ? (qb(c.ia, e), qb(c.ia, e - 1)) : 0 < e && 1 == d - c.ia[e - 1] ? c.ia[e - 1] = d : e < c.ia.length && 1 == c.ia[e] - d ? c.ia[e] = d : (vb(c.ia, e, 0, d), vb(c.ia, e + 1, 0, d)))
    }
    a.k = bb(b.j)
}

GC.prototype.G = function (a) {
    null == a.responseText || 400 <= a.status || this.A || null === this.C || (a = new uC(a.responseText, 1E3 * this.B.j[0].startTime), this.C(a));
    this.j = this.B = null
};
function HC(a) {
    a.o = Qf(x(function () {
        JC(this) && KC(this)
    }, a), 1E3);
    JC(a) && KC(a)
}
;
function OC(a, b) {
    AC.call(this);
    this.o = a;
    this.j = new GC(new EC, b)
}

inherit(OC, AC);
f = OC.prototype;
f.Xl = function (a, b) {
    IC(this.j, function (c) {
        b(c, a)
    });
    this.j.F = this.o.j[a.k];
    this.j.resume()
};
f.Yl = function (a) {
    xC(this.k, new xt({
        format: 1,
        languageCode: "en",
        languageName: "English",
        name: "",
        is_servable: !0,
        is_default: !0,
        is_translateable: !1
    }));
    a()
};
f.seek = function (a) {
    this.j.seek(a)
};
f.Vm = function () {
    var a = this.j;
    Rf(a.o);
    a.o = 0;
    a.A = !0
};
f.L = function () {
    this.j.dispose();
    OC.J.L.call(this)
};
function PC(a, b) {
    LB.call(this, a, b);
    this.Oa.style.display = "block";
    this.Oa.style.padding = "0";
    this.dc = [];
    var c = this.Oa;
    lh(c, "captions-text");
    N(c, "caption-painton-text-rows")
}

inherit(PC, LB);
f = PC.prototype;
f.type = 1;
f.vt = "";
f.Sm = "";
f.bh = !1;
f.Pb = null;
f.dc = null;
f.ji = function () {
    return this.dc[0] ? this.dc[0].offsetHeight : 0
};
function QC(a) {
    return a.dc.reduce(function (a, c) {
        return Math.max(a, c.offsetWidth)
    }, 0)
}

f.Ke = function () {
    0 != this.id && (Sg(this.Fa, "100%"), Sg(this.Fa, this.bh ? QC(this) : this.Pb.width));
    var a = Math.round(this.za.nd * this.ji());
    this.Fa.style.maxHeight = a + "px";
    MB(this);
    Lw(this.Fa, this.za.isVisible)
};
f.Rd = function (a) {
    this.Uh();
    a = OB(a);
    this.bh || (this.rg = a);
    a = a.split("<br>");
    for (var b = 0, c = a.length; b < c; b++)
        if (a[b]) {
            var d = I("div", {"class": "caption-row-holder"}), e = I("span", {"class": "caption-row captions-text"});
            e.style.backgroundColor = this.Sm;
            d.appendChild(e);
            e.innerHTML = a[b];
            this.bh || (this.Oa.style.height = this.Pb.height + "px", this.Oa.style.width = this.Pb.width + "px", d.style.position = "absolute", d.style.top = this.Pb.Ir[b] + "px", d.style.left = this.Pb.Hr[b] + "px");
            this.Oa.appendChild(d);
            this.dc.push(e)
        }
    this.Ke()
};
f.Uh = function () {
    for (var a = 0, b = this.dc.length; a < b; a++) {
        var c = ke(this.dc[a], "caption-row-holder");
        Sd(c)
    }
    this.dc = []
};
f.qd = function (a) {
    PC.J.qd.call(this, a);
    this.Sm = this.Oa.style.backgroundColor;
    this.Oa.style.backgroundColor = "";
    a = 0;
    for (var b = this.dc.length; a < b; a++)
        this.dc[a].style.backgroundColor = this.Sm
};
function RC(a, b) {
    LB.call(this, a, b);
    this.tc = [];
    this.Cd = [];
    this.Nb = [];
    this.Pf = new en(433);
    this.Pf.stop();
    Q(this.Pf, "tick", x(this.zB, this))
}

inherit(RC, LB);
f = RC.prototype;
f.type = 2;
f.uz = 32;
f.Nb = null;
f.Bd = 0;
f.Cd = null;
f.Pf = null;
f.Ke = function () {
    Sg(this.Fa, "100%");
    var a = this.Fa.offsetWidth, a = Math.min(SC(this), a);
    Sg(this.Fa, a + "px");
    Sg(this.hh, "100%");
    this.Oa.style.whiteSpace = "nowrap";
    MB(this);
    Lw(this.Fa, this.za.isVisible)
};
f.Tr = function (a) {
    var b = a.length;
    if (0 >= b)
        this.Uh();
    else {
        for (var c = 0; c < b && 0 <= this.tc.indexOf(a[c]);)
            c++;
        this.tc = this.tc.concat(a.slice(c));
        TC(this)
    }
};
f.Uh = function () {
    this.tc = [];
    this.Nb = [];
    this.Bd = 0;
    this.Nb = [];
    this.Cd = [];
    UC(this)
};
function TC(a) {
    if (!VC(a))
        if (a.Bd >= a.tc.length)
            UC(a);
        else {
            var b = a.Nb.length - 1;
            0 > b && (a.Cd.push(0), a.Bd = 0, a.Nb.push(""), b = 0);
            for (var c = a.tc.length, d = a.Bd; d < c; d++) {
                var e = a.tc[d];
                if ("\n" == e.j) {
                    a.Bd++;
                    a.Cd[b]++;
                    break
                }
                if (e.o || 0 == a.Nb[b].length)
                    a.Nb[b] += e.j, a.Bd++, a.Cd[b]++;
                else
                    break
            }
            UC(a);
            d < c && !VC(a) && (b = a.ji(), N(a.Oa, "caption-rollup"), a.Fa.style.overflow = "hidden", a.Oa.style.top = -b + "px", a.Pf.start())
        }
}

function VC(a) {
    return a.Pf.enabled || jh(a.Oa, "caption-rollup")
}

f.zB = function () {
    this.Fa.style.overflow = "visible";
    this.Oa.style.top = 0;
    this.Pf.stop();
    lh(this.Oa, "caption-rollup");
    this.Nb.push("");
    this.Cd.push(0);
    TC(this)
};
function UC(a) {
    if (!VC(a)) {
        for (; a.Nb.length < a.za.nd;)
            a.Nb.unshift(""), a.Cd.unshift(0);
        for (; a.Nb.length > a.za.nd;) {
            a.Nb.shift();
            var b = a.Cd.shift();
            0 < b && (a.Bd -= b, a.tc.splice(0, b))
        }
        a.Rd(a.Nb.join("\n"))
    }
}

function SC(a) {
    a.Qb.style.fontFamily = a.Oa.style.fontFamily;
    a.Qb.style.fontSize = a.Oa.style.fontSize;
    a.Oa.appendChild(a.Qb);
    a.Qb.innerHTML = "\u2014";
    var b = a.Qb.offsetWidth;
    a.Qb.innerHTML = "&nbsp;";
    b = 2 * a.Qb.offsetWidth + b * a.uz;
    a.Oa.removeChild(a.Qb);
    return b
}
;
function WC(a, b, c, d) {
    AC.call(this, d);
    c || (c = qj(a).hl || "", c = c.split("_").join("-"));
    this.o = tj(a, {hl: c});
    this.B = b;
    this.C = {};
    this.j = null
}

inherit(WC, AC);
WC.prototype.Eo = function () {
    for (var a = [], b = wC(this.k, void 0), c = 0; c < b.length; c++) {
        var d = b[c], e = XC(this, d), e = {kind: "subtitles", label: d.o, srclang: d.k, src: e};
        d.isDefault && (e["default"] = 1);
        a.push(I("track", e))
    }
    return a
};
WC.prototype.Xl = function (a, b) {
    var c = XC(this, a), d = x(function (c) {
        this.j = null;
        c = new uC(c.responseText);
        b(c, a)
    }, this);
    this.j && this.j.abort();
    this.j = Bj(c, {format: "RAW", fb: d, withCredentials: !0});
    zC(this.k, a)
};
WC.prototype.Yl = function (a, b, c) {
    var d = this.o;
    b = {type: "list", tlangs: 1, v: this.B, fmts: Number(b || !1), vssids: 1};
    this.Qp && (b.asrs = 1);
    d = tj(d, b);
    b = x(function (b) {
        this.j = null;
        if ((b = b.responseXML) && b.firstChild) {
            for (var d = this.k, h = b.getElementsByTagName("track"), k = h.length, l = 0; l < k; l++) {
                var p = h[l].getAttribute("formats"), r = c, u = h[l].getAttribute("lang_code"), C = h[l].getAttribute("lang_translated"), V = h[l].getAttribute("name"), O = h[l].getAttribute("kind"), fa = h[l].getAttribute("id"), sa = "true" == h[l].getAttribute("lang_default"),
                    Ne = "true" == h[l].getAttribute("cantran"), je = h[l].getAttribute("vss_id"), p = new xt({
                        formats: p,
                        format: r,
                        languageCode: u,
                        languageName: C,
                        name: V,
                        kind: O,
                        id: fa,
                        is_servable: !0,
                        is_default: sa,
                        is_translateable: Ne,
                        vss_id: je
                    });
                xC(d, p)
            }
            b = b.getElementsByTagName("target");
            d = b.length;
            for (h = 0; h < d; h++)
                k = b[h].getAttribute("lang_code"), l = b[h].getAttribute("lang_translated"), p = b[h].getAttribute("lang_original"), r = b[h].getAttribute("id"), u = "true" == b[h].getAttribute("lang_default"), k = {
                    languageCode: k, languageName: l, languageOriginal: p,
                    id: r, is_default: u
                }, this.C[k.languageCode] = k.languageName, this.A.push(new wt(k))
        }
        a()
    }, this);
    this.j && this.j.abort();
    this.j = Bj(d, {format: "RAW", fb: b, withCredentials: !0})
};
function XC(a, b) {
    var c = a.o, d = {v: a.B, type: "track", lang: b.k, name: b.o, kind: b.A, fmt: b.B};
    b.j && (d.tlang = b.j.languageCode);
    return c = tj(c, d)
}

WC.prototype.L = function () {
    this.j && this.j.abort();
    WC.J.L.call(this)
};
function YC(a) {
    Is.call(this, a);
    Tf({
        YTP_TRANSLATE_MENU_ITEM: "Translate captions",
        YTP_CONTRIBUTE_MENU_ITEM: "Add subtitles/CC",
        YTP_TRANSLATE_DIALOG_TITLE: "Translate...",
        YTP_ASR_SETTINGS_LABEL: "Automatic Captions",
        YTP_LANGUAGE_OFF: "Off",
        YTP_FONT_FAMILY: "Font family",
        YTP_FONT_SIZE: "Font size",
        YTP_FONT_COLOR: "Font color",
        YTP_FONT_OPACITY: "Font opacity",
        YTP_BACKGROUND_COLOR: "Background color",
        YTP_BACKGROUND_OPACITY: "Background opacity",
        YTP_WINDOW_COLOR: "Window color",
        YTP_WINDOW_OPACITY: "Window opacity",
        YTP_COLOR_WHITE: "White",
        YTP_COLOR_YELLOW: "Yellow",
        YTP_COLOR_GREEN: "Green",
        YTP_COLOR_CYAN: "Cyan",
        YTP_COLOR_BLUE: "Blue",
        YTP_COLOR_MAGENTA: "Magenta",
        YTP_COLOR_RED: "Red",
        YTP_COLOR_BLACK: "Black",
        YTP_FONT_FAMILY_MONO_SERIF: "Monospaced Serif",
        YTP_FONT_FAMILY_PROP_SERIF: "Proportional Serif",
        YTP_FONT_FAMILY_MONO_SANS: "Monospaced Sans-Serif",
        YTP_FONT_FAMILY_PROP_SANS: "Proportional Sans-Serif",
        YTP_FONT_FAMILY_CASUAL: "Casual",
        YTP_FONT_FAMILY_CURSIVE: "Cursive",
        YTP_FONT_FAMILY_SMALL_CAPS: "Small Capitals",
        YTP_CHAR_EDGE_STYLE: "Character edge style",
        YTP_EDGE_STYLE_NONE: "None",
        YTP_EDGE_STYLE_RAISED: "Raised",
        YTP_EDGE_STYLE_DEPRESSED: "Depressed",
        YTP_EDGE_STYLE_OUTLINE: "Outline",
        YTP_EDGE_STYLE_DROP_SHADOW: "Drop Shadow",
        YTP_CLICK_FOR_SETTINGS: "Click $GEAR_ICON for settings"
    });
    this.Uj = !0;
    this.oa = this.S = this.pa = !1;
    this.Ea = new Hv(this);
    this.F = a.T();
    this.B = null;
    this.M = a.app.o;
    this.ja = this.ba = null;
    this.ea = [];
    this.K = {};
    this.V = {};
    this.la = this.xa = this.I = this.va = !1;
    this.ga = new LB(99, $A);
    this.A = this.o = this.D = null;
    this.Aa = !1;
    this.G = this.H = 0;
    this.R = new nB(Ys(this));
    S(this, this.R);
    this.R.listen("click", this.wz, this);
    this.ka = this.ua + "-mdx";
    this.na = new IB(Ys(this));
    S(this, this.na);
    N(this.na.N(), "ytp-mdx-settings-button");
    this.na.listen("click", this.$E, this);
    this.C = new EB(Ys(this), x(this.am, this), x(this.$p, this), x(this.fD, this), x(this.gD, this), x(this.Dz, this));
    this.O = new qB(Ys(this));
    S(this, this.O);
    this.O.listen("change", x(this.Vd, this, !0));
    this.O.listen("cancel", this.Ay, this);
    this.O.listen("select", this.fr, this);
    this.X = new HB(Ys(this));
    S(this, this.X);
    this.X.listen("change",
        this.XB, this);
    this.X.listen("cancel", this.Eg, this);
    this.subscribe("onResize", x(this.Dq, this));
    this.subscribe("onBackgroundChange", x(this.TC, this));
    this.subscribe("onTextOpacityChange", x(this.UC, this));
    this.subscribe("onWindowOpacityChange", x(this.VC, this));
    this.subscribe("onFontSizeIncrease", x(this.IA, this));
    this.subscribe("onFontSizeDecrease", x(this.HA, this));
    this.subscribe("onCaptionsToggle", x(this.RB, this));
    this.subscribe("onPlaybackAudioChange", x(this.Wz, this))
}

inherit(YC, Is);
YC.prototype.ua = "captions";
YC.prototype.sc = "cc";
YC.prototype.Km = "subtitlesModuleData";
var ZC = {
    background: "#080808",
    backgroundOpacity: 1,
    charEdgeStyle: 3,
    color: "#fff",
    fontFamily: 4,
    fontSizeIncrement: 0,
    textOpacity: 1,
    windowColor: "#080808",
    windowOpacity: 0
};

function $C(a) {
    return "3" != a.F.k ? !1 : !!a.M.j.textTracks
}

function aD(a, b, c, d, e) {
    w(a.k[b]) && (a.k[c] = d.indexOf(a.k[b]), -1 == a.k[c] && (a.k[c] = e), delete a.k[b])
}

f = YC.prototype;
f.create = function () {
    YC.J.create.call(this);
    this.B = this.j.getVideoData();
    -1 == aB.indexOf(this.F.P) && N(this.j.Ja(), "cc-international");
    this.k = $b(ZC);
    qa(this.k, Rs(this, "display-settings"));
    aD(this, "fontFamilyOption", "fontFamily", UA, ZC.fontFamily);
    aD(this, "charEdgeStyle", "charEdgeStyle", VA, ZC.charEdgeStyle);
    this.O.setProperties(this.k);
    this.ja = new Y(["div", ["ytp-player-content", "ytp-subtitles-player-content"]]);
    this.ja.Y(this.j.Ja());
    this.ba = this.ja.N();
    $C(this) || (Zs(this, this.ua, this.R), bD(this));
    (this.B.captionTracks.length &&
    cD(this.j.app, 1).di || dD(this)) && this.load()
};
f.destroy = function () {
    this.ja.detach();
    this.ja.dispose();
    this.ba = null;
    bt(this, this.C);
    $s(this, this.ua);
    YC.J.destroy.call(this)
};
function dD(a) {
    if (a.B.captionTracks.length) {
        var b = cD(a.j.app, 1).uo;
        if (2 == b || 3 == b)
            return !0
    }
    if (1 == a.F.B.cc_load_policy || 1 == a.B.to || "alwayson" == a.B.vc("yt:cc") || $C(a))
        return !0;
    b = Rs(a, "module-enabled");
    return null != b ? !!b : "on" == a.B.vc("yt:cc")
}

function eD(a) {
    a.A && a.A == a.o.Yc() && fD(a);
    a.o.Yl(x(a.or, a), !0, $C(a) ? "vtt" : void 0, cD(a.j.app, 1))
}

f.load = function () {
    this.la = "alwayson" == this.B.vc("yt:cc");
    this.xa = "1" == this.B.A.cc_auto_caps || "1" == this.F.B.cc_auto_caps;
    this.C.D = "1" == this.B.A.cc_contribute || "1" == this.F.B.cc_contribute;
    YC.J.load.call(this);
    this.pa = !0;
    if (this.B.Na)
        this.o = new OC(this.B.k, this.j), this.subscribe("seekto", this.ut, this);
    else {
        var a = this.B.A.cc_lang_pref || this.F.B.cc_lang_pref || this.B.vc("yt:cc_default_lang") || this.F.P, a = a && a.split("_").join("-");
        this.B.captionTracks.length ? this.o = new CC(this.B) : this.o = new WC(this.B.ef,
            this.B.videoId, a, this.B.Rh)
    }
    eD(this)
};
f.$E = function () {
    this.loaded || this.load()
};
f.unload = function () {
    this.Tb && ($s(this, this.ka), this.C.o = null, gD(this, !1), this.ej("control_subtitles_set_track"));
    if ($C(this)) {
        var a;
        a = Cd("track", void 0, void 0);
        for (var b = 0; b < a.length; b++)
            Sd(a[b])
    } else
        hD(this, !1), fD(this), this.unsubscribe("seekto", this.ut, this), this.o.dispose(), this.o = null, this.Eg();
    this.I = this.oa = this.S = this.pa = !1;
    YC.J.unload.call(this)
};
f.La = function () {
};
f.or = function () {
    this.pa = !1;
    if ($C(this))
        for (var a = this.M.j, b = this.o.Eo(), c = 0; c < b.length; c++)
            a.appendChild(b[c]);
    else if (a = this.X, b = this.o.A, AB(a.k, b), DB(a.k, 1E3), kv(a.k.template, "tabindex", 1E3), Sz(a.j.j, 1001), b.length ? a.Ba(b[0]) : a.Ba(null), b = this.I || dD(this) || iD(this.F), a = wC(this.o.k, !0), 0 < a.length) {
        this.La("Caption track list loaded, found " + a.length + " tracks.");
        this.oa = !0;
        FB(this.C, a);
        a = this.A && -1 != a.indexOf(this.A);
        if (b && !a)
            if (b = this.o.Yo())
                this.va = !0, jD(this, b), a = !0;
            else if (this.S || kD(this), b =
                    this.o.k.o, b.length && (b = b[0].toString(), this.I || this.xa))
                this.$p(b), a = !0;
        this.publish("publish_external_event", "onCaptionsTrackListChanged");
        a || this.o.Yc() && jD(this, this.o.Yc())
    } else
        this.La("No captions found."), bt(this, this.C), $s(this, this.ua), this.unload()
};
function kD(a) {
    a.S = !0;
    $C(a) || (a.Vd(), a.Dq())
}

f.WB = function (a, b) {
    this.va && (this.va = !1, this.publish("publish_external_event", "onCaptionsTrackListChanged"));
    if (b && (!this.A || !b.equals(this.A))) {
        fD(this);
        this.A = b;
        this.Aa = mc.test(b.k);
        var c = {trackName: b.o, trackKind: b.A};
        b.j ? (c.trackLangCode = b.j.languageCode, c.fromLangCode = b.k) : c.trackLangCode = b.k;
        this.log(c);
        if (b != this.o.Yc()) {
            this.I && (c = At(b) || "", (c = c.replace(/<[^>]*>?/g, "")) && (c += "\n"), c += Uf("YTP_CLICK_FOR_SETTINGS", {GEAR_ICON: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 15 15"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25,5.7C8.783,5.233,8.2,5,7.5,5S6.2,5.233,5.7,5.7C5.233,6.2,5,6.8,5,7.5s0.233,1.283,0.7,1.75C6.2,9.75,6.8,10,7.5,10s1.283-0.25,1.75-0.75C9.75,8.783,10,8.2,10,7.5S9.75,6.2,9.25,5.7z M8.75,2.15c0.6,0.1,1.15,0.317,1.65,0.65l1.5-1.5l1.75,1.75l-1.5,1.5c0.333,0.534,0.583,1.1,0.75,1.7H15v2.5h-2.1c-0.133,0.6-0.367,1.15-0.7,1.65l1.5,1.5l-1.75,1.75l-1.5-1.5c-0.534,0.333-1.1,0.583-1.7,0.75V15h-2.5v-2.1c-0.6-0.167-1.167-0.417-1.7-0.75l-1.5,1.5L1.3,11.9l1.5-1.5C2.467,9.9,2.25,9.35,2.15,8.75H0v-2.5h2.15c0.133-0.6,0.367-1.167,0.7-1.7l-1.5-1.5L3.1,1.3l1.5,1.5c0.5-0.333,1.05-0.55,1.65-0.65V0h2.5V2.15z"/></svg>'}),
                this.ba.appendChild(this.ga.Fa), this.ga.Rd(c), this.ga.qd(this.k, this.M.kb()), this.G || (this.G = L(x(this.Ar, this), 2E3)));
            this.publish("publish_external_event", "captionschanged", zt(b));
            kB(this.R);
            var c = this.C, d = !this.la && 0 < this.o.A.length;
            c.C = d;
            CB(c.j, !d);
            GB(this.C, b.toString());
            Ss(this, "module-enabled", !0);
            this.publish("vss_segment")
        }
    }
    this.S || kD(this);
    Js(this, a.k.concat(a.j))
};
f.zc = function (a) {
    this.ea.push(a);
    this.H || (this.H = L(x(this.Cj, this), 0))
};
f.Oc = function (a) {
    pb(this.ea, a);
    this.H || (this.H = L(x(this.Cj, this), 0))
};
f.LC = function (a) {
    if (a instanceof XB) {
        var b = this.K[a.id];
        qa(a.params, this.k);
        YB(a);
        b && b.type != ZB(a) && (Sd(b.Fa), delete this.K[a.id], b = null);
        if (!b) {
            var b = this.K, c = a.id, d;
            t: {
                d = a.id;
                var e = a.params;
                switch (ZB(a)) {
                    case 1:
                        d = new PC(d, e);
                        break t;
                    case 2:
                        d = new RC(d, e);
                        break t;
                    default:
                        d = new LB(d, e)
                }
            }
            b = b[c] = d;
            c = b.Fa;
            P(c, "captions-asr", "asr" == this.A.A);
            null != a.params.Uf && (a.params.Uf = this.Aa ? 1 : 0);
            0 == b.id ? this.ba.appendChild(c) : Ns(this, c)
        }
        b.qd(a.params, this.M.kb());
        if (1 == ZB(a)) {
            b.vt = a.j;
            b.Pb = {};
            b.bh = !0;
            b.Rd(b.vt);
            b.Pb.nd = b.dc.length;
            b.Pb.width = b.Fa.offsetWidth;
            b.Pb.height = b.Fa.offsetHeight;
            b.Pb.Hr = [];
            b.Pb.Ir = [];
            for (a = 0; a < b.Pb.nd; a++)
                b.Pb.Ir.push(b.dc[a].offsetTop), b.Pb.Hr.push(b.dc[a].offsetLeft);
            b.bh = !1;
            b.Rd(b.rg)
        }
    } else
        b = a.k, this.V[b] || (this.V[b] = []), this.V[b].push(a)
};
f.Dq = function () {
    this.S && (this.Vd(), Ib(this.K, function (a) {
        a.Ke()
    }, this))
};
function lD(a) {
    var b = [];
    Ib(a.K, function (a) {
        a instanceof PC && b.push(a)
    });
    if (0 != b.length) {
        b.sort(function (a, b) {
            return b.za.Ud - a.za.Ud
        });
        var c = mD(a.M).height, d = b[0].za.Ud;
        D(b, function (a) {
            a.za.Ud = d;
            var b = Math.round(a.za.nd * a.ji());
            d -= Math.round(b / c * 100);
            a.Ke()
        }, a)
    }
}

f.Ar = function () {
    this.G = 0;
    Sd(this.ga.Fa)
};
f.Cj = function () {
    this.H = 0;
    this.S && (Wb(this.V), this.ea.sort(zs), D(this.ea, this.LC, this), Ib(this.K, function (a, b) {
        this.V[b] ? a.Tr(this.V[b]) : (Sd(a.Fa), delete this.K[b])
    }, this), lD(this), this.D && this.D.Ke(), this.La("Refreshing caption display..."))
};
function nD(a, b, c) {
    if (c && c.length) {
        for (var d = a.k[b], e = 0, g = 0; g < c.length; g++)
            if (d == c[g].option) {
                e = (g + 1) % c.length;
                break
            }
        a.k[b] = c[e].option;
        a.Vd(!0)
    }
}

f.TC = function () {
    nD(this, "backgroundOpacity", cB)
};
f.UC = function () {
    nD(this, "textOpacity", dB)
};
f.VC = function () {
    nD(this, "windowOpacity", cB)
};
f.HA = function () {
    oD(this, -1)
};
f.IA = function () {
    oD(this, 1)
};
function oD(a, b) {
    var c = a.k.fontSizeIncrement + b, c = Math.max(-2, Math.min(4, c));
    a.k.fontSizeIncrement = c;
    a.Vd()
}

function fD(a) {
    if (a.A) {
        a.A = null;
        Ls(a);
        a.ea = [];
        a.A = null;
        a.Cj();
        lB(a.R);
        a.C.off();
        var b = a.C;
        b.C = !1;
        CB(b.j, !0);
        a.o.Vm()
    }
}

function jD(a, b, c) {
    !b || a.A && b.equals(a.A) || (null != c && (a.I = c), a.Tb ? (a.A = b, gD(a, !0), a.ej("control_subtitles_set_track", zt(b)), a.S || kD(a)) : (a.o.Xl(b, x(a.WB, a)), a.pa = !0, GB(a.C, b.toString())))
}

f.$p = function (a, b) {
    var c = BC(this.o, a);
    jD(this, c, b);
    ct(this)
};
f.gD = function () {
    this.la || (Os(this, this.X), ct(this))
};
f.XB = function () {
    if (!this.la) {
        this.Eg();
        var a = this.X.getSelected();
        if (a) {
            a = Bt(this.A, a);
            if (xC(this.o.k, a)) {
                var b = a.toString();
                FB(this.C, wC(this.o.k, !0));
                GB(this.C, b)
            }
            jD(this, a, !0)
        }
    }
};
f.Ay = function () {
    this.Eg();
    this.Tb && this.A && this.ej("control_subtitles_set_track", zt(this.A))
};
f.fr = function () {
    delete this.k;
    this.k = $b(ZC);
    this.O.setProperties(this.k);
    Ss(this, "display-settings", this.k);
    this.Vd()
};
f.Vd = function (a) {
    var b = this.M.kb();
    Ib(this.K, function (a) {
        a.qd(this.k, b)
    }, this);
    this.D && this.D.qd(this.k, b);
    this.ga.qd(this.k, b);
    this.Cj();
    n(a) && !a || Ss(this, "display-settings", this.k)
};
f.wz = function () {
    this.I = !0;
    pD(this)
};
function pD(a) {
    a.loaded ? a.A && a.A != a.o.Yc() ? a.am() : a.or() : a.load()
}

f.am = function () {
    this.loaded && (this.G && (M(this.G), this.Ar()), Ss(this, "module-enabled", !1), this.publish("vss_segment"), fD(this), ct(this), this.I = !1, this.Tb ? (gD(this, !1), this.ej("control_subtitles_set_track")) : this.publish("publish_external_event", "captionschanged", {}), this.o.Yc() && jD(this, this.o.Yc()))
};
f.fD = function () {
    Os(this, this.O);
    ct(this)
};
f.Dz = function () {
    Ps(this, this.F.A + "timedtext_video?v=" + this.B.videoId);
    ct(this)
};
function qD(a) {
    return YC.prototype.Ca(a) ? new YC(a) : null
}

f.cg = function (a, b) {
    switch (a) {
        case "fontSize":
            return isNaN(b) || (this.k.fontSizeIncrement = Math.max(-2, Math.min(4, b)), this.Vd()), this.k.fontSizeIncrement;
        case "reload":
            b && eD(this);
            break;
        case "stickyLoading":
            this.F.Db() && Ss(this, "module-enabled", !!b);
            break;
        case "track":
            if (b) {
                if (!ja(b))
                    break;
                if (Vb(b)) {
                    this.am();
                    break
                }
                for (var c, d = wC(this.o.k, !0), e = 0; e < d.length; e++)
                    d[e].k == b.languageCode && (c = b.translationLanguage ? Bt(d[e], b.translationLanguage) : d[e]);
                c && (jD(this, c, !0), GB(this.C, c.toString()))
            } else
                return this.A &&
                this.A != this.o.Yc() ? zt(this.A) : {};
            return "";
        case "tracklist":
            return this.oa ? E(wC(this.o.k, b && b.includeAsr), function (a) {
                return zt(a)
            }) : [];
        case "translationLanguages":
            return this.oa ? this.o.A : [];
        case "displaySettings":
            return b && ja(b) && rD(this, b), c = $b(this.k), c.fontFamilyOption = UA[c.fontFamily], c.charEdgeStyle = VA[c.charEdgeStyle], c;
        case "sampleSubtitles":
            hD(this, !!b)
    }
};
function hD(a, b) {
    if (b && !a.D) {
        a.D = new LB(98, ZA);
        a.ba.appendChild(a.D.Fa);
        var c = a.D, d = Z(Ys(a), "YTP_SAMPLE_SUBTITLES");
        d && (d = d.replace(/<[^>]*>?/g, ""), c.Rd(d));
        a.D.qd(a.k, a.M.kb())
    } else
        !b && a.D && (Sd(a.D.Fa), a.D = null)
}

f.dg = function () {
    var a = "reload fontSize track tracklist translationLanguages displaySettings sampleSubtitle".split(" ");
    this.F.Db() && a.push("stickyLoading");
    return a
};
f.Gk = function (a, b) {
    return a && w(a) && TA.test(a) ? a : b
};
f.$l = function (a, b) {
    return ha(a) && !isNaN(a) ? Math.max(0, Math.min(1, parseFloat(a))) : b
};
f.xw = function (a, b) {
    if (a && w(a)) {
        var c = VA.indexOf(a);
        return -1 != c ? c : b
    }
    return b
};
f.Tw = function (a, b) {
    if (a && w(a)) {
        var c = UA.indexOf(a);
        return -1 != c ? c : b
    }
    return b
};
f.Uw = function (a, b) {
    return ha(a) && !isNaN(a) ? Math.max(-2, Math.min(4, a)) : b
};
var sD = null;

function rD(a, b) {
    if (b)
        if (Zb(b, "reset"))
            a.fr();
        else {
            if (!sD) {
                var c = {};
                c.color = a.Gk;
                c.textOpacity = a.$l;
                c.background = a.Gk;
                c.backgroundOpacity = a.$l;
                c.windowColor = a.Gk;
                c.windowOpacity = a.$l;
                c.charEdgeStyle = a.xw;
                c.fontFamilyOption = a.Tw;
                c.fontSizeIncrement = a.Uw;
                sD = c
            }
            var c = sD, d;
            for (d in c)
                switch (d) {
                    case "fontFamilyOption":
                        a.k.fontFamily = c[d](b[d], a.k.fontFamily);
                        break;
                    default:
                        a.k[d] = c[d](b[d], a.k[d])
                }
            a.Vd(iD(a.F))
        }
}

f = YC.prototype;
f.Ca = function (a) {
    if ("lb3" == a.T().j)
        return !1;
    a = a.getVideoData();
    var b;
    if (b = a.Na)
        b = a.k, b = !(!b || null == b.j.en);
    return !!(a.ef || a.captionTracks.length || b)
};
function bD(a) {
    bt(a, a.C);
    a.Tb ? (a.C.o = a.ka, Zs(a, a.ka, a.na)) : (a.C.o = null, $s(a, a.ka));
    at(a, a.C)
}

f.Ti = function (a) {
    bD(this);
    a ? fD(this) : this.loaded && (this.unload(), this.load())
};
function gD(a, b) {
    var c = {};
    a.A && (c = zt(a.A));
    a.publish("publish_external_event", "captionschanged", c);
    b ? (kB(a.R), GB(a.C, a.A.toString())) : (lB(a.R), a.C.off())
}

f.ut = function () {
    this.o.seek(this.j.getCurrentTime())
};
f.sh = function () {
    var a = this.A;
    return a ? {cc: a.G} : null
};
f.RB = function () {
    this.I = !0;
    pD(this)
};
f.Wz = function () {
    this.B.captionTracks.length && eD(this)
};
f.L = function () {
    this.Ea.removeAll();
    this.H && (M(this.H), this.H = 0);
    this.G && (Rf(this.G), this.G = 0);
    YC.J.L.call(this)
};
function tD() {
    if (void 0 == Wt && (Wt = !1, window.crypto && window.crypto.getRandomValues))
        try {
            var a = new Uint8Array(1);
            window.crypto.getRandomValues(a);
            Wt = !0
        } catch (b) {
        }
    if (Wt) {
        var a = Array(16), c = new Uint8Array(16);
        window.crypto.getRandomValues(c);
        for (var d = 0; d < a.length; d++)
            a[d] = c[d]
    } else
        for (a = Array(16), c = 0; 16 > c; c++) {
            for (var d = y(), e = 0; e < d % 23; e++)
                a[c] = Math.random();
            a[c] = Math.floor(256 * Math.random())
        }
    return a
}

function uD() {
    for (var a = tD(), b = [], c = 0; c < a.length; c++)
        b.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(a[c] & 63));
    return b.join("")
}

function vD() {
    return E(tD(), function (a) {
        return (a & 15).toString(16)
    }).join("")
}
;
function wD(a) {
    Is.call(this, a);
    this.ua = "ypc_license_checker";
    this.sc = "ypc_license";
    this.C = !1;
    this.B = 0;
    this.A = !1;
    this.k = NaN;
    this.D = vD();
    this.o = null
}

inherit(wD, Is);
var xD = {
    LICENSE_DENIED_CANNOT_ACTIVATE_RENTAL: "YTP_ERROR_CANNOT_ACTIVATE_RENTAL",
    LICENSE_DENIED_NOT_SIGNED_IN: "YTP_ERROR_NOT_SIGNED_IN",
    LICENSE_DENIED_VIDEO_NOT_FOUND: "YTP_ERROR_VIDEO_NOT_FOUND",
    LICENSE_DENIED_NO_ACTIVE_PURCHASE_AGREEMENT: "YTP_ERROR_PURCHASE_REFUNDED",
    LICENSE_DENIED_PURCHASE_NOT_FOUND: "YTP_ERROR_PURCHASE_NOT_FOUND",
    LICENSE_DENIED_PURCHASE_EXPIRED: "YTP_ERROR_RENTAL_EXPIRED",
    LICENSE_DENIED_STREAMING_UNAVAILABLE: "YTP_ERROR_STREAMING_UNAVAILABLE",
    LICENSE_DENIED_ALREADY_PINNED_ON_A_DEVICE: "YTP_ERROR_ALREADY_PINNED_ON_A_DEVICE",
    LICENSE_DENIED_CONCURRENT_PLAYBACK: "YTP_ERROR_STOPPED_BY_ANOTHER_PLAYBACK",
    LICENSE_DENIED_TOO_MANY_STREAMS_PER_USER: "YTP_ERROR_TOO_MANY_STREAMS_PER_USER",
    LICENSE_DENIED_TOO_MANY_STREAMS_PER_ENTITLEMENT: "YTP_ERROR_TOO_MANY_STREAMS_PER_ENTITLEMENT",
    LICENSE_DENIED_STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED: "YTP_ERROR_STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED",
    LICENSE_DENIED_UNUSUAL_ACTIVITY: "YTP_ERROR_UNUSUAL_ACTIVITY",
    LICENSE_DENIED_UNKNOWN: "YTP_ERROR_RETRYABLE_ERROR",
    LICENSE_DENIED_PLAYBACK_CAP: "YTP_ERROR_LICENSE"
};

function yD(a) {
    return Bv(a.getVideoData(), "ypc_license_checker_module")
}

f = wD.prototype;
f.Ca = function () {
    return yD(this.j)
};
f.create = function () {
    wD.J.create.call(this);
    var a = new ws(1E3, 2147483646, {priority: 0});
    Js(this, [a]);
    this.subscribe("heartbeatparams", this.gF, this);
    this.subscribe("onStateChange", this.hF, this)
};
function zD(a) {
    return yD(a) ? new wD(a) : null
}

f.destroy = function () {
    AD(this);
    wD.J.destroy.call(this)
};
f.zc = function () {
    this.C = !0;
    BD(this, 2E3)
};
f.gF = function (a) {
    this.o = a;
    BD(this, 2E3)
};
f.hF = function (a) {
    X(a.state, 2) || X(a.state, 64) ? AD(this) : (X(a.state, 1) || X(a.state, 8)) && BD(this, 2E3)
};
function CD(a) {
    var b = a.j.getVideoData();
    return DD(b) ? !!a.o : !!b.heartbeatToken || !!b.Wa
}

function BD(a, b) {
    if (!a.k && a.C && CD(a) && (DD(a.j.getVideoData()) || !iD(a.j.T()))) {
        var c = b;
        void 0 == c && (c = a.A ? (c = a.j.getVideoData().Te) ? c : a.o ? 1E3 * a.o.interval : 6E4 : 1E3);
        a.k = L(x(a.WC, a), c)
    }
}

f.WC = function () {
    var a, b, c;
    c = this.j.T().A;
    var d = this.j.getVideoData();
    CD(this) ? (DD(d) ? (b = "GET", a = {}, c = Re(this.o.url, {request_id: vD()}), d.F && (c = Re(c, {vvt: d.F})), d.B && (c = Re(c, {access_token: d.B}))
    ) :
    d.heartbeatToken ? (b = "GET", a = {}, c = Re(c + "heartbeat", {
        video_id: d.videoId,
        heartbeat_token: d.heartbeatToken
    }), d
    .
    F && (c = Re(c, {vvt: d.F})), d.B && (c = Re(c, {access_token: d.B}))
    ) :
    (b = "POST", a = {
        video_id: d.videoId,
        player_id: this.D,
        request_id: vD(),
        purchase_id: d.purchaseId,
        version: "4",
        player_time_seconds: this.j.getCurrentTime().toString(),
        gid: d.Un,
        ypc_token: d.Wa
    }, d
    .
    F && (a.vvt = d.F), d.B && (a.access_token = d.B), c += "ypc_license_server"
    ),
    c = Re(c, {cpn: d.ya}), Bj(c, {
        format: "RAW",
        method: b,
        Eb: a,
        timeout: 3E4,
        fb: x(this.pz, this),
        onError: x(this.oz, this),
        Ge: x(this.qz, this),
        withCredentials: !0
    })
    ) :
    AD(this)
};
f.pz = function (a) {
    if (this.k) {
        a = a.responseText;
        var b;
        t: if (b = a, this.j.getVideoData().heartbeatToken)
            b = jg(b), b = "ok" == b.status ? 0 : "stop" == b.status ? 1 : -1;
        else {
            var c = b.match(ED);
            if (c) {
                if ("0" != c[1]) {
                    b = 1;
                    break t
                }
                b = c[3]
            }
            b = b in xD ? 1 : 64 <= b.length && b.match(/[0-9a-fA-f]+/) ? 0 : -1
        }
        -1 == b ? FD(this, "decode") : (this.B = 0, this.k = NaN, 1 == b ? (this.A = !1, b = "YTP_ERROR_LICENSE", this.j.getVideoData().heartbeatToken ? a = jg(a).reason || Uf(b) : ((c = a.match(ED)) ? (a = parseInt(c[1], 10)) && (b = ft(a)) : a in xD && (b = xD[a]), a = Uf(b)), Cv(this.j.app.k, "heartbeat",
            a, void 0)) : (this.A = !0, BD(this)))
    }
};
f.oz = function (a) {
    FD(this, "net-" + a.status)
};
f.qz = function () {
    FD(this, "timeout")
};
function FD(a, b) {
    if (a.k) {
        a.log({errorType: b});
        a.k = NaN;
        var c = ++a.B, d = a.j.getVideoData().Ze;
        c > (d ? d : a.o ? a.o.j : 5) ? (c = Uf("YTP_ERROR_LICENSE"), Cv(a.j.app.k, "heartbeat", c, void 0)
    ) :
        BD(a)
    }
}

var ED = /^GLS\/1.0 (\d+) (\w+).*?\r\n\r\n([^]*)$/;

function AD(a) {
    a.B = 0;
    a.k && (M(a.k), a.k = NaN);
    a.A = !1
}
;
function GD(a) {
    Y.call(this, a);
    this.S = new T;
    S(this, this.S)
}

inherit(GD, Y);
GD.prototype.subscribe = function (a, b, c) {
    return this.S.subscribe(a, b, c)
};
GD.prototype.unsubscribe = function (a, b, c) {
    return this.S.unsubscribe(a, b, c)
};
GD.prototype.Lb = function (a) {
    return this.S.Lb(a)
};
GD.prototype.publish = function (a, b) {
    return this.S.publish.apply(this.S, arguments)
};
function HD(a, b, c) {
    GD.call(this, ["div", ["html5-endscreen", "ytp-player-content", c || "base-endscreen"]]);
    this.j = a;
    this.Ya = b;
    this.B = !1
}

inherit(HD, GD);
HD.prototype.create = function () {
    this.B = !0
};
HD.prototype.destroy = function () {
    this.B = !1
};
HD.prototype.Oh = function () {
    return !1
};
function ID() {
    Y.call(this, ["div", "ytp-channel-banner-container", ["img", "ytp-channel-banner", {src: "{{banner}}"}]])
}

inherit(ID, Y);
function JD() {
    Y.call(this, ["div", "ytp-subscribe-card", ["img", "ytp-author-image", {src: "{{image}}"}], ["div", "ytp-subscribe-card-right", ["div", "ytp-author-name", "{{author}}"], ["div", "html5-subscribe-button-container"]]])
}

inherit(JD, Y);
function KD(a, b) {
    GD.call(this, b);
    this.D = a;
    this.videoId = null
}

inherit(KD, GD);
KD.prototype.oj = function (a, b) {
    this.videoId = a ? a.id || a.video_id : "";
    P(this.element, "ytp-suggestion-set", !!this.videoId);
    if (this.videoId) {
        var c, d = a.list ? a.playlist_iurlhq : a.iurlhq_webp || a.iurlhq, e = a.list ? a.playlist_iurlmq : a.iurlmq_webp || a.iurlmq;
        b && d ? c = d : !b && e ? c = e : c = rA(a.thumbnail_ids ? a.thumbnail_ids.split(",")[0] : this.videoId, b ? "hqdefault.jpg" : "mqdefault.jpg");
        d = $b(a);
        d.playlist_length = d.playlist_length || 0;
        d.title = d.title || d.playlist_title;
        d.author = d.author || d.playlist_author;
        d.watch = Z(0, "YTP_WATCH_VIDEO_OR_PLAYLIST",
            {TITLE: d.title});
        d.image = c;
        d.background = "background-image: url(" + c + ")";
        d.duration = qv(a.length_seconds);
        d.episodic_title = d.title;
        d.episodic_index = parseInt(d.index, 10) + 1;
        d.episodic_length = d.playlist_length;
        this.template.update(d)
    }
};
function LD(a) {
    var b = ["div", "ytp-watch-next-card", ["div", "ytp-watch-next-content", ["div", "ytp-watch-next-header", Z(0, "YTP_WATCH_NEXT")], ["img", "ytp-watch-next-thumbnail", {src: "{{image}}"}], ["div", "ytp-watch-next-title", "{{title}}"], ["div", "ytp-watch-next-views", "{{view_count_string}}"], ["div", "ytp-watch-next-uploaded", "{{uploaded}}"]]];
    KD.call(this, a, b)
}

inherit(LD, KD);
function MD(a, b, c) {
    HD.call(this, a, b, "subscribecard-endscreen");
    this.A = new ID;
    S(this, this.A);
    this.C = new fv(["div", "ytp-channel-curtain"]);
    S(this, this.C);
    this.o = new JD;
    S(this, this.o);
    (this.k = c ? new LD(this.j.app.o.k) : null) && S(this, this.k);
    this.hide()
}

inherit(MD, HD);
MD.prototype.create = function () {
    MD.J.create.call(this);
    Rd(this.N());
    this.A.Y(this.N());
    this.C.Y(this.N());
    this.o.Y(this.N());
    var a = this.j.getVideoData().videoId, b = this.D, c = this.j.T().Za, d = this.j.T().pageId;
    a && (a = {
        video_id: a,
        html5: 1,
        page_subscribe: 1
    }, c && (a.authuser = c), d && (a.pageid = d), Bj("/get_video_metadata", {
        method: "GET",
        onError: v,
        fb: b,
        Vf: a,
        context: this
    }))
};
MD.prototype.D = function (a, b) {
    if (this.B) {
        var c = b.user_info, d = this.j.getVideoData();
        d && (d.GG = c.external_id);
        d = c.channel_banner_url;
        ag(d) || (d = "");
        var e = c.channel_logo_url || c.image_url;
        ag(e) || (e = "");
        kv(this.A.template, "banner", d);
        kv(this.o.template, "image", e);
        kv(this.o.template, "author", c.channel_title || c.username);
        this.k && b.watch_next && (this.k.oj(b.watch_next), this.k.Y(this.N()));
        c = c.subscription_button_html;
        this.o.template.j["html5-subscribe-button-container"].innerHTML = c ? c : ""
    }
};
function ND(a, b) {
    return Rh && OD(a, "947233") || b && OD(a, "947243")
}

function OD(a, b) {
    return G(a.experiments.experimentIds, b)
}

function PD(a, b) {
    return hb(wb(arguments, 1), pa(G, a.experiments.experimentIds))
}
;
function QD(a, b) {
    var c;
    c = ["div", ["video-ads", "html5-stop-propagation"], ["div", "video-ad-interstitial", ["span", "", Z(0, "YTP_AD_INTERRUPT_MESSAGE")]], ["div", "video-ad-status-bar", ["div", "video-ad-label", Z(0, "YTP_ADVERTISEMENT")], ["div", "video-ad-time-left"], ["div", ["html5-progress-bar", "html5-stop-propagation"], ["div", ["html5-ad-progress-list", "html5-progress-list"]]]], ["div", "ad-container"]];
    Y.call(this, c);
    this.$ = b
}

inherit(QD, Y);
QD.prototype.o = null;
QD.prototype.k = null;
QD.prototype.j = null;
function RD(a) {
    if (!a.o && (a.o = a.template.j["ad-container"], a.$.T().C)) {
        var b = OD(a.$.T(), "927622") ? "ad-container-single-media-element-annotations" : "ad-container-single-media-element";
        N(a.o, b)
    }
    return a.o
}

function SD(a) {
    a.j && (a.$.T().C ? (lh(a.j, "ad-video"), TD(a.$.app, a.j), a.j = null) : (Sd(a.j), ls(a.j)))
}

function UD(a) {
    if (!a.k) {
        if (a.$.T().Qc) {
            var b = Nd("button");
            N(b, "video-click-tracking");
            Qd(b, Uf("YTP_VISIT_ADVERTISERS_SITE"));
            var c = Nd("div");
            N(c, "video-click-tracking-container");
            c.appendChild(b);
            RD(a).appendChild(c)
        } else
            b = Nd("div"), kh(b, ["video-click-tracking", "ad-video"]), RD(a).appendChild(b);
        a.k = b
    }
    return a.k
}

QD.prototype.L = function () {
    QD.J.L.call(this);
    this.j && (TD(this.$.app, this.j), this.j = null);
    SD(this);
    Rd(RD(this));
    Rd(UD(this));
    this.k = this.o = null;
    delete this.$
};
function VD(a) {
    if (!a.j) {
        var b;
        b = a.$.app;
        if (b.j.C) {
            var c = Jg(b.B), d = Ug(b.B);
            b.ea = new sg(c.x, c.y, d.width, d.height);
            WD(b.C);
            ms(b.B, 1);
            ls(b.B);
            b = b.B
        } else
            b = XD.getTag(void 0);
        a.j = b;
        kh(a.j, ["video-stream", "ad-video"])
    }
    return a.j
}
;
function YD(a, b) {
    this.type = a || "";
    this.id = b || ""
}

function ZD(a) {
    return new YD(a.substr(0, 2), a.substr(2))
}

YD.prototype.toString = function () {
    return this.type + this.id
};
function $D(a, b) {
    Y.call(this, ["canvas"]);
    this.element.width = a;
    this.element.height = b;
    this.width = a;
    this.height = b;
    this.context = this.element.getContext("2d");
    this.j = 0;
    this.B = null
}

inherit($D, Y);
$D.prototype.C = function (a, b) {
    M(this.j);
    this.context && (this.j = nv(x(this.C, this, a, b), b), a.call(this, new Date - this.B))
};
$D.prototype.L = function () {
    M(this.j);
    this.context = null;
    $D.J.L.call(this)
};
function aE(a, b) {
    $D.call(this, 2 * (a + 2), 2 * (a + 2));
    this.D = a;
    this.k = b;
    this.A = this.width / 2;
    this.o = this.height / 2
}

inherit(aE, $D);
var bE = 3 * Math.PI / 2, cE = 2 * Math.PI;

function dE(a, b) {
    var c = a.app.o.k, d = ["span", "videowall-still-info-upnext", Z(0, "YTP_PLAYLIST_UP_NEXT")], e = ["span", "videowall-still-info-paused", Z(0, "YTP_AUTOPLAY_PAUSED_2")], g = [["div", ["videowall-still-listlabel-episodic", "videowall-still-listlabel"], ["div", "videowall-still-listlabel-episodic-heading", Z(0, "YTP_PLAYLIST_UP_NEXT")], ["span", "videowall-still-listlabel-episodic-icon"], ["div", "videowall-still-listlabel-episodic-info", ["span", "videowall-still-listlabel-episodic-index", ["span", "", "{{episodic_index}}"],
        " / ", ["span", "", "{{episodic_length}}"]], ["span", "", "{{episodic_title}}"]]], ["span", ["videowall-still-listlabel-regular", "videowall-still-listlabel"], ["span", "videowall-still-listlabel-icon"], Z(0, "YTP_PLAYLIST"), ["span", "videowall-still-listlabel-length", " (", ["span", "", "{{playlist_length}}"], ")"]], ["span", ["videowall-still-listlabel-mix", "videowall-still-listlabel"], ["span", "videowall-still-listlabel-mix-icon"], Z(0, "YTP_MIX"), ["span", "videowall-still-listlabel-length", " (50+)"]]];
    KD.call(this, c,
        ["a", "videowall-still", {
            tabIndex: 5E3,
            style: "{{background}}",
            href: "{{linkurl}}",
            "aria-label": "{{watch}}"
        }, ["span", "videowall-still-featured-label", Z(0, "YTP_FEATURED")], ["span", "videowall-still-info", ["span", "videowall-still-info-bg", ["span", "videowall-still-info-content", d, ["span", "videowall-still-info-title", "{{title}}"], ["span", "videowall-still-info-author", "{{author}}"], ["span", "videowall-still-info-duration", "{{duration}}"], ["span", "videowall-still-info-cancel"]].concat([e])]]].concat(g));
    this.$ =
        a;
    this.F = b;
    this.C = {};
    this.o = this.A = null;
    this.B = 0;
    this.k = this.j = null;
    this.listen("click", this.jF);
    this.listen("keypress", this.kF)
}

inherit(dE, KD);
f = dE.prototype;
f.oj = function (a, b) {
    dE.J.oj.call(this, a, b);
    this.C = a.session_data ? mj(a.session_data, "&") : null;
    if ((this.A = a.endscreen_autoplay_session_data ? mj(a.endscreen_autoplay_session_data, "&") : null) && !this.k) {
        var c = new Qz(this.D);
        S(this, c);
        c.listen("click", this.zq, this);
        c.gb(Z(0, "YTP_AUTOPLAY_CANCEL"));
        c.Y(this.template.j["videowall-still-info-cancel"]);
        Rz(c, "videowall-still-info-cancel-button");
        Sz(c, 5100);
        c.ta(Z(0, "YTP_CANCEL"));
        c = new Qz(this.D);
        S(this, c);
        c.listen("click", this.zq, this);
        c.Y(this.template.j["videowall-still-info-bg"],
            0);
        Rz(c, "videowall-still-info-close");
        this.k = new aE(44, 48);
        S(this, this.k);
        N(this.k.N(), "autoplay-play-canvas");
        this.k.Y(this.element)
    }
    this.o = a.list;
    kv(this.template, "linkurl", eE(this.$.T(), this.videoId, this.o));
    var d = c = !1, e = !1;
    "1" != a.is_episodic ? this.o && "RD" == ZD(this.o).type ? e = !0 : this.o && (c = !0) : d = !0;
    P(this.element, "videowall-still-featured", !!a.featured);
    P(this.element, "videowall-still-list", c);
    P(this.element, "videowall-still-episodic", d);
    P(this.element, "videowall-still-mix", e)
};
f.select = function (a) {
    fE(this);
    gE(this.$.app, this.videoId, a ? this.A : this.C, this.o || void 0, void 0)
};
f.Fn = function () {
    var a = y() - this.B, b = this.k, c = a / 1E4;
    b.context.clearRect(0, 0, b.width, b.height);
    b.context.beginPath();
    b.context.arc(b.A, b.o, b.D + 2, 0, cE);
    b.context.fillStyle = "rgba(0, 0, 0, 0.6)";
    b.context.fill();
    var d = Math.sqrt(3) / 2 * b.k;
    b.context.save();
    b.context.fillStyle = "#fff";
    b.context.translate(b.A - b.k / 3, b.o);
    b.context.beginPath();
    b.context.lineTo(0, d / 2);
    b.context.lineTo(b.k / 1.25, 0);
    b.context.lineTo(0, -d / 2);
    b.context.closePath();
    b.context.fill();
    b.context.restore();
    b.context.beginPath();
    b.context.arc(b.A,
        b.o, b.D, bE, c * cE + bE, !1);
    b.context.lineWidth = 4;
    b.context.strokeStyle = "#fff";
    b.context.stroke();
    1E4 <= a ? this.select(!0) : this.j && this.j.start()
};
function hE(a) {
    a.j || (a.B = y(), a.j = new Jv(a.Fn, 50, a), S(a, a.j), a.Fn());
    N(a.element, "videowall-still-autoplay");
    lh(a.element, "videowall-still-autoplay-paused")
}

function fE(a) {
    a.j && (ti(a.j), a.j = null)
}

function iE(a) {
    fE(a);
    a.B = y();
    a.Fn();
    kh(a.element, ["videowall-still-autoplay", "videowall-still-autoplay-paused"])
}

f.zq = function (a) {
    a.preventDefault();
    jE(this) && (this.$.T().experiments.k && this.F.log({cancelButtonClick: "1"}), this.publish("autonavchangerequest", 1))
};
function kE(a) {
    jE(a) && (fE(a), P(a.element, "videowall-still-autoplay", !1), a.element.blur(), a.publish("autonavchangerequest", 1))
}

function jE(a) {
    return jh(a.element, "videowall-still-autoplay")
}

f.jF = function (a) {
    !1 !== a.Mb.returnValue && sv(a) && (this.select(!1), a.preventDefault())
};
f.kF = function (a) {
    switch (a.keyCode) {
        case 13:
        case 32:
            !1 !== a.Mb.returnValue && (this.select(), a.preventDefault())
    }
};
f.L = function () {
    kE(this);
    dE.J.L.call(this)
};
function lE(a, b, c) {
    HD.call(this, a, b, "videowall-endscreen");
    this.G = c;
    this.k = [];
    this.A = this.o = null;
    this.C = !1;
    this.F = new Jv(pa(N, this.element, "ytp-animate-tiles"), 0);
    S(this, this.F);
    this.D = new fv(["div", "ytp-endscreen-content"]);
    S(this, this.D);
    this.D.Y(this.element);
    this.hide()
}

inherit(lE, HD);
lE.C = 96;
lE.B = 54;
lE.k = 1;
lE.j = 2;
f = lE.prototype;
f.create = function () {
    lE.J.create.call(this);
    var a = this.j.getVideoData();
    a && (this.o = a.M);
    this.eg();
    this.Ya.subscribe("onResize", this.eg, this);
    this.Ya.subscribe("videodatachange", this.K, this);
    this.Ya.subscribe("autonavchange", this.I, this)
};
f.destroy = function () {
    this.Ya.unsubscribe("onResize", this.eg, this);
    this.Ya.unsubscribe("videodatachange", this.K, this);
    vi(this.k);
    this.o = [];
    this.k = [];
    lE.J.destroy.call(this)
};
f.Oh = function () {
    return 1 != this.j.getVideoData().ne
};
function mE(a) {
    return nE(a.j.T()) && a.Oh() && !a.A
}

f.show = function () {
    lE.J.show.call(this);
    this.F.start();
    if (this.C || this.A && this.A != this.j.getVideoData().ya)
        this.A = null, this.C = !1, this.eg();
    var a = !this.A && !!this.k[0].A && this.Oh() && nE(this.j.T());
    nE(this.j.T()) && this.j.T().experiments.k && this.G.log({
        cancelButtonShow: a ? "1" : "0",
        state: this.Oh() ? "enabled" : "disabled"
    });
    a ? (2 == this.j.getVideoData().ne ? hE(this.k[0]) : 3 == this.j.getVideoData().ne && iE(this.k[0]), this.k[0].subscribe("autonavchangerequest", this.H, this)) : this.A = this.j.getVideoData().ya
};
f.hide = function () {
    lE.J.hide.call(this);
    this.B && (this.k[0].unsubscribe("autonavchangerequest", this.H, this), kE(this.k[0]))
};
f.eg = function () {
    if (this.o && this.o.length) {
        var a = this.element, b;
        t: {
            if (jh(this.j.Ja(), "ad-showing") && (b = Dd("ad-container"))) {
                b = Ug(b).height + 20;
                break t
            }
            b = 0
        }
        Bg(a, "marginBottom", b + "px");
        var a = Ug(this.element), c = lE.C, d = lE.B, e = a.width / a.height, g = c / d, h = b = 0, k = Math.max(a.width / c, 2), l = Math.max(a.height / d, 2);
        mE(this) && (k = l = Math.min(k, l));
        for (var p = this.o.length, r = Math.pow(lE.j, 2), u = p * r, C = oE(this, 0, l, k), V = oE(this, 1, l, k), u = u + (Math.pow(C, 2) - r), u = u + (Math.pow(V, 2) - r); 0 < u && (b < k || h < l);) {
            var O = b / lE.j, fa = h / lE.j, sa = b <=
                k - lE.j && u >= fa * r, Ne = h <= l - lE.j && u >= O * r;
            if (O / fa * g > e && Ne)
                u -= O * r, h += lE.j;
            else if (sa)
                u -= fa * r, b += lE.j;
            else if (Ne)
                u -= O * r, h += lE.j;
            else
                break
        }
        g = !1;
        k = lE.j + C;
        u >= 3 * r && 6 >= p * r - u && (h >= k || b >= k) && V <= lE.j && (g = !0);
        c *= b;
        p = h * d;
        d = 1;
        d = c / p < e ? a.height / p : a.width / c;
        d = Math.min(d, lE.A);
        c *= d;
        p *= d;
        c *= Pc(a.width / c || 1, 1, lE.o);
        p *= Pc(a.height / p || 1, 1, lE.o);
        c = Math.floor(Math.min(a.width, c));
        p = Math.floor(Math.min(a.height, p));
        mE(this) && (c = a.width);
        e = this.D.N();
        Rg(e, c, p);
        Bg(e, {marginLeft: c / -2 + "px", marginTop: p / -2 + "px"});
        d = c + lE.k;
        r = p + lE.k;
        c = 0;
        u = !1;
        for (k = 0; k < b; k++)
            for (l = 0; l < h; l++)
                if (fa = V > lE.j && 1 <= c && !u ? c + 1 : c, O = 0, g && k >= b - lE.j && l >= h - lE.j ? O = 1 : 0 == l % lE.j && 0 == k % lE.j && (l < C && k < C ? 0 == l && 0 == k && (O = C) : V > lE.j && l >= h - V && k >= b - V ? l == h - V && k == b - V && (u = !0, fa = 1, O = V) : O = lE.j), 0 != O) {
                    p = this.k[c];
                    p || (p = new dE(this.j, this.G), this.k[c] = p, sa = p.N(), e.appendChild(sa));
                    p.oj(this.o[fa], 2 < O);
                    var fa = Math.floor(r * l / h), sa = Math.floor(d * k / b), Ne = Math.floor(r * (l + O) / h) - fa - lE.k, je = Math.floor(d * (k + O) / b) - sa - lE.k;
                    mE(this) && (sa = 0, je = a.width);
                    Hg(p.N(), sa, fa);
                    Rg(p.N(), je, Ne);
                    Bg(p.N(),
                        "transitionDelay", (l + k) / 50 + "s");
                    P(p.N(), "videowall-still-mini", 1 == O);
                    c++
                }
        for (a = this.k.length - 1; a >= c; a--)
            p = this.k[a], Sd(p.N()), ti(p);
        this.k.length = c
    }
};
lE.A = 1.42;
lE.o = 1.21;
lE.prototype.K = function () {
    var a = this.j.getVideoData().M;
    this.o != a && (this.o = a, this.eg())
};
lE.prototype.I = function (a) {
    var b = this.k[0] && jE(this.k[0]);
    1 == a ? (this.C = !1, this.A = this.j.getVideoData().ya, b && kE(this.k[0]), this.k[0] && this.eg()) : (this.C = !0, b && (2 == a ? hE(this.k[0]) : 3 == a && iE(this.k[0])))
};
lE.prototype.H = function (a) {
    this.I(a);
    this.publish("autonavchangerequest", a)
};
function oE(a, b, c, d) {
    a.j.T();
    var e = a.o.length;
    return 0 == b && mE(a) ? lE.j * Math.floor(Math.min(c, d) / lE.j) : 0 == b && c >= 3 * lE.j && d >= 3 * lE.j && 1 <= e && 1 == a.o[0].episodic ? 2 * lE.j : lE.j
}
;
function pE(a) {
    Is.call(this, a);
    Tf({});
    this.ua = "endscreen";
    this.sc = "end";
    this.k = null;
    var b = a.T();
    qE(a) ? this.k = new lE(this.j, this.P, this) : b.R ? (a = b.experiments.D, b = new MD(this.j, this.P, a), a
&&
    Q(b.k.N(), "click", x(this.AC, this)), this.k = b
) :
    this.k = new HD(this.j, this.P);
    this.k.Y(this.j.Ja())
}

inherit(pE, Is);
function rE(a) {
    return sE(a.T()) && 1 == a.vf()
}

function qE(a) {
    a = a.T();
    return a.ga && !a.R
}

f = pE.prototype;
f.Ca = function (a) {
    return rE(a)
};
f.create = function () {
    pE.J.create.call(this);
    tE(this);
    this.j.getVideoData().subscribe("dataupdated", this.qr, this)
};
f.destroy = function () {
    this.j.getVideoData().unsubscribe("dataupdated", this.qr, this);
    Ls(this);
    this.k.B && this.k.destroy();
    pE.J.destroy.call(this)
};
f.load = function () {
    pE.J.load.call(this);
    this.k.show();
    if (this.j.T().R && .01 > Math.random()) {
        var a = this.j.T().experiments.D;
        this.log({trailerEndscreenShow: 1, watchNext: a ? 1 : 0})
    }
};
f.unload = function () {
    pE.J.unload.call(this);
    this.k.hide()
};
f.zc = function (a) {
    pE.J.zc.call(this, a);
    var b = this.j.getVideoData(), c = !qE(this.j) || !(!b.M || !b.M.length);
    this.j.T();
    var b = Bv(b, "ypc_module"), d = uE(this.j.app);
    !c || b || d || (this.k.B || this.k.create(), "load" == a.getId() && this.load())
};
f.Oc = function (a) {
    "load" == a.getId() && this.loaded && this.unload();
    pE.J.Oc.call(this, a)
};
f.qr = function () {
    Ls(this);
    tE(this)
};
f.AC = function (a) {
    var b = this.k.k.videoId, b = eE(this.j.T(), b, null);
    Ps(this, b, a.ctrlKey)
};
function tE(a) {
    var b = Math.max(1E3 * (a.j.getVideoData().lengthSeconds - 10), 0), b = new ws(b, 2147483647, {id: "preload"}), c = new ws(2147483647, 2147483647, {
        id: "load",
        priority: 6
    });
    Js(a, [b, c])
}

function vE(a) {
    return rE(a) ? new pE(a) : null
}
;
function wE() {
    Y.call(this, ["div", "ytp-playlist-tray-index-length", ["span", "ytp-playlist-tray-index", "{{index}}"], " / ", ["span", "ytp-playlist-tray-length", "{{length}}"]])
}

inherit(wE, Y);
wE.prototype.mj = function (a) {
    kv(this.template, "index", a + 1)
};
function xE(a) {
    jB.call(this, a, "ytp-button-expand", Z(0, "YTP_ST_EXPAND"), "ytp-button-collapse", Z(0, "YTP_ST_COLLAPSE"));
    Sz(this, 3050);
    this.element.setAttribute("aria-haspopup", !0);
    this.ta([["div", "ytp-button-playlist-icon"], ["div", "ytp-button-playlist-text", Z(0, "YTP_PLAYLIST")]])
}

inherit(xE, jB);
function yE(a) {
    Y.call(this, ["div", "ytp-playlist-tray-controller"]);
    this.j = new xE(a);
    this.j.Y(this.template.N());
    S(this, this.j);
    this.k = new wE;
    this.k.Y(this.template.N());
    S(this, this.k)
}

inherit(yE, Y);
function zE(a, b) {
    var c = a.Fd("default.jpg");
    Y.call(this, ["div", "ytp-playlist-tray-item", {
        tabIndex: 3910,
        "aria-label": a.title,
        role: "menuitemradio"
    }, ["span", "ytp-playlist-tray-item-index", b + 1], ["span", "ytp-playlist-tray-item-now-playing", "\u25b6"], ["img", "ytp-playlist-tray-item-thumbnail", {src: c}], ["span", "ytp-playlist-tray-item-title", a.title], ["span", "ytp-playlist-tray-item-author", a.author]]);
    this.j = b;
    this.listen("keypress", this.k)
}

inherit(zE, Y);
zE.prototype.mj = function (a) {
    a = this.j == a;
    P(this.element, "ytp-playlist-tray-item-current", a);
    this.element.setAttribute("aria-checked", a)
};
zE.prototype.k = function (a) {
    if (13 == a.keyCode || 32 == a.keyCode)
        a.preventDefault(), this.Vb("click")
};
function AE() {
    GD.call(this, ["div", "ytp-playlist-tray-tray", {role: "menu"}]);
    this.j = null;
    this.k = []
}

inherit(AE, GD);
function BE(a, b) {
    a.j && a.j.unsubscribe("shuffle", a.o, a);
    a.j = b;
    a.j.subscribe("shuffle", a.o, a);
    a.o()
}

AE.prototype.o = function () {
    vi(this.k);
    this.k = [];
    Rd(this.element);
    for (var a = 0; a <= this.j.kc - 1; ++a) {
        var b = ir(this.j, a);
        b && (b = new zE(b, a), b.mj(this.j.Sa), this.k.push(b), b.listen("click", x(this.A, this, a)), b.Y(this.element))
    }
};
AE.prototype.A = function (a) {
    this.publish("playvideoat", a)
};
AE.prototype.L = function () {
    vi(this.k);
    this.k = [];
    Rd(this.element);
    AE.J.L.call(this)
};
function CE(a) {
    Is.call(this, a);
    var b = a.Ja();
    this.F = a.app.o.k;
    this.C = !1;
    this.o = this.A = null;
    this.D = Dd("ytp-button-playlist", b);
    Q(this.D, "click", x(this.Mq, this));
    this.k = this.B = null
}

inherit(CE, Is);
f = CE.prototype;
f.ua = "playlist";
f.create = function () {
    CE.J.create.call(this);
    DE(this, this.j.rd());
    this.B = new fv(["div", ["ytp-playlist-tray-container", "ytp-player-content"]]);
    this.B.Y(this.j.Ja());
    this.o = new AE;
    this.o.subscribe("playvideoat", this.ur, this);
    this.o.Y(this.B.N(), 0);
    this.k = new yE(this.F);
    this.k.Y(Dd("html5-title", void 0), 0);
    this.k.j.listen("click", this.Mq, this);
    this.subscribe("fullscreentoggled", this.Gq, this);
    this.subscribe("videodatachange", this.qt, this);
    this.subscribe("clearvideooverlays", this.ls, this);
    this.Dj()
};
f.Dj = function () {
    var a = this.j.Ss(), b = this.k.k;
    null != a ? b.show() : b.hide();
    this.k.k.mj(a);
    a = this.j.rd();
    kv(this.k.k.template, "length", a.kc)
};
f.destroy = function () {
    CE.J.destroy.call(this);
    DE(this, null);
    this.unsubscribe("fullscreentoggled", this.Gq, this);
    this.unsubscribe("videodatachange", this.qt, this);
    this.unsubscribe("clearvideooverlays", this.ls, this);
    Sd(this.B.N());
    this.o.dispose();
    this.o = null;
    this.B.dispose();
    this.B = null;
    Sd(this.k.N());
    this.k.dispose();
    this.k = null
};
f.load = function () {
    this.publish("command_clear_video_overlays", !0);
    CE.J.load.call(this);
    this.C || (BE(this.o, this.A), this.C = !0);
    for (var a = this.o, b = 0; b < a.k.length; b++)
        a.k[b].mj(a.j.Sa);
    kB(this.k.j)
};
f.unload = function () {
    CE.J.unload.call(this);
    this.C = !1;
    lB(this.k.j)
};
f.ls = function () {
    this.loaded && this.unload()
};
f.ur = function (a) {
    this.j.xn(a);
    this.publish("command_clear_video_overlays", !1)
};
f.Mq = function () {
    this.loaded ? this.publish("command_clear_video_overlays", !1) : this.load()
};
f.Gq = function (a) {
    var b = this.j.T().da;
    this.loaded && !a && "detailpage" == b && this.publish("command_clear_video_overlays", !1)
};
f.qt = function () {
    DE(this, this.j.rd());
    this.C && BE(this.o, this.A);
    this.Dj()
};
function DE(a, b) {
    a.A && a.A.unsubscribe("shuffle", a.Dj, a);
    a.A = b;
    a.A && a.A.subscribe("shuffle", a.Dj, a)
}

CE.Ca = function (a) {
    return !!a.rd() && !0
};
CE.prototype.Ca = function (a) {
    return CE.Ca(a)
};
CE.prototype.Lm = function (a) {
    return !CE.Ca(a)
};
CE.j = function (a) {
    return CE.Ca(a) ? new CE(a) : null
};
CE.prototype.L = function () {
    this.o.unsubscribe("playvideoat", this.ur, this);
    Hh(this.D);
    CE.J.L.call(this)
};
function EE(a) {
    hg("/gen_204?" + a, void 0)
}

function FE(a, b, c, d, e, g) {
    var h = {};
    b && (h.v = b);
    c && (h.list = c);
    d && (h.url = d);
    a = {name: a, locale: e, feature: g};
    for (var k in h)
        a[k] = h[k];
    h = Re("/sharing_services", a);
    hg(h)
}
;
function GE(a, b) {
    R.call(this);
    this.j = a;
    this.k = !!b
}

inherit(GE, R);
function HE(a, b, c) {
    if (c)
        if (a.k)
            c({id: b, fmt_list: [{itag: 18, lmt: 14200992E5}]});
        else {
            var d;
            a.j && (d = IE(a.j));
            d && b ? (d = [d, "cache/videos", b, "metadata"].join("/"), Bj(d, {format: "JSON",method: "GET",context: a,timeout: 600,fb: function
            (a, d)
            {
                c(d);
                JE("success", {v: b})
            }
        ,
            onError: function () {
                JE("error", {v: b});
                c({})
            }
        ,
            Ge: function () {
                JE("timeout", {v: b});
                KE("__notfound__");
                c({})
            }
        }
)) :
    c({})
}
}
