import PropTypes from 'prop-types';

const Job = ({job}) => {
    console.log(job);
    const {logo} = job;
    return (
        <div>
            <img src={logo} alt="" />
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object
}

export default Job;