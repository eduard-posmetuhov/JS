window.addEventListener("load", function() {
    var changeBackground = function(e) {
        var target = e.target || e.srcElement;
        if (target.tagName === "TD") {
            target.classList.toggle("red_background");
            target.classList.toggle("blue_background");
        }
    }

    var table = document.createElement('table');
    var tr = document.createElement('tr');
    var i, cell;
    var td = document.createElement('td');
    td.classList.add("red_background");
    tr.appendChild(td);
    for (i = 0; i < 8; i++) {
        tr.appendChild(td.cloneNode(false));
    }
    table.appendChild(tr);
    for (i = 0; i < 8; i++) {
        table.appendChild(tr.cloneNode(true));
    }
    document.getElementsByTagName('body')[0].appendChild(table);

    table.addEventListener("click", changeBackground);

});
