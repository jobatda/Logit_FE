import {useState} from "react";
import RegionSelection from "./components/RegionSelection";
import DurationSelection from "./components/DurationSelection";
import ThemeSelection from "./components/ThemeSelection";
import AiPlanner from "./components/AiPlanner";
import {TravelPlannerProvider} from "./context/TravelPlannerContext";
import {useLocation} from "react-router-dom";

export default function AiTripPlan() {
    const location = useLocation();
    const state = location.state || {"region": "양평군"};
    const [step, setStep] = useState(1);
    const [courseid, setCourseid] = useState("");
    
    const nextStep = () => setStep((prev) => prev + 1);
    const previousStep = () => setStep((prev) => prev - 1);

    return (
        <TravelPlannerProvider>
            <div>
                {/* {step === 1 && <RegionSelection onNext={nextStep}/>} */}
                {step === 1 && (
                    <DurationSelection onNext={nextStep} onPrevious={previousStep} region={state}/>
                )}
                {step === 2 && (
                    <ThemeSelection onNext={nextStep} onPrevious={previousStep} setCourseid={setCourseid} />
                )}
                {step === 3 && (
                    <AiPlanner courseid={courseid}/>
                )}
            </div>
        </TravelPlannerProvider>
    );
};