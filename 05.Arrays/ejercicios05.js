function primerElemento(arg) {
  //dado el array pasado por parametro, tendras que devolver el primer elemento
  // tu código:
  return arg[0];
}

function ultimoElemento(arg) {
  //dado el array pasado por parametro, tendras que devolver el ultimo elemento
  // tu código aqui:
  return arg[arg.length - 1];
}

function nuevoArray(arg) {
  //dado el array pasado por parametro retorna su longitud
  // tu código aqui:
  return arg.length;
}

function changeArray(arr) {
  //dado el array pasado por parametro, cambia el valor del primero elemento por 'Aprendiendo' y
  //el ultimo elemento por 'array'
  //retorna el nuevo valor
  // tu código aqui:

  arr.unshift("Aprendiendo");
  arr.push("array");
  return arr;
}

function primerasCondicionales(arg) {
  // pasados los array por parametros tendras que devolver según lo que corresponda:
  // longitud de array mayor que 3 retornar: 'Este array es mayor a 3'
  // longitud de array es igual a 3 retornar: 'Este array es igual a 3'
  // longitud de array menor que 3 retornar: 'Este array es menor a 3'
  // longitud de array igual a 0 retornar: 'Este array no contiene elementos'
  // tu código aqui:
  if (arg.length > 3) {
    return "Este array es mayor a 3";
  } else if (arg.length === 3) {
    return "Este array es igual a 3";
  } else if (arg.length < 3) {
    return "Este array es menor a 3";
  } else {
    return "Este array no contiene elementos";
  }
}

function sumandoEnUno(arg) {
  // dado el array de numeros enteros pasado por parametro, a cada elemento del array
  // tienes que sumarle 1.. ejemplo: [4 , 5, 6] -> [5 , 6, 7]
  // tu código aqui:

  for (let i = 0; i < arg.length; i++) {
    arg[i] = arg[i] + 1;
  }
  return arg;
}

function valorMaximo(arr) {
  //Se pasa un array de enteros, tendras que iterar por cada elemeto del array y encontrar el valor más alto y devolverlo
  //ejemplo -> [1 , 5, 4, 10, 99 ,2, 42, 3] - deberia devolver 99
  // Tu codigo:
  return Math.max(...arr);
}

function valorMinimo(arr) {
  //Se pasa un array de enteros, tendras que iterar por cada elemeto del array y encontrar el valor más bajo y devolverlo
  //ejemplo -> [ 5, 4, 10, 99 ,2, 42, 3] - deberia devolver 2
  // Tu codigo:
  return Math.min(...arr);
}

function cantPares(arr) {
  //Se para un array de enteros, tienes que iterar por los elementos y contar la cantidad de numeros que son pares
  // devolver la cantidad de pares total. Ejemplo: [1,2,3,4,5,6,7,8,9] -> 4
  // Tu codigo:

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

function eliminarDuplicado(arr) {
  // Se para un array de enteros, tienes que iterar por los elementos y eliminar los duplicados, y devolver el array nuevo sin duplicado.
  // ejemplo: [1,1,2,4,5,6,6,7,1,8,9] -> [1,2,4,5,6,7,8,9]
  // Tu codigo:

  return [...new Set(arr)];
}

function enOrden(arr, ascendente = true) {
  //Se para un array de enteros de forma desordenada, tendras que devolver el mismo array pero de forma ordenada
  //de menor a mayor. ejemplo -> [7, 2, 4, 6, 1, 3, 5] -> [1, 2, 3, 4, 5, 6, 7]
  //Tu codigo:

  if (ascendente) {
    return arr.sort((a, b) => a - b);
  } else {
    return arr.sort((a, b) => b - a);
  }
}

function dosEnUno(arr1, arr2) {
  //Escribe una función que reciba dos arrays y devuelva un nuevo array que contenga todos los elementos de ambos arrays, sin duplicados.
  //Tu codigo:
  // return arr1.concat(arr2);

  return [...new Set(arr1.concat(arr2))];
}

function matrizTranspuesta(matriz) {
  //Escribe una función que reciba una matriz (array de arrays) y devuelva la matriz transpuesta, es decir, intercambiando filas por columnas.
  //Tu codigo:
  return matriz[0].map((col, i) => matriz.map((row) => row[i]));
}

module.exports = {
  nuevoArray,
  changeArray,
  sumandoEnUno,
  primerElemento,
  ultimoElemento,
  primerasCondicionales,
  valorMaximo,
  valorMinimo,
  cantPares,
  eliminarDuplicado,
  enOrden,
  dosEnUno,
  matrizTranspuesta,
};
