
//Problem z @types/request-promise:
- "@types/bluebird": "^3.5.19" zawieraja odniesienie do map ,ktore jest w ES6 (mozna zmienici tsconfig.json target:ES6 i module:commonjs )

-rozwiazanie to dodanie to tsconfig.json        
 "lib": [
            "dom",
            "es2015"
          ]
    },

//Siemens s7-1200 response problem:
- Request to Siemens s7-1200 is not giving a normal respone : CE<parent>...</parent>0. 
