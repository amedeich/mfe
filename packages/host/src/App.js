import React from 'react';
import ReactMfe from './mfe/ReactApp';
import VueMfe from './mfe/VueApp';

export default () => {
    return <div>
        <h1>Host.</h1>
        <hr />
        <ReactMfe />
        <VueMfe />
    </div>
}