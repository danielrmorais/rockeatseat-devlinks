function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    //pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a img
    if(html.classList.contains('light')) {
        
    //se tiver light mode, add img light
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Fundo degradê roxo para o azul, Mayk Brito de óculos escuro e blusa cinza')

    } else {
    //se nao estiver em light mode, manter a img padrao
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute('alt', 'descrição da imagem para uma pessoa com necessidade visual, motor de busca, se nao encontrar a imagem o que escrever')
    }


    
}