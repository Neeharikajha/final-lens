import React from "react";
import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Logo from "../Images/Logo.png";

const Main = ({ className = "" }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "10px 20px",
        boxSizing: "border-box",
        lineHeight: "normal",
        letterSpacing: "normal",
        gap: "20px",
        textAlign: "left",
        fontSize: "12px",
        color: "#cb6ce6",
        fontFamily: "Inter",
        borderBottom: "1px solid #EBEBEB", // Bottom line with color #EBEBEB
      }}
      className={className}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "4px",
        }}
      >
        <img
          style={{
            height: "38px",
            width: "38px",
            position: "relative",
            objectFit: "cover",
          }}
          loading="lazy"
          alt=""
          src={Logo}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "11.5px 0px 0px",
          }}
        >
          <a
            style={{
              textDecoration: "none",
              position: "relative",
              lineHeight: "15.2px",
              fontWeight: "700",
              display: "inline-block",
              minWidth: "42px",
              color: "inherit",
            }}
          >
            <span>M</span>
            <span style={{ color: "#ff914d" }}>Lens</span>
          </a>
        </div>
      </div>

      {/* Shopping cart icon */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "7px 0px 0px",
        }}
      >
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
      </div>
    </div>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
