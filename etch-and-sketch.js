const container = document.querySelector(".container");

for (i = 16; i > 0; i--)
{
    const rowDiv = document.createElement('div');
    rowDiv.classList.add("rowDiv");
    rowDiv.textContent = "hi";
    container.appendChild(rowDiv);
    
        for (j = 16; j > 0; j--)
        {
            const sqDiv = document.createElement('div');
            sqDiv.classList.add("sqDiv");
            sqDiv.textContent = "ho";
            rowDiv.appendChild(sqDiv);
        }
}
