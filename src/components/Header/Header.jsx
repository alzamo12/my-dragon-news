import logo from "../../assets/logo.png"
import { format } from "date-fns";
const Header = () => {
    const date = Date().toString().split(" ").slice(0, 4);
    console.log(date)
    return (
        <div className="card-body items-center justify-center">
            <img src={logo} alt="" />
            <p className="text-light-gray text-base">Journalism Without Fear or Favour</p>
            <h2 className="card-title text-lg">{date.map(item => <span>{item}</span>)}</h2>
            <h2 className="card-title text-lg">{format(new Date(), "eeee',' MMMM d',' yyyy")}</h2>
        </div>
    );
};

export default Header;