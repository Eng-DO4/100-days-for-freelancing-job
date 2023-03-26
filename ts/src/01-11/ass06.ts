let nothing:any;
let theName = "Elzero";
function showMyDetails(a:string = "", b:any = "", c?:any):string {
  return `${a}${b}${c}`;
}

console.log(showMyDetails(theName, nothing, "")); // Elzero