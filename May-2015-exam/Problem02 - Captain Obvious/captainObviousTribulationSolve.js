function solve (input) {
    if(!input[1]){
        console.log('No sentences');
        return;
    }
    var wordCounts = { };
    var words = input[0].toLowerCase().match(/\w+/g);
    var repeated = [];
//counted repeated words
    for(var i = 0; i < words.length; i++){
        wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1;
    }

//filter words with more than two appearance in  text
    for (var i in wordCounts) {
        if (wordCounts[i] > 2){
            repeated.push(i);
        }
    }
    if(repeated.length==0){
        console.log('No words');
        return;
    }
//dinamic regex
    var reg= new RegExp(repeated.join('|'),"g");

//split to sentences
    var second = input[1].match(/[A-Z][^.?!]+((?![.?!]['"]?\s["']?[A-Z][^.?!]).)+[.?!'"]+/g);

//mach with regex
    var isFound = false;
    second.forEach(function(el){
        var matches = el.toLowerCase().match(reg);
        if(matches){
            var unicueMatches = unique(matches);

            if(el.toLowerCase().match(reg).length>1){
                console.log(el.trim());
                isFound=true;
            }
        }
    });

    if(!isFound){
        console.log('No sentences');

    }
    function unique(ary) {
        // concat() with no args is a way to clone an array
        var u = ary.concat().sort();
        for (var i = 1; i < u.length; ) {
            if (u[i-1] === u[i])
                u.splice(i,1);
            else
                i++;
        }
        return u;
    }
}

//
//solve(
//    ["Captain Obvious was walking down the street. As the captain was walking a person came and told him: You are Captain Obvious! He replied: Thank you CAPTAIN OBVIOUS you are the man!",
//        "The captain was walking and he was obvious. He did not know what was going to happen to you in the future. " +
//        "Was he curious? We do not know."]
//
//);
//
solve([
    'Lorem ipsum dolor sit amet, sale errem nam no, dictas scaevola posidonium id per. Cibo rebum eloquentiam in per, est vide suavitate et? Duo eu nostro dolorum eloquentiam, at mei libris prompta expetendis, ius hinc vero fabulas ad. Duo natum putant voluptatum ei. Vix option offendit erroribus no, his no meis menandri, ne sea cibo choro dicam. Mei agam consul electram at, vel te iisque regione! Brute adversarium consequuntur in ius, ius ex essent meliore. Sea no modus omnesque expetenda, vix ludus ceteros id, per ancillae voluptatum definitionem ea? Id vis tota dicam exerci, mea mollis expetenda ei? Vel no tation partiendo, eu nam dolore pertinax adversarium, ea sea ludus atomorum! Vix option suscipiantur concludaturque id. His elit vitae explicari ne. Duo ut nonumy iisque pertinax, ut meis zril mel?',
        'Lorem ipsum dolor sit amet, ut accumsan adipisci nam! Has oratio docendi vulputate ei, ut vis vidit ceteros. Vel eu dolor oblique, ea quot unum vel. Sint convenire at his, tempor constituam est ex. Cibo epicuri ne est, per no convenire erroribus patrioque, has te utamur oblique scaevola! No euismod senserit concludaturque has? Ei legere commodo appellantur duo, assum ponderum eu sea, nulla graece no duo? Et erant eirmod propriae his, qui invenire scripserit efficiantur ut. Integre referrentur mea at. At amet ocurreret qui, cum libris possim praesent ea, velit legere viderer an his? Vim quis solet eirmod cu. Saperet perfecto cum eu, dicant ornatus vix ne. Discere euismod detraxit has ex, sea cibo legere adolescens cu, pro eu alii elit. Ex probatus signiferumque vel? Id vix audiam delectus necessitatibus, quod ocurreret disputationi eos cu. Mea eu animal fabellas sensibus, ut sit paulo torquatos! Oratio forensibus ut ius, sed scaevola torquatos definitionem an. Everti option atomorum cu quo, vix tempor postea tincidunt ea, eu viderer aliquid democritum mel. Sed dicta abhorreant contentiones ne, sed laoreet invenire democritum cu! Per laudem sententiae ea! Nam numquam commune vulputate ex. Ridens verear disputando qui eu, per in debitis accusamus consetetur, et nec hinc nostrum evertitur? Id est iuvaret mediocrem, fastidii pertinax consectetuer sit ei, has quaeque eruditi an? Liber abhorreant argumentum nam te, eos in inimicus mnesarchum.'

])

solve([
    'The words: the and are, are repeated more than three thimes. Look in the second text are there sentences with those words Yup there are no such sentences.'
])