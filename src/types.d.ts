interface BreathingTechnique {
  breatheIn: number;
  hold: number;
  breatheOut: number;
  hold2: number;
}

interface CircleProps {
  isBreathing: boolean;
  breathingTechnique: BreathingTechnique;
}

interface BreathingMenuProps {
  breathingTechnique: BreathingTechnique;
  setBreathingTechnique: React.Dispatch<
    React.SetStateAction<BreathingTechnique>
  >;
}
export { CircleProps, BreathingTechnique, BreathingMenuProps };
