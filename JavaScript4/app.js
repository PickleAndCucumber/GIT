/*let mainHeading = document.getElementById('main-heading')
console.log(mainHeading.innerHTML)

let newHeading=prompt('введите новый заголовок')

mainHeading.innerHTML=newHeading*/

let mainLeft=document.querySelector('.mainLeft')
let mainRight=document.querySelector('.mainRight')

function addDiv(){
let newDiv=document.createElement('div')
    newDiv.className='circle'
    newDiv.style.width='100px'
    newDiv.style.height='100px'
    newDiv.style.backgroundColor='red'
    newDiv.style.borderRadius='50%'

    mainLeft.append(newDiv)
    console.log("newDiv")
    }

function delDiv(){
    let div=document.querySelector('.circle')
    document.querySelector('.circle').remove(div)
    
}
function addDivo(){
let newDivo=document.createElement('div')
    newDivo.className='quere'
    newDivo.style.width='100px'
    newDivo.style.height='100px'
    newDivo.style.backgroundColor='green'
    mainRight.append(newDivo)
    console.log("newDivo")
    }

function delDivo(){
    let div=document.querySelector('.quere')
    document.querySelector('.quere').remove(div)
    
}