let stringButton = document.getElementById("stringbtn");

stringButton.addEventListener("click", (event) =>{
    let paragraph = document.getElementById("paragraph");
    let container = document.getElementById("paragraphContainer");
    console.log(paragraph)
    console.log(container)
    let paragraphContent = paragraph.textContent;
    let theString = document.getElementById("string").value;
    
    let linkTwitterSearch = `https://twitter.com/search?q=${theString}&src=typed_query`

    let newParagraphContent = paragraphContent.replaceAll(theString, `<a href="${linkTwitterSearch}">${theString}</a>`);
    paragraph.remove();
    let newParagraph = document.createElement("p")
    newParagraph.setAttribute('id','paragraph')
    container.appendChild(newParagraph)

    let paragraph2 = document.getElementById('paragraph');
    paragraph2.insertAdjacentHTML("beforeend",newParagraphContent);
})
