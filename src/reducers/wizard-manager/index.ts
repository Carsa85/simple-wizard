import { TStep } from '../../models/step.model';

type IAction = {
    type: string;
    stepList: TStep[];
    isDone: boolean;
};

export type TWizardManager = {
    stepList: TStep[];
    isDone: boolean;
};

const wizardManager = (
    state: TWizardManager = {
        stepList: [],
        isDone: false
    },
    action: IAction
) => {
    let nexState: TWizardManager = state;
    switch (action.type) {
        case 'INIT_WIZARD':
            nexState = {
                stepList: action.stepList,
                isDone: false
            };
            return nexState;
        case 'UPDATE_WIZARD':
            nexState = {
                stepList: action.stepList,
                isDone: action.isDone
            };
            return nexState;
        default:
            return nexState;
    }
};

export default wizardManager;
