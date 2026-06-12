import { Link, Locate, Mail } from "lucide-react"

const DemoCard = () => {
    return(
        <div className='bg-card w-2/3 h-2/3 rounded-4xl'>
            <div className="flex gap-1 p-4 bg-gray-200 border border-gray-400 rounded-t-4xl">
                <span className="w-3 h-3 rounded-full bg-red-500"/>
                <span className="w-3 h-3 rounded-full bg-yellow-500"/>
                <span className="w-3 h-3 rounded-full bg-green-500"/>
            </div>

            <div className="flex flex-col px-8 gap-4">
                <div className="py-4 flex flex-col gap-2 border-b-3 border-blue">
                    <h4 className="text-black text-3xl font-bold"> Harmeet Singh </h4>
                    <p className="text-blue mb-1"> Junior Full Stack Developer </p>

                    <div className="flex gap-3 text-xs items-center text-gray-600">
                        <span className="flex items-center gap-1"> <Mail size={15}/> harmeet@singh.com </span>
                        <span className="flex items-center gap-1"> <Locate size={15}/> India </span>
                        <span className="flex items-center gap-1 hidden lg:flex"> <Link size={15}/> linkedin/harmeet </span>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="text-xs font-bold text-blue"> PROFILE </h4>
                    <div className="flex flex-col gap-1">
                        <div className="bg-gray-400 w-full h-2 rounded-full"/>
                        <div className="bg-gray-300 w-3/4 h-2 rounded-full"/>
                        <div className="bg-gray-200 w-2/3 h-2 rounded-full"/>
                    </div>
                    
                    <h4 className="text-xs font-bold text-blue"> EXPERIENCE </h4>
                    <div className="flex flex-col gap-1">
                        <div className="bg-gray-300 w-3/4 h-2 rounded-full"/>
                        <div className="bg-gray-400 w-full h-2 rounded-full"/>
                        <div className="bg-gray-200 w-2/3 h-2 rounded-full"/>
                    </div>
                    
                    <h4 className="text-xs font-bold text-blue"> SKILLS </h4>
                    <div className="flex flex-col gap-1">
                        <div className="bg-gray-200 w-2/3 h-2 rounded-full"/>
                        <div className="bg-gray-300 w-3/4 h-2 rounded-full"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DemoCard