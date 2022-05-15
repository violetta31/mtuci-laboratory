let btns = document.querySelectorAll("button");
let main_input = document.querySelector("#main-input");
let list_number = [0,1,2,3,4,5,6,7,8,9];
let next_step = document.querySelector(".next_step1");
let step_fix = 0;
let equal = 0;
let value_mi = 0;
let save_value = 0;
for (let i = 0; i < btns.length; i++){
	btns[i].onclick = function(){
		if (main_input.value == 0)
			main_input.value = "";
		
		if (step_fix == 1) 
		{
			main_input.value = "";
			step_fix = 0;
		};
		
		if (equal == 1) 
		{
			next_step.innerHTML = "";
			equal = 0;
		};
				
		if (list_number.includes(Number(btns[i].innerHTML)) && (main_input.value == value_mi))
		{
			main_input.value = "";
			main_input.value += btns[i].innerHTML;
		}
		
		else if (list_number.includes(Number(btns[i].innerHTML)))
		{
			main_input.value += btns[i].innerHTML;
		}
		
		if (btns[i].innerHTML == "C")
			main_input.value = 0;
		
		if (btns[i].innerHTML == "DEL")
			main_input.value = Math.trunc(main_input.value / 10);
				
		if (btns[i].innerHTML == "x²")
			main_input.value = main_input.value ** 2;
		
		if (btns[i].innerHTML == "√x")
			main_input.value = Math.sqrt(main_input.value);
		
		if (btns[i].innerHTML == "1/x")
			main_input.value = 1/main_input.value;
		
		if (btns[i].innerHTML == "%")
			main_input.value = main_input.value + "%"

		if (btns[i].innerHTML == "+")
		{
			next_step.innerHTML += main_input.value + " + ";
			step_fix = 1;
		}
		
		if (btns[i].innerHTML == "-")
		{
			next_step.innerHTML += main_input.value + " - ";
			step_fix = 1;
		}
		
		if (btns[i].innerHTML == "*")
		{
			next_step.innerHTML += main_input.value + " * ";
			step_fix = 1;
		}
		
		if (btns[i].innerHTML == "/")
		{
			next_step.innerHTML += main_input.value + " / ";
			step_fix = 1;
		}
		
				
		if (btns[i].innerHTML == "MS")
			save_value = main_input.value;
		if (btns[i].innerHTML == "MR")
			main_input.value = save_value;
		if (btns[i].innerHTML == "M-")
			save_value -= main_input.value;
		if (btns[i].innerHTML == "M+")
			save_value = Number(save_value) + Number(main_input.value);
		if (btns[i].innerHTML == "MC")
			save_value = 0;
		
		
		if ((btns[i].innerHTML == "=") && (main_input.value.includes("%")))
		{
			value_mi = Number(next_step.innerHTML.split(" ")[0]) * (main_input.value.split("%")[0] / 100);
			main_input.value = Number(next_step.innerHTML.split(" ")[0]) - Number(next_step.innerHTML.split(" ")[0]) * ((main_input.value.split("%")[0]) / 100);
			next_step.innerHTML += value_mi + " = "; 	
			value_mi = main_input.value;
			equal = 1;
		}
		
		else if (btns[i].innerHTML == "=")
		{
			value_mi = main_input.value;
			main_input.value = eval(next_step.innerHTML + main_input.value);
			next_step.innerHTML += value_mi + " = "; 	
			value_mi = main_input.value;
			equal = 1;
		}
		
		
		console.log(btns[i].innerHTML);
	}
};