

let flag = false;


//step 3 for clear value

const clr = () => {
    flag = false;
    document.getElementById('textArea').value = '';
}

//step 2 for clear insert value

const display = itemValue => {
    if (flag) {
        clr()
    }
    document.getElementById('textArea').value += itemValue;
}

//step 1 for clear Calculate value

const Calculate = () => {
    flag = true;
    let displayValue = document.getElementById('textArea').value;
    let answer = eval(displayValue);
    document.getElementById('textArea').value = answer;
}
