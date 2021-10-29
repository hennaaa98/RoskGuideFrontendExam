window.onload = function(){
    var btn = document.getElementById("btn");

    btn.onclick = function(){
        var result = localStorage.getItem("mydata");
        alert (result);
    }
}
