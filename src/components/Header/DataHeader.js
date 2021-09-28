import { AiOutlineHome } from "react-icons/ai";
import { BsCollectionPlay } from "react-icons/bs";
import { FaRegCompass } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { RiHistoryFill } from "react-icons/ri";

const DataHeader = [
    {
        icon: <AiOutlineHome />,
        title: 'Início',
        path: '/'
    },
    {
        icon: <FaRegCompass />,
        title: 'Explorar',
        path: '/explorar'
    },
    {
        icon: <BsCollectionPlay />,
        title: 'Inscrições',
        path: '/inscricoes'
    },
    {
        icon: <MdVideoLibrary />,
        title: 'Biblioteca',
        path: '/biblioteca'
    },
    {
        icon: <RiHistoryFill />,
        title: 'histórico',
        path: '/historico'
    },

]

export default DataHeader
