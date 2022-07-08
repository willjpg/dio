import { DATABASE } from "../database.js"

const USERS_CONTROLLER = {

    criarUsuario : (request, response) => {
        const { name } = request.body
    
        if(name.length < 2){
            return response.status(403).json({mensagem: 'Não é possível criar usuários sem um nome'})
        }
    
        DATABASE.push(name)
        return response.status(201).json({'mensagem': `Usuário ${name} criado`})
    },

    listarUsuario (request, response) {
        return response.status(200).json(DATABASE);

    }
}

export { USERS_CONTROLLER }