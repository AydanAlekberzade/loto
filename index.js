var box=[]

 

var a= setInterval( function() {
      if (box.length ==40) {
            alert("Congrats!")
            clearInterval(a)
      }
      var option=Math.floor(Math.random()*40)
      if (box.includes(option)==false) {
       console.log(option);
       box.push(option) 
      }


},100)