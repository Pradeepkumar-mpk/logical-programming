//program to print 3 nos in descending order 
var x = parseInt(prompt("Enter first num")),
    y = parseInt(prompt("Enter second num")),
    z = parseInt(prompt("Enter third num"));

if (x > y && x > z) {
       alert(x);
    if (y > z) {
        alert(y);
        alert(z);
    } else {                  
       alert(z);
       alert(y);
    }
} else if (y > z && y > x) {
    alert(y);
    if (z > x) {
        alert(z);
        alert(x);
    } else {                  
        alert(x);
        alert(z);
    }
} else {                     
    alert(z);        
    if (x > y) {
    alert(x);
    alert(y);
    } else {                  
       alert(y);
       alert(x);
    }
}