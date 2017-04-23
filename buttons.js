(function () {
    var t, e, n, r, o, i, a, c, l, u, s, h, d, f, p, g, m, y, b, v = [].slice, w = function (t, e) {
        function n() {
            this.constructor = t
        }

        for (var r in e)C.call(e, r) && (t[r] = e[r]);
        return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
    }, C = {}.hasOwnProperty;
    b = this, y = b.document, o = "https://api.github.com", r = "github-button", i = "octicon", a = i + "-mark-github", c = !{}.hasOwnProperty.call(y, "currentScript") && delete y.currentScript && y.currentScript ? y.currentScript.src.replace(/[^\/]*([?#].*)?$/, "") : (/^http:/.test(y.location) ? "http" : "https") + "://buttons.github.io/", l = "faa75404-3b97-5585-b449-4bc51338fbd1", g = function () {
        function t() {
        }

        return t.deepProperty = function (t, e) {
            var n, r, o;
            if (null == e)return t;
            for (r = e.split(/\.|(?=\[\d+\])/); r.length && null != t;)n = r.shift(), (o = n.match(/^\[(\d+)\]$/)) && (n = +o[1]), t = t[n];
            return t
        }, t
    }(), p = function () {
        function t() {
        }

        return t.numberWithDelimiter = function (t) {
            return ("" + t).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }, t
    }(), m = function () {
        function t() {
        }

        return t.stringify = function (t) {
            var e, n, r;
            n = [];
            for (e in t)r = t[e], n.push(encodeURIComponent(e) + "=" + (null != r ? encodeURIComponent(r) : ""));
            return n.join("&")
        }, t.parse = function (t) {
            var e, n, r, o, i, a, c, l;
            for (o = {}, a = t.split("&"), e = 0, r = a.length; e < r; e++)"" !== (i = a[e]) && (c = i.split("="), n = c[0], l = 2 <= c.length ? v.call(c, 1) : [], "" !== n && (o[decodeURIComponent(n)] = decodeURIComponent(l.join("="))));
            return o
        }, t
    }(), f = function () {
        function t() {
        }

        return t.encode = function (t) {
            return "#" + m.stringify(t)
        }, t.decode = function (t) {
            return null == t && (t = y.location.hash), m.parse(t.replace(/^#/, "")) || {}
        }, t
    }(), h = function () {
        function t(t) {
            this.$ = t
        }

        var e, n;
        return t.prototype.on = function () {
            var t, n, r, o, i, a, c;
            for (r = 2 <= arguments.length ? v.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), o = arguments[i++], t = function (t) {
                return function (e) {
                    return o.call(t, e || b.event)
                }
            }(this), a = 0, c = r.length; a < c; a++)n = r[a], e(this.$, n, t)
        }, t.prototype.once = function () {
            var t, r, o, i, a, c, l;
            for (o = 2 <= arguments.length ? v.call(arguments, 0, a = arguments.length - 1) : (a = 0, []), i = arguments[a++], t = function (e) {
                return function (r) {
                    var a, c, l;
                    for (c = 0, l = o.length; c < l; c++)a = o[c], n(e.$, a, t);
                    return i.call(e, r || b.event)
                }
            }(this), c = 0, l = o.length; c < l; c++)r = o[c], e(this.$, r, t)
        }, e = function (t, e, n) {
            t.addEventListener ? t.addEventListener("" + e, n) : t.attachEvent("on" + e, n)
        }, n = function (t, e, n) {
            t.removeEventListener ? t.removeEventListener("" + e, n) : t.detachEvent("on" + e, n)
        }, t
    }(), s = function (t) {
        function e(t, e) {
            this.$ = t && 1 === t.nodeType ? t : y.createElement(t), e && e.call(this, this.$)
        }

        return w(e, t), e
    }(h), d = function (t) {
        function e(t) {
            e.__super__.constructor.call(this, "iframe", function (e) {
                var n, r, o;
                r = {allowtransparency: !0, scrolling: "no", frameBorder: 0};
                for (n in r)o = r[n], e.setAttribute(n, o);
                e.style.cssText = "width: 1px; height: 0; border: none", e.src = "javascript:0", t && t.call(this, e)
            })
        }

        var n, r;
        return w(e, t), e.prototype.html = function (t) {
            var e;
            try {
                e = this.$.contentWindow.document, e.open().write(t), e.close()
            } catch (t) {
            }
        }, e.prototype.load = function (t) {
            this.$.src = t
        }, e.prototype.size = function () {
            var t, e, n, o, i, a;
            try {
                return n = this.$.contentWindow.document, i = n.documentElement, t = n.body, a = i.scrollWidth, o = i.scrollHeight, t.getBoundingClientRect && (t.style.display = "inline-block", e = t.getBoundingClientRect(), a = Math.max(a, r(e.width || e.right - e.left)), o = Math.max(o, r(e.height || e.bottom - e.top)), t.style.display = ""), {
                    width: a + 2 + "px",
                    height: o + "px"
                }
            } catch (t) {
            }
        }, e.prototype.resize = function (t) {
            var e, n, r;
            n = null != t ? t : this.size() || {}, r = n.width, e = n.height, r && (this.$.style.width = r), e && (this.$.style.height = e)
        }, n = b.devicePixelRatio || 1, r = function (t) {
            return (n > 1 ? Math.ceil(Math.round(t * n) / n * 2) / 2 : Math.ceil(t)) || 0
        }, e
    }(s), t = function () {
        function t() {
        }

        return t.parse = function (t) {
            var e, n, r, o, i;
            for (o = {
                href: t.href,
                text: t.getAttribute("data-text") || t.textContent || t.innerText || ""
            }, i = ["data-count-api", "data-count-href", "data-count-aria-label", "data-style", "data-icon", "aria-label"], n = 0, r = i.length; n < r; n++)e = i[n], o[e] = t.getAttribute(e) || "";
            return o
        }, t
    }(), e = function (t) {
        function e(t, n, r) {
            var o;
            e.__super__.constructor.call(this, n), o = function (e) {
                return function () {
                    var n;
                    o = null, n = e.size(), e.$.parentNode.removeChild(e.$), e.once("load", function () {
                        this.resize(n)
                    }), e.load(c + "buttons.html" + t), r && r.call(e, e.$)
                }
            }(this), this.once("load", function () {
                var t;
                (t = this.$.contentWindow.callback) ? new s(t.script, function (t) {
                    this.on("load", "error", function () {
                        o && o()
                    }), t.readyState && this.on("readystatechange", function () {
                        !/i/.test(t.readyState) && o && o()
                    })
                }) : o()
            }), this.html('<!DOCTYPE html><html><head><meta charset="utf-8"><title>' + l + '</title><link rel="stylesheet" href="' + c + 'assets/css/buttons.css"><script>document.location.hash = "' + t + '";</script></head><body><script src="' + c + 'buttons.js"></script></body></html>')
        }

        return w(e, t), e
    }(d), n = function () {
        function t(t) {
            t && (y.body.className = t["data-style"] || "", new e(t.href, null, function (e) {
                var n;
                e.className = "button", (n = t["aria-label"]) && e.setAttribute("aria-label", n), new s("i", function (n) {
                    n.className = i + " " + (t["data-icon"] || a), n.setAttribute("aria-hidden", "true"), e.appendChild(n)
                }), e.appendChild(y.createTextNode(" ")), new s("span", function (n) {
                    t.text && n.appendChild(y.createTextNode(t.text)), e.appendChild(n)
                }), y.body.appendChild(e)
            }), function () {
                var n;
                (n = t["data-count-api"]) && new e(t["data-count-href"] || t.href, t.href, function (e) {
                    e.className = "count", new s("b", function (t) {
                        e.appendChild(t)
                    }), new s("i", function (t) {
                        e.appendChild(t)
                    }), new s("span", function (r) {
                        new s("script", function (i) {
                            var a;
                            i.async = !0, i.src = o + function () {
                                    var t, e;
                                    return t = n.replace(/^(?!\/)/, "/").split("#")[0], e = m.parse(t.split("?").slice(1).join("?")), e.callback = "callback", t.split("?")[0] + "?" + m.stringify(e)
                                }(), b.callback = function (o) {
                                var i, a;
                                b.callback = null, 200 === o.meta.status && (a = g.deepProperty(o.data, n.split("#").slice(1).join("#")), "[object Number]" === {}.toString.call(a) && (a = p.numberWithDelimiter(a)), r.appendChild(y.createTextNode(a)), e.appendChild(r), (i = t["data-count-aria-label"]) && e.setAttribute("aria-label", i.replace("#", a)), y.body.appendChild(e))
                            }, b.callback.script = i, this.on("error", function () {
                                b.callback = null
                            }), i.readyState && this.on("readystatechange", function () {
                                "loaded" === i.readyState && i.children && "loading" === i.readyState && (b.callback = null)
                            }), a = y.getElementsByTagName("head")[0], "[object Opera]" === {}.toString.call(b.opera) ? new h(y).on("DOMContentLoaded", function () {
                                a.appendChild(i)
                            }) : a.appendChild(i)
                        })
                    })
                })
            }())
        }

        var e;
        return e = function (t) {
            function e(t, a, c) {
                e.__super__.constructor.call(this, "a", function (e) {
                    if (n) {
                        if ((e.href = a) && e.protocol !== r)try {
                            e.href = new URL(t, a).href
                        } catch (r) {
                            n.href = a, e.href = t, new s("div", function (t) {
                                t.innerHTML = e.outerHTML, e.href = t.lastChild.href, t = null
                            }), n.href = y.location.href, n.removeAttribute("href")
                        } else e.href = t;
                        o.test(e.href) && (e.target = "_top"), e.protocol !== r && i.test("." + e.hostname) || (e.href = "#", e.target = "_self")
                    }
                    c(e)
                })
            }

            var n, r, o, i;
            return w(e, t), n = y.getElementsByTagName("base")[0], r = "javascript:", i = /\.github\.com$/, o = /^https?:\/\/((gist\.)?github\.com\/[^\/]+\/[^\/]+\/archive\/|github\.com\/[^\/]+\/[^\/]+\/releases\/download\/|codeload\.github\.com\/)/, e
        }(s), t
    }(), u = function () {
        function t(t) {
            var e;
            /m/.test(y.readyState) || !/g/.test(y.readyState) && !y.documentElement.doScroll ? b.setTimeout(t) : y.addEventListener ? new h(y).once("DOMContentLoaded", t) : (e = function () {
                /m/.test(y.readyState) && (y.detachEvent("onreadystatechange", e), t && t())
            }, y.attachEvent("onreadystatechange", e))
        }

        return t
    }(), y.title === l ? new n(f.decode()) : new u(function () {
        var n, o, i, a, c, l;
        for (i = y.querySelectorAll ? y.querySelectorAll("a." + r) : function () {
            var t, e, o, i;
            for (o = y.getElementsByTagName("a"), i = [], t = 0, e = o.length; t < e; t++)n = o[t], ~(" " + n.className + " ").replace(/[ \t\n\f\r]+/g, " ").indexOf(" " + r + " ") && i.push(n);
            return i
        }(), a = function (n) {
            new e(f.encode(t.parse(n)), function (t) {
                y.body.appendChild(t)
            }, function (t) {
                n.parentNode.replaceChild(t, n)
            })
        }, c = 0, l = i.length; c < l; c++)o = i[c], a(o)
    })
}).call(this);
//# sourceMappingURL=buttons.js.map