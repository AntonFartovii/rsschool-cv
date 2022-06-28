console.log (`
1. Вёрстка валидная +10\n
2. Вёрстка семантическая +20\n
3. Вёрстка соответствует макету +48\n
4. Требования к css + 12\n
5. Интерактивность, реализуемая через css +20\n`)

let state;
const popup = {
    state,
    show: () => {
        if (this.state !== true) {
            popupAuth.style.display = 'block';
            wrapper.style.opacity = '0.7';
            this.state = true;
        } else {
            popupAuth.style.display = 'none';
            wrapper.style.opacity = '1';
            this.state = false;
        }
    },
    disable: () => {
        if (this.state === true) {
            popupAuth.style.display = 'none';
            wrapper.style.opacity = '1';
            this.state = false;
        }
    }
}

const buttonAuth =  document.querySelector('.btn-login')
const popupAuth  = document.querySelector('.popup-auth')
const linkReg = document.querySelector('.link-reg')
const wrapper = document.querySelector('.wrapper')

buttonAuth.addEventListener('click', () => {
    popup.show()
})

// wrapper.addEventListener('click', () => {
//     popup.disable()
// })



