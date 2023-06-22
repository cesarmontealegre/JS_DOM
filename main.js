// Ejercicio 1 - Manipulación de cadenas
document.getElementById('stringForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let palabra = document.getElementById('palabraInput').value;
  let opcion = document.getElementById('opcionSelect').value;
  
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
  
  let temperatura = parseFloat(document.getElementById('temperaturaInput').value);
  let convertirDe = document.getElementById('unidadDeSelect').value;
  let convertirA = document.getElementById('unidadASelect').value;
  let resultado;

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
  let lado1 = parseFloat(document.getElementById('lado1Input').value);
  let lado2 = parseFloat(document.getElementById('lado2Input').value);
  let lado3 = parseFloat(document.getElementById('lado3Input').value);
  
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

  let nombre = document.getElementById('nombreSelect').value;
  let apellido = document.getElementById('apellidoSelect').value;
  let actividad = document.getElementById('actividadSelect').value;

  if (nombre === 'Juan' && apellido === 'Pérez' && actividad === 'Programación') {
    alert('La respuesta es correcta');
  } else {
    alert('La respuesta es incorrecta');
  }
});

// Ejercicio 5 - Cálculo del área y perímetro de figuras geométricas
document.getElementById('figuraForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let figura = document.getElementById('figuraSelect').value;

  if (figura === 'cuadrado') {
    let lado = parseFloat(document.getElementById('ladoInput').value);
    let area = lado * lado;
    let perimetro = 4 * lado;
    alert('El área del cuadrado es: ' + area.toFixed(2) + ', y el perímetro es: ' + perimetro.toFixed(2));
  } else if (figura === 'rectangulo') {
    let base = parseFloat(document.getElementById('baseInput').value);
    let altura = parseFloat(document.getElementById('alturaInput').value);
    let area = base * altura;
    let perimetro = 2 * (base + altura);
    alert('El área del rectángulo es: ' + area.toFixed(2) + ', y el perímetro es: ' + perimetro.toFixed(2));
  } else if (figura === 'circulo') {
    let radio = parseFloat(document.getElementById('ladoInput').value);
    let area = Math.PI * radio * radio;
    let perimetro = 2 * Math.PI * radio;
    alert('El área del círculo es: ' + area.toFixed(2) + ', y el perímetro es: ' + perimetro.toFixed(2));
  }
});


document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Validar todos los campos obligatorios
  let tipoDocumento = document.getElementById('tipoDocumento').value;
  let documento = document.getElementById('documento').value;
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let fechaNacimiento = document.getElementById('fechaNacimiento').value;
  let correoElectronico = document.getElementById('correoElectronico').value;
  let password = document.getElementById('password').value;
  let confirmarPassword = document.getElementById('confirmarPassword').value;
  let terminosCheckbox = document.getElementById('terminosCheckbox').checked;

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
  let alphanumericRegex = /^[a-zA-Z0-9]+$/;
  if (!alphanumericRegex.test(nombre) || !alphanumericRegex.test(apellido)) {
    alert('Los campos de nombre y apellido solo pueden contener caracteres alfanuméricos.');
    return;
  }


  // Validaciones del Formulario
  
  // Validar fecha de nacimiento (mayores de 18 años)
  let fechaNacimientoDate = new Date(fechaNacimiento);
  let hoy = new Date();
  let edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
  let m = hoy.getMonth() - fechaNacimientoDate.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < fechaNacimientoDate.getDate())) {
    edad--;
  }
  if (edad < 18) {
    alert('Debe ser mayor de 18 años para registrarse.');
    return;
  }

  // Validar dominio del correo electrónico
  let correoElectronicoRegex = /^[^\s@]+@misena\.edu\.co$/;
  if (!correoElectronicoRegex.test(correoElectronico)) {
    alert('El correo electrónico debe tener el dominio @misena.edu.co.');
    return;
  }

  // Validar formato y longitud del password
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
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