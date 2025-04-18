// mostrar as opções de ações pode ser para console para desenvolvedor
// camelCase  let const
// data types
// Static ou Dynamic
// Static - C, C++, java, typeScript
// Dynamic - python, javascript, ruby e php
console.time('Teste com Time ')
console.log('Olá mundo')

//Esta parte do programa
console.group('AppDia 01,02,03')
console.log('Olá mundo')
console.info('Olá mundo estou usando info')
console.error('Erro 550')
console.warn('Erro Usuário 300')
console.timeEnd

const dataInfo = [
	{ nome: 'Mark', idade: 25 },
	{ nome: 'Alice', idade: 27 },
]

console.table(dataInfo)

console.time()
for (let index = 0; index < 100; index++) {
	console.info('Meu  teste infor com Console Time ', index)
}
console.timeEnd

let name = 'Andre'
let fistName = 'Jonatha'
let lastName = 'Iacono'
let age = 35
let Name = 'Jontha'

console.log('Veja conteúdo das váriavel ', fistName, name, lastName, age)

const calTax = 0.7

console.log(calTax)

console.groupEnd()

// dia 04
console.group('Dia 04, dia 05 DataType')

console.log(fistName, typeof fistName)
console.log(age, typeof age)

let isAdulto = false
// null
let address = null
// undefined
let color
console.log(
	isAdulto,
	typeof isAdulto,
	address,
	typeof address,
	color,
	typeof color
)

// Symbol
let id = Symbol('id')
let meuObjeto = {
	[id]: 123456,
}

console.log(meuObjeto[id])
// Reference data type
let numbers = [10, 20, 30, 35, 50]

console.log(numbers, typeof numbers)

function myName() {
	console.log('Jonatha')
}
console.log(myName, typeof myName)

let data = new Date()

console.log(data, typeof data, data.getDay)

console.groupEnd

console.group('Dia 04, dia 05 Convertions ou Casting, dia 07')
let idade = '35.2'
// ParseInt
let idadeInteiro = parseInt(idade)
let idadeFloat = parseFloat(idade)
console.log(idadeInteiro, typeof idadeInteiro, idadeFloat, typeof idadeFloat)
// Unário(+)
let idadeN = +idade
// Number
let idadeN2 = Number(idade)
console.log(idadeN, ' | usando Number: ', idadeN2)

let numeroParaConversao = 88.5
let numeroString = numeroParaConversao.toString()
let numeroString2 = String(numeroParaConversao)

let isNumeroBoolean = Boolean(numeroParaConversao)

console.log(
	numeroParaConversao,
	' | usando to String: ',
	numeroString,
	' | duas formar para converter numero para String |',
	numeroString2,
	' | Numero para Boolean ',
	isNumeroBoolean
)
/// atribuição.
let total = 3
total += 5 // atribuir e adcionar +5
console.log('Total é ', total)
total -= 2
console.log('Total é ', total)
total *= 8
console.log('Total é ', total)
total /= 2
console.log('Total é ', total)
total %= 2
console.log('Total é ', total)
total = 2
total **= 3
console.log('Total é ', total)

// operação Comparação

// Igualdade Solta (dado)
console.log(3 == '3')

// Igualdade Estrita (dados e tipo)
console.log(3 === '3')

// DesIgualdade Solta (dado)
console.log(3 != '3')

// DesIgualdade Estrita (dados e tipo)
console.log(3 !== '3')

console.log('Olá, meu nome é ' + fistName + ' Idade ' + age)

/// template Literal  - melhor forma
console.log(`Olá Meu nome é, ${fistName} - minha idade ${idadeInteiro}!`)

let texto = '  Estou aprendendo JavaScript  '

console.log(` Veja ${texto}`)
console.log(` Veja ${texto.charAt(0)}`)
console.log(` Veja ${texto.charAt(4)}`)
console.log(` Veja ${texto.includes(' Java')}`)
console.log(` Veja ${texto.indexOf('aprendendo')}`)
console.log(` Veja ${texto.slice(6, 16)}`)
console.log(` UpCase: ${texto.toUpperCase()}`)
console.log(` loCase: ${texto.toLowerCase()}`)
console.log(` trim: ${texto.trim()}`)
console.log(` repeat: ${texto.repeat(5)}`)
console.log(` replace: ${texto.replace('Estou', 'Eu estou')}`)

console.groupEnd

console.group('Dia 7')
let num1 = 3.3725
let num2 = 10
console.log(num1)
console.log(num1.toFixed(2))

