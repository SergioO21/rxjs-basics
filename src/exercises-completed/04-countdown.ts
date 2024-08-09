import { interval, map, mergeMap, take, toArray } from 'rxjs';

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() =>{

  const inicio = 7;
  // const countdown$ = interval(700).pipe(
  //   take(inicio + 1),
  //   toArray(),
  //   mergeMap((array) => array.reverse())
  // );

  const countdown$ = interval(700).pipe(
    map((i) => inicio - i),
    take(inicio + 1)
  );


  // No tocar esta línea ==================
  countdown$.subscribe( console.log ); // =
  // ======================================


})();
