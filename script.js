<<<<<<< HEAD
<table id="field">
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
	</tr>
</table>
=======
function randint(min,max){
    return Math.round(Math.random()*(max-min)+ min)}

let nameJS=document.querySelector('.name')
let startJS=document.querySelector('.start')
let questionJS = document.querySelector('.question')
let red = document.querySelector('.choice1')
let blue = document.querySelector('.choice2')
let random = document.querySelector('.choice3')
let resultJS = document.querySelector('.result')
let pole = document.querySelector('.box')
let fields=document.querySelectorAll('.yach')
let first = 0

nameJS.style.display="flex"
startJS.style.display="flex"
questionJS.style.display="none"
pole.style.display="none"
resultJS.style.display="none"
red.style.display="none"
blue.style.display="none"
random.style.display="none"

startJS.addEventListener('click', function(){
    nameJS.style.display="none"
    startJS.style.display="none"
    questionJS.style.display="flex"
    red.style.display="flex"
    blue.style.display="flex"
    random.style.display="flex"
})

red.addEventListener('click',function(){
    let first = 1
    red.style.display="none"
    blue.style.display="none"
    random.style.display="none"
    pole.style.display="flex"
    questionJS.style.display="none"

})

blue.addEventListener('click',function(){
    let first = 2
    red.style.display="none"
    blue.style.display="none"
    random.style.display="none"
    pole.style.display="flex"
    questionJS.style.display="none"

})

red.addEventListener('click',function(){
    let first = randint(1,2)
    red.style.display="none"
    blue.style.display="none"
    random.style.display="none"
    pole.style.display="flex"
    questionJS.style.display="none"

})
<<<<<<< HEAD
>>>>>>> 09cb40df7daa065fbb5b2a88418250dffe9f7a07
=======
if (first == 1){image='red.png'}else{image='blue.png'} 
<<<<<<< HEAD
.01.addEventListener('click',function(){
    .style.background(image)
})
=======
fields.addEventListener('click',function(){
    fields.style.background(image)
})
>>>>>>> 8fe1db2ad598da74f8cb78374292c1ec2cd2797c
>>>>>>> 6364b22edd47c17fa6a72d99309c7058fdc4bbbe
