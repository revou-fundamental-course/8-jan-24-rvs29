function calculate() {
    var sideLength = parseFloat(document.getElementById('sideLength').value);

    if (!isNaN(sideLength) && sideLength > 0) {
        var perimeter = 4 * sideLength;
        var area = sideLength * sideLength;

        document.getElementById('perimeterValue').innerText = perimeter;
        document.getElementById('areaValue').innerText = area;
    } else {
        alert('Masukkan panjang sisi!');
    }
}

function resetForm() {
    document.getElementById('sideLength').value = '';
    document.getElementById('perimeterValue').innerText = '?';
    document.getElementById('areaValue').innerText = '?';
}
