class View {

    show() {
        print();
        wait(0.5);
        console.clear();
    }

    print(){

        let fullArr = "";
        for (let i=0; i<arr.length; i++){
            for (let f=0; f<arr[i].length; f++){
                fullArr = fullArr + (arr[i][f]);

            }
            console.log(fullArr);
            fullArr = "";
        }
    }

     wait (sec){
        let counter = sec * 1000000000;
        for (let i=0; i<counter; i++){

        }
    }


}