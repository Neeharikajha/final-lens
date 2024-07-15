import * as React from 'react';
import PropTypes from "prop-types";
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import DiamondIcon from '@mui/icons-material/Diamond';

const Categories = ({ className = "" }) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "8px", // Updated padding here
        boxSizing: "border-box",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "12px",
        color: "#595959",
        fontFamily: "Roboto",
      }}
      className={className}
    >
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 1px 0px 0px",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "0px 20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "4px",
            }}
          >
            <div
              style={{
                height: "8px",
                width: "8px",
                position: "relative",
                borderRadius: "50%",
                backgroundColor: "#ee5f73",
              }}
            />
            <div
              style={{
                height: "8px",
                width: "8px",
                position: "relative",
                borderRadius: "50%",
                backgroundColor: "rgba(217, 217, 217, 0.5)",
              }}
            />
            <div
              style={{
                height: "8px",
                width: "8px",
                position: "relative",
                borderRadius: "50%",
                backgroundColor: "rgba(217, 217, 217, 0.5)",
              }}
            />
            <div
              style={{
                height: "8px",
                width: "8px",
                position: "relative",
                borderRadius: "50%",
                backgroundColor: "rgba(217, 217, 217, 0.5)",
              }}
            />
            <div
              style={{
                height: "8px",
                width: "8px",
                position: "relative",
                borderRadius: "50%",
                backgroundColor: "rgba(217, 217, 217, 0.5)",
              }}
            />
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            borderRadius: "0px 0px 8px 8px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            padding: "16px 23px 12px",
            position: "relative",
            gap: "20px",
          }}
        >
          <div
            style={{
              height: "88px",
              width: "100%",
              position: "absolute",
              margin: "0",
              top: "calc(50% - 44px)",
              right: "0px",
              left: "0px",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                height: "48px",
                borderRadius: "8px",
                backgroundColor: "#dbe5ff",
                overflow: "hidden",
                flexShrink: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 8px",
                boxSizing: "border-box",
                zIndex: "1",
              }}
            >
              <ManIcon style={{ fontSize: 32 }} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 12px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "20px",
                  display: "inline-block",
                  minWidth: "24px",
                  zIndex: "1",
                }}
              >
                Men
              </div>
            </div>
          </div>
          <div
            style={{
              width: "48px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                height: "48px",
                borderRadius: "8px",
                backgroundColor: "#ffdafb",
                overflow: "hidden",
                flexShrink: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 8px",
                boxSizing: "border-box",
                zIndex: "1",
              }}
            >
              <WomanIcon style={{ fontSize: 32 }} />
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 3px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "20px",
                  display: "inline-block",
                  minWidth: "41px",
                  zIndex: "1",
                }}
              >
                Women
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                height: "48px",
                borderRadius: "8px",
                backgroundColor: "#dfffd7",
                overflow: "hidden",
                flexShrink: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 8px",
                boxSizing: "border-box",
                zIndex: "1",
              }}
            >
              <ChildCareIcon style={{ fontSize: 32 }} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 12px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "20px",
                  display: "inline-block",
                  minWidth: "24px",
                  zIndex: "1",
                }}
              >
                Kids
              </div>
            </div>
          </div>
          <div
            style={{
              width: "51px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 1px",
              }}
            >
              <div
                style={{
                  height: "48px",
                  width: "48px",
                  borderRadius: "8px",
                  backgroundColor: "#ffeed8",
                  overflow: "hidden",
                  flexShrink: "0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 8px",
                  boxSizing: "border-box",
                  zIndex: "1",
                }}
              >
                <DiamondIcon style={{ width: "32px", height: "32px" }} />
              </div>
            </div>
            <div
              style={{
                position: "relative",
                lineHeight: "20px",
                display: "inline-block",
                minWidth: "51px",
                zIndex: "1",
              }}
            >
              Jewellery
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Categories.propTypes = {
  className: PropTypes.string,
};

export default Categories;
