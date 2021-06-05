import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heores:string[] = ['Charlie','Dixie','Michelle','Karina'];
  deleteHeroe = "";

  deleteElement():void{
    this.deleteHeroe = this.heores.pop() || "";
  }

  deleteEle():string{
    return this.deleteHeroe;
  }


}
