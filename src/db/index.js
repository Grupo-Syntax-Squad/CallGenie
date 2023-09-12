(async () => {

    const database = require('./bd');
    const modelo = require('./modelos');
    await database.sync();

    // const novoChamado = await modelo.Chamado.create({
    //     cham_titulo: 'Mouse com defeito',
    //     cham_descricao: 'o mouse apresenta defeitos ao clicar'
    // });
    // console.log(novoChamado);

    // c do crud
    // const novoCliente = await modelo.Cliente.create({
    //     cli_nome: 'G. Felipe',
    //     cli_cpf: 65613131234, 
    //     cli_email: 'gfelipe@dev.com',
    //     cli_tel: 11981776655,
    //     cli_endereco: 'Rua do senai', 
    //     cli_senha: 'tirulipa'
    // })
    // console.log(novoCliente)

    // r do crud
    const clientes = await modelo.Cliente.findAll({
        where: {
            cli_nome:'G. Felipe'
        }
    }); 
    console.log(clientes ? "Existe" : "Não existe");

    // u do crud
    // const cliente = await Cliente.findByPk(66613131234);
    // cliente.cli_endereco = 'Rua da Química';
    // await cliente.save();


    // d do crud
    // await cliente.destroy();

    // await Cliente.destroy({
    //     where: #
    // });

})();