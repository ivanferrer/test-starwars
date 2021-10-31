import {Component, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';
import { PeopleService } from '../service/peoplesservice';
import { People } from '../domain/people';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import {BreadcrumbService} from '../service/app.breadcrumb.service';

@Component({
    templateUrl: './app.list_peoples.component.html',
    styles: [`
		@media screen and (max-width: 960px) {
			:host ::ng-deep .p-datatable.p-datatable-peoples .p-datatable-tbody > tr > td:last-child {
				text-align: center;
			}
			:host ::ng-deep .p-datatable.p-datatable-peoples .p-datatable-tbody > tr > td:nth-child(6) {
				display: flex;
			}
		}
    `],
    providers: [MessageService, ConfirmationService],
})
export class AppListPeoplesComponent implements OnInit {

    displayDialog: boolean;

    peoples: People[];

    people: People;
   
    selectedPeoples: any[];

    selectedGender: any;

    genderOptions:any[]
  
    pipe = new DatePipe('en-US')

    submitted: boolean;

    cols: any[];

    dialogTitle: string;

    isLoading: boolean;
  
    isLoadingEmpresa: boolean;
  
    isLoadingLicitacao: boolean;

    typeModal: string;

    films: any[];
  
    peopleDetails: boolean;

    dialogTitleDetail: string;

    constructor(private peopleService: PeopleService, 
                private messageService: MessageService,
                private confirmationService: ConfirmationService, 
                private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.setItems([
            {label: 'Pessoas'},
            {label: 'Consulta'}
        ]);
    }

    concatCode(collection: any[]) {
        return collection.map((value, key) => {
                     value.descricao_id =  `${value.id} - ${value.descricao_licitacao}`
                return value;
            });
    }

    formatDataContract(collection: any[]) {
        return collection.map((value, key) => {
                     value.licitacao_info = `${value.licitacao.id} - ${value.licitacao.descricao_licitacao}`
                     value.data_inicio_contrato = this.pipe.transform(value.data_inicio_contrato, 'dd/MM/yyyy');
                     value.data_fim_contrato = this.pipe.transform(value.data_fim_contrato, 'dd/MM/yyyy');
                return value;
            });
    }

    ngOnInit() {

        this.isLoading = true;
        this.peopleService.getPeoples()
        .then(data => { 
            this.isLoading = false;
            this.peoples = data || []
        });
   
        this.cols = [
            { field: 'name', header: 'Nome' },
            { field: 'height', header: 'Medida' },
        ];

        this.genderOptions = [
            {label:'Masculino', value:'male'},
            {label:'Feminino', value:'female'}
        ]
    }

    openNew() {
        this.dialogTitle = 'Cadastrar Pessoa';
        this.people = {};
        this.submitted = false;
        this.displayDialog = true;
        this.typeModal = 'new';
       }

    
    detailsPeople(people: People) {
        this.dialogTitleDetail = 'Detalhes da Pessoa';
        this.typeModal = 'detail';
        this.people = {...people};
        this.peopleDetails = true;
    }

    // edit(people: People) {

    //     if (people.id) {
            
        
    //     } else {           
    //         this.openNew();
    //     }
    // }

    // deletePeople(people: People) {
    //     this.confirmationService.confirm({
    //         message: 'Você gostaria de remover esta pessoa?',
    //         header: 'Exclusão de pessoa',
    //         icon: 'pi pi-exclamation-triangle',
    //         accept: () => {
    //             this.peopleService.deletePeople(people)
    //             .then(res => {
    //                 this.peoples = this.peoples.filter(val => val.id !== people.id);
    //                 this.people = {};
    //                  this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Pessoa Removida', life: 3000});
    //                 })
    //                 .catch(err => {
    //                     console.log(err)
    //                 })
    //         }
    //     });
    // }


    hideDialog() {
        this.displayDialog = false;
        this.submitted = false;
    }
    
    hideDialogDetails() {
        this.peopleDetails = false;
        this.submitted = false;
    }

    isValidSubmit() {
  
    }

 
    findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.peoples.length; i++) {
            if (this.peoples[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    findIndexByFilms(id: number): number {
        let index = -1;
        for (let i = 0; i <this.films.length; i++) {
            if (this.films[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }
  

}
