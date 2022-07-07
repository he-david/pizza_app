// Components
import InfoDiv from "../components/InfoDiv";

// Icons
import ExtrasIcon from "../images/ExtrasIcon";

const Extras = () => {
    return (
        <InfoDiv imgUrl={<ExtrasIcon color="black" width="75%" height="75%" />} title={["spicy and hot", "extras"]} description="We have some extras for your food. Choose a little spice or hot for them!" />
    );
}

export default Extras;