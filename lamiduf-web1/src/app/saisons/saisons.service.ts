import { Saison } from './saison';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class SaisonsService {

    private saisonssUrl = 'http://localhost:9000/saison';

    constructor(private http: Http) {
    }

    getSaisons(): Promise<Saison[]> {
        return this.http.get(this.saisonssUrl)
            .toPromise()
            .then(response => response.json() as Saison[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}