//21
function countDigits(n) {
    if (n === 0) {
        return 1;
    }
    n = Math.abs(n); //convert negative value to postive
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
   console.log(count);
}
countDigits(-122);
