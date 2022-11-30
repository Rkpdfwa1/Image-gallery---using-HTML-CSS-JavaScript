function myImage(x){

    const box = document.querySelector(".box")
    
    const b_img = document.querySelector(".broad_img")
    
    const img = x.src
    
    const img_box = document.querySelector(".broad_img")

    box.style.display = "none"
    b_img.style.display= "flex"
    img_box.src = img
    
}

