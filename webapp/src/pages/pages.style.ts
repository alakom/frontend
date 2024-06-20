import React from "react";
import { isMobile } from "react-device-detect";

export const headerStyle: React.CSSProperties = {
  padding: 0,
  backgroundColor: "#FFF",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderRadius: "5px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  margin: "0 0 15px 0",
};

export const titleStyle: React.CSSProperties = {
  margin: "0 0 0 15px",
  flex: 1,
};

export const selectTitle: React.CSSProperties = {
  margin: "0 5px 10px 5px",
};

export const chooseFileTitleStyle: React.CSSProperties = {
  margin: "0 5px 1px 5px",
};

export const containerLinkStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "baseline",
  fontSize: "16px",
  fontWeight: "600",
};

export const linkStyle: React.CSSProperties = {
  margin: "0px",
  padding: "0px",
  flex: 1,
};

export const selectContainer: React.CSSProperties = {
  display: "flex",
  flexDirection: `${isMobile ? "column" : "row"}`,
  alignItems: "baseline",
  margin: "0 0 15px 0",
  gap: "2px",
};

export const contentSelectStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

export const container: React.CSSProperties = {
  margin: "5px 5px 15px 5px",
};

export const buttonChooseFileStyle: React.CSSProperties = {
  width: `${isMobile ? "100%" : "300px"}`,
};
export const selectStyle: React.CSSProperties = {
  width: `${isMobile ? "98%" : "300px"}`,
};

export const selectReportStyle: React.CSSProperties = {
  width: `${isMobile ? "100%" : "300px"}`,
};

export const buttonReportStyle: React.CSSProperties = {
  marginTop: "5px",
  width: `${isMobile ? "100%" : "300px"}`,
};

export const buttonDeleteStyle: React.CSSProperties = {
  margin: "5px",
  width: `${isMobile ? "100%" : "300px"}`,
};

export const tableContainer: React.CSSProperties = {
  width: "fit-content",
  margin: "0 5px 0 5px",
  minWidth: `${isMobile ? "98%" : "99%"}`,
};

export const chooseYearStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: `${isMobile ? "column" : "row"}`,
  alignItems: "baseline",
  margin: "0 0 15px 0",
};

export const datePickerStyle: React.CSSProperties = {
  width: `${isMobile ? "100%" : "300px"}`,
};
