import { useSelector } from "react-redux";
export default function CustomerDashboard() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="text-black">
      <h1>dashboard hjdghuehwuih jhuiwhiuwhw hwihowhwio</h1>
    </div>
  );
}
