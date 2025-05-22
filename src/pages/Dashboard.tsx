import { useState, useEffect } from "react";


const Dashboard = () => {
    const [user, setUser] = useState({ name: "Usuário" });
    const [stats, setStats] = useState({
        totalReads: 10,
        streaks: 3,
        lastPost: "Como melhorar seu código?",
    });

    useEffect(() => {
        const fetchStats = async () => {
            const data = await getAdminStats();
            setStats(data);
        };
        fetchStats();
    },[])
    
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/* Cabeçalho */}
            <header className="bg-white shadow p-4 rounded-lg mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Bem-vindo, {user.name}!</h1>
            </header>
            
            {/* Estatísticas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold text-gray-700">Total de Leituras</h2>
                    <p className="text-3xl font-bold text-blue-600">{stats.totalReads}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold text-gray-700">Streaks</h2>
                    <p className="text-3xl font-bold text-orange-500">{stats.streaks} 🔥</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold text-gray-700">Último Post Lido</h2>
                    <p className="text-md text-gray-600">{stats.lastPost}</p>
                </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Recomendações</h2>
                <ul className="list-disc list-inside text-gray-600">
                    <li>Filmes que estão dando o que falar</li>
                    <li>Aprenda um outro idioma</li>
                    <li>Como otimizar seu tempo nos estudos</li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
