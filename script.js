function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag da imagem
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se estiver em light mode, adicionar a imagem light
    img.setAttribute("src", './assets/assets/avatar-light.png')
  } else {
    // Se estiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/assets/avatar.png")
  }

}
