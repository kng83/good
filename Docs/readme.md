
//Problem z @types/request-promise:
- "@types/bluebird": "^3.5.19" zawieraja odniesienie do map ,ktore jest w ES6 (mozna zmienici tsconfig.json target:ES6 i module:commonjs )

-rozwiazanie to dodanie to tsconfig.json        
 "lib": [
            "dom",
            "es2015"
          ]
    },

//aby odczytac html i xml pierwszy tag musi poprzedzac spacja