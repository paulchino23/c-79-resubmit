var students=[];
function submit(){

var name1=document.getElementById("name1").value;
students.push(name1)
var name2=document.getElementById("name2").value;
students.push(name2)
var name3=document.getElementById("name3").value;
students.push(name3)
var name4=document.getElementById("name4").value;
students.push(name4)

document.getElementById("display_names").innerHTML=students;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    students.sort();
    document.getElementById("display_names").innerHTML=students;
}