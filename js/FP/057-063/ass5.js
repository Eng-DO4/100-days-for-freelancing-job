function createSelectBox(startYear, endYear) {
    // Your Code Here
    document.write(`<select>`)
    for (let index = startYear; index <= endYear; index++) {
        document.write(`<option value="${index}">${index}</option>`);
    }
    document.write(`</select>`)
}

createSelectBox(2000, 2021);