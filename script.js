var x = +prompt('введите число');
if (x < 18) {
    alert('Вы еще молоды. Вам нужно учится')
}

else if (x < 50) {
    alert('Вам нужно работать')
} 

else if (x < 59) {
    alert('Вам скоро на пенсию')
}

else if (x < 150) {
    alert('вы пенсионер')
}

else if (x > 150) {
    alert('вы сверх человек, или что то пошло не так:)')
}


// else(x <)