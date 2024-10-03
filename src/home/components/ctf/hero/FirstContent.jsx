const FirstContent = () => {
    return (
        <div className="flex justify-between bg-[#152443] h-screen relative overflow-hidden">
            {/* Overlay Container */}
            <div className="w-full h-full relative">
            <div className="absolute h-[500px] w-[500px] bg-white blur-sm rounded-full bottom-[-50px] left-1/2 transform -translate-x-1/3 border border-yellow-400"></div>
            <img src="/Halloween.png" className="absolute h-full w-full z-20" />
            </div>
            
            
                <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/3 z-30">
                <img src="/pumpkin.png" className=" border border-yellow-400 object-fill h-[350px] w-[400px] " />
                </div>
                


          
            
        </div>
    );
};

export default FirstContent;
