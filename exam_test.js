function Task(description, cost) {

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
           
            class StatusTask extends Task {
              constructor(description, cost, status) {
                  super(description, cost);

                  return {
                    id: this.id,
                    description: description,
                    cost: cost,
                    status: status

                  }
                  
              }
          
              m
              }  
           
      


          class TasksController {
            #statustasks=[];

            
            get statustasks () {
            return [...this.#statustasks];
          }

            addTask(...newTasks) {
  
             
             doubleCheck: for(let i = 0; i < newTasks.length; i++) {
                for(let j = 0; j<this.#statustasks.length; j++) {
                  if(this.#statustasks[j].id === newTasks[i].id) {
                    continue doubleCheck;
                  }
              }

             this.#statustasks.push(newTasks[i]);

            }
              
          }

          deleteTask() {
            let index = this.#statustasks.indexOf(...this.#statustasks);

            if(index !== -1) {
              this.#statustasks.splice(index, 1);
            }
            
         }

         getTasks () {
          return [...this.#statustasks];
        }
 
          getTasksSortedBy(sortBy) {
          return [...this.#statustasks].sort(function(a, b) {
          if (sortBy === 'description') {
          const description1 = a.description.toLowerCase();
          const description2 = b.description.toLowerCase();
          if (description1 > description2) return 1;
          if (description1 < description2) return -1;
          } else if (sortBy === 'cost') {
          return a.cost - b.cost;
          } else if (sortBy === "status") {
            const status1 = a.status.toLowerCase();
            const status2 = b.status.toLowerCase();
            if (status1 > status2) return 1;
            if (status1 < status2) return -1;  
          }
          return 0;
          });

          }

          getFilteredTasks = function() {
            const filteredTasks = [];
              
          }

        }
      

      
      
      let statustask1 = new StatusTask("Fitness", 200, "done");
      let statustask2 = new StatusTask("Sport", 300, "not done"); 
      console.log(statustask1.description); 
      console.log(statustask2.description);
      let tasksController = new TasksController;
      tasksController.addTask(statustask1);
      tasksController.addTask(statustask2);
      console.log("----------------------------");
      console.log(tasksController.statustasks[0].status); 
      console.log(tasksController.statustasks[1]);
      tasksController.deleteTask([0]);
      console.log(tasksController.statustasks);
      console.log("----------------------------");
      tasksController.getTasks();
      console.log(tasksController.statustasks[0].description); 
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