var counter = document.getElementById("counter");
var btn_trigger = document.getElementById("counter_btn");
btn_trigger.addEventListener("click", function() {
    var input = document.getElementsByTagName("input");
    var valor;
    for (var i = 0; i < input.length; i++) {
        valor = input[i].value;
    }
    if (valor > 0) {
        var mili = valor * 1000
        setTimeout(function() {
            alert("tiempo acabdo");

        }, mili);
        var countdownValue = setInterval(function() {
            if (valor > 0) {
                counter.textContent = valor;
                valor--
            } else {
                clearInterval(countdownValue);
            }
            console.log(valor);

        }, 1000)

    } else {
        alert("inserte un numero");
    }
});