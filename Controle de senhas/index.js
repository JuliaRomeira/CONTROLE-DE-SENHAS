class usuario{
    constructor(nome,senha){
        this.nome= nome
        this.senha = senha
    }

    verificarSenha(senhaTentativa){
        return this.senha === senhaTentativa
    }
}

const senha = new usuario("Julia", 8759)

let tentativasRestantes = 3

while(tentativasRestantes > 0){
    const senhaTentativa = prompt("Digite sua senha: ")

    if (usuario.verificarSenha(senhaTentativa)){
        console.log("Acesso permitido!")
        break;

    } else {
        tentativasRestantes--
        console.log(`Senha incorreta. Você tem ${tentativasRestantes} tentativa(s) restante(s). `)
    }
    
    if (tentativasRestantes === 0){
        console.log("Acesso Bloqueado. Tente novamente mais tarde. ")
    }
}