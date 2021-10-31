import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-loader-page',
     template: ` <app-root>
                            <div class="loader-wrapper" *ngIf="isLoading">
                                        <div class="loader"></div>
                                        <div class="loader-section section-left"></div>
                                        <div class="loader-section section-right"></div>
                                </div>
                        </app-root>
                    `
  })
  export class AppLoaderPageComponent implements OnInit {


      isLoading: boolean;

      ngOnInit() {
        this.isLoading=true;
      }

      setStatus(status) {
        this.isLoading=status;
      }
      
      toggleLoading() {
        this.isLoading=!this.isLoading;
      }

   
  }
