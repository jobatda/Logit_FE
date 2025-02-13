import {useState} from "react";
import RegionSelection from "./components/RegionSelection";
import DurationSelection from "./components/DurationSelection";
import ThemeSelection from "./components/ThemeSelection";
import AiPlanner from "./components/AiPlanner";
import {TravelPlannerProvider} from "./context/TravelPlannerContext";
import {useLocation} from "react-router-dom";

export default function AiTripPlan() {
    const location = useLocation();
    const state = location.state || {};

    const [step, setStep] = useState(1);

    const nextStep = () => setStep((prev) => prev + 1);
    const previousStep = () => setStep((prev) => prev - 1);

    return (
        <TravelPlannerProvider>
            <div>
                {step === 1 && <RegionSelection onNext={nextStep}/>}
                {step === 2 && (
                    <DurationSelection onNext={nextStep} onPrevious={previousStep}/>
                )}
                {step === 3 && (
                    <ThemeSelection onNext={nextStep} onPrevious={previousStep}/>
                )}
                {step === 4 && (
                    <AiPlanner/>
                )}
            </div>
        </TravelPlannerProvider>
    );
};