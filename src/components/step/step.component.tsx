import React, { Component } from 'react';
import { TStep, TStepType } from '../../models/step.model';
import Users from './components/users.component';
import GroupInfo from './components/group-info.component';
import ReadyToRock from './components/ready-to-rock.component';
import _ from 'lodash';
import { TWizard } from '../../models/wizard.model';
import { withTranslation, WithTranslation } from 'react-i18next';

interface StepProps extends WithTranslation {
    step: TStep;
    steps: TStep[];
    updateWizard: Function;
}
interface StepState { }



class Step extends Component<StepProps, StepState> {
    constructor(props: StepProps) {
        super(props);

        this.state = {};
    }

    validateNextSteps = (stepList: TStep[], stepId: number | null): TStep[] => {
        let i: number;
        for (i = 0; i < stepList.length; i++) {
            if (stepList[i].id === stepId) {
                break;
            }
        }

        stepList[i].isActive = true;

        if (stepList[i].isDone && !_.isNull(stepList[i].next)) {
            return this.validateNextSteps(stepList, stepList[i].next)
        } else {
            return stepList;
        }

    }

    invalidateNextStep = (stepList: TStep[], stepId: number | null): TStep[] => {
        let i: number;
        for (i = 0; i < stepList.length; i++) {
            if (stepList[i].id === stepId) {
                break;
            }
        }

        stepList[i].isActive = false;

        if (!_.isNull(stepList[i].next)) {
            return this.invalidateNextStep(stepList, stepList[i].next)
        } else {
            return stepList;
        }

    }

    onValidateStatusChange = (isDone: boolean) => {

        let newWizard: TWizard;


        newWizard = {
            isDone: false,
            stepList: _.cloneDeep(this.props.steps)
        }


        newWizard.stepList.forEach((step: TStep, index: number) => {
            if (step.id === this.props.step.id) {
                newWizard.stepList[index].isDone = isDone;
            }
        });

        newWizard.stepList = isDone
            ? this.validateNextSteps(newWizard.stepList, this.props.step.next)
            : this.invalidateNextStep(newWizard.stepList, this.props.step.next)

        if (_.isNull(this.props.step.next)) {
            if (isDone) {
                newWizard.isDone = true
            }
        }

        this.props.updateWizard(newWizard.stepList, newWizard.isDone)


    }

    getComponent = (type: TStepType) => {
        switch (type) {
            case "USERS":
                return (<Users onValidateStatusChange={this.onValidateStatusChange} />);
            case "GROUP_INFO":
                return (<GroupInfo onValidateStatusChange={this.onValidateStatusChange} />);
            case "READY_TO_ROCK":
                return (<ReadyToRock onValidateStatusChange={this.onValidateStatusChange} />);
        }
    }

    render = () => {
        return (
            <div className="Step col-md">
                <div className="backdrop" hidden={this.props.step.isActive} />
                <div className="step-name">
                    {this.props.t('Wizard.Step.Title', { stepId: this.props.step.id })}
                </div>
                <div className="step-body">
                    {this.getComponent(this.props.step.type)}
                </div>
            </div>
        );
    }
}

export default withTranslation()(Step);
