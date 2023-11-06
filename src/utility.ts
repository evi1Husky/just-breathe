import { BreathingTechnique } from "./types";

const setLocalStorage = (breathingTechnique: BreathingTechnique) => {
  if (!window.localStorage) {
    return;
  }
  window.localStorage.setItem(
    "breathingTechnique",
    JSON.stringify(breathingTechnique)
  );
};

const getThingsFromLocalStorage = (): BreathingTechnique => {
  if (window.localStorage) {
    if ("breathingTechnique" in window.localStorage) {
      const storageItem = window.localStorage.getItem(
        "breathingTechnique"
      ) as string;
      const storedObject = JSON.parse(storageItem);
      const breathingTechnique = storedObject as BreathingTechnique;
      return breathingTechnique;
    }
  }
  return {
    breatheIn: 4,
    hold: 7,
    breatheOut: 8,
    hold2: 1,
    breaths: 50,
  };
};

export { setLocalStorage, getThingsFromLocalStorage };
