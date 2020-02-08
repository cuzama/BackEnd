console.log ("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
var floorNumber = prompt ("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
console.log (">" + floorNumber);
if(floorNumber<25){
    console.log("voici le pyramide:");
    displayPyramid (floorNumber);
}
function displayPyramid(n){
    for (var i = 0 ; i < n ; i++ ){
        var str = '';
        for (var j=1; j < n-i; j++){
            str = str + ' ';
        }
        for (var k=1; k<=(2*i+1); k++){
            str = str + '#';
        }
        console.log(str);
        }
       

}
