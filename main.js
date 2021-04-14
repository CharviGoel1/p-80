var se_1 = document.getElementById("i1").value;
var se_2 = document.getElementById("i2").value;
var se_3= document.getElementById("i3").value;
var se_4 = document.getElementById("i4").value;
var se_5 = document.getElementById("i5").value;
var se_6 = document.getElementById("i6").value;
var inputs = [];

function getpara_1() {
	for (o = 1; o <= 6; i++) {
		inputs.push(document.getElementById("o" + i).value);
		inputs.join(". ");
		document.getElementById("showpara1").innerHTML = inputs.join(". ");
	}
	console.log(getpara1());
}



	var name_1 = document.getElementById("Name_of_the_student1").value;
	var name_2 = document.getElementById("Name_of_the_student2").value;
	var name_3 = document.getElementById("Name_of_the_student3").value;
	var name_4 = document.getElementById("Name_of_the_student4").value;
	var name_3 = document.getElementById("Name_of_the_student3").value;
	var name_4 = document.getElementById("Name_of_the_student4").value;
	    name_of_the_student.push(name_1) ;
		name_of_the_student.push(name_2) ;
		name_of_the_student.push(name_3) ;
		name_of_the_student.push(name_4) ;
	console.log(name_of_the_student);
	document.getElementById("display_name").innerHTML=name_of_the_student;
	document.getElementById("submit_button").style.display="none";
	document.getElementById("sort_button").style.display="inline-block";