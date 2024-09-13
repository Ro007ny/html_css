$(document).ready(function(){
    $('#btnSearch').click(function(){
        let searchField = $("#iptSearch");
        console.log(searchField);
        console.log(searchField.value);
        window.alert(searchField.value);
    });
});