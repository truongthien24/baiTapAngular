import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-baiTap-so-6',
    template: `
        <div class="card">
            <div class="card-header p-3 bg-dark text-light">
                Quản lý danh mục sản phẩm
            </div>
            <div class="card-body">
                <div class="form-group">
                    <p>Mã SP</p>
                    <input type="text" class="form-control" [(ngModel)]="sanPham.maSP">
                </div>
                <div class="form-group">
                    <p>Tên SP</p>
                    <input type="text" class="form-control" [(ngModel)]="sanPham.tenSP">
                </div>
                <div class="form-group">
                    <p>Giá SP</p>
                    <input type="text" class="form-control" [(ngModel)]="sanPham.giaSP">
                </div>
                <button class="btn btn-success" type="submit" (click)="themSP()">Thêm sản phẩm</button>
            </div>
        </div>
        <table class="table">
            <thead class="bg-dark text-white">
                <tr>
                    <th>STT</th>
                    <th>Mã SP</th>
                    <th>Tên SP</th>
                    <th>Giá</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let sanPham of mangSanPham; let i = index" [ngClass] = "{'bg-dark text-white': i%2 !== 0}">
                    <td>{{i}}</td>
                    <td>{{sanPham.maSP}}</td>
                    <td>{{sanPham.tenSP}}</td>
                    <td>{{sanPham.giaSP}}</td>
                    <td>
                        <button class="btn btn-danger" (click)="huySP()">Hủy</button>
                    </td>
                </tr>
            </tbody>
        </table>
    `
})

export class BaiTapSo6Component implements OnInit {

    sanPham:SanPham = {
        maSP: '',
        tenSP: '',
        giaSP: 0
    }

    mangSanPham:SanPham[] = [
        {tenSP: 'Iphone X', maSP: '1', giaSP: 1000}
    ]

    constructor() { }

    ngOnInit() { }

    themSP = () => {
        var index = this.mangSanPham.findIndex(sanPham => sanPham.maSP === this.sanPham.maSP)
        if(index !== -1) {
            alert('Sản phẩm mới thêm đã trùng mã !');
        }else {
            this.mangSanPham.push(this.sanPham);
        }
    }

    huySP = () => {
        alert('Chức năng tạm thời đã khóa !')
    }
}

interface SanPham {
    maSP:string,
    tenSP:string,
    giaSP:number
} 