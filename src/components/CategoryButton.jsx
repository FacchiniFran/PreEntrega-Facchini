import './CategoryButton.css'

function CategoryButton({category}) {

    return (
        <>
            <button className='menuButton'>{category}</button>
        </>
    )
}

export default CategoryButton
