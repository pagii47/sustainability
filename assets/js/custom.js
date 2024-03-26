/* 
// <!--smooth Scroll FOR Promotion detail banner-->
function scrollNav() {
	$(".down-arrow-icon").click(function () {
		//Animate
		$("html, body")
			.stop()
			.animate(
				{
					scrollTop: $($(this).attr("href")).offset().top - 38,
				},
				400
			);
		return false;
	});
	$(".scrollTop a").scrollTop();
}
scrollNav();
// <!--close smooth Scroll--> 
*/

// <!-- //FUNCTION TO GET YOUTUBE POPUP VIDEO FROM MODALBOX -->
autoPlayYouTubeModal();
function autoPlayYouTubeModal() {
	var trigger = $("body").find('[data-toggle="modal"]');
	trigger.click(function () {
		var theModal = $(this).data("target"),
			videoSRC = $(this).attr("data-theVideo"),
			videoSRCauto = videoSRC + "?autoplay=1";
		$(theModal + " iframe").attr("src", videoSRCauto);
		$(theModal + " button.close").click(function () {
			$(theModal + " iframe").attr("src", videoSRC);
		});
	});
}


$("#carousel-col-7").on("slide.bs.carousel", function (t) {
	var carousel_length = $('#carousel-col-7 .carousel-item').length;
	if (t.to == carousel_length - 1) {
		// 2 should be replaced by the (total length of carousel slides -1)$('.item').length

		$("#carousel-col-7 .carousel-control-prev").removeClass("invisible");
		$("#carousel-col-7 .carousel-control-next").addClass("invisible");
	}
	else if (t.to == 0) {
		// 2 should be replaced by the (total length of carousel slides -1)
		$("#carousel-col-7 .carousel-control-prev").addClass("invisible");
		$("#carousel-col-7 .carousel-control-next").removeClass("invisible");
	}
	else {
		// 2 should be replaced by the (total length of carousel slides -1)
		$("#carousel-col-7 .carousel-control-next").removeClass("invisible");
		$("#carousel-col-7 .carousel-control-prev").removeClass("invisible");
	}
});

$("#carousel-col-5").on("slide.bs.carousel", function (t) {
	var carousel_length = $('#carousel-col-5 .carousel-item').length;
	if (t.to == carousel_length - 1) {
		// 2 should be replaced by the (total length of carousel slides -1)$('.item').length

		$("#carousel-col-5 .carousel-control-prev").removeClass("invisible");
		$("#carousel-col-5 .carousel-control-next").addClass("invisible");
	}
	else if (t.to == 0) {
		// 2 should be replaced by the (total length of carousel slides -1)
		$("#carousel-col-5 .carousel-control-prev").addClass("invisible");
		$("#carousel-col-5 .carousel-control-next").removeClass("invisible");
	}
	else {
		// 2 should be replaced by the (total length of carousel slides -1)
		$("#carousel-col-5 .carousel-control-next").removeClass("invisible");
		$("#carousel-col-5 .carousel-control-prev").removeClass("invisible");
	}
});

$("#carousel-6-cols").on("slide.bs.carousel", function (t) {
	var carousel_length = $('#carousel-6-cols .carousel-item').length;
	if (t.to == carousel_length - 1) {
		$("#carousel-6-cols .carousel-control-prev").removeClass("invisible");
		$("#carousel-6-cols .carousel-control-next").addClass("invisible");
	}

	else if (t.to == 0) {
		$("#carousel-6-cols .carousel-control-prev").addClass("invisible");
		$("#carousel-6-cols .carousel-control-next").removeClass("invisible");
	}
	else {
		$("#carousel-6-cols .carousel-control-next").removeClass("invisible");
		$("#carousel-6-cols .carousel-control-prev").removeClass("invisible");
	}

})
$("#carousel-4-cols").on("slide.bs.carousel", function (t) {
	var carousel_length = $('#carousel-4-cols .carousel-item').length;
	if (t.to == carousel_length - 1) {
		$("#carousel-4-cols .carousel-control-prev").removeClass("invisible");
		$("#carousel-4-cols .carousel-control-next").addClass("invisible");
	}

	else if (t.to == 0) {
		$("#carousel-4-cols .carousel-control-prev").addClass("invisible");
		$("#carousel-4-cols .carousel-control-next").removeClass("invisible");
	}
	else {
		$("#carousel-4-cols .carousel-control-next").removeClass("invisible");
		$("#carousel-4-cols .carousel-control-prev").removeClass("invisible");
	}

})


function showAllCat() {
	$(".Marketplace-go-digital .row .text-center").show();
	$("#show-more-cat").attr("style", "display: none!important;");
}

