// Components
import InfoDiv from "../components/InfoDiv";

// Icons
import DrinksIcon from "../images/DrinksIcon";

const Drinks = () => {
    return (
        <InfoDiv imgUrl={<DrinksIcon color="black" width="75%" height="75%" />} title={["drinks", ""]} description="Choose a drink to your food!" />
    );
}

export default Drinks;