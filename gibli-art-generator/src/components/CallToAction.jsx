const CallToAction = ({ onNavigate }) => (
    <div className="py-16">
        <div className="container mx-auto px-8">
            <div className="bg-[#E4D6C8] rounded-2xl p-12 text-center flex flex-col items-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Create Studio Ghibli artwork with AI</h2>
                <p className="text-gray-600 max-w-2xl mb-8">
                    Transform your photos into enchanting Studio Ghibli-style art. Just upload an image—our AI does the magic, turning it into a whimsical masterpiece straight from a Ghibli dream.
                </p>

                <button onClick={() => onNavigate('/create')} className="bg-orange-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-800 transition-transform transform hover:scale-105">
                    Try YumeCraft For Free
                </button>

                {/* <div className="mt-12 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col items-center">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Original</p>
                        <img
                            src="https://cdn.prod.website-files.com/672e2ecfabc225dc52e26a4a/67ee9f4dcc59b8599672fe96_img-Gi1gCQGd2FmSa331W8NNi.webp" // Replace with your actual image path
                            alt="Original"
                            className="rounded-lg shadow-lg max-h-72 object-cover"
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Ghibli AI Generated</p>
                        <img
                            src="/images/sample-ghibli.jpg" // Replace with your actual image path
                            alt="Ghibli Generated"
                            className="rounded-lg shadow-lg max-h-72 object-cover"
                        />
                    </div>
                </div> */}


            </div>
        </div>
    </div>
);

export default CallToAction;