import React, { forwardRef, useState } from "react";
import { FAQStyle } from "./FAQ.style";
import Collapsible from "react-collapsible";
import { Icon } from "../../UIKit";
import Fade from "react-reveal/Fade";
import data from "./FAQ-data";
import { theme } from "../../../styles/global/theme";

const FAQ = forwardRef((props, ref) => {
  const [openPosition, setOpenPosition] = useState(null);

  const handleTriggerClick = (position) => {
    if (openPosition === position) {
      setOpenPosition(null);
    } else {
      setOpenPosition(position);
    }
  };
  return (
    <FAQStyle ref={ref}>
      <div className="container">
        <div className="content">
          <h3 className="text-gradient">FAQs</h3>

          {data.map((q, i) => {
            return (
              <Collapsible
                key={"Collapsible" + i}
                handleTriggerClick={handleTriggerClick}
                transitionTime={400}
                accordionPosition={i}
                open={openPosition === i}
                trigger={
                  <Fade triggerOnce cascade bottom fraction={0.8} duration={600}>
                    <div className="trigger-inner">
                      <h5>{q.question}</h5>

                      <Icon
                        name={openPosition === i ? "arrow-up" : "arrow-down"}
                        size={32}
                        color={theme.colors.white}
                      />
                    </div>
                  </Fade>
                }
              >
                <div>{q.answer}</div>
              </Collapsible>
            );
          })}
        </div>
      </div>
    </FAQStyle>
  );
});

export default FAQ;
