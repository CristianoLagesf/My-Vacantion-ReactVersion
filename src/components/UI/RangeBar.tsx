import * as React from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 0.1;
const MIN = 0;
const MAX = 1000;

const LabeledTwoThumbs: React.FC<{ rtl: boolean }> = ({ rtl }) => {
  const [values, setValues] = React.useState([0, 1000]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                marginLeft: "15px",
                height: "5px",
                width: "85%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#070335", "#ccc"],
                  min: MIN,
                  max: MAX,
                  rtl,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "22px",
              width: "22px",
              borderRadius: "4px",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-48px",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "14px",
                fontFamily: "Arial,Helvetica Neue,Helvetica,sans-serif",
                padding: "4px",
                borderRadius: "4px",
                backgroundColor: "#070335",
              }}
            >
              {values[index].toFixed(1)}
            </div>
            <div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: isDragged ? "#070335" : "#CCC",
              }}
            />
          </div>
        )}
      />
    </div>
  );
};

export default LabeledTwoThumbs;
