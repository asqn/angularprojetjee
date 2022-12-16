import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  { NgxCroppedEvent ,  NgxPhotoEditorService }  from 'ngx-photo-editor' ;
import { ViewChild } from '@angular/core';
import { ElementRef ,Renderer2} from '@angular/core' ;
import { Observable, Observer } from "rxjs";
import {IPayPalConfig,ICreateOrderRequest } from 'ngx-paypal';
declare var $:any
@Component({
  selector: 'app-i18',
  templateUrl: './i18.component.html',
  styleUrls: ['./i18.component.css']
})
export class I18Component implements OnInit {
  constructor( private router: Router,private service: NgxPhotoEditorService , private rdr:Renderer2) { }
  @ViewChild('boxCard') boxCard!:ElementRef
  setColor(e:any){
    this.rdr.setStyle(this.boxCard.nativeElement,'background-color',e.target.value )
  }
  output?: NgxCroppedEvent;

  Modele(){
    this.router.navigate(['/Modele']);
      }

  ngOnInit() {

     // Make the text element draggable.
     $(document).ready(function() {
      $(function() { 
          $('#theText').draggable({
              containment: 'parent'     // set draggable area. Ref: https://www.encodedna.com/jquery/limit-the-draggable-area-using-jquery-ui.htm 
          }); 
      });
  });
  this.initConfig();
  }

  // Select image and show it.
   chooseImage = () => {
    document.getElementById('file')!.click();
  }

   showImage = (fl:any) => {
      if (fl.target.files.length > 0) {
          let reader:any  = new FileReader();

          reader.onload = function (e:any) {
              let img:any = new Image();
              
              img.onload = function () {
                  if (img.width > screen.width || img.height > screen.height) {
                      alert('Please select a small image. The image width and height should be less than the screen width and height.');

                      document.getElementById('theText')!.style.display = 'none';
                      document.getElementById('bt')!.style.display = 'none';
                      document.getElementById('textArea')!.style.display = 'none';
                      document.getElementById('myimage')?.setAttribute('src','')
                  }
                  else {
                      document.getElementById('theText')!.style.display = 'block';
                      document.getElementById('bt')!.style.display = 'block';
                      document.getElementById('textArea')!.style.display = 'block';
                  }
              }

              img.src = e.target.result;      // actual image. 
              document.getElementById('myimage')?.setAttribute('src',reader.result)  ;  // Add the image on the form.
          };
          reader.readAsDataURL(fl.target.files[0]);
      }
  }

   textContainer:any;
   t:string = 'sample text';
  
  // Get the values that you have entered in the textarea and
  // write it in the DIV over the image.

   writeText = (ele:any) => {
      this.t = ele.target.value;
      document.getElementById('theText')!.innerHTML = this.t.replace(/\n\r?/g, '<br />');
  }

mouseText(e:any):void {
  e.target.style.border = "dashed 2px #FF7F27"
}

  // Finally, save the image with text over it.
   saveImageWithText = () => {

      this.textContainer = document.getElementById('theText');     // The element with the text.
  
      // Create an image object.
      let img:any = new Image();
      img.src = document.getElementById('myimage')?.getAttribute('src');
     
      // Create a canvas object.
      let canvas = document.createElement("canvas");
      
      // Wait till the image is loaded.
      img.onload = function(){
          drawImage();
          downloadImage(img.src.replace(/^.*[\\\/]/, ''));    // Download the processed image.
      }
      
      // Draw the image on the canvas.
      let drawImage = () => {
          let ctx:any = canvas.getContext("2d");	// Create canvas context.

          // Assign width and height.
          canvas.width = img.width;
          canvas.height = img.height;

          // Draw the image.
          ctx.drawImage(img, 0, 0);
          
          this.textContainer.style.border = 0;
          
          // Get the padding etc.
          let left = parseInt(window.getComputedStyle(this.textContainer).left);
          let right = this.textContainer.getBoundingClientRect().right;
          let top:any = parseInt(window.getComputedStyle(this.textContainer).top, 0);
          let center = this.textContainer.getBoundingClientRect().width / 2;

          let paddingTop = window.getComputedStyle(this.textContainer).paddingTop.replace('px', '');
          let paddingLeft = window.getComputedStyle(this.textContainer).paddingLeft.replace('px', '');
          let paddingRight = window.getComputedStyle(this.textContainer).paddingRight.replace('px', '');
          
          // Get text alignement, colour and font of the text.
          let txtAlign = window.getComputedStyle(this.textContainer).textAlign;
          let color = window.getComputedStyle(this.textContainer).color;
          let fnt = window.getComputedStyle(this.textContainer).font;
         
          // Assign text properties to the context.
          ctx.font = fnt;
          ctx.fillStyle = color;
          ctx.textAlign = txtAlign;
    
          // Now, we need the coordinates of the text.
          let x; 		// coordinate.
          if (txtAlign === 'right') {
            x = right + parseInt(paddingRight) - 11;
          }
          if (txtAlign === 'left') {
            x = left + parseInt(paddingLeft);
          }
          if (txtAlign === 'center') {
            x = center + left;
          }

          // Get the text (it can a word or a sentence) to write over the image.
          let str = this.t.replace(/\n\r?/g, '<br />').split('<br />');

          // finally, draw the text using Canvas fillText() method.
          for (let i = 0; i <= str.length - 1; i++) {
            
              ctx.fillText(
                  str[i]
                      .replace('</div>','')
                      .replace('<br>', '')
                      .replace(';',''), 
                  x, 
                  parseInt(paddingTop, 10) + parseInt(top, 10) + 10 + (i * 15));
          }

          // document.body.append(canvas);  // Show the image with the text on the Canvas.
      }

      // Download the processed image.
      let downloadImage = (img_name:any) => {
          let a = document.createElement('a');
          a.href = canvas.toDataURL("image/png");
          a.download = img_name;
          document.body.appendChild(a);
          a.click();        
      }
  }
 base64textString:any= [];

