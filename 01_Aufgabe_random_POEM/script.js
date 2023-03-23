var RandomPoem;
(function (RandomPoem) {
    let subject = ['Harry', 'Hermine', 'Ron', 'Hagrid', 'Snape', 'Dumbledore'];
    let praedicat = ['braut', 'liebt', 'studiert', 'hasst', 'zaubert', 'zerstört'];
    let object = ['Zaubertränke', 'den Grimm', 'Lupin', 'Hogwarts', 'die Karte des Rumtreibers', 'Dementoren'];
    console.log(subject, praedicat, object);
    let SubjectTotal = 5;
    for (let index = 0; index <= SubjectTotal; index--) {
        console.log("Hallo" + index);
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=script.js.map