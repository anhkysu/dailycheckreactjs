import React, { Component } from 'react';
import { Col, Grid, Row, SplitButton, DropdownButton } from 'react-bootstrap';

import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './Header.css'
import './HeaderResponsive.css'
import './SVGIcon.css'

const useStyles = makeStyles(theme => ({

    formControl: {
        margin: theme.spacing(1),
        minWidth: 60,
    },

}));


const SampleFab = () => {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        age: '',
        name: 'hai',
    });

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);


    function handleChange(event) {
        setValues(oldValues => ({
            ...oldValues,
            [event.target.name]: event.target.value,
        }));
    }

    return (
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="filled-age-simple">
                    LANG
                </InputLabel>
                <Select
                    value={values.age}
                    onChange={handleChange}
                    input={<FilledInput name="age" id="filled-age-native-simple" />}
                >
                    <MenuItem value={10}>EN</MenuItem>
                    <MenuItem value={20}>VN</MenuItem>
                    <MenuItem value={30}>JP</MenuItem>
                </Select>
            </FormControl>
        );
}

export class Header extends Component {
    displayName = Header.name




    render() {
        

        return (
            <div className="pageHeader">
                
                <Row>
                    <Col xs={9} md={5}>
                        <div className="companyLogo">
                            <img src="resources/logo.png" alt="Smiley face" width="60" height="60"></img>
                            <h3>IDEA TECHNOLOGY SOLUTION JSC</h3>
                        </div>
                    </Col>

                    <Col xs={3} md={7}>
                        <div className="navigationBar">

                            <SampleFab></SampleFab>
                            <DropdownButton
                                bsStyle="primary"
                                title="LANG"
                                key="LANG"
                                id="dropdown-basic-lang"
                            >
                                <MenuItem eventKey="1">VI</MenuItem>
                                <MenuItem eventKey="2">EN</MenuItem>
                                <MenuItem eventKey="2">JP</MenuItem>
                            </DropdownButton>

                             <nav>
                                <ul>
                                    <li>
                                        <button className="hamButton">
                                            <svg class="svg-icon" viewBox="0 0 20 20">
	                                            <path fill="none" d="M7.228,11.464H1.996c-0.723,0-1.308,0.587-1.308,1.309v5.232c0,0.722,0.585,1.308,1.308,1.308h5.232
		                                            c0.723,0,1.308-0.586,1.308-1.308v-5.232C8.536,12.051,7.95,11.464,7.228,11.464z M7.228,17.351c0,0.361-0.293,0.654-0.654,0.654
		                                            H2.649c-0.361,0-0.654-0.293-0.654-0.654v-3.924c0-0.361,0.292-0.654,0.654-0.654h3.924c0.361,0,0.654,0.293,0.654,0.654V17.351z
		                                             M17.692,11.464H12.46c-0.723,0-1.308,0.587-1.308,1.309v5.232c0,0.722,0.585,1.308,1.308,1.308h5.232
		                                            c0.722,0,1.308-0.586,1.308-1.308v-5.232C19,12.051,18.414,11.464,17.692,11.464z M17.692,17.351c0,0.361-0.293,0.654-0.654,0.654
		                                            h-3.924c-0.361,0-0.654-0.293-0.654-0.654v-3.924c0-0.361,0.293-0.654,0.654-0.654h3.924c0.361,0,0.654,0.293,0.654,0.654V17.351z
		                                             M7.228,1H1.996C1.273,1,0.688,1.585,0.688,2.308V7.54c0,0.723,0.585,1.308,1.308,1.308h5.232c0.723,0,1.308-0.585,1.308-1.308
		                                            V2.308C8.536,1.585,7.95,1,7.228,1z M7.228,6.886c0,0.361-0.293,0.654-0.654,0.654H2.649c-0.361,0-0.654-0.292-0.654-0.654V2.962
		                                            c0-0.361,0.292-0.654,0.654-0.654h3.924c0.361,0,0.654,0.292,0.654,0.654V6.886z M17.692,1H12.46c-0.723,0-1.308,0.585-1.308,1.308
		                                            V7.54c0,0.723,0.585,1.308,1.308,1.308h5.232C18.414,8.848,19,8.263,19,7.54V2.308C19,1.585,18.414,1,17.692,1z M17.692,6.886
		                                            c0,0.361-0.293,0.654-0.654,0.654h-3.924c-0.361,0-0.654-0.292-0.654-0.654V2.962c0-0.361,0.293-0.654,0.654-0.654h3.924
		                                            c0.361,0,0.654,0.292,0.654,0.654V6.886z"></path>
                                            </svg>
                                        </button>
                                    </li>
                                    <li><button className="langButton">LANG</button></li>
                                    <li><a href="#opportunities">Opportunities</a></li>
                                    <li><a href="#news">News</a></li>
                                    <li><a href="#education">Education</a></li>
                                    <li><a href="#rd">R&D</a></li>
                                    <li><a href="#cadcamcae">Cad/Cam/Cae</a></li>
                                    <li><a href="#aboutus">About us</a></li>
                                    <li><a href="#home">Home</a></li>
                                </ul>
                            </nav> 
                        </div>
                    </Col>

                </Row>
                
                {/*
                 */}
            </div>
        );
    }
}

