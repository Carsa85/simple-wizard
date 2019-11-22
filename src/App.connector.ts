import { connect } from 'react-redux';
import App from './App';
import { TWizardStores } from './reducers';
import { initWizard } from './reducers/wizard-manager/wizard-manager.action';
import { TStep } from './models/step.model';

const mapStateToProps = (state: TWizardStores) => ({});

const mapDispatchToProps = (dispatch: Function) => ({
    initWizard: (steps: TStep[]) => dispatch(initWizard(steps))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
