import FollowMe from './follow-me'

const Contact = () => {
    return (
        <section id="contact" className="bg-blue flex justify-center items-end pt-16 px-6">
            <div className="nisse2 flex  justify-center">
                <div className="pt-16 p-4">
                    <h3 className="font-bold text-2xl mb-2">Kontakt</h3>
                    <ul className="mb-8">
                        <li>Charley Nordahn</li>
                        <li>61 65 56 64</li>
                        <li>mail@charleynordahn.dk</li>
                    </ul>
                    <h3 className="font-bold text-2xl mb-2">Reference</h3>
                    <ul className="mb-8">
                        <li>Lead Developer</li>
                        <li>Per Bloch Andersen</li>
                        <li>31 12 10 54</li>
                        <li>mail@perrep.dk</li>
                    </ul>
                    <FollowMe />
                </div>
            </div>
        </section>
    );
}

export default Contact;
