import { Component, OnInit } from '@angular/core';
import { FizzBuzzService } from '../service/fizz-buzz.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.css']
})
export class FizzBuzzComponent implements OnInit {

  constructor(private _fizzBuzzService: FizzBuzzService) { }

  number: number
  fb(n:number):string { return this._fizzBuzzService.getFizzBuzz(n) }
  ngOnInit() {
  }

}