// function showAllSol() {
// 	$(".app-listing .container .col-md-4").show();
//   	$("#show-more-solution").attr("style", "display: none!important;");
// }

$(document).ready(function () {

	$(document).on("click", "#copyUrl", function (e) {
		$("body").append('<input id="copyLink" type="text" value="" />');
		$("#copyLink").val(window.location.href).select();
		document.execCommand("copy");
		$("#copyLink").remove();
		$(this).attr("data-original-title", "Copied!");
		$(this).tooltip("dispose").tooltip("show");
	});

	//Fix start BBX-7242 
	$("#carouselExampleIndicators").on("slid.bs.carousel", function (t) {
		var carousel_length = $("#carouselExampleIndicators .carousel-item").length;
		if (t.to == carousel_length - 1) {
			$("#carouselExampleIndicators .carousel-control-prev").removeClass("invisible");
			$("#carouselExampleIndicators .carousel-control-next").addClass("invisible");
		} else if (t.to == 0) {
			$("#carouselExampleIndicators .carousel-control-prev").addClass("invisible");
			$("#carouselExampleIndicators .carousel-control-next").removeClass("invisible");
		} else {
			$("#carouselExampleIndicators .carousel-control-next").removeClass("invisible");
			$("#carouselExampleIndicators .carousel-control-prev").removeClass("invisible");
		}
	});

	$('#data-slide_0, #data-slide_1, #data-slide_2,#data-slide_3,#data-slide_4').hide();
	var noOfCards = $(".campaign-component-insights-card1").children().length / 3;
	var divId = '';
	if (noOfCards > 1) {
		for (let i = 0; i < noOfCards; i++) {
			divId = "#data-slide_" + i;
			if (i < 5)
				$(divId).show();
		}
	}


	$("#carouselExampleIndicators").carousel();

	if ($(window).width() < 768) {
		if ($(".campaign-component-banking-features-card").length > 3) {
			$(".show-more-button span").text(
				$(".campaign-component-banking-features-card").length - 3
			);
			$(".show-more-button").off("click");
			for (
				let i = 3;
				i < $(".campaign-component-banking-features-card").length;
				i++
			) {
				$(".campaign-component-banking-features-card").eq(i).hide();
			}

			$(".show-more-button").on("click", function () {
				for (
					let i = 3;
					i < $(".campaign-component-banking-features-card").length;
					i++
				) {
					$(".campaign-component-banking-features-card").eq(i).show();
				}
				$(this).hide();
			});
		}
	}
	//Fix END BBX-7242 

});


function openShareDialog(url, title, w, h) {
	var left = (screen.width / 2) - (w / 2);
	var top = (screen.height / 2) - (h / 2);
	dialog = window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
	if (window.focus) { dialog.focus() }
}

$(document).ready(function () {
	$(".media-body li").bind("click", function (e) {
		var url = "";
		var share_link = document.location.href;
		var share_title = document.title;
		var w = 700;
		var h = 400;
		/* BBX-11334 START */
		var header1Text = encodeURIComponent($('h1').text());
		var alink = $(this).closest("a").attr("href");
		var atitle = $(this).closest("a").attr("data-title");

		if (alink && alink != "") share_link = alink;
		if (atitle && atitle != "") share_title = atitle;


		if ($(this).hasClass("whatsapp")) {
			url = "whatsapp://send?text=" + share_link;
			if (url != "") openShareDialog(url, header1Text, w, h);
		}
		else if ($(this).hasClass("linkedin")) {
			url = "https://www.linkedin.com/sharing/share-offsite/?url=" + share_link;
			if (url != "") openShareDialog(url, header1Text, w, h);
		} else if ($(this).hasClass("email")) {
			url = "mailto:?";
			url += "subject=" + header1Text;
			url += "&body=" + "Hi, I think you might be interested in this " + share_link;
			window.location.href = url;
		}
		/* BBX-11334 END */
	});
});

$(".dropdown-label").click(function () {
	$(this.parentNode).toggleClass("open");
});

