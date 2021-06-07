function clicar()
{
    let botao = window.document.getElementsByTagName(`div`)[1]
    let obra = window.document.getElementById('obra')
    botao.classList.toggle('active')
    if(botao.classList.contains('active') == true)
    {
        obra.style.display = "grid"
        obra.style.animation = "img"
        obra.style.animationDuration = "1s"
        obra.style.animationFillMode = "forwards"
        

    }
    else
    {

        obra.style.animation = "img-away"
        obra.style.animationDuration = "1s"
        obra.style.animationFillMode = "forwards"
    }
}
function link()
{
    
}