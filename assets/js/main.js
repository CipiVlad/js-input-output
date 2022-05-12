





function showForm() {
    // console.log('works');
    let message = document.getElementById('input-message');
    let warning = document.getElementById('output-warning');
    let output = document.getElementById('output-message');

    // ----------------Variante A--------------------------------------------------------

    // switch (Boolean(message.value)) {
    //     case true:
    //         // console.log(message);
    //         output.innerHTML = message.value;
    //         break;
    //     default:
    //         // console.log(warning);
    //         document.getElementById('output-warning').innerHTML = "Bitte gib eine Nachricht ein!";
    // }

    // ----------------Variante B--------------------------------------------------------


    if (message.value) {
        // console.log(message.value);
        return output.innerHTML = message.value;
    } else {
        document.getElementById('output-warning').innerHTML = "Bitte Nachricht eingeben";
        // console.log("false");
    }

}

