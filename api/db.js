import { Sequelize, DataTypes } from "sequelize";
import mysql from "mysql";

const PASSWORD = "fatec";

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: PASSWORD
});

export const database = new Sequelize('callgenie', 'root', PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

export const Cliente = database.define('Cliente', {
    cli_nome: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    cli_cpf: {
        type: DataTypes.STRING(11),
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    cli_email: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    cli_telefone: {
        type: DataTypes.STRING(11),
    },
    cli_endereco: {
        type: DataTypes.STRING(50),
    },
    cli_cep: {
        type: DataTypes.STRING(8),
    },
    cli_senha: {
        type: DataTypes.STRING(8),
    }
});

export const Chamado = database.define('Chamado', {
    cham_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    cham_titulo: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    cham_descricao: {
        type: DataTypes.STRING(100)
    },
    cham_status: {
        type: DataTypes.ENUM('Aberto', 'Andamento', 'Concluído', 'Atrasado'),
        defaultValue: 'Aberto'
    },
    cham_data_inicio: {
        type: DataTypes.DATEONLY,
        defaultValue: new Date()
    },
    cham_urgencia: {
        type: DataTypes.ENUM("Baixa", "Média", "Alta", "Urgente"),
        defaultValue: "Média",
        allowNull: false
    },
    cham_prazo: {
        type: DataTypes.VIRTUAL, // Campo virtual que não é armazenado no banco de dados
        defaultValue: new Date(new Date().setDate(new Date().getDate() + 1))
    }
});

Chamado.belongsTo(Cliente, {
    foreignKey: "cham_cli_cpf"
});

export const Adm = database.define("Administrador", {
    adm_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    adm_nome: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    adm_telefone: {
        type: DataTypes.CHAR(11)
    },
    adm_email: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    adm_senha: {
        type: DataTypes.STRING(8)
    }
});

export const Suporte = database.define("Suporte", {
    sup_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    sup_cpf: {
        type: DataTypes.STRING(11),
        unique: true,
        allowNull: false
    },
    sup_nome: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    sup_email: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    sup_telefone: {
        type: DataTypes.STRING(11),
    },
    sup_senha: {
        type: DataTypes.STRING(8),
        allowNull: false
    }
});

Suporte.belongsTo(Adm, {
    foreignKey: "sup_adm_id",
    allowNull: false
});


export const RespostaChamado = database.define("RespostaChamado", {
    resp_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    resp_soluc_comum: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    resp_data: {
        type: DataTypes.DATEONLY,
        defaultValue: new Date()
    }
});

RespostaChamado.belongsTo(Suporte, {
    foreignKey: "resp_sup_id"
});

RespostaChamado.belongsTo(Chamado, {
    foreignKey: "resp_cham_id"
});

export const Equipamento = database.define("Equipamento", {
    equ_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    equ_nome: {
        type: DataTypes.STRING,
        allowNull: true
    },
    equ_numserie: {
        type: DataTypes.STRING,
        allowNull: true
    },
    equ_tipo: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

Equipamento.belongsTo(Chamado, {
    foreignKey: "equ_cham_id"
});

Equipamento.belongsTo(RespostaChamado, {
    foreignKey: "equ_sup_id"
});


export const Faq = database.define("Faq", {
    faq_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    faq_pergunta: {
        type: DataTypes.STRING(512),
        allowNull: false
    },
    faq_resposta: {
        type: DataTypes.STRING(512),
        allowNull: false
    }
});