import PropTypes from "prop-types";
import bannerimg from '../Images/bannerimg.png'; // Import your image file

const GroupComponent = ({ className = "" }) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "52px 16px 16px",
        boxSizing: "border-box",
        position: "relative",
        gap: "16px",
        backgroundImage: `url(${bannerimg})`, // Background image
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "14px",
        color: "#fff",
        fontFamily: "Inter",
        filter: "saturate(53%)", // Adjust saturation
      }}
      className={className}
    >
      {/* Existing content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 20px 0px 0px",
          gap: "4px",
        }}
      >
        <div
          style={{
            position: "relative",
            lineHeight: "20px",
            textTransform: "uppercase",
            fontWeight: "600",
            display: "inline-block",
            minWidth: "103px",
            zIndex: "2",
          }}
        >{`#Fashion Day `}</div>
        <div
          style={{
            position: "relative",
            fontSize: "22px",
            lineHeight: "20px",
            textTransform: "uppercase",
            fontWeight: "800",
            color: "#00df67",
            display: "inline-block",
            minWidth: "98px",
            zIndex: "2",
          }}
        >
          80% Off
        </div>
        <div
          style={{
            position: "relative",
            fontSize: "12px",
            lineHeight: "20px",
            fontWeight: "500",
            color: "#e2e2e2",
            zIndex: "2",
          }}
        >
          Discover fashion that suits your style
        </div>
      </div>

      <div
        style={{
          boxShadow:
            "0px 1.8px 0px rgba(255, 255, 255, 0.16) inset, 0px 0.3px 0px rgba(3, 7, 18, 0.16), 0px 0.5px 0px rgba(3, 7, 18, 0.16)",
          borderRadius: "6px",
          border: "1px solid #fff",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "4px 8px",
          gap: "4px",
          zIndex: "2",
          fontSize: "13px",
        }}
      >
        <img
          style={{
            height: "20px",
            width: "20px",
            position: "relative",
            overflow: "hidden",
            flexShrink: "0",
            display: "none",
            minHeight: "20px",
          }}
          alt=""
          src="/plusmini.svg"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0px 2px",
          }}
        >
          <div
            style={{
              position: "relative",
              lineHeight: "20px",
              fontWeight: "500",
              display: "inline-block",
              minWidth: "90px",
            }}
          >
            Check this out
          </div>
        </div>
        <img
          style={{
            height: "20px",
            width: "20px",
            position: "relative",
            overflow: "hidden",
            flexShrink: "0",
            display: "none",
            minHeight: "20px",
          }}
          alt=""
          src="/plusmini.svg"
        />
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
