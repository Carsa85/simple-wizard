import { combineReducers } from 'redux';
import wizardManager, { TWizardManager } from './wizard-manager';

export type TWizardStores = {
    wizardManager: TWizardManager;
};

const reducersApp = combineReducers({
    wizardManager
});

export default reducersApp;
