class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monica=new Employee(77,"Monica","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");

let arrayEmployes=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monica,emp_viny,emp_mahi];

console.log("========================step1========================");
arrayEmployes.forEach((employee)=>{
     if(employee.emp_company=="TCS"){
        console.log(`${employee.emp_name}:${employee.emp_company}`);

     }
})

console.log("========================step2========================");

arrayEmployes.forEach((employee)=>{
    if(employee.emp_dept=="Finance"){
       console.log(`${employee.emp_dept}:${employee.emp_name}`);

    }
})
console.log("========================step3========================");

arrayEmployes.forEach((employee)=>{
    if(employee.emp_name.startsWith("R")){
       console.log(`${employee.emp_id},${employee.emp_name},${employee.emp_dept},${employee.emp_salary},,${employee.emp_company}`);

    }
})

console.log("========================step4========================");

arrayEmployes.forEach((employee)=>{
    if(employee.emp_salary>75000){
       console.log(`${employee.emp_name},${employee.emp_salary},,${employee.emp_company}`);

    }
})

console.log("========================step5========================");

arrayEmployes.forEach((employee)=>{
    if(employee.emp_salary>=50000 && employee.emp_dept=="IT"){
       console.log(`${employee.emp_id},${employee.emp_name},,${employee.emp_dept},${employee.emp_salary},,${employee.emp_company}`);

    }
})

console.log("========================step6========================");

arrayEmployes.forEach((employee)=>{
    if(employee.emp_company=="Infy"){
       console.log(`${employee.emp_id},${employee.emp_name},,${employee.emp_dept},${employee.emp_salary},,${employee.emp_company}`);

    }
})