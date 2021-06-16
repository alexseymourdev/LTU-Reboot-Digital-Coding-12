

//function Multiply
function mutliply(mutliplyer){
    //take input for times table
    //LOOP from 1 - 12
    for(counter=1;counter <= 12; counter++){
        //create a message for the current sum
        let sum = counter * multiplyer;
        let strMessage = multiplyer + ' x ' + counter + ' = ' + sum;
        //OUTPUT sum
        console.log(strMessage);
    }
}