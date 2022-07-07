// Components
import InfoDiv from "../components/InfoDiv";

// Icons
import PizzeppaIcon from "../images/PizzeppaIcon";

const Pizzeppa = () => {
    return (
        <InfoDiv imgUrl={<PizzeppaIcon color="black" width="75%" height="75%" />} title={["pizzeppa, just the way", "you like it!"]} description="Folded 32cm pizza! Based on authentic Italian recipe, hand-rolled to make it thin and crispy." />
    );
}

export default Pizzeppa;