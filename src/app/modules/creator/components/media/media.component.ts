import { Component, OnInit,Input } from '@angular/core';
import { TDSUploadFile } from 'tds-ui/upload';
const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
@Component({
  selector: 'tmt-ghub-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})

export class MediaComponent implements OnInit {

  @Input() image: string = "";
  constructor() { }

  ngOnInit(): void {
    this.image

  }

  previewImage: string | undefined = '';
  previewVisible = false;


}
