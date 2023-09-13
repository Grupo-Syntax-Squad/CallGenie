const Sequelize = require('sequelize');
const database = require('./bd');
const sequelize = require('./bd');

const Cliente = database.define('Cliente', {
    cli_nome: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    cli_cpf: {
        type: Sequelize.BIGINT(11),
        allowNull: false,
        primaryKey: true,
        unique:true
    }, 
    cli_email: {
        type: Sequelize.STRING(40),
        allowNull: false
    },
    cli_tel: {
        type: Sequelize.BIGINT(11),
    },
    cli_endereco: {
        type: Sequelize.STRING(50),
    },
    cli_senha: {
        type: Sequelize.STRING(8),
    }
    });


const Chamado = database.define('Chamado', {
    cham_id: {
        type: Sequelize.INTEGER(6),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    cham_titulo: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    cham_descricao: {
        type: Sequelize.STRING(100)
    },
    cham_status: {
        type: Sequelize.ENUM('Aberto','Em andamento','Concluído'),
        defaultValue: 'Aberto'
    },
    cham_data_inicio: {
        type: Sequelize.DATEONLY,
        defaultValue: new Date()
    },
    cham_prazo: {
        type: Sequelize.VIRTUAL, // Campo virtual que não é armazenado no banco de dados
        defaultValue: new Date(new Date().setDate(new Date().getDate() + 30))
    }
});


const Adm = database.define("Adm", {
    adm_nome: {
        type: Sequelize.STRING(30),
        allowNull: false
    },

    adm_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    adm_tel: {
        type: Sequelize.CHAR(11)
    },

    adm_email: {
        type: Sequelize.STRING(40),
        allowNull: false
    },

    adm_senha: {
        type: Sequelize.STRING(8)
    }
});

const Suporte = database.define("Suporte", {
    sup_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    adm_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "Adm",
            key: "adm_id"
        }
    },

    sup_nome: {
        type: Sequelize.STRING(40),
        allowNull: false
    },

    sup_email: {
        type: Sequelize.STRING(40),
        allowNull: false
    },

    sup_tel: {
        type: Sequelize.BIGINT(11)
    },

    sup_senha: {
        type: Sequelize.STRING(8),
        allowNull: false
    }
});

module.exports = {Cliente, Chamado, Adm, Suporte};