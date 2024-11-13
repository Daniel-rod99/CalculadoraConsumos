import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};

export default function OrdersTotals({
  order,
  tip,
  placeOrder,
}: OrderTotalsProps) {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.price * item.quantity, 0),
    [order]
  );

  const tipAmount = useMemo(() => subTotalAmount * tip, [subTotalAmount, tip]);
  const totalAmount = useMemo(
    () => subTotalAmount + tipAmount,
    [subTotalAmount, tipAmount]
  );

  return (
    <>
      <div className="space-y-3">
        <h2 className="text-2xl font-black">Totales a Pagar</h2>
        <p>
          Subtotal a pagar: {""}
          <span className="font-black">{formatCurrency(subTotalAmount)}</span>
        </p>

        <p>
          Propinas: {""}
          <span className="font-black">{formatCurrency(tipAmount)}</span>
        </p>

        <p>
          Total a pagar: {""}
          <span className="font-black">{formatCurrency(totalAmount)}</span>
        </p>
      </div>

      <button
        className="w-full p-3 mt-10 font-bold text-white uppercase bg-black disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  );
}
