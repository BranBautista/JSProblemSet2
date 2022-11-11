let stringButton = document.getElementById("stringbtn");

stringButton.addEventListener("click", (event) =>{
    let paragraph = document.getElementById("paragraph");
    let container = document.getElementById("paragraphContainer");
    let paragraphContent = paragraph.textContent;
    let theString = document.getElementById("string").value;
    
    let linkTwitterSearch = `https://twitter.com/search?q=${theString}&src=typed_query`

    console.log(linkTwitterSearch)

    let newParagraphContent = paragraphContent.replaceAll(theString, `<a href="${linkTwitterSearch}">${theString}</a>`);
    paragraph.remove();
    let newParagraph = document.createElement("p")
    newParagraph.setAttribute('id','newParagraph')
    container.appendChild(newParagraph)

    let paragraph2 = document.getElementById('newParagraph');
    paragraph2.insertAdjacentHTML("beforeend",newParagraphContent);
})
