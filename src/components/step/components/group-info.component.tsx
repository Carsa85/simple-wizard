import React, { Component, ChangeEvent } from 'react';
import _ from 'lodash';
import { TInputForm } from '../../../models/core.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { WithTranslation, withTranslation } from 'react-i18next';

interface GroupInfoProps extends WithTranslation {
    onValidateStatusChange: Function;
}

interface GroupInfoState {
    isValidForm: boolean;
    addCompanyName: TInputForm;
    companyName: TInputForm;
    addSpecialAccomodation: TInputForm;
    specialAccomodation: TInputForm;
}



class GroupInfo extends Component<GroupInfoProps, GroupInfoState> {
    constructor(props: GroupInfoProps) {
        super(props);

        this.state = {
            isValidForm: false,
            addCompanyName: {
                value: '',
                isValidInput: false,
                isRequired: true
            },
            companyName: {
                value: '',
                isValidInput: true,
                isRequired: true
            },
            addSpecialAccomodation: {
                value: '',
                isValidInput: false,
                isRequired: true
            },
            specialAccomodation: {
                value: '',
                isValidInput: true,
                isRequired: true
            },
        };

    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {

        let payload: GroupInfoState = {
            ...this.state,
            [event.target.name]: {
                value: event.target.value,
                isValidInput: event.target.validity.valid,
                isRequired: event.target.required
            }
        }

        if (event.target.name === 'addCompanyName') {
            payload.addCompanyName.value === 'yes'
                ? payload.companyName = {
                    value: '',
                    isValidInput: false,
                    isRequired: true
                }
                : payload.companyName = {
                    value: '',
                    isValidInput: true,
                    isRequired: false
                }
        }

        if (event.target.name === 'addSpecialAccomodation') {
            payload.addSpecialAccomodation.value === 'yes'
                ? payload.specialAccomodation = {
                    value: '',
                    isValidInput: false,
                    isRequired: true
                }
                : payload.specialAccomodation = {
                    value: '',
                    isValidInput: true,
                    isRequired: false
                }
        }

        this.setState({
            ...payload
        })

        this.isValidForm(payload);
    }

    isValidForm = (payload: GroupInfoState) => {

        let isValid: boolean = true;

        Object.entries(payload).forEach(
            ([key, value]) => {
                if (!_.isUndefined(value.isValidInput) && value.isValidInput === false) {
                    isValid = false;
                }
            }
        );

        if (this.state.isValidForm !== isValid) {
            this.setState({
                isValidForm: isValid
            });

            this.props.onValidateStatusChange(isValid);
        }

    }

    render = () => {
        return (
            <div className="GroupInfo content">
                <form>
                    <fieldset className="form-group">
                        <div>
                            <legend className="col-form-label">
                                {this.props.t('Wizard.Step.GroupInfo.Form.AddCompanyName.Label')}
                            </legend>
                            <div className="check-line">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="addCompanyName"
                                        id="addCompanyName1"
                                        value="yes"
                                        onChange={this.handleChange}
                                        checked={this.state.addCompanyName.value === "yes"} />
                                    <label className="form-check-label" htmlFor="addCompanyName1">
                                        {this.props.t('Wizard.Step.GroupInfo.Form.AddCompanyName.Yes')}
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="addCompanyName"
                                        id="addCompanyName2"
                                        value="no"
                                        onChange={this.handleChange}
                                        checked={this.state.addCompanyName.value === "no"}
                                    />
                                    <label className="form-check-label" htmlFor="addCompanyName2">
                                        {this.props.t('Wizard.Step.GroupInfo.Form.AddCompanyName.No')}
                                    </label>
                                </div>

                            </div>
                        </div>
                    </fieldset>
                    <div className={`form-group row specify-attribute-input ${this.state.addCompanyName.value === 'yes' ? 'is-visible' : ''}`}>
                        <label htmlFor='companyName' className="col-form-label">
                            {this.props.t('Wizard.Step.GroupInfo.Form.CompanyName.Label')}
                        </label>
                        <div className="col">
                            <input
                                onChange={this.handleChange}
                                value={this.state.companyName.value}
                                type="text"
                                className="form-control"
                                name='companyName'
                                id='companyName'
                                placeholder={this.props.t('Wizard.Step.GroupInfo.Form.CompanyName.Placeholder')}
                                required={this.state.addCompanyName.value === 'yes'} />
                        </div>
                    </div>
                    <fieldset className="form-group">
                        <div>
                            <legend className="col-form-label">
                                {this.props.t('Wizard.Step.GroupInfo.Form.AddSpecialAccomodation.Label')}
                            </legend>
                            <div className="check-line">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="addSpecialAccomodation"
                                        id="addSpecialAccomodation1"
                                        value="yes"
                                        onChange={this.handleChange}
                                        checked={this.state.addSpecialAccomodation.value === "yes"} />
                                    <label className="form-check-label" htmlFor="addSpecialAccomodation1">
                                        {this.props.t('Wizard.Step.GroupInfo.Form.AddSpecialAccomodation.Yes')}
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="addSpecialAccomodation"
                                        id="addSpecialAccomodation2"
                                        value="no"
                                        onChange={this.handleChange}
                                        checked={this.state.addSpecialAccomodation.value === "no"}
                                    />
                                    <label className="form-check-label" htmlFor="addSpecialAccomodation2">
                                        {this.props.t('Wizard.Step.GroupInfo.Form.AddSpecialAccomodation.No')}
                                    </label>
                                </div>

                            </div>
                        </div>
                    </fieldset>
                    <div className={`form-group row specify-attribute-input ${this.state.addSpecialAccomodation.value === 'yes' ? 'is-visible' : ''}`}>
                        <label htmlFor='specialAccomodation' className="col-form-label">
                            {this.props.t('Wizard.Step.GroupInfo.Form.SpecialAccomodation.Label')}
                        </label>
                        <div className="col">
                            <input 
                                onChange={this.handleChange} 
                                value={this.state.specialAccomodation.value} 
                                type="text" 
                                className="form-control" 
                                name='specialAccomodation' 
                                placeholder={this.props.t('Wizard.Step.GroupInfo.Form.SpecialAccomodation.Placeholder')}
                                id='specialAccomodation' required={this.state.addSpecialAccomodation.value === 'yes'} />
                        </div>
                    </div>
                </form>
                <div className={`validated-step ${this.state.isValidForm ? 'valid' : ''}`}>
                    <div className="check-badge">
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(GroupInfo);
