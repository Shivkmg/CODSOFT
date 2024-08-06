
document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            
            if (value === 'C') {
                display.innerText = '';
            } else if (value === '=') {
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error';
                }
            } else {
                display.innerText += value;
            }
        });
    });
});