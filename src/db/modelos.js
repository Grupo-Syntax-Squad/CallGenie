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
    cli_telefone: {
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
        type: Sequelize.INTEGER,
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
        defaultValue: new Date(new Date().setDate(new Date().getDate() + 7))
    }
});

// Chamado.belongsTo(Cliente, {
//     foreignKey: "cham_cli_cpf"
// });

const Adm = database.define("Administrador", {
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

    adm_telefone: {
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

    // sup_adm_id: {
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: "Administrador",
    //         key: "adm_id"
    //     }
    // },

    sup_nome: {
        type: Sequelize.STRING(40),
        allowNull: false
    },

    sup_email: {
        type: Sequelize.STRING(40),
        allowNull: false
    },

    sup_telefone: {
        type: Sequelize.BIGINT(11)
    },

    sup_senha: {
        type: Sequelize.STRING(8),
        allowNull: false
    }
});

Suporte.belongsTo(Adm, {
    foreignKey: "sup_adm_id"
});

const RespostaChamado = database.define("RespostaChamado", {
    resp_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    // resp_sup_id: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: "Suporte",
    //         key: "sup_id"
    //     },
    //     allowNull: false
    // },

    // resp_cham_id: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: "Chamado",
    //         key: "cham_id"
    //     },
    //     allowNull: false
    // },

    resp_data:{
        type: Sequelize.DATEONLY,
        defaultValue: new Date()
    },

    resp_soluc_comum: {
        type: Sequelize.STRING(100)
    }
});

RespostaChamado.belongsTo(Suporte, {
    foreignKey: "resp_sup_id"
});

RespostaChamado.belongsTo(Chamado, {
    foreignKey: "resp_cham_id"
});

const Equipamento = database.define("Equipamento", {
    equ_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },

    equ_numserie: {
        type: Sequelize.STRING,
        allowNull: false
    },

    equ_descricao: {
        type: Sequelize.STRING
    }

    // equ_cham_id: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: "Chamado",
    //         key: "cham_id"
    //     },
    // },

    // equ_resp_id: {
    //     type: Sequelize.INTEGER,
    //     references:{
    //         model: "RespostaChamado",
    //         key: "resp_id"
    //     }
    // }
});

Equipamento.belongsTo(Chamado, {
    foreignKey: "equ_cham_id"
});

Equipamento.belongsTo(RespostaChamado, {
    foreignKey: "equ_sup_id"
});

database.sync();

module.exports = {Cliente, Chamado, Adm, Suporte, RespostaChamado, Equipamento};