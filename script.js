const blocks=document.querySelectorAll('.faqblock')

console.log(blocks)

blocks.forEach(element => {
    element.addEventListener("click",()=>
    {
        
        let child=element.children["1"];
        let image=element.children["0"].children["1"];
        console.log(image);
        if(child.classList.contains("hidden"))
        {
            child.classList="Answer";
            image.style.transform="rotate(45deg)";
        }   
        else{
            child.classList="Answer hidden"
            image.removeAttribute("style");
        }

    }
        
    )
});