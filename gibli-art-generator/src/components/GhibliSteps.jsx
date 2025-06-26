import {Image, Palette, Users} from "lucide-react";
import {assets} from "../assets/assets.js";

const GhibliSteps = () => {
    return (
        <div className="rounded-lg flex flex-col lg:flex-row items-center lg:items-start gap-8 container mx-auto px-8 pb-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Photo to Ghibli Art</h2>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
                    Create Ghibli-style art from any photo—just upload and transform.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <div className="p-2 rounded-full mr-3 bg-orange-900/10 text-orange-900">
                            <Image size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 text-md sm:text-lg">Simple Ghibli AI Prompting</h3>
                            <p className="text-gray-600 text-sm">
                                Bring your ideas to life with our Ghibli generator—no art skills needed. Just describe what you imagine, and our AI turns it into magical Ghibli-style art.
                            </p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <div className="p-2 rounded-full mr-3 bg-orange-900/10 text-orange-900">
                            <Palette size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 text-md sm:text-lg">Ghibli Art Style Control</h3>
                            <p className="text-gray-600 text-sm">
                                Pick a Ghibli film—Spirited Away, Howl’s Moving Castle, Totoro, and more—and our AI will create art that matches its unique style.
                            </p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <div className="p-2 rounded-full mr-3 bg-orange-900/10 text-orange-900">
                            <Users size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 text-md sm:text-lg">Ghibli Character Integration</h3>
                            <p className="text-gray-600 text-sm">
                                Our Ghibli AI brings your pets or loved ones into the Ghibli world—keeping their look while adding that magical Ghibli charm
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 rounded-lg overflow-hidden shadow-md">
                <img
                    src={assets.step1}
                    alt="Photo to Ghibli Art Transformation"
                    className="w-full h-full object-cover" 
                />
            </div>
        </div>
    )
}

export default GhibliSteps;