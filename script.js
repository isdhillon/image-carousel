//Declarations
let idx=0;
let imageContainer=document.querySelector(".image-container");
let image=document.querySelectorAll(".image");
//function to change image
function slideShow(){
    //loop on the images
    for(let i=0;i<image.length;i++){
        //applying displya none on all the images
        image[i].style.display="none"
    }
    //only display the image of the index
    image[idx].style.display="block"
    //manage index
    if(idx==image.length-1){
        idx=0
    }
    else{
        idx++;
    }
}

//call the function after very 2000 milliseconds
setInterval(slideShow,2000)