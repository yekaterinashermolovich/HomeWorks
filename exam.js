function Task (id, description, cost) {

  if (new.target) {
    throw new TypeError('calling Foo constructor without new is invalid');
  }

        this.id = id; 
        this.description = description;
        this.cost = cost; 

      this.id = function() {
        return this.id = "id" + " " +  Math.random().toString().slice();
      } 
 

        Object.defineProperty(this, 'description', {
        get() {
            return this.description;
        }})


      this.description = function() {
        return this.description;
       }

      

      this.cost = function() {
        return this.cost;
      }  


     }


      



const task = Task('12', 'text', 100);
console.log(task.id); 
console.log(task.description);
console.log(task.cost);
 

class IncomeTask extends Task {
    constructor(id, description, cost) {
        super(id, description, cost);
        
    }

   
}