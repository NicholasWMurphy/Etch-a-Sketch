const gridSize = 600;
const container = document.querySelector("#grid-container");
container.style.width = `${gridSize}px`;
container.style.height = `${gridSize}px`;



    function createGrid(rows, cols) {
    for (let i = 0; i < rows * cols; i++) {
    const cells = document.createElement("div");
    cells.classList.add("cells");
    cells.style.width = `${gridSize / rows}px`;
    cells.style.height = `${gridSize / cols}px`;
    container.appendChild(cells);

    //generate random colour
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

     
     

    

    //hover effect
    cells.onmouseenter = () => {
        const currentOpacity = cells.style.opacity;
        cells.style.backgroundColor =  getRandomColor();
    if (currentOpacity) {
        cells.style.opacity = Number(currentOpacity) + .1;
    } else {
        cells.style.opacity = .1;
    }
    };

   
    }
    }


 createGrid(16, 16);

         //refreshing canvas when button is pressed
         const btn = document.querySelector("#refresh-button");
         btn.addEventListener("click", promptFunction)
     
     
         function promptFunction () {
             container.innerHTML = '';
             var answer = parseInt(prompt("How many squares per side would you like for the new grid?", ""));
             
                if (answer < 100) {
                createGrid(answer, answer);
                } else {
                    alert("Value should be between 0 - 100, create a new Canvas");
                }
           
                
                
             }
             
       



