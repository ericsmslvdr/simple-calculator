const outputBox = document.querySelector('#output')
const numberBtn = document.querySelectorAll('.number')
const operationBtn = document.querySelectorAll('.operation')
const clearBtn = document.querySelector('.clear')
let operation = ''
let numTemp = 0
let total = 0

clearBtn.addEventListener('click', () => {
    outputBox.value = ''
    operation = ''
    numTemp = 0
    total = 0
})

numberBtn.forEach((num) => {
    num.addEventListener('click', () => {
        if (num.value === '.' && outputBox.value.includes('.')) return
        outputBox.value += num.value
    })
})

operationBtn.forEach((op) => {
    op.addEventListener('click', () => {
        switch (op.value) {
            case '/':
                operation = '/'
                numTemp = outputBox.value
                outputBox.value = ''
                break;

            case '*':
                operation = '*'
                numTemp = outputBox.value
                outputBox.value = ''
                break;

            case '-':
                operation = '-'
                numTemp = outputBox.value
                outputBox.value = ''
                break;

            case '+':
                operation = '+'
                numTemp = outputBox.value
                outputBox.value = ''
                break;

            case '=':
                total = outputBox.value
                if (operation == '-') {
                    total = numTemp - total
                } else if (operation == '+') {
                    total = Number(total) + Number(numTemp)
                } else if (operation == '*') {
                    total *= numTemp
                } else if (operation == '/') {
                    total = numTemp / total
                }
                outputBox.value = total
                break;

            default:
                break;
        }
    })
})




