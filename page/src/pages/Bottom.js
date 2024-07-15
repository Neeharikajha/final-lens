import PropTypes from "prop-types";

const Root1 = ({ className = "" }) => {
  return (
    <div
      style={{
        width: "100%",
        borderRadius: "20px 20px 0px 0px",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "8px 10px 16px",
        boxSizing: "border-box",
        gap: "8px",
        lineHeight: "normal",
        letterSpacing: "normal",
      }}
      className={className}
    >
      <img
        style={{
          width: "20px",
          height: "20px",
          position: "relative",
          overflow: "hidden",
          flexShrink: "0",
        }}
        loading="lazy"
        alt=""
        src="/chevrondoubleup.svg"
      />
      <section
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "12px",
          maxWidth: "100%",
          textAlign: "left",
          fontSize: "16px",
          color: "#000",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            height: "12px",
            position: "relative",
            lineHeight: "26px",
            fontWeight: "500",
            display: "inline-block",
          }}
        >
          Related products
        </div>
        <div
          style={{
            width: "355px",
            overflowX: "auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "0px 0px 0px 0px",
            boxSizing: "border-box",
            gap: "12px",
            maxWidth: "100%",
          }}
        >
          <img
            style={{
              alignSelf: "stretch",
              width: "131px",
              position: "relative",
              borderRadius: "8px",
              maxHeight: "100%",
              flexShrink: "0",
              objectFit: "cover",
              minHeight: "112px",
            }}
            loading="lazy"
            alt=""
            src="/rectangle-5328@2x.png"
          />
          <img
            style={{
              alignSelf: "stretch",
              width: "131px",
              position: "relative",
              borderRadius: "8px",
              maxHeight: "100%",
              flexShrink: "0",
              objectFit: "cover",
              minHeight: "112px",
            }}
            loading="lazy"
            alt=""
            src="/rectangle-5329@2x.png"
          />
          <img
            style={{
              alignSelf: "stretch",
              width: "131px",
              position: "relative",
              borderRadius: "8px",
              maxHeight: "100%",
              flexShrink: "0",
              objectFit: "cover",
              minHeight: "112px",
            }}
            loading="lazy"
            alt=""
            src="/rectangle-5330@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

Root1.propTypes = {
  className: PropTypes.string,
};
export default Root1;