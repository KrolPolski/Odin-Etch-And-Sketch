const container = document.querySelector(".container");
// generate 16 x 16 grid
for (i = 16; i > 0; i--)
{
    const rowDiv = document.createElement('div');
    rowDiv.classList.add("rowDiv");
    //rowDiv.textContent = "hi";
    container.appendChild(rowDiv);
    
        for (j = 16; j > 0; j--)
        {
            const sqDiv = document.createElement('div');
            sqDiv.classList.add("sqDiv");
            rowDiv.appendChild(sqDiv);
            sqDiv.addEventListener('mouseover', function(){
                sqDiv.classList.add("hovered");});
        }
}



