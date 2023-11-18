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
            return [...this.#tasks];
          }

            addTask(...newTasks) {
  
             
             doubleCheck: for(let i = 0; i < newTasks.length; i++) {
                for(let j = 0; j<this.#tasks.length; j++) {
                  if(this.#tasks[j].id === newTasks[i].id) {
                    continue doubleCheck;
                  }
              }

             this.#tasks.push(newTasks[i]);

            }
              
          }

          deleteTask() {
            let index = this.#tasks.indexOf(...this.#tasks);

            if(index !== -1) {
              this.#tasks.splice(index, 1);
            }
            
         }

         getTasks () {
          return [...this.#tasks];
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
        }
      

        
      let task1 = Task ("Fitness", 200);
      let task2 = Task ("Sport", 300);
      console.log(task1.id);
      let tasksController = new TasksController;
      tasksController.addTask(task1);
      tasksController.addTask(task2);
      /* console.log(tasksController.tasks[0].description); 
      console.log(tasksController.tasks[1].description);  */
      /* tasksController.deleteTask([0]);
      console.log(tasksController.tasks);
      console.log("----------------------------");
      tasksController.getTasks();
      console.log(tasksController.tasks[0].description); 
      */
      console.log(tasksController.getTasksSortedBy("description").description);

          
        
    

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