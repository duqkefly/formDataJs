console.log('it works!');

var myForm = document.querySelector("#myForm");
var resultImage = document.querySelector(".resultImage");

myForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    var formData = new FormData(e.target);
    url = URL.createObjectURL(formData.get('image'));
    renderImage(url);
})

function renderImage(url){
    console.log(url);
    resultImage.setAttribute('src', url)
}