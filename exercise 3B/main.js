document.getElementById("stringbtn").onclick = function(){

    var theString = document.getElementById("string").value;
    theHashString = theString.replace(theString,'#'+theString);

    const newDiv= document.createElement("div");
    const newLink = document.createElement("a");
    const linkText = document.createTextNode(theHashString);

    newLink.appendChild(linkText);
    newDiv.appendChild(newLink);
    newLink.href = "http://twitter.com";
    
    document.body.appendChild(newDiv);
}

