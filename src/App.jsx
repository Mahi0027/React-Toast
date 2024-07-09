import useNotification from "./hooks/useNotification";

function App() {
    const { notificationComponent, triggerNotification } =
        useNotification("top-right");
    return (
        <>
            <div className="w-screen h-screen">
                <div className="w-screen h-screen flex justify-center items-center">
                    <div>
                        <div className="w-screen flex justify-center items-center">
                            <button
                                className="w-1/2 p-5 m-2 border border-gray-700 rounded-md"
                                onClick={() => {
                                    triggerNotification({
                                        type: "success",
                                        message: "Hello User! success",
                                    });
                                }}
                            >
                                Success
                            </button>
                            <button
                                className="w-1/2 p-5 m-2 border border-gray-700 rounded-md"
                                onClick={() => {
                                    triggerNotification({
                                        type: "info",
                                        message: "Hello User! info",
                                    });
                                }}
                            >
                                Info
                            </button>
                        </div>
                        <div className="w-screen flex justify-center items-center">
                            <button
                                className="w-1/2 p-5 m-2 border border-gray-700 rounded-md"
                                onClick={() => {
                                    triggerNotification({
                                        type: "warning",
                                        message: "Hello User! warning",
                                    });
                                }}
                            >
                                Warning
                            </button>
                            <button
                                className="w-1/2 p-5 m-2 border border-gray-700 rounded-md"
                                onClick={() => {
                                    triggerNotification({
                                        type: "error",
                                        message: "Hello User! error",
                                    });
                                }}
                            >
                                Error
                            </button>
                        </div>
                    </div>
                </div>
                {notificationComponent}
            </div>
        </>
    );
}

export default App;
