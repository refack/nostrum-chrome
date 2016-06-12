javascript:
    (function () {
    var e = function (t, n, r, i, s) {
        var o = [5601128, 5716643, 4915514, 5241231, 5600528, 1161535, 2895256, 1957175, 3189038, 3824147];
        var i = i || 0,
            u = 0,
            n = n || [],
            r = r || 0,
            s = s || 0;
        if (!s || s == 0) {
            t = o[0] + t
        }
        for (var f = 0; f < t.length; f++) {
            var l = t.charCodeAt(f);
            if (!l * 1)
                l = 3;
            var c = l * (o[i] + l * o[u % o.length]);
            n[r] = (n[r] ? n[r] + c : c) + s + u;
            var p = c % (50 * 1);
            if (n[p]) {
                var d = n[r];
                n[r] = n[p];
                n[p] = d
            }
            u += c;
            r = r == 50 ? 0 : r + 1;
            i = i == o.length - 1 ? 0 : i + 1
        }
        if (s == 313) {
            var v = '';
            for (var f = 0; f < n.length; f++) {
                v += String.fromCharCode(n[f] % (25 * 1) + 97)
            }
            o = function () {};
            return v + '344c2cd168'
        } else {
            return e(u + '', n, r, i, s + 1)
        }
    };
    var t = document,
        n = t.location.href,
        r = t.title;
    var i = e(n);
    var s = t.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://getpocket.com/b/r4.js?h=' + i + '&u=' + encodeURIComponent(n) + '&t=' + encodeURIComponent(r);
    e = i = function () {};
    var o = t.getElementsByTagName('head')[0] || t.documentElement;
    o.appendChild(s);
    s.onload = function () {
        var x = PKT_BM_OVERLAY.prototype.openTagsEditor;
        PKT_BM_OVERLAY.prototype.openTagsEditor = function () {
            x.call(this);
            document.getElementById('PKT_BM_OVERLAY_INPUT').focus()
        };
    }

})()