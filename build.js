function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table) {
    $.get( "http://localhost:3000/", function( data ) {
        for (let element of data.content) {
            let row = table.insertRow();
            let cell = row.insertCell();
            let text = document.createTextNode(element);
            cell.appendChild(text);
          }
      });  
}

let table = document.querySelector("table");
let data = ['Nome'];
generateTableHead(table, data);
generateTable(table);

function saveProduto(){
    $.post( "http://localhost:3000/", {produto: $('#produto').val()}).done(function(){
        console.log('Foi')
    });
}