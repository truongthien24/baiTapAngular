//a - component -inline
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-buoi-1',   //Tên của component
    template: `

        <div class="container-fluid">
            <div class="row">
                <div class="col-12 text-center">
                    <h1 class="text-danger">Bài Tập Angular Buổi 1</h1>
                </div>
            </div>   
            <div class="row">
                <div class="col-12">
                    <h3>Bài tập 5: </h3>
                </div>
                <div class="col-12">
                    <app-baiTap-so-5></app-baiTap-so-5>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h3>Bài tập 6: </h3>
                </div>
                <div class="col-12">
                    <app-baiTap-so-6></app-baiTap-so-6>
                </div>
            </div>
        </div>

        <!-- Nơi chứa các cấu trúc html trong component này -->
    `  

})

export class BTbuoi1Component implements OnInit {
    constructor() { }

    ngOnInit() { }
}