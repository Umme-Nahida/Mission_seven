import UserProfileDashboard from "@/components/modules/dashboard/UserProfileDashboard";
import { authOptions } from "@/helpers/authOptions";
import { getServerSession } from "next-auth";

const DashboardHomePage =async () => {

 const session = await getServerSession(authOptions)
  //  console.log("session",session)
  
  return (
    <div>
      <h1>Dashboard Home Page</h1>
      <p>{session?.user?.name} </p>
      <p>{session?.user?.email}</p>

      <div className="flex items-center justify-center">
        <UserProfileDashboard/>
      </div>
    </div>
  );
};

export default DashboardHomePage;
