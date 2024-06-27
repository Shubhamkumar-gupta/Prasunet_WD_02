let startTime;
let pausedTime = 0;
let running = false;
let interval;
let lapCount = 1;

function startPause() {
    if (running) {
        clearInterval(interval);
        pausedTime = Date.now() - startTime;
        running = false;
        document.getElementById("display").classList.remove("running");
        document.querySelector("button:nth-of-type(1)").textContent = "Resume";
    } else {
        startTime = Date.now() - pausedTime;
        interval = setInterval(updateDisplay, 10);
        running = true;
        document.getElementById("display").classList.add("running");
        document.querySelector("button:nth-of-type(1)").textContent = "Pause";
    }
}

function updateDisplay() {
    let elapsedTime = Date.now() - startTime;
    let formattedTime = new Date(elapsedTime).toISOString().substr(11, 11);
    document.getElementById("display").textContent = formattedTime;
}

function lap() {
    if (running) {
        let currentTime = document.getElementById("display").textContent;
        let lapItem = document.createElement("li");
        lapItem.textContent = `Lap ${lapCount}: ${currentTime}`;
        document.getElementById("laps").appendChild(lapItem);
        lapCount++;
    }
}

function reset() {
    clearInterval(interval);
    running = false;
    startTime = null;
    pausedTime = 0;
    lapCount = 1;
    document.getElementById("display").textContent = "00:00:00.000";
    document.getElementById("laps").innerHTML = "";
    document.querySelector("button:nth-of-type(1)").textContent = "Start";
    document.getElementById("display").classList.remove("running");
}
