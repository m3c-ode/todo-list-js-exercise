/**
 * @typedef {Object} Task
 * @prop {string} description
 * @prop {string} title
 * @prop {boolean} complete
 */
// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = function(title, description) {
  /**
   * @type {Task}
   */
  const task = {
    description,
    title,
    complete: false,
    completeTask: function() {
      this.complete = true;
    },
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
  return task;
};


// // DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"); // task 0
const task2 = newTask("Do Laundry", "😨"); // task 1
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logState(); // Clean Cat Litter has been completed

console.log(tasks);
