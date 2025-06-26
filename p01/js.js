const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(item){
    console.log(item)
    item.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target.id);
        body.style.backgroundColor = e.target.id;
        
    })
})