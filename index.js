class Formatter {
 static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
 }
 static sanitize (string){
 
   return string.replace(/[^A-Za-z0-9-' ]+/g, '')
 }
 static titlesize(string){
   
 if (string==='the' || string==='a')
 {
   return string.charAt(0).toUpperCase() + string.slice(1);
 }
   else{
     return string.toUpperCase()
   }
 }
}