function callback() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    setTimeout(callback, 1000);
    console.log(time);
}

callback();
