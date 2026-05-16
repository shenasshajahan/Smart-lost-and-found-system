const form = document.getElementById("itemForm");
const itemList = document.getElementById("itemList");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const itemName = document.getElementById("itemName").value;
    const itemType = document.getElementById("itemType").value;
    const location = document.getElementById("location").value;
    const contact = document.getElementById("contact").value;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${itemName}</td>
        <td>${itemType}</td>
        <td>${location}</td>
        <td>${contact}</td>
    `;

    itemList.appendChild(row);

    form.reset();
});