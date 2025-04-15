import UserProfile from "./UserProfile";

export default function Dashboard({ user }) {
  return (
    <div className="mt-4 p-4 border rounded-lg shadow-lg bg-black">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <UserProfile user={user} />
    </div>
  );
}