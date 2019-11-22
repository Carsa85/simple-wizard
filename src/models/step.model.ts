type TStepId = number;
export type TStepType = 'USERS' | 'GROUP_INFO' | 'READY_TO_ROCK';

export type TStep = {
    id: TStepId;
    type: TStepType;
    previus: TStepId | null;
    next: TStepId | null;
    isActive: boolean;
    isDone: boolean;
};
