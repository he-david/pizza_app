// Components
import InfoDiv from "../components/InfoDiv";

// Icons
import SaladsIcon from "../images/SaladsIcon";

const Salads = () => {
    return (
        <InfoDiv imgUrl={<SaladsIcon color="black" width="75%" height="75%" />} title={["salads and", "dressings"]} description="With every salad you get the dressing of your choice, packed separately, to let you add it according to your taste" />
    );
}

export default Salads;