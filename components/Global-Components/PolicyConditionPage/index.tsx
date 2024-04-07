import React from "react";
import PolicyConditionHeader from "./PolicyConditionHeader";
import TermsCondition from "./TermsCondition";
import PrivacyPolicy from "./PrivacyPolicy";

const PolicyConditionPage = () => {
  return (
    <div>
      <PolicyConditionHeader />
      <TermsCondition />
      <PrivacyPolicy />
    </div>
  );
};

export default PolicyConditionPage;
