console.log (`
1. Вёрстка валидная +10\n
2. Вёрстка семантическая +20\n
3. Вёрстка соответствует макету +48\n
4. Требования к css + 12\n
5. Интерактивность, реализуемая через css +20\n`)



let state
let popup
const buttonAuth =  document.querySelector('.btn-login')
const popupAuth  = document.querySelector('.popup-auth')
const popupReg  = document.querySelector('.popup-reg')
const wrapper = document.querySelector('.wrapper')
const linkReg = document.querySelector('.link-reg')
const linkIn = document.querySelector('.link-in')

buttonAuth.addEventListener ( 'click', (event) => {
    console.log (event)
    state !== true ? show( popupAuth ) : hide( popup )
} )

linkReg.addEventListener('click', () => {
    hide( popupAuth )
    show( popupReg )
})

linkIn.addEventListener('click', () => {
    hide( popupReg )
    show( popupAuth )

})

function show( obj ) {
        obj.style.display = 'block';
        wrapper.classList.add('active');
        popup = obj
        state = true;
    }
function hide( obj ) {
        obj.style.display = 'none';
        wrapper.classList.remove ( 'active' )
        state = false;
    }
