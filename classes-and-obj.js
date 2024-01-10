class TrainForm {

    //function in class
    registerForm() {
        alert (this.name +" "+ this.lname +" "+"Registeration complete")
    }
    //function
    cancelForm() {
        alert(this.name +" "+ this.lname +" " + " your form has been Cancel Succesfully")
    }
    //function method is use for colllect information
    info(firstname,lastname) {
        this.name = firstname
        this.lname=lastname
    }

}
let rohaan = new TrainForm();
rohaan.info("Rohaan","Shaikh")
rohaan.registerForm()
rohaan.cancelForm();