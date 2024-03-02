import { Text } from '@/ui/components/elements';
import './style.scss';
import { FaTwitch, FaTelegram, FaYoutube, FaSteam } from 'react-icons/fa';
import { RiKickFill } from "react-icons/ri";
import Link from 'next/link';

export default function Page() {
    return(<>
        <section className='server'>
            <Text style='h1'>Сервер</Text>
            <div className="container">
                <Text style='h2'>Информация</Text>
                <Text style='h3'>IP:  f1.skycloud.su:25181</Text>
                <Text style='h3'>Версия: 1.20.4 Java Edition</Text>
            </div>
            <div className="container">
                <Text style='h2'>Описание</Text>
                <div className="text">
                    <Text style='p'>Сервер открылся совсем недавно 
                    и пока бесплатный.</Text>
                    <Text style='p'>Он полностью ванильный (без модов) и 
                    без приватов, но если вы будете грифферить и/или мешать 
                    другим игрокам вы будете заблокированы.</Text>
                </div>
            </div>
        </section>
    </>)
}
