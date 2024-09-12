function ItemListContainer({ greeting }) {

    return (
        <>
            <section className='w-auto p-3 bg-info position-absolute top-50 start-50 translate-middle rounded'>
                <h1 className='text-center text-body-emphasis'>{greeting}</h1>
            </section>
        </>
    )
}

export default ItemListContainer
