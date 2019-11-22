import React, { Component } from 'react';
import Wizard from './components/wizard/wizard.connector';
import { TStep } from './models/step.model';
import { withTranslation, WithTranslation } from 'react-i18next';

interface AppProps extends WithTranslation {
    initWizard: Function;
}
interface AppState { }



class App extends Component<AppProps, AppState> {
    steps: TStep[];
    constructor(props: AppProps) {
        super(props);

        this.steps = [
            {
                id: 1,
                type: 'USERS',
                previus: null,
                next: 2,
                isActive: true,
                isDone: false
            },
            {
                id: 2,
                type: 'GROUP_INFO',
                previus: 1,
                next: 3,
                isActive: false,
                isDone: false
            },
            {
                id: 3,
                type: 'READY_TO_ROCK',
                previus: 2,
                next: null,
                isActive: false,
                isDone: false
            }
        ]

        this.state = {};

        console.log(`%c
                                                          
                                                          
     █     █░ ██▓▒███████▒ ▄▄▄       ██▀███  ▓█████▄      
     ▓█░ █ ░█░▓██▒▒ ▒ ▒ ▄▀░▒████▄    ▓██ ▒ ██▒▒██▀ ██▌    
     ▒█░ █ ░█ ▒██▒░ ▒ ▄▀▒░ ▒██  ▀█▄  ▓██ ░▄█ ▒░██   █▌    
     ░█░ █ ░█ ░██░  ▄▀▒   ░░██▄▄▄▄██ ▒██▀▀█▄  ░▓█▄   ▌    
     ░░██▒██▓ ░██░▒███████▒ ▓█   ▓██▒░██▓ ▒██▒░▒████▓     
     ░ ▓░▒ ▒  ░▓  ░▒▒ ▓░▒░▒ ▒▒   ▓▒█░░ ▒▓ ░▒▓░ ▒▒▓  ▒     
       ▒ ░ ░   ▒ ░░░▒ ▒ ░ ▒  ▒   ▒▒ ░  ░▒ ░ ▒░ ░ ▒  ▒     
       ░   ░   ▒ ░░ ░ ░ ░ ░  ░   ▒     ░░   ░  ░ ░  ░     
         ░     ░    ░ ░          ░  ░   ░        ░        
                  ░                            ░          
                                                          `, 'background: #222; color: #8e72db')

    }

    componentDidMount = () => {
        this.props.initWizard(this.steps);
    }

    render = () => {
        return (
            <div className="App container-fluid">
                <div className="row">
                    <div className="col wizard-title">
                        <span className="seminar">
                        {this.props.t('App.Title.Seminar')}</span>
                        {" "}
                        <span className="registration">
                        {this.props.t('App.Title.Registration')}
                        </span>
                    </div>
                </div>
                <Wizard />
            </div>
        );
    }
}

export default withTranslation()(App);
