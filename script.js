let input1=document.getElementsByTagName('input')[0];
let form1=document.getElementsByTagName('form')[0]
let img1=document.createElement('img')
let p=document.getElementsByTagName('p')[0]



form1.addEventListener('submit',(e)=>{
e.preventDefault()

if(input1.value===''){
   p.textContent='Enter data!'
   form1.removeChild(img1)
}
else{
img1.setAttribute('src',`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input1.value}`)
form1.appendChild(img1)
img1.setAttribute('style','height:61%')
img1.style.paddingTop='5px'
form1.style.paddingBottom='100px'
img1.style.borderRadius='10px'
p.textContent='Scan the QR with your phone'
}
})

