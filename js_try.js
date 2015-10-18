function load(){
	test();
}
function test(){
	var points = [
		{x:0,y:0},
		{x:1,y:1}
	];
	points.dist = function(){
		return 1;
	}
	console.log(points);
}
