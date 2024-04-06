import React from 'react';
import './Home.css';
import {Databases, Webservers} from '../../Urls';

function Home() {
    return (
        <div className='page-container'>
            {intro()}
            {Statiscics()}
            {Citing()}
            {Updates()}
            {Funding()}
        </div>
    );
}

export default Home;

function intro() {
    return (
        <div>
            <p> The BioMembHub cyberinfrastructure is composed of 3 databases 
                (<a href={Databases.OPRLM}>OPRLM</a>,{' '} 
                <a href={Databases.MEMBRANOME}>Membranome</a>, and{' '}
                <a href={Databases.PERMM}>PerMM</a>){' '}
                and 8 webservers (
                <a href={Webservers.PPM}>PPM</a>,{' '}
                <a href={Webservers.OPRLM}>OPRLM</a>,{' '}
                <a href={Webservers.FMAP}>FMAP</a>,{' '}
                <a href={Webservers.TMDOCK}>TMDOCK</a>,{' '}
                <a href={Webservers.TMPfold}>TMPfold</a>,{' '}
                <a href={Webservers.TMnet}>1TMnet</a>,{' '}
                <a href={Webservers.PERMM}>PerMM</a>, and{' '}
                <a href={Webservers.CELLPM}>CellPM</a>)
                . It was developed to facilitate all-atom modeling and analysis 
                of folding, stability, spatial positions, and interations of proteins,
                peptides, and small molecules in implicit and explicit
                membranes of different complexity. The infrastucture is unique 
                due to its blend of physics-based methods, bioinformatics, and the deep 
                learning-based AlphaFold System. The built-in web resources facilitate insights into
                structures, energetics, and dynamics of molecules in biomembranes. 
            </p>
        </div>
    );
}

function Statiscics() {
    return (
        <div className='section-container'>
            <div className='section-header'>
                STRUCTURE STATISTICS
            </div>
            <div className="section-content">
                <ul>
                    <li>Proteins with known 3D structures (the OPRLM database)</li>
                    <li>Precalculated protein 3D structures with explicit lipids (the OPRLM database)</li>
                    <li>Protein monomers with modeled 3D structures by AlphaFold (the Membranome database)</li>
                    <li>Protein complexes with modeled 3D structures by AlphaFold (the Membranome database)</li>
                </ul>
            </div>
        </div>
    );
}

function Citing() {
    return (
        <div className='section-container'>
            <div className='section-header'>
                CITING US
            </div>
            <div className='section-content'>
                <p>
                    If you use the BioMembHub cyberinfrastructure in your research, please cite the following papers:
                </p>
                <ul>
                    <li>OPRLM: </li>
                    <li>Membranome: </li>
                    <li>PerMM: </li>
                </ul>
            </div>
        </div>
    );
}

function Updates() {
    return (
        <div className="section-container">
            <div className="section-header">
                UPDATES AND VISITORS
            </div>
            <div className="section-content">
                <ul>
                    <li> Last update</li>
                    <li> Visitor statiscics</li>
                </ul>
            </div>
        </div>
    );
}

function Funding() {
    return (
        <div className="section-container-last">
            <div className="section-header">
                FUNDING
            </div>
            <div className="section-content">
                <ul>
                    <li>NSF #2010851</li>
                    <li>NSF #2011234</li>
                </ul>
            </div>
        </div>
    );
}