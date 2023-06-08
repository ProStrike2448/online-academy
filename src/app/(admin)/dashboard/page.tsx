import { authOptions } from "@/server/auth";
import { getServerSession } from "next-auth";


export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  
  if (session?.user.role !== 'ADMIN') {
    return <div>You are not an admin!</div>
  }
  return <div>Admin Dashboard</div>;
}
