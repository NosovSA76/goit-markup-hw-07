(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

//  const myElement = document.getElementById("myElement");
//       let count = 0;

//       myElement.onclick = function () {
//         count++;
//         if (count % 2 === 0) {
//           myElement.style.backgroundColor = "#ffffff";
//           myElement.style.border = "1px solid var(--title-text-color)";
         
//         } else {
//            myElement.style.backgroundColor = "#404BBF";
//           myElement.style.border = "none";
//         }
//       };