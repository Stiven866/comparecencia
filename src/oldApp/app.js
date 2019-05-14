import React, { useState } from 'react';

// components
import { Button } from 'reactstrap';
import Loader from './components/Loader';
import Line from './custom-components/chartjs';

// styles
import './styles.scss';

const App = () => {
    const [loading, setLoading] = useState(false);
    // const [loading, setLoading] = useState(false);

    const toggleLoader = () => {
        setLoading(!loading)
    };

    return (
        <div className="app">
        <header className="app__header">
            Header
        </header>
        <aside className="app__sidebar">
                Sidebar
            </aside>
            <section className="app__content">
                Content
                <Button
                    onClick={toggleLoader}
                >OK</Button>
                { loading && <Loader /> }
                { loading && <Line /> }
            </section>
        </div>
    );
};

export default App;