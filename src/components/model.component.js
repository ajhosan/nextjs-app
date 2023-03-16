import PropTypes, { func } from 'prop-types'


function Modal(props) {
    return (
        <div>
        </div>
    )
}

Modal.propTypes = {
    htmlType: PropTypes.oneOf.bool.isRequired,
    onChange: PropTypes.func.isRequired
}

Modal.defaultProps = {
    visible: false,
    onChange: function () {

    }
}