const Logos: React.FC = () => {
    return (
        <section id="logos" className="py-32 px-5 bg-background">
            <p className="text-lg font-medium text-center">From <span className="text-secondary">A1 to B2</span>, you can obtain your language certificate</p>
            <div className="mt-5 w-full flex flex-wrap flex-row items-center justify-evenly gap-5 sm:gap-10 opacity-45 logos-container">
                
                {/* Telx */}
                <img className="w-163 h-48" src="images/Telc.png">
                </img>

                {/* Goethe */}
                <img className="w-163 h-48" src="images/Goethe.png">
                </img>

            </div>
        </section>
    )
}

export default Logos