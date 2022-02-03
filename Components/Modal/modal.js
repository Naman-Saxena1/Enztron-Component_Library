let modal = document.querySelector(".modal-container")
let modalActionBtns = document.querySelectorAll(".modal-action-btn")
let closeModalBtn = document.querySelector(".close-modal-btn")

function openModal()
{
    modal.style.display="block"
}

function closeModal()
{
    modal.style.display="none"
}

modalActionBtns.forEach((actionBtnElement)=>{
    actionBtnElement.addEventListener('click',()=>{
        modal.style.display="none"
    })
})