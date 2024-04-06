import React from 'react';
import './Download.css';

function Download() {
    return (
        <div className='page-style'>
            {TarFiles()}
            {CSVFiles()}
            {Containers()}
        </div>
    );
}

export default Download;

function TarFiles() {
    return (
        <div>
            <div className='section-title'>
                TAR FILES
            </div>
        </div>
    );
}

function CSVFiles() {
    return (
        <div>
            <div className='section-title'>
                CSV FILES
            </div>
        </div>
    );
}   

function Containers() {
    return (
        <div>
            <div className='section-title'>
                CONTAINERS
            </div>
        </div>
    );
}