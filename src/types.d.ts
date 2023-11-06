interface BreathingTechnique {
  breatheIn: number;
  hold: number;
  breatheOut: number;
  hold2: number;
  breaths: number;
}

interface CircleProps {
  isBreathing: boolean;
  setBreathing: React.Dispatch<React.SetStateAction<boolean>>;
  breathingTechnique: BreathingTechnique;
}

interface BreathingMenuProps {
  isBreathing: boolean;
  setBreathing: React.Dispatch<React.SetStateAction<boolean>>;
  breathingTechnique: BreathingTechnique;
  setBreathingTechnique: React.Dispatch<
    React.SetStateAction<BreathingTechnique>
  >;
}
export { CircleProps, BreathingTechnique, BreathingMenuProps };
