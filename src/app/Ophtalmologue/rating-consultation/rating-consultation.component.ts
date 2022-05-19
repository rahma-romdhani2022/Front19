import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel';
export interface Doctors{
  name : string ,
  image : string 
}

@Component({
  selector: 'app-rating-consultation',
  templateUrl: './rating-consultation.component.html',
  styleUrls: ['./rating-consultation.component.css']
})
export class RatingConsultationComponent implements OnInit {
 url ="http://localhost:8281/consultation/image/6" ; 
  doctors : Doctors[]=[
    {name:"rahma romdhani" , image :"./assets/doctors/d1.jpg"},
    {name:"rahma romdhani" , image :"./assets/doctors/d1.jpg"},
    {name:"rahma romdhani" , image:"./assets/doctors/d1.jpg"},
    {name:"rahma romdhani" , image :"./assets/doctors/d1.jpg"},
    {name:"rahma romdhani" , image :"./assets/doctors/d1.jpg"},
    {name:"rahma romdhani" , image :"./assets/doctors/d1.jpg"},
    {name:"rahma romdhani" , image :"./assets/doctors/d1.jpg"},
    {name:"rahma romdhani" , image :"./assets/doctors/d1.jpg"},
    {name:"rahma romdhani" , image :"./assets/doctors/d1.jpg"},
    {name:"rahma romdhani" , image :"./assets/doctors/d1.jpg"},
  ]
  constructor() { }
  currenteRate : number =0 ; 
  ngOnInit() {
    
  }
  }


