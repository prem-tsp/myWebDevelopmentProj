

function checkUserName()
{
	var un = document.getElementById("uname").value;

	var regex = /[A-Z]/g;
	var regex1 = /[0-9]/g;
	var result1 = un.match(regex1); 
	var result = un.match(regex);
	if(result==null || result1==null)
		{	
			result = "The Username should contain atleast one uppercase letter and one digit";
		}
	else result = "Valid Username";

	document.getElementById("checkuname").innerHTML= result;

}

function checkPassword()
{
	var pw = document.getElementById("passw").value;

	var result1 = "";
	var flag = [0,0,0];
	
	if(pw.length < 10 || pw == null)
		result1 = "Password should be atleast 10 characters";
	else
	{	
		for(let i=0; i<pw.length ; i++)
		{
			let ch = pw.charAt(i);  
			if(isUpper(ch) && flag[0]==0)
			{
				flag[0] = 1;
			}
			else if(isNumber(ch) && flag[1]==0)
			{
				flag[1] = 1;
			}
			else if(isSplChar(ch) && flag[2]==0)
			{
				flag[2] = 1;
			}
		}
		if(flag[0] == 0)
			result1 = "Enter atleast one Uppercase letter";
		else if(flag[1] == 0)
			result1 = "Enter atleast one Number";
		else if(flag[2] == 0)
			result1 = "Enter atleast one special Character (@,$,&,#)";
		else result1 = "Password accepted";
	}

	document.getElementById("checkpass").innerHTML = result1;

//	checkConfirmPassword(result1);
	//document.getElementById("checkconfirmpass").innerHTML = send;
}

function isUpper(ch)
{
	if(ch>='A' && ch<'Z')
		return true;
	return false;
}
function isNumber(ch)
{
	if(ch>='0' && ch<='9')
		return true;
	return false;
}
function isSplChar(ch)
{
	if(ch=='@' || ch=='$' || ch=='&' || ch=='#')
		return true;
	return false;
}
function isSplCharNew(ch)
{
	var format = /[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]/g;
	var em = document.getElementById("email").value;
	
	if(format.test(em))
		return true;
	return false;
}

/*function checkConfirmPassword(result1)
{
	if(result1.equals("Password accepted"))
	{
	var send = "";
	var pw = document.getElementById("passw").value;
	var cpw = document.getElementById("confpassw").value;
	if (cpw.length >= 10 && pw.equals(cpw) == true) {
		send = "Passwords Match";
	}
	else send = "Passwords don't Match";
	}
	else send = "Incorrect";
	document.getElementById("checkconfirmpass").innerHTML = send;
}
*/