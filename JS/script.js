/*Задание 67:
Напишите программу JavaScript для получения списка свойств объекта JavaScript. 2мя способами. 1 с использованием Object.keys(), а другой без его использования.
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno*/

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
   //console.log(Object.keys(student));
   for (let key in student){
    console.log(key);
   }