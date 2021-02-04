import React from "react";
import FooterPrivate from "../../../components/private/footerPrivate/footerPrivate"
import HeaderPrivate from "../../../components/private/headerPrivate/headerPrivate";
import MainPrivate from "../../../components/private/mainPrivate/mainPrivate";
import {usePageProtected} from "../../../hooks/usePageProtected"

const HomePrivatePage = () => {
  usePageProtected()
  return <div>
    <HeaderPrivate />
    <MainPrivate />
   <FooterPrivate />
  </div>;
};

export default HomePrivatePage;