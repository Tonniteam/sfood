// 当前页数
var page = 1;
// 每页显示的数量
var offset = 15;
// 选择标签
var sel_tag = 'all';
//图片路基定义
var origin_img_path = "../images/allfood/";
var small_img_path = "../images/allfood/compress-ew/";
//图片类型
var imageType = ".jpg";
//当前语言选择
var lang = 'en';


// 请求数据实例
window.onload = function(){
	applyData();
}

// <div class="iso-box crab fish lobster col-md-4 col-sm-6">
	// 	<div class="gallery-thumb">
	// 		<a href="../images/gallery-img2.png" data-lightbox-gallery="food-gallery">
	// 			<img src="../images/gallery-img2.png" class="fluid-img" alt="Gallery">
	// 			<div class="gallery-overlay">
	// 				<div class="gallery-item">
	// 					<i class="fa fa-search"></i>
	// 				</div>
	// 			</div>
	// 		</a>
	// 	</div>
	// 	<h3>ALASKA KING CRAB</h3>
// </div>

// 请求数据函数
function applyData(page, offset, sel_tag){
	$.getJSON('../json/allimg.json', function (res){
			//获取一个数组
			//console.log(res);
			//64
			//alert(res.length);
			//显示数据
			// alert(res[0].thai);
			//01.选择数据
			//02.显示
			for(var i=0; i<res.length; i++){
				//1. 创建一个最外部对象iosbox
				var $iosbox = $("<div class='iso-box col-md-3 col-sm-6'></div>");
				//2. 获取分类数据, 添加分类
				var cls_arr = res[i].cls.split('+');
				for(var j=0; j<cls_arr.length; j++){
					$iosbox.addClass(cls_arr[j]);
				}
				//3. 创建gallery-thumb
				var $gallerythumb = $("<div class='gallery-thumb'></div>");
				//4. 加入iosbox
				$iosbox.append($gallerythumb);
				//5. 创建a标签
				var $a_origin = $('<a data-lightbox-gallery="food-gallery"></a>');
				//6. 添加href路径
				var imgNum = res[i].nu;
				// console.log(imgNum);
				$a_origin.attr("href",origin_img_path+imgNum+imageType);
				// console.log($a_origin.attr("href"))
				//7. 加入到gallery-thumb
				$gallerythumb.append($a_origin);
				//8. 创建显示图片
				var $showImg = $('<img class="fluid-img" alt="Gallery"/>');
				$showImg.attr('src',small_img_path+imgNum+imageType);
				//9. 加入到a
				$a_origin.append($showImg);
				//10. 创建蒙版
				var $galleryoverlay = $('<div class="gallery-overlay"></div>');
				var $galleryitem = $('<div class="gallery-item"></div>');
				var $fasearch = $('<i class="fa fa-search"></i>');
				$galleryoverlay.append($galleryitem);
				$galleryitem.append($fasearch);
				//11. 添加到a
				$a_origin.append($galleryoverlay);
				//12. 创建标题标签
				var $titleh2 = $('<h3></h3>');
				var titlecontent = res[i].english;
				$titleh2.text(titlecontent);
				//13. 加入iosbox
				$iosbox.append($titleh2);
				//14. 加入到iso-box-wrapper
				$('.iso-box-wrapper').append($iosbox);
			}
			
			//初始化iso-box
			initIsobox();
			
			$('#gallery .col-md-3 a').nivoLightbox({
				effect: 'fadeScale',
			});
	})
}

//显示数据今日iso-box
function initIsobox(){
	
	if ( $('.iso-box-wrapper').length > 0 ) { 
	
	      var $container  = $('.iso-box-wrapper'), 
	        $imgs     = $('.iso-box img');
	
	      $container.imagesLoaded(function () {
	
	        $container.isotope({
	        layoutMode: 'fitRows',
	        itemSelector: '.iso-box'
	        });
	
	        $imgs.load(function(){
	          $container.isotope('reLayout');
	        })
	
	      });
	
	      //filter items on button click
	
	      $('.filter-wrapper li a').click(function(){
	
	          var $this = $(this), filterValue = $this.attr('data-filter');
	
						$container.isotope({ 
							filter: filterValue,
							animationOptions: { 
									duration: 750, 
									easing: 'linear', 
									queue: false, 
							}                
	      });             
	
	      // don't proceed if already selected 
	
	      if ( $this.hasClass('selected') ) { 
	        return false; 
	      }
	
	      var filter_wrapper = $this.closest('.filter-wrapper');
	      filter_wrapper.find('.selected').removeClass('selected');
	      $this.addClass('selected');
	
	        return false;
	      }); 
	}
}

// 显示数据函数
// function showData(page, offset, sel_tag){
// 	
// }
// 
// 显示页面和计算页吗

// 点击事件