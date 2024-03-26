

$(document).ready(function () {
	//var currentSegment = document.querySelector('meta[name="segment"]').content;	
  
    var getUrlParameter = function getUrlParameter(sParam) {
      var sPageURL = window.location.search.substring(1),
          sURLVariables = sPageURL.split('&'),
          sParameterName,
          i;

      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');

          if (sParameterName[0] === sParam) {
              return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
          }
      }
      return false;
  };
  if(getUrlParameter('query')){
      $('#searchLabel').val(getUrlParameter('query').replace(/\+/g," "));
  }

	var currentSegment = document.querySelector('meta[name="segment"]');
  	  
	var currentSeg =  document.querySelector('meta[name="segment"]');

  if(currentSeg != null){
		 currentSegment =  currentSeg.content;
		}
	var seg;
	seg = $('.catFilter').data("seg");
	if(seg){
		//seg = getUrlParameter('seg');
		$("#currentSegment").val(seg);
	}
    else{
      $('#currentSegment').val(getUrlParameter('seg'));
    }
  
	$('.search-page-filter .filter-list li').each(function(){
		$(this).removeClass('btn-gradient-blue--active');
		
		if(seg){
            if(seg == $(this).find('a').data("seg")){
				$(this).addClass('btn-gradient-blue--active');
            }			
		}else{
			if($(this).find('a').data("seg") === 'all results'){
				$(this).addClass('btn-gradient-blue--active');
            }
		}
		//$("#seg-"+seg).prependTo("#segmentID");
	});

	//var ajaxpage = $("#ajaxPage").val();
	var ajaxpage = "/uobgroup/search.page";
    //var ajaxpage = "/uobgroup/search.page";
	
	$("#searchLabel").click(function() {
		var keyword = $("input[name=query]").val();
		//var segname = document.querySelector('meta[name="segment"]').content;
      	var segname = getUrlParameter('seg');
      
		var start =  "";
		var isGlobalSearch = $("#uob-is-global-search").val();
		console.log("segname :"+segname);
		if(segname != "" && typeof(segname) != "undefined" && isGlobalSearch != "yes"){
			$("#currentSegment").val(segname);
		}else{
			$("#currentSegment").remove();
		}	
		if(keyword !== "" && typeof(keyword) !== "undefined"){
			query = keyword.replace(/ /g, ' AND ');
		}else{
			query = "";
		}
	//callServerAjaxMode(ajaxpage, query, segname, start);
	});
	
	$("#inpage-search-box").click(function() {
		var keyword = $("input[name=query]").val();
		var start =  "";
		if(keyword !== "" && typeof(keyword) !== "undefined" && segname !== '' && typeof(segname) !== "undefined"){
			query = keyword.replace(/ /g, ' AND ');
			segname = "seg-label:" + segname;
		}else{
			query = "";
			segname = "All Segment";
		}
	
		searchresults(ajaxpage,query,segname);
	});

	$(document).on("click", ".dropdown-menu li a", function (event)	{
	 var segval = $(this).find(".text").text().toLowerCase();
      if(segval === "others" || segval === "all results") {
			$("#filter-search-btn").val("");
		}else{
		$("#filter-search-btn").val(segval);
		}
       		
	});

	$("#filter-search-btn").click(function() {
		var keyword = $("input[name=query]").val();
		var start =  "";
		
		if(keyword !== "" && typeof(keyword) !== "undefined" && segname !== '' && typeof(segname) !== "undefined"){
			query = keyword.replace(/ /g, ' AND ');
			segname = "seg-label:" + segname;
		}else{
			query = "";
			segname = "";
		}
		if(value == "others"){
			$("#filter-search-btn").val("");
		}
		searchresults(ajaxpage,query,segname);
		
	});
	
	$("#landing-content").on('click','button', function(event) {
		callServerAjaxMode("#loadMore", $("#loadMore").data("url"), $("#loadMore").data("basequery"), $("#loadMore").data("fieldquery"),$(this).data("start"));
	});
	
	$("#landing-content").on('click','.catFilter', function(event) {
		if($(this).data("seg-label") === "all results"){
			callServerAllAjaxMode("#landing-content", $("#loadMore").data("url"), $("#loadMore").data("basequery"));
		}else{
			var count = $(".filter-list").find(".allResults").text();
			callServerSegmentAjaxMode("#loadMore", $("#loadMore").data("url"), $("#loadMore").data("basequery"),$(this).data("seg"),count);
			//callServerSegmentAjaxMode("#landing-content", $("#loadMore").data("url"), $("#loadMore").data("basequery"),$(this).data("seg"),count);
		}
	});
	if($("#segmentID li").children().length < 2)
	{
		$('#segmentID .catFilter').click();
	} 
	
});

