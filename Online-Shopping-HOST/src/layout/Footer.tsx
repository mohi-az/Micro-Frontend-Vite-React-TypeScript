import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faCcMastercard, faCcVisa, faCcAmazonPay, faCcPaypal, faCcApplePay, faCcDiscover } from "@fortawesome/free-brands-svg-icons"
export const Footer = () => {


    return (
        <div className="h-72 flex flex-col justify-center mt-16">
            <div className="flex flex-row gap-5 justify-center p-4 bg-gray-200">
                <FontAwesomeIcon icon={faCcAmazonPay} size="3x" color="#0b7064" />
                <FontAwesomeIcon icon={faCcMastercard} size="3x" color="#0b7064" />
                <FontAwesomeIcon icon={faCcVisa} size="3x" color="#0b7064" />
                <FontAwesomeIcon icon={faCcPaypal} size="3x" color="#0b7064" />
                <FontAwesomeIcon icon={faCcApplePay} size="3x" color="#0b7064" />
                <FontAwesomeIcon icon={faCcDiscover} size="3x" color="#0b7064" />
            </div>
            <div className="h-72 bg-gray-400 flex flex-col justify-center">
                <div className="flex flex-row pb-4 gap-4  w-full justify-center">
                    <FontAwesomeIcon icon={faFacebook} size="2xl" color="#3B5998" />
                    <FontAwesomeIcon icon={faInstagram} size="2xl" color="#E34A85" />
                </div>
                <span className="text-center">
                    * All prices incl. statutory. VAT plus shipping costs and, if applicable, cash on delivery fees, unless otherwise stated.
                </span>
            </div>
        </div>
    )
}
