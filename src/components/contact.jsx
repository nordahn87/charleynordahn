import FollowMe from './follow-me'

const Contact = () => {
    return (
        <section id="kontakt" className="bg-blue flex justify-center items-end pt-16 px-6">
            <div className="point-shape-up flex  justify-center">
                <div className="pt-16 p-4">
                    <h3 className="font-bold text-2xl mb-2">Kontakt</h3>
                    <ul className="mb-8">
                        <li>Charley Nordahn</li>
                        <li><a href="tel:+4561655664" title="">61 65 56 64</a></li>
                        <li>mail@charleynordahn.dk</li>
                    </ul>
                    <h3 className="font-bold text-2xl mb-2">Reference</h3>
                    <ul className="mb-8">
                        <li>Lead Developer</li>
                        <li>Per Bloch Andersen</li>
                        <li><a href="tel:+4531121054" title="">31 12 10 54</a></li>
                        <li>mail@perrep.dk</li>
                    </ul>
                    <FollowMe />
                </div>
            </div>
        </section>
    );
}

export default Contact;
