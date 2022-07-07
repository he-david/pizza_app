// Components
import InfoDiv from "../components/InfoDiv";

// Icons
import VeganIcon from "../images/VeganIcon"

const Vegan = () => {
    return (
        <InfoDiv imgUrl={<VeganIcon color="black" width="75%" height="75%" />} title={["vegan pizza, just the way", "you like it!"]} description="Our vegan pizzas are made using plant-based ingredients only." />
    );
}

export default Vegan;