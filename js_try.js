function load(){
	number_test();
}
function number_test(){
	//js使用“二进制浮点数表示法”，可以精确的表示1/2，1/8,1/1024这种分数，但是对于其他
	//的分数就不行，比如说1/10；实际上可以看到0.3-0.2结果却是等于0.0999999...的
	var x = .3-.2;
	var y=.2-.1;
	console.log(x);
	console.log(y);
	console.log(x==y);
}
function test(){
	var points = [
		{x:0,y:0},
		{x:1,y:1}
	];
	points.dist = function(){
		return 1;//把数组理解成为一个对象就可以理解了
	}
	console.log(points);
}
