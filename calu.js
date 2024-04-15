const display = document.querySelector("#display");

function Display(input)
{
  
  
  display.value+=input;
  


}

function answer(input)
{ 
  if(input=='=')
  {
    try{
      display.value= eval(display.value);
    }
    catch(error){
      display.value='error';

    }
  }
  
  

}

function cleardisplay(input)
{
  if(input=='AC')
  {
    display.value="";
  }
 
}
