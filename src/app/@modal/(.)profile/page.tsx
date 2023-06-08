import Modal from "@components/modals/modal";
import Profile from "@components/header/Profile";

export default function ProfileModal() {
  return (
    <Modal>
      <div className="absolute right-0 mt-4 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Profile />
      </div>
    </Modal>
  );
}
