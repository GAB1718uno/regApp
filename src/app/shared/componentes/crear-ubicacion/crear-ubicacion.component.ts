import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear-ubicacion',
  templateUrl: './crear-ubicacion.component.html',
  styleUrls: ['./crear-ubicacion.component.css']
})
export class CrearUbicacionComponent implements OnInit {

  formUbicacion:FormGroup;
  avatar: string = '';
  capturado1:any; 

  constructor(
    private fb:FormBuilder,
  ) {

    this.formUbicacion = this.fb.group({
      calle:[''],
      numero:[''],
      avatar:['']
    })
   }

  
  
  ngOnInit(): void {
  }

  showPreview(event:any) {
    const nombreImagen = event.target.files[0].name;
  this.capturado1 = `/assets/images/${nombreImagen}`;
   this.avatar= this.capturado1;
  }

  uploadFoto(){
    
  }




}
    
    
    
    
    /* 

    const file = event.target.files[0];
    this.formUbicacion.patchValue({
      avatar: file
    });
    this.formUbicacion.get('avatar').updateValueAndValidity()
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

}
 */