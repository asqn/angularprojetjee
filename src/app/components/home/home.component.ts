import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user$ = this.usersService.currentUserProfile$;

  constructor(private usersService: UsersService, private router: Router ) {}

  ngOnInit(): void {}

  producte(){
this.router.navigate(['/Producte']);
  }
  i1(){
    this.router.navigate(['/I1']);
      }   
      i2(){
        this.router.navigate(['/I2']);
          }   
          i3(){
            this.router.navigate(['/I3']);
              }  
              i4(){
                this.router.navigate(['/I4']);
                  }  
                  i5(){
                    this.router.navigate(['/I5']);
                      }                
                      i6(){
                        this.router.navigate(['/I6']);
                          }  
                          i7(){
                            this.router.navigate(['/I7']);
                              }  
                              i8(){
                                this.router.navigate(['/I8']);
                                  }  
                                  i9(){
                                    this.router.navigate(['/I9']);
                                      }  
                                      i10(){
                                        this.router.navigate(['/I10']);
                                          }  
                                          i11(){
                                            this.router.navigate(['/I11']);
                                              } 
                                              i12(){
                                                this.router.navigate(['/I12']);
                                                  } 
                                                  i13(){
                                                    this.router.navigate(['/I13']);
                                                      } 
                                                      i14(){
                                                        this.router.navigate(['/I14']);
                                                          } 
                                                          i15(){
                                                            this.router.navigate(['/I15']);
                                                              } 
                                                              i16(){
                                                                this.router.navigate(['/I16']);
                                                                  } 
                                                                  i17(){
                                                                    this.router.navigate(['/I17']);
                                                                      } 
                                                                      i18(){
                                                                        this.router.navigate(['/I18']);
                                                                          } 
                                                                          i19(){
                                                                            this.router.navigate(['/I19']);
                                                                              } 
}
