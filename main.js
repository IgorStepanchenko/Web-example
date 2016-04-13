// var user = prompt("Кто пришел?", "") ;
// if (user == "Админ") {
// 	var admin = prompt("Пароль?", "")
// 		if (admin == "Черный Властелин") {
// 			alert( "Добро пожаловать" );
// 		} else if (admin == null) {
// 			alert( "Вход отменён" )
// 		} else {
// 			alert( "Пароль неверен" );
// 		}

	

// 	} else if (user == null) {
// 		alert( "Вход отменён" )
// 	} else {
// 		alert( "Я вас не знаю" );
// 	}

// привет

// var massage;
// var login = prompt("Who?", "");
// massage = (login == "Вася") ?  'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : '' ;
// alert( massage );
// конец

// var age ;
// if (age !> 14 && age !< 90);

// var i = 0
// while ( i < 3) {
// 	alert( i );
// 	i++
// }

//  var A = 0 ;
//  for (; i > 5; i++ ) {
	
// }

// var b ;
// for (b = 2; i < 10; i++) {
// 	if (i % 2 == 0) {
// 		alert( i );
// 	}
// }

// var i = 0;
// while (i < 3) {
// 	alert("номер " + i + "!" )
// 	i++
// }

// var browser = prompt("Введите имя браузера", "");
// if (browser === "IE") {
// 	alert( 'О, да у вас IE!' );
// } else if(browser == "Crome" 
// 	|| browser == "Firefox" 
// 	|| browser == "Safari" 
// 	|| browser == "Opera") {
//  alert( 'Да, и эти браузеры мы поддерживаем' );
// } else {
// 	alert( 'Мы надеемся, что и в вашем браузере все ок!' );
// }


// var a = +prompt("a?", '');
// switch (a) {
// 	case 0:
// 	alert( 0 );
// 	break;

// 	case 1:
// 	alert( 1 );
// 	break;

// 	case 2:
// 	case 3: 
// 	alert( "2,3" );
// 	break;
// }

// function myFunction(age) {
// 	return if(age > 18) {
// 		return  true 
// 	} else {
// 		return confirm( "A roditeli znayut?" )
// 	}
// }



// var age = prompt("You age?");
// if (myFunction(age)) {
// 	alert( "Dostup razresh" )
// } else {
// 	alert( "Dostup zapr" )
// }


//function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// var age = prompt('Ваш возраст?');

// if (checkAge(age)) {
//   alert( 'Доступ разрешен' );
// } else {
//   alert( 'В доступе отказано' );
// } 

// function checkAge(age) {
// 	return (age > 18) ?  true : confirm('Родители разрешили?');
// }

// function checkAge(age) {
// 	return (age > 18)  || confirm('Родители разрешили?');
// }

// function min(a,b) {
// 	if (a > b) {
// 		return b;
// 	} else  {
// 		return a;
// 	}
// }

// var perimetr = function (number1, number2) {
// 	return (number1 + number2) * 2;
// }

//  console.log(perimetr(10,5));


// var age = +prompt("Your age?", "");

// var myFunc;

// if (age >=18) {
//  myFunc = function() {
//  	alert( "Hello" );
//  }
// } else {
// 	myFunc = function() {
// 		alert( "no" );
// 	}
// }
// myFunc();










// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );



window.onload = function() {

var scrollUp = document.getElementById('with-png');

scrollUp.onclick = function() {
	window.scrollTo(0,0);
}

var btn_happy = document.getElementById('btn-happy');

var spisok = document.getElementById('spisok');

var vizov = document.getElementById('btn-vizov');

vizov.onclick = function() {
	spisok.style.display = 'block';
}




btn_happy.onclick = function() {
	spisok.style.display = 'none';
}


}

