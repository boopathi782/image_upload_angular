// import { Component } from '@angular/core';

import { Component, ViewChild, ElementRef } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import * as _ from 'lodash';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 /*  title = 'image_upload_angular';


  title = 'angular-image-file-upload-tutorial'; */

/*   @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef; */
 /*  fileUploadForm: FormGroup;
  fileInputLabel: string; */

  fileUploadForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    mobile: ['', [Validators.required]],
    // profile: ['', [Validators.required, Validators.minLength(10)]],
    resume: [ [Validators.required]],
   /*  fileSource:  ['', [Validators.required]]  */
  });


  resume: any;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private userservice: UserService,
  ) { }

  ngOnInit(): void {
   /*  this.fileUploadForm = this.formBuilder.group({
      uploadedImage: []
    }); */
  }

  // selectImage(event: { target: { file: string | any[]; files: any[]; }; }){

    selectImage(event:  any ){
    // if(event.target.file.length > 0){

      if (event.target.files.length > 0) {
        const file =event.target.files[0];
        this.resume = file;
        console.log("--this.resume---->>>", this.resume);
    }
  }


  onSubmit(){
    const formData = new FormData();
    formData.append('resume', this.resume)
    formData.append('name', this.fileUploadForm.value.name)
    formData.append('mobile', this.fileUploadForm.value.mobile)

    console.log("-------name --->>>",this.fileUploadForm.value.name);
    console.log("-------mobile --->>>",this.fileUploadForm.value.mobile);


    /* this.http.post<any>('http://localhost:3012/upload_profile', formData).subscribe(
      (res)=>console.log(res),
      (err)=>console.log(err),
    ); */


   /*  this.userservice.fileupload(formData).subscribe((data : any)=>{
      console.log(data);
      // alert('Uploaded Successfully.');
      console.log('Uploaded Successfully.');
    }); */

    this.userservice.fileupload(formData).subscribe((data : any)=>{
      console.log(data);
      // alert('Uploaded Successfully.');
      console.log('Uploaded Successfully.');
    });


  }


  /* onFileSelect(event: { target: { files: any[]; }; }) {
    const file = event.target.files[0];
    this.fileInputLabel = file.name;
    this.fileUploadForm.get('uploadedImage').setValue(file);
  } */

  /* onFormSubmit() {

    if (!this.fileUploadForm.get('uploadedImage').value) {
      alert('Please fill valid details!');
      return false;
    }

    const formData = new FormData();
    formData.append('uploadedImage', this.fileUploadForm.get('uploadedImage').value);
    formData.append('agentId', '007');


    this.http
      .post<any>('http://localhost:3000/uploadfile', formData).subscribe(response => {
        console.log(response);
        if (response.statusCode === 200) {
          // Reset the file input
          this.uploadFileInput.nativeElement.value = "";
          this.fileInputLabel = undefined;
        }
      }, er => {
        console.log(er);
        alert(er.error.error);
      });
  } */












}
