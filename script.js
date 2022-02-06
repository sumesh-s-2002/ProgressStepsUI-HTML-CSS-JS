const progressLine = document.querySelector(".progress-line"),
    nextBtn = document.querySelector(".next"),
    prevBtn = document.querySelector(".prev"),
    circles = document.querySelectorAll(".circle")

let currentStep = 1;
//adding event listner for next btn
nextBtn.addEventListener("click", (e)=>{
    currentStep++;
    if(currentStep > circles.length){
        currentStep = circles.length;
    }
    updateDOM();
})
//adding addEventListener for previous button
prevBtn.addEventListener("click", (e)=>{
    currentStep--;
    if(currentStep < 1){
        currentStep = 1;
    }
    updateDOM();
})
//defining updateDOM
function updateDOM(){
    //button state update
    if(currentStep == circles.length){
        nextBtn.disabled = true;
    }else if(currentStep == 1){
        prevBtn.disabled = true;
    }else{
        nextBtn.disabled = false;
        prevBtn.disabled = false;
    }
    //progressline update
    let widthper = ((currentStep - 1) / (circles.length -1)) * 100;
    progressLine.style.width = `${widthper}%`;
    //updating the circle border
    circles.forEach((circle, inx)=>{
        if(inx < currentStep){
            circle.classList.add("active")
        }else{
            circle.classList.remove("active")
        }
    })

}