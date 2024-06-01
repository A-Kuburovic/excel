function loadHTML(element, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.querySelector(element).innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}

document.addEventListener("DOMContentLoaded", function() {
    loadHTML("header", "header.html");
    loadHTML("footer", "footer.html");
});