$(".drpdowm").click(function () {
	$(this).toggleClass("open");
});
function checkboxDropdown(el) {
	var $el = $(el);

	function updateStatus(label, result) {
		// if(!result.length) {
		//   label.html('Select Options');
		// }
	}

	$el.each(function (i, element) {
		var $list = $(this).find(".dropdown-list"),
			$label = $(this).find(".dropdown-label"),
			$checkAll = $(this).find(".check-all"),
			$inputs = $(this).find(".check"),
			defaultChecked = $(this).find("input[type=checkbox]:checked"),
			result = [];

		updateStatus($label, result);
		if (defaultChecked.length) {
			defaultChecked.each(function () {
				result.push($(this).next().text());
				$label.html(result.join(", "));
			});
		}

		$label.on("click", () => {
			$(this).toggleClass("open");
		});

		$checkAll.on("change", function () {
			var checked = $(this).is(":checked");
			var checkedText = $(this).next().text();
			result = [];
			if (checked) {
				$inputs.prop("checked", false);
			} else {
				if (!checked) {

				}

			}
			updateStatus($label, result);
		});

		$inputs.on("change", function () {
			var checked = $(this).is(":checked");
			var checkedText = $(this).next().text();
			if ($checkAll.is(":checked")) {
				result = [];
			}
			// var ss=  result.filter(f=>f=="Categories" || f=="Solution Types")
			// if(ss.length>0){
			//   result.splice(0,1)
			// }
			if (checked) {
				result.push(checkedText);
				// $label.html(result.join(", "));
				$checkAll.prop("checked", false);
			} else {
				let index = result.indexOf(checkedText);
				if (index >= 0) {
					result.splice(index, 1);
				}
				if (result.length == 0) {
					result.splice(index, 1);
					if (!checked) {
						// if(this.parentNode.parentNode.parentNode.id=="data0"){
						//   result.push("Solution Types");
						// }
						// if(this.parentNode.parentNode.parentNode.id=="data1"){
						//   result.push("Categories");
						// }
						// if(this.parentNode.parentNode.parentNode.id=="data2"){
						//   result.push("Solution Types");
						// }
					}
				}
				result = [];
				// if(this.parentNode.parentNode.parentNode.id=="data0"){
				//   result.push("Solution Types");
				// }
				// if(this.parentNode.parentNode.parentNode.id=="data1"){
				//   result.push("Categories");
				// }
				// if(this.parentNode.parentNode.parentNode.id=="data2"){
				//   result.push("Solution Types");
				// }
				// $label.html(result);
			}
			updateStatus($label, result);
		});

		$(document).on("click touchstart", (e) => {
			if (!$(e.target).closest($(this)).length) {
				$(this).removeClass("open");
			}
		});
	});
}

checkboxDropdown(".dropdown");

function openNav() {
	document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}

$(function () {
	$('[data-toggle="popover"]').popover()
})




const $appListContainer = $(".app-listing .list-items");
const $noResultElement = $(".app-listing .app-listing-not-found");

$(".app-listing-search #query").on("keydown", "form", function (event) {
	console.log("event :>> ", event.key);
	return event.key != "Enter";
});

$(".app-listing-search #query").on("keypress", function (e) {
	if (e.which == 13) {
		let searchText = $(".app-listing-search #inpage-search-box")
			.val()
			.trim()
			.toLowerCase();
		let searchResultCount = 0;

		$(".app-listing .app-listing-details").each(function (_index, element) {
			const title = $(element).find(".text-link").text().toLowerCase();
			const $nearestCard = $(element).closest(".col-12");

			if (!title.includes(searchText)) {
				$nearestCard.hide();
			} else {
				searchResultCount++;
				$nearestCard.show();
			}
		});

		$(".app-listing").get(0).scrollIntoView();

		if (searchResultCount == 0) {
			handleZeroResults();
		} else {
			handleSearchResults(searchResultCount);
		}
		return false;
	}
});

function handleZeroResults() {
	$appListContainer.hide();
	$noResultElement.addClass("d-flex").show();
	$(".app-listing .footer-button").closest(".row").hide();
}

function handleSearchResults(searchResultCount) {
	$appListContainer.show();
	$noResultElement.removeClass("d-flex").hide();

	handleShowMoreButton(searchResultCount);
}

function handleShowMoreButton(searchResultCount) {
	const $footerButton = $(".app-listing .footer-button");

	$footerButton.closest(".row").hide();

	if (searchResultCount > 9) {
		const remainingCards = searchResultCount - 9;

		$footerButton.closest(".row").show();
		$footerButton.text(`Show more digital solutions (${remainingCards})`);

		$(".app-listing .app-listing-details").each(function (_index, element) {
			$(element).closest(".col-12").show();

			if (_index >= 9) {
				$(element).closest(".col-12").hide();
			}
		});
	}
}

$(".app-listing-search .icon-close").click(function () {
	const count = $(".app-listing .app-listing-details").length;

	if (count > 9) {
		handleSearchResults(count);
	} else {
		$appListContainer.show();
		$noResultElement.removeClass("d-flex").hide();

		$(".app-listing .app-listing-details").each(function (_index, element) {
			$(element).closest(".col-12").show();
		});
	}
});

