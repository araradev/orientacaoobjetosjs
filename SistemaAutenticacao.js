export class SistemaAutenticacao{
    static login(user, senha){
        if(SistemaAutenticacao.ehAutenticavel(user)){
            return user.autenticar(senha);
        }
        return false
    }
    static ehAutenticavel(user){
       return "autenticar" in user && user.autenticar instanceof Function
    }
}
