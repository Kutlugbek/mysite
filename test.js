const letterInput = document.querySelectorAll('.letter');
const blockInput = document.querySelectorAll('.block');
const postInput = document.getElementById('post'),
getInput = document.getElementById('get'),
clearInput = document.getElementById('clear');

const words = ["он","ор","ус","аир","акр","вар","вор","ива","икс","инк","ион","иск","ник","нос","око","она","они","оно","оса","рак","ров","рок","сан","сок","сон","сор","сук","анис","анус","вино","вкус","внук","воин","ворс","воск","врун","икра","квас","кино","киса","кора","коса","кран","кров","крон","кура","курс","нива","нора","нрав","окно","риск","роса","рука","руно","сани","сова","срок","укор","уник","уран","урна","урок","урон","вирус","висок","ворон","икона","искра","конус","коран","крона","норка","норов","носок","окрас","осина","оскар","осока","руина","рукав","русак","санки","свора","совок","сукно","урина","ворона","конура","корона","корова","курсив","курсор","основа","ракурс","сорока","воронка","ворсина","конвоир","рисунок","соринка","ворсинка","сноровка","сонорика"]

var text = ''

for(let letter of letterInput) {
	letter.addEventListener('click', () => {
		text_letter = letter.innerHTML
		text += text_letter
		getInput.innerHTML = `${text}`;
	})
}
postInput.addEventListener('click', () => {
	check = words.includes(text)
	if (check == true) {
		var status = true
		for(let i of text){
			status = true
			for(let block of blockInput){
				if (block.id == text.length && block.classList.contains('active') == false){
					while (status == true){
						block.innerHTML = `<h1>${i}</h1>`
						block.classList.add('active')
						status = false
					}
				}
			}
		}	
		text = ''
		getInput.innerHTML = `Слова`;
	}
})

clearInput.addEventListener('click', () => {
	text = ''
	getInput.innerHTML = `Слова`;
})