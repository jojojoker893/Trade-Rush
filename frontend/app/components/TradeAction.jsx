import { useState, useEffect } from 'react';
import ApiAction from '@/lib/api/application';
import Modal from '../components/Modal';

const TradeAction = () => {
  const [isTrade, setIsTrade] = useState(false);
  const [lot, setLot] = useState(1);
  const [leverage, setLeverage] = useState(1);
  const [capital, setCapital] = useState(2000000);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHelp, setIsHelp] = useState(false);
  const [askPrice, setAskPrice] = useState(0);
  const [bidPrice, setBidPrice] = useState(0);
  const margin = 0;

  useEffect(() => {
    const fetchExchange = () => {
      ApiAction.fetchExchange()
      .then((res) => {
        setAskPrice(res.ask);
        setBidPrice(res.bid);
      })
    };

    fetchExchange();
    const interval = setInterval(fetchExchange, 1000);
    return () => clearInterval(interval);
  }, []);



  return (
    <div className="flex justify-center items-center w-full gap-20">
      <img src='/left_men.png' alt="左側の男" className="h-[300px] object-contain" />

      <div className="flex flex-col items-center space-y-2">
        <div className="w-full h-10 flex items-center justify-center mt-2 mb-6">
          {isTrade && (
            <div className="w-full bg-red-500 text-white text-lg text-center font-semibold px-4 py-1 rounded">
              取引中
            </div>
          )}
        </div>

        <div className="flex justify-center items-start space-x-20 w-full px-4">
          <div className="flex flex-col space-y-8">
            {/* 売値 */}
            <div className="relative w-[240px] h-[240px] rounded-full bg-gradient-to-br from-green-400 to-green-700 p-[3px] shadow-lg">
              <div className="flex flex-col items-center justify-center bg-white rounded-full w-full h-full">
                <span className="text-3xl">{askPrice}</span>
                <span className="text-7xl border-b border-black w-[130px] text-center mt-2 pb-2">90</span>
                <p className="text-green-500 font-semibold text-center mt-4">Bid / 売値</p>
              </div>
            </div>

            {/* 買値 */}
            <div className="relative w-[240px] h-[240px] rounded-full bg-gradient-to-br from-red-400 to-red-700 p-[3px] shadow-lg">
              <div className="flex flex-col items-center justify-center bg-white rounded-full w-full h-full">
                <span className="text-3xl">{bidPrice}</span>
                <span className="text-7xl border-b border-black w-[130px] text-center mt-2 pb-2">00</span>
                <p className="text-red-500 font-semibold text-center mt-4">Ask / 買値</p>
              </div>
            </div>
          </div>

          <div className="border border-black rounded-2xl py-2 px-10 flex flex-col gap-12 w-full max-w-md shadow-2xl">
            <div className="text-2xl py-2 text-left flex justify-between w-full">
              <span className="min-w-[140px]">保有資産：</span>
              <span>¥{capital.toLocaleString()}</span>
            </div>

            <div className="text-2xl py-3 text-left flex justify-between w-full">
              <span className="min-w-[140px]">必要証拠金：</span>
              <span>¥{Math.floor(margin).toLocaleString()}</span>
            </div>

            {/* ロット */}
            <div className="w-full">
              <label className="text-xl flex items-center gap-4">
                <span>取引ロット：</span>
                <img src='/subtract_circle.svg' alt="マイナス" onClick={() => setLot(prev => Math.max(1, prev - 1))} className="h-8 w-8 cursor-pointer bg-gray-300 rounded p-1" />
                <input type="number" className="w-14 text-right" value={lot} onChange={(e) => setLot(Number(e.target.value))} />
                <img src='/add.svg' alt="プラス" onClick={() => setLot(prev => prev + 1)} className="h-8 w-8 cursor-pointer bg-gray-300 rounded p-1" />
              </label>
            </div>

            {/* レバレッジ */}
            <div className="w-full">
              <label className="text-xl flex items-center gap-4">
                <span>レバレッジ：</span>
                <img src='/subtract_circle.svg' alt="マイナス" onClick={() => setLeverage(prev => Math.max(1, prev - 1))} className="h-8 w-8 cursor-pointer bg-gray-300 rounded p-1" />
                <input type="number" className="w-14 text-right" value={leverage} onChange={(e) => setLeverage(Number(e.target.value))} />
                <img src='/add.svg' alt="プラス" onClick={() => setLeverage(prev => Math.min(25, prev + 1))} className="h-8 w-8 cursor-pointer bg-gray-300 rounded p-1" />
              </label>
              <img src='/help.svg' alt="ヘルプ" className="ml-10 cursor-pointer" onClick={() => setIsHelp(true)} />
            </div>

            <p className="text-center text-2xl text-black font-bold">
              損益額: <span className="text-black">0 円</span>
            </p>

            <div className="text-center">
              {isTrade ? (
                <button className="bg-black hover:bg-gray-600 text-white px-6 py-2 rounded-md">
                  売却
                </button>
              ) : (
                <button className="bg-black hover:bg-gray-600 text-white px-6 py-2 rounded-md">
                  注文
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <img src='/right_women.png' alt="右側の女" className="h-[310px] object-contain" />

      {/* モーダル（省略） */}
      {isModalOpen && (
        <Modal onBack={() => setIsModalOpen(false)}>
          {/* ... */}
        </Modal>
      )}

      {isHelp && (
        <Modal onBack={() => setIsHelp(false)}>
          {/* ... */}
        </Modal>
      )}
    </div>
  );
};

export default TradeAction;
