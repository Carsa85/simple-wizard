import React, { Component, ChangeEvent } from 'react';
import _ from 'lodash';
import { TInputForm } from '../../../models/core.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { withTranslation, WithTranslation } from 'react-i18next';

interface UsersProps extends WithTranslation {
    onValidateStatusChange: Function;
}

interface UsersState {
    isValidForm: boolean;
    attendeesNumber: TInputForm;
    attendeeNameList: TInputForm[];
}

const maxAttendee = 4;

class Users extends Component<UsersProps, UsersState> {
    constructor(props: UsersProps) {
        super(props);

        this.state = {
            isValidForm: false,
            attendeesNumber: {
                value: '',
                isValidInput: false,
                isRequired: true
            },
            attendeeNameList: []
        };
    }

    handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {

        let payload: UsersState = {
            ...this.state,
            [event.target.id]: {
                value: event.target.value,
                isValidInput: event.target.validity.valid,
                isRequired: event.target.required
            }
        }

        let i: number = _.isNaN(parseInt(payload.attendeesNumber.value, 10)) ? 0 : parseInt(payload.attendeesNumber.value, 10)

        if (i > payload.attendeeNameList.length) {
            for (i; i > payload.attendeeNameList.length;) {
                let newAttendee: TInputForm = {
                    value: '',
                    isValidInput: false,
                    isRequired: true,
                }
                payload.attendeeNameList.push(newAttendee)
            }

            this.setState({
                ...payload
            })

            this.isValidForm(payload);

        } else {
            this.setState({
                ...payload
            })

            setTimeout(() => {
                payload.attendeeNameList.splice(i);
                this.setState({
                    ...payload
                });

                this.isValidForm(payload);

            }, 300)
        }

    }

    handleAttendeeChange = (event: ChangeEvent<HTMLInputElement>) => {

        let payload: UsersState = {
            ...this.state
        }

        payload.attendeeNameList[parseInt(event.target.id, 10)] = {
            value: event.target.value,
            isValidInput: event.target.validity.valid,
            isRequired: event.target.required
        }

        this.setState({
            ...payload
        })

        this.isValidForm(payload);
    }

    isValidForm = (payload: UsersState) => {

        let isValid: boolean = true;
        let attendee: TInputForm;

        Object.entries(payload).forEach(
            ([key, value]) => {
                if (!_.isUndefined(value.isValidInput) && value.isValidInput === false) {
                    isValid = false;
                }
            }
        );

        for (attendee of payload.attendeeNameList) {
            if (attendee.isValidInput === false) {
                isValid = false;
                break;
            }
        }

        if (this.state.isValidForm !== isValid) {
            this.setState({
                isValidForm: isValid
            });

            this.props.onValidateStatusChange(isValid);
        }

    }

    render = () => {
        return (
            <div className="Users content">
                <form>
                    <div className="form-group row">
                        <label htmlFor="attendeesNumber" className="col-form-label">{this.props.t('Wizard.Step.Users.Form.AttendeesNumber.Label')}</label>
                        <div className="col">
                            <select
                                onChange={this.handleSelectChange}
                                value={this.state.attendeesNumber.value}
                                id="attendeesNumber" className="form-control"
                                required={this.state.attendeesNumber.isRequired}>
                                <option value="">{this.props.t('Wizard.Step.Users.Form.AttendeesNumber.Placeholder')}</option>
                                {
                                    Array.from(Array(maxAttendee)).map((element, index: number) => {
                                        return (
                                            <option key={index} value={index + 1}>{index + 1}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className={`
                        attendeeList-0
                        ${
                        Array.from(Array(this.state.attendeesNumber.value === '' ? 0 : parseInt(this.state.attendeesNumber.value, 10))).map((element, index: number) => {
                            return ` attendeeList-${index + 1} `
                        })
                        }
                    `}>
                        <h4>
                            {this.props.t('Wizard.Step.Users.ProvideFullName')}
                        </h4>
                        {
                            this.state.attendeeNameList.map((attendee: TInputForm, index: number) => {

                                return (
                                    <div key={index} className="form-group row">
                                        <label htmlFor={index.toString()} className="col-form-label">
                                            {this.props.t('Wizard.Step.Users.Form.Attendee.Label', { attendeeId: index + 1 })}
                                        </label>
                                        <div className="col">
                                            <input
                                                onChange={this.handleAttendeeChange}
                                                value={attendee.value}
                                                type="text"
                                                className="form-control"
                                                placeholder={this.props.t('Wizard.Step.Users.Form.Attendee.Placeholder')}
                                                id={index.toString()}
                                                required={attendee.isRequired} />
                                        </div>
                                    </div>
                                )
                            })
                        }
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

export default withTranslation()(Users);
