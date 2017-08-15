class Message {
  fullMessage: string;
  constructor(public message) {
    this.fullMessage = message;
  }
}

interface Display {
  message:string;
}

function greeter(display:Display) {
    return "Hello, " + display.message;
}

var msgdisplay = new Message ('world from Typescript');
// document.body.innerHTML = greeter(msgdisplay);
console.log(greeter(msgdisplay));
$document.ready(function(){
$('#text').val(greeter(msgdisplay));
});
