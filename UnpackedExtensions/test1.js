var notifier = require('node-notifier');
notifier.notify({
    time: 5000,
    title: 'My notification',
    message: 'Hello, there!'
});
