import React, { Component, ChangeEvent } from 'react';
import { TCheckImputForm } from '../../../models/core.model';
import _ from 'lodash';
import { withTranslation, WithTranslation } from 'react-i18next';

interface ReadyToRockProps extends WithTranslation {
    onValidateStatusChange: Function;
}

interface ReadyToRockState {
    isValidForm: boolean;
    readyToRock: TCheckImputForm;
}



class ReadyToRock extends Component<ReadyToRockProps, ReadyToRockState> {
    constructor(props: ReadyToRockProps) {
        super(props);

        this.state = {
            isValidForm: false,
            readyToRock: {
                cheked: false,
                isValidInput: false,
                isRequired: true
            }
        };

    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {

        let payload: ReadyToRockState = {
            ...this.state,
            [event.target.id]: {
                value: event.target.checked,
                isValidInput: event.target.checked,
                isRequired: event.target.required
            }
        }

        this.setState({
            ...payload
        })

        this.isValidForm(payload);
    }

    isValidForm = (payload: ReadyToRockState) => {

        let isValid: boolean = true;

        Object.entries(payload).forEach(
            ([key, value]) => {
                if (!_.isUndefined(value.isValidInput) && value.isValidInput === false) {
                    isValid = false;
                }
            }
        );

        console.log(isValid);

        if (this.state.isValidForm !== isValid) {
            this.setState({
                isValidForm: isValid
            });
        }

    }

    render = () => {
        return (
            <div className="ReadyToRock content">
                <form>
                    <div className="form-group row">
                        <div className="form-check">
                            <label className="form-check-label" htmlFor="readyToRock">
                                {this.props.t('Wizard.Step.ReadyToRock.Form.ReadyToRock.Label')}
                            </label>
                            <input onChange={this.handleChange} className="form-check-input" type="checkbox" id="readyToRock" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-light" disabled={!this.state.isValidForm}>
                        {this.props.t('Wizard.Step.ReadyToRock.Form.Butto.Complete')}
                    </button>
                </form>
            </div>
        );
    }
}

export default withTranslation()(ReadyToRock);
