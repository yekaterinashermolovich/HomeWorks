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

    getCompletedTasks() {
        return [...this.#completedTasks];
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

    getFilteredTasks(filter) {
        return this.#tasks.filter(function (task) {
          if (filter.description) {
            if (!task.description.toLowerCase().includes(filter.description.toLowerCase())) {
              return false;
            }
          }
    
          if (typeof filter.isIncome === 'boolean') {
            if (filter.isIncome && !(task instanceof IncomeTask)) {
              return false;
            }
            if (!filter.isIncome && !(task instanceof ExpenseTask)) {
              return false;
            }
          }
    
          if (typeof filter.isCompleted === 'boolean') {
            if (filter.isCompleted && !task.isCompleted) {
              return false;
            }
            if (!filter.isCompleted && task.isCompleted) {
              return false;
            }
          }
    
          return true;
        });
      }
  
  }
  
  class BudgetController {
      #tasksController;
      #budget;
  
      constructor (balance) {
          this.#tasksController = new TasksController;
          this.#budget = {
              balance: 0,
              income: 0,
              expenses: 0
  
          }
      }
  
      get balance () {
          return this.#budget.balance;
      }
  
      get income () {
          return this.#budget.income;
      }
  
      get expenses () {
          return this.#budget.expenses;
      }
  
      calculateBalance () {
          return this.#budget.balance + this.#budget.income - this.#budget.expenses;
      }
  
      getTasks () {
          return this.#tasksController.getTasks();
      }
  
      addTasks (task) {
          return this.#tasksController.addTasks(...this.#tasks);
      }
  
      deleteTask(task) {
          const index_bc = this.#tasksController.getTasks().indexOf(task);
    
          if (index_bc !== -1) {
              console.log(`Task ${task.id} isn't recognized`)
              return;
          };

          const index_bcct = this.#tasksController.getCompletedTasks().indexOf(task);
          
          if (index_bcct !== -1) {
               task.makeUnDone(this.#budget)  
          }
  
          this.#tasksController.deleteTask(task);
      }
  
      doneTask(task) {
          const index_dt = this.#tasksController.getTasks().indexOf(task);
    
          if (index_dt !== -1) {
              console.log(`Task ${task.id} isn't recognized`)
              return;
          };

          
          
          if (this.#tasksController.isTaskCompleted(task)) {
               console.log("Task is already done");
               return; 
          }
  
          task.makeDone(this.#budget);
      }
      
      unDoneTask(task) {
          const index_ut = this.#tasksController.getTasks().indexOf(task);
    
          if (index_ut !== -1) {
              console.log(`Task ${task.id} isn't recognized`);
              return;
          }
         

          if (!this.#tasksController.isTaskCompleted(task)) {
               console.log("Task has not been done before");
               return; 
          }
  
          task.makeUnDone(this.#budget);
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
  
  /* asksController.deleteTask([0]);
  
  console.log(tasksController.getTasks());
  console.log("----------------------------");
   */
  tasksController.getTasks();
  
  console.log(tasksController.getTasks()[0].description);
  
  console.log("----------------------------");

  tasksController.getFilteredTasks();
  console.log(getFilteredTasks(tasksController, 'description'));
  
  
  /* for (const task of tasksController.getTasksSortedBy("status")) {
    console.log(task.description);
  }

  console.log("-------------------------------");

  const budgetcontroller = new BudgetController;
  budgetcontroller.unDoneTask(task1);
  console.log(tasksController.getCompletedTasks())
   */
  
  
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
    
