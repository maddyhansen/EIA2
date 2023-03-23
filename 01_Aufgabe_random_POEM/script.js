"use strict";
var RandomPoem;
(function (RandomPoem) {
    let subject = ['Harry', 'Hermine', 'Ron', 'Hagrid', 'Snape', 'Dumbledore'];
    let praedicat = ['braut', 'liebt', 'studiert', 'hasst', 'zaubert', 'zerstört'];
    let object = ['Zaubertränke', 'den Grimm', 'Lupin', 'Hogwarts', 'die Karte des Rumtreibers', 'Dementoren'];
    //console.log(subject, praedicat, object)
    // let subjectTotal: number = 6;
    // console.log(subjectTotal)
    function getVerse(_subject, _praedicat, _object) {
        //console.log("Alohomora");
        let words = "";
        let result = Math.floor(Math.random() * _subject.length);
        words = words + _subject[result] + " ";
        _subject.splice(result, 1);
        let results = Math.floor(Math.random() * _praedicat.length);
        words = words + _praedicat[results] + " ";
        _praedicat.splice(results, 1);
        let resultsi = Math.floor(Math.random() * _object.length);
        words = words + _object[resultsi] + " ";
        _object.splice(resultsi, 1);
        console.log(words + "");
        return words;
    }
    for (let index = 6; index > 0; index--) {
        // console.log("Word" + index)
        getVerse(subject, praedicat, object);
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=script.js.map