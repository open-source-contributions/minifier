var colors = {
    first: 'blue',
    second: 'red',
    third: 'yellow',
};

var names = ['foo', 'bar'];

names.forEach(function (name) {
    console.log(name);
    for (var i in colors) {
        console.log(colors[i]);
    }
});
