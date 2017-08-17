function ready() {
    var tbodyCtrl = document.getElementById('hobbies');
    var hobbies = [
        new Hobby(1, "Learn programming languages", 50, 272.5),
        new Hobby(2, "Eat-out: Panera Bread is always a yum center to dine-in for some fresh salad, sandwich, and soup", 2, 6),
        new Hobby(3, "Read-book: hard-copy or ebooks, give myself more knowledge and push myself to think/analyze life experiences", 100, 0),
        new Hobby(4, "Movie-night: Cobb and AMC are close to my home, every Friday they release good movie", 4, 11),
        new Hobby(5, "Gardening", 28, 0),
    ];
    // let hobbys: Hobby[] = [];
    // let kim = new Hobby("1", "Kim", new Date(), "kim@gmail.com", "student", true, 70000)
    // hobbys.push(kim);
    console.log(hobby);
    for (var idx = 0; idx < hobbies.length; idx++) {
        var hobby = hobbies[idx];
        var trData = '<tr>';
        trData += '<td>' + hobby.order + '</td>';
        trData += '<td>' + hobby.description + '</td>';
        trData += '<td>' + hobby.timePerMonth + '</td>';
        trData += '<td>$' + Number(hobby.dollarSpent.toFixed(1)).toLocaleString() + '</td>';
        trData += '</tr>';
        tbodyCtrl.innerHTML += trData;
    }
}
;
var Hobby = (function () {
    //constructor
    function Hobby(order, description, timePerMonth, dollarSpent) {
        this.order = order;
        this.description = description;
        this.timePerMonth = timePerMonth;
        this.dollarSpent = dollarSpent;
    }
    return Hobby;
}());
