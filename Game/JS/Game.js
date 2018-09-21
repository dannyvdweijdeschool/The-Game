alert ('Je hebt weer eens niks te doen en je besluit om naar buiten te gaan om je omgeving te gaan verkennen.');

var choice = prompt ('Misschien wel de moeilijkste vraag der vragen welke kant ga je op links of rechts? Je kunt kiezen tussen de antwoorden links en rechts.');
	if (choice == 'links') {
		alert ('Je hebt alweer 100 meter gelopen wat voor jou al als 5 kilometer voelt. Je ziet een man in de verte staan of is het nou een oger? Je kunt het niet goed zien. Het enige wat je wel kan zien is die grote knuppel in zijn hand. Hij heeft jou duidelijk ook gezien.');
		var left = prompt ('Wat ga je nu doen? Ga je langs hem en hoop je dat hij niks doet of ga je naar hem toe? Je kunt kiezen tussen de antwoorden langs en naartoe.');
			if (left == 'langs') {
				alert ('Je hebt der even goed over nagedacht..... of je deur opslot is. Nadat je de conclusie hebt getrokken dat hij opslot zit ga je proberen om langs..... dat te komen. Het loopt allemaal gesmeerd voor die 300 meter die je loopt om bij hem te komen. Maar net als je langs hem loppt schreeuwt hij \'YOU SHALL NOT PASS!\' Voordat je het weet ben je neer geknuppeld door dat..... ding. Niet echt je ideale dagje uit maar op se minst ben je uit je leiden verlost. Dan heb ik het over dat hele stuk terug lopen.');
				document.write ('Dit is het einde alleen zijn der ook andere eindes dus zou je wel het goede einde willen halen zal je het opnieuw moeten gaan doen.');
			}else{
				alert ('Je bedenkt even goed wat je moet zeggen..... tegen je moeder als je weer eens in het ziekenhuis ligt. Nadat je dat gedaan hebt doe je een poging om naar hem toe te lopen');
				var naartoe = prompt ('Hij staat 300 meter verder dan waar je stond dus het is logisch dat je 2 rust pauzes nodig hebt. Als je voor hem staat vraagt hij \'welk getal is meer 1 of 0?\' Je kunt kiezen tussen de antwoorden 1 of 0.');
					if (naartoe > '0') {
						alert ('Er komt een grote glimlach op zijn gezicht. Hij zegt \'dank jou wel\' en hij loopt weg. Wat een rare..... vent. Op se minst was hij minder gevaarlijk dan hij leek. Je loopt weer verder na nog weer wat gelopen te hebben zie je een goudkist staan.');
						var nummer1 = prompt ('Je loopt er naartoe. Er staat op is het getal 10 kleiner dan het getal 5?. Je kunt kiezen tussen de antwoorden ja of nee.');
							if (nummer1 != 'ja') {
								alert ('het antwoord is goed en de kist gaat open. Alleen maar om teleur gesteld te worden. Wat ligt er namelijk in? Nou je lunch die je vergeten was. Je vraagt je af hoe het hier komt. Maar dat maakt nu niet uit je heb namelijk heel veel honger. Je eet het op en gaat weer verder. Wel jammer dat er niks waardevols in zat.');
								var woman = prompt ('Je loop weer een stuk verder je ziet een vrouw naar je toe lopen. Wat een lelijk ding is dat..... die pukkel op haar neus bedoel je natuurlijk. Ze heeft een peer in haar handen en ze vraagt of je hem zou willen? Je kunt kiezen tussen de antwoorden ja of nee.');
									if (woman === 'ja') {
										alert ('In sprookjes hebben ze het alleen over appels dus een peer kan geen kwaat toch? Je neemt de peer aan en neemt een hap. Voordat je het weet lig je op de grond niet door de peer maar de stok waarmee de vrouw je heeft neer geslagen. Wat een triest einde he maar ja het is wel het einde voor je.');
										document.write ('Dit is het einde alleen zijn der ook andere eindes dus zou je wel het goede einde willen halen zal je het opnieuw moeten gaan doen.');
									}else{
										alert ('Je hebt van je vader geleerd nooit vrouwen met een pukkel op hun neus te vertrouwen en hij kan het weten, want hij is alweer een tijd singel. Je weigert het aanbod en wilt weg lopen maar voordat je het weet lig je op de grond door de stok waarmee de vrouw je heeft neer geslagen. Wat een triest einde he maar ja het is wel het einde voor je. had je vader toch gelijk.');
										document.write ('Dit is het einde alleen zijn der ook andere eindes dus zou je wel het goede einde willen halen zal je het opnieuw moeten gaan doen.');
									}
							}else{
								alert ('De kist gaat niet open. Wat een teleurstelling maar je kunt er nu niks meer aandoen. Je loopt verder en hoopt dat er niks bezonders in zat.');
								var woman = prompt ('Je loop weer een stuk verder je ziet een vrouw naar je toe lopen. Wat een lelijk ding is dat..... die pukkel op haar neus bedoel je natuurlijk. Ze heeft een peer in haar handen en ze vraagt of je hem zou willen? Je kunt kiezen tussen de antwoorden ja of nee.');
									if (woman === 'ja') {
										alert ('In sprookjes hebben ze het alleen over appels dus een peer kan geen kwaat toch? Je neemt de peer aan en neemt een hap. Voordat je het weet lig je op de grond niet door de peer maar de stok waarmee de vrouw je heeft neer geslagen. Wat een triest einde he maar ja het is wel het einde voor je.');
										document.write ('Dit is het einde alleen zijn der ook andere eindes dus zou je wel het goede einde willen halen zal je het opnieuw moeten gaan doen.');
									}else{
										alert ('Je hebt van je vader geleerd nooit vrouwen met een pukkel op hun neus te vertrouwen en hij kan het weten, want hij is alweer een tijd singel. Je weigert het aanbod en wilt weg lopen maar voordat je het weet lig je op de grond door de stok waarmee de vrouw je heeft neer geslagen. Wat een triest einde he maar ja het is wel het einde voor je. had je vader toch gelijk.');
										document.write ('Dit is het einde alleen zijn der ook andere eindes dus zou je wel het goede einde willen halen zal je het opnieuw moeten gaan doen.');
									}
							}
					}else{
						(naartoe < '0')
						alert ('Het antwoord is fout en hij zegt \'antwoord fout\' en voordat je het weet ben je neer geknuppeld door dat..... ding. Niet echt je ideale dagje uit maar op se minst ben je uit je leiden verlost. Dan heb ik het over dat hele stuk terug lopen.');
						document.write ('Dit is het einde alleen zijn der ook andere eindes dus zou je wel het goede einde willen halen zal je het opnieuw moeten gaan doen.');
					}
			}
	}else if (choice == 'rechts') {
		alert ('Na lang nagedacht te hebben over dat lekkere meisje van de middelbare besluit je naar rechts te gaan.');
		var right = prompt ('Nadat je een stuk gelopen hebt zie je twee jochies voetballen. Je besluit om mee te doen, maar dan is het wel 1 tegen 2 natuurlijk. Wat verwacht je anders van van 2 jochies. Na een tijd voetballen sta je 1-3 achter. Hoeveel goals moet je nog maken om niet te verliezen?');
			if (right >= 2) {
				alert ('Nadat je der achter gekomen bent hoelaat het is score je snel de'+ ' '+ right +' ' + 'goals die je nodig had om niet te verliezen. Daarna loop je weer verder.');
				var choice2 = prompt ('Je komt bij een spilisting. Je kan links af waar een klein eng meisje op de grond zit die je vol in je ogen aankijkt. Of je kan naar rechts waar je een bananen boom ziet staan. Welke kant ga je op? Je kunt kiezen tussen de antwoorden links of rechts.');
					if (choice2 !== 'rechts') {
						alert ('Met de gedachte wat kan ik nou verliezen beslis je om links te gaan. Bij elke stap die je naar voren zet beginnen haar ogen meer te gloeien. Maar als je eenmaal langs haar bent loop je weer verder. Dan bedenk je je dat niet alles zo is zoals het lijkt. Ze leek namelijk heel gevaarlijk maar ze was het niet.');
						var stress = prompt ('Er komt een heel gestreste mevrouw naar je toe rennen. Als ze eindelijk bij je is vraagt ze \'is het getal 8 minder dan het getal 14\' Je kunt kiezen tussen de antwoorden ja of nee.');
							if (stress == 'ja') {
								alert ('\'Ja nu je het zegt je hebt gelijk bedankt.\' Ze loopt nu zonder stress en met een grote glimlach weer door. Niks bezonders maar je hebt om se minst iemand blij gemaakt en je loopt weer door.');
								var candy = prompt ('Een klein jochie met een lolly komt jou kant op gelopen. Je heb eigenlijk wel honger, maar je kan het niet maken om de lolly of te pakken toch? Je kunt kiezen tussen de antwoorden ja of nee.');
									if (candy == 'nee') {
										alert ('Hoe lekker de lolly er ook uiziet pak je hem niet af en loop je verder met een honerig gevoel.');
										var choice3 = prompt ('Je komt weer bij een spilisting. Je kan links of rechts waar ga je heen? Je kunt kiezen tussen de antwoorden links of rechts.');
											if (choice3 == 'links') {
												alert ('Je gaat naar links en na een tijdje heb je wel genoeg van je avondtuur. Alleen weet je de weg niet meer terug. Je hebt dagen gezocht maar je hebt je huis niet meer kunnen vinden. Later sterf je aan te kort aan eten. Wat een triest einde he maar ja het is wel het einde voor je.');
												document.write ('Dit is het einde alleen zijn der ook andere eindes dus zou je wel het goede einde willen halen zal je het opnieuw moeten gaan doen.');
											}else if (choice3 == 'rechts') {
												alert ('Je gaat naar rechts en je komt je huis tegen. Je was al bang dat je die nooit meer zou zien. Maar gelukkig ben je weer bij je huisje en heb je een goed avondtuur beleeft.');
												document.write ('Je hebt het goede einde kunnen vinden maar je kunt natuurlijk de game nog een keer doen om de andere eindes te zien. Goed werk!');
											}
									}else{
										alert ('Je pakt de lolly af en loopt door. Je hoort hem nog iets in het russchisch schrewen wat klink als schelt woorden, maar je verstaat het toch niet en loopt door.');
										var choice3 = prompt ('Je komt weer bij een spilisting. Je kan links of rechts waar ga je heen? Je kunt kiezen tussen de antwoorden links of rechts.');
											if (choice3 == 'links') {
												alert ('Je gaat naar links en na een tijdje heb je wel genoeg van je avondtuur. Alleen weet je de weg niet meer terug. Je hebt dagen gezocht maar je hebt je huis niet meer kunnen vinden. Later sterf je aan te kort aan eten. Wat een triest einde he maar ja het is wel het einde voor je.');
												document.write ('Dit is het einde alleen zijn der ook andere eindes dus zou je wel het goede einde willen halen zal je het opnieuw moeten gaan doen.');
											}else if (choice3 == 'rechts') {
												alert ('Je gaat naar rechts en je komt je huis tegen. Je was al bang dat je die nooit meer zou zien. Maar gelukkig ben je weer bij je huisje en heb je een goed avondtuur beleeft.');
												document.write ('Je hebt het goede einde kunnen vinden maar je kunt natuurlijk de game nog een keer doen om de andere eindes te zien. Goed werk!');
											}
									}
							}else{
								alert ('Het lijkt wel of je haar meer gestrest hebt gemaakt. Ze rend namelijk nog harder weg dan eerst. Ach dan moet ze zelf niet zo dom zijn en je loopt weer verder.');
								var candy = prompt ('Een klein jochie met een lolly komt jou kant op gelopen. Je heb eigenlijk wel honger, maar je kan het niet maken om de lolly of te pakken toch? Je kunt kiezen tussen de antwoorden ja of nee.');
									if (candy == 'nee') {
										alert ('Hoe lekker de lolly er ook uiziet pak je hem niet af en loop je verder met een honerig gevoel.');
										var choice3 = prompt ('Je komt weer bij een spilisting. Je kan links of rechts waar ga je heen? Je kunt kiezen tussen de antwoorden links of rechts.');
											if (choice3 == 'links') {
												alert ('Je gaat naar links en na een tijdje heb je wel genoeg van je avondtuur. Alleen weet je de weg niet meer terug. Je hebt dagen gezocht maar je hebt je huis niet meer kunnen vinden. Later sterf je aan te kort aan eten. Wat een triest einde he maar ja het is wel het einde voor je.');
												document.write ('Dit is het einde alleen zijn der ook andere eindes dus zou je wel het goede einde willen halen zal je het opnieuw moeten gaan doen.');
											}else if (choice3 == 'rechts') {
												alert ('Je gaat naar rechts en je komt je huis tegen. Je was al bang dat je die nooit meer zou zien. Maar gelukkig ben je weer bij je huisje en heb je een goed avondtuur beleeft.');
												document.write ('Je hebt het goede einde kunnen vinden maar je kunt natuurlijk de game nog een keer doen om de andere eindes te zien. Goed werk!');
											}
									}else{
										alert ('Je pakt de lolly af en loopt door. Je hoort hem nog iets in het russchisch schrewen wat klink als schelt woorden, maar je verstaat het toch niet en loopt door.');
										var choice3 = prompt ('Je komt weer bij een spilisting. Je kan links of rechts waar ga je heen? Je kunt kiezen tussen de antwoorden links of rechts.');
											if (choice3 == 'links') {
												alert ('Je gaat naar links en na een tijdje heb je wel genoeg van je avondtuur. Alleen weet je de weg niet meer terug. Je hebt dagen gezocht maar je hebt je huis niet meer kunnen vinden. Later sterf je aan te kort aan eten. Wat een triest einde he maar ja het is wel het einde voor je.');
												document.write ('Dit is het einde alleen zijn der ook andere eindes dus zou je wel het goede einde willen halen zal je het opnieuw moeten gaan doen.');
											}else if (choice3 == 'rechts') {
												alert ('Je gaat naar rechts en je komt je huis tegen. Je was al bang dat je die nooit meer zou zien. Maar gelukkig ben je weer bij je huisje en heb je een goed avondtuur beleeft.');
												document.write ('Je hebt het goede einde kunnen vinden maar je kunt natuurlijk de game nog een keer doen om de andere eindes te zien. Goed werk!');
											}
									}
							}
					}else if (choice2 == 'rechts') {
						alert ('Na al dat lopen heb je wel honger gekregen en aangezien je je lunch thuis hebt laten liggen komt zo\'n banaantje wel van pas. Je loop naar de boom toe en pakt een banaan. Je neemt een hap van de banaan en je begint je steeds minder goed te voelen en dan herinner je het weer. Je bent alergies voor bananen. Het duurde nog geen 5 minuten of alles was gebeurd. Wat een triest einde he maar ja het is wel het einde voor je.');
						document.write ('Dit is het einde alleen zijn der ook andere eindes dus zou je wel het goede einde willen halen zal je het opnieuw moeten gaan doen.');
					}
			}else{
				alert ('Rekenen is nooit je sterkste punt geweest. Je scored de'+ ' '+ right +' ' + 'goal\(s\) die je dacht nodig te hebben om niet te verliezen en loopt weer verder. Ook al heb je verloren voel je je een winnaar, maar dat komt waarschijnlijk, omdat je ook denkt dat je ook echt gewonen hebt. ');
			var choice2 = prompt ('Je komt bij een spilisting. Je kan links af waar een klein eng meisje op de grond zit die je vol in je ogen aankijkt. Of je kan naar rechts waar je een bananen boom ziet staan. Welke kant ga je op? Je kunt kiezen tussen de antwoorden links of rechts.');
					if (choice2 !== 'rechts') {
						alert ('Met de gedachte wat kan ik nou verliezen beslis je om links te gaan. Bij elke stap die je naar voren zet beginnen haar ogen meer te gloeien. Maar als je eenmaal langs haar bent loop je weer verder. Dan bedenk je je dat niet alles zo is zoals het lijkt. Ze leek namelijk heel gevaarlijk maar ze was het niet.');
						var stress = prompt ('Er komt een heel gestreste mevrouw naar je toe rennen. Als ze eindelijk bij je is vraagt ze \'is het getal 8 minder dan het getal 14\' Je kunt kiezen tussen de antwoorden ja of nee.');
							if (stress == 'ja') {
								alert ('\'Ja nu je het zegt je hebt gelijk bedankt.\' Ze loopt nu zonder stress en met een grote glimlach weer door. Niks bezonders maar je hebt om se minst iemand blij gemaakt en je loopt weer door.');
								var candy = prompt ('Een klein jochie met een lolly komt jou kant op gelopen. Je heb eigenlijk wel honger, maar je kan het niet maken om de lolly of te pakken toch? Je kunt kiezen tussen de antwoorden ja of nee.');
									if (candy == 'nee') {
										alert ('Hoe lekker de lolly er ook uiziet pak je hem niet af en loop je verder met een honerig gevoel.');
										var choice3 = prompt ('Je komt weer bij een spilisting. Je kan links of rechts waar ga je heen? Je kunt kiezen tussen de antwoorden links of rechts.');
											if (choice3 == 'links') {
												alert ('Je gaat naar links en na een tijdje heb je wel genoeg van je avondtuur. Alleen weet je de weg niet meer terug. Je hebt dagen gezocht maar je hebt je huis niet meer kunnen vinden. Later sterf je aan te kort aan eten. Wat een triest einde he maar ja het is wel het einde voor je.');
												document.write ('Dit is het einde alleen zijn der ook andere eindes dus zou je wel het goede einde willen halen zal je het opnieuw moeten gaan doen.');
											}else if (choice3 == 'rechts') {
												alert ('Je gaat naar rechts en je komt je huis tegen. Je was al bang dat je die nooit meer zou zien. Maar gelukkig ben je weer bij je huisje en heb je een goed avondtuur beleeft.');
												document.write ('Je hebt het goede einde kunnen vinden maar je kunt natuurlijk de game nog een keer doen om de andere eindes te zien. Goed werk!');
											}
									}else{
										alert ('Je pakt de lolly af en loopt door. Je hoort hem nog iets in het russchisch schrewen wat klink als schelt woorden, maar je verstaat het toch niet en loopt door.');
										var choice3 = prompt ('Je komt weer bij een spilisting. Je kan links of rechts waar ga je heen? Je kunt kiezen tussen de antwoorden links of rechts.');
											if (choice3 == 'links') {
												alert ('Je gaat naar links en na een tijdje heb je wel genoeg van je avondtuur. Alleen weet je de weg niet meer terug. Je hebt dagen gezocht maar je hebt je huis niet meer kunnen vinden. Later sterf je aan te kort aan eten. Wat een triest einde he maar ja het is wel het einde voor je.');
												document.write ('Dit is het einde alleen zijn der ook andere eindes dus zou je wel het goede einde willen halen zal je het opnieuw moeten gaan doen.');
											}else if (choice3 == 'rechts') {
												alert ('Je gaat naar rechts en je komt je huis tegen. Je was al bang dat je die nooit meer zou zien. Maar gelukkig ben je weer bij je huisje en heb je een goed avondtuur beleeft.');
												document.write ('Je hebt het goede einde kunnen vinden maar je kunt natuurlijk de game nog een keer doen om de andere eindes te zien. Goed werk!');
											}
									}
							}else{
								alert ('Het lijkt wel of je haar meer gestrest hebt gemaakt. Ze rend namelijk nog harder weg dan eerst. Ach dan moet ze zelf niet zo dom zijn en je loopt weer verder.');
								var candy = prompt ('Een klein jochie met een lolly komt jou kant op gelopen. Je heb eigenlijk wel honger, maar je kan het niet maken om de lolly of te pakken toch? Je kunt kiezen tussen de antwoorden ja of nee.');
									if (candy == 'nee') {
										alert ('Hoe lekker de lolly er ook uiziet pak je hem niet af en loop je verder met een honerig gevoel.');
										var choice3 = prompt ('Je komt weer bij een spilisting. Je kan links of rechts waar ga je heen? Je kunt kiezen tussen de antwoorden links of rechts.');
											if (choice3 == 'links') {
												alert ('Je gaat naar links en na een tijdje heb je wel genoeg van je avondtuur. Alleen weet je de weg niet meer terug. Je hebt dagen gezocht maar je hebt je huis niet meer kunnen vinden. Later sterf je aan te kort aan eten. Wat een triest einde he maar ja het is wel het einde voor je.');
												document.write ('Dit is het einde alleen zijn der ook andere eindes dus zou je wel het goede einde willen halen zal je het opnieuw moeten gaan doen.');
											}else if (choice3 == 'rechts') {
												alert ('Je gaat naar rechts en je komt je huis tegen. Je was al bang dat je die nooit meer zou zien. Maar gelukkig ben je weer bij je huisje en heb je een goed avondtuur beleeft.');
												document.write ('Je hebt het goede einde kunnen vinden maar je kunt natuurlijk de game nog een keer doen om de andere eindes te zien. Goed werk!');
											}
									}else{
										alert ('Je pakt de lolly af en loopt door. Je hoort hem nog iets in het russchisch schrewen wat klink als schelt woorden, maar je verstaat het toch niet en loopt door.');
										var choice3 = prompt ('Je komt weer bij een spilisting. Je kan links of rechts waar ga je heen? Je kunt kiezen tussen de antwoorden links of rechts.');
											if (choice3 == 'links') {
												alert ('Je gaat naar links en na een tijdje heb je wel genoeg van je avondtuur. Alleen weet je de weg niet meer terug. Je hebt dagen gezocht maar je hebt je huis niet meer kunnen vinden. Later sterf je aan te kort aan eten. Wat een triest einde he maar ja het is wel het einde voor je.');
												document.write ('Dit is het einde alleen zijn der ook andere eindes dus zou je wel het goede einde willen halen zal je het opnieuw moeten gaan doen.');
											}else if (choice3 == 'rechts') {
												alert ('Je gaat naar rechts en je komt je huis tegen. Je was al bang dat je die nooit meer zou zien. Maar gelukkig ben je weer bij je huisje en heb je een goed avondtuur beleeft.');
												document.write ('Je hebt het goede einde kunnen vinden maar je kunt natuurlijk de game nog een keer doen om de andere eindes te zien. Goed werk!');
											}
									}
							}
					}else if (choice2 == 'rechts') {
						alert ('Na al dat lopen heb je wel honger gekregen en aangezien je je lunch thuis hebt laten liggen komt zo\'n banaantje wel van pas. Je loop naar de boom toe en pakt een banaan. Je neemt een hap van de banaan en je begint je steeds minder goed te voelen en dan herinner je het weer. Je bent alergies voor bananen. Het duurde nog geen 5 minuten of alles was gebeurd. Wat een triest einde he maar ja het is wel het einde voor je.');
						document.write ('Dit is het einde alleen zijn der ook andere eindes dus zou je wel het goede einde willen halen zal je het opnieuw moeten gaan doen.');
					}
			}
	}else{
		alert ('Je hebt geen mogelijk antwoord gegeven probeer het opnieuw.');

	}