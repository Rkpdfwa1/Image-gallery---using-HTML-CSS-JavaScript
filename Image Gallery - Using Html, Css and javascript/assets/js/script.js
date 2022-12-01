function myImage(x){

    const box = document.querySelector(".box")
    
    const b_img = document.querySelector(".broad_img")
    
    const img = x.src
    
    box.style.display = "none"
    b_img.style.display= "flex"
    b_img.src = img
    
}

