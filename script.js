
const container = document.querySelector("#grid-container");


    for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.style.width = "10px";
    div.style.height = "10px";
    div.style.border = "2px solid black";
    container.appendChild(div);

    div.onmousemove = (event) => {
        div.style.backgroundColor = "red";
    };
    }





