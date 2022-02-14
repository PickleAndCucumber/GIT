/*let n=3
let m=4
if(n>m){
    console.log('n>m')
}
else{
    console.log('m>n')
}*/
/*let a=1
let b=6
let c=9

if(a>b){
    if(a>c && c>b){
        console.log(a+c)
    }
}
else if(b>a){
    if(b>c && c>a){
        console.log(b+c)
    }
}*/
/*if(b>a && b>c && a>c){
    
    console.log(a+b)
}
else if (c>b && c>a){
    console.log(b+c)
}
else if(a>c && a>b){
    console.log(a+c)
}*/

let main=document.querySelector('.main')

const widInput=document.querySelector('.wid')
const heiInput=document.querySelector('.hei')
const colInput=document.querySelector('.col')

function newElem(){
    let newDiv=document.createElement('div')
        newDiv.className='new-div'
        newDiv.style.backgroundColor=colInput.value
        newDiv.style.width=widInput.value + 'px'
        newDiv.style.height=heiInput.value + 'px'
        newDiv.style.borderRadius='50%'

        main.append(newDiv)
}
function delDiv(){
    let div=document.querySelector('.new-div')
    document.querySelector('.new-div').remove(div)
    
}

let stepW=0
let stepU=0

function right(){
    stepW += 10
    let rightDiv=document.querySelector('.new-div')
        rightDiv.style.marginLeft= stepW + 'px'
}

function left(){
    stepW -= 10
    let leftDiv=document.querySelector('.new-div')
        leftDiv.style.marginLeft= stepW + 'px'
}

function up(){
    stepU -= 10
    let upDiv=document.querySelector('.new-div')
        upDiv.style.marginTop= stepU + 'px'
}

function down(){
    stepU += 10
    let downDiv=document.querySelector('.new-div')
        downDiv.style.marginTop= stepU + 'px'
}