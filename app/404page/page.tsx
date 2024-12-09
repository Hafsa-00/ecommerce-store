import Link from "next/link";
import Image from "next/image";

export default function ErrorPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Background Section */}
            <div
                className="w-full bg-no-repeat bg-center flex justify-center bg-cover"
                style={{
                    backgroundImage: "url('/unsplash.png')",
                    height: "300px", // Use fixed height
                }}
            >
                {/* Header Section */}
                <div className="w-full max-w-5xl flex flex-col justify-center items-center text-white mb-10">
                    <p className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">404 Error</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
                        <p className="text-xl sm:text-2xl md:text-3xl text-[20px]">Home</p>
                        <div className="flex items-center">
                            <Image
                                src="/Vector.png"
                                width={10}
                                height={10}
                                alt="Arrow Icon pointing to 404 error" // Improved alt text
                            />
                            <p className="ml-2 text-xl sm:text-2xl md:text-3xl text-[#FF9F0D] text-[20px]">404</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Signup Form Section */}
            <section className="p-10 relative bg-white pt-36 flex flex-col items-center">
                <div className="w-[630px] text-center">
                    <h3 className="text-[96px] font-bold text-[#FF9F0D] mb-6">404</h3>
                    <p className="font-bold text-[32px] mb-4">
                        Oops! Looks like something went wrong
                    </p>
                    <p className="text-[18px] mb-4">
                        Page cannot be found! We’ll have it figured out in no time.
                    </p>
                    <p className="text-[18px] mb-6">
                        Meanwhile, check out these fresh ideas:
                    </p>
                    {/* Button */}
                    <Link href="/">
                        <button className="bg-[#FF9F0D] text-white text-[18px] font-bold px-6 py-2 rounded hover:bg-[#e8890b]">
                            Go Back to Home
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}