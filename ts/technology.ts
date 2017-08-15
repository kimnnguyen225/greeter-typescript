function loaded(){
        var tbodyCtrl = document.getElementById('table');

        let technologies: Technology[] = [
            new Technology(1, "Git/GitHub", "med", true),
            new Technology(2, "HTML", "med", true),
            new Technology(3, "CSS", "med", true),
            new Technology(4, "JavaScript", "low", true),
            new Technology(5, "JQuery", "low", true),
            new Technology(6, "Type Script", "low", true)
        ];

        for(let idx=0; idx < technologies.length; idx++){
          let tech = technologies[idx];
          tbodyCtrl.innerHTML += tech.toTableRow();
        }
};

class Technology {
    orderLearned: number;
    nameTechnology: string;
    expertiseLevel: string;
    isCool: boolean;
    constructor(orderLearned: number, nameTechnology: string, expertiseLevel: string, isCool: boolean) {
        this.orderLearned = orderLearned;
        this.nameTechnology =  nameTechnology;
        this.expertiseLevel = expertiseLevel;
        this.isCool = isCool;
    }
    toTableRow(): string {
        const tr = '<tr>';
        const ctr = '</tr>';
        const td = '<td>';
        const ctd = '</td>';
        let tdOrderLearned: string = td + this.orderLearned + td;
        let tdNameTechnology: string = td + this.nameTechnology + td;
        let tdExpertiseLevel: string = td + this.expertiseLevel + td;
        let tdIsCool: string = td + this.isCool + td;
        let trow: string = tr + tdOrderLearned + tdNameTechnology + tdExpertiseLevel + tdIsCool;
        return trow;
    }
}
