import { useState, useEffect } from "react";

const AdminDashboard = () => {
  const [metrics, setMetrics] = useState({
    totalReads: 0,
    activeUsers: 0,
    engagementRate: 0,
  });
  const [logs, setLogs] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    
    fetch("/api/admin/metrics")
      .then((res) => res.json())
      .then((data) => setMetrics(data));

    
    fetch("/api/admin/logs")
      .then((res) => res.json())
      .then((data) => setLogs(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Painel Administrativo</h1>

      {/* Métricas Gerais */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-blue-500 text-white rounded-lg shadow">
          <h2 className="text-lg">Leituras Totais</h2>
          <p className="text-xl font-bold">{metrics.totalReads}</p>
        </div>
        <div className="p-4 bg-green-500 text-white rounded-lg shadow">
          <h2 className="text-lg">Usuários Ativos</h2>
          <p className="text-xl font-bold">{metrics.activeUsers}</p>
        </div>
        <div className="p-4 bg-yellow-500 text-white rounded-lg shadow">
          <h2 className="text-lg">Taxa de Engajamento</h2>
          <p className="text-xl font-bold">{metrics.engagementRate}%</p>
        </div>
      </div>

      {/* Filtro */}
      <input
        type="text"
        placeholder="Filtrar por email ou UTM"
        className="p-2 border rounded w-full mb-4"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      {/* Logs */}
      <table className="w-full bg-white shadow rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Email</th>
            <th className="p-2">Post ID</th>
            <th className="p-2">UTM Source</th>
            <th className="p-2">Data</th>
          </tr>
        </thead>
        <tbody>
          {logs
            .filter((log) =>
              filter
                ? log.email.includes(filter) || log.utmSource.includes(filter)
                : true
            )
            .map((log, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{log.email}</td>
                <td className="p-2">{log.postId}</td>
                <td className="p-2">{log.utmSource}</td>
                <td className="p-2">{new Date(log.date).toLocaleString()}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
