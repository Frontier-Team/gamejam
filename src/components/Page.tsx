import React from "react";
import { PageContainer } from "./Page.styled";

interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <PageContainer>
      <main>{children}</main>
    </PageContainer>
  );
};

export default Page;
