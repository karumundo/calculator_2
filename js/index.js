class Calculator{
    constructor(number1, number2) {
        this.number1=number1;
        this.number2= number2;
    };

    sum = ()=>{
        let result = this.number1+this.number2;
        return result
    };

    sub = ()=>{
        let result = this.number1-this.number2;
        return result
    };

    div = ()=>{
        let result = this.number1 / this.number2;
        return result
    };

    mult = ()=>{
        let result = this.number1 * this.number2;
        return result
    };

    percent = ()=>{
        let result = (this.number1 * this.number2)/ 100;
        return result
    }

};

calc1= new Calculator(7, 2);
console.log(calc1.sum());
console.log(calc1.sub());
console.log(calc1.div());
console.log(calc1.mult());
console.log(calc1.percent())