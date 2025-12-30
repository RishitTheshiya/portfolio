
import { MonitorCog, Database, LayoutTemplate, SquareMousePointer } from 'lucide-react';

export default function Services() {
    const services = [
        {
            name: 'Web design',
            icon: LayoutTemplate,
            description: 'Crafting the visual aesthetics, layout, and overall branding to ensure a website looks professional.',
            link: '#',
        },
        {
            name: 'Frontend',
            icon: MonitorCog,
            description: 'Translating designs into interactive code using HTML, CSS, JavaScript and React for user-facing browser experiences.',
            link: '#',
        },
        {
            name: 'UI/ UX design',
            icon: SquareMousePointer,
            description: 'Enhancing user satisfaction by improving the usability, accessibility, and visual interaction of a digital product.',
            link: '#',
        },
        {
            name: 'Database',
            icon: Database,
            description: 'A structured system for storing, managing, and retrieving organized digital information efficiently.',
            link: '#',
        }
    ];
    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Building sleek, interactive user interfaces with responsive frontend code, seamlessly connected to efficient databases for high-performance and visually stunning websites.</p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <service.icon className="w-12 h-12 bg-pink-500 rounded-md text-white px-2 " />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                        <a href={service.link} className="flex items-center gap-2 text-sm mt-5">Read more <img src="./assets/right-arrow.png" alt="" className="w-4" /></a>
                    </div>
                ))}
            </div>
        </div>
    )
}