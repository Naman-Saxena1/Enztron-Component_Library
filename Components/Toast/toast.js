let x;
let toast = document.querySelector(".snackbar")
let showSnackBarBtn = document.querySelector('.show-snackbar-btn')
let closeBtn = document.querySelector(".close-btn")
let snackbarContainer = document.querySelector('.snackbar-container')

showSnackBarBtn.addEventListener('click', ()=>
{
    clearTimeout(x);
    toast.style.transform="translateX(-54.9rem)"
    

    x = setTimeout(
        ()=>{
            toast.style.transform="translateX(54.9rem)"
        },
        5000
    )
})

closeBtn.addEventListener('click', ()=>
{
    toast.style.transform="translateX(400px)"
    clearTimeout(x);
})