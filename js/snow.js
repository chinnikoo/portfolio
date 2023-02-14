let snowContainer = document.getElementById("snow-container");
let snows = Object.values(snowContainer.getElementsByClassName("snow"));

if(snows.length != 0){
    snows.map(snow => {
        let numPosition = Math.round(Math.random() * 100);
        let numDelay = Math.round(Math.random() * 15);

        let snowSize = Math.random() * 1.5;

        snow.style.top = `${numPosition}px`;
        snow.style.animationName = 'snowDrop';
        snow.style.animationDelay = `${numDelay}s`;
        snow.style.opacity = '0';
        snow.style.transform = `scale(${snowSize})`;
    });

    snows.map(snow => {
        let numPosition = Math.round(Math.random() * 1920);
        console.log(numPosition);
        snow.style.left = `${numPosition}px`;
        snow.style.animationName = 'snowDrop';
    });
}