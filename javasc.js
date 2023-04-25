/*first we define a function named "filterSelection" which takes category as an argument*/

function filterSelection(category) {

/*then we need to put all of our images in this function,we do so by defining a variable named images inside this variable we refer to HTML(document)and select an element with the classname of gallery.
the zero here says bring the fist gallery class name that you find
then inside that classname we select elements with "img" tag name.*/
    
    var images = document.getElementsByClassName("gallery")[0].getElementsByTagName("img");
/*now we start filtering,if the categoty inserted is equal to "all" then first we loop through the array(from the first element till the last one)
and make all images appear on screen.*/
    
    if (category == "all") {
        for (var i = 0; i < images.length; i++){
            images[i].style.display = "block";
        }
/*otherwise we loop through our array but here in this else statement we put another if else statement,if the all button is not selected but the image that we have
has the name of the gallery that is selected in it's class(we check that by using .contain) ,we make it appear on the screen if not we hide it by setting the 
display to none */
        
    } else {
        for (var i = 0; i < images.length; i++){
            if (images[i].classList.contains(category)) {
                images[i].style.display = "block";
            }else{
                images[i].style.display = "none";
            }
        }
    }

}