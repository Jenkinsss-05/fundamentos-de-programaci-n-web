// script.js
const select = document.getElementById("peliculas");
select.addEventListener("change", function() {
    const selectedPage = select.value;
    if (selectedPage !== "") {
        window.location.href = selectedPage;
    }
});
