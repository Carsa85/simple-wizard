import { TStep } from "../../models/step.model";


export const initWizard = (stepList: TStep[]) => ({
    type: "INIT_WIZARD",
    stepList
});

export const updateWizard = (stepList: TStep[], isDone: Boolean) => ({
    type: "UPDATE_WIZARD",
    stepList,
    isDone
});

export const resetWizard = () => ({
    type: "RESET_WIZARD"
});
