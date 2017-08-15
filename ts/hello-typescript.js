var Message = (function () {
    function Message(message) {
        this.message = message;
        this.fullMessage = message;
    }
    return Message;
}());
function greeter(display) {
    return "Hello, " + display.message;
}
var msgdisplay = new Message('world from Typescript');
// document.body.innerHTML = greeter(msgdisplay);
console.log(greeter(msgdisplay));
$(document).ready(function () {
    $('#text').val(greeter(msgdisplay));
});
