
function clearForm() {
    console.log("Clearing...");
    $("#title").val("");
    $("#release").val("");
    $("#production").val("");
    $("#director").val("");
    $('#isPremium').prop('checked', false);
}
function success(data, textStatus, xhr) {
    console.log(data);
    alert("Successfully Added " + data.title);
    clearForm();
}

function createAlbum() {

    let url = "http://localhost:8080/v1/album";
    let data = JSON.stringify({
        "title": $("#title").val(),
        "release": Date.now(),
        "production": $("#production").val(),
        "director": $("#director").val(),
        "is_premium": $("#isPremium").is(':checked')
    });
    // debugger
    dataType = 'json';
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: success,
        dataType: dataType,
        contentType: 'application/json',
    });
}
function fetchAlbums() {

    let url = "http://localhost:8080/v1/album";
    // debugger
    dataType = 'json';
    $.ajax({
        type: "GET",
        url: url,
        success: populateTable,
        dataType: dataType,
        contentType: 'application/json',
    });
}
function populateTable(data, textStatus, xhr) {
    $("#tblAlbumsList > tbody").empty();
    let markup = "";
    // data = JSON.parse(data);
    if (data.length > 0) {
        for (let i in data) {

            markup += "<tr><td> " + data[i].title + " </td>";
            markup += "<td> " + data[i].release + " </td>";
            markup += "<td> " + data[i].production + " </td>";
            markup += "<td> " + data[i].director + " </td>";
            markup += "<td> " + data[i].is_premium + " </td>";
        }
    } else {
        markup += "<tr><td colspan=8> No Data Found </td></tr>";
    }
    $("#tblAlbumsList tbody").append(markup);
}