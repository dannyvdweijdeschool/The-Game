alert ('Je hebt weer eens niks te doen en je besluit om naar buiten te gaan om je omgeving te gaan verkennen.');

var choice = prompt ('Misschien wel de moeilijkste vraag der vragen welke kant ga je op links of rechts?');
	if (choice == 'links') {
		alert ('Je hebt alweer 100 meter gelopen wat voor jou al als 5 kilometer voelt. Je ziet een man in de verte staan of is het nou een oger? Je kunt het niet goed zien. Het enige wat je wel kan zien is die grote knuppel in zijn hand. Hij heeft jou duidelijk ook gezien.');
		var left = prompt ('Wat ga je nu doen? Ga je langs hem en hoop je dat hij niks doet of ga je naar hem toe?');
			if (left == 'langs') {
				alert ('Je hebt der even goed over nagedacht..... of je deur opslot is. Nadat je de conclusie hebt getrokken dat hij opslot zit ga je proberen om langs..... dat te komen. Het loopt allemaal gesmeerd voor die 300 meter die je loopt om bij hem te komen. Maar net als je langs hem loppt schreeuwt hij \'YOU SHALL NOT PASS!\' Voordat je het weet ben je neer geknuppeld door dat..... ding. Niet echt je ideale dagje uit maar op se minst ben je uit je leiden verlost. Dan heb ik het over dat hele stuk terug lopen.');
				document.write ('Dit is het einde alleen zijn der ook andere eindes dus zou je wel het goede einde willen halen zal je het opnieuw moeten gaan doen.');
			}else{
				alert ('Je bedenkt even goed wat je moet zeggen..... tegen je moeder als je weer eens in het ziekenhuis ligt. Nadat je dat gedaan hebt doe je een poging om naar hem toe te lopen');
				var naartoe = prompt ('Hij staat 300 meter verder dan waar je stond dus het is logisch dat je 2 rust pauzes nodig hebt. Als je voor hem staat vraagt hij \'welk getal is meer 1 of 0?\'');
					if (naartoe > '0') {
						alert ('Er komt een grote glimlach op zijn gezicht. Hij zegt \'dank jou wel\' en hij loopt weg. Wat een rare..... vent. Op se minst was hij minder gevaarlijk dan hij leek. Je loopt weer verder na nog weer wat gelopen te hebben zie je een goudkist staan.');
						var nummer1 = prompt ('Je loopt er naar toe. Er staat op noem een cijfer onder de 10.');
					}else{
						(naartoe < '0')
						alert ('Het antwoord is fout en hij zegt \'antwoord fout\' en voordat je het weet ben je neer geknuppeld door dat..... ding. Niet echt je ideale dagje uit maar op se minst ben je uit je leiden verlost. Dan heb ik het over dat hele stuk terug lopen.');
						document.write ('Dit is het einde alleen zijn der ook andere eindes dus zou je wel het goede einde willen halen zal je het opnieuw moeten gaan doen.');
					}
			}
	}else if (choice == 'rechts') {
		alert ('Na lang nagedacht te hebben over dat lekkere meisje van de middelbare besluit je naar rechts te gaan.');
		var right = prompt ('Nadat je een stuk gelopen hebt zie je twee jochies voetballen. Je besluit om mee te doen, maar dan is het wel 1 tegen 2 natuurlijk. Wat verwacht je anders van van 2 jochies. Na een tijd voetballen sta je 1-3 achter. Hoeveel goals moet je nog maken om niet te verliezen?');
	}else{
		alert ('Je hebt geen mogelijk antwoord gegeven probeer het opnieuw.');

	}