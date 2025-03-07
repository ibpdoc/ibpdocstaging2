//removes nonbreaking spaces from the class with the given name.
//we've been using this to remove blank spaces out of the breadcrumbs for menu items that use indented menus
//to insert nonbreaking spaces into menus, insert the hexadecimal representation of the nonbreaking space character &#160;
//into the TOC using the internal text editor.
function removeNBSP(className)
{
	var re = /&nbsp;/gi;
			
	var elementList = document.getElementsByClassName(className);
	var element = elementList[0].innerHTML;
	var newElement = element.replace(re, '');
			
	elementList[0].innerHTML = newElement;	
}