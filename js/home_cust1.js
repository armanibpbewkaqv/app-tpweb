"use strict";
require.config(requireConfig),require(["jquery","tmpl","i18n","bootstrap","common","wall"],function(e,t,i,r,a,l){function o(){if(!a.util.getLocalCurrency())return void(f=setInterval(function(){o()},500));f&&clearInterval(f),3!=sessionStorage.pop_menu_style&&a.dao.homePageProduct({currencyId:a.util.getLocalCurrency()},function(t){var i=a.util.getCurrencySymbol(a.util.getLocalCurrency()),r=a.util.getAdvSource().u,l=a.util.encodeMenuType(a.util.getUvid());r||(r=a.util.getQueryString("u"));var o="";if(o=r?"?u="+r+"&uvid="+l:"?uvid="+l,_=t.new_arrivals){for(var n=0;n<_.length;n++){for(var s=_[n],p=0;p<s.display_data.length;p++){var u=s.display_data[p];u.original_price=a.util.formatProductPrice(u.original_price,i),u.current_price=a.util.formatProductPrice(u.current_price,i),u.img_display=a.util.picUrl+u.img_display,u.color_img=a.util.picUrl+u.color_img,u.href=a.util.formatProductName(s.product_name)+"-d-"+a.util.encodeMenuType(s.product_id)+"-"+a.util.encodeMenuType(u.color_id)+".html"+o,u.disCount&&sessionStorage.listOffSwitch&&"1"==sessionStorage.listOffSwitch?u.disCount=u.disCount:u.disCount=""}s.showColor=sessionStorage.img_block,s.statistic.saled&&(s.sold=e.i18n.map.soldedHint.replace("$number",s.statistic.saled))}e("#new_bxslider").html(e("#productItemTempl").tmpl(_)),e("#new_bxslider .new-product-label").html(e.i18n.map.listNewLabel),e("#new_bxslider_wrap").show()}else e("#new_bxslider_wrap").hide();if(m=t.best_sellers){for(var n=0;n<m.length;n++){for(var s=m[n],p=0;p<s.display_data.length;p++){var u=s.display_data[p];u.original_price=a.util.formatProductPrice(u.original_price,i),u.current_price=a.util.formatProductPrice(u.current_price,i),u.img_display=a.util.picUrl+u.img_display,u.color_img=a.util.picUrl+u.color_img,u.href=a.util.formatProductName(s.product_name)+"-d-"+a.util.encodeMenuType(s.product_id)+"-"+a.util.encodeMenuType(u.color_id)+".html"+o,u.disCount&&sessionStorage.listOffSwitch&&"1"==sessionStorage.listOffSwitch?u.disCount=u.disCount:u.disCount=""}s.showColor=sessionStorage.img_block,s.sold&&(s.sold=e.i18n.map.soldedHint.replace("$number",s.sold))}e("#best_bxslider").html(e("#productItemTempl").tmpl(m)),e("#best_bxslider .new-product-label").html(e.i18n.map.listNewLabel),e("#best_bxslider_wrap").show()}else e("#best_bxslider_wrap").hide();if(d(_,m),t.top_club){var c=t.top_club;if(c&&c.length>0){for(var n=0;n<c.length;n++)c[n].menu_icon&&(c[n].menu_icon=a.util.picUrl+c[n].menu_icon),c[n].product&&c[n].product.display_data&&c[n].product.display_data.length>0&&c[n].product.display_data[0].img_display&&(c[n].product.display_data[0].original_price=a.util.formatProductPrice(c[n].product.display_data[0].original_price,i),c[n].product.display_data[0].current_price=a.util.formatProductPrice(c[n].product.display_data[0].current_price,i),c[n].product.display_data[0].img_display=a.util.picUrl+c[n].product.display_data[0].img_display,c[n].product.link=a.util.formatProductName(c[n].product.product_name)+"-d-"+a.util.encodeMenuType(c[n].product.product_id)+"-"+a.util.encodeMenuType(c[n].product.display_data[0].color_id)+".html"+o),c[n].link=a.util.formatProductName(c[n].menu_name)+"-l-"+a.util.encodeMenuType(c[n].menu_type)+"-"+l+".html"+o;var g=c;e("#topClubList").html(e("#categotyItemTempl").tmpl(g)),e("#topClubListWrap").show()}else e("#topClubListWrap").hide()}if(t.top_team){var f=t.top_team;if(f&&f.length>0){for(var n=0;n<f.length;n++)f[n].menu_icon&&(f[n].menu_icon=a.util.picUrl+f[n].menu_icon),f[n].product&&f[n].product.display_data&&f[n].product.display_data.length>0&&f[n].product.display_data[0].img_display&&(f[n].product.display_data[0].original_price=a.util.formatProductPrice(f[n].product.display_data[0].original_price,i),f[n].product.display_data[0].current_price=a.util.formatProductPrice(f[n].product.display_data[0].current_price,i),f[n].product.display_data[0].img_display=a.util.picUrl+f[n].product.display_data[0].img_display,f[n].product.display_data[0].height=a.util.getHomeImageHeight(),f[n].product.link=a.util.formatProductName(f[n].product.product_name)+"-d-"+a.util.encodeMenuType(f[n].product.product_id)+"-"+a.util.encodeMenuType(f[n].product.display_data[0].color_id)+".html"+o,f[n].product.top=Number(a.util.getHomeImageHeight())-50),f[n].link=a.util.formatProductName(f[n].menu_name)+"-l-"+a.util.encodeMenuType(f[n].menu_type)+"-"+l+".html"+o;var w=f;e("#topNationalList").html(e("#categotyItemTempl").tmpl(w)),e("#topTeamListWrap").show()}else e("#topTeamListWrap").hide()}new Swiper("#topClubList_swiper",{slidesPerView:4,pagination:"#topClubList_swiper .swiper-pagination",paginationClickable:"#topClubList_swiper .swiper-pagination",nextButton:"#topClubList_swiper .swiper-button-next",prevButton:"#topClubList_swiper .swiper-button-prev",spaceBetween:10}),new Swiper("#topNationalList_swiper",{slidesPerView:4,pagination:"#topNationalList_swiper .swiper-pagination",paginationClickable:"#topNationalList_swiper .swiper-pagination",nextButton:"#topNationalList_swiper .swiper-button-next",prevButton:"#topNationalList_swiper .swiper-button-prev",spaceBetween:10}),e(".loading-mask").addClass("hide"),e("footer").removeClass("invisibility")},null,function(){e(".loading-mask").addClass("hide"),e("footer").removeClass("invisibility"),e("a").each(function(){var t=e(this).attr("href"),i=a.util.getQueryString("u");if(!(t&&t.indexOf("-l-")>-1||t&&t.indexOf("-d-")>-1||"https://www.17mytrack.com/"==t)){if(t&&t.indexOf("uvid=")<0&&"javascript:void(0)"!==t)if("/"==t){var r=a.util.encodeMenuType(a.util.getUvid());t=t+"?uvid="+r}else if(t&&t.indexOf("uvid=")<0&&-1==t.indexOf("ssl-checker.html#hostname=")){var l=t.length-"html".length,r=a.util.encodeMenuType(a.util.getUvid());t=l>=0&&t.lastIndexOf("html")==l?t+"?uvid="+r:t+"&uvid="+r}if(i&&"javascript:void(0)"!==t)if("/"==t)t=t+"?u="+i;else if(t){var l=t.length-"html".length;t=l>=0&&t.lastIndexOf("html")==l?t+"?u="+i:t+"&u="+i}e(this).attr("href",t)}})})}function n(){a.dao.getHomeFlashSaleProduct({currencyId:a.util.getLocalCurrency()},function(t){if(t){var i=t.products;if(i){var r=a.util.getCurrencySymbol(a.util.getLocalCurrency()),l=a.util.getAdvSource().u,o=a.util.encodeMenuType(a.util.getUvid());l||(l=a.util.getQueryString("u"));var n="";n=l?"?u="+l+"&uvid="+o:"?uvid="+o;for(var d=0;d<i.length;d++){for(var u=i[d],c=0;c<u.display_data.length;c++){var _=u.display_data[c];_.original_price=a.util.formatProductPrice(_.original_price,r),_.current_price=a.util.formatProductPrice(_.current_price,r),_.img_display=a.util.picUrl+_.img_display,_.color_img=a.util.picUrl+_.color_img,_.href=a.util.formatProductName(u.product_name)+"-d-"+a.util.encodeMenuType(u.product_id)+"-"+a.util.encodeMenuType(_.color_id)+".html"+n}u.status=t.flashobj.status,1==u.status?u.desc=e.i18n.map.soldedHint.replace("$number",u.sold):u.desc=e.i18n.map.soldHint.replace("$number",u.limit)}e("#flash_sale_list").html(e("#flashSaleProductItemTempl").tmpl(i)),e("#flash_sale_list .sold-number").html(),p(),1==t.flashobj.status?e("#flash_sale_list_wrap #hint").text(e.i18n.map.EndsIn):e("#flash_sale_list_wrap #hint").text(e.i18n.map.StartsIn),g=t.flashobj.gap,s(),e("#flash_sale_list_wrap").removeClass("hide")}else e("#flash_sale_list_wrap").addClass("hide")}else e("#flash_sale_list_wrap").addClass("hide")})}function s(){var t,i,r,a;g>=0&&(t=Math.floor(g/1e3/60/60/24),i=Math.floor(g/1e3/60/60%24),r=Math.floor(g/1e3/60%60),a=Math.floor(g/1e3%60),i+=24*t,i<10?i="0"+i+"h:":i+="h:",r<10?r="0"+r+"m:":r+="m:",a<10?a="0"+a+"s":a+="s",e("#flash_sale_count_down").text(i+r+a),g-=1e3,setTimeout(s,1e3))}function p(){new Swiper("#flash_sale_swiper",{slidesPerView:4,pagination:"#flash_sale_swiper .swiper-pagination",paginationClickable:"#flash_sale_swiper .swiper-pagination",nextButton:"#flash_sale_swiper .swiper-button-next",prevButton:"#flash_sale_swiper .swiper-button-prev",spaceBetween:10})}function d(t,i){new Swiper("#new_bxslider_swiper",{slidesPerView:5,pagination:"#new_bxslider_swiper .swiper-pagination",paginationClickable:"#new_bxslider_swiper .swiper-pagination",nextButton:"#new_bxslider_swiper .swiper-button-next",prevButton:"#new_bxslider_swiper .swiper-button-prev",spaceBetween:5}),new Swiper("#best_bxslider_swiper",{slidesPerView:5,pagination:"#best_bxslider_swiper .swiper-pagination",paginationClickable:"#best_bxslider_swiper .swiper-pagination",nextButton:"#best_bxslider_swiper .swiper-button-next",prevButton:"#best_bxslider_swiper .swiper-button-prev",spaceBetween:5}),e("#new_bxslider li .color-wrap img").bind("click",function(i){u(i,e(this),t)}),e("#best_bxslider li .color-wrap img").bind("click",function(t){u(t,e(this),i)})}function u(e,t,i){e.stopPropagation();var r=t.parent().parent().parent().parent().data().data,a=t.data().data,i=i[r].display_data[a];t.parent().parent().find("img").removeClass("selected"),t.addClass("selected");var l=i.href;t.parent().parent().parent().find("a:first").attr("href",l),t.parent().parent().parent().find("img:first").attr("src",i.img_display),t.parent().parent().parent().find(".price-wrap .goods-price").html(i.current_price),t.parent().parent().parent().find(".price-wrap .goods-del-price").html(i.original_price)}function c(e){var t,i=a.statistic.getPerformanceTiming();t=i?{page:"/imgwall?cp="+e,t_leaving:i.startTime,t_ldpage:i.loadPage,t_enter:i.startTime,uvid:a.util.getUvid(),ctryCode:a.util.getCookie("current_country"),referer:document.referrer}:{page:"/imgwall?cp="+e,t_leaving:(new Date).getTime(),t_ldpage:(new Date).getTime(),t_enter:(new Date).getTime(),uvid:a.util.getUvid(),ctryCode:a.util.getCookie("current_country"),referer:document.referrer},a.dao.statistic(t,function(){})}var _="",m="",g=0;!function(){e("#wall_buy_btn").bind("click",function(t){e(this).data("data")&&c(e(this).data("data")),window.location.href=e(this).data("href")})}(),a.setCurrencyCodeCallback(function(){o(),n(),e(".loading-mask").addClass("hide"),e("footer").removeClass("invisibility")}),a.setLanguageCallback(function(){sessionStorage.topAdvs&&e("#chooser_us_desc1").html(e.i18n.map.ChooseUsDesc1[0].replace("shippinginfo",sessionStorage.topAdvs.toLowerCase()))}),a.sessionStorageEnable&&a.initLoginStatus(),self!=top&&e(document.body).parent().addClass("overflowY");var f=null});