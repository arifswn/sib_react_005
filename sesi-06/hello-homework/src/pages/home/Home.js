import { Container } from "react-bootstrap"
import MeetUp from "./MeetUp"
import NextMeetUp from "./NextMeetUp"
import AboutMeetUp from "./AboutMeetUp"
import Members from "./Members"
import PastMeetUp from "./PastMeetUp"

const Home = () => {
  return (
    <>
      <Container className="mt-3">
        <MeetUp />
        <NextMeetUp />
        <AboutMeetUp />
        <Members />
        <PastMeetUp />
      </Container>
    </>
  )
}

export default Home
