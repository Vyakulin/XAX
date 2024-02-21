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
                        <Link target='_blank' href='https://trovo.live/s/XAXdanil/230463298' className="link" id='trovo'>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="22.217407" height="21.969238" viewBox="0 0 22.2174 21.9692" fill="none">
                                <path id="path" d="M15.2001 0.00344849C15.5 0.00344849 15.7001 0.203461 15.7001 0.503448L15.7001 0.603455L15 3.80344C15 3.90344 15.1001 4.10345 15.2001 4.10345L21.7001 4.10345C22 4.10345 22.2924 4.30344 22.2001 4.70346L20.7001 11.0035C20.6001 11.3035 20.4 11.4035 20.1001 11.4035L16.6001 11.2035C15.5 11.2035 14.3 11.5035 13.4 12.5035C12.2001 13.7035 12.1001 15.5035 12.6001 16.8035C13.1001 18.1035 14.5 18.8035 15.9 18.5035C17 18.3035 17.6001 17.2035 17.5 16.3035C17.4 15.3035 17 15.0035 16.4 15.0035C15.8 15.0035 15.6001 15.3035 15.6001 15.6035C15.6001 15.9035 15.7001 16.1035 15.9 16.3035C16.2001 16.6035 15.6001 17.5035 14.8 17.0035C14.3 16.7035 14 16.1035 14.1001 15.2035C14.2001 14.1035 15.1001 13.1035 16.7001 13.1035C18.3 13.1035 19.5 14.1035 19.8 15.6035C20.3 17.5035 19.3 19.8035 17 21.0035C14.2001 22.5035 9.5 22.4035 6.90002 19.6035C5.40002 18.0035 4.90002 15.9035 5 14.0035C5 13.4035 5.09998 12.7035 5.30005 12.1035C5.30005 11.9035 5.19995 11.7035 5 11.6035L0.5 11.6035C0.199951 11.6035 0 11.3035 0 11.0035L0 10.9035L1.40002 4.80344C1.5 4.40344 1.80005 4.20346 2.19995 4.20346L6.5 4.20346C6.69995 4.10345 6.90002 4.00345 7 3.70346L7.69995 0.603455C7.80005 0.203461 8.20007 0.00344849 8.5 0.00344849L15.2001 0.00344849Z" fill='currentColor' fillOpacity="1.000000" fillRule="evenodd"/>
                            </svg>
                            <Text style='h3'>Трово</Text>
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
                                <path id="path" d="M12.5263 12.4726L12.5263 19.8385C13.5428 18.7088 15.3724 17.9405 17.4504 17.9405L19.7318 17.9405L19.7318 26.5041C19.7318 28.7861 19.1219 30.7745 18.1959 31.8816L28.3273 31.8816C27.4013 30.7745 26.8421 28.7861 26.8421 26.5041L26.8421 17.9405L29.061 17.9405C31.1617 17.9405 33.0061 18.7088 34 19.8385L34 12.4726L12.5263 12.4726Z" fill="#E8E8E8" fillOpacity="1.000000" fillRule="evenodd"/>
                            </svg>
                            <Text style='h3'>Тинькофф</Text>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>)
}