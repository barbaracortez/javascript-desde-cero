function cantidadDeVocales(phrase) {
  // Cuenta la cantidad de vocales en la frase pasada por parametros utilizando un bucle for
  // Tu código:👇
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < phrase.length; i++) {
    if (vowels.includes(phrase[i])) {
      count++;
    }
  }
  return count;
}

function primerDivisible(divisor, dividendo) {
  // Encuentra el primer número divisible por 'num' a partir de un número dado utilizando un bucle while
  // Tu código:👇
  let num = dividendo;
  while (num % divisor !== 0) {
    num++;
  }
  return num;
}

function encuentraX(x) {
  //Realiza un algoritmo que recorre numeros del 1 al 100, cuando pase por el numero X pasado por parametros
  // retornar "El numero X es: ..."
  // Tu Código:👇

  for (let i = 1; i <= 100; i++) {
    if (i === x) {
      return `El número ${x} es: ${i}`;
    }
  }
  return `${x} no se encontró en la secuencia.`;
}

function sumandoTodo(num) {
  // Realiza un algoritmo que el cual recorra del 0 al numero pasado por parametros, debes retornar la suma de todo los
  // numeros que se recorrio
  // Tu código:👇

  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

function BinarioADecimal(num) {
  // La funcion recibe por parametro, un numero binario pero en tipo de dato String
  // debes tomar este numero binario y ayudandote de un bucle pasarlo a binario
  // tu código:👇

  return parseInt(num, 2);
}

function Fibonacci(n) {
  // Realiza una secuencia Fibonacci con el indice pasado por paramentro
  // Se puede representar mediante la siguiente fórmula: F(n) = F(n-1) + F(n-2)
  // Tu código:👇
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}

function esPrimo(numero) {
  //Escribe un programa que verifique si un número dado es primo o no.
  //Un número primo es aquel que solo es divisible por 1 y por sí mismo.
  //Si el numero pasado es primo devolve: numero " es primo." , caso contrario: numero " no es primo."
  // Tu código:👇
  if (numero <= 1) return `${numero} no es primo.`;
  if (numero <= 3) return `${numero} es primo.`;

  if (numero % 2 === 0 || numero % 3 === 0) {
    return `${numero} no es primo.`;
  }

  for (let i = 5; i * i <= numero; i += 6) {
    if (numero % i === 0 || numero % (i + 2) === 0) {
      return `${numero} no es primo.`;
    }
  }

  return `${numero} es primo.`;
}

function invertirCadena(cadena) {
  //La función toma una cadena de texto como parámetro, devuelve la cadena invertida.
  //Ejemplo: 'Hola' -> devolver 'aloH'
  //Tu codigo:👇

  return cadena.split("").reverse().join("");
}

module.exports = {
  encuentraX,
  sumandoTodo,
  BinarioADecimal,
  Fibonacci,
  esPrimo,
  invertirCadena,
  cantidadDeVocales,
  primerDivisible,
};
