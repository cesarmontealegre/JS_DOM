// Ejercicio 1 - Manipulación de cadenas
document.getElementById('stringForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var palabra = document.getElementById('palabraInput').value;
  var opcion = document.getElementById('opcionSelect').value;
  
  if (opcion === 'longitud') {
    alert('La longitud de la palabra es: ' + palabra.length);
  } else if (opcion === 'mayusculas') {
    alert('La palabra en mayúsculas es: ' + palabra.toUpperCase());
  } else if (opcion === 'minusculas') {
    alert('La palabra en minúsculas es: ' + palabra.toLowerCase());
  } else if (opcion === 'primerCaracter') {
    alert('El primer carácter de la palabra es: ' + palabra.charAt(0));
  }
});

// Ejercicio 2 - Conversión de temperatura
document.getElementById('temperaturaForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  var temperatura = parseFloat(document.getElementById('temperaturaInput').value);
  var convertirDe = document.getElementById('unidadDeSelect').value;
  var convertirA = document.getElementById('unidadASelect').value;
  var resultado;

  if (convertirDe === 'celsius' && convertirA === 'fahrenheit') {
    resultado = (temperatura * 9/5) + 32;
    alert('La temperatura convertida es: ' + resultado.toFixed(2) + ' °F');
  } else if (convertirDe === 'celsius' && convertirA === 'kelvin') {
    resultado = temperatura + 273.15;
    alert('La temperatura convertida es: ' + resultado.toFixed(2) + ' K');
  } else if (convertirDe === 'fahrenheit' && convertirA === 'celsius') {
    resultado = (temperatura - 32) * 5/9;
    alert('La temperatura convertida es: ' + resultado.toFixed(2) + ' °C');
  } else if (convertirDe === 'fahrenheit' && convertirA === 'kelvin') {
    resultado = (temperatura + 459.67) * 5/9;
    alert('La temperatura convertida es: ' + resultado.toFixed(2) + ' K');
  } else if (convertirDe === 'kelvin' && convertirA === 'celsius') {
    resultado = temperatura - 273.15;
    alert('La temperatura convertida es: ' + resultado.toFixed(2) + ' °C');
  } else if (convertirDe === 'kelvin' && convertirA === 'fahrenheit') {
    resultado = (temperatura * 9/5) - 459.67;
    alert('La temperatura convertida es: ' + resultado.toFixed(2) + ' °F');
  }
});


// Ejercicio 3 - Tipo de triángulo
document.getElementById('trianguloForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var lado1 = parseFloat(document.getElementById('lado1Input').value);
  var lado2 = parseFloat(document.getElementById('lado2Input').value);
  var lado3 = parseFloat(document.getElementById('lado3Input').value);
  
  if (lado1 === lado2 && lado2 === lado3) {
    alert('El triángulo es equilátero');
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    alert('El triángulo es isósceles');
  } else {
    alert('El triángulo es escaleno');
  }
});

// Ejercicio 4 - Comprobación de nombres y actividades
document.getElementById('nombresForm').addEventListener('submit', function(e) {
  e.preventDefault();

  var nombre = document.getElementById('nombreSelect').value;
  var apellido = document.getElementById('apellidoSelect').value;
  var actividad = document.getElementById('actividadSelect').value;

  if (nombre === 'Juan' && apellido === 'Pérez' && actividad === 'Programación') {
    alert('La respuesta es correcta');
  } else {
    alert('La respuesta es incorrecta');
  }
});


// Ejercicio 5 - Cálculo del área y perímetro de figuras geométricas
document.getElementById('figuraForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var figura = document.getElementById('figuraSelect').value;
  
  if (figura === 'circulo') {
    // Mostrar ventana modal para calcular el área y perímetro del círculo
    $('#circuloModal').modal('show');
  } else if (figura === 'triangulo') {
    // Mostrar ventana modal para calcular el área y perímetro del triángulo
    $('#trianguloModal').modal('show');
  } else if (figura === 'rectangulo') {
    // Mostrar ventana modal para calcular el área y perímetro del rectángulo
    $('#rectanguloModal').modal('show');
  } else if (figura === 'cuadrado') {
    // Mostrar ventana modal para calcular el área y perímetro del cuadrado
    $('#cuadradoModal').modal('show');
  }
});

// Función para calcular el área y perímetro del círculo
function calcularAreaCirculo() {
  var radio = parseFloat(document.getElementById('circuloRadio').value);
  var area = Math.PI * Math.pow(radio, 2);
  var perimetro = 2 * Math.PI * radio;
  
  alert('El área del círculo es: ' + area.toFixed(2));
  alert('El perímetro del círculo es: ' + perimetro.toFixed(2));
}

