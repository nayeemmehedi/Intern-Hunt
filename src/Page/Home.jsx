import EarthRound from '../components/Home/EarthRound'
import PopularIntern from '../components/Home/PopulerIntern'
import CompanyDetails from '../components/Home/CompanyDetails'
import JoinPage from '../components/Home/JoinPage'
import OurService from '../components/Home/OurService'
import Mission from '../components/Home/Mission'
import WorkingStep from '../components/Home/WorkingStep'
import ContactUs from '../components/Home/ContactUs'

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