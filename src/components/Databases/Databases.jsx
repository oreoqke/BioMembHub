import React from 'react';
import './Databases.css';
import { Databases } from '../../Urls.jsx';

function Databs() {
    return (
        <div className='page-style'>
            <div className='section-title'>
                Our Database
            </div>            
            <p>The {''} <a href={Databases.OPRLM}>OPRLM</a> {' '}
                (<span className='bold'>O</span>rientations of {' '}
                <span className='bold'>P</span>roteins in {' '}
                <span className='bold'>R</span>ealistic {' '} 
                <span className='bold'>L</span>ipid {' '}
                <span className='bold'>M</span>embranes) 
                database is a successor of the OPM (Orientations of Proteins in Membranes) 
                database that provides experimental 3D structures from the RCSB Protein 
                Data bank (PDB) of transmembrane TM and peripheral membrane proteins and 
                membrane-active peptides that are oriented in lipid membranes using the PPM 3.0 
                method. OPM offers structural classification of proteins into families and 
                superfamilies and various browsing, searching, sorting, and visualization options, 
                such as displaying images simultaneously for all proteins from specific families, 
                superfamilies, or membranes. It also provides protein topology, preferred 
                intracellular localization, interactive visualization by Jmol, GLmol, 
                LiteMol, and iCn3D, and links to related web resources, 
                PDB, PDBsum, MSD(PDBe), 
                TCDB, PFAM, UniProt, SCOP, 
                MMDB, mpstruc, MPDB, and EncoMPASS.  
                OPRLM database incorporates the OPRLM server for automated insertion of protein 
                structures in precalculated explicit lipid bilayers with different lipid composition. 
            </p>


            <p>The <a href={Databases.MEMBRANOME}>Membranome</a>{' '}
            database compiles available structural and functional information for 
            the complete set of single-pass TM (i.e., bitopic) proteins from six evolutionarily 
            distant organisms. The database provides protein classification, amino acid sequences, 
            topologies, intracellular localizations, domain organization 
            (from UniProtand InterPro), experimentally supported protein-protein 
            interactions (from HINT and APID), protein complexes 
            (from Reactome, Complex Portal, CORUM, 
            and PDB), pathways (from KEGG) experimental 
            (from PDB) and newly modeled 3D structures of bitopic protein domains and 
            protein complexes, mutagenesis data (from MutDB), and links to related bioinformatics 
            resources. The database holds atomic 3D models of full-length bitopic protein monomers 
            from the AlphaFold Protein Structure Database69 that were generated by AF2 and parsed 
            and reassembled in membranes by our software, D-linker 1.0 and PPM 3.0.12 The database 
            also collects FMAP-generated models of single TM α-helices, TMDOCK-generated models of 
            dimers of TM α-helical domains, and a few dozen functional protein complexes calculated 
            by AFM with TMDOCK, which were positioned in the lipid bilayer by PPM 3.0. Membranome 
            also provides tools for advanced search, protein network analysis (1TMnet), and 
            structural visualization (JMol, iCn3D, and GLmol), which facilitates comparative 
            analysis of bitopic proteins. The MembranomeX database, a successor of the Membanome 
            database, will be expanded to contain bitopic proteins from 20 species and several 
            hundred AFM-generated and validated structures of proteins complexes participating 
            in various vital processes.
            </p>

            <p>The <a href={Databases.PERMM}>PerMM</a>{' '}
            (<span className='bold'>Per</span>meability of {' '}
                <span className='bold'>M</span>olecules across {' '}
                <span className='bold'>M</span>embranes) {' '}
                database collects experimental and calculated permeability 
                coefficients obtained for artificial and natural membranes, including 
                BLM, PAMPA, Caco-2/MDCK cells, and BBB supplemented by references 
                and other related data. It currently contains 507 molecules, ranging 
                from small organic compounds to natural products of diverse chemical 
                structures. The database provides downloadable coordinate files and 
                interactive visual information to represent optimal localization and 
                translocation pathways of molecules across the lipid bilayer. Presented 
                data allow assessment of the contribution of the passive diffusion to 
                transport of drugs and other small molecules across biological membranes.
            </p>
        </div>
    );
}

export default Databs;