function displayPopoverIcons($itemList) {
	$itemList.children().each(function () {
		const solutionTypes = $(this).find(".popover-icons .d-none").text().split(",");
		let popoverIcons = "";

		if (solutionTypes.length > 0) {
			solutionTypes.forEach((solType) => {
				console.log(`solType`, solType)
				const imgPath = $(`.ps-details-masthead span.tooltip-area:contains("${solType.trim()}")`).find("img.d-none").attr("src");

				if (imgPath && solType) {
					popoverIcons += `<img src="${imgPath}" class="img-fluid" />`
				}
			})
		}

		$(this).find(".popover-icons").html(popoverIcons)
	})
}

/* Marketplace apps Closed*/

$(document).ready(function () {
	let displayedelements = $("div[name='start-digital-card-item']");

	$("button[name='show-more-start-digital-btn']")
		.children("span")
		.text(displayedelements.length - 3);

	for (let i = 3; i < displayedelements.length; i++) {
		$(displayedelements[i]).hide();
	}

	$("button[name='show-more-start-digital-btn']").click(function () {
		for (let i = 3; i < displayedelements.length; i++) {
			$(displayedelements[i]).show();
		}

		$(this).hide();
	});

	displayPopoverIcons(displayedelements);

	if (displayedelements.length === 0) {
		$(".category-page-filter .digital-solution-not-found").show();
		$("button[name='show-more-start-digital-btn']").hide();
	} else {
		$(".category-page-filter .digital-solution-not-found").hide();
	}

	$("#start-digital-filter-list li").on("click", function () {
		displayedelements = [];

		selected = this.id;
		let selectedValue = $(this)
			.html()
			.toLowerCase()
			.trim();

		$("div[name='start-digital-card-item']").each(function (index, item) {
			// let arrayOfItems = $(item)
			//   .find(".start-digital-hidden-element")
			//   .text()
			//   .trim()
			//   .split(",");

			// if (checkIfCategories(arrayOfItems, selectedValue)) {

			if (
				selectedValue ===
				$(item)
					.find("h5")
					.text()
					.toLowerCase()
			) {
				displayedelements.push(item);
				$(item).show();
			} else if (selected === "allsolutions") {
				displayedelements.push(item);
				$(item).show();
			} else {
				$(item).hide();
			}
		});

		if (displayedelements.length > 3) {
			$("button[name='show-more-start-digital-btn']").show();
			$("button[name='show-more-start-digital-btn']")
				.children("span")
				.text(displayedelements.length - 3);

			for (let i = 3; i < displayedelements.length; i++) {
				$(displayedelements[i]).hide();
			}
		} else {
			$("button[name='show-more-start-digital-btn']").hide();
		}

		if (displayedelements.length === 0) {
			$(".category-page-filter .digital-solution-not-found").show();
		} else {
			$(".category-page-filter .digital-solution-not-found").hide();
		}
	});
});




/* BX-4123 START */
$(document).ready(function () {
	$(".price-plan .category").click(handleCategoryClick);
	setCTAWrapperPosition();
});
function handleCategoryClick(event) {
	const category = event.target.getAttribute("data-category");
	const $currentCategoryElements = $(
		`.price-plan [data-category-plan='${category}']`
	);
	$(".price-plan .category").removeClass("btn-gradient-blue--active");
	$(this).addClass("btn-gradient-blue--active");
	$(".price-plan .plans-wrapper .plan-section").addClass("hide-card");
	$currentCategoryElements.removeClass("hide-card");
}
function setCTAWrapperPosition() {
	let maxCTAAreaHeight = 48;
	if (window.screen.availWidth >= 992) {
		$(".price-plan .plan-section .bottom-area").each(function (index) {
			const containerHeight = $(this).height();
			if (containerHeight > maxCTAAreaHeight) {
				maxCTAAreaHeight = containerHeight;
			}
		});
		$(".price-plan .plan-section .bottom-area").css({
			"flex-basis": maxCTAAreaHeight,
		});
	}
}
/* BX-4123 END */

/* BX-4124 START */

const mobileScreenSize = 768;

$(document).ready(function () {
	handleShowMoreBtn();
	$(".features-enterpryze .row .col").click(handleCardColClick);
});

function handleShowMoreBtn() {
	const isMobile = window.screen.availWidth <= mobileScreenSize;
	const $cardsColElement = $(".features-enterpryze .row .col");
	const count = $cardsColElement.length;

	if (isMobile && count > 3) {
		$(".features-enterpryze .show-more-btn").click(showMoreFeatures);
		$(".features-enterpryze .button-row.show-more").removeClass("hide-row");
		showRemainingFeaturesCount(count);
		showInitialFeatures();
	} else {
		$cardsColElement.css({ display: "flex" });
	}

	$cardsColElement.each(function (index) {
		const $cardElement = $(this).find("a");
		const hrefValue = $cardElement.attr("href");

		if (!hrefValue) {
			$cardElement.css({ cursor: "initial" });
		}
	});
}

