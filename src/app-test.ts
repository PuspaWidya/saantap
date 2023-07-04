import styled from "styled-components";

export const ContainerHome = styled.div({
  display: "flex",
  backgroundColor: "#0d1321",
  justifyContent: "center",
  alignItems: "flex-start",
  height: "90vh",
  overflowY: "auto",
  gap: "10%",
  paddingTop: "10vh",
});

export const Title = styled.h1({
  color: "white",
  height: "18px",
  letterSpacing: "2px",
});

export const SubTitle = styled.p({
  color: "white",
  height: "14px",
  letterSpacing: "2px",
});

export const TitleContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  width: "30%",
  height: "80%",
  justifyContent: "center",
});
