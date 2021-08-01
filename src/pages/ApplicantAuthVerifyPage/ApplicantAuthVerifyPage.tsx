import { FC, useEffect, useState } from "react";
import StorageKeys from "common/StorageKeys";
import Auth from "_firebase/Auth";
import LoadingPage from "pages/LoadingPage/LoadingPage";
import "./ApplicantAuthVerifyPage.less";

// Packages
import { Modal } from "antd";

const ApplicantAuthVerifyPage: FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let email = localStorage.getItem(StorageKeys.applicantEmail);

    if (email) {
      Auth.applicantSignInWithEmailLink(email);
    } else {
      setLoading(false);
    }
  }, []);

  return loading ? (
    <LoadingPage />
  ) : (
    <Modal visible={true}>
      <p>Test</p>
    </Modal>
  );
};

export default ApplicantAuthVerifyPage;
