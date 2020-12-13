
//Creamos un objeto Phaser.Game que mantendrá el mapa de las sedes UN.center
//Este objetivo es de tipo Canvas, que hace referencia a un lienzo bajo el nombre de interactivoUnal
//El tamano de este será un pixel más que la imagen original
var juego = new Phaser.Game(255, 351, Phaser.CANVAS, "interactivoUnal"); 

// se declaran todas las variables que usaremos
var fondojuego; //Mantendra la imagen del mapa utilizado

var ultimo; //mantendra información del ultimo boton oprimido, cuando se haya oprimido alguno o se haya oprimido un numero de 1-9
var tamBoton = 0.18; //tamano inicial de los botones
var tamBotonfinal = 0.25; //tamano de los botones cuando se ha seleccionado alguno

var jugar = { //creacion de juego
	preload: function() {  //funcion que pre-carga los archivos necesario para el juego
		juego.load.image("fondo", "imagenes/mapaSedesUN.png"); //Se carga la imagen del mapa de sedes UN bajo el nombre de fondo
		juego.load.image("boton", "imagenes/play.png"); //Se carga la imagen del boton bajo el nombre de boton
	},
	
	create: function() { //Agrega por primera vez los elementos al juego
		fondojuego = juego.add.tileSprite(0, 0, 254, 350, "fondo"); //Agregamos la imagen fondo con sus dimensiones. Es de tipo titleSprite para que permita animaciones.
		
		boton7 = juego.add.button(2, 217, "boton", this.texto7, this); //Agregamos un boton que hace referencia a una sede UN
		boton7.scale.setTo(tamBoton, tamBoton); //Cambiamos el tamano el boton a una variable antes definida.
		
		boton4 = juego.add.button(10, 10, "boton", this.texto4, this);
		boton4.scale.setTo(tamBoton, tamBoton);

		boton8 = juego.add.button(43, 180, "boton", this.texto8, this);
		boton8.scale.setTo(tamBoton, tamBoton);

		boton9 = juego.add.button(63, 120, "boton", this.texto9, this);
		boton9.scale.setTo(tamBoton, tamBoton);

		boton6 = juego.add.button(70, 145, "boton", this.texto6, this);
		boton6.scale.setTo(tamBoton, tamBoton);

		boton2 = juego.add.button(90, 150, "boton", this.texto2, this);
		boton2.scale.setTo(tamBoton, tamBoton);

		boton1 = juego.add.button(102, 44, "boton", this.texto1, this);
		boton1.scale.setTo(tamBoton, tamBoton);

		boton3 = juego.add.button(160, 102, "boton", this.texto3, this);
		boton3.scale.setTo(tamBoton, tamBoton);

		boton5 = juego.add.button(180, 335, "boton", this.texto5, this);
		boton5.scale.setTo(tamBoton, tamBoton);

		flechaderecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT); // activa la tecla derecha para su uso
		flechaizquierda = juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);  // activa la tecla izquierda para su uso

		num1 = juego.input.keyboard.addKey(Phaser.Keyboard.ONE);  // activa la tecla # 1 - creamos un objeto al que luego haremos referencia
		num2 = juego.input.keyboard.addKey(Phaser.Keyboard.TWO);  // activa la tecla # 2
		num3 = juego.input.keyboard.addKey(Phaser.Keyboard.THREE);  // activa la tecla # 3
		num4 = juego.input.keyboard.addKey(Phaser.Keyboard.FOUR);  // activa la tecla # 4
		num5 = juego.input.keyboard.addKey(Phaser.Keyboard.FIVE);  // activa la tecla # 5
		num6 = juego.input.keyboard.addKey(Phaser.Keyboard.SIX);  // activa la tecla # 6
		num7 = juego.input.keyboard.addKey(Phaser.Keyboard.SEVEN);  // activa la tecla # 7
		num8 = juego.input.keyboard.addKey(Phaser.Keyboard.EIGHT);  // activa la tecla # 8
		num9 = juego.input.keyboard.addKey(Phaser.Keyboard.NINE	);  // activa la tecla # 9

	},
	
	update: function(){ //aplica los cambios durante la vida de ejecución del programa
		
		if (flechaderecha.downDuration(1)){ //Si la flecha fue oprimida, procede cambiar el titulo y contenido segun corresponda
			switch (ultimo) { //Estructura similar a if - then
				case "texto1":
					this.texto2(); //ejecutará la función texto2() que hace referencia a la sede Bogota
					break; // No permite que siga revisando los cases
				case "texto2":
					this.texto3();
					break;
				case "texto3":
					this.texto4();
					break;
				case "texto4":
					this.texto5();
					break;
				case "texto5":
					this.texto6();
					break;
				case "texto6":
					this.texto7();
					break;
				case "texto7":
					this.texto8();
					break;
				case "texto8":
					this.texto9();
					break;
				case "texto9":
					this.texto1();
					break;
				default: //cuando no corresponde a ningun valor, viene a aquí
					document.getElementById("tituloInt").innerHTML = "Escoge un sede por la cual avanzar primero"; //buscamos el elemento por el id y le cambios su contenido
					document.getElementById("textoInt").innerHTML = "Para empezar oprime un botón del mapa.";
					break;
			}
		}

		if(flechaizquierda.downDuration(1)){
			switch (ultimo) {
				case "texto1":
					this.texto9();
					break;
				case "texto2":
					this.texto1();
					break;
				case "texto3":
					this.texto2();
					break;
				case "texto4":
					this.texto3();
					break;
				case "texto5":
					this.texto4();
					break;
				case "texto6":
					this.texto5();
					break;
				case "texto7":
					this.texto6();
					break;
				case "texto8":
					this.texto7();
					break;
				case "texto9":
					this.texto8();
					break;
				default:
					document.getElementById("tituloInt").innerHTML = "Escoge un sede por la cual avanzar primero";
					document.getElementById("textoInt").innerHTML = "Puedes utilizar las flechas derecha e izquierda para moverte por ellas.";
					break;
			}
		}

		if(num1.isDown)	this.texto1(); //si el numero uno es oprimido, ejecuta la funcion texto1.
		if(num2.isDown) this.texto2();
		if(num3.isDown) this.texto3();
		if(num4.isDown) this.texto4();
		if(num5.isDown) this.texto5();
		if(num6.isDown) this.texto6();
		if(num7.isDown) this.texto7();
		if(num8.isDown) this.texto8();
		if(num9.isDown) this.texto9();

	},
	texto1: function() { // funcion que cambia los contenidos para presentar la informacion de la sede correspondiente
		document.getElementById("tituloInt").innerHTML = "Sede de la Paz"; //Cambios por el titulo de la sede
		document.getElementById("textoInt").innerHTML = "Ubicada en el municipio de La Paz, Departamento del Cesar, diseñada por el arquitecto y profesor de la sede Manizales, Edison Henao Carvajal."; //Cambios por el contenido de la sede
		this.alpha(); // ejecuta alpha que hace a todos los botones quedan con la misma transparencia y tamano
		boton1.alpha = 1; //al boton actual oprimito le dejamos el alpha en 1
		boton1.scale.setTo(tamBotonfinal, tamBotonfinal); //Escalamos el boton oprimido para que sepa la sede en la que está
		ultimo = "texto1"; //actualizamos la variable ultimo, con información del ultimo boton oprimido
	},
	texto2: function() {
		document.getElementById("tituloInt").innerHTML = "Sede Bogotá";
		document.getElementById("textoInt").innerHTML = "Esta sede ofrece cerca del 54% de los cupos para nuevos estudiantes a nivel nacional y cuenta con 1963 docentes de planta.";
		this.alpha();
		boton2.alpha = 1;
		boton2.scale.setTo(tamBotonfinal, tamBotonfinal);
		ultimo = "texto2";
	},
	texto3: function() {
		document.getElementById("tituloInt").innerHTML = "Sede Orinoquia";
		document.getElementById("textoInt").innerHTML = "Ubicada en la Hacienda El Cairo, km. 9 vía al municipio de Tame, localizada en los llanos orientales, limita con Venezuela y tiene un radio de acción amplio.";
		this.alpha();
		boton3.alpha = 1;
		boton3.scale.setTo(tamBotonfinal, tamBotonfinal);
		ultimo = "texto3";
	},
	texto4: function() {
		document.getElementById("tituloInt").innerHTML = "Sede Caribe";
		document.getElementById("textoInt").innerHTML = "Cuenta con el Instituto de Estudios Caribeños, que tiene como fin realizar actividades de investigación, docencia y extensión para fortalecer el desarrollo de la Región Caribe.";
		this.alpha();
		boton4.alpha = 1;
		boton4.scale.setTo(tamBotonfinal, tamBotonfinal);
		ultimo = "texto4";
	},
	texto5: function() {
		document.getElementById("tituloInt").innerHTML = "Sede Amazonia";
		document.getElementById("textoInt").innerHTML = "Su campus recoge elementos locales y autóctonos en su diseño, méritos que fueron destacados en la XVI Bienal de Arquitectura Colombiana.";
		this.alpha();
		boton5.alpha = 1;
		boton5.scale.setTo(tamBotonfinal, tamBotonfinal);
		ultimo = "texto5";
	},
	texto6: function() {
		document.getElementById("tituloInt").innerHTML = "Sede Manizales";
		document.getElementById("textoInt").innerHTML = "Esta sede ofrece aproximadamente el 11% de los cupos para nuevos estudiantes a nivel Nacional.";
		this.alpha();
		boton6.alpha = 1;
		boton6.scale.setTo(tamBotonfinal, tamBotonfinal);
		ultimo = "texto6";
	},
	texto7: function() {
		document.getElementById("tituloInt").innerHTML = "Sede Tumaco";
		document.getElementById("textoInt").innerHTML = "Sede de presencia nacional de la Universidad Nacional de Colombia, ubicada en el municipio de Tumaco. Fue establecida por el Consejo Superior Universitario en 1997.";
		this.alpha();
		boton7.alpha = 1;
		boton7.scale.setTo(tamBotonfinal, tamBotonfinal);
		ultimo = "texto7";
	},
	texto8: function() {
		document.getElementById("tituloInt").innerHTML = "Sede Palmira";
		document.getElementById("textoInt").innerHTML = "Está ubicada en el sur de la ciudad, sobre la carretera que conduce a las poblaciones de Candelaria y El Bolo.";
		this.alpha();
		boton8.alpha = 1;
		boton8.scale.setTo(tamBotonfinal, tamBotonfinal);
		ultimo = "texto8";
	},
	texto9: function() {
		document.getElementById("tituloInt").innerHTML = "Sede Medellín";
		document.getElementById("textoInt").innerHTML = "Cuenta con dos campus: Núcleo Robledo y Núcleo El Volador, este último comprende, además, el Núcleo Del Río. En la sede estudian unos 12 437 estudiantes.";
		this.alpha();
		boton9.alpha = 1;
		boton9.scale.setTo(tamBotonfinal, tamBotonfinal);
		ultimo = "texto9";
	},
	alpha: function(){ //funciones que coloca a todos los botones con el mismo alpha y escala.
		boton1.alpha = 0.4;
		boton2.alpha = 0.4;
		boton3.alpha = 0.4;
		boton4.alpha = 0.4;
		boton5.alpha = 0.4;
		boton6.alpha = 0.4;
		boton7.alpha = 0.4;
		boton8.alpha = 0.4;
		boton9.alpha = 0.4;

		boton1.scale.setTo(tamBoton, tamBoton);
		boton2.scale.setTo(tamBoton, tamBoton);
		boton3.scale.setTo(tamBoton, tamBoton);
		boton4.scale.setTo(tamBoton, tamBoton);
		boton5.scale.setTo(tamBoton, tamBoton);
		boton6.scale.setTo(tamBoton, tamBoton);
		boton7.scale.setTo(tamBoton, tamBoton);
		boton8.scale.setTo(tamBoton, tamBoton);
		boton9.scale.setTo(tamBoton, tamBoton);
	}
}

juego.state.add("activo", jugar); //agregamos el estado activo a jugar
juego.state.start("activo"); //ejecutamos el estado activo
