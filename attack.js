// attack button has id attack

//robots and opponets are the select names


// div ids robot1 and robot2

  $(document).ready(function() {


     $(".robots").change(function(yourChoice) {

        var yourChoice = yourChoice.target.value
        console.log(yourChoice)


        $("#robot1").append( `<h1> ${yourChoice} </h1>`)

       })


     $(".opponents").change(function(yourChoice) {
        console.log(yourChoice.target.value)

        var yourChoice = yourChoice.target.value
        console.log(yourChoice)

         $("#robot2").append( `<h1> ${yourChoice} </h1>`)
     })

})