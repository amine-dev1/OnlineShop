import { useState } from 'react';
import colors from './../styles/Colors';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
        // Ajoutez votre logique d'inscription ici
    };

    return (
            <div 
            className="flex min-h-screen p-4 font-['Satoshi'] justify-center lg:justify-end items-center"
            style={{ backgroundColor: '#F5F5F5' }}
            >
            <div
                className="w-full max-w-md md:max-w-xl lg:max-w-2xl mx-auto p-8 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-[1.01]"
                style={{ backgroundColor: colors.offWhite, color: colors.navyPeony }}
            >   <div className='flex justify-center'>
                    <a href="/" className="block w-fit mb-6">
                        <img 
                            
                            alt="Logo"
                            className="h-10 w-auto hover:opacity-90 transition duration-300"
                        />
                    </a>
                </div>
                <h2 className="text-4xl font-extrabold text-center mb-6" style={{ color: colors.saffron }}>
                    Créer votre compte
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Prénom et Nom de famille */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium mb-1" style={{ color: colors.navyPeony }}>Prénom</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Entrez votre prénom"
                                className="w-full p-3 rounded-lg border-2 focus:ring-2 focus:ring-offset-2 transition-all duration-200"
                                style={{
                                    backgroundColor: colors.offWhite,
                                    borderColor: colors.warmGray,
                                    color: colors.navyPeony,
                                    caretColor: colors.coralPink,
                                    '--tw-ring-color': colors.coralPink,
                                    '--tw-ring-offset-color': colors.offWhite
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium mb-1" style={{ color: colors.navyPeony }}>Nom</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Entrez votre nom"
                                className="w-full p-3 rounded-lg border-2 focus:ring-2 focus:ring-offset-2 transition-all duration-200"
                                style={{
                                    backgroundColor: colors.offWhite,
                                    borderColor: colors.warmGray,
                                    color: colors.navyPeony,
                                    caretColor: colors.coralPink,
                                    '--tw-ring-color': colors.coralPink,
                                    '--tw-ring-offset-color': colors.offWhite
                                }}
                            />
                        </div>
                    </div>

                    {/* Email et Mot de passe */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: colors.navyPeony }}>Adresse email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Entrez votre adresse email"
                                className="w-full p-3 rounded-lg border-2 focus:ring-2 focus:ring-offset-2 transition-all duration-200"
                                style={{
                                    backgroundColor: colors.offWhite,
                                    borderColor: colors.warmGray,
                                    color: colors.navyPeony,
                                    caretColor: colors.coralPink,
                                    '--tw-ring-color': colors.coralPink,
                                    '--tw-ring-offset-color': colors.offWhite
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium mb-1" style={{ color: colors.navyPeony }}>Mot de passe</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Créez un mot de passe"
                                className="w-full p-3 rounded-lg border-2 focus:ring-2 focus:border-0 focus:ring-offset-2 transition-all duration-200"
                                style={{
                                    backgroundColor: colors.offWhite,
                                    borderColor: colors.warmGray,
                                    color: colors.navyPeony,
                                    caretColor: colors.coralPink,
                                    '--tw-ring-color': colors.coralPink,
                                    '--tw-ring-offset-color': colors.offWhite
                                }}
                            />
                        </div>
                    </div>

                    {/* Numéro de téléphone */}
                    <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1" style={{ color: colors.navyPeony }}>Numéro de téléphone</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Entrez votre numéro de téléphone"
                            className="w-full p-3 rounded-lg border-2 focus:ring-2 focus:ring-offset-2 transition-all duration-200"
                            style={{
                                backgroundColor: colors.offWhite,
                                borderColor: colors.warmGray,
                                color: colors.navyPeony,
                                caretColor: colors.coralPink,
                                '--tw-ring-color': colors.coralPink,
                                '--tw-ring-offset-color': colors.offWhite
                            }}
                        />
                    </div>

                    {/* Bouton d'inscription */}
                    <button
                        type="submit"
                        className="cursor-pointer w-full py-3 mt-4 rounded-lg font-bold text-white transition-all duration-200 transform-gpu hover:scale-105"
                        style={{ backgroundColor: colors.coralPink }}
                    >
                        S'inscrire
                    </button>

                    <div className="text-center mt-4">
                        <a href="/login" className="text-sm transition-all duration-200 hover:text-[#FF6F61]" style={{ color: colors.navyPeony }}>
                            Avez-vous déjà un compte ? <span className="underline font-bold" style={{ color: colors.coralPink }}>Se connecter</span>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;