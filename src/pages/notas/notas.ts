import { Component } from '@angular/core';
import { NavController, ItemSliding, NavParams } from 'ionic-angular';
import { NotaInterface } from '../../interfaces/notaInterface';
import { Webservice } from '../../providers/webservice/webservice';
import { DetalhePage } from '../detalhe/detalhe';


@Component({
    templateUrl: 'notas.html'
})
export class NotasPage {
    public abreForm: boolean = false;
    public tituloPagina: string = "Notas";
    public listaNotas: NotaInterface[];
    public nota: NotaInterface = {
        Title: '',
        Body: ''
    }
    public editando: boolean = false;

    constructor(public navCtrl: NavController, public navParams: NavParams, public webservice: Webservice) { }

    ionViewDidEnter() {
        this.webservice.getNotas(this.nota).then(data => this.listaNotas = data);
        if (this.navParams.get('nota')) {
            this.AbreFormulario();
            this.nota = this.navParams.get('nota');
        }
    }
    AbreFormulario() {
        this.abreForm = !this.abreForm;
        this.editando = false;
        this.nota = {
            Title: '',
            Body: ''
        }
        if (this.abreForm)
            this.tituloPagina = "Adicionar Nota";
        else
            this.tituloPagina = "Notas";

    }

    adicionaNota() {
        let nota = this.nota;
        this.nota = {
            Title: '',
            Body: ''
        }
        this.abreForm = false;
        this.webservice.addNota(nota).then(data => this.listaNotas.push(data));
    }

    abreDetalhe(nota: NotaInterface) {
        this.navCtrl.push(DetalhePage, { nota: nota });
    }

    abreEditarNota(nota: NotaInterface, listaopcoes: ItemSliding) {
        this.editando = true;
        listaopcoes.close();
        this.abreForm = true;
        this.tituloPagina = "Editar Nota";
        this.nota = nota;
    }
    editarNota(nota: NotaInterface) {
        this.webservice.editNota(this.nota).then(data => this.atualizaNota(this.nota));
    }
    atualizaNota(nota: NotaInterface) {
        this.abreForm = false;
        for (let k in this.listaNotas) {
            if (this.listaNotas[k].Id == nota.Id)
                this.listaNotas[k] = nota;
        }
    }
    deletarNota(nota: NotaInterface, listaopcoes: ItemSliding) {
        listaopcoes.close();
        this.webservice.deleteNota(nota).then(data => this.removeNota(data));
    }
    removeNota(nota: NotaInterface) {
        for (let k in this.listaNotas) {
            if (this.listaNotas[k].Id == nota.Id)
                this.listaNotas.splice(parseInt(k), 1);
        }
    }
}