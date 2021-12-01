name_of_students_array = [];
function submit(){
    display_student_array = [];
    for ( var j=1; j<=4; j++){
        var name_of_students = document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_students);
        name_of_students_array.push(name_of_students);
    }
    console.log(name_of_students_array);
    var length_of_the_array = name_of_students_array.length;
    console.log(length_of_the_array);
    for ( var i=0; i<length_of_the_array; i++){
        display_student_array.push("<h4>name-"+name_of_students_array[i]+"</h4>");
        console.log(display_student_array);}

        document.getElementById("display_name_with_commas").innerHTML=display_student_array;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";

var remove_commas = display_student_array.join("");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML = remove_commas;

}

function sorting(){
name_of_students_array.sort();
console.log(name_of_students_array);
display_student_array_sort = [];
name_of_students_array_length = name_of_students_array.length;
console.log(name_of_students_array_length);
for ( var k=0; k<name_of_students_array_length; k++){
    display_student_array_sort.push("<h4>name-"+name_of_students_array[k]+"</h4>");
    console.log(display_student_array_sort);
  
}
document.getElementById("display_name_with_commas").innerHTML=display_student_array_sort;
var remove_commas = display_student_array_sort.join("");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}