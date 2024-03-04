import { Text } from '@/ui/components/elements';
import './style.scss';
import { FaTwitch, FaTelegram, FaYoutube, FaSteam } from 'react-icons/fa';
import Link from 'next/link';

export default function Page() {
    return(<>
        <section className='links'>
            <Text style='h1'>Мои ссылки</Text>
            <div className="links-content">
                <div className='links-section'>
                    <Text style='h2'>Социальные сети</Text>
                    <div className="links-links">
                        <Link target='_blank' href='https://t.me/XAXdanil' className="link" id='telegram'>
                            <FaTelegram />
                            <Text style='h3'>Телеграм</Text>
                        </Link>
                        <Link target='_blank' href='https://www.twitch.tv/xaxdanil' className="link" id='twitch'>
                            <FaTwitch />
                            <Text style='h3'>Твич</Text>
                        </Link>
                        <Link target='_blank' href='https://www.youtube.com/channel/UCWDy4lJHOunnG3PJyhF1dUw' className="link" id='youtube'>
                            <FaYoutube />
                            <Text style='h3'>Ютуб</Text>
                        </Link>
                        <Link target='_blank' href='https://vkplay.live/xax' className="link" id='vkplay'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 100" fill="none">
                                <g clip-path="url(#clip0_2_2)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.52944 7.02944C0.5 14.0589 0.5 25.3726 0.5 48V52C0.5 74.6274 0.5 85.9411 7.52944 92.9706C14.5589 100 25.8726 100 48.5 100H52.5C75.1274 100 86.4411 100 93.4706 92.9706C100.5 85.9411 100.5 74.6274 100.5 52V48C100.5 25.3726 100.5 14.0589 93.4706 7.02944C86.4411 0 75.1274 0 52.5 0H48.5C25.8726 0 14.5589 0 7.52944 7.02944ZM17.3752 30.4169C17.9168 56.4169 30.9167 72.0418 53.7084 72.0418H55.0003V57.1668C63.3753 58.0001 69.7082 64.1252 72.2498 72.0418H84.0835C80.8335 60.2085 72.2914 53.6668 66.9581 51.1668C72.2914 48.0835 79.7915 40.5835 81.5831 30.4169H70.8328C68.4995 38.6669 61.5836 46.1668 55.0003 46.8751V30.4169H44.2499V59.2501C37.5833 57.5835 29.1668 49.5002 28.7918 30.4169H17.3752Z" fill="currentColor"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_2_2">
                                <rect width="100" height="100" fill="white" transform="translate(0.5)"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <Text style='h3'>VK Play Live</Text>
                        </Link>
                    </div>
                </div>
                <div className='links-section'>
                    <Text style='h2'>Поддержка</Text>
                    <div className="links-links">
                        <Link target='_blank' href='https://boosty.to/xaxdanil' className="link" id='boosty'>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="157.114746" height="188.999985" viewBox="0 0 157.115 189" fill="none">
                            <path id="path" d="M5.01245 112.9L37.6125 0L87.7126 0L77.6125 35C77.5127 35.2 77.4126 35.4 77.3125 35.6L50.7126 128L75.5127 128C65.1125 153.9 57.0127 174.2 51.2126 188.9C5.4126 188.4 -7.38745 155.6 3.8125 116.8L5.01245 112.9ZM51.4126 189L111.812 102.1L86.2126 102.1L108.513 46.4C146.713 50.4 164.713 80.5 154.113 116.9C142.812 156 97.0125 189 52.4126 189C52.0125 189 51.7126 189 51.4126 189Z" fill="currentColor" fillOpacity="1.000000" fillRule="nonzero"/>
                        </svg>
                            <Text style='h3'>Бусти</Text>
                        </Link>
                        <Link target='_blank' href='https://steamcommunity.com/tradeoffer/new/?partner=1530618203&token=eQXEa4Bq' className="link" id='steam'>
                            <FaSteam />
                            <Text style='h3'>Стим трейд</Text>
                        </Link>
                        <Link target='_blank' href='https://www.tinkoff.ru/baf/AMFGRWEk7ni' className="link" id='tinkoff'>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="46.526306" height="47.133392" viewBox="0 0 46.5263 47.1334" fill="none">
                                <path id="path" d="M0 0L46.5263 0L46.5263 23.7023C46.5263 29.7802 43.2893 35.3839 38.0263 38.4343L23.2632 47.1334L8.51556 38.4343C3.25262 35.4066 0.022583 29.7802 0.022583 23.7023L0 0Z" fill="currentColor" fillOpacity="1.000000" fillRule="nonzero"/>
                                <path id="path" d="M12.5263 12.4726L12.5263 19.8385C13.5428 18.7088 15.3724 17.9405 17.4504 17.9405L19.7318 17.9405L19.7318 26.5041C19.7318 28.7861 19.1219 30.7745 18.1959 31.8816L28.3273 31.8816C27.4013 30.7745 26.8421 28.7861 26.8421 26.5041L26.8421 17.9405L29.061 17.9405C31.1617 17.9405 33.0061 18.7088 34 19.8385L34 12.4726L12.5263 12.4726Z" fill="#3D3D3D" fillOpacity="1.000000" fillRule="evenodd"/>
                            </svg>
                            <Text style='h3'>Тинькофф</Text>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
