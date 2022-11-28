var mySpeed = window.prompt("What is your speed?");
//request for entering your speed    
       let speedLimit = (speed) => {
        //points formula for incrementing
            let points = (speed-70)/5
            //speed <70 its okay
            if(speed<70){
                return `OK`;
            }
            //speed >70 & points <= 12 he will be added a point
            else if(speed>=70 && points<=12){
                return (points);
    
            }
            //if drivers points>12 his license will be suspended
            else if(points>12){
                return `license suspended`;
            }
            //view your results in the console under developer's tools
        }
        console.log(speedLimit(mySpeed));


    
    
  
    

        
            

    

    
       