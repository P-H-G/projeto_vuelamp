window.onload = () => {

    const menu = () => {

        let aciona = document.querySelector('.menu-img')
        let apaga = document.querySelector('.fecha')
        let campo = document.querySelector('.menu-desktop ul')

        aciona.addEventListener("click", () => {

            if (campo.classList.contains('aparece')) {
                campo.classList.remove('aparece')
            } else {
                campo.classList.add('aparece')
            }
        })

        apaga.addEventListener("click", () => {

            campo.classList.remove('aparece')

        })

    }

    menu()
}