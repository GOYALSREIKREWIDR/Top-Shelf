var windowWidth = $(window).width();
windowWidth <= 470 &&
    $(".has-sub-nav > a").click(function (e) {
        e.preventDefault(), $(this).parent().find(".nav__sub").slideToggle();
    });
var windowWidth = $(window).width();
windowWidth <= 470 &&
    $(".has-megamenu > a").click(function (e) {
        e.preventDefault(), $(this).parent().find(".nav__sub").slideToggle();
    });
var windowWidth = $(window).width();
windowWidth <= 470 &&
    $(".nav__item_mobile > a").click(function (e) {
        e.preventDefault(), $(this).parent().find(".nav__sub-item_mobile").slideToggle();
    }),
    $(document).on("click", ".quick-buy__dropdown-item-content h6", function () {
        var imgSrc = $(this).siblings("img").attr("src");
        $("body").addClass("popup-open"), $(".popup__img img").attr("src", imgSrc), $(".popup").fadeIn();
    }),
    $(".popup__close , .overlay").on("click", function () {
        $(".popup").fadeOut(), $("body").removeClass("popup-open");
    });
function initCollectionTabs() {
    const tabButtons2 = document.querySelectorAll(".collection__tabs-btn"),
        collectionItems = document.querySelectorAll(".collection__items");
    function activateTab(type) {
        tabButtons2.forEach((btn) => {
            btn.classList.remove("active");
        });
        const targetItem = document.querySelector(`.collection__items[data-type="${type}"]`);
        targetItem && (targetItem.style.display = "flex");
        const targetTab = document.querySelector(`.collection__tabs-btn[data-type="${type}"]`);
        targetTab && targetTab.classList.add("active");
    }
    const defaultType = tabButtons2[0]?.getAttribute("data-type");
    defaultType && activateTab(defaultType),
        tabButtons2.forEach((btn) => {
            btn.addEventListener("click", function () {
                const type = this.getAttribute("data-type");
                activateTab(type);
            });
        });
}
initCollectionTabs(),
    $(".collection__item-btn a").on("click", function () {
        $("body").addClass("quick-buy-popup-open");
    }),
    $(".quick-buy__close , .overlay").on("click", function () {
        $("body").removeClass("quick-buy-popup-open");
    }),
    $(".quick-buy__dropdown-item").on("click", function () {
        const $this = $(this);
        $this.hasClass("active")
            ? ($this.removeClass("active"), $this.find(".quick-buy__dropdown-item-content").stop(!0, !0).slideUp(300))
            : ($(".quick-buy__dropdown-item").removeClass("active"),
              $(".quick-buy__dropdown-item-content").stop(!0, !0).slideUp(300),
              $this.addClass("active"),
              $this.find(".quick-buy__dropdown-item-content").stop(!0, !0).slideDown(300));
    }),
    $(".marquee__items").slick({
        infinite: !0,
        autoplay: !0,
        autoplaySpeed: 0,
        speed: 5e3,
        cssEase: "linear",
        variableWidth: !0,
        arrows: !1,
        pauseOnHover: !1,
    }),
    $(".best-seller__tab-item").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: !1,
        responsive: [{ breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }],
    }),
    $(".best-seller__left-arrow").click(function () {
        $(this).parent().parent().find(".slick-slider").slick("slickPrev");
    }),
    $(".best-seller__right-arrow").click(function () {
        $(this).parent().parent().find(".slick-slider").slick("slickNext");
    });
const tabButtons = document.querySelectorAll(".best-seller__tab-button"),
    tabItems = document.querySelectorAll(".best-seller__tab-item");
