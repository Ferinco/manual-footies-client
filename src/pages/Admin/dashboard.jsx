import { useSelector } from "react-redux";
export default function AdminDashboard() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="text-black">
      <h1>Admin dashboard</h1>
    </div>
  );
}
