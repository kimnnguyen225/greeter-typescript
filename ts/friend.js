var Friend = (function () {
    function Friend(fn, ln, p, a, bff) {
        this.firstName = fn;
        this.lastName = ln;
        this.phone = p;
        this.age = a;
        this.bestFriendsForever = bff;
    }
    Friend.prototype.clog = function () {
        console.log('Full name: ' + this.firstName + ' ' + this.lastName);
        console.log('Phone number is ' + this.phone + ' and ' + this.age + ' years old.');
    };
    return Friend;
}());
var greg = new Friend("Greg", "Doud", "555-1212", 59, true);
var sean = new Friend("Sean", "Blessing", "555-2121", 45, false);
var eric = new Friend("Eric", "Anspach", "555-2121", 29, true);
var phuc = new Friend("Phuc", "Dao", "555-2121", 29, true);
var long = new Friend("Long", "Nguyen", "555-2121", 24, true);
var kim = new Friend("Kim", "Nguyen", "555-2121", 24, true);
var elisha = new Friend("Elisha", "Amos", "555-2121", 35, true);
var friends = [greg, sean, eric, phuc, long, kim, elisha];
for (var idx = 0; idx < friends.length; idx++) {
    var friend = friends[idx];
    friend.clog();
}
// var myfriend = friend.clog();
// $(document).ready(function(){
// $('#text').val(myfriend);
// });
