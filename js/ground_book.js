document.getElementById('date').valueAsDate = new Date();

// function generate_table() {
//   // get the reference for the body
//   var body = document.getElementsByTagName("body")[0];
//
//   // creates a <table> element and a <tbody> element
//   var tbl = document.createElement("table");
//   var tblBody = document.createElement("tbody");
//
//   // creating all cells
//   for (var i = 0; i < 2; i++) {
//     // creates a table row
//     var row = document.createElement("tr");
//
//     for (var j = 0; j < 2; j++) {
//       // Create a <td> element and a text node, make the text
//       // node the contents of the <td>, and put the <td> at
//       // the end of the table row
//       var cell = document.createElement("td");
//       var cellText = document.createTextNode("cell in row "+i+", column "+j);
//       cell.appendChild(cellText);
//       row.appendChild(cell);
//     }
//
//     // add the row to the end of the table body
//     tblBody.appendChild(row);
//   }
//
//   // put the <tbody> in the <table>
//   tbl.appendChild(tblBody);
//   // appends <table> into <body>
//   body.appendChild(tbl);
//   // sets the border attribute of tbl to 2;
//   tbl.setAttribute("border", "2");
// }

function createTable() {
    // alert('Success! Your rquest is submitted.');
    var head1 = '<h3>Your recorded responses</h3>'
    var theader = '<table border="1">\n';
    var tbody = '';
    console.log("hua");
    var response = document.querySelectorAll('input');
    for (var i = 0; i < response.length; ++i) {
        tbody += '<tr>';
        tbody += '<td>' + String(response[i].name) + '</td>';
        tbody += '<td>' + String(response[i].value) + '</td>';
        tbody += '</tr>\n';
    }
    var act= document.querySelector('textarea');
    tbody += '<tr>';
    tbody += '<td>' + String(act.name) + '</td>';
    tbody += '<td>' + String(act.value) + '</td>';
    tbody += '</tr>\n';

    var tfooter = '</table>';
    console.log(theader + tbody + tfooter);
    document.getElementById('wrapper').innerHTML = head1 + theader + tbody + tfooter;
    return false;
}




// function show_response() {
//
//    console.log('start');
//
//    var response= document.querySelectorAll('input');
//
//    var table_start='<table border="1">\n'
//
//    var table_body='';
//
//    for(var i=0;i<response.length-1;++i){
//        table_body += '<tr>';
//        table_body+='<td>'+ String(response[i].name) + '</td>';
//        table_body+='<td>'+ String(response[i].value) + '</td>';
//        table_body += '</tr>\n';
//    }
//    var table_end='</table>'
//    var insert_display = table_start+table_body+table_end;
//    console.log(insert_display);
//    document.getElementById('display').innerHtml= table_start+table_body+table_end;
//     // var tbl = document.querySelector("#display");
//      // tbl.appendChild(insert_display);
//      // var tbl = document.querySelector("table");
//      // tbl.setAttribute("border", "2");
//    console.log('end');
//     alert ('Success! Your rquest is submitted.');
// }
