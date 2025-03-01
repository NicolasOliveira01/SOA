// importando as bibliotecas

const express = require('express')
// express vai automatizar a criação dos servidores

const axios = require('axios')
// traz as funcionalidades HTTP como o GET

const app = express()

const PORT = 3000

// Endpoint para buscar o endereço pele CEP 

app.get(`/cep/:cep`, async (req, res) => {
// consfigurando o padrão do endpoint
    const { cep } = req.params


    try {

        // fazendo a requisição para a API ViaCEP

        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        // await -> mostra para o código que precisa ir na API e ter um retorno para continuar a execução

        const endereco = response.data

        // se o CEP não for encontrado
        if (endereco.erro) {

            return res.status(404).json({ mensagem: `CEP não encontrado`})
        }

        // retorna o endereço formatado
        res.json({

            cep: endereco.cep,

            logradouro: endereco.logradouro,

            bairro: endereco.bairro,

            cidade: endereco.localidade,

            estado: endereco.uf

        })
    }

    catch (error) { 

        res.status(500).json({ mensagem: 'Erro ao consultar o CEP' })
        // erro do servidor
    }
})


// iniciando o servidor 

app.listen(PORT, () => {

    console.log(`Servidor rodando em http://localhost:${PORT}`); //Completar com /cep/NUMERO DO CEP

});