let i,j;
string="";
//ASCII char 65 to 90 == A to Z
//ASCII char 97 t0 122== a to z
for (i = 65; i <= 69; i++) {
    for(j=65;j<=i;j++){
    document.write(String.fromCharCode(j));
    }
    document.write("<br>")
}