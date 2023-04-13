import React from "react";
import AppLayout from "../components/Layout/AppLayout";
import Profile from "../components/Profile/Profile";

const ProfilePage = () => {
  return (
    <AppLayout>
      <main className="mb-40">
        <Profile />
      </main>
    </AppLayout>
  );
};

export default ProfilePage;
