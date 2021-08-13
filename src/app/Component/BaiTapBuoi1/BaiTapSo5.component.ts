import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-baiTap-so-5',
    template: `
        <nav class="navbar navbar-expand-sm navbar-light" style="background-color: 'silver'">
            <a class="navbar-brand" href="#">CyberSoft</a>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Feature</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item d-flex" *ngIf="isLogin; else divLogin">
                        <a class="nav-link" href="#" data-toggle="modal">Hello !{{UserName}}</a>
                        <a class="nav-link" href="#" data-toggle="modal" (click)="logOut()">Đăng xuất</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="modal fade" id="loginModal" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>Login</h3>
                        <a href="#" data-dismiss="modal" style="float: right; color: black; text-decoration: none">&times;</a>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <h5>UserName: </h5>
                            <input type="text" class="form-control" [(ngModel)]="userAccout.username">
                        </div>
                        <div class="form-group">
                            <h5>Password: </h5>
                            <input type="password" class="form-control" [(ngModel)]="userAccout.password">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-success" type="submit" (click)="login()">Login</button>
                        <button class="btn btn-danger" type="button" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <ng-template #divLogin>
            <li class="nav-item">
                <a class="nav-link" href="#" data-target="#loginModal" data-toggle="modal">Login</a>
            </li>
        </ng-template>
    `
})

export class BaiTapSo5Component implements OnInit {

    UserName:string = 'CyberSoft';

    isLogin:boolean = false;

    userAccout:userAccount = {
        username: '',
        password: '',
    }

    constructor() { }

    ngOnInit() { 
        if(localStorage.getItem('userLogin')) {
            this.UserName = localStorage.getItem('userLogin')!;
            this.isLogin = true;
        }
    }

    login = () => {
        if(this.userAccout.username === 'cybersoft' && this.userAccout.password === '123') {
            this.isLogin = true;
            this.UserName = this.userAccout.username;
            localStorage.setItem('userLogin', this.userAccout.username);
        }
    }

    logOut = () => {
        localStorage.removeItem('userLogin');
        this.isLogin = false;
    }
}

interface userAccount {
    username:string,
    password:string
}