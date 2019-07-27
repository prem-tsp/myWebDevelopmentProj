

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

function checkEmail()
{
	var em = document.getElementById("email").value;
	
	var at=0,countdot=0,spl=0,blank=0;
	for(let i = 0; i < em.length ; i++)
	{
		let c= em.charAt(i);
		if(c == '@')
		{
			at++;
		}
		else if(isSplCharNew(c))
		{
			spl++;
		}
		else if(c==" ")
		{
			blank++;
		}
	}
	if(at==1 && spl==0 && blank==0)
	{
		let check = em.lastIndexOf(".");
		for(let j= check+1 ; j<em.length ; j++)
		{
			countdot++;
		}
		if(countdot==2 || countdot==3)
			send="Valid E-mail";
		else send="Invalid E-mail"
	}
	else send="Invalid E-mail";

	document.getElementById("checkemail").innerHTML=send;
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
		for(let i=0; i<pw.length ;i++)
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
