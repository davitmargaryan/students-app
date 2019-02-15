import React from 'react';
import Switch from '@material-ui/core/Switch';

function Switches(props) {
    const [state, setState] = React.useState({
        checkedA: true,
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    return (
        <div>
            <Switch onClick={props.onClick} checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" color='secondary' />
            <Switch
                checked={!state.checkedA}
                onChange={handleChange('checkedA')}
                value="checkedA"
                color='primary'
            />
        </div>
    );
}

export default Switches;