// Función para calcular el área y perímetro del triángulo
function calcularAreaTriangulo() {
  var base = parseFloat(document.getElementById('trianguloBase').value);
  var altura = parseFloat(document.getElementById('trianguloAltura').value);
  var lado1 = parseFloat(document.getElementById('trianguloLado1').value);
  var lado2 = parseFloat(document.getElementById('trianguloLado2').value);
  var perimetro = lado1 + lado2 + base;
  var area = (base * altura) / 2;
  
  alert('El área del triángulo es: ' + area.toFixed(2));
  alert('El perímetro del triángulo es: ' + perimetro.toFixed(2));
}

// Función para calcular el área y perímetro del rectángulo
function calcularAreaRectangulo() {
  var base = parseFloat(document.getElementById('rectanguloBase').value);
  var altura = parseFloat(document.getElementById('rectanguloAltura').value);
  var area = base * altura;
  var perimetro = 2 * (base + altura);
  
  alert('El área del rectángulo es: ' + area.toFixed(2));
  alert('El perímetro del rectángulo es: ' + perimetro.toFixed(2));
}

// Función para calcular el área y perímetro del cuadrado
function calcularAreaCuadrado() {
  var lado = parseFloat(document.getElementById('cuadradoLado').value);
  var area = Math.pow(lado, 2);
  var perimetro = 4 * lado;
  
  alert('El área del cuadrado es: ' + area.toFixed(2));
  alert('El perímetro del cuadrado es: ' + perimetro.toFixed(2));
}


document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Validar todos los campos obligatorios
  var tipoDocumento = document.getElementById('tipoDocumento').value;
  var documento = document.getElementById('documento').value;
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var fechaNacimiento = document.getElementById('fechaNacimiento').value;
  var correoElectronico = document.getElementById('correoElectronico').value;
  var password = document.getElementById('password').value;
  var confirmarPassword = document.getElementById('confirmarPassword').value;
  var terminosCheckbox = document.getElementById('terminosCheckbox').checked;

  if (
    tipoDocumento === '' ||
    documento === '' ||
    nombre === '' ||
    apellido === '' ||
    fechaNacimiento === '' ||
    correoElectronico === '' ||
    password === '' ||
    confirmarPassword === '' ||
    !terminosCheckbox
  ) {
    alert('Por favor, complete todos los campos obligatorios.');
    return;
  }

  // Validar longitud del número de documento
  if (documento.length < 5) {
    alert('El número de documento debe tener al menos 5 caracteres.');
    return;
  }

  // Validar que los campos de nombre y apellido sean alfanuméricos
  var alphanumericRegex = /^[a-zA-Z0-9]+$/;
  if (!alphanumericRegex.test(nombre) || !alphanumericRegex.test(apellido)) {
    alert('Los campos de nombre y apellido solo pueden contener caracteres alfanuméricos.');
    return;
  }


  // Validaciones del Formulario
  
  // Validar fecha de nacimiento (mayores de 18 años)
  var fechaNacimientoDate = new Date(fechaNacimiento);
  var hoy = new Date();
  var edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
  var m = hoy.getMonth() - fechaNacimientoDate.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < fechaNacimientoDate.getDate())) {
    edad--;
  }
  if (edad < 18) {
    alert('Debe ser mayor de 18 años para registrarse.');
    return;
  }

  // Validar dominio del correo electrónico
  var correoElectronicoRegex = /^[^\s@]+@misena\.edu\.co$/;
  if (!correoElectronicoRegex.test(correoElectronico)) {
    alert('El correo electrónico debe tener el dominio @misena.edu.co.');
    return;
  }

  // Validar formato y longitud del password
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
  if (!passwordRegex.test(password)) {
    alert('El password debe tener al menos una letra mayúscula, una letra minúscula, un número, un carácter especial y ser de mínimo 10 caracteres.');
    return;
  }

  // Validar que el password y la confirmación sean iguales
  if (password !== confirmarPassword) {
    alert('El password y la confirmación no coinciden.');
    return;
  }

  // Validación de términos de uso
  if (!terminosCheckbox) {
    alert('Debe aceptar los términos de uso para registrarse.');
    return;
  }

  // Si se llega a este punto, todos los campos son válidos
  alert('Registro exitoso. Gracias por registrarte.');

  // Restablecer los campos del formulario
  document.getElementById('registrationForm').reset();
});
