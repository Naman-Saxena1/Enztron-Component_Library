let ratingStars = document.querySelectorAll(".rating-stars");
let resetStarsBtn = document.querySelectorAll(".star-reset-btn");
let allRatings = document.querySelectorAll('.rating-value');
let productRatingStars = document.querySelectorAll('.product-rating-stars')
let productRatingStats = document.querySelector("#product-stat");


function productAverageRating(averageRating)
{
    // Ex - averageRating=3.5 
    // 3    -   3.1, 3.2, 3.3, 3.4    
    // 3.5  -   3.5, 3.6, 3.7, 3.8, 3.9 
    // 4    -   4.0
        
    //1, 2, 3, 4, 5 
    for(k=0;k<5;k++)   //0, 1, 2, 3, 4
    {
        if(k+1<averageRating)   //1<3.5
        {
            productRatingStars[k].removeAttribute("class")
            productRatingStars[k].setAttribute("class", "fa fa-star fa-2x  rating-stars")
            productRatingStars[k].style.color = "var(--extra-orange-color)"
        }           
        else
        {
            if(k+1==averageRating)
            {
                productRatingStars[k].removeAttribute("class")
                productRatingStars[k].setAttribute("class", "fa fa-star fa-2x  rating-stars")
                productRatingStars[k].style.color = "var(--extra-orange-color)"
            }
            else
            {
                // k>averageRating
                if((k+1-averageRating)<=0.5)        
                {
                    //4>3.5
                    productRatingStars[k].removeAttribute("class")
                    productRatingStars[k].setAttribute("class", "fa fa-star-half-o fa-2x  rating-stars")
                    productRatingStars[k].style.color = "var(--extra-orange-color)"
                }
                else                
                {
                    //5>3.5
                    productRatingStars[k].removeAttribute("class")
                    productRatingStars[k].setAttribute("class", "fa fa-star fa-2x  rating-stars")
                    productRatingStars[k].style.color = "var(--offline-grey-color)"
                }
            }
        }
    }
}

ratingStars.forEach((starsElement)=>{
    starsElement.addEventListener('click',(event)=>{
        let ratingBar = event.target.parentElement.children;
        let numberOfStars = Number(event.target.getAttribute("value"))

        for(let j=0; j<5; j++)
        {
            if(j<numberOfStars)
            {
                ratingBar[j].style.color = "var(--extra-orange-color)"
            }
            else
            {
                ratingBar[j].style.color = "var(--offline-grey-color)"
            }
        }

        let ratingStat = event.target.parentElement.nextElementSibling.firstElementChild;
        ratingStat.innerHTML = numberOfStars;

        let totalRating = 0;

        allRatings.forEach((element)=>
            totalRating += Number(element.outerText)
        )

        let averageRating = totalRating/2;

        productRatingStats.firstElementChild.innerHTML = averageRating;

        productAverageRating(averageRating)
    })
})

resetStarsBtn.forEach((resetBtnElement)=>{
    resetBtnElement.addEventListener('click',(event)=>{
        let allStars = event.target.previousElementSibling.previousElementSibling.children;

        for(let j=0; j<5; j++)
        {
            allStars[j].style.color = "var(--offline-grey-color)"
        }

        let ratingStat = event.target.previousElementSibling.firstElementChild;
        ratingStat.innerHTML = 0;

        let totalRating = 0;

        allRatings.forEach((element)=>
            totalRating += Number(element.outerText)
        )

        let averageRating = totalRating/2;

        productRatingStats.firstElementChild.innerHTML = averageRating;

        productAverageRating(averageRating)
    })
})