import React from 'react';
import classes from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        
        this.setState({
            editMode: false
        });
        this.props.updateStatusThunkCreator(this.state.status)
        
    }

    onStatusChange = (e) => {
        
        
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.satus
            });
        }
    }


    render() {

        return (
            <div>
                {!this.state.editMode ?
                    <div className={classes.content}>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</span>

                    </div>
                    :
                    <div className={classes.content}>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />

                    </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;