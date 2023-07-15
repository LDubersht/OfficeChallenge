//write your code here to make the tests pass
// set speed(speed) {
//     if (speed < 0) {
//         return console.log("Speed must be positive")
//     }
//     this._speed = speed
// }

class Document {
    constructor(EmployeeName) {
        this._EmployeeName = EmployeeName
    }

    get EmployeeName(){
        return this._EmployeeName
    }
   
}

class Employee {
    constructor(name){
        this._Name = name
    }

    get name(){
        return this._Name
    }

    work(office){
        for (let i = 0; i < 10; i++) {
            let doc = new Document(this.name)
            office.addDocument(doc)
        }
    }

}

class Manager{
    constructor(name){
        this._Name = name
        this._employees = []

    }

    get name(){
        return this._Name
    }

    get employees(){
        return this._employees
    }

    hireEmployee (employeeName) {
        const employee = new Employee(employeeName)
        this._employees.push(employee)
    }

    askEmployeesToWork(office){
        this._employees.forEach(element => {
            element.work(office)
        })
    }
}

class Cleaner{
    constructor(name) {
        this._Name = name
    }

    get name() {
        return this._Name
    }

    clean(){
        console.log("Clean")
    }
}

class Office{
    constructor(){
        this._documents = []
        this._managers = []
        this._cleaners = []
    }

    get documents() {
        return this._documents
    }

    get managers() {
        return this._managers
    }
    
    get cleaners() {
        return this._cleaners
    }

    addDocument(document) {
        this._documents.push(document)
    }

    hireCleaner(cleanerName){
        const cleaner = new Cleaner(cleanerName)
        this._cleaners.push(cleaner)
    }

    hireManager(managerName){
        const manager = new Manager(managerName)
        this._managers.push(manager)
    }

    startWorkDay(){
        this._managers.forEach(element => {
            element.askEmployeesToWork(this)
        });

        this._cleaners.forEach(element => {
            element.clearn()
        });
    }
}
    

