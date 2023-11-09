function Task (description, cost) {

  if (!new.target) {
    return new Task(description, cost);
  } 

        this.id="id" + " " +  Math.random().toString().slice();
        this.description = description;
        this.cost = cost; 

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


      class TasksController {
          tasks= []; 

           addTask(...task) {

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

      }


      let task1 = Task ("Fitness", 200);
      let task2 = Task ("Sport", 300);
      let tasksController = new TasksController;
      tasksController.addTask(task1);
      tasksController.addTask(task2);
      console.log(tasksController.tasks);

    


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