import style from './Student.module.css';
import PropTypes from 'prop-types';

function Student(props) {

    return(
        <div className = {style.student}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

// It gurantees the type of the props.
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

// It assign the default value.
Student.defaultProps = {
    name: "Guest",
    age:0,
    isStudent: false,
}

export default Student;