if (
    (tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const tabKey = button.getAttribute("data-tab");
            tabButtons.forEach((btn) => btn.classList.remove("active")),
                button.classList.add("active"),
                tabItems.forEach((item) => {
                    item.getAttribute("data-tab") === tabKey
                        ? item.classList.add("active")
                        : item.classList.remove("active");
                });
        });
    }),
    tabButtons.length > 0)
) {
    tabButtons[0].classList.add("active");
    const defaultTab = tabButtons[0].getAttribute("data-tab");
    document.querySelector(`.best-seller__tab-item[data-tab="${defaultTab}"]`)?.classList.add("active");
}
$(".text-marquee__items").slick({
    infinite: !0,
    autoplay: !0,
    autoplaySpeed: 0,
    speed: 5e3,
    cssEase: "linear",
    variableWidth: !0,
    arrows: !1,
    pauseOnHover: !1,
}),
    document.querySelectorAll(".benefits__item a").forEach((item) => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const type = this.closest(".benefits__item").getAttribute("data-type");
            document.querySelectorAll(".benefits__popup").forEach((popup) => {
                popup.classList.remove("popup-show");
            });
            const matchedPopup = document.querySelector(`.benefits__popup[data-type="${type}"]`);
            matchedPopup &&
                (matchedPopup.classList.add("popup-show"), document.body.classList.add("benefits__popup-show"));
        });
    }),
    document.querySelectorAll(".benefits__popup .benefits__close, .overlay").forEach((btn) => {
        btn.addEventListener("click", function () {
            document.querySelectorAll(".benefits__popup").forEach((popup) => {
                popup.classList.remove("popup-show");
            }),
                document.body.classList.remove("benefits__popup-show");
        });
    }),
    $(".benefits__popup-source-close").on("click", function (e) {
        e.stopPropagation(), $(this).closest(".benefits__popup-source").removeClass("benefits__popup-source-show");
    }),
    $(".reviews__items").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: !1,
        responsive: [{ breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }],
    }),
    $(".reviews__left-arrow").click(function () {
        $(this).parent().parent().find(".slick-slider").slick("slickPrev");
    }),
    $(".reviews__right-arrow").click(function () {
        $(this).parent().parent().find(".slick-slider").slick("slickNext");
    }),
    $(".gallery__items").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: !1,
        responsive: [{ breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }],
    }),
    $(".gallery__left-arrow").click(function () {
        $(this).parent().parent().find(".slick-slider").slick("slickPrev");
    }),
    $(".gallery__right-arrow").click(function () {
        $(this).parent().parent().find(".slick-slider").slick("slickNext");
    });
const vettedItemsContainer = document.querySelector(".vetted__items"),
    vettedItems = document.querySelectorAll(".vetted__item"),
    leftArrow = document.querySelector(".vetted__left-arrow"),
    rightArrow = document.querySelector(".vetted__right-arrow");
leftArrow.addEventListener("click", function () {
    rotateItems("left");
}),
    rightArrow.addEventListener("click", function () {
        rotateItems("right");
    });
