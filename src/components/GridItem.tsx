import { useState } from "react";
import { BioContent, StyledBioContainer, StyledGridItem } from "./StyledGridItem.styled";

interface GridItemProps {
  id: number;
  name: string;
  role: string;
  bio: string;
};

export const GridItem = ({
  id,
  name,
  role,
  bio,
}: GridItemProps) => {
  const [showBio, setShowBio] = useState(false);

  const toggleBio = () => {
    setShowBio(!showBio);
  };

  return (
    <StyledGridItem onClick={() => toggleBio()}>
      <h1>{name}</h1>
      <h2>{role}</h2>
      {showBio && (
        <StyledBioContainer showBio={showBio}>
          <BioContent>{bio}</BioContent>
        </StyledBioContainer>
      )}
    </StyledGridItem>
  );
};
