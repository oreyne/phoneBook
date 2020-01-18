import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private _url: string = 'app/phonebook.txt';

  constructor( ) { 
    
  }

  getData(){
    //return this.http.get(this._url);
    return [
      "AliciaSi,+359878123453",
      "OreyneSi,+359878123456",
      "Oreyne Lang Si,+359878123456",
      "Yeni Si,0878123456",
      "Maczel Si,00359878123452",
      "Maria No,+2321123342",
      "marta No,+319843123456",
      "HildaNo,+319172123456",
      "Olga No,+00319321123456",
      "Intensa No,00359871123457",
      "Isla No,00359871123456",
      "GozaNO,+00359871123456",
      "Yumiel No,0871123453",
      "KarlaNOSE,  +359878123453",
      "Jose,",
      ",",
      " ,",
      " , ",
      " , ,",
      "",
      ",323423424",

      ", , , , ",
      "         "
    ]
  }
}
