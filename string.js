let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, hic?";
let text2 = "    Hello!   This is JS       ";


document.write(text.toUpperCase() + "<br>"); // to Upper Case()

document.write(text.indexOf("amet") + "<br>"); //to find the position of a word

document.write(text.replace("amet", "lyon")); // to replace a word with another word

document.write("<br>");

document.write(text[0] + "<br>"); // to get a character at a specific position

document.write(text.slice(4,20) + "<br>"); // to get a part of the string (start position, end position)

document.write(text.length + "<br>"); // to get the length of the string
document.write(text2.trim());// to remove spaces from the beginning and the end of the string

document.write("<br>");



let long_text = "Lorem ipsum dolor sit amet \"consectetur adipisicing elit. Cupiditate \", provident praesentium tenetur possimus animi odit?";

document.write(long_text  + "<br>"); //print the long text

// Split Method

document.write(long_text.split("") + "<br>"); //“Split this string between every single character.” and convert it to an array
/* console.log(long_text.split(""));  */


// Template Strings 
let template_str = `hello ${long_text}`; 
document.write(template_str + "<br>");

document.write("<br>");




let classEx = "Newton one said: \"An object remains at rest or uniform motion unless it is acted upon by an external force.\"";
 
document.write(classEx + "<br>");

document.write("<br>");


let letters = " A, B, C, D, E, G, K, L, O, T, Q, O, R, S";

document.write(letters.replace("T","W"));

document.write("<br>");



//convert to an array
let arr = " A, B, C, D, E, G, K, L, O, T, Q, O, R, S";
document.write(arr.split(",") + "<br>"); //“Split this string wherever you see a comma (,)” and convert it to an array.


document.write(classEx.indexOf("object") + "<br>");
document.write(classEx.indexOf("motion") + "<br>");
document.write(classEx.slice(21,55) + "<br>");

document.write("<br>");



let classOf = "Newton one said: \"An object remains at rest or uniform motion unless it is acted upon by an external force.\"";

let uniform = classOf.indexOf("uniform");
let uponMe = classOf.indexOf("upon");

let uniformUpon = classOf.slice(uniform,uponMe);

document.write(uniformUpon.toUpperCase());
 