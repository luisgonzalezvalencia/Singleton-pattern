import { EmailComponent } from './EmailComponent';
import { EmailLeaf } from './EmailLeaf';

export class CarpetaComposite extends EmailComponent {

    private emails: EmailComponent[] = [];
    public nombre: string;
    public identificador: number;

    public CantidadEmails(): number {
        //para obtener la cantidad de emails que tiene la carpeta
        ///utilizamos recursividad que dependera del tipo de elemento que sea
        let cantidad = 0;
        for (let element of this.emails) {
            if (element instanceof CarpetaComposite) {
                cantidad += element.CantidadEmails();
            } else {
                cantidad += 1;
            }
        }
        return cantidad;
    }

    public Add(oElemento: EmailComponent): void {
        this.emails.push(oElemento);
    }

    public Delete(email: EmailComponent): void {
        let index = this.emails.indexOf(email);
        if (index > -1) {
            this.emails.splice(index, 1);
        }
    }


    public Search(param: string): Array<EmailComponent> {
        let resultados: Array<EmailComponent> = [];
        this.emails.forEach(element => {
            if (element.Asunto.includes(param)) {
                resultados.push(element);
            }
        });
        return resultados;
    }

    OpenEmail(email: EmailLeaf) {
        email.SetEmailAbierto();
        return email;
    }

    constructor(nombre: string, identificador: number, asunto = "", contenido = "") {
        super(asunto, contenido);
        this.nombre = nombre;
        this.identificador = identificador;
    }



}

