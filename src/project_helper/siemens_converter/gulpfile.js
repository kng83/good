var gulp = require("gulp");
var fs = require('fs')
var js2xmlparser = require("js2xmlparser");
var db_file = 'db_files';

gulp.task("convert", function () {

    // Przeczyta folder plikow i zrob z nich pliki xml
    fs.readdir(db_file, (err, files) => {
        files.forEach(file => {

            var filename = __dirname + '/' + db_file + '/' + file;
            fs.readFile(filename, 'utf8', function (err, data) {
                if (err) throw err;

                // Szukanie informacji o nazwie bloku znajduje sie pomiedzy apostrofami
                var secondComment = advancedSearch(data, "\"", 2);
                var firsComment = data.search("\"");
                var dbName = data.slice(firsComment + 1, secondComment);
                console.log(dbName);


                // Utworzenie stringu zawierajacego pary klucz wartosc odzielone
                // srednikiem :   Machine_Speed : Int;
                var begin = data.search("VAR") + 3;
                var end = data.search("END_VAR");
                var output = data.slice(begin, end);

                //Pobranie nazw zmiennych w celu utworzenia obiektu
                // console.log(output);
                //zamiana nowej lini na znak ";" w celu zrobienia separacji
                var replaceNewLine = output.replace(/(\r\n|\n|\r)/gm, "||");
                //  console.log(replaceNewLine);
                var replaceComma = replaceNewLine.replace(/\s[:]\s/g, ";");
                //usuwa komentarz
                var replaceComment = replaceComma.replace(/\/\//g, "");
                //usuwanie spacji gdy jest wiecej niz jedna
                var removeLongSpaces = replaceComment.replace(/\s\s+/g, "");

                var stringArray = removeLongSpaces.split(/\|\|/g);
                //Usuniecie pierwszego i ostatniego rekordu tablicy bo jest pusty
                stringArray.pop();
                stringArray.shift();

                //zrobnie tablicy zawierajacej tablice
                let modifedArray = []
                stringArray.forEach(function (value, index) {
                    let helpVal = value.split(';')
                    modifedArray.push(helpVal)
                });

                var PageObject = {};
                var PageInterface = {};
                //Tworzenie klasy elementInterface
                var ElementInterface = (function(){
                    ElementInterface = function(){}
                    return ElementInterface;
                })();
                var elementInterface = new ElementInterface();

                modifedArray.forEach(function (arrayValue, index) {

                    PageObject[arrayValue[0]] = {
                            "@": {
                                "name":arrayValue[0],
                                "typ": arrayValue[1],
                                "desc": arrayValue[2]
                            },

                            "#": ":=" + dbName + "." + arrayValue[0] + ":"
                        }
                    PageInterface[arrayValue[0]] = elementInterface.constructor.name;

                    
                });
                console.log(PageInterface);
                console.log(PageObject);
                //js2xmlparser ustawiony na pretty:false aby plik byl mniejszy
                var xmlPage = js2xmlparser.parse(dbName, PageObject,{format:{pretty:false}});

                fs.writeFile(__dirname + "/xml_files/" + file + '.xml', xmlPage, function (err) {
                    if (err) {
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
function advancedSearch(str, pattern, placeNumber) {
    var L = str.length, i = -1;
    while (placeNumber-- && i++ < L) {
        i = str.indexOf(pattern, i);
        if (i < 0) break;
    }
    return i;
}