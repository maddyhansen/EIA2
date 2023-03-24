namespace RandomPoem {

    let subject: string[] = ['Harry', 'Hermine', 'Ron', 'Hagrid', 'Snape', 'Dumbledore'];
    let praedicat: string[] = ['braut', 'liebt', 'studiert', 'hasst', 'zaubert', 'zerstört'];
    let object: string[] = ['Zaubertränke', 'den Grimm', 'Lupin', 'Hogwarts', 'die Karte des Rumtreibers', 'Dementoren'];
    //console.log(subject, praedicat, object)

    function getVerse(_subject: string[], _praedicat: string[], _object: string[]): string {
        //console.log("Alohomora");

        let words: string = "";
        let result: number = Math.floor(Math.random() * _subject.length);
        words = words + _subject[result] + " ";
        _subject.splice(result, 1);

        let results: number = Math.floor(Math.random() * _praedicat.length);
        words = words + _praedicat[results] + " ";
        _praedicat.splice(results, 1);

        let resultsi: number = Math.floor(Math.random() * _object.length);
        words = words + _object[resultsi] + " ";
        _object.splice(resultsi, 1);
        console.log(words + "");
        return words;
    }



    for (let index = 6; index > 0; index--) {
        // console.log("Word" + index)
        getVerse(subject, praedicat, object);
    }

}