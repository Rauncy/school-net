class Fraction(){
  this.num = num;
  this.den = den;

  this.numDeco = {};
  this.denDeco = {};

  constructor(num, den){
    this.num = num;
    this.dec = dec;
  }

  this.simplify = function(num, den){
    let div = lcd(num, den);
    if(div==1) return false;
    this.num/=div;
    this.den/=div;
    return true;
  }

  this.parse = function(data){
    this.num = parseInt(data.substring(0,data.indexOf("/"));
    this.numDeco[data.substring(0,data.indexOf("/")).replace(/[0-9]|./)]++;
    this.den = parseInt(data.substring(data.indexOf("/")+1));
    this.denDeco[data.substring(data.indexOf("/")+1).replace(/[0-9]|./)]++;
    this.simplify();
  }

  this.toString = function(){
    console.log("tstring");
    return num+numDeco+(den!=1 ? "/"+den+denDeco : (denDeco ? "/"+denDeco : ""));
  }
}

function lcd(num1, num2){

  //Get prime components
  //Automatically arranged lowest to highest
  primes1 = primeFactors(num1);
  primes2 = primeFactors(num2);

  //Take duplicate prime components in different list
  var topMoving = true;
  var i=0, j=0;
  var values = new Array();
  while(i<primes1.length&&j<primes2.length){
    if(primes1[i]==primes2[j]){
      //Push duplicate value and remove the value from base lists
      values.push(primes1[i]);
      primes1.splice(i, 1);
      primes2.splice(j, 1);
    }else{
      //Move index when unsuccessful
      topMoving = primes1[i]<=primes2[j];
      if(topMoving){
        i++;
      }else{
        j++;
      }
    }
  }

  console.log(arrayProd(values))

  return arrayProd(values);
}

function gcf(num1, num2){
  return lcd(num1, num2);
}

function primeFactors(num){
  var values = new Array();

  values.push(1);

  for(var i=2;i<=num;i++){
    if(isPrime(i)){
      while(num%i==0){
        values.push(i);
        num/=i;
      }
    }
  }

  return values;
}

function isPrime(num){
  for(var i=2;i<num;i++){
    if(num%i==0) return false;
  }
  return true;
}

function arraySum(array){
  var result = 0;

  for(var i=0;i<array.length;i++){
    result+=array[i];
  }

  return result;
}

function arrayProd(array){
  var result = 1;

  for(var i=0;i<array.length;i++){
    result*=array[i];
  }

  return result;
}

function processLetterVars(number){
  //Pi
  if(number.includes("pi")) number*=Math.PI;

}
