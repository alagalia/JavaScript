function  solve(input) {
	var reg=/<p>(.+?)<\/p>/g;
	var matches, output = [];
	while (matches = reg.exec(input)) {
		output.push(matches[1]);
	}
	output = output.map(function(match){
		return match.replace(/[^a-z0-9]/g, ' ');
	})

	output = output.map(function(element){
		return convert(element);
	})
	output = output.join('');

	console.log(output);
	function convert(text){
		var result='';
		var add;
		for (var i = 0; i < text.length; i++) {
			var code = text.charCodeAt(i);
			if(code>=48 && code<=57){
				add = text[i];
			} else if (code === 32){
				add = text[i];;
			} else if(code>=110){
					add = String.fromCharCode(code-13);
			} else if(code>=97 && code<110){
					add = String.fromCharCode(code+13);
			}
			result+=add;
		}
		result = result.replace(/\s+/g, ' ');

		return result;
	}

}

solve('<html><head><title></title></head><body><h1>Intro</h1><ul><li>Item01</li><li>Item02</li><li>Item03</li></ul><p>jura qevivat va jrg fyvccrel fabjl</p><div><button>Click me, baby!</button></div><p> pbaqvgvbaf fabj  qpunvaf ner nofbyhgryl rffragvny sbe fnsr unaqyvat nygubhtu fabj punvaf znl ybbx </p><span>This manual is false, do not trust it! The illuminati wrote it down to trick you!</span><p>vagvzvqngvat gur onfvp vqrn vf ernyyl fvzcyr svg gurz bire lbhe gverf qevir sbejneq fybjyl naq gvtugra gurz hc va pbyq jrg</p><p> pbaqvgvbaf guvf vf rnfvre fnvq guna qbar ohg vs lbh chg ba lbhe gverf</p></body>');
//solve('<html><head><title></title></head><body><h1>hello</h1><p>znahny!@#%&&&&****</p><div><button>dsad</button></div><p>grkg^^^^%%%)))([]12</p></body></html>');