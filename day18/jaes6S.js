//Ess variable
// var a =10;//Global scope as well local scope

//es6 variable
//let,const;
//block Scope
// here b is  a block variable its  accesibiliyt inside the block 
// {
//     let b=20;
// }
// // console.log(b); not access

// const sessions=120;
// console.log(sessions);
// sessions++;
// console.log(sessions);

//Arrow function
// const sayhii=()=>console.log("this is an arroy functiom");
// sayhii();
//   const add=(x,y)=>x+y;
//   let result =add(5,10);
//   console.log(result*100);








  //////////////////////////////////////////////////////////////////////////////////////////////////////////

// //   Destructuring
// var arr=[1,2,3,4.5,6,7,8,9,10];
// // let x=a[0];
// // let y=a[1];
// // let z=a[2];

// let [a,b,,,,d]=arr;//,,,, for next variable
// console.log(a);
// console.log(b);
// console.log(d);

// let  person={
//     name:"sachin",
//     age:30,
//     mobile:2233455,
//     email:"ajsjdjkdslsls"
// };
// let{name,email,age}=person;
// console.log(name);
// console.log(email);

////////////////////////////////////////////////////////////////////////////////////////////////
// //Restructing
// let name="pankaj";
// let designation="trainer"
// let city="jaipur"
// let distance=135;
// function dis(){
//     return 5+6;
// }
// let obj={name,designation,city,distance,dis};
// console.log(obj);
// console.log(obj.dis());

//////////////////////////////////////////////////////////////////////////////////////////////
//Rest  operator

// function display(...data){
//     console.log(data);

// // }
// function display(x,y,...data){
//     console.log(data);
//     console.log(x);
//     console.log(y);

// }
// display(1,2,3,4,5,6);



// let arr1=[2,3,4,5,6,7,8];
// let arr2=[5,7,3,...arr1];
// console.log(arr2);
///////////////////////////////////////////////////////////////////////////////////////////////////////////


//template string
// let name1="pankaj";
// let name2="kapoor"

// // console.log("welcome"+" "+name1+" "+name2);
// console.log(`welcome ${name1} ${name2}`);
////////////////////////////////////////////////////////////////////////
//class


class Traning{
    constructor(trainingName,trainingDuration,trainingStatus){
        this.trainingName=trainigName;
        
    }

}






