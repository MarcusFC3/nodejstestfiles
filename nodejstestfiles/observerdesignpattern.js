const EventEmitter = require('events'); //Creates Javascript class EventEmitter
const { argv } = require('process');
const celebrity = new EventEmitter();//Creates new instance of class

//Subscribe to celebrity for Observer 1
celebrity.on('race win', function () {
    console.log("Good stuff man! You won!");
});//pass event name into funciton, second argument is listener function/callback function
//Whenever this celebrity wins a race(completes event), the function will be called

//Subscribe to celebrity for Observer 2
celebrity.on('race win', function () {
    console.log("You got lucky this time...");
});//pass event name into funciton, second argument is listener function/callback function
//Whenever this celebrity wins a race(completes event), the function will be called

//how do I trigger that "race win" event?
celebrity.emit('race win');
celebrity.emit('race win')

/*
 *  Event Emitter module can create subjects(celebrity)
 * who emit events('race win') to their observers(celebrity.on)
 * Here's a better example
 * node emits an exit event with a code that we can observe
 */
process.on('exit', (code) => {
    console.log("Process exit event with code: ", code);
});
//We can pass arguments to our callback functions too
celebrity.on('race', (result) => {
    if (result == "win") {
        console.log("Good win man!")
    }
})
celebrity.on('race', (result) => {
    if (result == "loss") {
        console.log("You are trash...")
    }
})
celebrity.emit('race', 'win')
celebrity.emit('race', 'loss')
