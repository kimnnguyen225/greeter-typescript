class InputTextValue {
  constructor(public msg) {
  }
}

var texts = new InputTextValue('Hello, world, this is Typescript');

console.log(texts)
$(document).ready(function() {
  $('#text').val(texts.msg);
});
