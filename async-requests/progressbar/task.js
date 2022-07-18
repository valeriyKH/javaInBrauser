

let xhr = new XMLHttpRequest();

send.addEventListener('click', submit)
function submit (e){
    e.preventDefault()
    let form = document.getElementById('form');
    const formData = new FormData(form);

    xhr.onreadystatechange = function () {
        if(this.readyState !== xhr.DONE) {
            xhr.upload.onprogress = function (event) {
                console.log(`Произошла ошибка во время отправки: ${xhr.status}`);
                progress.value = event.loaded / event.total;
            } 
        }
    }
    xhr.open("POST", 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(formData);

}