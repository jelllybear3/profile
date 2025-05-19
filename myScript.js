var string = "hello. try click me";
document.getElementById('first').innerHTML = string;

document.getElementById('first').addEventListener('click',function(){
    alert('I got clicked');
})