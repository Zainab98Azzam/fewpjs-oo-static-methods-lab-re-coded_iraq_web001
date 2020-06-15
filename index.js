class Formatter {
 static capitalize(string){
    return this.string.charAt(0).toUpperCase() + string.slice(1);
 }
 static sanitize (string){
 
   return this.string.replace(/[^A-Za-z0-9-']+/g, '')
 }
}