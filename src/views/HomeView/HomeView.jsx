import NavBar from '../../components/NavBar.jsx';
import ItemListContainer from '../../components/ItemListContainer.jsx';

export default function HomeView() {
    return (
        <>
            <NavBar />
            <ItemListContainer greeting='Bienvenidos a Mana Gamers E-Shop' />
        </>
    )
}