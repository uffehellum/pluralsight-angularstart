import { Injectable } from '@angular/core';

@Injectable()
export class FizzBuzzService {

  constructor() { }
  getFizzBuzz(n: number) : string {
    return n % 3 == 0 && n % 5 == 0 ? "FIZZBUZZ"
      : n % 3 == 0 ? "fizz" 
      : n % 5 == 0 ? "buzz" 
      : "" + n
  }
}
