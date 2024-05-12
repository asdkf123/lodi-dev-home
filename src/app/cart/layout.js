import Link from "next/link";

export default function Layout({ children }) {

  return (
    <div>
      <p>현대카드 무이자이벤트중</p>
      {children}
      <Link href="/cart/payment">결제하기</Link>
    </div>
  );
}