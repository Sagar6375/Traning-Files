var obj={
    firstname:"Sachin",
    lastname:"yadav",
      fullName:function(){
        return this.firstname+" "+this.lastname;
      }, 
};
console.log(obj.fullName());

// function call


var person1={
    firstname:"sara",
    lastname:"khan",
    
    
}
console.log(obj.fullName.call(person1));

var person={
    fullName:function(city,country){
        return this.firstname+" "+this.lastname+" "+city+" "+country; 
    },
};
var person2={
    firstname:"sara",
    lastname:"khan",

};
console.log(person.fullName.call(person2,"mumbai","india"));








