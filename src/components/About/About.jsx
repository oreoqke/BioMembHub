import React from 'react';
import './About.css';
import { Databases, Webservers } from '../../Urls';


function About() {
    return (
        <div className='page-style'>
            {Intro()}
            <img src="images/Architecture.png" alt="BioMemHub Architecture" className='image'/>
            {Acknowledgement()}
            {Contact()}
        </div>
    );
}

export default About;

function Intro() {
    return (
        <div>
            <div className='section-title'>
                INTRODUCTION
            </div>
            <div>
                <p> The BioMemHub infrastructure is composed of three parts. 
                    The first part includes the {' '}
                    <a href={Databases.OPRLM}>OPRLM</a>{' '}
                    database, a successor to the {' '}
                    <a href={Databases.OPM}>OPM</a>{' '}
                    database, and the associated {' '}
                    <a href={Webservers.PPM}>PPM</a>,{' '}
                    <a href={Webservers.OPRLM}>OPRLM</a>, and {' '}
                    <a href={Webservers.TMPfold}> TMPfold</a>{' '}
                    web servers. The second part consists of the {' '}
                    <a href={Databases.MEMBRANOMEX}>MEMBRANOMEX</a>{' '}
                    database, a successor to the {' '}
                    <a href={Databases.MEMBRANOME}>MEMBRANOME</a>{' '}
                    database and the associated {' '}
                    <a href={Webservers.TMDOCK}>TMDOCK</a>,{' '}
                    <a href={Webservers.FMAP}>FMAP</a>, and {' '}
                    <a href={Webservers.TMnet}>1TMnet</a>{' '}
                    web tools. The third part includes the {' '}
                    <a href={Databases.PERMM}>PerMM</a>{' '}
                    database and the {' '}
                    <a href={Webservers.PERMM}>PerMM</a>{' '} and {' '}
                    <a href={Webservers.CELLPM}>CellPM</a>{' '}
                    web tools for analysis of passive membrane permeability
                    of small bioactive molecules and peptides. OPM and PPM are
                    integrated into various academic research resources like PDB,
                    PDBsum, Encompass, MOLEonline, CELLmicrocosmos, etc.
                    </p>
            </div>
        </div>
    );
}

function Acknowledgement() {
    return (
        <div>
            <div className='section-title'>
                ACKNOWLEDGEMENTS
            </div>
            <div>
                <p> Thank you to Alexey Kovalenko for the help in creating
                    BioMembHub.
                </p>
            </div>
        </div>
    );
}

function Contact() {
    return (
        <div>
            <div className='section-title'>
                CONTACT US
            </div>
            <div>
                <p> For any questions, please contact us at {' '} </p>
            </div>
        </div>
    )
}