var gulp = require("gulp");
var fs = require('fs')
var js2xmlparser =require("js2xmlparser");
var db_file='db_files';

gulp.task("convert", function () {

      // Przeczyta folder plikow i zrob z nich pliki xml
      fs.readdir(db_file, (err, files) => {
        files.forEach(file => {

      var filename = __dirname + '/' + db_file + '/'+ file;
      fs.readFile(filename, 'utf8', function(err, data) {
        if (err) throw err;

       var secondComment = advancedSearch(data,"\"",2);
       var firsComment= data.search("\"");
       var dbName= data.slice(firsComment+1,secondComment);
       console.log(dbName);

       
        // Utworzenie stringu zawierajacego pary klucz wartosc odzielone
        // srednikiem :   Machine_Speed : Int;
       var begin = data.search("VAR") +3;
       var end = data.search("END_VAR");
       var output = data.slice(begin,end);
      
       //Pobranie nazw zmiennych wcelu utworzenia obiektu
      console.log(output);
    
      var removeNewLine =output.replace(/(\r\n|\n|\r)/gm,"");
      var removeWhiteSpace =removeNewLine.replace(/\s/g, "");
      var stringArray = removeWhiteSpace.split(";");

      //Usuniecie ostatniego rekordu tablicy bo jest pusty
      stringArray.pop();

      //Usuniecie typu zmiennej przekazanej ze sterownika
        stringArray.forEach(function(value,index){
            var helpValue= value.split(':');
            stringArray[index]=helpValue[0];
           
        });
    //Konwersja tablicy stringow na obiekt
        var PageObject={};
        stringArray.forEach(function(value,index){
            PageObject[value] = ":=" + dbName + "." +  value + ":";
        });
        var xmlPage = js2xmlparser.parse(dbName, PageObject);

        fs.writeFile(__dirname + "/xml_files/"+ file + '.xml', xmlPage, function(err) {
            if(err) {
                return console.log(err);
            }
        
            console.log("The file was saved!");
        }); 

      });
    });
});

});


//Funkcja do szukania ponownego wystapienia
//str -string , pattern i miejsce wystapienia
function advancedSearch(str, pattern, placeNumber){
    var L= str.length, i=-1;
    while(placeNumber -- && i++<L){
        i= str.indexOf(pattern, i);
        if (i < 0) break;
    }
    return i;
}