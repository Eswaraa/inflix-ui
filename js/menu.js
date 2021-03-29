function showCreateAlbum() {
    console.log("Show Create Form");
    $("#FormShowAlbums").hide();
    $("#FormCreateAlbum").show();
    $("#menuCreateAlbum").addClass("active");
    $("#menuShowAlbums").removeClass("active");
    closeMenu()
}

function showAlbums() {
    console.log("Show List Album");
    $("#FormShowAlbums").show();
    $("#FormCreateAlbum").hide();
    $("#menuShowAlbums").addClass("active");
    $("#menuCreateAlbum").removeClass("active");
    closeMenu();
    fetchAlbums();
}
function init() {
    // var table = $('#example').DataTable({
    //     "lengthMenu": [5, 10, 15, 20, 25],
    //     // columnDefs: [
    //     //     { targets: [0, 1], visible: true },
    //     //     { targets: '_all', visible: false }
    //     // ]
    //     // ajax: "data.json"
    // });
    $("#FormShowAlbums").show();
    $("#menuShowAlbums").addClass("active");
    closeMenu();
    fetchAlbums();
    // table.ajax.url('data.json').load();
    // table.on('xhr', function () {
    //     var json = table.ajax.json();
    //     alert(json.data.length + ' row(s) were loaded');
    // });

}

function closeMenu() {
    $("#navbarSupportedContent").removeClass("show");
}