import { Eye, Check, File, Zap } from "lucide-react"

const WhyCard = () => {
    const data = [
        {
            logo: Eye,
            name: 'Live Preview',
            details: 'See every change reflected instantly as you type — no save, no reload.',
            color: 'black',
            fill: 'white'
        },

        {
            logo: Check,
            name: 'ATS Optimized',
            details: 'Our templates are tested against leading ATS software to ensure 100% readability.',
            color: 'red',
            fill: 'none'
        },

        {
            logo: File,
            name: 'PDF Export',
            details: 'Download a pixel-perfect PDF ready to send to any employer, instantly.',
            color: 'black',
            fill: 'white'
        },

        {
            logo: Zap,
            name: 'Fast & Easy',
            details: 'Fill in your details in under 10 minutes. Our smart form guides you through every step.',
            color: 'white',
            fill: 'orange'
        }

    ]
    return(
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {
                data.map((dt, index) => (
                    <div key={index} className="p-4 flex flex-col gap-2 border rounded-xl border-gray-600 bg-background">
                        <dt.logo size={40} fill={dt.fill} className={`text-${dt.color}`}/>
                        <h4 className="font-bold text-lg"> {dt.name} </h4>
                        <p className="text-foreground/40"> {dt.details} </p>
                    </div>
                ))
            }
        </div>
    )
}

export default WhyCard