const inputCheck = document.querySelector('#modo_noturno')
const elemento = document.querySelector('body')

inputCheck.addEventListener('click', () => {
	const modo = inputCheck.checked ? 'dark' : 'ligth'
	elemento.setAttribute('data-bs-theme', modo)
})
