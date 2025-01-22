function challenge5(text) {
    if (text.trim() === "") {
        return 0; 
    }
    return text.split(/\s+/).length;
}
