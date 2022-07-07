// Components
import InfoDiv from "../components/InfoDiv";

// Icons
import DessertsIcon from "../images/DessertsIcon";

const Desserts = () => {
    return (
        <InfoDiv imgUrl={<DessertsIcon color="black" width="75%" height="75%" />} title={["desserts", ""]} description="Choose our quality home made desserts!." />
    );
}

export default Desserts;