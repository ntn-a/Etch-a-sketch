let loadGrid = (num) =>{
    let container = document.querySelector('.grid');
    for (let i = 0; i < num*(num+1); i++){
        let box = document.createElement('div');
        box.classList.add('blank');
        container.appendChild(box);
    }
}

loadGrid(16);

let grid = document.querySelectorAll('.blank');

grid.forEach((blank) => {
    blank.addEventListener('mouseover', () => {
        blank.classList.add('active');
    });
});
