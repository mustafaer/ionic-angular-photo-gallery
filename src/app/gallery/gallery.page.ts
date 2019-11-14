import {Component} from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {PhotoService} from '../services/photo.service';

@Component({
    selector: 'app-gallery',
    templateUrl: 'gallery.page.html',
    styleUrls: ['gallery.page.scss'],
    providers: [PhotoService]
})
export class GalleryPage {
    currentImage: any;

    constructor(public photoService: PhotoService) {
    }

    // tslint:disable-next-line:use-lifecycle-interface
    ngOnInit() {
        this.photoService.loadSaved();
    }
}
