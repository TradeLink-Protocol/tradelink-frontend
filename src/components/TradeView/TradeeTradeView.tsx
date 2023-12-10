import React from "react";
import StepperWarpper from "../Stepper/stepperWrapper";
import TradeyStepOne from "../Stepper/offerStepper/tradyStepOne";
import TradeyStepTwo from "../Stepper/offerStepper/tradyStepTwo";
import TradyStepThree from "../Stepper/offerStepper/tradyStepThree";
import TradeyStepThreePt2 from "../Stepper/offerStepper/tradyStepThreePt2";

interface IProps {
  step: number;
}

export default function TradeeTradeView({ step }: IProps) {
  const renderStepper = () => {
    switch (step) {
      case 2:
        return <TradeyStepTwo />;
      case 3:
        return <TradeyStepThreePt2 />;
      case 4:
        return <TradyStepThree />;
      default:
        return <TradeyStepOne />;
    }
  };

  return <StepperWarpper>{renderStepper()}</StepperWarpper>;
}
