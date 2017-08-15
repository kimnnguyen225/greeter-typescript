class Friend {
    firstName: string;
    lastName: string;
    phone: string;
    age: number;
    bestFriendsForever: boolean;
    constructor(fn: string, ln: string, p: string, a: number, bff: boolean) {
        this.firstName = fn;
        this.lastName =  ln;
        this.phone = p;
        this.age = a;
        this.bestFriendsForever = bff;
    }
    clog() {
        console.log('Full name: ' + this.firstName + ' ' + this.lastName);
        console.log('Phone number is ' + this.phone + ' and ' + this.age + ' years old.');
    }
}

let greg = new Friend("Greg", "Doud", "555-1212", 59, true);
let sean = new Friend("Sean", "Blessing", "555-2121", 45, false);
let eric = new Friend("Eric", "Anspach", "555-2121", 29, true);
let phuc = new Friend("Phuc", "Dao", "555-2121", 29, true);
let long = new Friend("Long", "Nguyen", "555-2121", 24, true);
let kim = new Friend("Kim", "Nguyen", "555-2121", 24, true);
let elisha = new Friend("Elisha", "Amos", "555-2121", 35, true);
let friends: Friend[] = [greg, sean, eric, phuc, long, kim, elisha];

for(var idx=0; idx < friends.length; idx++){
  var friend = friends[idx];
  friend.clog();
}
// var myfriend = friend.clog();
// $(document).ready(function(){
// $('#text').val(myfriend);
// });