function showInitialFeatures() {
	const $cardsColElement = $(".features-enterpryze .row .col");

	$cardsColElement.each(function (index) {
		if (index < 3) {
			$(this).css({ display: "flex" });
		}
	});
}

function showMoreFeatures() {
	$(".features-enterpryze .row .col").css({ display: "flex" });
	$(this).parent(".show-more").hide();
}

function handleCardColClick(event) {
	const urlValue = $(this).find("a").attr("href");

	if (!urlValue) {
		event.preventDefault();
	}
}

function showRemainingFeaturesCount(count = 0) {
	const remainingCount = count - 3;

	$(".features-enterpryze .show-more-btn").append(`(${remainingCount})`);
}

/* BX-4124 END */

/* BX-5030 START */

$(".tooltip-area").click(function () {
	let $targetElement = $(this);
	$(".tooltip-area .popover-body").each(function (index) {
		$tooltipElement = $($(".tooltip-area")[index]);

		if ($tooltipElement.is($targetElement)) {
			$targetElement.find(".popover-body").toggleClass("show");
		} else {
			$tooltipElement.find(".popover-body").removeClass("show");
		}
	});
});

/* BX-5030 END */

/* BX-784 START */
$(document).ready(() => {
	let $header = $(".promotion-details.blue-bg .uob-h1");
	let $subtitle = $(".promotion-details.blue-bg .sub-title");
	const trimmedHeader = $header.text().trim().substr(0, 100);
	const trimmedSubtitle = $subtitle.text().trim().substr(0, 240);

	$header.text(trimmedHeader);
	$subtitle.text(trimmedSubtitle);
});
/* BX-784 END */

/* Remove Header & Footer START */
function getWebViewCookie() {
	return (document.cookie?.split('; ')
		?.find(row => row.startsWith('webview='))
		?.split('=')[1]) ?? "";
}

$(document).ready(() => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const webview = urlParams.get('webview')
	const webviewCookie = getWebViewCookie();

	if (webview === 'Y' || webviewCookie === 'Y') {
		document.getElementById("header")?.remove();
		document.getElementById("home-mega-menu")?.remove();
		document.getElementById("home-footer")?.remove();
		document.getElementsByClassName("breadscrum")[0]?.remove();
	}

	if (!webviewCookie && webview === 'Y') {
		document.cookie = "webview=Y;";
	}
});
/* Remove Header & Footer END */

/* BBX-2999 START */
$(".category-page-filter .filter-list .slick-track").ready(() => {
	let totalWidth = 0;
	let expectedEndTranslateXValue = 0;
	let $listElements = $(".category-page-filter .filter-list .slick-track li");
	let filterWrapperWidth = $(".category-page-filter .filter-list").width();
	let listElementsCount = $listElements.length;
	const marginRightSpace = 10;
	let totalMarginWidth = (listElementsCount - 1) * marginRightSpace;

	$listElements.each(function () {
		totalWidth += $(this).outerWidth();
	});
	expectedEndTranslateXValue = (totalWidth - filterWrapperWidth + totalMarginWidth) * -1;

	function getTranslate3d(el) {
		var values = el.style.transform.split(/\w+\(|\);?/);
		if (!values[1] || !values[1].length) {
			return [];
		}
		return values[1].split(/,\s?/g);
	}

	$(".category-page-filter .filter-list").on("touchend", function () {
		const $slickTrack = $(this).find(".slick-track");
		const translateXValue = getTranslate3d($slickTrack[0])[0].split("px")[0];
		const lastElementWidth = $slickTrack.find("li").last().width();

		if (translateXValue < expectedEndTranslateXValue + 100 && translateXValue > expectedEndTranslateXValue) {
			setTimeout(() => {
				$slickTrack.css({
					transform: `translate3d(${expectedEndTranslateXValue}px, 0px, 0px)`,
				});
			}, 400);
		}
	});
});
/* BBX-2999 END */

/* BBX-9661 START */

$(".category-page-filter .no-slider").ready(() => {
	$(".category-page-filter .no-slider").on("click", "li", function () {
		$(".category-page-filter .no-slider li").removeClass("btn-gradient-blue--active"), $(this).addClass("btn-gradient-blue--active");
	});
});

/* BBX-9661 END */

/* START BBX-9961 */

