
import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1>
        <h3>La base es: <strong>{{base}}</strong></h3>

        <button (click)="cumulador(+base);">+ {{base}}</button>
        <span>{{numero}}</span>
        <button (click)="cumulador(-base);">- {{base}}</button>
    `
})
export class ContadorComponent{
    public title:string = 'bases';
    numero:number = 0;
    base:number = 5;
    cumulador = (valor:number) => this.numero+=valor;
}