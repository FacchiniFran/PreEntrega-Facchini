import './CategoryButton.css';

export default function CategoryButton({category}) {

    return (
        <>
            <button className='menuButton'>{category}</button>
        </>
    )
}