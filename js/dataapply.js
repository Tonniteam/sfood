// 当前页数
var page = 1;
// 每页显示的数量
var offset = 15;
// 选择标签
var sel_tag = 'all';

// 请求数据实例
window.onload = function(){
	applyData();
	
}


// 请求数据函数
function applyData(page, offset, sel_tag){
	$.ajax({
		url:'../json/allimg.json',
		async:true,
		success:function(res){
			//获取一个数组
			//console.log(res);
			//64
			//alert(res.length);
			//显示数据
			//alert(res[0].thai);
			
			//----------请求显示-----------------
			
			
		}
	})
}

// 显示数据函数
// function showData(page, offset, sel_tag){
// 	
// }
// 
// 显示页面和计算页吗

// 点击事件