function callServerSegmentAjaxMode(containerSelector, ajaxUrl, query, seg,count){
if(seg == "others"){seg = seg +"-"+getUrlParameter('seg');	}
	$.ajax({
        url:ajaxUrl,
        data: { query: query, seg: seg},
        type: "GET",
        dataType: "html",
        /*beforeSend: function(){
            $(containerSelector).append('<h3><span class="message">Processing ...</span></h3>');
        },*/
        success: function (data) {
			//$(containerSelector).empty().append($(data).find(containerSelector).html());
			var result = $(data).has('.no-result');
			if(!result.length){
			
				$(containerSelector).empty().append($(data).find(containerSelector).html());

				var pageCount = $(".search-results .cards-each:visible").length
				$(".section-title").find(".result__nums").text(pageCount);
				$(".filter-list").find(".allResults").text(count);
				//$(containerSelector).empty().append($(data).find('.section-title').html());
				$(containerSelector).prev().empty().append($(data).find('.section-title').html());

				$(containerSelector).show();
				$(containerSelector).prev().show();
				$(".section-title").find(".result__nums").text(pageCount);
				if($(".no-result").length > 0 ){
    					$(".no-result").parent().remove();
				}
			}else{
				$(containerSelector).empty().append($(data).find(containerSelector).html());
				$(containerSelector).prev().empty();
				$(containerSelector).append($(data).find('.no-result').parent().html());
				//$(containerSelector).append($(data).find('.no-result').parent().html()).wrap('div.cards-row.search-results.row');
				//$(containerSelector).prev().show();
				$(containerSelector).find('.no-result').show();
			}

		},
        error: function (xhr, status) {
            $(containerSelector).append('<h3><span class="message">Sorry, there was error while processing</span></h3>');
        }
    });
}
function callServerAllAjaxMode(containerSelector, ajaxUrl, query){
	$.ajax({
        url:ajaxUrl,
        data: { query: query},
        type: "GET",
        dataType: "html",
        /*beforeSend: function(){
            $(containerSelector).append('<h3><span class="message">Processing ...</span></h3>');
        },*/
        success: function (data) {
			$(containerSelector).empty().append($(data).find(containerSelector).html());
			var pageCount = $(".search-results .cards-each:visible").length
			$(".section-title").find(".result__nums").text(pageCount);
			document.querySelectorAll('.search-page-filter .filter-list li, .seg-page-filter .filter-list li').forEach(element => {
				element.setAttribute('data-filter', element.textContent.replace(/\s+/g, '-').toLowerCase());
			});
			$(".search-page-filter .filter-list").on('click', 'li', function() {
				$(".search-page-filter .filter-list li").removeClass('btn-gradient-blue--active');
				$(this).addClass('btn-gradient-blue--active');
				searchFilter($(this).text().toLowerCase());
				$('body,html').animate({
				  scrollTop: $('.search-results').offset().top - 100
				}, 300);
   		  });


		},
        error: function (xhr, status) {
            $(containerSelector).append('<h3><span class="message">Sorry, there was error while processing</span></h3>');
        }
    });
}
 function searchFilter(segName) {
    var cname = formatSegmentName(segName);
    var segItems = $(".search-results").find(".cards-each")
    segItems.filter(function(index,item) {
      $(item).removeClass("hiden-filter").removeClass("hiden-other");;
      //all, first word is all
      if(cname.indexOf("all") == 0) {
        $(".search-results").find(".cards-each").removeClass("hiden-filter").removeClass("hiden-other");;
        displayMaxCards();
        return true;
      }
      var cardName = formatSegmentName($(item).attr('data-tag'));
      if(cardName !== cname) {
        $(item).addClass("hiden-filter");
        return false;
      }
      return true;
    });
    displayMaxCards();
  }
function formatSegmentName(name) {
    return name.toLowerCase().replace(/\s*/g,"");
  }
