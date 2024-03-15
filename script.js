const insertDiv = document.getElementById("insert");
window.addEventListener("keydown", (e) => {
  insertDiv.innerHTML = `
    <table>
    <tr>
    <th>Key</th>
    <th>ASCII Code</th>
    <th>Key name</th>
    </tr>
    <tr>
    <td>${e.key == " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td> ${e.key == " " ? "Space" : e.key}</td>  
    </tr>
    </table>
    `;
});
