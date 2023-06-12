import { ConfirmationModal, UserDataList, UserPostLists } from "../components";
import { useAuthStore } from "../../hooks";

export const UserData = () => {

  const {user} = useAuthStore();

  return (
    <>
      <div className="container pt-4">

        <div className="col-12">
          <UserDataList 
          {...user}
          />
        </div>

        <div className="col-12 pt-4">
          <h2 className="fw-semibold">Denuncias</h2>
          <UserPostLists />
        </div>
      </div>

      <ConfirmationModal />
    </>
  )
}
