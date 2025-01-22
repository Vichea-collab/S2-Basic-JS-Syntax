function challenge3(array) {
    if (array.length === 0) {
        return 0;
    }
    let sum = array.reduce((a, b) => a + b, 0);
    return sum / array.length;
}
