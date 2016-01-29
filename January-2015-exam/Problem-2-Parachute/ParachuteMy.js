function solve (input) {
	var jumperPos = getPosition(input);
	var isExit=false;
	for (var i = jumperPos.row+1; i < input.length; i++) {
		var line = input[i];
		var wind = findWind(line);
		jumperPos.row++;
		jumperPos.col+=wind;
		var sign = line[jumperPos.col];
		switch (sign) {
			case '_':
				console.log('Landed on the ground like a boss!');
				isExit=true;
				break;
			case '~':
				console.log('Drowned in the water like a cat!');
				isExit=true;
				break;
			case'/':
				console.log('Got smacked on the rock like a dog!');
				isExit=true;
				break;
			case'\\':
				console.log('Got smacked on the rock like a dog!');
				isExit=true;
				break;
			case'|':
				console.log('Got smacked on the rock like a dog!');
				isExit=true;
				break;
		}
		if(isExit){
			break;
		}
	}
	console.log(jumperPos.row+' '+ jumperPos.col);

	function findWind(text){
		var lefts, right;
		lefts= text.match(/</g) ? (text.match(/</g)).length :0;
		right= text.match(/>/g) ? (text.match(/>/g)).length :0;
		return right-lefts;
	}
	function getPosition(map){
		for (var row = 0; row < map.length; row++) {
			for (var col = 0; col < map[row].length; col++) {
				var obj = map[row][col];
				if(obj==='o'){
					return {
						row:row,
						col:col
					}
				}
			}
		}
	}
}

//solve([
//	"-------------o-<<--------",
//	"-------->>>>>------------",
//	"---------------->-<---<--",
//	"------<<<<<-------/\\--<--",
//	"--------------<--/-<\\----",
//	">>--------/\\----/<-<-\\---",
//	"---------/<-\\--/------\\--",
//	"<-------/----\\/--------\\-",
//	"\\------/--------------<-\\",
//	"-\\___~/------<-----------"
//]);

solve([
	'>>>>>>>>>>>o<<<<<<<<<<<<<',
	'----------~~~------------',
	'--------~/~~~\~----------',
	'-------~/~---~\~---------',
	'------~/~-----~\~--------',
	'-----~/~-------~\~-------',
	'----~/~---------~\~------',
	'---~/~-----------~\~-----',
	'--~/~-------------~\~----',
	'-~/~---------------~\~---'
]);
