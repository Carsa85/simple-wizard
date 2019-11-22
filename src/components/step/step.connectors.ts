import { connect } from 'react-redux';
import Step from './step.component';
import { TStep } from '../../models/step.model';
import { TWizardStores } from '../../reducers';
import { updateWizard } from '../../reducers/wizard-manager/wizard-manager.action';

type MoreProps = {
    className?: string;
    step: TStep;
};

const mapStateToProps = (state: TWizardStores, props: MoreProps) => ({
    step: props.step,
    steps: state.wizardManager.stepList
});

const mapDispatchToProps = (dispatch: Function) => ({
    updateWizard: (steps: TStep[], isDone: boolean) => dispatch(updateWizard(steps, isDone)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(Step);
