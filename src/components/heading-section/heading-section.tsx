import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import './heading-section.scss'


export default function HeadingSection() {
    return <div className="heading-section">
        <ArrowBackIosRoundedIcon className='icon'></ArrowBackIosRoundedIcon>
        <p>This Month</p>
        <ArrowForwardIosRoundedIcon className='icon'></ArrowForwardIosRoundedIcon>
    </div>
}