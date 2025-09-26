function SectionHeader({ icon = "", title = "", description = "", badges = [] }) {
    return (
        <div className="section-header text-center mb-10">
            {
                icon && (
                    <div className="section-header-icon text-4xl mb-5 text-blue-700">
                        <i className={icon}></i>
                    </div>
                )
            }
            <h2 className="font-bold m-3 text-3xl">{title}</h2>
            <p className="md:max-w-[750px] md:mx-auto text-black/70 font-semibold">{description}</p>
            {
                badges.length > 0 && (
                    <ul className="flex items-center justify-center gap-3 mt-5">
                        {
                            badges.map((badge, index) => (<li key={index} className="py-2 px-4 rounded-full border border-gray-200">{badge}</li>))
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default SectionHeader;