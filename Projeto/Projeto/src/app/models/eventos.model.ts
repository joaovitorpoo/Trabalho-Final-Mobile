export interface Eventos {
    id: number;
    cadastradoPor: string;
    nome: string;
    responsavel: string;
    valor: string;
    tipo: string;
    descricao: string;
    data: string;
    horario: string;
    contato: string;
    endereco: {
        cidade: string;
        bairro: string;
        rua: string;
        numero: number;
        complemento: string;
    };
}
