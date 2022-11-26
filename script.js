function showresult(){
  let code = document.querySelector('#code').value;
  let maths = document.querySelector('#maths').value;
  let physics = document.querySelector('#physics').value;
  let chemistry = document.querySelector('#chemistry').value;

  let total = parseFloat(code) + parseFloat(maths) + parseFloat(physics) + parseFloat(chemistry);

  let perc = (total*100)/400;

  if(perc>=90){
    document.querySelector(".grade").innerHTML="a+";
  }else if(perc>=80){
    document.querySelector(".grade").innerHTML="a";
  }else if(perc>=70){
    document.querySelector(".grade").innerHTML="b+";
  }else if(perc>=60){
    document.querySelector(".grade").innerHTML="b";
  }else if(perc>=50){
    document.querySelector(".grade").innerHTML="c+";
  }else if(perc>=40){
    document.querySelector(".grade").innerHTML="c";
  }else if(perc>=35){
    document.querySelector(".grade").innerHTML="d+";
  }else if(perc>=30){
    document.querySelector(".grade").innerHTML="d";
  }else{
    document.querySelector(".grade").innerHTML="You are fail"
  }
  

  document.querySelector(".total").innerHTML = total;  
  document.querySelector(".perc").innerHTML = perc;

  if(perc > 30){
    document.querySelector(".result h2").innerHTML="You are pass"
  }else{
    document.querySelector(".result h2").innerHTML="You are fail"
  }
}