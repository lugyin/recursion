// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var yolo = function(className){
  
 var ans = [];
  
 function callback (node) {	
 	var arr = [];
 	nodeHolder = node.className;
 	if(nodeHolder) {
 		arr = nodeHolder.split(' ');
 		for(var i = 0; i<arr.length; i++) {
 			if(arr[i] === className) {
 				ans.push(node);
 				break;
 			}
 		}
 	}
 	
 }

 function test(node, callback) {
 	callback(node);
 	node = node.firstChild;
 	while(node) {
 		test(node, callback);
 		node = node.nextSibling;
 	}
 }

 test(document.body, callback);
 return ans;

};