$(".hero-image-text .col-12.col-lg-5 h1").ready(function () {
	const $currentElement = $(".hero-image-text .col-12.col-lg-5 h1");
	const $parentDiv = $(".hero-image-text");
	const $columnElement = $(".hero-image-text .col-12.col-lg-5");

	if ($currentElement.text().trim().length === 0 && $parentDiv.children().length === 1 && $columnElement.children().length === 1) {
		$parentDiv.remove();
	}
});

/* END BBX-9961 */

/* START BBX-8034 */

$(".bb-two-col-tile-stack .card .card-body").ready(function () {
	$(".bb-two-col-tile-stack .card .card-body").css("height", "100%");
});
$(".bb-3-col-tile-slider-no-border .carousel-item .card-body").ready(function () {
	setTimeout(() => {
		$(".bb-3-col-tile-slider-no-border .carousel-item .card-body").css("height", "100%");
	}, 500);
});

let resizeCard;
$(window).resize(function () {
	clearTimeout(resizeCard);
	resizeCard = setTimeout(function () {
		$(".bb-two-col-tile-stack .card .card-body").animate({ height: "100%" }, 1000);
		$(".bb-3-col-tile-slider-no-border .carousel-item .card-body").animate({ height: "100%" }, 1000);
	}, 1500);
});

/* END BBX-8034 */

/* BBX-4503 START */

$(".redirect-section .go-back").on("click", function (event) {
	event.preventDefault();
	history.back();
});

$(".redirect-section .proceed-btn").on("click", function (event) {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const reURL = urlParams.get("reURL");

	window.location.href = reURL;
});

/* BBX-4503 END */

/* BBX-7249 START */
function showMore() {
	console.log("show more clicked");
}

$(".basics-of-app-container #showmore").click(function (e) {
	$(this).closest(".row").find(".col-12").css("display", "initial");
	$(this).hide();
})
/* BBX-7249 END */

/* BBX-10877 START */
$('.custom-select').ready(function () {
	if ($(".custom-select")[0] && !$(".select-items")[0] && performance.navigation.type != performance.navigation.TYPE_RELOAD) {
		location.reload();
	}
});
/* BBX-10877 END */

/* BBX-7242 START */
$("#carouselExampleIndicators").ready(() => {
	if ($("#carouselExampleIndicators .carousel-inner .carousel-item").length == 1) {
		$("#carouselExampleIndicators .carousel-wrapper").hide()
	}
})
/* BBX-7242 END */

/* START - Remove extra overlay on video overlay component */
$("[data-lity]").click(() => {
	$("#bp_container").ready(() => {
		$("#bp_container").hide();
	});
})
/* END - Remove extra overlay on video overlay component */

/* BBX-11127 START */
$(".carouselID-1").on("slide.bs.carousel", function (t) {
	var carousel_length = $('#carouselID-1 .carousel-item').length;
	if (t.to == carousel_length - 1) {
		// 2 should be replaced by the (total length of carousel slides -1)$('.item').length

		$("#carouselID-1 .carousel-control-prev").removeClass("invisible");
		$("#carouselID-1 .carousel-control-next").addClass("invisible");
	}
	else if (t.to == 0) {
		// 2 should be replaced by the (total length of carousel slides -1)
		$("#carouselID-1 .carousel-control-prev").addClass("invisible");
		$("#carouselID-1 .carousel-control-next").removeClass("invisible");
	}
	else {
		// 2 should be replaced by the (total length of carousel slides -1)
		$("#carouselID-1 .carousel-control-next").removeClass("invisible");
		$("#carouselID-1 .carousel-control-prev").removeClass("invisible");
	}
});
$("#carouselID-2").on("slide.bs.carousel", function (t) {
	var carousel_length = $('#carouselID-2 .carousel-item').length;
	if (t.to == carousel_length - 1) {
		// 2 should be replaced by the (total length of carousel slides -1)$('.item').length

		$("#carouselID-2 .carousel-control-prev").removeClass("invisible");
		$("#carouselID-2 .carousel-control-next").addClass("invisible");
	}
	else if (t.to == 0) {
		// 2 should be replaced by the (total length of carousel slides -1)
		$("#carouselID-2 .carousel-control-prev").addClass("invisible");
		$("#carouselID-2 .carousel-control-next").removeClass("invisible");
	}
	else {
		// 2 should be replaced by the (total length of carousel slides -1)
		$("#carouselID-2 .carousel-control-next").removeClass("invisible");
		$("#carouselID-2 .carousel-control-prev").removeClass("invisible");
	}
});
$("#carouselID-0").on("slide.bs.carousel", function (t) {
	var carousel_length = $('#carouselID-0 .carousel-item').length;
	if (t.to == carousel_length - 1) {
		// 2 should be replaced by the (total length of carousel slides -1)$('.item').length

		$("#carouselID-0 .carousel-control-prev").removeClass("invisible");
		$("#carouselID-0 .carousel-control-next").addClass("invisible");
	}
	else if (t.to == 0) {
		// 2 should be replaced by the (total length of carousel slides -1)
		$("#carouselID-0 .carousel-control-prev").addClass("invisible");
		$("#carouselID-0 .carousel-control-next").removeClass("invisible");
	}
	else {
		// 2 should be replaced by the (total length of carousel slides -1)
		$("#carouselID-0 .carousel-control-next").removeClass("invisible");
		$("#carouselID-0 .carousel-control-prev").removeClass("invisible");
	}
});
/* BBX-11127 END */

