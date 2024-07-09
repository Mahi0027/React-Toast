import PropTypes from "prop-types";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { CiWarning } from "react-icons/ci";
import { MdErrorOutline } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const icons = {
    success: <FaCheckCircle />,
    info: <FaInfoCircle />,
    warning: <CiWarning />,
    error: <MdErrorOutline />,
};

const bgStyle = {
    success: "bg-green-400",
    info: "bg-blue-400",
    warning: "bg-yellow-400",
    error: "bg-red-400",
};
const Notification = ({ type, message, counter, close = () => {} }) => {
    return (
        <div
            className={`max-w-screen-lg w-96 border rounded-md m-3 ${bgStyle[type]} text-white p-2 flex justify-between items-center`}
        >
            <div className="flex justify-start items-center">
                <div className="text-2xl mx-2">{icons[type]}</div>
                <div className="text-xl mx-2">{message}</div>
            </div>
            <div
                className="text-2xl mx-2 cursor-pointer hover:scale-110 transition-all transform"
                onClick={() => close(counter)}
            >
                <RxCross2 />
            </div>
        </div>
    );
};

Notification.propTypes = {
    type: PropTypes.oneOf(["success", "info", "warning", "error"]),
    message: PropTypes.string,
    counter: PropTypes.number,
    close: PropTypes.func,
};

export default Notification;
