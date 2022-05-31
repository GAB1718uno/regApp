import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'image'
})
export class ImagenPipe implements PipeTransform {
transform(value:string, ...args:string[]):string {
    return 'Hola Mundo';
    
}

}