function displayMaxCards() {
    var maxNum = 10;
    var segItems = $(".search-page-filter").find(".cards-each");
    var dblockSegmentItems = segItems.filter(function(i,item) {
        if($(item).hasClass("hiden-filter")) {
            return false;
        }
        return true;
    });
    if(dblockSegmentItems.length > maxNum) {
        // hide others and add load more btn
        for(var index = 0; index < dblockSegmentItems.length; index ++) {
            if(index + 1 > maxNum) {
                $(dblockSegmentItems[index]).addClass("hiden-other");
            }
        }
        displayLoadMoreBtn(parseInt(dblockSegmentItems.length - maxNum));
    } else {
        $(".search-page-filter .load__more").addClass("d-none")
    }
    if(dblockSegmentItems.length === 0) {
      $('.no-result').show();
      $('.search-page-filter .load__more').parent().hide();
      $('.search-page-filter .section-title').hide();
    } else {
      $('.no-result').hide();
      $('.search-page-filter .load__more').parent().show();
      $('.search-page-filter .section-title').show();
    }
    $('.search-page-filter .show__result').text(dblockSegmentItems.length);
    $('.search-page-filter .result__nums').text($('.search-results .cards-each:visible').length);
  }

function searchresults(ajaxpage,query,segname){
	var start = '';
	var query = '';
	var keyword = $("input[name=query]").val();
		var start =  "";
		if(keyword !== "" && typeof(keyword) !== "undefined"){
			query = keyword.replace(/ /g, ' AND ');
		}else{
			query = "";
		}
	callServerAjaxMode("#landing-content", ajaxpage, query, segname, start);
}



function callServerAjaxMode(containerSelector, ajaxUrl, query, fieldQuery, start){
	//alert(containerSelector);
	//alert(start);
	//var currentSegment = document.querySelector('meta[name="segment"]').content;
  	var currentSegment;
	
	console.log("fieldQuery : "+fieldQuery);
	currentSegment = getUrlParameter('seg');
	if(currentSegment != false ){
		if ($('#seg-others').hasClass('btn-gradient-blue--active')){
		currentSegment = "others-"+getUrlParameter('seg');
		} else {
			currentSegment = getUrlParameter('seg');
		}
	}else{
		currentSegment = '';
	}
	request = {query: query, fieldQuery: fieldQuery, start: start};
	if(currentSegment != ""){
		request.seg = currentSegment;
	}
	$.ajax({
        url:ajaxUrl,
        data: request,
        type: "GET",
        dataType: "html",
        /*beforeSend: function(){
            $(containerSelector).append('<h3><span class="message">Processing ...</span></h3>');
        },*/
        success: function (data) {
			
			$(containerSelector).find("#loadNextButton").remove();
			$(containerSelector).find("h3 .message").parent().remove();
			$(containerSelector).append($(data).find(containerSelector).html());
			
			var pageCount = $(".search-results .cards-each:visible").length
			$(".section-title").find(".result__nums").text(pageCount);
			//alert(pageCount);
		},
        error: function (xhr, status) {
            $(containerSelector).append('<h3><span class="message">Sorry, there was error while processing</span></h3>');
        }
    });
}
$(document).ready(function() {
	$("#uob-search-box").keyup(function(e){
		var keyword = $("#uob-search-box").val();
		var isGlobalSearch = $("#uob-is-global-search").val();
		var currentSeg =  document.querySelector('meta[name="segment"]');
		var currentSegment = "personal";
		if(currentSeg != null){
		 currentSegment =  currentSeg.content;
		}
		//var ajaxpage = $("#ajaxPage").val();
		var ajaxpage = "/uobgroup/search.page?";	
       //var ajaxpage = "/uobgroup/search.page?";
		var href = ajaxpage+"query="+keyword;
		console.log("isGlobalSearch :"+isGlobalSearch);
		if(isGlobalSearch != "yes"){
			href = href + "&seg="+currentSegment;
			console.log("href :"+href);
		}
		 if (e.key === "Enter") {
			e.preventDefault();
			window.location.href = $('#searchLink').attr('href');
			//$('#searchLink').trigger('click');
		}
		//$(".search-trigger-btn").parent().attr('href',ajaxpage+"query="+keyword+"&seg="+currentSegment);
		$("#searchLink").attr('href',href);
	});
});

$("#searchLabel").keyup(function(e){
		var keyword = $("#searchLabel").val();
		var currentSeg =  getUrlParameter('seg');
		
		var ajaxpage = "/uobgroup/search.page?";	
		
		if(currentSeg)
		{
			var href = ajaxpage+"query="+keyword+"&seg="+currentSeg;
		}
		else {
			var href = ajaxpage+"query="+keyword;
		}		
		$("#searchPageLink").attr('href',href);
		 if (e.key === "Enter") {
			e.preventDefault();
			window.location.href = href;
		}
		
	});