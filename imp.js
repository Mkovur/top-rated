$(document).ready(function( ){
//open menu
    $(".right-menu").click(function () {
          $(".open-menu").css({                      
    display:"inherit",
                   })
     $(".open-menu").fadeIn("slow")  ;

                             })                 
     $("#angle-up").click(function () {
          $(".open-menu").fadeOut("slow")
                            })     
    //remove menu
        $(".right-menu").click(function () {
          $("menu").css({                      
   display:"none",
      })
    $("menu").fadeOut("slow")  ;
                      
                          })                              
                            
     //return menu
     $("#angle-up").click(function () {
        $("menu").fadeIn("slow")
                          }) 
                          //arrow hover
                      
                    
                                            
})


$(".picc").click(function () {
  $(".hold-users-option").css({                      
    display: "inherit",
           })
$(".hold-users-option").fadeIn("slow")  ;

                     })                 
$(" ").click(function () {
  $(" ").fadeOut("slow")
                    })     

  
                    



            
                    