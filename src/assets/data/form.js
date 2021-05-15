import { AiFillFileImage } from 'react-icons/ai';
import { FaFileVideo,FaFileAudio,FaFilePdf,FaFileWord,FaFileExcel,FaFilePowerpoint } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';


export const InputTypes = [
    {
        id:1,
        value:'ST',
        text:'Small text'
    },
    {
        id:2,
        value:'PG',
        text:'Paragraph'
    },
    {
        id:3,
        value:'SO',
        text:'MCQ(single)'
    },
    {
        id:4,
        value:'MO',
        text:'MCQ(multi)'
    },
    {
        id:5,
        value:'DD',
        text:'Date/Time'
    },
    {
        id:6,
        value:'FU',
        text:'File upload'
    }
];

export const fileIcons = {
    image:<AiFillFileImage size="1.5em" color="#1967d2"/>,
    video:<FaFileVideo size="1.5em" color="#512da8" />,
    audio:<FaFileAudio size="1.5em" color="#f57c00"/>,
    pdf:<FaFilePdf size="1.5em" color="#bf360c"/>,
    word:<FaFileWord size="1.5em" color="#0d47a1"/>,
    excel:<FaFileExcel size="1.5em" color="#194D33"/>,
    powerPoint:<FaFilePowerpoint size="1.5em" color="#e65100"/>,
    text:<IoDocumentText size="1.5em" color="#455a64"/>
}