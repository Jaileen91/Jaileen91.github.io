let min = parseInt(prompt("enter a minimum:"));
let max = parseInt(prompt("enter a maximum:"));

mySelf(min, max);

function mySelf(min, max) {
    if (min > max)
        return;

    if (min % 2 == 0)
        console.log(min);

    min++;
    mySelf(min, max);

}