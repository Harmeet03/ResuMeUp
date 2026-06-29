import { useRef, useState } from 'react';
import downloadPDF from '../../utils/downloadPDF'
import Minimal from './Themes/Minimal';
import Professional from './Themes/Professional';

const Preview = ({ formData, theme }) => {

    const resumeRef = useRef();
    const [empty, setEmpty] = useState(false);

    if(theme === 'Professional'){
        return <Professional formData={formData}/>
    }
    else if(theme === 'Minimal'){
        return <Minimal formData={formData}/>
    }

    return(
        <div>
            <h2 className='text-2xl text-white px-8'> Please select the theme above </h2>
        </div>
    )

}

export default Preview;

{/* <button className="bg-cyan-700 text-white p-4 rounded-xl cursor-pointer w-3/4 m-auto block" onClick={
    () => {
        if(Object.values(formData).some(value => value === '' || value === null || value === undefined)){
            setEmpty(true);
        }
        else{
            downloadPDF(resumeRef, 'My_Resume.pdf');
            setEmpty(false);
        }
    }
}> Download PDF </button> */}