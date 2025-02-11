import styled from "styled-components";
import React, { useState } from "react";
import RegionSelection from "./components/RegionSelection";
import DurationSelection from "./components/DurationSelection";
import ThemeSelection from "./components/ThemeSelection";
import { TravelPlannerProvider } from "./context/TravelPlannerContext";

export default function AiTripPlan() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const previousStep = () => setStep((prev) => prev - 1);

  return (
        <TravelPlannerProvider>
        <div>
            {step === 1 && <RegionSelection onNext={nextStep} />}
            {step === 2 && (
                <DurationSelection onNext={nextStep} onPrevious={previousStep} />
            )}
            {step === 3 && (
                <ThemeSelection onPrevious={previousStep} />
            )}
        </div>
        </TravelPlannerProvider>
  );
};