function rotateItems(direction) {
    vettedItemsContainer.classList.add(`moving-${direction}`),
        vettedItems.forEach((item) => {
            const startPosition = parseInt(item.dataset.index);
            let endPosition = direction === "right" ? startPosition + 1 : startPosition - 1;
            endPosition > 3 && (endPosition = 1),
                endPosition < 1 && (endPosition = 3),
                (item.dataset.index = endPosition),
                (item.style.zIndex = endPosition.toString()),
                item.querySelector(".vetted__item-img").classList.remove("flipped"),
                item.classList.remove("active");
        }),
        vettedItemsContainer.addEventListener(
            "transitionend",
            function () {
                vettedItemsContainer.classList.remove(`moving-${direction}`);
            },
            { once: !0 }
        );
}
document.querySelectorAll(".vetted__item").forEach((item) => {
    item.addEventListener("click", function () {
        item.querySelector(".vetted__item-img").classList.toggle("flipped")
            ? item.classList.add("active")
            : item.classList.remove("active");
    });
}),
    $(".carousel__items").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: !1,
        responsive: [{ breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }],
    }),
    $(".carousel__left-arrow").click(function () {
        $(this).parent().parent().find(".slick-slider").slick("slickPrev");
    }),
    $(".carousel__right-arrow").click(function () {
        $(this).parent().parent().find(".slick-slider").slick("slickNext");
    }),
    $(".faq-home__title").click(function () {
        $(this).hasClass("active")
            ? ($(this).removeClass("active"), $(this).next(".faq-home__content").slideUp())
            : ($(".faq-home__content").slideUp(),
              $(".faq-home__title").removeClass("active"),
              $(this).addClass("active"),
              $(this).next(".faq-home__content").slideDown());
    }),
    $(Window).width() < 768 &&
        $(function () {
            const $dropdown = $(".best-seller__tab-dropdown"),
                $selected = $dropdown.find(".best-seller__tab-dropdown-selected"),
                $options = $dropdown.find(".best-seller__tab-button");
            $selected.on("click", function () {
                $dropdown.find(".best-seller__tab-buttons").toggle();
            }),
                $options.on("click", function () {
                    let value = $(this).data("tab"),
                        text = $(this).text();
                    $selected.text(text),
                        $options.removeClass("active"),
                        $(this).addClass("active"),
                        $dropdown.find(".best-seller__tab-buttons").hide();
                }),
                $(document).on("click", function (e) {
                    $(e.target).closest(".best-seller__tab-dropdown").length ||
                        $dropdown.find(".best-seller__tab-buttons").hide();
                });
        }),
    $(".download-handbook__mobi-btn , .download-handbook__btn").on("click", function () {
        $("body").addClass("download-handbook-popup-open");
    }),
    $(".download-handbook__popup-close , .overlay").on("click", function () {
        $("body").removeClass("download-handbook-popup-open");
    }),
    $(".knowledge-faq__item-content-item-title").on("click", function () {
        $(".knowledge-faq__item-content-item-title").not(this).removeClass("active").next().slideUp(),
            $(this).toggleClass("active"),
            $(this).next().slideToggle();
    }),
    $(".testimonial__tab-review-item").each(function () {
        $(this).find(".testimonial__tab-reivew-img").length === 0 &&
            $(this).addClass("testimonial__tab-review-item_no-midel");
    }),
    $(window).width() < 768 &&
        ($(".testimonial__tab-top-content").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
            dots: !0,
            adaptiveHeight: !0,
            infinite: !0,
        }),
        $(".testimonial__tab-midel-content, .testimonial__tab-bottom-items").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
            dots: !0,
            adaptiveHeight: !0,
            infinite: !0,
        }),
        $(".testimonial__tab-review-items").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !1,
            dots: !0,
            infinite: !0,
        }));
var self = this;
$(document)
    .off("click.testimonialArrow")
    .on("click.testimonialArrow", ".testimonial__tab-left-arrow", function () {
        $(this).parent().parent().find(".slick-initialized").slick("slickPrev");
    })
    .on("click.testimonialArrow", ".testimonial__tab-right-arrow", function () {
        $(this).parent().parent().find(".slick-initialized").slick("slickNext");
    }),
    $(document)
        .off("click.testimonialDropdown")
        .on("click.testimonialDropdown", ".testimonial__tab-dropdown-title", function (e) {
            e.stopPropagation();
            var $parent = $(this).closest(".testimonial__tab-dropdown-item");
            $(".testimonial__tab-dropdown-title").not(this).removeClass("active"),
                $(".testimonial__dropdown-tab-items")
                    .not($parent.find(".testimonial__dropdown-tab-items"))
                    .removeClass("active"),
                $(this).toggleClass("active"),
                $parent.find(".testimonial__dropdown-tab-items").toggleClass("active"),
                setTimeout(self.fixLayout, 100);
        }),
    $(document)
        .off("click.testimonialDropdownContent")
        .on("click.testimonialDropdownContent", ".testimonial__dropdown-tab-items", function (e) {
            e.stopPropagation();
        }),
    $(document)
        .off("click.testimonialDropdownClose")
        .on("click.testimonialDropdownClose", function () {
            $(".testimonial__tab-dropdown-title").removeClass("active"),
                $(".testimonial__dropdown-tab-items").removeClass("active"),
                setTimeout(self.fixLayout, 100);
        }),
    $(document)
        .off("click.testimonialTab")
        .on("click.testimonialTab", ".testimonial__tab-btn", function (e) {
            e.preventDefault();
            var tabName = $(this).data("tab");
            $(".testimonial__tab-btn").removeClass("active"),
                $(this).addClass("active"),
                $(".testimonial__tab-item")
                    .removeClass("active")
                    .filter('[data-content="' + tabName + '"]')
                    .addClass("active"),
                setTimeout(self.fixLayout, 100);
        });
//# sourceMappingURL=/cdn/shop/t/57/assets/main.js.map?v=21745579144541953961768995460
