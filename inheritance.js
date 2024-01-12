class School{

registration(){
console.log("Registration Form");
}

fees(){
    console.log("Fees issue");
}
exam(){
    console.log("Exam on time");
}
}

class Boarding extends School{

    registration(){
super.registration()
        console.log("heelo");
    }

}


let obj1 = new Boarding()
obj1.fees()
obj1.registration()
obj1.exam();
obj1.registration()