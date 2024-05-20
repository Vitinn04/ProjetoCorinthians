function fotoIdolo() {
    img_idolo.className = ""
    var num_idolo = select_idolo.value;

    if (num_idolo == 1) {
        img_idolo.classList.add("cassio")
    } else if (num_idolo == 2) {
        img_idolo.classList.add("rivelino")
    } else if (num_idolo == 3) {
        img_idolo.classList.add("socrates")
    } else if (num_idolo == 4) {
        img_idolo.classList.add("zanotti")
    } else if (num_idolo == 5) {
        img_idolo.classList.add("tamires")
    } else if (num_idolo == 6) {
        img_idolo.classList.add("leticia")
    } else if (num_idolo == 7) {
        img_idolo.classList.add("fagner")
    } else if (num_idolo == 8) {
        img_idolo.classList.add("emerson")
    } else if (num_idolo == 9) {
        img_idolo.classList.add("zeMaria")
    } else if (num_idolo == 10) {
        img_idolo.classList.add("grazi")
    } else if (num_idolo == 11) {
        img_idolo.classList.add("portilho")
    } else {
        img_idolo.classList.add("tarciane")
    }
}