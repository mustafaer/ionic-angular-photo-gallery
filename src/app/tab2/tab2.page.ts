import {Component} from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {PhotoService} from '../services/photo.service';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss'],
    providers: [PhotoService]
})
export class Tab2Page {
    currentImage: any;

    constructor(public photoService: PhotoService) {
    }

    // tslint:disable-next-line:use-lifecycle-interface
    ngOnInit() {
        this.photoService.loadSaved();
    }
}