console.log(num2.toString(2)) // base
// Metodos matematicos (Math)
let maior = [3, 1, 3, 5, 17, 3, 4, 0, 22, 34]

console.log(Math.round(num1)) //
console.log(Math.ceil(num1)) // arrendodar para cima
console.log(Math.floor(num1)) // arrendodar para baixo
console.log(Math.sqrt(16))
console.log(Math.pow(2, 3))
console.log(Math.abs(-2))
console.log(Math.random() * 10 + 1) // Gerar números
console.log(Math.round(Math.random() * 100 + 1)) // gerar números
// Objeto para multiplos valores
let car = {
	carName: 'Cybertruck',
	carRange: 340,
	carMaxSpeed: 112,
	carHorsePower: 600,
}
console.log(car)

let chaveDinamica = 'nome' // chaves Dinâmicas
let objetoExemplo = {
	[chaveDinamica]: 'Rafaela',
}

console.log(objetoExemplo)

console.groupEnd
console.group('Dia 9')

let agora = new Date()
console.log(agora)

let dataEspecifica = new Date(2024, 6, 20, 20, 10)
console.log(dataEspecifica)

let dataString = new Date('2024/12/06 10:35:00')
console.log(dataString)

console.log(agora.getDate()) // dia do mês
console.log(agora.getDay()) // dia da Semana (0-6) 0 domingo
// Mês de (0-11) 0 é janeiro
console.log(agora.getMonth())

console.log(agora.getFullYear())

console.log(agora.getHours())

console.log(agora.getMinutes())
console.log(agora.getSeconds())
//
agora.setDate(9) // alterar o dia
console.warn(agora)

agora.setMonth(0) //alterar o mês
console.log(agora)
console.groupEnd

console.group('Contador de dias especificos')
let dataInicio = new Date('2023/10/15')
let dataFim = new Date('2024/11/15')
let totalDias = dataFim - dataInicio // o resuldo em milesengudos
console.log(totalDias)

totalDias = totalDias / (1000 * 3600 * 24) // contato de dias
console.log(totalDias)

totalDias = (dataFim - dataInicio) / (1000 * 3600) // contato de horas
console.log(totalDias)

let dataIdioma
dataIdioma = Intl.DateTimeFormat('pt-BR').format(dataIdioma)

console.log(dataIdioma)
console.groupEnd
console.group('DIA10 - Arrays - Metodos')
let cart = ['Agua', 'Arroz', 'Feijão']
console.warn(cart)

let petShop = ['Dogs', 'Cats', 'Birds', 'Hamsters']

console.log(`In The Second cage we have: ${petShop[2]} - `)

console.log(cart.length)
cart.push('Suco') // incluir no final do array
cart.push('Carne')
console.log(cart)
cart.pop() // remove no final do array
console.log(cart)

console.log(cart.sort())
console.log(cart)

let y
y = cart.includes('Agua')
console.log(y)

y = cart.indexOf('Suco')
console.log(y)

y = cart.indexOf('nao')
console.log(y)

///
/*
y = cart.slice(1)
console.log(y)
y = cart.slice(1, 3) // slice não mostra o [ultimo]
console.log(y)
///

y = cart.splice(1)
console.log('splice: ' + y)
///

y = cart.splice(1, 3) /// splice incluir o último item 3
console.log('splice: ' + y) /// splice tira item da lista

y = cart.indexOf('nao')
console.log(y)
*/
/// Chain - isso posso usar metodo  + metodo + metodo
cart.push('Maça')
y = cart.splice(0, 4).reverse() /// splice incluir o último item 3
console.log('splice + outro metodo: ' + y) /// splice tira item da lista
cart = ['Agua', 'Arroz', 'Feijão']
cart.push(petShop)

console.log(cart)

y = cart[3][0]
console.log(y)
///

let cartNumber = [cart, petShop]
console.log(cartNumber)
console.log(cartNumber[0][1])
console.log(cartNumber[1][1]) //
///

console.log(numbers)
y = cart.concat(numbers)
console.log(y)
/// Static Metodos

let n1 = 10
let n2 = 20
let n3 = 30
let AllNumber = Array.of(n1, n2, n3)

console.log(AllNumber)

let numeros = [10, 11, 12, [20, 21, 22], 30, 31, 32, [40, 41, 42]]

console.log(numeros)

let yy = numeros.flat() //assim vamos colocar todos array em único array

console.log(yy)

