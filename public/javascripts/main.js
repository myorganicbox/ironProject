// poner los events listeners
// 

var selected = [];


$('[data-cardSelectButton]').click(function() {
  
    $(this).parent('[data-cardSelect]').toggleClass('is-selected');
    let iD = $(this).parent()
    console.log(iD)
    let b = iD.find("p[id='meal-name']").text();
    console.log(b)
    let c = $("#quantityAnd").html()


    if(selected.length < c ){
    selected.push(b);
  }

    // for(i=1;i<=andrea.quantity;i++){ 
    //   Meal  = i; 
    // } 


    $("#ulMeal").html("");

    selected.forEach(function(text){
      $("#ulMeal").append(text);
      $("#ulMeal").append("<br>");
    });

  });
  

  $('#singleSubmit').click(function() {
    let p = $(this).parent('form').req.query.quantity;
    $("#totalPrice").append(p);

  });
  


  $('#coupleSubmit').click(function() {


  });



  $('#familySubmit').click(function() {


  });