/* product video-inner-mobile - 5657 start */
$(".video-banner-inner-mobile").ready(function () {
	var noOfCards = $(".video-banner-inner-mobile").children().length;
	if (noOfCards == 1) {
		$(".video-banner-inner-mobile .carousel-item").addClass("single-banner");
	}
});
/* product video-inner-mobile - 5657 end */

/* product promotion-inner-mobile - 5075 start */
$(".product-promotion-inner-mobile").ready(function () {
	var noOfCards = $(".product-promotion-inner-mobile").children().length;
	if (noOfCards == 1) {
		$(".product-promotion-inner-mobile .carousel-item").addClass("single-banner");
	}
});
/* product promotion-inner-mobile - 5075 end */

/* BBX-11169 START */
$(".bb-3-col-tile-slider-no-border .card .card-footer, .bb-3-col-tile-slider-no-border .carousel-item .card-footer").each(function () {
	if ($(this).text().length === 0) {
		$(this).remove();
	}
})
$(".bb-3-col-tile-slider-no-border .card p, .bb-3-col-tile-slider-no-border .carousel-item p").each(function () {
	if ($(this).text().length === 0) {
		$(this).remove();
	}
})
/* BBX-11169 END */

/* BBX-9559 START */
$(".category-page-filter .compare-btn").click(function () {
	setTimeout(function () {
		$(".compare-overlay .inner-close-btn img").each(function () {
			$(this).attr("src", "/assets/iwov-resources/assets/Icons/icons-exit-blue.svg");
		})
	})
})
/* BBX-9559 START */

/* BBX-111292 START */
const slider = document.querySelector(".category-page-filter .no-slider");
let isDown = false;
let startX;
let scrollLeft;

if (slider) {
	slider.addEventListener("mousedown", e => {
		isDown = true;
		slider.classList.add("active");
		startX = e.pageX - slider.offsetLeft;
		scrollLeft = slider.scrollLeft;
	});
	slider.addEventListener("mouseleave", () => {
		isDown = false;
		slider.classList.remove("active");
	});
	slider.addEventListener("mouseup", () => {
		isDown = false;
		slider.classList.remove("active");
	});
	slider.addEventListener("mousemove", e => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - slider.offsetLeft;
		const walk = x - startX;
		slider.scrollLeft = scrollLeft - walk;
	});
}

function o() {
	var t, e = (t = 3, 576 <= $(window).width() && (t = 6), t),
		i = $(".category-page-filter").find(".category-items").children(".category-item").filter(function (t, e) {
			return !$(e).hasClass("hiden-filter")
		});
	if (i.length > e) {
		for (var s = 0; s < i.length; s++) e < s + 1 && $(i[s]).addClass("hiden-other");
		t = parseInt(i.length - e), $(".category-page-filter .more-btn").removeClass("d-none"), $(".category-page-filter .more-btn .btn__num").text(t)
	} else $(".category-page-filter .more-btn").addClass("d-none")
}

function r(t) {
	return t.toLowerCase().replace(/\s*/g, "")
}

$(".category-page-filter .no-slider").on("click", "li", function () {
	var t, e;
	$(".category-page-filter .no-slider li").removeClass("btn-gradient-blue--active"), $(this).addClass("btn-gradient-blue--active"), t = $(this).text(), e = r(t), $(".category-page-filter").find(".category-items").children(".category-item").filter(function (t, i) {
		return $(i).removeClass("hiden-filter").removeClass("hiden-other"), 0 == e.indexOf("all") ? ($(".category-page-filter").find(".category-items").children(".category-item").removeClass("hiden-filter").removeClass("hiden-other"), o(), !0) : r($(i).find(".card .card-subtitle").text()) === e || ($(i).addClass("hiden-filter"), !1)
	}), o(), $("body,html").animate({
		scrollTop: $(".category-page-filter .category-items").offset().top - 50
	}, 300)
});
/* BBX-111292 START */

