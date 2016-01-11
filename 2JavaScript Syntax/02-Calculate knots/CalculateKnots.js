function calculateKnot () {
    var km = prompt('Enter number for km');
    var knot = km *  0.539956803455724;
    knot = Math.round(knot * 100) / 100;
    console.log(km +"km = "+knot+" knots");
}
calculateKnot();