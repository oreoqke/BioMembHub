import React from 'react';
import './WebServers.css';
import { Webservers } from '../../Urls.jsx';

function WebServers() {
    return (
        <div className='page-style'>
            <h1>Research Tools and Databases</h1>
            <p>The {''} <a href={Webservers.PPM}>PPM</a> {' '}
                (<span className='bold'>P</span>ositioning of {' '}
                <span className='bold'>P</span>roteins in {' '}
                <span className='bold'>M</span>embranes) 
                web server<sup>1, 2</sup> allows calculation of translational and rotational positions of 
                transmembrane and peripheral membrane proteins in flat and curved lipid bilayers 
                using their 3D structures as input. PPM calculates spatial positions of proteins 
                in different artificial lipid bilayers and biomembranes characterized by specified 
                polarity profiles, mechanical properties, and hydrophobic thicknesses. Using both 
                implicit and explicit membrane models enable prediction of not only local 
                protein-induced membrane deformations, but also global curvature changes upon 
                protein binding and insertion into membranes.
            </p>
            
            <p>The {''} <a href={Webservers.OPRLM}>OPRLM</a> {' '}
                (<span className='bold'>O</span>rientation of {' '}
                <span className='bold'>P</span>roteins in {' '}
                <span className='bold'>R</span>ealistic {' '} 
                <span className='bold'>L</span>ipid {' '}
                <span className='bold'>M</span>embranes) 
                web server combines PPM with CHARMM-GUI <span className='italic'>Membrane Builder</span><sup>6-9</sup>, 
                to facilitate generation of protein-lipid simulation systems and input 
                files for all-atom molecular dynamics simulations. It allows inserting 
                of a protein structure into explicit lipid bilayers corresponding to 18 
                types of biological membranes and 4 types of artificial membranes.
            </p>

            <p>The {''} <a href={Webservers.TMPfold}>TMPfold</a> {' '}
                (<span className='bold'>TM P</span>rotein {' '}
                <span className='bold'>fold</span>ing) 
                web tool<sup>3</sup> calculates the free energy of TM α-helix association in proteins with 
                known 3D structures and is used for the analysis of possible folding intermediates 
                and co-translational pathways of association of nascent TM α-helices. The free 
                energy components include van der Waals, hydrogen bonding, and dipole interactions, 
                side-chain conformational entropy, and solvation energy in the anisotropic lipid 
                environment. In calculating stability of various TM protein complexes, TMPfold 
                outperformed the well-known predictors, such as PDBePISA<sup>59</sup> and PRODIGY<sup>60</sup>. TMPfold 
                successfully predicted paths of co-translational helix assembly in well-studied 
                polytopic membrane proteins, including rhodopsin, bacteriorhodopsin, aquaporin 1 and 4, 
                rhomboid protease GlpG, and disulfide oxidoreductase B, DsbB. 
            </p>

            <p>The {''} <a href={Webservers.FMAP}>FMAP</a> {' '}
                (<span className='bold'>F</span>olding of {' '}
                <span className='bold'>M</span>embrane-
                <span className='bold'>A</span>ssociated {' '} 
                <span className='bold'>P</span>eptides) 
                web server<sup>14</sup> allows identification and modeling of stable α-helices 
                in different environments. Using an amino acid sequence and experimental 
                conditions as input, FMAP predicts the existence of individually stable α-helices 
                formed by peptides in aqueous solution, micelles, and lipid bilayers and provides 
                their 3D models positioned with respect to the flat bilayer or spherical micelles. 
                The accuracy of predicting α-helical states for individual amino acid residues 
                varied from 85% for peptides in micelles to 96% for single-pass TM proteins, while 
                the accuracy in predicting TM vs peripheral orientation of α-helices in a bilayer was 
                90%. Experimental micelle- and membrane-binding energies of 74 peptides were 
                reproduced within RMSE of ~2 kcal/mol.
            </p>

            <p><a href={Webservers.TMnet}>1TMnet</a><sup>12</sup>{' '}
            visualizes the networks of bitopic proteins participating in different complexes and 
            cellular pathways. For a set of user-selected proteins from the database, 1TMnet generates 
            interactive tables and graphs that show structural and functional relations between these 
            proteins based on experimentally proven interactions, known complexes, and associations in 
            biological pathways. This facilitates the analysis of interaction networks of bitopic proteins 
            and identification of bitopic protein complexes. 
            </p>

            <p>The {''} <a href={Webservers.TMDOCK}>TMDOCK</a> {' '}
                (<span className='bold'>TM</span>{' '} helix {' '}
                <span className='bold'>DOCK</span>ing) {' '}
                web server<sup>13</sup>  generates 3D models of TM α-helical dimers by threading a target 
                amino acid sequence through several structural templates followed by local energy 
                minimization with a novel force field<sup>71</sup>. This is the first method that identifies 
                alternative dimerization modes and ranks them based on the calculated free energy of 
                α-helix association (ΔGasc). The free energy components include van der Waals, hydrogen 
                bonding, and dipole interactions, side-chain conformational entropy, and solvation 
                energy in an anisotropic lipid environment<sup>71, 72</sup>. TMDOCK correctly modeled parallel TM 
                α-helical homodimers of bitopic proteins with Cα-atom RMSD from 1.0 to 3.3 Å, reproduced 
                the experimental ΔGasc, and automatically assessed the heterogeneity of dimeric structures<sup>13</sup>.
                Combination of the open-source AlphaFold Multimer (AFM) program<sup>15</sup> with TMDOCK represents a 
                practical approach to fast and reliable large-scale modeling of conformationally flexible TM 
                complexes of bitopic proteins not amenable to crystallization<sup>16</sup> calculates stability and 
                provides atomic models of TM α-helical dimers.
            </p>

            <p>The <a href={Webservers.PERMM}>PerMM</a><sup>12</sup>{' '}
            web tool<sup>17</sup> was developed for computational assessment of passive permeability of small organic 
            molecules across the lipid bilayer. The underlying method is based on solubility-diffusion 
            theory and operates with atomic 3D structures of solutes and the anisotropic solvent model 
            of the lipid bilayer characterized by the defined transbilayer profiles of dielectric and 
            hydrogen-bonding capacity parameters. The PerMM method calculates membrane binding affinity, 
            energy profiles along the bilayer normal, and permeability coefficients of diverse molecules 
            across different membrane types. Calculated permeability coefficients were consistent with 
            experimental data for diverse membrane systems, such as BLM, PAMPA, BBB, and Caco-2/MDCK cells. 
            The server can assist investigators at early stages of drug discovery to optimize cell permeability 
            of new therapeutics derived from natural products or synthetic molecules.
            </p>

            <p>The <a href={Webservers.CELLPM}>CellPM</a><sup>12</sup>{' '}
            web server<sup>18</sup> is a physics-based computational tool for analysis of peptide-membrane 
            interactions and prediction of peptide’s ability to cross the lipid bilayer via an energy-independent 
            pathway. One can use an amino acid sequence or a predefined 3D structure of a specified peptide to 
            calculate its optimal spatial position in membrane, the energy of membrane binding, the lowest energy 
            translocation pathway across the lipid bilayer, and the permeability coefficient. This tool produces 
            a physically realistic description of membrane-peptide interactions, including peptide insertion into 
            membrane, formations of α-helices, and the changes in peptide orientation during the passive translocation 
            through membrane. We expect that this tool will be helpful for understanding mechanisms of direct peptide 
            translocation across the lipid bilayer. 
            </p>
        </div>
    );
}

export default WebServers;