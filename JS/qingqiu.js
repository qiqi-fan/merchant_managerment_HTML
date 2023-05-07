window.onload=function(){
		//alert('123')
		document.getElementsByTagName('a')[0].onclick = function(){
			
			var request = new XMLHttpRequest();
			
		//	var url = this.href;
		var url ="http://localhost:8088"
			var method = 'GET';
			
			request.open(method,url);
			
			request.send(null);
			
			//事件处理函数onreadystatechange
			request.onreadystatechange = function(){
				
				if(request.status == 4){
					alert(request.responceText)
					if(request.status == 200||request.status == 304){
						alert(request.responceText)
					}
				}
			}
			
			return false;
		}
}