/* BBX-11127 START */
/*$(document).ready(function () {
	for (const property in $(".carousel-inner")) {
		if ($(".carousel-inner")[property]?.children?.length < $(".carousel-indicators")[property]?.children?.length) {
			$(".carousel-indicators")[property].children[$(".carousel-indicators")[property].children.length - 1].remove()
		}
	}
});*/
/* BBX-11127 END */

/* BBX-6111 START */
function handleSmeHubBannerVideoCarouselTop() {
	const titleHeight = $(".sme-hub-landing-masthead .masthead-form .uob-h1").height();
	const currentMarginTop = Number($("#sme-hub-landing-main-slider").css("margin-top")?.split("px")[0]);
	let expectedMarginTop = 0;

	if (window.innerWidth < 768) {
		expectedMarginTop = -181 + titleHeight;
	} else if (window.innerWidth < 992) {
		expectedMarginTop = -360 + titleHeight;
	} else {
		expectedMarginTop = -450 + titleHeight;
	}

	$("#sme-hub-landing-main-slider").css("margin-top", expectedMarginTop);
}

let resizeSmeHubPage;

$(document).ready(handleSmeHubBannerVideoCarouselTop);
$(window).resize(function () {
	clearTimeout(resizeSmeHubPage);
	resizeSmeHubPage = setTimeout(handleSmeHubBannerVideoCarouselTop, 200);
});
/* BBX-6111 END */

/* BBX-11316 START */
$(".navbar.uob-scrollpy").ready(function() {
	let sectionIdList = [];
	$(".navbar.uob-scrollpy li a").each(function() {
		sectionIdList.push($(this).attr("href"));
	});

	sectionIdList.forEach(function(sectionId) {
		$(`a[href='${sectionId}']`).each(function() {
			if (!$(this).hasClass("nav-link") && !$(this).hasClass("dropdown-item")) {
				$(this).click(function (e) {
					const hrefValue = $(this).attr("href");
					
					if (hrefValue?.includes("#")) {
						e.preventDefault();
						const sectionId = hrefValue.replace("#", "");
						const element = document.getElementById(sectionId)
						const navHeight = document.getElementsByClassName("uob-scrollpy")[0].getBoundingClientRect().height
						let position = element.offsetTop - navHeight
						window.scrollTo({
							left: 0, top: position
						})
					}
				})
			}
		})
	});
});

/* BBX-11316 END */


/* 11995 START */

function scrollFix() {
$("#down-arrow-icons").click(function () {
let element = document.getElementById('how-it-works');
let mobileScreenSize = 768;
let isMobile = window.screen.availWidth <= mobileScreenSize;
$("html, body")
.stop()
.animate(
{
scrollTop: (isMobile?element.offsetTop-25:element.offsetTop-100),
},
400
);
return false;
});
$(".scrollTop a").scrollTop();
}
scrollFix();

/*1995 END */

/* PWEB cookies START */

function setCookie(name,value,days) {
var expires;
if(days){
var date = new Date();
/*Format For Users to change  - date.setTime(date.getTime() + (XX * 60 * 1000));   XX value represents min */
date.setTime(date.getTime() + (43200 * 60 * 1000));  
expires=";expires="+date.toGMTString();
}else {
expires="";
}
document.cookie=name+"="+value+expires+";path=/";
}


function getCookie(c_name) {
if(document.cookie.length > 0) {
c_start = document.cookie.indexOf(c_name+"=");
if(c_start!=-1){
c_start = c_start+c_name.length+1;
c_end=document.cookie.indexOf(";",c_start);
if(c_end == -1) {
c_end=document.cookie.length;
}
return unescape(document.cookie.substring(c_start,c_end));
}
}
return"";
}

function displayCookieDOM() {
var vists = getCookie('viewCount');
var isBBapp = BBappView();
if(!vists && !isBBapp) {
vists =1;
//document.querySelector(".uob-cookie").classList.remove("hide");
document.querySelector(".uob-cookie").classList.remove("hide");
} else {
vists = parseInt(vists)+1;
document.querySelector(".uob-cookie").classList.add("hide");
}
setCookie('viewCount',vists, 1);
}

displayCookieDOM()

/* PWEB cookies END */



/* START Toggle Dropdown

document.querySelector(".language-toggle").addEventListener("click",function() {
let currentUrl = window.location.href;
window.location.href=currentUrl.replace("/business","/personal");
return false;
})

END Toggle Dropdown */


/* Cookies for BB-APP START */

function BBappView() {
var comingURL = window.location.href;
var convertedURL = new URL(comingURL);
var parameters = convertedURL.searchParams;
var isWebView = parameters.get("webview");
if(isWebView && isWebView === "Y") {
return true;
}
return false;
}

/* Cookies for BB-APP END */                                                   
