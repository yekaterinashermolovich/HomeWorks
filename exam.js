function Task (description, cost) {

  if (!new.target) {
    return new Task(description, cost);
  } 

        this.id="id" + " " +  Math.random().toString().slice();
        this.description = description;
        this.cost = cost; 
        this.completed = false;

      id = function() {
        return this.id; 
      } 
 

       
      description = function() {
        return this.description;
      }  

          

      cost = function() {
        return this.cost;
      }  


     }


      



const task = Task('text', 100);
console.log(task.id); 
console.log(task.description);
console.log(task.cost);
 
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
        income:1000
      }


      class TasksController extends Task {
        constructor(description, cost) {
          super(description, cost);
          
      }
          tasks= []; 

           addTask(task) {

            if(this.tasks.length === 0) {
                this.tasks.push(task)
            }
            for(let i = 0; i < this.tasks.length; i++) {
                if(task.id === this.tasks[i].id) {
                    return undefined
                }
            }
            this.tasks.push(task)
        }

        deleteTask(task) {
          let arrayTasks = this.tasks;
          this.tasks = [];
          for (let i=0; i<arrayTasks.length; i++) {
            if(task.id !== arrayTasks[i].id) {
              this.tasks.push(arrayTasks[i]);

            }
          }
        }

        getTasks () {
          return this.tasks;
        }

        getTasksSortedBy(sortBy) {
          return [...this.tasks].sort(function(a, b) {
          if (sortBy === 'description') {
          const description1 = a.description.toLowerCase();
          const description2 = b.description.toLowerCase();
          if (description1 > description2) return 1;
          if (description1 < description2) return -1;
          } else if (sortBy === 'cost') {
          return a.cost - b.cost;
          }
          return 0;
          });

          }

        getFilteredTasks(filtered) {
          this.task =[];
        }


      }


      class BudgetController {
        #tasksController;
        #budget;
      
        constructor(initialBalance = 0) {
          this.#TasksController = new TasksController();
          this.#budget = {
            balance: initialBalance,
            income: 0,
            expenses: 0,
          };
        }

        get balance() {
          return this.#budget.balance;
        }

        get income() {
          return this.#budget.income;
        }

        get expenses() {
          return this.#budget.expenses;
        }

        CalculateBalance() {
        this.#budget.balance + this.#budget.income - this.#budget.expenses;
        }

        getTasks () {
        this.#tasksController.getTasks();

        }

        addTasks(...tasks) {
        this.#tasksController.addTasks(...tasks);
     
       }

       deleteTask () {

       }

       doneTask() {

      }
      unDoneTask() {

      }
      }


      const budgetController = new BudgetController(1000);
  
      const task1 = new IncomeTask('1', 'Salary', 500);
      const task2 = new ExpenseTask('2', 'Groceries', 50);
  
      budgetController.addTasks(task1, task2);
  
      console.log('Initial Balance:', budgetController.balance);
      console.log('Tasks:', budgetController.getTasks());

      /* let task1 = Task ("Fitness", 200);
      let task2 = Task ("Sport", 300);
      let task3 = Task ("Shop", 100);
      let tasksController = new TasksController;
      tasksController.addTask(task1);
      tasksController.addTask(task2);
      tasksController.addTask(task3);
      console.log(tasksController.tasks);
      console.log("----------------------------")
      tasksController.deleteTask(task1);
      console.log(tasksController.tasks);
      console.log("----------------------------")
      tasksController.getTasksSortedBy(sortBy);
      console.log(getTasksSortedBy());
      
 */
 
    


/* const incometask = new IncomeTask("text2", 200);
console.log(incometask.id); 
console.log(incometask.description);
console.log(incometask.cost);

console.log("----------------------------")

console.log(budget);
console.log(budget.income);
incometask.makeDone(budget);
console.log(budget.income);
incometask.makeUnDone(budget);
console.log(budget.income);
console.log(budget);




  */
