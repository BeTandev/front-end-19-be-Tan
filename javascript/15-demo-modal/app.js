let btnRegister = document.getElementById('btn-register')
let btnCancel = document.getElementById('btn-cancel')
let modal = document.getElementById('modal')
let planInfoItem = document.getElementsByClassName('.plan-info-item')

btnRegister.addEventListener('click', function(){
    modal.style.display = 'block'
})

btnCancel.addEventListener('click', function(){
    modal.style.display = 'none'
    modal.classList.add('slide-up')
})

let checkboxes = document.querySelectorAll('input[name="plan"]');
let contentItems = document.querySelectorAll('.plan-name');
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].addEventListener('change', function () {
        removeActive();
        checkboxes[i].closest('label').classList.add('active');
        contentItems[i].classList.add('active');
      })
    }

function removeActive() {
        let labels = document.querySelectorAll('label');
        for (let i = 0; i < labels.length; i++) {
          labels[i].classList.remove('active');
          contentItems[i].classList.remove('active');
        }
      }