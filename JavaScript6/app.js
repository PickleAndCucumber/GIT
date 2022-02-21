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




/*
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
*/

/*let arr=[2,5,3,9]
let res=arr[0]*arr[1]+arr[2]*arr[3]
alert(res)*/

/*let a=['a','b','c']
let b=[1,2,3]
let c=b.concat(a)
console.log(c)

let arr=['js','css','jq']
arr.shift()
arr.shift()
console.log(arr)

let arr=[1,2,3,4,5]
let sub=arr.slice(0,3)
alert(sub)*/

/*slice удаляет или добовляет елементы в масиве*/
/*
let arr=[1,2,3,4,5]
let sub=arr.splice(3,0, 'a','b','c')
alert(arr)

let arr=[1,2,3,4,5]
let sub=arr.splice(1,0,'a','b')
sub=arr.splice(6,0,'c')
alert(arr)

let arr=[3,4,1,2,7]
let sub=arr.sort()
alert(sub)
 
let str='abcde'
let arr=str.split('')
console.log(arr.reverse())
let res=arr.join('')
console.log(res)

let obj={
    Nik:'1000',
    Peter:'2000',
    Igor:'5000'
}
console.log(obj['Nik'])

let arr=[ [1,2,3],
          [4,5,6],
          [7,8,9]
]
console.log(arr[1][0])

let arr={
    js:['jQuery','Angular'],
    php:'hello',
    css:'world'
}
console.log(arr['js'][0])

let obj={
    ru:['пн','вт','ср','чт','пт','сб','вс'],
    en:['mo','tu','we','th','fr','sa','su']
}
console.log(odj['ru'][0], obj['en'][2])
*/
let arr=[1,2,3,4,'5']
for(let a=0; a <= arr.length; ++a){
    console.log(a)
}
