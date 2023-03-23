namespace RandomPoem {

    let subject: string [] = ['Harry', 'Hermine', 'Ron', 'Hagrid', 'Snape', 'Dumbledore'];
    let praedicat: string [] = ['braut', 'liebt', 'studiert', 'hasst', 'zaubert', 'zerstört'];
    let object: string [] = ['Zaubertränke', 'den Grimm', 'Lupin', 'Hogwarts', 'die Karte des Rumtreibers', 'Dementoren'];

    console.log(subject, praedicat,object)
    
    let SubjectTotal : number = 5

    for (let index = 0; index <= SubjectTotal; index--) {
        console.log ("Hallo" + index)
    }
}