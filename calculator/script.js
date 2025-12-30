const button = document.querySelectorAll('button');
const input = document.querySelector('.input-1');

button.forEach(btn =>{
    btn.addEventListener('click', () => {
        const value = btn.textContent;
        console.log(value)

        if (value === "AC"){
            input.value = '';
            return;
        }

        if (value === "="){
            input.value = eval(input.value);
            return;
        }

        input.value += value;
    });
});  
