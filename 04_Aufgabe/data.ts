namespace datas {

    interface formular {
        name: string;
        date: number;
        ToDo: string;
        comment: string;
        workin: string;
    }

    interface Data {
        [category: string]: formular[];
    }


    let data: Data {
        ToDo1: [
            {name: "Linda"},
            {date: "12.01.2001"},
            {ToDo: "Wäsche waschen"},
            {comment: "mit viel Weichspüler"},
            {workin: "Hannes"},
        ],

}



}


