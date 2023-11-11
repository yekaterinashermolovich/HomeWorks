function Task (description, cost) {

  if (!new.target) {
      return new Task(description, cost);
    } 

    
    const _id = "id" + " " +  Math.random().toString().slice(); 
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
            income:1000
          }


          class TasksController {
            constructor() {
            this.tasks= []; 
          }
  
             addTask(task) {
  
              if(this.tasks.length === 0) {
                  this.tasks.push(task)
              }
              for(let i = 0; i < this.tasks.length; i++) {
                  if(this.task.id === this.tasks[i].id) {
                      return undefined
                  }
              }
              this.tasks.push(task)
          }
  
        }

        
      let task1 = Task ("Fitness", 200);
      let task2 = Task ("Sport", 300);
      console.log(task1);
      /* let tasksController = new TasksController;
      tasksController.addTask(task1);
      tasksController.addTask(task2);
      console.log(tasksController.tasks[0]);
   */

          
        
    

       /*  const incometask = new IncomeTask("","text2", 200);
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
        
 */