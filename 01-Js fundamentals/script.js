const Mark = {
    fullName : 'Mark Miller',
    mass : 78,
    height : 1.69,
    calcBMI : function(){
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}
const John = {
    fullName : 'John Smith',
    mass : 92,
    height : 1.95,
    calcBMI : function(){
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

const MarkBMI = Mark.calcBMI();
const JohnBMI = John.calcBMI();

if(MarkBMI > JohnBMI){
    console.log(`${Mark.fullName}'s BMI (${Mark.BMI}) is higher than ${John.fullName}'s BMI (${John.BMI})`);
}else if(JohnBMI > MarkBMI){
    console.log(`${John.fullName}'s BMI (${John.BMI}) is higher than ${Mark.fullName}'s BMI (${Mark.BMI})`);
}else{
    console.log(`${Mark.fullName} and ${John.fullName} both have same BMI ;) `);
}

