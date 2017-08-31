var images = ["images/boullette.jpg", "images/cheesy.jpg","images/goat.png", "images/jerk.jpg", "images/oxtail.jpg", "images/salmon.jpg"];

var count = 1;

 $("#back").on("click", function(){

   if(count==0){
     count = images.length-1;
   }
   else{
     count=count-1;

   }
   $("img").attr("src", images[count]);
});

$("#skip").on("click", function(){
     if(count == images.length-1){
       count=images.length-images.length;
     } else{
       count=count + 1;
    }
    $("img").attr("src", images[count]);
});
