import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order',
  description: 'Payment and order page for cart items',
};

function OrderNowPage() {
  return (
    <div className="text-center text-white text-8xl mt-60">OrderNowPage</div>
  );
}

export default OrderNowPage;
