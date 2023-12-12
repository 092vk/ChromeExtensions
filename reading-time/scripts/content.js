const article = document.querySelector("article");

if(article){
    const text = article.textContent;
    const pattern = /[^\s]+/g;
    //this pattern is of  all the non whitespace 
    const regxResult = text.matchAll(pattern);
    //this will give us a itterator for all the letters in text

    const textCount=[...text].length;
    //this converts the itterators into a array and calculates the no of letters 

    const readingTime = Math.round(textCount/200);

    const badge = document.createElement("p");
    //this creates the para element

    badge.classList.add("color-secondary-texts","type--caption");
    //this line first gets the list of all the classes of badge and then using add it adds the class color-secondary-texts and type--caption class to it , most probably for styling 

    badge.textContent=`${readingTime} min read`;
    //this adds the content inside the para tag which we created above , here it will display the reading time 

    const heading = article.querySelector("h1");
    const date = article.querySelector("time")?.parentNode;
    //thid gets the h1 or article or parent of time if it exits 

    (date ?? heading).insertAdjacentElement("afterend",badge);
    //this is a null coelsaling tag which means that if date is null h1 will be used or otherwise time parent will be used 

    

}

