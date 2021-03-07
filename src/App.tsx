import React from 'react';
import Component from "./components/Component";
import Main from "./components/Main";

type AppProps = {
    name: string;
};

const App = ({ name }: AppProps) => {
    return (
        <div>
            <meta charSet="utf-8" />
                hi {name}
            <Component/>
            <Main />
        </div>
    );
};


App.defaultProps = {
    name: '!!!!'
};

export default App;