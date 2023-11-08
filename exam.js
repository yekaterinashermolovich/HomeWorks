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
 

class IncomeTask extends Task {
    constructor(id, description, cost) {
        super(id, description, cost);
        
    }

   
}