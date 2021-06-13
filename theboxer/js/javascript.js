var imagem = window.document.getElementById("img")
function clicar()
{
    let botao = window.document.getElementsByTagName('div')[1]
    let menu = window.document.getElementById(`menu`)     
    botao.classList.toggle('active')

    if(botao.classList.contains("active") == true)
    {    
        
        menu.style.display = "flex"
        menu.style.animation =  "ir"
        menu.style.animationDuration = "1s"
        menu.style.animationFillMode = "forwards"
           
    }
    else
    {
        menu.style.animation = "voltar"
        menu.style.animationDuration = "1s"
        menu.style.animationFillMode = "forwards"
        
    }
    
}
function parte1()
{
    let div1 = window.document.getElementById("div1")
    div1.classList.toggle('active')
    if(div1.classList.contains('active'))
    {
        
        imagem.style.animation = "ir-imagem"
        imagem.style.animationDuration = "3s"
        img.src = "img/001.jpg"
    }

}
function parte2()
{
    let div2 = window.document.getElementById("div2")
    div2.classList.toggle('active')
    if(div2.classList.contains('active'))
    {
        img.src = "img/002.jpg"
        imagem.style.animation = "ir-imagem2"
        imagem.style.animationDuration = "3s"
    }
}
function parte3()
{
    let div3 = window.document.getElementById("div3")
    div3.classList.toggle('active')
    if(div3.classList.contains('active'))
    {
        img.src = "img/003.jpg"
        imagem.style.animation = "ir-imagem3"
        imagem.style.animationDuration = "3s"
    }
}
function parte4()
{
    let div4 = window.document.getElementById("div4")
    div4.classList.toggle('active')
    if(div4.classList.contains('active'))
    {
        img.src = "img/004.jpg"
        imagem.style.animation = "ir-imagem4"
        imagem.style.animationDuration = "3s"
    }

}
function parte5()
{
    let div5 = window.document.getElementById("div5")
    div5.classList.toggle('active')
    if(div5.classList.contains('active'))
    {
        img.src  = "img/005.jpg"
        imagem.style.animation = "ir-imagem5"
        imagem.style.animationDuration = "3s"
    }
}
