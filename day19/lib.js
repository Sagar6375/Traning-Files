export let message="this is module concept";
export let display=(name)=>{
    return `${name},welcome to ingenuity gamoing!`
};
export class Employe{
    constructor(name,id,designation){
        this.name=name;
        this.id=id;
        this.designation=designation;
    }
    dispDetails(){
        console.log(`${this.name}\nemploye ID:${this.id}`)
    }
}


