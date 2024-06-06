// const price = document.getElementById('myRange');
// const slider = document.querySelectorAll("slider");
const slider = document.querySelector('.slider-input');
const finalPrice = document.getElementById('price');
const views = document.getElementById('pageviews');

let discount = false;


/*funtion that modify the price and pageview*/
slider.oninput = () => {
    finalPrice.innerHTML = slider.value;
    uptade();
};
slider.oninput();


function uptade() {
  if (slider.value == 0){
    if(discount == true){
      finalPrice.innerHTML = `$6.00`;
    }else{
      finalPrice.innerHTML = `$8.00`;
    }
    views.innerHTML = `10K PAGEVIEWS`;
  }
 
  if (slider.value == 1){
    if(discount == true){
      finalPrice.innerHTML = `$9.00`;
    }else{
      finalPrice.innerHTML = `$12.00`;
    }
    views.innerHTML = `50K PAGEVIEWS`;
  }
  

  if (slider.value == 2){
    if(discount == true){
      finalPrice.innerHTML = `$12.00`;
    }else{
      finalPrice.innerHTML = `$16.00`;
    }
    views.innerHTML = `100K PAGEVIEWS`;
  }

  
  if (slider.value == 3){
    if(discount == true){
      finalPrice.innerHTML = `$18.00`;
    }else{
      finalPrice.innerHTML = `$24.00`;
    }
    views.innerHTML = `500K PAGEVIEWS`;
  }

  if (slider.value == 4){
    if(discount == true){
      finalPrice.innerHTML = `$27.00`;
    }else{
      finalPrice.innerHTML = `$36.00`;
    }
    views.innerHTML = `1M PAGEVIEWS`;
  }

 
}


/*funtion to apply a discount on price*/
function answerClick(){
  if(discount == false){
    discount = true;
  }
  else{
    discount = false;
  }
  
  uptade();
}



slider.addEventListener("mousemove", () => {
  let x = slider.value * 25;
  let color = 'linear-gradient(90deg,hsl(174, 77%, 80%)' + x + '%,hsl(224, 65%, 95%)' + x + '%)';
  slider.style.background = color;
});








