type TStepId = number;

export type TStep = {
    id: TStepId;
    type: string;
    privius: TStepId | null;
    next: TStepId | null;
    isDone: boolean;
};
