import React, { Component } from 'react';
import { TStep } from '../../models/step.model';
import Step from '../step/step.connectors'

interface WizardProps {
    steps: TStep[];
    isDone: boolean;
}
interface WizardState { }

class Wizard extends Component<WizardProps, WizardState> {
    constructor(props: WizardProps) {
        super(props);

        this.state = {};

    }

    render = () => {
        return (
            <div className="Wizard row">
                {
                    this.props.steps.map((step: TStep) => <Step key={step.id} step={step} />)
                }
            </div>
        );
    }
}

export default Wizard;
