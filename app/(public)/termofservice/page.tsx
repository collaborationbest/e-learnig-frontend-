import Footer from "../../components/Footer";
import Header from "../../components/Header";

const TermsOfService = () => {
    return (
        <div>
            <Header />
            <section className="w-full flex justify-center mt-[100px]">
                <div className="w-full max-w-7xl flex flex-col justify-center items-center px-2">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <h1 className="lg:text-[3.2rem] md:text-[2rem] text-[1.6rem] font-[system-ui] font-[700] text-center text-[#001F3F]">Terms of Service Page</h1>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default TermsOfService;