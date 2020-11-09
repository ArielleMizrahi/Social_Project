import React, {Fragment} from 'react';
import CommDescription from './commDescription/commDescription';
import CommTable from './commTable/commTable';
import {useParams} from 'react-router-dom';
import {committeesConfig} from "../MainCommitteesPage/committeesConfig";


const CommiteesWin = () => {

    const {type} = useParams();
    const committeeData = committeesConfig.find(({paramKey}) => paramKey === type);

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <CommDescription commItem={committeeData}/>
                </div>

                <div className="row">
                    <CommTable/>
                </div>
            </div>
        </Fragment>
    );
};

export default CommiteesWin;
