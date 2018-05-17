document.getElementById('date').valueAsDate = new Date();

function createTable() {

    alert('Success! Your rquest is submitted.');
    var head1 = '<h3>Your recorded responses</h3>'
    var theader = '<table border="1">\n';
    var tbody = '';
    console.log("hua");
    var response = document.querySelectorAll('input');
    for (var i = 0; i < response.length; ++i) {
        if (i == 4) {
            var dep = document.querySelector('select');
            tbody += '<tr>';
            tbody += '<td>' + String(dep.name) + '</td>';
            tbody += '<td>' + String(dep.value) + '</td>';
            tbody += '</tr>\n';
        }
        if (response[i].name == "submit") {
            continue;
        }
        tbody += '<tr>';
        tbody += '<td>' + String(response[i].name) + '</td>';
        tbody += '<td>' + String(response[i].value) + '</td>';
        tbody += '</tr>\n';
    }
    var act = document.querySelector('textarea');
    tbody += '<tr>';
    tbody += '<td>' + String(act.name) + '</td>';
    tbody += '<td>' + String(act.value) + '</td>';
    tbody += '</tr>\n';

    var tfooter = '</table>';
    console.log(theader + tbody + tfooter);

    var new_head = '<h2 class="titl">Sports Ground Online Booking </h2><br> '


    document.getElementById('fill').innerHTML = new_head;
    document.getElementById('wrapper').innerHTML = head1 + theader + tbody + tfooter;
    var body = document.getElementsByTagName("body")[0];
    var mydiv = document.createElement("div");
    mydiv.classList.add('resubmit');
    wrapper.classList.add('jumbotron');
    var aTag = document.createElement('a');
    aTag.setAttribute('href', "index.html");
    aTag.innerHTML = "Resubmit the form";
    mydiv.appendChild(aTag);
    body.appendChild(mydiv);
    return false;
}
