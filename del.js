

// повторить с интервалом 2 секунды
let timerId = setInterval(() => console.log("Hai"), 1000);

// остановить вывод через 5 секунд
setTimeout(() => { clearInterval(timerId); console.log("stop") }, 5000);