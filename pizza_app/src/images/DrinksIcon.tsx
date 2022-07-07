// Types
import { SVGProps } from "./PizzaIcon";

const DrinksIcon: React.FC<SVGProps> = ({ color, width, height }) => {
    return (
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 319.36 319.36" width={width} height={height}>
            <g fill={color}>
                <path d="M238.68,63.642h-23.076l11.418-54.606c0.848-4.055-1.752-8.029-5.806-8.876c-4.054-0.848-8.028,1.752-8.877,5.806
                    l-12.06,57.676H80.68c-4.253,0-7.659,3.537-7.495,7.79l9.294,240.717c0.156,4.026,3.465,7.211,7.495,7.211h139.412
                    c4.03,0,7.339-3.184,7.495-7.211l9.294-240.717C246.339,67.182,242.935,63.642,238.68,63.642z M89.763,112.001l-1.288-33.359
                    h108.668l-6.975,33.359H89.763z M222.17,304.359H97.19l-6.848-177.358h138.676L222.17,304.359z M229.597,112.001h-24.105
                    l6.975-33.359h18.418L229.597,112.001z"/>
                <path d="M112.488,246.994c4.139-0.16,7.365-3.645,7.205-7.784l-2.934-75.999c-0.161-4.14-3.669-7.359-7.784-7.205
                    c-4.139,0.16-7.365,3.645-7.205,7.784l2.934,75.999C104.862,243.866,108.268,247.14,112.488,246.994z"/>
                <path d="M112.913,258.006c-4.139,0.16-7.365,3.645-7.205,7.784l0.271,7c0.158,4.077,3.563,7.351,7.784,7.205
                    c4.139-0.16,7.365-3.645,7.205-7.784l-0.271-7.001C120.537,261.072,117.033,257.859,112.913,258.006z"/>
            </g>
        </svg>
    );
}

export default DrinksIcon;