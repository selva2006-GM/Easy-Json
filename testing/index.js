const ROW_HEIGHT = 30;
const VISIBLE_ROWS = 15;
const BUFFER = 10;
let data = [];

const container = document.getElementById("container");
const spacer = document.getElementById("spacer");

async function loadJson() {

    const response = await fetch("data.json");
    data = await response.json();

    // Creates the scrollbar
    spacer.style.height = (data.length * ROW_HEIGHT) + "px";

    render();
}

function render() {

    // Remove previously visible rows
    document.querySelectorAll(".row").forEach(row => row.remove());

    const scrollTop = container.scrollTop;

    const firstVisible = Math.floor(scrollTop / ROW_HEIGHT);

    const start = Math.max(0, firstVisible - BUFFER);
    
    const end = Math.min(
        data.length,
        firstVisible + VISIBLE_ROWS + BUFFER
    );

    console.clear();
    console.log("Showing:", start, "to", end - 1);

    for(let i = start; i < end; i++){

        const row = document.createElement("div");

        row.className = "row";

        row.style.top = (i * ROW_HEIGHT) + "px";

        row.textContent =
            `${data[i].id} | ${data[i].name} | Age: ${data[i].age}`;

        spacer.appendChild(row);
    }
}

container.addEventListener("scroll", render);

loadJson();