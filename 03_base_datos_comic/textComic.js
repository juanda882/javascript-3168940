const infocomic = document.querySelector('.infoComic');

console.log(infocomic);

infocomic.innerHTML = `

    <small>${comic.year}</small>
    <h1>${comic.nombreComic}</h1>
    <p>${comic.sinopsis}</p>
    <p>genero:${comic.genero}</p>

    
    ` 