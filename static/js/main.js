var s, app = {
    settings: {
        jpm: {}
    },
    init: function() {
        s = this.settings, this.initalizers(), this.bindUiActions()
    },
    bindUiActions: function() {
        var t = this;
        $(".select-posts,.select-categories").on("click", function() {
            t.homePostsCatSwitch()
        }), $(".social-icon").on("click", function() {
            t.socialIconClick($(this))
        })
    },
    initalizers: function() {
        // this.jpm(), FastClick.attach(document.body), $("body").css({
        //     "background-color": "#333337"
        // })
    },
    homePostsCatSwitch: function() {
        $(".home-page-posts").toggleClass("hide"), $(".home-page-categories").toggleClass("hide"), $(".select-posts").toggleClass("active"), $(".select-categories").toggleClass("active"), $(".home-footer").toggleClass("hide")
    },
    socialIconClick: function(t) {
        var e = t.data("platform"),
            i = t.data("message"),
            o = t.data("url");
        return "mail" == e ? !0 : (this.popItUp(e, i, o), !1)
    },
    popItUp: function(t, e, i) {
        var o, s;
        return "twitter" == t ? o = "http://twitter.com/home?status=" + encodeURI(e) + "+" + i : "facebook" == t && (o = "http://www.facebook.com/share.php?u" + i + "&title=" + encodeURI(e)), s = window.open(o, "name", "height=500,width=600"), window.focus && s.focus(), !1
    },
    jpm: function() {
        s.jpm = $.jPanelMenu({
            menu: "#menu-target",
            trigger: ".menu-trigger",
            animated: !1,
            beforeOpen: function() {
                matchMedia("only screen and (min-width: 992px)").matches && $(".sidebar").css("left", "250px")
            },
            beforeClose: function() {
                $(".sidebar").css("left", "0"), $(".writer-icon, .side-writer-icon").removeClass("fadeOutUp")
            }
        }), s.jpm.on()
    }
};
$(document).ready(function() {
    hljs.initHighlightingOnLoad();
    app.init()
    particlesJS("sidebar", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#7679ec","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
});