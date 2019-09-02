import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UsersManagementService } from '../../../services/users-management.service';
var UserAddingModalComponent = /** @class */ (function () {
    function UserAddingModalComponent(usersManagementService, route, modalService) {
        this.usersManagementService = usersManagementService;
        this.route = route;
        this.modalService = modalService;
        this.aUser = {};
    }
    UserAddingModalComponent.prototype.ngOnInit = function () {
    };
    UserAddingModalComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    UserAddingModalComponent.prototype.getDismissReason = function (reason) {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    UserAddingModalComponent.prototype.onSubmit = function (formAddUser) {
        this.aUser.username = formAddUser.value.username;
        this.aUser.password = formAddUser.value.password;
        this.aUser.fullname = formAddUser.value.fullname;
        this.aUser.identitycard = formAddUser.value.identitycard;
        this.aUser.birthday = formAddUser.value.birthday;
        switch (formAddUser.value.sex) {
            case "true":
                this.aUser.sex = true;
                break;
            case "false":
                this.aUser.sex = false;
                break;
            default: this.aUser.sex = null;
        }
        switch (formAddUser.value.status) {
            case "true":
                this.aUser.status = true;
                break;
            case "false":
                this.aUser.status = false;
                break;
            default: this.aUser.status = null;
        }
        switch (formAddUser.value.userroleid) {
            case "1":
                this.aUser.userroleid = 1;
                break;
            case "2":
                this.aUser.userroleid = 2;
                break;
            default: this.aUser.userroleid = null;
        }
        this.usersManagementService.post(this.aUser).subscribe(function (res) {
            console.log(res);
        });
    };
    UserAddingModalComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user-adding-modal',
            templateUrl: './user-adding-modal.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [UsersManagementService,
            ActivatedRoute,
            NgbModal])
    ], UserAddingModalComponent);
    return UserAddingModalComponent;
}());
export { UserAddingModalComponent };
//# sourceMappingURL=user-adding-modal.component.js.map