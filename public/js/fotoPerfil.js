nome_usuario.innerHTML = sessionStorage.NOME_USUARIO;
var jogadorFav = sessionStorage.IDOLO;

foto_perfil.className = ""

if (jogadorFav == 1) {
  foto_perfil.classList.add("cassio")
} else if (jogadorFav == 2) {
  foto_perfil.classList.add("rivelino")
} else if (jogadorFav == 3) {
  foto_perfil.classList.add("socrates")
} else if (jogadorFav == 4) {
  foto_perfil.classList.add("zanotti")
} else if (jogadorFav == 5) {
  foto_perfil.classList.add("tamires")
} else if (jogadorFav == 6) {
  foto_perfil.classList.add("leticia")
} else if (jogadorFav == 7) {
  foto_perfil.classList.add("fagner")
} else if (jogadorFav == 8) {
  foto_perfil.classList.add("emerson")
} else if (jogadorFav == 9) {
  foto_perfil.classList.add("zeMaria")
} else if (jogadorFav == 10) {
  foto_perfil.classList.add("grazi")
} else if (jogadorFav == 11) {
  foto_perfil.classList.add("portilho")
} else if (jogadorFav == 12) {
  foto_perfil.classList.add("tarciane")
}