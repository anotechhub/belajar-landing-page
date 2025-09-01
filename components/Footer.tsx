
import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-stone-800 text-stone-300">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex justify-center space-x-6 md:order-2">
                         {/* Social links can be added here */}
                    </div>
                    <div className="mt-8 md:mt-0 md:order-1">
                        <p className="text-center text-base">
                            &copy; {currentYear} KurmaPrime. All rights reserved.
                        </p>
                        <p className="text-center text-sm text-stone-400 mt-2">
                            Dibuat dengan ❤️ untuk para penikmat kurma.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
