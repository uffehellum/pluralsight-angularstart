import { TestBed, inject } from '@angular/core/testing';

import { FizzBuzzService } from './fizz-buzz.service';

describe('FizzBuzzService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FizzBuzzService]
    })
  });

  it('should be created', inject([FizzBuzzService], (service: FizzBuzzService) => {
    expect(service).toBeTruthy()
  }))

  it('should return number as string', inject([FizzBuzzService], (service: FizzBuzzService) => {
    expect(service.getFizzBuzz(2)).toBe("2")
  }))
  
  it('should return multiple of 3 as fizz', inject([FizzBuzzService], (service: FizzBuzzService) => {
    expect(service.getFizzBuzz(9)).toBe("fizz")
  }))
  
  it('should return multiple of 5 as buzz', inject([FizzBuzzService], (service: FizzBuzzService) => {
    expect(service.getFizzBuzz(10)).toBe("buzz")
  }))
  
  it('should return multiple of 3 and 5 as FIZZBUZZ', inject([FizzBuzzService], (service: FizzBuzzService) => {
    expect(service.getFizzBuzz(30)).toBe("FIZZBUZZ")
  }))
  
});
