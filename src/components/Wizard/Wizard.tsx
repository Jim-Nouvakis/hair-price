import StepsProgress from "../StepsProgress/StepsProgress.tsx";
import WizardButtons from "../WizardButtons/WizardButtons.tsx";

function Wizard() {
  return (
    <div className="p-8 flex justify-center items-center content-center flex-col gap-8">
      <StepsProgress totalSteps={10} currentStep={5} />
      <WizardButtons />
    </div>
  );
}

export default Wizard;
