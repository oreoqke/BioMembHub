import React from 'react';
import './Help.css';

function Help() {
    return (
        <div className='page-style'>
            {Manual()}
            {Installation()}
            {SupportedHardware()}
            {KnownIssues()}
        </div>
    );
}

export default Help;

function Manual() {
    return (
        <div>
            <div className='section-title'>
                MANUAL
            </div>

        </div>
    );
}

function Installation() {
    return (
        <div>
            <div className='section-title'>
                INSTALLATION INSTRUCTIONS
            </div>
        </div>
    );
}

function SupportedHardware() {
    return (
        <div>
            <div className='section-title'>
                SUPPORTED OPERATIONAL SYSTEMS AND HARDWARE
            </div>
        </div>
    );
}

function KnownIssues() {
    return (
        <div>
            <div className='section-title'>
                KNOWN ISSUES (FAQ)
            </div>
        </div>
    );
}