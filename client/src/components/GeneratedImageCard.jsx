import { CircularProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  min-height: 300px;
  gap: 16px;
  padding: 16px;
  border: 2px dashed ${({ theme }) => theme.yellow + 90};
  color: ${({ theme }) => theme.arrow + 80};
  border-radius: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.black + 50};
  border-radius: 18px;
  object-fit: cover;
`;

const GeneratedImageCard = ({ src, loading }) => {
  return (
    <Container>
      {loading ? (
        <>
          {" "}
          <CircularProgress
            sx={{ color: "inherit", width: "24px", height: "24px" }}
          />
          Generating your Image ...
        </>
      ) : (
        <>{src ? <Image src={src} /> : <> Write a prompt to Generate the image</>}</>
      )}
    </Container>
  );
};

export default GeneratedImageCard;
