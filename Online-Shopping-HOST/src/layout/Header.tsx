import { Link } from "react-router-dom";
import Logo from '../assets/Logo.png'
import { faTruckFast, faMoneyBillTransfer, faPhoneVolume, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from "react";
import { Modal } from "../Components/Modal/modal";

type MenuItems = {
    title: string,
    url: string
}
const Header = () => {
    const menuItems: MenuItems[] = [{ title: 'PRODUCTS', url: '/' }];

    const [showLogin, setshowLogin] = useState(false);
    const [htmlContent, setHtmlContent] = useState<HTMLElement | null>(null);
    const [loginStatus, setLoginStatus] = useState('Loading login…');

    const userClick = () => {
            setshowLogin(true)
    }
    useEffect(() => {
        if (!showLogin) return;
        let active = true;
        setLoginStatus('Loading login…');
        import('AuthRemote/Login')
            .then(module => {
                const Login = module.Login ?? module.default.Login;
                if (!Login) throw new Error('Auth remote does not expose Login');
                if (active) {
                    setHtmlContent(Login());
                    setLoginStatus('');
                }
            })
            .catch(() => {
                if (active) setLoginStatus('The auth remote is unavailable. Start Auth-Remote on port 5002.');
            });
        return () => { active = false; };
    }, [showLogin]);
    return (
        <div className="w-full">
   
            {showLogin && <Modal visible={showLogin} invisible={setshowLogin} title="Login demo" content={htmlContent} message={loginStatus} />}
            <div className="w-full  flex flex-row gap-5 justify-end pt-4 -mb-9 pr-12 text-sm text-gray-700">
                <button type="button" onClick={userClick} aria-label="Open login demo">
                    <FontAwesomeIcon icon={faUserAlt} size="2x" />
                </button>
            </div>

            <div className="flex flex-row items-end pl-10 pr-10">
                <img src={Logo} alt="Bike shop demo logo" width={"150px"} />
                <div className="flex flex-row pl-10  ">
                    {
                        menuItems.map(item => <li key={item.url} className="list-none pl-5 pr-5 " > <Link to={item.url} className="text-gray-700 no-underline font-bold hover:text-teal-500" >{item.title}</Link ></li>)
                    }
                </div>
            </div>
            <div className=" h-12 mt-2 flex flex-row">
                <div className="h-full bg-teal-400 w-1/3 flex  justify-center items-center"><FontAwesomeIcon icon={faTruckFast} size="2x" color="white" /><span className="text-slate-50 pl-2 font-bold">FREE SHIPPING & RETURN</span></div>
                <div className="h-full bg-teal-500 w-1/3 flex  justify-center items-center"><FontAwesomeIcon icon={faMoneyBillTransfer} size="2x" color="white" /><span className="text-slate-50 pl-2 font-bold">30-DAY RETURN POLICY</span></div>
                <div className="h-full bg-teal-500 w-1/3 flex  justify-center items-center"><FontAwesomeIcon icon={faPhoneVolume} size="2x" color="white" /><span className="text-slate-50 pl-2 font-bold">ONLINE SUPPORT 24</span></div>
            </div>
            <div>
            </div>
        </div>
    )
}
export default Header;
