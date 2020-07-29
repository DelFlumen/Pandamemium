import React, { useEffect } from 'react';
import classes from './ProfileInfo.module.css';
import { useState } from 'react';


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);
    
    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatusThunkCreator(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    
    

        return (
            <div>
                {!editMode ?
                    <div className={classes.content}>
                        <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>

                    </div>
                    :
                    <div className={classes.content}>
                        <input  onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />

                    </div>
                }
            </div>
        )
    }



export default ProfileStatusWithHooks;