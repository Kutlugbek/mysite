const textInput = document.getElementById('text'),
textLabel2 = document.getElementById('2'),
textLabel3 = document.getElementById('3'),
textLabel4 = document.getElementById('4'),
textLabel5 = document.getElementById('5'),
textLabel6 = document.getElementById('6'),
textLabel7 = document.getElementById('7'),
textLabel8 = document.getElementById('8');

const words = ["он","ор","ус","аир","акр","вар","вор","ива","икс","инк","ион","иск","ник","нос","око","она","они","оно","оса","рак","ров","рок","сан","сок","сон","сор","сук","анис","анус","вино","вкус","внук","воин","ворс","воск","врун","икра","квас","кино","киса","кора","коса","кран","кров","крон","кура","курс","нива","нора","нрав","окно","риск","роса","рука","руно","сани","сова","срок","укор","уник","уран","урна","урок","урон","вирус","висок","ворон","икона","искра","конус","коран","крона","норка","норов","носок","окрас","осина","оскар","осока","руина","рукав","русак","санки","свора","совок","сукно","урина","ворона","конура","корона","корова","курсив","курсор","основа","ракурс","сорока","воронка","ворсина","конвоир","рисунок","соринка","ворсинка","сноровка","сонорика"]

textInput.addEventListener('input', () => {
	var ans=[]
	for(let word of words){
		var wordLetters=[]
		for(let wordLet of word){
			wordLetters.push(wordLet)
		}
		var textLetters=[]
		for(let textLet of textInput.value){
			textLetters.push(textLet)
		}
		check = wordLetters.every(x => textLetters.includes(x))
		if (check == true){
			ans.push(word)
		}
	}
	var an2=[]
	var an3=[]
	var an4=[]
	var an5=[]
	var an6=[]
	var an7=[]
	var an8=[]
	for(let an of ans){
		if (an.length == 2){
			an2.push(an)
			textLabel2.innerHTML = `${an2}`
		} if (an.length == 3){
			an3.push(an)
			textLabel3.innerHTML = `${an3}`
		} if (an.length == 4){
			an4.push(an)
			textLabel4.innerHTML = `${an4}`
		} if (an.length == 5){
			an5.push(an)
			textLabel5.innerHTML = `${an5}`
		} if (an.length == 6){
			an6.push(an)
			textLabel6.innerHTML = `${an6}`
		} if (an.length == 7){
			an7.push(an)
			textLabel7.innerHTML = `${an7}`
		} if (an.length == 8){
			an8.push(an)
			textLabel8.innerHTML = `${an8}`
		}
	}
})