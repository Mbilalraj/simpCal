let display: HTMLInputElement = document.getElementById('display') as HTMLInputElement;

function appendToDisplay(value: string): void {
    display.value += value;
}

function clearDisplay(): void {
    display.value = '';
}

function calculateResult(): void {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
