import { Injectable } from '@angular/core';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';
import PNotifyConfirm from 'pnotify/dist/es/PNotifyConfirm';
import PNotifyHistory from 'pnotify/dist/es/PNotifyHistory';


@Injectable({
  providedIn: 'root'
})
export class PnotifyService {

  constructor() {
    PNotifyButtons; // Initiate the module. Important!
    PNotifyConfirm;
    PNotifyHistory;
    PNotify.defaults.styling = 'bootstrap4';
    PNotify.defaults.icons = 'fontawesome4';
   }

   success(title: string, content: string) {
    PNotify.success({
      title: title,
      text: content
    })
  }

  error(title: string, content: string) {
    PNotify.error({
      title: title,
      text: content
    })
  }

  public showConfirm(title: string, content: string, callback: (res:boolean) => void) {
    var notice = PNotify.notice({
      title: title,
      text: content,
      icon: 'fas fa-question-circle',
      hide: false,
      stack: {
        'dir1': 'down',
        'modal': true,
        'firstpos1': 25
      },
      modules: {
        Confirm: {
          confirm: true
        },
        Buttons: {
          closer: false,
          sticker: false
        },
        History: {
          history: false
        },
      }
    });
    notice.on('pnotify.confirm', function () {
      callback(true);
    });
    notice.on('pnotify.cancel', function () {
      callback(false);
    });
  }
}