      onUploadChange(event: any) {
        const file = event.target.files[0];
      
        if (file) {
          const reader = new FileReader();
      
          reader.onload = this.handleReaderLoaded.bind(this);
          reader.readAsBinaryString(file);
        }
        this.service.open(event, {
          aspectRatio: 4 / 3,
          autoCropArea: 1
        }).subscribe(data => {
          this.output = data;
        });
      }
      handleReaderLoaded(e:any) {
        this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
      } 
       
 name=""
 clearName() {
   this.name="";
 }
 name1=""
 clearName1() {
   this.name1="";
 }
 
 dragStarted(event:any) {  
  event.source.element.nativeElement.textContent = '1212';
}
base64Image: any;
downloadImage() {
  let imageUrl ="../../../assets/images/2.PNG";

  this.getBase64ImageFromURL(imageUrl).subscribe((base64data:any) => { console.log(base64data);
    this.base64Image = "data:image/jpg;base64," + base64data;
    // save image to disk
    var link = document.createElement("a");

    document.body.appendChild(link); // for Firefox

    link.setAttribute("href", this.base64Image);
    link.setAttribute("download", "img.jpg");
    link.click();
  });
}

getBase64ImageFromURL(url: string) {
  return Observable.create((observer: Observer<string>) => {
    const img: HTMLImageElement = new Image();
    img.crossOrigin = "Anonymous";
    img.src = url;
    if (!img.complete) {
      img.onload = () => {
        observer.next(this.getBase64Image(img));
        observer.complete();
      };
      img.onerror = err => {
        observer.error(err);
      };
    } else {
      observer.next(this.getBase64Image(img));
      observer.complete();
    }
  });
}

getBase64Image(img: HTMLImageElement) {

  const canvas: HTMLCanvasElement = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  let ctx: CanvasRenderingContext2D | null;
if (!(ctx = canvas.getContext("2d"))) {
    throw new Error(`2d context not supported or canvas already initialized`);
}
  ctx.drawImage(img, 0, 0);
  const dataURL: string = canvas.toDataURL("image/png");

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

showSuccess:any={};
public payPalConfig?: IPayPalConfig;

 

  private initConfig(): void {
    this.payPalConfig = {
    currency: 'EUR',
    clientId: 'sb',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'EUR',
            value: '9.99',
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: '9.99'
              }
            }
          },
          items: [
            {
              name: 'Enterprise Subscription',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'EUR',
                value: '9.99',
              },
            }
          ]
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      label: 'paypal',
      layout: 'vertical'
    },
    onApprove: (data, actions) => {
      console.log('onApprove - transaction was approved, but not authorized', data, actions);
      actions.order.get().then((details:any) => {
        console.log('onApprove - you can get full order details inside onApprove: ', details);
      });
    },
    onClientAuthorization: (data) => {
      console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      this.showSuccess = true;
      
    },
    onCancel: (data, actions) => {
      console.log('OnCancel', data, actions);
    },
    onError: err => {
      console.log('OnError', err);
    },
    onClick: (data, actions) => {
      console.log('onClick', data, actions);
    },
  };
  }
}
