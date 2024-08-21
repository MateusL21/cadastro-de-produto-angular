import { Category } from "./Category";

export interface Product { 
    id : number;
    name : string;
    email : string;
    phone : number;
    course : Category;
    class : string;
}