let num01 = [10, 20, 30, 40, 50]
let num02 = [90, 80, 70, 60, 50]
num02.reverse()
num02.shift(0)
num01.push(num02)

console.log('num01 ', num01)

let num03 = num01.flat()
//num03.sort()
console.log('Resultado ', num03)
console.log('Lógica de programação IF e ELSE ')

let hour = 11

if (hour <= 12) {
	console.log('Bom Dia!')
} else if (hour < 19) {
	console.log('Boa Tarde')
} else {
	console.log('Boa Noite')
}

let pont = 91

if (pont >= 90) {
	console.log('Exvelente')
} else if (pont >= 75) {
	console.log('Muito Bom')
} else {
	console.log('Você pode melhorar.')
}

let usuariValido = true
let senhaCorreta = true
let temPermissao = true

if (usuariValido) {
	if (senhaCorreta) {
		if (temPermissao) {
			console.log('Usuário tem permissão')
		} else {
			console.log('Usuário sem permissão')
		}
	} else {
		console.log('Senha invalida, tente novamente')
	}
} else {
	console.log('Usuário não encotrado')
}

console.groupEnd
console.group('Objects')

console.log('Novo')
const ouraAndreInfo = {
	totalSleep: 7.53,
	timeInBed: 9.7,
	sleepEfficiency: '86%',
	restingGeartRate: {
		maxHeartRate: 81,
		minHeartRate: 59,
	},
	sleepScore: 84,
	notes: ['Coffee', '30 minutes reading'],
}
// Assim como pegar os dados do objeto
console.log(ouraAndreInfo)
console.log(ouraAndreInfo.sleepEfficiency)
console.log(ouraAndreInfo['totalSleep'])

// Como adcionar outra propriedade objeto
ouraAndreInfo.remSleep = '2h15m'
ouraAndreInfo.sleepScore = 90
ouraAndreInfo.sleepScore++
ouraAndreInfo['sleepScore'] += 4

console.log(ouraAndreInfo)
console.log(ouraAndreInfo.restingGeartRate.maxHeartRate)
console.log(ouraAndreInfo.restingGeartRate.minHeartRate)
console.log(ouraAndreInfo.notes)

/// Objetos
let livro = {
	titulo: '',
	autor: '',
	anoPublicacao: 0,
}

let biblioteca = {
	ficcaoCientifica: [
		(livro = {
			titulo: 'O Senhor dos Anéis',
			autor: 'j.R>R tolkien',
			anoPublicacao: 1954,
		}),
		(livro = {
			titulo: 'harry Potter',
			autor: 'j.R tolkien',
			anoPublicacao: 1997,
		}),
	],
	fantasia: [
		{
			titulo: 'Duna',
			autor: 'Frank',
			anoPublicacao: 1965,
			publicado: ['1965', '1978', '1984'],
		},
		{
			titulo: 'Issac Asimov',
			autor: 'Fundação',
			anoPublicacao: 2000,
		},
	],
}

const Dia20 = 'DIA 21: '

log('DIA20', 'Olá Mundo')

console.groupEnd

function log(grupo, texto, titulo = 'Log:  ') {
	console.group(grupo)
	console.log(titulo, ' - ', texto)
	console.groupEnd
}

function somar(numero1, numero2) {
	log(Dia20, ' Soma ', numero1 + numero2)
}

somar(10, 4)

// parametros Rest
function listaCompras(...itens) {
	log(Dia20, itens)
	log(Dia20, itens, 'Itens da minha lista')
}

listaCompras('Pão', 'Carne', 'milho')

console.groupEnd

function saudacao(nome) {
	function mensagemTexto() {
		log('DIA 23 ', nome, 'Olá')
	}
	return mensagemTexto()
}

saudacao('Jonatha')

function gerarNumero() {
	console.log(Math.floor(Math.random() * 60 + 1))
}
function rodarSorteio() {
	gerarNumero()
	gerarNumero()
	gerarNumero()
	gerarNumero()
	gerarNumero()
	gerarNumero()
}
rodarSorteio()
// function declaration - associa o nome
function somarDois(n1, n2) {
	return n1 + n2
}
log('Somar ', somarDois(10, 20), ' declaration')

//// function Expression - associa a uma variavel
const subtrair2 = function (n1, n2) {
	return n1 - n2
}
// deixar mais curta  - Arrow Function
const subtrair = (n1, n2) => {
	return n1 - n2
}

log('Expression', subtrair(10, 5), 'Expression')
log('Expression', subtrair(10, 5))
