function Task(description, cost) {

    if (!new.target) {
        throw new Error('You can\'t call Task without new');
    }

    if (new.target === Task) {
        throw new Error('You can\'t create instance of Task');
    }

    const _id = "id" + " " + Math.random().toString().slice();
    const _description = description;
    const _cost = cost;

    Object.defineProperty(this, 'id', {
        get() {
            return _id;
        }
    })

    Object.defineProperty(this, 'description', {
        get() {
            return _description;
        }
    })

    Object.defineProperty(this, 'cost', {
        get() {
            return _cost;
        }
    })
}

/* const task = Task("",'text', 100);
console.log(task.id); 
console.log(task.description);
console.log(task.cost);
*/
console.log("----------------------------")

class IncomeTask extends Task {
    constructor(description, cost) {
        super(description, cost);
    }

    makeDone(budget) {
        budget.income += this.cost;
    }

    makeUnDone(budget) {
        budget.income -= this.cost;
    }
}


const budget = {
    income: 1000,
    expenses: 300

}

class ExpenseTask extends Task {
    constructor(description, cost) {
        super(description, cost);
    }

    makeDone(budget) {
        budget.expenses += this.cost;
    }

    makeUnDone(budget) {
        budget.expenses -= this.cost;
    }
}

class TasksController {
    #tasks = [];
    #completedTasks = [];

    addTask(...newTasks) {
        doubleCheck: for (let i = 0; i < newTasks.length; i++) {
            for (let j = 0; j < this.#tasks.length; j++) {
                if (this.#tasks[j].id === newTasks[i].id) {
                    continue doubleCheck;
                }
            }

            this.#tasks.push(newTasks[i]);
        }
    }

    deleteTask() {
        const index = this.#tasks.indexOf(this.#tasks);

        if (index !== -1) {
            this.#tasks.splice(index, 1);
        }
    }

    getTasks() {
        return [...this.#tasks];
    }

    #isTaskCompleted(task) {
        return this.#completedTasks.indexOf(task) !== -1;
    }

    #isTaskExist(task) {
        return this.#tasks.indexOf(task) !== -1;
    }

    doneTask(task) {
        const isTaskAlreadyExists = this.#isTaskExist(task);

        if (!isTaskAlreadyExists) return;

        const isTaskAlreadyCompleted = this.#isTaskCompleted(task);

        if (!isTaskAlreadyCompleted) this.#completedTasks.push(task);
    }

    undoneTask(task) {
        const isTaskAlreadyExists = this.#isTaskExist(task);

        if (!isTaskAlreadyExists) return;
        
        const isTaskAlreadyCompleted = this.#isTaskCompleted(task);

        if (!isTaskAlreadyCompleted) return;

        const index = this.#completedTasks.indexOf(task);

        this.#completedTasks.splice(index, 1);
    }

    getTasksSortedBy(sortBy) {
        const self = this;

        return [...this.#tasks].sort(function (a, b) {

            if (sortBy === 'description') {
                const description1 = a.description.toLowerCase();
                const description2 = b.description.toLowerCase();

                if (description1 > description2) return 1;
                if (description1 < description2) return -1;

            } else if (sortBy === 'cost') {
                return a.cost - b.cost;
            } else if (sortBy === "status") {
                // const isACompleted = Number(self.#completedTasks.indexOf(a) !== -1); // Number(true) === 1, Number(false) === 0
                // const isBCompleted = Number(self.#completedTasks.indexOf(b) !== -1); // Number(true) === 1, Number(false) === 0

                // return isACompleted - isBCompleted;

                const isACompleted = self.#isTaskCompleted(a); // true, false
                const isBCompleted = self.#isTaskCompleted(b); // true, false

                if (isACompleted === isBCompleted) return 0;

                if (isACompleted/* && !isBCompleted*/) return 1;
                if (/*!isACompleted && */isBCompleted) return -1;
            }

            return 0;
        });

    }

}




const task1 = new IncomeTask("Fitness", 200);
const task2 = new IncomeTask("Sport", 300);

console.log(task1.description);
console.log(task2.description);

const tasksController = new TasksController;

tasksController.addTask(task1);
tasksController.addTask(task2);

console.log("----------------------------");
console.log(tasksController.getTasks()[0]);
console.log(tasksController.getTasks()[1]);

tasksController.deleteTask([0]);

console.log(tasksController.getTasks());
console.log("----------------------------");

tasksController.getTasks();

console.log(tasksController.getTasks()[0].description);

console.log("----------------------------");



for (const task of tasksController.getTasksSortedBy("status")) {
    console.log(task.description);
}




/*  const incometask = new IncomeTask("Fitness", 200);
 console.log(incometask.id); 
 console.log(incometask.description);
 console.log(incometask.cost);
 
 console.log("----------------------------")
 
 
 const expensetask = new ExpenseTask("Sport", 500);
 console.log(expensetask.id); 
 console.log(expensetask.description);
 console.log(expensetask.cost);
 
 console.log("----------------------------")
 
 console.log(budget);
 console.log(budget.income);
 incometask.makeDone(budget);
 console.log(budget.income);
 incometask.makeUnDone(budget);
 console.log(budget.income); 
 
 console.log("----------------------------")
 
 console.log(budget.expenses);
 expensetask.makeDone(budget);
 console.log(budget.expenses);
 expensetask.makeUnDone(budget);
 console.log(budget.expenses);
 
 
*/
