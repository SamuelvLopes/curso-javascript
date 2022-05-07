
{
    {
        {
            {
                
                {
                    var a1=12;
                    let a2=12;
                    

                }
            }
        }
    }
}
const funct = [];
//var
for(let i=0;i<10;i++){

    funct.push(
        function(){
    console.log(i);
        })
    }

console.log(funct);

funct[0]();
funct[1]();
funct[2]();
funct[3]();
funct[6]();
