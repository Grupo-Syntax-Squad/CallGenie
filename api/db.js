import { Sequelize, DataTypes } from "sequelize";
import mysql from "mysql";

const PASSWORD = "fatec";

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: PASSWORD
});

con.connect((err) => {
    if (err) throw err;
    con.query("CREATE DATABASE IF NOT EXISTS callgenie", (err, result) => {
        if (err) throw err;
    })
});

const database = new Sequelize('callgenie', 'root', PASSWORD, {
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
        type: DataTypes.ENUM('Aberto', 'Em andamento', 'Concluído'),
        defaultValue: 'Aberto'
    },
    cham_data_inicio: {
        type: DataTypes.DATEONLY,
        defaultValue: new Date()
    },
    cham_prazo: {
        type: DataTypes.VIRTUAL, // Campo virtual que não é armazenado no banco de dados
        defaultValue: new Date(new Date().setDate(new Date().getDate() + 7))
    }
});

// Chamado.belongsTo(Cliente, {
//     foreignKey: "cham_cli_cpf"
// });

export const Adm = database.define("Administrador", {
    adm_nome: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    adm_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
    foreignKey: "sup_adm_id"
});

export const RespostaChamado = database.define("RespostaChamado", {
    resp_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    resp_data: {
        type: DataTypes.DATEONLY,
        defaultValue: new Date()
    },
    resp_soluc_comum: {
        type: DataTypes.STRING(100)
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
        primaryKey: true
    },
    equ_numserie: {
        type: DataTypes.STRING,
        allowNull: false
    },
    equ_descricao: {
        type: DataTypes.STRING
    }
});

Equipamento.belongsTo(Chamado, {
    foreignKey: "equ_cham_id"
});

Equipamento.belongsTo(RespostaChamado, {
    foreignKey: "equ_sup_id"
});

database.sync();
