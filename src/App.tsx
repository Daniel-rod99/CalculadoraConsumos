import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
import OrdersTotals from "./components/OrdersTotals";
import TipPercentageForm from "./components/TipPercentageForm";

function App() {
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder();
  return (
    <>
      <header className="py-5 bg-teal-400">
        <h1 className="text-4xl font-black text-center">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="grid py-20 mx-auto max-w-7xl md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="mt-10 space-y-3">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="p-5 space-y-10 border border-dashed rounded-lg border-slate-300">
          {order.length ? (
            <>
              <OrderContents order={order} removeItem={removeItem} />

              <TipPercentageForm setTip={setTip} tip={tip} />

              <OrdersTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center">La orden esta vacia</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
