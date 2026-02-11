import { a, add, b } from "./Index.js";

function sub(){
    add();
    console.log(a-b+"This is Sub");
}
sub();
export {sub}