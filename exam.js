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
    

    


const incometask = new IncomeTask("text2", 200);
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


 