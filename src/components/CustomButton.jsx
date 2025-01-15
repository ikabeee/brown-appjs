
import PropTypes from 'prop-types';

export default function CustomButton({ type = 'button', onClick, children }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className="w-full bg-[#6B2009] hover:bg-[#6B3F09] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
        >
            {children}
        </button>
    );
}

CustomButton.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

CustomButton.defaultProps = {
    type: 'button',
    onClick: undefined,
};
