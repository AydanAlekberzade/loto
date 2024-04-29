var box=[]

function myloto() {
      var option=Math.floor(Math.random()*40)
      if (box.includes(option)==false) {
       console.log(option);
       box.push(option) 
      }


}

setInterval(myloto,1000)