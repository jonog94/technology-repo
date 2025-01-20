const Room = () => {
    return (
        <div className="min-h-screen bg-blue-500 flex flex-col p-6">
            <div className="w-full bg-white rounded-lg shadow-md p-6">
                <i className="fas fa-home"></i>
                <i className="far fa-clock"></i>
                <i className="fab fa-github"></i>
            </div>
            <div className="flex flex-grow mt-4">
                <div className="w-3/5 bg-white rounded-lg shadow-md p-6 mr-2"></div>
                <div className="w-2/5 bg-white rounded-lg shadow-md p-6 ml-2"></div>
            </div>
        </div>
    );
};

export default Room;