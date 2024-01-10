class Car {

constructor(rung,naam,model){
this.color=rung
this.name=naam
this.model=model
}

showInfo(){
    alert(`${this.name} ${this.model} ${this.color}`)
}

}

let obj = new Car("yellow","BMW","2022")
obj.showInfo()