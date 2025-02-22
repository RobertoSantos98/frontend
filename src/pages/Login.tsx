
const Login = () => {
    return(
        <div className= "flex bg-branco">
            <div className="bg-amarelo w-1/2 h-screen flex flex-col items-center justify-center rounded-r-full">
                <h1 className="font-bold text-4xl text-preto ">The News</h1>
                <p className="text-xl text-preto">O seu Jornal Digital de Notícia</p>
            </div>
            <div className="bg-branco flex flex-col justify-center items-center w-1/2">
                <h2 className="text-2xl font-bold text-center ">Login</h2>
                <input 
                    type="text"
                    placeholder="Digite seu e-mail"
                    className="w-80 p-2 mt-4 border rounded-md" />
                <button className="w-80 p-2 mt-4 text-branco bg-cinza rounded-md hover:bg-gray-800 ">
                    Entrar
                </button>

            </div>
        </div>
    )
}

export default Login;