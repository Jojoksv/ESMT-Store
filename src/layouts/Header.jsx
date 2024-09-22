import { LuShoppingBag } from "react-icons/lu";
import { Link } from "react-router-dom";
import SearchInput from "../components/UI/SearchInput";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";

const navbarItems = [
    { link: "ordinateurs", item: "Ordinateurs" },
    { link: "vetements", item: "Vêtements" },
    { link: "tablettes", item: "Tablettes" },
    { link: "audio", item: "Audio" },
    { link: "telephones", item: "Téléphones" },
    { link: "tele-et-cinema", item: "TV et home cinema" },
    { link: "promo", item: "Promotions" },
];

const bandItems = [
    { link: "apropos", item: "A propos" },
    { link: "contact", item: "Contact" },
    { link: "avis", item: "Centre d'avis" },
    { link: "tel:+22656146917", item: "+22656146917" },
];

function AnnouncementLink({ link, item }) {
    return <Link to={link}>{item}</Link>;
}

function NavbarLink({ link, item }) {
    return (
        <div className="navbar-item">
            <Link to={link}>{item}</Link>
        </div>
    );
}

function UserControls() {
    return (
        <div className="user-controls">
            <Link className="user-link">
                <IoPersonCircleOutline size={24} /> <span>Connexion</span>
            </Link>
            <Link className="user-link">
                <FaRegHeart size={20} /> <span>Favoris</span>
            </Link>
            <LuShoppingBag size={20} />
        </div>
    );
}

function Header() {
    return (
        <header>
            <div className="announcement-bar">
                <div className="flex items-center gap-2"><BsBoxSeam size={15}/> Livraison gratuite à partir de 50£ d&apos;achat</div>
                <div className="announcement-links">
                    {bandItems.map(({ link, item }) => (
                        <AnnouncementLink key={item} link={link} item={item} />
                    ))}
                </div>
            </div>
            <div className="main-navbar">
                <div className="navbar-header">
                    <div className="brand-search-wrapper">
                        <h1>ESMT StoreTech</h1>
                        <SearchInput className="search-input" placeholder="Rechercher..." />
                    </div>
                    <UserControls />
                </div>
                <nav>
                    <div className="navbar-links">
                        {navbarItems.map(({ link, item }) => (
                            <NavbarLink key={item} link={link} item={item} />
                        ))}
                    </div>
                    <div className="promo-actions">
                        <div>
                            <Link to="decouvrir" className="decouvrir">Découvrez nos offres</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
