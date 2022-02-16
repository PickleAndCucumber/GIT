/*for(let i = 0; i <= 10; i++){
    console.log("=^.^=")
}

for(let i=2; i<=10; i++ ){
    if(i%2==0){
        console.log(i)
    }
}
let i=2
while(i<=10){
    console.log(i)
    i+=2
}

let num=prompt('введите число : ')
while(Number(num) <=100){
    num=prompt('введите число : ')
    console.log(num)
}*/

/*let x=prompt('введить координат x : ')
let y=prompt('введить координат y : ')

if(x==0 && y==0){
    console.log('0')
}
else if(x!=0 && y==0){
    console.log('1')
}
else if(x==0 && y!=0){
    console.log('2')
}
else{
    console.log('3')
}

let S=10
let P=prompt('?,0<P<50')
let day=1

while(S<200){
    day++
    S=S+S+S*P/100

}
console.log('количество дней' + day + 'пробег' +S)
//S=10+((10*20)/100)
*/

let clickCircle=document.querySelector('.circle')
let start=document.querySelector('.start')
let close=document.querySelector('.close')

let count=0

clickCircle.addEventListener('click',() => {
    count++
    console.log(count)
})

start.addEventListener('click',()=>{
    count=0
    start.setAttribute('disabled', true)
    setTimeout(()=>{
        showModal()
    }, 1000 )
})

function showModal(){
    let modal= document.createElement('div')
        modal.className='modal-wrapper'
        modal.innerHTML=`
        <div class="modal">
        <div class="modal-header">
            <h1>Count clicks : </h1> <h1 class="heading"onclick="removeModal()">X</h1>
        </div>
        <div class="modal-count">
            ${count}
        </div>
        <div class="modal-footer">
            <button>Confirm</button>
            <button class="close">Close</button>
        </div>
    </div>
    `
    document.body.append(modal)
}

function removeModal(){
    if(document.querySelector('.modal-wrapper')){
        document.querySelector('.modal-wrapper').remove()
    }
}

close.addEventListener('click',() =>{
    removeModal()
})