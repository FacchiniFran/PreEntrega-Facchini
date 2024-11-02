import './CheckoutForm.css';

export default function CheckoutForm({ formData, setFormData }) {

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <>
            <h1 className='formTitle'>Formulario de Cliente</h1>
            <form className='checkForm'>
                <label for="Name">Nombre/s :</label>
                <input type="text" id="name" name="name" placeholder={"Juan"} value={formData.name} onChange={handleChange} required />
                <label for="lastName">Apellido/s :</label>
                <input type="text" id="lastName" name="lastName" placeholder={"Perez"} value={formData.lastName} onChange={handleChange} required />
                <label for="phone">Teléfono :</label>
                <input type="tel" id="phone" name="phone" placeholder="011-3013-3100" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" value={formData.phone} onChange={handleChange} required />
                <label for="email">E-Mail :</label>
                <input type="email" name="email" value={formData.email} placeholder={"ejemplo@gmail.com"} onChange={handleChange} required />
                <label for="emailV">Confirme su E-Mail :</label>
                <input type="emailV" name="emailV" value={formData.emailV} placeholder={"ejemplo@gmail.com"} onChange={handleChange} required />
            </form>
        </>
    )
}