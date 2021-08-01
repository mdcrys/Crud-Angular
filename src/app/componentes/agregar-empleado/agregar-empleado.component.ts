import { Component, OnInit } from '@angular/core';
import { FormGroupName, FormBuilder, FormGroup } from '@angular/forms';

import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {

  FormularioDeEmpelados: FormGroup;

  constructor(
    public formulario: FormBuilder,
    private crudService: CrudService,
   private ruteador:Router,
  ) {
    this.FormularioDeEmpelados = this.formulario.group({
      nombre: [''],
      correo:['']
    });

   }

  ngOnInit(): void {

  }
  enviarDatos():any {
    console.log("Me presionaste");
    console.log(this.FormularioDeEmpelados.value);
    this.crudService.AgregarEmpleado(this.FormularioDeEmpelados.value).subscribe(respuesta => {
      this.ruteador.navigateByUrl('/listar-empleado');
    });

    
  }

}
