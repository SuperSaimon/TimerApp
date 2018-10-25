function x(n){
 return (n)?n*x(n-1):1;
}

var a = x;

x=null;


alert(a(5));