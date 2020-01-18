import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { UploadFileService } from '../upload-file.service';

const URL = 'http://localhost:4000/api/upload';

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.css']
})
export class ImportDataComponent implements OnInit {

  public pairs = [];
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });

  constructor( private _dataService: UploadFileService ) {

  }

  ngOnInit() {
    var peer = this._dataService.getData();
    var temp = [];

    const regex = RegExp('[a-zA-Z]\,[+]{1}[2-9][0-9]');
    for ( var p in peer){
      if (regex.test(peer[p]) == true)
        temp.push(peer[p]);
    }

    this.pairs = temp;
    
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
    };
  }
}
