$(document).ready(function(){
    $("#dev_icon").click(function(){
      $("#dev_icon").slideDown('1500').hide('1000');
      $("#development").show('1500');
    });
    $("#development").click(function(){
      $("#development").slideUp('1500');
      $("#dev_icon").slideDown('1500');
    });
  });
  $(document).ready(function(){
    $("#design-icon").click(function(){
      $("#design-icon").slideDown('1500').hide('1000');
      $("#design").show('1500');
    });
    $("#design").click(function(){
      $("#design").slideUp('1500');
      $("#design-icon").slideDown('1500');
    });
  });
  $(document).ready(function(){
    $("#product_icon").click(function(){
      $("#product_icon").slideDown('1500').hide('1000');
      $("#product").show('1500');
    });
    $("#product").click(function(){
      $("#product").slideUp('1500');
      $("#product_icon").slideDown('1500');
    });
  });
  $(document).ready(function(){
    $("#bs").mouseover(function(){
      $("#jilo").show();
    }).mouseleave(function(){
      $("#jilo").hide();
    });
  });
  $(document).ready(function(){
    $("#os").mouseover(function(){
      $("#jungle").show();
    }).mouseout(function(){
      $("#jungle").hide();
    });
  });
  $(document).ready(function(){
    $("#ps").mouseover(function(){
      $("#jungo").show();
    }).mouseout(function(){
      $("#jungo").hide();
    });
  });
  $(document).ready(function(){
    $("#jm").mouseover(function(){
      $("#jano").show();
    }).mouseout(function(){
      $("#jano").hide();
    });
  });
  
  $(document).ready(function(){
    $("#hd").mouseover(function(){
      $("#jambo").show();
    }).mouseout(function(){
      $("#jambo").hide();
    });
    $("#cr").mouseover(function(){
        $("#jalo").show();
      }).mouseout(function(){
        $("#jalo").hide();
      });
      $("#bd").mouseover(function(){
        $("#juno").show();
      }).mouseout(function(){
        $("#juno").hide();
      });
      $("#gr").mouseover(function(){
        $("#jado").show();
      }).mouseout(function(){
        $("#jado").hide();
      });
    });

    $(document).ready(function() {
      $("form#form.g").submit(function(event) {
        event.preventDefault();
        var name = $("input#name1").val();
        var email = $("input#email1").val();
        var message = $("textarea#messo1").val();
        if ($("input#name1").val() && $("input#email1").val()) {
          alert (name + "received message, thankyou for reaching out to us.");
        } else {
          alert ("incorrect name and email!");
        }
      })
    })









    
// $(document).ready(function() {
//   $("form#form.g").submit(function(event) {
//     event.preventDefault();
//     var name = $("input#name1").val();
//     var email = $("input#email1").val();
//     var messsage = $("textarea#messo1").val();
//     if ($("input#name1").val() && $("input#email1").val()) {
//       alert (name + "received message, thankyou for reaching out to us.");
//     }
//     else {
//       alert("incorrect name and email!");
//     }
//   }
// }

