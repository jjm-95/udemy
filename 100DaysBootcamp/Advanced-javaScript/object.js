const job = { 
    title: "developer",
    location: "new york",
    salary: 50000 
    };

console.log(new Date().toISOString());


class Job {
    title;
    constructor(location, salary) {
        title = "developer";
        this.location = location;
        this.salary = salary;
    }
}

const developer = new Job();

const dev = new Job("korea", 3000);

console.log(dev);