function loaded() {
    var tbodyCtrl = document.getElementById('table');
    var technologies = [
        new Technology(1, "Git/GitHub", "med", true),
        new Technology(2, "HTML", "med", true),
        new Technology(3, "CSS", "med", true),
        new Technology(4, "JavaScript", "low", true),
        new Technology(5, "JQuery", "low", true),
        new Technology(6, "Type Script", "low", true)
    ];
    for (var idx = 0; idx < technologies.length; idx++) {
        var tech = technologies[idx];
        tbodyCtrl.innerHTML += tech.toTableRow();
    }
}
;
var Technology = (function () {
    function Technology(orderLearned, nameTechnology, expertiseLevel, isCool) {
        this.orderLearned = orderLearned;
        this.nameTechnology = nameTechnology;
        this.expertiseLevel = expertiseLevel;
        this.isCool = isCool;
    }
    Technology.prototype.toTableRow = function () {
        var tr = '<tr>';
        var ctr = '</tr>';
        var td = '<td>';
        var ctd = '</td>';
        var tdOrderLearned = td + this.orderLearned + td;
        var tdNameTechnology = td + this.nameTechnology + td;
        var tdExpertiseLevel = td + this.expertiseLevel + td;
        var tdIsCool = td + this.isCool + td;
        var trow = tr + tdOrderLearned + tdNameTechnology + tdExpertiseLevel + tdIsCool;
        return trow;
    };
    return Technology;
}());
