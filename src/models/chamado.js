class Chamado {
    constructor(title, desc, comentario, nomeEquipamento = "", numeroSerie = "", tipoEquipamento = "") {
        this.title = title;
        this.desc = desc;
        this.comentario = comentario;
        this.status = "aberto";
        if (nomeEquipamento) {
            this.nomeEquipamento = nomeEquipamento;
        };
        if (numeroSerie) {
            this.numeroSerie = numeroSerie;
        };
        if (tipoEquipamento) {
            this.tipoEquipamento = tipoEquipamento;
        };
        this.dataCriacao = new Date();
    };
};

module.exports = Chamado;