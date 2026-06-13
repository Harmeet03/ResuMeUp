import { useNavigate } from "react-router-dom"

const TemplateCard = () => {
    const to = useNavigate()

    return(
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-8 w-full">
            <div className='flex flex-col w-full sm:w-1/2 hover:cursor-pointer rounded-2xl hover:scale-102 duration:200 transition'>
                <div className='flex flex-col gap-4 bg-card/95 rounded-t-2xl px-8 py-4 pb-20'>
                    <div className="bg-black/70 py-4 px-2 rounded-xl flex flex-col gap-2">
                        <div className="bg-white w-1/3 h-3 rounded-full"/>
                        <div className="bg-gray-400 w-1/4 h-1 rounded-full"/>
                    </div>   

                    <div className="flex flex-col gap-1 text-black font-bold text-xs">
                        <h4> EXPERIENCE </h4>
                        <div className="bg-gray-300 w-full h-1 rounded-full"/>
                        <div className="bg-gray-200 w-1/2 h-1 rounded-full"/>
                    </div>

                    <div className="flex flex-col gap-1 text-black font-bold text-xs">
                        <h4> EDUCATION </h4>
                        <div className="bg-gray-300 w-full h-1 rounded-full"/>
                        <div className="bg-gray-200 w-1/2 h-1 rounded-full"/>
                    </div>
                    
                    <div className="flex flex-col gap-1 text-black font-bold text-xs">
                        <h4> SKILLS </h4>
                        <div className="bg-gray-300 w-full h-1 rounded-full"/>
                        <div className="bg-gray-200 w-1/2 h-1 rounded-full"/>
                    </div>
                </div>

                <hr/>
                
                <div className="flex justify-around py-4 items-center text-black bg-card rounded-b-2xl">
                    <h4 className="font-bold text-blue"> Professional </h4>
                    <button onClick={() => to('/sign-in')} className="bg-blue text-white cursor-pointer rounded-xl p-2"> Use Template </button>
                </div>
            </div>
            
            <div className='flex flex-col w-full sm:w-1/2 bg-card rounded-2xl hover:cursor-pointer rounded-2xl hover:scale-102 duration:200 transition'>
                <div className='flex flex-col gap-4 px-8 py-4 mb-16'>
                    <div className="py-4 px-2 rounded-xl flex flex-col gap-2">
                        <div className="bg-black w-1/3 h-3 rounded-full"/>
                        <div className="bg-gray-400 w-1/4 h-1 rounded-full"/>
                    </div>   

                    <div className="flex flex-col gap-1 text-black font-bold text-xs">
                        <h4> EXPERIENCE </h4>
                        <div className="bg-gray-300 w-full h-1 rounded-full"/>
                        <div className="bg-gray-200 w-1/2 h-1 rounded-full"/>
                    </div>

                    <div className="flex flex-col gap-1 text-black font-bold text-xs">
                        <h4> EDUCATION </h4>
                        <div className="bg-gray-300 w-full h-1 rounded-full"/>
                        <div className="bg-gray-200 w-1/2 h-1 rounded-full"/>
                    </div>
                    
                    <div className="flex flex-col gap-1 text-black font-bold text-xs">
                        <h4> SKILLS </h4>
                        <div className="bg-gray-300 w-full h-1 rounded-full"/>
                        <div className="bg-gray-200 w-1/2 h-1 rounded-full"/>
                    </div>
                </div>

                <hr/>
                
                <div className="flex justify-around py-4 items-center text-black">
                    <h4 className="font-bold text-blue"> Minimal </h4>
                    <button onClick={() => to('/sign-in')} className="bg-blue text-white cursor-pointer rounded-xl p-2"> Use Template </button>
                </div>
            </div>
        </div>
    )
}

export default TemplateCard