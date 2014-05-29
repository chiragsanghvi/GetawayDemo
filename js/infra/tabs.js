$.ZOZIApp = {
    TRANSITION_SPEED: 200,SLOW_TRANSITION_SPEED: 500,openMenus: [],init: function() {
        $.ZOZIApp.mobile_menu_open(), $.ZOZIApp.mobile_menu_close()
    },is_tablet: function() {
        return $(window).width() <= 1024
    },is_mobile: function() {
        return $(window).width() <= 768
    },is_small_screen: function() {
        return $(window).width() <= 480
    },mobile_menu_open: function() {
        
    },mobile_menu_close: function() {
        
    },dispatch_menu_close: function() {
        $(document).trigger({type: $.ZOZIEvents.MODAL_MENU_CLOSE,context: "Zozi-app"})
    },close_all_menus: function() {
        $(".modal-shade").fadeOut($.ZOZIApp.TRANSITION_SPEED), $(".modal-shade").off("click", $.ZOZIApp.dispatch_menu_close), $(window).off("resize", $.ZOZIApp.dispatch_menu_close)
    },add_flash_error: function(e) {
        var t = $(".relative-flash"), n = $('<div id="flash_error" class="flash_message" style="overflow: hidden;"></div>'), r = $('<p><a href="#" class="close_flash" title="close"></a>' + e + "</p>");
        n.append(r), t.html(n), $(".close_flash").on("click", function(e) {
            n.slideUp().hide()
        }), $(window).scrollTop("flashError")
    }}, $(function() {
    $.ZOZIApp.init()
}), $.ZOZIEvents = {MODAL_MENU_OPEN: "zozi-modal-menu-open",MODAL_MENU_CLOSE: "zozi-modal-menu-close",FILTER_SELECTED: "zozi-filter-selected",FILTER_UNSELECTED: "zozi-filter-unselected",ADD_ITEM_TO_CART: "zozi-add-item-to-cart",CART_QUANTITY_UPDATED: "zozi-cart-quantity-updated",CART_UPDATE_ERROR: "zozi-cart-update-error"};
var _AvantMetrics = _AvantMetrics || [], AvantMetrics;
this._AvantMetrics && !this.AvantMetrics && (AvantMetrics = function() {
    function u(e) {
        return typeof e != "undefined"
    }
    function a(e) {
        var n = new RegExp("(^|;)[ ]*" + e + "=([^;]*)"), r = n.exec(t.cookie);
        return r ? i(r[2]) : "0"
    }
    function f(e) {
        var t = document.createElement("script");
        t.type = "text/javascript", t.async = !0, t.src = e;
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(t, n)
    }
    function l() {
        var e = "";
        try {
            e = top.document.referrer
        } catch (n) {
            if (parent)
                try {
                    e = parent.document.referrer
                } catch (r) {
                    e = ""
                }
        }
        return e === "" && (e = t.referrer), e
    }
    function c(n) {
        var i;
        i = e + "?url=" + r(t.location.href) + "&ref=" + r(l()) + "&name=" + r(t.title) + "&avmws=" + r(a("avmws")) + "&rand=" + Math.random() + "&lib=1", u(n) && (i += "&data=" + r(s(n))), f(i)
    }
    function h() {
        var e = a("avmws");
        if (e.indexOf("-hgco.1") > -1)
            try {
                var n = t.getElementsByTagName("input"), r = n.length;
                for (var i = 0; i < r; i++)
                    if (n[i].type == "image" && n[i].src.toLowerCase().indexOf("https://checkout.google.com") == 0) {
                        n[i].style.visibility = "hidden";
                        break
                    }
            } catch (s) {
            }
    }
    var e = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".avmws.com/1012513/", t = document, n = window, r = n.encodeURIComponent || escape, i = n.decodeURIComponent || unescape, s = function(e) {
        function r(e) {
            return t.lastIndex = 0, t.test(e) ? '"' + e.replace(t, function(e) {
                var t = n[e];
                return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }
        function i(e) {
            return e < 10 ? "0" + e : e
        }
        function s(e, t) {
            var n, o, u, a, f = t[e];
            if (f === null)
                return "null";
            switch (typeof f) {
                case "string":
                    return r(f);
                case "number":
                    return isFinite(f) ? String(f) : "null";
                case "boolean":
                case "null":
                    return String(f);
                case "object":
                    a = [];
                    if (f instanceof Array) {
                        for (n = 0; n < f.length; n++)
                            a[n] = s(n, f) || "null";
                        return u = a.length === 0 ? "[]" : "[" + a.join(",") + "]", u
                    }
                    if (f instanceof Date)
                        return r(f.getUTCFullYear() + "-" + i(f.getUTCMonth() + 1) + "-" + i(f.getUTCDate()) + "T" + i(f.getUTCHours()) + ":" + i(f.getUTCMinutes()) + ":" + i(f.getUTCSeconds()) + "Z");
                    for (o in f)
                        u = s(o, f), u && (a[a.length] = r(o) + ":" + u);
                    return u = a.length === 0 ? "{}" : "{" + a.join(",") + "}", u
            }
        }
        var t = new RegExp('[\\"\0--Ã‚Å¸Ã‚Â­Ã˜â‚¬-Ã˜â€žÃœÂÃ¡Å¾Â´Ã¡Å¾ÂµÃ¢â‚¬Å’-Ã¢â‚¬Â\u2028-Ã¢â‚¬Â¯Ã¢Â -Ã¢ÂÂ¯Ã¯Â»Â¿Ã¯Â¿Â°-Ã¯Â¿Â¿]', "g"), n = {"\b": "\\b","	": "\\t","\n": "\\n","\f": "\\f","\r": "\\r",'"': '\\"',"\\": "\\\\"};
        return s("", {"": e})
    }, o = !1;
    try {
        h();
        for (var p in this._AvantMetrics)
            switch (this._AvantMetrics[p][0]) {
                case "order":
                    o = !0;
                    break;
                default:
            }
        o ? c(this._AvantMetrics) : (new RegExp("avad")).exec(document.location.href) && c()
    } catch (d) {
    }
}());
var libFuncName = null;
if (typeof jQuery == "undefined" && typeof Zepto == "undefined" && typeof $ == "function")
    libFuncName = $;
else if (typeof jQuery == "function")
    libFuncName = jQuery;
else {
    if (typeof Zepto != "function")
        throw new TypeError;
    libFuncName = Zepto
}
(function(e) {
    (function() {
        Array.prototype.filter || (Array.prototype.filter = function(e) {
            "use strict";
            if (this == null)
                throw new TypeError;
            var t = Object(this), n = t.length >>> 0;
            if (typeof e != "function")
                try {
                    throw new TypeError
                } catch (r) {
                    return
                }
            var i = [], s = arguments[1];
            for (var o = 0; o < n; o++)
                if (o in t) {
                    var u = t[o];
                    e && e.call(s, u, o, t) && i.push(u)
                }
            return i
        }, Function.prototype.bind || (Function.prototype.bind = function(e) {
            if (typeof this != "function")
                throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var t = Array.prototype.slice.call(arguments, 1), n = this, r = function() {
            }, i = function() {
                return n.apply(this instanceof r && e ? this : e, t.concat(Array.prototype.slice.call(arguments)))
            };
            return r.prototype = this.prototype, i.prototype = new r, i
        })), e.fn.stop = e.fn.stop || function() {
            return this
        }
    })(), function(t, n, r) {
        "use strict";
        t.Foundation = {name: "Foundation",version: "4.1.0",cache: {},init: function(t, n, r, i, s, o) {
                var u, a = [t, r, i, s], f = [], o = o || !1;
                o && (this.nc = o), this.rtl = /rtl/i.test(e("html").attr("dir")), this.scope = t || this.scope;
                if (n && typeof n == "string") {
                    if (/off/i.test(n))
                        return this.off();
                    u = n.split(" ");
                    if (u.length > 0)
                        for (var l = u.length - 1; l >= 0; l--)
                            f.push(this.init_lib(u[l], a))
                } else
                    for (var c in this.libs)
                        f.push(this.init_lib(c, a));
                return typeof n == "function" && a.unshift(n), this.response_obj(f, a)
            },response_obj: function(e, t) {
                try{
                for (var n in t)
                    if (typeof t[n] == "function")
                        return t[n]({errors: e.filter(function(e) {
                                if (typeof e == "string")
                                    return e
                            })});
                } catch(d){}
                return e
            },init_lib: function(e, t) {
                return this.trap(function() {
                    if (this.libs.hasOwnProperty(e))
                        return this.patch(this.libs[e]), this.libs[e].init.apply(this.libs[e], t)
                }.bind(this), e)
            },trap: function(e, t) {
                if (!this.nc)
                    try {
                        return e()
                    } catch (n) {
                        return this.error({name: t,message: "could not be initialized",more: n.name + " " + n.message})
                    }
                return e()
            },patch: function(e) {
                this.fix_outer(e), e.scope = this.scope, e.rtl = this.rtl
            },inherit: function(e, t) {
                var n = t.split(" ");
                for (var r = n.length - 1; r >= 0; r--)
                    this.lib_methods.hasOwnProperty(n[r]) && (this.libs[e.name][n[r]] = this.lib_methods[n[r]])
            },random_str: function(e) {
                var t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");
                e || (e = Math.floor(Math.random() * t.length));
                var n = "";
                for (var r = 0; r < e; r++)
                    n += t[Math.floor(Math.random() * t.length)];
                return n
            },libs: {},lib_methods: {set_data: function(e, t) {
                    var n = [this.name, +(new Date), Foundation.random_str(5)].join("-");
                    return Foundation.cache[n] = t, e.attr("data-" + this.name + "-id", n), t
                },get_data: function(e) {
                    return Foundation.cache[e.attr("data-" + this.name + "-id")]
                },remove_data: function(t) {
                    t ? (delete Foundation.cache[t.attr("data-" + this.name + "-id")], t.attr("data-" + this.name + "-id", "")) : e("[data-" + this.name + "-id]").each(function() {
                        delete Foundation.cache[e(this).attr("data-" + this.name + "-id")], e(this).attr("data-" + this.name + "-id", "")
                    })
                },throttle: function(e, t) {
                    var n = null;
                    return function() {
                        var r = this, i = arguments;
                        clearTimeout(n), n = setTimeout(function() {
                            e.apply(r, i)
                        }, t)
                    }
                },data_options: function(t) {
                    function u(e) {
                        return !isNaN(e - 0) && e !== null && e !== "" && e !== !1 && e !== !0
                    }
                    function a(t) {
                        return typeof t == "string" ? e.trim(t) : t
                    }
                    var n = {}, r, i, s = (t.attr("data-options") || ":").split(";"), o = s.length;
                    for (r = o - 1; r >= 0; r--)
                        i = s[r].split(":"), /true/i.test(i[1]) && (i[1] = !0), /false/i.test(i[1]) && (i[1] = !1), u(i[1]) && (i[1] = parseInt(i[1], 10)), i.length === 2 && i[0].length > 0 && (n[a(i[0])] = a(i[1]));
                    return n
                },delay: function(e, t) {
                    return setTimeout(e, t)
                },scrollTo: function(n, r, i) {
                    if (i < 0)
                        return;
                    var s = r - e(t).scrollTop(), o = s / i * 10;
                    this.scrollToTimerCache = setTimeout(function() {
                        isNaN(parseInt(o, 10)) || (t.scrollTo(0, e(t).scrollTop() + o), this.scrollTo(n, r, i - 10))
                    }.bind(this), 10)
                },scrollLeft: function(e) {
                    if (!e.length)
                        return;
                    return "scrollLeft" in e[0] ? e[0].scrollLeft : e[0].pageXOffset
                },empty: function(e) {
                    if (e.length && e.length > 0)
                        return !1;
                    if (e.length && e.length === 0)
                        return !0;
                    for (var t in e)
                        if (hasOwnProperty.call(e, t))
                            return !1;
                    return !0
                }},fix_outer: function(e) {
                e.outerHeight = function(e, t) {
                    return typeof Zepto == "function" ? e.height() : typeof t != "undefined" ? e.outerHeight(t) : e.outerHeight()
                }, e.outerWidth = function(e) {
                    return typeof Zepto == "function" ? e.width() : typeof bool != "undefined" ? e.outerWidth(bool) : e.outerWidth()
                }
            },error: function(e) {
                return e.name + " " + e.message + "; " + e.more
            },off: function() {
                return e(this.scope).off(".fndtn"), e(t).off(".fndtn"), !0
            },zj: function() {
                try {
                    return Zepto
                } catch (e) {
                    return jQuery
                }
            }()}, e.fn.foundation = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return this.each(function() {
                return Foundation.init.apply(Foundation, [this].concat(e)), this
            })
        }
    }(this, this.document)
})(libFuncName), function(e, t, n, r) {
    "use strict";
    Foundation.libs.alerts = {name: "alerts",version: "4.0.0",settings: {speed: 300,callback: function() {
            }},init: function(t, n, r) {
            return this.scope = t || this.scope, typeof n == "object" && e.extend(!0, this.settings, n), typeof n != "string" ? (this.settings.init || this.events(), this.settings.init) : this[n].call(this, r)
        },events: function() {
            var t = this;
            e(this.scope).on("click.fndtn.alerts", "[data-alert] a.close", function(n) {
                n.preventDefault(), e(this).closest("[data-alert]").fadeOut(t.speed, function() {
                    e(this).remove(), t.settings.callback()
                })
            }), this.settings.init = !0
        },off: function() {
            e(this.scope).off(".fndtn.alerts")
        }}
}(Foundation.zj, this, this.document), function(e, t, n, r) {
    "use strict";
    Foundation.libs.clearing = {name: "clearing",version: "4.1.0",settings: {templates: {viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><img src="//:0"><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'},close_selectors: ".clearing-close",init: !1,locked: !1},init: function(t, n) {
            return Foundation.inherit(this, "set_data get_data remove_data throttle"), typeof t == "object" && (n = e.extend(!0, this.settings, t)), typeof t != "string" ? (e(this.scope).find("ul[data-clearing]").each(function() {
                var t = Foundation.libs.clearing, n = e(this), r = r || {}, i = t.get_data(n);
                i || (r.$parent = n.parent(), t.set_data(n, e.extend(!0, t.settings, r)), t.assemble(n.find("li")), t.settings.init || t.events().swipe_events())
            }), this.settings.init) : this[t].call(this, n)
        },events: function() {
            var n = this;
            return e(this.scope).on("click.fndtn.clearing", "ul[data-clearing] li", function(t, r, i) {
                var r = r || e(this), i = i || r, s = n.get_data(r.parent());
                t.preventDefault(), s || n.init(), n.open(e(t.target), r, i), n.update_paddles(i)
            }).on("click.fndtn.clearing", ".clearing-main-next", function(e) {
                this.nav(e, "next")
            }.bind(this)).on("click.fndtn.clearing", ".clearing-main-prev", function(e) {
                this.nav(e, "prev")
            }.bind(this)).on("click.fndtn.clearing", this.settings.close_selectors, function(e) {
                Foundation.libs.clearing.close(e, this)
            }).on("keydown.fndtn.clearing", function(e) {
                this.keydown(e)
            }.bind(this)), e(t).on("resize.fndtn.clearing", function(e) {
                this.resize()
            }.bind(this)), this.settings.init = !0, this
        },swipe_events: function() {
            var t = this;
            e(this.scope).on("touchstart.fndtn.clearing", ".visible-img", function(t) {
                t.touches || (t = t.originalEvent);
                var n = {start_page_x: t.touches[0].pageX,start_page_y: t.touches[0].pageY,start_time: (new Date).getTime(),delta_x: 0,is_scrolling: r};
                e(this).data("swipe-transition", n), t.stopPropagation()
            }).on("touchmove.fndtn.clearing", ".visible-img", function(n) {
                n.touches || (n = n.originalEvent);
                if (n.touches.length > 1 || n.scale && n.scale !== 1)
                    return;
                var r = e(this).data("swipe-transition");
                typeof r == "undefined" && (r = {}), r.delta_x = n.touches[0].pageX - r.start_page_x, typeof r.is_scrolling == "undefined" && (r.is_scrolling = !!(r.is_scrolling || Math.abs(r.delta_x) < Math.abs(n.touches[0].pageY - r.start_page_y)));
                if (!r.is_scrolling && !r.active) {
                    n.preventDefault();
                    var i = r.delta_x < 0 ? "next" : "prev";
                    r.active = !0, t.nav(n, i)
                }
            }).on("touchend.fndtn.clearing", ".visible-img", function(t) {
                e(this).data("swipe-transition", {}), t.stopPropagation()
            })
        },assemble: function(e) {
            var t = e.parent(), n = this.get_data(t), r = t.detach(), i = {grid: '<div class="carousel">' + this.outerHTML(r[0]) + "</div>",viewing: n.templates.viewing}, s = '<div class="clearing-assembled"><div>' + i.viewing + i.grid + "</div></div>";
            return n.$parent.append(s)
        },open: function(e, t, n) {
            var r = n.closest(".clearing-assembled"), i = r.find("div").first(), s = i.find(".visible-img"), o = s.find("img").not(e);
            this.locked() || (o.attr("src", this.load(e)), this.loaded(o, function() {
                r.addClass("clearing-blackout"), i.addClass("clearing-container"), s.show(), this.fix_height(n).caption(s.find(".clearing-caption"), e).center(o).shift(t, n, function() {
                    n.siblings().removeClass("visible"), n.addClass("visible")
                })
            }.bind(this)))
        },close: function(t, n) {
            t.preventDefault();
            var r = function(e) {
                return /blackout/.test(e.selector) ? e : e.closest(".clearing-blackout")
            }(e(n)), i, s;
            return n === t.target && r && (i = r.find("div").first(), s = i.find(".visible-img"), this.settings.prev_index = 0, r.find("ul[data-clearing]").attr("style", "").closest(".clearing-blackout").removeClass("clearing-blackout"), i.removeClass("clearing-container"), s.hide()), !1
        },keydown: function(t) {
            var n = e(".clearing-blackout").find("ul[data-clearing]");
            t.which === 39 && this.go(n, "next"), t.which === 37 && this.go(n, "prev"), t.which === 27 && e("a.clearing-close").trigger("click")
        },nav: function(t, n) {
            var r = e(".clearing-blackout").find("ul[data-clearing]");
            t.preventDefault(), this.go(r, n)
        },resize: function() {
            var t = e(".clearing-blackout .visible-img").find("img");
            t.length && this.center(t)
        },fix_height: function(t) {
            var n = t.parent().children(), r = this;
            return n.each(function() {
                var t = e(this), n = t.find("img");
                t.height() > r.outerHeight(n) && t.addClass("fix-height")
            }).closest("ul").width(n.length * 100 + "%"), this
        },update_paddles: function(e) {
            var t = e.closest(".carousel").siblings(".visible-img");
            e.next().length ? t.find(".clearing-main-right").removeClass("disabled") : t.find(".clearing-main-right").addClass("disabled"), e.prev().length ? t.find(".clearing-main-prev").removeClass("disabled") : t.find(".clearing-main-prev").addClass("disabled")
        },center: function(e) {
            return this.rtl ? e.css({marginRight: -(this.outerWidth(e) / 2),marginTop: -(this.outerHeight(e) / 2)}) : e.css({marginLeft: -(this.outerWidth(e) / 2),marginTop: -(this.outerHeight(e) / 2)}), this
        },load: function(e) {
            var t = e.parent().attr("href");
            return this.preload(e), t ? t : e.attr("src")
        },preload: function(e) {
            this.img(e.closest("li").next()).img(e.closest("li").prev())
        },loaded: function(e, t) {
            function n() {
                t()
            }
            function r() {
                this.one("load", n);
                if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                    var e = this.attr("src"), t = e.match(/\?/) ? "&" : "?";
                    t += "random=" + (new Date).getTime(), this.attr("src", e + t)
                }
            }
            if (!e.attr("src")) {
                n();
                return
            }
            e[0].complete || e[0].readyState === 4 ? n() : r.call(e)
        },img: function(e) {
            if (e.length) {
                var t = new Image, n = e.find("a");
                n.length ? t.src = n.attr("href") : t.src = e.find("img").attr("src")
            }
            return this
        },caption: function(e, t) {
            var n = t.data("caption");
            return n ? e.text(n).show() : e.text("").hide(), this
        },go: function(e, t) {
            var n = e.find(".visible"), r = n[t]();
            r.length && r.find("img").trigger("click", [n, r])
        },shift: function(e, t, n) {
            var r = t.parent(), i = this.settings.prev_index || t.index(), s = this.direction(r, e, t), o = parseInt(r.css("left"), 10), u = this.outerWidth(t), a;
            t.index() !== i && !/skip/.test(s) ? /left/.test(s) ? (this.lock(), r.animate({left: o + u}, 300, this.unlock())) : /right/.test(s) && (this.lock(), r.animate({left: o - u}, 300, this.unlock())) : /skip/.test(s) && (a = t.index() - this.settings.up_count, this.lock(), a > 0 ? r.animate({left: -(a * u)}, 300, this.unlock()) : r.animate({left: 0}, 300, this.unlock())), n()
        },direction: function(t, n, r) {
            var i = t.find("li"), s = this.outerWidth(i) + this.outerWidth(i) / 4, o = Math.floor(this.outerWidth(e(".clearing-container")) / s) - 1, u = i.index(r), a;
            return this.settings.up_count = o, this.adjacent(this.settings.prev_index, u) ? u > o && u > this.settings.prev_index ? a = "right" : u > o - 1 && u <= this.settings.prev_index ? a = "left" : a = !1 : a = "skip", this.settings.prev_index = u, a
        },adjacent: function(e, t) {
            for (var n = t + 1; n >= t - 1; n--)
                if (n === e)
                    return !0;
            return !1
        },lock: function() {
            this.settings.locked = !0
        },unlock: function() {
            this.settings.locked = !1
        },locked: function() {
            return this.settings.locked
        },outerHTML: function(e) {
            return e.outerHTML || (new XMLSerializer).serializeToString(e)
        },off: function() {
            e(this.scope).off(".fndtn.clearing"), e(t).off(".fndtn.clearing"), this.remove_data(), this.settings.init = !1
        }}
}(Foundation.zj, this, this.document), function(e, t, n) {
    function i(e) {
        return e
    }
    function s(e) {
        return decodeURIComponent(e.replace(r, " "))
    }
    var r = /\+/g, o = e.cookie = function(r, u, a) {
        if (u !== n) {
            a = e.extend({}, o.defaults, a), u === null && (a.expires = -1);
            if (typeof a.expires == "number") {
                var f = a.expires, l = a.expires = new Date;
                l.setDate(l.getDate() + f)
            }
            return u = o.json ? JSON.stringify(u) : String(u), t.cookie = [encodeURIComponent(r), "=", o.raw ? u : encodeURIComponent(u), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
        }
        var c = o.raw ? i : s, h = t.cookie.split("; ");
        for (var p = 0, d = h.length; p < d; p++) {
            var v = h[p].split("=");
            if (c(v.shift()) === r) {
                var m = c(v.join("="));
                return o.json ? JSON.parse(m) : m
            }
        }
        return null
    };
    o.defaults = {}, e.removeCookie = function(t, n) {
        return e.cookie(t) !== null ? (e.cookie(t, null, n), !0) : !1
    }
}(Foundation.zj, document), function(e, t, n, r) {
    "use strict";
    Foundation.libs.dropdown = {name: "dropdown",version: "4.1.0",settings: {activeClass: "open"},init: function(t, n, r) {
            return this.scope = t || this.scope, Foundation.inherit(this, "throttle scrollLeft"), typeof n == "object" && e.extend(!0, this.settings, n), typeof n != "string" ? (this.settings.init || this.events(), this.settings.init) : this[n].call(this, r)
        },events: function() {
            var n = this;
            e(this.scope).on("click.fndtn.dropdown", "[data-dropdown]", function(t) {
                t.preventDefault(), t.stopPropagation(), n.toggle(e(this))
            }), e("*, html, body").on("click.fndtn.dropdown", function(t) {
                e(t.target).data("dropdown") || e("[data-dropdown-content]").css(Foundation.rtl ? "right" : "left", "-99999px").removeClass(n.settings.activeClass)
            }), e(t).on("resize.fndtn.dropdown", n.throttle(function() {
                n.resize.call(n)
            }, 50)).trigger("resize"), this.settings.init = !0
        },toggle: function(t, n) {
            var r = e("#" + t.data("dropdown"));
            e("[data-dropdown-content]").not(r).css(Foundation.rtl ? "right" : "left", "-99999px").removeClass(this.settings.activeClass), r.hasClass(this.settings.activeClass) ? r.css(Foundation.rtl ? "right" : "left", "-99999px").removeClass(this.settings.activeClass) : this.css(r.addClass(this.settings.activeClass), t)
        },resize: function() {
            var t = e("[data-dropdown-content].open"), n = e("[data-dropdown='" + t.attr("id") + "']");
            t.length && n.length && this.css(t, n)
        },css: function(n, r) {
            var i = r.position();
            i.top += r.offsetParent().offset().top, i.left += r.offsetParent().offset().left;
            if (this.small())
                n.css({position: "absolute",width: "95%",left: "2.5%","max-width": "none",top: i.top + this.outerHeight(r)});
            else {
                if (!Foundation.rtl && e(t).width() > this.outerWidth(n) + r.offset().left)
                    var s = i.left;
                else {
                    n.hasClass("right") || n.addClass("right");
                    var s = i.left - (this.outerWidth(n) - this.outerWidth(r))
                }
                n.attr("style", "").css({position: "absolute",top: i.top + this.outerHeight(r),left: s})
            }
            return n
        },small: function() {
            return e(t).width() < 768 || e("html").hasClass("lt-ie9")
        },off: function() {
            e(this.scope).off(".fndtn.dropdown"), e("html, body").off(".fndtn.dropdown"), e(t).off(".fndtn.dropdown"), e("[data-dropdown-content]").off(".fndtn.dropdown"), this.settings.init = !1
        }}
}(Foundation.zj, this, this.document), function(e, t, n, r) {
    "use strict";
    Foundation.libs.forms = {name: "forms",version: "4.0.4",settings: {disable_class: "no-custom"},init: function(t, n, r) {
            return this.scope = t || this.scope, typeof n == "object" && e.extend(!0, this.settings, n), typeof n != "string" ? (this.settings.init || this.events(), this.assemble(), this.settings.init) : this[n].call(this, r)
        },assemble: function() {
            e('form.custom input[type="radio"]', e(this.scope)).not('[data-customforms="disabled"]').each(this.append_custom_markup), e('form.custom input[type="checkbox"]', e(this.scope)).not('[data-customforms="disabled"]').each(this.append_custom_markup), e("form.custom select", e(this.scope)).not('[data-customforms="disabled"]').each(this.append_custom_select)
        },events: function() {
            var r = this;
            e(this.scope).on("click.fndtn.forms", "form.custom span.custom.checkbox", function(t) {
                t.preventDefault(), t.stopPropagation(), r.toggle_checkbox(e(this))
            }).on("click.fndtn.forms", "form.custom span.custom.radio", function(t) {
                t.preventDefault(), t.stopPropagation(), r.toggle_radio(e(this))
            }).on("change.fndtn.forms", 'form.custom select:not([data-customforms="disabled"])', function(t) {
                r.refresh_custom_select(e(this))
            }).on("click.fndtn.forms", "form.custom label", function(t) {
                var n = e("#" + r.escape(e(this).attr("for")) + ':not([data-customforms="disabled"])'), i, s;
                n.length !== 0 && (n.attr("type") === "checkbox" ? (t.preventDefault(), i = e(this).find("span.custom.checkbox"), i.length == 0 && (i = n.add(this).siblings("span.custom.checkbox").first()), r.toggle_checkbox(i)) : n.attr("type") === "radio" && (t.preventDefault(), s = e(this).find("span.custom.radio"), s.length == 0 && (s = n.add(this).siblings("span.custom.radio").first()), r.toggle_radio(s)))
            }).on("click.fndtn.forms", "form.custom div.custom.dropdown a.current, form.custom div.custom.dropdown a.selector", function(t) {
                var n = e(this), i = n.closest("div.custom.dropdown"), s = i.prev();
                i.hasClass("open") || e(r.scope).trigger("click"), t.preventDefault();
                if (!1 === s.is(":disabled"))
                    return i.toggleClass("open"), i.hasClass("open") ? e(r.scope).on("click.fndtn.forms.customdropdown", function() {
                        i.removeClass("open"), e(r.scope).off(".fndtn.forms.customdropdown")
                    }) : e(r.scope).on(".fndtn.forms.customdropdown"), !1
            }).on("click.fndtn.forms touchend.fndtn.forms", "form.custom div.custom.dropdown li", function(t) {
                var n = e(this), r = n.closest("div.custom.dropdown"), i = r.prev(), s = 0;
                t.preventDefault(), t.stopPropagation();
                if (!e(this).hasClass("disabled")) {
                    e("div.dropdown").not(r).removeClass("open");
                    var o = n.closest("ul").find("li.selected");
                    o.removeClass("selected"), n.addClass("selected"), r.removeClass("open").find("a.current").html(n.html()), n.closest("ul").find("li").each(function(e) {
                        n[0] == this && (s = e)
                    }), i[0].selectedIndex = s, i.data("prevalue", o.html()), i.trigger("change")
                }
            }), e(t).on("keydown", function(t) {
                var r = n.activeElement, i = e(".custom.dropdown.open");
                if (i.length > 0) {
                    t.preventDefault(), t.which === 13 && i.find("li.selected").trigger("click");
                    if (t.which === 38) {
                        var s = i.find("li.selected"), o = s.prev(":not(.disabled)");
                        o.length > 0 && (s.removeClass("selected"), o.addClass("selected"))
                    } else if (t.which === 40) {
                        var s = i.find("li.selected"), u = s.next(":not(.disabled)");
                        u.length > 0 && (s.removeClass("selected"), u.addClass("selected"))
                    }
                }
            }), this.settings.init = !0
        },append_custom_markup: function(t, n) {
            var r = e(n).hide(), i = r.attr("type"), s = r.next("span.custom." + i);
            s.length === 0 && (s = e('<span class="custom ' + i + '"></span>').insertAfter(r)), s.toggleClass("checked", r.is(":checked")), s.toggleClass("disabled", r.is(":disabled"))
        },append_custom_select: function(t, n) {
            var r = Foundation.libs.forms, i = e(n), s = i.next("div.custom.dropdown"), o = s.find("ul"), u = s.find(".current"), a = s.find(".selector"), f = i.find("option"), l = f.filter(":selected"), c = i.attr("class") ? i.attr("class").split(" ") : [], h = 0, p = "", d, v = !1;
            if (i.hasClass(r.settings.disable_class))
                return;
            if (s.length === 0) {
                var m = i.hasClass("small") ? "small" : i.hasClass("medium") ? "medium" : i.hasClass("large") ? "large" : i.hasClass("expand") ? "expand" : "";
                s = e('<div class="' + ["custom", "dropdown", m].concat(c).filter(function(e, t, n) {
                    return e == "" ? !1 : n.indexOf(e) == t
                }).join(" ") + '"><a href="#" class="selector"></a><ul /></div>'), a = s.find(".selector"), o = s.find("ul"), p = f.map(function() {
                    return "<li>" + e(this).html() + "</li>"
                }).get().join(""), o.append(p), v = s.prepend('<a href="#" class="current">' + l.html() + "</a>").find(".current"), i.after(s).hide()
            } else
                p = f.map(function() {
                    return "<li>" + e(this).html() + "</li>"
                }).get().join(""), o.html("").append(p);
            s.toggleClass("disabled", i.is(":disabled")), d = o.find("li"), f.each(function(t) {
                this.selected && (d.eq(t).addClass("selected"), v && v.html(e(this).html())), e(this).is(":disabled") && d.eq(t).addClass("disabled")
            });
            if (!s.is(".small, .medium, .large, .expand")) {
                s.addClass("open");
                var r = Foundation.libs.forms;
                r.hidden_fix.adjust(o), h = r.outerWidth(d) > h ? r.outerWidth(d) : h, Foundation.libs.forms.hidden_fix.reset(), s.removeClass("open")
            }
        },refresh_custom_select: function(t) {
            var n = this, r = 0, i = t.next(), s = t.find("option");
            i.find("ul").html(""), s.each(function() {
                var t = e("<li>" + e(this).html() + "</li>");
                i.find("ul").append(t)
            }), s.each(function(t) {
                this.selected && (i.find("li").eq(t).addClass("selected"), i.find(".current").html(e(this).html())), e(this).is(":disabled") && i.find("li").eq(t).addClass("disabled")
            }), i.removeAttr("style").find("ul").removeAttr("style"), i.find("li").each(function() {
                i.addClass("open"), n.outerWidth(e(this)) > r && (r = n.outerWidth(e(this))), i.removeClass("open")
            })
        },toggle_checkbox: function(e) {
            var t = e.prev(), n = t[0];
            !1 === t.is(":disabled") && (n.checked = n.checked ? !1 : !0, e.toggleClass("checked"), t.trigger("change"))
        },toggle_radio: function(e) {
            var t = e.prev(), n = t.closest("form.custom"), r = t[0];
            !1 === t.is(":disabled") && (n.find('input[type="radio"][name="' + this.escape(t.attr("name")) + '"]').next().not(e).removeClass("checked"), e.hasClass("checked") || e.toggleClass("checked"), r.checked = e.hasClass("checked"), t.trigger("change"))
        },escape: function(e) {
            return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        },hidden_fix: {tmp: [],hidden: null,adjust: function(t) {
                var n = this;
                n.hidden = t.parents().andSelf().filter(":hidden"), n.hidden.each(function() {
                    var t = e(this);
                    n.tmp.push(t.attr("style")), t.css({visibility: "hidden",display: "block"})
                })
            },reset: function() {
                var t = this;
                t.hidden.each(function(n) {
                    var i = e(this), s = t.tmp[n];
                    s === r ? i.removeAttr("style") : i.attr("style", s)
                }), t.tmp = [], t.hidden = null
            }},off: function() {
            e(this.scope).off(".fndtn.forms")
        }}
}(Foundation.zj, this, this.document), function(e, t, n, r) {
    "use strict";
    Foundation.libs.joyride = {name: "joyride",version: "4.0.0",defaults: {tipLocation: "bottom",nubPosition: "auto",scrollSpeed: 300,timer: 0,startTimerOnClick: !0,startOffset: 0,nextButton: !0,tipAnimation: "fade",pauseAfter: [],tipAnimationFadeSpeed: 300,cookieMonster: !1,cookieName: "joyride",cookieDomain: !1,cookieExpires: 365,tipContainer: "body",postRideCallback: function() {
            },postStepCallback: function() {
            },template: {link: '<a href="#close" class="joyride-close-tip">&times;</a>',timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',wrapper: '<div class="joyride-content-wrapper"></div>',button: '<a href="#" class="small button joyride-next-tip"></a>'}},settings: {},init: function(t, n, r) {
            return this.scope = t || this.scope, Foundation.inherit(this, "throttle data_options scrollTo scrollLeft delay"), typeof n == "object" ? e.extend(!0, this.settings, this.defaults, n) : e.extend(!0, this.settings, this.defaults, r), typeof n != "string" ? (this.settings.init || this.events(), this.settings.init) : this[n].call(this, r)
        },events: function() {
            var n = this;
            e(this.scope).on("click.joyride", ".joyride-next-tip, .joyride-modal-bg", function(e) {
                e.preventDefault(), this.settings.$li.next().length < 1 ? this.end() : this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(), this.startTimer()) : (this.hide(), this.show())
            }.bind(this)).on("click.joyride", ".joyride-close-tip", function(e) {
                e.preventDefault(), this.end()
            }.bind(this)), e(t).on("resize.fndtn.joyride", n.throttle(function() {
                e("[data-joyride]").length > 0 && n.settings.$next_tip && (n.is_phone() ? n.pos_phone() : n.pos_default(!1, !0))
            }, 100)), this.settings.init = !0
        },start: function() {
            var t = this, n = e(this.scope).find("[data-joyride]"), r = ["timer", "scrollSpeed", "startOffset", "tipAnimationFadeSpeed", "cookieExpires"], i = r.length;
            this.settings.init || this.init(), this.settings.$content_el = n, this.settings.body_offset = e(this.settings.tipContainer).position(), this.settings.$tip_content = this.settings.$content_el.find("> li"), this.settings.paused = !1, this.settings.attempts = 0, this.settings.tipLocationPatterns = {top: ["bottom"],bottom: [],left: ["right", "top", "bottom"],right: ["left", "top", "bottom"]}, typeof e.cookie != "function" && (this.settings.cookieMonster = !1);
            if (!this.settings.cookieMonster || this.settings.cookieMonster && e.cookie(this.settings.cookieName) === null)
                this.settings.$tip_content.each(function(n) {
                    var s = e(this);
                    e.extend(!0, t.settings, t.data_options(s));
                    for (var o = i - 1; o >= 0; o--)
                        t.settings[r[o]] = parseInt(t.settings[r[o]], 10);
                    t.create({$li: s,index: n})
                }), !this.settings.startTimerOnClick && this.settings.timer > 0 ? (this.show("init"), this.startTimer()) : this.show("init")
        },resume: function() {
            this.set_li(), this.show()
        },tip_template: function(t) {
            var n, r;
            return t.tip_class = t.tip_class || "", n = e(this.settings.template.tip).addClass(t.tip_class), r = e.trim(e(t.li).html()) + this.button_text(t.button_text) + this.settings.template.link + this.timer_instance(t.index), n.append(e(this.settings.template.wrapper)), n.first().attr("data-index", t.index), e(".joyride-content-wrapper", n).append(r), n[0]
        },timer_instance: function(t) {
            var n;
            return t === 0 && this.settings.startTimerOnClick && this.settings.timer > 0 || this.settings.timer === 0 ? n = "" : n = this.outerHTML(e(this.settings.template.timer)[0]), n
        },button_text: function(t) {
            return this.settings.nextButton ? (t = e.trim(t) || "Next", t = this.outerHTML(e(this.settings.template.button).append(t)[0])) : t = "", t
        },create: function(t) {
            var n = t.$li.attr("data-button") || t.$li.attr("data-text"), r = t.$li.attr("class"), i = e(this.tip_template({tip_class: r,index: t.index,button_text: n,li: t.$li}));
            e(this.settings.tipContainer).append(i)
        },show: function(t) {
            var n = null;
            this.settings.$li === r || e.inArray(this.settings.$li.index(), this.settings.pauseAfter) === -1 ? (this.settings.paused ? this.settings.paused = !1 : this.set_li(t), this.settings.attempts = 0, this.settings.$li.length && this.settings.$target.length > 0 ? (this.settings.tipSettings = e.extend(this.settings, this.data_options(this.settings.$li)), this.settings.timer = parseInt(this.settings.timer, 10), this.settings.tipSettings.tipLocationPattern = this.settings.tipLocationPatterns[this.settings.tipSettings.tipLocation], /body/i.test(this.settings.$target.selector) || this.scroll_to(), this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0), n = this.settings.$next_tip.find(".joyride-timer-indicator"), /pop/i.test(this.settings.tipAnimation) ? (n.width(0), thsi.settings.timer > 0 ? (this.settings.$next_tip.show(), this.delay(function() {
                n.animate({width: n.parent().width()}, this.settings.timer, "linear")
            }.bind(this), this.settings.tipAnimationFadeSpeed)) : this.settings.$next_tip.show()) : /fade/i.test(this.settings.tipAnimation) && (n.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.fadeIn(this.settings.tipAnimationFadeSpeed).show(), this.delay(function() {
                n.animate({width: n.parent().width()}, this.settings.timer, "linear")
            }.bind(this), this.settings.tipAnimationFadeSpeed)) : this.settings.$next_tip.fadeIn(this.settings.tipAnimationFadeSpeed)), this.settings.$current_tip = this.settings.$next_tip) : this.settings.$li && this.settings.$target.length < 1 ? this.show() : this.end()) : this.settings.paused = !0
        },is_phone: function() {
            return Modernizr ? Modernizr.mq("only screen and (max-width: 767px)") || e(".lt-ie9").length > 0 : this.settings.$window.width() < 767 ? !0 : !1
        },hide: function() {
            this.settings.postStepCallback(this.settings.$li.index(), this.settings.$current_tip), e(".joyride-modal-bg").hide(), this.settings.$current_tip.hide()
        },set_li: function(e) {
            e ? (this.settings.$li = this.settings.$tip_content.eq(this.settings.startOffset), this.set_next_tip(), this.settings.$current_tip = this.settings.$next_tip) : (this.settings.$li = this.settings.$li.next(), this.set_next_tip()), this.set_target()
        },set_next_tip: function() {
            this.settings.$next_tip = e(".joyride-tip-guide[data-index='" + this.settings.$li.index() + "']"), this.settings.$next_tip.data("closed", "")
        },set_target: function() {
            var t = this.settings.$li.attr("data-class"), r = this.settings.$li.attr("data-id"), i = function() {
                return r ? e(n.getElementById(r)) : t ? e("." + t).first() : e("body")
            };
            this.settings.$target = i()
        },scroll_to: function() {
            var n, r;
            n = e(t).height() / 2, r = Math.ceil(this.settings.$target.offset().top - n + this.outerHeight(this.settings.$next_tip)), r > 0 && this.scrollTo(e("html, body"), r, this.settings.scrollSpeed)
        },paused: function() {
            return e.inArray(this.settings.$li.index() + 1, this.settings.pauseAfter) === -1 ? !0 : !1
        },restart: function() {
            this.hide(), this.settings.$li = r, this.show("init")
        },pos_default: function(n, r) {
            var i = Math.ceil(e(t).height() / 2), s = this.settings.$next_tip.offset(), o = this.settings.$next_tip.find(".joyride-nub"), u = Math.ceil(this.outerHeight(o) / 2), a = n || !1;
            a && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), typeof r == "undefined" && (r = !1);
            if (!/body/i.test(this.settings
            .$target.selector)) {
                if (this.bottom()) {
                    var f = this.settings.$target.offset().left;
                    Foundation.rtl && (f = this.settings.$target.offset().width - this.settings.$next_tip.width() + f), this.settings.$next_tip.css({top: this.settings.$target.offset().top + u + this.outerHeight(this.settings.$target),left: f}), this.nub_position(o, this.settings.tipSettings.nubPosition, "top")
                } else if (this.top()) {
                    var f = this.settings.$target.offset().left;
                    Foundation.rtl && (f = this.settings.$target.offset().width - this.settings.$next_tip.width() + f), this.settings.$next_tip.css({top: this.settings.$target.offset().top - this.outerHeight(this.settings.$next_tip) - u,left: f}), this.nub_position(o, this.settings.tipSettings.nubPosition, "bottom")
                } else
                    this.right() ? (this.settings.$next_tip.css({top: this.settings.$target.offset().top,left: this.outerWidth(this.settings.$target) + this.settings.$target.offset().left}), this.nub_position(o, this.settings.tipSettings.nubPosition, "left")) : this.left() && (this.settings.$next_tip.css({top: this.settings.$target.offset().top,left: this.settings.$target.offset().left - this.outerWidth(this.settings.$next_tip) - u}), this.nub_position(o, this.settings.tipSettings.nubPosition, "right"));
                !this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tipSettings.tipLocationPattern.length && (o.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), this.settings.tipSettings.tipLocation = this.settings.tipSettings.tipLocationPattern[this.settings.attempts], this.settings.attempts++, this.pos_default())
            } else
                this.settings.$li.length && this.pos_modal(o);
            a && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
        },pos_phone: function(t) {
            var n = this.outerHeight(this.settings.$next_tip), r = this.settings.$next_tip.offset(), i = this.outerHeight(this.settings.$target), s = e(".joyride-nub", this.settings.$next_tip), o = Math.ceil(this.outerHeight(s) / 2), u = t || !1;
            s.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), u && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(s) : this.top() ? (this.settings.$next_tip.offset({top: this.settings.$target.offset().top - n - o}), s.addClass("bottom")) : (this.settings.$next_tip.offset({top: this.settings.$target.offset().top + i + o}), s.addClass("top")), u && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
        },pos_modal: function(t) {
            this.center(), t.hide(), this.settings.$next_tip.data("closed") || (e(".joyride-modal-bg").length < 1 && e("body").append('<div class="joyride-modal-bg">').show(), /pop/i.test(this.settings.tipAnimation) ? e(".joyride-modal-bg").show() : e(".joyride-modal-bg").fadeIn(this.settings.tipAnimationFadeSpeed))
        },center: function() {
            var n = e(t);
            return this.settings.$next_tip.css({top: (n.height() - this.outerHeight(this.settings.$next_tip)) / 2 + n.scrollTop(),left: (n.width() - this.outerWidth(this.settings.$next_tip)) / 2 + this.scrollLeft(n)}), !0
        },bottom: function() {
            return /bottom/i.test(this.settings.tipSettings.tipLocation)
        },top: function() {
            return /top/i.test(this.settings.tipSettings.tipLocation)
        },right: function() {
            return /right/i.test(this.settings.tipSettings.tipLocation)
        },left: function() {
            return /left/i.test(this.settings.tipSettings.tipLocation)
        },corners: function(n) {
            var r = e(t), i = r.width() + this.scrollLeft(r), s = r.width() + r.scrollTop();
            return [n.offset().top <= r.scrollTop(), i <= n.offset().left + this.outerWidth(n), s <= n.offset().top + this.outerHeight(n), this.scrollLeft(r) >= n.offset().left]
        },visible: function(e) {
            var t = e.length;
            while (t--)
                if (e[t])
                    return !1;
            return !0
        },nub_position: function(e, t, n) {
            t === "auto" ? e.addClass(n) : e.addClass(t)
        },startTimer: function() {
            this.settings.$li.length ? this.settings.automate = setTimeout(function() {
                this.hide(), this.show(), this.startTimer()
            }.bind(this), this.settings.timer) : clearTimeout(this.settings.automate)
        },end: function() {
            this.settings.cookieMonster && e.cookie(this.settings.cookieName, "ridden", {expires: this.settings.cookieExpires,domain: this.settings.cookieDomain}), this.settings.timer > 0 && clearTimeout(this.settings.automate), this.settings.$next_tip.data("closed", !0), e(".joyride-modal-bg").hide(), this.settings.$current_tip.hide(), this.settings.postStepCallback(this.settings.$li.index(), this.settings.$current_tip), this.settings.postRideCallback(this.settings.$li.index(), this.settings.$current_tip)
        },outerHTML: function(e) {
            return e.outerHTML || (new XMLSerializer).serializeToString(e)
        },off: function() {
            e(this.scope).off(".joyride"), e(t).off(".joyride"), e(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"), e(".joyride-tip-guide, .joyride-modal-bg").remove(), clearTimeout(this.settings.automate), this.settings = {}
        }}
}(Foundation.zj, this, this.document), function(e, t, n, r) {
    "use strict";
    Foundation.libs.magellan = {name: "magellan",version: "4.0.0",settings: {activeClass: "active"},init: function(t, n, r) {
            return this.scope = t || this.scope, Foundation.inherit(this, "data_options"), typeof n == "object" && e.extend(!0, this.settings, n), typeof n != "string" ? (this.settings.init || (this.fixed_magellan = e("[data-magellan-expedition]"), this.set_threshold(), this.last_destination = e("[data-magellan-destination]").last(), this.events()), this.settings.init) : this[n].call(this, r)
        },events: function() {
            var n = this;
            e(this.scope).on("arrival.fndtn.magellan", "[data-magellan-arrival]", function(t) {
                var r = e(this), i = r.closest("[data-magellan-expedition]"), s = i.attr("data-magellan-active-class") || n.settings.activeClass;
                r.closest("[data-magellan-expedition]").find("[data-magellan-arrival]").not(r).removeClass(s), r.addClass(s)
            }), this.fixed_magellan.on("update-position.fndtn.magellan", function() {
                var t = e(this)
            }).trigger("update-position"), e(t).on("resize.fndtn.magellan", function() {
                this.fixed_magellan.trigger("update-position")
            }.bind(this)).on("scroll.fndtn.magellan", function() {
                var r = e(t).scrollTop();
                n.fixed_magellan.each(function() {
                    var t = e(this);
                    typeof t.data("magellan-top-offset") == "undefined" && t.data("magellan-top-offset", t.offset().top), typeof t.data("magellan-fixed-position") == "undefined" && t.data("magellan-fixed-position", !1);
                    var i = r + n.settings.threshold > t.data("magellan-top-offset"), s = t.attr("data-magellan-top-offset");
                    t.data("magellan-fixed-position") != i && (t.data("magellan-fixed-position", i), i ? t.css({position: "fixed",top: 0}) : t.css({position: "",top: ""}), i && typeof s != "undefined" && s != 0 && t.css({position: "fixed",top: s + "px"}))
                })
            }), this.last_destination.length > 0 && e(t).on("scroll.fndtn.magellan", function(r) {
                var i = e(t).scrollTop(), s = i + e(t).height(), o = Math.ceil(n.last_destination.offset().top);
                e("[data-magellan-destination]").each(function() {
                    var t = e(this), r = t.attr("data-magellan-destination"), u = t.offset().top - i;
                    u <= n.settings.threshold && e("[data-magellan-arrival='" + r + "']").trigger("arrival"), s >= e(n.scope).height() && o > i && o < s && e("[data-magellan-arrival]").last().trigger("arrival")
                })
            }), this.settings.init = !0
        },set_threshold: function() {
            this.settings.threshold || (this.settings.threshold = this.fixed_magellan.length > 0 ? this.outerHeight(this.fixed_magellan, !0) : 0)
        },off: function() {
            e(this.scope).off(".fndtn.magellan")
        }}
}(Foundation.zj, this, this.document), function(e, t, n, r) {
    "use strict";
    Foundation.libs = Foundation.libs || {}, Foundation.libs.orbit = {name: "orbit",version: "4.1.0",settings: {timer_speed: 1e4,animation_speed: 500,bullets: !0,stack_on_small: !0,container_class: "orbit-container",stack_on_small_class: "orbit-stack-on-small",next_class: "orbit-next",prev_class: "orbit-prev",timer_container_class: "orbit-timer",timer_paused_class: "paused",timer_progress_class: "orbit-progress",slides_container_class: "orbit-slides-container",bullets_container_class: "orbit-bullets",bullets_active_class: "active",slide_number_class: "orbit-slide-number",caption_class: "orbit-caption",active_slide_class: "active",orbit_transition_class: "orbit-transitioning"},init: function(t, n, r) {
            var i = this;
            Foundation.inherit(i, "data_options"), typeof n == "object" && e.extend(!0, i.settings, n), e("[data-orbit]", t).each(function(t, n) {
                var r = e.extend(!0, {}, i);
                r._init(t, n)
            })
        },_container_html: function() {
            var e = this;
            return '<div class="' + e.settings.container_class + '"></div>'
        },_bullets_container_html: function(t) {
            var n = this, r = e('<ol class="' + n.settings.bullets_container_class + '"></ol>');
            return t.each(function(t, i) {
                var s = e('<li data-orbit-slide-number="' + (t + 1) + '" class=""></li>');
                t === 0 && s.addClass(n.settings.bullets_active_class), r.append(s)
            }), r
        },_slide_number_html: function(t, n) {
            var r = this, i = e('<div class="' + r.settings.slide_number_class + '"></div>');
            return i.append("<span>" + t + "</span> of <span>" + n + "</span>"), i
        },_timer_html: function() {
            var e = this;
            return typeof e.settings.timer_speed == "number" && e.settings.timer_speed > 0 ? '<div class="' + e.settings.timer_container_class + '"><span></span><div class="' + e.settings.timer_progress_class + '"></div></div>' : ""
        },_next_html: function() {
            var e = this;
            return '<a href="#" class="' + e.settings.next_class + '">Next <span></span></a>'
        },_prev_html: function() {
            var e = this;
            return '<a href="#" class="' + e.settings.prev_class + '">Prev <span></span></a>'
        },_init: function(t, n) {
            var r = this, i = e(n), s = i.wrap(r._container_html()).parent(), o = i.children();
            e.extend(!0, r.settings, r.data_options(i)), s.append(r._prev_html()), s.append(r._next_html()), i.addClass(r.settings.slides_container_class), r.settings.stack_on_small && s.addClass(r.settings.stack_on_small_class), s.append(r._slide_number_html(1, o.length)), s.append(r._timer_html()), r.settings.bullets && s.after(r._bullets_container_html(o)), i.append(o.first().clone().attr("data-orbit-slide", "")), i.prepend(o.last().clone().attr("data-orbit-slide", "")), i.css("marginLeft", "-100%"), o.first().addClass(r.settings.active_slide_class), r._init_events(i), r._init_dimensions(i), r._start_timer(i)
        },_init_events: function(i) {
            var s = this, o = i.parent();
            e(t).on("load.fndtn.orbit", function() {
                i.height(""), i.height(i.height(o.height())), i.trigger("orbit:ready")
            }).on("resize.fndtn.orbit", function() {
                i.height(""), i.height(i.height(o.height()))
            }), e(n).on("click.fndtn.orbit", "[data-orbit-link]", function(t) {
                t.preventDefault();
                var n = e(t.currentTarget).attr("data-orbit-link"), r = i.find("[data-orbit-slide=" + n + "]").first();
                r.length === 1 && (s._reset_timer(i, !0), s._goto(i, r.index(), function() {
                }))
            }), o.siblings("." + s.settings.bullets_container_class).on("click.fndtn.orbit", "[data-orbit-slide-number]", function(t) {
                t.preventDefault(), s._reset_timer(i, !0), s._goto(i, e(t.currentTarget).data("orbit-slide-number"), function() {
                })
            }), o.on("orbit:after-slide-change.fndtn.orbit", function(e, t) {
                var n = o.find("." + s.settings.slide_number_class);
                n.length === 1 && n.replaceWith(s._slide_number_html(t.slide_number, t.total_slides))
            }).on("orbit:next-slide.fndtn.orbit click.fndtn.orbit", "." + s.settings.next_class, function(e) {
                e.preventDefault(), s._reset_timer(i, !0), s._goto(i, "next", function() {
                })
            }).on("orbit:prev-slide.fndtn.orbit click.fndtn.orbit", "." + s.settings.prev_class, function(e) {
                e.preventDefault(), s._reset_timer(i, !0), s._goto(i, "prev", function() {
                })
            }).on("orbit:toggle-play-pause.fndtn.orbit click.fndtn.orbit touchstart.fndtn.orbit", "." + s.settings.timer_container_class, function(t) {
                t.preventDefault();
                var n = e(t.currentTarget).toggleClass(s.settings.timer_paused_class), r = n.closest("." + s.settings.container_class).find("." + s.settings.slides_container_class);
                n.hasClass(s.settings.timer_paused_class) ? s._stop_timer(r) : s._start_timer(r)
            }).on("touchstart.fndtn.orbit", function(e) {
                e.touches || (e = e.originalEvent);
                var t = {start_page_x: e.touches[0].pageX,start_page_y: e.touches[0].pageY,start_time: (new Date).getTime(),delta_x: 0,is_scrolling: r};
                o.data("swipe-transition", t), e.stopPropagation()
            }).on("touchmove.fndtn.orbit", function(e) {
                e.touches || (e = e.originalEvent);
                if (e.touches.length > 1 || e.scale && e.scale !== 1)
                    return;
                var t = o.data("swipe-transition");
                typeof t == "undefined" && (t = {}), t.delta_x = e.touches[0].pageX - t.start_page_x, typeof t.is_scrolling == "undefined" && (t.is_scrolling = !!(t.is_scrolling || Math.abs(t.delta_x) < Math.abs(e.touches[0].pageY - t.start_page_y)));
                if (!t.is_scrolling && !t.active) {
                    e.preventDefault(), s._stop_timer(i);
                    var n = t.delta_x < 0 ? "next" : "prev";
                    t.active = !0, s._goto(i, n, function() {
                    })
                }
            }).on("touchend.fndtn.orbit", function(e) {
                o.data("swipe-transition", {}), e.stopPropagation()
            })
        },_init_dimensions: function(e) {
            var t = e.parent(), n = e.children();
            e.css("width", n.length * 100 + "%"), n.css("width", 100 / n.length + "%"), e.height(t.height()), e.css("width", n.length * 100 + "%")
        },_start_timer: function(e) {
            var t = this, n = e.parent(), r = function() {
                t._reset_timer(e, !1), t._goto(e, "next", function() {
                    t._start_timer(e)
                })
            }, i = n.find("." + t.settings.timer_container_class), s = i.find("." + t.settings.timer_progress_class), o = s.width() / i.width(), u = t.settings.timer_speed - o * t.settings.timer_speed;
            s.animate({width: "100%"}, u, "linear", r), e.trigger("orbit:timer-started")
        },_stop_timer: function(e) {
            var t = this, n = e.parent(), r = n.find("." + t.settings.timer_container_class), i = r.find("." + t.settings.timer_progress_class), s = i.width() / r.width();
            t._rebuild_timer(n, s * 100 + "%"), e.trigger("orbit:timer-stopped"), r = n.find("." + t.settings.timer_container_class), r.addClass(t.settings.timer_paused_class)
        },_reset_timer: function(e, t) {
            var n = this, r = e.parent();
            n._rebuild_timer(r, "0%");
            if (typeof t == "boolean" && t) {
                var i = r.find("." + n.settings.timer_container_class);
                i.addClass(n.settings.timer_paused_class)
            }
        },_rebuild_timer: function(t, n) {
            var r = this, i = t.find("." + r.settings.timer_container_class), s = e(r._timer_html()), o = s.find("." + r.settings.timer_progress_class);
            if (typeof Zepto == "function")
                i.remove(), t.append(s), o.css("width", n);
            else if (typeof jQuery == "function") {
                var u = i.find("." + r.settings.timer_progress_class);
                u.css("width", n), u.stop()
            }
        },_goto: function(t, n, r) {
            var i = this, s = t.parent(), o = t.children(), u = t.find("." + i.settings.active_slide_class), a = u.index(), f = Foundation.rtl ? "marginRight" : "marginLeft";
            if (s.hasClass(i.settings.orbit_transition_class))
                return !1;
            n === "prev" ? a === 0 ? a = o.length - 1 : a-- : n === "next" ? a = (a + 1) % o.length : typeof n == "number" && (a = n % o.length), a === o.length - 1 && n === "next" ? (t.css(f, "0%"), a = 1) : a === 0 && n === "prev" && (t.css(f, "-" + (o.length - 1) * 100 + "%"), a = o.length - 2), s.addClass(i.settings.orbit_transition_class), u.removeClass(i.settings.active_slide_class), e(o[a]).addClass(i.settings.active_slide_class);
            var l = s.siblings("." + i.settings.bullets_container_class);
            l.length === 1 && (l.children().removeClass(i.settings.bullets_active_class), e(l.children()[a - 1]).addClass(i.settings.bullets_active_class));
            var c = "-" + a * 100 + "%";
            t.trigger("orbit:before-slide-change");
            if (t.css(f) === c)
                s.removeClass(i.settings.orbit_transition_class), t.trigger("orbit:after-slide-change", [{slide_number: a,total_slides: t.children().length - 2}]), r();
            else {
                var h = {};
                h[f] = c, t.animate(h, i.settings.animation_speed, "linear", function() {
                    s.removeClass(i.settings.orbit_transition_class), t.trigger("orbit:after-slide-change", [{slide_number: a,total_slides: t.children().length - 2}]), r()
                })
            }
        }}
}(Foundation.zj, this, this.document), function(e, t, n) {
    function f(e) {
        var t = {}, r = /^jQuery\d+$/;
        return n.each(e.attributes, function(e, n) {
            n.specified && !r.test(n.name) && (t[n.name] = n.value)
        }), t
    }
    function l(e, r) {
        var i = this, s = n(i);
        if (i.value == s.attr("placeholder") && s.hasClass("placeholder"))
            if (s.data("placeholder-password")) {
                s = s.hide().next().show().attr("id", s.removeAttr("id").data("placeholder-id"));
                if (e === !0)
                    return s[0].value = r;
                s.focus()
            } else
                i.value = "", s.removeClass("placeholder"), i == t.activeElement && i.select()
    }
    function c() {
        var e, t = this, r = n(t), i = r, s = this.id;
        if (t.value == "") {
            if (t.type == "password") {
                if (!r.data("placeholder-textinput")) {
                    try {
                        e = r.clone().attr({type: "text"})
                    } catch (o) {
                        e = n("<input>").attr(n.extend(f(this), {type: "text"}))
                    }
                    e.removeAttr("name").data({"placeholder-password": !0,"placeholder-id": s}).bind("focus.placeholder", l), r.data({"placeholder-textinput": e,"placeholder-id": s}).before(e)
                }
                r = r.removeAttr("id").hide().prev().attr("id", s).show()
            }
            r.addClass("placeholder"), r[0].value = r.attr("placeholder")
        } else
            r.removeClass("placeholder")
    }
    var r = "placeholder" in t.createElement("input"), i = "placeholder" in t.createElement("textarea"), s = n.fn, o = n.valHooks, u, a;
    r && i ? (a = s.placeholder = function() {
        return this
    }, a.input = a.textarea = !0) : (a = s.placeholder = function() {
        var e = this;
        return e.filter((r ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({"focus.placeholder": l,"blur.placeholder": c}).data("placeholder-enabled", !0).trigger("blur.placeholder"), e
    }, a.input = r, a.textarea = i, u = {get: function(e) {
            var t = n(e);
            return t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
        },set: function(e, r) {
            var i = n(e);
            return i.data("placeholder-enabled") ? (r == "" ? (e.value = r, e != t.activeElement && c.call(e)) : i.hasClass("placeholder") ? l.call(e, !0, r) || (e.value = r) : e.value = r, i) : e.value = r
        }}, r || (o.input = u), i || (o.textarea = u), n(function() {
        n(t).delegate("form", "submit.placeholder", function() {
            var e = n(".placeholder", this).each(l);
            setTimeout(function() {
                e.each(c)
            }, 10)
        })
    }), n(e).bind("beforeunload.placeholder", function() {
        n(".placeholder").each(function() {
            this.value = ""
        })
    }))
}(this, document, Foundation.zj), function(e, t, n, r) {
    "use strict";
    Foundation.libs.reveal = {name: "reveal",version: "4.0.9",locked: !1,settings: {animation: "fadeAndPop",animationSpeed: 250,closeOnBackgroundClick: !0,dismissModalClass: "close-reveal-modal",bgClass: "reveal-modal-bg",open: function() {
            },opened: function() {
            },close: function() {
            },closed: function() {
            },bg: e(".reveal-modal-bg"),css: {open: {opacity: 0,visibility: "visible",display: "block"},close: {opacity: 1,visibility: "hidden",display: "none"}}},init: function(t, n, r) {
            return this.scope = t || this.scope, Foundation.inherit(this, "data_options delay"), typeof n == "object" && e.extend(!0, this.settings, n), typeof n != "string" ? (this.events(), this.settings.init) : this[n].call(this, r)
        },events: function() {
            var t = this;
            return e(this.scope).off(".fndtn.reveal").on("click.fndtn.reveal", "[data-reveal-id]", function(n) {
                n.preventDefault(), t.locked || (t.locked = !0, t.open.call(t, e(this)))
            }).on("click.fndtn.reveal touchend.click.fndtn.reveal", this.close_targets(), function(n) {
                n.preventDefault(), t.locked || (t.locked = !0, t.close.call(t, e(this).closest(".reveal-modal")))
            }).on("open.fndtn.reveal", ".reveal-modal", this.settings.open).on("opened.fndtn.reveal", ".reveal-modal", this.settings.opened).on("opened.fndtn.reveal", ".reveal-modal", this.open_video).on("close.fndtn.reveal", ".reveal-modal", this.settings.close).on("closed.fndtn.reveal", ".reveal-modal", this.settings.closed).on("closed.fndtn.reveal", ".reveal-modal", this.close_video), !0
        },open: function(t) {
            if (t)
                var n = e("#" + t.data("reveal-id"));
            else
                var n = e(this.scope);
            if (!n.hasClass("open")) {
                var r = e(".reveal-modal.open");
                typeof n.data("css-top") == "undefined" && n.data("css-top", parseInt(n.css("top"), 10)).data("offset", this.cache_offset(n)), n.trigger("open"), r.length < 1 && this.toggle_bg(n), this.hide(r, this.settings.css.open), this.show(n, this.settings.css.open)
            }
        },close: function(t) {
            var t = t || e(this.scope), n = e(".reveal-modal.open");
            n.length > 0 && (this.locked = !0, t.trigger("close"), this.toggle_bg(t), this.hide(n, this.settings.css.close))
        },close_targets: function() {
            var e = "." + this.settings.dismissModalClass;
            return this.settings.closeOnBackgroundClick ? e + ", ." + this.settings.bgClass : e
        },toggle_bg: function(t) {
            e(".reveal-modal-bg").length === 0 && (this.settings.bg = e("<div />", {"class": this.settings.bgClass}).appendTo("body")), this.settings.bg.filter(":visible").length > 0 ? this.hide(this.settings.bg) : this.show(this.settings.bg)
        },show: function(n, r) {
            if (r) {
                if (/pop/i.test(this.settings.animation)) {
                    r.top = e(t).scrollTop() - n.data("offset") + "px";
                    var i = {top: e(t).scrollTop() + n.data("css-top") + "px",opacity: 1};
                    return this.delay(function() {
                        return n.css(r).animate(i, this.settings.animationSpeed, "linear", function() {
                            this.locked = !1, n.trigger("opened")
                        }.bind(this)).addClass("open")
                    }.bind(this), this.settings.animationSpeed / 2)
                }
                if (/fade/i.test(this.settings.animation)) {
                    var i = {opacity: 1};
                    return this.delay(function() {
                        return n.css(r).animate(i, this.settings.animationSpeed, "linear", function() {
                            this.locked = !1, n.trigger("opened")
                        }.bind(this)).addClass("open")
                    }.bind(this), this.settings.animationSpeed / 2)
                }
                return n.css(r).show().css({opacity: 1}).addClass("open").trigger("opened")
            }
            return /fade/i.test(this.settings.animation) ? n.fadeIn(this.settings.animationSpeed / 2) : n.show()
        },hide: function(n, r) {
            if (r) {
                if (/pop/i.test(this.settings.animation)) {
                    var i = {top: -e(t).scrollTop() - n.data("offset") + "px",opacity: 0};
                    return this.delay(function() {
                        return n.animate(i, this.settings.animationSpeed, "linear", function() {
                            this.locked = !1, n.css(r).trigger("closed")
                        }.bind(this)).removeClass("open")
                    }.bind(this), this.settings.animationSpeed / 2)
                }
                if (/fade/i.test(this.settings.animation)) {
                    var i = {opacity: 0};
                    return this.delay(function() {
                        return n.animate(i, this.settings.animationSpeed, "linear", function() {
                            this.locked = !1, n.css(r).trigger("closed")
                        }.bind(this)).removeClass("open")
                    }.bind(this), this.settings.animationSpeed / 2)
                }
                return n.hide().css(r).removeClass("open").trigger("closed")
            }
            return /fade/i.test(this.settings.animation) ? n.fadeOut(this.settings.animationSpeed / 2) : n.hide()
        },close_video: function(t) {
            var n = e(this).find(".flex-video"), r = n.find("iframe");
            r.length > 0 && (r.attr("data-src", r[0].src), r.attr("src", "about:blank"), n.fadeOut(100).hide())
        },open_video: function(t) {
            var n = e(this).find(".flex-video"), r = n.find("iframe");
            if (r.length > 0) {
                var i = r.attr("data-src");
                typeof i == "string" && (r[0].src = r.attr("data-src")), n.show().fadeIn(100)
            }
        },cache_offset: function(e) {
            var t = e.show().height() + parseInt(e.css("top"), 10);
            return e.hide(), t
        },off: function() {
            e(this.scope).off(".fndtn.reveal")
        }}
}(Foundation.zj, this, this.document), function(e, t, n, r) {
    "use strict";
    Foundation.libs.section = {name: "section",version: "4.1.1",settings: {deep_linking: !1,one_up: !0,callback: function() {
            }},init: function(e, t, n) {
            var r = this;
            return Foundation.inherit(this, "throttle data_options position_right offset_right"), typeof t != "string" ? (this.set_active_from_hash(), this.events(), !0) : this[t].call(this, n)
        },events: function() {
            var r = this;
            e(this.scope).on("click.fndtn.section", "[data-section] .title", function(t) {
                var n = e(this), i = n.closest("[data-section]");
                r.toggle_active.call(this, t, r)
            }), e(t).on("resize.fndtn.section", r.throttle(function() {
                r.resize.call(this)
            }, 30)).on("hashchange", function() {
                r.settings.toggled || (r.set_active_from_hash(), e(this).trigger("resize"))
            }).trigger("resize"), e(n).on("click.fndtn.section", function(t) {
                e(t.target).closest(".title").length < 1 && e('[data-section="vertical-nav"], [data-section="horizontal-nav"]').find("section, .section").removeClass("active").attr("style", "")
            })
        },toggle_active: function(t, n) {
            var r = e(this), i = r.closest("section, .section"), s = i.find(".content"), o = i.closest("[data-section]"), n = Foundation.libs.section, u = e.extend({}, n.settings, n.data_options(o));
            n.settings.toggled = !0, !u.deep_linking && s.length > 0 && t.preventDefault();
            if (i.hasClass("active"))
                (n.small(o) || n.is_vertical(o) || n.is_horizontal(o) || n.is_accordion(o)) && i.removeClass("active").attr("style", "");
            else {
                var a = null, f = n.outerHeight(i.find(".title"));
                if (n.small(o) || u.one_up)
                    a = r.closest("[data-section]").find("section.active, .section.active"), n.small(o) ? a.attr("style", "") : a.attr("style", "visibility: hidden; padding-top: " + f + "px;");
                n.small(o) ? i.attr("style", "") : i.css("padding-top", f), i.addClass("active"), a !== null && a.removeClass("active").attr("style", "")
            }
            setTimeout(function() {
                n.settings.toggled = !1
            }, 300), u.callback()
        },resize: function() {
            var t = e("[data-section]"), n = Foundation.libs.section;
            t.each(function() {
                var t = e(this), r = t.find("section.active, .section.active"), i = e.extend({}, n.settings, n.data_options(t));
                if (r.length > 1)
                    r.not(":first").removeClass("active").attr("style", "");
                else if (r.length < 1 && !n.is_vertical(t) && !n.is_horizontal(t) && !n.is_accordion(t)) {
                    var s = t.find("section, .section").first();
                    s.addClass("active"), n.small(t) ? s.attr("style", "") : s.css("padding-top", n.outerHeight(s.find(".title")))
                }
                n.small(t) ? r.attr("style", "") : r.css("padding-top", n.outerHeight(r.find(".title"))), n.position_titles(t), n.is_horizontal(t) && !n.small(t) ? n.position_content(t) : n.position_content(t, !1)
            })
        },is_vertical: function(e) {
            return /vertical-nav/i.test(e.data("section"))
        },is_horizontal: function(e) {
            return /horizontal-nav/i.test(e.data("section"))
        },is_accordion: function(e) {
            return /accordion/i.test(e.data("section"))
        },is_tabs: function(e) {
            return /tabs/i.test(e.data("section"))
        },set_active_from_hash: function() {
            var n = t.location.hash.substring(1), r = e("[data-section]"), i = this;
            r.each(function() {
                var t = e(this), r = e.extend({}, i.settings, i.data_options(t));
                n.length > 0 && r.deep_linking && (t.find("section, .section").attr("style", "").removeClass("active"), t.find('.content[data-slug="' + n + '"]').closest("section, .section").addClass("active"))
            })
        },position_titles: function(t, n) {
            var r = t.find(".title"), i = 0, s = this;
            typeof n == "boolean" ? r.attr("style", "") : r.each(function() {
                s.rtl ? e(this).css("right", i) : e(this).css("left", i), i += s.outerWidth(e(this))
            })
        },position_content: function(t, n) {
            var r = t.find(".title"), i = t.find(".content"), s = this;
            typeof n == "boolean" ? (i.attr("style", ""), t.attr("style", "")) : (t.find("section, .section").each(function() {
                var t = e(this).find(".title"), n = e(this).find(".content");
                s.rtl ? n.css({right: s.position_right(t) + 1,top: s.outerHeight(t) - 2}) : n.css({left: t.position().left - 1,top: s.outerHeight(t) - 2})
            }), typeof Zepto == "function" ? t.height(this.outerHeight(r.first())) : t.height(this.outerHeight(r.first()) - 2))
        },position_right: function(e) {
            var t = e.closest("[data-section]"), n = e.closest("[data-section]").width(), r = t.find(".title").length;
            return n - e.position().left - e.width() * (e.index() + 1) - r
        },reflow: function() {
            e("[data-section]").trigger("resize")
        },small: function(t) {
            var n = e.extend({}, this.settings, this.data_options(t));
            return this.is_tabs(t) ? !1 : t && this.is_accordion(t) ? !0 : e("html").hasClass("lt-ie9") ? !0 : e("html").hasClass("ie8compat") ? !0 : e(this.scope).width() < 768
        },off: function() {
            e(this.scope).off(".fndtn.section"), e(t).off(".fndtn.section"), e(n).off(".fndtn.section")
        }}
}(Foundation.zj, this, this.document), function(e, t, n, r) {
    "use strict";
    Foundation.libs.tooltips = {name: "tooltips",version: "4.1.0",settings: {selector: ".has-tip",additionalInheritableClasses: [],tooltipClass: ".tooltip",tipTemplate: function(e, t) {
                return '<span data-selector="' + e + '" class="' + Foundation.libs.tooltips.settings.tooltipClass.substring(1) + '">' + t + '<span class="nub"></span></span>'
            }},cache: {},init: function(t, n, r) {
            var i = this;
            this.scope = t || this.scope, typeof n == "object" && e.extend(!0, this.settings, n);
            if (typeof n == "string")
                return this[n].call(this, r);
            Modernizr.touch ? e(this.scope).on("click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip", "[data-tooltip]", function(t) {
                t.preventDefault(), e(i.settings.tooltipClass).hide(), i.showOrCreateTip(e(this))
            }).on("click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip", this.settings.tooltipClass, function(t) {
                t.preventDefault(), e(this).fadeOut(150)
            }) : e(this.scope).on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip", "[data-tooltip]", function(t) {
                var n = e(this);
                t.type === "mouseover" || t.type === "mouseenter" ? i.showOrCreateTip(n) : (t.type === "mouseout" || t.type === "mouseleave") && i.hide(n)
            })
        },showOrCreateTip: function(e) {
            var t = this.getTip(e);
            return t && t.length > 0 ? this.show(e) : this.create(e)
        },getTip: function(t) {
            var n = this.selector(t), r = null;
            return n && (r = e("span[data-selector=" + n + "]" + this.settings.tooltipClass)), typeof r == "object" ? r : !1
        },selector: function(e) {
            var t = e.attr("id"), n = e.attr("data-tooltip") || e.attr("data-selector");
            return (t && t.length < 1 || !t) && typeof n != "string" && (n = "tooltip" + Math.random().toString(36).substring(7), e.attr("data-selector", n)), t && t.length > 0 ? t : n
        },create: function(t) {
            var n = e(this.settings.tipTemplate(this.selector(t), e("<div>").html(t.attr("title")).html())), r = this.inheritable_classes(t);
            n.addClass(r).appendTo("body"), Modernizr.touch && n.append('<span class="tap-to-close">tap to close </span>'), t.removeAttr("title").attr("title", ""), this.show(t)
        },reposition: function(n, r, i) {
            var s, o, u, a, f, l;
            r.css("visibility", "hidden").show(), s = n.data("width"), o = r.children(".nub"), u = this.outerHeight(o), a = this.outerHeight(o), l = function(e, t, n, r, i, s) {
                return e.css({top: t ? t : "auto",bottom: r ? r : "auto",left: i ? i : "auto",right: n ? n : "auto",width: s ? s : "auto"}).end()
            }, l(r, n.offset().top + this.outerHeight(n) + 10, "auto", "auto", n.offset().left, s);
            if (e(t).width() < 767)
                l(r, n.offset().top + this.outerHeight(n) + 10, "auto", "auto", 12.5, e(this.scope).width()), r.addClass("tip-override"), l(o, -u, "auto", "auto", n.offset().left);
            else {
                var c = n.offset().left;
                Foundation.rtl && (c = n.offset().left + n.offset().width - this.outerWidth(r)), l(r, n.offset().top + this.outerHeight(n) + 10, "auto", "auto", c, s), r.removeClass("tip-override"), i && i.indexOf("tip-top") > -1 ? l(r, n.offset().top - this.outerHeight(r), "auto", "auto", c, s).removeClass("tip-override") : i && i.indexOf("tip-left") > -1 ? l(r, n.offset().top + this.outerHeight(n) / 2 - u * 2.5, "auto", "auto", n.offset().left - this.outerWidth(r) - u, s).removeClass("tip-override") : i && i.indexOf("tip-right") > -1 && l(r, n.offset().top + this.outerHeight(n) / 2 - u * 2.5, "auto", "auto", n.offset().left + this.outerWidth(n) + u, s).removeClass("tip-override")
            }
            r.css("visibility", "visible").hide()
        },inheritable_classes: function(t) {
            var n = ["tip-top", "tip-left", "tip-bottom", "tip-right", "noradius"].concat(this.settings.additionalInheritableClasses), r = t.attr("class"), i = r ? e.map(r.split(" "), function(t, r) {
                if (e.inArray(t, n) !== -1)
                    return t
            }).join(" ") : "";
            return e.trim(i)
        },show: function(e) {
            var t = this.getTip(e);
            this.reposition(e, t, e.attr("class")), t.fadeIn(150)
        },hide: function(e) {
            var t = this.getTip(e);
            t.fadeOut(150)
        },reload: function() {
            var t = e(this);
            return t.data("fndtn-tooltips") ? t.foundationTooltips("destroy").foundationTooltips("init") : t.foundationTooltips("init")
        },off: function() {
            e(this.scope).off(".fndtn.tooltip"), e(this.settings.tooltipClass).each(function(t) {
                e("[data-tooltip]").get(t).attr("title", e(this).text())
            }).remove()
        }}
}(Foundation.zj, this, this.document), function(e, t, n, r) {
    "use strict";
    Foundation.libs.topbar = {name: "topbar",version: "4.1.0",settings: {index: 0,stickyClass: "sticky",custom_back_text: !0,back_text: "Back",init: !1},init: function(n, r) {
            var i = this;
            return typeof n == "object" && e.extend(!0, this.settings, n), typeof n != "string" ? (e(".top-bar").each(function() {
                i.settings.$w = e(t), i.settings.$topbar = e(this), i.settings.$section = i.settings.$topbar.find("section"), i.settings.$titlebar = i.settings.$topbar.children("ul").first(), i.settings.$topbar.data("index", 0);
                var n = e("<div class='top-bar-js-breakpoint'/>").insertAfter(i.settings.$topbar);
                i.settings.breakPoint = n.width(), n.remove(), i.assemble(), i.settings.$topbar.parent().hasClass("fixed") && e("body").css("padding-top", i.outerHeight(i.settings.$topbar))
            }), i.settings.init || this.events(), this.settings.init) : this[n].call(this, r)
        },events: function() {
            var n = this, r = this.outerHeight(e(".top-bar"));
            e(this.scope).on("click.fndtn.topbar", ".top-bar .toggle-topbar", function(i) {
                var s = e(this).closest(".top-bar"), o = s.find("section, .section"), u = s.children("ul").first();
                s.data("height") || n.largestUL(), i.preventDefault(), n.breakpoint() && s.toggleClass("expanded").css("min-height", ""), s.hasClass("expanded") || (n.rtl ? (o.css({right: "0%"}), o.find(">.name").css({right: "100%"})) : (o.css({left: "0%"}), o.find(">.name").css({left: "100%"})), o.find("li.moved").removeClass("moved"), s.data("index", 0)), s.parent().hasClass("fixed") ? (s.parent().removeClass("fixed"), e("body").css("padding-top", "0"), t.scrollTo(0, 0)) : s.hasClass("fixed expanded") && (s.parent().addClass("fixed"), e("body").css("padding-top", r))
            }).on("click.fndtn.topbar", ".top-bar .has-dropdown>a", function(t) {
                var r = e(this).closest(".top-bar"), i = r.find("section, .section"), s = r.children("ul").first();
                (Modernizr.touch || n.breakpoint()) && t.preventDefault();
                if (n.breakpoint()) {
                    var o = e(this), u = o.closest("li");
                    r.data("index", r.data("index") + 1), u.addClass("moved"), n.rtl ? (i.css({right: -(100 * r.data("index")) + "%"}), i.find(">.name").css({right: 100 * r.data("index") + "%"})) : (i.css({left: -(100 * r.data("index")) + "%"}), i.find(">.name").css({left: 100 * r.data("index") + "%"})), o.siblings("ul").height(r.data("height") + n.outerHeight(s, !0)), r.css("min-height", r.data("height") + n.outerHeight(s, !0) * 2)
                }
            }), e(t).on("resize.fndtn.topbar", function() {
                n.breakpoint() || e(".top-bar").css("min-height", "").removeClass("expanded")
            }.bind(this)), e(this.scope).on("click.fndtn", ".top-bar .has-dropdown .back", function(t) {
                t.preventDefault();
                var r = e(this), i = r.closest(".top-bar"), s = i.find("section, .section"), o = r.closest("li.moved"), u = o.parent();
                i.data("index", i.data("index") - 1), n.rtl ? (s.css({right: -(100 * i.data("index")) + "%"}), s.find(">.name").css({right: 100 * i.data("index") + "%"})) : (s.css({left: -(100 * i.data("index")) + "%"}), s.find(">.name").css({left: 100 * i.data("index") + "%"})), i.data("index") === 0 && i.css("min-height", 0), setTimeout(function() {
                    o.removeClass("moved")
                }, 300)
            })
        },breakpoint: function() {
            return e(t).width() <= this.settings.breakPoint || e("html").hasClass("lt-ie9")
        },assemble: function() {
            var t = this;
            this.settings.$section.detach(), this.settings.$section.find(".has-dropdown>a").each(function() {
                var n = e(this), r = n.siblings(".dropdown"), i = e('<li class="title back js-generated"><h5><a href="#"></a></h5></li>');
                t.settings
                .custom_back_text == 1 ? i.find("h5>a").html("&laquo; " + t.settings.back_text) : i.find("h5>a").html("&laquo; " + n.html()), r.prepend(i)
            }), this.settings.$section.appendTo(this.settings.$topbar), this.sticky()
        },largestUL: function() {
            var t = this.settings.$topbar.find("section ul ul"), n = t.first(), r = 0, i = this;
            t.each(function() {
                e(this).children("li").length > n.children("li").length && (n = e(this))
            }), n.children("li").each(function() {
                r += i.outerHeight(e(this), !0)
            }), this.settings.$topbar.data("height", r)
        },sticky: function() {
            var n = "." + this.settings.stickyClass;
            if (e(n).length > 0) {
                var r = e(n).length ? e(n).offset().top : 0, i = e(t), s = this.outerHeight(e(".top-bar"));
                i.scroll(function() {
                    i.scrollTop() >= r ? (e(n).addClass("fixed"), e("body").css("padding-top", s)) : i.scrollTop() < r && (e(n).removeClass("fixed"), e("body").css("padding-top", "0"))
                })
            }
        },off: function() {
            e(this.scope).off(".fndtn.topbar"), e(t).off(".fndtn.topbar")
        }}
}(Foundation.zj, this, this.document), function(e) {
    "use strict";
    e.fn.extend({customSelect: function(t) {
            if (typeof document.body.style.maxHeight == "undefined")
                return this;
            var n = {customClass: "customSelect",mapClass: !0,mapStyle: !0}, t = e.extend(n, t), r = t.customClass, i = function(t, n) {
                var r = t.find(":selected"), i = n.children(":first"), o = r.html() || "&nbsp;";
                i.html(o), r.attr("disabled") ? n.addClass(s("DisabledOption")) : n.removeClass(s("DisabledOption")), setTimeout(function() {
                    n.removeClass(s("Open")), e(document).off("mouseup." + s("Open"))
                }, 60)
            }, s = function(e) {
                return r + e
            };
            return this.each(function() {
                var n = e(this), o = e("<span />").addClass(s("Inner")), u = e("<span />");
                n.after(u.append(o)), u.addClass(r), t.mapClass && u.addClass(n.attr("class")), t.mapStyle && u.attr("style", n.attr("style")), n.addClass("hasCustomSelect").on("update", function() {
                    i(n, u);
                    var e = parseInt(n.outerWidth(), 10) - (parseInt(u.outerWidth(), 10) - parseInt(u.width(), 10));
                    u.css({display: "inline-block"});
                    var t = u.outerHeight();
                    n.attr("disabled") ? u.addClass(s("Disabled")) : u.removeClass(s("Disabled")), o.css({width: e,display: "inline-block"}), n.css({"-webkit-appearance": "menulist-button",width: u.outerWidth(),position: "absolute",opacity: 0,height: t,fontSize: u.css("font-size")})
                }).on("change", function() {
                    u.addClass(s("Changed")), i(n, u)
                }).on("keyup", function(e) {
                    u.hasClass(s("Open")) ? (e.which == 13 || e.which == 27) && i(n, u) : (n.blur(), n.focus())
                }).on("mousedown", function(e) {
                    u.removeClass(s("Changed"))
                }).on("mouseup", function(t) {
                    u.hasClass(s("Open")) || (e("." + s("Open")).not(u).length > 0 && typeof InstallTrigger != "undefined" ? n.focus() : (u.addClass(s("Open")), t.stopPropagation(), e(document).one("mouseup." + s("Open"), function(t) {
                        t.target != n.get(0) && e.inArray(t.target, n.find("*").get()) < 0 ? n.blur() : i(n, u)
                    })))
                }).focus(function() {
                    u.removeClass(s("Changed")).addClass(s("Focus"))
                }).blur(function() {
                    u.removeClass(s("Focus") + " " + s("Open"))
                }).hover(function() {
                    u.addClass(s("Hover"))
                }, function() {
                    u.removeClass(s("Hover"))
                }).trigger("update")
            })
        }})
}(jQuery), function(e) {
    e.fn.hoverIntent = function(t, n, r) {
        var i = {interval: 100,sensitivity: 7,timeout: 0};
        typeof t == "object" ? i = e.extend(i, t) : e.isFunction(n) ? i = e.extend(i, {over: t,out: n,selector: r}) : i = e.extend(i, {over: t,out: t,selector: n});
        var s, o, u, a, f = function(e) {
            s = e.pageX, o = e.pageY
        }, l = function(t, n) {
            n.hoverIntent_t = clearTimeout(n.hoverIntent_t);
            if (Math.abs(u - s) + Math.abs(a - o) < i.sensitivity)
                return e(n).off("mousemove.hoverIntent", f), n.hoverIntent_s = 1, i.over.apply(n, [t]);
            u = s, a = o, n.hoverIntent_t = setTimeout(function() {
                l(t, n)
            }, i.interval)
        }, c = function(e, t) {
            return t.hoverIntent_t = clearTimeout(t.hoverIntent_t), t.hoverIntent_s = 0, i.out.apply(t, [e])
        }, h = function(t) {
            var n = jQuery.extend({}, t), r = this;
            r.hoverIntent_t && (r.hoverIntent_t = clearTimeout(r.hoverIntent_t)), t.type == "mouseenter" ? (u = n.pageX, a = n.pageY, e(r).on("mousemove.hoverIntent", f), r.hoverIntent_s != 1 && (r.hoverIntent_t = setTimeout(function() {
                l(n, r)
            }, i.interval))) : (e(r).off("mousemove.hoverIntent", f), r.hoverIntent_s == 1 && (r.hoverIntent_t = setTimeout(function() {
                c(n, r)
            }, i.timeout)))
        };
        return this.on({"mouseenter.hoverIntent": h,"mouseleave.hoverIntent": h}, i.selector)
    }
}(jQuery), $(document).foundation(), $(document).foundation("reveal", {animationSpeed: 150}), function(e, t) {
    function o(t) {
        e.extend(!0, n, t)
    }
    function u(n, r, i) {
        function M(e) {
            d ? H() && (z(), q(e)) : _()
        }
        function _() {
            v = r.theme ? "ui" : "fc", n.addClass("fc"), r.isRTL ? n.addClass("fc-rtl") : n.addClass("fc-ltr"), r.theme && n.addClass("ui-widget"), d = e("<div class='fc-content' style='position:relative'/>").prependTo(n), h = new a(o, r), p = h.render(), p && n.prepend(p), j(r.defaultView), r.handleWindowResize && e(window).resize(X), B() || D()
        }
        function D() {
            setTimeout(function() {
                !b.start && B() && I()
            }, 0)
        }
        function P() {
            b && (gt("viewDestroy", b, b, b.element), b.triggerEventDestroy()), e(window).unbind("resize", X), h.destroy(), d.remove(), n.removeClass("fc fc-rtl ui-widget")
        }
        function H() {
            return n.is(":visible")
        }
        function B() {
            return e("body").is(":visible")
        }
        function j(e) {
            (!b || e != b.name) && F(e)
        }
        function F(t) {
            T++, b && (gt("viewDestroy", b, b, b.element), it(), b.triggerEventDestroy(), pt(), b.element.remove(), h.deactivateButton(b.name)), h.activateButton(t), b = new s[t](e("<div class='fc-view fc-view-" + t + "' style='position:relative'/>").appendTo(d), o), I(), dt(), T--
        }
        function I(e) {
            (!b.start || e || C < b.start || C >= b.end) && H() && q(e)
        }
        function q(e) {
            T++, b.start && (gt("viewDestroy", b, b, b.element), it(), Q()), pt(), b.render(C, e || 0), W(), dt(), (b.afterRender || V)(), tt(), nt(), gt("viewRender", b, b, b.element), b.trigger("viewDisplay", l), T--, G()
        }
        function R() {
            H() && (it(), Q(), z(), W(), K())
        }
        function z() {
            r.contentHeight ? E = r.contentHeight : r.height ? E = r.height - (p ? p.height() : 0) - U(d) : E = Math.round(d.width() / Math.max(r.aspectRatio, .5))
        }
        function W() {
            E === t && z(), T++, b.setHeight(E), b.setWidth(d.width()), T--, w = n.outerWidth()
        }
        function X() {
            if (!T)
                if (b.start) {
                    var e = ++x;
                    setTimeout(function() {
                        e == x && !T && H() && w != (w = n.outerWidth()) && (T++, R(), b.trigger("windowResize", l), T--)
                    }, 200)
                } else
                    D()
        }
        function $() {
            Q(), Y()
        }
        function J(e) {
            Q(), K(e)
        }
        function K(e) {
            H() && (b.setEventData(k), b.renderEvents(k, e), b.trigger("eventAfterAllRender"))
        }
        function Q() {
            b.triggerEventDestroy(), b.clearEvents(), b.clearEventData()
        }
        function G() {
            !r.lazyFetching || u(b.visStart, b.visEnd) ? Y() : K()
        }
        function Y() {
            f(b.visStart, b.visEnd)
        }
        function Z(e) {
            k = e, K()
        }
        function et(e) {
            J(e)
        }
        function tt() {
            h.updateTitle(b.title)
        }
        function nt() {
            var e = new Date;
            e >= b.start && e < b.end ? h.disableButton("today") : h.enableButton("today")
        }
        function rt(e, n, r) {
            b.select(e, n, r === t ? !0 : r)
        }
        function it() {
            b && b.unselect()
        }
        function st() {
            I(-1)
        }
        function ot() {
            I(1)
        }
        function ut() {
            m(C, -1), I()
        }
        function at() {
            m(C, 1), I()
        }
        function ft() {
            C = new Date, I()
        }
        function lt(e, t, n) {
            e instanceof Date ? C = S(e) : N(C, e, t, n), I()
        }
        function ct(e, n, r) {
            e !== t && m(C, e), n !== t && g(C, n), r !== t && y(C, r), I()
        }
        function ht() {
            return S(C)
        }
        function pt() {
            d.css({width: "100%",height: d.height(),overflow: "hidden"})
        }
        function dt() {
            d.css({width: "",height: "",overflow: ""})
        }
        function vt() {
            return b
        }
        function mt(e, n) {
            if (n === t)
                return r[e];
            if (e == "height" || e == "contentHeight" || e == "aspectRatio")
                r[e] = n, R()
        }
        function gt(e, t) {
            if (r[e])
                return r[e].apply(t || l, Array.prototype.slice.call(arguments, 2))
        }
        var o = this;
        o.options = r, o.render = M, o.destroy = P, o.refetchEvents = $, o.reportEvents = Z, o.reportEventChange = et, o.rerenderEvents = J, o.changeView = j, o.select = rt, o.unselect = it, o.prev = st, o.next = ot, o.prevYear = ut, o.nextYear = at, o.today = ft, o.gotoDate = lt, o.incrementDate = ct, o.formatDate = function(e, t) {
            return A(e, t, r)
        }, o.formatDates = function(e, t, n) {
            return O(e, t, n, r)
        }, o.getDate = ht, o.getView = vt, o.option = mt, o.trigger = gt, c.call(o, r, i);
        var u = o.isFetchNeeded, f = o.fetchEvents, l = n[0], h, p, d, v, b, w, E, x = 0, T = 0, C = new Date, k = [], L;
        N(C, r.year, r.month, r.date), r.droppable && e(document).bind("dragstart", function(t, n) {
            var i = t.target, s = e(i);
            if (!s.parents(".fc").length) {
                var o = r.dropAccept;
                if (e.isFunction(o) ? o.call(i, s) : s.is(o))
                    L = i, b.dragStart(L, t, n)
            }
        }).bind("dragstop", function(e, t) {
            L && (b.dragStop(L, e, t), L = null)
        })
    }
    function a(t, n) {
        function u() {
            o = n.theme ? "ui" : "fc";
            var t = n.header;
            if (t)
                return i = e("<table class='fc-header' style='width:100%'/>").append(e("<tr/>").append(f("left")).append(f("center")).append(f("right"))), i
        }
        function a() {
            i.remove()
        }
        function f(r) {
            var i = e("<td class='fc-header-" + r + "'/>"), u = n.header[r];
            return u && e.each(u.split(" "), function(r) {
                r > 0 && i.append("<span class='fc-header-space'/>");
                var u;
                e.each(this.split(","), function(r, a) {
                    if (a == "title")
                        i.append("<span class='fc-header-title'><h2>&nbsp;</h2></span>"), u && u.addClass(o + "-corner-right"), u = null;
                    else {
                        var f;
                        t[a] ? f = t[a] : s[a] && (f = function() {
                            h.removeClass(o + "-state-hover"), t.changeView(a)
                        });
                        if (f) {
                            var l = n.theme ? Q(n.buttonIcons, a) : null, c = Q(n.buttonText, a), h = e("<span class='fc-button fc-button-" + a + " " + o + "-state-default'>" + (l ? "<span class='fc-icon-wrap'><span class='ui-icon ui-icon-" + l + "'/>" + "</span>" : c) + "</span>").click(function() {
                                h.hasClass(o + "-state-disabled") || f()
                            }).mousedown(function() {
                                h.not("." + o + "-state-active").not("." + o + "-state-disabled").addClass(o + "-state-down")
                            }).mouseup(function() {
                                h.removeClass(o + "-state-down")
                            }).hover(function() {
                                h.not("." + o + "-state-active").not("." + o + "-state-disabled").addClass(o + "-state-hover")
                            }, function() {
                                h.removeClass(o + "-state-hover").removeClass(o + "-state-down")
                            }).appendTo(i);
                            Y(h), u || h.addClass(o + "-corner-left"), u = h
                        }
                    }
                }), u && u.addClass(o + "-corner-right")
            }), i
        }
        function l(e) {
            i.find("h2").html(e)
        }
        function c(e) {
            i.find("span.fc-button-" + e).addClass(o + "-state-active")
        }
        function h(e) {
            i.find("span.fc-button-" + e).removeClass(o + "-state-active")
        }
        function p(e) {
            i.find("span.fc-button-" + e).addClass(o + "-state-disabled")
        }
        function d(e) {
            i.find("span.fc-button-" + e).removeClass(o + "-state-disabled")
        }
        var r = this;
        r.render = u, r.destroy = a, r.updateTitle = l, r.activateButton = c, r.deactivateButton = h, r.disableButton = p, r.enableButton = d;
        var i = e([]), o
    }
    function c(n, r) {
        function w(e, t) {
            return !p || e < p || t > d
        }
        function E(e, t) {
            p = e, d = t, y = [];
            var n = ++v, r = h.length;
            m = r;
            for (var i = 0; i < r; i++)
                x(h[i], n)
        }
        function x(t, r) {
            T(t, function(i) {
                if (r == v) {
                    if (i) {
                        n.eventDataTransform && (i = e.map(i, n.eventDataTransform)), t.eventDataTransform && (i = e.map(i, t.eventDataTransform));
                        for (var s = 0; s < i.length; s++)
                            i[s].source = t, H(i[s]);
                        y = y.concat(i)
                    }
                    m--, m || a(y)
                }
            })
        }
        function T(t, r) {
            var s, o = i.sourceFetchers, u;
            for (s = 0; s < o.length; s++) {
                u = o[s](t, p, d, r);
                if (u === !0)
                    return;
                if (typeof u == "object") {
                    T(u, r);
                    return
                }
            }
            var a = t.events;
            if (a)
                e.isFunction(a) ? (D(), a(S(p), S(d), function(e) {
                    r(e), P()
                })) : e.isArray(a) ? r(a) : r();
            else {
                var l = t.url;
                if (l) {
                    var c = t.success, h = t.error, v = t.complete, m;
                    e.isFunction(t.data) ? m = t.data() : m = t.data;
                    var g = e.extend({}, m || {}), y = rt(t.startParam, n.startParam), b = rt(t.endParam, n.endParam);
                    y && (g[y] = Math.round(+p / 1e3)), b && (g[b] = Math.round(+d / 1e3)), D(), e.ajax(e.extend({}, f, t, {data: g,success: function(t) {
                            t = t || [];
                            var n = nt(c, this, arguments);
                            e.isArray(n) && (t = n), r(t)
                        },error: function() {
                            nt(h, this, arguments), r()
                        },complete: function() {
                            nt(v, this, arguments), P()
                        }}))
                } else
                    r()
            }
        }
        function N(e) {
            e = k(e), e && (m++, x(e, v))
        }
        function k(t) {
            e.isFunction(t) || e.isArray(t) ? t = {events: t} : typeof t == "string" && (t = {url: t});
            if (typeof t == "object")
                return B(t), h.push(t), t
        }
        function L(t) {
            h = e.grep(h, function(e) {
                return !j(e, t)
            }), y = e.grep(y, function(e) {
                return !j(e.source, t)
            }), a(y)
        }
        function A(e) {
            var t, n = y.length, r, i = u().defaultEventEnd, s = e.start - e._start, o = e.end ? e.end - (e._end || i(e)) : 0;
            for (t = 0; t < n; t++)
                r = y[t], r._id == e._id && r != e && (r.start = new Date(+r.start + s), e.end ? r.end ? r.end = new Date(+r.end + o) : r.end = new Date(+i(r) + o) : r.end = null, r.title = e.title, r.url = e.url, r.allDay = e.allDay, r.className = e.className, r.editable = e.editable, r.color = e.color, r.backgroundColor = e.backgroundColor, r.borderColor = e.borderColor, r.textColor = e.textColor, H(r));
            H(e), a(y)
        }
        function O(e, t) {
            H(e), e.source || (t && (c.events.push(e), e.source = c), y.push(e)), a(y)
        }
        function M(t) {
            if (!t) {
                y = [];
                for (var n = 0; n < h.length; n++)
                    e.isArray(h[n].events) && (h[n].events = [])
            } else {
                if (!e.isFunction(t)) {
                    var r = t + "";
                    t = function(e) {
                        return e._id == r
                    }
                }
                y = e.grep(y, t, !0);
                for (var n = 0; n < h.length; n++)
                    e.isArray(h[n].events) && (h[n].events = e.grep(h[n].events, t, !0))
            }
            a(y)
        }
        function _(t) {
            return e.isFunction(t) ? e.grep(y, t) : t ? (t += "", e.grep(y, function(e) {
                return e._id == t
            })) : y
        }
        function D() {
            g++ || o("loading", null, !0, u())
        }
        function P() {
            --g || o("loading", null, !1, u())
        }
        function H(e) {
            var r = e.source || {}, i = rt(r.ignoreTimezone, n.ignoreTimezone);
            e._id = e._id || (e.id === t ? "_fc" + l++ : e.id + ""), e.date && (e.start || (e.start = e.date), delete e.date), e._start = S(e.start = C(e.start, i)), e.end = C(e.end, i), e.end && e.end <= e.start && (e.end = null), e._end = e.end ? S(e.end) : null, e.allDay === t && (e.allDay = rt(r.allDayDefault, n.allDayDefault)), e.className ? typeof e.className == "string" && (e.className = e.className.split(/\s+/)) : e.className = []
        }
        function B(e) {
            e.className ? typeof e.className == "string" && (e.className = e.className.split(/\s+/)) : e.className = [];
            var t = i.sourceNormalizers;
            for (var n = 0; n < t.length; n++)
                t[n](e)
        }
        function j(e, t) {
            return e && t && F(e) == F(t)
        }
        function F(e) {
            return (typeof e == "object" ? e.events || e.url : "") || e
        }
        var s = this;
        s.isFetchNeeded = w, s.fetchEvents = E, s.addEventSource = N, s.removeEventSource = L, s.updateEvent = A, s.renderEvent = O, s.removeEvents = M, s.clientEvents = _, s.normalizeEvent = H;
        var o = s.trigger, u = s.getView, a = s.reportEvents, c = {events: []}, h = [c], p, d, v = 0, m = 0, g = 0, y = [];
        for (var b = 0; b < r.length; b++)
            k(r[b])
    }
    function m(e, t, n) {
        return e.setFullYear(e.getFullYear() + t), n || E(e), e
    }
    function g(e, t, n) {
        if (+e) {
            var r = e.getMonth() + t, i = S(e);
            i.setDate(1), i.setMonth(r), e.setMonth(r), n || E(e);
            while (e.getMonth() != i.getMonth())
                e.setDate(e.getDate() + (e < i ? 1 : -1))
        }
        return e
    }
    function y(e, t, n) {
        if (+e) {
            var r = e.getDate() + t, i = S(e);
            i.setHours(9), i.setDate(r), e.setDate(r), n || E(e), b(e, i)
        }
        return e
    }
    function b(e, t) {
        if (+e)
            while (e.getDate() != t.getDate())
                e.setTime(+e + (e < t ? 1 : -1) * d)
    }
    function w(e, t) {
        return e.setMinutes(e.getMinutes() + t), e
    }
    function E(e) {
        return e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0), e
    }
    function S(e, t) {
        return t ? E(new Date(+e)) : new Date(+e)
    }
    function x() {
        var e = 0, t;
        do
            t = new Date(1970, e++, 1);
        while (t.getHours());
        return t
    }
    function T(e, t) {
        return Math.round((S(e, !0) - S(t, !0)) / p)
    }
    function N(e, n, r, i) {
        n !== t && n != e.getFullYear() && (e.setDate(1), e.setMonth(0), e.setFullYear(n)), r !== t && r != e.getMonth() && (e.setDate(1), e.setMonth(r)), i !== t && e.setDate(i)
    }
    function C(e, n) {
        return typeof e == "object" ? e : typeof e == "number" ? new Date(e * 1e3) : typeof e == "string" ? e.match(/^\d+(\.\d+)?$/) ? new Date(parseFloat(e) * 1e3) : (n === t && (n = !0), k(e, n) || (e ? new Date(e) : null)) : null
    }
    function k(e, t) {
        var n = e.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);
        if (!n)
            return null;
        var r = new Date(n[1], 0, 1);
        if (t || !n[13]) {
            var i = new Date(n[1], 0, 1, 9, 0);
            n[3] && (r.setMonth(n[3] - 1), i.setMonth(n[3] - 1)), n[5] && (r.setDate(n[5]), i.setDate(n[5])), b(r, i), n[7] && r.setHours(n[7]), n[8] && r.setMinutes(n[8]), n[10] && r.setSeconds(n[10]), n[12] && r.setMilliseconds(Number("0." + n[12]) * 1e3), b(r, i)
        } else {
            r.setUTCFullYear(n[1], n[3] ? n[3] - 1 : 0, n[5] || 1), r.setUTCHours(n[7] || 0, n[8] || 0, n[10] || 0, n[12] ? Number("0." + n[12]) * 1e3 : 0);
            if (n[14]) {
                var s = Number(n[16]) * 60 + (n[18] ? Number(n[18]) : 0);
                s *= n[15] == "-" ? 1 : -1, r = new Date(+r + s * 60 * 1e3)
            }
        }
        return r
    }
    function L(e) {
        if (typeof e == "number")
            return e * 60;
        if (typeof e == "object")
            return e.getHours() * 60 + e.getMinutes();
        var t = e.match(/(\d+)(?::(\d+))?\s*(\w+)?/);
        if (t) {
            var n = parseInt(t[1], 10);
            return t[3] && (n %= 12, t[3].toLowerCase().charAt(0) == "p" && (n += 12)), n * 60 + (t[2] ? parseInt(t[2], 10) : 0)
        }
    }
    function A(e, t, n) {
        return O(e, null, t, n)
    }
    function O(e, t, r, i) {
        i = i || n;
        var s = e, o = t, u, a = r.length, f, l, c, h = "";
        for (u = 0; u < a; u++) {
            f = r.charAt(u);
            if (f == "'") {
                for (l = u + 1; l < a; l++)
                    if (r.charAt(l) == "'") {
                        s && (l == u + 1 ? h += "'" : h += r.substring(u + 1, l), u = l);
                        break
                    }
            } else if (f == "(") {
                for (l = u + 1; l < a; l++)
                    if (r.charAt(l) == ")") {
                        var p = A(s, r.substring(u + 1, l), i);
                        parseInt(p.replace(/\D/, ""), 10) && (h += p), u = l;
                        break
                    }
            } else if (f == "[") {
                for (l = u + 1; l < a; l++)
                    if (r.charAt(l) == "]") {
                        var d = r.substring(u + 1, l), p = A(s, d, i);
                        p != A(o, d, i) && (h += p), u = l;
                        break
                    }
            } else if (f == "{")
                s = t, o = e;
            else if (f == "}")
                s = e, o = t;
            else {
                for (l = a; l > u; l--)
                    if (c = M[r.substring(u, l)]) {
                        s && (h += c(s, i)), u = l - 1;
                        break
                    }
                l == u && s && (h += f)
            }
        }
        return h
    }
    function _(e) {
        var t, n = new Date(e.getTime());
        return n.setDate(n.getDate() + 4 - (n.getDay() || 7)), t = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((t - n) / 864e5) / 7) + 1
    }
    function D(e) {
        return e.end ? P(e.end, e.allDay) : y(S(e.start), 1)
    }
    function P(e, t) {
        return e = S(e), t || e.getHours() || e.getMinutes() ? y(e, 1) : E(e)
    }
    function H(n, r, i) {
        n.unbind("mouseover").mouseover(function(n) {
            var s = n.target, o, u, a;
            while (s != this)
                o = s, s = s.parentNode;
            (u = o._fci) !== t && (o._fci = t, a = r[u], i(a.event, a.element, a), e(n.target).trigger(n)), n.stopPropagation()
        })
    }
    function B(t, n, r) {
        for (var i = 0, s; i < t.length; i++)
            s = e(t[i]), s.width(Math.max(0, n - F(s, r)))
    }
    function j(t, n, r) {
        for (var i = 0, s; i < t.length; i++)
            s = e(t[i]), s.height(Math.max(0, n - U(s, r)))
    }
    function F(e, t) {
        return I(e) + R(e) + (t ? q(e) : 0)
    }
    function I(t) {
        return (parseFloat(e.css(t[0], "paddingLeft", !0)) || 0) + (parseFloat(e.css(t[0], "paddingRight", !0)) || 0)
    }
    function q(t) {
        return (parseFloat(e.css(t[0], "marginLeft", !0)) || 0) + (parseFloat(e.css(t[0], "marginRight", !0)) || 0)
    }
    function R(t) {
        return (parseFloat(e.css(t[0], "borderLeftWidth", !0)) || 0) + (parseFloat(e.css(t[0], "borderRightWidth", !0)) || 0)
    }
    function U(e, t) {
        return z(e) + X(e) + (t ? W(e) : 0)
    }
    function z(t) {
        return (parseFloat(e.css(t[0], "paddingTop", !0)) || 0) + (parseFloat(e.css(t[0], "paddingBottom", !0)) || 0)
    }
    function W(t) {
        return (parseFloat(e.css(t[0], "marginTop", !0)) || 0) + (parseFloat(e.css(t[0], "marginBottom", !0)) || 0)
    }
    function X(t) {
        return (parseFloat(e.css(t[0], "borderTopWidth", !0)) || 0) + (parseFloat(e.css(t[0], "borderBottomWidth", !0)) || 0)
    }
    function V() {
    }
    function $(e, t) {
        return e - t
    }
    function J(e) {
        return Math.max.apply(Math, e)
    }
    function K(e) {
        return (e < 10 ? "0" : "") + e
    }
    function Q(e, n) {
        if (e[n] !== t)
            return e[n];
        var r = n.split(/(?=[A-Z])/), i = r.length - 1, s;
        for (; i >= 0; i--) {
            s = e[r[i].toLowerCase()];
            if (s !== t)
                return s
        }
        return e[""]
    }
    function G(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
    }
    function Y(e) {
        e.attr("unselectable", "on").css("MozUserSelect", "none").bind("selectstart.ui", function() {
            return !1
        })
    }
    function Z(e) {
        e.children().removeClass("fc-first fc-last").filter(":first-child").addClass("fc-first").end().filter(":last-child").addClass("fc-last")
    }
    function et(e, t) {
        e.each(function(e, n) {
            n.className = n.className.replace(/^fc-\w*/, "fc-" + h[t.getDay()])
        })
    }
    function tt(e, t) {
        var n = e.source || {}, r = e.color, i = n.color, s = t("eventColor"), o = e.backgroundColor || r || n.backgroundColor || i || t("eventBackgroundColor") || s, u = e.borderColor || r || n.borderColor || i || t("eventBorderColor") || s, a = e.textColor || n.textColor || t("eventTextColor"), f = [];
        return o && f.push("background-color:" + o), u && f.push("border-color:" + u), a && f.push("color:" + a), f.join(";")
    }
    function nt(t, n, r) {
        e.isFunction(t) && (t = [t]);
        if (t) {
            var i, s;
            for (i = 0; i < t.length; i++)
                s = t[i].apply(n, r) || s;
            return s
        }
    }
    function rt() {
        for (var e = 0; e < arguments.length; e++)
            if (arguments[e] !== t)
                return arguments[e]
    }
    function it(e, t) {
        function a(e, t) {
            t && (g(e, t), e.setDate(1));
            var a = r("firstDay"), f = S(e, !0);
            f.setDate(1);
            var l = g(S(f), 1), c = S(f);
            y(c, -((c.getDay() - a + 7) % 7)), s(c);
            var h = S(l);
            y(h, (7 - h.getDay() + a) % 7), s(h, -1, !0);
            var p = o(), d = Math.round(T(h, c) / 7);
            r("weekMode") == "fixed" && (y(h, (6 - d) * 7), d = 6), n.title = u(f, r("titleFormat")), n.start = f, n.end = l, n.visStart = c, n.visEnd = h, i(d, p, !0)
        }
        var n = this;
        n.render = a, ut.call(n, e, t, "month");
        var r = n.opt, i = n.renderBasic, s = n.skipHiddenDays, o = n.getCellsPerWeek, u = t.formatDate
    }
    function st(e, t) {
        function a(e, t) {
            t && y(e, t * 7);
            var a = y(S(e), -((e.getDay() - r("firstDay") + 7) % 7)), f = y(S(a), 7), l = S(a);
            s(l);
            var c = S(f);
            s(c, -1, !0);
            var h = o();
            n.start = a, n.end = f, n.visStart = l, n.visEnd = c, n.title = u(l, y(S(c), -1), r("titleFormat")), i(1, h, !1)
        }
        var n = this;
        n.render = a, ut.call(n, e, t, "basicWeek");
        var r = n.opt, i = n.renderBasic, s = n.skipHiddenDays, o = n.getCellsPerWeek, u = t.formatDates
    }
    function ot(e, t) {
        function u(e, t) {
            t && y(e, t), s(e, t < 0 ? -1 : 1);
            var u = S(e, !0), a = y(S(u), 1);
            n.title = o(e, r("titleFormat")), n.start = n.visStart = u, n.end = n.visEnd = a, i(1, 1, !1)
        }
        var n = this;
        n.render = u, ut.call(n, e, t, "basicDay");
        var r = n.opt, i = n.renderBasic, s = n.skipHiddenDays, o = t.formatDate
    }
    function ut(t, n, r) {
        function $(e, t, n) {
            D = e, P = t, H = n, J(), b || K(), Q()
        }
        function J() {
            R = s("theme") ? "ui" : "fc", z = s("columnFormat"), W = s("weekNumbers"), X = s("weekNumberTitle"), s("weekNumberCalculation") != "iso" ? V = "w" : V = "W"
        }
        function K() {
            L = e("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(t)
        }
        function Q() {
            var n = et();
            v && v.remove(), v = e(n).appendTo(t), m = v.find("thead"), g = m.find(".fc-day-header"), b = v.find("tbody"), w = b.find("tr"), x = b.find(".fc-day"), T = w.find("td:first-child"), N = w.eq(0).find(".fc-day > div"), C = w.eq(0).find(".fc-day-content > div"), Z(m.add(m.find("tr"))), Z(w), w.eq(0).addClass("fc-first"), w.filter(":last").addClass("fc-last"), x.each(function(t, n) {
                var r = l(Math.floor(t / P), t % P);
                o("dayRender", i, r, e(n))
            }), ot(x)
        }
        function et() {
            var e = "<table class='fc-border-separate' style='width:100%' cellspacing='0'>" + tt() + nt() + "</table>";
            return e
        }
        function tt() {
            var e = R + "-widget-header", t = "", n, r;
            t += "<thead><tr>", W && (t += "<th class='fc-week-number " + e + "'>" + G(X) + "</th>");
            for (n = 0; n < P; n++)
                r = l(0, n), t += "<th class='fc-day-header fc-" + h[r.getDay()] + " " + e + "'>" + G(d(r, z)) + "</th>";
            return t += "</tr></thead>", t
        }
        function nt() {
            var e = R + "-widget-content", t = "", n, r, i;
            t += "<tbody>";
            for (n = 0; n < D; n++) {
                t += "<tr class='fc-week'>", W && (i = l(n, 0), t += "<td class='fc-week-number " + e + "'>" + "<div>" + G(d(i, V)) + "</div>" + "</td>");
                for (r = 0; r < P; r++)
                    i = l(n, r), t += rt(i);
                t += "</tr>"
            }
            return t += "</tbody>", t
        }
        function rt(e) {
            var t = R + "-widget-content", n = i.start.getMonth(), r = E(new Date), s = "", o = ["fc-day", "fc-" + h[e.getDay()], t];
            return e.getMonth() != n && o.push("fc-other-month"), +e == +r ? o.push("fc-today", R + "-state-highlight") : e < r ? o.push("fc-past") : o.push("fc-future"), s += "<td class='" + o.join(" ") + "'" + " data-date='" + d(e, "yyyy-MM-dd") + "'" + ">" + "<div>", H && (s += "<div class='fc-day-number'>" + e.getDate() + "</div>"), s += "<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>", s
        }
        function it(t) {
            O = t;
            var n = O - m.height(), r, i, o;
            s("weekMode") == "variable" ? r = i = Math.floor(n / (D == 1 ? 2 : 6)) : (r = Math.floor(n / D), i = n - r * (D - 1)), T.each(function(t, n) {
                t < D && (o = e(n), o.find("> div").css("min-height", (t == D - 1 ? i : r) - U(o)))
            })
        }
        function st(e) {
            A = e, I.clear(), q.clear(), _ = 0, W && (_ = m.find("th.fc-week-number").outerWidth()), M = Math.floor((A - _) / P), B(g.slice(0, -1), M)
        }
        function ot(e) {
            e.click(ut).mousedown(f)
        }
        function ut(t) {
            if (!s("selectable")) {
                var n = k(e(this).data("date"));
                o("dayClick", this, n, !0, t)
            }
        }
        function ft(e, t, n) {
            n && j.build();
            var r = p(e, t);
            for (var i = 0; i < r.length; i++) {
                var s = r[i];
                ot(lt(s.row, s.leftCol, s.row, s.rightCol))
            }
        }
        function lt(e, n, r, i) {
            var s = j.rect(e, n, r, i, t);
            return u(s, t)
        }
        function ct(e, t) {
            return S(e)
        }
        function ht(e, t, n) {
            ft(e, y(S(t), 1), !0)
        }
        function pt() {
            a()
        }
        function dt(e, t, n) {
            var r = c(e), i = x[r.row * P + r.col];
            o("dayClick", i, e, t, n)
        }
        function vt(e, t, n) {
            F.start(function(e) {
                a(), e && lt(e.row, e.col, e.row, e.col)
            }, t)
        }
        function mt(e, t, n) {
            var r = F.stop();
            a();
            if (r) {
                var i = l(r);
                o("drop", e, i, !0, t, n)
            }
        }
        function gt(e) {
            return S(e.start)
        }
        function yt(e) {
            return I.left(e)
        }
        function bt(e) {
            return I.right(e)
        }
        function wt(e) {
            return q.left(e)
        }
        function Et(e) {
            return q.right(e)
        }
        function St(e) {
            return w.eq(e)
        }
        var i = this;
        i.renderBasic = $, i.setHeight = it, i.setWidth = st, i.renderDayOverlay = ft, i.defaultSelectionEnd = ct, i.renderSelection = ht, i.clearSelection = pt, i.reportDayClick = dt, i.dragStart = vt, i.dragStop = mt, i.defaultEventEnd = gt, i.getHoverListener = function() {
            return F
        }, i.colLeft = yt, i.colRight = bt, i.colContentLeft = wt, i.colContentRight = Et, i.getIsCellAllDay = function() {
            return !0
        }, i.allDayRow = St, i.getRowCnt = function() {
            return D
        }, i.getColCnt = function() {
            return P
        }, i.getColWidth = function() {
            return M
        }, i.getDaySegmentContainer = function() {
            return L
        }, xt.call(i, t, n, r), At.call(i), Lt.call(i), at.call(i);
        var s = i.opt, o = i.trigger, u = i.renderOverlay, a = i.clearOverlays, f = i.daySelectionMousedown, l = i.cellToDate, c = i.dateToCell, p = i.rangeToSegments, d = n.formatDate, v, m, g, b, w, x, T, N, C, L, A, O, M, _, D, P, H, j, F, I, q, R, z, W, X, V;
        Y(t.addClass("fc-grid")), j = new Ot(function(t, n) {
            var r, i, s;
            g.each(function(t, o) {
                r = e(o), i = r.offset().left, t && (s[1] = i), s = [i], n[t] = s
            }), s[1] = i + r.outerWidth(), w.each(function(n, o) {
                n < D && (r = e(o), i = r.offset().top, n && (s[1] = i), s = [i], t[n] = s)
            }), s[1] = i + r.outerHeight()
        }), F = new Mt(j), I = new Dt(function(e) {
            return N.eq(e)
        }), q = new Dt(function(e) {
            return C.eq(e)
        })
    }
    function at() {
        function t(t, n) {
            e.renderDayEvents(t, n)
        }
        function n() {
            e.getDaySegmentContainer().empty()
        }
        var e = this;
        e.renderEvents = t, e.clearEvents = n, Tt.call(e)
    }
    function ft(e, t) {
        function a(e, t) {
            t && y(e, t * 7);
            var a = y(S(e), -((e.getDay() - r("firstDay") + 7) % 7)), f = y(S(a), 7), l = S(a);
            s(l);
            var c = S(f);
            s(c, -1, !0);
            var h = o();
            n.title = u(l, y(S(c), -1), r("titleFormat")), n.start = a, n.end = f, n.visStart = l, n.visEnd = c, i(h)
        }
        var n = this;
        n.render = a, ct.call(n, e, t, "agendaWeek");
        var r = n.opt, i = n.renderAgenda, s = n.skipHiddenDays, o = n.getCellsPerWeek, u = t.formatDates
    }
    function lt(e, t) {
        function u(e, t) {
            t && y(e, t), s(e, t < 0 ? -1 : 1);
            var u = S(e, !0), a = y(S(u), 1);
            n.title = o(e, r("titleFormat")), n.start = n.visStart = u, n.end = n.visEnd = a, i(1)
        }
        var n = this;
        n.render = u, ct.call(n, e, t, "agendaDay");
        var r = n.opt, i = n.renderAgenda, s = n.skipHiddenDays, o = t.formatDate
    }
    function ct(n, r, i) {
        function Et(e) {
            st = e, St(), T ? Nt() : Tt()
        }
        function St() {
            pt = o("theme") ? "ui" : "fc", dt = o("isRTL"), vt = L(o("minTime")), mt = L(o("maxTime")), gt = o("columnFormat"), yt = o("weekNumbers"), bt = o("weekNumberTitle"), o("weekNumberCalculation") != "iso" ? wt = "w" : wt = "W", nt = o("snapMinutes") || o("slotMinutes")
        }
        function Tt() {
            var t = pt + "-widget-header", r = pt + "-widget-content", i, s, u, a, f, l = o("slotMinutes") % 15 == 0;
            Nt(), P = e("<div style='position:absolute;z-index:2;left:0;width:100%'/>").appendTo(n), o("allDaySlot") ? (H = e("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(P), i = "<table style='width:100%' class='fc-agenda-allday' cellspacing='0'><tr><th class='" + t + " fc-agenda-axis'>" + o("allDayText") + "</th>" + "<td>" + "<div class='fc-day-content'><div style='position:relative'/></div>" + "</td>" + "<th class='" + t + " fc-agenda-gutter'>&nbsp;</th>" + "</tr>" + "</table>", F = e(i).appendTo(P), I = F.find("tr"), Ft(I.find("td")), P.append("<div class='fc-agenda-divider " + t + "'>" + "<div class='fc-agenda-divider-inner'/>" + "</div>")) : H = e([]), q = e("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>").appendTo(P), R = e("<div style='position:relative;width:100%;overflow:hidden'/>").appendTo(q), z = e("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(R), i = "<table class='fc-agenda-slots' style='width:100%' cellspacing='0'><tbody>", s = x(), a = w(S(s), mt), w(s, vt), ot = 0;
            for (u = 0; s < a; u++)
                f = s.getMinutes(), i += "<tr class='fc-slot" + u + " " + (f ? "fc-minor" : "") + "'>" + "<th class='fc-agenda-axis " + t + "'>" + (!l || !f ? b(s, o("axisFormat")) : "&nbsp;") + "</th>" + "<td class='" + r + "'>" + "<div style='position:relative'>&nbsp;</div>" + "</td>" + "</tr>", w(s, o("slotMinutes")), ot++;
            i += "</tbody></table>", W = e(i).appendTo(R), It(W.find("td"))
        }
        function Nt() {
            var t = Ct();
            T && T.remove(), T = e(t).appendTo(n), N = T.find("thead"), C = N.find("th").slice(1, -1), k = T.find("tbody"), A = k.find("td").slice(0, -1), O = A.find("> div"), M = A.find(".fc-day-content > div"), _ = A.eq(0), D = O.eq(0), Z(N.add(N.find("tr"))), Z(k.add(k.find("tr")))
        }
        function Ct() {
            var e = "<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'>" + kt() + _t() + "</table>";
            return e
        }
        function kt() {
            var e = pt + "-widget-header", t, n = "", r, i;
            n += "<thead><tr>", yt ? (t = v(0, 0), r = b(t, wt), dt ? r += bt : r = bt + r, n += "<th class='fc-agenda-axis fc-week-number " + e + "'>" + G(r) + "</th>") : n += "<th class='fc-agenda-axis " + e + "'>&nbsp;</th>";
            for (i = 0; i < st; i++)
                t = v(0, i), n += "<th class='fc-" + h[t.getDay()] + " fc-col" + i + " " + e + "'>" + G(b(t, gt)) + "</th>";
            return n += "<th class='fc-agenda-gutter " + e + "'>&nbsp;</th>" + "</tr>" + "</thead>", n
        }
        function _t() {
            var e = pt + "-widget-header", t = pt + "-widget-content", n, r = E(new Date), i, s, o, u, a = "";
            a += "<tbody><tr><th class='fc-agenda-axis " + e + "'>&nbsp;</th>", s = "";
            for (i = 0; i < st; i++)
                n = v(0, i), u = ["fc-col" + i, "fc-" + h[n.getDay()], t], +n == +r ? u.push(pt + "-state-highlight", "fc-today") : n < r ? u.push("fc-past") : u.push("fc-future"), o = "<td class='" + u.join(" ") + "'>" + "<div>" + "<div class='fc-day-content'>" + "<div style='position:relative'>&nbsp;</div>" + "</div>" + "</div>" + "</td>", s += o;
            return a += s, a += "<td class='fc-agenda-gutter " + t + "'>&nbsp;</td>" + "</tr>" + "</tbody>", a
        }
        function Pt(e) {
            e === t && (e = J), J = e, ct = {};
            var n = k.position().top, r = q.position().top, i = Math.min(e - n, W.height() + r + 1);
            D.height(i - U(_)), P.css("top", n), q.height(i - r - 1), tt = W.find("tr:first").height() + 1, rt = o("slotMinutes") / nt, it = tt / rt
        }
        function Ht(t) {
            V = t, ft.clear(), lt.clear();
            var n = N.find("th:first");
            F && (n = n.add(F.find("th:first"))), n = n.add(W.find("th:first")), K = 0, B(n.width("").each(function(t, n) {
                K = Math.max(K, e(n).outerWidth())
            }), K);
            var r = T.find(".fc-agenda-gutter");
            F && (r = r.add(F.find("th.fc-agenda-gutter")));
            var i = q[0].clientWidth;
            et = q.width() - i, et ? (B(r, et), r.show().prev().removeClass("fc-last")) : r.hide().prev().addClass("fc-last"), Q = Math.floor((i - K) / st), B(C.slice(0, -1), Q)
        }
        function Bt() {
            function r() {
                q.scrollTop(n)
            }
            var e = x(), t = S(e);
            t.setHours(o("firstHour"));
            var n = Qt(e, t) + 1;
            r(), setTimeout(r, 0)
        }
        function jt() {
            Bt()
        }
        function Ft(e) {
            e.click(qt).mousedown(p)
        }
        function It(e) {
            e.click(qt).mousedown(rn)
        }
        function qt(e) {
            if (!o("selectable")) {
                var t = Math.min(st - 1, Math.floor((e.pageX - T.offset().left - K) / Q)), n = v(0, t), r = this.parentNode.className.match(/fc-slot(\d+)/);
                if (r) {
                    var i = parseInt(r[1]) * o("slotMinutes"), s = Math.floor(i / 60);
                    n.setHours(s), n.setMinutes(i % 60 + vt), u("dayClick", A[t], n, !1, e)
                } else
                    u("dayClick", A[t], n, !0, e)
            }
        }
        function Rt(e, t, n) {
            n && ut.build();
            var r = g(e, t);
            for (var i = 0; i < r.length; i++) {
                var s = r[i];
                Ft(Ut(s.row, s.leftCol, s.row, s.rightCol))
            }
        }
        function Ut(e, t, n, r) {
            var i = ut.rect(e, t, n, r, P);
            return a(i, P)
        }
        function zt(e, t) {
            for (var n = 0; n < st; n++) {
                var r = v(0, n), i = y(S(r), 1), s = new Date(Math.max(r, e)), o = new Date(Math.min(i, t));
                if (s < o) {
                    var u = ut.rect(0, n, 0, n, R), f = Qt(r, s), l = Qt(r, o);
                    u.top = f, u.height = l - f, It(a(u, R))
                }
            }
        }
        function Wt(e) {
            return ft.left(e)
        }
        function Xt(e) {
            return lt.left(e)
        }
        function Vt(e) {
            return ft.right(e)
        }
        function $t(e) {
            return lt.right(e)
        }
        function Jt(e) {
            return o("allDaySlot") && !e.row
        }
        function Kt(e) {
            var t = v(0, e.col), n = e.row;
            return o("allDaySlot") && n--, n >= 0 && w(t, vt + n * nt), t
        }
        function Qt(e, n) {
            e = S(e, !0);
            if (n < w(S(e), vt))
                return 0;
            if (n >= w(S(e), mt))
                return W.height();
            var r = o("slotMinutes"), i = n.getHours() * 60 + n.getMinutes() - vt, s = Math.floor(i / r), u = ct[s];
            return u === t && (u = ct[s] = W.find("tr").eq(s).find("td div")[0].offsetTop), Math.max(0, Math.round(u - 1 + tt * (i % r / r)))
        }
        function Gt(e) {
            return I
        }
        function Yt(e) {
            var t = S(e.start);
            return e.allDay ? t : w(t, o("defaultEventMinutes"))
        }
        function Zt(e, t) {
            return t ? S(e) : w(S(e), o("slotMinutes"))
        }
        function en(e, t, n) {
            n ? o("allDaySlot") && Rt(e, y(S(t), 1), !0) : tn(e, t)
        }
        function tn(t, n) {
            var r = o("selectHelper");
            ut.build();
            if (r) {
                var i = m(t).col;
                if (i >= 0 && i < st) {
                    var s = ut.rect(0, i, 0, i, R), u = Qt(t, t), a = Qt(t, n);
                    if (a > u) {
                        s.top = u, s.height = a - u, s.left += 2, s.width -= 5;
                        if (e.isFunction(r)) {
                            var f = r(t, n);
                            f && (s.position = "absolute", X = e(f).css(s).appendTo(R))
                        } else
                            s.isStart = !0, s.isEnd = !0, X = e(d({title: "",start: t,end: n,className: ["fc-select-helper"],editable: !1}, s)), X.css("opacity", o("dragOpacity"));
                        X && (It(X), R.append(X), B(X, s.width, !0), j(X, s.height, !0))
                    }
                }
            } else
                zt(t, n)
        }
        function nn() {
            f(), X && (X.remove(), X = null)
        }
        function rn(t) {
            if (t.which == 1 && o("selectable")) {
                c(t);
                var n;
                at.start(function(e, t) {
                    nn();
                    if (e && e.col == t.col && !Jt(e)) {
                        var r = Kt(t), i = Kt(e);
                        n = [r, w(S(r), nt), i, w(S(i), nt)].sort($), tn(n[0], n[3])
                    } else
                        n = null
                }, t), e(document).one("mouseup", function(e) {
                    at.stop(), n && (+n[0] == +n[1] && sn(n[0], !1, e), l(n[0], n[3], !1, e))
                })
            }
        }
        function sn(e, t, n) {
            u("dayClick", A[m(e).col], e, t, n)
        }
        function on(e, t, n) {
            at.start(function(e) {
                f();
                if (e)
                    if (Jt(e))
                        Ut(e.row, e.col, e.row, e.col);
                    else {
                        var t = Kt(e), n = w(S(t), o("defaultEventMinutes"));
                        zt(t, n)
                    }
            }, t)
        }
        function un(e, t, n) {
            var r = at.stop();
            f(), r && u("drop", e, Kt(r), Jt(r), t, n)
        }
        var s = this;
        s.renderAgenda = Et, s.setWidth = Ht, s.setHeight = Pt, s.afterRender = jt, s.defaultEventEnd = Yt, s.timePosition = Qt, s.getIsCellAllDay = Jt, s.allDayRow = Gt, s.getCoordinateGrid = function() {
            return ut
        }, s.getHoverListener = function() {
            return at
        }, s.colLeft = Wt, s.colRight = Vt, s.colContentLeft = Xt, s.colContentRight = $t, s.getDaySegmentContainer = function() {
            return H
        }, s.getSlotSegmentContainer = function() {
            return z
        }, s.getMinMinute = function() {
            return vt
        }, s.getMaxMinute = function() {
            return mt
        }, s.getSlotContainer = function() {
            return R
        }, s.getRowCnt = function() {
            return 1
        }, s.getColCnt = function() {
            return st
        }, s.getColWidth = function() {
            return Q
        }, s.getSnapHeight = function() {
            return it
        }, s.getSnapMinutes = function() {
            return nt
        }, s.defaultSelectionEnd = Zt, s.renderDayOverlay = Rt, s.renderSelection = en, s.clearSelection = nn, s.reportDayClick = sn, s.dragStart = on, s.dragStop = un, xt.call(s, n, r, i), At.call(s), Lt.call(s), ht.call(s);
        var o = s.opt, u = s.trigger, a = s.renderOverlay, f = s.clearOverlays, l = s.reportSelection, c = s.unselect, p = s.daySelectionMousedown, d = s.slotSegHtml, v = s.cellToDate, m = s.dateToCell, g = s.rangeToSegments, b = r.formatDate, T, N, C, k, A, O, M, _, D, P, H, F, I, q, R, z, W, X, V, J, K, Q, et, tt, nt, rt, it, st, ot, ut, at, ft, lt, ct = {}, pt, dt, vt, mt, gt, yt, bt, wt;
        Y(n.addClass("fc-agenda")), ut = new Ot(function(t, n) {
            function l(e) {
                return Math.max(a, Math.min(f, e))
            }
            var r, i, s;
            C.each(function(t, o) {
                r = e(o), i = r.offset().left, t && (s[1] = i), s = [i], n[t] = s
            }), s[1] = i + r.outerWidth(), o("allDaySlot") && (r = I, i = r.offset().top, t[0] = [i, i + r.outerHeight()]);
            var u = R.offset().top, a = q.offset().top, f = a + q.outerHeight();
            for (var c = 0; c < ot * rt; c++)
                t.push([l(u + it * c), l(u + it * (c + 1))])
        }), at = new Mt(ut
        ), ft = new Dt(function(e) {
            return O.eq(e)
        }), lt = new Dt(function(e) {
            return M.eq(e)
        })
    }
    function ht() {
        function V(e, t) {
            var n, i = e.length, s = [], o = [];
            for (n = 0; n < i; n++)
                e[n].allDay ? s.push(e[n]) : o.push(e[n]);
            r("allDaySlot") && (R(s, t), f()), Y(J(o), t)
        }
        function $() {
            l().empty(), c().empty()
        }
        function J(t) {
            var n = N(), r = d(), i = p(), s, o = e.map(t, Q), u, a, f, l, c = [];
            for (u = 0; u < n; u++) {
                s = x(0, u), w(s, r), l = K(t, o, s, w(S(s), i - r)), l = pt(l);
                for (a = 0; a < l.length; a++)
                    f = l[a], f.col = u, c.push(f)
            }
            return c
        }
        function K(e, t, n, r) {
            var i = [], s, o = e.length, u, a, f, l, c, h, p;
            for (s = 0; s < o; s++)
                u = e[s], a = u.start, f = t[s], f > n && a < r && (a < n ? (l = S(n), h = !1) : (l = a, h = !0), f > r ? (c = S(r), p = !1) : (c = f, p = !0), i.push({event: u,start: l,end: c,isStart: h,isEnd: p}));
            return i.sort(St)
        }
        function Q(e) {
            return e.end ? S(e.end) : w(S(e.start), r("defaultEventMinutes"))
        }
        function Y(n, s) {
            var o, u = n.length, a, f, l, h, p, d, v, g, y, w, S = "", x, T, N, C, k, L = c(), A = r("isRTL");
            for (o = 0; o < u; o++)
                a = n[o], f = a.event, l = m(a.start, a.start), h = m(a.start, a.end), p = b(a.col), d = E(a.col), v = d - p, d -= v * .025, v = d - p, g = v * (a.forwardCoord - a.backwardCoord), r("slotEventOverlap") && (g = Math.max((g - 10) * 2, g)), A ? (w = d - a.backwardCoord * v, y = w - g) : (y = p + a.backwardCoord * v, w = y + g), y = Math.max(y, p), w = Math.min(w, d), g = w - y, a.top = l, a.left = y, a.outerWidth = g, a.outerHeight = h - l, S += Z(f, a);
            L[0].innerHTML = S, x = L.children();
            for (o = 0; o < u; o++)
                a = n[o], f = a.event, T = e(x[o]), N = i("eventRender", f, f, T), N === !1 ? T.remove() : (N && N !== !0 && (T.remove(), T = e(N).css({position: "absolute",top: a.top,left: a.left}).appendTo(L)), a.element = T, f._id === s ? et(f, T, a) : T[0]._fci = o, O(f, T));
            H(L, n, et);
            for (o = 0; o < u; o++) {
                a = n[o];
                if (T = a.element)
                    a.vsides = U(T, !0), a.hsides = F(T, !0), C = T.find(".fc-event-title"), C.length && (a.contentTop = C[0].offsetTop)
            }
            for (o = 0; o < u; o++) {
                a = n[o];
                if (T = a.element)
                    T[0].style.width = Math.max(0, a.outerWidth - a.hsides) + "px", k = Math.max(0, a.outerHeight - a.vsides), T[0].style.height = k + "px", f = a.event, a.contentTop !== t && k - a.contentTop < 10 && (T.find("div.fc-event-time").text(W(f.start, r("timeFormat")) + " - " + f.title), T.find("div.fc-event-title").remove()), i("eventAfterRender", f, f, T)
            }
        }
        function Z(e, t) {
            var n = "<", i = e.url, u = tt(e, r), a = ["fc-event", "fc-event-vert"];
            return s(e) && a.push("fc-event-draggable"), t.isStart && a.push("fc-event-start"), t.isEnd && a.push("fc-event-end"), a = a.concat(e.className), e.source && (a = a.concat(e.source.className || [])), i ? n += "a href='" + G(e.url) + "'" : n += "div", n += " class='" + a.join(" ") + "'" + " style=" + "'" + "position:absolute;" + "top:" + t.top + "px;" + "left:" + t.left + "px;" + u + "'" + ">" + "<div class='fc-event-inner'>" + "<div class='fc-event-time'>" + G(X(e.start, e.end, r("timeFormat"))) + "</div>" + "<div class='fc-event-title'>" + G(e.title || "") + "</div>" + "</div>" + "<div class='fc-event-bg'></div>", t.isEnd && o(e) && (n += "<div class='ui-resizable-handle ui-resizable-s'>=</div>"), n += "</" + (i ? "a" : "div") + ">", n
        }
        function et(e, t, n) {
            var r = t.find("div.fc-event-time");
            s(e) && rt(e, t, r), n.isEnd && o(e) && it(e, t, r), a(e, t)
        }
        function nt(e, t, n) {
            function b() {
                a || (t.width(o).height("").draggable("option", "grid", null), a = !0)
            }
            var s = n.isStart, o, u, a = !0, f, l = h(), c = C(), p = k(), m = L(), g = d();
            t.draggable({opacity: r("dragOpacity", "month"),revertDuration: r("dragRevertDuration"),start: function(n, h) {
                    i("eventDragStart", t, e, n, h), _(e, t), o = t.width(), l.start(function(n, i) {
                        q();
                        if (n) {
                            u = !1;
                            var o = x(0, i.col), l = x(0, n.col);
                            f = T(l, o), n.row ? s ? a && (t.width(c - 10), j(t, p * Math.round((e.end ? (e.end - e.start) / v : r("defaultEventMinutes")) / m)), t.draggable("option", "grid", [c, 1]), a = !1) : u = !0 : (I(y(S(e.start), f), y(D(e), f)), b()), u = u || a && !f
                        } else
                            b(), u = !0;
                        t.draggable("option", "revert", u)
                    }, n, "drag")
                },stop: function(n, r) {
                    l.stop(), q(), i("eventDragStop", t, e, n, r);
                    if (u)
                        b(), t.css("filter", ""), M(e, t);
                    else {
                        var s = 0;
                        a || (s = Math.round((t.offset().top - A().offset().top) / p) * m + g - (e.start.getHours() * 60 + e.start.getMinutes())), P(this, e, f, s, a, n, r)
                    }
                }})
        }
        function rt(e, t, s) {
            function B() {
                q(), p && (v ? (s.hide(), t.draggable("option", "grid", null), I(y(S(e.start), A), y(D(e), A))) : (j(O), s.css("display", ""), t.draggable("option", "grid", [a, f])))
            }
            function j(t) {
                var n = w(S(e.start), t), i;
                e.end && (i = w(S(e.end), t)), s.text(X(n, i, r("timeFormat")))
            }
            var o = n.getCoordinateGrid(), u = N(), a = C(), f = k(), l = L(), c, h, p, d, v, m, b, E, A, O, H;
            t.draggable({scroll: !1,grid: [a, f],axis: u == 1 ? "y" : !1,opacity: r("dragOpacity"),revertDuration: r("dragRevertDuration"),start: function(n, r) {
                    i("eventDragStart", t, e, n, r), _(e, t), o.build(), c = t.position(), h = o.cell(n.pageX, n.pageY), p = d = !0, v = m = g(h), b = E = 0, A = 0, O = H = 0
                },drag: function(e, n) {
                    var r = o.cell(e.pageX, e.pageY);
                    p = !!r;
                    if (p) {
                        v = g(r), b = Math.round((n.position.left - c.left) / a);
                        if (b != E) {
                            var i = x(0, h.col), s = h.col + b;
                            s = Math.max(0, s), s = Math.min(u - 1, s);
                            var y = x(0, s);
                            A = T(y, i)
                        }
                        v || (O = Math.round((n.position.top - c.top) / f) * l)
                    }
                    if (p != d || v != m || b != E || O != H)
                        B(), d = p, m = v, E = b, H = O;
                    t.draggable("option", "revert", !p)
                },stop: function(n, r) {
                    q(), i("eventDragStop", t, e, n, r), p && (v || A || O) ? P(this, e, A, v ? 0 : O, v, n, r) : (p = !0, v = !1, b = 0, A = 0, O = 0, B(), t.css("filter", ""), t.css(c), M(e, t))
                }})
        }
        function it(e, t, n) {
            var s, o, a = k(), f = L();
            t.resizable({handles: {s: ".ui-resizable-handle"},grid: a,start: function(n, r) {
                    s = o = 0, _(e, t), i("eventResizeStart", this, e, n, r)
                },resize: function(i, l) {
                    s = Math.round((Math.max(a, t.height()) - l.originalSize.height) / a), s != o && (n.text(X(e.start, !s && !e.end ? null : w(u(e), f * s), r("timeFormat"))), o = s)
                },stop: function(n, r) {
                    i("eventResizeStop", this, e, n, r), s ? B(this, e, 0, f * s, n, r) : M(e, t)
                }})
        }
        var n = this;
        n.renderEvents = V, n.clearEvents = $, n.slotSegHtml = Z, Tt.call(n);
        var r = n.opt, i = n.trigger, s = n.isEventDraggable, o = n.isEventResizable, u = n.eventEnd, a = n.eventElementHandlers, f = n.setHeight, l = n.getDaySegmentContainer, c = n.getSlotSegmentContainer, h = n.getHoverListener, p = n.getMaxMinute, d = n.getMinMinute, m = n.timePosition, g = n.getIsCellAllDay, b = n.colContentLeft, E = n.colContentRight, x = n.cellToDate, N = n.getColCnt, C = n.getColWidth, k = n.getSnapHeight, L = n.getSnapMinutes, A = n.getSlotContainer, O = n.reportEventElement, M = n.showEvents, _ = n.hideEvents, P = n.eventDrop, B = n.eventResize, I = n.renderDayOverlay, q = n.clearOverlays, R = n.renderDayEvents, z = n.calendar, W = z.formatDate, X = z.formatDates;
        n.draggableDayEvent = nt
    }
    function pt(e) {
        var t = dt(e), n = t[0], r;
        vt(t);
        if (n) {
            for (r = 0; r < n.length; r++)
                mt(n[r]);
            for (r = 0; r < n.length; r++)
                gt(n[r], 0, 0)
        }
        return yt(t)
    }
    function dt(e) {
        var t = [], n, r, i;
        for (n = 0; n < e.length; n++) {
            r = e[n];
            for (i = 0; i < t.length; i++)
                if (!bt(r, t[i]).length)
                    break;
            (t[i] || (t[i] = [])).push(r)
        }
        return t
    }
    function vt(e) {
        var t, n, r, i, s;
        for (t = 0; t < e.length; t++) {
            n = e[t];
            for (r = 0; r < n.length; r++) {
                i = n[r], i.forwardSegs = [];
                for (s = t + 1; s < e.length; s++)
                    bt(i, e[s], i.forwardSegs)
            }
        }
    }
    function mt(e) {
        var n = e.forwardSegs, r = 0, i, s;
        if (e.forwardPressure === t) {
            for (i = 0; i < n.length; i++)
                s = n[i], mt(s), r = Math.max(r, 1 + s.forwardPressure);
            e.forwardPressure = r
        }
    }
    function gt(e, n, r) {
        var i = e.forwardSegs, s;
        if (e.forwardCoord === t) {
            i.length ? (i.sort(Et), gt(i[0], n + 1, r), e.forwardCoord = i[0].backwardCoord) : e.forwardCoord = 1, e.backwardCoord = e.forwardCoord - (e.forwardCoord - r) / (n + 1);
            for (s = 0; s < i.length; s++)
                gt(i[s], 0, e.forwardCoord)
        }
    }
    function yt(e) {
        var t = [], n, r, i;
        for (n = 0; n < e.length; n++) {
            r = e[n];
            for (i = 0; i < r.length; i++)
                t.push(r[i])
        }
        return t
    }
    function bt(e, t, n) {
        n = n || [];
        for (var r = 0; r < t.length; r++)
            wt(e, t[r]) && n.push(t[r]);
        return n
    }
    function wt(e, t) {
        return e.end > t.start && e.start < t.end
    }
    function Et(e, t) {
        return t.forwardPressure - e.forwardPressure || (e.backwardCoord || 0) - (t.backwardCoord || 0) || St(e, t)
    }
    function St(e, t) {
        return e.start - t.start || t.end - t.start - (e.end - e.start) || (e.event.title || "").localeCompare(t.event.title)
    }
    function xt(n, r, i) {
        function p(t, n) {
            var r = h[t];
            return e.isPlainObject(r) ? Q(r, n || i) : r
        }
        function d(e, t) {
            return r.trigger.apply(r, [e, t || s].concat(Array.prototype.slice.call(arguments, 2), [s]))
        }
        function v(e) {
            var t = e.source || {};
            return rt(e.startEditable, t.startEditable, p("eventStartEditable"), e.editable, t.editable, p("editable")) && !p("disableDragging")
        }
        function m(e) {
            var t = e.source || {};
            return rt(e.durationEditable, t.durationEditable, p("eventDurationEditable"), e.editable, t.editable, p("editable")) && !p("disableResizing")
        }
        function g(e) {
            f = {};
            var t, n = e.length, r;
            for (t = 0; t < n; t++)
                r = e[t], f[r._id] ? f[r._id].push(r) : f[r._id] = [r]
        }
        function b() {
            f = {}, l = {}, c = []
        }
        function E(e) {
            return e.end ? S(e.end) : o(e)
        }
        function x(e, t) {
            c.push({event: e,element: t}), l[e._id] ? l[e._id].push(t) : l[e._id] = [t]
        }
        function N() {
            e.each(c, function(e, t) {
                s.trigger("eventDestroy", t.event, t.event, t.element)
            })
        }
        function C(e, t) {
            t.click(function(n) {
                if (!t.hasClass("ui-draggable-dragging") && !t.hasClass("ui-resizable-resizing"))
                    return d("eventClick", this, e, n)
            }).hover(function(t) {
                d("eventMouseover", this, e, t)
            }, function(t) {
                d("eventMouseout", this, e, t)
            })
        }
        function k(e, t) {
            A(e, t, "show")
        }
        function L(e, t) {
            A(e, t, "hide")
        }
        function A(e, t, n) {
            var r = l[e._id], i, s = r.length;
            for (i = 0; i < s; i++)
                (!t || r[i][0] != t[0]) && r[i][n]()
        }
        function O(e, t, n, r, i, s, o) {
            var u = t.allDay, l = t._id;
            _(f[l], n, r, i), d("eventDrop", e, t, n, r, i, function() {
                _(f[l], -n, -r, u), a(l)
            }, s, o), a(l)
        }
        function M(e, t, n, r, i, s) {
            var o = t._id;
            D(f[o], n, r), d("eventResize", e, t, n, r, function() {
                D(f[o], -n, -r), a(o)
            }, i, s), a(o)
        }
        function _(e, n, r, i) {
            r = r || 0;
            for (var s, o = e.length, a = 0; a < o; a++)
                s = e[a], i !== t && (s.allDay = i), w(y(s.start, n, !0), r), s.end && (s.end = w(y(s.end, n, !0), r)), u(s, h)
        }
        function D(e, t, n) {
            n = n || 0;
            for (var r, i = e.length, s = 0; s < i; s++)
                r = e[s], r.end = w(y(E(r), t, !0), n), u(r, h)
        }
        function q(e) {
            return typeof e == "object" && (e = e.getDay()), H[e]
        }
        function R() {
            return B
        }
        function U(e, t, n) {
            t = t || 1;
            while (H[(e.getDay() + (n ? t : 0) + 7) % 7])
                y(e, t)
        }
        function z() {
            var e = W.apply(null, arguments), t = X(e), n = V(t);
            return n
        }
        function W(e, t) {
            var n = s.getColCnt(), r = I ? -1 : 1, i = I ? n - 1 : 0;
            typeof e == "object" && (t = e.col, e = e.row);
            var o = e * n + (t * r + i);
            return o
        }
        function X(e) {
            var t = s.visStart.getDay();
            return e += j[t], Math.floor(e / B) * 7 + F[(e % B + B) % B] - t
        }
        function V(e) {
            var t = S(s.visStart);
            return y(t, e), t
        }
        function $(e) {
            var t = J(e), n = K(t), r = G(n);
            return r
        }
        function J(e) {
            return T(e, s.visStart)
        }
        function K(e) {
            var t = s.visStart.getDay();
            return e += t, Math.floor(e / 7) * B + j[(e % 7 + 7) % 7] - j[t]
        }
        function G(e) {
            var t = s.getColCnt(), n = I ? -1 : 1, r = I ? t - 1 : 0, i = Math.floor(e / t), o = (e % t + t) % t * n + r;
            return {row: i,col: o}
        }
        function Y(e, t) {
            var n = s.getRowCnt(), r = s.getColCnt(), i = [], o = J(e), u = J(t), a = K(o), f = K(u) - 1;
            for (var l = 0; l < n; l++) {
                var c = l * r, h = c + r - 1, p = Math.max(a, c), d = Math.min(f, h);
                if (p <= d) {
                    var v = G(p), m = G(d), g = [v.col, m.col].sort(), y = X(p) == o, b = X(d) + 1 == u;
                    i.push({row: l,leftCol: g[0],rightCol: g[1],isStart: y,isEnd: b})
                }
            }
            return i
        }
        var s = this;
        s.element = n, s.calendar = r, s.name = i, s.opt = p, s.trigger = d, s.isEventDraggable = v, s.isEventResizable = m, s.setEventData = g, s.clearEventData = b, s.eventEnd = E, s.reportEventElement = x, s.triggerEventDestroy = N, s.eventElementHandlers = C, s.showEvents = k, s.hideEvents = L, s.eventDrop = O, s.eventResize = M;
        var o = s.defaultEventEnd, u = r.normalizeEvent, a = r.reportEventChange, f = {}, l = {}, c = [], h = r.options;
        s.isHiddenDay = q, s.skipHiddenDays = U, s.getCellsPerWeek = R, s.dateToCell = $, s.dateToDayOffset = J, s.dayOffsetToCellOffset = K, s.cellOffsetToCell = G, s.cellToDate = z, s.cellToCellOffset = W, s.cellOffsetToDayOffset = X, s.dayOffsetToDate = V, s.rangeToSegments = Y;
        var P = p("hiddenDays") || [], H = [], B, j = [], F = [], I = p("isRTL");
        (function() {
            p("weekends") === !1 && P.push(0, 6);
            for (var t = 0, n = 0; t < 7; t++)
                j[t] = n, H[t] = e.inArray(t, P) != -1, H[t] || (F[n] = t, n++);
            B = n;
            if (!B)
                throw "invalid hiddenDays"
        })()
    }
    function Tt() {
        function q(e, t) {
            var n = U(e, !1, !0);
            Ct(n, function(e, t) {
                u(e.event, t)
            }), st(n, t), Ct(n, function(e, t) {
                r("eventAfterRender", e.event, e.event, t)
            })
        }
        function R(e, t, n) {
            var r = U([e], !0, !1), i = [];
            return Ct(r, function(e, r) {
                e.row === t && r.css("top", n), i.push(r[0])
            }), i
        }
        function U(t, n, r) {
            var i = N(), s = n ? e("<div/>") : i, o = z(t), u, a;
            return X(o), u = V(o), s[0].innerHTML = u, a = s.children(), n && i.append(a), K(o, a), Ct(o, function(e, t) {
                e.hsides = F(t, !0)
            }), Ct(o, function(e, t) {
                t.width(Math.max(0, e.outerWidth - e.hsides))
            }), Ct(o, function(e, t) {
                e.outerHeight = t.outerHeight(!0)
            }), Q(o, r), o
        }
        function z(e) {
            var t = [];
            for (var n = 0; n < e.length; n++) {
                var r = W(e[n]);
                t.push.apply(t, r)
            }
            return t
        }
        function W(e) {
            var t = e.start, n = D(e), r = M(t, n);
            for (var i = 0; i < r.length; i++)
                r[i].event = e;
            return r
        }
        function X(e) {
            var t = n("isRTL");
            for (var r = 0; r < e.length; r++) {
                var i = e[r], s = (t ? i.isEnd : i.isStart) ? w : g, o = (t ? i.isStart : i.isEnd) ? E : b, u = s(i.leftCol), a = o(i.rightCol);
                i.left = u, i.outerWidth = a - u
            }
        }
        function V(e) {
            var t = "";
            for (var n = 0; n < e.length; n++)
                t += $(e[n]);
            return t
        }
        function $(e) {
            var t = "", r = n("isRTL"), o = e.event, u = o.url, a = ["fc-event", "fc-event-hori"];
            i(o) && a.push("fc-event-draggable"), e.isStart && a.push("fc-event-start"), e.isEnd && a.push("fc-event-end"), a = a.concat(o.className), o.source && (a = a.concat(o.source.className || []));
            var f = tt(o, n);
            return u ? t += "<a href='" + G(u) + "'" : t += "<div", t += " class='" + a.join(" ") + "'" + " style=" + "'" + "position:absolute;" + "left:" + e.left + "px;" + f + "'" + ">" + "<div class='fc-event-inner'>", !o.allDay && e.isStart && (t += "<span class='fc-event-time'>" + G(C(o.start, o.end, n("timeFormat"))) + "</span>"), t += "<span class='fc-event-title'>" + G(o.title || "") + "</span>" + "</div>", e.isEnd && s(o) && (t += "<div class='ui-resizable-handle ui-resizable-" + (r ? "w" : "e") + "'>" + "&nbsp;&nbsp;&nbsp;" + "</div>"), t += "</" + (u ? "a" : "div") + ">", t
        }
        function K(t, n) {
            for (var i = 0; i < t.length; i++) {
                var s = t[i], o = s.event, u = n.eq(i), a = r("eventRender", o, o, u);
                a === !1 ? u.remove() : (a && a !== !0 && (a = e(a).css({position: "absolute",left: s.left}), u.replaceWith(a), u = a), s.element = u)
            }
        }
        function Q(e, t) {
            var n = Z(e), r = it(), i = [];
            if (t)
                for (var s = 0; s < r.length; s++)
                    r[s].height(n[s]);
            for (var s = 0; s < r.length; s++)
                i.push(r[s].position().top);
            Ct(e, function(e, t) {
                t.css("top", i[e.row] + e.top)
            })
        }
        function Z(e) {
            var t = p(), n = d(), r = [], i = et(e);
            for (var s = 0; s < t; s++) {
                var o = i[s], u = [];
                for (var a = 0; a < n; a++)
                    u.push(0);
                for (var f = 0; f < o.length; f++) {
                    var l = o[f];
                    l.top = J(u.slice(l.leftCol, l.rightCol + 1));
                    for (var a = l.leftCol; a <= l.rightCol; a++)
                        u[a] = l.top + l.outerHeight
                }
                r.push(J(u))
            }
            return r
        }
        function et(e) {
            var t = p(), n = [], r, i, s;
            for (r = 0; r < e.length; r++)
                i = e[r], s = i.row, i.element && (n[s] ? n[s].push(i) : n[s] = [i]);
            for (s = 0; s < t; s++)
                n[s] = nt(n[s] || []);
            return n
        }
        function nt(e) {
            var t = [], n = rt(e);
            for (var r = 0; r < n.length; r++)
                t.push.apply(t, n[r]);
            return t
        }
        function rt(e) {
            e.sort(kt);
            var t = [];
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                for (var i = 0; i < t.length; i++)
                    if (!Nt(r, t[i]))
                        break;
                t[i] ? t[i].push(r) : t[i] = [r]
            }
            return t
        }
        function it() {
            var e, t = p(), n = [];
            for (e = 0; e < t; e++)
                n[e] = m(e).find("div.fc-day-content > div");
            return n
        }
        function st(e, t) {
            var n = N();
            Ct(e, function(e, n, r) {
                var i = e.event;
                i._id === t ? ot(i, n, e) : n[0]._fci = r
            }), H(n, e, ot)
        }
        function ot(e, n, r) {
            i(e) && t.draggableDayEvent(e, n, r), r.isEnd && s(e) && t.resizableDayEvent(e, n, r), a(e, n)
        }
        function ut(e, t) {
            var i = O(), s;
            t.draggable({delay: 50,opacity: n("dragOpacity"),revertDuration: n("dragRevertDuration"),start: function(n, o) {
                    r("eventDragStart", t, e, n, o), l(e, t), i.start(function(n, r, i, o) {
                        t.draggable("option", "revert", !n || !i && !o), L();
                        if (n) {
                            var u = _(r), a = _(n);
                            s = T(a, u), k(y(S(e.start), s), y(D(e), s))
                        } else
                            s = 0
                    }, n, "drag")
                },stop: function(n, o) {
                    i.stop(), L(), r("eventDragStop", t, e, n, o), s ? c(this, e, s, 0, e.allDay, n, o) : (t.css("filter", ""), f(e, t))
                }})
        }
        function at(t, i, s) {
            var u = n("isRTL"), a = u ? "w" : "e", c = i.find(".ui-resizable-" + a), v = !1;
            Y(i), i.mousedown(function(e) {
                e.preventDefault()
            }).click(function(e) {
                v && (e.preventDefault(), e.stopImmediatePropagation())
            }), c.mousedown(function(n) {
                function x(n) {
                    r("eventResizeStop", this, t, n), e("body").css("cursor", ""), u.stop(), L(), b && h(this, t, b, 0, n), setTimeout(function() {
                        v = !1
                    }, 0)
                }
                if (n.which != 1)
                    return;
                v = !0;
                var u = O(), c = p(), m = d(), g = i.css("top"), b, w, E = e.extend({}, t), S = I(j(t.start));
                A(), e("body").css("cursor", a + "-resize").one("mouseup", x), r("eventResizeStart", this, t, n), u.start(function(n, r) {
                    if (n) {
                        var i = P(r), u = P(n);
                        u = Math.max(u, S), b = B(u) - B(i);
                        if (b) {
                            E.end = y(o(t), b, !0);
                            var c = w;
                            w = R(E, s.row, g), w = e(w), w.find("*").css("cursor", a + "-resize"), c && c.remove(), l(t)
                        } else
                            w && (f(t), w.remove(), w = null);
                        L(), k(t.start, y(D(t), b))
                    }
                }, n)
            })
        }
        var t = this;
        t.renderDayEvents = q, t.draggableDayEvent = ut, t.resizableDayEvent = at;
        var n = t.opt, r = t.trigger, i = t.isEventDraggable, s = t.isEventResizable, o = t.eventEnd, u = t.reportEventElement, a = t.eventElementHandlers, f = t.showEvents, l = t.hideEvents, c = t.eventDrop, h = t.eventResize, p = t.getRowCnt, d = t.getColCnt, v = t.getColWidth, m = t.allDayRow, g = t.colLeft, b = t.colRight, w = t.colContentLeft, E = t.colContentRight, x = t.dateToCell, N = t.getDaySegmentContainer, C = t.calendar.formatDates, k = t.renderDayOverlay, L = t.clearOverlays, A = t.clearSelection, O = t.getHoverListener, M = t.rangeToSegments, _ = t.cellToDate, P = t.cellToCellOffset, B = t.cellOffsetToDayOffset, j = t.dateToDayOffset, I = t.dayOffsetToCellOffset
    }
    function Nt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            if (r.leftCol <= e.rightCol && r.rightCol >= e.leftCol)
                return !0
        }
        return !1
    }
    function Ct(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n], i = r.element;
            i && t(r, i, n)
        }
    }
    function kt(e, t) {
        return t.rightCol - t.leftCol - (e.rightCol - e.leftCol) || t.event.allDay - e.event.allDay || e.event.start - t.event.start || (e.event.title || "").localeCompare(t.event.title)
    }
    function Lt() {
        function a(e, t, n) {
            f(), t || (t = i(e, n)), s(e, t, n), l(e, t, n)
        }
        function f(e) {
            u && (u = !1, o(), r("unselect", null, e))
        }
        function l(e, t, n, i) {
            u = !0, r("select", null, e, t, n, i)
        }
        function c(r) {
            var i = t.cellToDate, u = t.getIsCellAllDay, a = t.getHoverListener(), c = t.reportDayClick;
            if (r.which == 1 && n("selectable")) {
                f(r);
                var h = this, p;
                a.start(function(e, t) {
                    o(), e && u(e) ? (p = [i(t), i(e)].sort($), s(p[0], p[1], !0)) : p = null
                }, r), e(document).one("mouseup", function(e) {
                    a.stop(), p && (+p[0] == +p[1] && c(p[0], !0, e), l(p[0], p[1], !0, e))
                })
            }
        }
        var t = this;
        t.select = a, t.unselect = f, t.reportSelection = l, t.daySelectionMousedown = c;
        var n = t.opt, r = t.trigger, i = t.defaultSelectionEnd, s = t.renderSelection, o = t.clearSelection, u = !1;
        n("selectable") && n("unselectAuto") && e(document).mousedown(function(t) {
            var r = n("unselectCancel");
            if (r && e(t.target).parents(r).length)
                return;
            f(t)
        })
    }
    function At() {
        function i(t, i) {
            var s = r.shift();
            return s || (s = e("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>")), s[0].parentNode != i[0] && s.appendTo(i), n.push(s.css(t).show()), s
        }
        function s() {
            var e;
            while (e = n.shift())
                r.push(e.hide().unbind())
        }
        var t = this;
        t.renderOverlay = i, t.clearOverlays = s;
        var n = [], r = []
    }
    function Ot(e) {
        var t = this, n, r;
        t.build = function() {
            n = [], r = [], e(n, r)
        }, t.cell = function(e, t) {
            var i = n.length, s = r.length, o, u = -1, a = -1;
            for (o = 0; o < i; o++)
                if (t >= n[o][0] && t < n[o][1]) {
                    u = o;
                    break
                }
            for (o = 0; o < s; o++)
                if (e >= r[o][0] && e < r[o][1]) {
                    a = o;
                    break
                }
            return u >= 0 && a >= 0 ? {row: u,col: a} : null
        }, t.rect = function(e, t, i, s, o) {
            var u = o.offset();
            return {top: n[e][0] - u.top,left: r[t][0] - u.left,width: r[s][1] - r[t][0],height: n[i][1] - n[e][0]}
        }
    }
    function Mt(t) {
        function u(e) {
            _t(e);
            var n = t.cell(e.pageX, e.pageY);
            if (!n != !o || n && (n.row != o.row || n.col != o.col))
                n ? (s || (s = n), i(n, s, n.row - s.row, n.col - s.col)) : i(n, s), o = n
        }
        var n = this, r, i, s, o;
        n.start = function(n, a, f) {
            i = n, s = o = null, t.build(), u(a), r = f || "mousemove", e(document).bind(r, u)
        }, n.stop = function() {
            return e(document).unbind(r, u), o
        }
    }
    function _t(e) {
        e.pageX === t && (e.pageX = e.originalEvent.pageX, e.pageY = e.originalEvent.pageY)
    }
    function Dt(e) {
        function o(t) {
            return r[t] = r[t] || e(t)
        }
        var n = this, r = {}, i = {}, s = {};
        n.left = function(e) {
            return i[e] = i[e] === t ? o(e).position().left : i[e]
        }, n.right = function(e) {
            return s[e] = s[e] === t ? n.left(e) + o(e).width() : s[e]
        }, n.clear = function() {
            r = {}, i = {}, s = {}
        }
    }
    var n = {defaultView: "month",aspectRatio: 1.35,header: {left: "title",center: "",right: "today prev,next"},weekends: !0,weekNumbers: !1,weekNumberCalculation: "iso",weekNumberTitle: "W",allDayDefault: !0,ignoreTimezone: !0,lazyFetching: !0,startParam: "start",endParam: "end",titleFormat: {month: "MMMM yyyy",week: "MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",day: "dddd, MMM d, yyyy"},columnFormat: {month: "ddd",week: "ddd M/d",day: "dddd M/d"},timeFormat: {"": "h(:mm)t"},isRTL: !1,firstDay: 0,monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],buttonText: {prev: "<span class='fc-text-arrow'>&lsaquo;</span>",next: "<span class='fc-text-arrow'>&rsaquo;</span>",prevYear: "<span class='fc-text-arrow'>&laquo;</span>",nextYear: "<span class='fc-text-arrow'>&raquo;</span>",today: "today",month: "month",week: "week",day: "day"},theme: !1,buttonIcons: {prev: "circle-triangle-w",next: "circle-triangle-e"},unselectAuto: !0,dropAccept: "*",handleWindowResize: !0}, r = {header: {left: "next,prev today",center: "",right: "title"},buttonText: {prev: "<span class='fc-text-arrow'>&rsaquo;</span>",next: "<span class='fc-text-arrow'>&lsaquo;</span>",prevYear: "<span class='fc-text-arrow'>&raquo;</span>",nextYear: "<span class='fc-text-arrow'>&laquo;</span>"},buttonIcons: {prev: "circle-triangle-e",next: "circle-triangle-w"}}, i = e.fullCalendar = {version: "1.6.4"}, s = i.views = {};
    e.fn.fullCalendar = function(i) {
        if (typeof i == "string") {
            var s = Array.prototype.slice.call(arguments, 1), o;
            return this.each(function() {
                var n = e.data(this, "fullCalendar");
                if (n && e.isFunction(n[i])) {
                    var r = n[i].apply(n, s);
                    o === t && (o = r), i == "destroy" && e.removeData(this, "fullCalendar")
                }
            }), o !== t ? o : this
        }
        i = i || {};
        var a = i.eventSources || [];
        return delete i.eventSources, i.events && (a.push(i.events), delete i.events), i = e.extend(!0, {}, n, i.isRTL || i.isRTL === t && n.isRTL ? r : {}, i), this.each(function(t, n) {
            var r = e(n), s = new u(r, i, a);
            r.data("fullCalendar", s), s.render()
        }), this
    }, i.sourceNormalizers = [], i.sourceFetchers = [];
    var f = {dataType: "json",cache: !1}, l = 1;
    i.addDays = y, i.cloneDate = S, i.parseDate = C, i.parseISO8601 = k, i.parseTime = L, i.formatDate = A, i.formatDates = O;
    var h = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"], p = 864e5, d = 36e5, v = 6e4, M = {s: function(e) {
            return e.getSeconds()
        },ss: function(e) {
            return K(e.getSeconds())
        },m: function(e) {
            return e.getMinutes()
        },mm: function(e) {
            return K(e.getMinutes())
        },h: function(e) {
            return e.getHours() % 12 || 12
        },hh: function(e) {
            return K(e.getHours() % 12 || 12)
        },H: function(e) {
            return e.getHours()
        },HH: function(e) {
            return K(e.getHours())
        },d: function(e) {
            return e.getDate()
        },dd: function(e) {
            return K(e.getDate())
        },ddd: function(e, t) {
            return t.dayNamesShort[e.getDay()]
        },dddd: function(e, t) {
            return t.dayNames[e.getDay()]
        },M: function(e) {
            return e.getMonth() + 1
        },MM: function(e) {
            return K(e.getMonth() + 1)
        },MMM: function(e, t) {
            return t.monthNamesShort[e.getMonth()]
        },MMMM: function(e, t) {
            return t.monthNames[e.getMonth()]
        },yy: function(e) {
            return (e.getFullYear() + "").substring(2)
        },yyyy: function(e) {
            return e.getFullYear()
        },t: function(e) {
            return e.getHours() < 12 ? "a" : "p"
        },tt: function(e) {
            return e.getHours() < 12 ? "am" : "pm"
        },T: function(e) {
            return e.getHours() < 12 ? "A" : "P"
        },TT: function(e) {
            return e.getHours() < 12 ? "AM" : "PM"
        },u: function(e) {
            return A(e, "yyyy-MM-dd'T'HH:mm:ss'Z'")
        },S: function(e) {
            var t = e.getDate();
            return t > 10 && t < 20 ? "th" : ["st", "nd", "rd"][t % 10 - 1] || "th"
        },w: function(e, t) {
            return t.weekNumberCalculation(e)
        },W: function(e) {
            return _(e)
        }};
    i.dateFormatters = M, i.applyAll = nt, s.month = it, s.basicWeek = st, s.basicDay = ot, o({weekMode: "fixed"}), s.agendaWeek = ft, s.agendaDay = lt, o({allDaySlot: !0,allDayText: "all-day",firstHour: 6,slotMinutes: 30,defaultEventMinutes: 120,axisFormat: "h(:mm)tt",timeFormat: {agenda: "h:mm{ - h:mm}"},dragOpacity: {agenda: .5},minTime: 0,maxTime: 24,slotEventOverlap: !0})
}(jQuery), function(e) {
    function U(e, t) {
        return function(n) {
            return K(e.call(this, n), t)
        }
    }
    function z(e, t) {
        return function(n) {
            return this.lang().ordinal(e.call(this, n), t)
        }
    }
    function W() {
    }
    function X(e) {
        ut(e), $(this, e)
    }
    function V(e) {
        var t = tt(e), n = t.year || 0, r = t.month || 0, i = t.week || 0, s = t.day || 0, o = t.hour || 0, u = t.minute || 0, a = t.second || 0, f = t.millisecond || 0;
        this._input = e, this._milliseconds = +f + a * 1e3 + u * 6e4 + o * 36e5, this._days = +s + i * 7, this._months = +r + n * 12, this._data = {}, this._bubble()
    }
    function $(e, t) {
        for (var n in t)
            t.hasOwnProperty(n) && (e[n] = t[n]);
        return t.hasOwnProperty("toString") && (e.toString = t.toString), t.hasOwnProperty("valueOf") && (e.valueOf = t.valueOf), e
    }
    function J(e) {
        return e < 0 ? Math.ceil(e) : Math.floor(e)
    }
    function K(e, t) {
        var n = e + "";
        while (n.length < t)
            n = "0" + n;
        return n
    }
    function Q(e, n, r, i) {
        var s = n._milliseconds, o = n._days, u = n._months, a, f;
        s && e._d.setTime(+e._d + s * r);
        if (o || u)
            a = e.minute(), f = e.hour();
        o && e.date(e.date() + o * r), u && e.month(e.month() + u * r), s && !i && t.updateOffset(e);
        if (o || u)
            e.minute(a), e.hour(f)
    }
    function G(e) {
        return Object.prototype.toString.call(e) === "[object Array]"
    }
    function Y(e) {
        return Object.prototype.toString.call(e) === "[object Date]"
    }
    function Z(e, t, n) {
        var r = Math.min(e.length, t.length), i = Math.abs(e.length - t.length), s = 0, o;
        for (o = 0; o < r; o++)
            (n && e[o] !== t[o] || !n && rt(e[o]) !== rt(t[o])) && s++;
        return s + i
    }
    function et(e) {
        if (e) {
            var t = e.toLowerCase().replace(/(.)s$/, "$1");
            e = H[e] || B[t] || t
        }
        return e
    }
    function tt(e) {
        var t = {}, n, r, i;
        for (r in e)
            e.hasOwnProperty(r) && (n = et(r), n && (t[n] = e[r]));
        return t
    }
    function nt(n) {
        var r, i;
        if (n.indexOf("week") === 0)
            r = 7, i = "day";
        else {
            if (n.indexOf("month") !== 0)
                return;
            r = 12, i = "month"
        }
        t[n] = function(s, o) {
            var u, a, f = t.fn._lang[n], l = [];
            typeof s == "number" && (o = s, s = e), a = function(e) {
                var n = t().utc().set(i, e);
                return f.call(t.fn._lang, n, s || "")
            };
            if (o != null)
                return a(o);
            for (u = 0; u < r; u++)
                l.push(a(u));
            return l
        }
    }
    function rt(e) {
        var t = +e, n = 0;
        return t !== 0 && isFinite(t) && (t >= 0 ? n = Math.floor(t) : n = Math.ceil(t)), n
    }
    function it(e, t) {
        return (new Date(Date.UTC(e, t + 1, 0))).getUTCDate()
    }
    function st(e) {
        return ot(e) ? 366 : 365
    }
    function ot(e) {
        return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
    }
    function ut(e) {
        var t;
        e._a && e._pf.overflow === -2 && (t = e._a[o] < 0 || e._a[o] > 11 ? o : e._a[u] < 1 || e._a[u] > it(e._a[s], e._a[o]) ? u : e._a[a] < 0 || e._a[a] > 23 ? a : e._a[f] < 0 || e._a[f] > 59 ? f : e._a[l] < 0 || e._a[l] > 59 ? l : e._a[c] < 0 || e._a[c] > 999 ? c : -1, e._pf._overflowDayOfYear && (t < s || t > u) && (t = u), e._pf.overflow = t)
    }
    function at(e) {
        e._pf = {empty: !1,unusedTokens: [],unusedInput: [],overflow: -2,charsLeftOver: 0,nullInput: !1,invalidMonth: null,invalidFormat: !1,userInvalidated: !1}
    }
    function ft(e) {
        return e._isValid == null && (e._isValid = !isNaN(e._d.getTime()) && e._pf.overflow < 0 && !e._pf.empty && !e._pf.invalidMonth && !e._pf.nullInput && !e._pf.invalidFormat && !e._pf.userInvalidated, e._strict && (e._isValid = e._isValid && e._pf.charsLeftOver === 0 && e._pf.unusedTokens.length === 0)), e._isValid
    }
    function lt(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }
    function ct(e, t) {
        return t.abbr = e, h[e] || (h[e] = new W), h[e].set(t), h[e]
    }
    function ht(e) {
        delete h[e]
    }
    function pt(e) {
        var n = 0, r, i, s, o, u = function(e) {
            if (!h[e] && p)
                try {
                    require("./lang/" + e)
                } catch (t) {
                }
            return h[e]
        };
        if (!e)
            return t.fn._lang;
        if (!G(e)) {
            i = u(e);
            if (i)
                return i;
            e = [e]
        }
        while (n < e.length) {
            o = lt(e[n]).split("-"), r = o.length, s = lt(e[n + 1]), s = s ? s.split("-") : null;
            while (r > 0) {
                i = u(o.slice(0, r).join("-"));
                if (i)
                    return i;
                if (s && s.length >= r && Z(o, s, !0) >= r - 1)
                    break;
                r--
            }
            n++
        }
        return t.fn._lang
    }
    function dt(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }
    function vt(e) {
        var t = e.match(g), n, r;
        for (n = 0, r = t.length; n < r; n++)
            q[t[n]] ? t[n] = q[t[n]] : t[n] = dt(t[n]);
        return function(i) {
            var s = "";
            for (n = 0; n < r; n++)
                s += t[n] instanceof Function ? t[n].call(i, e) : t[n];
            return s
        }
    }
    function mt(e, t) {
        return e.isValid() ? (t = gt(t, e.lang()), j[t] || (j[t] = vt(t)), j[t](e)) : e.lang().invalidDate()
    }
    function gt(e, t) {
        function r(e) {
            return t.longDateFormat(e) || e
        }
        var n = 5;
        y.lastIndex = 0;
        while (n >= 0 && y.test(e))
            e = e.replace(y, r), y.lastIndex = 0, n -= 1;
        return e
    }
    function yt(e, t) {
        var n;
        switch (e) {
            case "DDDD":
                return E;
            case "YYYY":
            case "GGGG":
            case "gggg":
                return S;
            case "YYYYY":
            case "GGGGG":
            case "ggggg":
                return x;
            case "S":
            case "SS":
            case "SSS":
            case "DDD":
                return w;
            case "MMM":
            case "MMMM":
            case "dd":
            case "ddd":
            case "dddd":
                return T;
            case "a":
            case "A":
                return pt(t._l)._meridiemParse;
            case "X":
                return k;
            case "Z":
            case "ZZ":
                return N;
            case "T":
                return C;
            case "MM":
            case "DD":
            case "YY":
            case "GG":
            case "gg":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
            case "M":
            case "D":
            case "d":
            case "H":
            case "h":
            case "m":
            case "s":
            case "w":
            case "ww":
            case "W":
            case "WW":
            case "e":
            case "E":
                return b;
            default:
                return n = new RegExp(Ct(Nt(e.replace("\\", "")), "i")), n
        }
    }
    function bt(e) {
        var t = (N.exec(e) || [])[0], n = (t + "").match(_) || ["-", 0, 0], r = +(n[1] * 60) + rt(n[2]);
        return n[0] === "+" ? -r : r
    }
    function wt(e, t, n) {
        var r, i = n._a;
        switch (e) {
            case "M":
            case "MM":
                t != null && (i[o] = rt(t) - 1);
                break;
            case "MMM":
            case "MMMM":
                r = pt(n._l).monthsParse(t), r != null ? i[o] = r : n._pf.invalidMonth = t;
                break;
            case "D":
            case "DD":
                t != null && (i[u] = rt(t));
                break;
            case "DDD":
            case "DDDD":
                t != null && (n._dayOfYear = rt(t));
                break;
            case "YY":
                i[s] = rt(t) + (rt(t) > 68 ? 1900 : 2e3);
                break;
            case "YYYY":
            case "YYYYY":
                i[s] = rt(t);
                break;
            case "a":
            case "A":
                n._isPm = pt(n._l).isPM(t);
                break;
            case "H":
            case "HH":
            case "h":
            case "hh":
                i[a] = rt(t);
                break;
            case "m":
            case "mm":
                i[f] = rt(t);
                break;
            case "s":
            case "ss":
                i[l] = rt(t);
                break;
            case "S":
            case "SS":
            case "SSS":
                i[c] = rt(("0." + t) * 1e3);
                break;
            case "X":
                n._d = new Date(parseFloat(t) * 1e3);
                break;
            case "Z":
            case "ZZ":
                n._useUTC = !0, n._tzm = bt(t);
                break;
            case "w":
            case "ww":
            case "W":
            case "WW":
            case "d":
            case "dd":
            case "ddd":
            case "dddd":
            case "e":
            case "E":
                e = e.substr(0, 1);
            case "gg":
            case "gggg":
            case "GG":
            case "GGGG":
            case "GGGGG":
                e = e.substr(0, 2), t && (n._w = n._w || {}, n._w[e] = t)
        }
    }
    function Et(e) {
        var n, r, i = [], l, c, h, p, d, v, m, g;
        if (e._d)
            return;
        l = xt(e), e._w && e._a[u] == null && e._a[o] == null && (h = function(n) {
            return n ? n.length < 3 ? parseInt(n, 10) > 68 ? "19" + n : "20" + n : n : e._a[s] == null ? t().weekYear() : e._a[s]
        }, p = e._w, p.GG != null || p.W != null || p.E != null ? d = Bt(h(p.GG), p.W || 1, p.E, 4, 1) : (v = pt(e._l), m = p.d != null ? _t(p.d, v) : p.e != null ? parseInt(p.e, 10) + v._week.dow : 0, g = parseInt(p.w, 10) || 1, p.d != null && m < v._week.dow && g++, d = Bt(h(p.gg), g, m, v._week.doy, v._week.dow)), e._a[s] = d.year, e._dayOfYear = d.dayOfYear), e._dayOfYear && (c = e._a[s] == null ? l[s] : e._a[s], e._dayOfYear > st(c) && (e._pf._overflowDayOfYear = !0), r = Mt(c, 0, e._dayOfYear), e._a[o] = r.getUTCMonth(), e._a[u] = r.getUTCDate());
        for (n = 0; n < 3 && e._a[n] == null; ++n)
            e._a[n] = i[n] = l[n];
        for (; n < 7; n++)
            e._a[n] = i[n] = e._a[n] == null ? n === 2 ? 1 : 0 : e._a[n];
        i[a] += rt((e._tzm || 0) / 60), i[f] += rt((e._tzm || 0) % 60), e._d = (e._useUTC ? Mt : Ot).apply(null, i)
    }
    function St(e) {
        var t;
        if (e._d)
            return;
        t = tt(e._i), e._a = [t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond], Et(e)
    }
    function xt(e) {
        var t = new Date;
        return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
    }
    function Tt(e) {
        e._a = [], e._pf.empty = !0;
        var t = pt(e._l), n = "" + e._i, r, i, s, o, u, f = n.length, l = 0;
        s = gt(e._f, t).match(g) || [];
        for (r = 0; r < s.length; r++)
            o = s[r], i = (yt(o, e).exec(n) || [])[0], i && (u = n.substr(0, n.indexOf(i)), u.length > 0 && e._pf.unusedInput.push(u), n = n.slice(n.indexOf(i) + i.length), l += i.length), q[o] ? (i ? e._pf.empty = !1 : e._pf.unusedTokens.push(o), wt(o, i, e)) : e._strict && !i && e._pf.unusedTokens.push(o);
        e._pf.charsLeftOver = f - l, n.length > 0 && e._pf.unusedInput.push(n), e._isPm && e._a[a] < 12 && (e._a[a] += 12), e._isPm === !1 && e._a[a] === 12 && (e._a[a] = 0), Et(e), ut(e)
    }
    function Nt(e) {
        return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, i) {
            return t || n || r || i
        })
    }
    function Ct(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function kt(e) {
        var t, n, r, i, s;
        if (e._f.length === 0) {
            e._pf.invalidFormat = !0, e._d = new Date(NaN);
            return
        }
        for (i = 0; i < e._f.length; i++) {
            s = 0, t = $({}, e), at(t), t._f = e._f[i], Tt(t);
            if (!ft(t))
                continue;
            s += t._pf.charsLeftOver, s += t._pf.unusedTokens.length * 10, t._pf.score = s;
            if (r == null || s < r)
                r = s, n = t
        }
        $(e, n || t)
    }
    function Lt(e) {
        var t, n = e._i, r = L.exec(n);
        if (r) {
            for (t = 4; t > 0; t--)
                if (r[t]) {
                    e._f = O[t - 1] + (r[6] || " ");
                    break
                }
            for (t = 0; t < 4; t++)
                if (M[t][1].exec(n)) {
                    e._f += M[t][0];
                    break
                }
            N.exec(n) && (e._f += " Z"), Tt(e)
        } else
            e._d = new Date(n)
    }
    function At(t) {
        var n = t._i, r = d.exec(n);
        n === e ? t._d = new Date : r ? t._d = new Date(+r[1]) : typeof n == "string" ? Lt(t) : G(n) ? (t._a = n.slice(0), Et(t)) : Y(n) ? t._d = new Date(+n) : typeof n == "object" ? St(t) : t._d = new Date(n)
    }
    function Ot(e, t, n, r, i, s, o) {
        var u = new Date(e, t, n, r, i, s, o);
        return e < 1970 && u.setFullYear(e), u
    }
    function Mt(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return e < 1970 && t.setUTCFullYear(e), t
    }
    function _t(e, t) {
        if (typeof e == "string")
            if (!isNaN(e))
                e = parseInt(e, 10);
            else {
                e = t.weekdaysParse(e);
                if (typeof e != "number")
                    return null
            }
        return e
    }
    function Dt(e, t, n, r, i) {
        return i.relativeTime(t || 1, !!n, e, r)
    }
    function Pt(e, t, n) {
        var i = r(Math.abs(e) / 1e3), s = r(i / 60), o = r(s / 60), u = r(o / 24), a = r(u / 365), f = i < 45 && ["s", i] || s === 1 && ["m"] || s < 45 && ["mm", s] || o === 1 && ["h"] || o < 22 && ["hh", o] || u === 1 && ["d"] || u <= 25 && ["dd", u] || u <= 45 && ["M"] || u < 345 && ["MM", r(u / 30)] || a === 1 && ["y"] || ["yy", a];
        return f[2] = t, f[3] = e > 0, f[4] = n, Dt.apply({}, f)
    }
    function Ht(e, n, r) {
        var i = r - n, s = r - e.day(), o;
        return s > i && (s -= 7), s < i - 7 && (s += 7), o = t(e).add("d", s), {week: Math.ceil(o.dayOfYear() / 7),year: o.year()}
    }
    function Bt(e, t, n, r, i) {
        var s = (new Date(Date.UTC(e, 0))).getUTCDay(), o, u;
        return n = n != null ? n : i, o = i - s + (s > r ? 7 : 0), u = 7 * (t - 1) + (n - i) + o + 1, {year: u > 0 ? e : e - 1,dayOfYear: u > 0 ? u : st(e - 1) + u}
    }
    function jt(e) {
        var n = e._i, r = e._f;
        return typeof e._pf == "undefined" && at(e), n === null ? t.invalid({nullInput: !0}) : (typeof n == "string" && (e._i = n = pt().preparse(n)), t.isMoment(n) ? (e = $({}, n), e._d = new Date(+n._d)) : r ? G(r) ? kt(e) : Tt(e) : At(e), new X(e))
    }
    function Ft(e, n) {
        t.fn[e] = t.fn[e + "s"] = function(e) {
            var r = this._isUTC ? "UTC" : "";
            return e != null ? (this._d["set" + r + n](e), t.updateOffset(this), this) : this._d["get" + r + n]()
        }
    }
    function It(e) {
        t.duration.fn[e] = function() {
            return this._data[e]
        }
    }
    function qt(e, n) {
        t.duration.fn["as" + e] = function() {
            return +this / n
        }
    }
    function Rt() {
        typeof ender == "undefined" && (this.moment = t)
    }
    var t, n = "2.3.1", r = Math.round, i, s = 0, o = 1, u = 2, a = 3, f = 4, l = 5, c = 6, h = {}, p = typeof module != "undefined" && module.exports, d = /^\/?Date\((\-?\d+)/i, v = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, m = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, g = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g, y = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, b = /\d\d?/, w = /\d{1,3}/, E = /\d{3}/, S = /\d{1,4}/, x = /[+\-]?\d{1,6}/, T = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, N = /Z|[\+\-]\d\d:?\d\d/i, C = /T/i, k = /[\+\-]?\d+(\.\d{1,3})?/, L = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?$/
    , A = "YYYY-MM-DDTHH:mm:ssZ", O = ["YYYY-MM-DD", "GGGG-[W]WW", "GGGG-[W]WW-E", "YYYY-DDD"], M = [["HH:mm:ss.S", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], _ = /([\+\-]|\d\d)/gi, D = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), P = {Milliseconds: 1,Seconds: 1e3,Minutes: 6e4,Hours: 36e5,Days: 864e5,Months: 2592e6,Years: 31536e6}, H = {ms: "millisecond",s: "second",m: "minute",h: "hour",d: "day",D: "date",w: "week",W: "isoWeek",M: "month",y: "year",DDD: "dayOfYear",e: "weekday",E: "isoWeekday",gg: "weekYear",GG: "isoWeekYear"}, B = {dayofyear: "dayOfYear",isoweekday: "isoWeekday",isoweek: "isoWeek",weekyear: "weekYear",isoweekyear: "isoWeekYear"}, j = {}, F = "DDD w W M D d".split(" "), I = "M D H h m s w W".split(" "), q = {M: function() {
            return this.month() + 1
        },MMM: function(e) {
            return this.lang().monthsShort(this, e)
        },MMMM: function(e) {
            return this.lang().months(this, e)
        },D: function() {
            return this.date()
        },DDD: function() {
            return this.dayOfYear()
        },d: function() {
            return this.day()
        },dd: function(e) {
            return this.lang().weekdaysMin(this, e)
        },ddd: function(e) {
            return this.lang().weekdaysShort(this, e)
        },dddd: function(e) {
            return this.lang().weekdays(this, e)
        },w: function() {
            return this.week()
        },W: function() {
            return this.isoWeek()
        },YY: function() {
            return K(this.year() % 100, 2)
        },YYYY: function() {
            return K(this.year(), 4)
        },YYYYY: function() {
            return K(this.year(), 5)
        },gg: function() {
            return K(this.weekYear() % 100, 2)
        },gggg: function() {
            return this.weekYear()
        },ggggg: function() {
            return K(this.weekYear(), 5)
        },GG: function() {
            return K(this.isoWeekYear() % 100, 2)
        },GGGG: function() {
            return this.isoWeekYear()
        },GGGGG: function() {
            return K(this.isoWeekYear(), 5)
        },e: function() {
            return this.weekday()
        },E: function() {
            return this.isoWeekday()
        },a: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !0)
        },A: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !1)
        },H: function() {
            return this.hours()
        },h: function() {
            return this.hours() % 12 || 12
        },m: function() {
            return this.minutes()
        },s: function() {
            return this.seconds()
        },S: function() {
            return rt(this.milliseconds() / 100)
        },SS: function() {
            return K(rt(this.milliseconds() / 10), 2)
        },SSS: function() {
            return K(this.milliseconds(), 3)
        },Z: function() {
            var e = -this.zone(), t = "+";
            return e < 0 && (e = -e, t = "-"), t + K(rt(e / 60), 2) + ":" + K(rt(e) % 60, 2)
        },ZZ: function() {
            var e = -this.zone(), t = "+";
            return e < 0 && (e = -e, t = "-"), t + K(rt(10 * e / 6), 4)
        },z: function() {
            return this.zoneAbbr()
        },zz: function() {
            return this.zoneName()
        },X: function() {
            return this.unix()
        }}, R = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"];
    while (F.length)
        i = F.pop(), q[i + "o"] = z(q[i], i);
    while (I.length)
        i = I.pop(), q[i + i] = U(q[i], 2);
    q.DDDD = U(q.DDD, 3), $(W.prototype, {set: function(e) {
            var t, n;
            for (n in e)
                t = e[n], typeof t == "function" ? this[n] = t : this["_" + n] = t
        },_months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months: function(e) {
            return this._months[e.month()]
        },_monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort: function(e) {
            return this._monthsShort[e.month()]
        },monthsParse: function(e) {
            var n, r, i;
            this._monthsParse || (this._monthsParse = []);
            for (n = 0; n < 12; n++) {
                this._monthsParse[n] || (r = t.utc([2e3, n]), i = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[n] = new RegExp(i.replace(".", ""), "i"));
                if (this._monthsParse[n].test(e))
                    return n
            }
        },_weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays: function(e) {
            return this._weekdays[e.day()]
        },_weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort: function(e) {
            return this._weekdaysShort[e.day()]
        },_weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin: function(e) {
            return this._weekdaysMin[e.day()]
        },weekdaysParse: function(e) {
            var n, r, i;
            this._weekdaysParse || (this._weekdaysParse = []);
            for (n = 0; n < 7; n++) {
                this._weekdaysParse[n] || (r = t([2e3, 1]).day(n), i = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[n] = new RegExp(i.replace(".", ""), "i"));
                if (this._weekdaysParse[n].test(e))
                    return n
            }
        },_longDateFormat: {LT: "h:mm A",L: "MM/DD/YYYY",LL: "MMMM D YYYY",LLL: "MMMM D YYYY LT",LLLL: "dddd, MMMM D YYYY LT"},longDateFormat: function(e) {
            var t = this._longDateFormat[e];
            return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(e) {
                return e.slice(1)
            }), this._longDateFormat[e] = t), t
        },isPM: function(e) {
            return (e + "").toLowerCase().charAt(0) === "p"
        },_meridiemParse: /[ap]\.?m?\.?/i,meridiem: function(e, t, n) {
            return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        },_calendar: {sameDay: "[Today at] LT",nextDay: "[Tomorrow at] LT",nextWeek: "dddd [at] LT",lastDay: "[Yesterday at] LT",lastWeek: "[Last] dddd [at] LT",sameElse: "L"},calendar: function(e, t) {
            var n = this._calendar[e];
            return typeof n == "function" ? n.apply(t) : n
        },_relativeTime: {future: "in %s",past: "%s ago",s: "a few seconds",m: "a minute",mm: "%d minutes",h: "an hour",hh: "%d hours",d: "a day",dd: "%d days",M: "a month",MM: "%d months",y: "a year",yy: "%d years"},relativeTime: function(e, t, n, r) {
            var i = this._relativeTime[n];
            return typeof i == "function" ? i(e, t, n, r) : i.replace(/%d/i, e)
        },pastFuture: function(e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return typeof n == "function" ? n(t) : n.replace(/%s/i, t)
        },ordinal: function(e) {
            return this._ordinal.replace("%d", e)
        },_ordinal: "%d",preparse: function(e) {
            return e
        },postformat: function(e) {
            return e
        },week: function(e) {
            return Ht(e, this._week.dow, this._week.doy).week
        },_week: {dow: 0,doy: 6},_invalidDate: "Invalid date",invalidDate: function() {
            return this._invalidDate
        }}), t = function(t, n, r, i) {
        return typeof r == "boolean" && (i = r, r = e), jt({_i: t,_f: n,_l: r,_strict: i,_isUTC: !1})
    }, t.utc = function(t, n, r, i) {
        var s;
        return typeof r == "boolean" && (i = r, r = e), s = jt({_useUTC: !0,_isUTC: !0,_l: r,_i: t,_f: n,_strict: i}).utc(), s
    }, t.unix = function(e) {
        return t(e * 1e3)
    }, t.duration = function(e, n) {
        var r = t.isDuration(e), i = typeof e == "number", s = r ? e._input : i ? {} : e, o = null, h, p, d, g, y;
        return i ? n ? s[n] = e : s.milliseconds = e : (o = v.exec(e)) ? (h = o[1] === "-" ? -1 : 1, s = {y: 0,d: rt(o[u]) * h,h: rt(o[a]) * h,m: rt(o[f]) * h,s: rt(o[l]) * h,ms: rt(o[c]) * h}) : !(o = m.exec(e)) || (h = o[1] === "-" ? -1 : 1, d = function(e) {
            var t = e && parseFloat(e.replace(",", "."));
            return (isNaN(t) ? 0 : t) * h
        }, s = {y: d(o[2]),M: d(o[3]),d: d(o[4]),h: d(o[5]),m: d(o[6]),s: d(o[7]),w: d(o[8])}), p = new V(s), r && e.hasOwnProperty("_lang") && (p._lang = e._lang), p
    }, t.version = n, t.defaultFormat = A, t.updateOffset = function() {
    }, t.lang = function(e, n) {
        var r;
        return e ? (n ? ct(lt(e), n) : n === null ? (ht(e), e = "en") : h[e] || pt(e), r = t.duration.fn._lang = t.fn._lang = pt(e), r._abbr) : t.fn._lang._abbr
    }, t.langData = function(e) {
        return e && e._lang && e._lang._abbr && (e = e._lang._abbr), pt(e)
    }, t.isMoment = function(e) {
        return e instanceof X
    }, t.isDuration = function(e) {
        return e instanceof V
    };
    for (i = R.length - 1; i >= 0; --i)
        nt(R[i]);
    t.normalizeUnits = function(e) {
        return et(e)
    }, t.invalid = function(e) {
        var n = t.utc(NaN);
        return e != null ? $(n._pf, e) : n._pf.userInvalidated = !0, n
    }, t.parseZone = function(e) {
        return t(e).parseZone()
    }, $(t.fn = X.prototype, {clone: function() {
            return t(this)
        },valueOf: function() {
            return +this._d + (this._offset || 0) * 6e4
        },unix: function() {
            return Math.floor(+this / 1e3)
        },toString: function() {
            return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },toDate: function() {
            return this._offset ? new Date(+this) : this._d
        },toISOString: function() {
            return mt(t(this).utc(), "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },toArray: function() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hours(), e.minutes(), e.seconds(), e.milliseconds()]
        },isValid: function() {
            return ft(this)
        },isDSTShifted: function() {
            return this._a ? this.isValid() && Z(this._a, (this._isUTC ? t.utc(this._a) : t(this._a)).toArray()) > 0 : !1
        },parsingFlags: function() {
            return $({}, this._pf)
        },invalidAt: function() {
            return this._pf.overflow
        },utc: function() {
            return this.zone(0)
        },local: function() {
            return this.zone(0), this._isUTC = !1, this
        },format: function(e) {
            var n = mt(this, e || t.defaultFormat);
            return this.lang().postformat(n)
        },add: function(e, n) {
            var r;
            return typeof e == "string" ? r = t.duration(+n, e) : r = t.duration(e, n), Q(this, r, 1), this
        },subtract: function(e, n) {
            var r;
            return typeof e == "string" ? r = t.duration(+n, e) : r = t.duration(e, n), Q(this, r, -1), this
        },diff: function(e, n, r) {
            var i = this._isUTC ? t(e).zone(this._offset || 0) : t(e).local(), s = (this.zone() - i.zone()) * 6e4, o, u;
            return n = et(n), n === "year" || n === "month" ? (o = (this.daysInMonth() + i.daysInMonth()) * 432e5, u = (this.year() - i.year()) * 12 + (this.month() - i.month()), u += (this - t(this).startOf("month") - (i - t(i).startOf("month"))) / o, u -= (this.zone() - t(this).startOf("month").zone() - (i.zone() - t(i).startOf("month").zone())) * 6e4 / o, n === "year" && (u /= 12)) : (o = this - i, u = n === "second" ? o / 1e3 : n === "minute" ? o / 6e4 : n === "hour" ? o / 36e5 : n === "day" ? (o - s) / 864e5 : n === "week" ? (o - s) / 6048e5 : o), r ? u : J(u)
        },from: function(e, n) {
            return t.duration(this.diff(e)).lang(this.lang()._abbr).humanize(!n)
        },fromNow: function(e) {
            return this.from(t(), e)
        },calendar: function() {
            var e = this.diff(t().zone(this.zone()).startOf("day"), "days", !0), n = e < -6 ? "sameElse" : e < -1 ? "lastWeek" : e < 0 ? "lastDay" : e < 1 ? "sameDay" : e < 2 ? "nextDay" : e < 7 ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(n, this))
        },isLeapYear: function() {
            return ot(this.year())
        },isDST: function() {
            return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
        },day: function(e) {
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return e != null ? (e = _t(e, this.lang()), this.add({d: e - t})) : t
        },month: function(e) {
            var n = this._isUTC ? "UTC" : "", r;
            if (e != null) {
                if (typeof e == "string") {
                    e = this.lang().monthsParse(e);
                    if (typeof e != "number")
                        return this
                }
                return r = this.date(), this.date(1), this._d["set" + n + "Month"](e), this.date(Math.min(r, this.daysInMonth())), t.updateOffset(this), this
            }
            return this._d["get" + n + "Month"]()
        },startOf: function(e) {
            e = et(e);
            switch (e) {
                case "year":
                    this.month(0);
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return e === "week" ? this.weekday(0) : e === "isoWeek" && this.isoWeekday(1), this
        },endOf: function(e) {
            return e = et(e), this.startOf(e).add(e === "isoWeek" ? "week" : e, 1).subtract("ms", 1)
        },isAfter: function(e, n) {
            return n = typeof n != "undefined" ? n : "millisecond", +this.clone().startOf(n) > +t(e).startOf(n)
        },isBefore: function(e, n) {
            return n = typeof n != "undefined" ? n : "millisecond", +this.clone().startOf(n) < +t(e).startOf(n)
        },isSame: function(e, n) {
            return n = typeof n != "undefined" ? n : "millisecond", +this.clone().startOf(n) === +t(e).startOf(n)
        },min: function(e) {
            return e = t.apply(null, arguments), e < this ? this : e
        },max: function(e) {
            return e = t.apply(null, arguments), e > this ? this : e
        },zone: function(e) {
            var n = this._offset || 0;
            return e == null ? this._isUTC ? n : this._d.getTimezoneOffset() : (typeof e == "string" && (e = bt(e)), Math.abs(e) < 16 && (e *= 60), this._offset = e, this._isUTC = !0, n !== e && Q(this, t.duration(n - e, "m"), 1, !0), this)
        },zoneAbbr: function() {
            return this._isUTC ? "UTC" : ""
        },zoneName: function() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        },parseZone: function() {
            return typeof this._i == "string" && this.zone(this._i), this
        },hasAlignedHourOffset: function(e) {
            return e ? e = t(e).zone() : e = 0, (this.zone() - e) % 60 === 0
        },daysInMonth: function() {
            return it(this.year(), this.month())
        },dayOfYear: function(e) {
            var n = r((t(this).startOf("day") - t(this).startOf("year")) / 864e5) + 1;
            return e == null ? n : this.add("d", e - n)
        },weekYear: function(e) {
            var t = Ht(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return e == null ? t : this.add("y", e - t)
        },isoWeekYear: function(e) {
            var t = Ht(this, 1, 4).year;
            return e == null ? t : this.add("y", e - t)
        },week: function(e) {
            var t = this.lang().week(this);
            return e == null ? t : this.add("d", (e - t) * 7)
        },isoWeek: function(e) {
            var t = Ht(this, 1, 4).week;
            return e == null ? t : this.add("d", (e - t) * 7)
        },weekday: function(e) {
            var t = (this.day() + 7 - this.lang()._week.dow) % 7;
            return e == null ? t : this.add("d", e - t)
        },isoWeekday: function(e) {
            return e == null ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
        },get: function(e) {
            return e = et(e), this[e]()
        },set: function(e, t) {
            return e = et(e), typeof this[e] == "function" && this[e](t), this
        },lang: function(t) {
            return t === e ? this._lang : (this._lang = pt(t), this)
        }});
    for (i = 0; i < D.length; i++)
        Ft(D[i].toLowerCase().replace(/s$/, ""), D[i]);
    Ft("year", "FullYear"), t.fn.days = t.fn.day, t.fn.months = t.fn.month, t.fn.weeks = t.fn.week, t.fn.isoWeeks = t.fn.isoWeek, t.fn.toJSON = t.fn.toISOString, $(t.duration.fn = V.prototype, {_bubble: function() {
            var e = this._milliseconds, t = this._days, n = this._months, r = this._data, i, s, o, u;
            r.milliseconds = e % 1e3, i = J(e / 1e3), r.seconds = i % 60, s = J(i / 60), r.minutes = s % 60, o = J(s / 60), r.hours = o % 24, t += J(o / 24), r.days = t % 30, n += J(t / 30), r.months = n % 12, u = J(n / 12), r.years = u
        },weeks: function() {
            return J(this.days() / 7)
        },valueOf: function() {
            return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + rt(this._months / 12) * 31536e6
        },humanize: function(e) {
            var t = +this, n = Pt(t, !e, this.lang());
            return e && (n = this.lang().pastFuture(t, n)), this.lang().postformat(n)
        },add: function(e, n) {
            var r = t.duration(e, n);
            return this._milliseconds += r._milliseconds, this._days += r._days, this._months += r._months, this._bubble(), this
        },subtract: function(e, n) {
            var r = t.duration(e, n);
            return this._milliseconds -= r._milliseconds, this._days -= r._days, this._months -= r._months, this._bubble(), this
        },get: function(e) {
            return e = et(e), this[e.toLowerCase() + "s"]()
        },as: function(e) {
            return e = et(e), this["as" + e.charAt(0).toUpperCase() + e.slice(1) + "s"]()
        },lang: t.fn.lang,toIsoString: function() {
            var e = Math.abs(this.years()), t = Math.abs(this.months()), n = Math.abs(this.days()), r = Math.abs(this.hours()), i = Math.abs(this.minutes()), s = Math.abs(this.seconds() + this.milliseconds() / 1e3);
            return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (e ? e + "Y" : "") + (t ? t + "M" : "") + (n ? n + "D" : "") + (r || i || s ? "T" : "") + (r ? r + "H" : "") + (i ? i + "M" : "") + (s ? s + "S" : "") : "P0D"
        }});
    for (i in P)
        P.hasOwnProperty(i) && (qt(i, P[i]), It(i.toLowerCase()));
    qt("Weeks", 6048e5), t.duration.fn.asMonths = function() {
        return (+this - this.years() * 31536e6) / 2592e6 + this.years() * 12
    }, t.lang("en", {ordinal: function(e) {
            var t = e % 10, n = rt(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
            return e + n
        }}), p ? (module.exports = t, Rt()) : typeof define == "function" && define.amd ? define("moment", function(e, n, r) {
        return r.config().noGlobal !== !0 && Rt(), t
    }) : Rt()
}.call(this), function() {
    function t(t) {
        function v(e) {
            e += "";
            var t = e.split(":"), n = ~e.indexOf("-") ? -1 : 1, r = Math.abs(+t[0]), i = parseInt(t[1], 10) || 0, s = parseInt(t[2], 10) || 0;
            return n * (r * 60 + i + s / 60)
        }
        function m(e, t, n, r, i, s, o, u, a, f) {
            this.name = e, this.startYear = +t, this.endYear = +n, this.month = +r, this.day = +i, this.dayRule = +s, this.time = v(o), this.timeRule = +u, this.offset = v(a), this.letters = f || ""
        }
        function g(e, t) {
            this.rule = t, this.start = t.start(e)
        }
        function y(e, t) {
            return e.isLast ? -1 : t.isLast ? 1 : t.start - e.start
        }
        function b(e) {
            this.name = e, this.rules = []
        }
        function w(e, n, r, i, s, o) {
            var u, a = typeof s == "string" ? s.split("_") : [9999];
            this.name = e, this.offset = v(n), this.ruleSet = r, this.letters = i;
            for (u = 0; u < a.length; u++)
                a[u] = +a[u];
            this.until = t.utc(a).subtract("m", v(o))
        }
        function E(e, t) {
            return e.until - t.until
        }
        function S(e) {
            this.name = N(e), this.displayName = e, this.zones = []
        }
        function x(e) {
            var t, n, r;
            for (t in e) {
                r = e[t];
                for (n = 0; n < r.length; n++)
                    T(t + "	" + r[n])
            }
        }
        function T(e) {
            if (s[e])
                return s[e];
            var t = e.split(/\s/), n = N(t[0]), r = new m(n, t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10]);
            return s[e] = r, A(n).add(r), r
        }
        function N(e) {
            return (e || "").toLowerCase().replace(/\//g, "_")
        }
        function C(e) {
            var t, n, r;
            for (t in e) {
                r = e[t];
                for (n = 0; n < r.length; n++)
                    L(t + "	" + r[n])
            }
        }
        function k(e) {
            var t;
            for (t in e)
                f[N(t)] = N(e[t])
        }
        function L(e) {
            if (u[e])
                return u[e];
            var t = e.split(/\s/), n = N(t[0]), r = new w(n, t[1], A(t[2]), t[3], t[4], t[5]);
            return u[e] = r, O(t[0]).add(r), r
        }
        function A(e) {
            return e = N(e), o[e] || (o[e] = new b(e)), o[e]
        }
        function O(e) {
            var t = N(e);
            return f[t] && (t = f[t]), a[t] || (a[t] = new S(e)), a[t]
        }
        function M(e) {
            if (!e)
                return;
            e.zones && C(e.zones), e.rules && x(e.rules), e.links && k(e.links)
        }
        var n = t.fn.zoneName, r = t.fn.zoneAbbr, i, s = {}, o = {}, u = {}, a = {}, f = {}, l = 0, c = 1, h = 2, p = 7, d = 8;
        return m.prototype = {contains: function(e) {
                return e >= this.startYear && e <= this.endYear
            },start: function(e) {
                return e = Math.min(Math.max(e, this.startYear), this.endYear), t.utc([e, this.month, this.date(e), 0, this.time])
            },date: function(e) {
                return this.dayRule === p ? this.day : this.dayRule === d ? this.lastWeekday(e) : this.weekdayAfter(e)
            },weekdayAfter: function(e) {
                var n = this.day, r = t([e, this.month, 1]).day(), i = this.dayRule + 1 - r;
                while (i < n)
                    i += 7;
                return i
            },lastWeekday: function(e) {
                var n = this.day, r = n % 7, i = t([e, this.month + 1, 1]).day(), s = t([e, this.month, 1]).daysInMonth(), o = s + (r - (i - 1)) - ~~(n / 7) * 7;
                return r >= i && (o -= 7), o
            }}, g.prototype = {equals: function(e) {
                return !e || e.rule !== this.rule ? !1 : Math.abs(e.start - this.start) < 864e5
            }}, b.prototype = {add: function(e) {
                this.rules.push(e)
            },ruleYears: function(e, t) {
                var n, r, i = e.year(), s, o, u = [];
                for (n = 0; n < this.rules.length; n++)
                    s = this.rules[n], s.contains(i) ? u.push(new g(i, s)) : s.contains(i + 1) && u.push(new g(i + 1, s));
                return u.push(new g(i - 1, this.lastYearRule(i - 1))), t && (o = new g(i - 1, t.lastRule()), o.start = t.until.clone().utc(), o.isLast = t.ruleSet !== this, u.push(o)), u.sort(y), u
            },rule: function(e, t, n) {
                var r = this.ruleYears(e, n), s = 0, o, u, a, f, l;
                n && (u = n.offset + n.lastRule().offset, a = Math.abs(u) * 9e4);
                for (l = r.length - 1; l > -1; l--) {
                    f = o, o = r[l];
                    if (o.equals(f))
                        continue;
                    n && !o.isLast && Math.abs(o.start - n.until) <= a && (s += u - t), o.rule.timeRule === h && (s = t), o.rule.timeRule !== c && o.start.add("m", -s), s = o.rule.offset + t
                }
                for (l = 0; l < r.length; l++) {
                    o = r[l];
                    if (e >= o.start && !o.isLast)
                        return o.rule
                }
                return i
            },lastYearRule: function(e) {
                var t, n, r, s = i, o = -1e30;
                for (t = 0; t < this.rules.length; t++)
                    n = this.rules[t], e >= n.startYear && (r = n.start(e), r > o && (o = r, s = n));
                return s
            }}, w.prototype = {rule: function(e, t) {
                return this.ruleSet.rule(e, this.offset, t)
            },lastRule: function() {
                return this._lastRule || (this._lastRule = this.rule(this.until)), this._lastRule
            },format: function(e) {
                return this.letters.replace("%s", e.letters)
            }}, S.prototype = {zoneAndRule: function(e) {
                var t, n, r;
                e = e.clone().utc();
                for (t = 0; t < this.zones.length; t++) {
                    n = this.zones[t];
                    if (e < n.until)
                        break;
                    r = n
                }
                return [n, n.rule(e, r)]
            },add: function(e) {
                this.zones.push(e), this.zones.sort(E)
            },format: function(e) {
                var t = this.zoneAndRule(e);
                return t[0].format(t[1])
            },offset: function(e) {
                var t = this.zoneAndRule(e);
                return -(t[0].offset + t[1].offset)
            }}, t.updateOffset = function(e) {
            var t;
            e._z && (t = e._z.offset(e), Math.abs(t) < 16 && (t /= 60), e.zone(t))
        }, t.fn.tz = function(e) {
            if (e)
                return this._z = O(e), this._z && t.updateOffset(this), this;
            if (this._z)
                return this._z.displayName
        }, t.fn.zoneName = function() {
            return this._z ? this._z.format(this) : n.call(this)
        }, t.fn.zoneAbbr = function() {
            return this._z ? this._z.format(this) : r.call(this)
        }, t.tz = function() {
            var e = [], n, r = arguments.length - 1;
            for (n = 0; n < r; n++)
                e[n] = arguments[n];
            return t.apply(null, e).tz(arguments[r])
        }, t.tz.add = M, t.tz.addRule = T, t.tz.addZone = L, t.tz.version = e, i = T("- 0 9999 0 0 0 0 0 0"), t
    }
    var e = "0.0.1";
    typeof define == "function" && define.amd ? define("moment-timezone", ["moment"], t) : typeof window != "undefined" && window.moment ? t(window.moment) : typeof module != "undefined" && (module.exports = t(require("moment")))
}.apply(this), moment.tz.add({zones: {"Africa/Abidjan": ["-0:16:8 - LMT 1912 -0:16:8", "0 - GMT"],"Africa/Accra": ["-0:0:52 - LMT 1918 -0:0:52", "0 Ghana %s"],"Africa/Addis_Ababa": ["2:34:48 - LMT 1870 2:34:48", "2:35:20 - ADMT 1936_4_5 2:35:20", "3 - EAT"],"Africa/Algiers": ["0:12:12 - LMT 1891_2_15_0_1 0:12:12", "0:9:21 - PMT 1911_2_11 0:9:21", "0 Algeria WE%sT 1940_1_25_2", "1 Algeria CE%sT 1946_9_7 1", "0 - WET 1956_0_29", "1 - CET 1963_3_14 1", "0 Algeria WE%sT 1977_9_21 1", "1 Algeria CE%sT 1979_9_26 1", "0 Algeria WE%sT 1981_4", "1 - CET"],"Africa/Asmara": ["2:35:32 - LMT 1870 2:35:32", "2:35:32 - AMT 1890 2:35:32", "2:35:20 - ADMT 1936_4_5 2:35:20", "3 - EAT"],"Africa/Bamako": ["-0:32 - LMT 1912 -0:32", "0 - GMT 1934_1_26", "-1 - WAT 1960_5_20 -1", "0 - GMT"],"Africa/Bangui": ["1:14:20 - LMT 1912 1:14:20", "1 - WAT"],"Africa/Banjul": ["-1:6:36 - LMT 1912 -1:6:36", "-1:6:36 - BMT 1935 -1:6:36", "-1 - WAT 1964 -1", "0 - GMT"],"Africa/Bissau": ["-1:2:20 - LMT 1911_4_26 -1:2:20", "-1 - WAT 1975 -1", "0 - GMT"],"Africa/Blantyre": ["2:20 - LMT 1903_2 2:20", "2 - CAT"],"Africa/Brazzaville": ["1:1:8 - LMT 1912 1:1:8", "1 - WAT"],"Africa/Bujumbura": ["1:57:28 - LMT 1890 1:57:28", "2 - CAT"],"Africa/Cairo": ["2:5:9 - LMT 1900_9 2:5:9", "2 Egypt EE%sT"],"Africa/Casablanca": ["-0:30:20 - LMT 1913_9_26 -0:30:20", "0 Morocco WE%sT 1984_2_16", "1 - CET 1986 1", "0 Morocco WE%sT"],"Africa/Ceuta": ["-0:21:16 - LMT 1901 -0:21:16", "0 - WET 1918_4_6_23", "1 - WEST 1918_9_7_23 1", "0 - WET 1924", "0 Spain WE%sT 1929", "0 SpainAfrica WE%sT 1984_2_16", "1 - CET 1986 1", "1 EU CE%sT"],"Africa/Conakry": ["-0:54:52 - LMT 1912 -0:54:52", "0 - GMT 1934_1_26", "-1 - WAT 1960 -1", "0 - GMT"],"Africa/Dakar": ["-1:9:44 - LMT 1912 -1:9:44", "-1 - WAT 1941_5 -1", "0 - GMT"],"Africa/Dar_es_Salaam": ["2:37:8 - LMT 1931 2:37:8", "3 - EAT 1948 3", "2:45 - BEAUT 1961 2:45", "3 - EAT"],"Africa/Djibouti": ["2:52:36 - LMT 1911_6 2:52:36", "3 - EAT"],"Africa/Douala": ["0:38:48 - LMT 1912 0:38:48", "1 - WAT"],"Africa/El_Aaiun": ["-0:52:48 - LMT 1934_0 -0:52:48", "-1 - WAT 1976_3_14 -1", "0 - WET"],"Africa/Freetown": ["-0:53 - LMT 1882 -0:53", "-0:53 - FMT 1913_5 -0:53", "-1 SL %s 1957 -1", "0 SL %s"],"Africa/Gaborone": ["1:43:40 - LMT 1885 1:43:40", "1:30 - SAST 1903_2 1:30", "2 - CAT 1943_8_19_2 2", "3 - CAST 1944_2_19_2 3", "2 - CAT"],"Africa/Harare": ["2:4:12 - LMT 1903_2 2:4:12", "2 - CAT"],"Africa/Johannesburg": ["1:52 - LMT 1892_1_8 1:52", "1:30 - SAST 1903_2 1:30", "2 SA SAST"],"Africa/Juba": ["2:6:24 - LMT 1931 2:6:24", "2 Sudan CA%sT 2000_0_15_12 2", "3 - EAT"],"Africa/Kampala": ["2:9:40 - LMT 1928_6 2:9:40", "3 - EAT 1930 3", "2:30 - BEAT 1948 2:30", "2:45 - BEAUT 1957 2:45", "3 - EAT"],"Africa/Khartoum": ["2:10:8 - LMT 1931 2:10:8", "2 Sudan CA%sT 2000_0_15_12 2", "3 - EAT"],"Africa/Kigali": ["2:0:16 - LMT 1935_5 2:0:16", "2 - CAT"],"Africa/Kinshasa": ["1:1:12 - LMT 1897_10_9 1:1:12", "1 - WAT"],"Africa/Lagos": ["0:13:36 - LMT 1919_8 0:13:36", "1 - WAT"],"Africa/Libreville": ["0:37:48 - LMT 1912 0:37:48", "1 - WAT"],"Africa/Lome": ["0:4:52 - LMT 1893 0:4:52", "0 - GMT"],"Africa/Luanda": ["0:52:56 - LMT 1892 0:52:56", "0:52:4 - AOT 1911_4_26 0:52:4", "1 - WAT"],"Africa/Lubumbashi": ["1:49:52 - LMT 1897_10_9 1:49:52", "2 - CAT"],"Africa/Lusaka": ["1:53:8 - LMT 1903_2 1:53:8", "2 - CAT"],"Africa/Malabo": ["0:35:8 - LMT 1912 0:35:8", "0 - GMT 1963_11_15", "1 - WAT"],"Africa/Maputo": ["2:10:20 - LMT 1903_2 2:10:20", "2 - CAT"],"Africa/Maseru": ["1:50 - LMT 1903_2 1:50", "2 - SAST 1943_8_19_2 2", "3 - SAST 1944_2_19_2 3", "2 - SAST"],"Africa/Mbabane": ["2:4:24 - LMT 1903_2 2:4:24", "2 - SAST"],"Africa/Mogadishu": ["3:1:28 - LMT 1893_10 3:1:28", "3 - EAT 1931 3", "2:30 - BEAT 1957 2:30", "3 - EAT"],"Africa/Monrovia": ["-0:43:8 - LMT 1882 -0:43:8", "-0:43:8 - MMT 1919_2 -0:43:8", "-0:44:30 - LRT 1972_4 -0:44:30", "0 - GMT"],"Africa/Nairobi": ["2:27:16 - LMT 1928_6 2:27:16", "3 - EAT 1930 3", "2:30 - BEAT 1940 2:30", "2:45 - BEAUT 1960 2:45", "3 - EAT"],"Africa/Ndjamena": ["1:0:12 - LMT 1912 1:0:12", "1 - WAT 1979_9_14 1", "2 - WAST 1980_2_8 2", "1 - WAT"],"Africa/Niamey": ["0:8:28 - LMT 1912 0:8:28", "-1 - WAT 1934_1_26 -1", "0 - GMT 1960", "1 - WAT"],"Africa/Nouakchott": ["-1:3:48 - LMT 1912 -1:3:48", "0 - GMT 1934_1_26", "-1 - WAT 1960_10_28 -1", "0 - GMT"],"Africa/Ouagadougou": ["-0:6:4 - LMT 1912 -0:6:4", "0 - GMT"],"Africa/Porto-Novo": ["0:10:28 - LMT 1912 0:10:28", "0 - GMT 1934_1_26", "1 - WAT"],"Africa/Sao_Tome": ["0:26:56 - LMT 1884 0:26:56", "-0:36:32 - LMT 1912 -0:36:32", "0 - GMT"],"Africa/Tripoli": ["0:52:44 - LMT 1920 0:52:44", "1 Libya CE%sT 1959 1", "2 - EET 1982 2", "1 Libya CE%sT 1990_4_4 1", "2 - EET 1996_8_30 2", "1 Libya CE%sT 1997_9_4 2", "2 - EET 2012_10_10_2 2", "1 Libya CE%sT"],"Africa/Tunis": ["0:40:44 - LMT 1881_4_12 0:40:44", "0:9:21 - PMT 1911_2_11 0:9:21", "1 Tunisia CE%sT"],"Africa/Windhoek": ["1:8:24 - LMT 1892_1_8 1:8:24", "1:30 - SWAT 1903_2 1:30", "2 - SAST 1942_8_20_2 2", "3 - SAST 1943_2_21_2 3", "2 - SAST 1990_2_21 2", "2 - CAT 1994_3_3 2", "1 Namibia WA%sT"],"America/Adak": ["12:13:21 - LMT 1867_9_18 12:13:21", "-11:46:38 - LMT 1900_7_20_12 -11:46:38", "-11 - NST 1942 -11", "-11 US N%sT 1946 -11", "-11 - NST 1967_3 -11", "-11 - BST 1969 -11", "-11 US B%sT 1983_9_30_2 -10", "-10 US AH%sT 1983_10_30 -10", "-10 US HA%sT"],"America/Anchorage": ["14:0:24 - LMT 1867_9_18 14:0:24", "-9:59:36 - LMT 1900_7_20_12 -9:59:36", "-10 - CAT 1942 -10", "-10 US CAT/CAWT 1945_7_14_23", "-10 US CAT/CAPT 1946 -10", "-10 - CAT 1967_3 -10", "-10 - AHST 1969 -10", "-10 US AH%sT 1983_9_30_2 -9", "-9 US Y%sT 1983_10_30 -9", "-9 US AK%sT"],"America/Anguilla": ["-4:12:16 - LMT 1912_2_2 -4:12:16", "-4 - AST"],"America/Antigua": ["-4:7:12 - LMT 1912_2_2 -4:7:12", "-5 - EST 1951 -5", "-4 - AST"],"America/Araguaina": ["-3:12:48 - LMT 1914 -3:12:48", "-3 Brazil BR%sT 1990_8_17 -3", "-3 - BRT 1995_8_14 -3", "-3 Brazil BR%sT 2003_8_24 -3", "-3 - BRT 2012_9_21 -3", "-3 Brazil BR%sT"],"America/Argentina/Buenos_Aires": ["-3:53:48 - LMT 1894_9_31 -3:53:48", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 Arg AR%sT"],"America/Argentina/Catamarca": ["-4:23:8 - LMT 1894_9_31 -4:23:8", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1991_2_3 -2", "-4 - WART 1991_9_20 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 - ART 2004_5_1 -3", "-4 - WART 2004_5_20 -4", "-3 Arg AR%sT 2008_9_18 -3", "-3 - ART"],"America/Argentina/Cordoba": ["-4:16:48 - LMT 1894_9_31 -4:16:48", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1991_2_3 -2", "-4 - WART 1991_9_20 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 Arg AR%sT"],"America/Argentina/Jujuy": ["-4:21:12 - LMT 1894_9_31 -4:21:12", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1990_2_4 -2", "-4 - WART 1990_9_28 -4", "-3 - WARST 1991_2_17 -3", "-4 - WART 1991_9_6 -4", "-2 - ARST 1992 -2", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 Arg AR%sT 2008_9_18 -3", "-3 - ART"],"America/Argentina/La_Rioja": ["-4:27:24 - LMT 1894_9_31 -4:27:24", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1991_2_1 -2", "-4 - WART 1991_4_7 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 - ART 2004_5_1 -3", "-4 - WART 2004_5_20 -4", "-3 Arg AR%sT 2008_9_18 -3", "-3 - ART"],"America/Argentina/Mendoza": ["-4:35:16 - LMT 1894_9_31 -4:35:16", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1990_2_4 -2", "-4 - WART 1990_9_15 -4", "-3 - WARST 1991_2_1 -3", "-4 - WART 1991_9_15 -4", "-3 - WARST 1992_2_1 -3", "-4 - WART 1992_9_18 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 - ART 2004_4_23 -3", "-4 - WART 2004_8_26 -4", "-3 Arg AR%sT 2008_9_18 -3", "-3 - ART"],"America/Argentina/Rio_Gallegos": ["-4:36:52 - LMT 1894_9_31 -4:36:52", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 - ART 2004_5_1 -3", "-4 - WART 2004_5_20 -4", "-3 Arg AR%sT 2008_9_18 -3", "-3 - ART"],"America/Argentina/Salta": ["-4:21:40 - LMT 1894_9_31 -4:21:40", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1991_2_3 -2", "-4 - WART 1991_9_20 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 Arg AR%sT 2008_9_18 -3", "-3 - ART"],"America/Argentina/San_Juan": ["-4:34:4 - LMT 1894_9_31 -4:34:4", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1991_2_1 -2", "-4 - WART 1991_4_7 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 - ART 2004_4_31 -3", "-4 - WART 2004_6_25 -4", "-3 Arg AR%sT 2008_9_18 -3", "-3 - ART"],"America/Argentina/San_Luis": ["-4:25:24 - LMT 1894_9_31 -4:25:24", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1990 -2", "-2 - ARST 1990_2_14 -2", "-4 - WART 1990_9_15 -4", "-3 - WARST 1991_2_1 -3", "-4 - WART 1991_5_1 -4", "-3 - ART 1999_9_3 -3", "-3 - WARST 2000_2_3 -3", "-3 - ART 2004_4_31 -3", "-4 - WART 2004_6_25 -4", "-3 Arg AR%sT 2008_0_21 -2", "-4 SanLuis WAR%sT"],"America/Argentina/Tucuman": ["-4:20:52 - LMT 1894_9_31 -4:20:52", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1991_2_3 -2", "-4 - WART 1991_9_20 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 - ART 2004_5_1 -3", "-4 - WART 2004_5_13 -4", "-3 Arg AR%sT"],"America/Argentina/Ushuaia": ["-4:33:12 - LMT 1894_9_31 -4:33:12", "-4:16:48 - CMT 1920_4 -4:16:48", "-4 - ART 1930_11 -4", "-4 Arg AR%sT 1969_9_5 -4", "-3 Arg AR%sT 1999_9_3 -3", "-4 Arg AR%sT 2000_2_3 -3", "-3 - ART 2004_4_30 -3", "-4 - WART 2004_5_20 -4", "-3 Arg AR%sT 2008_9_18 -3", "-3 - ART"],"America/Aruba": ["-4:40:24 - LMT 1912_1_12 -4:40:24", "-4:30 - ANT 1965 -4:30", "-4 - AST"],"America/Asuncion": ["-3:50:40 - LMT 1890 -3:50:40", "-3:50:40 - AMT 1931_9_10 -3:50:40", "-4 - PYT 1972_9 -4", "-3 - PYT 1974_3 -3", "-4 Para PY%sT"],"America/Atikokan": ["-6:6:28 - LMT 1895 -6:6:28", "-6 Canada C%sT 1940_8_29 -6", "-5 - CDT 1942_1_9_2 -6", "-6 Canada C%sT 1945_8_30_2 -5", "-5 - EST"],"America/Bahia": ["-2:34:4 - LMT 1914 -2:34:4", "-3 Brazil BR%sT 2003_8_24 -3", "-3 - BRT 2011_9_16 -3", "-3 Brazil BR%sT 2012_9_21 -3", "-3 - BRT"],"America/Bahia_Banderas": ["-7:1 - LMT 1921_11_31_23_59 -7:1", "-7 - MST 1927_5_10_23 -7", "-6 - CST 1930_10_15 -6", "-7 - MST 1931_4_1_23 -7", "-6 - CST 1931_9 -6", "-7 - MST 1932_3_1 -7", "-6 - CST 1942_3_24 -6", "-7 - MST 1949_0_14 -7", "-8 - PST 1970 -8", "-7 Mexico M%sT 2010_3_4_2 -7", "-6 Mexico C%sT"],"America/Barbados": ["-3:58:29 - LMT 1924 -3:58:29", "-3:58:29 - BMT 1932 -3:58:29", "-4 Barb A%sT"],"America/Belem": ["-3:13:56 - LMT 1914 -3:13:56", "-3 Brazil BR%sT 1988_8_12 -3", "-3 - BRT"],"America/Belize": ["-5:52:48 - LMT 1912_3 -5:52:48", "-6 Belize C%sT"],"America/Blanc-Sablon": ["-3:48:28 - LMT 1884 -3:48:28", "-4 Canada A%sT 1970 -4", "-4 - AST"],"America/Boa_Vista": ["-4:2:40 - LMT 1914 -4:2:40", "-4 Brazil AM%sT 1988_8_12 -4", "-4 - AMT 1999_8_30 -4", "-4 Brazil AM%sT 2000_9_15 -3", "-4 - AMT"],"America/Bogota": ["-4:56:16 - LMT 1884_2_13 -4:56:16", "-4:56:16 - BMT 1914_10_23 -4:56:16", "-5 CO CO%sT"],"America/Boise": ["-7:44:49 - LMT 1883_10_18_12_15_11 -7:44:49", "-8 US P%sT 1923_4_13_2 -8", "-7 US M%sT 1974 -7", "-7 - MST 1974_1_3_2 -7", "-7 US M%sT"],"America/Cambridge_Bay": ["0 - zzz 1920", "-7 NT_YK M%sT 1999_9_31_2 -6", "-6 Canada C%sT 2000_9_29_2 -5", "-5 - EST 2000_10_5_0 -5", "-6 - CST 2001_3_1_3 -6", "-7 Canada M%sT"],"America/Campo_Grande": ["-3:38:28 - LMT 1914 -3:38:28", "-4 Brazil AM%sT"],"America/Cancun": ["-5:47:4 - LMT 1922_0_1_0_12_56 -5:47:4", "-6 - CST 1981_11_23 -6", "-5 Mexico E%sT 1998_7_2_2 -4", "-6 Mexico C%sT"],"America/Caracas": ["-4:27:44 - LMT 1890 -4:27:44", "-4:27:40 - CMT 1912_1_12 -4:27:40", "-4:30 - VET 1965 -4:30", "-4 - VET 2007_11_9_03 -4", "-4:30 - VET"],"America/Cayenne": ["-3:29:20 - LMT 1911_6 -3:29:20", "-4 - GFT 1967_9 -4", "-3 - GFT"],"America/Cayman": ["-5:25:32 - LMT 1890 -5:25:32", "-5:7:12 - KMT 1912_1 -5:7:12", "-5 - EST"],"America/Chicago": ["-5:50:36 - LMT 1883_10_18_12_9_24 -5:50:36", "-6 US C%sT 1920 -6", "-6 Chicago C%sT 1936_2_1_2 -6", "-5 - EST 1936_10_15_2 -5", "-6 Chicago C%sT 1942 -6", "-6 US C%sT 1946 -6", "-6 Chicago C%sT 1967 -6", "-6 US C%sT"],"America/Chihuahua": ["-7:4:20 - LMT 1921_11_31_23_55_40 -7:4:20", "-7 - MST 1927_5_10_23 -7", "-6 - CST 1930_10_15 -6", "-7 - MST 1931_4_1_23 -7", "-6 - CST 1931_9 -6", "-7 - MST 1932_3_1 -7", "-6 - CST 1996 -6", "-6 Mexico C%sT 1998 -6", "-6 - CST 1998_3_5_3 -6", "-7 Mexico M%sT"],"America/Costa_Rica": ["-5:36:13 - LMT 1890 -5:36:13", "-5:36:13 - SJMT 1921_0_15 -5:36:13", "-6 CR C%sT"],"America/Creston": ["-7:46:4 - LMT 1884 -7:46:4", "-7 - MST 1916_9_1 -7", "-8 - PST 1918_5_2 -8", "-7 - MST"],"America/Cuiaba": ["-3:44:20 - LMT 1914 -3:44:20", "-4 Brazil AM%sT 2003_8_24 -4", "-4 - AMT 2004_9_1 -4", "-4 Brazil AM%sT"],"America/Curacao": ["-4:35:47 - LMT 1912_1_12 -4:35:47", "-4:30 - ANT 1965 -4:30", "-4 - AST"],"America/Danmarkshavn": ["-1:14:40 - LMT 1916_6_28 -1:14:40", "-3 - WGT 1980_3_6_2 -3", "-3 EU WG%sT 1996 -3", "0 - GMT"],"America/Dawson": ["-9:17:40 - LMT 1900_7_20 -9:17:40", "-9 NT_YK Y%sT 1973_9_28_0 -9", "-8 NT_YK P%sT 1980 -8", "-8 Canada P%sT"],"America/Dawson_Creek": ["-8:0:56 - LMT 1884 -8:0:56", "-8 Canada P%sT 1947 -8", "-8 Vanc P%sT 1972_7_30_2 -7", "-7 - MST"],"America/Denver": ["-6:59:56 - LMT 1883_10_18_12_0_4 -6:59:56", "-7 US M%sT 1920 -7", "-7 Denver M%sT 1942 -7", "-7 US M%sT 1946 -7", "-7 Denver M%sT 1967 -7", "-7 US M%sT"],"America/Detroit": ["-5:32:11 - LMT 1905 -5:32:11", "-6 - CST 1915_4_15_2 -6", "-5 - EST 1942 -5", "-5 US E%sT 1946 -5", "-5 Detroit E%sT 1973 -5", "-5 US E%sT 1975 -5", "-5 - EST 1975_3_27_2 -5", "-5 US E%sT"],"America/Dominica": ["-4:5:36 - LMT 1911_6_1_0_1 -4:5:36", "-4 - AST"],"America/Edmonton": ["-7:33:52 - LMT 1906_8 -7:33:52", "-7 Edm M%sT 1987 -7", "-7 Canada M%sT"],"America/Eirunepe": ["-4:39:28 - LMT 1914 -4:39:28", "-5 Brazil AC%sT 1988_8_12 -5", "-5 - ACT 1993_8_28 -5", "-5 Brazil AC%sT 1994_8_22 -5", "-5 - ACT 2008_5_24_00 -5", "-4 - AMT"],"America/El_Salvador": ["-5:56:48 - LMT 1921 -5:56:48", "-6 Salv C%sT"],"America/Fortaleza": ["-2:34 - LMT 1914 -2:34", "-3 Brazil BR%sT 1990_8_17 -3", "-3 - BRT 1999_8_30 -3", "-3 Brazil BR%sT 2000_9_22 -2", "-3 - BRT 2001_8_13 -3", "-3 Brazil BR%sT 2002_9_1 -3"
            , "-3 - BRT"],"America/Glace_Bay": ["-3:59:48 - LMT 1902_5_15 -3:59:48", "-4 Canada A%sT 1953 -4", "-4 Halifax A%sT 1954 -4", "-4 - AST 1972 -4", "-4 Halifax A%sT 1974 -4", "-4 Canada A%sT"],"America/Godthab": ["-3:26:56 - LMT 1916_6_28 -3:26:56", "-3 - WGT 1980_3_6_2 -3", "-3 EU WG%sT"],"America/Goose_Bay": ["-4:1:40 - LMT 1884 -4:1:40", "-3:30:52 - NST 1918 -3:30:52", "-3:30:52 Canada N%sT 1919 -3:30:52", "-3:30:52 - NST 1935_2_30 -3:30:52", "-3:30 - NST 1936 -3:30", "-3:30 StJohns N%sT 1942_4_11 -3:30", "-3:30 Canada N%sT 1946 -3:30", "-3:30 StJohns N%sT 1966_2_15_2 -3:30", "-4 StJohns A%sT 2011_10 -3", "-4 Canada A%sT"],"America/Grand_Turk": ["-4:44:32 - LMT 1890 -4:44:32", "-5:7:12 - KMT 1912_1 -5:7:12", "-5 TC E%sT"],"America/Grenada": ["-4:7 - LMT 1911_6 -4:7", "-4 - AST"],"America/Guadeloupe": ["-4:6:8 - LMT 1911_5_8 -4:6:8", "-4 - AST"],"America/Guatemala": ["-6:2:4 - LMT 1918_9_5 -6:2:4", "-6 Guat C%sT"],"America/Guayaquil": ["-5:19:20 - LMT 1890 -5:19:20", "-5:14 - QMT 1931 -5:14", "-5 - ECT"],"America/Guyana": ["-3:52:40 - LMT 1915_2 -3:52:40", "-3:45 - GBGT 1966_4_26 -3:45", "-3:45 - GYT 1975_6_31 -3:45", "-3 - GYT 1991 -3", "-4 - GYT"],"America/Halifax": ["-4:14:24 - LMT 1902_5_15 -4:14:24", "-4 Halifax A%sT 1918 -4", "-4 Canada A%sT 1919 -4", "-4 Halifax A%sT 1942_1_9_2 -4", "-4 Canada A%sT 1946 -4", "-4 Halifax A%sT 1974 -4", "-4 Canada A%sT"],"America/Havana": ["-5:29:28 - LMT 1890 -5:29:28", "-5:29:36 - HMT 1925_6_19_12 -5:29:36", "-5 Cuba C%sT"],"America/Hermosillo": ["-7:23:52 - LMT 1921_11_31_23_36_8 -7:23:52", "-7 - MST 1927_5_10_23 -7", "-6 - CST 1930_10_15 -6", "-7 - MST 1931_4_1_23 -7", "-6 - CST 1931_9 -6", "-7 - MST 1932_3_1 -7", "-6 - CST 1942_3_24 -6", "-7 - MST 1949_0_14 -7", "-8 - PST 1970 -8", "-7 Mexico M%sT 1999 -7", "-7 - MST"],"America/Indiana/Indianapolis": ["-5:44:38 - LMT 1883_10_18_12_15_22 -5:44:38", "-6 US C%sT 1920 -6", "-6 Indianapolis C%sT 1942 -6", "-6 US C%sT 1946 -6", "-6 Indianapolis C%sT 1955_3_24_2 -6", "-5 - EST 1957_8_29_2 -5", "-6 - CST 1958_3_27_2 -6", "-5 - EST 1969 -5", "-5 US E%sT 1971 -5", "-5 - EST 2006 -5", "-5 US E%sT"],"America/Indiana/Knox": ["-5:46:30 - LMT 1883_10_18_12_13_30 -5:46:30", "-6 US C%sT 1947 -6", "-6 Starke C%sT 1962_3_29_2 -6", "-5 - EST 1963_9_27_2 -5", "-6 US C%sT 1991_9_27_2 -5", "-5 - EST 2006_3_2_2 -5", "-6 US C%sT"],"America/Indiana/Marengo": ["-5:45:23 - LMT 1883_10_18_12_14_37 -5:45:23", "-6 US C%sT 1951 -6", "-6 Marengo C%sT 1961_3_30_2 -6", "-5 - EST 1969 -5", "-5 US E%sT 1974_0_6_2 -5", "-5 - CDT 1974_9_27_2 -5", "-5 US E%sT 1976 -5", "-5 - EST 2006 -5", "-5 US E%sT"],"America/Indiana/Petersburg": ["-5:49:7 - LMT 1883_10_18_12_10_53 -5:49:7", "-6 US C%sT 1955 -6", "-6 Pike C%sT 1965_3_25_2 -6", "-5 - EST 1966_9_30_2 -5", "-6 US C%sT 1977_9_30_2 -5", "-5 - EST 2006_3_2_2 -5", "-6 US C%sT 2007_10_4_2 -5", "-5 US E%sT"],"America/Indiana/Tell_City": ["-5:47:3 - LMT 1883_10_18_12_12_57 -5:47:3", "-6 US C%sT 1946 -6", "-6 Perry C%sT 1964_3_26_2 -6", "-5 - EST 1969 -5", "-5 US E%sT 1971 -5", "-5 - EST 2006_3_2_2 -5", "-6 US C%sT"],"America/Indiana/Vevay": ["-5:40:16 - LMT 1883_10_18_12_19_44 -5:40:16", "-6 US C%sT 1954_3_25_2 -6", "-5 - EST 1969 -5", "-5 US E%sT 1973 -5", "-5 - EST 2006 -5", "-5 US E%sT"],"America/Indiana/Vincennes": ["-5:50:7 - LMT 1883_10_18_12_9_53 -5:50:7", "-6 US C%sT 1946 -6", "-6 Vincennes C%sT 1964_3_26_2 -6", "-5 - EST 1969 -5", "-5 US E%sT 1971 -5", "-5 - EST 2006_3_2_2 -5", "-6 US C%sT 2007_10_4_2 -5", "-5 US E%sT"],"America/Indiana/Winamac": ["-5:46:25 - LMT 1883_10_18_12_13_35 -5:46:25", "-6 US C%sT 1946 -6", "-6 Pulaski C%sT 1961_3_30_2 -6", "-5 - EST 1969 -5", "-5 US E%sT 1971 -5", "-5 - EST 2006_3_2_2 -5", "-6 US C%sT 2007_2_11_2 -6", "-5 US E%sT"],"America/Inuvik": ["0 - zzz 1953", "-8 NT_YK P%sT 1979_3_29_2 -8", "-7 NT_YK M%sT 1980 -7", "-7 Canada M%sT"],"America/Iqaluit": ["0 - zzz 1942_7", "-5 NT_YK E%sT 1999_9_31_2 -4", "-6 Canada C%sT 2000_9_29_2 -5", "-5 Canada E%sT"],"America/Jamaica": ["-5:7:12 - LMT 1890 -5:7:12", "-5:7:12 - KMT 1912_1 -5:7:12", "-5 - EST 1974_3_28_2 -5", "-5 US E%sT 1984 -5", "-5 - EST"],"America/Juneau": ["15:2:19 - LMT 1867_9_18 15:2:19", "-8:57:41 - LMT 1900_7_20_12 -8:57:41", "-8 - PST 1942 -8", "-8 US P%sT 1946 -8", "-8 - PST 1969 -8", "-8 US P%sT 1980_3_27_2 -8", "-9 US Y%sT 1980_9_26_2 -8", "-8 US P%sT 1983_9_30_2 -7", "-9 US Y%sT 1983_10_30 -9", "-9 US AK%sT"],"America/Kentucky/Louisville": ["-5:43:2 - LMT 1883_10_18_12_16_58 -5:43:2", "-6 US C%sT 1921 -6", "-6 Louisville C%sT 1942 -6", "-6 US C%sT 1946 -6", "-6 Louisville C%sT 1961_6_23_2 -5", "-5 - EST 1968 -5", "-5 US E%sT 1974_0_6_2 -5", "-5 - CDT 1974_9_27_2 -5", "-5 US E%sT"],"America/Kentucky/Monticello": ["-5:39:24 - LMT 1883_10_18_12_20_36 -5:39:24", "-6 US C%sT 1946 -6", "-6 - CST 1968 -6", "-6 US C%sT 2000_9_29_2 -5", "-5 US E%sT"],"America/La_Paz": ["-4:32:36 - LMT 1890 -4:32:36", "-4:32:36 - CMT 1931_9_15 -4:32:36", "-3:32:36 - BOST 1932_2_21 -3:32:36", "-4 - BOT"],"America/Lima": ["-5:8:12 - LMT 1890 -5:8:12", "-5:8:36 - LMT 1908_6_28 -5:8:36", "-5 Peru PE%sT"],"America/Los_Angeles": ["-7:52:58 - LMT 1883_10_18_12_7_2 -7:52:58", "-8 US P%sT 1946 -8", "-8 CA P%sT 1967 -8", "-8 US P%sT"],"America/Maceio": ["-2:22:52 - LMT 1914 -2:22:52", "-3 Brazil BR%sT 1990_8_17 -3", "-3 - BRT 1995_9_13 -3", "-3 Brazil BR%sT 1996_8_4 -3", "-3 - BRT 1999_8_30 -3", "-3 Brazil BR%sT 2000_9_22 -2", "-3 - BRT 2001_8_13 -3", "-3 Brazil BR%sT 2002_9_1 -3", "-3 - BRT"],"America/Managua": ["-5:45:8 - LMT 1890 -5:45:8", "-5:45:12 - MMT 1934_5_23 -5:45:12", "-6 - CST 1973_4 -6", "-5 - EST 1975_1_16 -5", "-6 Nic C%sT 1992_0_1_4 -6", "-5 - EST 1992_8_24 -5", "-6 - CST 1993 -6", "-5 - EST 1997 -5", "-6 Nic C%sT"],"America/Manaus": ["-4:0:4 - LMT 1914 -4:0:4", "-4 Brazil AM%sT 1988_8_12 -4", "-4 - AMT 1993_8_28 -4", "-4 Brazil AM%sT 1994_8_22 -4", "-4 - AMT"],"America/Martinique": ["-4:4:20 - LMT 1890 -4:4:20", "-4:4:20 - FFMT 1911_4 -4:4:20", "-4 - AST 1980_3_6 -4", "-3 - ADT 1980_8_28 -3", "-4 - AST"],"America/Matamoros": ["-6:40 - LMT 1921_11_31_23_20 -6:40", "-6 - CST 1988 -6", "-6 US C%sT 1989 -6", "-6 Mexico C%sT 2010 -6", "-6 US C%sT"],"America/Mazatlan": ["-7:5:40 - LMT 1921_11_31_23_54_20 -7:5:40", "-7 - MST 1927_5_10_23 -7", "-6 - CST 1930_10_15 -6", "-7 - MST 1931_4_1_23 -7", "-6 - CST 1931_9 -6", "-7 - MST 1932_3_1 -7", "-6 - CST 1942_3_24 -6", "-7 - MST 1949_0_14 -7", "-8 - PST 1970 -8", "-7 Mexico M%sT"],"America/Menominee": ["-5:50:27 - LMT 1885_8_18_12 -5:50:27", "-6 US C%sT 1946 -6", "-6 Menominee C%sT 1969_3_27_2 -6", "-5 - EST 1973_3_29_2 -5", "-6 US C%sT"],"America/Merida": ["-5:58:28 - LMT 1922_0_1_0_1_32 -5:58:28", "-6 - CST 1981_11_23 -6", "-5 - EST 1982_11_2 -5", "-6 Mexico C%sT"],"America/Metlakatla": ["15:13:42 - LMT 1867_9_18 15:13:42", "-8:46:18 - LMT 1900_7_20_12 -8:46:18", "-8 - PST 1942 -8", "-8 US P%sT 1946 -8", "-8 - PST 1969 -8", "-8 US P%sT 1983_9_30_2 -7", "-8 - MeST"],"America/Mexico_City": ["-6:36:36 - LMT 1922_0_1_0_23_24 -6:36:36", "-7 - MST 1927_5_10_23 -7", "-6 - CST 1930_10_15 -6", "-7 - MST 1931_4_1_23 -7", "-6 - CST 1931_9 -6", "-7 - MST 1932_3_1 -7", "-6 Mexico C%sT 2001_8_30_02 -5", "-6 - CST 2002_1_20 -6", "-6 Mexico C%sT"],"America/Miquelon": ["-3:44:40 - LMT 1911_4_15 -3:44:40", "-4 - AST 1980_4 -4", "-3 - PMST 1987 -3", "-3 Canada PM%sT"],"America/Moncton": ["-4:19:8 - LMT 1883_11_9 -4:19:8", "-5 - EST 1902_5_15 -5", "-4 Canada A%sT 1933 -4", "-4 Moncton A%sT 1942 -4", "-4 Canada A%sT 1946 -4", "-4 Moncton A%sT 1973 -4", "-4 Canada A%sT 1993 -4", "-4 Moncton A%sT 2007 -4", "-4 Canada A%sT"],"America/Monterrey": ["-6:41:16 - LMT 1921_11_31_23_18_44 -6:41:16", "-6 - CST 1988 -6", "-6 US C%sT 1989 -6", "-6 Mexico C%sT"],"America/Montevideo": ["-3:44:44 - LMT 1898_5_28 -3:44:44", "-3:44:44 - MMT 1920_4_1 -3:44:44", "-3:30 Uruguay UY%sT 1942_11_14 -3:30", "-3 Uruguay UY%sT"],"America/Montreal": ["-4:54:16 - LMT 1884 -4:54:16", "-5 Mont E%sT 1918 -5", "-5 Canada E%sT 1919 -5", "-5 Mont E%sT 1942_1_9_2 -5", "-5 Canada E%sT 1946 -5", "-5 Mont E%sT 1974 -5", "-5 Canada E%sT"],"America/Montserrat": ["-4:8:52 - LMT 1911_6_1_0_1 -4:8:52", "-4 - AST"],"America/Nassau": ["-5:9:30 - LMT 1912_2_2 -5:9:30", "-5 Bahamas E%sT 1976 -5", "-5 US E%sT"],"America/New_York": ["-4:56:2 - LMT 1883_10_18_12_3_58 -4:56:2", "-5 US E%sT 1920 -5", "-5 NYC E%sT 1942 -5", "-5 US E%sT 1946 -5", "-5 NYC E%sT 1967 -5", "-5 US E%sT"],"America/Nipigon": ["-5:53:4 - LMT 1895 -5:53:4", "-5 Canada E%sT 1940_8_29 -5", "-4 - EDT 1942_1_9_2 -5", "-5 Canada E%sT"],"America/Nome": ["12:58:21 - LMT 1867_9_18 12:58:21", "-11:1:38 - LMT 1900_7_20_12 -11:1:38", "-11 - NST 1942 -11", "-11 US N%sT 1946 -11", "-11 - NST 1967_3 -11", "-11 - BST 1969 -11", "-11 US B%sT 1983_9_30_2 -10", "-9 US Y%sT 1983_10_30 -9", "-9 US AK%sT"],"America/Noronha": ["-2:9:40 - LMT 1914 -2:9:40", "-2 Brazil FN%sT 1990_8_17 -2", "-2 - FNT 1999_8_30 -2", "-2 Brazil FN%sT 2000_9_15 -1", "-2 - FNT 2001_8_13 -2", "-2 Brazil FN%sT 2002_9_1 -2", "-2 - FNT"],"America/North_Dakota/Beulah": ["-6:47:7 - LMT 1883_10_18_12_12_53 -6:47:7", "-7 US M%sT 2010_10_7_2 -6", "-6 US C%sT"],"America/North_Dakota/Center": ["-6:45:12 - LMT 1883_10_18_12_14_48 -6:45:12", "-7 US M%sT 1992_9_25_02 -6", "-6 US C%sT"],"America/North_Dakota/New_Salem": ["-6:45:39 - LMT 1883_10_18_12_14_21 -6:45:39", "-7 US M%sT 2003_9_26_02 -6", "-6 US C%sT"],"America/Ojinaga": ["-6:57:40 - LMT 1922_0_1_0_2_20 -6:57:40", "-7 - MST 1927_5_10_23 -7", "-6 - CST 1930_10_15 -6", "-7 - MST 1931_4_1_23 -7", "-6 - CST 1931_9 -6", "-7 - MST 1932_3_1 -7", "-6 - CST 1996 -6", "-6 Mexico C%sT 1998 -6", "-6 - CST 1998_3_5_3 -6", "-7 Mexico M%sT 2010 -7", "-7 US M%sT"],"America/Panama": ["-5:18:8 - LMT 1890 -5:18:8", "-5:19:36 - CMT 1908_3_22 -5:19:36", "-5 - EST"],"America/Pangnirtung": ["0 - zzz 1921", "-4 NT_YK A%sT 1995_3_2_2 -4", "-5 Canada E%sT 1999_9_31_2 -4", "-6 Canada C%sT 2000_9_29_2 -5", "-5 Canada E%sT"],"America/Paramaribo": ["-3:40:40 - LMT 1911 -3:40:40", "-3:40:52 - PMT 1935 -3:40:52", "-3:40:36 - PMT 1945_9 -3:40:36", "-3:30 - NEGT 1975_10_20 -3:30", "-3:30 - SRT 1984_9 -3:30", "-3 - SRT"],"America/Phoenix": ["-7:28:18 - LMT 1883_10_18_11_31_42 -7:28:18", "-7 US M%sT 1944_0_1_00_1 -6", "-7 - MST 1944_3_1_00_1 -7", "-7 US M%sT 1944_9_1_00_1 -6", "-7 - MST 1967 -7", "-7 US M%sT 1968_2_21 -7", "-7 - MST"],"America/Port-au-Prince": ["-4:49:20 - LMT 1890 -4:49:20", "-4:49 - PPMT 1917_0_24_12 -4:49", "-5 Haiti E%sT"],"America/Port_of_Spain": ["-4:6:4 - LMT 1912_2_2 -4:6:4", "-4 - AST"],"America/Porto_Velho": ["-4:15:36 - LMT 1914 -4:15:36", "-4 Brazil AM%sT 1988_8_12 -4", "-4 - AMT"],"America/Puerto_Rico": ["-4:24:25 - LMT 1899_2_28_12 -4:24:25", "-4 - AST 1942_4_3 -4", "-4 US A%sT 1946 -4", "-4 - AST"],"America/Rainy_River": ["-6:18:16 - LMT 1895 -6:18:16", "-6 Canada C%sT 1940_8_29 -6", "-5 - CDT 1942_1_9_2 -6", "-6 Canada C%sT"],"America/Rankin_Inlet": ["0 - zzz 1957", "-6 NT_YK C%sT 2000_9_29_2 -5", "-5 - EST 2001_3_1_3 -5", "-6 Canada C%sT"],"America/Recife": ["-2:19:36 - LMT 1914 -2:19:36", "-3 Brazil BR%sT 1990_8_17 -3", "-3 - BRT 1999_8_30 -3", "-3 Brazil BR%sT 2000_9_15 -2", "-3 - BRT 2001_8_13 -3", "-3 Brazil BR%sT 2002_9_1 -3", "-3 - BRT"],"America/Regina": ["-6:58:36 - LMT 1905_8 -6:58:36", "-7 Regina M%sT 1960_3_24_2 -7", "-6 - CST"],"America/Resolute": ["0 - zzz 1947_7_31", "-6 NT_YK C%sT 2000_9_29_2 -5", "-5 - EST 2001_3_1_3 -5", "-6 Canada C%sT 2006_9_29_2 -5", "-5 - EST 2007_2_11_3 -5", "-6 Canada C%sT"],"America/Rio_Branco": ["-4:31:12 - LMT 1914 -4:31:12", "-5 Brazil AC%sT 1988_8_12 -5", "-5 - ACT 2008_5_24_00 -5", "-4 - AMT"],"America/Santa_Isabel": ["-7:39:28 - LMT 1922_0_1_0_20_32 -7:39:28", "-7 - MST 1924 -7", "-8 - PST 1927_5_10_23 -8", "-7 - MST 1930_10_15 -7", "-8 - PST 1931_3_1 -8", "-7 - PDT 1931_8_30 -7", "-8 - PST 1942_3_24 -8", "-7 - PWT 1945_7_14_23", "-7 - PPT 1945_10_12 -7", "-8 - PST 1948_3_5 -8", "-7 - PDT 1949_0_14 -7", "-8 - PST 1954 -8", "-8 CA P%sT 1961 -8", "-8 - PST 1976 -8", "-8 US P%sT 1996 -8", "-8 Mexico P%sT 2001 -8", "-8 US P%sT 2002_1_20 -8", "-8 Mexico P%sT"],"America/Santarem": ["-3:38:48 - LMT 1914 -3:38:48", "-4 Brazil AM%sT 1988_8_12 -4", "-4 - AMT 2008_5_24_00 -4", "-3 - BRT"],"America/Santiago": ["-4:42:46 - LMT 1890 -4:42:46", "-4:42:46 - SMT 1910 -4:42:46", "-5 - CLT 1916_6_1 -5", "-4:42:46 - SMT 1918_8_1 -4:42:46", "-4 - CLT 1919_6_1 -4", "-4:42:46 - SMT 1927_8_1 -4:42:46", "-5 Chile CL%sT 1947_4_22 -5", "-4 Chile CL%sT"],"America/Santo_Domingo": ["-4:39:36 - LMT 1890 -4:39:36", "-4:40 - SDMT 1933_3_1_12 -4:40", "-5 DR E%sT 1974_9_27 -5", "-4 - AST 2000_9_29_02 -4", "-5 US E%sT 2000_11_3_01 -5", "-4 - AST"],"America/Sao_Paulo": ["-3:6:28 - LMT 1914 -3:6:28", "-3 Brazil BR%sT 1963_9_23_00 -3", "-2 - BRST 1964 -2", "-3 Brazil BR%sT"],"America/Scoresbysund": ["-1:27:52 - LMT 1916_6_28 -1:27:52", "-2 - CGT 1980_3_6_2 -2", "-2 C-Eur CG%sT 1981_2_29 -2", "-1 EU EG%sT"],"America/Sitka": ["14:58:47 - LMT 1867_9_18 14:58:47", "-9:1:13 - LMT 1900_7_20_12 -9:1:13", "-8 - PST 1942 -8", "-8 US P%sT 1946 -8", "-8 - PST 1969 -8", "-8 US P%sT 1983_9_30_2 -7", "-9 US Y%sT 1983_10_30 -9", "-9 US AK%sT"],"America/St_Johns": ["-3:30:52 - LMT 1884 -3:30:52", "-3:30:52 StJohns N%sT 1918 -3:30:52", "-3:30:52 Canada N%sT 1919 -3:30:52", "-3:30:52 StJohns N%sT 1935_2_30 -3:30:52", "-3:30 StJohns N%sT 1942_4_11 -3:30", "-3:30 Canada N%sT 1946 -3:30", "-3:30 StJohns N%sT 2011_10 -2:30", "-3:30 Canada N%sT"],"America/St_Kitts": ["-4:10:52 - LMT 1912_2_2 -4:10:52", "-4 - AST"],"America/St_Lucia": ["-4:4 - LMT 1890 -4:4", "-4:4 - CMT 1912 -4:4", "-4 - AST"],"America/St_Thomas": ["-4:19:44 - LMT 1911_6 -4:19:44", "-4 - AST"],"America/St_Vincent": ["-4:4:56 - LMT 1890 -4:4:56", "-4:4:56 - KMT 1912 -4:4:56", "-4 - AST"],"America/Swift_Current": ["-7:11:20 - LMT 1905_8 -7:11:20", "-7 Canada M%sT 1946_3_28_2 -7", "-7 Regina M%sT 1950 -7", "-7 Swift M%sT 1972_3_30_2 -7", "-6 - CST"],"America/Tegucigalpa": ["-5:48:52 - LMT 1921_3 -5:48:52", "-6 Hond C%sT"],"America/Thule": ["-4:35:8 - LMT 1916_6_28 -4:35:8", "-4 Thule A%sT"],"America/Thunder_Bay": ["-5:57 - LMT 1895 -5:57", "-6 - CST 1910 -6", "-5 - EST 1942 -5", "-5 Canada E%sT 1970 -5", "-5 Mont E%sT 1973 -5", "-5 - EST 1974 -5", "-5 Canada E%sT"],"America/Tijuana": ["-7:48:4 - LMT 1922_0_1_0_11_56 -7:48:4", "-7 - MST 1924 -7", "-8 - PST 1927_5_10_23 -8", "-7 - MST 1930_10_15 -7", "-8 - PST 1931_3_1 -8", "-7 - PDT 1931_8_30 -7", "-8 - PST 1942_3_24 -8", "-7 - PWT 1945_7_14_23", "-7 - PPT 1945_10_12 -7", "-8 - PST 1948_3_5 -8", "-7 - PDT 1949_0_14 -7", "-8 - PST 1954 -8", "-8 CA P%sT 1961 -8", "-8 - PST 1976 -8", "-8 US P%sT 1996 -8", "-8 Mexico P%sT 2001 -8", "-8 US P%sT 2002_1_20 -8", "-8 Mexico P%sT 2010 -8", "-8 US P%sT"],"America/Toronto": ["-5:17:32 - LMT 1895 -5:17:32", "-5 Canada E%sT 1919 -5", "-5 Toronto E%sT 1942_1_9_2 -5", "-5 Canada E%sT 1946 -5", "-5 Toronto E%sT 1974 -5", "-5 Canada E%sT"],"America/Tortola": ["-4:18:28 - LMT 1911_6 -4:18:28", "-4 - AST"],"America/Vancouver": ["-8:12:28 - LMT 1884 -8:12:28", "-8 Vanc P%sT 1987 -8", "-8 Canada P%sT"],"America/Whitehorse": ["-9:0:12 - LMT 1900_7_20 -9:0:12", "-9 NT_YK Y%sT 1966_6_1_2 -9", "-8 NT_YK P%sT 1980 -8", "-8 Canada P%sT"],"America/Winnipeg": ["-6:28:36 - LMT 1887_6_16 -6:28:36", "-6 Winn C%sT 2006 -6", "-6 Canada C%sT"],"America/Yakutat": ["14:41:5 - LMT 1867_9_18 14:41:5", "-9:18:55 - LMT 1900_7_20_12 -9:18:55", "-9 - YST 1942 -9", "-9 US Y%sT 1946 -9", "-9 - YST 1969 -9", "-9 US Y%sT 1983_10_30 -9", "-9 US AK%sT"],"America/Yellowknife": ["0 - zzz 1935", "-7 NT_YK M%sT 1980 -7", "-7 Canada M%sT"],"Antarctica/Casey": ["0 - zzz 1969", "8 - WST 2009_9_18_2 8", "11 - CAST 2010_2_5_2 11", "8 - WST 2011_9_28_2 8", "11 - CAST 2012_1_21_17", "8 - WST"],"Antarctica/Davis": ["0 - zzz 1957_0_13", "7 - DAVT 1964_10 7", "0 - zzz 1969_1", "7 - DAVT 2009_9_18_2 7", "5 - DAVT 2010_2_10_20", "7 - DAVT 2011_9_28_2 7", "5 - DAVT 2012_1_21_20", "7 - DAVT"],"Antarctica/DumontDUrville": ["0 - zzz 1947", "10 - PMT 1952_0_14 10", "0 - zzz 1956_10", "10 - DDUT"],"Antarctica/Macquarie": ["0 - zzz 1899_10", "10 - EST 1916_9_1_2 10", "11 - EST 1917_1 11", "10 Aus EST 1919_3 10", "0 - zzz 1948_2_25", "10 Aus EST 1967 10", "10 AT EST 2010_3_4_3 11", "11 - MIST"],"Antarctica/Mawson": ["0 - zzz 1954_1_13", "6 - MAWT 2009_9_18_2 6", "5 - MAWT"],"Antarctica/McMurdo": ["0 - zzz 1956", "12 NZAQ NZ%sT"],"Antarctica/Palmer": ["0 - zzz 1965", "-4 ArgAQ AR%sT 1969_9_5 -4", "-3 ArgAQ AR%sT 1982_4 -3", "-4 ChileAQ CL%sT"],"Antarctica/Rothera": ["0 - zzz 1976_11_1", "-3 - ROTT"],"Antarctica/Syowa": ["0 - zzz 1957_0_29", "3 - SYOT"],"Antarctica/Vostok": ["0 - zzz 1957_11_16", "6 - VOST"],"Europe/Oslo": ["0:43 - LMT 1895_0_1 0:43", "1 Norway CE%sT 1940_7_10_23 1", "1 C-Eur CE%sT 1945_3_2_2 1", "1 Norway CE%sT 1980 1", "1 EU CE%sT"],"Asia/Aden": ["2:59:54 - LMT 1950 2:59:54", "3 - AST"],"Asia/Almaty": ["5:7:48 - LMT 1924_4_2 5:7:48", "5 - ALMT 1930_5_21 5", "6 RussiaAsia ALM%sT 1991 6", "6 - ALMT 1992 6", "6 RussiaAsia ALM%sT 2005_2_15 6", "6 - ALMT"],"Asia/Amman": ["2:23:44 - LMT 1931 2:23:44", "2 Jordan EE%sT"],"Asia/Anadyr": ["11:49:56 - LMT 1924_4_2 11:49:56", "12 - ANAT 1930_5_21 12", "13 Russia ANA%sT 1982_3_1_0 13", "12 Russia ANA%sT 1991_2_31_2 12", "11 Russia ANA%sT 1992_0_19_2 11", "12 Russia ANA%sT 2010_2_28_2 12", "11 Russia ANA%sT 2011_2_27_2 11", "12 - ANAT"],"Asia/Aqtau": ["3:21:4 - LMT 1924_4_2 3:21:4", "4 - FORT 1930_5_21 4", "5 - FORT 1963 5", "5 - SHET 1981_9_1 5", "6 - SHET 1982_3_1 6", "5 RussiaAsia SHE%sT 1991 5", "5 - SHET 1991_11_16 5", "5 RussiaAsia AQT%sT 1995_2_26_2 5", "4 RussiaAsia AQT%sT 2005_2_15 4", "5 - AQTT"],"Asia/Aqtobe": ["3:48:40 - LMT 1924_4_2 3:48:40", "4 - AKTT 1930_5_21 4", "5 - AKTT 1981_3_1 5", "6 - AKTST 1981_9_1 6", "6 - AKTT 1982_3_1 6", "5 RussiaAsia AKT%sT 1991 5", "5 - AKTT 1991_11_16 5", "5 RussiaAsia AQT%sT 2005_2_15 5", "5 - AQTT"],"Asia/Ashgabat": ["3:53:32 - LMT 1924_4_2 3:53:32", "4 - ASHT 1930_5_21 4", "5 RussiaAsia ASH%sT 1991_2_31_2 5", "4 RussiaAsia ASH%sT 1991_9_27 4", "4 RussiaAsia TM%sT 1992_0_19_2 4", "5 - TMT"],"Asia/Baghdad": ["2:57:40 - LMT 1890 2:57:40", "2:57:36 - BMT 1918 2:57:36", "3 - AST 1982_4 3", "3 Iraq A%sT"],"Asia/Bahrain": ["3:22:20 - LMT 1920 3:22:20", "4 - GST 1972_5 4", "3 - AST"],"Asia/Baku": ["3:19:24 - LMT 1924_4_2 3:19:24", "3 - BAKT 1957_2 3", "4 RussiaAsia BAK%sT 1991_2_31_2 4", "4 - BAKST 1991_7_30 4", "3 RussiaAsia AZ%sT 1992_8_26_23 4", "4 - AZT 1996 4", "4 EUAsia AZ%sT 1997 4", "4 Azer AZ%sT"],"Asia/Bangkok": ["6:42:4 - LMT 1880 6:42:4", "6:42:4 - BMT 1920_3 6:42:4", "7 - ICT"],"Asia/Beirut": ["2:22 - LMT 1880 2:22", "2 Lebanon EE%sT"],"Asia/Bishkek": ["4:58:24 - LMT 1924_4_2 4:58:24", "5 - FRUT 1930_5_21 5", "6 RussiaAsia FRU%sT 1991_2_31_2 6", "6 - FRUST 1991_7_31_2 6", "5 Kyrgyz KG%sT 2005_7_12 6", "6 - KGT"],"Asia/Brunei": ["7:39:40 - LMT 1926_2 7:39:40", "7:30 - BNT 1933 7:30", "8 - BNT"],"Asia/Choibalsan": ["7:38 - LMT 1905_7 7:38", "7 - ULAT 1978 7", "8 - ULAT 1983_3 8", "9 Mongol CHO%sT 2008_2_31 9", "8 Mongol CHO%sT"],"Asia/Chongqing": ["7:6:20 - LMT 1928 7:6:20", "7 - LONT 1980_4 7", "8 PRC C%sT"],"Asia/Colombo": ["5:19:24 - LMT 1880 5:19:24", "5:19:32 - MMT 1906 5:19:32", "5:30 - IST 1942_0_5 5:30", "6 - IHST 1942_8 6", "6:30 - IST 1945_9_16_2 6:30", "5:30 - IST 1996_4_25_0 5:30", "6:30 - LKT 1996_9_26_0_30 6:30", "6 - LKT 2006_3_15_0_30 6", "5:30 - IST"],"Asia/Damascus": ["2:25:12 - LMT 1920 2:25:12", "2 Syria EE%sT"],"Asia/Dhaka": ["6:1:40 - LMT 1890 6:1:40", "5:53:20 - HMT 1941_9 5:53:20", "6:30 - BURT 1942_4_15 6:30", "5:30 - IST 1942_8 5:30", "6:30 - BURT 1951_8_30 6:30", "6 - DACT 1971_2_26 6", "6 - BDT 2009 6", "6 Dhaka BD%sT"],"Asia/Dili": ["8:22:20 - LMT 1912 8:22:20", "8 - TLT 1942_1_21_23 8", "9 - JST 1945_8_23 9", "9 - TLT 1976_4_3 9", "8 - CIT 2000_8_17_00 8", "9 - TLT"],"Asia/Dubai": ["3:41:12 - LMT 1920 3:41:12", "4 - GST"],"Asia/Dushanbe": ["4:35:12 - LMT 1924_4_2 4:35:12", "5 - DUST 1930_5_21 5", "6 RussiaAsia DUS%sT 1991_2_31_2 6", "6 - DUSST 1991_8_9_2 5", "5 - TJT"],"Asia/Gaza": ["2:17:52 - LMT 1900_9 2:17:52", "2 Zion EET 1948_4_15 2", "2 EgyptAsia EE%sT 1967_5_5 3", "2 Zion I%sT 1996 2", "2 Jordan EE%sT 1999 2", "2 Palestine EE%sT 2008_7_29_0 3", "2 - EET 2008_8 2", "2 Palestine EE%sT 2010 2", "2 - EET 2010_2_27_0_1 2", "2 Palestine EE%sT 2011_7_1 3", "2 - EET 2012 2", "2 Palestine EE%sT"],"Asia/Harbin": ["8:26:44 - LMT 1928 8:26:44", "8:30 - CHAT 1932_2 8:30", "8 - CST 1940 8", "9 - CHAT 1966_4 9", "8:30 - CHAT 1980_4 8:30", "8 PRC C%sT"],"Asia/Hebron": ["2:20:23 - LMT 1900_9 2:20:23", "2 Zion EET 1948_4_15 2", "2 EgyptAsia EE%sT 1967_5_5 3", "2 Zion I%sT 1996 2", "2 Jordan EE%sT 1999 2", "2 Palestine EE%sT"],"Asia/Ho_Chi_Minh": ["7:6:40 - LMT 1906_5_9 7:6:40", "7:6:20 - SMT 1911_2_11_0_1 7:6:20", "7 - ICT 1912_4 7", "8 - ICT 1931_4 8", "7 - ICT"],"Asia/Hong_Kong": ["7:36:42 - LMT 1904_9_30 7:36:42", "8 HK HK%sT 1941_11_25 8", "9 - JST 1945_8_15 9", "8 HK HK%sT"],"Asia/Hovd": ["6:6:36 - LMT 1905_7 6:6:36", "6 - HOVT 1978 6", "7 Mongol HOV%sT"],"Asia/Irkutsk": ["6:57:20 - LMT 1880 6:57:20", "6:57:20 - IMT 1920_0_25 6:57:20", "7 - IRKT 1930_5_21 7", "8 Russia IRK%sT 1991_2_31_2 8", "7 Russia IRK%sT 1992_0_19_2 7", "8 Russia IRK%sT 2011_2_27_2 8", "9 - IRKT"],"Asia/Jakarta": ["7:7:12 - LMT 1867_7_10 7:7:12", "7:7:12 - JMT 1923_11_31_23_47_12 7:7:12", "7:20 - JAVT 1932_10 7:20", "7:30 - WIT 1942_2_23 7:30", "9 - JST 1945_8_23 9", "7:30 - WIT 1948_4 7:30", "8 - WIT 1950_4 8", "7:30 - WIT 1964 7:30", "7 - WIT"],"Asia/Jayapura": ["9:22:48 - LMT 1932_10 9:22:48", "9 - EIT 1944_8_1 9", "9:30 - CST 1964 9:30", "9 - EIT"],"Asia/Jerusalem": ["2:20:56 - LMT 1880 2:20:56", "2:20:40 - JMT 1918 2:20:40", "2 Zion I%sT"],"Asia/Kabul": ["4:36:48 - LMT 1890 4:36:48", "4 - AFT 1945 4", "4:30 - AFT"],"Asia/Kamchatka": ["10:34:36 - LMT 1922_10_10 10:34:36", "11 - PETT 1930_5_21 11", "12 Russia PET%sT 1991_2_31_2 12", "11 Russia PET%sT 1992_0_19_2 11", "12 Russia PET%sT 2010_2_28_2 12", "11 Russia PET%sT 2011_2_27_2 11", "12 - PETT"],"Asia/Karachi": ["4:28:12 - LMT 1907 4:28:12", "5:30 - IST 1942_8 5:30", "6:30 - IST 1945_9_15 6:30", "5:30 - IST 1951_8_30 5:30", "5 - KART 1971_2_26 5", "5 Pakistan PK%sT"],"Asia/Kashgar": ["5:3:56 - LMT 1928 5:3:56", "5:30 - KAST 1940 5:30", "5 - KAST 1980_4 5", "8 PRC C%sT"],"Asia/Kathmandu": ["5:41:16 - LMT 1920 5:41:16", "5:30 - IST 1986 5:30", "5:45 - NPT"],"Asia/Khandyga": ["9:2:13 - LMT 1919_11_15 9:2:13", "8 - YAKT 1930_5_21 8", "9 Russia YAK%sT 1991_2_31_2 9", "8 Russia YAK%sT 1992_0_19_2 8", "9 Russia YAK%sT 2004 9", "10 Russia VLA%sT 2011_2_27_2 10", "11 - VLAT 2011_8_13_0 11", "10 - YAKT"],"Asia/Kolkata": ["5:53:28 - LMT 1880 5:53:28", "5:53:20 - HMT 1941_9 5:53:20", "6:30 - BURT 1942_4_15 6:30", "5:30 - IST 1942_8 5:30", "6:30 - IST 1945_9_15 6:30", "5:30 - IST"],"Asia/Krasnoyarsk": ["6:11:20 - LMT 1920_0_6 6:11:20", "6 - KRAT 1930_5_21 6", "7 Russia KRA%sT 1991_2_31_2 7", "6 Russia KRA%sT 1992_0_19_2 6", "7 Russia KRA%sT 2011_2_27_2 7", "8 - KRAT"],"Asia/Kuala_Lumpur": ["6:46:46 - LMT 1901_0_1 6:46:46", "6:55:25 - SMT 1905_5_1 6:55:25", "7 - MALT 1933_0_1 7", "7:20 - MALST 1936_0_1 7:20", "7:20 - MALT 1941_8_1 7:20", "7:30 - MALT 1942_1_16 7:30", "9 - JST 1945_8_12 9", "7:30 - MALT 1982_0_1 7:30", "8 - MYT"],"Asia/Kuching": ["7:21:20 - LMT 1926_2 7:21:20", "7:30 - BORT 1933 7:30", "8 NBorneo BOR%sT 1942_1_16 8", "9 - JST 1945_8_12 9", "8 - BORT 1982_0_1 8", "8 - MYT"],"Asia/Kuwait": ["3:11:56 - LMT 1950 3:11:56", "3 - AST"],"Asia/Macau": ["7:34:20 - LMT 1912 7:34:20", "8 Macau MO%sT 1999_11_20 8", "8 PRC C%sT"],"Asia/Magadan": ["10:3:12 - LMT 1924_4_2 10:3:12", "10 - MAGT 1930_5_21 10", "11 Russia MAG%sT 1991_2_31_2 11", "10 Russia MAG%sT 1992_0_19_2 10", "11 Russia MAG%sT 2011_2_27_2 11", "12 - MAGT"],"Asia/Makassar": ["7:57:36 - LMT 1920 7:57:36", "7:57:36 - MMT 1932_10 7:57:36", "8 - CIT 1942_1_9 8", "9 - JST 1945_8_23 9", "8 - CIT"],"Asia/Manila": ["-15:56 - LMT 1844_11_31 -15:56", "8:4 - LMT 1899_4_11 8:4", "8 Phil PH%sT 1942_4 8", "9 - JST 1944_10 9", "8 Phil PH%sT"],"Asia/Muscat": ["3:54:24 - LMT 1920 3:54:24", "4 - GST"],"Asia/Nicosia": ["2:13:28 - LMT 1921_10_14 2:13:28", "2 Cyprus EE%sT 1998_8 3", "2 EUAsia EE%sT"],"Asia/Novokuznetsk": ["5:48:48 - NMT 1920_0_6 5:48:48", "6 - KRAT 1930_5_21 6", "7 Russia KRA%sT 1991_2_31_2 7", "6 Russia KRA%sT 1992_0_19_2 6", "7 Russia KRA%sT 2010_2_28_2 7", "6 Russia NOV%sT 2011_2_27_2 6", "7 - NOVT"],"Asia/Novosibirsk": ["5:31:40 - LMT 1919_11_14_6 5:31:40", "6 - NOVT 1930_5_21 6", "7 Russia NOV%sT 1991_2_31_2 7", "6 Russia NOV%sT 1992_0_19_2 6", "7 Russia NOV%sT 1993_4_23 8", "6 Russia NOV%sT 2011_2_27_2 6", "7 - NOVT"],"Asia/Omsk": ["4:53:36 - LMT 1919_10_14 4:53:36", "5 - OMST 1930_5_21 5", "6 Russia OMS%sT 1991_2_31_2 6", "5 Russia OMS%sT 1992_0_19_2 5", "6 Russia OMS%sT 2011_2_27_2 6", "7 - OMST"],"Asia/Oral": ["3:25:24 - LMT 1924_4_2 3:25:24", "4 - URAT 1930_5_21 4", "5 - URAT 1981_3_1 5", "6 - URAST 1981_9_1 6", "6 - URAT 1982_3_1 6", "5 RussiaAsia URA%sT 1989_2_26_2 5", "4 RussiaAsia URA%sT 1991 4", "4 - URAT 1991_11_16 4", "4 RussiaAsia ORA%sT 2005_2_15 4", "5 - ORAT"],"Asia/Phnom_Penh": ["6:59:40 - LMT 1906_5_9 6:59:40", "7:6:20 - SMT 1911_2_11_0_1 7:6:20", "7 - ICT 1912_4 7", "8 - ICT 1931_4 8", "7 - ICT"],"Asia/Pontianak": ["7:17:20 - LMT 1908_4 7:17:20", "7:17:20 - PMT 1932_10 7:17:20", "7:30 - WIT 1942_0_29 7:30", "9 - JST 1945_8_23 9", "7:30 - WIT 1948_4 7:30", "8 - WIT 1950_4 8", "7:30 - WIT 1964 7:30", "8 - CIT 1988_0_1 8", "7 - WIT"],"Asia/Pyongyang": ["8:23 - LMT 1890 8:23", "8:30 - KST 1904_11 8:30", "9 - KST 1928 9", "8:30 - KST 1932 8:30", "9 - KST 1954_2_21 9", "8 - KST 1961_7_10 8", "9 - KST"],"Asia/Qatar": ["3:26:8 - LMT 1920 3:26:8", "4 - GST 1972_5 4", "3 - AST"],"Asia/Qyzylorda": ["4:21:52 - LMT 1924_4_2 4:21:52", "4 - KIZT 1930_5_21 4", "5 - KIZT 1981_3_1 5", "6 - KIZST 1981_9_1 6", "6 - KIZT 1982_3_1 6", "5 RussiaAsia KIZ%sT 1991 5", "5 - KIZT 1991_11_16 5", "5 - QYZT 1992_0_19_2 5", "6 RussiaAsia QYZ%sT 2005_2_15 6", "6 - QYZT"],"Asia/Rangoon": ["6:24:40 - LMT 1880 6:24:40", "6:24:40 - RMT 1920 6:24:40", "6:30 - BURT 1942_4 6:30", "9 - JST 1945_4_3 9", "6:30 - MMT"],"Asia/Riyadh": ["3:6:52 - LMT 1950 3:6:52", "3 - AST"],"Asia/Sakhalin": ["9:30:48 - LMT 1905_7_23 9:30:48", "9 - CJT 1938 9", "9 - JST 1945_7_25 9", "11 Russia SAK%sT 1991_2_31_2 11", "10 Russia SAK%sT 1992_0_19_2 10", "11 Russia SAK%sT 1997_2_30_2 11", "10 Russia SAK%sT 2011_2_27_2 10", "11 - SAKT"],"Asia/Samarkand": ["4:27:12 - LMT 1924_4_2 4:27:12", "4 - SAMT 1930_5_21 4", "5 - SAMT 1981_3_1 5", "6 - SAMST 1981_9_1 6", "6 - TAST 1982_3_1 6", "5 RussiaAsia SAM%sT 1991_8_1 6", "5 RussiaAsia UZ%sT 1992 5", "5 - UZT"],"Asia/Seoul": ["8:27:52 - LMT 1890 8:27:52", "8:30 - KST 1904_11 8:30", "9 - KST 1928 9", "8:30 - KST 1932 8:30", "9 - KST 1954_2_21 9", "8 ROK K%sT 1961_7_10 8", "8:30 - KST 1968_9 8:30", "9 ROK K%sT"],"Asia/Shanghai": ["8:5:57 - LMT 1928 8:5:57", "8 Shang C%sT 1949 8", "8 PRC C%sT"],"Asia/Singapore": ["6:55:25 - LMT 1901_0_1 6:55:25", "6:55:25 - SMT 1905_5_1 6:55:25", "7 - MALT 1933_0_1 7", "7:20 - MALST 1936_0_1 7:20", "7:20 - MALT 1941_8_1 7:20", "7:30 - MALT 1942_1_16 7:30", "9 - JST 1945_8_12 9", "7:30 - MALT 1965_7_9 7:30", "7:30 - SGT 1982_0_1 7:30", "8 - SGT"],"Asia/Taipei": ["8:6 - LMT 1896 8:6", "8 Taiwan C%sT"],"Asia/Tashkent": ["4:37:12 - LMT 1924_4_2 4:37:12", "5 - TAST 1930_5_21 5", "6 RussiaAsia TAS%sT 1991_2_31_2 6", "5 RussiaAsia TAS%sT 1991_8_1 6", "5 RussiaAsia UZ%sT 1992 5", "5 - UZT"],"Asia/Tbilisi": ["2:59:16 - LMT 1880 2:59:16", "2:59:16 - TBMT 1924_4_2 2:59:16", "3 - TBIT 1957_2 3", "4 RussiaAsia TBI%sT 1991_2_31_2 4", "4 - TBIST 1991_3_9 4", "3 RussiaAsia GE%sT 1992 3", "3 E-EurAsia GE%sT 1994_8_25 4", "4 E-EurAsia GE%sT 1996_9_27 5", "5 - GEST 1997_2_30 5", "4 E-EurAsia GE%sT 2004_5_27 5", "3 RussiaAsia GE%sT 2005_2_27_2 3", "4 - GET"],"Asia/Tehran": ["3:25:44 - LMT 1916 3:25:44", "3:25:44 - TMT 1946 3:25:44", "3:30 - IRST 1977_10 3:30", "4 Iran IR%sT 1979 4", "3:30 Iran IR%sT"],"Asia/Thimphu": ["5:58:36 - LMT 1947_7_15 5:58:36", "5:30 - IST 1987_9 5:30", "6 - BTT"],"Asia/Tokyo": ["9:18:59 - LMT 1887_11_31_15", "9 - JST 1896 9", "9 - CJT 1938 9", "9 Japan J%sT"],"Asia/Ulaanbaatar": ["7:7:32 - LMT 1905_7 7:7:32", "7 - ULAT 1978 7", "8 Mongol ULA%sT"],"Asia/Urumqi": ["5:50:20 - LMT 1928 5:50:20", "6 - URUT 1980_4 6", "8 PRC C%sT"],"Asia/Ust-Nera": ["9:32:54 - LMT 1919_11_15 9:32:54", "8 - YAKT 1930_5_21 8", "9 Russia YAKT 1981_3_1 9", "11 Russia MAG%sT 1991_2_31_2 11", "10 Russia MAG%sT 1992_0_19_2 10", "11 Russia MAG%sT 2011_2_27_2 11", "12 - MAGT 2011_8_13_0 12", "11 - VLAT"],"Asia/Vientiane": ["6:50:24 - LMT 1906_5_9 6:50:24", "7:6:20 - SMT 1911_2_11_0_1 7:6:20", "7 - ICT 1912_4 7", "8 - ICT 1931_4 8", "7 - ICT"],"Asia/Vladivostok": ["8:47:44 - LMT 1922_10_15 8:47:44", "9 - VLAT 1930_5_21 9", "10 Russia VLA%sT 1991_2_31_2 10", "9 Russia VLA%sST 1992_0_19_2 9", "10 Russia VLA%sT 2011_2_27_2 10", "11 - VLAT"],"Asia/Yakutsk": ["8:38:40 - LMT 1919_11_15 8:38:40", "8 - YAKT 1930_5_21 8", "9 Russia YAK%sT 1991_2_31_2 9", "8 Russia YAK%sT 1992_0_19_2 8", "9 Russia YAK%sT 2011_2_27_2 9", "10 - YAKT"],"Asia/Yekaterinburg": ["4:2:24 - LMT 1919_6_15_4 4:2:24", "4 - SVET 1930_5_21 4", "5 Russia SVE%sT 1991_2_31_2 5", "4 Russia SVE%sT 1992_0_19_2 4", "5 Russia YEK%sT 2011_2_27_2 5", "6 - YEKT"],"Asia/Yerevan": ["2:58 - LMT 1924_4_2 2:58", "3 - YERT 1957_2 3", "4 RussiaAsia YER%sT 1991_2_31_2 4", "4 - YERST 1991_8_23 4", "3 RussiaAsia AM%sT 1995_8_24_2 3", "4 - AMT 1997 4", "4 RussiaAsia AM%sT 2012_2_25_2 4", "4 - AMT"],"Atlantic/Azores": ["-1:42:40 - LMT 1884 -1:42:40", "-1:54:32 - HMT 1911_4_24 -1:54:32", "-2 Port AZO%sT 1966_3_3_2 -2", "-1 Port AZO%sT 1983_8_25_1 -1", "-1 W-Eur AZO%sT 1992_8_27_1 -1", "0 EU WE%sT 1993_2_28_1", "-1 EU AZO%sT"],"Atlantic/Bermuda": ["-4:19:18 - LMT 1930_0_1_2 -4:19:18", "-4 - AST 1974_3_28_2 -4", "-4 Bahamas A%sT 1976 -4", "-4 US A%sT"],"Atlantic/Canary": ["-1:1:36 - LMT 1922_2 -1:1:36", "-1 - CANT 1946_8_30_1 -1", "0 - WET 1980_3_6_0", "1 - WEST 1980_8_28_0", "0 EU WE%sT"],"Atlantic/Cape_Verde": ["-1:34:4 - LMT 1907 -1:34:4", "-2 - CVT 1942_8 -2", "-1 - CVST 1945_9_15 -1", "-2 - CVT 1975_10_25_2 -2", "-1 - CVT"],"Atlantic/Faroe": ["-0:27:4 - LMT 1908_0_11 -0:27:4", "0 - WET 1981", "0 EU WE%sT"],"Atlantic/Madeira": ["-1:7:36 - LMT 1884 -1:7:36", "-1:7:36 - FMT 1911_4_24 -1:7:36", "-1 Port MAD%sT 1966_3_3_2 -1", "0 Port WE%sT 1983_8_25_1", "0 EU WE%sT"],"Atlantic/Reykjavik": ["-1:27:24 - LMT 1837 -1:27:24", "-1:27:48 - RMT 1908 -1:27:48", "-1 Iceland IS%sT 1968_3_7_1 -1", "0 - GMT"],"Atlantic/South_Georgia": ["-2:26:8 - LMT 1890 -2:26:8", "-2 - GST"],"Atlantic/St_Helena": ["-0:22:48 - LMT 1890 -0:22:48", "-0:22:48 - JMT 1951 -0:22:48", "0 - GMT"],"Atlantic/Stanley": ["-3:51:24 - LMT 1890 -3:51:24", "-3:51:24 - SMT 1912_2_12 -3:51:24", "-4 Falk FK%sT 1983_4 -4", "-3 Falk FK%sT 1985_8_15 -3", "-4 Falk FK%sT 2010_8_5_02 -4", "-3 - FKST"],"Australia/Adelaide": ["9:14:20 - LMT 1895_1 9:14:20", "9 - CST 1899_4 9", "9:30 Aus CST 1971 9:30", "9:30 AS CST"],"Australia/Brisbane": ["10:12:8 - LMT 1895 10:12:8", "10 Aus EST 1971 10", "10 AQ EST"],"Australia/Broken_Hill": ["9:25:48 - LMT 1895_1 9:25:48", "10 - EST 1896_7_23 10", "9 - CST 1899_4 9", "9:30 Aus CST 1971 9:30", "9:30 AN CST 2000 10:30", "9:30 AS CST"],"Australia/Currie": ["9:35:28 - LMT 1895_8 9:35:28", "10 - EST 1916_9_1_2 10", "11 - EST 1917_1 11", "10 Aus EST 1971_6 10", "10 AT EST"],"Australia/Darwin": ["8:43:20 - LMT 1895_1 8:43:20", "9 - CST 1899_4 9", "9:30 Aus CST"],"Australia/Eucla": ["8:35:28 - LMT 1895_11 8:35:28", "8:45 Aus CWST 1943_6 8:45", "8:45 AW CWST"],"Australia/Hobart": ["9:49:16 - LMT 1895_8 9:49:16", "10 - EST 1916_9_1_2 10", "11 - EST 1917_1 11", "10 Aus EST 1967 10", "10 AT EST"],"Australia/Lindeman": ["9:55:56 - LMT 1895 9:55:56", "10 Aus EST 1971 10", "10 AQ EST 1992_6 10", "10 Holiday EST"],"Australia/Lord_Howe": ["10:36:20 - LMT 1895_1 10:36:20", "10 - EST 1981_2 10", "10:30 LH LHST"],"Australia/Melbourne": ["9:39:52 - LMT 1895_1 9:39:52", "10 Aus EST 1971 10", "10 AV EST"],"Australia/Perth": ["7:43:24 - LMT 1895_11 7:43:24", "8 Aus WST 1943_6 8", "8 AW WST"],"Australia/Sydney": ["10:4:52 - LMT 1895_1 10:4:52", "10 Aus EST 1971 10", "10 AN EST"],CET: ["1 C-Eur CE%sT"],CST6CDT: ["-6 US C%sT"],EET: ["2 EU EE%sT"],EST: ["-5 - EST"],EST5EDT: ["-5 US E%sT"],HST: ["-10 - HST"],MET: ["1 C-Eur ME%sT"],MST: ["-7 - MST"],MST7MDT: ["-7 US M%sT"],PST8PDT: ["-8 US P%sT"],WET: ["0 EU WE%sT"],"Europe/Amsterdam": ["0:19:32 - LMT 1835 0:19:32", "0:19:32 Neth %s 1937_6_1 1:19:32", "0:20 Neth NE%sT 1940_4_16_0 0:20", "1 C-Eur CE%sT 1945_3_2_2 1", "1 Neth CE%sT 1977 1", "1 EU CE%sT"],"Europe/Andorra": ["0:6:4 - LMT 1901 0:6:4", "0 - WET 1946_8_30", "1 - CET 1985_2_31_2 1", "1 EU CE%sT"],"Europe/Athens": ["1:34:52 - LMT 1895_8_14 1:34:52", "1:34:52 - AMT 1916_6_28_0_1 1:34:52", "2 Greece EE%sT 1941_3_30 3", "1 Greece CE%sT 1944_3_4 1", "2 Greece EE%sT 1981 2", "2 EU EE%sT"],"Europe/Belgrade": ["1:22 - LMT 1884 1:22", "1 - CET 1941_3_18_23 1", "1 C-Eur CE%sT 1945 1", "1 - CET 1945_4_8_2 1", "2 - CEST 1945_8_16_2 1", "1 - CET 1982_10_27 1", "1 EU CE%sT"],"Europe/Berlin": ["0:53:28 - LMT 1893_3 0:53:28", "1 C-Eur CE%sT 1945_4_24_2 2", "1 SovietZone CE%sT 1946 1", "1 Germany CE%sT 1980 1", "1 EU CE%sT"],"Europe/Prague": ["0:57:44 - LMT 1850 0:57:44", "0:57:44 - PMT 1891_9 0:57:44", "1 C-Eur CE%sT 1944_8_17_2 1", "1 Czech CE%sT 1979 1", "1 EU CE%sT"],"Europe/Brussels": ["0:17:30 - LMT 1880 0:17:30", "0:17:30 - BMT 1892_4_1_12 0:17:30", "0 - WET 1914_10_8", "1 - CET 1916_4_1_0 1", "1 C-Eur CE%sT 1918_10_11_11", "0 Belgium WE%sT 1940_4_20_2", "1 C-Eur CE%sT 1944_8_3 2", "1 Belgium CE%sT 1977 1", "1 EU CE%sT"],"Europe/Bucharest": ["1:44:24 - LMT 1891_9 1:44:24", "1:44:24 - BMT 1931_6_24 1:44:24", "2 Romania EE%sT 1981_2_29_2 2", "2 C-Eur EE%sT 1991 2", "2 Romania EE%sT 1994 2", "2 E-Eur EE%sT 1997 2", "2 EU EE%sT"],"Europe/Budapest": ["1:16:20 - LMT 1890_9 1:16:20"
            , "1 C-Eur CE%sT 1918 1", "1 Hungary CE%sT 1941_3_6_2 1", "1 C-Eur CE%sT 1945 1", "1 Hungary CE%sT 1980_8_28_2 1", "1 EU CE%sT"],"Europe/Zurich": ["0:34:8 - LMT 1848_8_12 0:34:8", "0:29:44 - BMT 1894_5 0:29:44", "1 Swiss CE%sT 1981 1", "1 EU CE%sT"],"Europe/Chisinau": ["1:55:20 - LMT 1880 1:55:20", "1:55 - CMT 1918_1_15 1:55", "1:44:24 - BMT 1931_6_24 1:44:24", "2 Romania EE%sT 1940_7_15 2", "3 - EEST 1941_6_17 3", "1 C-Eur CE%sT 1944_7_24 2", "3 Russia MSK/MSD 1990 3", "3 - MSK 1990_4_6 3", "2 - EET 1991 2", "2 Russia EE%sT 1992 2", "2 E-Eur EE%sT 1997 2", "2 EU EE%sT"],"Europe/Copenhagen": ["0:50:20 - LMT 1890 0:50:20", "0:50:20 - CMT 1894_0_1 0:50:20", "1 Denmark CE%sT 1942_10_2_2 1", "1 C-Eur CE%sT 1945_3_2_2 1", "1 Denmark CE%sT 1980 1", "1 EU CE%sT"],"Europe/Dublin": ["-0:25 - LMT 1880_7_2 -0:25", "-0:25:21 - DMT 1916_4_21_2 -0:25:21", "0:34:39 - IST 1916_9_1_2 -0:25:21", "0 GB-Eire %s 1921_11_6", "0 GB-Eire GMT/IST 1940_1_25_2", "1 - IST 1946_9_6_2 1", "0 - GMT 1947_2_16_2", "1 - IST 1947_10_2_2 1", "0 - GMT 1948_3_18_2", "0 GB-Eire GMT/IST 1968_9_27 1", "1 - IST 1971_9_31_2", "0 GB-Eire GMT/IST 1996", "0 EU GMT/IST"],"Europe/Gibraltar": ["-0:21:24 - LMT 1880_7_2_0 -0:21:24", "0 GB-Eire %s 1957_3_14_2", "1 - CET 1982 1", "1 EU CE%sT"],"Europe/London": ["-0:1:15 - LMT 1847_11_1_0 -0:1:15", "0 GB-Eire %s 1968_9_27 1", "1 - BST 1971_9_31_2", "0 GB-Eire %s 1996", "0 EU GMT/BST"],"Europe/Helsinki": ["1:39:52 - LMT 1878_4_31 1:39:52", "1:39:52 - HMT 1921_4 1:39:52", "2 Finland EE%sT 1983 2", "2 EU EE%sT"],"Europe/Istanbul": ["1:55:52 - LMT 1880 1:55:52", "1:56:56 - IMT 1910_9 1:56:56", "2 Turkey EE%sT 1978_9_15 3", "3 Turkey TR%sT 1985_3_20 3", "2 Turkey EE%sT 2007 2", "2 EU EE%sT 2011_2_27_1", "2 - EET 2011_2_28_1", "2 EU EE%sT"],"Europe/Kaliningrad": ["1:22 - LMT 1893_3 1:22", "1 C-Eur CE%sT 1945 1", "2 Poland CE%sT 1946 2", "3 Russia MSK/MSD 1991_2_31_2 3", "2 Russia EE%sT 2011_2_27_2 2", "3 - FET"],"Europe/Kiev": ["2:2:4 - LMT 1880 2:2:4", "2:2:4 - KMT 1924_4_2 2:2:4", "2 - EET 1930_5_21 2", "3 - MSK 1941_8_20 3", "1 C-Eur CE%sT 1943_10_6 1", "3 Russia MSK/MSD 1990 3", "3 - MSK 1990_6_1_2 3", "2 - EET 1992 2", "2 E-Eur EE%sT 1995 2", "2 EU EE%sT"],"Europe/Lisbon": ["-0:36:32 - LMT 1884 -0:36:32", "-0:36:32 - LMT 1912_0_1 -0:36:32", "0 Port WE%sT 1966_3_3_2", "1 - CET 1976_8_26_1 1", "0 Port WE%sT 1983_8_25_1", "0 W-Eur WE%sT 1992_8_27_1", "1 EU CE%sT 1996_2_31_1", "0 EU WE%sT"],"Europe/Luxembourg": ["0:24:36 - LMT 1904_5 0:24:36", "1 Lux CE%sT 1918_10_25 1", "0 Lux WE%sT 1929_9_6_2", "0 Belgium WE%sT 1940_4_14_3 1", "1 C-Eur WE%sT 1944_8_18_3 2", "1 Belgium CE%sT 1977 1", "1 EU CE%sT"],"Europe/Madrid": ["-0:14:44 - LMT 1901_0_1_0 -0:14:44", "0 Spain WE%sT 1946_8_30 2", "1 Spain CE%sT 1979 1", "1 EU CE%sT"],"Europe/Malta": ["0:58:4 - LMT 1893_10_2_0 0:58:4", "1 Italy CE%sT 1942_10_2_2 1", "1 C-Eur CE%sT 1945_3_2_2 1", "1 Italy CE%sT 1973_2_31 1", "1 Malta CE%sT 1981 1", "1 EU CE%sT"],"Europe/Minsk": ["1:50:16 - LMT 1880 1:50:16", "1:50 - MMT 1924_4_2 1:50", "2 - EET 1930_5_21 2", "3 - MSK 1941_5_28 3", "1 C-Eur CE%sT 1944_6_3 2", "3 Russia MSK/MSD 1990 3", "3 - MSK 1991_2_31_2 3", "3 - EEST 1991_8_29_2 2", "2 - EET 1992_2_29_0 2", "3 - EEST 1992_8_27_0 2", "2 Russia EE%sT 2011_2_27_2 2", "3 - FET"],"Europe/Monaco": ["0:29:32 - LMT 1891_2_15 0:29:32", "0:9:21 - PMT 1911_2_11 0:9:21", "0 France WE%sT 1945_8_16_3 2", "1 France CE%sT 1977 1", "1 EU CE%sT"],"Europe/Moscow": ["2:30:20 - LMT 1880 2:30:20", "2:30 - MMT 1916_6_3 2:30", "2:30:48 Russia %s 1919_6_1_2 4:30:48", "3 Russia MSK/MSD 1922_9 3", "2 - EET 1930_5_21 2", "3 Russia MSK/MSD 1991_2_31_2 3", "2 Russia EE%sT 1992_0_19_2 2", "3 Russia MSK/MSD 2011_2_27_2 3", "4 - MSK"],"Europe/Paris": ["0:9:21 - LMT 1891_2_15_0_1 0:9:21", "0:9:21 - PMT 1911_2_11_0_1 0:9:21", "0 France WE%sT 1940_5_14_23 1", "1 C-Eur CE%sT 1944_7_25 2", "0 France WE%sT 1945_8_16_3 2", "1 France CE%sT 1977 1", "1 EU CE%sT"],"Europe/Riga": ["1:36:24 - LMT 1880 1:36:24", "1:36:24 - RMT 1918_3_15_2 1:36:24", "2:36:24 - LST 1918_8_16_3 2:36:24", "1:36:24 - RMT 1919_3_1_2 1:36:24", "2:36:24 - LST 1919_4_22_3 2:36:24", "1:36:24 - RMT 1926_4_11 1:36:24", "2 - EET 1940_7_5 2", "3 - MSK 1941_6 3", "1 C-Eur CE%sT 1944_9_13 1", "3 Russia MSK/MSD 1989_2_26_2 3", "3 - EEST 1989_8_24_2 2", "2 Latvia EE%sT 1997_0_21 2", "2 EU EE%sT 2000_1_29 2", "2 - EET 2001_0_2 2", "2 EU EE%sT"],"Europe/Rome": ["0:49:56 - LMT 1866_8_22 0:49:56", "0:49:56 - RMT 1893_10_1_0 0:49:56", "1 Italy CE%sT 1942_10_2_2 1", "1 C-Eur CE%sT 1944_6 2", "1 Italy CE%sT 1980 1", "1 EU CE%sT"],"Europe/Samara": ["3:20:36 - LMT 1919_6_1_2 3:20:36", "3 - SAMT 1930_5_21 3", "4 - SAMT 1935_0_27 4", "4 Russia KUY%sT 1989_2_26_2 4", "3 Russia KUY%sT 1991_2_31_2 3", "2 Russia KUY%sT 1991_8_29_2 2", "3 - KUYT 1991_9_20_3 3", "4 Russia SAM%sT 2010_2_28_2 4", "3 Russia SAM%sT 2011_2_27_2 3", "4 - SAMT"],"Europe/Simferopol": ["2:16:24 - LMT 1880 2:16:24", "2:16 - SMT 1924_4_2 2:16", "2 - EET 1930_5_21 2", "3 - MSK 1941_10 3", "1 C-Eur CE%sT 1944_3_13 2", "3 Russia MSK/MSD 1990 3", "3 - MSK 1990_6_1_2 3", "2 - EET 1992 2", "2 E-Eur EE%sT 1994_4 3", "3 E-Eur MSK/MSD 1996_2_31_3 3", "4 - MSD 1996_9_27_3 3", "3 Russia MSK/MSD 1997 3", "3 - MSK 1997_2_30_1", "2 EU EE%sT"],"Europe/Sofia": ["1:33:16 - LMT 1880 1:33:16", "1:56:56 - IMT 1894_10_30 1:56:56", "2 - EET 1942_10_2_3 2", "1 C-Eur CE%sT 1945 1", "1 - CET 1945_3_2_3 1", "2 - EET 1979_2_31_23 2", "2 Bulg EE%sT 1982_8_26_2 3", "2 C-Eur EE%sT 1991 2", "2 E-Eur EE%sT 1997 2", "2 EU EE%sT"],"Europe/Stockholm": ["1:12:12 - LMT 1879_0_1 1:12:12", "1:0:14 - SET 1900_0_1 1:0:14", "1 - CET 1916_4_14_23 1", "2 - CEST 1916_9_1_01 2", "1 - CET 1980 1", "1 EU CE%sT"],"Europe/Tallinn": ["1:39 - LMT 1880 1:39", "1:39 - TMT 1918_1 1:39", "1 C-Eur CE%sT 1919_6 1", "1:39 - TMT 1921_4 1:39", "2 - EET 1940_7_6 2", "3 - MSK 1941_8_15 3", "1 C-Eur CE%sT 1944_8_22 2", "3 Russia MSK/MSD 1989_2_26_2 3", "3 - EEST 1989_8_24_2 2", "2 C-Eur EE%sT 1998_8_22 3", "2 EU EE%sT 1999_10_1 3", "2 - EET 2002_1_21 2", "2 EU EE%sT"],"Europe/Tirane": ["1:19:20 - LMT 1914 1:19:20", "1 - CET 1940_5_16 1", "1 Albania CE%sT 1984_6 2", "1 EU CE%sT"],"Europe/Uzhgorod": ["1:29:12 - LMT 1890_9 1:29:12", "1 - CET 1940 1", "1 C-Eur CE%sT 1944_9 2", "2 - CEST 1944_9_26 2", "1 - CET 1945_5_29 1", "3 Russia MSK/MSD 1990 3", "3 - MSK 1990_6_1_2 3", "1 - CET 1991_2_31_3 1", "2 - EET 1992 2", "2 E-Eur EE%sT 1995 2", "2 EU EE%sT"],"Europe/Vaduz": ["0:38:4 - LMT 1894_5 0:38:4", "1 - CET 1981 1", "1 EU CE%sT"],"Europe/Vienna": ["1:5:21 - LMT 1893_3 1:5:21", "1 C-Eur CE%sT 1920 1", "1 Austria CE%sT 1940_3_1_2 1", "1 C-Eur CE%sT 1945_3_2_2 1", "2 - CEST 1945_3_12_2 1", "1 - CET 1946 1", "1 Austria CE%sT 1981 1", "1 EU CE%sT"],"Europe/Vilnius": ["1:41:16 - LMT 1880 1:41:16", "1:24 - WMT 1917 1:24", "1:35:36 - KMT 1919_9_10 1:35:36", "1 - CET 1920_6_12 1", "2 - EET 1920_9_9 2", "1 - CET 1940_7_3 1", "3 - MSK 1941_5_24 3", "1 C-Eur CE%sT 1944_7 2", "3 Russia MSK/MSD 1991_2_31_2 3", "3 - EEST 1991_8_29_2 2", "2 C-Eur EE%sT 1998 2", "2 - EET 1998_2_29_1", "1 EU CE%sT 1999_9_31_1", "2 - EET 2003_0_1 2", "2 EU EE%sT"],"Europe/Volgograd": ["2:57:40 - LMT 1920_0_3 2:57:40", "3 - TSAT 1925_3_6 3", "3 - STAT 1930_5_21 3", "4 - STAT 1961_10_11 4", "4 Russia VOL%sT 1989_2_26_2 4", "3 Russia VOL%sT 1991_2_31_2 3", "4 - VOLT 1992_2_29_2 4", "3 Russia VOL%sT 2011_2_27_2 3", "4 - VOLT"],"Europe/Warsaw": ["1:24 - LMT 1880 1:24", "1:24 - WMT 1915_7_5 1:24", "1 C-Eur CE%sT 1918_8_16_3 2", "2 Poland EE%sT 1922_5 2", "1 Poland CE%sT 1940_5_23_2 1", "1 C-Eur CE%sT 1944_9 2", "1 Poland CE%sT 1977 1", "1 W-Eur CE%sT 1988 1", "1 EU CE%sT"],"Europe/Zaporozhye": ["2:20:40 - LMT 1880 2:20:40", "2:20 - CUT 1924_4_2 2:20", "2 - EET 1930_5_21 2", "3 - MSK 1941_7_25 3", "1 C-Eur CE%sT 1943_9_25 1", "3 Russia MSK/MSD 1991_2_31_2 3", "2 E-Eur EE%sT 1995 2", "2 EU EE%sT"],"Indian/Antananarivo": ["3:10:4 - LMT 1911_6 3:10:4", "3 - EAT 1954_1_27_23 3", "4 - EAST 1954_4_29_23 3", "3 - EAT"],"Indian/Chagos": ["4:49:40 - LMT 1907 4:49:40", "5 - IOT 1996 5", "6 - IOT"],"Indian/Christmas": ["7:2:52 - LMT 1895_1 7:2:52", "7 - CXT"],"Indian/Cocos": ["6:27:40 - LMT 1900 6:27:40", "6:30 - CCT"],"Indian/Comoro": ["2:53:4 - LMT 1911_6 2:53:4", "3 - EAT"],"Indian/Kerguelen": ["0 - zzz 1950", "5 - TFT"],"Indian/Mahe": ["3:41:48 - LMT 1906_5 3:41:48", "4 - SCT"],"Indian/Maldives": ["4:54 - LMT 1880 4:54", "4:54 - MMT 1960 4:54", "5 - MVT"],"Indian/Mauritius": ["3:50 - LMT 1907 3:50", "4 Mauritius MU%sT"],"Indian/Mayotte": ["3:0:56 - LMT 1911_6 3:0:56", "3 - EAT"],"Indian/Reunion": ["3:41:52 - LMT 1911_5 3:41:52", "4 - RET"],"Pacific/Apia": ["12:33:4 - LMT 1879_6_5 12:33:4", "-11:26:56 - LMT 1911 -11:26:56", "-11:30 - SAMT 1950 -11:30", "-11 - WST 2010_8_26 -11", "-10 - WSDT 2011_3_2_4 -10", "-11 - WST 2011_8_24_3 -11", "-10 - WSDT 2011_11_30 -10", "14 - WSDT 2012_3_1_4 14", "13 WS WS%sT"],"Pacific/Auckland": ["11:39:4 - LMT 1868_10_2 11:39:4", "11:30 NZ NZ%sT 1946_0_1 12", "12 NZ NZ%sT"],"Pacific/Chatham": ["12:13:48 - LMT 1957_0_1 12:13:48", "12:45 Chatham CHA%sT"],"Pacific/Chuuk": ["10:7:8 - LMT 1901 10:7:8", "10 - CHUT"],"Pacific/Easter": ["-7:17:44 - LMT 1890 -7:17:44", "-7:17:28 - EMT 1932_8 -7:17:28", "-7 Chile EAS%sT 1982_2_13_21 -6", "-6 Chile EAS%sT"],"Pacific/Efate": ["11:13:16 - LMT 1912_0_13 11:13:16", "11 Vanuatu VU%sT"],"Pacific/Enderbury": ["-11:24:20 - LMT 1901 -11:24:20", "-12 - PHOT 1979_9 -12", "-11 - PHOT 1995 -11", "13 - PHOT"],"Pacific/Fakaofo": ["-11:24:56 - LMT 1901 -11:24:56", "-11 - TKT 2011_11_30 -11", "13 - TKT"],"Pacific/Fiji": ["11:55:44 - LMT 1915_9_26 11:55:44", "12 Fiji FJ%sT"],"Pacific/Funafuti": ["11:56:52 - LMT 1901 11:56:52", "12 - TVT"],"Pacific/Galapagos": ["-5:58:24 - LMT 1931 -5:58:24", "-5 - ECT 1986 -5", "-6 - GALT"],"Pacific/Gambier": ["-8:59:48 - LMT 1912_9 -8:59:48", "-9 - GAMT"],"Pacific/Guadalcanal": ["10:39:48 - LMT 1912_9 10:39:48", "11 - SBT"],"Pacific/Guam": ["-14:21 - LMT 1844_11_31 -14:21", "9:39 - LMT 1901 9:39", "10 - GST 2000_11_23 10", "10 - ChST"],"Pacific/Honolulu": ["-10:31:26 - LMT 1896_0_13_12 -10:31:26", "-10:30 - HST 1933_3_30_2 -10:30", "-9:30 - HDT 1933_4_21_12 -9:30", "-10:30 - HST 1942_1_09_2 -10:30", "-9:30 - HDT 1945_8_30_2 -9:30", "-10:30 - HST 1947_5_8_2 -10:30", "-10 - HST"],"Pacific/Johnston": ["-10 - HST"],"Pacific/Kiritimati": ["-10:29:20 - LMT 1901 -10:29:20", "-10:40 - LINT 1979_9 -10:40", "-10 - LINT 1995 -10", "14 - LINT"],"Pacific/Kosrae": ["10:51:56 - LMT 1901 10:51:56", "11 - KOST 1969_9 11", "12 - KOST 1999 12", "11 - KOST"],"Pacific/Kwajalein": ["11:9:20 - LMT 1901 11:9:20", "11 - MHT 1969_9 11", "-12 - KWAT 1993_7_20 -12", "12 - MHT"],"Pacific/Majuro": ["11:24:48 - LMT 1901 11:24:48", "11 - MHT 1969_9 11", "12 - MHT"],"Pacific/Marquesas": ["-9:18 - LMT 1912_9 -9:18", "-9:30 - MART"],"Pacific/Midway": ["-11:49:28 - LMT 1901 -11:49:28", "-11 - NST 1956_5_3 -11", "-10 - NDT 1956_8_2 -10", "-11 - NST 1967_3 -11", "-11 - BST 1983_10_30 -11", "-11 - SST"],"Pacific/Nauru": ["11:7:40 - LMT 1921_0_15 11:7:40", "11:30 - NRT 1942_2_15 11:30", "9 - JST 1944_7_15 9", "11:30 - NRT 1979_4 11:30", "12 - NRT"],"Pacific/Niue": ["-11:19:40 - LMT 1901 -11:19:40", "-11:20 - NUT 1951 -11:20", "-11:30 - NUT 1978_9_1 -11:30", "-11 - NUT"],"Pacific/Norfolk": ["11:11:52 - LMT 1901 11:11:52", "11:12 - NMT 1951 11:12", "11:30 - NFT"],"Pacific/Noumea": ["11:5:48 - LMT 1912_0_13 11:5:48", "11 NC NC%sT"],"Pacific/Pago_Pago": ["12:37:12 - LMT 1879_6_5 12:37:12", "-11:22:48 - LMT 1911 -11:22:48", "-11:30 - SAMT 1950 -11:30", "-11 - NST 1967_3 -11", "-11 - BST 1983_10_30 -11", "-11 - SST"],"Pacific/Palau": ["8:57:56 - LMT 1901 8:57:56", "9 - PWT"],"Pacific/Pitcairn": ["-8:40:20 - LMT 1901 -8:40:20", "-8:30 - PNT 1998_3_27_00 -8:30", "-8 - PST"],"Pacific/Pohnpei": ["10:32:52 - LMT 1901 10:32:52", "11 - PONT"],"Pacific/Port_Moresby": ["9:48:40 - LMT 1880 9:48:40", "9:48:32 - PMMT 1895 9:48:32", "10 - PGT"],"Pacific/Rarotonga": ["-10:39:4 - LMT 1901 -10:39:4", "-10:30 - CKT 1978_10_12 -10:30", "-10 Cook CK%sT"],"Pacific/Saipan": ["-14:17 - LMT 1844_11_31 -14:17", "9:43 - LMT 1901 9:43", "9 - MPT 1969_9 9", "10 - MPT 2000_11_23 10", "10 - ChST"],"Pacific/Tahiti": ["-9:58:16 - LMT 1912_9 -9:58:16", "-10 - TAHT"],"Pacific/Tarawa": ["11:32:4 - LMT 1901 11:32:4", "12 - GILT"],"Pacific/Tongatapu": ["12:19:20 - LMT 1901 12:19:20", "12:20 - TOT 1941 12:20", "13 - TOT 1999 13", "13 Tonga TO%sT"],"Pacific/Wake": ["11:6:28 - LMT 1901 11:6:28", "12 - WAKT"],"Pacific/Wallis": ["12:15:20 - LMT 1901 12:15:20", "12 - WFT"]},rules: {Ghana: ["1936 1942 8 1 7 0 0 0:20 GHST", "1936 1942 11 31 7 0 0 0 GMT"],Algeria: ["1916 1916 5 14 7 23 2 1 S", "1916 1919 9 1 0 23 2 0", "1917 1917 2 24 7 23 2 1 S", "1918 1918 2 9 7 23 2 1 S", "1919 1919 2 1 7 23 2 1 S", "1920 1920 1 14 7 23 2 1 S", "1920 1920 9 23 7 23 2 0", "1921 1921 2 14 7 23 2 1 S", "1921 1921 5 21 7 23 2 0", "1939 1939 8 11 7 23 2 1 S", "1939 1939 10 19 7 1 0 0", "1944 1945 3 1 1 2 0 1 S", "1944 1944 9 8 7 2 0 0", "1945 1945 8 16 7 1 0 0", "1971 1971 3 25 7 23 2 1 S", "1971 1971 8 26 7 23 2 0", "1977 1977 4 6 7 0 0 1 S", "1977 1977 9 21 7 0 0 0", "1978 1978 2 24 7 1 0 1 S", "1978 1978 8 22 7 3 0 0", "1980 1980 3 25 7 0 0 1 S", "1980 1980 9 31 7 2 0 0"],Egypt: ["1940 1940 6 15 7 0 0 1 S", "1940 1940 9 1 7 0 0 0", "1941 1941 3 15 7 0 0 1 S", "1941 1941 8 16 7 0 0 0", "1942 1944 3 1 7 0 0 1 S", "1942 1942 9 27 7 0 0 0", "1943 1945 10 1 7 0 0 0", "1945 1945 3 16 7 0 0 1 S", "1957 1957 4 10 7 0 0 1 S", "1957 1958 9 1 7 0 0 0", "1958 1958 4 1 7 0 0 1 S", "1959 1981 4 1 7 1 0 1 S", "1959 1965 8 30 7 3 0 0", "1966 1994 9 1 7 3 0 0", "1982 1982 6 25 7 1 0 1 S", "1983 1983 6 12 7 1 0 1 S", "1984 1988 4 1 7 1 0 1 S", "1989 1989 4 6 7 1 0 1 S", "1990 1994 4 1 7 1 0 1 S", "1995 2010 3 5 8 0 2 1 S", "1995 2005 8 4 8 23 2 0", "2006 2006 8 21 7 23 2 0", "2007 2007 8 1 4 23 2 0", "2008 2008 7 4 8 23 2 0", "2009 2009 7 20 7 23 2 0", "2010 2010 7 11 7 0 0 0", "2010 2010 8 10 7 0 0 1 S", "2010 2010 8 4 8 23 2 0"],Morocco: ["1939 1939 8 12 7 0 0 1 S", "1939 1939 10 19 7 0 0 0", "1940 1940 1 25 7 0 0 1 S", "1945 1945 10 18 7 0 0 0", "1950 1950 5 11 7 0 0 1 S", "1950 1950 9 29 7 0 0 0", "1967 1967 5 3 7 12 0 1 S", "1967 1967 9 1 7 0 0 0", "1974 1974 5 24 7 0 0 1 S", "1974 1974 8 1 7 0 0 0", "1976 1977 4 1 7 0 0 1 S", "1976 1976 7 1 7 0 0 0", "1977 1977 8 28 7 0 0 0", "1978 1978 5 1 7 0 0 1 S", "1978 1978 7 4 7 0 0 0", "2008 2008 5 1 7 0 0 1 S", "2008 2008 8 1 7 0 0 0", "2009 2009 5 1 7 0 0 1 S", "2009 2009 7 21 7 0 0 0", "2010 2010 4 2 7 0 0 1 S", "2010 2010 7 8 7 0 0 0", "2011 2011 3 3 7 0 0 1 S", "2011 2011 6 31 7 0 0 0", "2012 2019 3 0 8 2 0 1 S", "2012 9999 8 0 8 3 0 0", "2012 2012 6 20 7 3 0 0", "2012 2012 7 20 7 2 0 1 S", "2013 2013 6 9 7 3 0 0", "2013 2013 7 8 7 2 0 1 S", "2014 2014 5 29 7 3 0 0", "2014 2014 6 29 7 2 0 1 S", "2015 2015 5 18 7 3 0 0", "2015 2015 6 18 7 2 0 1 S", "2016 2016 5 7 7 3 0 0", "2016 2016 6 7 7 2 0 1 S", "2017 2017 4 27 7 3 0 0", "2017 2017 5 26 7 2 0 1 S", "2018 2018 4 16 7 3 0 0", "2018 2018 5 15 7 2 0 1 S", "2019 2019 4 6 7 3 0 0", "2019 2019 5 5 7 2 0 1 S", "2020 2020 4 24 7 2 0 1 S", "2021 2021 4 13 7 2 0 1 S", "2022 2022 4 3 7 2 0 1 S", "2023 9999 3 0 8 2 0 1 S"],Spain: ["1917 1917 4 5 7 23 2 1 S", "1917 1919 9 6 7 23 2 0", "1918 1918 3 15 7 23 2 1 S", "1919 1919 3 5 7 23 2 1 S", "1924 1924 3 16 7 23 2 1 S", "1924 1924 9 4 7 23 2 0", "1926 1926 3 17 7 23 2 1 S", "1926 1929 9 1 6 23 2 0", "1927 1927 3 9 7 23 2 1 S", "1928 1928 3 14 7 23 2 1 S", "1929 1929 3 20 7 23 2 1 S", "1937 1937 4 22 7 23 2 1 S", "1937 1939 9 1 6 23 2 0", "1938 1938 2 22 7 23 2 1 S", "1939 1939 3 15 7 23 2 1 S", "1940 1940 2 16 7 23 2 1 S", "1942 1942 4 2 7 22 2 2 M", "1942 1942 8 1 7 22 2 1 S", "1943 1946 3 13 6 22 2 2 M", "1943 1943 9 3 7 22 2 1 S", "1944 1944 9 10 7 22 2 1 S", "1945 1945 8 30 7 1 0 1 S", "1946 1946 8 30 7 0 0 0", "1949 1949 3 30 7 23 0 1 S", "1949 1949 8 30 7 1 0 0", "1974 1975 3 13 6 23 0 1 S", "1974 1975 9 1 0 1 0 0", "1976 1976 2 27 7 23 0 1 S", "1976 1977 8 0 8 1 0 0", "1977 1978 3 2 7 23 0 1 S", "1978 1978 9 1 7 1 0 0"],SpainAfrica: ["1967 1967 5 3 7 12 0 1 S", "1967 1967 9 1 7 0 0 0", "1974 1974 5 24 7 0 0 1 S", "1974 1974 8 1 7 0 0 0", "1976 1977 4 1 7 0 0 1 S", "1976 1976 7 1 7 0 0 0", "1977 1977 8 28 7 0 0 0", "1978 1978 5 1 7 0 0 1 S", "1978 1978 7 4 7 0 0 0"],EU: ["1977 1980 3 1 0 1 1 1 S", "1977 1977 8 0 8 1 1 0", "1978 1978 9 1 7 1 1 0", "1979 1995 8 0 8 1 1 0", "1981 9999 2 0 8 1 1 1 S", "1996 9999 9 0 8 1 1 0"],SL: ["1935 1942 5 1 7 0 0 0:40 SLST", "1935 1942 9 1 7 0 0 0 WAT", "1957 1962 5 1 7 0 0 1 SLST", "1957 1962 8 1 7 0 0 0 GMT"],SA: ["1942 1943 8 15 0 2 0 1", "1943 1944 2 15 0 2 0 0"],Sudan: ["1970 1970 4 1 7 0 0 1 S", "1970 1985 9 15 7 0 0 0", "1971 1971 3 30 7 0 0 1 S", "1972 1985 3 0 8 0 0 1 S"],Libya: ["1951 1951 9 14 7 2 0 1 S", "1952 1952 0 1 7 0 0 0", "1953 1953 9 9 7 2 0 1 S", "1954 1954 0 1 7 0 0 0", "1955 1955 8 30 7 0 0 1 S", "1956 1956 0 1 7 0 0 0", "1982 1984 3 1 7 0 0 1 S", "1982 1985 9 1 7 0 0 0", "1985 1985 3 6 7 0 0 1 S", "1986 1986 3 4 7 0 0 1 S", "1986 1986 9 3 7 0 0 0", "1987 1989 3 1 7 0 0 1 S", "1987 1989 9 1 7 0 0 0", "1997 1997 3 4 7 0 0 1 S", "1997 1997 9 4 7 0 0 0", "2013 9999 2 5 8 1 0 1 S", "2013 9999 9 5 8 2 0 0"],Tunisia: ["1939 1939 3 15 7 23 2 1 S", "1939 1939 10 18 7 23 2 0", "1940 1940 1 25 7 23 2 1 S", "1941 1941 9 6 7 0 0 0", "1942 1942 2 9 7 0 0 1 S", "1942 1942 10 2 7 3 0 0", "1943 1943 2 29 7 2 0 1 S", "1943 1943 3 17 7 2 0 0", "1943 1943 3 25 7 2 0 1 S", "1943 1943 9 4 7 2 0 0", "1944 1945 3 1 1 2 0 1 S", "1944 1944 9 8 7 0 0 0", "1945 1945 8 16 7 0 0 0", "1977 1977 3 30 7 0 2 1 S", "1977 1977 8 24 7 0 2 0", "1978 1978 4 1 7 0 2 1 S", "1978 1978 9 1 7 0 2 0", "1988 1988 5 1 7 0 2 1 S", "1988 1990 8 0 8 0 2 0", "1989 1989 2 26 7 0 2 1 S", "1990 1990 4 1 7 0 2 1 S", "2005 2005 4 1 7 0 2 1 S", "2005 2005 8 30 7 1 2 0", "2006 2008 2 0 8 2 2 1 S", "2006 2008 9 0 8 2 2 0"],Namibia: ["1994 9999 8 1 0 2 0 1 S", "1995 9999 3 1 0 2 0 0"],US: ["1918 1919 2 0 8 2 0 1 D", "1918 1919 9 0 8 2 0 0 S", "1942 1942 1 9 7 2 0 1 W", "1945 1945 7 14 7 23 1 1 P", "1945 1945 8 30 7 2 0 0 S", "1967 2006 9 0 8 2 0 0 S", "1967 1973 3 0 8 2 0 1 D", "1974 1974 0 6 7 2 0 1 D", "1975 1975 1 23 7 2 0 1 D", "1976 1986 3 0 8 2 0 1 D", "1987 2006 3 1 0 2 0 1 D", "2007 9999 2 8 0 2 0 1 D", "2007 9999 10 1 0 2 0 0 S"],Brazil: ["1931 1931 9 3 7 11 0 1 S", "1932 1933 3 1 7 0 0 0", "1932 1932 9 3 7 0 0 1 S", "1949 1952 11 1 7 0 0 1 S", "1950 1950 3 16 7 1 0 0", "1951 1952 3 1 7 0 0 0", "1953 1953 2 1 7 0 0 0", "1963 1963 11 9 7 0 0 1 S", "1964 1964 2 1 7 0 0 0", "1965 1965 0 31 7 0 0 1 S", "1965 1965 2 31 7 0 0 0", "1965 1965 11 1 7 0 0 1 S", "1966 1968 2 1 7 0 0 0", "1966 1967 10 1 7 0 0 1 S", "1985 1985 10 2 7 0 0 1 S", "1986 1986 2 15 7 0 0 0", "1986 1986 9 25 7 0 0 1 S", "1987 1987 1 14 7 0 0 0", "1987 1987 9 25 7 0 0 1 S", "1988 1988 1 7 7 0 0 0", "1988 1988 9 16 7 0 0 1 S", "1989 1989 0 29 7 0 0 0", "1989 1989 9 15 7 0 0 1 S", "1990 1990 1 11 7 0 0 0", "1990 1990 9 21 7 0 0 1 S", "1991 1991 1 17 7 0 0 0", "1991 1991 9 20 7 0 0 1 S", "1992 1992 1 9 7 0 0 0", "1992 1992 9 25 7 0 0 1 S", "1993 1993 0 31 7 0 0 0", "1993 1995 9 11 0 0 0 1 S", "1994 1995 1 15 0 0 0 0", "1996 1996 1 11 7 0 0 0", "1996 1996 9 6 7 0 0 1 S", "1997 1997 1 16 7 0 0 0", "1997 1997 9 6 7 0 0 1 S", "1998 1998 2 1 7 0 0 0", "1998 1998 9 11 7 0 0 1 S", "1999 1999 1 21 7 0 0 0", "1999 1999 9 3 7 0 0 1 S", "2000 2000 1 27 7 0 0 0", "2000 2001 9 8 0 0 0 1 S", "2001 2006 1 15 0 0 0 0", "2002 2002 10 3 7 0 0 1 S", "2003 2003 9 19 7 0 0 1 S", "2004 2004 10 2 7 0 0 1 S", "2005 2005 9 16 7 0 0 1 S", "2006 2006 10 5 7 0 0 1 S", "2007 2007 1 25 7 0 0 0", "2007 2007 9 8 0 0 0 1 S", "2008 9999 9 15 0 0 0 1 S", "2008 2011 1 15 0 0 0 0", "2012 2012 1 22 0 0 0 0", "2013 2014 1 15 0 0 0 0", "2015 2015 1 22 0 0 0 0", "2016 2022 1 15 0 0 0 0", "2023 2023 1 22 0 0 0 0", "2024 2025 1 15 0 0 0 0", "2026 2026 1 22 0 0 0 0", "2027 2033 1 15 0 0 0 0", "2034 2034 1 22 0 0 0 0", "2035 2036 1 15 0 0 0 0", "2037 2037 1 22 0 0 0 0", "2038 9999 1 15 0 0 0 0"],Arg: ["1930 1930 11 1 7 0 0 1 S", "1931 1931 3 1 7 0 0 0", "1931 1931 9 15 7 0 0 1 S", "1932 1940 2 1 7 0 0 0", "1932 1939 10 1 7 0 0 1 S", "1940 1940 6 1 7 0 0 1 S", "1941 1941 5 15 7 0 0 0", "1941 1941 9 15 7 0 0 1 S", "1943 1943 7 1 7 0 0 0", "1943 1943 9 15 7 0 0 1 S", "1946 1946 2 1 7 0 0 0", "1946 1946 9 1 7 0 0 1 S", "1963 1963 9 1 7 0 0 0", "1963 1963 11 15 7 0 0 1 S", "1964 1966 2 1 7 0 0 0", "1964 1966 9 15 7 0 0 1 S", "1967 1967 3 2 7 0 0 0", "1967 1968 9 1 0 0 0 1 S", "1968 1969 3 1 0 0 0 0", "1974 1974 0 23 7 0 0 1 S", "1974 1974 4 1 7 0 0 0", "1988 1988 11 1 7 0 0 1 S", "1989 1993 2 1 0 0 0 0", "1989 1992 9 15 0 0 0 1 S", "1999 1999 9 1 0 0 0 1 S", "2000 2000 2 3 7 0 0 0", "2007 2007 11 30 7 0 0 1 S", "2008 2009 2 15 0 0 0 0", "2008 2008 9 15 0 0 0 1 S"],SanLuis: ["2008 2009 2 8 0 0 0 0", "2007 2009 9 8 0 0 0 1 S"],Para: ["1975 1988 9 1 7 0 0 1 S", "1975 1978 2 1 7 0 0 0", "1979 1991 3 1 7 0 0 0", "1989 1989 9 22 7 0 0 1 S", "1990 1990 9 1 7 0 0 1 S", "1991 1991 9 6 7 0 0 1 S", "1992 1992 2 1 7 0 0 0", "1992 1992 9 5 7 0 0 1 S", "1993 1993 2 31 7 0 0 0", "1993 1995 9 1 7 0 0 1 S", "1994 1995 1 0 8 0 0 0", "1996 1996 2 1 7 0 0 0", "1996 2001 9 1 0 0 0 1 S", "1997 1997 1 0 8 0 0 0", "1998 2001 2 1 0 0 0 0", "2002 2004 3 1 0 0 0 0", "2002 2003 8 1 0 0 0 1 S", "2004 2009 9 15 0 0 0 1 S", "2005 2009 2 8 0 0 0 0", "2010 9999 9 1 0 0 0 1 S", "2010 2012 3 8 0 0 0 0", "2013 9999 2 22 0 0 0 0"],Canada: ["1918 1918 3 14 7 2 0 1 D", "1918 1918 9 27 7 2 0 0 S", "1942 1942 1 9 7 2 0 1 W", "1945 1945 7 14 7 23 1 1 P", "1945 1945 8 30 7 2 0 0 S", "1974 1986 3 0 8 2 0 1 D", "1974 2006 9 0 8 2 0 0 S", "1987 2006 3 1 0 2 0 1 D", "2007 9999 2 8 0 2 0 1 D", "2007 9999 10 1 0 2 0 0 S"],Mexico: ["1939 1939 1 5 7 0 0 1 D", "1939 1939 5 25 7 0 0 0 S", "1940 1940 11 9 7 0 0 1 D", "1941 1941 3 1 7 0 0 0 S", "1943 1943 11 16 7 0 0 1 W", "1944 1944 4 1 7 0 0 0 S", "1950 1950 1 12 7 0 0 1 D", "1950 1950 6 30 7 0 0 0 S", "1996 2000 3 1 0 2 0 1 D", "1996 2000 9 0 8 2 0 0 S", "2001 2001 4 1 0 2 0 1 D", "2001 2001 8 0 8 2 0 0 S", "2002 9999 3 1 0 2 0 1 D", "2002 9999 9 0 8 2 0 0 S"],Barb: ["1977 1977 5 12 7 2 0 1 D", "1977 1978 9 1 0 2 0 0 S", "1978 1980 3 15 0 2 0 1 D", "1979 1979 8 30 7 2 0 0 S", "1980 1980 8 25 7 2 0 0 S"],Belize: ["1918 1942 9 2 0 0 0 0:30 HD", "1919 1943 1 9 0 0 0 0 S", "1973 1973 11 5 7 0 0 1 D", "1974 1974 1 9 7 0 0 0 S", "1982 1982 11 18 7 0 0 1 D", "1983 1983 1 12 7 0 0 0 S"],CO: ["1992 1992 4 3 7 0 0 1 S", "1993 1993 3 4 7 0 0 0"],NT_YK: ["1918 1918 3 14 7 2 0 1 D", "1918 1918 9 27 7 2 0 0 S", "1919 1919 4 25 7 2 0 1 D", "1919 1919 10 1 7 0 0 0 S", "1942 1942 1 9 7 2 0 1 W", "1945 1945 7 14 7 23 1 1 P", "1945 1945 8 30 7 2 0 0 S", "1965 1965 3 0 8 0 0 2 DD", "1965 1965 9 0 8 2 0 0 S", "1980 1986 3 0 8 2 0 1 D", "1980 2006 9 0 8 2 0 0 S", "1987 2006 3 1 0 2 0 1 D"],Chicago: ["1920 1920 5 13 7 2 0 1 D", "1920 1921 9 0 8 2 0 0 S", "1921 1921 2 0 8 2 0 1 D", "1922 1966 3 0 8 2 0 1 D", "1922 1954 8 0 8 2 0 0 S", "1955 1966 9 0 8 2 0 0 S"],CR: ["1979 1980 1 0 8 0 0 1 D", "1979 1980 5 1 0 0 0 0 S", "1991 1992 0 15 6 0 0 1 D", "1991 1991 6 1 7 0 0 0 S", "1992 1992 2 15 7 0 0 0 S"],Vanc: ["1918 1918 3 14 7 2 0 1 D", "1918 1918 9 27 7 2 0 0 S", "1942 1942 1 9 7 2 0 1 W", "1945 1945 7 14 7 23 1 1 P", "1945 1945 8 30 7 2 0 0 S", "1946 1986 3 0 8 2 0 1 D", "1946 1946 9 13 7 2 0 0 S", "1947 1961 8 0 8 2 0 0 S", "1962 2006 9 0 8 2 0 0 S"],Denver: ["1920 1921 2 0 8 2 0 1 D", "1920 1920 9 0 8 2 0 0 S", "1921 1921 4 22 7 2 0 0 S", "1965 1966 3 0 8 2 0 1 D", "1965 1966 9 0 8 2 0 0 S"],Detroit: ["1948 1948 3 0 8 2 0 1 D", "1948 1948 8 0 8 2 0 0 S", "1967 1967 5 14 7 2 0 1 D", "1967 1967 9 0 8 2 0 0 S"],Edm: ["1918 1919 3 8 0 2 0 1 D", "1918 1918 9 27 7 2 0 0 S", "1919 1919 4 27 7 2 0 0 S", "1920 1923 3 0 8 2 0 1 D", "1920 1920 9 0 8 2 0 0 S", "1921 1923 8 0 8 2 0 0 S", "1942 1942 1 9 7 2 0 1 W", "1945 1945 7 14 7 23 1 1 P", "1945 1945 8 0 8 2 0 0 S", "1947 1947 3 0 8 2 0 1 D", "1947 1947 8 0 8 2 0 0 S", "1967 1967 3 0 8 2 0 1 D", "1967 1967 9 0 8 2 0 0 S", "1969 1969 3 0 8 2 0 1 D", "1969 1969 9 0 8 2 0 0 S", "1972 1986 3 0 8 2 0 1 D", "1972 2006 9 0 8 2 0 0 S"],Salv: ["1987 1988 4 1 0 0 0 1 D", "1987 1988 8 0 8 0 0 0 S"],Halifax: ["1916 1916 3 1 7 0 0 1 D", "1916 1916 9 1 7 0 0 0 S", "1920 1920 4 9 7 0 0 1 D", "1920 1920 7 29 7 0 0 0 S", "1921 1921 4 6 7 0 0 1 D", "1921 1922 8 5 7 0 0 0 S", "1922 1922 3 30 7 0 0 1 D", "1923 1925 4 1 0 0 0 1 D", "1923 1923 8 4 7 0 0 0 S", "1924 1924 8 15 7 0 0 0 S", "1925 1925 8 28 7 0 0 0 S", "1926 1926 4 16 7 0 0 1 D", "1926 1926 8 13 7 0 0 0 S", "1927 1927 4 1 7 0 0 1 D", "1927 1927 8 26 7 0 0 0 S", "1928 1931 4 8 0 0 0 1 D", "1928 1928 8 9 7 0 0 0 S", "1929 1929 8 3 7 0 0 0 S", "1930 1930 8 15 7 0 0 0 S", "1931 1932 8 24 1 0 0 0 S", "1932 1932 4 1 7 0 0 1 D", "1933 1933 3 30 7 0 0 1 D", "1933 1933 9 2 7 0 0 0 S", "1934 1934 4 20 7 0 0 1 D", "1934 1934 8 16 7 0 0 0 S", "1935 1935 5 2 7 0 0 1 D", "1935 1935 8 30 7 0 0 0 S", "1936 1936 5 1 7 0 0 1 D", "1936 1936 8 14 7 0 0 0 S", "1937 1938 4 1 0 0 0 1 D", "1937 1941 8 24 1 0 0 0 S", "1939 1939 4 28 7 0 0 1 D", "1940 1941 4 1 0 0 0 1 D", "1946 1949 3 0 8 2 0 1 D", "1946 1949 8 0 8 2 0 0 S", "1951 1954 3 0 8 2 0 1 D", "1951 1954 8 0 8 2 0 0 S", "1956 1959 3 0 8 2 0 1 D", "1956 1959 8 0 8 2 0 0 S", "1962 1973 3 0 8 2 0 1 D", "1962 1973 9 0 8 2 0 0 S"],StJohns: ["1917 1917 3 8 7 2 0 1 D", "1917 1917 8 17 7 2 0 0 S", "1919 1919 4 5 7 23 0 1 D", "1919 1919 7 12 7 23 0 0 S", "1920 1935 4 1 0 23 0 1 D", "1920 1935 9 0 8 23 0 0 S", "1936 1941 4 9 1 0 0 1 D", "1936 1941 9 2 1 0 0 0 S", "1946 1950 4 8 0 2 0 1 D", "1946 1950 9 2 0 2 0 0 S", "1951 1986 3 0 8 2 0 1 D", "1951 1959 8 0 8 2 0 0 S", "1960 1986 9 0 8 2 0 0 S", "1987 1987 3 1 0 0:1 0 1 D", "1987 2006 9 0 8 0:1 0 0 S", "1988 1988 3 1 0 0:1 0 2 DD", "1989 2006 3 1 0 0:1 0 1 D", "2007 2011 2 8 0 0:1 0 1 D", "2007 2010 10 1 0 0:1 0 0 S"],TC: ["1979 1986 3 0 8 2 0 1 D", "1979 2006 9 0 8 2 0 0 S", "1987 2006 3 1 0 2 0 1 D", "2007 9999 2 8 0 2 0 1 D", "2007 9999 10 1 0 2 0 0 S"],Guat: ["1973 1973 10 25 7 0 0 1 D", "1974 1974 1 24 7 0 0 0 S", "1983 1983 4 21 7 0 0 1 D", "1983 1983 8 22 7 0 0 0 S", "1991 1991 2 23 7 0 0 1 D", "1991 1991 8 7 7 0 0 0 S", "2006 2006 3 30 7 0 0 1 D", "2006 2006 9 1 7 0 0 0 S"],Cuba: ["1928 1928 5 10 7 0 0 1 D", "1928 1928 9 10 7 0 0 0 S", "1940 1942 5 1 0 0 0 1 D", "1940 1942 8 1 0 0 0 0 S", "1945 1946 5 1 0 0 0 1 D", "1945 1946 8 1 0 0 0 0 S", "1965 1965 5 1 7 0 0 1 D", "1965 1965 8 30 7 0 0 0 S", "1966 1966 4 29 7 0 0 1 D", "1966 1966 9 2 7 0 0 0 S", "1967 1967 3 8 7 0 0 1 D", "1967 1968 8 8 0 0 0 0 S", "1968 1968 3 14 7 0 0 1 D", "1969 1977 3 0 8 0 0 1 D", "1969 1971 9 0 8 0 0 0 S", "1972 1974 9 8 7 0 0 0 S", "1975 1977 9 0 8 0 0 0 S", "1978 1978 4 7 7 0 0 1 D", "1978 1990 9 8 0 0 0 0 S", "1979 1980 2 15 0 0 0 1 D", "1981 1985 4 5 0 0 0 1 D", "1986 1989 2 14 0 0 0 1 D", "1990 1997 3 1 0 0 0 1 D", "1991 1995 9 8 0 0 2 0 S", "1996 1996 9 6 7 0 2 0 S", "1997 1997 9 12 7 0 2 0 S", "1998 1999 2 0 8 0 2 1 D", "1998 2003 9 0 8 0 2 0 S", "2000 2004 3 1 0 0 2 1 D", "2006 2010 9 0 8 0 2 0 S", "2007 2007 2 8 0 0 2 1 D", "2008 2008 2 15 0 0 2 1 D", "2009 2010 2 8 0 0 2 1 D", "2011 2011 2 15 0 0 2 1 D", "2011 2011 10 13 7 0 2 0 S", "2012 2012 3 1 7 0 2 1 D", "2012 9999 10 1 0 0 2 0 S", "2013 9999 2 8 0 0 2 1 D"],Indianapolis: ["1941 1941 5 22 7 2 0 1 D", "1941 1954 8 0 8 2 0 0 S", "1946 1954 3 0 8 2 0 1 D"],Starke: ["1947 1961 3 0 8 2 0 1 D", "1947 1954 8 0 8 2 0 0 S", "1955 1956 9 0 8 2 0 0 S", "1957 1958 8 0 8 2 0 0 S", "1959 1961 9 0 8 2 0 0 S"],Marengo: ["1951 1951 3 0 8 2 0 1 D", "1951 1951 8 0 8 2 0 0 S", "1954 1960 3 0 8 2 0 1 D", "1954 1960 8 0 8 2 0 0 S"],Pike: ["1955 1955 4 1 7 0 0 1 D", "1955 1960 8 0 8 2 0 0 S", "1956 1964 3 0 8 2 0 1 D", "1961 1964 9 0 8 2 0 0 S"],Perry: ["1946 1946 3 0 8 2 0 1 D", "1946 1946 8 0 8 2 0 0 S", "1953 1954 3 0 8 2 0 1 D", "1953 1959 8 0 8 2 0 0 S", "1955 1955 4 1 7 0 0 1 D", "1956 1963 3 0 8 2 0 1 D", "1960 1960 9 0 8 2 0 0 S", "1961 1961 8 0 8 2 0 0 S", "1962 1963 9 0 8 2 0 0 S"],Vincennes: ["1946 1946 3 0 8 2 0 1 D", "1946 1946 8 0 8 2 0 0 S", "1953 1954 3 0 8 2 0 1 D", "1953 1959 8 0 8 2 0 0 S", "1955 1955 4 1 7 0 0 1 D", "1956 1963 3 0 8 2 0 1 D", "1960 1960 9 0 8 2 0 0 S", "1961 1961 8 0 8 2 0 0 S", "1962 1963 9 0 8 2 0 0 S"],Pulaski: ["1946 1960 3 0 8 2 0 1 D", "1946 1954 8 0 8 2 0 0 S", "1955 1956 9 0 8 2 0 0 S", "1957 1960 8 0 8 2 0 0 S"],Louisville: ["1921 1921 4 1 7 2 0 1 D", "1921 1921 8 1 7 2 0 0 S", "1941 1961 3 0 8 2 0 1 D", "1941 1941 8 0 8 2 0 0 S", "1946 1946 5 2 7 2 0 0 S", "1950 1955 8 0 8 2 0 0 S", "1956 1960 9 0 8 2 0 0 S"],Peru: ["1938 1938 0 1 7 0 0 1 S", "1938 1938 3 1 7 0 0 0", "1938 1939 8 0 8 0 0 1 S", "1939 1940 2 24 0 0 0 0", "1986 1987 0 1 7 0 0 1 S", "1986 1987 3 1 7 0 0 0", "1990 1990 0 1 7 0 0 1 S", "1990 1990 3 1 7 0 0 0", "1994 1994 0 1 7 0 0 1 S", "1994 1994 3 1 7 0 0 0"],CA: ["1948 1948 2 14 7 2 0 1 D", "1949 1949 0 1 7 2 0 0 S", "1950 1966 3 0 8 2 0 1 D", "1950 1961 8 0 8 2 0 0 S", "1962 1966 9 0 8 2 0 0 S"],Nic: ["1979 1980 2 16 0 0 0 1 D", "1979 1980 5 23 1 0 0 0 S", "2005 2005 3 10 7 0 0 1 D", "2005 2005 9 1 0 0 0 0 S", "2006 2006 3 30 7 2 0 1 D", "2006 2006 9 1 0 1 0 0 S"],Menominee: ["1946 1946 3 0 8 2 0 1 D", "1946 1946 8 0 8 2 0 0 S", "1966 1966 3 0 8 2 0 1 D", "1966 1966 9 0 8 2 0 0 S"],Moncton: ["1933 1935 5 8 0 1 0 1 D", "1933 1935 8 8 0 1 0 0 S", "1936 1938 5 1 0 1 0 1 D", "1936 1938 8 1 0 1 0 0 S", "1939 1939 4 27 7 1 0 1 D", "1939 1941 8 21 6 1 0 0 S", "1940 1940 4 19 7 1 0 1 D", "1941 1941 4 4 7 1 0 1 D", "1946 1972 3 0 8 2 0 1 D", "1946 1956 8 0 8 2 0 0 S", "1957 1972 9 0 8 2 0 0 S", "1993 2006 3 1 0 0:1 0 1 D", "1993 2006 9 0 8 0:1 0 0 S"],Uruguay: ["1923 1923 9 2 7 0 0 0:30 HS", "1924 1926 3 1 7 0 0 0", "1924 1925 9 1 7 0 0 0:30 HS", "1933 1935 9 0 8 0 0 0:30 HS", "1934 1936 2 25 6 23:30 2 0", "1936 1936 10 1 7 0 0 0:30 HS", "1937 1941 2 0 8 0 0 0", "1937 1940 9 0 8 0 0 0:30 HS", "1941 1941 7 1 7 0 0 0:30 HS", "1942 1942 0 1 7 0 0 0", "1942 1942 11 14 7 0 0 1 S", "1943 1943 2 14 7 0 0 0", "1959 1959 4 24 7 0 0 1 S", "1959 1959 10 15 7 0 0 0", "1960 1960 0 17 7 0 0 1 S", "1960 1960 2 6 7 0 0 0", "1965 1967 3 1 0 0 0 1 S", "1965 1965 8 26 7 0 0 0", "1966 1967 9 31 7 0 0 0", "1968 1970 4 27 7 0 0 0:30 HS", "1968 1970 11 2 7 0 0 0", "1972 1972 3 24 7 0 0 1 S", "1972 1972 7 15 7 0 0 0", "1974 1974 2 10 7 0 0 0:30 HS", "1974 1974 11 22 7 0 0 1 S", "1976 1976 9 1 7 0 0 0", "1977 1977 11 4 7 0 0 1 S", "1978 1978 3 1 7 0 0 0", "1979 1979 9 1 7 0 0 1 S", "1980 1980 4 1 7 0 0 0", "1987 1987 11 14 7 0 0 1 S", "1988 1988 2 14 7 0 0 0", "1988 1988 11 11 7 0 0 1 S", "1989 1989 2 12 7 0 0 0", "1989 1989 9 29 7 0 0 1 S", "1990 1992 2 1 0 0 0 0", "1990 1991 9 21 0 0 0 1 S", "1992 1992 9 18 7 0 0 1 S", "1993 1993 1 28 7 0 0 0", "2004 2004 8 19 7 0 0 1 S", "2005 2005 2 27 7 2 0 0", "2005 2005 9 9 7 2 0 1 S", "2006 2006 2 12 7 2 0 0", "2006 9999 9 1 0 2 0 1 S", "2007 9999 2 8 0 2 0 0"],Mont: ["1917 1917 2 25 7 2 0 1 D", "1917 1917 3 24 7 0 0 0 S", "1919 1919 2 31 7 2:30 0 1 D", "1919 1919 9 25 7 2:30 0 0 S", "1920 1920 4 2 7 2:30 0 1 D", "1920 1922 9 1 0 2:30 0 0 S", "1921 1921 4 1 7 2 0 1 D", "1922 1922 3 30 7 2 0 1 D", "1924 1924 4 17 7 2 0 1 D", "1924 1926 8 0 8 2:30 0 0 S", "1925 1926 4 1 0 2 0 1 D", "1927 1927 4 1 7 0 0 1 D", "1927 1932 8 0 8 0 0 0 S", "1928 1931 3 0 8 0 0 1 D", "1932 1932 4 1 7 0 0 1 D", "1933 1940 3 0 8 0 0 1 D", "1933 1933 9 1 7 0 0 0 S", "1934 1939 8 0 8 0 0 0 S", "1946 1973 3 0 8 2 0 1 D", "1945 1948 8 0 8 2 0 0 S", "1949 1950 9 0 8 2 0 0 S", "1951 1956 8 0 8 2 0 0 S", "1957 1973 9 0 8 2 0 0 S"],Bahamas: ["1964 1975 9 0 8 2 0 0 S", "1964 1975 3 0 8 2 0 1 D"],NYC: ["1920 1920 2 0 8 2 0 1 D", "1920 1920 9 0 8 2 0 0 S", "1921 1966 3 0 8 2 0 1 D", "1921 1954 8 0 8 2 0 0 S", "1955 1966 9 0 8 2 0 0 S"],Haiti: ["1983 1983 4 8 7 0 0 1 D", "1984 1987 3 0 8 0 0 1 D", "1983 1987 9 0 8 0 0 0 S", "1988 1997 3 1 0 1 2 1 D", "1988 1997 9 0 8 1 2 0 S", "2005 2006 3 1 0 0 0 1 D", "2005 2006 9 0 8 0 0 0 S", "2012 9999 2 8 0 2 0 1 D", "2012 9999 10 1 0 2 0 0 S"],Regina: ["1918 1918 3 14 7 2 0 1 D", "1918 1918 9 27 7 2 0 0 S", "1930 1934 4 1 0 0 0 1 D", "1930 1934 9 1 0 0 0 0 S", "1937 1941 3 8 0 0 0 1 D", "1937 1937 9 8 0 0 0 0 S", "1938 1938 9 1 0 0 0 0 S", "1939 1941 9 8 0 0 0 0 S", "1942 1942 1 9 7 2 0 1 W", "1945 1945 7 14 7 23 1 1 P", "1945 1945 8 0 8 2 0 0 S", "1946 1946 3 8 0 2 0 1 D", "1946 1946 9 8 0 2 0 0 S", "1947 1957 3 0 8 2 0 1 D", "1947 1957 8 0 8 2 0 0 S", "1959 1959 3 0 8 2 0 1 D", "1959 1959 9 0 8 2 0 0 S"],Chile: ["1927 1932 8 1 7 0 0 1 S", "1928 1932 3 1 7 0 0 0", "1942 1942 5 1 7 4 1 0", "1942 1942 7 1 7 5 1 1 S", "1946 1946 6 15 7 4 1 1 S", "1946 1946 8 1 7 3 1 0", "1947 1947 3 1 7 4 1 0", "1968 1968 10 3 7 4 1 1 S", "1969 1969 2 30 7 3 1 0", "1969 1969 10 23 7 4 1 1 S", "1970 1970 2 29 7 3 1 0", "1971 1971 2 14 7 3 1 0", "1970 1972 9 9 0 4 1 1 S", "1972 1986 2 9 0 3 1 0", "1973 1973 8 30 7 4 1 1 S", "1974 1987 9 9 0 4 1 1 S", "1987 1987 3 12 7 3 1 0", "1988 1989 2 9 0 3 1 0", "1988 1988 9 1 0 4 1 1 S", "1989 1989 9 9 0 4 1 1 S", "1990 1990 2 18 7 3 1 0", "1990 1990 8 16 7 4 1 1 S", "1991 1996 2 9 0 3 1 0", "1991 1997 9 9 0 4 1 1 S", "1997 1997 2 30 7 3 1 0", "1998 1998 2 9 0 3 1 0", "1998 1998 8 27 7 4 1 1 S", "1999 1999 3 4 7 3 1 0", "1999 2010 9 9 0 4 1 1 S", "2000 2007 2 9 0 3 1 0", "2008 2008 2 30 7 3 1 0", "2009 2009 2 9 0 3 1 0", "2010 2010 3 1 0 3 1 0", "2011 2011 4 2 0 3 1 0", "2011 2011 7 16 0 4 1 1 S", "2012 9999 3 23 0 3 1 0", "2012 9999 8 2 0 4 1 1 S"],DR: ["1966 1966 9 30 7 0 0 1 D", "1967 1967 1 28 7 0 0 0 S", "1969 1973 9 0 8 0 0 0:30 HD", "1970 1970 1 21 7 0 0 0 S", "1971 1971 0 20 7 0 0 0 S", "1972 1974 0 21 7 0 0 0 S"],"C-Eur": ["1916 1916 3 30 7 23 0 1 S", "1916 1916 9 1 7 1 0 0", "1917 1918 3 15 1 2 2 1 S", "1917 1918 8 15 1 2 2 0", "1940 1940 3 1 7 2 2 1 S", "1942 1942 10 2 7 2 2 0", "1943 1943 2 29 7 2 2 1 S", "1943 1943 9 4 7 2 2 0", "1944 1945 3 1 1 2 2 1 S", "1944 1944 9 2 7 2 2 0", "1945 1945 8 16 7 2 2 0", "1977 1980 3 1 0 2 2 1 S", "1977 1977 8 0 8 2 2 0"
            , "1978 1978 9 1 7 2 2 0", "1979 1995 8 0 8 2 2 0", "1981 9999 2 0 8 2 2 1 S", "1996 9999 9 0 8 2 2 0"],Swift: ["1957 1957 3 0 8 2 0 1 D", "1957 1957 9 0 8 2 0 0 S", "1959 1961 3 0 8 2 0 1 D", "1959 1959 9 0 8 2 0 0 S", "1960 1961 8 0 8 2 0 0 S"],Hond: ["1987 1988 4 1 0 0 0 1 D", "1987 1988 8 0 8 0 0 0 S", "2006 2006 4 1 0 0 0 1 D", "2006 2006 7 1 1 0 0 0 S"],Thule: ["1991 1992 2 0 8 2 0 1 D", "1991 1992 8 0 8 2 0 0 S", "1993 2006 3 1 0 2 0 1 D", "1993 2006 9 0 8 2 0 0 S", "2007 9999 2 8 0 2 0 1 D", "2007 9999 10 1 0 2 0 0 S"],Toronto: ["1919 1919 2 30 7 23:30 0 1 D", "1919 1919 9 26 7 0 0 0 S", "1920 1920 4 2 7 2 0 1 D", "1920 1920 8 26 7 0 0 0 S", "1921 1921 4 15 7 2 0 1 D", "1921 1921 8 15 7 2 0 0 S", "1922 1923 4 8 0 2 0 1 D", "1922 1926 8 15 0 2 0 0 S", "1924 1927 4 1 0 2 0 1 D", "1927 1932 8 0 8 2 0 0 S", "1928 1931 3 0 8 2 0 1 D", "1932 1932 4 1 7 2 0 1 D", "1933 1940 3 0 8 2 0 1 D", "1933 1933 9 1 7 2 0 0 S", "1934 1939 8 0 8 2 0 0 S", "1945 1946 8 0 8 2 0 0 S", "1946 1946 3 0 8 2 0 1 D", "1947 1949 3 0 8 0 0 1 D", "1947 1948 8 0 8 0 0 0 S", "1949 1949 10 0 8 0 0 0 S", "1950 1973 3 0 8 2 0 1 D", "1950 1950 10 0 8 2 0 0 S", "1951 1956 8 0 8 2 0 0 S", "1957 1973 9 0 8 2 0 0 S"],Winn: ["1916 1916 3 23 7 0 0 1 D", "1916 1916 8 17 7 0 0 0 S", "1918 1918 3 14 7 2 0 1 D", "1918 1918 9 27 7 2 0 0 S", "1937 1937 4 16 7 2 0 1 D", "1937 1937 8 26 7 2 0 0 S", "1942 1942 1 9 7 2 0 1 W", "1945 1945 7 14 7 23 1 1 P", "1945 1945 8 0 8 2 0 0 S", "1946 1946 4 12 7 2 0 1 D", "1946 1946 9 13 7 2 0 0 S", "1947 1949 3 0 8 2 0 1 D", "1947 1949 8 0 8 2 0 0 S", "1950 1950 4 1 7 2 0 1 D", "1950 1950 8 30 7 2 0 0 S", "1951 1960 3 0 8 2 0 1 D", "1951 1958 8 0 8 2 0 0 S", "1959 1959 9 0 8 2 0 0 S", "1960 1960 8 0 8 2 0 0 S", "1963 1963 3 0 8 2 0 1 D", "1963 1963 8 22 7 2 0 0 S", "1966 1986 3 0 8 2 2 1 D", "1966 2005 9 0 8 2 2 0 S", "1987 2005 3 1 0 2 2 1 D"],Aus: ["1917 1917 0 1 7 0:1 0 1", "1917 1917 2 25 7 2 0 0", "1942 1942 0 1 7 2 0 1", "1942 1942 2 29 7 2 0 0", "1942 1942 8 27 7 2 0 1", "1943 1944 2 0 8 2 0 0", "1943 1943 9 3 7 2 0 1"],AT: ["1967 1967 9 1 0 2 2 1", "1968 1968 2 0 8 2 2 0", "1968 1985 9 0 8 2 2 1", "1969 1971 2 8 0 2 2 0", "1972 1972 1 0 8 2 2 0", "1973 1981 2 1 0 2 2 0", "1982 1983 2 0 8 2 2 0", "1984 1986 2 1 0 2 2 0", "1986 1986 9 15 0 2 2 1", "1987 1990 2 15 0 2 2 0", "1987 1987 9 22 0 2 2 1", "1988 1990 9 0 8 2 2 1", "1991 1999 9 1 0 2 2 1", "1991 2005 2 0 8 2 2 0", "2000 2000 7 0 8 2 2 1", "2001 9999 9 1 0 2 2 1", "2006 2006 3 1 0 2 2 0", "2007 2007 2 0 8 2 2 0", "2008 9999 3 1 0 2 2 0"],NZAQ: ["1974 1974 10 3 7 2 2 1 D", "1975 1988 9 0 8 2 2 1 D", "1989 1989 9 8 7 2 2 1 D", "1990 2006 9 1 0 2 2 1 D", "1975 1975 1 23 7 2 2 0 S", "1976 1989 2 1 0 2 2 0 S", "1990 2007 2 15 0 2 2 0 S", "2007 9999 8 0 8 2 2 1 D", "2008 9999 3 1 0 2 2 0 S"],ArgAQ: ["1964 1966 2 1 7 0 0 0", "1964 1966 9 15 7 0 0 1 S", "1967 1967 3 2 7 0 0 0", "1967 1968 9 1 0 0 0 1 S", "1968 1969 3 1 0 0 0 0", "1974 1974 0 23 7 0 0 1 S", "1974 1974 4 1 7 0 0 0"],ChileAQ: ["1972 1986 2 9 0 3 1 0", "1974 1987 9 9 0 4 1 1 S", "1987 1987 3 12 7 3 1 0", "1988 1989 2 9 0 3 1 0", "1988 1988 9 1 0 4 1 1 S", "1989 1989 9 9 0 4 1 1 S", "1990 1990 2 18 7 3 1 0", "1990 1990 8 16 7 4 1 1 S", "1991 1996 2 9 0 3 1 0", "1991 1997 9 9 0 4 1 1 S", "1997 1997 2 30 7 3 1 0", "1998 1998 2 9 0 3 1 0", "1998 1998 8 27 7 4 1 1 S", "1999 1999 3 4 7 3 1 0", "1999 2010 9 9 0 4 1 1 S", "2000 2007 2 9 0 3 1 0", "2008 2008 2 30 7 3 1 0", "2009 2009 2 9 0 3 1 0", "2010 2010 3 1 0 3 1 0", "2011 2011 4 2 0 3 1 0", "2011 2011 7 16 0 4 1 1 S", "2012 9999 3 23 0 3 1 0", "2012 9999 8 2 0 4 1 1 S"],Norway: ["1916 1916 4 22 7 1 0 1 S", "1916 1916 8 30 7 0 0 0", "1945 1945 3 2 7 2 2 1 S", "1945 1945 9 1 7 2 2 0", "1959 1964 2 15 0 2 2 1 S", "1959 1965 8 15 0 2 2 0", "1965 1965 3 25 7 2 2 1 S"],RussiaAsia: ["1981 1984 3 1 7 0 0 1 S", "1981 1983 9 1 7 0 0 0", "1984 1991 8 0 8 2 2 0", "1985 1991 2 0 8 2 2 1 S", "1992 1992 2 6 8 23 0 1 S", "1992 1992 8 6 8 23 0 0", "1993 9999 2 0 8 2 2 1 S", "1993 1995 8 0 8 2 2 0", "1996 9999 9 0 8 2 2 0"],Jordan: ["1973 1973 5 6 7 0 0 1 S", "1973 1975 9 1 7 0 0 0", "1974 1977 4 1 7 0 0 1 S", "1976 1976 10 1 7 0 0 0", "1977 1977 9 1 7 0 0 0", "1978 1978 3 30 7 0 0 1 S", "1978 1978 8 30 7 0 0 0", "1985 1985 3 1 7 0 0 1 S", "1985 1985 9 1 7 0 0 0", "1986 1988 3 1 5 0 0 1 S", "1986 1990 9 1 5 0 0 0", "1989 1989 4 8 7 0 0 1 S", "1990 1990 3 27 7 0 0 1 S", "1991 1991 3 17 7 0 0 1 S", "1991 1991 8 27 7 0 0 0", "1992 1992 3 10 7 0 0 1 S", "1992 1993 9 1 5 0 0 0", "1993 1998 3 1 5 0 0 1 S", "1994 1994 8 15 5 0 0 0", "1995 1998 8 15 5 0 2 0", "1999 1999 6 1 7 0 2 1 S", "1999 2002 8 5 8 0 2 0", "2000 2001 2 4 8 0 2 1 S", "2002 9999 2 4 8 24 0 1 S", "2003 2003 9 24 7 0 2 0", "2004 2004 9 15 7 0 2 0", "2005 2005 8 5 8 0 2 0", "2006 2011 9 5 8 0 2 0", "2013 9999 9 5 8 0 2 0"],Russia: ["1917 1917 6 1 7 23 0 1 MST", "1917 1917 11 28 7 0 0 0 MMT", "1918 1918 4 31 7 22 0 2 MDST", "1918 1918 8 16 7 1 0 1 MST", "1919 1919 4 31 7 23 0 2 MDST", "1919 1919 6 1 7 2 0 1 S", "1919 1919 7 16 7 0 0 0", "1921 1921 1 14 7 23 0 1 S", "1921 1921 2 20 7 23 0 2 M", "1921 1921 8 1 7 0 0 1 S", "1921 1921 9 1 7 0 0 0", "1981 1984 3 1 7 0 0 1 S", "1981 1983 9 1 7 0 0 0", "1984 1991 8 0 8 2 2 0", "1985 1991 2 0 8 2 2 1 S", "1992 1992 2 6 8 23 0 1 S", "1992 1992 8 6 8 23 0 0", "1993 2010 2 0 8 2 2 1 S", "1993 1995 8 0 8 2 2 0", "1996 2010 9 0 8 2 2 0"],Iraq: ["1982 1982 4 1 7 0 0 1 D", "1982 1984 9 1 7 0 0 0 S", "1983 1983 2 31 7 0 0 1 D", "1984 1985 3 1 7 0 0 1 D", "1985 1990 8 0 8 1 2 0 S", "1986 1990 2 0 8 1 2 1 D", "1991 2007 3 1 7 3 2 1 D", "1991 2007 9 1 7 3 2 0 S"],EUAsia: ["1981 9999 2 0 8 1 1 1 S", "1979 1995 8 0 8 1 1 0", "1996 9999 9 0 8 1 1 0"],Azer: ["1997 9999 2 0 8 4 0 1 S", "1997 9999 9 0 8 5 0 0"],Lebanon: ["1920 1920 2 28 7 0 0 1 S", "1920 1920 9 25 7 0 0 0", "1921 1921 3 3 7 0 0 1 S", "1921 1921 9 3 7 0 0 0", "1922 1922 2 26 7 0 0 1 S", "1922 1922 9 8 7 0 0 0", "1923 1923 3 22 7 0 0 1 S", "1923 1923 8 16 7 0 0 0", "1957 1961 4 1 7 0 0 1 S", "1957 1961 9 1 7 0 0 0", "1972 1972 5 22 7 0 0 1 S", "1972 1977 9 1 7 0 0 0", "1973 1977 4 1 7 0 0 1 S", "1978 1978 3 30 7 0 0 1 S", "1978 1978 8 30 7 0 0 0", "1984 1987 4 1 7 0 0 1 S", "1984 1991 9 16 7 0 0 0", "1988 1988 5 1 7 0 0 1 S", "1989 1989 4 10 7 0 0 1 S", "1990 1992 4 1 7 0 0 1 S", "1992 1992 9 4 7 0 0 0", "1993 9999 2 0 8 0 0 1 S", "1993 1998 8 0 8 0 0 0", "1999 9999 9 0 8 0 0 0"],Kyrgyz: ["1992 1996 3 7 0 0 2 1 S", "1992 1996 8 0 8 0 0 0", "1997 2005 2 0 8 2:30 0 1 S", "1997 2004 9 0 8 2:30 0 0"],Mongol: ["1983 1984 3 1 7 0 0 1 S", "1983 1983 9 1 7 0 0 0", "1985 1998 2 0 8 0 0 1 S", "1984 1998 8 0 8 0 0 0", "2001 2001 3 6 8 2 0 1 S", "2001 2006 8 6 8 2 0 0", "2002 2006 2 6 8 2 0 1 S"],PRC: ["1986 1986 4 4 7 0 0 1 D", "1986 1991 8 11 0 0 0 0 S", "1987 1991 3 10 0 0 0 1 D"],Syria: ["1920 1923 3 15 0 2 0 1 S", "1920 1923 9 1 0 2 0 0", "1962 1962 3 29 7 2 0 1 S", "1962 1962 9 1 7 2 0 0", "1963 1965 4 1 7 2 0 1 S", "1963 1963 8 30 7 2 0 0", "1964 1964 9 1 7 2 0 0", "1965 1965 8 30 7 2 0 0", "1966 1966 3 24 7 2 0 1 S", "1966 1976 9 1 7 2 0 0", "1967 1978 4 1 7 2 0 1 S", "1977 1978 8 1 7 2 0 0", "1983 1984 3 9 7 2 0 1 S", "1983 1984 9 1 7 2 0 0", "1986 1986 1 16 7 2 0 1 S", "1986 1986 9 9 7 2 0 0", "1987 1987 2 1 7 2 0 1 S", "1987 1988 9 31 7 2 0 0", "1988 1988 2 15 7 2 0 1 S", "1989 1989 2 31 7 2 0 1 S", "1989 1989 9 1 7 2 0 0", "1990 1990 3 1 7 2 0 1 S", "1990 1990 8 30 7 2 0 0", "1991 1991 3 1 7 0 0 1 S", "1991 1992 9 1 7 0 0 0", "1992 1992 3 8 7 0 0 1 S", "1993 1993 2 26 7 0 0 1 S", "1993 1993 8 25 7 0 0 0", "1994 1996 3 1 7 0 0 1 S", "1994 2005 9 1 7 0 0 0", "1997 1998 2 1 8 0 0 1 S", "1999 2006 3 1 7 0 0 1 S", "2006 2006 8 22 7 0 0 0", "2007 2007 2 5 8 0 0 1 S", "2007 2007 10 1 5 0 0 0", "2008 2008 3 1 5 0 0 1 S", "2008 2008 10 1 7 0 0 0", "2009 2009 2 5 8 0 0 1 S", "2010 2011 3 1 5 0 0 1 S", "2012 9999 2 5 8 0 0 1 S", "2009 9999 9 5 8 0 0 0"],Dhaka: ["2009 2009 5 19 7 23 0 1 S", "2009 2009 11 31 7 23:59 0 0"],Zion: ["1940 1940 5 1 7 0 0 1 D", "1942 1944 10 1 7 0 0 0 S", "1943 1943 3 1 7 2 0 1 D", "1944 1944 3 1 7 0 0 1 D", "1945 1945 3 16 7 0 0 1 D", "1945 1945 10 1 7 2 0 0 S", "1946 1946 3 16 7 2 0 1 D", "1946 1946 10 1 7 0 0 0 S", "1948 1948 4 23 7 0 0 2 DD", "1948 1948 8 1 7 0 0 1 D", "1948 1949 10 1 7 2 0 0 S", "1949 1949 4 1 7 0 0 1 D", "1950 1950 3 16 7 0 0 1 D", "1950 1950 8 15 7 3 0 0 S", "1951 1951 3 1 7 0 0 1 D", "1951 1951 10 11 7 3 0 0 S", "1952 1952 3 20 7 2 0 1 D", "1952 1952 9 19 7 3 0 0 S", "1953 1953 3 12 7 2 0 1 D", "1953 1953 8 13 7 3 0 0 S", "1954 1954 5 13 7 0 0 1 D", "1954 1954 8 12 7 0 0 0 S", "1955 1955 5 11 7 2 0 1 D", "1955 1955 8 11 7 0 0 0 S", "1956 1956 5 3 7 0 0 1 D", "1956 1956 8 30 7 3 0 0 S", "1957 1957 3 29 7 2 0 1 D", "1957 1957 8 22 7 0 0 0 S", "1974 1974 6 7 7 0 0 1 D", "1974 1974 9 13 7 0 0 0 S", "1975 1975 3 20 7 0 0 1 D", "1975 1975 7 31 7 0 0 0 S", "1985 1985 3 14 7 0 0 1 D", "1985 1985 8 15 7 0 0 0 S", "1986 1986 4 18 7 0 0 1 D", "1986 1986 8 7 7 0 0 0 S", "1987 1987 3 15 7 0 0 1 D", "1987 1987 8 13 7 0 0 0 S", "1988 1988 3 9 7 0 0 1 D", "1988 1988 8 3 7 0 0 0 S", "1989 1989 3 30 7 0 0 1 D", "1989 1989 8 3 7 0 0 0 S", "1990 1990 2 25 7 0 0 1 D", "1990 1990 7 26 7 0 0 0 S", "1991 1991 2 24 7 0 0 1 D", "1991 1991 8 1 7 0 0 0 S", "1992 1992 2 29 7 0 0 1 D", "1992 1992 8 6 7 0 0 0 S", "1993 1993 3 2 7 0 0 1 D", "1993 1993 8 5 7 0 0 0 S", "1994 1994 3 1 7 0 0 1 D", "1994 1994 7 28 7 0 0 0 S", "1995 1995 2 31 7 0 0 1 D", "1995 1995 8 3 7 0 0 0 S", "1996 1996 2 15 7 0 0 1 D", "1996 1996 8 16 7 0 0 0 S", "1997 1997 2 21 7 0 0 1 D", "1997 1997 8 14 7 0 0 0 S", "1998 1998 2 20 7 0 0 1 D", "1998 1998 8 6 7 0 0 0 S", "1999 1999 3 2 7 2 0 1 D", "1999 1999 8 3 7 2 0 0 S", "2000 2000 3 14 7 2 0 1 D", "2000 2000 9 6 7 1 0 0 S", "2001 2001 3 9 7 1 0 1 D", "2001 2001 8 24 7 1 0 0 S", "2002 2002 2 29 7 1 0 1 D", "2002 2002 9 7 7 1 0 0 S", "2003 2003 2 28 7 1 0 1 D", "2003 2003 9 3 7 1 0 0 S", "2004 2004 3 7 7 1 0 1 D", "2004 2004 8 22 7 1 0 0 S", "2005 2005 3 1 7 2 0 1 D", "2005 2005 9 9 7 2 0 0 S", "2006 2010 2 26 5 2 0 1 D", "2006 2006 9 1 7 2 0 0 S", "2007 2007 8 16 7 2 0 0 S", "2008 2008 9 5 7 2 0 0 S", "2009 2009 8 27 7 2 0 0 S", "2010 2010 8 12 7 2 0 0 S", "2011 2011 3 1 7 2 0 1 D", "2011 2011 9 2 7 2 0 0 S", "2012 2012 2 26 5 2 0 1 D", "2012 2012 8 23 7 2 0 0 S", "2013 9999 2 23 5 2 0 1 D", "2013 2026 9 2 0 2 0 0 S", "2027 2027 9 3 1 2 0 0 S", "2028 9999 9 2 0 2 0 0 S"],EgyptAsia: ["1957 1957 4 10 7 0 0 1 S", "1957 1958 9 1 7 0 0 0", "1958 1958 4 1 7 0 0 1 S", "1959 1967 4 1 7 1 0 1 S", "1959 1965 8 30 7 3 0 0", "1966 1966 9 1 7 3 0 0"],Palestine: ["1999 2005 3 15 5 0 0 1 S", "1999 2003 9 15 5 0 0 0", "2004 2004 9 1 7 1 0 0", "2005 2005 9 4 7 2 0 0", "2006 2007 3 1 7 0 0 1 S", "2006 2006 8 22 7 0 0 0", "2007 2007 8 8 4 2 0 0", "2008 2009 2 5 8 0 0 1 S", "2008 2008 8 1 7 0 0 0", "2009 2009 8 1 5 1 0 0", "2010 2010 2 26 7 0 0 1 S", "2010 2010 7 11 7 0 0 0", "2011 2011 3 1 7 0:1 0 1 S", "2011 2011 7 1 7 0 0 0", "2011 2011 7 30 7 0 0 1 S", "2011 2011 8 30 7 0 0 0", "2012 9999 2 4 8 24 0 1 S", "2012 9999 8 21 5 1 0 0"],HK: ["1941 1941 3 1 7 3:30 0 1 S", "1941 1941 8 30 7 3:30 0 0", "1946 1946 3 20 7 3:30 0 1 S", "1946 1946 11 1 7 3:30 0 0", "1947 1947 3 13 7 3:30 0 1 S", "1947 1947 11 30 7 3:30 0 0", "1948 1948 4 2 7 3:30 0 1 S", "1948 1951 9 0 8 3:30 0 0", "1952 1952 9 25 7 3:30 0 0", "1949 1953 3 1 0 3:30 0 1 S", "1953 1953 10 1 7 3:30 0 0", "1954 1964 2 18 0 3:30 0 1 S", "1954 1954 9 31 7 3:30 0 0", "1955 1964 10 1 0 3:30 0 0", "1965 1976 3 16 0 3:30 0 1 S", "1965 1976 9 16 0 3:30 0 0", "1973 1973 11 30 7 3:30 0 1 S", "1979 1979 4 8 0 3:30 0 1 S", "1979 1979 9 16 0 3:30 0 0"],Pakistan: ["2002 2002 3 2 0 0:1 0 1 S", "2002 2002 9 2 0 0:1 0 0", "2008 2008 5 1 7 0 0 1 S", "2008 2008 10 1 7 0 0 0", "2009 2009 3 15 7 0 0 1 S", "2009 2009 10 1 7 0 0 0"],NBorneo: ["1935 1941 8 14 7 0 0 0:20 TS", "1935 1941 11 14 7 0 0 0"],Macau: ["1961 1962 2 16 0 3:30 0 1 S", "1961 1964 10 1 0 3:30 0 0", "1963 1963 2 16 0 0 0 1 S", "1964 1964 2 16 0 3:30 0 1 S", "1965 1965 2 16 0 0 0 1 S", "1965 1965 9 31 7 0 0 0", "1966 1971 3 16 0 3:30 0 1 S", "1966 1971 9 16 0 3:30 0 0", "1972 1974 3 15 0 0 0 1 S", "1972 1973 9 15 0 0 0 0", "1974 1977 9 15 0 3:30 0 0", "1975 1977 3 15 0 3:30 0 1 S", "1978 1980 3 15 0 0 0 1 S", "1978 1980 9 15 0 0 0 0"],Phil: ["1936 1936 10 1 7 0 0 1 S", "1937 1937 1 1 7 0 0 0", "1954 1954 3 12 7 0 0 1 S", "1954 1954 6 1 7 0 0 0", "1978 1978 2 22 7 0 0 1 S", "1978 1978 8 21 7 0 0 0"],Cyprus: ["1975 1975 3 13 7 0 0 1 S", "1975 1975 9 12 7 0 0 0", "1976 1976 4 15 7 0 0 1 S", "1976 1976 9 11 7 0 0 0", "1977 1980 3 1 0 0 0 1 S", "1977 1977 8 25 7 0 0 0", "1978 1978 9 2 7 0 0 0", "1979 1997 8 0 8 0 0 0", "1981 1998 2 0 8 0 0 1 S"],ROK: ["1960 1960 4 15 7 0 0 1 D", "1960 1960 8 13 7 0 0 0 S", "1987 1988 4 8 0 0 0 1 D", "1987 1988 9 8 0 0 0 0 S"],Shang: ["1940 1940 5 3 7 0 0 1 D", "1940 1941 9 1 7 0 0 0 S", "1941 1941 2 16 7 0 0 1 D"],Taiwan: ["1945 1951 4 1 7 0 0 1 D", "1945 1951 9 1 7 0 0 0 S", "1952 1952 2 1 7 0 0 1 D", "1952 1954 10 1 7 0 0 0 S", "1953 1959 3 1 7 0 0 1 D", "1955 1961 9 1 7 0 0 0 S", "1960 1961 5 1 7 0 0 1 D", "1974 1975 3 1 7 0 0 1 D", "1974 1975 9 1 7 0 0 0 S", "1979 1979 5 30 7 0 0 1 D", "1979 1979 8 30 7 0 0 0 S"],"E-EurAsia": ["1981 9999 2 0 8 0 0 1 S", "1979 1995 8 0 8 0 0 0", "1996 9999 9 0 8 0 0 0"],Iran: ["1978 1980 2 21 7 0 0 1 D", "1978 1978 9 21 7 0 0 0 S", "1979 1979 8 19 7 0 0 0 S", "1980 1980 8 23 7 0 0 0 S", "1991 1991 4 3 7 0 0 1 D", "1992 1995 2 22 7 0 0 1 D", "1991 1995 8 22 7 0 0 0 S", "1996 1996 2 21 7 0 0 1 D", "1996 1996 8 21 7 0 0 0 S", "1997 1999 2 22 7 0 0 1 D", "1997 1999 8 22 7 0 0 0 S", "2000 2000 2 21 7 0 0 1 D", "2000 2000 8 21 7 0 0 0 S", "2001 2003 2 22 7 0 0 1 D", "2001 2003 8 22 7 0 0 0 S", "2004 2004 2 21 7 0 0 1 D", "2004 2004 8 21 7 0 0 0 S", "2005 2005 2 22 7 0 0 1 D", "2005 2005 8 22 7 0 0 0 S", "2008 2008 2 21 7 0 0 1 D", "2008 2008 8 21 7 0 0 0 S", "2009 2011 2 22 7 0 0 1 D", "2009 2011 8 22 7 0 0 0 S", "2012 2012 2 21 7 0 0 1 D", "2012 2012 8 21 7 0 0 0 S", "2013 2015 2 22 7 0 0 1 D", "2013 2015 8 22 7 0 0 0 S", "2016 2016 2 21 7 0 0 1 D", "2016 2016 8 21 7 0 0 0 S", "2017 2019 2 22 7 0 0 1 D", "2017 2019 8 22 7 0 0 0 S", "2020 2020 2 21 7 0 0 1 D", "2020 2020 8 21 7 0 0 0 S", "2021 2023 2 22 7 0 0 1 D", "2021 2023 8 22 7 0 0 0 S", "2024 2024 2 21 7 0 0 1 D", "2024 2024 8 21 7 0 0 0 S", "2025 2027 2 22 7 0 0 1 D", "2025 2027 8 22 7 0 0 0 S", "2028 2029 2 21 7 0 0 1 D", "2028 2029 8 21 7 0 0 0 S", "2030 2031 2 22 7 0 0 1 D", "2030 2031 8 22 7 0 0 0 S", "2032 2033 2 21 7 0 0 1 D", "2032 2033 8 21 7 0 0 0 S", "2034 2035 2 22 7 0 0 1 D", "2034 2035 8 22 7 0 0 0 S", "2036 2037 2 21 7 0 0 1 D", "2036 2037 8 21 7 0 0 0 S"],Japan: ["1948 1948 4 1 0 2 0 1 D", "1948 1951 8 8 6 2 0 0 S", "1949 1949 3 1 0 2 0 1 D", "1950 1951 4 1 0 2 0 1 D"],Port: ["1916 1916 5 17 7 23 0 1 S", "1916 1916 10 1 7 1 0 0", "1917 1917 1 28 7 23 2 1 S", "1917 1921 9 14 7 23 2 0", "1918 1918 2 1 7 23 2 1 S", "1919 1919 1 28 7 23 2 1 S", "1920 1920 1 29 7 23 2 1 S", "1921 1921 1 28 7 23 2 1 S", "1924 1924 3 16 7 23 2 1 S", "1924 1924 9 14 7 23 2 0", "1926 1926 3 17 7 23 2 1 S", "1926 1929 9 1 6 23 2 0", "1927 1927 3 9 7 23 2 1 S", "1928 1928 3 14 7 23 2 1 S", "1929 1929 3 20 7 23 2 1 S", "1931 1931 3 18 7 23 2 1 S", "1931 1932 9 1 6 23 2 0", "1932 1932 3 2 7 23 2 1 S", "1934 1934 3 7 7 23 2 1 S", "1934 1938 9 1 6 23 2 0", "1935 1935 2 30 7 23 2 1 S", "1936 1936 3 18 7 23 2 1 S", "1937 1937 3 3 7 23 2 1 S", "1938 1938 2 26 7 23 2 1 S", "1939 1939 3 15 7 23 2 1 S", "1939 1939 10 18 7 23 2 0", "1940 1940 1 24 7 23 2 1 S", "1940 1941 9 5 7 23 2 0", "1941 1941 3 5 7 23 2 1 S", "1942 1945 2 8 6 23 2 1 S", "1942 1942 3 25 7 22 2 2 M", "1942 1942 7 15 7 22 2 1 S", "1942 1945 9 24 6 23 2 0", "1943 1943 3 17 7 22 2 2 M", "1943 1945 7 25 6 22 2 1 S", "1944 1945 3 21 6 22 2 2 M", "1946 1946 3 1 6 23 2 1 S", "1946 1946 9 1 6 23 2 0", "1947 1949 3 1 0 2 2 1 S", "1947 1949 9 1 0 2 2 0", "1951 1965 3 1 0 2 2 1 S", "1951 1965 9 1 0 2 2 0", "1977 1977 2 27 7 0 2 1 S", "1977 1977 8 25 7 0 2 0", "1978 1979 3 1 0 0 2 1 S", "1978 1978 9 1 7 0 2 0", "1979 1982 8 0 8 1 2 0", "1980 1980 2 0 8 0 2 1 S", "1981 1982 2 0 8 1 2 1 S", "1983 1983 2 0 8 2 2 1 S"],"W-Eur": ["1977 1980 3 1 0 1 2 1 S", "1977 1977 8 0 8 1 2 0", "1978 1978 9 1 7 1 2 0", "1979 1995 8 0 8 1 2 0", "1981 9999 2 0 8 1 2 1 S", "1996 9999 9 0 8 1 2 0"],Iceland: ["1917 1918 1 19 7 23 0 1 S", "1917 1917 9 21 7 1 0 0", "1918 1918 10 16 7 1 0 0", "1939 1939 3 29 7 23 0 1 S", "1939 1939 10 29 7 2 0 0", "1940 1940 1 25 7 2 0 1 S", "1940 1940 10 3 7 2 0 0", "1941 1941 2 2 7 1 2 1 S", "1941 1941 10 2 7 1 2 0", "1942 1942 2 8 7 1 2 1 S", "1942 1942 9 25 7 1 2 0", "1943 1946 2 1 0 1 2 1 S", "1943 1948 9 22 0 1 2 0", "1947 1967 3 1 0 1 2 1 S", "1949 1949 9 30 7 1 2 0", "1950 1966 9 22 0 1 2 0", "1967 1967 9 29 7 1 2 0"],Falk: ["1937 1938 8 0 8 0 0 1 S", "1938 1942 2 19 0 0 0 0", "1939 1939 9 1 7 0 0 1 S", "1940 1942 8 0 8 0 0 1 S", "1943 1943 0 1 7 0 0 0", "1983 1983 8 0 8 0 0 1 S", "1984 1985 3 0 8 0 0 0", "1984 1984 8 16 7 0 0 1 S", "1985 2000 8 9 0 0 0 1 S", "1986 2000 3 16 0 0 0 0", "2001 2010 3 15 0 2 0 0", "2001 2010 8 1 0 2 0 1 S"],AS: ["1971 1985 9 0 8 2 2 1", "1986 1986 9 19 7 2 2 1", "1987 2007 9 0 8 2 2 1", "1972 1972 1 27 7 2 2 0", "1973 1985 2 1 0 2 2 0", "1986 1990 2 15 0 2 2 0", "1991 1991 2 3 7 2 2 0", "1992 1992 2 22 7 2 2 0", "1993 1993 2 7 7 2 2 0", "1994 1994 2 20 7 2 2 0", "1995 2005 2 0 8 2 2 0", "2006 2006 3 2 7 2 2 0", "2007 2007 2 0 8 2 2 0", "2008 9999 3 1 0 2 2 0", "2008 9999 9 1 0 2 2 1"],AQ: ["1971 1971 9 0 8 2 2 1", "1972 1972 1 0 8 2 2 0", "1989 1991 9 0 8 2 2 1", "1990 1992 2 1 0 2 2 0"],AN: ["1971 1985 9 0 8 2 2 1", "1972 1972 1 27 7 2 2 0", "1973 1981 2 1 0 2 2 0", "1982 1982 3 1 0 2 2 0", "1983 1985 2 1 0 2 2 0", "1986 1989 2 15 0 2 2 0", "1986 1986 9 19 7 2 2 1", "1987 1999 9 0 8 2 2 1", "1990 1995 2 1 0 2 2 0", "1996 2005 2 0 8 2 2 0", "2000 2000 7 0 8 2 2 1", "2001 2007 9 0 8 2 2 1", "2006 2006 3 1 0 2 2 0", "2007 2007 2 0 8 2 2 0", "2008 9999 3 1 0 2 2 0", "2008 9999 9 1 0 2 2 1"],AW: ["1974 1974 9 0 8 2 2 1", "1975 1975 2 1 0 2 2 0", "1983 1983 9 0 8 2 2 1", "1984 1984 2 1 0 2 2 0", "1991 1991 10 17 7 2 2 1", "1992 1992 2 1 0 2 2 0", "2006 2006 11 3 7 2 2 1", "2007 2009 2 0 8 2 2 0", "2007 2008 9 0 8 2 2 1"],Holiday: ["1992 1993 9 0 8 2 2 1", "1993 1994 2 1 0 2 2 0"],LH: ["1981 1984 9 0 8 2 0 1", "1982 1985 2 1 0 2 0 0", "1985 1985 9 0 8 2 0 0:30", "1986 1989 2 15 0 2 0 0", "1986 1986 9 19 7 2 0 0:30", "1987 1999 9 0 8 2 0 0:30", "1990 1995 2 1 0 2 0 0", "1996 2005 2 0 8 2 0 0", "2000 2000 7 0 8 2 0 0:30", "2001 2007 9 0 8 2 0 0:30", "2006 2006 3 1 0 2 0 0", "2007 2007 2 0 8 2 0 0", "2008 9999 3 1 0 2 0 0", "2008 9999 9 1 0 2 0 0:30"],AV: ["1971 1985 9 0 8 2 2 1", "1972 1972 1 0 8 2 2 0", "1973 1985 2 1 0 2 2 0", "1986 1990 2 15 0 2 2 0", "1986 1987 9 15 0 2 2 1", "1988 1999 9 0 8 2 2 1", "1991 1994 2 1 0 2 2 0", "1995 2005 2 0 8 2 2 0", "2000 2000 7 0 8 2 2 1", "2001 2007 9 0 8 2 2 1", "2006 2006 3 1 0 2 2 0", "2007 2007 2 0 8 2 2 0", "2008 9999 3 1 0 2 2 0", "2008 9999 9 1 0 2 2 1"],Neth: ["1916 1916 4 1 7 0 0 1 NST", "1916 1916 9 1 7 0 0 0 AMT", "1917 1917 3 16 7 2 2 1 NST", "1917 1917 8 17 7 2 2 0 AMT", "1918 1921 3 1 1 2 2 1 NST", "1918 1921 8 1 8 2 2 0 AMT", "1922 1922 2 0 8 2 2 1 NST", "1922 1936 9 2 0 2 2 0 AMT", "1923 1923 5 1 5 2 2 1 NST", "1924 1924 2 0 8 2 2 1 NST", "1925 1925 5 1 5 2 2 1 NST", "1926 1931 4 15 7 2 2 1 NST", "1932 1932 4 22 7 2 2 1 NST", "1933 1936 4 15 7 2 2 1 NST", "1937 1937 4 22 7 2 2 1 NST", "1937 1937 6 1 7 0 0 1 S", "1937 1939 9 2 0 2 2 0", "1938 1939 4 15 7 2 2 1 S", "1945 1945 3 2 7 2 2 1 S", "1945 1945 8 16 7 2 2 0"],Greece: ["1932 1932 6 7 7 0 0 1 S", "1932 1932 8 1 7 0 0 0", "1941 1941 3 7 7 0 0 1 S", "1942 1942 10 2 7 3 0 0", "1943 1943 2 30 7 0 0 1 S", "1943 1943 9 4 7 0 0 0", "1952 1952 6 1 7 0 0 1 S", "1952 1952 10 2 7 0 0 0", "1975 1975 3 12 7 0 2 1 S", "1975 1975 10 26 7 0 2 0", "1976 1976 3 11 7 2 2 1 S", "1976 1976 9 10 7 2 2 0", "1977 1978 3 1 0 2 2 1 S", "1977 1977 8 26 7 2 2 0", "1978 1978 8 24 7 4 0 0", "1979 1979 3 1 7 9 0 1 S", "1979 1979 8 29 7 2 0 0", "1980 1980 3 1 7 0 0 1 S", "1980 1980 8 28 7 0 0 0"],SovietZone: ["1945 1945 4 24 7 2 0 2 M", "1945 1945 8 24 7 3 0 1 S", "1945 1945 10 18 7 2 2 0"],Germany: ["1946 1946 3 14 7 2 2 1 S", "1946 1946 9 7 7 2 2 0", "1947 1949 9 1 0 2 2 0", "1947 1947 3 6 7 3 2 1 S", "1947 1947 4 11 7 2 2 2 M", "1947 1947 5 29 7 3 0 1 S", "1948 1948 3 18 7 2 2 1 S", "1949 1949 3 10 7 2 2 1 S"],Czech: ["1945 1945 3 8 7 2 2 1 S", "1945 1945 10 18 7 2 2 0", "1946 1946 4 6 7 2 2 1 S", "1946 1949 9 1 0 2 2 0", "1947 1947 3 20 7 2 2 1 S", "1948 1948 3 18 7 2 2 1 S", "1949 1949 3 9 7 2 2 1 S"],Belgium: ["1918 1918 2 9 7 0 2 1 S", "1918 1919 9 1 6 23 2 0", "1919 1919 2 1 7 23 2 1 S", "1920 1920 1 14 7 23 2 1 S", "1920 1920 9 23 7 23 2 0", "1921 1921 2 14 7 23 2 1 S", "1921 1921 9 25 7 23 2 0", "1922 1922 2 25 7 23 2 1 S", "1922 1927 9 1 6 23 2 0", "1923 1923 3 21 7 23 2 1 S", "1924 1924 2 29 7 23 2 1 S", "1925 1925 3 4 7 23 2 1 S", "1926 1926 3 17 7 23 2 1 S", "1927 1927 3 9 7 23 2 1 S", "1928 1928 3 14 7 23 2 1 S", "1928 1938 9 2 0 2 2 0", "1929 1929 3 21 7 2 2 1 S", "1930 1930 3 13 7 2 2 1 S", "1931 1931 3 19 7 2 2 1 S", "1932 1932 3 3 7 2 2 1 S", "1933 1933 2 26 7 2 2 1 S", "1934 1934 3 8 7 2 2 1 S", "1935 1935 2 31 7 2 2 1 S", "1936 1936 3 19 7 2 2 1 S", "1937 1937 3 4 7 2 2 1 S", "1938 1938 2 27 7 2 2 1 S", "1939 1939 3 16 7 2 2 1 S", "1939 1939 10 19 7 2 2 0", "1940 1940 1 25 7 2 2 1 S", "1944 1944 8 17 7 2 2 0", "1945 1945 3 2 7 2 2 1 S", "1945 1945 8 16 7 2 2 0", "1946 1946 4 19 7 2 2 1 S", "1946 1946 9 7 7 2 2 0"],Romania: ["1932 1932 4 21 7 0 2 1 S", "1932 1939 9 1 0 0 2 0", "1933 1939 3 2 0 0 2 1 S", "1979 1979 4 27 7 0 0 1 S", "1979 1979 8 0 8 0 0 0", "1980 1980 3 5 7 23 0 1 S", "1980 1980 8 0 8 1 0 0", "1991 1993 2 0 8 0 2 1 S", "1991 1993 8 0 8 0 2 0"],"E-Eur": ["1977 1980 3 1 0 0 0 1 S", "1977 1977 8 0 8 0 0 0", "1978 1978 9 1 7 0 0 0", "1979 1995 8 0 8 0 0 0", "1981 9999 2 0 8 0 0 1 S", "1996 9999 9 0 8 0 0 0"],Hungary: ["1918 1918 3 1 7 3 0 1 S", "1918 1918 8 29 7 3 0 0", "1919 1919 3 15 7 3 0 1 S", "1919 1919 8 15 7 3 0 0", "1920 1920 3 5 7 3 0 1 S", "1920 1920 8 30 7 3 0 0", "1945 1945 4 1 7 23 0 1 S", "1945 1945 10 3 7 0 0 0", "1946 1946 2 31 7 2 2 1 S", "1946 1949 9 1 0 2 2 0", "1947 1949 3 4 0 2 2 1 S", "1950 1950 3 17 7 2 2 1 S", "1950 1950 9 23 7 2 2 0", "1954 1955 4 23 7 0 0 1 S", "1954 1955 9 3 7 0 0 0", "1956 1956 5 1 0 0 0 1 S", "1956 1956 8 0 8 0 0 0", "1957 1957 5 1 0 1 0 1 S", "1957 1957 8 0 8 3 0 0", "1980 1980 3 6 7 1 0 1 S"],Swiss: ["1941 1942 4 1 1 1 0 1 S", "1941 1942 9 1 1 2 0 0"],Denmark: ["1916 1916 4 14 7 23 0 1 S", "1916 1916 8 30 7 23 0 0", "1940 1940 4 15 7 0 0 1 S", "1945 1945 3 2 7 2 2 1 S", "1945 1945 7 15 7 2 2 0", "1946 1946 4 1 7 2 2 1 S", "1946 1946 8 1 7 2 2 0", "1947 1947 4 4 7 2 2 1 S", "1947 1947 7 10 7 2 2 0", "1948 1948 4 9 7 2 2 1 S", "1948 1948 7 8 7 2 2 0"],"GB-Eire": ["1916 1916 4 21 7 2 2 1 BST", "1916 1916 9 1 7 2 2 0 GMT", "1917 1917 3 8 7 2 2 1 BST", "1917 1917 8 17 7 2 2 0 GMT", "1918 1918 2 24 7 2 2 1 BST", "1918 1918 8 30 7 2 2 0 GMT", "1919 1919 2 30 7 2 2 1 BST", "1919 1919 8 29 7 2 2 0 GMT", "1920 1920 2 28 7 2 2 1 BST", "1920 1920 9 25 7 2 2 0 GMT", "1921 1921 3 3 7 2 2 1 BST", "1921 1921 9 3 7 2 2 0 GMT", "1922 1922 2 26 7 2 2 1 BST", "1922 1922 9 8 7 2 2 0 GMT", "1923 1923 3 16 0 2 2 1 BST", "1923 1924 8 16 0 2 2 0 GMT", "1924 1924 3 9 0 2 2 1 BST", "1925 1926 3 16 0 2 2 1 BST", "1925 1938 9 2 0 2 2 0 GMT", "1927 1927 3 9 0 2 2 1 BST", "1928 1929 3 16 0 2 2 1 BST", "1930 1930 3 9 0 2 2 1 BST", "1931 1932 3 16 0 2 2 1 BST", "1933 1933 3 9 0 2 2 1 BST", "1934 1934 3 16 0 2 2 1 BST", "1935 1935 3 9 0 2 2 1 BST", "1936 1937 3 16 0 2 2 1 BST", "1938 1938 3 9 0 2 2 1 BST", "1939 1939 3 16 0 2 2 1 BST", "1939 1939 10 16 0 2 2 0 GMT", "1940 1940 1 23 0 2 2 1 BST", "1941 1941 4 2 0 1 2 2 BDST", "1941 1943 7 9 0 1 2 1 BST", "1942 1944 3 2 0 1 2 2 BDST", "1944 1944 8 16 0 1 2 1 BST", "1945 1945 3 2 1 1 2 2 BDST", "1945 1945 6 9 0 1 2 1 BST", "1945 1946 9 2 0 2 2 0 GMT", "1946 1946 3 9 0 2 2 1 BST", "1947 1947 2 16 7 2 2 1 BST", "1947 1947 3 13 7 1 2 2 BDST", "1947 1947 7 10 7 1 2 1 BST", "1947 1947 10 2 7 2 2 0 GMT", "1948 1948 2 14 7 2 2 1 BST", "1948 1948 9 31 7 2 2 0 GMT", "1949 1949 3 3 7 2 2 1 BST", "1949 1949 9 30 7 2 2 0 GMT", "1950 1952 3 14 0 2 2 1 BST", "1950 1952 9 21 0 2 2 0 GMT", "1953 1953 3 16 0 2 2 1 BST", "1953 1960 9 2 0 2 2 0 GMT", "1954 1954 3 9 0 2 2 1 BST", "1955 1956 3 16 0 2 2 1 BST", "1957 1957 3 9 0 2 2 1 BST", "1958 1959 3 16 0 2 2 1 BST", "1960 1960 3 9 0 2 2 1 BST", "1961 1963 2 0 8 2 2 1 BST", "1961 1968 9 23 0 2 2 0 GMT", "1964 1967 2 19 0 2 2 1 BST", "1968 1968 1 18 7 2 2 1 BST", "1972 1980 2 16 0 2 2 1 BST", "1972 1980 9 23 0 2 2 0 GMT", "1981 1995 2 0 8 1 1 1 BST", "1981 1989 9 23 0 1 1 0 GMT", "1990 1995 9 22 0 1 1 0 GMT"],Finland: ["1942 1942 3 3 7 0 0 1 S", "1942 1942 9 3 7 0 0 0", "1981 1982 2 0 8 2 0 1 S", "1981 1982 8 0 8 3 0 0"],Turkey: ["1916 1916 4 1 7 0 0 1 S", "1916 1916 9 1 7 0 0 0", "1920 1920 2 28 7 0 0 1 S", "1920 1920 9 25 7 0 0 0", "1921 1921 3 3 7 0 0 1 S", "1921 1921 9 3 7 0 0 0", "1922 1922 2 26 7 0 0 1 S", "1922 1922 9 8 7 0 0 0", "1924 1924 4 13 7 0 0 1 S", "1924 1925 9 1 7 0 0 0", "1925 1925 4 1 7 0 0 1 S", "1940 1940 5 30 7 0 0 1 S", "1940 1940 9 5 7 0 0 0", "1940 1940 11 1 7 0 0 1 S", "1941 1941 8 21 7 0 0 0", "1942 1942 3 1 7 0 0 1 S", "1942 1942 10 1 7 0 0 0", "1945 1945 3 2 7 0 0 1 S", "1945 1945 9 8 7 0 0 0", "1946 1946 5 1 7 0 0 1 S", "1946 1946 9 1 7 0 0 0", "1947 1948 3 16 0 0 0 1 S", "1947 1950 9 2 0 0 0 0", "1949 1949 3 10 7 0 0 1 S", "1950 1950 3 19 7 0 0 1 S", "1951 1951 3 22 7 0 0 1 S", "1951 1951 9 8 7 0 0 0", "1962 1962 6 15 7 0 0 1 S", "1962 1962 9 8 7 0 0 0", "1964 1964 4 15 7 0 0 1 S", "1964 1964 9 1 7 0 0 0", "1970 1972 4 2 0 0 0 1 S", "1970 1972 9 2 0 0 0 0", "1973 1973 5 3 7 1 0 1 S", "1973 1973 10 4 7 3 0 0", "1974 1974 2 31 7 2 0 1 S", "1974 1974 10 3 7 5 0 0", "1975 1975 2 30 7 0 0 1 S", "1975 1976 9 0 8 0 0 0", "1976 1976 5 1 7 0 0 1 S", "1977 1978 3 1 0 0 0 1 S", "1977 1977 9 16 7 0 0 0", "1979 1980 3 1 0 3 0 1 S", "1979 1982 9 11 1 0 0 0", "1981 1982 2 0 8 3 0 1 S", "1983 1983 6 31 7 0 0 1 S", "1983 1983 9 2 7 0 0 0", "1985 1985 3 20 7 0 0 1 S", "1985 1985 8 28 7 0 0 0", "1986 1990 2 0 8 2 2 1 S", "1986 1990 8 0 8 2 2 0", "1991 2006 2 0 8 1 2 1 S", "1991 1995 8 0 8 1 2 0", "1996 2006 9 0 8 1 2 0"],Poland: ["1918 1919 8 16 7 2 2 0", "1919 1919 3 15 7 2 2 1 S", "1944 1944 3 3 7 2 2 1 S", "1944 1944 9 4 7 2 0 0", "1945 1945 3 29 7 0 0 1 S", "1945 1945 10 1 7 0 0 0", "1946 1946 3 14 7 0 2 1 S", "1946 1946 9 7 7 2 2 0", "1947 1947 4 4 7 2 2 1 S", "1947 1949 9 1 0 2 2 0", "1948 1948 3 18 7 2 2 1 S", "1949 1949 3 10 7 2 2 1 S", "1957 1957 5 2 7 1 2 1 S", "1957 1958 8 0 8 1 2 0", "1958 1958 2 30 7 1 2 1 S", "1959 1959 4 31 7 1 2 1 S", "1959 1961 9 1 0 1 2 0", "1960 1960 3 3 7 1 2 1 S", "1961 1964 4 0 8 1 2 1 S", "1962 1964 8 0 8 1 2 0"],Lux: ["1916 1916 4 14 7 23 0 1 S", "1916 1916 9 1 7 1 0 0", "1917 1917 3 28 7 23 0 1 S", "1917 1917 8 17 7 1 0 0", "1918 1918 3 15 1 2 2 1 S", "1918 1918 8 15 1 2 2 0", "1919 1919 2 1 7 23 0 1 S", "1919 1919 9 5 7 3 0 0", "1920 1920 1 14 7 23 0 1 S", "1920 1920 9 24 7 2 0 0", "1921 1921 2 14 7 23 0 1 S", "1921 1921 9 26 7 2 0 0", "1922 1922 2 25 7 23 0 1 S", "1922 1922 9 2 0 1 0 0", "1923 1923 3 21 7 23 0 1 S", "1923 1923 9 2 0 2 0 0", "1924 1924 2 29 7 23 0 1 S", "1924 1928 9 2 0 1 0 0", "1925 1925 3 5 7 23 0 1 S", "1926 1926 3 17 7 23 0 1 S", "1927 1927 3 9 7 23 0 1 S", "1928 1928 3 14 7 23 0 1 S", "1929 1929 3 20 7 23 0 1 S"],Italy: ["1916 1916 5 3 7 0 2 1 S", "1916 1916 9 1 7 0 2 0", "1917 1917 3 1 7 0 2 1 S", "1917 1917 8 30 7 0 2 0", "1918 1918 2 10 7 0 2 1 S", "1918 1919 9 1 0 0 2 0", "1919 1919 2 2 7 0 2 1 S", "1920 1920 2 21 7 0 2 1 S", "1920 1920 8 19 7 0 2 0", "1940 1940 5 15 7 0 2 1 S", "1944 1944 8 17 7 0 2 0", "1945 1945 3 2 7 2 0 1 S", "1945 1945 8 15 7 0 2 0", "1946 1946 2 17 7 2 2 1 S", "1946 1946 9 6 7 2 2 0", "1947 1947 2 16 7 0 2 1 S", "1947 1947 9 5 7 0 2 0", "1948 1948 1 29 7 2 2 1 S", "1948 1948 9 3 7 2 2 0", "1966 1968 4 22 0 0 0 1 S", "1966 1969 8 22 0 0 0 0", "1969 1969 5 1 7 0 0 1 S", "1970 1970 4 31 7 0 0 1 S", "1970 1970 8 0 8 0 0 0", "1971 1972 4 22 0 0 0 1 S", "1971 1971 8 0 8 1 0 0", "1972 1972 9 1 7 0 0 0", "1973 1973 5 3 7 0 0 1 S", "1973 1974 8 0 8 0 0 0", "1974 1974 4 26 7 0 0 1 S", "1975 1975 5 1 7 0 2 1 S", "1975 1977 8 0 8 0 2 0", "1976 1976 4 30 7 0 2 1 S", "1977 1979 4 22 0 0 2 1 S", "1978 1978 9 1 7 0 2 0", "1979 1979 8 30 7 0 2 0"],Malta: ["1973 1973 2 31 7 0 2 1 S", "1973 1973 8 29 7 0 2 0", "1974 1974 3 21 7 0 2 1 S", "1974 1974 8 16 7 0 2 0", "1975 1979 3 15 0 2 0 1 S", "1975 1980 8 15 0 2 0 0", "1980 1980 2 31 7 2 0 1 S"],France: ["1916 1916 5 14 7 23 2 1 S", "1916 1919 9 1 0 23 2 0", "1917 1917 2 24 7 23 2 1 S", "1918 1918 2 9 7 23 2 1 S", "1919 1919 2 1 7 23 2 1 S", "1920 1920 1 14 7 23 2 1 S", "1920 1920 9 23 7 23 2 0", "1921 1921 2 14 7 23 2 1 S", "1921 1921 9 25 7 23 2 0", "1922 1922 2 25 7 23 2 1 S", "1922 1938 9 1 6 23 2 0", "1923 1923 4 26 7 23 2 1 S", "1924 1924 2 29 7 23 2 1 S", "1925 1925 3 4 7 23 2 1 S", "1926 1926 3 17 7 23 2 1 S", "1927 1927 3 9 7 23 2 1 S", "1928 1928 3 14 7 23 2 1 S", "1929 1929 3 20 7 23 2 1 S", "1930 1930 3 12 7 23 2 1 S", "1931 1931 3 18 7 23 2 1 S", "1932 1932 3 2 7 23 2 1 S", "1933 1933 2 25 7 23 2 1 S", "1934 1934 3 7 7 23 2 1 S", "1935 1935 2 30 7 23 2 1 S", "1936 1936 3 18 7 23 2 1 S", "1937 1937 3 3 7 23 2 1 S", "1938 1938 2 26 7 23 2 1 S", "1939 1939 3 15 7 23 2 1 S", "1939 1939 10 18 7 23 2 0", "1940 1940 1 25 7 2 0 1 S", "1941 1941 4 5 7 0 0 2 M", "1941 1941 9 6 7 0 0 1 S", "1942 1942 2 9 7 0 0 2 M", "1942 1942 10 2 7 3 0 1 S", "1943 1943 2 29 7 2 0 2 M", "1943 1943 9 4 7 3 0 1 S", "1944 1944 3 3 7 2 0 2 M", "1944 1944 9 8 7 1 0 1 S", "1945 1945 3 2 7 2 0 2 M", "1945 1945 8 16 7 3 0 0", "1976 1976 2 28 7 1 0 1 S", "1976 1976 8 26 7 1 0 0"],Latvia: ["1989 1996 2 0 8 2 2 1 S", "1989 1996 8 0 8 2 2 0"],Bulg: ["1979 1979 2 31 7 23 0 1 S", "1979 1979 9 1 7 1 0 0", "1980 1982 3 1 6 23 0 1 S", "1980 1980 8 29 7 1 0 0", "1981 1981 8 27 7 2 0 0"],Albania: ["1940 1940 5 16 7 0 0 1 S", "1942 1942 10 2 7 3 0 0", "1943 1943 2 29 7 2 0 1 S", "1943 1943 3 10 7 3 0 0", "1974 1974 4 4 7 0 0 1 S", "1974 1974 9 2 7 0 0 0", "1975 1975 4 1 7 0 0 1 S", "1975 1975 9 2 7 0 0 0", "1976 1976 4 2 7 0 0 1 S", "1976 1976 9 3 7 0 0 0", "1977 1977 4 8 7 0 0 1 S", "1977 1977 9 2 7 0 0 0", "1978 1978 4 6 7 0 0 1 S", "1978 1978 9 1 7 0 0 0", "1979 1979 4 5 7 0 0 1 S", "1979 1979 8 30 7 0 0 0", "1980 1980 4 3 7 0 0 1 S", "1980 1980 9 4 7 0 0 0", "1981 1981 3 26 7 0 0 1 S", "1981 1981 8 27 7 0 0 0", "1982 1982 4 2 7 0 0 1 S", "1982 1982 9 3 7 0 0 0", "1983 1983 3 18 7 0 0 1 S", "1983 1983 9 1 7 0 0 0", "1984 1984 3 1 7 0 0 1 S"],Austria: ["1920 1920 3 5 7 2 2 1 S", "1920 1920 8 13 7 2 2 0", "1946 1946 3 14 7 2 2 1 S", "1946 1948 9 1 0 2 2 0", "1947 1947 3 6 7 2 2 1 S", "1948 1948 3 18 7 2 2 1 S", "1980 1980 3 6 7 0 0 1 S", "1980 1980 8 28 7 0 0 0"],Mauritius: ["1982 1982 9 10 7 0 0 1 S", "1983 1983 2 21 7 0 0 0", "2008 2008 9 0 8 2 0 1 S", "2009 2009 2 0 8 2 0 0"],WS: ["2012 9999 8 0 8 3 0 1 D", "2012 9999 3 1 0 4 0 0"],NZ: ["1927 1927 10 6 7 2 0 1 S", "1928 1928 2 4 7 2 0 0 M", "1928 1933 9 8 0 2 0 0:30 S", "1929 1933 2 15 0 2 0 0 M", "1934 1940 3 0 8 2 0 0 M", "1934 1940 8 0 8 2 0 0:30 S", "1946 1946 0 1 7 0 0 0 S", "1974 1974 10 1 0 2 2 1 D", "1975 1975 1 0 8 2 2 0 S", "1975 1988 9 0 8 2 2 1 D", "1976 1989 2 1 0 2 2 0 S", "1989 1989 9 8 0 2 2 1 D", "1990 2006 9 1 0 2 2 1 D", "1990 2007 2 15 0 2 2 0 S", "2007 9999 8 0 8 2 2 1 D", "2008 9999 3 1 0 2 2 0 S"],Chatham: ["1974 1974 10 1 0 2:45 2 1 D", "1975 1975 1 0 8 2:45 2 0 S", "1975 1988 9 0 8 2:45 2 1 D", "1976 1989 2 1 0 2:45 2 0 S", "1989 1989 9 8 0 2:45 2 1 D", "1990 2006 9 1 0 2:45 2 1 D", "1990 2007 2 15 0 2:45 2 0 S", "2007 9999 8 0 8 2:45 2 1 D", "2008 9999 3 1 0 2:45 2 0 S"],Vanuatu: ["1983 1983 8 25 7 0 0 1 S", "1984 1991 2 23 0 0 0 0", "1984 1984 9 23 7 0 0 1 S", "1985 1991 8 23 0 0 0 1 S", "1992 1993 0 23 0 0 0 0", "1992 1992 9 23 0 0 0 1 S"],Fiji: ["1998 1999 10 1 0 2 0 1 S", "1999 2000 1 0 8 3 0 0", "2009 2009 10 29 7 2 0 1 S", "2010 2010 2 0 8 3 0 0", "2010 9999 9 18 0 2 0 1 S", "2011 2011 2 1 0 3 0 0", "2012 9999 0 18 0 3 0 0"],NC: ["1977 1978 11 1 0 0 0 1 S", "1978 1979 1 27 7 0 0 0", "1996 1996 11 1 7 2 2 1 S", "1997 1997 2 2 7 2 2 0"],Cook: ["1978 1978 10 12 7 0 0 0:30 HS", "1979 1991 2 1 0 0 0 0", "1979 1990 9 0 8 0 0 0:30 HS"],Tonga: ["1999 1999 9 7 7 2 2 1 S", "2000 2000 2 19 7 2 2 0", "2000 2001 10 1 0 2 0 1 S", "2001 2002 0 0 8 2 0 0"]},links: {"America/Kralendijk": "America/Curacao","America/Lower_Princes": "America/Curacao","America/Marigot": "America/Guadeloupe","America/Shiprock": "America/Denver","America/St_Barthelemy": "America/Guadeloupe","Antarctica/South_Pole": "Antarctica/McMurdo","Arctic/Longyearbyen": "Europe/Oslo","Europe/Bratislava": "Europe/Prague","Europe/Busingen": "Europe/Zurich","Europe/Guernsey": "Europe/London","Europe/Isle_of_Man": "Europe/London","Europe/Jersey": "Europe/London","Europe/Ljubljana": "Europe/Belgrade","Europe/Mariehamn": "Europe/Helsinki","Europe/Podgorica": "Europe/Belgrade","Europe/San_Marino": "Europe/Rome","Europe/Sarajevo": "Europe/Belgrade","Europe/Skopje": "Europe/Belgrade","Europe/Vatican": "Europe/Rome","Europe/Zagreb": "Europe/Belgrade"}}), function() {
    $(function() {
        var e, t, n, r, i, s;
        return n = 10, e = 300, t = 100, r = $("[data-from-mobile-quantity]"), s = function(e) {
            return r.length && e.available < parseInt(r.val(), 10)
        }, i = function(e, t) {
            var n;
            return n = [], $.each(e, function(e, r) {
                r.available = Math.floor(r.available / t);
                if (r.available > 0)
                    return n.push(r)
            }), n
        }, $.CalendarDayElement = function() {
            function r(e) {
                this.element = e.element, this.availabilities = e.availabilities, this.$calendar = e.$calendar, this.$quantitySelect = e.$quantitySelect, this.mobileView = e.mobileView
            }
            return r.prototype.initialize = function() {
                return this.addClass(
                ), this.addAvailabilities(), this.hideAvailabilities(), this.addHideClickEvent(), this
            }, r.prototype.addClass = function() {
                return this.element.addClass("fc-has-availabilities")
            }, r.prototype.addAvailabilities = function() {
                var e;
                e = this.element.find(".availabilities");
                if (e.length === 0)
                    return this.element.append(this.availabilities.render())
            }, r.prototype.hideAvailabilities = function() {
                return this.element.find(".availabilities").hide()
            }, r.prototype.addHideClickEvent = function() {
                var r = this;
                return this.element.on("click", ".availabilities ul li", function(i) {
                    var s, o;
                    i.stopPropagation(), s = $(i.currentTarget);
                    if (!s.find("input:disabled").length) {
                        r.$calendar.find(".selected").removeClass("selected"), s.addClass("selected"), s.parents(".fc-has-availabilities").addClass("selected"), s.parents(".availabilities").delay(e).fadeOut(t, function() {
                            return r.$calendar.find(".not-highlighted").removeClass("not-highlighted")
                        }), o = Math.min(n, s.data("available")), $("input#advance_availability_start_at").val(s.data("datetime")), $("input#advance_availability_tz_identifier").val(s.data("tz-identifier")), $("input#advance_availability_id").val(s.data("id")).triggerHandler("change"), $("input#advance_availability_available").val(o);
                        if (r.mobileView == null)
                            return r.$quantitySelect.drawQuantities(o)
                    }
                })
            }, r
        }(), $.AvailabilityTooltip = function() {
            function e(e, t) {
                this.date = e, this.availabilities = t
            }
            return e.prototype.render = function() {
                var e, t, r = this;
                return t = "<div class='availabilities' data-date='" + this.date + "'><ul class='none'>", e = parseInt($("input#advance_availability_id").val(), n), $.each(this.availabilities, function(n, r) {
                    var i, s, o, u, a;
                    return i = r.available, e === r.id ? (o = "selected", u = "checked='checked'") : (o = "", u = ""), a = moment(r.start_at).tz(r.tz_identifier).format("hh:mma"), s = i <= 0 ? "disabled" : "", t += "<li class='" + o + "' data-id='" + r.id + "' data-datetime='" + r.start_at + "' data-tz-identifier='" + r.tz_identifier + "' data-available='" + i + "'><label>", t += "<input name='availability_id' " + s + " " + u + " type='radio' />", t += "<span>" + a + " (" + i + " available)</span>", t += "</label></li>"
                }), t + "</ul></div>"
            }, e
        }(), $.AdvanceCalendar = {$calendar: $("#calendar"),$submitButton: $(".main-buy[type='submit'], .next-button[type='submit']"),$calendarWrapper: $("#calendar-wrapper:visible"),mobileView: $("#advance-availability-wrapper").data("mobile-view"),initialize: function(e, t, n) {
                var r = this;
                return this.$quantitySelect = e, this.$calendarDayElement = t, this.$availabilityTooltip = n, $(function() {
                    return r.$calendarWrapper.length ? (r.setClickHandlers(), $("input#select-a-date").prop("checked", !0), r.$submitButton.prop("disabled", !0), $("label[data-variant-label]:first").trigger("mouseup"), r.rerender()) : !0
                }), this
            },setClickHandlers: function() {
                var e = this;
                return $("input#select-a-date").click(function() {
                    return e.$submitButton.prop("disabled", !0), e.$calendarWrapper.show(), e.rerender()
                }), $("input#just-the-voucher").click(function() {
                    e.$calendarWrapper.hide(), e.nukeActivitySelection(), e.$submitButton.prop("disabled", !1);
                    if (e.mobileView == null)
                        return e.$quantitySelect.drawQuantities(n)
                }), $("#advance_availability_id").on("change", function(t) {
                    var n;
                    return n = $(t.currentTarget), e.$submitButton.prop("disabled", n.val().length === 0)
                }), $("label[data-variant-label]").on("mouseup", function(t) {
                    var n, r, i;
                    n = $(t.currentTarget);
                    if (n.find("input:first").prop("checked") && e.$calendar.data("advance-activity-id") != null)
                        return !0;
                    r = n.data("advance-activity-id"), i = n.data("num-of-items"), e.$submitButton.prop("disabled", r != null && $("#select-a-date:checked").length), e.nukeActivitySelection(), $("#advance-availability-wrapper").toggle(r != null);
                    if (r != null && i != null)
                        return e.$calendar.data("advance-activity-id", r), e.$calendar.data("num-of-items", i), e.rerender()
                })
            },nukeActivitySelection: function() {
                return this.$calendar.find(".selected").removeClass("selected"), $("[data-advance-availability-attribute]").val(null), this.$calendar.find("input").prop("checked", !1)
            },rerender: function() {
                return this.$calendar.empty().fullCalendar(this.calendarOptions())
            },calendarOptions: function() {
                var e = this;
                return {header: {left: "prev",center: "title",right: "next"},defaultView: "month",titleFormat: {month: "MMM"},dayNamesShort: ["S", "M", "T", "W", "R", "F", "S"],events: function(t, n, r) {
                        return $.ajax({url: e.$calendar.data("events-feed-url"),data: {activity_ids: e.$calendar.data("advance-activity-id"),start_date: t,end_date: n}}).success(function(e) {
                            var t, n;
                            return t = {}, $.each(e.availabilities, function(e, n) {
                                var r;
                                return r = (new Date(n.start_at)).toDateString(), t[r] == null && (t[r] = []), t[r].push(n)
                            }), n = [], $.each(t, function(e, t) {
                                return n.push({title: "_",start: e,availabilities: t})
                            }), r(n)
                        })
                    },dayClick: function(n, r, i, s) {
                        var o, u, a;
                        return a = $.fullCalendar.formatDate(n, "yyyy-MM-dd"), o = e.$calendar.find(".fc-day[data-date='" + a + "']"), o.hasClass("fc-has-availabilities") ? (u = e.$calendar.find(".fc-day:not([data-date='" + a + "'])"), u.find(".availabilities").hide(), o.removeClass("not-highlighted").find(".availabilities").fadeToggle(t, "swing", function() {
                            return e.$calendar.find(".availabilities").not(":hidden").length ? u.addClass("not-highlighted") : u.removeClass("not-highlighted")
                        })) : !0
                    },eventRender: function(t, n) {
                        var r, o, u;
                        return u = e.$calendar.data("num-of-items") || 1, r = i(t.availabilities, u), r.length === 0 || r.length === 1 && s(r[0]) ? n : ($.grep(r, function(e, t) {
                            return e.available > 0
                        }).length && (o = $.fullCalendar.formatDate(t.start, "yyyy-MM-dd"), (new e.$calendarDayElement({element: e.$calendar.find(".fc-day[data-date='" + o + "']"),availabilities: new e.$availabilityTooltip(o, r),$calendar: e.$calendar,$quantitySelect: e.$quantitySelect,mobileView: e.mobileView})).initialize()), n)
                    },viewRender: function(e, t) {
                        var n, r;
                        return r = moment(e.start).subtract("months", 1).format("MMM"), $(".fc-header-left .fc-button-prev").html("<h2><i class='icon-angle-left icon-small'></i> " + r + "</h2>"), n = moment(e.start).add("months", 1).format("MMM"), $(".fc-header-right .fc-button-next").html("<h2>" + n + " <i class='icon-angle-right icon-small'></i></h2>")
                    },eventAfterAllRender: function(e) {
                        return $("input[name='availability_id']:checked").parents(".fc-has-availabilities").addClass("selected")
                    }}
            }}.initialize($.QuantitySelect, $.CalendarDayElement, $.AvailabilityTooltip), $.AdvanceMobileCheckout = {$mobileVariantRadios: $("[data-mobile-variant]"),initialize: function() {
                var e = this;
                return $(function() {
                    return e.$mobileVariantRadios.length ? (e.$mobileVariantRadios.on("click", function() {
                        var e, t;
                        return e = $(this).find("input[type='radio']"), t = $("button[type='submit']")
                    }), e.$mobileVariantRadios.first().trigger("click")) : !0
                }), this
            }}.initialize(), $.AdvancePurchaseShowDetails = {$advanceAvailabilityEls: $(".redemption-advance-availability[data-advance-availability]"),apiUrl: $("#advance_availabilities_url").val(),initialize: function() {
                var e = this;
                return $(function() {
                    if (e.$advanceAvailabilityEls.length)
                        return e.getAvailabilities()
                }), this
            },getAvailabilities: function() {
                var e = this;
                return $.ajax({type: "GET",url: this.apiUrl,data: {ids: this.availabilityIds()}}).done(function(t) {
                    if (t.code === 200)
                        return e.setAvailabilities(t.availabilities)
                }).error(function(t) {
                    return e.renderError(e.$advanceAvailabilityEls)
                })
            },renderError: function(e) {
                return e.html($(".checkout-flow").data("advance-server-error"))
            },availabilityIds: function() {
                var e;
                return e = this.$advanceAvailabilityEls.map(function(e, t) {
                    return $(t).data("advance-availability")
                }), $.makeArray(e)
            },setAvailabilities: function(e) {
                var t = this;
                return $.each(e, function(e, n) {
                    var r;
                    return r = $.grep(t.$advanceAvailabilityEls, function(e, t) {
                        return $(e).data("advance-availability") === n.id
                    }), $(r).html(moment(n.start_at).tz(n.tz_identifier).format("ddd, MMMM D, YYYY [at] h:mma z"))
                })
            }}.initialize()
    })
}.call(this), $(document).ready(function() {
    var e = 5, t = 250;
    $(".orbit-container").on("orbit:before-slide-change", function(t) {
        t.stopPropagation();
        var r = $("ul.photo-thumbs li.active"), i = $(".active", t.currentTarget).data("orbit-slide"), s = $("ul.photo-thumbs").find("[data-orbit-link='" + i + "']").parent();
        s.length === 0 && (s = $("ul.photo-thumbs li.active").siblings().first()), $(".orbit-timer").hasClass("paused") === !1 && s.index() > Math.floor(e / 2) && n(), r.removeClass("active"), s.addClass("active")
    }), $(".orbit-container .thumbs-containers .right-arrow").on("click", function() {
        n()
    }), $(".orbit-container .thumbs-containers .left-arrow").on("click", function() {
        r()
    });
    var n = function() {
        var e = $(".photo-thumbs li").width();
        $(".photo-thumbs").animate({left: -e}, t, function() {
            $(this).css({left: 0}), $(this).find("li").first().insertAfter($(".photo-thumbs li").last())
        })
    }, r = function() {
        var e = $(".photo-thumbs li").width();
        $(".photo-thumbs li").last().insertBefore($(".photo-thumbs li").first()), $(".photo-thumbs").css({left: -e}), $(".photo-thumbs").animate({left: 0}, t)
    };
    $("a[id^='variant-']").on("click", function() {
        var e = $("option[data-id='" + this.id.split("-")[1] + "']").val();
        e && ($("select#option_one_select").val(e), $.GearVariantsFilter.createSecondVariantList(e), $("select#option_one_select").siblings("span.selecttext").text(e))
    })
}), $(document).ready(function() {
    $("select.mobile-checkout-select").each(function() {
        $(this).wrap('<div class="selectbox checkout-mobile"/>'), $(this).after("<span class='selecttext'></span><span class='select-arrow'>&raquo;</span>");
        var e = $(this).children("option:selected").text();
        $(this).next(".selecttext").text(e), $(this).change(function() {
            var e = $(this).children("option:selected").text();
            $(this).next(".selecttext").text(e)
        })
    })
}), $(document).ready(function() {
    $("label.check input:checked").closest("label").addClass("checked"), $(document).on("click", "label.check", function() {
        return $input = $(this).find("input"), $input.is(":checked") ? ($input.attr("checked", !1), $(this).removeClass("checked")) : ($input.attr("checked", !0), $(this).addClass("checked")), $input.trigger("change"), !1
    })
}), $.FloatingBuy = {init: function() {
        if ($(".button-buy").length && $.ZOZIApp.is_mobile()) {
            var e = $(".button-buy").first();
            e.length && $(window).on("scroll", function() {
                $window = $(this), myTop = e.offset().top, windowTop = $window.scrollTop(), windowBottom = windowTop + $window.height(), floatingHeight = $(".floating-buy").height() + 10, myTop > windowTop && myTop < windowBottom || windowTop === 0 || !$.ZOZIApp.is_mobile() ? $(".floating-buy").fadeOut() : $.ZOZIApp.is_mobile() && ($(".floating-buy").fadeIn(), $("footer").css("padding-bottom", floatingHeight))
            })
        }
    }}, $(function() {
    $.FloatingBuy.init()
}), $(document).ready(function() {
    $("label.selection").click(function() {
        $("button.next-button").attr("disabled", "disabled"), $("p.small-note").show(), $("label.selection").removeClass("selected"), $("label.selection").next("div").hide(), $(this).addClass("selected"), $(this).next("div").show()
    })
}), $(document).ready(function() {
    $("select.mobile-select").each(function() {
        $(this).wrap('<div class="selectbox"/>'), $(this).after("<span class='selecttext'></span><span class='select-arrow'></span>");
        var e = $(this).children("option:selected").text();
        $(this).next(".selecttext").text(e)
    }), $("select.typical").each(function() {
        $(this).wrap('<div class="selectbox typical"/>'), $(this).after("<span class='selecttext'></span><span class='select-arrow'></span>");
        var e = $(this).children("option:selected").text();
        $(this).next(".selecttext").text(e)
    }), $("select.wider").each(function() {
        $(this).wrap('<div class="selectbox wider"/>'), $(this).after("<span class='selecttext'></span><span class='select-arrow'></span>");
        var e = $(this).children("option:selected").text();
        $(this).next(".selecttext").text(e)
    }), $("select.slick").each(function() {
        $(this).parent().hasClass("selectbox") || ($(this).wrap('<div class="selectbox slick"/>'), $(this).after("<span class='selecttext'></span>"));
        var e = $(this).children("option:selected").text();
        $(this).next(".selecttext").text(e)
    }), $(".bucket-select").bind("change", function() {
        var e = $(this).val();
        return e && (window.location = e), !1
    }), $("select.bucket-select").each(function() {
        $(this).wrap('<div class="selectbox"/>'), $(this).after("<span class='selecttext'></span><span class='select-arrow'></span>");
        var e = $(this).children("option:selected").text();
        $(this).next(".selecttext").text(e)
    }), $(document).on("change", "select.mobile-select, select.typical, select.wider, select.slick, .bucket-select, select.bucket-select", function() {
        var e = $(this).children("option:selected").text();
        $(this).next(".selecttext").text(e)
    })
}), $(document).ready(function() {
    $(window).load(function() {
        $(".more-experiences-list ul li").each(function() {
            var e = $(this).find(".detail-info").height(), t = $(this).find(".button-space").height(), n = (e - t) / 2;
            $(this).find(".button-space").css("margin-top", n)
        })
    }), $.MoreExperiences.perPage = $.Filtering.perPage || 15, $.MoreExperiences.init()
}), $.MoreExperiences = {PAGE_HEIGHT_BUFFER: 200,MARKETS: ["gear", "getaways"],loading: !1,nextPage: 2,docPath: document.location.pathname,market: null,infiniteScroll: function(e) {
        return typeof e == "undefined" ? $("body").data("infinite_scroll") : $("body").data("infinite_scroll", e)
    },resetPageCounter: function() {
        $.MoreExperiences.nextPage = 2, $.MoreExperiences.infiniteScroll(!0)
    },init: function() {
        function t() {
            return $.MoreExperiences.infiniteScroll() && $(window).scrollTop() > $(document).height() - $(window).height() - $.MoreExperiences.PAGE_HEIGHT_BUFFER
        }
        function n(t) {
            t.length ? ($container = $(".more-experiences-list ul"), $container.find("li.placeholder").remove(), $container.append(t), $.PromotionalPricing.init(), $.MoreExperiences.nextPage++, window.picturefill()) : ($.MoreExperiences.infiniteScroll(!1), e.addClass("all-items-loaded"), e.find('span[class*="infinite-text--"]').text("All items loaded")), $.MoreExperiences.loading = !1
        }
        function r() {
            return $(".more-experiences-list ul").length && $.MoreExperiences.infiniteScroll()
        }
        $.each($.MoreExperiences.MARKETS, function(e, t) {
            $.MoreExperiences.docPath.indexOf(t) > 0 && ($.MoreExperiences.market = t)
        }), $.MoreExperiences.market === undefined && ($.cookie.json = !1, $.MoreExperiences.market = $.cookie("market") || "new-york", $.MoreExperiences.docPath.indexOf("local") > 0 && ($.MoreExperiences.market = "local/" + $.MoreExperiences.market));
        var e = $("#infinite-text");
        r() && $(window).scroll(function() {
            if ($.Filtering.loading || $.MoreExperiences.loading || !$.MoreExperiences.infiniteScroll())
                return;
            if (t()) {
                $.MoreExperiences.loading = !0, e.find('span[class*="infinite-text--"]').text("Loading more");
                var r = "page=" + $.MoreExperiences.nextPage + "&per_page=" + $.MoreExperiences.perPage;
                $.ajax({url: "/search/" + $.Filtering.productLine + "/show_more/?" + r,type: "get",data: $.Filtering.filterParams(),success: n})
            }
        })
    }}, $(document).ready(function() {
    $(".multi-day.check-in .num-available input").click(function() {
        $(".full-calendar.multi-day.check-in").delay(300).slideUp(300), $(".start-date span.chosen-date").show(), $(".full-calendar.multi-day.check-out").delay(300).slideDown(300)
    }), $(".multi-day.check-out .num-available input").click(function() {
        $(".full-calendar.multi-day.check-out").delay(300).slideUp(300), $(".end-date span.chosen-date").show(), $("p.small-note").hide(), $(".button-buy").delay(300).removeAttr("disabled")
    }), $("label.start-date").click(function() {
        $(".num-available ul li").removeClass("selected"), $(".date-options tbody td").removeClass("selected"), $(".full-calendar.multi-day.check-out").slideUp(300), $(".full-calendar.multi-day.check-in").slideDown(300), $(".start-date span.chosen-date").hide()
    })
}), $(document).ready(function() {
    $newCreditCard = $(".new-credit-card"), $("input.existing-card").click(function() {
        $newCreditCard.hide()
    }), $("input#newCard").click(function() {
        $newCreditCard.show()
    })
}), $(document).ready(function() {
    function e(e) {
        $(e).on("click", ".c-radios label", function() {
            $input = $(this).find("input"), $input.attr("checked", !0), $(this).addClass("active").siblings(".active").removeClass("active").end().siblings().find("input[checked]").attr("checked", !1), $input.trigger("change")
        })
    }
    $(".checkout-flow .c-radios input").change(function() {
        var e = $(this).parent("label");
        $("button.next-button").removeAttr("disabled")
    }), $("li.choice input").change(function() {
        var e = $(this).parent("label");
        $("li.choice label", e.closest("ul")).removeClass("active"), e.addClass("active"), $("p.small-note").hide(), $("button.next-button").removeAttr("disabled")
    }), $(".c-radios input:checked").closest("label").addClass("active"), $(".checkout-options input:checked").change(), e("#payment-section"), e("#shipping-section"), e("#gifting-section"), e(".booking-box--experience-options")
}), $(document).ready(function() {
    $("#fullCalendar label").click(function() {
        var e = $("#fullCalendar"), t = e.offset();
        $(window).scrollTop(t.top)
    }), $("label.just-purchase").click(function() {
        $("p.small-note").hide(), $("button.next-button").removeAttr("disabled")
    }), $("a.choose").click(function() {
        $("p.small-note").hide(), $("button.next-button").removeAttr("disabled")
    })
}), $(document).ready(function() {
    var e = function(e) {
        if (!$.ZOZIApp.is_small_screen()) {
            var t = e.find("[data-needs-columnizing]");
            t.length && t.columnize({columns: 2}).removeAttr("data-needs-columnizing")
        }
    };
    $(".section-header h2").click(function(t) {
        var n = $(this).parents(".section-header");
        t.preventDefault(), n.toggleClass("active"), e(n)
    }), e($(".section-header.active"))
}), $(document).ready(function() {
    var e = $(window).width();
    $(window).resize(function() {
        var e = $(window).width()
    }), $(window).load(function() {
        if (e > 768) {
            var t = ($(".orbit-container .orbit-slides-container img").width() + 2) / 4 - 2;
            $("ul.photo-thumbs li img").width(t)
        }
        if (e > 1024) {
            var n = ($(".orbit-container .orbit-slides-container img").width() + 2) / 5 - 2;
            $("ul.photo-thumbs li img").width(n)
        }
    })
}), $.Tooltip = {init: function() {
        $(".tooltip-init").on("click", function(e) {
            var t = $(this).parent().parent().find(".tooltip");
            return t.length && ($(this).hasClass("is-active") ? $.Tooltip.hide({tooltip: t,context: this}) : $.Tooltip.show({tooltip: t,context: this})), $(window).resize(function() {
                $.ZOZIApp.is_tablet() && $.Tooltip.hideAll()
            }), !1
        })
    },show: function(e) {
        var t = e.tooltip, n = e.context, r = 10, i = $(n).parent().position().top + $(n).height() + r;
        return t.show().css("top", i), $(n).addClass("is-active"), $(document).on("click", {tooltip: t,context: n}, $.Tooltip.onHide), !1
    },onHide: function(e) {
        var t = e.data.tooltip, n = e.data.context;
        $.Tooltip.hide({tooltip: t,context: n})
    },hide: function(e) {
        var t = e.tooltip, n = e.context;
        return t.hide(), $(n).removeClass("is-active"), $(document).off("click", $.Tooltip.onHide), !1
    },hideAll: function() {
        $(".tooltip").hide(), $(".tooltip-init").removeClass("is-active"), $(document).off("click", $.Tooltip.onHide)
    }}, $(function() {
    $.Tooltip.init()
}), $.ModuleRollover = {init: function() {
        typeof bucket_list_deal_ids != "undefined" && $.BucketList.markAllAsAdded(bucket_list_deal_ids);
        var e = 500;
        $(".offer-snippet").on("click", ".offer-snippet-img, .area", function(e) {
            return window.location = $(this).parent(".offer-snippet").data("target"), !1
        }).hoverIntent(function() {
            var t = $(this);
            t.toggleClass("is-offer-snippet-open"), t.find(".area").animate({top: -53}, e)
        }, function() {
            var t = $(this);
            t.find(".area").animate({top: 0}, e)
        })
    }}, $(function() {
    $.ModuleRollover.init()
}), $.Price = {set_promo_points: function(e) {
        var t = e.find(".price.blue");
        t.length > 0 ? (t.removeClass("blue"), t.find(".current").addClass("original")) : (e.find(".current").remove(), t = e.find(".original").first(), t = e.find(".price"));
        var n = e.find(".promo-points-cost-details-page");
        if (n.length === 0) {
            var r = $("#details-page").data("promo_points_cost"), i = $("<span>").addClass("promo-points-cost promo-points-cost-details-page").html(r);
            t.after(i), e.addClass("promotional_item promo_item_for_user")
        }
    },update: function(e, t, n) {
        var r = $(e).find("span[data-original-price-value]");
        $(e).find("span[data-current-price-value]").html(n), r.length > 0 && r.html(t)
    }}, $.PromotionalPricing = {init: function() {
        if ($("#main").data("prm_visitor")) {
            var e = $("article.promotional_item"), t = this;
            $.each(e, function(e, n) {
                t.lockUnaffordableItems(n)
            })
        }
    },lockUnaffordableItems: function(e) {
        var t = $(e).data("promo_points_cost"), n = parseInt($("#promo-button").text(), 10) || 0, r = n >= t;
        $(e).addClass("promo_item_for_user");
        if (!r) {
            var i = t - n, s = i === 1 ? "point" : "points";
            $(e).parent().addClass("need-more-points"), $(e).find(".need-points-banner ").text("You need " + i + " more " + s)
        }
    }}, $(function() {
    $.PromotionalPricing.init()
}), $(document).ready(function() {
    toggleGiftDetails = function() {
        var e = $("#gifting-details, .gear-divider, .gear-shipping-message");
        $(".buy-as-gift").hasClass("checked") ? e.slideDown(1e3) : e.slideUp(1e3)
    }, $(".buy-as-gift").change(function() {
        toggleGiftDetails()
    }), $("label").hasClass("buy-as-gift-gear") && $("#gifting-details").hide(), $("input[name=gifting_details\\[delivery_method\\]]").change(function() {
        $(this).val() === "email" ? $("#recipient-email").slideDown(1e3) : $("#recipient-email").slideUp(1e3)
    }), $("#order_delivery_method_print").change(function() {
        this.checked && ($("#order_recipient_email_address").prop("disabled", !0), $("#order_recipient_email_address").addClass("disabled"), $('label[for="order_recipient_email_address"]').css("color", "#AAA"))
    }), $("#order_delivery_method_email").change(function() {
        this.checked && ($("#order_recipient_email_address").prop("disabled", !1), $("#order_recipient_email_address").removeClass("disabled"), $('label[for="order_recipient_email_address"]').css("color", "#666"))
    })
}), $.MODALS = {list: ["bucket_list"],viewed: {},addViewed: function(e) {
        this.viewed[e] = !0
    },calculateMask: function() {
        var e = this, t = 0;
        return $.each(this.list, function(n, r) {
            e.viewed[r] === !0 && (t += Math.pow(2, n))
        }), t
    },update: function(e, t) {
        $.MODALS.addViewed(e), $.ajax({type: "POST",url: "modals",data: {modal_mask: $.MODALS.calculateMask()},complete: t})
    },init: function(e) {
        if (e === undefined)
            return;
        var t = $.map(parseInt(e).toString(2).split(), function(e) {
            return parseInt(e, 10)
        });
        for (var n = 0; n < t.length; n++)
            if (t[n] > 0) {
                var r = this.list[n];
                this.addViewed(r)
            }
    }}, $(function() {
    var e = $("[data-modal-mask]").data("modal-mask");
    $.MODALS.init(e)
}), $.BucketList = {init: function() {
        var e = this;
        typeof bucket_list_deal_ids != "undefined" && e.markAllAsAdded(bucket_list_deal_ids), $(".add-to-bucket-list").bind("ajax:success", function(t, n, r, i) {
            e.markAsAdded(this)
        })
    },markAsAdded: function(e) {
        var t = $(e), n = t.data("in_list_text");
        $.each(t, function() {
            $(this).get(0).lastChild.data = n
        }), t.removeClass("add-to-bucket-list").addClass("item-in-bucket-list checked");
        var r = t.closest(".offer-snippet").data("target");
        r ? (t.attr("href", r), t.on("click", function(e) {
            return window.location = $(this).attr("href"), !1
        })) : t.on("click", !1)
    },markAllAsAdded: function(e) {
        var t = this;
        $.each(e, function(e, n) {
            var r = $(".bucket-list-btn[data-deal-id=" + n + "] a");
            r.length > 0 && t.markAsAdded(r)
        })
    }}, $(function() {
    $.BucketList.init()
}), $.Facebook = {initialized: !1,facebook_login: {init: function() {
            $(".fb-login").on("click", function(e) {
                e.preventDefault();
                var t = $(this);
                FB.login(function(e) {
                    e.authResponse && (window.location = t.data("fb-callback-url"))
                }, {scope: "email"})
            })
        }},facebook_send_dialog: {init: function() {
            $("a.fb-book").on("click", function(e) {
                var t = $(this);
                return FB.ui({method: "send",link: t.data("fb-link")}), !1
            }), $("a.fb-feed").on("click", function(e) {
                var t = $(this);
                return FB.ui({method: "feed",link: t.data("fb-link"),picture: t.data("fb-picture"),name: t.data("fb-name"),caption: t.data("fb-caption"),description: t.data("fb-description"),display: t.data("fb-display")}), !1
            })
        }}}, $(function() {
    $.Facebook.initialized || ($.Facebook.facebook_login.init(), $.Facebook.facebook_send_dialog.init(), $.Facebook.initialized = !0)
}), $.FlashMessage = {init: function() {
        var e = $(".flash_message");
        e.length > 0 && (e.slideDown("slow"), $(".close_flash").on("click", function(t) {
            e.slideUp().hide()
        }))
    }}, $(function() {
    $.FlashMessage.init()
}), $.PopupFooter = {init: function() {
        if (typeof $.cookie == "undefined")
            return;
        var e = this;
        $.cookie.json = !0;
        var t = $(".footer-pop-up"), n = t.data("pop-ups") || [], r = n[0], i = $.cookie("footer_pop_up_ignored_" + r) || [];
        $(".footer-pop-up-close").on("click", function(n) {
            t.slideUp(), $("footer").animate({marginBottom: 0}), e.setClosedCookie(r)
        }), $(".footer-pop-up-ignore").on("click", function(e) {
            var n = $(".footer-pop-up-content"), s = n.parent().data("current-promotion-end-date");
            typeof s != "undefined" && s.length > 0 && (t.slideUp(), $("#footer").animate({marginBottom: 0}), i.push(n.data("pop-up")), $.cookie("footer_pop_up_ignored_" + r, i, {expires: new Date(s),path: "/"}))
        }), n = $.grep(n, function(e) {
            return $.inArray(e, i) == -1
        }), $(".footer-pop-up-content").on("click", "a", function() {
            return e.setClosedCookie(r), !0
        });
        if ($.cookie("footer_pop_up_closed_" + r) === null && n.length > 0) {
            var s = $(".footer-pop-up-content");
            s.load("/promotion_banner_images/" + r), s.data("pop-up", r), setTimeout(function() {
                t.slideDown(function() {
                    $("#footer").css("margin-bottom", t.height())
                })
            }, 2e3)
        }
    },setClosedCookie: function(e) {
        var t = new Date;
        t.setMinutes(t.getMinutes() + 600), $.cookie("footer_pop_up_closed_" + e, !0, {expires: t,path: "/"})
    }}, $(function() {
    $.PopupFooter.init()
}), $.ShoppingCart = {MAX_ITEMS_TO_DISPLAY_AT_ONCE: 5,SHOPPING_CART_NAME: "shopping-cart",SHOPPING_CART_HIDE_DELAY: 200,KEEP_SHOPPING_TIME_DELAY: 4e3,CART_ITEM_TEMPLATE: "<li class='item'>                          <a href='' data-item='details'>                           <div class='row'>                             <div class='small-3 columns img'>                               <img src=''>                             </div>                             <div class='small-6 columns'>                               <div class='row'>                                 <span class='title'>                                   <span class='description'></span>                                     <div class='river-item--info river-item-s-desktop-s-mobile--info'></div>                                   </span>                               </div>                             </div>                             <div class='small-2 columns last'>                               <div class='row'>                                 <span class='qty'></span>                               </div>                               <div class='row bottom'>                                 <span class='price'>                                   <div class='row'>                                     <span class='original'>                                       <span></span>                                     </span>                                   </div>                                   <div class='row'>                                     <span class='current'>                                       <span></span>                                     </span>                                   </div>                                 </span>                               </div>                             </div>                           </div>                         </a>                       </li>",build_item: function(e, t) {
        return t.find("img").attr("src", e.photo_url), t.find('a[data-item="details"]').attr("href", e.link), t.find("span.description").text(e.brief_description), e.variant_details ? t.find("div.river-item--info").text(e.variant_details) : t.find("div.river-item--info").remove(), e.price != e.full_price && t.find("span.original span").html("$" + e.full_price), t.find("span.current span").html("$" + e.price), t.find("span.qty").html("Qty " + e.quantity), t
    },add_items_to_popup: function(e) {
        var t = $("#cart-modal .cart-items"), n = $.ShoppingCart.CART_ITEM_TEMPLATE, r, i;
        t.empty(), $.each(e, function(e, s) {
            r = $(n).clone(), i = $.ShoppingCart.build_item(s, r), t.append(i)
        })
    },get_items: function() {
        var e = $("#cart-modal");
        $.ajax({url: e.data("cart-items-url"),type: "GET",async: !1,success: function(e) {
                $.ShoppingCart.add_items_to_popup(e.items), $.ShoppingCart.update_popup()
            }})
    },init_popup: function() {
        $.ShoppingCart.update_popup(), $.ShoppingCart.adjust_position(), $(window).resize($.ShoppingCart.adjust_position)
    },update_popup: function() {
        var e = parseInt($("#main").data("shopping_cart_items"), 10) || 0, t = e + (e === 1 ? " item" : " items");
        $("#cart-modal li.top span.count").text(t), $.ShoppingCart.toggleEnabled(e)
    },adjust_height: function() {
        var e = $("#cart-modal"), t = e.find(".cart-items"), n = t.children(), r = 0;
        if (n.length > $.ShoppingCart.MAX_ITEMS_TO_DISPLAY_AT_ONCE) {
            for (var i = 0; i < $.ShoppingCart.MAX_ITEMS_TO_DISPLAY_AT_ONCE; i++)
                r += $(n.get(i)).outerHeight();
            t.css("max-height", r + "px"), t.css("overflow-y", "scroll")
        }
        if ($(window).height() < $(".small-screen-header").height() + e.height()) {
            t.css("overflow-y", "scroll");
            var s = 10;
            $.ZOZIApp.is_mobile() ? s += $(".small-screen-header").height() : s += $(".main-nav").height();
            var o = s + e.height() - t.height();
            r = $(window).height() - o, t.css("max-height", r + "px")
        }
    },adjust_position: function() {
        var e = $("#cart-modal");
        if (!$.ZOZIApp.is_mobile()) {
            var t = $(".cart.large-screen"), n = $(window).width() - t.offset().left - t.outerWidth();
            e.css("right", n)
        } else
            e.css("right", 0);
        e.css("top", -e.outerHeight()).show()
    },toggleEnabled: function(e) {
        return
        var t = $("#cart_modal_checkout_button"), n = $("#cart-modal .view-all"), r = $("#cart-modal [data-continue-shopping]");
        e === 0 ? (t.get(0).href = "javascript:void(0)", t.addClass("disabled"), t.attr("disabled", !0), r.text("Start Shopping").attr("title", "Start Shopping"), n.attr("disabled", !0), n.get(0).href = "") : (t.get(0).href = "/purchases/new", t.removeClass("disabled"), t.attr("disabled", !1), r.text("Continue Shopping").attr("title", "Continue Shopping"), n.attr("disabled", !1), n.get(0).href = "/purchases/new")
    },show_dialog: function() {
        var e = $("#cart-modal"), t = $("li.cart").attr("data-dirty") === "true";
        t && ($.ShoppingCart.get_items(), $("li.cart").attr("data-dirty", "false")), $.ZOZIApp.is_mobile() ? e.animate({top: $(".small-screen-header").height()}, $.ZOZIApp.TRANSITION_SPEED) : e.animate({top: $("nav.main-nav").height()}, $.ZOZIApp.TRANSITION_SPEED), $.ShoppingCart.adjust_height(), $("li.cart").addClass("hovered"), $(document).trigger({type: $.ZOZIEvents.MODAL_MENU_OPEN,context: $.ShoppingCart.SHOPPING_CART_NAME,callback: $.ShoppingCart.hide_dialog})
    },hide_dialog: function() {
        var e = $("#cart-modal"), t = -e.outerHeight();
        e.animate({top: t}, $.ZOZIApp.TRANSITION_SPEED), $("li.cart").removeClass("hovered"), $(document).trigger({type: $.ZOZIEvents.MODAL_MENU_CLOSE,context: $.Navigation.SHOPPING_CART_NAME})
    },shouldHideDialog: function() {
        return $("#cart-modal:hover").length === 0 && $(".cart:hover").length === 0
    },addItemToCart: function(e) {
        $.ajax({type: "PUT",url: "/shopping_cart_item/create",data: $("#purchase").serialize(),success: $.ShoppingCart.keepShopping,error: function(e) {
                $.ZOZIApp.add_flash_error(e.responseText), $(document).trigger({type: $.ZOZIEvents.CART_UPDATE_ERROR})
            }})
    },keepShopping: function(e) {
        var t = e.cart.items.length;
        $("#main").data("shopping_cart_items", t), $("li.cart").attr("data-dirty", "true"), $(document).trigger({type: $.ZOZIEvents.CART_QUANTITY_UPDATED,count: t}), $.ShoppingCart.show_dialog(), setTimeout(function() {
            $.ShoppingCart.shouldHideDialog() && $.ShoppingCart.hide_dialog()
        }, $.ShoppingCart.KEEP_SHOPPING_TIME_DELAY)
    },attach_evant_handlers: function() {
        $("li.cart.large-screen").hover($.ShoppingCart.show_dialog), $("li.cart.large-screen, #cart-modal").mouseleave(function(e) {
            var t = e.toElement || e.relatedTarget;
            setTimeout(function() {
                $.ShoppingCart.shouldHideDialog() && $.ShoppingCart.hide_dialog()
            }, $.ShoppingCart.SHOPPING_CART_HIDE_DELAY)
        }), $("li.cart.small-screen").click(function() {
            parseInt($("#cart-modal").css("top"), 10) == -$("#cart-modal").outerHeight() ? $.ShoppingCart.show_dialog() : $.ShoppingCart.hide_dialog()
        }), $("#cart-modal [data-continue-shopping]").click($.ShoppingCart.hide_dialog), $(document).on($.ZOZIEvents.ADD_ITEM_TO_CART, $.ShoppingCart.addItemToCart)
    },init: function() {
        $.ShoppingCart.init_popup(), $.ShoppingCart.attach_evant_handlers()
    }}, $(function() {
    $.ShoppingCart.init()
}), $(function() {
    $("body").ajaxError(function(e, t, n) {
        t.status == 401 && (window.location = t.getResponseHeader("Location"))
    })
}), function(e) {
    var t = /([^&=]+)=?([^&]*)/g, n = function(e) {
        return decodeURIComponent(e.replace(/\+/g, " "))
    };
    e.parseParams = function(e) {
        var r = {}, i;
        if (e != undefined) {
            e.substr(0, 1) == "?" && (e = e.substr(1));
            while (i = t.exec(e)) {
                var s = n(i[1]), o = n(i[2]);
                s.indexOf("[]") > 0 ? (s = s.replace(/\[\]/g, ""), r[s] == undefined ? r[s] = [o] : r[s].push(o)) : r[s] = o
            }
        }
        return r
    }
}(jQuery), $.Navigation = {NAV_MENU_NAME: "navigation",init: function() {
        return;
        $.Navigation.data = $("[data-slick_header_data]").data(), $.Navigation.data.cart_items_count = parseInt($.Navigation.data.cart_items_count), $.Navigation.setupCartItemsCount(), $.Navigation.teardownNavigation(), $.Navigation.hookupAccountMenu(), $(".expand-menu-link").on("click", function() {
            return $("body").hasClass("is-nav-expanded") ? $.Navigation.closeNav() : $.Navigation.openNav(), !1
        }), $.Navigation.initSubmenu()
    },setupCartItemsCount: function() {
        $.Navigation.updateCartItemCount($.Navigation.data.cart_items_count), $(document).on($.ZOZIEvents.CART_QUANTITY_UPDATED, $.Navigation.onCartItemCountUpdated), $("a.button-cart").each(function(e, t) {
            var n = $(t), r = $("<div class='icon-caret-down'>");
            n.append(r)
        })
    },onCartItemCountUpdated: function(e) {
        var t = e.count;
        $.Navigation.updateCartItemCount(t)
    },updateCartItemCount: function(e) {
        $("a.button-cart").each(function(t, n) {
            var r = $(n);
            e > 0 && ($count = $("<div class='count-container'>"), $count.html(e), r.html($count))
        })
    },hookupNavigation: function() {
        $(".main-nav--link").off("mouseenter mouseleave"), $(".main-nav--sub-nav--row").off("mouseenter mouseleave"), $(".small-screen-toggle-arrow").on("click", function() {
            $(this).siblings(".main-nav--sub-nav").toggle(), $(this).toggleClass("is-active"), $(this).parent().toggleClass("is-active")
        })
    },
    hookupAccountMenu: function() {
        $(".large-screen-account-nav a.account-nav--toggle").on("click", function(e) {
            e.preventDefault()
        }), $(".account-nav--user-name").html($.Navigation.data.user_name).width(9999).width("auto")
    },teardownNavigation: function() {
        var e;
        $(".main-nav--link").mouseenter(function() {
            $(this).siblings(".main-nav--sub-nav").show()
        }), $(".main-nav--link").mouseleave(function() {
            var t = $(this);
            e = setTimeout(function() {
                t.siblings(".main-nav--sub-nav").hide()
            }, 50)
        }), $(".main-nav--sub-nav--row").mouseenter(function() {
            clearTimeout(e), $(this).parent().show()
        }), $(".main-nav--sub-nav--row").mouseleave(function() {
            $(this).parent().hide()
        }), $(".small-screen-toggle-arrow").off("click"), $(".small-screen-toggle-arrow").removeClass("is-active"), $(".main-nav--group").removeClass("is-active"), $(".main-nav--sub-nav").hide()
    },openNav: function() {
        $("body").addClass("is-nav-expanded"), $.Navigation.hookupNavigation(), $(".main-nav").offset().top == 0 && $(".main-nav").css("padding-top", 45), $(".small-screen-account-nav #nav-toggle").parent().removeClass("is-active"), $(document).trigger({type: $.ZOZIEvents.MODAL_MENU_OPEN,context: $.Navigation.NAV_MENU_NAME,callback: $.Navigation.closeNav})
    },closeNav: function() {
        $("body").removeClass("is-nav-expanded"), $.Navigation.teardownNavigation(), $(".main-nav").css("padding-top", ""), $(document).trigger({type: $.ZOZIEvents.MODAL_MENU_CLOSE,context: $.Navigation.NAV_MENU_NAME})
    },initSubmenu: function() {
        $(window).resize($.Navigation.fixSubmenuPosition), $.Navigation.fixSubmenuPosition()
    },fixSubmenuPosition: function() {
        var e = $(".main-nav--sub-nav");
        $.ZOZIApp.is_mobile() ? (e.css("padding-left", 0), e.css("padding-right", 0)) : window.setTimeout(function() {
            var t = $(".main-nav--list").parents(".row"), n = t.offset().left;
            e.css("padding-left", n), e.css("padding-right", n)
        }, 50)
    }}, $(function() {
    $.Navigation.init()
}), $.IndexCarousel = {ANIMATION_TIMER: {},init: function() {
        this.centerCarouselImages(), $(window).resize(this.centerCarouselImages), $("#featured1").on("orbit:ready", this.showCarousel()), $(document).on($.ZOZIEvents.FILTER_SELECTED, this.hideCarousel), $(document).on($.ZOZIEvents.FILTER_UNSELECTED, this.showCarousel)
    },showCarousel: function() {
        $(".main-content-area").removeClass("is-loading"), $(".loading-logo").hide(), $(".slideshow-wrapper").css({display: ""}), clearTimeout(this.ANIMATION_TIMER), this.ANIMATION_TIMER = setTimeout(function() {
            $(".slideshow-wrapper").css({opacity: 1})
        }, 1)
    },hideCarousel: function() {
        $(".slideshow-wrapper").css({opacity: ""}), clearTimeout(this.ANIMATION_TIMER), this.ANIMATION_TIMER = setTimeout(function() {
            $(".slideshow-wrapper").css({display: "none"})
        }, $.ZOZIApp.SLOW_TRANSITION_SPEED)
    },centerCarouselImages: function() {
        var e = $(window).width(), t = $(".slideshow-wrapper").height(), n, r, i, s, o, u, a;
        $(".featured-item--photo").each(function(f, l) {
            a = $(l), n = Math.max.apply(Math, a.find("img").map(function() {
                return $(this).width()
            })), r = Math.max.apply(Math, a.find("img").map(function() {
                return $(this).height()
            })), i = n > e, s = r > t, o = i ? (e - n) / 2 : 0, u = s ? (t - r) / 2 : 0, $(l).find(".responsive-image").css({"margin-left": o + "px","margin-top": u + "px"})
        })
    }}, $(function() {
    $.IndexCarousel.init()
}), $.Filtering = {SIDE_BAR_NAME: "filter-side-bar",SORT_MENU_NAME: "filter-sort-menu",FILTER_CARD_Y_OFFSET: 256,CAROUSEL_Y_OFFSET: 355,loading: !1,init: function() {
        $.Filtering.sideBar = $(".filter-side-bar-container");
        if (!$.Filtering.sideBar.length)
            return;
        $.Filtering.topBar = $(".filter-top-bar-container"), $.Filtering.sortBar = $(".filter-sort-container"), $.Filtering.carousel = $(".index-carousel"), $.Filtering.footer = $(".main-footer"), $.Filtering.experiencesContainer = $(".more-experiences-list"), $.Filtering.infoCard = $.Filtering.sideBar.find(".filter-info-card"), $.Filtering.perPage = $(".filter-side-bar-container").data("per-page"), $.Filtering.productLine = $(".filter-side-bar-container").data("product-line"), $.Filtering.categoryBoxBar = $(".category-boxes-container"), $.Filtering.priceSlider = $("#price-slider"), $.Filtering.priceBar = $("#price-option"), $.Filtering.priceRange = $("#min-price, #max-price"), $.Filtering.priceClear = $("#price-option .filter-side-bar--clear"), this.setupMenuArrows(), this.setupOpenAndCloseHandlers(), this.initTopBar(), this.initSideBar(), this.initPriceBar(), setTimeout(this.activateDefaultFilter, $.ZOZIApp.SLOW_TRANSITION_SPEED)
    },activateDefaultFilter: function() {
        activeArrow = $.Filtering.sideBar.find(".arrow-toggle-button.is-active");
        if (activeArrow.length === 0) {
            var e = $.Filtering.sideBar.find(".arrow-toggle-button:first");
            $.Filtering.activateFilter(e)
        } else
            $.Filtering.activateFilter(activeArrow)
    },activateFilter: function(e) {
        $(e).addClass("is-active"), $(e).parent().find("input[type=radio]").prop("checked", !0)
    },setupOpenAndCloseHandlers: function() {
        $.Filtering.topBar.find(".arrow-toggle-button").click(function() {
            $(this).hasClass("is-active") ? $.Filtering.closeSideBar() : ($(this).addClass("is-active"), $(".filter-side-bar-container").addClass("is-expanded"), $(document).trigger({type: $.ZOZIEvents.MODAL_MENU_OPEN,context: $.Filtering.SIDE_BAR_NAME,callback: $.Filtering.closeSideBar})), $.Filtering.resizeContainer()
        }), $(".button-sort").click(function() {
            $(".filter-sort-container").hasClass("is-active") ? $.Filtering.closeSortMenu() : ($(".filter-sort-container").addClass("is-active"), $(document).trigger({type: $.ZOZIEvents.MODAL_MENU_OPEN,context: $.Filtering.SORT_MENU_NAME,callback: $.Filtering.closeSortMenu}))
        })
    },setupMenuArrows: function() {
        $.Filtering.sideBar.find(".arrow-toggle-button").click(function() {
            $(this).toggleClass("is-active");
            var e = $(this).hasClass("is-active");
            $.Filtering.sideBar.find(".arrow-toggle-button").removeClass("is-active"), e && $(this).addClass("is-active"), $(this).parent().find("input[type=radio]").prop("checked", e)
        }), $(".filter-side-bar-container").on("click", "input[type=radio]", function() {
            var e = $(this).parent().find(".arrow-toggle-button"), t = !e.hasClass("is-active");
            $.Filtering.sideBar.find(".arrow-toggle-button").removeClass("is-active"), t && e.addClass("is-active"), $(this).prop("checked", t)
        })
    },initTopBar: function() {
        $.Filtering.topBar.on("activate", $.Filtering.activateTopBar), $.Filtering.topBar.on("de-activate", $.Filtering.deactivateTopBar), $.Filtering.toggleTopBar(), $(window).resize(function() {
            $.Filtering.toggleTopBar()
        })
    },toggleTopBar: function() {
        var e = $(".filter-side-bar--group--option.is-active").length;
        $(window).width() >= 768 && e == 0 ? $.Filtering.topBar.trigger("de-activate") : $.Filtering.topBar.trigger("activate")
    },activateTopBar: function() {
        $.Filtering.topBar.addClass("is-active"), $("body").addClass("is-top-bar-active"), $.Filtering.setupSideBarPositioning(), $(".index-carousel").addClass("is-below-filter")
    },deactivateTopBar: function() {
        $.Filtering.topBar.removeClass("is-active"), $("body").removeClass("is-top-bar-active"), $.Filtering.sortBar.removeClass("is-active"), $.Filtering.setupSideBarPositioning(), $(".index-carousel").removeClass("is-below-filter")
    },closeSideBar: function() {
        $.Filtering.topBar.find(".arrow-toggle-button").removeClass("is-active"), $(".filter-side-bar-container").removeClass("is-expanded"), $(document).trigger({type: $.ZOZIEvents.MODAL_MENU_CLOSE,context: $.Filtering.SIDE_BAR_NAME})
    },closeSelection: function(e) {
        e.data.option.trigger("click")
    },optionSelection: function() {
        $.Filtering.updateFilter($(this)), $.Filtering.updateBrowserUrl(), $.Filtering.toggleTopBar(), $.Filtering.update()
    },updateBrowserUrl: function() {
        Modernizr.history && window.history.pushState($(document).html(), "ZOZI", window.location.pathname + "?" + $.Filtering.urlParams())
    },update: function() {
        $.Filtering.fadeExperiences("out"), $.Filtering.loading = !0, $.ajax({type: "GET",url: "/search/" + $.Filtering.productLine + "/filter?per_page=" + $.Filtering.perPage,data: $.Filtering.filterParams()}).done(function(e) {
            $.Filtering.updateExperiences(e), $.MoreExperiences.resetPageCounter(), window.picturefill(), $.Filtering.fadeExperiences("in"), $.Filtering.resizeContainer(), $.Filtering.loading = !1;
            var t = $("ul#filtered_experiences").data("total_results");
            $.Filtering.updateTotalResults(t), $.Filtering.toggleCategoryBoxes(), $(".category-boxes-container").on("click", "a", $.Filtering.categoryBoxSelection)
        })
    },sort: function() {
        $.Filtering.sortBar.find("a").removeClass("is-active"), $(this).addClass("is-active"), $.Filtering.updateBrowserUrl(), $.Filtering.update(), $.Filtering.closeSortMenu()
    },closeSortMenu: function() {
        $(".filter-sort-container").removeClass("is-active"), $(document).trigger({type: $.ZOZIEvents.MODAL_MENU_CLOSE,context: $.Filtering.SORT_MENU_NAME})
    },checkFilterByKeyValue: function(e, t) {
        $("input[data-filter-category=" + e + '][data-filter-name="' + t + '"]').prop("checked", !0).next().addClass("is-active")
    },categoryBoxSelection: function(e) {
        e.preventDefault(), $(".filter-side-bar-container input[type=checkbox]").prop("checked", !1), $(".filter-side-bar--clear").hide(), $(".filter-side-bar--group--option.is-active").removeClass("is-active"), $(".filter-side-bar--group-counter").hide(), $.each($(this).data(), function(e, t) {
            $.each(t, function(t, n) {
                $.Filtering.checkFilterByKeyValue(e, n)
            })
        }), $.Filtering.updateBrowserUrl(), $.each($(".filter-side-bar--group"), function(e, t) {
            var n = $(t).find(".filter-side-bar--group--option.is-active").length;
            if (n) {
                var r = $(t).find(".filter-side-bar--group-counter");
                r.html(n), r.show();
                var i = $(t).find(".filter-side-bar--clear");
                i.show()
            }
        }), $.Filtering.optionSelection()
    },updateFilter: function(e) {
        var t = $.Filtering.isPriceFilter(e) ? e.parents(".filter-side-bar--group--option") : e, n = t.siblings("input:checkbox"), r = t.closest(".filter-side-bar--group").find(".filter-side-bar--group-counter"), i = $("#infinite-text").find('span[class*="infinite-text--"]');
        $.Filtering.isPriceFilter(e) ? n.prop("checked", !0) : (t.toggleClass("is-active"), n.trigger("click")), i.text("Loading"), $.Filtering.updateFilterSelection(t, n, r), $.Filtering.updateClearButtons(t, r), $.Filtering.updateCarouselState()
    },toggleCategoryBoxes: function() {
        var e = $(".filter-side-bar--group--option.is-active");
        e.length > 0 ? $(".category-boxes-container").hide() : $.ZOZIApp.is_mobile() || $(".category-boxes-container").show()
    },updateCarouselState: function() {
        var e = $(".filter-side-bar--group--option.is-active");
        e.length > 0 ? ($(".filter-info-card").fadeOut($.ZOZIApp.SLOW_TRANSITION_SPEED), $(document).trigger($.ZOZIEvents.FILTER_SELECTED)) : ($(document).trigger($.ZOZIEvents.FILTER_UNSELECTED), $(".filter-info-card").show())
    },parameterizedFilters: function() {
        var e = $.Filtering.filterData();
        return e.price && (e.price_min = $("#min-price").val(), e.price_max = $("#max-price").val()), e
    },filterParams: function() {
        return $.extend({}, $.Filtering.sortData(), $.Filtering.parameterizedFilters())
    },urlParams: function() {
        return $.param($.extend({}, $.Filtering.sortData(), $.Filtering.parameterizedFilters()))
    },filterData: function() {
        var e = {};
        return $("a.filter-side-bar--group--option.is-active+input[data-filter-category], [data-filter-static]").each(function(t, n) {
            var r = $(n), i = r.data();
            e[i.filterCategory] || (e[i.filterCategory] = []), e[i.filterCategory].push(i.filterName)
        }), e
    },sortData: function() {
        return $el = $(".filter-sort-container--option.is-active"), {sort_by: $el.data("sort-by"),sort_order: $el.data("sort-order")}
    },updateExperiences: function(e) {
        $.Filtering.experiencesContainer.html(e)
    },fadeExperiences: function(e) {
        var t = $.Filtering.experiencesContainer, n = $("#infinite-text"), r = n.find('span[class*="infinite-text--"]');
        n.removeClass("all-items-loaded"), $(".more-experiences-list").find("ul li").length ? n.show() : n.hide(), e == "out" ? ($.each(r, function(e, t) {
            var n, r;
            n = $(t), r = n.data("title"), $(t).text(r)
        }), t.fadeOut($.ZOZIApp.TRANSITION_SPEED)) : t.fadeIn($.ZOZIApp.TRANSITION_SPEED)
    },updateTotalResults: function(e) {
        $("[data-search-total]").text(e), $("[data-search-label]").text(e === 1 ? "Result" : "Results")
    },calculateChecked: function() {
        var e = $(".filter-side-bar--group--option.is-active");
        e.length > 0 && ($.Filtering.activateTopBar(), total = 0, $.each(e, function(e, t) {
            count = $(t).children("span.count").text(), total += parseInt(count, 10)
        }), $.Filtering.updateTotalResults(total))
    },updateFilterSelection: function(e, t, n) {
        var r, i, s = parseInt(n.html()) || 0;
        t.is(":checked") ? (r = e.parents(".filter-side-bar--group--list"), i = r.find(".filter-side-bar--group--option.is-active"), t.data("filter-category") == "price" ? (s = 1, t.siblings("a").addClass("is-active"), t.prop("checked", !0)) : s++) : s--, n.html(s)
    },filterSelectionText: function(e) {
        return e.parent().find("a").html()
    },updateClearButtons: function(e, t) {
        var n = e.closest(".filter-side-bar--group").find(".filter-side-bar--clear"), r = $(".filter-side-bar--selection .filter-side-bar--clear"), i = parseInt(t.html(), 10) || 0;
        i == 0 ? (t.hide(), n.hide()) : (t.show(), n.show()), $(".filter-side-bar--selection-option").length > 0 ? r.show() : r.hide()
    },clearGroup: function() {
        $(this).siblings(".filter-side-bar--group--list").find(".filter-side-bar--group--option.is-active").trigger("click")
    },clearAll: function() {
        $(".filter-side-bar--group--option.is-active").trigger("click"), $.Filtering.deactivateTopBar()
    },initSideBar: function() {
        $.Filtering.setupSideBarPositioning(), $(window).resize(function() {
            $.Filtering.setupSideBarPositioning()
        }), $(window).scroll(function() {
            $.Filtering.checkIfSticky(), $.Filtering.resizeContainer()
        }), $.Filtering.setupInitialOptionSelections(), $.Filtering.sideBar.on("click", ".filter-side-bar--group--option", $.Filtering.optionSelection), $.Filtering.sideBar.on("click", ".filter-side-bar--group .filter-side-bar--clear", $.Filtering.clearGroup), $.Filtering.sideBar.on("click", ".filter-side-bar--selection .filter-side-bar--clear", $.Filtering.clearAll), $.Filtering.sideBar.on("facets:update", "[data-filter-category][data-filter-name]", $.Filtering.updateFilterText), $.Filtering.sortBar.on("click", ".filter-sort-container--option:not(.is-active)", $.Filtering.sort), $.Filtering.priceRange.on("change", $.Filtering.optionSelection), $.Filtering.categoryBoxBar.on("click", "a", $.Filtering.categoryBoxSelection), $.Filtering.priceClear.on("click", $.Filtering.resetPriceSlider), $.Filtering.calculateChecked()
    },initPriceBar: function() {
        var e = $.Filtering.priceBar.data("min-price"), t = $.Filtering.priceBar.data("max-price"), n = t, r = $.parseParams(window.location.search);
        r.price && (n = parseInt(r.price_max) / 100), $.Filtering.priceSlider.slider({range: "min",min: e,max: t,value: n,step: 50,slide: function(e, t) {
                $.Filtering.setSliderText(t.value)
            },stop: function(t, n) {
                $.Filtering.definePriceInputs(e, n.value), $.Filtering.priceRange.first().trigger("change")
            }}), $.Filtering.setSliderText($("#price-slider").slider("value")), $.Filtering.definePriceInputs(e, t)
    },resetPriceSlider: function() {
        var e = $.Filtering.priceBar.data("max-price");
        $("#price-slider").slider("value", e), $.Filtering.setSliderText(e)
    },setSliderText: function(e) {
        $("#filter-price").text("Under $" + (e + 1))
    },setupInitialOptionSelections: function() {
        var e = $.parseParams(window.location.search);
        $.each(e, function(e, t) {
            $.isArray(t) ? $(t).each(function(t, n) {
                $.Filtering.setupOptionSelection(e, n)
            }) : $.Filtering.setupOptionSelection(e, t)
        })
    },setupOptionSelection: function(e, t) {
        $menuItem = $("input[data-filter-category='" + e + "'][data-filter-name='" + t + "']").siblings("a"), $menuItem.hasClass("is-disabled") || $.Filtering.updateFilter($menuItem)
    },setupSideBarPositioning: function() {
        $.Filtering.sideBar.removeClass("is-sticky"), $.Filtering.highestAllowablePos = $.Filtering.getHighestAllowablePos(), $.Filtering.resizeContainer(), $.Filtering.checkIfSticky(), $.Filtering.infoCardVisible() && $.Filtering.adjustFeatureItemTitleArea()
    },resizeContainer: function() {
        var e = $.Filtering.sideBar.find(".filter-side-bar--group"), t = $.Filtering.sideBar.find(".filter-side-bar--group--list"), n = $.Filtering.bottomOfWindowOffset(), r = $.Filtering.footerOffset() - n, i = n - $.Filtering.sideBar.position().top;
        r < 10 && (i += r - 10), $.Filtering.sideBar.height(i);
        var s = e.find("input:not(:checked)").parent().height(), o = e.length, u = i - s * o;
        t.height(u);
        var a = $.Filtering.sideBar.find(".filter-side-bar--group--option").height();
        t.each(function() {
            $(this).removeClass("is-scrollable");
            var e = $(this).children().length * a + 10;
            e > u ? $(this).addClass("is-scrollable") : $(this).height(e)
        })
    },bottomOfWindowOffset: function() {
        return window.scrollY + $(window).height()
    },footerOffset: function() {
        return $.Filtering.footer.offset().top
    },getHighestAllowablePos: function() {
        return $.Filtering.infoCardVisible() ? $.Filtering.FILTER_CARD_Y_OFFSET : $.Filtering.CAROUSEL_Y_OFFSET
    },checkIfSticky: function() {
        var e = $(window).scrollTop();
        e >= $.Filtering.highestAllowablePos || $.Filtering.topBar.hasClass("is-active") ? $.Filtering.sideBar.addClass("is-sticky") : $.Filtering.sideBar.removeClass("is-sticky")
    },infoCardVisible: function() {
        return $.Filtering.infoCard.length > 0 && $.Filtering.infoCard.is(":visible")
    },adjustFeatureItemTitleArea: function() {
        $(".featured-item--content > .row").addClass("is-filter-info-active")
    },updateFilterText: function(e, t) {
        var n = t.count == 0;
        $(this).siblings(".filter-side-bar--group--option").toggleClass("is-disabled", n), $(this).parent().find(".count").text(t.count)
    },isPriceFilter: function(e) {
        return e.is("input")
    },definePriceInputs: function(e, t) {
        $("#min-price").val(e * 100), $("#max-price").val(t * 100)
    }}, $(function() {
    $.Filtering.init()
}), $.FacetParser = {update: function(e) {
        $.each(e, function(e, t) {
            e == "price_range" ? $.FacetParser.setPriceCount(t) : $.FacetParser.setFilterCount(e, t)
        })
    },setPriceCount: function(e) {
        var t;
        t = [], $.each(e, function(e, n) {
            var r = $.FacetParser.filterSelector("price", e + 1);
            $(r).trigger("facets:update", [{count: n.count}]), t.push(n.name)
        }), selector = $.FacetParser.filterUnselector("price_range", t), $(selector).trigger("facets:update", [{count: 0}])
    },setFilterCount: function(e, t) {
        var n;
        n = [], $.each(t, function(t, r) {
            var i = $.FacetParser.filterSelector(e, r.name);
            $(i).trigger("facets:update", [{count: r.count}]), n.push(r.name)
        }), selector = $.FacetParser.filterUnselector(e, n), $(selector).trigger("facets:update", [{count: 0}])
    },filterSelector: function(e, t) {
        return '[data-filter-category="' + e + '"][data-filter-name="' + t + '"]'
    },filterUnselector: function(e, t) {
        var n = '[data-filter-category="' + e + '"]';
        return $.each(t, function(e, t) {
            n += ':not([data-filter-name="' + t + '"])'
        }), n
    }}, $.SignupPage = {init: function() {
        var e = $("#signup_market_selector");
        $(e).find("option:eq(1)").attr("selected", !0), e.customSelect(), $("#facebook_connect_button").on("click", function(e) {
            var t = $(this);
            FB.login(function(e) {
                e.authResponse && (window.location = t.data("fb-callback-url"))
            }, {scope: "email"})
        })
    }}, $(function() {
    $.SignupPage.init()
}), $.InlineErrors = {clear: function(e) {
        e.removeClass("field_with_errors"), e.attr("placeholder", e.attr("data-original-placeholder")), e.removeAttr("data-original-placeholder")
    },shortenPlaceholderError: function(e, t) {
        var n = $.merge($("label[for=" + e.attr("id") + "]").parents(".is-required[data-short-error-messages]"), $("label[data-short-error-messages][for=" + e.attr("id") + "].is-required"));
        e.val(""), n.length > 0 && (!$.ZOZIApp.is_mobile() || n.data("short-error-messages") === "always" ? t.match("can't be blank") ? t = "Fill me in" : t.match("is not valid|is invalid") ? t = "Invalid" : t.match("too short") && (t = "Too short") : t.match("Email address has already been taken") ? t = "'" + e.val() + "' is taken" : t.match("Email address should look like an email address") && (t = "'" + e.val() + "' is not valid")), e.val(""), $.InlineErrors.insertPlaceholderError(e, t)
    },insertPlaceholderError: function(e, t) {
        e.addClass("field_with_errors");
        var n = e.attr("placeholder");
        e.attr("data-original-placeholder", n), e.attr("placeholder", t)
    },add: function(e, t, n) {
        $.each(n, function(t, n) {
            var r = $("input[name='" + e + "[" + t + "]']"), i = t.substr(0, 1).toUpperCase() + t.substr(1);
            i = i.replace("_", " ");
            var s = i + " " + n;
            r.val(""), $.InlineErrors.insertPlaceholderError(r, s)
        }), $(".relative-flash").html(t), $.FlashMessage.init(), $("html, body").animate({scrollTop: 0}, "slow")
    }}, $(document).ready(function() {
    $("span[class^=error]").each(function() {
        var e = $(this).prev("input"), t = $.trim($(this).text());
        $.InlineErrors.shortenPlaceholderError(e, t), $(this).hide()
    }), $(document).on("focus", "input.field_with_errors", function(e) {
        var t = $(e.target);
        $.InlineErrors.clear(t)
    }), $(document).on("focus", ".field_with_errors input[data-original-email]", function(e) {
        var t = $(e.target), n = t.attr("data-original-email");
        t.val(n), $.InlineErrors.clear(t)
    })
}), $.AccountSection = {init: function() {
        $(document).on("click", ".account--buttons--save", $.AccountSection.submitForm), $(document).on("click", ".default-title", $.AccountSection.toggleCheck), $(document).on("click", ".credit-card--delete a, .shipping-address--delete a", $.AccountSection.showModal), $(document).on("click", ".my-account--modal a[data-close]", $.AccountSection.closeModal), !$.ZOZIApp.is_mobile() && $("form.edit_user").length && ($(document).on("click", ".account--buttons--cancel", $.AccountSection.resetForm), $("input#return_to_user_edit").attr("value", !0)), $("select#user_shipping_address_country").on("change", function(e) {
            var t = $(this).val(), n = $("#shipping_address_state_code_wrapper");
            $("select#user_shipping_address_select").attr("disabled", !0);
            var r = $(this).data("url") + "?parent_region=" + t;
            n.load(r)
        })
    },submitForm: function(e) {
        e.preventDefault(), $("form").submit()
    },resetForm: function(e) {
        e.preventDefault(), $(this).parents("form").find("input[data-original-value]").each(function() {
            var e = $(this).data("original-value");
            $.InlineErrors.clear($(this)), typeof e == "boolean" ? $(this).prop("checked", e) : $(this).val(e)
        })
    },followLink: function(e) {
        e.preventDefault(), window.location = $(this).find("a").attr("href")
    },toggleCheck: function(e) {
        var t = $(this).find("input");
        t.val(t.is(":checked"))
    },closeModal: function(e) {
        e.preventDefault(), $(".my-account--modal:visible, .modal-shade").fadeOut()
    },showModal: function(e) {
        e.preventDefault(), $(".my-account--modal, .modal-shade").fadeIn()
    }}, $(function() {
    $.AccountSection.init()
}), $.ScrollableRow = {init: function() {
        $("[data-scroll-index-button]").on("click", this.scrollIndexRow), $(".is-scrollable-row ul").on("scroll", this.checkIfAtEnd), $('[data-scroll-index-button="left"]').addClass("disabled")
    },scrollIndexRow: function(e) {
        var t = 3, n = 25, r = $(this).parents(".index-row").find(".is-scrollable-row ul"), i = r.children("li:first").outerWidth(!0) + t, s = r.outerWidth(!0) + n, o = r.scrollLeft(), u = $(this).data("scrollIndexButton"), a = u === "right" ? -o % i + s + o : o - s + i - o % (i + t) - n;
        r.animate({scrollLeft: a}, $.ZOZIApp.SLOW_TRANSITION_SPEED)
    },checkIfAtEnd: function(e) {
        var t = $(e.target), n = t.scrollLeft(), r = t.parents(".index-row"), i = t.get(0).scrollWidth - t.width(), s = r.find('[data-scroll-index-button="left"]'), o = r.find('[data-scroll-index-button="right"]');
        s.toggleClass("disabled", n === 0), o.toggleClass("disabled", n >= i)
    }}, $(function() {
    $.ScrollableRow.init()
}), $.BucketListPage = {REMOVE_CONFIRMATION_TEMPLATE: '<div class="remove-confirmation">     <div class="remove-confirmation--button-container">       <button class="button button-orange" data-confirm-button="true">Remove Item</button>       <button class="button button-white" data-cancel-button="true">Cancel</button>     </div>   </div>',EMPTY_BUCKET_LIST_TEMPLATE: '<div class="empty-bucket-list">     <h4> No items in your list </h4>     <div class="collect-bucket-list-text">Collect and share your favorite experiences and gear from ZOZI.</div>     <a href=/' + $.cookie("market") + ' class="button button-orange start-browsing-button">Start Browsing</a>   </div>',init: function() {
        $.cookie.json = !1;
        var e = $('<button class="remove-button">');
        $('.bucket-list [data-type="experience"]').append(e), $(".bucket-list").on("click", ".remove-button", $.BucketListPage.confirmRemoval), $("[data-edit-bucket-list-button]").on("click", $.BucketListPage.toggleEditMode), $(".bucket-list--modal[data-type=clear] a.button").on("click", $.BucketListPage.removeMultipleItems), $("[data-share-bucket-list-button], [data-clear-bucket-list-button]").on("click", $.BucketListPage.showModal), $(".button[data-close-modal]").on("click", $.BucketListPage.closeModal), $("a.button[data-share-type]").on("click", function(e) {
            var t = $(e.target).data("share-type"), n = $(".bucket-list--buttons:visible").data("share-url");
            e.preventDefault(), $.BucketListPage.share(t, n)
        }), $(".responsive_application_slick-bucket_list_items").length && !$('.bucket-list [data-type="experience"]').length && $.BucketListPage.showEmptyBucketList()
    },toggleEditMode: function() {
        var e = $("#main");
        e.toggleClass("is-editing"), $("[data-edit-bucket-list-button]").toggleClass("button-gray-hollow").toggleClass("button-orange").html(e.hasClass("is-editing") ? "Done Editing" : "Edit"), $(".remove-confirmation").remove(), $("[data-cancel-button]").off("click", $.BucketListPage.cancelRemoval), $("[data-confirm-button]").off("click", $.BucketListPage.removeItem), $.BucketListPage.toggleShareButton()
    },confirmRemoval: function() {
        $(this).parent().find(".gradient-overlay").after($($.BucketListPage.REMOVE_CONFIRMATION_TEMPLATE)), $("[data-cancel-button]").on("click", $.BucketListPage.cancelRemoval), $("[data-confirm-button]").on("click", $.BucketListPage.removeItem)
    },removeMultipleItems: function() {
        var e = $(this).data("type");
        return $.BucketListPage.toggleCancelButton(), $.ajax({type: "DELETE",url: "/bucket_list/destroy_multiple",data: {type: e},success: $.BucketListPage.onRemoveSuccess}), !1
    },toggleCancelButton: function() {
        var e = $("[data-close-modal]:visible");
        e.toggleClass("is-processing"), e.hasClass("is-processing") ? ($(".bucket-list--modal[data-type=clear] a.button").off("click", $.BucketListPage.removeMultipleItems), $(".button[data-close-modal]").off("click", $.BucketListPage.closeModal), e.html("Please Wait")) : ($('.bucket-list [data-type="experience"]').length > 0 ? ($(".bucket-list--modal[data-type=clear] a.button").on("click", $.BucketListPage.removeMultipleItems), $(".button[data-close-modal]").on("click", $.BucketListPage.closeModal)) : ($.BucketListPage.toggleEditMode(), $(".bucket-list-actions a").attr("disabled", "disabled"), $("[data-edit-bucket-list-button]").off("click", $.BucketListPage.toggleEditMode), $("[data-share-bucket-list-button]").off("click", $.BucketListPage.showModal)), $.BucketListPage.closeModal(), e.html("Cancel"))
    },removeItem: function() {
        var e = $(this).parents("[data-deal-id]").data("deal-id");
        return $(this).parents('[data-type="experience"]').css("display", "none"), $.ajax({type: "DELETE",url: "/bucket_list/" + e,success: $.BucketListPage.onRemoveSuccess,error: $.BucketListPage.onRemoveError}), !1
    },onRemoveSuccess: function(e) {
        $.each(e.deal_ids, function(e, t) {
            $("[data-deal-id=" + t + "]").parent().remove()
        });
        var t = $('.bucket-list [data-type="experience"]').length, n = t + (t === 1 ? " item" : " items");
        $(".bucket-list-actions h3").html(n), $.BucketListPage.toggleCancelButton(), t || ($.BucketListPage.showEmptyBucketList(), $(".bucket-list-actions").remove(), $(".bucket-list").remove())
    },onRemoveError: function(e) {
        var t = JSON.parse(e.responseText);
        dealId = t.deal_id, message = t.message, $("[data-deal-id=" + dealId + "]").parent().css("display", ""), $.ZOZIApp.add_flash_error(message)
    },cancelRemoval: function() {
        return $("[data-cancel-button]").off("click", $.BucketListPage.cancelRemoval), $("[data-confirm-button]").off("click", $.BucketListPage.removeItem), $(this).parent().parent().remove(), !1
    },share: function(e, t) {
        $.ajax({type: "POST",dataType: "json",url: t,data: {share_type: e},async: !1,success: function(t) {
                switch (e) {
                    case "twitter":
                        window.open(t.share_url, "_blank", "menubar=0,resizable=1,width=800,height=600");
                        break;
                    case "facebook":
                        FB.ui({method: "feed",link: t.share_url,name: t.name,description: t.description})
                }
            }})
    },toggleShareButton: function() {
        $("[data-share-bucket-list-button], [data-clear-bucket-list-button]").toggle()
    },closeModal: function() {
        $(".bucket-list--modal:visible, .modal-shade").fadeOut()
    },showModal: function() {
        $(this).data("share-bucket-list-button") ? $(".bucket-list--modal[data-type=share], .modal-shade").fadeIn() : $(".bucket-list--modal[data-type=clear], .modal-shade").fadeIn()
    },showEmptyBucketList: function() {
        $(".account_right_side").append($.BucketListPage.EMPTY_BUCKET_LIST_TEMPLATE)
    }}, $(function() {
    $.BucketListPage.init()
}), function(e) {
    e.fn.numeric = function(t, n) {
        typeof t == "boolean" && (t = {decimal: t}), t = t || {}, typeof t.negative == "undefined" && (t.negative = !0);
        var r = t.decimal === !1 ? "" : t.decimal || ".", i = t.negative === !0 ? !0 : !1;
        return n = typeof n == "function" ? n : function() {
        }, this.data("numeric.decimal", r).data("numeric.negative", i).data("numeric.callback", n).keypress(e.fn.numeric.keypress).keyup(e.fn.numeric.keyup).blur(e.fn.numeric.blur)
    }, e.fn.numeric.keypress = function(t) {
        var n = e.data(this, "numeric.decimal"), r = e.data(this, "numeric.negative"), i = t.charCode ? t.charCode : t.keyCode ? t.keyCode : 0;
        if (i == 13 && this.nodeName.toLowerCase() == "input")
            return !0;
        if (i == 13)
            return !1;
        var s = !1;
        if (t.ctrlKey && i == 97 || t.ctrlKey && i == 65)
            return !0;
        if (t.ctrlKey && i == 120 || t.ctrlKey && i == 88)
            return !0;
        if (t.ctrlKey && i == 99 || t.ctrlKey && i == 67)
            return !0;
        if (t.ctrlKey && i == 122 || t.ctrlKey && i == 90)
            return !0;
        if (t.ctrlKey && i == 118 || t.ctrlKey && i == 86 || t.shiftKey && i == 45)
            return !0;
        if (i < 48 || i > 57) {
            var o = e(this).val();
            if (!(o.indexOf("-") === 0 || !r || i != 45 || o.length !== 0 && parseInt(e.fn.getSelectionStart(this), 10) !== 0))
                return !0;
            n && i == n.charCodeAt(0) && o.indexOf(n) != -1 && (s = !1), i != 8 && i != 9 && i != 13 && i != 35 && i != 36 && i != 37 && i != 39 && i != 46 ? s = !1 : typeof t.charCode != "undefined" && (t.keyCode == t.which && t.which !== 0 ? (s = !0, t.which == 46 && (s = !1)) : t.keyCode !== 0 && t.charCode === 0 && t.which === 0 && (s = !0)), n && i == n.charCodeAt(0) && (o.indexOf(n) == -1 ? s = !0 : s = !1)
        } else
            s = !0;
        return s
    }, e.fn.numeric.keyup = function(t) {
        var n = e(this).val();
        if (n && n.length > 0) {
            var r = e.fn.getSelectionStart(this), i = e.fn.getSelectionEnd(this), s = e.data(this, "numeric.decimal"), o = e.data(this, "numeric.negative");
            if (s !== "" && s !== null) {
                var u = n.indexOf(s);
                u === 0 && (this.value = "0" + n), u == 1 && n.charAt(0) == "-" && (this.value = "-0" + n.substring(1)), n = this.value
            }
            var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "-", s], f = n.length;
            for (var l = f - 1; l >= 0; l--) {
                var c = n.charAt(l);
                l !== 0 && c == "-" ? n = n.substring(0, l) + n.substring(l + 1) : l === 0 && !o && c == "-" && (n = n.substring(1));
                var h = !1;
                for (var p = 0; p < a.length; p++)
                    if (c == a[p]) {
                        h = !0;
                        break
                    }
                if (!h || c == " ")
                    n = n.substring(0, l) + n.substring(l + 1)
            }
            var d = n.indexOf(s);
            if (d > 0)
                for (var v = f - 1; v > d; v--) {
                    var m = n.charAt(v);
                    m == s && (n = n.substring(0, v) + n.substring(v + 1))
                }
            this.value = n, e.fn.setSelection(this, [r, i])
        }
    }, e.fn.numeric.blur = function() {
        var t = e.data(this, "numeric.decimal"), n = e.data(this, "numeric.callback"), r = this.value;
        if (r !== "") {
            var i = new RegExp("^\\d+$|^\\d*" + t + "\\d+$");
            i.exec(r) || n.apply(this)
        }
    }, e.fn.removeNumeric = function() {
        return this.data("numeric.decimal", null).data("numeric.negative", null).data("numeric.callback", null).unbind("keypress", e.fn.numeric.keypress).unbind("blur", e.fn.numeric.blur)
    }, e.fn.getSelectionStart = function(e) {
        if (e.type === "number")
            return undefined;
        if (e.createTextRange) {
            var t = document.selection.createRange().duplicate();
            return t.moveEnd("character", e.value.length), t.text === "" ? e.value.length : e.value.lastIndexOf(t.text)
        }
        return e.selectionStart
    }, e.fn.getSelectionEnd = function(e) {
        if (e.type === "number")
            return undefined;
        if (e.createTextRange) {
            var t = document.selection.createRange().duplicate();
            return t.moveStart("character", -e.value.length), t.text.length
        }
        return e.selectionEnd
    }, e.fn.setSelection = function(e, t) {
        typeof t == "number" && (t = [t, t]);
        if (t && t.constructor == Array && t.length == 2)
            if (e.type === "number")
                e.focus();
            else if (e.createTextRange) {
                var n = e.createTextRange();
                n.collapse(!0), n.moveStart("character", t[0]), n.moveEnd("character", t[1]), n.select()
            } else
                e.setSelectionRange && (e.focus(), e.setSelectionRange(t[0], t[1]))
    }
}(jQuery), $.Quantity = {init: function() {
        var e = $(".quantity-input input");
        e.numeric({negative: !1}), e.keyup(function() {
            var e = $(this), t = parseInt(e.attr("data-quantity-available"));
            e.val() > t && (e.val(t), e.trigger("change"), e.parents(".quantity-input").find(".quantity--input--error").show())
        }), e.focusout(function() {
            $(this).parents(".quantity-input").find(".quantity--input--error").fadeOut(500)
        })
    }}, $.Quantity.init(), function(e, t) {
    function i(t, n) {
        var r, i, o, u = t.nodeName.toLowerCase();
        return "area" === u ? (r = t.parentNode, i = r.name, !t.href || !i || r.nodeName.toLowerCase() !== "map" ? !1 : (o = e("img[usemap=#" + i + "]")[0], !!o && s(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && s(t)
    }
    function s(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return e.css(this, "visibility") === "hidden"
        }).length
    }
    var n = 0, r = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, {version: "1.10.3",keyCode: {BACKSPACE: 8,COMMA: 188,DELETE: 46,DOWN: 40,END: 35,ENTER: 13,ESCAPE: 27,HOME: 36,LEFT: 37,NUMPAD_ADD: 107,NUMPAD_DECIMAL: 110,NUMPAD_DIVIDE: 111,NUMPAD_ENTER: 108,NUMPAD_MULTIPLY: 106,NUMPAD_SUBTRACT: 109,PAGE_DOWN: 34,PAGE_UP: 33,PERIOD: 190,RIGHT: 39,SPACE: 32,TAB: 9,UP: 38}}), e.fn.extend({focus: function(t) {
            return function(n, r) {
                return typeof n == "number" ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), r && r.call(t)
                    }, n)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),scrollParent: function() {
            var t;
            return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : t = this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(
            document) : t
        },zIndex: function(n) {
            if (n !== t)
                return this.css("zIndex", n);
            if (this.length) {
                var r = e(this[0]), i, s;
                while (r.length && r[0] !== document) {
                    i = r.css("position");
                    if (i === "absolute" || i === "relative" || i === "fixed") {
                        s = parseInt(r.css("zIndex"), 10);
                        if (!isNaN(s) && s !== 0)
                            return s
                    }
                    r = r.parent()
                }
            }
            return 0
        },uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++n)
            })
        },removeUniqueId: function() {
            return this.each(function() {
                r.test(this.id) && e(this).removeAttr("id")
            })
        }}), e.extend(e.expr[":"], {data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(n) {
                return !!e.data(n, t)
            }
        }) : function(t, n, r) {
            return !!e.data(t, r[3])
        },focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },tabbable: function(t) {
            var n = e.attr(t, "tabindex"), r = isNaN(n);
            return (r || n >= 0) && i(t, !r)
        }}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, r) {
        function u(t, n, r, s) {
            return e.each(i, function() {
                n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), n
        }
        var i = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], s = r.toLowerCase(), o = {innerWidth: e.fn.innerWidth,innerHeight: e.fn.innerHeight,outerWidth: e.fn.outerWidth,outerHeight: e.fn.outerHeight};
        e.fn["inner" + r] = function(n) {
            return n === t ? o["inner" + r].call(this) : this.each(function() {
                e(this).css(s, u(this, n) + "px")
            })
        }, e.fn["outer" + r] = function(t, n) {
            return typeof t != "number" ? o["outer" + r].call(this, t) : this.each(function() {
                e(this).css(s, u(this, t, !0, n) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(n) {
            return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }}), e.extend(e.ui, {plugin: {add: function(t, n, r) {
                var i, s = e.ui[t].prototype;
                for (i in r)
                    s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]])
            },call: function(e, t, n) {
                var r, i = e.plugins[t];
                if (!i || !e.element[0].parentNode || e.element[0].parentNode.nodeType === 11)
                    return;
                for (r = 0; r < i.length; r++)
                    e.options[i[r][0]] && i[r][1].apply(e.element, n)
            }},hasScroll: function(t, n) {
            if (e(t).css("overflow") === "hidden")
                return !1;
            var r = n && n === "left" ? "scrollLeft" : "scrollTop", i = !1;
            return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i)
        }})
}(jQuery), function(e, t) {
    var n = 0, r = Array.prototype.slice, i = e.cleanData;
    e.cleanData = function(t) {
        for (var n = 0, r; (r = t[n]) != null; n++)
            try {
                e(r).triggerHandler("remove")
            } catch (s) {
            }
        i(t)
    }, e.widget = function(t, n, r) {
        var i, s, o, u, a = {}, f = t.split(".")[0];
        t = t.split(".")[1], i = f + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][i.toLowerCase()] = function(t) {
            return !!e.data(t, i)
        }, e[f] = e[f] || {}, s = e[f][t], o = e[f][t] = function(e, t) {
            if (!this._createWidget)
                return new o(e, t);
            arguments.length && this._createWidget(e, t)
        }, e.extend(o, s, {version: r.version,_proto: e.extend({}, r),_childConstructors: []}), u = new n, u.options = e.widget.extend({}, u.options), e.each(r, function(t, r) {
            if (!e.isFunction(r)) {
                a[t] = r;
                return
            }
            a[t] = function() {
                var e = function() {
                    return n.prototype[t].apply(this, arguments)
                }, i = function(e) {
                    return n.prototype[t].apply(this, e)
                };
                return function() {
                    var t = this._super, n = this._superApply, s;
                    return this._super = e, this._superApply = i, s = r.apply(this, arguments), this._super = t, this._superApply = n, s
                }
            }()
        }), o.prototype = e.widget.extend(u, {widgetEventPrefix: s ? u.widgetEventPrefix : t}, a, {constructor: o,namespace: f,widgetName: t,widgetFullName: i}), s ? (e.each(s._childConstructors, function(t, n) {
            var r = n.prototype;
            e.widget(r.namespace + "." + r.widgetName, o, n._proto)
        }), delete s._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o)
    }, e.widget.extend = function(n) {
        var i = r.call(arguments, 1), s = 0, o = i.length, u, a;
        for (; s < o; s++)
            for (u in i[s])
                a = i[s][u], i[s].hasOwnProperty(u) && a !== t && (e.isPlainObject(a) ? n[u] = e.isPlainObject(n[u]) ? e.widget.extend({}, n[u], a) : e.widget.extend({}, a) : n[u] = a);
        return n
    }, e.widget.bridge = function(n, i) {
        var s = i.prototype.widgetFullName || n;
        e.fn[n] = function(o) {
            var u = typeof o == "string", a = r.call(arguments, 1), f = this;
            return o = !u && a.length ? e.widget.extend.apply(null, [o].concat(a)) : o, u ? this.each(function() {
                var r, i = e.data(this, s);
                if (!i)
                    return e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + o + "'");
                if (!e.isFunction(i[o]) || o.charAt(0) === "_")
                    return e.error("no such method '" + o + "' for " + n + " widget instance");
                r = i[o].apply(i, a);
                if (r !== i && r !== t)
                    return f = r && r.jquery ? f.pushStack(r.get()) : r, !1
            }) : this.each(function() {
                var t = e.data(this, s);
                t ? t.option(o || {})._init() : e.data(this, s, new i(o, this))
            }), f
        }
    }, e.Widget = function() {
    }, e.Widget._childConstructors = [], e.Widget.prototype = {widgetName: "widget",widgetEventPrefix: "",defaultElement: "<div>",options: {disabled: !1,create: null},_createWidget: function(t, r) {
            r = e(r || this.defaultElement || this)[0], this.element = e(r), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), r !== this && (e.data(r, this.widgetFullName, this), this._on(!0, this.element, {remove: function(e) {
                    e.target === r && this.destroy()
                }}), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },_getCreateOptions: e.noop,_getCreateEventData: e.noop,_create: e.noop,_init: e.noop,destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },_destroy: e.noop,widget: function() {
            return this.element
        },option: function(n, r) {
            var i = n, s, o, u;
            if (arguments.length === 0)
                return e.widget.extend({}, this.options);
            if (typeof n == "string") {
                i = {}, s = n.split("."), n = s.shift();
                if (s.length) {
                    o = i[n] = e.widget.extend({}, this.options[n]);
                    for (u = 0; u < s.length - 1; u++)
                        o[s[u]] = o[s[u]] || {}, o = o[s[u]];
                    n = s.pop();
                    if (r === t)
                        return o[n] === t ? null : o[n];
                    o[n] = r
                } else {
                    if (r === t)
                        return this.options[n] === t ? null : this.options[n];
                    i[n] = r
                }
            }
            return this._setOptions(i), this
        },_setOptions: function(e) {
            var t;
            for (t in e)
                this._setOption(t, e[t]);
            return this
        },_setOption: function(e, t) {
            return this.options[e] = t, e === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },enable: function() {
            return this._setOption("disabled", !1)
        },disable: function() {
            return this._setOption("disabled", !0)
        },_on: function(t, n, r) {
            var i, s = this;
            typeof t != "boolean" && (r = n, n = t, t = !1), r ? (n = i = e(n), this.bindings = this.bindings.add(n)) : (r = n, n = this.element, i = this.widget()), e.each(r, function(r, o) {
                function u() {
                    if (!t && (s.options.disabled === !0 || e(this).hasClass("ui-state-disabled")))
                        return;
                    return (typeof o == "string" ? s[o] : o).apply(s, arguments)
                }
                typeof o != "string" && (u.guid = o.guid = o.guid || u.guid || e.guid++);
                var a = r.match(/^(\w+)\s*(.*)$/), f = a[1] + s.eventNamespace, l = a[2];
                l ? i.delegate(l, f, u) : n.bind(f, u)
            })
        },_off: function(e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },_delay: function(e, t) {
            function n() {
                return (typeof e == "string" ? r[e] : e).apply(r, arguments)
            }
            var r = this;
            return setTimeout(n, t || 0)
        },_hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }})
        },_focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }})
        },_trigger: function(t, n, r) {
            var i, s, o = this.options[t];
            r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent;
            if (s)
                for (i in s)
                    i in n || (n[i] = s[i]);
            return this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === !1 || n.isDefaultPrevented())
        }}, e.each({show: "fadeIn",hide: "fadeOut"}, function(t, n) {
        e.Widget.prototype["_" + t] = function(r, i, s) {
            typeof i == "string" && (i = {effect: i});
            var o, u = i ? i === !0 || typeof i == "number" ? n : i.effect || n : t;
            i = i || {}, typeof i == "number" && (i = {duration: i}), o = !e.isEmptyObject(i), i.complete = s, i.delay && r.delay(i.delay), o && e.effects && e.effects.effect[u] ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function(n) {
                e(this)[t](), s && s.call(r[0]), n()
            })
        }
    })
}(jQuery), function(e, t) {
    var n = !1;
    e(document).mouseup(function() {
        n = !1
    }), e.widget("ui.mouse", {version: "1.10.3",options: {cancel: "input,textarea,button,select,option",distance: 1,delay: 0},_mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(n) {
                if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent"))
                    return e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1
            }), this.started = !1
        },_mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },_mouseDown: function(t) {
            if (n)
                return;
            this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
            var r = this, i = t.which === 1, s = typeof this.options.cancel == "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
            if (!i || s || !this._mouseCapture(t))
                return !0;
            this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                r.mouseDelayMet = !0
            }, this.options.delay));
            if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
                this._mouseStarted = this._mouseStart(t) !== !1;
                if (!this._mouseStarted)
                    return t.preventDefault(), !0
            }
            return !0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                return r._mouseMove(e)
            }, this._mouseUpDelegate = function(e) {
                return r._mouseUp(e)
            }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0, !0
        },_mouseMove: function(t) {
            return e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },_mouseUp: function(t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },_mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },_mouseDelayMet: function() {
            return this.mouseDelayMet
        },_mouseStart: function() {
        },_mouseDrag: function() {
        },_mouseStop: function() {
        },_mouseCapture: function() {
            return !0
        }})
}(jQuery), function(e, t) {
    var n = 5;
    e.widget("ui.slider", e.ui.mouse, {version: "1.10.3",widgetEventPrefix: "slide",options: {animate: !1,distance: 0,max: 100,min: 0,orientation: "horizontal",range: !1,step: 1,value: 0,values: null,change: null,slide: null,start: null,stop: null},_create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },_refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },_createHandles: function() {
            var t, n, r = this.options, i = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), s = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", o = [];
            n = r.values && r.values.length || 1, i.length > n && (i.slice(n).remove(), i = i.slice(0, n));
            for (t = i.length; t < n; t++)
                o.push(s);
            this.handles = i.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(t) {
                e(this).data("ui-slider-handle-index", t)
            })
        },_createRange: function() {
            var t = this.options, n = "";
            t.range ? (t.range === !0 && (t.values ? t.values.length && t.values.length !== 2 ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), !this.range || !this.range.length ? (this.range = e("<div></div>").appendTo(this.element), n = "ui-slider-range ui-widget-header ui-corner-all") : this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left: "",bottom: ""}), this.range.addClass(n + (t.range === "min" || t.range === "max" ? " ui-slider-range-" + t.range : ""))) : this.range = e([])
        },_setupEvents: function() {
            var e = this.handles.add(this.range).filter("a");
            this._off(e), this._on(e, this._handleEvents), this._hoverable(e), this._focusable(e)
        },_destroy: function() {
            this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },_mouseCapture: function(t) {
            var n, r, i, s, o, u, a, f, l = this, c = this.options;
            return c.disabled ? !1 : (this.elementSize = {width: this.element.outerWidth(),height: this.element.outerHeight()}, this.elementOffset = this.element.offset(), n = {x: t.pageX,y: t.pageY}, r = this._normValueFromMouse(n), i = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                var n = Math.abs(r - l.values(t));
                if (i > n || i === n && (t === l._lastChangedValue || l.values(t) === c.min))
                    i = n, s = e(this), o = t
            }), u = this._start(t, o), u === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, s.addClass("ui-state-active").focus(), a = s.offset(), f = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = f ? {left: 0,top: 0} : {left: t.pageX - a.left - s.width() / 2,top: t.pageY - a.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)}, this.handles.hasClass("ui-state-hover") || this._slide(t, o, r), this._animateOff = !0, !0))
        },_mouseStart: function() {
            return !0
        },_mouseDrag: function(e) {
            var t = {x: e.pageX,y: e.pageY}, n = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, n), !1
        },_mouseStop: function(e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },_detectOrientation: function() {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
        },_normValueFromMouse: function(e) {
            var t, n, r, i, s;
            return this.orientation === "horizontal" ? (t = this.elementSize.width, n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), r = n / t, r > 1 && (r = 1), r < 0 && (r = 0), this.orientation === "vertical" && (r = 1 - r), i = this._valueMax() - this._valueMin(), s = this._valueMin() + r * i, this._trimAlignValue(s)
        },_start: function(e, t) {
            var n = {handle: this.handles[t],value: this.value()};
            return this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("start", e, n)
        },_slide: function(e, t, n) {
            var r, i, s;
            this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (t === 0 && n > r || t === 1 && n < r) && (n = r), n !== this.values(t) && (i = this.values(), i[t] = n, s = this._trigger("slide", e, {handle: this.handles[t],value: n,values: i}), r = this.values(t ? 0 : 1), s !== !1 && this.values(t, n, !0))) : n !== this.value() && (s = this._trigger("slide", e, {handle: this.handles[t],value: n}), s !== !1 && this.value(n))
        },_stop: function(e, t) {
            var n = {handle: this.handles[t],value: this.value()};
            this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("stop", e, n)
        },_change: function(e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var n = {handle: this.handles[t],value: this.value()};
                this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, n)
            }
        },value: function(e) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0);
                return
            }
            return this._value()
        },values: function(t, n) {
            var r, i, s;
            if (arguments.length > 1) {
                this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), this._change(null, t);
                return
            }
            if (!arguments.length)
                return this._values();
            if (!e.isArray(arguments[0]))
                return this.options.values && this.options.values.length ? this._values(t) : this.value();
            r = this.options.values, i = arguments[0];
            for (s = 0; s < r.length; s += 1)
                r[s] = this._trimAlignValue(i[s]), this._change(null, s);
            this._refreshValue()
        },_setOption: function(t, n) {
            var r, i = 0;
            t === "range" && this.options.range === !0 && (n === "min" ? (this.options.value = this._values(0), this.options.values = null) : n === "max" && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (i = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments);
            switch (t) {
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    this._animateOff = !0, this._refreshValue();
                    for (r = 0; r < i; r += 1)
                        this._change(null, r);
                    this._animateOff = !1;
                    break;
                case "min":
                case "max":
                    this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },_value: function() {
            var e = this.options.value;
            return e = this._trimAlignValue(e), e
        },_values: function(e) {
            var t, n, r;
            if (arguments.length)
                return t = this.options.values[e], t = this._trimAlignValue(t), t;
            if (this.options.values && this.options.values.length) {
                n = this.options.values.slice();
                for (r = 0; r < n.length; r += 1)
                    n[r] = this._trimAlignValue(n[r]);
                return n
            }
            return []
        },_trimAlignValue: function(e) {
            if (e <= this._valueMin())
                return this._valueMin();
            if (e >= this._valueMax())
                return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1, n = (e - this._valueMin()) % t, r = e - n;
            return Math.abs(n) * 2 >= t && (r += n > 0 ? t : -t), parseFloat(r.toFixed(5))
        },_valueMin: function() {
            return this.options.min
        },_valueMax: function() {
            return this.options.max
        },_refreshValue: function() {
            var t, n, r, i, s, o = this.options.range, u = this.options, a = this, f = this._animateOff ? !1 : u.animate, l = {};
            this.options.values && this.options.values.length ? this.handles.each(function(r) {
                n = (a.values(r) - a._valueMin()) / (a._valueMax() - a._valueMin()) * 100, l[a.orientation === "horizontal" ? "left" : "bottom"] = n + "%", e(this).stop(1, 1)[f ? "animate" : "css"](l, u.animate), a.options.range === !0 && (a.orientation === "horizontal" ? (r === 0 && a.range.stop(1, 1)[f ? "animate" : "css"]({left: n + "%"}, u.animate), r === 1 && a.range[f ? "animate" : "css"]({width: n - t + "%"}, {queue: !1,duration: u.animate})) : (r === 0 && a.range.stop(1, 1)[f ? "animate" : "css"]({bottom: n + "%"}, u.animate), r === 1 && a.range[f ? "animate" : "css"]({height: n - t + "%"}, {queue: !1,duration: u.animate}))), t = n
            }) : (r = this.value(), i = this._valueMin(), s = this._valueMax(), n = s !== i ? (r - i) / (s - i) * 100 : 0, l[this.orientation === "horizontal" ? "left" : "bottom"] = n + "%", this.handle.stop(1, 1)[f ? "animate" : "css"](l, u.animate), o === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[f ? "animate" : "css"]({width: n + "%"}, u.animate), o === "max" && this.orientation === "horizontal" && this.range[f ? "animate" : "css"]({width: 100 - n + "%"}, {queue: !1,duration: u.animate}), o === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[f ? "animate" : "css"]({height: n + "%"}, u.animate), o === "max" && this.orientation === "vertical" && this.range[f ? "animate" : "css"]({height: 100 - n + "%"}, {queue: !1,duration: u.animate}))
        },_handleEvents: {keydown: function(t) {
                var r, i, s, o, u = e(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_UP:
                    case e.ui.keyCode.PAGE_DOWN:
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        t.preventDefault();
                        if (!this._keySliding) {
                            this._keySliding = !0, e(t.target).addClass("ui-state-active"), r = this._start(t, u);
                            if (r === !1)
                                return
                        }
                }
                o = this.options.step, this.options.values && this.options.values.length ? i = s = this.values(u) : i = s = this.value();
                switch (t.keyCode) {
                    case e.ui.keyCode.HOME:
                        s = this._valueMin();
                        break;
                    case e.ui.keyCode.END:
                        s = this._valueMax();
                        break;
                    case e.ui.keyCode.PAGE_UP:
                        s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / n);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / n);
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                        if (i === this._valueMax())
                            return;
                        s = this._trimAlignValue(i + o);
                        break;
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (i === this._valueMin())
                            return;
                        s = this._trimAlignValue(i - o)
                }
                this._slide(t, u, s)
            },click: function(e) {
                e.preventDefault()
            },keyup: function(t) {
                var n = e(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, n), this._change(t, n), e(t.target).removeClass("ui-state-active"))
            }}})
}(jQuery), !function(e) {
    function t(e, t) {
        if (!(e.originalEvent.touches.length > 1)) {
            e.preventDefault();
            var n = e.originalEvent.changedTouches[0], r = document.createEvent("MouseEvents");
            r.initMouseEvent(t, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(r)
        }
    }
    if (e.support.touch = "ontouchend" in document, e.support.touch) {
        var n, r = e.ui.mouse.prototype, i = r._mouseInit, s = r._mouseDestroy;
        r._touchStart = function(e) {
            var r = this;
            !n && r._mouseCapture(e.originalEvent.changedTouches[0]) && (n = !0, r._touchMoved = !1, t(e, "mouseover"), t(e, "mousemove"), t(e, "mousedown"))
        }, r._touchMove = function(e) {
            n && (this._touchMoved = !0, t(e, "mousemove"))
        }, r._touchEnd = function(e) {
            n && (t(e, "mouseup"), t(e, "mouseout"), this._touchMoved || t(e, "click"), n = !1)
        }, r._mouseInit = function() {
            var t = this;
            t.element.bind({touchstart: e.proxy(t, "_touchStart"),touchmove: e.proxy(t, "_touchMove"),touchend: e.proxy(t, "_touchEnd")}), i.call(t)
        }, r._mouseDestroy = function() {
            var t = this;
            t.element.unbind({touchstart: e.proxy(t, "_touchStart"),touchmove: e.proxy(t, "_touchMove"),touchend: e.proxy(t, "_touchEnd")}), s.call(t)
        }
    }
}(jQuery);
