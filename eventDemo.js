import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log('hello world', name);
}

function goodByeHandler(name) {
  console.log('Goodbye world', name);
}

// Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodByeHandler);

// Emit events
myEmitter.emit('greet', 'nipun');
myEmitter.emit('goodbye', 'nipun');

// Error handling
myEmitter.on('error', (err) => {
  console.log('An Error Occured', err);
});

// stimulate error
myEmitter.emit('error', new Error('something went wrong'));
