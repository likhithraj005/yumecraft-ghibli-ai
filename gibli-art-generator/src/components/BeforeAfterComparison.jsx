// import step7 from '../assets/step7.png';
// import step8 from '../assets/step8.png';
import grid01 from '../assets/grid-01.jpeg';
import grid09 from '../assets/grid-09.jpeg';
import { Link } from "react-router-dom";



const BeforeAfterComparison = () => {
    return (
        <div className="bg-[#1E1E2F] rounded-2xl p-6 sm:p-8 max-w-5xl mx-auto mt-12 text-white">
            <div className="flex justify-between text-sm sm:text-base font-semibold px-2 sm:px-4 mb-2">
                <span>Before</span>
                <span>After</span>
            </div>
            <div className="relative rounded-xl overflow-hidden flex items-center justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 w-full">
                    {/* <img
                        src="https://cdn.prod.website-files.com/672e2ecfabc225dc52e26a4a/67ee9f4dcc59b8599672fe96_img-Gi1gCQGd2FmSa331W8NNi.webp"
                        alt="Before"
                        className="object-cover w-full h-full max-h-[450px]"
                    />
                    <img
                        src="https://your-ghibli-image-url.com/sample-ghibli.jpg"
                        alt="After"
                        className="object-cover w-full h-full max-h-[450px]"
                    /> */}

                    {/* <img
                        src={step7}
                        alt="Before"
                        className="object-cover w-full h-full max-h-[450px]"
                    />
                    <img
                        src={step8}
                        alt="After"
                        className="object-cover w-full h-full max-h-[450px]"
                    /> */}

                    {/* <img src={grid09} alt="Before" />
                    <img src={grid01} alt="After" /> */}

                    <div className="w-full h-[450px] overflow-hidden">
                        <img
                            src={grid09}
                            alt="Before"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full h-[450px] overflow-hidden">
                        <img
                            src={grid01}
                            alt="After"
                            className="w-full h-full object-cover"
                        />
                    </div>


                </div>

                {/* Center Arrow */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <Link to="/create">
                        <div className="bg-[#2C2C3C] text-white rounded-full p-2 shadow-lg">
                            <span className="text-lg">→</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BeforeAfterComparison;
