var list = [];

function getTotal(list) {
    var total = 0;

    for (var key in list) {
        total += list[key].value * list[key].amount;
    }

    document.getElementById("totalValue").innerHTML = formatValue(total);
}

function setList(list) {
    var table = '<thead class="thead-light"><tr><th>Description</th><th>Amount</th><th>Value</th><th>Action</th></tr></thead><tbody>';

    for (var key in list) {
        table += '<tbody><tr><td>' + formatDesc(list[key].desc) + '</td><td>' + formatAmount(list[key].amount) + '</td><td>' + formatValue(list[key].value) + '</td><td><button id="btnUpdate" onClick="setUpdate(' + key + ')"class="btn btn-default">Edit</button>  |  <button id="btnDelete" onClick="setDelete(' + key + ')" class="btn btn-default">Delete</button></td></tr>';
    }

    table += '</tbody>';

    document.getElementById("listTable").innerHTML = table;

    getTotal(list);
    saveListLocalStorage(list);
}

function formatDesc(desc) {
    var string = desc.toLowerCase();

    string = string.charAt(0).toUpperCase() + string.slice(1);

    /*
    charAt(0) = Retorna o caractere da posição desejada, no caso, o primeiro
    slice(1)  = Retorna os demais caracteres, a partir da posição desejada
    */

    return string
}

function formatAmount(amount) {
    return parseInt(amount);
}

function formatValue(value) {
    var string = parseFloat(value).toFixed(2) + "";

    string = '$ ' + string.replace('.', ',');

    return string
}

function validation() {
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;
    var errors = '';

    if (desc === "") {
        errors += '<p>Fill out description</p>';
    }

    if (amount == "") {
        errors += '<p>Fill out quantity</p>';
    }
    else if (amount != parseInt(amount)) {
        errors += '<p>Fill out a valid amount</p>';
    }

    if (value == "") {
        errors += '<p>Fill out value</p>'
    }
    else if (value != parseFloat(value)) {
        errors += '<p>Fill out a valid value</p>';
    }

    if (errors != "") {
        document.getElementById("errors").style.display = "block";
        document.getElementById("errors").style.backgroundColor = "rgba(85, 85, 85, 0.3)";
        document.getElementById("errors").style.color = "white";
        document.getElementById("errors").style.padding = "10px";
        document.getElementById("errors").style.margin = "10px";
        document.getElementById("errors").style.borderRadius = "13px";
        document.getElementById("errors").innerHTML = '<h3>Error:</h3>' + errors;
        return 0;
    }
    else {
        document.getElementById("errors").style.display = "none";
        return 1;
    }
}

function addData() {
    if (!validation()) {
        return;
    }

    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list.unshift({ "desc": desc, "amount": amount, "value": value });
    setList(list);
}

function setUpdate(id) {
    var obj = list[id];
    document.getElementById("desc").value = obj.desc;
    document.getElementById("amount").value = obj.amount;
    document.getElementById("value").value = obj.value;
    document.getElementById("btnUpdate").style.display = "inline-block";
    document.getElementById("btnAdd").style.display = "none";
    document.getElementById("inputIDUpdate").innerHTML = '<input id ="idUpdate" type="hidden" value="' + id + '"></input>';
}

function resetForm() {
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("value").value = "";
    document.getElementById("btnUpdate").style.display = "none";
    document.getElementById("btnAdd").style.display = "inline-block";
    document.getElementById("inputIDUpdate").innerHTML = "";
    document.getElementById("errors").style = "block";
}

function updateData() {
    if (!validation()) {
        return;
    }

    var id = document.getElementById("idUpdate").value;
    var desc = document.getElementById("desc").value;
    var amount = document.getElementById("amount").value;
    var value = document.getElementById("value").value;

    list[id] = { "desc": desc, "amount": amount, "value": value };

    resetForm();
    setList(list);
}

function setDelete(id) {
    if (confirm("Delete this item?")) {
        if (id === list.length - 1) {
            list.pop();
        }
        else if (id === 0) {
            list.shift();
        }
        else {
            var arrayAuxiliarInicio = list.slice(0, id); // Pega tudo antes do ID
            var arrayAuxiliarFinal = list.slice(id + 1); // Pega tudo depois do ID

            list = arrayAuxiliarInicio.concat(arrayAuxiliarFinal)
        }

        setList(list);
    }
}

function deleteList() {
    if (confirm("Delete this list?")) {
        list = [];
        setList(list);
    }
}

function saveListLocalStorage(list) {
    var jsonString = JSON.stringify(list);
    localStorage.setItem("list", jsonString);
}

function initListStorage() {
    var testList = localStorage.getItem(list);

    if (testList) {
        list = JSON.parse(testList);
    }

    setList(list);
}

initListStorage();