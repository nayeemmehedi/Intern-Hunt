import CompanyDetails from "../components/internShip/Home/CompanyDetails"
import ContactUs from "../components/internShip/Home/ContactUs"
import EarthRound from "../components/internShip/Home/EarthRound"
import JoinPage from "../components/internShip/Home/JoinPage"
import Mission from "../components/internShip/Home/Mission"
import OurService from "../components/internShip/Home/OurService"
import PopularIntern from "../components/internShip/Home/PopulerIntern"
import WorkingStep from "../components/internShip/Home/WorkingStep"

function Home() {
  return (
    <div>
        <EarthRound></EarthRound>
        <PopularIntern></PopularIntern>
        <CompanyDetails></CompanyDetails>
        <JoinPage></JoinPage>
        <OurService></OurService>
        <Mission></Mission>
        <WorkingStep></WorkingStep>
        <ContactUs></ContactUs>
    </div>
  )
}

export default Home