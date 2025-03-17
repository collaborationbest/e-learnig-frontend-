import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Privacy = () => {
    return (
        <>
            <Header />
            <div className="w-full flex justify-center items-center flex-col lg:px-16 md:px-8 sm:px-4 px-2 mt-[100px]">
                <div className="w-full flex flex-col justify-center items-center">
                    <h1 className="lg:text-[3.2rem] md:text-[2rem] text-[1.6rem] font-[system-ui] font-[700] text-center text-[#001F3F]">Privacy Policy Page</h1>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Privacy;