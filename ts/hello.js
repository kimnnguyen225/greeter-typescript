var InputTextValue = (function () {
    function InputTextValue(msg) {
        this.msg = msg;
    }
    return InputTextValue;
}());
var texts = new InputTextValue('Hello, world, this is Typescript');
console.log(texts);
$(document).ready(function () {
    $('#text').val(texts.msg);
});
