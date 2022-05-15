//Generics 
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.Connection = function (connectionString) {
        for (var prop in connectionString) {
            console.log("".concat(prop, ": ").concat(connectionString[prop]));
        }
    };
    return Database;
}());
var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.GetOneRecord = function (data) {
        for (var prop in data) {
            console.log("".concat(prop, " : ").concat(data[prop]));
        }
    };
    DataService.prototype.GetAll = function (data) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var item = data_1[_i];
            console.log(item.Name);
        }
    };
    return DataService;
}());
// 
// let product = new DataService();
// product.GetOneRecord<IProduct>({ Name:"TV", Price:232});
// product.GetAll<IProduct>([{Name:"TV", Price:232},{Name:"TV 2", Price:2132}])
console.log("-----Product------");
var product = new DataService();
product.GetOneRecord({ Name: "TV", Price: 45600 });
product.GetAll([{ Name: "Mobile", Price: 56000.33 }, { Name: "Watch", Price: 3400.33 }]);
console.log("----Employee-----");
var emp = new DataService();
emp.GetOneRecord({ Name: "Raj", LastName: "Kumar", Designation: "Developer" });
emp.GetAll([{ Name: "Tom", LastName: "Hanks", Designation: "Manager" }]);
//Generic Method 
function sum(x, y) {
    return x + y;
}
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.print = function (a, b) {
        return sum(a, b);
    };
    return Demo;
}());
var obj = new Demo();
console.log(obj.print(10, 20));
