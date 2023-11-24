export class Vaga {
    id: number = 0;
    nome: string = '';
    foto: string = '';
    portifolio: string = '';

    constructor(
        id: number,
        nome: string,
        foto: string,
        portifolio: string,
    ) {
        this.id = id;
        this.nome = nome;
        this.foto = foto;
        this.portifolio = portifolio;
    }
}