//Generics 

interface IOracle 
{
    UserName:string;
    Password:string;
    Database:string;
}

interface IMySql
{
    Host:string;
    User:string;
    Password:string;
    Database:string;
}

interface IMongoDb
{
    Url:string;
}


class Database {
   public Connection<T>(connectionString:T){
       for(var prop in connectionString)
       {
           console.log(`${prop}: ${connectionString[prop]}`);
           
       }
   }

}


//console.log(`---------connectiong with oracle---------------`);

// let oracle = new Database();
// oracle.Connection<IOracle>({UserName:"pritam",Password:"pritam",Database:"EmpDB"});

// console.log(`------------connecting with IMySQL-------------`);

// let mySql = new Database();
// mySql.Connection<IMySql>({Host:"3030",User:"Root",Password:"test",Database:"EmpDB"});

// console.log(`----- Connecting with MongoDb -------`);
// let mongo = new Database();
// mongo.Connection<IMongoDb>({Url: "mongodb://127.0.0.1:27017"});




//

interface IProduct {
    Name:string;
    Price:number;
}


interface IEmployee {
    Name: string;
    LastName:string;
    Designation:string;
}


class DataService
{
    public GetOneRecord<T>(data:T)
    {
        for(var prop in data){
            console.log(`${prop} : ${data[prop]}`);
        }
    }

    public GetAll<T extends IProduct | IEmployee>(data:T[])
    {
        for(var item of data)
        {
         console.log(item.Name);
        }
    }
}

// 
// let product = new DataService();
// product.GetOneRecord<IProduct>({ Name:"TV", Price:232});
// product.GetAll<IProduct>([{Name:"TV", Price:232},{Name:"TV 2", Price:2132}])

console.log(`-----Product------`);
let product = new DataService();
product.GetOneRecord<IProduct>({Name:"TV", Price:45600});
product.GetAll<IProduct>([{Name:"Mobile", Price:56000.33},{Name:"Watch", Price: 3400.33}]);

console.log(`----Employee-----`);
let emp = new DataService();
emp.GetOneRecord<IEmployee>({Name:"Raj", LastName:"Kumar", Designation:"Developer"});
emp.GetAll<IEmployee>([{Name:"Tom", LastName:"Hanks", Designation:"Manager"}]);



//Generic Method 

function sum(x,y)
{
    return x+y;
}
class Demo 
{
    public print<T>(a:T,b:T)
    {
        return sum(a,b);
    }
}

let obj = new Demo();
console.log(obj.print<number>(10,20));


// Generic Class 

class DemoGeneric<T>
{
    constructor(param:T)
    {}

    public Property:T;
    public NonGeneric:string;
    public Method<T>(Param:T)
    {

    }
}

let obj1 = new DemoGeneric<number>(10);
obj1.Property = 13000;
obj1.Method<boolean>(true);
