import { Injectable } from '@angular/core';
import { Quizformat } from './components/display-quiz/quizformat';
@Injectable({
  providedIn: 'root'
})

export class QuizHandlingService {
  quizTypeSelect:String='';
  userName:String = '';
  user_option = ["","","","",""];
  gk_content!: Quizformat[];
  java_content!: Quizformat[];
cans: string[] = [];
  constructor() { }
  User_option_update(ind:number,data:string){
		this.user_option[ind] = data; 
	}
  quizTypeSelected(quizType:any){
    if(quizType === 'GKQ'){
      this.quizTypeSelect="General Knowledge Quiz";
    }else{
      this.quizTypeSelect="Java Programing Quiz";
    }
    this.gk_content= [
      {
        questionid:"1",
        questionidtext:"Name of the first Chinese pilgrim to visit India?",
        option1:"Shekaspear",
        option2:"Hein sung",
        option3:"Charles",
        option4:"Fa-hien",
        answer:"Fa-hien"	
      },
      {
        questionid:"2",
        questionidtext:"Name of first foreign recipient of Bharat Ratna?",
        option1:"R.N. Shukla",
        option2:"Khan Abdul Gaffar Khan",
        option3:"V.R. Gill",
        option4:"D.B. Mahawar",
        answer:"Khan Abdul Gaffar Khan"
      },
      {
        questionid:"3",
        questionidtext:"Where was the first Post Office opened in India?",
        option1:"Kolkata in 1727",
        option2:"Asaam in 1827",
        option3:"Madras in 1928",
        option4:"Delhi in 1230",
        answer:"Kolkata in 1727"
      },
  
      {
        questionid:"4",
        questionidtext:"Name of first Space Tourist of India?",
        option1:"R.N. Shukla",
        option2:"V.R. Gill",
        option3:"Santosh George",
        option4:"D.B. Mahawar",
        answer:"Santosh George"
      },
      {
        questionid:"5",
        questionidtext:"Name of the First Indian Prime Minister who resigned from Office?",
        option1:"Indira Gandhi",
        option2:"Moraji Desai",
        option3:"Jawahar Lal Nehru",
        option4:"Rajiv Gandhi",
        answer:"Moraji Desai"
      },
      {
        questionid:"6",
        questionidtext:"Name of the first Atomic Submarine of India?",
        option1:"I.N.S Chakra",
        option2:"R.N. Shukla",
        option3:"V.R. Gill",
        option4:"D.B. Mahawar",
        answer:"I.N.S Chakra"
      },
      {
        questionid:"7",
        questionidtext:"What is the name of first British to visit India?",
        option1:"Hawkins",
        option2:"Norway",
        option3:"Devid",
        option4:"George Bush",
        answer:"Hawkins"
      },
      {
        questionid:"8",
        questionidtext:"Name of the first election commissioner of India?",
        option1:"Sukumar Sen",
        option2:"R.N. Shukla",
        option3:"V.R. Gill",
        option4:"D.B. Mahawar",
        answer:"Sukumar Sen"
      },
      {
        questionid:"9",
        questionidtext:"Name of the first university of India?",
        option1:"Taxshila University",
        option2:"Nalanda University",
        option3:"Jawahar University",
        option4:"Dronacharya University",
        answer:"Nalanda University"
      },
      {
        questionid:"10",
        questionidtext:"Where is India's First nuclear centre?",
        option1:"Jaipur",
        option2:"Kanpur",
        option3:"Tarapur",
        option4:"Raipur",
        answer:"Tarapur"
      }
      
    ]
    this.java_content= [
      {
        questionid:"1",
        questionidtext:"Which of the below is valid way to instantiate an array in java?",
        option1:"int myArray [] = {1, 3, 5};",
        option2:"int myArray [] [] = {1,2,3,4};",
        option3:"int [] myArray = (5, 4, 3);",
        option4:"int [] myArray = {“1”, “2”, “3”};",
        answer:"int myArray [] = {1, 3, 5};"	
      },
      {
        questionid:"2",
        questionidtext:"Which of the below are reserved keyword in Java?",
        option1:"array",
        option2:"goto",
        option3:"null",
        option4:"int",
        answer:"goto"
      },
      {
        questionid:"3",
        questionidtext:"What are the valid statements for static keyword in Java?",
        option1:"We can have static block in a class.",
        option2:"The static block in a class is executed every time an object of class is created.",
        option3:"We can have static method implementations in interface.",
        option4:"We can define static block inside a method.",
        answer:"We can have static block in a class."
      },
  
      {
        questionid:"4",
        questionidtext:"Which of the following statements are true for inheritance in Java?",
        option1:"The “extend” keyword is used to extend a class in java.",
        option2:"You can extend multiple classes in java.",
        option3:"Private members of the superclass are accessible to the subclass.",
        option4:"We can’t extend Final classes in java.",
        answer:"We can’t extend Final classes in java."
      },
      {
        questionid:"5",
        questionidtext:"Which of the below are unchecked exceptions in java?",
        option1:"RuntimeException",
        option2:"ClassCastException",
        option3:"NullPointerException",
        option4:"IOException",
        answer:"RuntimeException"
      },
      {
        questionid:"6",
        questionidtext:"Which class does not override the equals() and hashCode() methods, inheriting them directly from class Object?",
        option1:"java.lang.String",
        option2:"java.lang.Double",
        option3:"java.lang.StringBuffer",
        option4:"java.lang.Character",
        answer:"java.lang.StringBuffer"
      },
      {
        questionid:"7",
        questionidtext:"Which interface does java.util.Hashtable implement?",
        option1:"Java.util.Map",
        option2:"Java.util.List",
        option3:"Java.util.HashTable",
        option4:"Java.util.Collection",
        answer:"Java.util.Map"
      },
      {
        questionid:"8",
        questionidtext:"Which interface provides the capability to store objects using a key-value pair?",
        option1:"Java.util.Set",
        option2:"Java.util.List",
        option3:"Java.util.Map",
        option4:"Java.util.Collection",
        answer:"Java.util.Map"
      },
      {
        questionid:"9",
        questionidtext:"Which is valid declaration of a float?",
        option1:"float f = 1.0;",
        option2:"float f = '1'",
        option3:"float f = 1F;",
        option4:"float f = 1.0d;",
        answer:"float f = 1F;"
      },
      {
        questionid:"10",
        questionidtext:"What is the numerical range of char?",
        option1:"0 to 32767",
        option2:"0 to 65535",
        option3:"-256 to 255",
        option4:"-32768 to 32767",
        answer:"0 to 65535"
      }
    ]
  }
  
}
