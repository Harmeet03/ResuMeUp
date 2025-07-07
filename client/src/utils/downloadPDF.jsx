import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// const downloadPDF = async (ref, filename = 'resume.pdf') => {
//     const element = ref.current;
    
//     if(!element) return;

//     const canvas = await html2canvas(element, { 
//         scale: 4,
//         useCORS: true,
//         backgroundColor: '#ffffff',
//     });

//     const imgData = canvas.toDataURL('image/png');
//     const pdf = new jsPDF('p', 'pt', 'a4');

//     const imgProps = pdf.getImageProperties(imgData);
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (imgProps.height * pdfWidth) / canvas.width + 40;
    
//     const leftPadding = 40;
//     const rightPadding = 40;
//     const topPadding = 40;
    
//     pdf.addImage(imgData, 'PNG', leftPadding, topPadding, pdfWidth - rightPadding, pdfHeight);
//     pdf.save(filename);
// }

const downloadPDF = async (ref, filename = 'resume.pdf') => {
    const element = ref.current;

    if (!element) return;

    const originalStyle = {
        width: element.style.width,
        zoom: document.body.style.zoom,
    };

    // ✅ Force consistent A4 layout for print
    element.style.width = '794px'; // ~210mm A4 width at 96 DPI
    document.body.style.zoom = '1.0';

    // ✅ Wait for DOM to settle
    await new Promise(resolve => setTimeout(resolve, 100));

    // ✅ Create canvas with high scale
    const canvas = await html2canvas(element, { 
        scale: 4,
        useCORS: true,
        backgroundColor: '#ffffff',
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'pt', 'a4');

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / canvas.width + 40;
    
    const leftPadding = 40;
    const rightPadding = 40;
    const topPadding = 40;
    
    pdf.addImage(imgData, 'PNG', leftPadding, topPadding, pdfWidth - rightPadding, pdfHeight);
    pdf.save(filename);

    // ✅ Restore original styles
    element.style.width = originalStyle.width;
    document.body.style.zoom = originalStyle.zoom;
};


export default downloadPDF;