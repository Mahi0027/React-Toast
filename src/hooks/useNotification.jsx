import PropTypes from "prop-types";
import { useCallback, useRef, useState } from "react";
import Notification from "../components/Notification";

const style = {
    "top-left": "left-5 top-5",
    "top-right": "right-5 top-5",
    "bottom-left": "left-5 bottom-5",
    "bottom-right": "right-5 bottom-5",
};

const useNotification = (position) => {
    const [notifications, setNotifications] = useState([]);

    const time = useRef(null);
    const counter = useRef(0);

    const triggerNotification = useCallback((data) => {
        counter.current++;
        const newNotification = { ...data, id: counter.current };
        setNotifications((prev) => [...prev, newNotification]);
        time.current = setTimeout(() => {
            setNotifications((prev) =>
                prev.filter(
                    (notification) => notification.id !== newNotification.id
                )
            );
        }, 4000);
    }, []);

    const closeToast = (id) => {
        setNotifications((prev) =>
            prev.filter((notification) => notification.id !== id)
        );
    };

    const notificationComponent = (
        <>
            <div className={`fixed ${style[position]}`}>
                {notifications.map((notification) => (
                    <Notification
                        key={notification.id}
                        {...notification}
                        close={closeToast}
                        counter={notification.id}
                    />
                ))}
            </div>
        </>
    );
    return { notificationComponent, triggerNotification };
};

useNotification.propTypes = {
    position: PropTypes.oneOf([
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right",
    ]),
};
export default useNotification;
