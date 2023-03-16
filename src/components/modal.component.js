import PropTypes, { func } from 'prop-types'
import Button from './button.component'


function Modal(props) {
    return (
        <div>
            <div className={`

            
            fixed top-0 left-0 w-full items-center justify-center bg-black bg-opacity-50 h-screen`
            }>

                <div className={'w-2/4 h-3/4 mx-auto bg-white rounded-xl'}>
                    <Button
                        htmlType={'button'}
                        type={'default'}
                        onClick={props.onChange}
                    >
                        Close Modal
                    </Button>
                </div>
            </div>

        </div>
    )
}

Modal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
}

Modal.defaultProps = {
    visible: false,
    onChange: function () {

    }
}