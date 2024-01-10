class StudentInfo{

constructor(name,lname,marks){
this.name=name
this.lname=lname
this.marks=marks
}
show(){
    alert(`${this.name} ${this.lname} ${this.marks}`)
}

}


let obj = new StudentInfo("Rohaan","Shaikh",800)
obj.show();