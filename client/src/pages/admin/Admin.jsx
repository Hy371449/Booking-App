import "./admin.css";
import UsersManagement from "../../components/usersManagement/UsersManagement";
import HotelsManagement from "../../components/hotelsManagement/HotelsManagement";
import RoomsManagement from "../../components/roomsManagement/RoomsManagement";

const Admin = () => {


  return (
    <div>
      <UsersManagement/>
      <HotelsManagement/>
      <RoomsManagement/>
    </div>
  );
};

export default Admin;
