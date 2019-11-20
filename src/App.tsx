import React, { Component } from 'react';

interface AppProps {
}
interface AppState { }



class App extends Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

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

    render = () => {
        return (
            <div className="App">
                
            </div>
        );
    }
}

export default (App);
