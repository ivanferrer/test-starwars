import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { MessageService } from 'primeng/api';

@Injectable()
export class PeopleService {

    constructor(private http: HttpClient, public messageService: MessageService) { }

    getPeoples() {
     return this.http.get<any>(`${environment.apiUrl}/people/`)
        .toPromise()
        .then(res => res.results)
        .catch(err => { 
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Falha ao carregar dados. Problemas no servidor', life: 3000});
          console.log(err);
      });
    }

    getPeople(data) {
        return this.http.get<any>(`${environment.apiUrl}/people/${data.id}`)
           .toPromise()
           .then(res => res.results)
           .catch(err => { 
             this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Falha ao carregar dados. Problemas no servidor', life: 3000});
             console.log(err);
         });
    }

    deletePeople(data) {
      return this.http.delete<any>(`${environment.apiUrl}/people/delete/${data.id}`)
        .toPromise()
        .then(res => res)
        .catch(err => { 
            this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Falha ao deletar dados. Problemas no servidor', life: 3000});
            console.log(err);
        });
    }

    addPeople(data) {
      return this.http.post<any>(`${environment.apiUrl}/people/create/`, data)
        .toPromise()
        .then(res => res);
    }

    updatePeople(data) {
      return this.http.put<any>(`${environment.apiUrl}/people/put/${data.id}`, data)
        .toPromise()
        .then(res => res);
    }
}
