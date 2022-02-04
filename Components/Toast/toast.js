let x;
var toast = document.querySelector(".snackbar")
let closeBtn = document.querySelector(".close-btn")
let snackbarContainer = document.querySelector('.snackbar-container')

function showToast()
{
    clearTimeout(x);
    toast.style.transform="translateX(-54.9rem)"
    

    x = setTimeout(
        ()=>{
            toast.style.transform="translateX(54.9rem)"
        },
        5000
    )
}
function closeToast()
{
    toast.style.transform="translateX(400px)"
    clearTimeout(x);
}