import CompanySalesTarget from "../DashboardContent/components/CompanySaleTarget"
import CustomerSatisfaction from "../DashboardContent/components/CustomerSatisfactiion"
import Dashboardbox from "../DashboardContent/components/Dashboardbox"
import NumberofClients from "../DashboardContent/components/NumberofClients"
import Operatingepence from "../DashboardContent/components/Operatinexpence"
import Progressbar from "../DashboardContent/components/Progressbar"
import TotalVolueme from "../DashboardContent/components/TotalVolueme"
import Navbar from "../DashboardNav/components/Navbar"
import Settings from "../DashboardNav/components/Settings"


const Dashboardpage = () => {
    return (
        <div className="bg-gray-400 px-28 py-10">
            <div className="bg-custom-radial rounded-xl">
                <Navbar />
                <Settings />
                <div className="flex">
                    <div className="">
                        <div className="flex">
                            <div className="ml-10 mt-5">
                                <TotalVolueme />
                                <NumberofClients />
                                <Dashboardbox />
                            </div>
                            <CustomerSatisfaction />
                        </div>
                        <Operatingepence />
                    </div>
                    <div>
                    <Progressbar />
                    <CompanySalesTarget />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboardpage