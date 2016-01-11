var str = "<ul><li><a href=http://softuni.bg>SoftUni</a></li></ul>";
myFunction(str);

//replace all the tags <a href="…">…</a> with corresponding tags [URL=…]…/URL].
function myFunction(str) {
    var machedText = str.match(/(<a href=)(\w+\S+\.\w+)/); //<a href=http://softuni.bg>
    var site = "[URL href="+machedText[2]+"]"; //take group[2] from  reg =>  http://softuni.bg and concat
    var result = str.replace( /<a href=\w+\S+\.\w+>/g, site);
    result = result.replace(/<\/a>/, "[/URL]");
    console.log(result);
}
