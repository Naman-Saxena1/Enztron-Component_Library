const postLikeButton = document.querySelectorAll(".post-like-button");

postLikeButton.forEach((likebtn)=>{
    likebtn.addEventListener('click',(event)=>{

        event.target.parentElement.previousElementSibling
             .firstElementChild.lastElementChild.innerText = 

        Number(event.target.parentElement.previousElementSibling
            .firstElementChild.lastElementChild.innerText) + 1;
    })
})
