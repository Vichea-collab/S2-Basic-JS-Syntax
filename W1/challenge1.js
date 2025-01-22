function challenge1(width, height) {
    if (width <= 0 || height <= 0) {
        return "";
    }
    let rectangleString = "";
    for (let i = 0; i < height; i++) {
        rectangleString += "*".repeat(width) + "\n";
    }
    return rectangleString.trim();
}
