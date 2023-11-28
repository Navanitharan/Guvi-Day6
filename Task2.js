class person{
    constructor(Name,DOB, Gender, Age){
        this.Name=Name;
        this.DOB=DOB;
        this.Gender=Gender;
        this.Age=Age;
    }
    getPerson(person){
        let Person = person.filter((persond)=>persond.Age>=18);
        return Person.map((personDetails)=>personDetails.Name)
    }
}

let p1=new person("Navanitharan","26-05-2002","Male",21);
let p2=new person("Mahesh Kumar","22-05-2002","Male",16);
let persons=[p1,p2];
console.log(p1.getPerson(persons));