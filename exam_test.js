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
            income:1000,
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
            #tasks=[];

            
            get tasks () {
            return this.#tasks;
          }

            addTask(...tasks) {
  
              if(tasks.length === 0) {
                  tasks.push(task)
              }
              for(let i = 0; i < tasks.length; i++) {
                  if(this.task.id !== tasks[i].id) {
                    tasks.push(task);
                  }
              }

              for (const task of tasks) {
                if(this.task.id !== tasks[i].id) {
                  tasks.push(task);
              }
              
          }
  
        }
      }

        
      let task1 = Task ("Fitness", 200);
      let task2 = Task ("Sport", 300);
      console.log(task1.id);
      let tasksController = new TasksController;
      tasksController.addTask(task1.description);
      tasksController.addTask(task2);
      console.log(tasksController.tasks[0]); 
   

          
        
    

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