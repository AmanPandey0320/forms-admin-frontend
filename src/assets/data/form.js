import { AiFillFileImage,AiOutlineConsoleSql,AiFillFileZip,AiFillFile,AiFillWindows } from 'react-icons/ai';
import { FaFileVideo,FaFileAudio,FaFilePdf,FaFileWord,FaFileExcel,FaFilePowerpoint,FaGitAlt,FaFileCode } from 'react-icons/fa';
import { IoDocumentText,IoLogoHtml5 } from 'react-icons/io5';
import { DiJavascript,DiCss3,DiAndroid,DiLinux } from 'react-icons/di';
import { SiCplusplus,SiJava,SiPython } from 'react-icons/si';
import { VscJson } from 'react-icons/vsc'

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
    text:<IoDocumentText size="1.5em" color="#455a64"/>,
    js:<DiJavascript size="1.5em" color="#ffeb3b"/>,
    html:<IoLogoHtml5 size="1.5em" color="#ff6f00"/>,
    css:<DiCss3 size="1.5em" color="#1976d2"/>,
    cpp:<SiCplusplus size="1.5em" color="#7703fc" />,
    java:<SiJava size="1.5em" color="#2d6fbf"/>,
    python:<SiPython size="1.5em" color="#f7df32"/>,
    sql:<AiOutlineConsoleSql size="1.5em" color="blue"/>,
    zip:<AiFillFileZip size="1.5em" color="#020094"/>,
    file:<AiFillFile size="1.5em" color="#ababab"/>,
    windows:<AiFillWindows size="1.5em" color="#00c3ff" />,
    git:<FaGitAlt size="1.5em" color="#ff6a00"/>,
    code:<FaFileCode size="1.5em" color="#ff00a2" />,
    apk:<DiAndroid size="1.5em" color="#80ff00" />,
    linux:<DiLinux size="1.5em"/>,
    json:<VscJson size="1.5em" color="#c7c722" />
}