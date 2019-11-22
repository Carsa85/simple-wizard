import { connect } from 'react-redux';
import Wizard from './wizard.component';
import { TWizardStores } from '../../reducers';

const mapStateToProps = (state: TWizardStores) => ({
    steps: state.wizardManager.stepList,
    isDone: state.wizardManager.isDone 
});

const mapDispatchToProps = (dispatch: Function) => ({
	
});

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);
