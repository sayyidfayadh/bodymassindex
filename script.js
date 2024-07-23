
function changetoImperiel(){
  conv.innerHTML=` <form action="" class="form-control ">
    <!-- <h5>Gender</h5>
    <input id="mal" name="gen" type="radio">
    <label for="mal">Male</label>
    <input id="fem" name="gen" type="radio">
    <label for="fem">Female</label>
    <h5>Age(2+)</h5>
    <input type="text" class="form-control" placeholder="your age"> -->
    <h5>Weight(lb)</h5>
    <input type="text" class="form-control" placeholder="Your Weight in lb" maxlength="3" id="weight2" oninput="delay()" on>
    <h5>Height(inch)</h5>
    <div class="d-flex">
    <input type="text" class="form-control w-50 me-1" placeholder="feet" id="foot" maxlength="1" oninput="delay()" > 
    <input type="text" class="form-control w-50" placeholder="inches" id="inch" maxlength="2" oninput="delay()">
    </div>
     <button class="b1 text-center btn btn-primary rounded-1 mt-3" onclick="Clear()">Clear</button>
    </form>`

}
function changetoMetric(){
  conv.innerHTML=` <form action="" class="form-control ">
    <!-- <h5>Gender</h5>
    <input id="mal" name="gen" type="radio">
    <label for="mal">Male</label>
    <input id="fem" name="gen" type="radio">
    <label for="fem">Female</label>
    <h5>Age(2+)</h5>
    <input type="text" class="form-control" placeholder="your age"> -->
    <h5>Weight(kg)</h5>
    <input type="text" class="form-control" placeholder="Your Weight in Kg" maxlength="3" id="weight" oninput="delay()" on>
    <h5>Height(cm)</h5>
    <input type="text" class="form-control" placeholder="Your Height in Cm" maxlength="3" id="height" oninput="delay()">
     <button class="b1 text-center btn btn-primary rounded-1 mt-3" onclick="Clear()">Clear</button>
    </form>`

}
function delay(){
  setTimeout(Bmi, 700);
  
}
function Bmi(){
 
  if(metric.checked  && weight.value!=="" && height.value!=="" ){
  let w=weight.value;
 let h=height.value/100;
  let bmi=w/(h**2);
  bmi=bmi.toFixed(2)
  
let state=0;
  if(bmi<18.5){
    result.innerHTML=`<div">
 <h3 class="text-info">BMI: ${bmi}</h3>
</div>`
    fat.innerHTML=`<div">
  <h3 class="text-info">You are Underweight</h3>
 <h5 class="text-center">Time to grab a bite!
</h5>
<p>By maintaining a healthy weight, you lower your risk of developing serious health problems.</p>
</div>`
document.getElementById("needle").style.transform= "rotate(-165deg)"
  }
  else if(bmi>=18.5&& bmi<=24.9){
    result.innerHTML=`<div">
    <h3 class="text-success">BMI: ${bmi}</h3>
   </div>`
    fat.innerHTML=`<div">
  <h3 class="text-success">You are Healthy</h3>
   <h5 class="text-center">Great shape</h5>
<p>By maintaining a healthy weight, you lower your risk of developing serious health problems.</p>
</div>`
document.getElementById("needle").style.transform= "rotate(-115deg)"
  }
  
  else if(bmi>=25.0 && bmi<=29.9){
    result.innerHTML=`<div">
    <h3 class="text-warning">BMI: ${bmi}</h3>
   </div>`
    fat.innerHTML=`<div">
  <h3 class="text-warning">YOu are Over Weight</h3>
   <h5 class="text-center">Time to run!</h5>
<p>By maintaining a healthy weight, you lower your risk of developing serious health problems.</p>
</div>`
document.getElementById("needle").style.transform= "rotate(-70deg)"
  }
  else {
    result.innerHTML=`<div">
    <h3 class="text-danger">BMI: ${bmi}</h3>
   </div>`
    fat.innerHTML=`<div">
  <h3 class="text-danger">You are Obese</h3>
   <h5 class="text-center">Time to run!</h5>
<p>By maintaining a healthy weight, you lower your risk of developing serious health problems.</p>
</div>`
document.getElementById("needle").style.transform= "rotate(-25deg)"
  }

  
  
  }
  else if(imperiel.checked && weight2.value!=""&& foot.value!=""){
    let w=weight2.value;
    let fh=foot.value*12;
    console.log(fh);
    let ih=inch.value*1;
    console.log(ih);
    
    var h=fh+ih;
    console.log(h);
    
    let bmi=(w/(h**2))*703;
  bmi=bmi.toFixed(2)
  let angle
let state=0;
  if(bmi<18.5){
    result.innerHTML=`<div">
 <h3 class="text-info">BMI: ${bmi}</h3>
</div>`;
    fat.innerHTML=`<div">
  <h3 class="text-info">Underweight</h3>
   <h5 class="text-center">Time to grab a bite!
</h5>
<p>By maintaining a healthy weight, you lower your risk of developing serious health problems.</p>
</div>`
let angle
angle = -180 + ((40/18.5)*bmi)
document.getElementById("needle").style.transform= `rotate(${angle}deg)`
  }
  else if(bmi>=18.5&& bmi<=24.9){
    result.innerHTML=`<div">
    <h3 class="text-success">BMI: ${bmi}</h3>
   </div>`;
    fat.innerHTML=`<div">
  <h3 class="text-success">Healthy</h3>
 <h5 class="text-center">Great shape</h5>
<p>By maintaining a healthy weight, you lower your risk of developing serious health problems.</p>

  
  
</div>`
let angle
angle = -140 + ((40/(25-18.5))*(bmi-18.5))
document.getElementById("needle").style.transform= `rotate(${angle}deg)`

  }
  
  else if(bmi>=25.0 && bmi<=29.9){
    result.innerHTML=`<div">
    <h3 class="text-warning">BMI: ${bmi}</h3>
   </div>`;
    fat.innerHTML=`<div">
  <h3 class="text-warning">Over Weight</h3>
   <h5 class="text-center">Time to run!</h5>
<p>By maintaining a healthy weight, you lower your risk of developing serious health problems.</p>
</div>`
document.getElementById("needle").style.transform= "rotate(-70deg)"
  }
  else {
    result.innerHTML=`<div">
    <h3 class="text-danger">BMI: ${bmi}</h3>
   </div>`;
    fat.innerHTML=`<div">
  <h3 class="text-danger">Obese</h3>
   <h5 class="text-center">Time to run!</h5>
<p>By maintaining a healthy weight, you lower your risk of developing serious health problems.</p>
</div>`
document.getElementById("needle").style.transform= "rotate(-25deg)"
  }

  }
}
function Clear(event){
var allInputs = document.querySelectorAll('input');
allInputs.forEach(singleInput => singleInput.value = "");
// result.innerHTML=`<div id="result" class="mt-1">
//       <h3 class="text-light">BMI: 0</h3>
//     </div>`
 fat.innerHTML= `
 <p style="font-size: small; text-align: justify;">Body Mass Index (BMI) is a  measure to evaluate whether a person has a healthy body weight relative to their height. 
   it has limitations, such as not distinguishing between muscle and fat mass. <br> <span style="font-weight: bolder; font-size: 1rem; text-align: center; margin-left: 6rem;">weight (kg) / [height (m)]²</span><br> <br> BMI provides a quick, general assessment of potential health risks associated with body weight.</p>
`
result.innerHTML=``;
document.getElementById("needle").style.transform= "rotate(-180deg)"
}


const st = {};

st.flap = document.querySelector('#flap');
st.toggle = document.querySelector('.toggle');

st.choice1 = document.querySelector('#choice1');
st.choice2 = document.querySelector('#choice2');

// st.flap.addEventListener('transitionend', () => {

//     if (st.choice1.checked) {
//         st.toggle.style.transform = 'rotateY(-15deg)';
//         setTimeout(() => st.toggle.style.transform = '', 400);
//     } else {
//         st.toggle.style.transform = 'rotateY(15deg)';
//         setTimeout(() => st.toggle.style.transform = '', 400);
//     }

// })

st.clickHandler = (e) => {

    if (e.target.tagName === 'LABEL') {
        setTimeout(() => {
            st.flap.children[0].textContent = e.target.textContent;
        }, 250);
    }
}

// document.addEventListener('DOMContentLoaded', () => {
//     st.flap.children[0].textContent = st.choice2.nextElementSibling.textContent;
// });

// document.addEventListener('click', (e) => st.clickHandler(e));
  