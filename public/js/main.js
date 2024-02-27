document.addEventListener('DOMContentLoaded', function (){
    let gallery = document.getElementById('dogs-api');

    fetch('https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10')
        .then(response => response.json())
        .then(data => {
            data.forEach(image => {
                let imageContainer = document.createElement('div')
                imageContainer.classList.add('image-container')

                let img = document.createElement('img')
                img.src = image.url;

                imageContainer.appendChild(img)
                gallery.appendChild(imageContainer)
            })
        })
        .catch(error => {
            console.log(error)
        })
})

document.addEventListener('DOMContentLoaded', function () {
    let button = document.getElementById('toggleButton');
    let content = document.getElementById('content');

    button.addEventListener('click', function () {
        if (content.style.display === 'none') {
            content.style.display = 'block';
            content.style.position = 'fixed'
            content.style.zIndex = '4'
            content.style.right = '1%'
            content.style.bottom = '10%'
            content.style.backgroundColor = 'white'
        } else {
            content.style.display = 'none';
        }
    });
});

function goBack() {
    window.history.back();
}
