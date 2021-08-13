//  a - module
import { NgModule } from '@angular/core';
import { BTbuoi1Component } from './BTbuoi1.component';
import { BaiTapSo5Component } from './BaiTapSo5.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaiTapSo6Component } from './BaiTapSo6.component';
@NgModule({
    declarations: [BTbuoi1Component, BaiTapSo5Component, BaiTapSo6Component],   //Nơi chứa các component trong module này
    imports: [CommonModule, FormsModule],    //Nơi import các thư viện, module khác
    exports: [BTbuoi1Component],       //Nơi xuất component chính
})
export class BTbuoi1Module { }
