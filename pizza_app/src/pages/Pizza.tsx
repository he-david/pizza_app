// Components
import InfoDiv from "../components/InfoDiv";

// Icons
import PizzaIcon from "../images/PizzaIcon"

const Pizza = () => {
    return (
        <InfoDiv imgUrl={<PizzaIcon color="black" width="75%" height="75%" />} title={["pizza, just the way", "you like it!"]} description="Choose your pizza with one of our doughs: Classic, Fitness, Real Italian." />
    );
}

export default Pizza;