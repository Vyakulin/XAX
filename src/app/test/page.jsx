import { Button, Text, Input, Logo } from '@/ui/components/elements';
import './style.scss';
import Link from 'next/link';

export default function Page() {
    return (<>
        <div className="test">
            <div className='text'>
                <Text style='h1'>Header 1</Text>
                <Text style='h2'>Header 2</Text>
                <Text style='h3'>Header 3</Text>
                <Text style='p'>Paragraph</Text>
                <Text style='sm'>Small</Text>
                <Text style='mn'>Mini</Text>
                <Link href='#' className='lk-white'>
                    <Text>Link</Text>
                </Link>
                <Link href='#' className='lk-color'>
                    <Text>Link</Text>
                </Link>
            </div>
            <div className='buttons'>
                <Button>Color</Button>
                <Button style='color-border'>Color-border</Button>
                <Button style='white'>White</Button>
                <Button style='white-border'>White-border</Button>
            </div>
            <div className="inputs">
                <Input>Border</Input>
                <Input style='border-full'>Border</Input>
                <Input style='full'>Border</Input>
            </div>
            <div className="other">
                <Input type='checkbox'></Input>
                <Input type='radio' name='test'></Input>
                <Input type='radio' name='test'></Input>
                <Input type='toggle'></Input>
                <Link href='#' className='lk-white'>
                    <Logo />
                </Link>
            </div>
        </div>
    </>)
}