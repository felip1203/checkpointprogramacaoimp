
function menu (prato, tempo){


    let padraoTempo

    if (prato == "pipoca") {
        padraoTempo = 10;
    }
    else if (prato == "macarrao") {
        padraoTempo = 8;
    }
    else if (prato == "carne") {
        padraoTempo = 15;
    }
    else if (prato == "feijao") {
        padraoTempo = 12;
    }
    else if (prato == "brigadeiro") {
        padraoTempo = 8;
    }
    else {
        return "Prato inexistente"
    }


    if (tempo < padraoTempo) {
        return "Tempo insulficiente"
    }
    else if (tempo > (2 * padraoTempo ) && tempo <= (3 * padraoTempo)) {
        return "A comida queimou"
    }
    else if (tempo > 3 * padraoTempo) {
        return "Kabum!!!"
    }
}
    console.log (menu ("brigadeiro",40) + " Prato pronto, bom apetite!!!")
    

