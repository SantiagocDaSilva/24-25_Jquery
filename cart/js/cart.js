
function addProduct(){
    sessionStorage.setItem("price", "100")
    updateTotal();
}

function updateTotal(){
    $("input#total").val(sessionStorage.getItem("price"));
}
