function student(name,age,std){
    ((this.name=name),(this.age=age),(this.std=std));
}

const student1 = new student ("ankit","20","12"); 

console.log(student1);

const student2 = new student ("bob","22","11"); 

console.log(student2);
