function initModalLogin(modalId) {
  const modal = document.getElementById(modalId)
  if (modal) {
    modal.classList.add("mostrar")
    modal.addEventListener("click", e => {
      if (e.target.id == modalId || e.target.id == "closeModal") {
        modal.classList.remove("mostrar")
      }
    })
  }
}

const login = document.querySelector("#conta")
login.addEventListener("click", () => initModalLogin("modal-login"))

//#############################################################################

function initModalTour(modalId) {
  const modalTour = document.getElementById(modalId)

  if (modalTour) {
    modalTour.classList.add("mostrar")
    modalTour.addEventListener("click", e => {
      if (e.target.id == modalId) {
        modal.classList.remove("mostrar")
      }
    })
  }
}

const tour = document.querySelector("#logo")
tour.addEventListener("click", () => initModalLogin("modal-tour"))

//##############################################################################

function initModalCotacao(modalId) {
  const modalCotacao = document.getElementById(modalId)

  if (modalCotacao) {
    modalCotacao.classList.add("mostrar")
    modalCotacao.addEventListener("click", e => {
      if (e.target.id == modalId) {
        modal.classList.remove("mostrar")
      }
    })
  }
}

const cotacao = document.querySelector("#graphic")
cotacao.addEventListener("click", () => initModalLogin("modal-cotacao"))

//##############################################################################

function initModalShoppingCar(modalId) {
  const modalShoppingCar = document.getElementById(modalId)

  if (modalShoppingCar) {
    modalShoppingCar.classList.add("mostrar")
    modalShoppingCar.addEventListener("click", e => {
      if (e.target.id == modalId) {
        modal.classList.remove("mostrar")
      }
    })
  }
}

const shoppingCar = document.querySelector("#shoppingCar")
shoppingCar.addEventListener("click", () =>
  initModalShoppingCar("modal-shoppingCar")
)
