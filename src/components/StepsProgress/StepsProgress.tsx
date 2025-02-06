function StepsProgress({
  totalSteps,
  currentStep,
}: {
  totalSteps: number;
  currentStep: number;
}) {
  return (
    <div className="relative size-18">
      <svg
        className="size-full -rotate-90"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-chetwode-blue-200 "
          stroke-width="4"
        ></circle>

        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-primary transition-all duration-500"
          stroke-width="4"
          stroke-dasharray="100"
          stroke-dashoffset={100 - (currentStep / totalSteps) * 100}
          stroke-linecap="round"
        ></circle>
      </svg>
    </div>
  );
}

export default StepsProgress;
