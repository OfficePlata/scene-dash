import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts';
import {
  TrendingUp, Settings, DollarSign,
  ShieldCheck, Zap, Activity, PieChart as PieIcon
} from 'lucide-react';

const App = () => {
  const revenueData = [
    { name: 'キャスティング', value: 6000000 },
    { name: 'ロケコーデ', value: 2400000 },
    { name: 'イベント制作', value: 6000000 },
    { name: 'Web/SNS運用', value: 3600000 },
  ];

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

  const dxEfficiencyData = [
    { name: '1月', manual: 160, automated: 40 },
    { name: '2月', manual: 160, automated: 35 },
    { name: '3月', manual: 160, automated: 30 },
    { name: '4月', manual: 180, automated: 32 },
    { name: '5月', manual: 240, automated: 45 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-800">
      {/* Header */}
      <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">SCENEWORKS 経営管理ダッシュボード</h1>
          <p className="text-slate-500 mt-1 flex items-center gap-2">
            <ShieldCheck size={18} className="text-blue-600" />
            次世代型DXエンターテインメント経営モデル
          </p>
        </div>
        <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-slate-200">
          <div className="text-right">
            <p className="text-xs text-slate-400 font-medium">融資希望額</p>
            <p className="text-xl font-bold text-blue-600">¥5,000,000</p>
          </div>
          <div className="h-10 w-px bg-slate-200 mx-2"></div>
          <div className="text-right">
            <p className="text-xs text-slate-400 font-medium">返済負担率 (初年度)</p>
            <p className="text-xl font-bold text-emerald-600">17.5%</p>
          </div>
        </div>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: '年間目標売上', value: '¥18,000,000', icon: <TrendingUp className="text-blue-600" />, trend: '+12.5%' },
          { label: '想定営業利益', value: '¥6,600,000', icon: <DollarSign className="text-emerald-600" />, trend: '36.6% 利益率' },
          { label: 'DX削減時間', value: '128h / 月', icon: <Zap className="text-amber-500" />, trend: '事務コスト 75% 削減' },
          { label: '確定済み報酬', value: '¥600,000', icon: <Activity className="text-rose-500" />, trend: '5月イベント分' },
        ].map((kpi, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-slate-50 rounded-xl">{kpi.icon}</div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${i === 2 ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                {kpi.trend}
              </span>
            </div>
            <p className="text-sm font-medium text-slate-500">{kpi.label}</p>
            <p className="text-2xl font-bold mt-1 text-slate-900">{kpi.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Revenue Mix */}
        <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <PieIcon size={20} className="text-slate-400" />
            事業別売上構成（多角化によるリスク分散）
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={revenueData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {revenueData.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-xs text-blue-700 font-medium leading-relaxed">
              <strong>銀行への訴求:</strong> 継続契約型（Web/SNS・ロケ）が売上の40%を占め、月次の安定した返済原資を確保。
            </p>
          </div>
        </div>

        {/* DX Efficiency Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
            <Zap size={20} className="text-slate-400" />
            IT自動化による「少人数高収益」モデルの証明
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dxEfficiencyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} unit="h" />
                <Tooltip cursor={{ fill: '#f8fafc' }} />
                <Legend />
                <Bar name="手動作業 (ITなし想定)" dataKey="manual" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                <Bar name="IT自動化後の作業時間" dataKey="automated" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
            <p className="text-xs text-slate-600 leading-relaxed italic">
              ※Lark BaseおよびLステップによる「ロケ地管理・在庫管理・収支計算」の自動化効果。事務スタッフ0名でも大規模イベントの運営が可能。
            </p>
          </div>
        </div>
      </div>

      {/* Strategic Table */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
          <Settings size={20} className="text-slate-400" />
          500万円融資の「使途」と「将来の利益創出」の論理
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="pb-4 font-semibold text-slate-500 text-sm">投資項目</th>
                <th className="pb-4 font-semibold text-slate-500 text-sm">金額</th>
                <th className="pb-4 font-semibold text-slate-500 text-sm">戦略的意図</th>
                <th className="pb-4 font-semibold text-slate-500 text-sm text-right">期待される成果（リターン）</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 text-sm font-bold">営業活動費（招聘・商談）</td>
                <td className="py-4 text-sm">¥1,500,000</td>
                <td className="py-4 text-xs text-slate-600">大手事務所トップ層の宮崎招聘、独占契約交渉。</td>
                <td className="py-4 text-sm text-right font-bold text-emerald-600">¥27,000,000 (グッズ権利)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 text-sm font-bold">IT/システム構築費</td>
                <td className="py-4 text-sm">¥500,000</td>
                <td className="py-4 text-xs text-slate-600">Lark/Lステップによる事務局自動化インフラ構築。</td>
                <td className="py-4 text-sm text-right font-bold text-blue-600">人件費 200万円 / 年 削減</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 text-sm font-bold">運転予備資金</td>
                <td className="py-4 text-sm">¥1,000,000</td>
                <td className="py-4 text-xs text-slate-600">不測の事態（イベント延期等）への備え。</td>
                <td className="py-4 text-sm text-right font-bold text-slate-400">キャッシュフローの絶対安定</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <footer className="mt-8 text-center text-slate-400 text-xs">
        <p>© 2026 SCENEWORKS INC. Powered by Sasa-yell DX Solutions</p>
      </footer>
    </div>
  );
};

export default App;
